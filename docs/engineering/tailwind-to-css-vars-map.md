# Tailwind → CSS-vars Mapping · `medsci-evidence-tech/Hero.tsx` → `prototype/AIProductShowcase.jsx`

**目的**: Plan v1.2 task 6a step 0 / NIT-2 修订 — 把参考代码 372 行 Tailwind +
framer-motion + lucide-react 翻译为现有 prototype 栈 (plain JSX + React UMD +
Babel standalone + lucide.min.js + 自定义 CSS variables) 的工程参考表。

**适用范围**: AIProductShowcase shell + sidebar + header + input strip 全部
chrome 部分 (Hero.tsx lines 27–166, 305–317, 325–355)。 chat / table 内容
body (lines 167–303) 由 Task 6b 用 mini portable-text renderer 处理,不在本表。

**使用方式**: 实施 Task 6a/6b 时,见到原参考代码某 Tailwind 类,查本表对应 CSS。
若本表未覆盖,补一行进来。 这张表也是 Task 16 / Task 17 acceptance 时的
verification artifact。

**Token base**: 沿用 W1-04 v1.1 已落 token (`--brand-accent-500` / `--bg-invert`
/ etc.)。 W1-04 v1.2 (P1) 落实 `--product-canvas-dark` /
`--product-accent-{blue,violet,teal,amber,emerald}` palette 后, `accentColor`
prop 直接 map 到对应 CSS 变量,无需此表二轮翻译。

---

## 1. Layout / spacing / sizing

| Tailwind | CSS-vars / plain CSS | 备注 |
|---|---|---|
| `relative` | `position: relative` | |
| `absolute inset-0` | `position: absolute; inset: 0` (modern, IE 不支持) | 项目目标浏览器 chrome/safari/edge 当代均支持 |
| `pt-36 pb-24` | `padding-top: 9rem; padding-bottom: 6rem` | clamp 化为 responsive: `padding: clamp(72px, 9vw, 144px) 0 clamp(48px, 6vw, 96px)` |
| `max-w-7xl mx-auto px-6` | `max-width: var(--container-max, 1280px); margin: 0 auto; padding: 0 24px` | container-max 已 W1-04 token |
| `max-w-5xl mx-auto` | `max-width: 1024px; margin: 0 auto` | hero 内层 |
| `max-w-2xl` | `max-width: 672px` | sub-heading 段 |
| `max-w-[85%]` | `max-width: 85%` | chat 气泡 |
| `flex justify-center` | `display: flex; justify-content: center` | |
| `flex flex-col md:flex-row` | `display: flex; flex-direction: column;` + `@media (min-width: 768px) { flex-direction: row }` | sidebar 桌面端水平 |
| `flex items-start space-x-4` | `display: flex; align-items: flex-start; gap: 16px` (gap 替代 space-x) | |
| `flex-1` | `flex: 1` | |
| `space-y-1` / `space-y-3` / `space-y-4` / `space-y-6` | `gap: 4px / 12px / 16px / 24px` (在 flex/grid 容器内) | 改用 gap 比 space-x mark 干净 |
| `h-[560px]` | `height: 560px` (clamp 化: `height: clamp(480px, 60vh, 600px)`) | mockup 主容器固定高 |
| `h-14` | `height: 56px` | header 条 |
| `h-12` | `height: 48px` | input 条 |
| `w-64` | `width: 256px` | sidebar 宽 |
| `w-7 h-7` / `w-8 h-8` | `width/height: 28px / 32px` | logo / avatar |
| `w-[800px] h-[800px]` | `width: 800px; height: 800px` | background orbs |
| `top-[-20%] right-[-10%]` | `top: -20%; right: -10%` | orb 定位 |

---

## 2. Color / dark canvas

| Tailwind | CSS-vars / plain CSS | 备注 |
|---|---|---|
| `bg-[#05080f]` | `background: var(--product-canvas-dark, #05080f)` | **W1-04 v1.2 待落 token**;首期 fallback 为 hardcoded |
| `bg-[#0B0C10]/80` | `background: rgba(11, 12, 16, 0.8)` | sidebar 容器 |
| `bg-[#0F1117]/60` | `background: rgba(15, 17, 23, 0.6)` | main content area |
| `bg-[#151921]` | `background: #151921` | chat 气泡背景 |
| `bg-[#0F1117]` | `background: #0F1117` | citation badge |
| `bg-[#1A1F29]` | `background: #1A1F29` | action chip |
| `bg-[#0B0C10]` | `background: #0B0C10` | input box |
| `bg-white/5` | `background: rgba(255,255,255,0.05)` | tab switcher container, sidebar bottom card |
| `bg-white/[0.02]` | `background: rgba(255,255,255,0.02)` | header strip, input strip |
| `bg-white/10` | `background: rgba(255,255,255,0.10)` | active sidebar item |
| `text-white` | `color: #fff` | |
| `text-slate-100` | `color: #f1f5f9` | hero h1 line 1 |
| `text-slate-200` | `color: #e2e8f0` | sidebar logo text |
| `text-slate-300` | `color: #cbd5e1` | chat content text |
| `text-slate-400` | `color: #94a3b8` | sub-heading prose, inactive tab text |
| `text-slate-500` | `color: #64748b` | sidebar inactive, model string |
| `text-slate-600` | `color: #475569` | icon hover-from |
| `text-slate-700/50` | `color: rgba(51, 65, 85, 0.5)` | avatar placeholder bars |
| `text-green-400` | `color: #4ade80` | trial PFS positive value |

---

## 3. Product accent (blue / violet · 闭合 enum 子集 §3.4)

每个 accent 系列展开为本表 5 个变体。 W1-04 v1.2 落实后改 `var(--product-accent-{slug}-{shade})`。

| Tailwind | Shade | hex (Tailwind 默认) | CSS-vars |
|---|---|---|---|
| `blue-300` | 300 | #93c5fd | `var(--product-accent-blue-300, #93c5fd)` |
| `blue-500` | 500 | #3b82f6 | `var(--product-accent-blue-500, #3b82f6)` |
| `blue-600` | 600 | #2563eb | `var(--product-accent-blue-600, #2563eb)` |
| `blue-950` | 950 | #172554 | `var(--product-accent-blue-950, #172554)` |
| `cyan-200` | 200 | #a5f3fc | `var(--brand-accent-300, #a5f3fc)` (现有 token 接近) |
| `cyan-400` | 400 | #22d3ee | `var(--brand-accent-500, #00aedb)` (项目品牌青) |
| `cyan-500` | 500 | #06b6d4 | `var(--brand-accent-500, #00aedb)` |
| `violet-300` | 300 | #c4b5fd | `var(--product-accent-violet-300, #c4b5fd)` |
| `violet-500` | 500 | #8b5cf6 | `var(--product-accent-violet-500, #8b5cf6)` |
| `violet-600` | 600 | #7c3aed | `var(--product-accent-violet-600, #7c3aed)` |
| `violet-950` | 950 | #2e1065 | `var(--product-accent-violet-950, #2e1065)` |
| `fuchsia-200` | 200 | #f5d0fe | `var(--product-accent-violet-200, #f5d0fe)` |
| `fuchsia-400` | 400 | #e879f9 | `var(--product-accent-violet-400, #e879f9)` |
| `teal-400` | 400 | #2dd4bf | `var(--product-accent-teal-400, #2dd4bf)` |
| `teal-500` | 500 | #14b8a6 | `var(--product-accent-teal-500, #14b8a6)` |
| `indigo-400` | 400 | #818cf8 | `var(--product-accent-violet-400, #818cf8)` (近邻并入 violet 简化) |

注 1: cyan / fuchsia / indigo / teal 在参考代码里是 active-tab 的 secondary highlight (chat 气泡左侧 icon ring 等),**不是产品 enum 主色**。 我们的 5 色 enum 仅 blue/violet/teal/amber/emerald。 secondary highlight 改为 active accent 单一色,简化设计且与品牌系统更一致。

注 2: gradient 类 `from-blue-300 via-cyan-200 to-white` 化简为 2-stop:
`linear-gradient(to right, var(--product-accent-blue-300), #fff)` — 视觉等效,
减少 token 出口。

---

## 4. Borders / radius / shadow

| Tailwind | CSS-vars / plain CSS | 备注 |
|---|---|---|
| `rounded-2xl` | `border-radius: 16px` | mockup 容器 |
| `rounded-xl` | `border-radius: 12px` | tab button, input box |
| `rounded-lg` | `border-radius: 8px` | sidebar item, action chip |
| `rounded-full` | `border-radius: 9999px` | badge pill, orbs, avatar |
| `border` | `border: 1px solid` (color 由后续类决定) | |
| `border-white/5` | `border-color: rgba(255,255,255,0.05)` | sidebar 分割线、卡片细 border |
| `border-white/10` | `border-color: rgba(255,255,255,0.10)` | mockup ring |
| `border-white/20` | `border-color: rgba(255,255,255,0.20)` | hover 强 border |
| `border-r` / `border-b` / `border-t` | `border-right/bottom/top: 1px solid` | |
| `ring-1 ring-white/10` | `box-shadow: 0 0 0 1px rgba(255,255,255,0.10)` | mockup 描边光晕 |
| `ring-1 ring-white/20` | `box-shadow: 0 0 0 1px rgba(255,255,255,0.20)` | active tab ring |
| `ring-2 ring-white/10` | `box-shadow: 0 0 0 2px rgba(255,255,255,0.10)` | avatar ring |
| `shadow-lg` | `box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)` | active tab |
| `shadow-2xl` | `box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25)` | mockup 主阴影 |
| `shadow-2xl shadow-black/50` | `box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5)` | mockup 加深 |
| `shadow-xl` | `box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)` | chat 卡 |
| `shadow-inner` | `box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.06)` | sidebar logo container |
| `shadow-[0_0_20px_rgba(59,130,246,0.2)]` | `box-shadow: 0 0 20px rgba(59,130,246,0.2)` | badge glow blue |
| `shadow-[0_0_15px_rgba(20,184,166,0.2)]` | `box-shadow: 0 0 15px rgba(20,184,166,0.2)` | AI message icon glow teal |

---

## 5. Effects: blur / backdrop / mix-blend / opacity

| Tailwind | CSS-vars / plain CSS | 备注 |
|---|---|---|
| `glass-card` | 复合: `background: rgba(15,17,23,0.6); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.10)` | medsci 自定义 utility, 项目里我们写为内联样式 |
| `backdrop-blur-xl` | `backdrop-filter: blur(24px)` | tab switcher 容器, badge |
| `backdrop-blur-md` | `backdrop-filter: blur(12px)` | sidebar |
| `backdrop-blur-sm` | `backdrop-filter: blur(4px)` | main content |
| `blur-[100px]` | `filter: blur(100px)` | background orb |
| `blur-[60px]` | `filter: blur(60px)` | table overlay glow |
| `mix-blend-overlay` | `mix-blend-mode: overlay` | noise.svg overlay (我们 spec §2.2 不要 noise, 此类废弃) |
| `opacity-20` / `opacity-30` / `opacity-40` | `opacity: 0.2 / 0.3 / 0.4` | |

---

## 6. 动画 / 过渡 (framer-motion → CSS transitions)

参考代码用 framer-motion `<motion.div initial animate exit transition>` +
`<AnimatePresence mode="wait">`。 我们栈不引 framer-motion (plan v1.2 stack
约束)。 简化策略:

| 参考代码 | CSS 替换 | 备注 |
|---|---|---|
| `initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}` (badge) | 静态默认显示 (mockup 已是 above-fold, 不必入场动画) | 取消 |
| `initial={{ opacity: 0, y: 40 }} animate={...} transition={{ duration: 0.8 }}` (mockup 容器) | 同上,取消 | mockup 不入场 |
| `<AnimatePresence mode="wait"> <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={...} exit={...} transition={{ duration: 0.3 }}>` (Tab 切换 content) | CSS 短 opacity transition: 切换时主动 setVisible(false) → setTimeout(300) → setActiveIdx(new) → setVisible(true), `transition: opacity 300ms ease` | Task 6b 的 demo body 用此模式 |
| `transition-all duration-1000 ease-in-out` (background) | `transition: background 800ms ease-in-out, filter 800ms ease-in-out` | orbs 颜色平滑切换 |
| `transition-all duration-500` (badge bg/border) | `transition: background 400ms ease, border-color 400ms ease, box-shadow 400ms ease` | |
| `transition-colors duration-500` (gradient strip) | `transition: background 400ms ease` | |
| `transition-all duration-300` (tab button) | `transition: background 250ms ease, color 250ms ease, box-shadow 250ms ease` | |
| `transition-all duration-700` (h1 gradient) | `transition: background 600ms ease` | |
| `transition` / `transition-colors` (citation, chip) | `transition: background 200ms ease, border-color 200ms ease, color 200ms ease` | |
| `transition-shadow` (li hover bullet) | `transition: box-shadow 200ms ease` | |
| `animate-pulse-slow` (orb) | `@keyframes orbPulse { 0% {opacity: 0.3} 50% {opacity: 0.5} 100% {opacity: 0.3} } animation: orbPulse 4s ease-in-out infinite` | 慢呼吸 |
| `animate-pulse` (input cursor) | `@keyframes cursorPulse { 0%,100% {opacity: 1} 50% {opacity: 0.4} } animation: cursorPulse 1.2s ease-in-out infinite` | |

---

## 7. Lucide icons (lucide-react → lucide.min.js)

参考代码 `import { Activity, Sparkles, FileText, Search, MessageSquare, BarChart3, Share2, MoreHorizontal, Zap } from 'lucide-react'`。

我们栈用 `lucide.min.js` (UMD) 暴露为全局 `lucide` 对象。 用法:
`<i data-lucide="activity"></i>` + `lucide.createIcons()` 或直接调用
`lucide.icons.activity.toSvg(...)`。

| Lucide icon | data-lucide name | 备注 |
|---|---|---|
| `Activity` | `activity` | DeepEvidence logo (scale-x-[-1] 镜像) |
| `Sparkles` | `sparkles` | hero badge 左侧 |
| `FileText` | `file-text` | sidebar Saved Reports / action chip |
| `Search` | `search` | sidebar Evidence Search |
| `MessageSquare` | `message-square` | sidebar New Chat |
| `BarChart3` | `bar-chart-3` | action chip 生成森林图 |
| `Share2` | `share-2` | header 分享 / action chip |
| `MoreHorizontal` | `more-horizontal` | header 三点 |
| `Zap` | `zap` | (参考代码 import 但实际未使用) |

`SeekIcon` 是参考代码内联自定义 SVG (lines 357–371,正方形 4 列条形 logo)。
我们 port 时:在 prototype 里把这 6 行 path 抠出来作为 `<SeekIcon />` 子组件,
保持原样。 后续若 W1-04 v1.2 给 SeekEvidence 单独定义 logo,再替换。

---

## 8. 文字样式 (font / size / weight / spacing)

| Tailwind | CSS-vars / plain CSS | 备注 |
|---|---|---|
| `font-serif` | `font-family: var(--font-display)` | h1 用 display font |
| `font-mono` | `font-family: var(--font-mono, 'JetBrains Mono', ui-monospace, monospace)` | model string, table head |
| `text-xs` / `text-sm` / `text-lg` / `text-xl` | `font-size: 12px / 14px / 18px / 20px` | |
| `text-5xl md:text-7xl` | `font-size: clamp(48px, 7vw, 72px)` | hero h1 |
| `text-[10px]` | `font-size: 10px` | model string, citation type |
| `font-bold` / `font-medium` / `font-light` | `font-weight: 700 / 500 / 300` | |
| `tracking-tight` / `tracking-wide` / `tracking-widest` | `letter-spacing: -0.025em / 0.025em / 0.1em` | |
| `leading-relaxed` / `leading-7` / `leading-[1.1]` | `line-height: 1.625 / 1.75 / 1.1` | |
| `uppercase` | `text-transform: uppercase` | |

---

## 9. 不 port 项 (废弃)

| 类 | 原因 |
|---|---|
| `bg-[url('https://grainy-gradients.vercel.app/noise.svg')]` | 外部 vercel 域,生产环境不依赖第三方 noise svg。 spec §2.2 也明确不要 noise overlay |
| `animate-pulse-slow` (orb) 严格语义 | 参考代码假定 Tailwind 自定义 keyframe `pulse-slow`;我们重写为 `orbPulse` (上文 §6) |
| `custom-scrollbar` | 参考代码自定义 utility,默认浏览器滚动条已可接受;P1 后再补 |
| `animate-pulse` (input cursor) | 已在 §6 重写为 `cursorPulse` |
| `group` / `group-hover/table` / `group-hover` 链式 | 参考代码大量用 group 控制嵌套悬停。 plain JSX 等价方案:在父级加 hover state via React useState,或纯 CSS `:hover` selector 配合自定义 class。 §6.5 Task 6b 实现时用纯 CSS `.parent:hover .child` 路径 |
| Tailwind `arbitrary values` `bg-[url(...)]` 等 | 全部改为内联 style 或 CSS 文件硬编码 |

---

## 10. 验收 / 后续维护

- 本表 Task 6a/6b 实施时为 working spec, 任何新增 Tailwind 类必须先入此表再用。
- W1-04 v1.2 (P1) 落实 `--product-accent-{slug}-{shade}` palette 后,本表
  §3 / §4 列大部分行改为单一 `var()` 引用,精简 50% 以上。
- Task 17 acceptance gate §8.12 (accentColor enum) 校验时,本表是 owner 比对
  Sanity `accentColor` 字段值 → CSS token 的 single-source-of-truth。

---

> 维护: Task 6a/6b 实施 owner;每周更新一次直至 W4 launch。
> Source of truth (Tailwind 行号引用): `prototype/_reference/medsci-evidence-tech/components/Hero.tsx` (372 lines)。
