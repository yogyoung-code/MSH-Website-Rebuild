import { defineType, defineField } from 'sanity'
import { kebabSlug } from '../lib/validators'

/**
 * Pilot Offer · 快速启动项目
 * Copy Deck §1.2 Quick-Start Offers
 * 价格/周期/交付物/准入门槛均显式约束。
 */
export default defineType({
  name: 'pilotOffer',
  title: 'Pilot Offer',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'commerce', title: 'Commerce' },
    { name: 'seo', title: 'SEO' },
    { name: 'workflow', title: 'Workflow' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Offer Title',
      type: 'localizedString',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'One-line Tagline',
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
      name: 'parentSolution',
      title: 'Parent Solution',
      type: 'reference',
      group: 'content',
      to: [{ type: 'solution' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'whatYouGet',
      title: 'What You Get',
      type: 'array',
      of: [{ type: 'localizedString' }],
      group: 'content',
      validation: (Rule) => Rule.min(3).max(6),
    }),
    defineField({
      name: 'duration',
      title: 'Typical Duration',
      type: 'localizedString',
      group: 'commerce',
      description: 'e.g. "2 weeks", "30 days"',
    }),
    defineField({
      name: 'priceBand',
      title: 'Price Band',
      type: 'string',
      group: 'commerce',
      options: {
        list: [
          { title: 'Fixed (show $)', value: 'fixed' },
          { title: 'Range', value: 'range' },
          { title: 'On Request', value: 'on_request' },
        ],
      },
      initialValue: 'on_request',
    }),
    defineField({
      name: 'priceDisplay',
      title: 'Price Display',
      type: 'string',
      group: 'commerce',
      description: 'e.g. "From USD 25,000"',
      hidden: ({ parent }) => parent?.priceBand === 'on_request',
    }),
    defineField({
      name: 'eligibility',
      title: 'Eligibility Criteria',
      type: 'array',
      of: [{ type: 'localizedString' }],
      group: 'commerce',
      description: 'Prerequisites. Shown in fine print.',
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'cta',
      group: 'commerce',
    }),
    defineField({
      name: 'formRoutingKey',
      title: 'Form Routing',
      type: 'string',
      initialValue: 'A',
      readOnly: true,
      group: 'commerce',
    }),
    defineField({
      name: 'badgeTag',
      title: 'Badge Tag',
      type: 'string',
      group: 'content',
      options: {
        list: ['Pilot', 'Sprint', 'Assessment', 'Flagship'],
      },
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
    select: { title: 'title.en', tag: 'badgeTag', status: 'status' },
    prepare: ({ title, tag, status }) => ({ title, subtitle: `${tag || ''} · ${status}` }),
  },
})
