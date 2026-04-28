#!/usr/bin/env node
/* check-page.js — Automated gate for prototype pages (spec §5.4) */

const fs = require('fs');
const path = require('path');
const FORBIDDEN = require('./lib/forbidden.json');

const argv = process.argv.slice(2);
if (argv.length === 0) {
  console.error('Usage: node check-page.js <path-to-html>');
  process.exit(2);
}

const file = argv[0];
const html = fs.readFileSync(file, 'utf8');
const errors = [];
const warns = [];

// Gate 3: <title> ≤ 60
const title = (html.match(/<title>([^<]*)<\/title>/i) || [, ''])[1];
if (!title) errors.push('Gate 3: <title> missing');
else if (title.length > 60) errors.push(`Gate 3: <title> > 60 chars (${title.length}): "${title}"`);

// Gate 4: <meta description> ≤ 155
const desc = (html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i) || [, ''])[1];
if (!desc) errors.push('Gate 4: <meta description> missing');
else if (desc.length > 155) errors.push(`Gate 4: description > 155 chars (${desc.length})`);

// Gate 5: <link rel="canonical">
if (!/<link\s+rel=["']canonical["']/i.test(html)) errors.push('Gate 5: canonical missing');

// Gate 6: robots
const robots = (html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i) || [, ''])[1];
if (file.includes('other-engagements') && !/noindex/i.test(robots)) {
  errors.push('Gate 6: other-engagements must be noindex,nofollow');
}

// Gate 7: OpenGraph
['og:title', 'og:description', 'og:image'].forEach(p => {
  if (!new RegExp(`<meta\\s+property=["']${p}["']`, 'i').test(html)) {
    errors.push(`Gate 7: OpenGraph ${p} missing`);
  }
});

// Gate 8: JSON-LD
if (!/<script[^>]+type=["']application\/ld\+json["']/i.test(html)) {
  warns.push('Gate 8: JSON-LD missing (schema-dependent; may be OK)');
}

// Gate 16: forbidden phrases
const lowered = html.toLowerCase();
FORBIDDEN.forEach(p => {
  if (lowered.includes(p.toLowerCase())) {
    errors.push(`Gate 16: forbidden phrase "${p}" found`);
  }
});

// Gate 17: ⚑ placeholder
if (html.includes('⚑')) {
  const lines = html.split('\n');
  lines.forEach((ln, i) => {
    if (ln.includes('⚑')) errors.push(`Gate 17: ⚑ placeholder at line ${i + 1}`);
  });
}

// Output
console.log(`\n=== check-page: ${path.basename(file)} ===`);
if (warns.length) {
  console.log('\nWARNINGS:');
  warns.forEach(w => console.log('  ⚠ ' + w));
}
if (errors.length) {
  console.log('\nERRORS:');
  errors.forEach(e => console.log('  ✗ ' + e));
  console.log(`\nFAIL · ${errors.length} error(s), ${warns.length} warning(s)\n`);
  process.exit(1);
} else {
  console.log(`\nPASS · ${warns.length} warning(s)\n`);
  process.exit(0);
}
