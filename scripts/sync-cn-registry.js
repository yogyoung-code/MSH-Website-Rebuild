#!/usr/bin/env node
/* sync-cn-registry.js — 扫描 prototype/ 下真实存在的 *-cn.html，
   重写 assets/i18n.js 里的 CN_PAGES 注册表。
   语言切换器只对「注册表里有」的页面开放，因此这一步保证永不产生死链。
   用法： node scripts/sync-cn-registry.js        （在 repo 根目录执行） */
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..', 'prototype');
const SKIP = new Set(['_archive', 'studio', '_reference', 'prototype-archive', 'node_modules', '.git', 'docs']);
const found = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) { if (!SKIP.has(e.name)) walk(path.join(dir, e.name)); continue; }
    if (!e.name.endsWith('-cn.html')) continue;
    if (e.name.includes(' 2.')) continue;
    found.push('/' + path.relative(ROOT, path.join(dir, e.name)).split(path.sep).join('/'));
  }
})(ROOT);
found.sort();
const file = path.join(ROOT, 'assets', 'i18n.js');
const src = fs.readFileSync(file, 'utf8');
const block = '  var CN_PAGES = [\n' + found.map(p => "    '" + p + "'").join(',\n') + '\n  ];';
const RE = / {2}var CN_PAGES = \[[\s\S]*?\n {2}\];/;
if (!RE.test(src)) { console.error('× 未找到 CN_PAGES 区块，未改动'); process.exit(1); }
const out = src.replace(RE, () => block);
if (out === src) { console.log('注册表已是最新，无需改动（' + found.length + ' 个中文页）'); }
else { fs.writeFileSync(file, out); console.log('已登记 ' + found.length + ' 个中文页：'); }
found.forEach(p => console.log('  ' + p));
