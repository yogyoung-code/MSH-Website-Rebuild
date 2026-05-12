import { defineType, defineField } from 'sanity'

/**
 * CTA Button
 * Variants 对齐 W1-04 VI 文档 §11.1 按钮系统。
 */
export default defineType({
  name: 'cta',
  title: 'Call-to-Action',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'localizedString',
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Primary · Navy', value: 'primary-navy' },
          { title: 'Primary · Light Blue', value: 'primary-light-blue' },
          { title: 'Accent · Cyan', value: 'accent' },
          { title: 'Secondary · Outline', value: 'secondary' },
          { title: 'Ghost / Text', value: 'ghost' },
        ],
        layout: 'radio',
      },
      initialValue: 'primary-navy',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          { title: 'Internal (page slug)', value: 'internal' },
          { title: 'External URL', value: 'external' },
          { title: 'Section Anchor (#id)', value: 'anchor' },
          { title: 'Form Modal', value: 'form' },
        ],
        layout: 'radio',
      },
      initialValue: 'internal',
    }),
    defineField({
      name: 'internalRef',
      title: 'Internal Page',
      type: 'reference',
      to: [
        { type: 'page' },
        { type: 'solution' },
        { type: 'pilotOffer' },
        { type: 'caseStudy' },
        { type: 'insight' },
      ],
      hidden: ({ parent }) => parent?.linkType !== 'internal',
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      hidden: ({ parent }) => parent?.linkType !== 'external',
    }),
    defineField({
      name: 'anchorId',
      title: 'Anchor ID (without #)',
      type: 'string',
      hidden: ({ parent }) => parent?.linkType !== 'anchor',
    }),
    defineField({
      name: 'formRoutingKey',
      title: 'HubSpot Form Routing Key',
      type: 'string',
      description: 'A=SQL lane (Solutions/PilotOffers), B=Partner lane (Other Engagements). Enforced by Lead Scoring.',
      options: {
        list: [
          { title: 'A — Sales SQL (Solutions / PilotOffers)', value: 'A' },
          { title: 'B — Partner / Referral (Other Engagements)', value: 'B' },
        ],
      },
      hidden: ({ parent }) => parent?.linkType !== 'form',
    }),
    defineField({
      name: 'analyticsEvent',
      title: 'GA4 Event Name',
      type: 'string',
      description: 'Snake_case. See IA doc §10 events catalog.',
    }),
  ],
  preview: {
    select: { label: 'label.en', variant: 'variant' },
    prepare: ({ label, variant }) => ({ title: label || '(no label)', subtitle: variant }),
  },
})
