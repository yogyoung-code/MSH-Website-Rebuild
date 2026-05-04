import { defineType, defineField } from 'sanity'

/**
 * Navigation · 全站导航（单例）
 * 一套 schema，三个区位：main（主导航）/ footer（页脚）/ utility（右上工具栏）
 * OtherEngagementCard 仅允许出现在 footer.
 */
export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'region',
      title: 'Region / Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Global (default)', value: 'global' },
          { title: 'US', value: 'us' },
          { title: 'China', value: 'cn' },
        ],
      },
      initialValue: 'global',
    }),
    defineField({
      name: 'main',
      title: 'Main Nav',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navItem',
          fields: [
            { name: 'label', type: 'localizedString' },
            {
              name: 'ref',
              type: 'reference',
              to: [{ type: 'page' }, { type: 'solution' }, { type: 'insight' }, { type: 'pilotOffer' }],
              validation: (R) => R.required(),
            },
            {
              name: 'children',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'label', type: 'localizedString' },
                    {
                      name: 'ref',
                      type: 'reference',
                      to: [{ type: 'page' }, { type: 'solution' }, { type: 'insight' }, { type: 'pilotOffer' }],
                    },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: { label: 'label.en', ref: 'ref.title.en' },
            prepare: ({ label, ref }) => ({ title: label, subtitle: ref }),
          },
        },
      ],
      description: 'OtherEngagement cards are not allowed here.',
    }),
    defineField({
      name: 'utility',
      title: 'Utility Nav (top-right)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'localizedString' },
            { name: 'href', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'footerColumns',
      title: 'Footer Columns',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'footerColumn',
          fields: [
            { name: 'heading', type: 'localizedString' },
            {
              name: 'items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'label', type: 'localizedString' },
                    {
                      name: 'ref',
                      type: 'reference',
                      to: [
                        { type: 'page' },
                        { type: 'solution' },
                        { type: 'insight' },
                        { type: 'pilotOffer' },
                        { type: 'otherEngagementCard' }, // ONLY footer may reference these
                      ],
                    },
                    {
                      name: 'externalHref',
                      type: 'url',
                      description: 'Optional alternative to ref.',
                    },
                    {
                      name: 'rel',
                      type: 'string',
                      description: 'e.g. "nofollow" for Other Engagements links.',
                    },
                    {
                      name: 'external',
                      type: 'boolean',
                      description: 'Render with external-link icon.',
                      initialValue: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'legalLinks',
      title: 'Legal strip (bottom)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'localizedString' },
            { name: 'ref', type: 'reference', to: [{ type: 'page' }] },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { region: 'region' },
    prepare: ({ region }) => ({ title: `Navigation · ${region}` }),
  },
})
