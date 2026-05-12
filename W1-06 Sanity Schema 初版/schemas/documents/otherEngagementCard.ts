import { defineType, defineField } from 'sanity'
import { kebabSlug } from '../lib/validators'

/**
 * Other Engagement Card
 * Copy Deck §5 · 在 /services/other-engagements 路径下
 * 强约束：
 *  - SEO.noIndex / noFollow / sitemapExclude 强制为 true（前端 server 层 override）
 *  - formRoutingKey 锁定为 'B'（Partner/Referral lane，不计 SQL）
 *  - 不可挂载到主 navigation.main；仅允许 navigation.footer
 */
export default defineType({
  name: 'otherEngagementCard',
  title: 'Other Engagement',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO (locked)' },
    { name: 'workflow', title: 'Workflow' },
  ],
  fields: [
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
      options: { source: 'title.en', maxLength: 60 },
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
      name: 'body',
      title: 'Body',
      type: 'portableText',
      group: 'content',
    }),
    defineField({
      name: 'contactCta',
      title: 'Contact CTA (Partner lane)',
      type: 'cta',
      group: 'content',
    }),
    defineField({
      name: 'formRoutingKey',
      title: 'Form Routing',
      type: 'string',
      initialValue: 'B',
      readOnly: true,
      group: 'content',
      description: 'Locked: B — Partner/Referral (excluded from SQL lead scoring).',
    }),
    defineField({
      name: 'seoNoIndex',
      title: 'noindex',
      type: 'boolean',
      initialValue: true,
      readOnly: true,
      group: 'seo',
    }),
    defineField({
      name: 'seoNoFollow',
      title: 'nofollow',
      type: 'boolean',
      initialValue: true,
      readOnly: true,
      group: 'seo',
    }),
    defineField({
      name: 'sitemapExclude',
      title: 'Sitemap Excluded',
      type: 'boolean',
      initialValue: true,
      readOnly: true,
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
    select: { title: 'title.en', status: 'status' },
    prepare: ({ title, status }) => ({ title, subtitle: `OtherEngagement · ${status}` }),
  },
})
