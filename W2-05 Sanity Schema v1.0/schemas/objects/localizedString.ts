import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'localizedString',
  title: 'Localized String (EN / CN)',
  type: 'object',
  fields: [
    defineField({
      name: 'en',
      title: 'English',
      type: 'string',
      validation: (Rule) => Rule.required().max(240),
    }),
    defineField({
      name: 'cn',
      title: '中文（仅 Homepage/About/Legal/IR 使用）',
      type: 'string',
      validation: (Rule) => Rule.max(240),
    }),
  ],
  preview: {
    select: { en: 'en', cn: 'cn' },
    prepare: ({ en, cn }) => ({ title: en || '(no EN)', subtitle: cn || '' }),
  },
})
