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
