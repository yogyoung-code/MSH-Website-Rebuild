import { defineType, defineField } from 'sanity'

/**
 * Client Reference · 客户 Logo / 引述
 * 默认匿名化；consentLevel 决定前端渲染策略。
 */
export default defineType({
  name: 'clientReference',
  title: 'Client Reference',
  type: 'document',
  fields: [
    defineField({
      name: 'internalName',
      title: 'Internal Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Full legal name — Studio only, never rendered.',
    }),
    defineField({
      name: 'displayName',
      title: 'Display Name',
      type: 'localizedString',
      description: 'Anonymized fallback, e.g. "Top-10 US Pharma".',
    }),
    defineField({
      name: 'logo',
      title: 'Logo (only when consentLevel=logo)',
      type: 'image',
      options: { hotspot: false },
      fields: [{ name: 'alt', type: 'string', title: 'Alt' }],
    }),
    defineField({
      name: 'consentLevel',
      title: 'Consent Level',
      type: 'string',
      options: {
        list: [
          { title: 'Anonymous placeholder (default)', value: 'anonymous' },
          { title: 'Category label only', value: 'category' },
          { title: 'Logo display allowed', value: 'logo' },
          { title: 'Full name + quote allowed', value: 'full' },
        ],
        layout: 'radio',
      },
      initialValue: 'anonymous',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'consentDocument',
      title: 'Consent Document',
      type: 'file',
      description: 'Required when consentLevel ≥ logo.',
    }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
      options: { list: ['US', 'EU', 'China', 'Japan', 'Global'] },
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      options: ['Pharma', 'Biotech', 'MedTech', 'Digital Health', 'Academic Medical Center', 'CRO'].map((v) => ({ title: v, value: v.toLowerCase().replace(/\s+/g, '_') })),
    }),
    defineField({
      name: 'quote',
      title: 'Pull Quote',
      type: 'localizedText',
      description: 'Only displayed when consentLevel=full.',
    }),
    defineField({
      name: 'quoteAttribution',
      title: 'Quote Attribution',
      type: 'string',
      description: 'Role only, e.g. "VP Clinical Operations". Full-name attribution requires explicit consent.',
    }),
  ],
  preview: {
    select: { name: 'displayName.en', region: 'region', consent: 'consentLevel' },
    prepare: ({ name, region, consent }) => ({
      title: name || '(no display name)',
      subtitle: `${region || ''} · consent:${consent}`,
    }),
  },
})
