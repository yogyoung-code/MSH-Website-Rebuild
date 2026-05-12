# MSH 高保真原型 6 周实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development`（推荐）或 `superpowers:executing-plans` 逐任务执行。所有 Step 用 `- [ ]` 复选框追踪。

**Goal:** 在 6 周内交付 `medscihealthcare.com` 主站 13 个新原型页面 + 既有 7 页响应式回填，作为投资人反向尽调与美国 BD 的可访问站点。

**Architecture:** React-in-HTML + Babel standalone（无构建链）；页面为独立 .html，共享 `prototype/components/` 下 JSX 组件。文案以 Copy Deck v4.2 为 SSoT；每批先冻结文案章节再起原型；验收走 24 项 gate（自动扫描 + 人工目检 + 法务/IR 邮件回执）。

**Tech Stack:** React 18.3.1、Babel standalone 7.29.0、Lucide 0.474.0、纯 CSS（colors_and_type.css token + responsive.css 三档断点）；Cloudflare Pages 静态托管 + `_redirects` 配置 301；Node.js（仅运行 `scripts/check-page.js` 验收脚本）。

**Spec source:** `docs/superpowers/specs/2026-04-27-msh-prototype-plan-design.md`

---

## TDD 节奏（每个新页面任务通用前置）

每个新页面任务（B1-B5 共 13 页）执行前先走以下 Stub-First 顺序，符合 writing-plans skill 的 TDD 规约：

```
Step 0a：创建 stub HTML（仅 <head> + 空 body + 引脚本）
Step 0b：跑 check-page → 期望 FAIL（gate 4 description 缺失或 gate 17 ⚑ 命中）
Step 0c：实现 PageShell + 内容
Step 0d：跑 check-page → 期望 PASS
Step 0e：commit
```

后续每个页面 Task 内的 Step 编号沿用此模型，Step 1 = "写 stub 跑 FAIL"，Step 2 = "实现 + 跑 PASS"。

---

## 批次总览

| 周 | 批次 | 范围 | 产出页数 | 累计 |
|---|---|---|---|---|
| W0 | Setup | 目录初始化、组件抽离、验收脚本、Cloudflare Pages 接入 | 0 | 7（既有迁入） |
| W1 | B0 + B1 | Copy Deck v4.2 §1.3b/§3b 回灌 + §1.6 重写 + `/ai-platform` | 1 | 8 |
| W2 | B2 | `/case-studies/` 列表 + 3 详情 + §7 | 4 | 12 |
| W3 | B3 | `/insights/` 列表 + 详情模板 + §8 | 2 | 14 |
| W4 | B4 | `/about` + `/contact` + §9 / §10 | 2 | 16 |
| W5 | B5 | `/pilots/*` × 2 + `/legal/*` × 3 + `/services/other-engagements` + §11 / §12 + unpkg 自托管 | 6 | 20 |
| W6 | B6 | Homepage + 6 solutions 响应式回填（三档断点） | 0（视觉升级） | 20 |

---

## W0 · Setup（前置一次性工作）

### Task 0.1：初始化 prototype/ 目录与 git 仓库

**Files:**
- Create: `prototype/`（空目录树）
- Create: `prototype-archive/2026-04-27-claude-design-baseline/`（既有 zip 解压物归档）
- Create: `prototype/README.md`
- Modify: 项目根（git init）

- [ ] **Step 1：在项目根 `MSH Website Rebuild/` 下初始化 git**

```bash
cd "/Users/yogyoung/Documents/MSH-website-rebuild/MSH Website Rebuild"
git init
git config user.email "yog.young@gmail.com"
git config user.name "Yog Young"
echo "node_modules/" > .gitignore
echo "*.DS_Store" >> .gitignore
echo "assets/vendor/" >> .gitignore
git add .gitignore
git commit -m "chore: init repo, add .gitignore"
```

- [ ] **Step 2：创建 `prototype/` 目录骨架**

```bash
cd "/Users/yogyoung/Documents/MSH-website-rebuild/MSH Website Rebuild"
mkdir -p prototype/{components,assets/fonts,assets/logo,assets/vendor,case-studies,insights,pilots,legal,services,solutions}
mkdir -p prototype-archive/2026-04-27-claude-design-baseline
mkdir -p scripts
```

- [ ] **Step 3：把现有 zip 解压物归档（只读基线）+ 复制活跃副本到 `prototype/`**

```bash
# 归档基线（只读，不再修改）
cp -R /tmp/msh_proto/* prototype-archive/2026-04-27-claude-design-baseline/
chmod -R a-w prototype-archive/2026-04-27-claude-design-baseline/

# 活跃副本进 prototype/
cp /tmp/msh_proto/Homepage.html prototype/index.html
cp -R /tmp/msh_proto/components/* prototype/components/
cp -R /tmp/msh_proto/solutions/* prototype/solutions/
cp -R /tmp/msh_proto/assets/* prototype/assets/
```

- [ ] **Step 4：写 `prototype/README.md`**

````markdown
# MSH Prototype

**域名（生产）：** medscihealthcare.com
**域名（原型）：** prototype.medscihealthcare.com（带 `<meta robots="noindex">`）
**Tech：** React-in-HTML + Babel standalone，无构建链。本地双击 `index.html` 即可预览。

## 目录

- `index.html` — Homepage
- `solutions/*.html` — 6 个 solutions 子页（既有）
- `case-studies/`、`insights/`、`pilots/`、`legal/`、`services/` — 新批次产出
- `components/*.jsx` — 共享 React 组件
- `assets/colors_and_type.css` — 颜色与字体 token（W1-04 v1.1）
- `assets/responsive.css` — 三档断点 token（W6 加入）
- `assets/vendor/` — React/Babel/Lucide 自托管（W5 加入；不入 git）

## 验收

跑：`node scripts/check-page.js prototype/<page>.html`
通过 24 项 gate（spec §5）后才入批次 commit。
````

- [ ] **Step 5：commit setup**

```bash
git add prototype/ prototype-archive/ scripts/
git commit -m "chore(setup): scaffold prototype/, archive zip baseline"
```

### Task 0.2：抽出 Footer.jsx（Sections3.jsx 第 266 行）

**Files:**
- Modify: `prototype/components/Sections3.jsx`（移除 Footer 函数，最后导出表保留对外别名）
- Create: `prototype/components/Footer.jsx`
- Modify: `prototype/index.html`（在 `<script src="components/Sections3.jsx">` 前增加 `<script src="components/Footer.jsx">`）
- Modify: 6 个 solutions/*.html（同步增加 Footer 引用，如已通过 SolutionFooter 间接使用则只改组件依赖）

- [ ] **Step 1：从 Sections3.jsx 第 266 行起复制 `function Footer()` 整段到新文件 `prototype/components/Footer.jsx`**

复制时保留：
- 函数体完整
- 任何依赖的常量（向上回看 Sections3.jsx 是否有共享常量被 Footer 引用，如有则一并迁移或在 Footer.jsx 顶部 import）
- 文件首行注释：`/* Footer.jsx — Site footer per IA §3, extracted from Sections3.jsx (2026-04-27) */`
- 文件尾行追加：`window.Footer = Footer;`（Babel-standalone 跨文件必须，与 Header.jsx / Hero.jsx 等模式一致）

- [ ] **Step 2：从 Sections3.jsx 移除 Footer 函数定义 + window 暴露**

定位并删除：
- 第 265 行注释 `// Footer per IA §3`
- 第 266 行起 `function Footer() { ... }` 整体
- Sections3.jsx 文件尾部 `window.Footer = Footer;`（约第 321 行，已迁移到 Footer.jsx 中）

确认 Sections3.jsx 中 `Final CTA` 之后是否仍 `<Footer />` 渲染，如有则保留（Footer 全局可见即可，无需在 Sections3 内调用）。

- [ ] **Step 3：所有引用 Sections3 的 HTML 增加 Footer 脚本标签**

```html
<!-- 在 <script ... Sections3.jsx ...> 之前增加 -->
<script type="text/babel" src="components/Footer.jsx"></script>
```

涉及文件：
- `prototype/index.html`
- `prototype/solutions/entering-china.html`
- `prototype/solutions/going-global-us.html`
- `prototype/solutions/medical-evidence.html`
- `prototype/solutions/physician-engagement.html`
- `prototype/solutions/medical-communications.html`
- `prototype/solutions/cross-border-medical-content-sprint.html`

- [ ] **Step 4：浏览器自检**

```bash
open prototype/index.html
# 检查：页面正常渲染，控制台无错；Footer 4 列结构出现
```

- [ ] **Step 5：commit**

```bash
git add prototype/components/Footer.jsx prototype/components/Sections3.jsx prototype/index.html prototype/solutions/*.html
git commit -m "refactor(components): extract Footer.jsx from Sections3.jsx"
```

### Task 0.3：创建 PageShell.jsx 通用页壳

**Files:**
- Create: `prototype/components/PageShell.jsx`

PageShell 用于所有非 Homepage、非 Solutions 的新页面（ai-platform、case-studies、insights、about、contact、pilots、legal、services/other-engagements），统一提供 Header + main + Footer 三段结构。

- [ ] **Step 1：写 `prototype/components/PageShell.jsx`**

```jsx
/* PageShell.jsx — Generic non-solutions page shell (B1+) */

function PageShell({ title, subtitle, eyebrow, children, hero, breadcrumbs }) {
  return (
    <div style={{ background: 'var(--bg-1)', color: 'var(--fg-1)', minHeight: '100vh' }}>
      <Header />
      {hero || (
        <section style={{
          padding: 'clamp(48px, 8vw, 96px) clamp(24px, 6vw, 96px)',
          maxWidth: 1280,
          margin: '0 auto'
        }}>
          {breadcrumbs && (
            <nav aria-label="Breadcrumb" style={{ marginBottom: 16, fontSize: 14, color: 'var(--fg-3)' }}>
              {breadcrumbs.map((b, i) => (
                <span key={i}>
                  {i > 0 && <span style={{ margin: '0 8px' }}>/</span>}
                  {b.href ? <a href={b.href} style={{ color: 'inherit' }}>{b.label}</a> : <span>{b.label}</span>}
                </span>
              ))}
            </nav>
          )}
          {eyebrow && (
            <div style={{
              fontFamily: 'var(--font-slogan)',
              fontSize: 14,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--brand-primary-700)',
              marginBottom: 16
            }}>
              {eyebrow}
            </div>
          )}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 6vw, 64px)',
            lineHeight: 1.1,
            margin: '0 0 24px'
          }}>
            {title}
          </h1>
          {subtitle && (
            <p style={{
              fontSize: 'clamp(16px, 2vw, 22px)',
              lineHeight: 1.5,
              maxWidth: 720,
              color: 'var(--fg-2)'
            }}>
              {subtitle}
            </p>
          )}
        </section>
      )}
      <main>{children}</main>
      <Footer />
    </div>
  );
}

window.PageShell = PageShell;
```

- [ ] **Step 2：commit**

```bash
git add prototype/components/PageShell.jsx
git commit -m "feat(components): add PageShell generic page wrapper"
```

**所有新组件文件均必须以 `window.<ComponentName> = <ComponentName>;` 收尾。** Babel-standalone 加载多文件时不共享闭包，必须挂全局。下面所有 Task 的组件代码块均已内置此模式；如自实现遗漏，HTML 渲染会报 `<X> is not defined`。

### Task 0.4：创建 ContentBlocks.jsx 4 块原子内容

**Files:**
- Create: `prototype/components/ContentBlocks.jsx`

提供 4 块原子组件覆盖 80% 新页面正文：`ProseBlock` / `TwoColumn` / `StatStrip` / `EvidenceList`。

- [ ] **Step 1：写 `prototype/components/ContentBlocks.jsx`**

```jsx
/* ContentBlocks.jsx — Atomic content units (B1+) */

function ProseBlock({ heading, children, anchor }) {
  return (
    <section id={anchor} style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      maxWidth: 1280,
      margin: '0 auto'
    }}>
      {heading && (
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 4vw, 40px)',
          margin: '0 0 24px',
          lineHeight: 1.2
        }}>{heading}</h2>
      )}
      <div style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--fg-2)' }}>
        {children}
      </div>
    </section>
  );
}

function TwoColumn({ left, right, ratio = '1fr 1fr', anchor }) {
  return (
    <section id={anchor} style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      maxWidth: 1280,
      margin: '0 auto'
    }}>
      <div className="two-col-grid" style={{
        display: 'grid',
        gridTemplateColumns: ratio,
        gap: 'clamp(24px, 4vw, 64px)'
      }}>
        <div>{left}</div>
        <div>{right}</div>
      </div>
    </section>
  );
}

function StatStrip({ items, anchor }) {
  // items: [{ value, label, source?, year? }, ...]
  return (
    <section id={anchor} style={{
      padding: 'clamp(32px, 4vw, 64px) clamp(24px, 6vw, 96px)',
      background: 'var(--brand-primary-50, #f5f7fa)',
      borderTop: '1px solid var(--border-1)',
      borderBottom: '1px solid var(--border-1)'
    }}>
      <div className="stat-strip-grid" style={{
        maxWidth: 1280,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: `repeat(${items.length}, 1fr)`,
        gap: 'clamp(24px, 4vw, 48px)'
      }}>
        {items.map((it, i) => (
          <div key={i} style={{ textAlign: 'left' }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              color: 'var(--brand-primary-700)',
              lineHeight: 1
            }}>{it.value}</div>
            <div style={{ fontSize: 14, color: 'var(--fg-2)', marginTop: 8 }}>{it.label}</div>
            {(it.source || it.year) && (
              <div style={{ fontSize: 12, color: 'var(--fg-3)', marginTop: 4 }}>
                {it.source}{it.source && it.year ? ' · ' : ''}{it.year}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceList({ tier = 'verified', items, anchor }) {
  // items: [{ statement, source, year, approvedBy }]
  // tier: 'verified' | 'inDevelopment' | 'onRequest'
  const tierConfig = {
    verified:      { label: 'VERIFIED',       color: 'var(--brand-success-600, #047857)' },
    inDevelopment: { label: 'IN DEVELOPMENT', color: 'var(--brand-warn-600, #b45309)' },
    onRequest:     { label: 'ON REQUEST',     color: 'var(--fg-3)' },
  }[tier];
  return (
    <section id={anchor} style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      maxWidth: 1280,
      margin: '0 auto'
    }}>
      <div style={{
        display: 'inline-block',
        padding: '4px 12px',
        background: tierConfig.color,
        color: '#fff',
        fontFamily: 'var(--font-slogan)',
        fontSize: 12,
        letterSpacing: '0.12em',
        marginBottom: 24
      }}>
        {tierConfig.label}
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((it, i) => (
          <li key={i} style={{
            padding: '20px 0',
            borderTop: i === 0 ? '1px solid var(--border-1)' : 'none',
            borderBottom: '1px solid var(--border-1)'
          }}>
            <div style={{ fontSize: 17, lineHeight: 1.5, color: 'var(--fg-1)' }}>
              {it.statement}
            </div>
            <div style={{ fontSize: 13, color: 'var(--fg-3)', marginTop: 8 }}>
              {it.source} · {it.year}
              {it.approvedBy && <> · approved by {it.approvedBy}</>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

window.ProseBlock = ProseBlock;
window.TwoColumn = TwoColumn;
window.StatStrip = StatStrip;
window.EvidenceList = EvidenceList;
```

- [ ] **Step 2：在 `prototype/index.html` 与未来所有 PageShell 页面中加入 ContentBlocks.jsx 加载**

（首次只加 prototype/index.html 验证不破坏 Homepage，新批次页面在自身 HTML 中加）

- [ ] **Step 3：commit**

```bash
git add prototype/components/ContentBlocks.jsx prototype/index.html
git commit -m "feat(components): add ContentBlocks (Prose/TwoColumn/StatStrip/EvidenceList)"
```

### Task 0.5：创建 responsive.css 三档断点 token

**Files:**
- Create: `prototype/assets/responsive.css`

- [ ] **Step 1：写 `prototype/assets/responsive.css`**

```css
/* responsive.css — Three-tier breakpoint tokens (IA §13) */

/* Mobile: ≤ 640px */
@media (max-width: 640px) {
  .two-col-grid { grid-template-columns: 1fr !important; }
  .stat-strip-grid { grid-template-columns: 1fr 1fr !important; }
  .nav-desktop { display: none !important; }
  .nav-mobile { display: block !important; }
  .hero-right-services { margin-top: 32px; }
}

/* Tablet: 641 - 1024px */
@media (min-width: 641px) and (max-width: 1024px) {
  .two-col-grid { grid-template-columns: 1fr !important; }
  .stat-strip-grid { grid-template-columns: repeat(3, 1fr); }
  .nav-desktop .nav-item-tertiary { display: none; }
  .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
}

/* Desktop: ≥ 1025px — defaults */
@media (min-width: 1025px) {
  /* Full layout assumed by component defaults */
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 2：在 `prototype/index.html` `<head>` 加入引用**

```html
<link rel="stylesheet" href="assets/responsive.css">
```

注意：W6 才把 viewport 从 `width=1280` 改成 `width=device-width, initial-scale=1`。当前仅引入 stylesheet，不改 viewport。

- [ ] **Step 3：commit**

```bash
git add prototype/assets/responsive.css prototype/index.html
git commit -m "feat(assets): add responsive.css three-tier breakpoint tokens"
```

### Task 0.6：写 scripts/check-page.js 验收脚本

**Files:**
- Create: `scripts/check-page.js`
- Create: `scripts/check-page.test.js`（自检 fixtures）
- Create: `scripts/lib/forbidden.json`（从 W2-05 forbiddenPhrases.ts 提取的 JSON 镜像，供 Node 直接 require）

24 项 gate 中可自动化的 8 项（spec §5.4）：1-8 基础 SEO + 16-18 文案/控制台。

- [ ] **Step 1：写 `scripts/lib/forbidden.json`（手填基线，与 Copy Deck §6.3 + W2-05 forbiddenPhrases.ts 对齐）**

> **修订**：原计划用 regex 从 .ts 自动提取；复核指出会误抓 import / 类型名。改为手填，按 Copy Deck §6.3 维护。

```json
[
  "zero-hallucination",
  "100% accurate",
  "industry-leading",
  "guaranteed",
  "guarantee",
  "cure",
  "cures",
  "AI doctor",
  "world-class",
  "best-in-class",
  "revolutionary"
]
```

如 W2-05 forbiddenPhrases.ts 后续新增词条，手工同步本 JSON（后续可写 sync 脚本，本计划不做）。

- [ ] **Step 2：写 `scripts/check-page.js`**

```javascript
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
```

- [ ] **Step 3：写 `scripts/check-page.test.js` 自检 fixtures**

```javascript
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
```

- [ ] **Step 4：跑自检**

```bash
node scripts/check-page.test.js
```

预期输出：`All smoke tests passed.`

- [ ] **Step 5：commit**

```bash
git add scripts/
git commit -m "feat(scripts): add check-page.js with smoke test"
```

### Task 0.7：unpkg 资源自托管下载（W0 提前，避免 W2-W4 演示翻车）

> **修订**：原 spec/计划草稿把此任务排在 W5；复核指出若 unpkg 在 W2-W4 抖动会停摆全部演示。提前到 W0 后，所有新页面从一开始就引相对路径 `assets/vendor/...`，离线/CDN 故障都不影响。

**Files:**
- Create: `prototype/assets/vendor/react.development.js`
- Create: `prototype/assets/vendor/react-dom.development.js`
- Create: `prototype/assets/vendor/babel.min.js`
- Create: `prototype/assets/vendor/lucide.min.js`

- [ ] **Step 1：下载所有依赖**

```bash
cd "/Users/yogyoung/Documents/MSH-website-rebuild/MSH Website Rebuild/prototype/assets/vendor"
curl -O https://unpkg.com/react@18.3.1/umd/react.development.js
curl -O https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js
curl -O https://unpkg.com/@babel/standalone@7.29.0/babel.min.js
curl -O https://unpkg.com/lucide@0.474.0/dist/umd/lucide.min.js
ls -la
# 预期：4 个 .js 文件，总大小 ≈ 6 MB
```

- [ ] **Step 2：把既有 7 页（Homepage + 6 solutions）的 unpkg URL 改为相对路径**

子目录页面（solutions/*.html）需要相对路径 `../assets/vendor/...`；根页面（index.html）用 `assets/vendor/...`。

```bash
cd "/Users/yogyoung/Documents/MSH-website-rebuild/MSH Website Rebuild/prototype"

# 根目录 index.html
sed -i.bak \
  -e 's|https://unpkg.com/react@18.3.1/umd/react.development.js|assets/vendor/react.development.js|g' \
  -e 's|https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js|assets/vendor/react-dom.development.js|g' \
  -e 's|https://unpkg.com/@babel/standalone@7.29.0/babel.min.js|assets/vendor/babel.min.js|g' \
  -e 's|https://unpkg.com/lucide@0.474.0/dist/umd/lucide.min.js|assets/vendor/lucide.min.js|g' \
  index.html

# 子目录 solutions/*.html（多一层 ../）
sed -i.bak \
  -e 's|https://unpkg.com/react@18.3.1/umd/react.development.js|../assets/vendor/react.development.js|g' \
  -e 's|https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js|../assets/vendor/react-dom.development.js|g' \
  -e 's|https://unpkg.com/@babel/standalone@7.29.0/babel.min.js|../assets/vendor/babel.min.js|g' \
  -e 's|https://unpkg.com/lucide@0.474.0/dist/umd/lucide.min.js|../assets/vendor/lucide.min.js|g' \
  solutions/*.html

find . -name "*.bak" -delete
```

- [ ] **Step 3：验证 file:// 双击仍可用**

```bash
open prototype/index.html
# 关 wifi → 仍应渲染（vendor 全本地）
open prototype/solutions/entering-china.html
```

- [ ] **Step 4：所有后续新建 HTML 页面遵循同样规则**

- 根目录新页面：`<script src="assets/vendor/react.development.js"></script>` 等
- 二级目录（case-studies/、insights/、pilots/、legal/、services/）：`<script src="../assets/vendor/react.development.js"></script>` 等

- [ ] **Step 5：commit**

```bash
git add prototype/index.html prototype/solutions/ prototype/assets/vendor/
# 注意：assets/vendor/ 应在 .gitignore 中，但因为是部署源，本项目把它入 git
# 如 .gitignore 已排除 vendor，临时去除该规则或用 git add -f
git commit -m "chore(deploy): self-host React/Babel/Lucide in W0; switch all existing pages to relative vendor paths"
```

**.gitignore 决策**：因为部署需要 vendor 文件，把 `.gitignore` 中 `assets/vendor/` 行删掉。否则 Cloudflare Pages 部署时无 vendor。

```bash
sed -i.bak '/assets\/vendor\//d' .gitignore && rm -f .gitignore.bak
git add .gitignore
git commit -m "chore: track assets/vendor/ for deployment"
```

### Task 0.8：Cloudflare Pages 接入 + `_redirects` 配置占位

**Files:**
- Create: `prototype/_redirects`（Cloudflare Pages 约定文件）
- 操作：在 Cloudflare Pages 控制台创建项目（人工，记录 instructions）

- [ ] **Step 1：写 `prototype/_redirects`**

```
# /ai-enabled-delivery → /ai-platform (B1 deliverable)
# 当 B1 (W1) 上线后取消注释下行
# /ai-enabled-delivery /ai-platform 301

# IA §6 历史保留 URL（旧外链 SEO 继承）
# 仅在目标 URL 已上线后启用，否则会 301 到 404

# W0 即可启用（目标在既有 6 solutions 页中）：
/china                /solutions/entering-china     301
/usa                  /solutions/going-global-us    301
/us                   /solutions/going-global-us    301

# W5 (B5) 上线 /pilots/china-evidence-sprint 后取消注释下行：
# /pilot                /pilots/china-evidence-sprint 301
```

注意：B1 上线时把 `/ai-enabled-delivery` 行取消注释。

- [ ] **Step 2：人工任务（一次性）**

在 Cloudflare 控制台：
1. 创建新 Pages 项目，关联 GitHub 仓库（如有）或直接上传 `prototype/` 目录
2. 域名绑定：`prototype.medscihealthcare.com`
3. 验证 `_redirects` 生效（部署后访问 `/china` 看是否 301 到 `/solutions/entering-china`）
4. 把控制台访问凭据 / 项目 ID 记录到团队密码管理器

把 instructions 写入 `prototype/README.md` 末尾的"部署"小节。

- [ ] **Step 3：commit**

```bash
git add prototype/_redirects prototype/README.md
git commit -m "chore(deploy): add _redirects + Cloudflare Pages instructions"
```

### Task 0.9：W0 Gate 验收

- [ ] **Step 1：跑全部页面 check-page**

```bash
for f in prototype/index.html prototype/solutions/*.html; do
  node scripts/check-page.js "$f" || true
done
```

预期：既有 7 页中可能有 Gate 6/7/8 警告（OpenGraph 等还未补全），但不能有 Gate 16/17 错误。

- [ ] **Step 2：浏览器自检**

```bash
open prototype/index.html
# 检查：渲染无回退，控制台无 error，Footer 4 列出现
open prototype/solutions/entering-china.html
# 检查：同上
```

- [ ] **Step 3：W0 收尾 commit**

```bash
git tag w0-setup-complete
git log --oneline | head -10
```

---

## W1 · B0 + B1（Copy Deck v4.2 §1.3b/§3b 回灌 + §1.6 重写 + `/ai-platform`）

### Task 1.1：Copy Deck v4.2 §1.3b 回灌

**Files:**
- Modify: `梅斯健康集团官网重构 Copy Deck v4.1.docx` → 另存为 `梅斯健康集团官网重构 Copy Deck v4.2.docx`
- 来源：`prototype/components/Hero.jsx`（Hero 右列 4 业务块卡）

- [ ] **Step 1：从 Hero.jsx 提取 4 业务块卡文案**

打开 `prototype/components/Hero.jsx`，定位 "WHAT WE DELIVER" 数组，逐条记录：
- 编号（01–04）
- Eyebrow（如 EVIDENCE / PHYSICIANS / COMMUNICATIONS / PLATFORM）
- 标题（如 Medical Evidence）
- 一行交付物（如 RWE · Registry · Lit · HEOR）
- 跳转目标（href）

也提取底部 stat strip 3 项：3.33M+ · AI + PITL · 2415.HK。

- [ ] **Step 2：在 Copy Deck v4.2 中新增 §1.3b 章节**

章节结构：
```
§1.3b WHAT WE DELIVER（Hero 右列 4 业务块卡）

[Eyebrow Label] What we deliver  [Badge] 4 Blocks

01 · EVIDENCE
Medical Evidence
RWE · Registry · Literature Review · HEOR
[href: #services / /solutions/medical-evidence]

02 · PHYSICIANS
Physician Engagement
3.33M+ Network · Advisory Board · KOL · CME
[href: #services / /solutions/physician-engagement]

03 · COMMUNICATIONS
Medical Communications
Publications · Congress · Localization
[href: #services / /solutions/medical-communications]

04 · PLATFORM
AI-Enabled Platform
AI Drafts · PITL Review · Bilingual QC
[href: #ai / /ai-platform]

[Stat Strip 底部]
3.33M+   Physician Network          Source: Internal · Year: 2025 · approvedBy: IR
AI + PITL  Delivery Model            Source: Internal · Year: 2026 · approvedBy: Legal
2415.HK   HKEX Listed                Source: HKEX · Year: 2024 · approvedBy: IR
```

- [ ] **Step 3：把 v4.2 .docx 提交（送法务/IR 二审）**

```bash
git add "梅斯健康集团官网重构 Copy Deck v4.2.docx"
git commit -m "docs(copy): add Copy Deck v4.2 §1.3b WHAT WE DELIVER (back-flow from Hero.jsx)"
```

- [ ] **Step 4：发邮件给法务 + IR**

模板：
> Subject: Copy Deck v4.2 §1.3b 审核（Homepage Hero WHAT WE DELIVER 4 卡）
> 附件：Copy Deck v4.2.docx
> 备注：本章节为反向回灌，文案已在 Homepage 原型上线 ≥ 1 周；本次为文档侧补录，请确认无表述偏差。回执存档于 `docs/approvals/`。

收到回执后：

```bash
mkdir -p docs/approvals
# 把回执邮件 .eml 或截图存进去
git add docs/approvals/
git commit -m "docs(approvals): legal+IR sign-off for Copy Deck v4.2 §1.3b"
```

### Task 1.2：Copy Deck v4.2 §3b ×3 回灌

来源：`prototype/solutions/PageMedicalEvidence.jsx`、`PagePhysicianEngagement.jsx`、`PageMedicalCommunications.jsx`。

> **路径说明**：spec §3.1 把这些 JSX 描述为"业务块落地页 ×3"未明确目录；现有 zip 基线把 PageXxx.jsx 放在 `solutions/` 下而非 `components/`，本计划尊重基线实际路径。

- [ ] **Step 1：对每个 PageXxx.jsx 提取以下内容到 v4.2 §3b.{1,2,3}**

每页提取：
- Page Title（如 Medical Evidence）
- Intro 段
- What's Included 4–6 条
- Who It's For 段
- Engagement Models 矩阵
- Proof Points 三层（Verified / In Development / On Request）
- Final CTA

- [ ] **Step 2：写入 Copy Deck v4.2 §3b**

```
§3b 业务块落地页 ×3

§3b.1 Medical Evidence  → /solutions/medical-evidence
  [按上述结构填入]

§3b.2 Physician Engagement → /solutions/physician-engagement
  [...]

§3b.3 Medical Communications → /solutions/medical-communications
  [...]
```

- [ ] **Step 3：commit + 送审**

```bash
git add "梅斯健康集团官网重构 Copy Deck v4.2.docx"
git commit -m "docs(copy): add §3b business-block landing pages (back-flow from PageXxx.jsx)"
```

发送同 Task 1.1 Step 4，请求法务/IR 二审。

### Task 1.3：Copy Deck v4.2 §1.6 重写

新内容（区别于 v4.1）：
- URL 改 `/ai-platform`
- 4 步 PITL 流程图（文字版即可）
- 合规边界（禁词清单）
- 与 Homepage `#ai` 区双层引用关系明示

- [ ] **Step 1：起草 §1.6 替换版本**

参考 spec §3.1 章节地图，写出：

```
§1.6 AI-Enabled Delivery（重写版）

URL：/ai-platform（原 /ai-enabled-delivery 已 301）

H1：Faster, more structured, medically reviewed delivery.

Subhead：MedSci pairs AI with Physician-In-The-Loop (PITL) review at every step.
We don't replace experts — we let them work on the highest-leverage decisions.

──────────────────────────────────
4 步 PITL 流程

01 · Ingestion
   Input：clinical literature, registries, sponsor data
   AI：parse, structure, tag

02 · Gap Analysis
   AI：identify evidence gaps vs. regulatory targets
   Physician：validate gap framing

03 · PITL Review
   Physician：line-by-line review of AI drafts
   AI：track changes, learn patterns

04 · Deliverable
   Output：sponsor-ready evidence package, dossier, manuscript
   Both：joint sign-off, full audit log
──────────────────────────────────

3 能力块（保留 v4.1 主体，更新合规措辞）
- Faster Evidence Review
- AI-Assisted Scientific Drafting
- AI-Enhanced Medical Content Production

合规边界（必须出现）
We do not claim:
- "zero-hallucination"
- "100% accurate"
- "AI doctor"
- "cures" or "guarantees"

What we do claim, with audit trails:
- Faster review cycles, by N% (verified per project)
- Higher consistency in bilingual delivery
- Traceable provenance for every AI output

与 Homepage 的关系
- Homepage #ai 区为速览（3 段简介 + 4 步图）
- /ai-platform 为详尽页（含技术原理、Case 引用、CTA）
- 两处文案不重复，链接互通
```

- [ ] **Step 2：写入 Copy Deck v4.2，替换 v4.1 §1.6**

- [ ] **Step 3：commit + 送审（法务必审）**

```bash
git add "梅斯健康集团官网重构 Copy Deck v4.2.docx"
git commit -m "docs(copy): rewrite §1.6 AI-Enabled Delivery for /ai-platform URL"
```

### Task 1.4：实现 `/ai-platform` 页面

**Files:**
- Create: `prototype/ai-platform.html`
- Create: `prototype/components/StepDiagram.jsx`
- Create: `prototype/components/ComplianceCallout.jsx`

- [ ] **Step 1：写 `prototype/components/StepDiagram.jsx`**

```jsx
/* StepDiagram.jsx — 4-step PITL process (B1) */

function StepDiagram({ steps }) {
  // steps: [{ num, title, ai, physician }]
  return (
    <section style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      maxWidth: 1280,
      margin: '0 auto'
    }}>
      <div className="step-grid" style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
        gap: 'clamp(16px, 2vw, 32px)',
        position: 'relative'
      }}>
        {steps.map((s, i) => (
          <div key={i} style={{
            border: '1px solid var(--border-1)',
            padding: 24,
            background: 'var(--bg-1)'
          }}>
            <div style={{
              fontFamily: 'var(--font-slogan)',
              fontSize: 12,
              letterSpacing: '0.12em',
              color: 'var(--brand-primary-700)',
              marginBottom: 12
            }}>STEP {s.num}</div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 22,
              margin: '0 0 16px',
              lineHeight: 1.2
            }}>{s.title}</h3>
            {s.ai && (
              <div style={{ fontSize: 14, color: 'var(--fg-2)', marginBottom: 8 }}>
                <strong>AI:</strong> {s.ai}
              </div>
            )}
            {s.physician && (
              <div style={{ fontSize: 14, color: 'var(--fg-2)' }}>
                <strong>Physician:</strong> {s.physician}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

window.StepDiagram = StepDiagram;
```

- [ ] **Step 2：写 `prototype/components/ComplianceCallout.jsx`**

```jsx
/* ComplianceCallout.jsx — Compliance boundaries (B1) */

function ComplianceCallout({ doNotClaim, doClaim }) {
  return (
    <section style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      maxWidth: 1280,
      margin: '0 auto'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(24px, 4vw, 64px)',
        background: 'var(--bg-2, #fafbfc)',
        padding: 'clamp(24px, 4vw, 48px)',
        border: '1px solid var(--border-1)'
      }} className="two-col-grid">
        <div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            margin: '0 0 16px',
            color: 'var(--brand-warn-700, #92400e)'
          }}>What we do not claim</h3>
          <ul style={{ paddingLeft: 20, margin: 0, color: 'var(--fg-2)' }}>
            {doNotClaim.map((p, i) => <li key={i} style={{ margin: '8px 0' }}>{p}</li>)}
          </ul>
        </div>
        <div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            margin: '0 0 16px',
            color: 'var(--brand-success-700, #065f46)'
          }}>What we do claim, with audit trails</h3>
          <ul style={{ paddingLeft: 20, margin: 0, color: 'var(--fg-2)' }}>
            {doClaim.map((p, i) => <li key={i} style={{ margin: '8px 0' }}>{p}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

window.ComplianceCallout = ComplianceCallout;
```

- [ ] **Step 3a：写 stub HTML（仅 head + 空 body + 脚本引用），跑 check-page → 期望 FAIL**

```bash
# 创建 prototype/ai-platform.html stub（只含 <head> + 空 body）
cat > prototype/ai-platform.html << 'STUB'
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>AI Platform — MedSci ⚑ TODO</title>
</head>
<body><!-- TODO --></body>
</html>
STUB

node scripts/check-page.js prototype/ai-platform.html
# 期望：FAIL with Gate 4 (description missing) + Gate 5 (canonical missing) + Gate 17 (⚑ found)
```

- [ ] **Step 3b：用完整版替换 stub**

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=1280">
<title>AI Platform — MedSci Healthcare</title>
<meta name="description" content="AI-Enabled Delivery with Physician-In-The-Loop (PITL). Faster, structured, medically reviewed evidence and content for global pharma teams.">
<link rel="canonical" href="https://medscihealthcare.com/ai-platform">
<link rel="alternate" hreflang="en" href="https://medscihealthcare.com/ai-platform">
<meta name="robots" content="index, follow">
<meta property="og:title" content="AI Platform — MedSci Healthcare">
<meta property="og:description" content="Faster, structured, medically reviewed delivery via AI + PITL.">
<meta property="og:image" content="https://medscihealthcare.com/assets/og/ai-platform-1200x630.png">
<meta property="og:url" content="https://medscihealthcare.com/ai-platform">
<meta name="twitter:card" content="summary_large_image">
<link rel="stylesheet" href="assets/colors_and_type.css">
<link rel="stylesheet" href="assets/responsive.css">
<link rel="icon" type="image/svg+xml" href="assets/logo/medsci-healthcare-mark.svg">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI-Enabled Delivery (MedSci Healthcare)",
  "provider": { "@type": "Organization", "name": "MedSci Healthcare", "url": "https://medscihealthcare.com" },
  "serviceType": "AI-assisted medical evidence and content with Physician-In-The-Loop review"
}
</script>
<style>
  :root {
    --font-display: "Footlight MT Light", "Footlight MT", "Source Serif 4", Georgia, serif;
    --font-slogan: "Footlight MT Light", "Footlight MT", Georgia, serif;
  }
  html, body { margin: 0; padding: 0; background: var(--bg-1); color: var(--fg-1); font-family: var(--font-ui); }
  *, *::before, *::after { box-sizing: border-box; }
  a { color: inherit; }
</style>
</head>
<body>
<div id="root"></div>

<!-- 自托管 vendor (W0 Task 0.7 已下载,使用相对路径) -->
<script src="assets/vendor/react.development.js"></script>
<script src="assets/vendor/react-dom.development.js"></script>
<script src="assets/vendor/babel.min.js"></script>
<script src="assets/vendor/lucide.min.js"></script>

<script type="text/babel" src="components/Button.jsx"></script>
<script type="text/babel" src="components/Header.jsx"></script>
<script type="text/babel" src="components/Footer.jsx"></script>
<script type="text/babel" src="components/PageShell.jsx"></script>
<script type="text/babel" src="components/ContentBlocks.jsx"></script>
<script type="text/babel" src="components/StepDiagram.jsx"></script>
<script type="text/babel" src="components/ComplianceCallout.jsx"></script>

<script type="text/babel">
function App() {
  React.useEffect(() => {
    const t = setTimeout(() => window.lucide && lucide.createIcons(), 50);
    return () => clearTimeout(t);
  });

  const steps = [
    { num: '01', title: 'Ingestion', ai: 'Parse, structure, tag clinical literature, registries, sponsor data', physician: 'Validate scope and source quality' },
    { num: '02', title: 'Gap Analysis', ai: 'Identify evidence gaps vs. regulatory targets', physician: 'Validate gap framing' },
    { num: '03', title: 'PITL Review', ai: 'Track changes, learn patterns', physician: 'Line-by-line review of AI drafts' },
    { num: '04', title: 'Deliverable', ai: 'Generate sponsor-ready package with audit log', physician: 'Joint sign-off, final QC' }
  ];

  return (
    <PageShell
      eyebrow="AI-Enabled Delivery"
      title="Faster, more structured, medically reviewed delivery."
      subtitle="MedSci pairs AI with Physician-In-The-Loop (PITL) review at every step. We don't replace experts — we let them work on the highest-leverage decisions."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'AI Platform' }]}
    >
      <ProseBlock heading="How we combine AI + PITL" anchor="how">
        <p>Every project runs through a four-stage cycle. Each stage has explicit AI-only and physician-only checkpoints, with a shared audit log spanning the whole flow.</p>
      </ProseBlock>

      <StepDiagram steps={steps} />

      <ProseBlock heading="Three capability tracks" anchor="capabilities">
        <ul>
          <li><strong>Faster Evidence Review</strong> — RWE / registry / literature synthesis with AI extraction and PITL validation.</li>
          <li><strong>AI-Assisted Scientific Drafting</strong> — manuscript, dossier, regulatory submission drafts with audit trails.</li>
          <li><strong>AI-Enhanced Medical Content Production</strong> — bilingual congress, publication, and localization workflows.</li>
        </ul>
      </ProseBlock>

      <ComplianceCallout
        doNotClaim={[
          '"zero-hallucination"',
          '"100% accurate"',
          '"AI doctor"',
          '"cures" or "guarantees"'
        ]}
        doClaim={[
          'Faster review cycles, by N% (verified per project)',
          'Higher consistency in bilingual delivery',
          'Traceable provenance for every AI output'
        ]}
      />

      <StatStrip items={[
        { value: '3.33M+', label: 'Physician Network', source: 'Internal', year: '2025' },
        { value: 'AI + PITL', label: 'Delivery Model', source: 'Internal', year: '2026' },
        { value: '2415.HK', label: 'HKEX Listed', source: 'HKEX', year: '2024' }
      ]} />

      <ProseBlock heading="Talk to an Expert" anchor="cta">
        <p><a href="/contact" style={{
          display: 'inline-block', padding: '14px 28px',
          background: 'var(--brand-primary-700)', color: '#fff',
          textDecoration: 'none', fontFamily: 'var(--font-slogan)',
          letterSpacing: '0.08em'
        }}>Contact our team →</a></p>
      </ProseBlock>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
</script>
</body>
</html>
```

- [ ] **Step 4：浏览器自检**

```bash
open prototype/ai-platform.html
```

- 验证：渲染正常，4 步流程横向卡片，合规 callout 双列，stat strip 三列
- 控制台无 error

- [ ] **Step 5：跑 check-page**

```bash
node scripts/check-page.js prototype/ai-platform.html
```

预期：PASS（24 项可自动 8 项通过）。

- [ ] **Step 6：commit**

```bash
git add prototype/ai-platform.html prototype/components/StepDiagram.jsx prototype/components/ComplianceCallout.jsx
git commit -m "feat(ai-platform): implement /ai-platform page with PITL diagram + compliance callout"
```

### Task 1.5：B1 部署 + 301 上线

- [ ] **Step 1：在 `prototype/_redirects` 取消 `/ai-enabled-delivery` 注释**

```
/ai-enabled-delivery /ai-platform 301
/china                /solutions/entering-china     301
/usa                  /solutions/going-global-us    301
/us                   /solutions/going-global-us    301
/pilot                /pilots/china-evidence-sprint 301
```

- [ ] **Step 2：部署到 Cloudflare Pages**

通过 Pages 控制台触发部署，或 push 到关联 git 分支。

- [ ] **Step 3：301 验证**

```bash
curl -I https://prototype.medscihealthcare.com/ai-enabled-delivery
# 预期：HTTP/2 301
# Location: /ai-platform
```

- [ ] **Step 4：W1 收尾 commit（tag 在 Task 1.6 Gate 通过后）**

```bash
git add prototype/_redirects
git commit -m "chore(deploy): activate /ai-enabled-delivery → /ai-platform 301"
```

### Task 1.6：W1 Gate 验收清单 + tag

- [ ] §1.3b / §3b 法务/IR 邮件回执已存档
- [ ] §1.6 法务回执已存档
- [ ] check-page.js 对 ai-platform.html PASS
- [ ] 桌面 1280 视图无错位（ai-platform.html viewport 暂锁 1280；PageShell 内部 `clamp()` 仅在 W6 解锁 viewport 后才生效，目前不依赖移动端验收）
- [ ] 301 验证通过
- [ ] Footer Investor Relations 链接 `rel="external noopener"` 生效（B1 加 Footer 时已配置）
- [ ] 全部 Gate 过后打 tag：`git tag w1-b0-b1-complete`

---

## W2 · B2（`/case-studies/` 列表 + 3 详情 + Copy Deck §7）

### Task 2.1：Copy Deck v4.2 §7 撰写（前置）

§7.0 模板 + §7.1 / §7.2 / §7.3 三案例。9 个 metric 必须全填齐（无 ⚑）。

- [ ] **Step 1：从 IA §1 列出 3 案例 slug**

- entering-china-evidence-hcp（Case 1）
- entering-china-localized-content（Case 2）
- going-global-fda-evidence-bridge（Case 3）

- [ ] **Step 2：对每案例填模板**

```
§7.{1,2,3} Case Study: <Title>

Hero
  Eyebrow: <category 标签>
  Title: <Case Title>
  Client: <Anonymized or named, with logoAuthorized 状态>
  Year: <YYYY>

Challenge: <2-3 段，用第二人称对应客户语境>

Approach: <2-3 段，含 PITL 元素>

Outcome: <叙事段>

Metrics ×3 (强制全填)
  metric1: { value, label, source, year, approvedBy }
  metric2: { ... }
  metric3: { ... }

Quote (可选): { text, attribution }

Call to action: <CTA 文案>
```

- [ ] **Step 3：法务/IR 二审，特别核 metric 数据来源**

收到回执后存档 + commit。

### Task 2.2：实现 CaseStudyCard.jsx

**Files:**
- Create: `prototype/components/CaseStudyCard.jsx`

- [ ] **Step 1：写组件**

```jsx
/* CaseStudyCard.jsx — Case study summary card (B2) */

function CaseStudyCard({ slug, eyebrow, title, summary, metrics, href }) {
  // metrics: [{ value, label }] 仅显示首 metric 作为预览
  const previewMetric = metrics && metrics[0];
  return (
    <a href={href} style={{
      display: 'block',
      border: '1px solid var(--border-1)',
      padding: 24,
      textDecoration: 'none',
      color: 'inherit',
      background: 'var(--bg-1)',
      transition: 'border-color 0.2s ease'
    }}>
      <div style={{
        fontFamily: 'var(--font-slogan)',
        fontSize: 12,
        letterSpacing: '0.12em',
        color: 'var(--brand-primary-700)',
        marginBottom: 12
      }}>{eyebrow}</div>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 22,
        margin: '0 0 12px',
        lineHeight: 1.2
      }}>{title}</h3>
      <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: '0 0 16px' }}>
        {summary}
      </p>
      {previewMetric && (
        <div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 32,
            color: 'var(--brand-primary-700)'
          }}>{previewMetric.value}</div>
          <div style={{ fontSize: 13, color: 'var(--fg-3)' }}>{previewMetric.label}</div>
        </div>
      )}
    </a>
  );
}

window.CaseStudyCard = CaseStudyCard;
```

- [ ] **Step 2：commit**

```bash
git add prototype/components/CaseStudyCard.jsx
git commit -m "feat(components): add CaseStudyCard"
```

### Task 2.3：实现 `/case-studies/index.html`（列表页）

**Files:**
- Create: `prototype/case-studies/index.html`
- Create: `prototype/components/FilterBar.jsx`

- [ ] **Step 1：写 FilterBar.jsx**

```jsx
/* FilterBar.jsx — Service line filter chips (B2) */

function FilterBar({ filters, active, onChange }) {
  return (
    <div style={{
      display: 'flex', gap: 8, flexWrap: 'wrap',
      padding: '0 clamp(24px, 6vw, 96px)',
      maxWidth: 1280, margin: '0 auto 32px'
    }}>
      {filters.map(f => (
        <button key={f.value} onClick={() => onChange(f.value)} style={{
          padding: '8px 16px',
          border: '1px solid var(--border-1)',
          background: active === f.value ? 'var(--brand-primary-700)' : 'transparent',
          color: active === f.value ? '#fff' : 'var(--fg-1)',
          fontFamily: 'var(--font-slogan)',
          fontSize: 13,
          letterSpacing: '0.08em',
          cursor: 'pointer'
        }}>{f.label}</button>
      ))}
    </div>
  );
}

window.FilterBar = FilterBar;
```

- [ ] **Step 2：写 `prototype/case-studies/index.html`**

复用 ai-platform.html 的 head + script 引用模式，调整 title/description；body 内：

```jsx
function App() {
  const [filter, setFilter] = React.useState('all');
  const cases = [
    { slug: 'entering-china-evidence-hcp', eyebrow: 'Entering China · Evidence', title: 'Evidence + HCP for a Global Top-10 Medtech', summary: '...', metrics: [{ value: '12 mo', label: 'time to evidence package' }], serviceLines: ['evidence', 'physicians'] },
    { slug: 'entering-china-localized-content', eyebrow: 'Entering China · Communications', title: 'Localized Content for Specialty Launch', summary: '...', metrics: [{ value: '4×', label: 'translation throughput' }], serviceLines: ['communications'] },
    { slug: 'going-global-fda-evidence-bridge', eyebrow: 'Going Global · Evidence', title: 'FDA Evidence Bridge for Bio-Tech', summary: '...', metrics: [{ value: '8 mo', label: 'time saved on dossier' }], serviceLines: ['evidence', 'platform'] }
  ];
  const visible = filter === 'all' ? cases : cases.filter(c => c.serviceLines.includes(filter));

  return (
    <PageShell
      eyebrow="Case Studies"
      title="Selected work, with verified outcomes."
      subtitle="Each engagement below has been signed off by our partners and includes audit-traceable metrics."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Case Studies' }]}
    >
      <FilterBar
        filters={[
          { value: 'all', label: 'All' },
          { value: 'evidence', label: 'Medical Evidence' },
          { value: 'physicians', label: 'Physician Engagement' },
          { value: 'communications', label: 'Medical Communications' },
          { value: 'platform', label: 'AI Platform' }
        ]}
        active={filter}
        onChange={setFilter}
      />
      <section style={{ padding: '0 clamp(24px, 6vw, 96px) 96px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {visible.map(c => (
            <CaseStudyCard
              key={c.slug}
              {...c}
              href={`/case-studies/${c.slug}`}
            />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
```

- [ ] **Step 3：检查 + commit**

```bash
node scripts/check-page.js prototype/case-studies/index.html
git add prototype/case-studies/index.html prototype/components/FilterBar.jsx
git commit -m "feat(case-studies): list page + FilterBar"
```

### Task 2.4：实现 3 个详情页（套同模板）

**Files:**
- Create: `prototype/case-studies/entering-china-evidence-hcp.html`
- Create: `prototype/case-studies/entering-china-localized-content.html`
- Create: `prototype/case-studies/going-global-fda-evidence-bridge.html`
- Create: `prototype/components/CaseStudyHero.jsx`
- Create: `prototype/components/MetricTriad.jsx`
- Create: `prototype/components/QuoteBlock.jsx`

- [ ] **Step 1：写 CaseStudyHero.jsx + MetricTriad.jsx + QuoteBlock.jsx**

```jsx
/* CaseStudyHero.jsx */
function CaseStudyHero({ category, title, client, year }) {
  return (
    <section style={{
      padding: 'clamp(64px, 8vw, 128px) clamp(24px, 6vw, 96px)',
      maxWidth: 1280, margin: '0 auto'
    }}>
      <div style={{
        fontFamily: 'var(--font-slogan)',
        fontSize: 14, letterSpacing: '0.12em',
        color: 'var(--brand-primary-700)', marginBottom: 16
      }}>{category}</div>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(36px, 6vw, 64px)',
        lineHeight: 1.1, margin: '0 0 24px'
      }}>{title}</h1>
      <div style={{ fontSize: 16, color: 'var(--fg-3)' }}>
        Client: {client} · Year: {year}
      </div>
    </section>
  );
}

/* MetricTriad.jsx */
function MetricTriad({ metrics }) {
  // 强制 3 项；每项 { value, label, source, year, approvedBy }
  if (!metrics || metrics.length !== 3) {
    console.warn('MetricTriad: expected exactly 3 metrics, got', metrics);
  }
  return (
    <section style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      background: 'var(--brand-primary-50, #f5f7fa)',
      borderTop: '1px solid var(--border-1)',
      borderBottom: '1px solid var(--border-1)'
    }}>
      <div className="stat-strip-grid" style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(24px, 4vw, 64px)'
      }}>
        {metrics.map((m, i) => (
          <div key={i}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 64px)',
              color: 'var(--brand-primary-700)', lineHeight: 1
            }}>{m.value}</div>
            <div style={{ fontSize: 14, color: 'var(--fg-2)', marginTop: 12 }}>{m.label}</div>
            <div style={{ fontSize: 12, color: 'var(--fg-3)', marginTop: 4 }}>
              Source: {m.source} · {m.year}{m.approvedBy && <> · approved by {m.approvedBy}</>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* QuoteBlock.jsx */
function QuoteBlock({ text, attribution }) {
  return (
    <section style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      maxWidth: 920, margin: '0 auto', textAlign: 'center'
    }}>
      <blockquote style={{
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(20px, 3vw, 32px)',
        lineHeight: 1.4,
        color: 'var(--fg-1)',
        fontStyle: 'italic'
      }}>"{text}"</blockquote>
      <div style={{ marginTop: 24, fontSize: 14, color: 'var(--fg-3)' }}>— {attribution}</div>
    </section>
  );
}

window.CaseStudyHero = CaseStudyHero;
window.MetricTriad = MetricTriad;
window.QuoteBlock = QuoteBlock;
```

- [ ] **Step 2：用 §7.1 文案填 entering-china-evidence-hcp.html**

```html
<!-- HEAD 部分模仿 ai-platform.html，title 改为对应案例 -->
<script type="text/babel">
function App() {
  return (
    <PageShell hero={<CaseStudyHero
      category="Entering China · Evidence + HCP"
      title="<title from §7.1>"
      client="<client>"
      year="<year>"
    />}>
      <ProseBlock heading="Challenge" anchor="challenge"><p>...</p></ProseBlock>
      <ProseBlock heading="Approach" anchor="approach"><p>...</p></ProseBlock>
      <ProseBlock heading="Outcome" anchor="outcome"><p>...</p></ProseBlock>
      <MetricTriad metrics={[
        { value: '...', label: '...', source: '...', year: '...', approvedBy: '...' },
        { value: '...', label: '...', source: '...', year: '...', approvedBy: '...' },
        { value: '...', label: '...', source: '...', year: '...', approvedBy: '...' }
      ]} />
      <QuoteBlock text="..." attribution="..." />
      {/* CTA */}
    </PageShell>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
</script>
```

- [ ] **Step 3：套模板生成另 2 页**

复制 entering-china-evidence-hcp.html 为另两文件名，仅改 §7.2 / §7.3 文案。

- [ ] **Step 4：跑 check-page 对 4 页**

```bash
for f in prototype/case-studies/*.html; do
  node scripts/check-page.js "$f"
done
```

每页 PASS。任一 ⚑ 命中阻断。

- [ ] **Step 5：W2 收尾 commit（tag 在 Gate 通过后单独打）**

```bash
git add prototype/case-studies/ prototype/components/CaseStudyHero.jsx prototype/components/MetricTriad.jsx prototype/components/QuoteBlock.jsx
git commit -m "feat(case-studies): 3 detail pages with verified metric triad"
```

### Task 2.5：W2 Gate 验收 + tag

- [ ] §7 法务/IR 回执存档
- [ ] 9 个 metric 全部 ⚑-free
- [ ] FilterBar 切换无 console error
- [ ] 4 页 check-page PASS
- [ ] 桌面 + iPad 视图自检
- [ ] 全部 Gate 过后打 tag：`git tag w2-b2-complete`

---

## W3 · B3（`/insights/` 列表 + 详情模板 + Copy Deck §8）

### Task 3.1：Copy Deck v4.2 §8

§8.0 列表页文案 + §8.1 详情模板骨架 + §8.2 占位文章 ×3（China RWE / FDA Bridge / Med Comm 各 1 篇引子）。

- [ ] **Step 1：起草 §8 章节，提交 + 送审（轻审，不强制 IR）**

### Task 3.2：实现 InsightCard.jsx + TopicChips

- [ ] **Step 1：写 `prototype/components/InsightCard.jsx`**（结构同 CaseStudyCard，但展示作者 / publishedAt）
- [ ] **Step 2：写 `prototype/components/TopicChips.jsx`**（与 FilterBar 类似，但 chip 风格更轻）
- [ ] **Step 3：commit**

### Task 3.3：实现 `/insights/index.html`

- [ ] **Step 1：list 页面，3 篇占位文章 mock 数据**
- [ ] **Step 2：TopicChips 切换主题 (rwe / evidence_bridge / med_comm)**
- [ ] **Step 3：check-page PASS + commit**

### Task 3.4：实现 `/insights/slug-template.html`（详情模板）

- [ ] **Step 1：写 ArticleBody.jsx（Portable Text mock）**
- [ ] **Step 2：写 AuthorMeta.jsx（作者 + PITL 审稿人 + publishedAt）**
- [ ] **Step 3：模板用 §8.2 第一篇文章填充作示例**
- [ ] **Step 4：check-page PASS + commit（tag 在 Gate 通过后）**

### Task 3.5：W3 Gate 验收 + tag

- [ ] Insights 模板 Portable Text 字段 mock 留接口（注释标明 CMS 阶段对接 Sanity 的字段名）
- [ ] 列表 3 主题筛选生效
- [ ] 详情模板 hreflang / breadcrumb 通过
- [ ] 全部 Gate 过后打 tag：`git tag w3-b3-complete`

---

## W4 · B4（`/about` + `/contact` + Copy Deck §9 / §10）

### Task 4.1：Copy Deck v4.2 §9 About

含 §9.5 EN+CN 双语，CN 走法务 + IR 双签（5 天 buffer）。

- [ ] **Step 1：起草 EN 版 §9.1–§9.4**
- [ ] **Step 2：起草 CN 版 §9.5（精简版）**
- [ ] **Step 3：法务 + IR 邮件，附 5 天 buffer**
- [ ] **Step 4：回执存档 + commit**

### Task 4.2：Copy Deck v4.2 §10 Contact

含 Smart Form 字段定义、Thank-you 分支文案、§10.3 路由规则（Sprint Not-For → /services/other-engagements）。

- [ ] **Step 1：起草并法务一审**
- [ ] **Step 2：commit**

### Task 4.3：实现 LangSwitch.jsx

**Files:**
- Create: `prototype/components/LangSwitch.jsx`

- [ ] **Step 1：写组件**

```jsx
/* LangSwitch.jsx — Bilingual switcher for IA-mandated bilingual pages (B4+) */

function LangSwitch({ enabled, current = 'en', onSwitch }) {
  if (!enabled) return null;
  return (
    <div style={{
      display: 'inline-flex', gap: 4, alignItems: 'center',
      fontFamily: 'var(--font-slogan)', fontSize: 13, letterSpacing: '0.08em'
    }}>
      <button onClick={() => onSwitch('en')} disabled={current === 'en'} style={{
        padding: '4px 10px', border: 'none', cursor: current === 'en' ? 'default' : 'pointer',
        background: current === 'en' ? 'var(--brand-primary-700)' : 'transparent',
        color: current === 'en' ? '#fff' : 'inherit'
      }}>EN</button>
      <span style={{ color: 'var(--fg-3)' }}>|</span>
      <button onClick={() => onSwitch('zh')} disabled={current === 'zh'} style={{
        padding: '4px 10px', border: 'none', cursor: current === 'zh' ? 'default' : 'pointer',
        background: current === 'zh' ? 'var(--brand-primary-700)' : 'transparent',
        color: current === 'zh' ? '#fff' : 'inherit'
      }}>中文</button>
    </div>
  );
}

window.LangSwitch = LangSwitch;
```

- [ ] **Step 2：commit**

### Task 4.4：实现 LeadershipGrid.jsx + ComplianceTable.jsx

- [ ] **Step 1：LeadershipGrid（领导层卡片，含照片授权状态字段）**
- [ ] **Step 2：ComplianceTable（合规与质量审阅机制 4 行表）**
- [ ] **Step 3：commit**

### Task 4.5：实现 `/about.html`（含 EN/CN 切换）

- [ ] **Step 1：写 about.html，state 管理 lang，根据 state 渲染 EN 或 CN 文案对象**
- [ ] **Step 2：填 §9.1–§9.5 内容**
- [ ] **Step 3：hreflang 配置（en / zh-CN）**
- [ ] **Step 4：check-page PASS + commit**

### Task 4.6：实现 SmartForm.jsx + `/contact.html`

**Files:**
- Create: `prototype/components/SmartForm.jsx`
- Create: `prototype/contact.html`

- [ ] **Step 1：写 SmartForm.jsx**

```jsx
/* SmartForm.jsx — Contact intake with business_block routing (B4) */

function SmartForm({ onSubmit }) {
  const [intent, setIntent] = React.useState('');
  const [block, setBlock] = React.useState('');
  const [form, setForm] = React.useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock: 路由判定（Sprint Not-For 三类 → /services/other-engagements）
    if (block === 'other' && /^(individual|patient|hospital).*$/i.test(form.message)) {
      window.location.href = '/services/other-engagements';
      return;
    }
    onSubmit && onSubmit({ intent, block, ...form });
    alert('Thanks. Mock submission. (Real backend in PRD phase.)');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
      <label style={{ display: 'block', marginBottom: 16 }}>
        <span style={{ display: 'block', fontSize: 13, color: 'var(--fg-2)', marginBottom: 4 }}>What brings you here?</span>
        <select value={intent} onChange={e => setIntent(e.target.value)} required style={{ width: '100%', padding: 10 }}>
          <option value="">Select...</option>
          <option value="pilot">Book a pilot</option>
          <option value="expert">Talk to an expert</option>
          <option value="rfp">RFP / formal procurement</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label style={{ display: 'block', marginBottom: 16 }}>
        <span style={{ display: 'block', fontSize: 13, color: 'var(--fg-2)', marginBottom: 4 }}>Business block of interest</span>
        <select value={block} onChange={e => setBlock(e.target.value)} required style={{ width: '100%', padding: 10 }}>
          <option value="">Select...</option>
          <option value="evidence">Medical Evidence</option>
          <option value="physicians">Physician Engagement</option>
          <option value="communications">Medical Communications</option>
          <option value="platform">AI-Enabled Platform</option>
          <option value="paths">Entering China / Going Global</option>
          <option value="sprint">Cross-Border Sprint</option>
          <option value="other">Other</option>
        </select>
      </label>
      <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Name" required style={{ display: 'block', width: '100%', padding: 10, marginBottom: 16 }} />
      <input value={form.email} onChange={e => setForm({...form, email: e.target.value})} type="email" placeholder="Email" required style={{ display: 'block', width: '100%', padding: 10, marginBottom: 16 }} />
      <input value={form.company} onChange={e => setForm({...form, company: e.target.value})} placeholder="Company" style={{ display: 'block', width: '100%', padding: 10, marginBottom: 16 }} />
      <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="What are you looking for?" rows={5} style={{ display: 'block', width: '100%', padding: 10, marginBottom: 16 }} />
      <button type="submit" style={{
        padding: '14px 28px', background: 'var(--brand-primary-700)',
        color: '#fff', border: 'none', cursor: 'pointer',
        fontFamily: 'var(--font-slogan)', letterSpacing: '0.08em'
      }}>Submit</button>
    </form>
  );
}

window.SmartForm = SmartForm;
```

- [ ] **Step 2：写 contact.html**

PageShell + 嵌入 SmartForm，body_block 7 枚举值与 IA v2.0 schema 一致。

- [ ] **Step 3：check-page PASS + commit（tag 在 Gate 通过后）**

### Task 4.7：W4 Gate 验收 + tag

- [ ] §9 / §10 法务 + IR 回执存档（CN 双签到位）
- [ ] About EN/CN 切换 hreflang 生效
- [ ] Smart Form 7 枚举值匹配 schema
- [ ] Sprint "Not-For" 路由跳转可触发（mock）
- [ ] 全部 Gate 过后打 tag：`git tag w4-b4-complete`

---

## W5 · B5（Pilots × 2 + Legal × 3 + Other Engagements + §11 / §12 + unpkg 自托管）

### Task 5.1：Copy Deck v4.2 §11 Pilots ×2

- [ ] **Step 1：从 v4.1 §2.6 抽 China Sprint，扩 FAQ**
- [ ] **Step 2：从 v4.1 §3.6 抽 FDA Diagnostic，扩 FAQ**
- [ ] **Step 3：⚑ PRICING 保留占位**
- [ ] **Step 4：commit + 法务一审**

### Task 5.2：Copy Deck v4.2 §12 Legal ×3

§12.1 Terms / §12.2 Privacy（GDPR/CCPA）/ §12.3 Disclosures（港股 2415.HK）。

- [ ] **Step 1：法务模板起手**
- [ ] **Step 2：CN 版（§12.x.zh）走法务 + IR 双签**
- [ ] **Step 3：commit**

### Task 5.3：实现 PilotCard.jsx + 2 Pilot 页

**Files:**
- Create: `prototype/components/PilotCard.jsx`
- Create: `prototype/pilots/china-evidence-sprint.html`
- Create: `prototype/pilots/fda-evidence-gap-diagnostic.html`

- [ ] **Step 1：写 PilotCard.jsx（含 ⚑ PRICING 占位渲染逻辑：检测到 ⚑ 渲染 "Pricing on request"）**
- [ ] **Step 2：写两 pilot HTML，套相同模板，仅文案不同**
- [ ] **Step 3：check-page PASS + commit**

### Task 5.4：实现 LegalProse.jsx + 3 Legal 页（双语）

**Files:**
- Create: `prototype/components/LegalProse.jsx`
- Create: `prototype/legal/terms.html`
- Create: `prototype/legal/privacy.html`
- Create: `prototype/legal/disclosures.html`

- [ ] **Step 1：写 LegalProse 组件（纯文渲染 + 章节锚点）**
- [ ] **Step 2：每页双语切换（用 LangSwitch）**
- [ ] **Step 3：disclosures.html JSON-LD 用 Organization + 港股披露字段**
- [ ] **Step 4：check-page PASS + commit**

### Task 5.5：实现 `/services/other-engagements.html`

**Files:**
- Create: `prototype/services/other-engagements.html`
- Create: `prototype/components/OtherEngagementCard.jsx`

- [ ] **Step 1：写 OtherEngagementCard（3 卡：Specialty / Healthcare Brands / Cross-Border Review）**
- [ ] **Step 2：写 other-engagements.html，meta robots="noindex,nofollow"，Smart Form 预选分支 link**
- [ ] **Step 3：check-page PASS（Gate 6 验证 noindex 必须出现）+ commit**

### Task 5.6：vendor 自托管全站终验（已在 W0 Task 0.7 完成下载）

> **修订**：原计划在 W5 才下载 vendor；复核指出 W2-W4 演示风险已迁至 W0。本任务降级为终验。

- [ ] **Step 1：确认所有 W1-W5 新页面均使用相对路径 `assets/vendor/...`（根）或 `../assets/vendor/...`（子目录）**

```bash
cd "/Users/yogyoung/Documents/MSH-website-rebuild/MSH Website Rebuild/prototype"
# 任何还在用 unpkg 的 HTML 都报出来
grep -l "unpkg.com" -r . && echo "FAIL: 仍存在 unpkg 引用" || echo "PASS"
```

- [ ] **Step 2：关闭 wifi，开 file:// 双击 全站 20 页随机抽 5 页验证仍可渲染**

- [ ] **Step 3：跑全站 check-page**

```bash
find . -name "*.html" -not -path "./prototype-archive/*" | xargs -I {} node scripts/check-page.js {}
```

- [ ] **Step 4：commit（无文件变更则跳过）**

### Task 5.7：W5 Gate 验收 + tag

- [ ] §11 / §12 全部章节 commit
- [ ] §12 CN 版 IR 回执存档
- [ ] Pilots ⚑ PRICING 显示为 "Pricing on request"
- [ ] Legal 三页 hreflang en / zh-CN 双向链接
- [ ] other-engagements noindex 验证
- [ ] vendor 自托管离线打开仍可渲染（W0 已下载，本周仅终验，关 wifi 测）
- [ ] 全部 Gate 过后打 tag：`git tag w5-b5-complete`

---

## W6 · B6（Homepage + 6 solutions 响应式回填）

### Task 6.1：Homepage 三档断点回填

**Files:**
- Modify: `prototype/index.html`（viewport meta + 引入 responsive.css）
- Modify: `prototype/components/Hero.jsx`（右列 Services 卡移动端堆叠）
- Modify: `prototype/components/Header.jsx`（汉堡菜单）

- [ ] **Step 1：改 viewport**

```html
<!-- 旧 -->
<meta name="viewport" content="width=1280">
<!-- 新 -->
<meta name="viewport" content="width=device-width, initial-scale=1">
```

- [ ] **Step 2：在 Hero.jsx 给右列容器加 `className="hero-right-services"`**

让 responsive.css 中 `@media (max-width: 640px) .hero-right-services { margin-top: 32px; }` 接管。

- [ ] **Step 3：Header.jsx 加汉堡菜单**

加 state `[mobileOpen, setMobileOpen]`，desktop 部分 `className="nav-desktop"`，mobile 部分 `className="nav-mobile"` 默认 `display: none`，由 responsive.css 控制显示。

- [ ] **Step 4：1280 桌面截图回归对比**

```bash
# 用 puppeteer / playwright 或手动截图
# 与 W0 归档基线 prototype-archive/2026-04-27-claude-design-baseline/ 对比像素差
```

如有视觉回退，回滚 + 修。

- [ ] **Step 5：commit**

```bash
git add prototype/index.html prototype/components/Hero.jsx prototype/components/Header.jsx
git commit -m "feat(responsive): Homepage three-tier breakpoints + mobile hamburger"
```

### Task 6.2：6 solutions 页响应式回填

**Files:**
- Modify: `prototype/solutions/*.html`（viewport meta × 6）
- Modify: `prototype/components/SolutionsShell.jsx`（断点支持）

- [ ] **Step 1：批量改 viewport（先验证模式匹配）**

```bash
cd "/Users/yogyoung/Documents/MSH-website-rebuild/MSH Website Rebuild"
# 先列出所有匹配 width=1280 的文件，确认 6 个 solutions 全在内
grep -l 'width=1280' prototype/solutions/*.html
# 期望输出：6 个 .html 路径

# 验证后批量替换
find prototype/solutions -name "*.html" -exec sed -i.bak \
  -e 's|<meta name="viewport" content="width=1280">|<meta name="viewport" content="width=device-width, initial-scale=1">|' \
  {} \;
find prototype/solutions -name "*.bak" -delete

# 二次验证：所有 solutions 现在都该是 device-width
grep -L 'width=device-width' prototype/solutions/*.html
# 期望输出：空
```

- [ ] **Step 2：SolutionsShell.jsx 内的 grid 容器加 `className="two-col-grid"` 等响应式钩子**

- [ ] **Step 3：6 页 1280 桌面截图对比基线**

- [ ] **Step 4：iPad / iPhone 14 viewport 检查**

- [ ] **Step 5：commit（tag 在 Task 6.3 Gate 通过后）**

```bash
git add prototype/solutions/ prototype/components/SolutionsShell.jsx
git commit -m "feat(responsive): 6 solutions pages three-tier breakpoints"
```

### Task 6.3：W6 Gate 验收 + 全站终检 + tag

- [ ] 7 既有页面桌面 1280 视觉零回退（截图 diff）
- [ ] 全站 13 + 7 = 20 页三档自检无横滚
- [ ] 全站 check-page 全 PASS
- [ ] Cloudflare Pages 部署 → prototype.medscihealthcare.com 可访问
- [ ] `<meta robots="noindex">` 全站生效（Other Engagements 还要 nofollow）
- [ ] 反尽调演示链路走通：Homepage → Top Nav 5 项 → Solutions 下拉 6 项 → Footer 4 列 → Smart Form 一遍 mock 提交
- [ ] 全部 Gate 过后打 tag：`git tag w6-b6-complete`

---

## 项目终验

- [ ] 20 页原型上线 prototype.medscihealthcare.com
- [ ] Copy Deck v4.2 完整版（含全部新章 + 回灌 + 重写 + 法务/IR 回执）
- [ ] git log 干净；每批 tag w0-setup / w1-b0-b1 / w2-b2 / w3-b3 / w4-b4 / w5-b5 / w6-b6 完整
- [ ] `docs/approvals/` 存档全
- [ ] 风险表 §6 中所列对策全部落实

---

## 附录 A：每页 24 项 gate 清单（spec §5）

参考 spec §5。每个新批次最后一项 Gate 验收任务都会引用本清单。

## 附录 B：相关 skill 引用

- @superpowers:test-driven-development — 适用 scripts/check-page.js 自检的 TDD 节奏
- @superpowers:verification-before-completion — 每批次 commit 前必跑 check-page
- @superpowers:requesting-code-review — 每批 tag 前可触发 review
- @superpowers:subagent-driven-development（推荐执行方式）

---

> 计划终止于 W6 终验。后续 CMS 选型、HubSpot 接入、真实 SEO 落地、A/B 测试基础设施均不在本计划范围（spec §0.3）。
