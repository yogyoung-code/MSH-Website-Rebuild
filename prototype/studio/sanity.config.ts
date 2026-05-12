import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { structure } from './desk-structure'

/**
 * MSH Healthcare · Sanity Studio Config
 */
export default defineConfig({
  name: 'msh-healthcare',
  title: 'MedSci Healthcare CMS',

  projectId: 'dtsbk1qu',
  dataset: 'production',

  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: '2024-01-01' }),
  ],

  schema: {
    types: schemaTypes,
  },
})
