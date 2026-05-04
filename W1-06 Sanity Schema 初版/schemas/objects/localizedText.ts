import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'localizedText',
  title: 'Localized Text (EN / CN)',
  type: 'object',
  fields: [
    defineField({
      name: 'en',
      title: 'English',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(800),
    }),
    defineField({
      name: 'cn',
      title: '中文',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(800),
    }),
  ],
})
