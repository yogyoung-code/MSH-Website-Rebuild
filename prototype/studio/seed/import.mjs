#!/usr/bin/env node
/**
 * MSH Healthcare · Seed Data Import
 *
 * Usage:
 *   cd studio
 *   npm install
 *   npx sanity dataset import seed/seed.ndjson production --replace
 *
 * Or via npm script:
 *   npm run seed
 *
 * This wraps the sanity CLI dataset import for convenience.
 */

import { execSync } from 'child_process'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ndjsonPath = join(__dirname, 'seed.ndjson')

console.log('🌱 Importing seed data into Sanity...')
console.log(`   Source: ${ndjsonPath}`)

try {
  execSync(
    `npx sanity dataset import "${ndjsonPath}" production --replace`,
    { stdio: 'inherit', cwd: join(__dirname, '..') }
  )
  console.log('✅ Seed data imported successfully.')
} catch (e) {
  console.error('❌ Import failed. Make sure:')
  console.error('   1. sanity.config.ts has a valid projectId')
  console.error('   2. You are logged in (npx sanity login)')
  console.error('   3. The dataset "production" exists')
  process.exit(1)
}
