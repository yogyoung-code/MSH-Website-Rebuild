import { defineType, defineField } from 'sanity'

/**
 * Page Section · 着陆页/首页模块
 * 对齐 Copy Deck §1 Homepage 9 模块：
 *   hero / quickStart / primaryPaths / whyUs / caseStudies /
 *   aiDelivery / trustBar / insights / finalCta
 * 以及 Solution/About 常用模块。
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
          { title: '§1.1 Hero', value: 'hero' },
          { title: '§1.2 Quick-Start Offers', value: 'quickStart' },
          { title: '§1.3 Primary Paths', value: 'primaryPaths' },
          { title: '§1.4 Why MEDSCI', value: 'whyUs' },
          { title: '§1.5 Case Studies', value: 'caseStudies' },
          { title: '§1.6 AI-Enabled Delivery', value: 'aiDelivery' },
          { title: '§1.7 Trust Bar', value: 'trustBar' },
          { title: '§1.8 Insights', value: 'insights' },
          { title: '§1.9 Final CTA', value: 'finalCta' },
          { title: 'Generic · Feature Grid', value: 'featureGrid' },
          { title: 'Generic · FAQ', value: 'faq' },
          { title: 'Generic · Process Steps', value: 'processSteps' },
          { title: 'Generic · Rich Text', value: 'richText' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'anchorId',
      title: 'Anchor ID',
      type: 'string',
      description: 'Optional scroll target, e.g. "case-studies".',
    }),
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'localizedString',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'localizedString',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'localizedText',
    }),
    defineField({
      name: 'body',
      title: 'Body (Portable Text)',
      type: 'portableText',
    }),
    defineField({
      name: 'items',
      title: 'Items (refs to domain documents)',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'pilotOffer' }] },
        { type: 'reference', to: [{ type: 'solution' }] },
        { type: 'reference', to: [{ type: 'caseStudy' }] },
        { type: 'reference', to: [{ type: 'insight' }] },
        { type: 'reference', to: [{ type: 'clientReference' }] },
      ],
      description: 'Pulled by kind: quickStart→pilotOffer, primaryPaths→solution, caseStudies→caseStudy, insights→insight, trustBar→clientReference.',
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
      options: {
        list: [
          { title: 'Light (default)', value: 'light' },
          { title: 'Dark (navy)', value: 'dark' },
          { title: 'Gradient (primary → secondary)', value: 'gradient' },
        ],
      },
      initialValue: 'light',
    }),
  ],
  preview: {
    select: { kind: 'kind', heading: 'heading.en' },
    prepare: ({ kind, heading }) => ({ title: `[${kind}] ${heading || ''}` }),
  },
})
