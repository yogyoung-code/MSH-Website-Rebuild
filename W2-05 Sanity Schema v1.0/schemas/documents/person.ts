import { defineType, defineField } from 'sanity'
import { kebabSlug } from '../lib/validators'

/**
 * Person · 复用主体
 * Leadership · Solution Team Lead · Pilot PI · Insight Author · Approver 都用同一个。
 * 内部员工照片需 consent=true 才能渲染头像。
 */
export default defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Full Name', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug',
      options: { source: 'name', maxLength: 80 }, validation: kebabSlug }),
    defineField({ name: 'titleEn', title: 'Title (EN)', type: 'string' }),
    defineField({ name: 'titleCn', title: 'Title (CN)', type: 'string' }),
    defineField({
      name: 'roles',
      title: 'Roles',
      type: 'array',
      of: [{ type: 'string' }],
      options: { list: [
        'leadership', 'medical_lead', 'physician_reviewer', 'compliance_lead',
        'legal', 'principal_investigator', 'author', 'office_lead',
      ] },
    }),
    defineField({ name: 'office', title: 'Primary Office', type: 'string',
      options: { list: ['Shanghai', 'Beijing', 'Hong Kong', 'Boston', 'Basel', 'Tokyo'] } }),
    defineField({ name: 'bio', title: 'Bio', type: 'localizedText' }),
    defineField({ name: 'avatar', title: 'Avatar', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'avatarConsent',
      title: 'Avatar Display Consent',
      type: 'boolean',
      initialValue: false,
      description: 'Must be true before site renders avatar.',
    }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'orcid', title: 'ORCID', type: 'string',
      description: 'For physicians/authors. e.g. 0000-0001-2345-6789' }),
  ],
  preview: {
    select: { name: 'name', title: 'titleEn', office: 'office' },
    prepare: ({ name, title, office }) => ({
      title: name,
      subtitle: [title, office].filter(Boolean).join(' · '),
    }),
  },
})
