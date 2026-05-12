import { defineType, defineField } from 'sanity'

/**
 * Page Section · v1.0
 * 扩展自 v0.1：
 *   - kind 新增 10 项（problemFrame / personaCards / teamBand / relatedSolutions /
 *     timelineBand / officeGrid / pricingTable / pilotIndex / listingHero / contactLanes）
 *   - 新增 variant（仅 hero 使用 · enum = home / solution / sprint / portfolio / listing / about / contact）
 */
export default defineType({
  name: 'pageSection',
  title: 'Page Section',
  type: 'object',
  fields: [
    defineField({
      name: 'kind',
      title: 'Section Kind',
      type: 'string',
      options: {
        list: [
          // Home §1
          { title: '§1.1 Hero', value: 'hero' },
          { title: '§1.2 Quick-Start', value: 'quickStart' },
          { title: '§1.3 Primary Paths', value: 'primaryPaths' },
          { title: '§1.4 Why MSH', value: 'whyUs' },
          { title: '§1.5 Case Studies', value: 'caseStudies' },
          { title: '§1.6 AI-Enabled Delivery', value: 'aiDelivery' },
          { title: '§1.7 Trust Bar', value: 'trustBar' },
          { title: '§1.8 Insights', value: 'insights' },
          { title: '§1.9 Final CTA', value: 'finalCta' },
          // Generic (v0.1)
          { title: 'Generic · Feature Grid', value: 'featureGrid' },
          { title: 'Generic · FAQ', value: 'faq' },
          { title: 'Generic · Process Steps', value: 'processSteps' },
          { title: 'Generic · Rich Text', value: 'richText' },
          // NEW v1.0
          { title: 'Solution · Problem Frame', value: 'problemFrame' },
          { title: 'Solution · Team Band', value: 'teamBand' },
          { title: 'Solution · Related Solutions', value: 'relatedSolutions' },
          { title: 'Sprint · Persona Cards', value: 'personaCards' },
          { title: 'Sprint · Pricing Table', value: 'pricingTable' },
          { title: 'About · Timeline Band', value: 'timelineBand' },
          { title: 'About · Office Grid', value: 'officeGrid' },
          { title: 'Portfolio · Pilot Index', value: 'pilotIndex' },
          { title: 'Insights · Listing Hero', value: 'listingHero' },
          { title: 'Contact · Contact Lanes', value: 'contactLanes' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'variant',
      title: 'Variant (hero only)',
      type: 'string',
      options: { list: [
        { title: 'Home', value: 'home' },
        { title: 'Solution', value: 'solution' },
        { title: 'Sprint', value: 'sprint' },
        { title: 'Portfolio', value: 'portfolio' },
        { title: 'Listing', value: 'listing' },
        { title: 'About', value: 'about' },
        { title: 'Contact', value: 'contact' },
      ] },
      hidden: ({ parent }) => parent?.kind !== 'hero',
    }),
    defineField({ name: 'anchorId', title: 'Anchor ID', type: 'string' }),
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'localizedString' }),
    defineField({ name: 'heading', title: 'Heading', type: 'localizedString' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'localizedText' }),
    defineField({ name: 'body', title: 'Body', type: 'portableText' }),

    // refs to domain documents — 保持 v0.1 兼容 + 加 person / pilotSubpage / contactMethod
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        { type: 'reference', to: [
          { type: 'pilotOffer' },
          { type: 'pilotSubpage' },
          { type: 'solution' },
          { type: 'caseStudy' },
          { type: 'insight' },
          { type: 'clientReference' },
          { type: 'person' },
          { type: 'contactMethod' },
        ] },
      ],
    }),

    // structured payloads for kinds that don't reference a document
    defineField({
      name: 'personas',
      title: 'Persona Cards (kind=personaCards)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', type: 'localizedString' },
          { name: 'description', type: 'localizedText' },
          { name: 'iconToken', type: 'string' },
        ],
      }],
      hidden: ({ parent }) => parent?.kind !== 'personaCards',
    }),
    defineField({
      name: 'pricing',
      title: 'Pricing Tiers (kind=pricingTable)',
      type: 'array',
      of: [{ type: 'pricingTier' }],
      hidden: ({ parent }) => parent?.kind !== 'pricingTable',
      description: 'Legal gate: pricing display must be approved by ops lead.',
    }),
    defineField({
      name: 'timeline',
      title: 'Timeline Entries (kind=timelineBand)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'year', type: 'number' },
          { name: 'label', type: 'localizedString' },
          { name: 'description', type: 'localizedText' },
        ],
      }],
      hidden: ({ parent }) => parent?.kind !== 'timelineBand',
    }),
    defineField({
      name: 'offices',
      title: 'Offices (kind=officeGrid)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'city', type: 'string' },
          { name: 'address', type: 'text' },
          { name: 'phone', type: 'string' },
          { name: 'email', type: 'string' },
          { name: 'lead', type: 'reference', to: [{ type: 'person' }] },
        ],
      }],
      hidden: ({ parent }) => parent?.kind !== 'officeGrid',
    }),

    defineField({
      name: 'ctas',
      title: 'CTAs',
      type: 'array',
      of: [{ type: 'cta' }],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: { list: [
        { title: 'Light', value: 'light' },
        { title: 'Dark navy', value: 'dark' },
        { title: 'Paper', value: 'paper' },
        { title: 'Gradient', value: 'gradient' },
      ] },
      initialValue: 'light',
    }),
    defineField({
      name: 'complianceGate',
      title: 'Compliance Gate',
      type: 'string',
      options: { list: ['none', 'legal_only', 'compliance_only', 'legal_and_compliance'] },
      initialValue: 'none',
      description: 'Set "legal_and_compliance" for AI Delivery, Pricing, Pilot sections.',
    }),
  ],
  preview: {
    select: { kind: 'kind', heading: 'heading.en', variant: 'variant' },
    prepare: ({ kind, heading, variant }) => ({
      title: `[${kind}${variant ? `:${variant}` : ''}] ${heading || ''}`,
    }),
  },
})
