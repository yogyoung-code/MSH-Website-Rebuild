import { defineType, defineField } from 'sanity'

/**
 * AI Disclosure · singleton
 * 首页 AI Delivery 模块 · AI 能力页 · Pilot 子页 共用的合规文案源。
 * 法务 + 合规双签后锁定；发布需 sign-off role = 'legal' && 'compliance'。
 */
export default defineType({
  name: 'aiDisclosure',
  title: 'AI Disclosure (singleton)',
  type: 'document',
  fields: [
    defineField({
      name: 'defaultDisclosure',
      title: 'Default Disclosure Text',
      type: 'portableText',
      description: 'Shown at bottom of AI Delivery modules when no page-level override.',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'pitlDefinition',
      title: 'PITL Definition',
      type: 'localizedText',
      description: '"Physician-in-the-Loop" expanded definition.',
    }),
    defineField({
      name: 'layers',
      title: 'Layers (3-layer system copy)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'order', type: 'number' },
          { name: 'label', type: 'localizedString', title: 'Layer label (Intake / Draft / Audit)' },
          { name: 'heading', type: 'localizedString' },
          { name: 'body', type: 'localizedText' },
          { name: 'pitlRole', type: 'string', title: 'PITL role signing off at this layer',
            options: { list: ['medical_lead', 'physician_reviewer', 'compliance_lead'] } },
          { name: 'auditFrequency', type: 'string',
            options: { list: ['per_output', 'weekly', 'monthly', 'quarterly'] } },
        ],
      }],
      validation: (R) => R.length(3),
    }),
    defineField({
      name: 'modelInventory',
      title: 'Model Inventory (optional public view)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', type: 'string' },
          { name: 'vendor', type: 'string' },
          { name: 'usage', type: 'text' },
          { name: 'public', type: 'boolean', initialValue: false,
            description: 'Only items with public=true render on website.' },
        ],
      }],
    }),
    defineField({
      name: 'complianceCerts',
      title: 'Compliance Certifications',
      type: 'array',
      of: [{ type: 'string' }],
      options: { list: ['ISO 27001', 'GDPR', 'HIPAA', 'SOC 2', 'NMPA GCP'] },
    }),
    defineField({
      name: 'lastReviewed',
      title: 'Last Reviewed',
      type: 'datetime',
      validation: (R) => R.required(),
      description: 'Must be ≤ 180 days old to publish; Studio warns at 150 days.',
    }),
    defineField({
      name: 'reviewedBy',
      title: 'Reviewed By',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
      validation: (R) => R.min(2).error('Both legal and compliance sign-off required.'),
    }),
  ],
  preview: {
    select: { reviewed: 'lastReviewed' },
    prepare: ({ reviewed }) => ({
      title: 'AI Disclosure',
      subtitle: reviewed ? `Last reviewed ${new Date(reviewed).toISOString().slice(0, 10)}` : '⚠ never reviewed',
    }),
  },
})
