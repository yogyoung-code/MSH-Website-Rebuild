/**
 * Copy Deck v4.1 Appendix — 禁用词/高风险措辞清单
 * 命中后：Portable Text 内联标红 + 发布阻断（legal_review 必经）
 */

export interface ForbiddenPhrase {
  pattern: RegExp
  severity: 'block' | 'warn'
  reason: string
  suggestion?: string
}

export const FORBIDDEN_PHRASES: ForbiddenPhrase[] = [
  // 绝对化宣称
  { pattern: /\b(guarantee(d)?|guaranteed outcomes?)\b/i, severity: 'block', reason: 'Absolute promise (regulatory risk)', suggestion: 'Use "designed to" / "aims to"' },
  { pattern: /\b(cure|cures|curing)\b/i, severity: 'block', reason: 'Medical outcome claim', suggestion: 'Use "support" / "assist"' },
  { pattern: /\b(FDA[- ]approved|CE[- ]marked)\b/i, severity: 'warn', reason: 'Regulatory claim — requires Verified ProofPoint' },
  { pattern: /\bclinically proven\b/i, severity: 'warn', reason: 'Requires peer-reviewed citation' },
  { pattern: /\b(best|#1|leading|largest)\b(?! [a-z]+ physician network)/i, severity: 'warn', reason: 'Superlative — must be source-cited' },

  // 中国语境常见高风险
  { pattern: /(包治|根治|全球第一|世界第一|最大)/g, severity: 'block', reason: '绝对化用语违反广告法' },
  { pattern: /(权威|领先)/g, severity: 'warn', reason: '需附权威来源及年份' },

  // AI 虚假宣称
  { pattern: /\b(fully autonomous|no human in the loop|zero error)\b/i, severity: 'block', reason: 'Contradicts AI+PITL positioning' },
  { pattern: /\bAI (doctor|physician)\b/i, severity: 'block', reason: 'Misrepresents PITL model' },

  // 合规口径
  { pattern: /\b(HIPAA compliant)\b/i, severity: 'warn', reason: 'Verify active BAA + audit before use' },
  { pattern: /\b(GDPR compliant)\b/i, severity: 'warn', reason: 'Must cite DPO sign-off' },
]

export function scanForbidden(text: string): Array<{ phrase: string; severity: string; reason: string; suggestion?: string }> {
  const hits: Array<{ phrase: string; severity: string; reason: string; suggestion?: string }> = []
  for (const rule of FORBIDDEN_PHRASES) {
    const matches = text.match(rule.pattern)
    if (matches) {
      matches.forEach((m) => hits.push({ phrase: m, severity: rule.severity, reason: rule.reason, suggestion: rule.suggestion }))
    }
  }
  return hits
}
