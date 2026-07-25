#!/usr/bin/env node
/* check-page-assets.js — 上线前必跑：确认每个页面引用的本地资源
   ① 在磁盘上存在，② 已被 git 跟踪。
   ② 是关键：文件在本地好好的、但没进 commit，本地怎么测都是通过的，
   一上线就 404。2026-07-25 的 HomeCN2.jsx 事故就是这么来的
   （提交脚本按 *CN.jsx 匹配，漏掉了名字以 CN2.jsx 结尾的文件）。

   用法（在 repo 根目录）： node scripts/check-page-assets.js            */
const fs = require('fs'), path = require('path'), cp = require('child_process');
const ROOT = path.resolve(__dirname, '..', 'prototype');
const SKIP = new Set(['_archive', 'studio', '_reference', 'prototype-archive', 'node_modules', '.git', 'docs']);

const pages = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (e.isDirectory()) { if (!SKIP.has(e.name)) walk(path.join(d, e.name)); continue; }
    if (e.name.endsWith('.html') && !e.name.includes(' 2.') && !/^_(g1|g2|signature)/.test(e.name)) pages.push(path.join(d, e.name));
  }
})(ROOT);

// 一次性取出 git 跟踪清单，避免逐文件调 git
let tracked = null;
try {
  const out = cp.execSync('git ls-files -- prototype', { cwd: path.resolve(__dirname, '..'), encoding: 'utf8' });
  tracked = new Set(out.split('\n').filter(Boolean).map(p => path.resolve(__dirname, '..', p)));
} catch (e) {
  console.warn('⚠ 取不到 git 跟踪清单（' + e.message.split('\n')[0] + '），本次只检查磁盘存在性');
}

const problems = [];
for (const page of pages) {
  const src = fs.readFileSync(page, 'utf8');
  const refs = new Set();
  const re = /(?:src|href)="([^"]+)"/g;
  let m;
  while ((m = re.exec(src))) {
    const u = m[1];
    if (/^(https?:)?\/\//i.test(u) || /^(mailto:|tel:|data:|#)/i.test(u)) continue;
    if (!/\.(jsx|js|css|svg|png|jpe?g|webp|ico|woff2?)$/i.test(u)) continue;  // 只查静态资源
    refs.add(u);
  }
  for (const u of refs) {
    const abs = u.startsWith('/') ? path.join(ROOT, u.slice(1)) : path.resolve(path.dirname(page), u);
    const rel = path.relative(ROOT, page);
    if (!fs.existsSync(abs)) { problems.push(['磁盘上不存在', rel, u]); continue; }
    if (tracked && !tracked.has(abs)) problems.push(['未被 git 跟踪（上线会 404）', rel, u]);
  }
}

console.log('扫描 ' + pages.length + ' 个页面');
if (!problems.length) { console.log('✓ 全部引用的本地资源均存在且已被 git 跟踪'); process.exit(0); }
console.log('✗ 发现 ' + problems.length + ' 个问题：');
for (const [kind, page, ref] of problems) console.log('   [' + kind + ']  ' + page + '  →  ' + ref);
process.exit(1);
