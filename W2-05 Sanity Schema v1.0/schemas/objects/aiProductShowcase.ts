import { defineType, defineField } from 'sanity'

/**
 * AI Product Showcase · v3.0
 * Spec §3.2 / §3.4 — Live Showcase 双 Tab 实时 demo 的 CMS 数据契约。
 *
 * 字段说明:
 *   - accentColor:   闭合 enum,与 W1-04 v1.2 product-accent palette 对齐 (§8.12 gate)
 *   - iconRef:       lucide-react 风格 icon 资产 (子页与卡片复用)
 *   - demoScenario:  portable text — chat / table / forest plot 等结构化内容
 *   - demoLanguage:  默认 EN; CN 切换器是否暴露由 page-level 决定
 *   - citations:     ProofPoint refs — demo 内每条事实锚点必须挂得到
 *   - signedBy:      Medical Writer + Clinical Reviewer 双签 (§8.15 gate)
 *
 * publish gates 在 Task 4 (aiProductValidators.ts) 集成,本文件只做字段定义。
 */
export default defineType({
  name: 'aiProductShowcase',
  title: 'AI Product Showcase',
  type: 'object',
  fields: [
    defineField({
      name: 'accentColor',
      title: 'Accent Color',
      type: 'string',
      options: {
        list: [
          { title: 'Blue (DeepEvidence)', value: 'blue' },
          { title: 'Violet (SeekEvidence)', value: 'violet' },
          { title: 'Teal', value: 'teal' },
          { title: 'Amber', value: 'amber' },
          { title: 'Emerald', value: 'emerald' },
        ],
        layout: 'radio',
      },
      description:
        '产品强调色,落到 W1-04 v1.2 --product-accent-{slug} palette。 §8.12 gate 强制 enum 内取值。',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'iconRef',
      title: 'Product Icon',
      type: 'image',
      options: { hotspot: false },
      fields: [{ name: 'alt', type: 'string', title: 'Alt' }],
      description: 'Showcase Tab + Card Grid 共用。 资产 404 时降级为产品名首字母 monogram (§3.7)。',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'demoScenario',
      title: 'Demo Scenario (Portable Text)',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      description:
        'chat 气泡 / 数据表 / forest plot 等内容。 严禁 PHI/PII (姓名/身份证/手机/医保号),由 §8.9 PHI scanner 拦截。',
      validation: (R) => R.required().min(1),
    }),
    defineField({
      name: 'demoLanguage',
      title: 'Demo Language',
      type: 'string',
      options: {
        list: [
          { title: 'English (default)', value: 'en' },
          { title: '中文', value: 'cn' },
        ],
        layout: 'radio',
      },
      initialValue: 'en',
      description: 'EN 主显示。 CN 切换器是否对外暴露由 page-level 决定。',
    }),
    defineField({
      name: 'citations',
      title: 'Citations (ProofPoint refs)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'proofPoint' }] }],
      description:
        'demo 内每条医学事实必须挂到一条 ProofPoint。 ADA / KDIGO / KEYNOTE 等指南/试验全部走 ProofPoint。',
    }),
    defineField({
      name: 'signedBy',
      title: 'PITL Sign-off',
      type: 'aiProductSignedBy',
      description: 'Medical Writer + Clinical Reviewer + signedAt 三字段必填 (§8.15 gate)。',
      validation: (R) => R.required(),
    }),
  ],
})
