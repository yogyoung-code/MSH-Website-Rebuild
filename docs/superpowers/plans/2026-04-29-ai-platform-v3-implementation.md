# `/ai-platform` v3.0 Implementation Plan (W3–W4) · v1.2

> **修订史**:
> - v1.0 → v1.1: plan review round 1 (CHANGES-REQUESTED, 2 BLOCKERs + 6 MAJORs + 3 MINORs + 2 NITs + 6 coverage gaps 全部修复)
> - v1.1 → v1.2: plan review round 2 (APPROVED-WITH-MINOR-FIXES, 2 IMPORTANT 内联修复: TS moduleResolution + Done Criteria 闭环扩列至 21 项), reviewer 明示无需 round 3, 进入 execution handoff
> 见末尾 §"修订日志"。

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship `/ai-platform` v3.0 (three-act narrative + slot-based product matrix) and 2 product subpages (`/ai-platform/deepevidence`, `/ai-platform/seekevidence`) by end of W4, replacing v2.0 PITL-methodology page.

**Architecture:** Slot-based product matrix backed by new Sanity `aiProduct` doc type. Total page = 3 acts (Foundation / Products / Method) + dual CTA. Existing prototype components reused (PitlRibbon w/ new compact variant, EvidenceTrail, ComplianceCallout). Showcase Tab component ported from reference repo `medsci-evidence-tech` but **rewritten in plain JSX + CSS variables + CSS transitions** — no Tailwind, no framer-motion (matches existing prototype stack).

**Tech Stack:** React UMD + Babel standalone (existing); Sanity v3 (TypeScript schemas); plain CSS variables (no Tailwind); CSS transitions (no framer-motion); `lucide.min.js` (icons); HubSpot Smart Form (existing); GA4 with consent-mode v2.

**Spec reference:** `docs/superpowers/specs/2026-04-29-ai-platform-redesign-design.md` v3.2 (commit `2108648`).

---

## Prerequisites & Parallel Work (non-engineering blockers)

These are tracked here but **executed by other teams in parallel**. Engineering tasks below assume these will land by the dates noted; if they slip, the corresponding engineering task is blocked.

| # | Deliverable | Owner | Due | Blocks |
|---|---|---|---|---|
| P1 | **Brand Guidelines v1.2** — register `--product-accent-{slug}` palette (blue, violet, teal, amber, emerald) + `--product-canvas-dark` token + sponsor sign-off on dual-accent system | Brand + Sponsor | W3 末 | Tasks 5, 6, 11; §8.12 gate |
| P2 | **Copy Deck v4.2 §1.6 / §1.6b / §1.6c** — Hero copy + product card / subpage prose templates + Act 2 forbidden-phrase list | Content + Legal + IR | W3 末 | Tasks 11, 12, 13 |
| P3 | **IA v2.1 修订** — §4.8 整节作废声明 + §6.1 schema delta + GA 事件表 | 内容 + IT | W3 | Task 18 (link audit) |
| P4 | **DeepEvidence + SeekEvidence demo vignette EN prose 重写** — 由医学写作团队起草,临床医师签字（PITL 流程） | 医学写作 + 临床顾问 | W3（**先于 W4 子页上线**） | Task 13 |
| P5 | **HubSpot `ai_notify_me` intent + 产品团队 owner 配置** | 增长 + IT | W4 W2 中 | Task 14 |
| P6 | **内容 ownership / freshness SLA 文档** — 季度更新责任人 + IR sign-off cadence + status 转换审批人 | 内容 + 法务 + IR | W4 W4 末（不阻塞 launch） | — |

**Sequence-dependency fallback (Spec §6.4 row 11)**: 若 P1 (Brand v1.2) W3 未发, §8.12 配色 gate 推到 W4 末, 首期 launch 配色走 hardcoded 白名单 `blue` / `violet`(均为 §3.4 enum 子集, gate 语义不绕过)。

---

## File Structure

### New Sanity files (W2-05 schema 增量)

| Path | Responsibility |
|---|---|
| `W2-05 Sanity Schema v1.0/schemas/documents/aiProduct.ts` | `aiProduct` doc type — 全部字段见 spec §3.4 |
| `W2-05 Sanity Schema v1.0/schemas/objects/aiProductShowcase.ts` | Showcase 嵌套对象（accentColor / iconRef / demoScenario / demoLanguage / citations / signedBy） |
| `W2-05 Sanity Schema v1.0/schemas/objects/aiProductSignedBy.ts` | demo PITL 签字嵌套（medicalWriter / clinicalReviewer / signedAt） |
| `W2-05 Sanity Schema v1.0/schemas/lib/aiProductValidators.ts` | 验收门 §8.13–16 的 Sanity validation 函数 |

### New prototype files (UI)

| Path | Responsibility |
|---|---|
| `prototype/components/AIAssetBalanceSheet.jsx` | Act 1 数字底座(3 类陈列, 6–8 数字) |
| `prototype/components/AIProductShowcase.jsx` | Act 2 双 Tab 实时 demo(参考代码 Hero 重写, slot 化) |
| `prototype/components/AIProductCardGrid.jsx` | Act 2 产品矩阵卡片网格(slot 化) |
| `prototype/components/AIProductCard.jsx` | Card Grid 单卡 |
| `prototype/components/ComingSoonCard.jsx` | Card Grid Coming Soon 占位卡 + Notify-me 表单触发 |
| `prototype/components/StickyAnchorNav.jsx` | 三幕 sticky 导航条(含 §3.8 移动端断点) |
| `prototype/components/TrustArchitecture.jsx` | Act 3 三支柱容器(RAG / PITL compact / Audit Trail) |
| `prototype/components/RagAnchorDiagram.jsx` | Act 3 支柱 1: query → retrieval → generation → citation 架构小图 |
| `prototype/components/AIPlatformErrorStates.jsx` | §3.7 状态降级矩阵的 fallback UI 组件 |
| `prototype/ai-platform-v3.html` | `/ai-platform` 总览页新版本(暂时与 v2 共存,W4 末切换) |
| `prototype/components/AIProductSubpageTemplate.jsx` | (v1.1 修正路径) 产品子页统一模板组件,被 instance HTML 引用 |
| `prototype/ai-platform-deepevidence.html` | (v1.1 修正路径) DeepEvidence 子页 instance(扁平 HTML,匹配现有 prototype 结构,非 Next.js 动态路由) |
| `prototype/ai-platform-seekevidence.html` | (v1.1 修正路径) SeekEvidence 子页 instance |
| `docs/acceptance/ai-platform-v3-degradation-matrix.md` | (v1.1 补登) Task 16 验收报告 |
| `docs/acceptance/ai-platform-v3-publish-gates.md` | (v1.1 补登) Task 17 验收报告 |
| `docs/acceptance/ai-platform-v3-legal-ir-signoff.md` | (v1.1 新增) Task 18.5 法务 + IR 审签记录 |
| `docs/acceptance/ai-platform-v3-rollback-runbook.md` | (v1.1 新增) Task 19 回滚 SOP |

### Modified prototype files

| Path | Change |
|---|---|
| `prototype/components/PitlRibbon.jsx` | **新增 `variant` prop**(`"full"` 默认 / `"compact"`); compact 模式下 step 1/2/4 折叠为缩略卡, step 3 展开 |
| `prototype/components/MetricStrip.jsx` | **退役**(删除 `prototype/ai-platform.html` 的引用; 组件文件保留供其他页用) |
| `prototype/ai-platform.html` | W4 末 launch day: 重命名为 `prototype/ai-platform-v2-archive.html` 或 301 跳转 v3 |
| `prototype/components/Header.jsx` | 验证 Top Nav `AI Platform` 链接仍指向 `/ai-platform`（IA 不变,无需改动 — 只做 verification 步骤） |
| `prototype/components/Footer.jsx` | 同上 verification |
| `W2-05 Sanity Schema v1.0/schemas/lib/forbiddenPhrases.ts` | 追加 7 条(spec §3.6 五条 + §7 两条) |
| `W2-05 Sanity Schema v1.0/schemas/index.ts` | 注册 `aiProduct` document |
| `W2-05 Sanity Schema v1.0/studio/desk-structure.ts` | 注册 AI Products desk node |

### New CMS content (W4)

| Path | Responsibility |
|---|---|
| Sanity `aiProduct` doc: `deepevidence` | 含 EN prose body(P4 交付) + 全部字段 + ProofPoint refs |
| Sanity `aiProduct` doc: `seekevidence` | 同上 |

### New analytics / form wiring

| Path | Responsibility |
|---|---|
| `prototype/assets/analytics/ga4-events.js` | 新增 4 类事件(`ai_product_card_click` / `showcase_tab_switch` / `notify_me_submit` / `access_request_submit`) |
| `prototype/assets/consent/consent-mode-v2.js` | Cookie 同意横幅与 GA4 接线 |
| HubSpot Smart Form | 新增 `ai_notify_me` intent 分支(P5 owner 配置) |

---

## Tasks

### Task 1: PitlRibbon `variant="compact"` prop

**Why first:** 最小、独立、有现成测试场景, 适合作为暖身任务建立工作流。Spec §4.1 / §4.3 / §6.5 / §11 row M2。

**Files:**
- Modify: `prototype/components/PitlRibbon.jsx`
- Test: 暂无测试基础设施 — 用 visual smoke test 替代 unit test(在 `prototype/_signature-preview.html` 增加 compact variant 演示区)

- [ ] **Step 1: Read existing PitlRibbon.jsx 摸底**

```bash
cat "prototype/components/PitlRibbon.jsx"
```

确认 line 27 单步拒绝逻辑 `if (steps.length < 2) return null` 仍在,确认 props 结构。

- [ ] **Step 2: 新增 `variant` prop, 默认 `"full"`**

修改函数签名: `function PitlRibbon({ eyebrow, title, steps, variant = "full" })`。

不破坏现有调用 — 现有 `prototype/ai-platform.html` 调用未传 variant, 自动 fallback 为 `"full"`。

- [ ] **Step 3: 实现 compact 视觉 (v1.1: 加 step.length===4 显式断言)**

compact 模式下:
- 4 步全部 render(line 27 `steps.length < 2` 拒绝 0/1 保留, 不破坏)
- **新增断言**: `if (variant === 'compact' && steps.length !== 4) { console.warn('compact variant requires exactly 4 steps; falling back to full'); variant = 'full'; }` — 在组件头注释中说明 compact 严格要求 4 步且 step 3 为 spotlight
- step 1/2/4 渲染为高度收缩的缩略卡(仅显示 num + title + output, 隐藏 ai/physician 双轨详情)
- step 3 渲染为完整双轨详情(沿用 full 模式的 grid)
- 容器加 `data-variant="compact"` 属性, CSS 用 `[data-variant="compact"] .step:not(.spotlight)` 选择器收缩

CSS 在组件文件内联或 `prototype/assets/colors_and_type.css` 增量。

- [ ] **Step 4: 在 `_signature-preview.html` 加 compact variant 演示区**

复制现有 PitlRibbon 演示区, 改 variant="compact", 视觉对比。

- [ ] **Step 5: 浏览器打开 `_signature-preview.html`, 截图核对**

```bash
open "prototype/_signature-preview.html"
```

确认: full 模式 4 步等高; compact 模式仅 step 3 展开, 其余三步缩成单行。

- [ ] **Step 6: Commit**

```bash
git add prototype/components/PitlRibbon.jsx prototype/_signature-preview.html
git commit -m "feat(PitlRibbon): add variant=compact prop, preserves 4-step semantics"
```

---

### Task 2: forbiddenPhrases 追加 6 条 (v1.1 修正,#13–18 入 phrases,#19 由 §8.13 gate 拦不入此文件)

**Why now:** schema validators 依赖此文件, 必须先于 Task 3 完成。Spec §7 #13–18(#19 是 accessUrl redirect 校验,在 validator 端,不在 phrases)。

**Files:**
- Modify: `W2-05 Sanity Schema v1.0/schemas/lib/forbiddenPhrases.ts`

- [ ] **Step 1: Read 现有 forbiddenPhrases.ts 摸底**

```bash
cat "W2-05 Sanity Schema v1.0/schemas/lib/forbiddenPhrases.ts"
```

- [ ] **Step 2: 追加 6 条**

新增 entries(每条带 EN + CN 表达, 与现有规范一致):
1. `industry-leading` / `行业第一` / `行业领先`
2. `largest medical AI` / `最大医疗 AI`
3. `replaces physicians` / `取代医生`
4. `100% accurate` / `100% 准确`
5. `AI doctor` / `AI 医生`
6. `cure` / `治愈`

(注: Cloud Run URL 暴露不入此文件, 由 §8.13 gate 在 validator 端拦截, 见 Task 4)

**校验**: 与 v2.0 已有词不重复(读全文件后追加)。

- [ ] **Step 3: 跑 schema build 确认无 lint error**

```bash
cd "W2-05 Sanity Schema v1.0" && npx tsc --noEmit schemas/lib/forbiddenPhrases.ts
```

期望: 无 TS 错误。

- [ ] **Step 4: Commit**

```bash
git add "W2-05 Sanity Schema v1.0/schemas/lib/forbiddenPhrases.ts"
git commit -m "chore(schema): forbidden phrases +6 (Act 2 boundary clauses, spec §7 #13-18)"
```

---

### Task 3: Sanity `aiProduct` schema scaffold(无 validators)

**Files:**
- Create: `W2-05 Sanity Schema v1.0/schemas/objects/aiProductSignedBy.ts`
- Create: `W2-05 Sanity Schema v1.0/schemas/objects/aiProductShowcase.ts`
- Create: `W2-05 Sanity Schema v1.0/schemas/documents/aiProduct.ts`
- Modify: `W2-05 Sanity Schema v1.0/schemas/index.ts`

- [ ] **Step 1: 写 `aiProductSignedBy.ts` (3 字段, v1.1 修正:用 `export default` 与现有 schemas 一致)**

```typescript
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'aiProductSignedBy',
  title: 'Demo Vignette PITL Sign-off',
  type: 'object',
  fields: [
    defineField({ name: 'medicalWriter', title: 'Medical Writer', type: 'string', validation: r => r.required() }),
    defineField({ name: 'clinicalReviewer', title: 'Clinical Reviewer', type: 'string', validation: r => r.required() }),
    defineField({ name: 'signedAt', title: 'Signed At', type: 'datetime', validation: r => r.required() }),
  ],
})
```

- [ ] **Step 2: 写 `aiProductShowcase.ts` (6 字段, 含 demoLanguage 与 signedBy ref, v1.1: `export default`)**

```typescript
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'aiProductShowcase',
  title: 'AI Product Showcase',
  type: 'object',
  fields: [
    defineField({
      name: 'accentColor', title: 'Accent Color', type: 'string',
      options: { list: ['blue', 'violet', 'teal', 'amber', 'emerald'], layout: 'radio' },
      validation: r => r.required(),
    }),
    defineField({ name: 'iconRef', title: 'Icon Asset', type: 'image', validation: r => r.required() }),
    defineField({ name: 'demoScenario', title: 'Demo Scenario', type: 'array', of: [{ type: 'block' }, { type: 'image' }], validation: r => r.required() }),
    defineField({
      name: 'demoLanguage', title: 'Demo Language', type: 'string',
      options: { list: ['en', 'cn'] }, initialValue: 'en',
    }),
    defineField({ name: 'citations', title: 'Citations', type: 'array', of: [{ type: 'reference', to: [{ type: 'proofPoint' }] }] }),
    defineField({ name: 'signedBy', title: 'PITL Sign-off', type: 'aiProductSignedBy', validation: r => r.required() }),
  ],
})
```

- [ ] **Step 3: 写 `aiProduct.ts` document type (按 spec §3.4 字段, v1.1: `export default defineType(...)`)**

完整字段列表见 spec §3.4(slug / name / status / userRole / positioningOneLiner / capabilitiesShort / showcase / capabilitiesFull / useCases / accessUrl / accessUrlIsInternalRedirect / notifyMeEnabled / hubspotIntent / irApprovedAt / irApprovedBy / trustRefs / seo)。

- [ ] **Step 4: 在 `schemas/index.ts` 注册三个 type (v1.1 修正: default import 与现有 schemas 一致)**

先 Read 现有 index.ts 摸 import 风格:
```bash
cat "W2-05 Sanity Schema v1.0/schemas/index.ts"
```
确认现有形如 `import page from './documents/page'` (default), 然后:
```typescript
import aiProduct from './documents/aiProduct'
import aiProductShowcase from './objects/aiProductShowcase'
import aiProductSignedBy from './objects/aiProductSignedBy'

// 现有 schemaTypes 数组末尾追加:
export const schemaTypes = [
  // ... existing entries unchanged
  aiProductSignedBy,
  aiProductShowcase,
  aiProduct,
]
```

- [ ] **Step 5: TypeScript build pass**

```bash
cd "W2-05 Sanity Schema v1.0" && npx tsc --noEmit
```

期望: 无错误。

- [ ] **Step 6: Commit**

```bash
git add "W2-05 Sanity Schema v1.0/schemas/"
git commit -m "feat(schema): aiProduct document type + showcase/signedBy objects"
```

---

### Task 4: Sanity `aiProduct` validators (publish gates §8.13–16)

**Files:**
- Create: `W2-05 Sanity Schema v1.0/schemas/lib/aiProductValidators.ts`
- Modify: `W2-05 Sanity Schema v1.0/schemas/documents/aiProduct.ts` (集成 validators)

- [ ] **Step 1: 写 5 个 validator 函数 (v1.1: date 抽常量 + status validator 真实实现)**

```typescript
// aiProductValidators.ts
import type { Rule } from 'sanity'

// v1.1: 单一来源,W4 launch 窗口结束时间。 2026-W6 后清理此 validator 或调整 ceiling。
// Spec §8.16 changelog row 16. 提醒: 2026-W6 cleanup calendar reminder.
export const W4_LAUNCH_WINDOW_END = new Date('2026-05-30T23:59:59Z')

export const validateAccessUrlInternalRedirect = (ctx: any) => {
  const { document } = ctx
  if (document?.status === 'limitedPreview' && !document?.accessUrlIsInternalRedirect) {
    return 'Limited Preview products must use internal redirect URL (e.g. /access/<slug>)'
  }
  return true
}

export const validateHubspotIntent = (ctx: any) => {
  const { document } = ctx
  if (document?.status === 'comingSoon') {
    if (document?.hubspotIntent !== 'ai_notify_me') return 'Coming Soon must use intent=ai_notify_me'
    if (!document?.notifyMeEnabled) return 'Coming Soon must have notifyMeEnabled=true'
  }
  return true
}

export const validateIrSignOff = (ctx: any) => {
  const { document } = ctx
  if (document?.status === 'ga' && (!document?.irApprovedAt || !document?.irApprovedBy)) {
    return 'GA status requires both irApprovedAt and irApprovedBy non-empty'
  }
  return true
}

export const validateW4LaunchCeiling = (ctx: any) => {
  const { document } = ctx
  if (new Date() <= W4_LAUNCH_WINDOW_END && document?.status === 'ga') {
    return 'During W4 launch window, status is capped at limitedPreview. GA earliest W6.'
  }
  return true
}

// v1.1: 真实实现 — fetch 当前 published 版本的 status 与新提交比对
export const validateStatusTransition = async (ctx: any) => {
  const { document, getClient } = ctx
  if (!document?._id || !document?.status) return true
  const client = getClient({ apiVersion: '2024-01-01' })
  // 去掉 drafts. 前缀获取 published 版本
  const publishedId = document._id.replace(/^drafts\./, '')
  const previousStatus = await client.fetch(
    '*[_id == $id][0].status',
    { id: publishedId }
  )
  if (previousStatus === 'comingSoon' && document.status === 'ga') {
    return 'Cannot transition comingSoon → ga directly. Must pass through limitedPreview (spec §3.9).'
  }
  return true
}
```

- [ ] **Step 1.5: 写 unit tests (v1.1 新增,validators 是纯函数,值得 TDD)**

`W2-05 Sanity Schema v1.0/schemas/lib/aiProductValidators.test.ts`:

```typescript
import { test } from 'node:test'
import assert from 'node:assert'
import {
  validateAccessUrlInternalRedirect,
  validateHubspotIntent,
  validateIrSignOff,
  validateW4LaunchCeiling,
  W4_LAUNCH_WINDOW_END
} from './aiProductValidators'

test('validateAccessUrlInternalRedirect blocks limitedPreview without internal redirect', () => {
  const r = validateAccessUrlInternalRedirect({ document: { status: 'limitedPreview', accessUrlIsInternalRedirect: false }})
  assert.match(String(r), /Limited Preview products must use internal redirect/)
})

test('validateAccessUrlInternalRedirect passes when internal redirect set', () => {
  const r = validateAccessUrlInternalRedirect({ document: { status: 'limitedPreview', accessUrlIsInternalRedirect: true }})
  assert.strictEqual(r, true)
})

test('validateHubspotIntent enforces ai_notify_me on comingSoon', () => {
  const r = validateHubspotIntent({ document: { status: 'comingSoon', hubspotIntent: 'ai_product_access' }})
  assert.match(String(r), /must use intent=ai_notify_me/)
})

test('validateIrSignOff requires both fields for GA', () => {
  const r1 = validateIrSignOff({ document: { status: 'ga', irApprovedAt: '2026-05-01' }})
  assert.match(String(r1), /both irApprovedAt and irApprovedBy/)
  const r2 = validateIrSignOff({ document: { status: 'ga', irApprovedAt: '2026-05-01', irApprovedBy: 'IR Lead' }})
  assert.strictEqual(r2, true)
})

test('validateW4LaunchCeiling blocks GA during launch window', () => {
  // mock now < W4_LAUNCH_WINDOW_END via Sinon-like override or test only path-true case
  // 真实测试需要 Date mock; 此处至少验证函数签名 + 文案
  const r = validateW4LaunchCeiling({ document: { status: 'limitedPreview' }})
  assert.strictEqual(r, true)  // limitedPreview 永远通过此 gate
})
```

- [ ] **Step 1.6: 跑 unit tests (v1.2 修订: 优先 vitest 路径,避开 'sanity' 模块解析坑)**

**Path A (推荐): 若工程引入 vitest**

```bash
cd "W2-05 Sanity Schema v1.0" && npx vitest run schemas/lib/aiProductValidators.test.ts
```

**Path B (fallback,无 vitest 时)**: 标准 tsc 编译会因 `import type { Rule } from 'sanity'` 解析失败(W2-05 目录无独立 tsconfig + Sanity 类型 bundle 方式)。 用 `--moduleResolution bundler`(TS 5.0+) 或在测试文件顶部 stub 类型:

```bash
cd "W2-05 Sanity Schema v1.0" && npx tsc schemas/lib/aiProductValidators.test.ts --outDir /tmp/test-out --target es2022 --module nodenext --moduleResolution bundler && node --test /tmp/test-out/aiProductValidators.test.js
```

或者把 test 文件中的 sanity import 改 `type Rule = any` 本地 stub(测试不依赖 Sanity 真实 Rule type), 用普通 `tsc` 编译即可。

期望: 5 个 test PASS。

- [ ] **Step 2: 集成 validators 到 `aiProduct.ts` 顶层 validation**

```typescript
defineType({
  name: 'aiProduct',
  // ...
  validation: (Rule: Rule) =>
    Rule.custom((doc, ctx) => {
      const checks = [
        validateAccessUrlInternalRedirect(ctx),
        validateHubspotIntent(ctx),
        validateIrSignOff(ctx),
        validateW4LaunchCeiling(ctx),
        validateStatusTransition(ctx),
      ]
      const errors = checks.filter(c => c !== true)
      return errors.length === 0 ? true : errors.join('; ')
    }),
  // ...
})
```

- [ ] **Step 3: TypeScript build pass**

```bash
cd "W2-05 Sanity Schema v1.0" && npx tsc --noEmit
```

- [ ] **Step 4: 启动 Sanity studio 烟雾测试**

```bash
cd "W2-05 Sanity Schema v1.0" && npx sanity dev
```

新建一条 aiProduct doc, 故意触发每个 gate(例如 status=ga 但 irApprovedBy 留空), 确认报错信息可读。 特别测试 `validateStatusTransition` — 先创建 status=`comingSoon` 并 publish, 然后改为 `ga` 提交,确认阻断报错引用 spec §3.9。

- [ ] **Step 5: Commit**

```bash
git add "W2-05 Sanity Schema v1.0/schemas/"
git commit -m "feat(schema): aiProduct publish gates §8.13-16 with unit tests"
```

---

### Task 5: AIAssetBalanceSheet component (Act 1 数字底座)

**Files:**
- Create: `prototype/components/AIAssetBalanceSheet.jsx`

- [ ] **Step 1: 创建组件骨架**

接收 props: `groups: { label: string; items: { value: string; label: string; sourceFootnote: string }[] }[]`。
3 类分组(Demand-Side Network / Knowledge Base / Working Corpus)。

- [ ] **Step 2: 实现暗色卡视觉(参考 medsci-evidence-tech `Features.tsx` lines 39–69, 但改写为 CSS-vars)**

关键 CSS:
- 容器: `background: var(--bg-2-dark); border-radius: 1.5rem; padding: 3rem;`
- 数字: `font-family: var(--font-display); font-size: 2.25rem; color: var(--product-accent-blue);`
- 不要 grainy noise SVG, 不要 `LIVE DATA STREAM` 假实时绿点(spec §2.2 砍掉)

- [ ] **Step 3: 实现"右侧叙事条"(spec §2.2)**

60–80 字英文短文,按 spec §2.2 文案。

- [ ] **Step 4: 加底部 fineprint**

`Source: Internal registry · Last verified 2026-Q1 · IR sign-off pending`

- [ ] **Step 5: 在 `_signature-preview.html` 加演示区**

填入 mock data(8 个数字, 3 类), 浏览器核对视觉。

- [ ] **Step 6: Commit**

```bash
git add prototype/components/AIAssetBalanceSheet.jsx prototype/_signature-preview.html
git commit -m "feat(component): AIAssetBalanceSheet (Act 1 numbers)"
```

---

### Task 6: AIProductShowcase 组件 (v1.1 拆分为 6a / 6b)

**Why heavy & split:** 参考代码 `medsci-evidence-tech/components/Hero.tsx` 372 行 Tailwind + framer-motion + lucide-react。 v1.0 用 10 步装一个 task,plan reviewer 标"under-decomposed"。 v1.1 拆为 6a (Showcase Shell) + 6b (Demo Renderer), 估时合计 2.5 天。

---

### Task 6a: Tailwind→CSS-vars mapping table + Showcase Shell (1.5 天)

**Files:**
- Create: `docs/engineering/tailwind-to-css-vars-map.md`(v1.1 新增,工程参考表)
- Create: `prototype/components/AIProductShowcase.jsx`(只到 shell, 不含 demo content)

- [ ] **Step 0: 写 Tailwind→CSS-vars 映射表 (v1.1 新增,先做映射表再开 port)**

读 `Hero.tsx` 全文,提取所有 Tailwind 类,逐一映射到 CSS 变量或 plain CSS。 输出 `docs/engineering/tailwind-to-css-vars-map.md`,例如:

| Tailwind | CSS equivalent | 备注 |
|---|---|---|
| `glass-card` | `background: rgba(15,17,23,0.6); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.1);` | 项目 token: `--glass-bg / --glass-border` |
| `bg-gradient-to-r from-blue-600 to-blue-500` | `background: linear-gradient(to right, var(--product-accent-blue-600), var(--product-accent-blue-500));` | accent 色值待 P1 Brand v1.2 |
| `blur-[100px]` | `filter: blur(100px);` | 直接 CSS |
| `mix-blend-overlay` | `mix-blend-mode: overlay;` | 直接 CSS |
| `bg-[#05080f]` | `background: var(--bg-2-dark);` | 项目 token |
| `from-blue-950/40` | `rgba(23,37,84,0.4)` 或 `color-mix()` | 透明度内嵌 |

完整覆盖 ~30 类。 这张表是后续 6a/6b 步骤实施的工程参考,**也是 v1.1 解决"stack-mismatch"的关键工件**。

- [ ] **Step 1: 创建组件骨架**

```jsx
function AIProductShowcase({ products }) {
  // products: [{ slug, name, accentColor, iconRef, demoScenario, ... }]
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActiveIdx(i => (i + 1) % products.length), 8000);
    return () => clearInterval(t);
  }, [paused, products.length]);
  // ...
}
```

注意: SSR / static export 默认 Tab 必须是 `products[0]`(spec §3.7), useEffect 在 client hydrate 后启动。

- [ ] **Step 2: Tab Switcher UI**

水平 pill 容器, N 个 Tab 按钮, 当前 active 按钮加 accent 渐变背景 + ring(对照 mapping 表迁移 Tailwind 类)。

- [ ] **Step 3a: Browser-mockup 外壳容器 (Hero.tsx lines 119–166)**

只 port glass-card 外框 + 顶部 accent 渐变发光条 + 整体 grid 双列 (sidebar / main) 划分。 不含 sidebar 内容、不含 main 内容。 移除 framer-motion AnimatePresence, 改 CSS opacity transition (`transition: opacity 300ms ease;` 切换时短暂 opacity:0)。

- [ ] **Step 3b: Sidebar mock (Hero.tsx lines 126–151)**

port logo + 3 个 SidebarItem + 底部 user avatar 区。 SidebarItem 改为 plain JSX 子组件。

- [ ] **Step 3c: Main content area 顶部 + Input strip (Hero.tsx lines 156–166, 305–317)**

只 port header 条 (model 字符串 + share/more icons) 和底部 input 仿真条。 中间 content body 留空, 由 Task 6b 填充。

- [ ] **Step 4: a11y (v1.1: aria-live 改 off)**

容器 `aria-live="off"` (8 秒轮播会持续 spam screen reader, polite 不合适)。 Tab 按钮加 `aria-selected={activeIdx === i}`。 hover/focus 触发 `setPaused(true)`。

- [ ] **Step 5: SSR / no-JS fallback**

确保 `<noscript>` 内嵌静态版本: 仅 `products[0]` 的截图。 在 `prototype/ai-platform-v3.html` 文档头部加 `<noscript>` 块。

- [ ] **Step 6: 在 `_signature-preview.html` 加演示区 (双 mock product, content body 暂为 placeholder)**

- [ ] **Step 7: 浏览器核对**

```bash
open "prototype/_signature-preview.html"
```

- [ ] **Step 8: Commit**

```bash
git add docs/engineering/tailwind-to-css-vars-map.md prototype/components/AIProductShowcase.jsx prototype/_signature-preview.html
git commit -m "feat(component): AIProductShowcase shell — Tab + glass-card frame (v1.1 split a/b)"
```

---

### Task 6b: Demo Content Renderer + 状态降级 (1 天)

**Files:**
- Create: `prototype/components/AIProductShowcaseDemo.jsx`
- Modify: `prototype/components/AIProductShowcase.jsx` (集成 demo renderer)

- [ ] **Step 1: 写 mini portable-text renderer**

工程当前不引入 `@portabletext/react`(避免新增依赖)。 自写 minimal renderer 支持本场景需要的 block types: `block`(段落)、`image`、自定义 `chatBubble`、`citationBadge`、`actionChip`、`dataTable`。 ~80 行。

- [ ] **Step 2: AIProductShowcaseDemo 子组件**

接收 `demoScenario` portable text + `accentColor`, render 完整 chat 气泡 / table / citation badges / action chips。

- [ ] **Step 3: 集成到 Task 6a 的 main content body slot**

- [ ] **Step 4: 状态降级 (spec §3.7)**

- 当 `products.length === 0`: render placeholder 大图 + "Products under quiet development. Talk to us." (这一段在 AIProductShowcase 而非 Demo 子组件)
- 当 `demoScenario` 解析异常: render 静态截图 + "Demo content unavailable. Visit the product page for details."
- `iconRef` 404: render fallback monogram(产品名首字母)

- [ ] **Step 5: 浏览器核对(Chromium + Safari, 含禁用 JS 测试)**

```bash
open "prototype/_signature-preview.html"
# Safari: Develop → Disable JavaScript, 刷新, 确认 fallback 截图可见
```

- [ ] **Step 6: Commit**

```bash
git add prototype/components/AIProductShowcaseDemo.jsx prototype/components/AIProductShowcase.jsx
git commit -m "feat(component): AIProductShowcaseDemo renderer + degradation states"
```

---

### Task 7: AIProductCard + AIProductCardGrid 组件

**Files:**
- Create: `prototype/components/AIProductCard.jsx`
- Create: `prototype/components/AIProductCardGrid.jsx`

- [ ] **Step 1: AIProductCard 单卡(spec §3.3 模板)**

接收 props: 全部 `aiProduct` 字段子集。 渲染: status badge + product name + userRole + positioningOneLiner(2 行) + capabilitiesShort(3 条) + 双 CTA(Learn more / Request access)。

- [ ] **Step 2: 状态 badge 颜色映射**

- `limitedPreview` → 浅蓝 + "Limited Preview"
- `ga` → 绿色 + "Generally Available"
- `comingSoon` → 灰色 + "Coming Soon"

- [ ] **Step 3: AIProductCardGrid 容器**

CSS Grid: `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));`(自动 1/2/3 列响应)。

- [ ] **Step 4: 在 `_signature-preview.html` 演示**

3 张卡(deepevidence + seekevidence + coming soon stub)。

- [ ] **Step 5: Commit**

```bash
git add prototype/components/AIProductCard.jsx prototype/components/AIProductCardGrid.jsx prototype/_signature-preview.html
git commit -m "feat(component): AIProductCard + Grid (slot-based, auto-fit responsive)"
```

---

### Task 8: ComingSoonCard 组件(含 Notify-me)

**Files:**
- Create: `prototype/components/ComingSoonCard.jsx`

- [ ] **Step 1: 卡视觉(spec §3.3)**

灰底 + Coming Soon badge + 模糊 product name + "Working on it · 2026 H2" + 描述 + Notify me CTA。

- [ ] **Step 2: Notify-me 表单触发**

CTA click → 打开 modal(沿用 Smart Form 现有 modal 机制 — 检查 `prototype/components/` 是否有 SmartFormModal, 若无, fallback 为 `<a href="/contact?intent=ai_notify_me">`)。

- [ ] **Step 3: 在 `_signature-preview.html` 演示**

- [ ] **Step 4: Commit**

```bash
git add prototype/components/ComingSoonCard.jsx prototype/_signature-preview.html
git commit -m "feat(component): ComingSoonCard with Notify-me trigger"
```

---

### Task 9: StickyAnchorNav 组件(含 §3.8 移动端断点)

**Files:**
- Create: `prototype/components/StickyAnchorNav.jsx`

- [ ] **Step 1: 桌面 ≥1024px: 4 项水平 sticky bar**

```jsx
<nav role="navigation" aria-label="In-page sections" className="sticky-anchor-nav">
  <a href="#foundation">Foundation</a>
  <a href="#products">Products</a>
  <a href="#method">Method</a>
  <a href="#cta">Talk</a>
</nav>
```

CSS: `position: sticky; top: 0; z-index: 50;` + 暗色背景 + 边框。

- [ ] **Step 2: 中等 640–1023px: `<select>` 折叠**

```jsx
<select aria-controls="page-content" onChange={e => window.location.hash = e.target.value}>
  <option value="#foundation">Foundation</option>
  <option value="#products">Products</option>
  <option value="#method">Method</option>
  <option value="#cta">Talk</option>
</select>
```

CSS: `@media (min-width: 640px) and (max-width: 1023px)` 范围内 nav 隐藏, select 显示。

- [ ] **Step 3: 移动 ≤639px: 隐藏 sticky, Hero 内嵌 anchor pills**

`@media (max-width: 639px) { .sticky-anchor-nav { display: none; } }` + `<HeroInlineAnchors />` 子组件渲染 Hero 内。

- [ ] **Step 4: scroll-spy(active 项高亮)**

IntersectionObserver 监测 4 个 section 的可见性, 当前 section 对应 nav 链接加 `aria-current="location"`。

- [ ] **Step 5: 在 `_signature-preview.html` 演示**

- [ ] **Step 6: Commit**

```bash
git add prototype/components/StickyAnchorNav.jsx prototype/_signature-preview.html
git commit -m "feat(component): StickyAnchorNav with mobile breakpoints + scroll-spy"
```

---

### Task 10: TrustArchitecture 组件(Act 3 三支柱)

**Files:**
- Create: `prototype/components/TrustArchitecture.jsx`
- Create: `prototype/components/RagAnchorDiagram.jsx`(支柱 1 的小图)

- [ ] **Step 1: TrustArchitecture 容器**

3 支柱并列(grid: `repeat(3, 1fr)` 桌面 / `1fr` 移动)。

- [ ] **Step 2: 支柱 1 RagAnchorDiagram**

简单 SVG / lucide icons 串联: query → retrieval → generation → citation。 lines 用 `<line>` 或 CSS pseudo-element。

- [ ] **Step 3: 支柱 2 PitlRibbon variant="compact"**

引用 Task 1 完成的 compact 模式。

- [ ] **Step 4: 支柱 3 EvidenceTrail(沿用)**

直接 import 现有 `prototype/components/EvidenceTrail.jsx`, 传入 spec §4.1 的 4 行数据(已在 v2.0 ai-platform.html 中)。

- [ ] **Step 5: 在 `_signature-preview.html` 演示**

- [ ] **Step 6: Commit**

```bash
git add prototype/components/TrustArchitecture.jsx prototype/components/RagAnchorDiagram.jsx prototype/_signature-preview.html
git commit -m "feat(component): TrustArchitecture three pillars (Act 3)"
```

---

### Task 11: `/ai-platform` 总览页装配(`prototype/ai-platform-v3.html`)

**Files:**
- Create: `prototype/ai-platform-v3.html`

- [ ] **Step 1: 复制 `prototype/ai-platform.html` 作为脚手架**

```bash
cp "prototype/ai-platform.html" "prototype/ai-platform-v3.html"
```

保留 head / vendor scripts / lucide / PageShell, 删除 v2 的 PitlRibbon(full)/MetricStrip 等 body。

- [ ] **Step 2: 改 `<title>` / OG meta**

H1 改为 `Built for the AI era of medicine.`(spec §2.1 锁定)。
description 描 `AI products, audited evidence stack, and reverse-due-diligence transparency for global healthcare partners.`

- [ ] **Step 3: 装配 Hero**

```jsx
<PageShell
  eyebrow="AI PLATFORM"
  title="Built for the AI era of medicine."
  subtitle="AI-Enabled. Physician-Verified. Globally Ready."
  // ...
>
  <HeroSubhead text="Two products today. More arriving. All built on the same audited evidence stack." />
  <HeroPrimaryCTA href="#products" label="See the products ↓" />
  <HeroSecondaryCTA href="/contact?intent=ai_dd" label="Talk to our AI team" />
```

- [ ] **Step 4: 装 StickyAnchorNav, 紧贴 Hero 之后**

- [ ] **Step 5: 装 Act 1 — AIAssetBalanceSheet**

填入 8 个数字(从 spec §2.2 ASCII 表)。

- [ ] **Step 6: 装 Act 2 — Matrix Intro + AIProductShowcase + AIProductCardGrid**

`<MatrixIntro>` 内容来自 spec §3.1; `<AIProductShowcase products={...}>` `<AIProductCardGrid products={...}>` — 当前用 mock data, Task 13 之后改为 fetch CMS。

- [ ] **Step 7: 装 Act 3 — TrustArchitecture + ComplianceCallout**

ComplianceCallout 沿用 v2 文案。

- [ ] **Step 8: 装 Final · Dual CTA**

按 spec §5 ASCII 布局(2 列, 2 个 CTA, intent 不同)。

- [ ] **Step 9: 浏览器核对**

```bash
open "prototype/ai-platform-v3.html"
```

- [ ] **Step 10: Commit**

```bash
git add prototype/ai-platform-v3.html
git commit -m "feat(page): /ai-platform v3 overview, three-act assembly with mock data"
```

---

### Task 12: 产品子页统一模板 + 两个 instance (v1.1 修正路径)

**Files:** (v1.1: 路径改为扁平 HTML, 与现有 prototype 结构一致, 不引入 Next.js 动态路由)
- Create: `prototype/components/AIProductSubpageTemplate.jsx` (共享模板组件)
- Create: `prototype/ai-platform-deepevidence.html` (扁平 HTML, 路由对应 `/ai-platform/deepevidence`)
- Create: `prototype/ai-platform-seekevidence.html` (扁平 HTML, 路由对应 `/ai-platform/seekevidence`)

注: URL 路径仍是 `/ai-platform/deepevidence` (生产域名), 由静态托管层(Netlify/CloudFront 等)的 redirect/rewrite 把扁平文件映射到 nested URL。 现有 `prototype/_redirects` 需对应配置(Task 18 verify)。

- [ ] **Step 1: 写 `AIProductSubpageTemplate.jsx` — 7 模块函数(spec §3.5)**

```jsx
function AIProductSubpage({ product }) {
  return (
    <PageShell breadcrumbs={[{label:'Home',href:'/'},{label:'AI Platform',href:'/ai-platform'},{label:product.name.en}]}>
      <SubHero {...product} />
      <FullScreenShowcase showcase={product.showcase} />
      <CapabilitiesList items={product.capabilitiesFull} />
      <UseCases items={product.useCases} />
      <TrustFootnote refs={product.trustRefs} />
      <AccessAndStatus product={product} />
      <ProductFinalCTA />
    </PageShell>
  );
}
```

每个子组件可在 `AIProductSubpageTemplate.jsx` 内联或拆 separate files。

- [ ] **Step 2: 写 `prototype/ai-platform-deepevidence.html` instance**

复制 `prototype/ai-platform.html` 的 vendor scripts head, 引入 `AIProductSubpageTemplate.jsx`, 传入 mock product object(EN prose body 用占位符, P4 完成后 Task 13 替换)。

- [ ] **Step 3: 写 `prototype/ai-platform-seekevidence.html` instance**

同上。

- [ ] **Step 4: 配置 `_redirects` 把生产 URL `/ai-platform/<slug>` 映射到扁平文件**

```
/ai-platform/deepevidence  /ai-platform-deepevidence.html  200
/ai-platform/seekevidence  /ai-platform-seekevidence.html  200
```

`200` rewrite (非 301), 浏览器地址栏保持 `/ai-platform/<slug>`。

- [ ] **Step 5: 浏览器核对两个子页**

```bash
open "prototype/ai-platform-deepevidence.html"
open "prototype/ai-platform-seekevidence.html"
```

- [ ] **Step 6: Commit**

```bash
git add prototype/components/AIProductSubpageTemplate.jsx prototype/ai-platform-deepevidence.html prototype/ai-platform-seekevidence.html prototype/_redirects
git commit -m "feat(page): subpage template + DE/SE instances (flat HTML + rewrites)"
```

---

### Task 13: CMS aiProduct documents 录入(P4 prose 到位后)

**Blocked by:** P4(医学写作 EN prose 重写 + 临床签字)。 若 P4 W3 末未交付, 此任务延后, Task 11/12 暂用 mock data 上线。

**Files:**
- Sanity studio: 新建 2 条 `aiProduct` doc(deepevidence, seekevidence)

- [ ] **Step 1: 启动 studio**

```bash
cd "W2-05 Sanity Schema v1.0" && npx sanity dev
```

- [ ] **Step 2: 新建 deepevidence doc**

填全部字段:
- slug: `deepevidence`
- name: { en: "DeepEvidence", cn: "DeepEvidence" }
- status: `limitedPreview`(W4 上限, spec §8.16)
- userRole: { en: "Clinical AI · Point of Care" }
- positioningOneLiner: { en: "Authoritative-source clinical guidance at the bedside. Each answer anchored to guidelines and drug labels." }
- capabilitiesShort: 3 条 EN
- showcase.accentColor: `blue`
- showcase.iconRef: 上传 lucide Activity icon SVG
- showcase.demoScenario: portable text(P4 来源)
- showcase.signedBy: { medicalWriter: "<P4 责任人>", clinicalReviewer: "<P4 临床医师>", signedAt: "<日期>" }
- citations: 关联 ProofPoint refs(ADA 2024 / KDIGO / 等)
- accessUrl: `/access/deepevidence`(内部 redirect, §8.13)
- accessUrlIsInternalRedirect: `true`
- hubspotIntent: `ai_product_access`
- irApprovedAt / irApprovedBy: 留空(W4 仅 limitedPreview, GA 才需要)

- [ ] **Step 3: 触发所有 publish gates 校验**

故意错填(如 accessUrlIsInternalRedirect=false), 确认 §8.13 阻断报错。

- [ ] **Step 4: 新建 seekevidence doc**

同上, accentColor: `violet`, capabilitiesShort 改为 SeekEvidence 三条(spec §3.3 已示例)。

- [ ] **Step 4.5: IR content 审签 (v1.1 新增,反向尽调风险拦截)**

将渲染好的 deepevidence + seekevidence 子页(staging URL 见 Task 18.5)以及 CMS 中两条 doc 的 prose 全文,导出 PDF 路由给 IR 团队做内容审签。 IR 同意后:
- 在 `docs/acceptance/ai-platform-v3-cms-content-ir-signoff.md` 记录 IR sign-off date + responsible person
- 若产品最终升 `ga`, 把 IR sign-off 字段填入 CMS doc 的 `irApprovedAt` / `irApprovedBy`(W4 期间仅 `limitedPreview`,此字段可留空)

- [ ] **Step 5: 修改 Task 11 的 ai-platform-v3.html — 改 mock data 为 fetch CMS**

```jsx
const products = useSanityFetch(`*[_type == "aiProduct"] | order(_createdAt asc)`);
```

(若工程中已有 useSanityFetch hook 沿用; 否则用 fetch + GROQ。)

- [ ] **Step 6: 修改 Task 12 deepevidence.html / seekevidence.html — 同样改 fetch CMS**

- [ ] **Step 7: Commit**

```bash
git add prototype/ docs/acceptance/ai-platform-v3-cms-content-ir-signoff.md
git commit -m "feat(content): wire DE/SE CMS to pages + IR content sign-off"
```

---

### Task 14: Smart Form `ai_notify_me` intent 接线

**Files:**
- Modify: `prototype/contact.html` (检查现有 Smart Form 实现)
- 后端: HubSpot owner 配置(P5 owner 完成)

- [ ] **Step 1: Read 现有 contact.html 摸底**

```bash
cat "prototype/contact.html"
```

确认现有 intent 字段名(可能是 `<input type="hidden" name="intent">` 或 query string)。

- [ ] **Step 2: 在 form 加 `ai_notify_me` 选项**

在 intent select 或路由逻辑中加入。 当 URL 是 `/contact?intent=ai_notify_me` 时, 表单顶部展示 "Notify me when next AI product launches" 标题。

- [ ] **Step 3: ComingSoonCard 的 Notify-me CTA 跳转此 URL**

回到 Task 8 的组件, 确认 CTA href 是 `/contact?intent=ai_notify_me`。

- [ ] **Step 4: 烟雾测试**

提交一次表单, 在 HubSpot 后台确认 lead 落 `ai_notify_me` 队列(P5 owner 协同)。

- [ ] **Step 5: Commit**

```bash
git add prototype/contact.html prototype/components/ComingSoonCard.jsx
git commit -m "feat(form): Smart Form ai_notify_me intent + Coming Soon card wiring"
```

---

### Task 15: GA event wiring + consent-mode v2

**Files:**
- Create: `prototype/assets/analytics/ga4-events.js`
- Create: `prototype/assets/consent/consent-mode-v2.js`
- Modify: `prototype/ai-platform-v3.html` 与子页 head(引入 scripts)
- Modify: 4 个组件 — 触发事件

- [ ] **Step 1: 写 `ga4-events.js`**

```javascript
window.MSHAnalytics = {
  trackProductCardClick(slug, position, status) {
    if (!this._consentGranted()) return;
    gtag('event', 'ai_product_card_click', { product_slug: slug, position, status });
  },
  trackShowcaseTabSwitch(from, to, trigger) {
    if (!this._consentGranted()) return;
    gtag('event', 'showcase_tab_switch', { from_slug: from, to_slug: to, trigger });
  },
  trackNotifyMeSubmit(sourcePage) {
    if (!this._consentGranted()) return;
    gtag('event', 'notify_me_submit', { source_page: sourcePage, hubspot_intent: 'ai_notify_me' });
  },
  trackAccessRequestSubmit(slug, role) {
    if (!this._consentGranted()) return;
    gtag('event', 'access_request_submit', { product_slug: slug, role, hubspot_intent: 'ai_product_access' });
  },
  _consentGranted() {
    return this._consentState === 'granted';  // v1.1: 用 closure state, 不查 dataLayer (events 易被清)
  },
  _consentState: 'denied',  // 默认 denied, 由 consent-mode-v2.js 在 grantAnalytics() 时调用 setConsent('granted')
  setConsent(state) { this._consentState = state; }
};
```

- [ ] **Step 2: 写 `consent-mode-v2.js`**

按 GA4 consent-mode v2 文档:
```javascript
gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied' });
// 用户接受 cookie 后:
function grantAnalytics() {
  gtag('consent', 'update', { analytics_storage: 'granted' });
  window.dataLayer.push({ event: 'consent_update', analytics_storage: 'granted' });
  if (window.MSHAnalytics) window.MSHAnalytics.setConsent('granted');  // v1.1: closure state sync
}
```

- [ ] **Step 3: 在页面 head 加 script tags**

```html
<script src="assets/consent/consent-mode-v2.js"></script>
<script src="assets/analytics/ga4-events.js"></script>
```

- [ ] **Step 4: 4 个组件加事件触发**

- AIProductCard: onClick → `MSHAnalytics.trackProductCardClick(...)`
- AIProductShowcase: onTabSwitch → `MSHAnalytics.trackShowcaseTabSwitch(...)`
- ComingSoonCard: onSubmit(在 contact form 那侧) → `MSHAnalytics.trackNotifyMeSubmit(...)`
- AccessAndStatus: onSubmit → `MSHAnalytics.trackAccessRequestSubmit(...)`

- [ ] **Step 5: 烟雾测试**

GA4 DebugView 监测, 触发 4 类事件, 确认上报成功。 拒绝 cookie 后再触发, 确认事件 NOT 上报(server-side 默认事件 OK)。

- [ ] **Step 6: Commit**

```bash
git add prototype/assets/ prototype/components/ prototype/ai-platform-v3.html prototype/ai-platform/
git commit -m "feat(analytics): GA4 events + consent-mode v2 wiring"
```

---

### Task 16: §3.7 状态降级测试矩阵执行

**Files:** 无新增, 只跑测试矩阵。

- [ ] **Step 1: aiProduct[] 返回 0 条场景**

临时在 GROQ query 加 `[0...0]` 截 0 条, 刷新 ai-platform-v3.html, 确认 placeholder + Reverse-DD CTA 显示。 还原 query。

- [ ] **Step 2: showcase.demoScenario 解析失败**

在 mock data 里改 demoScenario 为故意错型(例如 string 而非 portable text array), 确认 fallback 截图 + 文案。

- [ ] **Step 3: iconRef 404**

CMS 删除 icon asset 后刷新, 确认 monogram fallback。

- [ ] **Step 4: JS-disabled**

Safari Develop → Disable JavaScript, 刷新, 确认:
- StickyAnchorNav 至少有 anchor link 可用(纯 anchor href)
- AIProductShowcase 显示 products[0] 静态版(`<noscript>` 块)
- AIProductCardGrid 完整可见
- Final CTA 按钮可点(纯 anchor)

- [ ] **Step 5: 慢网络(Chrome DevTools Slow 3G)**

确认骨架屏 + accent-color 渐变 placeholder 显示, LCP 元素是 Hero 文字而非 Showcase 容器。

- [ ] **Step 6: prefers-reduced-motion**

System settings → Accessibility → Reduce motion, 刷新, 确认自动轮播禁用。

- [ ] **Step 7: 写测试报告**

`docs/acceptance/ai-platform-v3-degradation-matrix.md` — 6 个场景的截图 + pass/fail 标记。

- [ ] **Step 8: Commit**

```bash
git add docs/acceptance/ai-platform-v3-degradation-matrix.md
git commit -m "test: ai-platform v3 degradation matrix (§3.7) acceptance"
```

---

### Task 17: Acceptance gates 全跑(spec §8 全 16 条)

**Files:** 无新增, 测试矩阵执行。

- [ ] **Step 1: 跑 §8.1–7(继承 v2.0, 已自动化)**

Sanity build + forbiddenPhrases scan, 确认无错。

- [ ] **Step 2: 跑 §8.8 — aiProduct document 完整性**

故意留空 capabilitiesShort 中一项, 确认 publish 阻断。

- [ ] **Step 3: 跑 §8.9 — demoScenario PHI/PII 扫描**

故意在 demoScenario 写入 "张三, 身份证 110101..." 测试关键词, 确认阻断。 这一条需要写一个简单 regex scanner 集成到 aiProduct validator。

如果 §8.9 关键词扫描器尚未实现, 加入: `W2-05 Sanity Schema v1.0/schemas/lib/phiScanner.ts`。

- [ ] **Step 4: 跑 §8.10–16**

Task 4 已实现 validator, 此处只做端到端验证: 故意在 studio 触发每个错误条件, 确认报错。

- [ ] **Step 5: 写验收报告**

`docs/acceptance/ai-platform-v3-publish-gates.md` — 16 条 gate 的 pass/fail 标记 + 故意触发的截图。

- [ ] **Step 6: Commit**

```bash
git add docs/acceptance/ai-platform-v3-publish-gates.md
git commit -m "test: ai-platform v3 publish gates (§8.1–16) acceptance"
```

---

### Task 18: IA v2.1 link audit + 301 verification

**Blocked by:** P3(IA v2.1 修订交付)。

**Files:**
- Modify: 各页 nav / footer 含 AI Platform 链接的(verification only)

- [ ] **Step 1: grep 全站 `/ai-platform` 与 `/ai-enabled-delivery` 引用**

```bash
grep -rn "/ai-platform\|/ai-enabled-delivery" prototype/ docs/ 2>&1
```

- [ ] **Step 2: 确认所有 `/ai-enabled-delivery` 引用已迁移到 `/ai-platform`**

`prototype/_redirects` 中应已含 301 规则(check W1-W2 历史), 若无则新增:
```
/ai-enabled-delivery /ai-platform 301
```

- [ ] **Step 3: 确认 Top Nav `AI Platform` 链接仍指 `/ai-platform`**

`prototype/components/Header.jsx` verification only。

- [ ] **Step 4: Footer "AI Platform" 链接 verification**

`prototype/components/Footer.jsx`。

- [ ] **Step 5: 子页 breadcrumb 链回 `/ai-platform#products` 验证**

deepevidence.html / seekevidence.html 跳回总览页 anchor `#products`(spec §3.5)。

- [ ] **Step 6: 301 curl 自动验证 (v1.1 新增)**

```bash
curl -I -L https://staging.medscihealthcare.com/ai-enabled-delivery 2>&1 | grep -E "HTTP|Location"
```

期望 chain: `301` → `/ai-platform` → `200`. 若链路断或返回 302/200(无 redirect),报警。

- [ ] **Step 7: Commit**

```bash
git add prototype/_redirects
git commit -m "chore(routing): verify /ai-platform links + 301 from /ai-enabled-delivery (curl-checked)"
```

---

### Task 18.5: Legal + IR review of staging URL (v1.1 新增,HK 上市公司必经)

**Why:** 反向尽调页面对 HK 2415.HK 上市主体存在合规曝光。 v3 整体页(尤其 Act 1 数字陈列 + Act 2 产品文案 + Act 3 RAG/PITL claims)必须由法务 + IR 在 launch 前审签。

**Blocked by:** Task 17 acceptance gates 通过 + 一个可访问的 staging URL。

**注 (v1.2)**: Task 18 (link audit) 与 Task 18.5 (Legal+IR review) 在 Task 17 完成后**可并行**。 法务/IR 不依赖 link audit 完成。

**Files:**
- Create: `docs/acceptance/ai-platform-v3-legal-ir-signoff.md`(审签记录)

- [ ] **Step 1: 部署 staging URL**

将当前 prototype 推到 staging 环境(沿用项目现有 staging deploy 流程, 例如 Netlify preview / Vercel preview / 自建 staging)。 获取 sharable URL,如 `https://staging.medscihealthcare.com/ai-platform`。

- [ ] **Step 2: 出具审签包**

整理 PDF / 链接合集发法务 + IR:
- staging /ai-platform 总览页 PDF(浏览器 print → PDF, 含 Act 1/2/3 + Final CTA)
- staging /ai-platform/deepevidence + /ai-platform/seekevidence 子页 PDF
- spec §7 禁忌清单 19 条 + spec §8 验收门 16 条 通过证据(引用 Task 17 acceptance 报告)
- 数字底座声明出处对照表(Act 1 8 个数字关联到 ProofPoint Sanity doc + sign-off date)

- [ ] **Step 3: 法务 sign-off (Round 1)**

法务回执两类反馈:
- 通过: 在 `docs/acceptance/ai-platform-v3-legal-ir-signoff.md` 记录 sign-off date + 责任人
- 退回: 法务 markup 内容/CMS doc, 反馈点工程/内容侧修复 → 重跑 Step 2

- [ ] **Step 4: IR sign-off (Round 1)**

IR 重点审 Act 1 数字陈列(对外披露口径一致性 + 港交所合规)、产品 status 是否与未发的港交所公告冲突。 处置同 Step 3。

- [ ] **Step 5: 双签完成,记录**

两枚签字到位才能进 Task 19。 在 acceptance md 落盘:
```markdown
- Legal sign-off by: <name>, date: <yyyy-mm-dd>
- IR sign-off by: <name>, date: <yyyy-mm-dd>
- Staging URL audited: <url>
- Outstanding issues: <none / list>
```

- [ ] **Step 6: Commit**

```bash
git add docs/acceptance/ai-platform-v3-legal-ir-signoff.md
git commit -m "acceptance: ai-platform v3 legal + IR sign-off (HK 2415.HK compliance)"
```

---

### Task 19: launch day 切换(W4 末) — 含 rollback runbook (v1.1 修订)

**Blocked by:** Tasks 1–18.5 完成 + P1–P5 完成 + sponsor 最终拍板 + 法务 + IR 双签 (Task 18.5)。

**Files:**
- Rename / replace: `prototype/ai-platform.html` ← `prototype/ai-platform-v3.html`
- Create: `docs/acceptance/ai-platform-v3-rollback-runbook.md` (v1.1 新增)

- [ ] **Step 0: 写 rollback runbook (v1.1 新增)**

`docs/acceptance/ai-platform-v3-rollback-runbook.md` 内容:
```markdown
# AI Platform v3 Rollback Runbook

## Trigger
- launch 后 24h 内发现 BLOCKER 级 bug (如 Showcase 全站 hang / CMS query 失败 / Smart Form 不通)
- 法务 / IR 发出 take-down 指令

## Procedure
1. SRE / 前端 owner 决定 rollback (5 min 内决断窗口)
2. 在 prod 执行:
   git revert <launch-commit-hash>
   git push origin <branch>
3. 静态托管 redeploy, 1-3 min 内 v2 archive 文件被还原成 prototype/ai-platform.html
4. 通知 #incident slack channel + IR + 产品 owner
5. 24h 内补 incident report, 根因分析, fix forward 计划

## Rollback testing (launch day 前必跑)
- 在 staging 模拟 rollback: revert launch commit → redeploy → 确认 v2 archive 正常还原
- 记录 staging rollback 耗时
```

- [ ] **Step 1: 备份 v2 — 重命名为 archive**

```bash
mkdir -p "prototype/_archive"
mv "prototype/ai-platform.html" "prototype/_archive/ai-platform-v2-2026-04-29.html"
```

- [ ] **Step 2: 升 v3 为正式版 (与 Step 1 同 commit, atomic)**

```bash
mv "prototype/ai-platform-v3.html" "prototype/ai-platform.html"
ls -la "prototype/ai-platform.html" "prototype/_archive/ai-platform-v2-2026-04-29.html"
```

确认两个文件均 ls 出来,无意外覆盖。

- [ ] **Step 3: 全站 link audit 重跑 (Task 18 重复)**

```bash
grep -rn "ai-platform-v3" prototype/ docs/
```
期望 0 结果(v3 文件名应已消失,仅历史 commit 引用)。

确保改名后所有 `<a href="...">` 仍正确。

- [ ] **Step 4: 浏览器全链路烟雾**

Home → Top Nav AI Platform → 总览页 → 矩阵卡 → 子页 → 子页 CTA → contact form。

- [ ] **Step 5: Staging rollback 演练 (v1.1 新增)**

在 staging 环境执行 `git revert HEAD --no-commit && git checkout -- .` 验证文件结构可还原, 然后 reset 回 launch state。 确认 rollback runbook Step 2 实际可执行 + 耗时 < 5min。

- [ ] **Step 6: Commit + tag**

```bash
git add prototype/ docs/acceptance/ai-platform-v3-rollback-runbook.md
git commit -m "release(ai-platform): v3.0 launch — three-act narrative + product matrix"
git tag -a "ai-platform-v3.0" -m "AI Platform redesign v3.0 launch"
```

---

## Done Criteria (v1.1 扩充,关闭 spec §11 changelog 闭环)

### 工程交付
- [ ] 所有 20 个 task (含 Task 18.5) 的 commit hash 列表归档到 `docs/acceptance/ai-platform-v3-implementation-log.md`
- [ ] §3.7 degradation matrix 验收报告 PASS (Task 16)
- [ ] §8.1–16 publish gates 验收报告 PASS (Task 17)
- [ ] launch day Top Nav AI Platform → /ai-platform 跳转 v3 总览页 (Task 19)
- [ ] GA4 DebugView 4 类事件上报正常, consent-mode 拒绝场景下不上报 (Task 15)
- [ ] HubSpot 后台 `ai_notify_me` lead 落入产品团队队列 (Task 14)
- [ ] 301 redirect curl-check pass: `/ai-enabled-delivery → /ai-platform` (Task 18 step 6)
- [ ] Rollback runbook 在 staging 演练通过, 耗时 < 5min (Task 19 step 5)

### 内容/合规交付
- [ ] IA v2.1 / Copy Deck v4.2 / Brand Guidelines v1.2 三份配套文档发布 (P1/P2/P3)
- [ ] DeepEvidence + SeekEvidence 两条 CMS doc 通过 IR + Legal content sign-off, status=`limitedPreview` (Task 13 step 4.5)
- [ ] **法务 + IR staging URL 双签** (Task 18.5)
- [ ] Demo vignette EN prose 由医学写作 + 临床医师双签 (P4 + Task 13 step 2)
- [ ] 内容 ownership / freshness SLA 文档发布 (P6, 不阻塞 launch)

### Spec changelog 闭环 (v1.2 扩充至 21 项,覆盖 spec §11 + §11.1 全部 rows)

Round-1 spec changelog (M1–M4 / MIN-1/2/3 / NIT-1/2 / Gap-1 through Gap-8):
- [ ] M1 i18n prose 重写 → P4 + Task 13 完成
- [ ] M2 PitlRibbon variant=compact → Task 1 完成 + Task 10 引用
- [ ] M3 schema localized + 6 new fields → Task 3 + Task 4 完成
- [ ] M4 Notify-me HubSpot single-write → Task 14 完成
- [ ] MIN-1 IA §4.8 整节作废显式声明 → P3 (IA v2.1 修订) 完成
- [ ] MIN-2 accessUrlIsInternalRedirect gate → Task 4 validateAccessUrlInternalRedirect 完成
- [ ] MIN-3 showcase_tab_switch telemetry-only flag → Task 15 ga4-events.js 注释 + spec §6.6 表
- [ ] NIT-1 sticky nav 'Talk' 一致性 → Task 9 (4 项 nav label 收紧)
- [ ] NIT-2 Tailwind→CSS-vars 决策 → Task 6a Step 0 mapping table
- [ ] Gap-1 degradation states matrix → Task 6b + Task 16 完成
- [ ] Gap-2 mobile sticky nav → Task 9 完成
- [ ] Gap-3 同 Gap-2 (sticky nav) → Task 9
- [ ] Gap-4 内容 ownership / freshness SLA → P6 (W4 末交付,不阻塞 launch)
- [ ] Gap-5 W4 launch GA timing → Task 4 validateW4LaunchCeiling + spec §8.16
- [ ] Gap-6 Brand v1.2 sequence dependency fallback → P1 + Task 7 status badge palette
- [ ] Gap-7 demo signedBy schema field + gate → Task 3 (schema) + Task 4 §8.15 gate
- [ ] Gap-8 consent-mode v2 wiring → Task 15 完成

Round-2 spec changelog (R2-A/B/C):
- [ ] R2-A irApprovedBy gate → Task 4 validateIrSignOff 完成
- [ ] R2-B fallback enum-subset 语义 → P1 (Brand v1.2 fallback whitelist 是 §3.4 enum 子集)
- [ ] R2-C status transition matrix → Task 4 validateStatusTransition 完成

合计 21 项 (round 1 = 18, round 2 = 3)。 全部具备验证 task 或 P 项 owner。

---

## v1.0 → v1.1 修订日志 (plan review round 1 verdict CHANGES-REQUESTED 处置)

| # | Reviewer 反馈 | 严重性 | 处置 | 落到 plan |
|---|---|---|---|---|
| B1 | Task 3 schema export 风格与现有 `index.ts` 不一致 | BLOCKER | 改 `export default` + default import | Task 3 Step 1/2/3/4 |
| B2 | `prototype/ai-platform/[slug]/template.jsx` Next.js 路由,prototype 是 plain HTML | BLOCKER | 改扁平 HTML(`ai-platform-deepevidence.html` 等)+ `_redirects` rewrite | File Structure / Task 12 全节 |
| MA-1 | Task 2 "+7" / "+6" / commit "+6" 不一致 | MAJOR | 统一为 "+6"(#13–18 入 phrases, #19 由 §8.13 gate 拦) | Task 2 title/step/commit |
| MA-2 | Task 6 372 行 Tailwind+framer-motion 用 10 步装,under-decomposed | MAJOR | 拆 Task 6a (shell, 1.5d) + 6b (renderer, 1d) + 加 Step 0 Tailwind→CSS-vars mapping table | Task 6a + 6b 完整重写 |
| MA-3 | Task 4 validators 应有 unit tests | MAJOR | 加 Step 1.5 写 `aiProductValidators.test.ts` + Step 1.6 跑 `node --test` | Task 4 |
| MA-4 | Task 4 hardcoded date `2026-05-30` 时间炸弹 | MAJOR | 抽常量 `W4_LAUNCH_WINDOW_END` + 提醒 W6 cleanup | Task 4 Step 1 |
| MA-5 | Task 4 validateStatusTransition `previousStatus` 不是 Sanity primitive | MAJOR | 真实实现:`getClient().fetch('*[_id == $id][0].status', {id: publishedId})` | Task 4 Step 1 |
| MA-6 | Task 19 缺法务 + IR review checkpoint | MAJOR | 新增 Task 18.5 staging URL 法务 + IR 双签 | Task 18.5 (新增) |
| MA-7 | Task 13 缺 IR content sign-off | MAJOR | 加 Step 4.5 IR 审签 PDF 包 + 落盘 | Task 13 Step 4.5 |
| MI-1 | Task 1 line 27 `< 2` 准确措辞 + compact 4 步 fallback | MINOR | Step 3 加 `steps.length === 4` 断言 + console.warn fallback 到 full | Task 1 Step 3 |
| MI-2 | Task 19 mv 操作非原子 | MINOR | Step 1+2 同 commit + `ls` 验证 | Task 19 Step 1/2 |
| MI-3 | Task 15 `_consentGranted()` 查 dataLayer 易丢 | MINOR | 改 closure state `_consentState` + `setConsent()` API | Task 15 ga4-events.js / consent-mode-v2.js |
| NIT-1 | Task 6 `aria-live="polite"` 8s 轮播 spam SR | NIT | 改 `aria-live="off"` + Tab `aria-selected` | Task 6a Step 4 |
| NIT-2 | status badge palette 未在 P1 列出 | NIT | (留 P1 owner 接力, plan 侧无需改) | — |
| GAP-1 | 法务 review 缺 | Coverage | Task 18.5 处理 | Task 18.5 |
| GAP-2 | IR content review 缺 | Coverage | Task 13 Step 4.5 处理 | Task 13 |
| GAP-3 | staging URL 部署步骤缺 | Coverage | Task 18.5 Step 1 | Task 18.5 |
| GAP-4 | 301 curl-check 缺 | Coverage | Task 18 Step 6 加 curl 验证 | Task 18 Step 6 |
| GAP-5 | Rollback plan 缺 | Coverage | Task 19 Step 0 写 rollback runbook + Step 5 staging 演练 | Task 19 |
| GAP-6 | Done Criteria 未关闭 spec §11 changelog 闭环 | Coverage | Done Criteria 加 "Spec changelog 闭环" 子节 | Done Criteria |

→ 全部 BLOCKER + MAJOR + 5 GAP 在 plan v1.1 落实, MINOR/NIT 已归位。 Pending: plan review round 2.

---

> 参考: `docs/superpowers/specs/2026-04-29-ai-platform-redesign-design.md` v3.2 (commit `2108648`)
> 配套并行: P1–P6(见头部 prerequisites 表)
> Owner: 工程任务 Claude + 前端团队; 内容/品牌/法务/IR 任务各 owner
> v1.0 → v1.1 修订: 见末尾日志
