import { defineType, defineField } from 'sanity'
import { kebabSlug } from '../lib/validators'

/**
 * Legal Page · Privacy / Terms / Cookies / Disclaimers / Whistleblower
 * 极简。纯 richText。`lastReviewed` ≤ 365 天硬约束；Studio 会徽章告警。
 */
export default defineType({
  name: 'legalPage',
  title: 'Legal Page',
  type: 'document',
  fields: [
    defineField({
      name: 'kind',
      title: 'Legal Kind',
      type: 'string',
      options: { list: [
        { title: 'Privacy Policy', value: 'privacy' },
        { title: 'Terms of Use', value: 'terms' },
        { title: 'Cookies Notice', value: 'cookies' },
        { title: 'Disclaimers', value: 'disclaimers' },
        { title: 'Whistleblower Channel', value: 'whistleblower' },
      ] },
      validation: (R) => R.required(),
    }),
    defineField({ name: 'title', title: 'Title', type: 'localizedString', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug',
      options: { source: 'title.en', maxLength: 80 }, validation: kebabSlug }),
    defineField({ name: 'body', title: 'Body', type: 'portableText', validation: (R) => R.required() }),
    defineField({
      name: 'lastReviewed',
      title: 'Last Reviewed',
      type: 'datetime',
      validation: (R) => R.required().custom((val) => {
        if (!val) return 'Required'
        const days = (Date.now() - new Date(val).getTime()) / 86400000
        if (days > 365) return `Last reviewed ${Math.floor(days)} days ago — exceeds 365-day cap.`
        return true
      }),
    }),
    defineField({ name: 'owner', title: 'Owner', type: 'reference', to: [{ type: 'person' }] }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
  ],
  preview: {
    select: { kind: 'kind', title: 'title.en', reviewed: 'lastReviewed' },
    prepare: ({ kind, title, reviewed }) => {
      const days = reviewed ? Math.floor((Date.now() - new Date(reviewed).getTime()) / 86400000) : -1
      const warn = days < 0 ? '⚠ never' : days > 300 ? `⚠ ${days}d` : `${days}d`
      return { title: `[${kind}] ${title}`, subtitle: `reviewed ${warn}` }
    },
  },
})
