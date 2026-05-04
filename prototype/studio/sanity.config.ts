import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { structure } from './desk-structure'

/**
 * MSH Healthcare · Sanity Studio Config
 *
 * 首次使用:
 *   1. 去 https://www.sanity.io/manage 创建项目
 *   2. 将 projectId 和 dataset 填入下方
 *   3. 在项目设置 → API → CORS 中添加:
 *      - http://localhost:3333 (Studio)
 *      - http://localhost:8080 (prototype 前端, 或你用的端口)
 *   4. npm install && npx sanity dev
 */
export default defineConfig({
  name: 'msh-healthcare',
  title: 'MedSci Healthcare CMS',

  // ⚠️ 替换为你的 Sanity 项目 ID 和 dataset
  projectId: 'YOUR_PROJECT_ID',
  dataset: 'production',

  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: '2024-01-01' }),
  ],

  schema: {
    types: schemaTypes,
  },
})
