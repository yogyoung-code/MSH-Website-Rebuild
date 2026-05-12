import { defineType, defineField } from 'sanity'

/**
 * Pricing Tier · 用于 Sprint pricing 模块
 * 默认 priceDisplay='on_request'；具体数字仅当 ops + legal 双签后填。
 */
export default defineType({
  name: 'pricingTier',
  title: 'Pricing Tier',
  type: 'object',
  fields: [
    defineField({ name: 'name', title: 'Tier Name', type: 'localizedString', validation: (R) => R.required() }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'localizedString' }),
    defineField({
      name: 'priceDisplay',
      title: 'Price Display Mode',
      type: 'string',
      options: { list: [
        { title: 'On Request (default)', value: 'on_request' },
        { title: 'Range (e.g. $X – $Y)', value: 'range' },
        { title: 'Starting at', value: 'starting_at' },
      ] },
      initialValue: 'on_request',
    }),
    defineField({ name: 'priceText', title: 'Price Text', type: 'string',
      hidden: ({ parent }) => parent?.priceDisplay === 'on_request',
      description: 'Displayed verbatim. Requires ops + legal sign-off.' }),
    defineField({
      name: 'inclusions',
      title: 'Inclusions',
      type: 'array',
      of: [{ type: 'localizedString' }],
      validation: (R) => R.min(3),
    }),
    defineField({ name: 'recommended', title: 'Recommended', type: 'boolean', initialValue: false }),
    defineField({ name: 'cta', title: 'CTA', type: 'cta' }),
  ],
  preview: {
    select: { name: 'name.en', mode: 'priceDisplay', text: 'priceText' },
    prepare: ({ name, mode, text }) => ({ title: name, subtitle: `${mode}${text ? ` · ${text}` : ''}` }),
  },
})
