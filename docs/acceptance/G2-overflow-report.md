# Gate 2 · 横向滚动扫描报告

**日期**: 2026-04-28
**范围**: 22 prototype 页 × 3 断点 = 66 测试格
**断点**: 640 / 1024 / 1280 px
**通过判定**: `documentElement.scrollWidth ≤ viewportWidth + 1px`

---

## 1. 总结

**66/66 PASS** ✅(经 3 个 B7-hotfix 后)

| 断点 | 通过 | 失败 |
|---|---|---|
| 640 px | 22/22 | 0 |
| 1024 px | 22/22 | 0 |
| 1280 px | 22/22 | 0 |
| **合计** | **66/66** | **0** |

---

## 2. 方法

### 2.1 测试 harness

写了 `prototype/_g2-batch.html` —— 一个静态 harness 文件,用 iframe 加载每个 URL,设置 iframe 宽度到目标断点,等待 3000ms(覆盖 Babel-standalone 转译)后测量 iframe 内 `documentElement.scrollWidth` 与 viewport 宽度比对。`overflow:auto` 容器内的子元素不计入(html.scrollWidth 只算 root level overflow)。

逐项跑 22 × 3 = 66,采集 sw / cw / bw / iw 与最大溢出元素 ancestry 路径。

### 2.2 缓存命中

Babel-standalone 缓存住 .jsx 强,需用 `fetch(url, {cache:'reload'})` 预热,否则 hotfix 重测时旧版本仍生效。每次代码改动后重新预热。

### 2.3 harness 文件

`prototype/_g2-batch.html` 与 `prototype/_g2-harness.html`(单页诊断版)留在 prototype 目录中。建议在最终生产构建时移除(以 `_` 前缀防止生产 build 误打包)。

---

## 3. 发现 + 修复(3 个 hotfix)

### 3.1 B7-a · `SolutionHeader` 缺移动端 (P0)

**症状**: 6 个 /solutions/*.html @ 640 全部横滚,sw=959,溢出 320px

**根因**: `prototype/components/SolutionHeader.jsx` 没有 `nav-mobile` / `nav-desktop` className,缺 `mobileOpen` state 与抽屉。`Header.jsx` 自 W6 已有此模式,但 SolutionHeader 漏了。`assets/responsive.css` 的 `@media (max-width:640)` 会让 `.nav-desktop { display:none }` + `.nav-mobile { display:block }`,但 SolutionHeader 没用这两 class,desktop nav 在 640 一直可见。

**修复**: 用 Header.jsx 的模式补上:
- 加 `mobileOpen` state
- 加 hamburger 按钮 (`className="nav-mobile"`,默认 `display:none`)
- 给 `<nav>` 与右侧 `<div>` 加 `className="nav-desktop"`
- 加移动端抽屉 (登录后显示)

文件: `prototype/components/SolutionHeader.jsx`

### 3.2 B7-b · `SolutionFooter` 5-col 网格无响应式 (P0)

**症状**: 修了 B7-a 后,6 个 solutions 页 @ 640 仍 sw=683(残余 43px 溢出)

**根因**: `SolutionFooter.jsx` 用 `gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1fr'`,无 `.two-col-grid` className。`Footer.jsx` 已有此 class(见 line 34)。

**修复**: 给 SolutionFooter 的 grid div 加 `className="two-col-grid"`。

文件: `prototype/components/SolutionFooter.jsx`

### 3.3 B7-c · 3 个 solutions Page 内嵌 grid 无响应式 (P0)

**症状**: 修了 a + b 后,残余 3 fail @ 640:
- `/solutions/entering-china.html` sw=677 (溢出 37 px)
- `/solutions/going-global-us.html` sw=732 (溢出 92 px)
- `/solutions/physician-engagement.html` sw=701 (溢出 61 px)

**根因**: 多个 PageXxx.jsx 内联 `gridTemplateColumns: '1.2fr 1fr'` 等多列网格,在 640 不收缩。

**修复**: 给 5 处加 `className="two-col-grid"`:
- `solutions/PageEnteringChina.jsx` line 100 (Overview 2-col)
- `solutions/PageEnteringChina.jsx` line 258 (Pilot 2-col)
- `solutions/PageGoingGlobal.jsx` line 98 (Overview 2-col)
- `solutions/PageGoingGlobal.jsx` line 236 (Pilot 2-col)
- `solutions/PagePhysicianEngagement.jsx` line 84 (3-col)
- `solutions/PagePhysicianEngagement.jsx` line 159 (5-col)

(实际 6 个改动,跨 3 个 file)

### 3.4 残留待修(暂未触发 fail,优先级 P2)

下列 grid 当前 PASS 但 className 缺失,理论上窄内容偶发场景仍会触发。建议下个 sprint 全面 backfill:

- `solutions/PageMedicalCommunications.jsx:69` (1fr 1fr)
- `solutions/PageContentSprint.jsx:152` (1fr 1fr)
- `solutions/PageContentSprint.jsx:199` (1fr 1fr)
- `solutions/PageMedicalEvidence.jsx:79` (1fr 1fr)
- `solutions/PageEnteringChina.jsx:153` (repeat(3,1fr))
- `solutions/PageEnteringChina.jsx:190` (repeat(4,1fr))

---

## 4. 完整结果(post-hotfix)

| 页 | 640 | 1024 | 1280 |
|---|---|---|---|
| /index.html | ✅ 640 | ✅ 1024 | ✅ 1280 |
| /ai-platform.html | ✅ 640 | ✅ 1024 | ✅ 1280 |
| /about.html | ✅ 640 | ✅ 1024 | ✅ 1280 |
| /contact.html | ✅ 640 | ✅ 1024 | ✅ 1280 |
| /case-studies/index.html | ✅ 640 | ✅ 1024 | ✅ 1280 |
| /case-studies/entering-china-evidence-hcp.html | ✅ 640 | ✅ 1024 | ✅ 1280 |
| /case-studies/entering-china-localized-content.html | ✅ 640 | ✅ 1024 | ✅ 1280 |
| /case-studies/going-global-fda-evidence-bridge.html | ✅ 640 | ✅ 1024 | ✅ 1280 |
| /insights/index.html | ✅ 640 | ✅ 1024 | ✅ 1280 |
| /insights/slug-template.html | ✅ 640 | ✅ 1024 | ✅ 1280 |
| /pilots/china-evidence-sprint.html | ✅ 640 | ✅ 1024 | ✅ 1280 |
| /pilots/fda-evidence-gap-diagnostic.html | ✅ 640 | ✅ 1024 | ✅ 1280 |
| /legal/disclosures.html | ✅ 640 | ✅ 1024 | ✅ 1280 |
| /legal/privacy.html | ✅ 640 | ✅ 1024 | ✅ 1280 |
| /legal/terms.html | ✅ 640 | ✅ 1024 | ✅ 1280 |
| /services/other-engagements.html | ✅ 640 | ✅ 1024 | ✅ 1280 |
| /solutions/cross-border-medical-content-sprint.html | ✅ 640 | ✅ 1024 | ✅ 1280 |
| /solutions/entering-china.html | ✅ 640 | ✅ 1024 | ✅ 1280 |
| /solutions/going-global-us.html | ✅ 640 | ✅ 1024 | ✅ 1280 |
| /solutions/medical-communications.html | ✅ 640 | ✅ 1024 | ✅ 1280 |
| /solutions/medical-evidence.html | ✅ 640 | ✅ 1024 | ✅ 1280 |
| /solutions/physician-engagement.html | ✅ 640 | ✅ 1024 | ✅ 1280 |

`✅ 640` 表示 `documentElement.scrollWidth = 640px`,与 viewport 等宽,无横向滚动。

---

## 5. 验收

**Gate 2 通过** ✅ —— 22 页全部在 3 个断点(≤640 / 641-1024 / ≥1025 各取 640/1024/1280 代表)无横向滚动。

下一步: G1 (1280 baseline diff) → G3 (反尽调演示链路) → 总报告 + commit。

---

## Sources

- 测试 harness: `prototype/_g2-batch.html` (本次 sprint 后清理)
- 修复文件 (6 个):
  - `prototype/components/SolutionHeader.jsx`
  - `prototype/components/SolutionFooter.jsx`
  - `prototype/solutions/PageEnteringChina.jsx`
  - `prototype/solutions/PageGoingGlobal.jsx`
  - `prototype/solutions/PagePhysicianEngagement.jsx`
- 参考: `prototype/assets/responsive.css` (媒体查询定义)
- 参考: `prototype/components/Header.jsx` (移动端模式来源)
