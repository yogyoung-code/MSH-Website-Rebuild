import { defineType, defineField } from 'sanity'

/**
 * Navigation · singleton
 * v1.0 新增 footerOnly[] 与 utility[]。
 */
export default defineType({
  name: 'navigation',
  title: 'Navigation (singleton)',
  type: 'document',
  fields: [
    defineField({
      name: 'primary',
      title: 'Primary Nav',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', type: 'localizedString' },
          { name: 'href', type: 'string' },
          { name: 'external', type: 'boolean', initialValue: false },
          {
            name: 'children',
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                { name: 'label', type: 'localizedString' },
                { name: 'href', type: 'string' },
                { name: 'description', type: 'localizedText' },
              ],
            }],
          },
        ],
      }],
    }),
    defineField({
      name: 'footerOnly',
      title: 'Footer-only Links (not in main nav)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'group', type: 'string', options: { list: ['Solutions', 'Evidence', 'Investors', 'Company'] } },
          { name: 'label', type: 'localizedString' },
          { name: 'href', type: 'string' },
        ],
      }],
      description: 'Grouped by header in footer.',
    }),
    defineField({
      name: 'utility',
      title: 'Utility (topbar right-side)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', type: 'localizedString' },
          { name: 'href', type: 'string' },
          { name: 'iconToken', type: 'string' },
        ],
      }],
      description: 'e.g. Contact · Language switcher · IR shortcut',
    }),
  ],
  preview: { prepare: () => ({ title: 'Navigation' }) },
})
