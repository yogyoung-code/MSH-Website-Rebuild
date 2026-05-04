import { lintForbidden } from './forbiddenPhrases'

/**
 * Validators · v1.0
 *   - kebabSlug:         slug 走 kebab-case
 *   - minMetrics(n):     数组长度下限
 *   - noForbiddenText:   文本字段 forbiddenPhrases lint
 *   - claimBoundAndVerified: claim 发布门控（见 webhooks/claim-audit.ts 做最终 gate）
 */

export const kebabSlug = (Rule: any) =>
  Rule.required().custom((slug: any) => {
    const v = slug?.current
    if (!v) return 'Slug is required.'
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(v)) return 'Slug must be kebab-case (a-z, 0-9, -).'
    return true
  })

export const minMetrics = (n: number) => (Rule: any) =>
  Rule.min(n).error(`At least ${n} metrics required.`)

export const noForbiddenText = (Rule: any) =>
  Rule.custom((text: string) => {
    const hits = lintForbidden(text)
    const errors = hits.filter((h) => h.severity === 'error')
    if (errors.length > 0) {
      return `Forbidden phrase: ${errors.map((e) => `"${e.phrase}" (${e.reason})`).join('; ')}`
    }
    const warns = hits.filter((h) => h.severity === 'warn')
    if (warns.length > 0) {
      return { level: 'warning' as const, message: `Review: ${warns.map((w) => `"${w.phrase}"`).join(', ')}` }
    }
    return true
  })

/**
 * claimBoundAndVerified · Studio 级提示
 * 最终 gate 在 webhook，但 Studio 端给出即时反馈。
 */
export const claimBoundAndVerified = (Rule: any) =>
  Rule.custom(async (value: any, ctx: any) => {
    if (!value?._ref) return 'Claim reference required.'
    const client = ctx?.getClient?.({ apiVersion: '2024-10-01' })
    if (!client) return true
    const c = await client.fetch(
      `*[_id == $id][0]{ "pp": proofPoint->{evidenceTier} }`,
      { id: value._ref },
    )
    if (!c?.pp) return 'Claim is not bound to a ProofPoint.'
    if (c.pp.evidenceTier !== 'verified') {
      return { level: 'warning' as const, message: `ProofPoint tier is ${c.pp.evidenceTier}; publish will be blocked until verified.` }
    }
    return true
  })
