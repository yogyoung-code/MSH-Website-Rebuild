import { defineType, defineField } from 'sanity'

/**
 * Redirect Rule · 旧站 → 新站 URL 迁移
 * 批量导入 CSV 后，前端在 middleware 读取 `from` 做 301/302。
 */
export default defineType({
  name: 'redirectRule',
  title: 'Redirect Rule',
  type: 'document',
  fields: [
    defineField({ name: 'from', title: 'From (old path)', type: 'string',
      validation: (R) => R.required().regex(/^\//, 'Must start with /') }),
    defineField({ name: 'to', title: 'To (new path or URL)', type: 'string', validation: (R) => R.required() }),
    defineField({
      name: 'statusCode',
      title: 'HTTP Status',
      type: 'number',
      options: { list: [301, 302, 307, 308] },
      initialValue: 301,
    }),
    defineField({ name: 'note', title: 'Note', type: 'string', description: 'Why this redirect exists.' }),
    defineField({ name: 'active', title: 'Active', type: 'boolean', initialValue: true }),
    defineField({ name: 'importedAt', title: 'Imported At', type: 'datetime', readOnly: true }),
  ],
  preview: {
    select: { from: 'from', to: 'to', code: 'statusCode', active: 'active' },
    prepare: ({ from, to, code, active }) => ({
      title: `${from} → ${to}`,
      subtitle: `${code} ${active ? '' : '(disabled)'}`,
    }),
  },
})
