import { defineType, defineField } from 'sanity'

/**
 * Proof Point · v1.0
 * 增强：evidenceTier 升为强制 enum；sourceType 与 Citation 对齐。
 * 反向引用：通过 GROQ 聚合 `*[_type=="claim" && references(^._id)]`。
 */
export default defineType({
  name: 'proofPoint',
  title: 'Proof Point',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'localizedString', validation: (R) => R.required() }),
    defineField({ name: 'summary', title: 'Summary', type: 'localizedText' }),
    defineField({
      name: 'sourceType',
      title: 'Source Type',
      type: 'string',
      options: { list: [
        'journal', 'preprint', 'conference', 'registry',
        'hkex_filing', 'press_release', 'white_paper', 'internal_dataset',
      ] },
      validation: (R) => R.required(),
    }),
    defineField({ name: 'doi', title: 'DOI', type: 'string' }),
    defineField({ name: 'pubmedId', title: 'PubMed ID', type: 'string' }),
    defineField({ name: 'url', title: 'URL', type: 'url' }),
    defineField({ name: 'accessedAt', title: 'Accessed At', type: 'date' }),
    defineField({
      name: 'evidenceTier',
      title: 'Evidence Tier',
      type: 'string',
      options: { list: [
        { title: 'Verified', value: 'verified' },
        { title: 'In Development', value: 'in_development' },
        { title: 'On Request', value: 'on_request' },
      ] },
      validation: (R) => R.required(),
      description: 'Only "verified" proof points can back published claims.',
    }),
    defineField({ name: 'custodian', title: 'Custodian (internal)', type: 'reference', to: [{ type: 'person' }] }),
    defineField({ name: 'privateFile', title: 'Private File', type: 'file',
      description: 'Studio-only. Not exposed to the public site.' }),
  ],
  preview: {
    select: { title: 'title.en', tier: 'evidenceTier' },
    prepare: ({ title, tier }) => ({ title: title || '(proof point)', subtitle: `[${tier}]` }),
  },
})
