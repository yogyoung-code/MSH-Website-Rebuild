import { defineType, defineField } from 'sanity'

/**
 * AI Product Demo Vignette PITL Sign-off · v3.0
 * Spec §3.4 / §8.15 — demo scenario 必须由医学写作起草 + 临床医师签字才能发布。
 * 三字段全部必填,作为 aiProductShowcase.signedBy 的嵌套对象。
 */
export default defineType({
  name: 'aiProductSignedBy',
  title: 'Demo Vignette PITL Sign-off',
  type: 'object',
  fields: [
    defineField({
      name: 'medicalWriter',
      title: 'Medical Writer',
      type: 'string',
      description: '起草 demo prose body 的医学写作责任人 (姓名)。',
      validation: (R) => R.required().min(2),
    }),
    defineField({
      name: 'clinicalReviewer',
      title: 'Clinical Reviewer',
      type: 'string',
      description: '签字临床医师 (姓名,带学位/职称)。',
      validation: (R) => R.required().min(2),
    }),
    defineField({
      name: 'signedAt',
      title: 'Signed At',
      type: 'datetime',
      description: '临床签字时间戳。',
      validation: (R) => R.required(),
    }),
  ],
  preview: {
    select: { mw: 'medicalWriter', cr: 'clinicalReviewer', at: 'signedAt' },
    prepare: ({ mw, cr, at }) => ({
      title: cr ? `MD: ${cr}` : '(unsigned)',
      subtitle: mw ? `MW: ${mw}${at ? ` · ${String(at).slice(0, 10)}` : ''}` : '',
    }),
  },
})
