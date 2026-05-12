# W1 开工运行手册 Runbook

**梅斯健康集团官网重构 · www.medscihealthcare.com**
版本 v1.0 · 2026-04-19 · 面向：内部开发 / 设计 / 内容 / 合规

> 本手册为 W1 周期可直接上手的操作指引。包含仓库结构、分支策略、环境变量、本地启动、CI 配置、目录规范、内容与法务评审入口、发布流程。所有命令可直接复制执行。

---

## 0. 角色与权限

| 角色 | 人数 | 核心职责 | Git 权限 | Sanity 角色 | Vercel 角色 |
|---|---|---|---|---|---|
| Tech Lead | 1 | 架构、CR 终审、发布 | Admin | Administrator | Owner |
| Frontend Dev | 2 | Next.js + UI 组件 | Maintainer | Editor | Member |
| CMS / Integrations | 1 | Sanity schema、HubSpot | Maintainer | Administrator | Member |
| Designer | 1 | VI / 原型 / 设计交付 | — | Editor (images only) | — |
| Content Editor | 2 | 文案录入 | — | Editor | — |
| Compliance / Legal | 1 | 声明池审阅、Go-Live 闸 | — | Reviewer | — |
| PM | 1 | 排期、验收 | Developer | Editor | Viewer |

---

## 1. 代码仓库

### 1.1 仓库一览

```
github.com/medsci/msh-web           → 主站（Next.js 14）
github.com/medsci/msh-studio        → Sanity Studio
github.com/medsci/msh-design-tokens → 设计令牌包（JSON 源 → CSS + Tailwind）
github.com/medsci/msh-infra         → Terraform (Cloudflare + Vercel + DNS)
```

Monorepo 选型已于技术选型文档 §4 否决（成本与团队熟悉度）。若 W3 需求变化再议。

### 1.2 分支策略（Trunk-based，短生命周期）

```
main                    受保护；所有发布来源
├── release/2026-W1     按周开启的集成分支（可选）
├── feat/<ticket>-<slug>  功能分支；≤ 3 天合回
├── fix/<ticket>-<slug>   热修复；CR 后直合 main
└── chore/<slug>          依赖升级 / lint / tooling
```

规则：
- `main` 分支启用 required reviewers (1+) + required checks (lint/type/build/e2e-smoke) + linear history。
- PR 模板强制填写"影响 Copy Deck 哪一节 / 是否新增 Claim / 是否需要 legal_review"。
- 不允许直接 `git push main`；发布由 CI 执行。
- 标签：`v0.YY.MMDD-<n>`，例 `v0.26.0419-1`。

### 1.3 PR 规范

- 标题：`[ticket] <简述>`（不要翻译，保持工单原语）
- Body：
  1. **What** — 改了什么
  2. **Why** — 关联需求（Copy Deck / IA 章节号或 Linear 卡片）
  3. **Screenshots / Lighthouse / a11y report** — 如涉 UI
  4. **Compliance flag** — 是否触发禁用词、是否新建/修改 Claim
- 代码行数 > 500 需拆分；> 800 拒评。

---

## 2. 本地开发环境

### 2.1 基础依赖

```bash
node -v   # ≥ 20.11 LTS
pnpm -v   # ≥ 9
git -v
gh -v     # GitHub CLI (可选但推荐)
```

如尚未安装 pnpm：
```bash
corepack enable && corepack prepare pnpm@latest --activate
```

### 2.2 克隆 & 启动

```bash
# 主站
git clone git@github.com:medsci/msh-web.git
cd msh-web
cp .env.example .env.local    # 填入密钥 (见 §3)
pnpm install
pnpm dev                       # http://localhost:3000

# Sanity Studio（另一个终端）
git clone git@github.com:medsci/msh-studio.git
cd msh-studio
cp .env.example .env.local
pnpm install
pnpm dev                       # http://localhost:3333
```

### 2.3 常用脚本

```bash
pnpm dev          # 本地开发
pnpm build        # 生产构建
pnpm lint         # eslint + biome
pnpm typecheck    # tsc --noEmit
pnpm test         # vitest unit
pnpm e2e          # playwright 冒烟
pnpm a11y         # axe-core 扫描
pnpm deadlinks    # 失效链接扫描（CI 每日跑）
```

---

## 3. 环境变量

### 3.1 主站（msh-web/.env.local）

```ini
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=sk_xxxx           # read-only token for ISR
SANITY_WEBHOOK_SECRET=xxxx              # on-publish revalidation

# HubSpot
HUBSPOT_PORTAL_ID=xxxxx
HUBSPOT_FORM_ID_A=xxxxxxxx              # Sales SQL lane
HUBSPOT_FORM_ID_B=xxxxxxxx              # Partner/Referral lane
HUBSPOT_API_TOKEN=pat-xxxxxxxxxx        # private app token

# Analytics
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXX
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com

# Email (for On-Request contact)
RESEND_API_KEY=re_xxxxxxxx
CONTACT_INBOX=hello@medscihealthcare.com

# Feature flags
NEXT_PUBLIC_I18N_CN_ENABLED=true
NEXT_PUBLIC_PLACEHOLDER_BADGES=true     # 允许 ⚑ Placeholder 渲染（Go-Live 前关掉）
```

### 3.2 Studio（msh-studio/.env.local）

```ini
SANITY_STUDIO_PROJECT_ID=xxxxxxxx
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_PREVIEW_URL=https://preview.medscihealthcare.com
```

### 3.3 密钥管理

- **禁止**将任何真实 token 提交到 Git。`.env*` 已纳入 `.gitignore`；PR 中误含秘钥一律 revert + 轮换。
- 团队共享通过 1Password Vault: `MSH · Web Rebuild`，按角色可见。
- CI 读取 GitHub Environments secrets：`development` / `preview` / `production`。

---

## 4. 目录规范（msh-web）

```
apps/web/
├── app/                          # Next.js App Router
│   ├── (marketing)/              # 主站路由组
│   │   ├── page.tsx              # Homepage
│   │   ├── solutions/
│   │   │   ├── entering-china/page.tsx
│   │   │   ├── going-global/page.tsx
│   │   │   └── cross-border-sprint/page.tsx
│   │   ├── services/
│   │   │   └── other-engagements/   # noindex 区（robots header 强制）
│   │   ├── insights/[slug]/page.tsx
│   │   ├── case-studies/[slug]/page.tsx
│   │   ├── about/page.tsx
│   │   ├── investor-relations/page.tsx
│   │   └── legal/[slug]/page.tsx
│   ├── api/
│   │   ├── revalidate/route.ts   # Sanity webhook
│   │   ├── lead/route.ts         # HubSpot proxy
│   │   └── on-request/route.ts   # ProofPoint request
│   ├── robots.txt/route.ts
│   ├── sitemap.xml/route.ts
│   └── layout.tsx
├── components/
│   ├── sections/                 # 9 首页模块 + 复用 section
│   ├── ui/                       # shadcn/ui-based primitives
│   ├── forms/                    # HubSpot form wrappers
│   └── evidence/                 # ✓ / ◐ / ⌕ / ⚑ 徽标
├── lib/
│   ├── sanity.ts                 # client + groq queries
│   ├── hubspot.ts                # form routing A/B
│   ├── analytics.ts              # GA4 + PostHog events
│   ├── seo.ts                    # generateMetadata helper
│   └── forbidden-phrases.ts      # runtime scanner (dev only)
├── content/                      # MDX 静态内容（Legal、IR 简表）
├── public/
├── styles/
│   └── tokens.css                # 来自 @medsci/design-tokens
├── tests/
│   ├── e2e/                      # playwright
│   └── unit/                     # vitest
└── next.config.mjs
```

---

## 5. CI/CD

### 5.1 GitHub Actions 流水线

`.github/workflows/ci.yml` —
```
on: [pull_request, push to main]
jobs:
  setup      → pnpm install (cached)
  lint       → pnpm lint (biome + eslint)
  typecheck  → pnpm typecheck
  unit       → pnpm test
  build      → pnpm build (Next.js)
  e2e-smoke  → playwright — 首页、Solution、Insight、表单提交
  a11y       → axe + lighthouse-ci（失败阈值 a11y < 0.9 / perf < 0.8）
  claim-lint → 扫描 MDX + Portable Text 出 Claim 未绑定 ProofPoint 则 fail
```

### 5.2 部署（Vercel）

- `main` → Production（www.medscihealthcare.com）
- `release/*` → Preview（auto URL）
- PR → Preview（每 PR 一个 URL，共享给审阅者）
- Sanity `publish` 事件 → `POST /api/revalidate` → ISR 增量更新

### 5.3 发布节奏

- 开发周期内：Preview URL 审阅，不发 Production。
- 正式发布：周四 14:00 (GMT+8) 由 Tech Lead 触发 `workflow_dispatch: release`；同时在 Linear "Releases" 栏登记。

---

## 6. 内容与合规工作流

### 6.1 内容产线（文案 → 发布）

```
Copy Deck v4.1
    ↓ 内容编辑在 Sanity 建稿  status=draft
禁用词实时扫描（schema validator）
    ↓
编辑完成 → status=legal_review
    ↓ Compliance 审阅
Claim 登记池 + ProofPoint 绑定
    ↓ 若 tier≠verified → 打 ◐ / ⌕ 徽标
编辑补全 → status=approved
    ↓ Editor 手动
status=published   → Webhook → ISR 重新生成页
```

### 6.2 合规 Gate（硬闸）

发布按钮在以下任一条件不满足时 **灰化**：
1. 任一 Claim 未绑定 ProofPoint
2. 任一绑定的 ProofPoint `tier ≠ verified`（允许 `in_development` / `on_request` 时必须设 `placeholderBadge=true`）
3. 任一 CaseStudy `metrics.length < 3`
4. Portable Text 命中 severity=block 的禁用词
5. i18n 未在白名单页类型填写 CN 字段（白名单：Homepage / About / Legal / IR）
6. OtherEngagementCard 的 `seoNoIndex` 被篡改（只读字段，前端会二次 override）

### 6.3 Legal 审阅入口

- **低频重要变更（新声明 / 新服务线）**：Linear 工单 `legal:new-claim` → @compliance → Sanity 内评论 → status=approved
- **高频常规修订（错字 / 版式）**：允许 editor 直接从 draft → approved（不必 legal_review），但仍走 CR。

---

## 7. 设计令牌同步

```
msh-design-tokens/tokens.json   (Figma Tokens 插件导出)
         ↓  pnpm build
    dist/tokens.css             ←── msh-web/styles/tokens.css 复制
    dist/tailwind-preset.js     ←── msh-web/tailwind.config.ts 引用
```

流程：Designer 在 Figma 改 token → 触发 msh-design-tokens Actions → 发 `@medsci/design-tokens@x.y.z` 到内部 npm → Dependabot 在 msh-web 提 PR。

---

## 8. 关键质量阈值（用作自我检测）

| 项目 | 阈值 | 工具 | 阻断 CI？ |
|---|---|---|---|
| Lighthouse Performance (mobile) | ≥ 80 | lhci | 否（观察） |
| Lighthouse Accessibility | ≥ 90 | lhci | 是 |
| axe critical violations | 0 | axe-core | 是 |
| TypeScript errors | 0 | tsc | 是 |
| ESLint errors | 0 | eslint | 是 |
| Unit coverage (lib/) | ≥ 70% | vitest | 否 |
| E2E 冒烟 | 4/4 通过 | playwright | 是 |
| Dead links | 0 | lychee | 每日任务 |
| Forbidden phrases (block) | 0 | claim-lint | 是 |

---

## 9. 常见操作速查

**新增一个 Pilot Offer**
1. Sanity Studio → Pilot Offers → Create。
2. 关联 Parent Solution、3–6 条 What You Get、填 Duration。
3. 如含量化声明 → 进入 Claim 登记池绑定 ProofPoint。
4. status=legal_review → @compliance 审阅 → approved → published。

**新增一个 Case Study**
1. 填 Challenge/Approach/Outcome（Portable Text）。
2. Metrics 至少 3 条（缺一不可发布）。
3. 若客户尚未签字：consentLevel=anonymous，前端自动 ⚑ Placeholder 徽标。
4. 签字后上传 consentDocument → consentLevel 调整 → 重新发布。

**发布一个 Other Engagement**
1. `/services/other-engagements` 下的 OtherEngagementCard 单独 schema。
2. SEO 字段锁死 noindex/nofollow/sitemapExclude（不可改）。
3. 表单 routingKey=B（Partner lane，不计 SQL）。
4. 只出现在 Footer，不进主导航。

**新增禁用词**
`msh-web/lib/forbidden-phrases.ts` + `msh-studio/schemas/lib/forbiddenPhrases.ts` 同步修改 → PR 合并后 CI 重跑。

---

## 10. W1 每日节奏建议

| 时间 | 事项 | 主理 |
|---|---|---|
| 09:30 | 10 min Standup（昨日 / 今日 / 阻塞） | PM |
| 14:00 | CR 槽 A（合并 PR） | Tech Lead |
| 16:30 | 内容 / 合规过稿 | Compliance |
| 18:00 | 收工前 push 当日 branch、登记工单状态 | 全员 |

周五：
- 11:00 Design × Dev 交接回顾
- 15:00 Demo + W2 规划（需呈 Kick-off Deck §4 W1 Sprint Plan 对齐物）

---

## 11. 问题升级路径

| 级别 | 情况 | 响应人 | SLA |
|---|---|---|---|
| P0 | 生产不可达 / 泄密 | Tech Lead + PM + Compliance | 30 min |
| P1 | Go-Live 闸失效 / 法务投诉 | Tech Lead + Compliance | 2 h |
| P2 | 功能 bug / 数据不准 | 对应 Dev | 1 工作日 |
| P3 | 体验问题 / 文案微调 | PM 排期 | 1 周 |

---

## 12. 附录：命令速查

```bash
# 新分支
git checkout -b feat/MSH-123-hero-module

# 提交（Conventional Commits）
git commit -m "feat(hero): add accent highlight and CN variant (MSH-123)"

# 拉取 main 并 rebase
git fetch origin && git rebase origin/main

# PR
gh pr create --fill --draft

# 本地验证全量（合并前跑）
pnpm lint && pnpm typecheck && pnpm test && pnpm build && pnpm e2e

# 生成 sitemap & robots（本地）
pnpm next build && open .next/server/app/sitemap.xml
```

---

**对齐文档**：
- W1-01 Kick-off Deck
- W1-03 Brand Visual Brief
- W1-04 Brand Guidelines
- W1-05 Homepage Mockup v0.1
- W1-06 Sanity Schema 初版
- 梅斯健康官网重构 技术选型文档 v1.0
- 梅斯健康官网重构 信息架构 IA 文档 v1.0

**签收**：Tech Lead ___ · PM ___ · Compliance ___ （日期：__________ ）
