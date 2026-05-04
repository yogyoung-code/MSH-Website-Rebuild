import { defineType, defineField } from 'sanity'
import { kebabSlug } from '../lib/validators'

/**
 * Generic Page
 * 覆盖：Homepage / About / Team / Investor Relations / Legal / Contact
 * 不用于 Solution / Other Engagements（有独立 schema）。
 */
export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO' },
    { name: 'workflow', title: 'Workflow' },
  ],
  fields: [
    defineField({
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: [
          { title: 'Homepage', value: 'homepage' },
          { title: 'About', value: 'about' },
          { title: 'Team', value: 'team' },
          { title: 'Investor Relations', value: 'investor_relations' },
          { title: 'Legal (Privacy / Terms / Disclosure)', value: 'legal' },
          { title: 'Contact', value: 'contact' },
          { title: 'Generic Landing', value: 'generic' },
        ],
      },
      group: 'content',
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
      options: { source: 'title.en', maxLength: 80 },
      validation: kebabSlug,
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'pageSection' }],
      group: 'content',
      validation: (Rule) => Rule.min(1),
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
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Legal Review', value: 'legal_review' },
          { title: 'Approved', value: 'approved' },
          { title: 'Published', value: 'published' },
          { title: 'Archived', value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
    }),
    defineField({
      name: 'lastReviewedBy',
      title: 'Last reviewed by (legal/compliance)',
      type: 'string',
      group: 'workflow',
    }),
    defineField({
      name: 'lastReviewedAt',
      title: 'Last reviewed at',
      type: 'datetime',
      group: 'workflow',
    }),
  ],
  preview: {
    select: { title: 'title.en', pageType: 'pageType', status: 'status' },
    prepare: ({ title, pageType, status }) => ({
      title: title || '(untitled)',
      subtitle: `${pageType} · ${status}`,
    }),
  },
})
