/**
 * Claim Audit Webhook · Vercel Edge Function
 *
 * Trigger: Sanity publish webhook (POST w/ secret header).
 * Responsibility:
 *   1. For every document being published, scan referenced claims.
 *   2. Block publish if any claim has:
 *        - proofPoint == null
 *        - proofPoint.evidenceTier != 'verified'
 *   3. Compute `insight.readTime` on publish.
 *   4. Emit Slack alert to #legal-compliance on block.
 *
 * Security:
 *   - Verify x-sanity-webhook-signature header
 *   - Use server-side sanity token (write) for stamping audit fields
 */

import type { NextRequest } from 'next/server'

export const config = { runtime: 'edge' }

interface SanityDoc {
  _id: string
  _type: string
  [k: string]: any
}

const SANITY_PROJECT = process.env.SANITY_PROJECT_ID!
const SANITY_DATASET = process.env.SANITY_DATASET || 'production'
const SANITY_TOKEN = process.env.SANITY_WRITE_TOKEN!
const SLACK_WEBHOOK = process.env.SLACK_COMPLIANCE_WEBHOOK!
const SIGNATURE_SECRET = process.env.SANITY_WEBHOOK_SECRET!

async function verify(req: NextRequest): Promise<boolean> {
  const sig = req.headers.get('sanity-webhook-signature') || ''
  // Pseudo: real impl uses @sanity/webhook helper. Kept simple here.
  return sig.length > 0 && sig.includes(SIGNATURE_SECRET.slice(0, 8))
}

async function groq(q: string, params: Record<string, any> = {}): Promise<any> {
  const url = `https://${SANITY_PROJECT}.api.sanity.io/v2024-10-01/data/query/${SANITY_DATASET}?query=${encodeURIComponent(q)}&${Object.entries(params)
    .map(([k, v]) => `$${k}=${encodeURIComponent(JSON.stringify(v))}`)
    .join('&')}`
  const r = await fetch(url, { headers: { Authorization: `Bearer ${SANITY_TOKEN}` } })
  return (await r.json()).result
}

async function alertSlack(msg: string) {
  if (!SLACK_WEBHOOK) return
  await fetch(SLACK_WEBHOOK, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ text: `:warning: MSH publish blocked — ${msg}` }),
  })
}

function computeReadTime(body: any[]): number {
  const text = JSON.stringify(body || '').replace(/[^\p{L}\p{N}\s]/gu, ' ')
  const words = text.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

export default async function handler(req: NextRequest): Promise<Response> {
  if (req.method !== 'POST') return new Response('method not allowed', { status: 405 })
  if (!(await verify(req))) return new Response('bad signature', { status: 401 })

  const doc = (await req.json()) as SanityDoc
  if (!doc?._id) return new Response('no doc', { status: 400 })

  // 1 · compute readTime for insight
  if (doc._type === 'insight') {
    const readTime = computeReadTime(doc.body)
    // patch via mutation API (pseudo)
    // await mutate(doc._id, { readTime })
    console.info(`[claim-audit] readTime ${readTime}m for ${doc._id}`)
  }

  // 2 · fetch all claims referenced from this doc
  const claims = await groq(
    `*[_type == "claim" && _id in *[_id == $id][0].claimRefs[]._ref]{
      _id, statement, "pp": proofPoint->{_id, evidenceTier}
    }`,
    { id: doc._id },
  )

  const blocking = (claims || []).filter((c: any) => !c.pp || c.pp.evidenceTier !== 'verified')

  if (blocking.length > 0) {
    const ids = blocking.map((c: any) => c._id).join(', ')
    await alertSlack(`${doc._id} (${doc._type}) — ${blocking.length} claim(s) unverified: ${ids}`)
    return new Response(
      JSON.stringify({ ok: false, blocked: true, claims: blocking }),
      { status: 409, headers: { 'content-type': 'application/json' } },
    )
  }

  return new Response(JSON.stringify({ ok: true }), { headers: { 'content-type': 'application/json' } })
}
