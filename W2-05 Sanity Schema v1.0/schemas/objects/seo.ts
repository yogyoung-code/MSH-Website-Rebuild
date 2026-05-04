import { defineType, defineField } from 'sanity'

/**
 * SEO 元数据
 * 注意：Other Engagements 页类型会强制 noIndex=true, noFollow=true, sitemapExclude=true（不可编辑）。
 */
export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'localizedString',
      description: 'Max 60 chars recommended. Used for <title> and OG.',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'localizedText',
      description: 'Max 155 chars recommended.',
    }),
    defineField({
      name: 'canonical',
      title: 'Canonical URL',
      type: 'url',
      description: 'Only set when overriding default canonical.',
    }),
    defineField({
      name: 'ogImage',
      title: 'OG Image (1200×630)',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
    }),
    defineField({
      name: 'noIndex',
      title: 'No Index (meta robots)',
      type: 'boolean',
      initialValue: false,
      description: 'Enforced true for Other Engagements routes (server-side override).',
    }),
    defineField({
      name: 'noFollow',
      title: 'No Follow',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'sitemapExclude',
      title: 'Exclude from sitemap.xml',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
