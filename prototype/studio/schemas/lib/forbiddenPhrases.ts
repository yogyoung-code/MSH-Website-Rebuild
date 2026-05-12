/**
 * Forbidden Phrases · v1.0
 * 分类重写：FTC / NMPA / FDA / Overpromise / Unsourced-quant
 * 用法：Studio 文本字段在输入时命中即阻塞发布；前端渲染前再 lint 一次。
 */

export type Category = 'FTC' | 'NMPA' | 'FDA' | 'overpromise' | 'unsourced_quant'

export interface ForbiddenPhrase {
  phrase: string
  category: Category
  severity: 'error' | 'warn'
  reason: string
  suggestion?: string
}

export const forbiddenPhrases: ForbiddenPhrase[] = [
  // ── FTC (U.S. advertising) ─────────────────────────────────────
  { phrase: 'proven',          category: 'FTC', severity: 'error', reason: 'FTC: outcome claims require substantiation',  suggestion: 'published · peer-reviewed · verified' },
  { phrase: 'guaranteed',      category: 'FTC', severity: 'error', reason: 'FTC: outcome guarantee is regulated' },
  { phrase: 'AI that cures',   category: 'FTC', severity: 'error', reason: 'FTC + medical claim' },
  { phrase: 'best in class',   category: 'FTC', severity: 'warn',  reason: 'Superlative without comparison set' },
  { phrase: '#1',              category: 'FTC', severity: 'warn',  reason: 'Ranking requires cited source' },

  // ── NMPA (China) ───────────────────────────────────────────────
  { phrase: '批准',             category: 'NMPA', severity: 'warn',  reason: 'Ensure approval is for the stated indication' },
  { phrase: '最快',             category: 'NMPA', severity: 'error', reason: 'Superlative speed claim' },
  { phrase: '独家代理',         category: 'NMPA', severity: 'warn',  reason: 'Verify exclusive agency wording is contractually accurate' },

  // ── FDA (U.S. medical) ─────────────────────────────────────────
  { phrase: 'FDA approved',    category: 'FDA', severity: 'error', reason: 'Use only after bound to a specific NDA/BLA number' },
  { phrase: 'expedited',       category: 'FDA', severity: 'warn',  reason: 'Only when Priority Review / Breakthrough / Accelerated Approval granted' },
  { phrase: 'Breakthrough',    category: 'FDA', severity: 'warn',  reason: 'Only when Breakthrough Therapy Designation is public' },

  // ── Overpromise (general marketing) ────────────────────────────
  { phrase: 'revolutionize',   category: 'overpromise', severity: 'warn',  reason: 'Overused; reframe to specific outcome' },
  { phrase: 'cutting-edge',    category: 'overpromise', severity: 'warn',  reason: 'Prefer specific capability language' },
  { phrase: 'world-class',     category: 'overpromise', severity: 'warn',  reason: 'Subjective without evidence' },
  { phrase: 'seamless',        category: 'overpromise', severity: 'warn',  reason: 'Claim friction proof if kept' },
  { phrase: '10x faster',      category: 'overpromise', severity: 'error', reason: 'Magnitude claim requires baseline + method' },

  // ── Unsourced quantitative ─────────────────────────────────────
  { phrase: 'improves by',     category: 'unsourced_quant', severity: 'error', reason: 'Must bind to a claim with evidence' },
  { phrase: 'reduces',         category: 'unsourced_quant', severity: 'warn',  reason: 'Quantitative reduction needs source' },
  { phrase: 'industry leading',category: 'unsourced_quant', severity: 'warn',  reason: 'Name the industry + source' },

  // ── v3.0 AI Platform spec §7 #13–18 · Act 2 boundary clauses ───
  // Status badge / product card / showcase demo prose 必过 lint。
  // 注:#19 (Limited Preview accessUrl 内部 redirect) 由 §8.13 validator 拦截,不入此文件。
  { phrase: 'industry-leading',     category: 'FTC', severity: 'error', reason: 'Spec §7 #13 — 业内最大/领先 类超级形容词,在 AI Platform 上下文禁用',  suggestion: 'audited evidence stack · physician-verified' },
  { phrase: '行业第一',             category: 'FTC', severity: 'error', reason: 'Spec §7 #13 — 业内第一类绝对宣称' },
  { phrase: '行业领先',             category: 'FTC', severity: 'error', reason: 'Spec §7 #13 — 业内领先类绝对宣称' },
  { phrase: 'largest medical AI',   category: 'FTC', severity: 'error', reason: 'Spec §7 #13 — 最大化级超级形容词',  suggestion: 'physician network of 3.3M+ · indexed corpus 250M+' },
  { phrase: '最大医疗 AI',          category: 'FTC', severity: 'error', reason: 'Spec §7 #13 — 最大医疗 AI 类绝对宣称' },
  { phrase: 'replaces physicians',  category: 'FDA', severity: 'error', reason: 'Spec §7 #13 — AI 取代执业医师宣称违反 PITL 原则',  suggestion: 'AI proposes; named clinicians sign every section.' },
  { phrase: '取代医生',             category: 'FDA', severity: 'error', reason: 'Spec §7 #13 — AI 取代执业医师宣称违反 PITL 原则' },
  { phrase: '100% accurate',        category: 'FTC', severity: 'error', reason: 'Spec §7 #13 — 绝对准确率宣称' },
  { phrase: '100% 准确',            category: 'FTC', severity: 'error', reason: 'Spec §7 #13 — 绝对准确率宣称' },
  { phrase: 'AI doctor',            category: 'FDA', severity: 'error', reason: 'Spec §7 #13 — AI 不可冒充执业医师身份',  suggestion: 'Clinical AI · Point of Care' },
  { phrase: 'AI 医生',              category: 'FDA', severity: 'error', reason: 'Spec §7 #13 — AI 不可冒充执业医师身份' },
  // 注:'cure' 作为 EN 子串会误命中 secure/procure/obscure 等业务用词,降为 warn,由临床/法务终审。
  { phrase: 'cure',                 category: 'FDA', severity: 'warn',  reason: 'Spec §7 #13 — 医学治愈宣称需临床证据;避免对症状管理类产品使用 (substring matches secure/procure — manual review required)' },
  { phrase: '治愈',                 category: 'FDA', severity: 'error', reason: 'Spec §7 #13 — 医学治愈宣称需临床证据' },
]

/**
 * Lint a string against the phrase list. Returns matched phrases.
 */
export function lintForbidden(text: string): ForbiddenPhrase[] {
  if (!text) return []
  const lc = text.toLowerCase()
  return forbiddenPhrases.filter((p) => lc.includes(p.phrase.toLowerCase()))
}
