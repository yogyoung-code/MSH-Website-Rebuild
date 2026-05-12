import { defineType, defineField } from 'sanity'
import { kebabSlug } from '../lib/validators'

/**
 * Insight · v1.0
 * 新增 readTime（auto on publish · 服务端计算）+ canonicalUrl（SEO 去重） + tag 归类。
 */
export default defineType({
  name: 'insight',
  title: 'Insight',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'meta', title: 'Meta' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'localizedString', group: 'content', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', group: 'content',
      options: { source: 'title.en', maxLength: 80 }, validation: kebabSlug }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      group: 'content',
      options: { list: ['regulatory', 'medical_affairs', 'operations', 'white_paper', 'press_release'] },
      validation: (R) => R.required(),
    }),
    defineField({ name: 'summary', title: 'Summary', type: 'localizedText', group: 'content' }),
    defineField({ name: 'body', title: 'Body', type: 'portableText', group: 'content', validation: (R) => R.required() }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
      group: 'meta',
      validation: (R) => R.min(1),
    }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime', group: 'meta', validation: (R) => R.required() }),
    defineField({
      name: 'readTime',
      title: 'Read Time (min, auto)',
      type: 'number',
      group: 'meta',
      readOnly: true,
      description: 'Computed by publish webhook from body length (200 wpm).',
    }),
    defineField({ name: 'canonicalUrl', title: 'Canonical URL', type: 'url', group: 'seo',
      description: 'Set if this insight was originally published elsewhere.' }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }], group: 'meta',
      options: { layout: 'tags' } }),
    defineField({ name: 'featureImage', title: 'Feature Image', type: 'image', group: 'content', options: { hotspot: true } }),
    defineField({
      name: 'citations',
      title: 'Citations',
      type: 'array',
      of: [{ type: 'citation' }],
      group: 'content',
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),
  ],
  preview: {
    select: { title: 'title.en', type: 'type', date: 'publishedAt' },
    prepare: ({ title, type, date }) => ({
      title,
      subtitle: `${type} · ${date ? new Date(date).toISOString().slice(0, 10) : '—'}`,
    }),
  },
})
