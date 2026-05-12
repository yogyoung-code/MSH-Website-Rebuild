import { defineType, defineArrayMember } from 'sanity'
import { noForbiddenText } from '../lib/validators'

/**
 * Portable Text · 富文本
 * 约束：block-level 仅 normal / h2 / h3 / quote；禁用 h1（由 Page 标题占用）。
 * marks: strong / em / code / link / footnote。
 * 禁用词扫描在 validation 层触发。
 */
export default defineType({
  name: 'portableText',
  title: 'Portable Text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bulleted', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              { name: 'href', type: 'url', title: 'URL' },
              {
                name: 'rel',
                title: 'rel',
                type: 'string',
                options: {
                  list: [
                    { title: 'default', value: '' },
                    { title: 'noopener noreferrer', value: 'noopener noreferrer' },
                    { title: 'nofollow', value: 'nofollow' },
                  ],
                },
              },
              { name: 'newTab', title: 'Open in new tab', type: 'boolean', initialValue: false },
            ],
          },
          {
            name: 'footnote',
            type: 'object',
            title: 'Footnote',
            fields: [
              { name: 'text', type: 'text', title: 'Footnote text' },
              {
                name: 'proofPoint',
                type: 'reference',
                to: [{ type: 'proofPoint' }],
                title: 'Bound ProofPoint',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alt (required for WCAG)' },
        { name: 'caption', type: 'string', title: 'Caption' },
      ],
    }),
    defineArrayMember({
      type: 'object',
      name: 'calloutBlock',
      title: 'Callout',
      fields: [
        { name: 'tone', type: 'string', options: { list: ['info', 'warning', 'success'] } },
        { name: 'body', type: 'text' },
      ],
    }),
  ],
  validation: noForbiddenText,
})
