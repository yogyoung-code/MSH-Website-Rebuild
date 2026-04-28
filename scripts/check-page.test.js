/* check-page.test.js — Smoke test for check-page.js */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const tmpDir = fs.mkdtempSync('/tmp/check-page-');
const goodPage = path.join(tmpDir, 'good.html');
const badPage = path.join(tmpDir, 'bad.html');

fs.writeFileSync(goodPage, `<!DOCTYPE html><html><head>
<title>Good Page</title>
<meta name="description" content="A test page that should pass.">
<link rel="canonical" href="https://example.com/good">
<meta property="og:title" content="x"><meta property="og:description" content="x"><meta property="og:image" content="x">
</head><body>OK</body></html>`);

fs.writeFileSync(badPage, `<!DOCTYPE html><html><head>
<title>Bad ${'X'.repeat(70)}</title>
<meta name="description" content="zero-hallucination guarantee">
</head><body>⚑ TODO</body></html>`);

try {
  execSync(`node scripts/check-page.js ${goodPage}`, { stdio: 'pipe' });
  console.log('✓ good page passes');
} catch (e) {
  console.log('✗ good page should pass:', e.stdout.toString());
  process.exit(1);
}

try {
  execSync(`node scripts/check-page.js ${badPage}`, { stdio: 'pipe' });
  console.log('✗ bad page should fail');
  process.exit(1);
} catch (e) {
  const out = e.stdout.toString();
  if (out.includes('Gate 3') && out.includes('Gate 16') && out.includes('Gate 17')) {
    console.log('✓ bad page correctly fails');
  } else {
    console.log('✗ bad page failed but missed gates:', out);
    process.exit(1);
  }
}

console.log('\nAll smoke tests passed.');
