import { defineType, defineField } from 'sanity'
import { kebabSlug } from '../lib/validators'

/**
 * Solution · 三大主营服务线
 * - entering-china  (Copy Deck §2)
 * - going-global    (Copy Deck §3)
 * - cross-border-sprint (Copy Deck §4)
 * Lead Scoring: A lane (SQL).
 */
export default defineType({
  name: 'solution',
  title: 'Solution',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'offers', title: 'Offers & Proof' },
    { name: 'seo', title: 'SEO' },
    { name: 'workflow', title: 'Workflow' },
  ],
  fields: [
    defineField({
      name: 'kind',
      title: 'Solution',
      type: 'string',
      group: 'content',
      options: {
        list: [
          { title: 'Entering China', value: 'entering_china' },
          { title: 'Going Global', value: 'going_global' },
          { title: 'Cross-Border Sprint', value: 'cross_border_sprint' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'localizedString',
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title.en', maxLength: 60 },
      validation: kebabSlug,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      group: 'content',
      fields: [{ name: 'alt', type: 'string', title: 'Alt' }],
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'pageSection' }],
      group: 'content',
    }),
    defineField({
      name: 'relatedOffers',
      title: 'Related Pilot Offers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pilotOffer' }] }],
      group: 'offers',
      validation: (Rule) => Rule.max(6),
    }),
    defineField({
      name: 'relatedCaseStudies',
      title: 'Related Case Studies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }],
      group: 'offers',
    }),
    defineField({
      name: 'claims',
      title: 'Bound Claims',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'claim' }] }],
      group: 'offers',
      description: 'All claims used in copy must be listed here for audit.',
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'cta',
      group: 'offers',
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA',
      type: 'cta',
      group: 'offers',
    }),
    defineField({
      name: 'formRoutingKey',
      title: 'Form Routing',
      type: 'string',
      initialValue: 'A',
      readOnly: true,
      group: 'offers',
      description: 'Locked to A (SQL lane) for Solutions.',
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
      options: {
        list: ['draft', 'legal_review', 'approved', 'published', 'archived'],
      },
      initialValue: 'draft',
    }),
  ],
  preview: {
    select: { title: 'title.en', kind: 'kind', status: 'status' },
    prepare: ({ title, kind, status }) => ({ title, subtitle: `${kind} · ${status}` }),
  },
})
