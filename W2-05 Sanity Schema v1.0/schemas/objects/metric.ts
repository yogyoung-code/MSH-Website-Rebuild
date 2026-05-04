import { defineType, defineField } from 'sanity'

/**
 * Quantified Metric
 * CaseStudy 必须 ≥3。数值 + 单位 + 来源 + 年份必填。
 */
export default defineType({
  name: 'metric',
  title: 'Metric',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'localizedString',
      description: 'e.g. "Site activation time reduction"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'e.g. "38%", "2.1M", "< 14 days"',
      validation: (Rule) => Rule.required().max(20),
    }),
    defineField({
      name: 'direction',
      title: 'Direction',
      type: 'string',
      options: {
        list: [
          { title: '↑ Increase', value: 'up' },
          { title: '↓ Decrease', value: 'down' },
          { title: '→ Neutral', value: 'neutral' },
        ],
        layout: 'radio',
      },
      initialValue: 'up',
    }),
    defineField({
      name: 'sourceYear',
      title: 'Source Year',
      type: 'number',
      validation: (Rule) => Rule.required().min(2015).max(new Date().getFullYear()),
    }),
    defineField({
      name: 'sourceNote',
      title: 'Source / Footnote',
      type: 'string',
      description: 'e.g. "Internal pilot, 2025-Q3" or "JAMA 2024;331(2):123-130"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'proofPoint',
      title: 'Bound ProofPoint',
      type: 'reference',
      to: [{ type: 'proofPoint' }],
      description: 'Required before parent document can be published.',
    }),
  ],
  preview: {
    select: { label: 'label.en', value: 'value', dir: 'direction' },
    prepare: ({ label, value, dir }) => ({
      title: `${dir === 'up' ? '↑' : dir === 'down' ? '↓' : '→'} ${value}`,
      subtitle: label,
    }),
  },
})
