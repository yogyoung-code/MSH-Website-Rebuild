import { defineType, defineField } from 'sanity'
import { kebabSlug } from '../lib/validators'

/**
 * Pilot Sub-page · Other Engagements 下的独立页
 * 每个 Pilot 一个 instance。结构定死：编辑只填字段，不改版式。
 * 文案中 findings 必须带 evidenceTier；发布前走 claim-audit webhook。
 */
export default defineType({
  name: 'pilotSubpage',
  title: 'Pilot Sub-page',
  type: 'document',
  groups: [
    { name: 'cover', title: 'Cover', default: true },
    { name: 'content', title: 'Content' },
    { name: 'evidence', title: 'Evidence & Disclosure' },
    { name: 'seo', title: 'SEO' },
    { name: 'workflow', title: 'Workflow' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Pilot Name', type: 'localizedString', group: 'cover', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', group: 'cover', options: { source: 'title.en', maxLength: 80 }, validation: kebabSlug }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      group: 'cover',
      options: { list: [
        { title: 'Active', value: 'active' },
        { title: 'Concluded', value: 'concluded' },
        { title: 'Paused', value: 'paused' },
      ] },
      initialValue: 'active',
      validation: (R) => R.required(),
    }),
    defineField({ name: 'territory', title: 'Territory', type: 'string', group: 'cover',
      options: { list: ['CN', 'US', 'EU', 'APAC', 'Global'] } }),
    defineField({ name: 'phase', title: 'Phase', type: 'string', group: 'cover',
      options: { list: ['Pre-clinical', 'Ph1', 'Ph2', 'Ph3', 'Post-marketing', 'Observational', 'Other'] } }),
    defineField({ name: 'startDate', title: 'Start Date', type: 'date', group: 'cover' }),
    defineField({
      name: 'pi',
      title: 'Principal Investigator',
      type: 'reference',
      to: [{ type: 'person' }],
      group: 'cover',
      description: 'Required before publish — webhook will block.',
    }),
    defineField({ name: 'coverEyebrow', title: 'Cover Eyebrow', type: 'localizedString', group: 'cover' }),
    defineField({ name: 'coverSub', title: 'Cover Subtitle', type: 'localizedText', group: 'cover' }),

    defineField({ name: 'problem', title: 'The Question', type: 'portableText', group: 'content',
      description: '120–200 characters on the research question. No marketing claims.' }),
    defineField({
      name: 'approach',
      title: 'Approach (Process Steps)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'step', type: 'number' },
          { name: 'title', type: 'localizedString' },
          { name: 'deliverable', type: 'localizedText' },
        ],
      }],
      group: 'content',
      validation: (R) => R.min(3).max(5),
    }),
    defineField({ name: 'findings', title: 'Interim Findings', type: 'portableText', group: 'content',
      description: 'Every finding MUST carry an evidenceTier marker; webhook blocks publish if any finding is orphaned.' }),

    defineField({
      name: 'citations',
      title: 'Citations',
      type: 'array',
      of: [{ type: 'citation' }],
      group: 'evidence',
      validation: (R) => R.min(1),
    }),
    defineField({
      name: 'evidenceClaims',
      title: 'Bound Claims',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'claim' }] }],
      group: 'evidence',
      description: 'All quantitative claims used on this page.',
    }),
    defineField({
      name: 'disclosureOverride',
      title: 'Disclosure Override',
      type: 'portableText',
      group: 'evidence',
      description: 'Leave blank to inherit aiDisclosure singleton.',
    }),

    defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),
    defineField({
      name: 'workflow',
      title: 'Workflow Status',
      type: 'string',
      group: 'workflow',
      options: { list: ['draft', 'medical_review', 'legal_review', 'approved', 'published', 'archived'] },
      initialValue: 'draft',
    }),
  ],
  preview: {
    select: { title: 'title.en', status: 'status', pi: 'pi.name' },
    prepare: ({ title, status, pi }) => ({
      title: title || '(untitled pilot)',
      subtitle: `${status} · PI: ${pi || '—'}`,
    }),
  },
})
