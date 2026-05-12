import { defineType, defineField } from 'sanity'
import { kebabSlug, minMetrics } from '../lib/validators'

/**
 * Case Study
 * 强校验：metrics ≥ 3；客户同意证据（consent）必填；
 * 未同意实名时 client=null，前端渲染 ⚑ Placeholder 徽标（Copy Deck §1.5）。
 */
export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'evidence', title: 'Evidence & Consent' },
    { name: 'seo', title: 'SEO' },
    { name: 'workflow', title: 'Workflow' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Case Title',
      type: 'localizedString',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title.en', maxLength: 80 },
      validation: kebabSlug,
    }),
    defineField({
      name: 'industry',
      title: 'Therapeutic Area / Industry',
      type: 'string',
      group: 'content',
      options: {
        list: ['Oncology', 'Cardiology', 'Neurology', 'Immunology', 'Rare Disease', 'Digital Health', 'Other'],
      },
    }),
    defineField({
      name: 'solution',
      title: 'Parent Solution',
      type: 'reference',
      to: [{ type: 'solution' }],
      group: 'content',
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'portableText',
      group: 'content',
    }),
    defineField({
      name: 'approach',
      title: 'Approach',
      type: 'portableText',
      group: 'content',
    }),
    defineField({
      name: 'outcome',
      title: 'Outcome',
      type: 'portableText',
      group: 'content',
    }),
    defineField({
      name: 'metrics',
      title: 'Quantified Metrics (≥ 3 required)',
      type: 'array',
      of: [{ type: 'metric' }],
      group: 'evidence',
      validation: minMetrics(3),
    }),
    defineField({
      name: 'client',
      title: 'Client (optional)',
      type: 'reference',
      to: [{ type: 'clientReference' }],
      group: 'evidence',
      description: 'Leave empty to render as ⚑ Placeholder (anonymized).',
    }),
    defineField({
      name: 'consentOnFile',
      title: 'Client Consent On File',
      type: 'boolean',
      group: 'evidence',
      initialValue: false,
      description: 'Must be true before displaying client name/logo.',
    }),
    defineField({
      name: 'consentDocument',
      title: 'Consent Document (PDF)',
      type: 'file',
      group: 'evidence',
      description: 'Private — Studio only.',
    }),
    defineField({
      name: 'evidence',
      title: 'Evidence Tier',
      type: 'evidenceTag',
      group: 'evidence',
    }),
    // v1.0: structured citations
    defineField({
      name: 'citations',
      title: 'Citations',
      type: 'array',
      of: [{ type: 'citation' }],
      group: 'evidence',
      description: 'Structured citations — v1.0 replaces free-text source.',
    }),
    defineField({
      name: 'evidenceClaims',
      title: 'Bound Claims',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'claim' }] }],
      group: 'evidence',
      description: 'Quantitative claims used in the case copy.',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'status',
      title: 'Workflow Status',
      type: 'string',
      group: 'workflow',
      options: { list: ['draft', 'legal_review', 'approved', 'published', 'archived'] },
      initialValue: 'draft',
    }),
  ],
  preview: {
    select: { title: 'title.en', metrics: 'metrics', status: 'status' },
    prepare: ({ title, metrics, status }) => ({
      title,
      subtitle: `${(metrics || []).length} metrics · ${status}`,
    }),
  },
})
