import { defineType, defineField } from 'sanity'

/**
 * ProofPoint · 证据点（可被 Metric / Claim / Footnote 引用）
 * 三层：verified | in_development | on_request
 * verified 所需：source + date + 内部审查记录
 */
export default defineType({
  name: 'proofPoint',
  title: 'Proof Point',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (internal)',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Short internal title, e.g. "3.33M physician network — 2024 census"',
    }),
    defineField({
      name: 'summary',
      title: 'Public Summary',
      type: 'localizedText',
      description: 'Used as tooltip / footnote text on the site.',
    }),
    defineField({
      name: 'tier',
      title: 'Tier',
      type: 'string',
      options: {
        list: [
          { title: '✓ Verified', value: 'verified' },
          { title: '◐ In Development', value: 'in_development' },
          { title: '⌕ Available on Request', value: 'on_request' },
        ],
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'in_development',
    }),
    defineField({
      name: 'sourceType',
      title: 'Source Type',
      type: 'string',
      options: {
        list: [
          'internal_data',
          'peer_reviewed',
          'regulatory_record',
          'third_party_audit',
          'client_attestation',
          'public_filing',
        ],
      },
    }),
    defineField({
      name: 'sourceCitation',
      title: 'Citation',
      type: 'text',
      rows: 2,
      description: 'Full citation string. Required when tier=verified.',
    }),
    defineField({
      name: 'sourceUrl',
      title: 'Source URL',
      type: 'url',
    }),
    defineField({
      name: 'sourceDate',
      title: 'Source Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'reviewedBy',
      title: 'Reviewed By (Compliance/Legal)',
      type: 'string',
      description: 'Required for verified tier.',
    }),
    defineField({
      name: 'reviewedAt',
      title: 'Reviewed At',
      type: 'datetime',
    }),
    defineField({
      name: 'onRequestContact',
      title: 'On-Request Contact',
      type: 'string',
      hidden: ({ document }) => document?.tier !== 'on_request',
      description: 'Email address for "Available on Request" proof.',
    }),
  ],
  preview: {
    select: { title: 'title', tier: 'tier', date: 'sourceDate' },
    prepare: ({ title, tier, date }) => ({
      title,
      subtitle: `[${tier}] ${date || ''}`,
    }),
  },
})
