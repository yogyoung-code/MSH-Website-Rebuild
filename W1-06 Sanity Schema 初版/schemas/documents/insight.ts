import { defineType, defineField } from 'sanity'
import { kebabSlug } from '../lib/validators'

/**
 * Insight · 洞察内容
 * kinds: white_paper | blog | playbook | regulatory_brief | webinar_recap
 */
export default defineType({
  name: 'insight',
  title: 'Insight',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'gating', title: 'Gating' },
    { name: 'seo', title: 'SEO' },
    { name: 'workflow', title: 'Workflow' },
  ],
  fields: [
    defineField({
      name: 'kind',
      title: 'Kind',
      type: 'string',
      group: 'content',
      options: {
        list: [
          { title: 'White Paper', value: 'white_paper' },
          { title: 'Blog Post', value: 'blog' },
          { title: 'Playbook', value: 'playbook' },
          { title: 'Regulatory Brief', value: 'regulatory_brief' },
          { title: 'Webinar Recap', value: 'webinar_recap' },
        ],
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title.en', maxLength: 100 },
      validation: kebabSlug,
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'localizedText',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string' }],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'portableText',
      group: 'content',
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'topics',
      title: 'Topics / Tags',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      group: 'content',
    }),
    defineField({
      name: 'gated',
      title: 'Gated (form required to download)',
      type: 'boolean',
      group: 'gating',
      initialValue: false,
    }),
    defineField({
      name: 'downloadAsset',
      title: 'Download Asset (PDF)',
      type: 'file',
      group: 'gating',
      hidden: ({ document }) => !document?.gated,
    }),
    defineField({
      name: 'formRoutingKey',
      title: 'Form Routing (when gated)',
      type: 'string',
      group: 'gating',
      options: { list: ['A', 'B'] },
      initialValue: 'A',
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
  orderings: [
    { title: 'Published Desc', name: 'publishedDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title.en', kind: 'kind', date: 'publishedAt' },
    prepare: ({ title, kind, date }) => ({
      title,
      subtitle: `${kind}${date ? ` · ${new Date(date).toISOString().slice(0, 10)}` : ''}`,
    }),
  },
})
