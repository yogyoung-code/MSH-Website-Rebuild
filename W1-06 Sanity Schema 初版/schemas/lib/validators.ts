/**
 * 通用校验函数：Go-Live Gate 相关
 */

import type { Rule } from 'sanity'
import { scanForbidden } from './forbiddenPhrases'

/** CaseStudy 必须 ≥3 个量化指标（Copy Deck §Case Studies 规则） */
export const minMetrics = (n = 3) => (Rule: Rule) =>
  Rule.custom((metrics: unknown) => {
    if (!Array.isArray(metrics) || metrics.length < n) {
      return `Case Study must include at least ${n} quantified metrics before publish.`
    }
    return true
  })

/** 发布状态下必须已绑定 Verified ProofPoint */
export const publishRequiresVerified = (Rule: Rule) =>
  Rule.custom((doc: any) => {
    if (doc?.status !== 'published') return true
    const claims = doc?.claims || []
    const unverified = claims.filter((c: any) => c?.proofPoint?.tier !== 'verified')
    if (unverified.length > 0) {
      return `All claims must be bound to a "verified" ProofPoint before publishing. ${unverified.length} claim(s) unverified.`
    }
    return true
  })

/** Portable Text 禁用词扫描 */
export const noForbiddenPhrases = (Rule: Rule) =>
  Rule.custom((blocks: any) => {
    if (!Array.isArray(blocks)) return true
    const text = blocks
      .filter((b) => b?._type === 'block')
      .map((b) => (b.children || []).map((c: any) => c.text || '').join(''))
      .join('\n')
    const hits = scanForbidden(text)
    const blockers = hits.filter((h) => h.severity === 'block')
    if (blockers.length > 0) {
      return `Forbidden phrase(s) detected: ${blockers.map((h) => `"${h.phrase}" — ${h.reason}`).join('; ')}`
    }
    return true
  })

/** Slug kebab-case + ASCII-only */
export const kebabSlug = (Rule: Rule) =>
  Rule.custom((slug: any) => {
    const v = typeof slug === 'string' ? slug : slug?.current
    if (!v) return 'Slug is required'
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(v)) {
      return 'Slug must be lowercase kebab-case, ASCII only (a-z, 0-9, -).'
    }
    return true
  })

/** CN 仅允许在白名单页类型 */
const CN_WHITELIST = ['homepage', 'about', 'legal', 'investor_relations']
export const cnLockGate = (pageType: string) => (Rule: Rule) =>
  Rule.custom((cnValue: unknown) => {
    if (!cnValue) return true
    if (!CN_WHITELIST.includes(pageType)) {
      return `CN content is not permitted for pageType="${pageType}". Only Homepage/About/Legal/IR are bilingual.`
    }
    return true
  })
