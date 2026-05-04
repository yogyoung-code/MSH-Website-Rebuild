import { defineType, defineField } from 'sanity'

/**
 * Citation · 结构化引用
 * v1.0 替代 caseStudy.citations[] 的自由文本。
 */
export default defineType({
  name: 'citation',
  title: 'Citation',
  type: 'object',
  fields: [
    defineField({
      name: 'sourceType',
      title: 'Source Type',
      type: 'string',
      options: { list: [
        'journal', 'preprint', 'conference', 'registry',
        'hkex_filing', 'press_release', 'white_paper', 'internal_dataset',
      ] },
      validation: (R) => R.required(),
    }),
    defineField({ name: 'title', title: 'Citation Title', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'authors', title: 'Authors', type: 'string' }),
    defineField({ name: 'venue', title: 'Venue / Journal', type: 'string' }),
    defineField({ name: 'year', title: 'Year', type: 'number' }),
    defineField({ name: 'doi', title: 'DOI', type: 'string',
      validation: (R) => R.regex(/^10\.\d{4,}\//, { name: 'doi', invert: false }).warning('Expect DOI format 10.xxxx/...') }),
    defineField({ name: 'pubmedId', title: 'PubMed ID', type: 'string' }),
    defineField({ name: 'url', title: 'URL', type: 'url' }),
    defineField({ name: 'accessedAt', title: 'Accessed At', type: 'date' }),
    defineField({
      name: 'evidenceTier',
      title: 'Evidence Tier',
      type: 'string',
      options: { list: [
        { title: 'Verified', value: 'verified' },
        { title: 'In Development', value: 'in_development' },
        { title: 'On Request', value: 'on_request' },
      ] },
      initialValue: 'verified',
      validation: (R) => R.required(),
    }),
  ],
  preview: {
    select: { title: 'title', venue: 'venue', year: 'year', tier: 'evidenceTier' },
    prepare: ({ title, venue, year, tier }) => ({
      title,
      subtitle: `${[venue, year].filter(Boolean).join(' · ')}  [${tier}]`,
    }),
  },
})
