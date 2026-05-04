import { defineType, defineField } from 'sanity'

/**
 * Site Settings · singleton
 * 全局 header / footer / disclosure bar / legal links 开关。
 */
export default defineType({
  name: 'siteSettings',
  title: 'Site Settings (singleton)',
  type: 'document',
  groups: [
    { name: 'brand', title: 'Brand', default: true },
    { name: 'disclosure', title: 'Disclosure Bar' },
    { name: 'legal', title: 'Legal Links' },
    { name: 'seo', title: 'Default SEO' },
  ],
  fields: [
    defineField({ name: 'companyName', title: 'Company Name', type: 'string', group: 'brand',
      initialValue: 'MSH Healthcare Group' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'localizedString', group: 'brand' }),
    defineField({ name: 'logoLight', title: 'Logo (light bg)', type: 'image', group: 'brand' }),
    defineField({ name: 'logoDark', title: 'Logo (dark bg)', type: 'image', group: 'brand' }),

    defineField({
      name: 'disclosureEnabled',
      title: 'Disclosure Bar Enabled',
      type: 'boolean',
      group: 'disclosure',
      initialValue: false,
      description: 'Off by default. Direction C turns on.',
    }),
    defineField({ name: 'ticker', title: 'Ticker Label', type: 'string', group: 'disclosure',
      initialValue: 'HKEX: 2415' }),
    defineField({ name: 'priceProvider', title: 'Price Provider Endpoint', type: 'url', group: 'disclosure',
      description: 'Leave blank to show static or hide price.' }),
    defineField({ name: 'priceDelayNote', title: 'Price Delay Note', type: 'string', group: 'disclosure',
      initialValue: '15-min delayed' }),

    defineField({
      name: 'legalLinks',
      title: 'Footer Legal Links',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'legalPage' }] }],
      group: 'legal',
      validation: (R) => R.min(3),
    }),
    defineField({ name: 'companyRegistration', title: 'Company Registration Note', type: 'localizedText', group: 'legal',
      description: 'e.g. "Incorporated in the Cayman Islands · Listed on HKEX Main Board · Stock Code 2415"' }),

    defineField({ name: 'defaultSeo', title: 'Default SEO', type: 'seo', group: 'seo' }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
})
