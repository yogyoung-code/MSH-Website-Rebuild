import { defineType, defineField } from 'sanity'

/**
 * Contact Method · Final CTA / Contact 页共用
 * 每个 "lane"（sponsor / investor / press / careers）一条。
 */
export default defineType({
  name: 'contactMethod',
  title: 'Contact Method',
  type: 'document',
  fields: [
    defineField({ name: 'lane', title: 'Lane', type: 'string',
      options: { list: [
        { title: 'Sponsors (business)', value: 'sponsors' },
        { title: 'Investors (IR)', value: 'investors' },
        { title: 'Press / Media', value: 'press' },
        { title: 'Careers', value: 'careers' },
        { title: 'General', value: 'general' },
      ] },
      validation: (R) => R.required(),
    }),
    defineField({ name: 'label', title: 'Label', type: 'localizedString', validation: (R) => R.required() }),
    defineField({ name: 'description', title: 'Description', type: 'localizedText' }),
    defineField({ name: 'email', title: 'Email', type: 'string',
      validation: (R) => R.regex(/^[^@]+@[^@]+\.[^@]+$/, 'Invalid email') }),
    defineField({ name: 'phone', title: 'Phone (display)', type: 'string' }),
    defineField({
      name: 'formId',
      title: 'HubSpot Form GUID',
      type: 'string',
      description: 'Leave blank to hide the form on this lane.',
    }),
    defineField({
      name: 'sla',
      title: 'SLA (response window, display)',
      type: 'string',
      description: 'e.g. "≤ 2 business days"',
    }),
    defineField({
      name: 'owner',
      title: 'Internal Owner',
      type: 'reference',
      to: [{ type: 'person' }],
    }),
  ],
  preview: {
    select: { lane: 'lane', label: 'label.en', email: 'email' },
    prepare: ({ lane, label, email }) => ({ title: `[${lane}] ${label}`, subtitle: email || '—' }),
  },
})
