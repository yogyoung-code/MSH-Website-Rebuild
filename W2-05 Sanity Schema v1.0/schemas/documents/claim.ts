import { defineType, defineField } from 'sanity'

/**
 * Claim · 合规声明池
 * 文案中任何可被外部质询的表述（数据、资质、对比优势）都需登记。
 * 发布前必须绑定 ProofPoint 且其 tier=verified。
 */
export default defineType({
  name: 'claim',
  title: 'Claim',
  type: 'document',
  fields: [
    defineField({
      name: 'statement',
      title: 'Claim Statement',
      type: 'localizedText',
      validation: (Rule) => Rule.required(),
      description: 'The literal phrasing used on the site.',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'data_metric',
          'regulatory_credential',
          'competitive_comparison',
          'client_outcome',
          'AI_capability',
          'network_scale',
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'proofPoint',
      title: 'Bound ProofPoint',
      type: 'reference',
      to: [{ type: 'proofPoint' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'riskLevel',
      title: 'Risk Level',
      type: 'string',
      options: {
        list: [
          { title: 'Low', value: 'low' },
          { title: 'Medium', value: 'medium' },
          { title: 'High (legal sign-off required)', value: 'high' },
        ],
      },
      initialValue: 'medium',
    }),
    defineField({
      name: 'usedOn',
      title: 'Used On (Pages)',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'page' }, { type: 'solution' }, { type: 'pilotOffer' }, { type: 'caseStudy' }] },
      ],
      description: 'Auto-populated by reverse ref when possible; manual curation allowed.',
    }),
    defineField({
      name: 'lastAuditAt',
      title: 'Last Audited At',
      type: 'datetime',
    }),
    defineField({
      name: 'auditor',
      title: 'Auditor',
      type: 'string',
    }),
  ],
  preview: {
    select: { statement: 'statement.en', risk: 'riskLevel' },
    prepare: ({ statement, risk }) => ({
      title: statement || '(claim)',
      subtitle: `risk: ${risk}`,
    }),
  },
})
