import { defineType, defineField } from 'sanity'

/**
 * Evidence Tag · 三层证据徽标
 * - verified        ✓  Verified
 * - in_development  ◐  In Development
 * - on_request      ⌕  Available on Request
 */
export default defineType({
  name: 'evidenceTag',
  title: 'Evidence Tag',
  type: 'object',
  fields: [
    defineField({
      name: 'tier',
      title: 'Tier',
      type: 'string',
      options: {
        list: [
          { title: '✓ Verified', value: 'verified' },
          { title: '◐ In Development', value: 'in_development' },
          { title: '⌕ Available on Request', value: 'on_request' },
        ],
        layout: 'radio',
      },
      initialValue: 'in_development',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'note',
      title: 'Internal Note',
      type: 'string',
      description: 'Only visible in Studio; reviewers use this to track upgrade path to Verified.',
    }),
  ],
})
