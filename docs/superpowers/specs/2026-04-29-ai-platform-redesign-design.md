# `/ai-platform` 内容架构重构 · Design Spec v3.0

**项目**：MedSci Healthcare 官网重构（medscihealthcare.com）
**版本**：2026-04-29 · v3.0（替代 v2.0 PITL 主轴版）
**配套**：IA v2.0 §4.8 · Copy Deck v4.2 §1.6 · W1-04 Brand Guidelines v1.1 · W2-05 Sanity Schema v1.0
**参考**：用户上传产品页代码 `medsci-evidence-tech.zip`（DeepEvidence / SeekEvidence Hero · Features · Products · PharmaSection）
**受众**：内部前端、CMS 建模、品牌、内容、法务 / IR、SEO

---

## 0. 重构背景与目标

### 0.1 当前现状（v2.0）

`/ai-platform` v2.0 以 **PITL 交付方法论** 为页面主轴：Hero → 4 步 PITL 流程图 → 3 能力赛道 → 合规边界 → 审计日志 → MetricStrip → CTA。本质叙事是「我们怎么用 AI+PITL 帮你交付更快、更可追溯」。

### 0.2 张力来源

主站定位是「海外业务扩张 + 投资者反向尽调」（PRD v4 §11 / Copy Deck §5）。但梅斯实际拥有 DeepEvidence（临床端）与 SeekEvidence（科研端）两个 AI 产品（参考代码所示），当前未在主站正式露出。原因是这两个产品当前是 Canary、主用户在中国，与「主站战略纯净」冲突。

### 0.3 解锁条件（本次新决策）

DeepEvidence / SeekEvidence 未来将推出国际版,全球用户。这一战略决策同时解除两个张力：

1. 产品按「Global-ready / 即将国际化」口径定位,可在主站正式承担集团 AI 转型对外品牌门面。
2. 主站战略纯净原则不被违反 — 产品本身就是面向全球的旗舰资产。

### 0.4 双轨目标（A + C）

| # | 目标 | 受众 | 主导意图 |
|---|---|---|---|
| **A** | **反向尽调展示**（Reverse DD） | 海外投资人 / 合作方 / 监管 | 证明梅斯是 AI-Native,展示 AI 资产负债表（数据、产品、技术、护城河） |
| **C** | **双引擎产品门面** | 全球医生 / 研究者 / 早期合作伙伴 | DeepEvidence + SeekEvidence + 未来产品作为公司面向未来的旗舰产品上架 |

未选目标说明：
- B（海外客户交付能力）已由 `/solutions/medical-evidence`、`/solutions/medical-communications` 等业务块页承担,不在本页范围。
- D（药企 SPL 数据合作）暂不进 AI Platform 主叙事,避免稀释 A+C；后续可独立规划 `/partners/data` 路径。

### 0.5 关键约束

1. **可扩展先于美观**：产品矩阵必须 slot 化。新增第 3 / 第 4 / 第 N 个 AI 产品时,**零前端代码改动**,仅 CMS 端新增一条 `aiProduct` document 即可。
2. **Global-ready 口径**：所有产品文案剥离「中国 Canary 内测」语境；用户角色用国际范畴（Clinician / Researcher）；状态用 *Limited Preview / Generally Available / Coming Soon*。
3. **跳转优先于堆叠**：总览页只做「导购 + 一窥究竟」,深度内容下沉到产品子页,总览页不替子页做工作。
4. **复用先于重写**：v2.0 已交付的组件（PitlRibbon / EvidenceTrail / ComplianceCallout / MetricStrip）尽可能保留,只调整使用层级。

---

## 1. 整体信息架构（Macro）

### 1.1 二级结构

```
/ai-platform                       ← 总览页（本次重构主战场）
│
├─ /ai-platform/deepevidence       ← 产品子页 #1（B 方案 IA）
├─ /ai-platform/seekevidence       ← 产品子页 #2
└─ /ai-platform/<future-slug>      ← 未来产品,统一模板,零代码新增
```

### 1.2 总览页骨架（三幕剧）

```
/ai-platform
│
├─ HERO   集团 AI 战略陈述（不放 demo,让出 Act 2 揭幕张力）
│         + Sub-slogan + sticky anchor nav
│
├─ ACT 1 · THE FOUNDATION         #foundation
│   └─ AI Asset Balance Sheet     6–8 数字,分 3 类陈列
│
├─ ACT 2 · THE PRODUCTS           #products       ← 页面主体
│   ├─ Matrix Intro
│   ├─ Live Showcase              双 Tab 实时 demo（slot 化）
│   ├─ Product Card Grid          双产品 + Coming Soon 占位
│   └─ → /ai-platform/<slug>      跳转产品子页
│
├─ ACT 3 · THE METHOD             #method
│   ├─ Trust Architecture         RAG · PITL · Audit Trail 三支柱
│   ├─ ComplianceCallout          沿用 v2.0
│   └─ EvidenceTrail              沿用 v2.0
│
└─ FINAL · DUAL CTA               #cta
    ├─ "Try the products"         → Apply for access
    └─ "Talk to our AI team"      → Reverse-DD session
```

### 1.3 双轨读者动线

| 读者类型 | 期望路径 | 落点 |
|---|---|---|
| 投资人 / 反向尽调 | Hero → Act 1（数据底座）→ Act 3（信任工程） | Final CTA 右列 "Talk to our AI team" |
| 早期产品潜客 | Hero → Act 2（产品矩阵 + Live Demo）→ 子页深度 | Final CTA 左列 "Try the products" |

sticky anchor nav `Foundation · Products · Method · Talk to us` 让两类读者各取所需。

---

## 2. Act 1 · The Foundation

### 2.1 Hero

| 元素 | 内容 |
|---|---|
| Eyebrow | `AI PLATFORM` |
| H1（锁定） | **"Built for the AI era of medicine."** |
| Sub-slogan | *AI-Enabled. Physician-Verified. Globally Ready.*（W1-04 v1.1 拍板,不变） |
| Subhead | "Two products today. More arriving. All built on the same audited evidence stack." |
| Hero 图像 | "data substrate" 暗色背景 — 数据节点星图 / 抽象网络拓扑（**禁止** 浏览器 demo,demo 留 Act 2） |
| 主 CTA | `See the products ↓`（锚跳到 `#products`） |
| 次 CTA | `Talk to our AI team`（→ `/contact?intent=ai_dd`） |

### 2.2 AI Asset Balance Sheet

**标题**：`THE NUMBERS BEHIND THE PLATFORM`
**副标**：`AS OF 2026 Q1 · IR-VERIFIED`

**分 3 类陈列**（不平铺,让投资人一眼读出三层资产）：

```
┌─ DEMAND-SIDE NETWORK ───────────────────┐
│  3.3M+   Registered physicians           │
│  25K+    Tertiary-hospital KOLs          │
└──────────────────────────────────────────┘

┌─ KNOWLEDGE BASE ────────────────────────┐
│  250M+   Indexed literature              │
│  100K+   Structured drug labels (SPL)    │
│  15K+    Multi-specialty guidelines      │
└──────────────────────────────────────────┘

┌─ WORKING CORPUS ────────────────────────┐
│  20K+    Manuscript drafts               │
│  35K+    Clinical study protocols        │
│  20 yr   Accumulated medical language    │
└──────────────────────────────────────────┘
```

**视觉**：参考 `medsci-evidence-tech/components/Features.tsx` 暗色 stat 卡（黑底 + 多色高光数字）,但 **砍掉** "LIVE DATA STREAM · CONNECTED" 假实时绿点。改为底部 fineprint：
> `Source: Internal registry · Last verified 2026-Q1 · IR sign-off pending`

**右侧叙事条**（必有,不可省）— 60–80 字短文：
> *"This is the data substrate every MedSci AI product is built on. We don't generate medical knowledge. We index, structure, and route what physicians and regulators have already validated — and pair every output with a named human reviewer."*

**编辑规则**：
- 每个数字必须挂到 Sanity `ProofPoint` 条目（tier / source / year / approvedBy 全填齐）,CMS 端阻断 ⚑ 占位发布。
- 禁用比较级（"业内最大 / 领先 / 第一" 等）,触发 `forbiddenPhrases.ts` 阻断。
- 全部走 `Claim` schema 二次审签（Legal + IR 两枚签字才能上线）。

---

## 3. Act 2 · The Products（页面主体）

### 3.0 设计原则

1. **可扩展先于美观**：所有产品级模块必须 slot 化。
2. **Global-ready 口径**：剥离中国 Canary 语境。
3. **跳转优先于堆叠**：总览页 = 导购,深度内容下沉子页。

### 3.1 Matrix Intro

```
AI PRODUCTS
Two engines today. More arriving.

Each product is a focused workflow, not a chatbot.
All share the audited evidence stack you saw above.   ← 链回 #foundation
```

**关键短句**：
- "Two engines today. **More arriving.**" — 故意复数,提前埋扩展性预告。
- "Not a chatbot" — 区分于 ChatGPT / Med-PaLM 通用医学 LLM,明示「我们做的是工作流产品」。
- "you saw above" — 与 Act 1 资产负债表挂钩,投资人自动建立「底座 → 产品」的护城河逻辑。

### 3.2 Live Showcase（双 Tab 实时 demo）

**直接复用** `medsci-evidence-tech/components/Hero.tsx` 双 Tab 暗色容器（已含完整 framer-motion 动效、AnimatePresence、glass-card UI）,做 3 处工程化改造：

| 改造项 | 原参考代码 | 改造后 |
|---|---|---|
| Tab 数量 | hardcoded `'deep' \| 'seek'` | 渲染 `aiProduct[].showcase` slot 数组,N 个产品 N 个 Tab |
| Demo 内容 | hardcoded 中文 chat | 来自 CMS `aiProduct.showcase` rich content（EN 主语,可选 CN 切换） |
| 自动轮播 | 8 秒切 | 保留,新增 `aria-live="polite"` + 用户 hover/focus 暂停（a11y） |
| 「访问 Canary」CTA | 直链 cloud run URL | 改 `Limited Preview · Request Access` → `/ai-platform/<slug>#access`（统一收口） |

**Demo 签名场景**（每个产品 1 个,首期）：

- **DeepEvidence**：T2DM + CKD 患者降糖方案咨询 → AI 引用 ADA 2024 / KDIGO 2024 + Citation badges。**指南本身国际,可保留,UI 转 EN**。
- **SeekEvidence**：免疫检查点抑制剂 NSCLC III 期临床试验 PFS/OS 对比表 → 结构化提取 12 trials（KEYNOTE-189 / IMpower150 / CheckMate 9LA …）。**完全国际场景,可保留,UI 转 EN**。

i18n 改造成本评估：参考代码 demo 内容本身是国际医学语境,只需 UI 字串转 EN,无医学事实重写。

### 3.3 Product Card Grid

**布局**：`grid-cols-1 md:grid-cols-2 lg:grid-cols-3` — 默认 2 列,超过 3 个产品自动 3 列。

**单卡统一模板**：

```
┌────────────────────────────────────────┐
│ [Status Badge]  Limited Preview        │
│                                        │
│ DeepEvidence                           │   ← Product name (EN primary)
│ Clinical AI · Point of Care            │   ← User role + scene tag
│                                        │
│ ─────                                  │
│ Authoritative-source clinical guidance │
│ at the bedside. Each answer anchored   │   ← 2 行 positioning
│ to guidelines and drug labels.         │
│                                        │
│ ─────                                  │
│ ○ Real-time guideline citation         │
│ ○ Bedside differential diagnosis       │   ← 3 条核心能力
│ ○ Patient-communication translation    │
│                                        │
│ ─────                                  │
│ [Learn more →]    [Request access]     │
└────────────────────────────────────────┘
```

**Coming Soon 占位卡（必有）**：

```
┌────────────────────────────────────────┐
│ [Coming Soon]                          │
│                                        │
│ Next product                           │
│ Working on it · 2026 H2                │   ← 不写产品名 / 不承诺日期
│                                        │
│ ─────                                  │
│ A focused workflow for a third         │
│ evidence-driven medical role.          │
│                                        │
│ [Notify me →]                          │   ← 低门槛 lead capture
└────────────────────────────────────────┘
```

**Coming Soon 卡的双重作用**：
1. 视觉上让矩阵看起来「已是矩阵」而非「双产品」。
2. Notify-me 表单是低门槛 lead capture,对 reverse DD 友好（有人在等下一个产品 = 市场需求信号）。

### 3.4 可扩展机制（CMS Schema · 工程基础）

**新增 Sanity document type：`aiProduct`**

```typescript
aiProduct {
  slug:           string                      // e.g. "deepevidence"
  name:           localizedString             // EN primary, CN optional
  status:         "limitedPreview" | "ga" | "comingSoon"
  userRole:       string                      // "Clinical AI · Point of Care"
  positioningOneLiner:  localizedText         // 2 行 card 用
  capabilitiesShort:    string[3]             // 3 条 bullet, card 用

  showcase:       {                           // Live Showcase Tab 用
    accentColor:  "blue" | "violet" | "teal" | string
    iconRef:      ref to icon asset
    demoScenario: portableText                // 可视化 chat / table / forest plot 内容
    citations:    ref[] to ProofPoint
  }

  capabilitiesFull:  string[]                 // 子页用, 4–6 条详细能力
  useCases:       useCase[]                   // 子页用, 3 个典型场景
  accessUrl:      url                         // Cloud Run / 正式 URL
  notifyMeEnabled: boolean

  trustRefs:      {
    foundationAnchor: "#foundation"           // 链回 Act 1
    methodAnchor:     "#method"               // 链回 Act 3
  }

  seo:            seo                         // 沿用现有 seo object
}
```

**URL 模式**：`/ai-platform/<slug>` — 所有产品共享同一 Next.js 动态路由 + 同一 React 模板。

**加新产品 SOP**（运营 runbook）：

1. CMS 新建 `aiProduct` document,填齐字段。
2. 上传 demo scenario portable text + showcase icon。
3. 关联 ProofPoint / Claim（必须）。
4. Legal + IR sign-off（共审 status / accessUrl / 文案禁用词）。
5. 发布 → Live Showcase 自动多一个 Tab + Card Grid 自动多一张卡 + `/ai-platform/<slug>` 子页自动可访问。

→ **零前端改动**。这是 IA 选 B 方案 + 矩阵 slot 化埋下的最大复利。

### 3.5 产品子页 `/ai-platform/<slug>` 统一模板

| # | 模块 | 内容 | 数据源 |
|---|---|---|---|
| 1 | Sub-Hero | 产品名 + status badge + 1 句 positioning | `name` / `status` / `positioningOneLiner` |
| 2 | Live Showcase（独立大尺寸） | 当前产品的 demo 单 Tab 全屏版,左侧描述 + 右侧 mockup | `showcase` |
| 3 | Capabilities | 4–6 条核心能力,带 icon + 1 行解释 | `capabilitiesFull` |
| 4 | Use Cases | 3 个典型用户场景（场景描述 + 工作流截图） | `useCases` |
| 5 | Trust footnote | 引用 Act 1 数字底座 + Act 3 PITL/audit log,2 个 anchor 链回总览页 | `trustRefs` |
| 6 | Access & Status | Limited Preview 申请表单 / Notify-me（按 status 渲染） | `accessUrl` / `notifyMeEnabled` |
| 7 | Final CTA | "Talk to product team" + "See full AI Platform" | siteSettings |

**双向锚跳**：子页 breadcrumb `Home / AI Platform / DeepEvidence`,回总览的 anchor 直接落到 `#products`。

### 3.6 Act 2 边界 / 禁忌（追加进 `forbiddenPhrases.ts`）

| # | 禁止 | 原因 |
|---|---|---|
| 1 | 写「行业第一 / 最大医疗 AI 产品 / 取代医生 / 100% 准确」 | 与 v2.0 §6.3 禁用词体系一致 |
| 2 | Cloud Run URL 直接 expose 在主站 prod 环境 | Limited Preview 走表单中转,统一 lead capture |
| 3 | Live Showcase demo 出现真实患者标识（PHI / PII） | demo 必须模拟病例,合规底线 |
| 4 | Coming Soon 卡写具体产品名 / 上线日期 | 避免不可控承诺 |
| 5 | Status badge 挂 "GA" 但 IR 未 sign-off | GA 必须 IR 签字（**放宽版本**：不强绑港交所披露,但 IR sign-off 必须） |

---

## 4. Act 3 · The Method（精简,主要是复用）

### 4.1 Trust Architecture（三支柱）

PITL **从主轴降级为支柱之一**。

| # | 支柱 | One-liner | 视觉 / 组件 |
|---|---|---|---|
| 1 | **Retrieval-Anchored Generation** | "AI does not invent medical facts. Every output is anchored to a citable source — guideline, drug label, registry, or peer-reviewed paper." | 架构小图：query → retrieval → generation → citation |
| 2 | **Physician-In-The-Loop (PITL)** | "Named clinicians sign every section. AI proposes; humans dispose." | 复用 `PitlRibbon`,但只取 4 步中的 step 3（PITL Review）单步展开 + 右侧链 "See the full PITL workflow →"（V2 迭代,跳到未来的 `/ai-platform/method`） |
| 3 | **Audit Trail by Default** | "Every claim ships with its source, reviewer, timestamp, and edit history. Exportable on engagement." | 复用 `EvidenceTrail` 现有组件 |

**关键编辑选择**：从「4 步流程图占主屏」改成「三支柱并列」,PITL 流程图从 hero 大件降级为支柱 2 内嵌的小件。Act 3 总长度控制在 1.5 屏内,不抢 Act 2 风头。

### 4.2 Compliance Boundary

直接复用现有 `ComplianceCallout` 组件（doNotClaim / doClaim 双列）,文案沿用 v2.0 现有内容。零改动。

### 4.3 退役 / 降级组件清单

| 组件 | v2.0 现状 | v3.0 处置 |
|---|---|---|
| `PitlRibbon`（4 步全展） | Hero 之后主屏 | **降级**为 Act 3 支柱 2 内嵌的小件,只取 step 3 |
| 完整 4 步流程图 | 主屏 | 移到未来的 `/ai-platform/method`（V2 迭代,不入本次范围） |
| `MetricStrip` 末尾 3 数字 (3.33M / AI+PITL / 2415.HK) | 总览页倒二屏 | **退役**,因为 Act 1 的 AI Asset Balance Sheet 已含且更详 |

---

## 5. Final · Dual CTA

```
┌─────────────────────────────────┬─────────────────────────────────┐
│ FOR CLINICIANS & RESEARCHERS    │ FOR INVESTORS & PARTNERS        │
│                                 │                                 │
│ Try the products                │ Talk to our AI team             │
│                                 │                                 │
│ Limited Preview · Apply for     │ Reverse-DD readout, technical   │
│ access to DeepEvidence,         │ deep-dive, or partnership       │
│ SeekEvidence, or notify me      │ exploration.                    │
│ when the next product ships.    │                                 │
│                                 │                                 │
│ [Apply for access →]            │ [Schedule a session →]          │
└─────────────────────────────────┴─────────────────────────────────┘
```

**后端分流**：表单经 Smart Form 路由到两条 HubSpot 分支：
- `intent=ai_product_access` → 产品团队 owner
- `intent=ai_reverse_dd` → IR / BD owner

---

## 6. IA · SEO · 工程衍生影响

### 6.1 IA v2.0 文档需修订条目

| § | v2.0 现状 | v3.0 修订 |
|---|---|---|
| §1 栏目树 | `/ai-platform`（单页） | **新增** `/ai-platform/[slug]` 动态子页（含 deepevidence、seekevidence） |
| §2 Top Nav | 5 项 | **不变** — AI Platform 仍单列 |
| §3 Footer 列 3 | "AI Platform" 单行 | 维持单行入口,产品分发通过总览页矩阵 |
| §4.8 AI Platform 详描 | PITL 4 步主轴 | **整节重写**为三幕剧（替换） |
| §6 URL & 301 | — | **新增** 产品子页 URL；无新 301 |
| §8 CMS schema | Solution / PilotOffer / ... | **新增** `aiProduct` document type |
| §10.1 GA 事件 | 11 类 | **新增 4 类**：`ai_product_card_click` / `showcase_tab_switch` / `notify_me_submit` / `access_request_submit` |
| §10.2 Lead Scoring | AI Platform 总览页 = A | **新增**：`/ai-platform/[slug]` 产品子页 = A；Notify-me 提交 = B |
| §11.2 JSON-LD | AI Platform = Service + Product | 产品子页加 `SoftwareApplication`（applicationCategory: MedicalApplication） |
| §12 a11y | 已有规则 | Showcase Tab 自动轮播加 `aria-live="polite"` + hover/focus 暂停 |
| §14 禁忌清单 | 12 条 | **新增 5 条**（见 §3.6） |

### 6.2 Copy Deck v4.2 需补写

- §1.6 整节重写（v2.0 → v3.0）,按三幕剧结构。
- §1.6b · 产品子页通用文案模板（DeepEvidence / SeekEvidence 各一份 instance）。
- §1.6c · Act 2 禁用词扩充清单（5 条）。

### 6.3 Brand Guidelines 兼容性

- 产品级强调色（DeepEvidence 蓝 / SeekEvidence 紫）需在 W1-04 §2 配色体系中**正式登记**为 `--product-accent-{slug}` palette,与品牌主蓝并存。
- 暗色 Showcase 容器（`#05080f` / `#0B0F19`）登记为 `--product-canvas-dark`,作为产品线专属夜模式 token。
- **Sponsor 二次拍板事项**：紫色升格为产品色（DeepEvidence 蓝 + SeekEvidence 紫并存）— 已确认通过。

### 6.4 工程交付物清单

| # | 交付物 | 周次 |
|---|---|---|
| 1 | `aiProduct` Sanity schema + studio desk structure | W3 |
| 2 | `/ai-platform` 总览页 React 模板（含 Showcase Tab 组件 + Card Grid + Coming Soon 占位） | W3–W4 |
| 3 | `/ai-platform/[slug]` 产品子页统一模板 | W4 |
| 4 | DeepEvidence + SeekEvidence 两条 `aiProduct` document（含 demo content + capabilities + access flow） | W4 |
| 5 | Brand Guidelines v1.2（登记产品-accent 双色 + dark canvas token） | W3 sponsor 拍板 |
| 6 | Copy Deck v4.2 §1.6 / §1.6b / §1.6c | W3 |
| 7 | IA v2.1 修订（覆盖 6.1 全部） | W3 |
| 8 | GA / HubSpot 事件接线 | W4 |

### 6.5 与 v2.0 资产关系（净影响）

- **保留**：PitlRibbon / EvidenceTrail / ComplianceCallout / Sanity ProofPoint+Claim+Solution 全部 schema / forbiddenPhrases.ts / Hero 双语切换机制。
- **降级**：PitlRibbon 4 步缩为 1 步 / MetricStrip 末尾 3 数字退役。
- **新增**：aiProduct schema / Showcase Tab 组件 / Coming Soon 占位卡 / Brand product-accent palette 登记。
- **修订**：IA §4.8 / Copy Deck §1.6 / Brand Guidelines §2 配色。

→ 净工程量约：**1 个新 schema + 1 个总览页模板 + 1 个子页统一模板 + 2 条产品 instance**。沿用 v2.0 已有组件 70% 以上。

### 6.6 GA 事件 / HubSpot Lead Scoring 增量

| 事件 | 触发点 | 属性 | Lead Score |
|---|---|---|---|
| `ai_product_card_click` | Card Grid 任一卡点击 | product_slug, position, status | A |
| `showcase_tab_switch` | Live Showcase Tab 切换 | from_slug, to_slug, trigger (auto/manual) | — |
| `notify_me_submit` | Coming Soon 卡 Notify-me 提交 | source_page | B |
| `access_request_submit` | Limited Preview 申请提交 | product_slug, role | A |

---

## 7. 边界 / 禁忌清单（汇总,追加进 IA v2.1 §14）

继承 v2.0 已有 12 条,新增 5 条：

| # | 禁止 |
|---|---|
| 13 | ❌ 写「行业第一 / 最大医疗 AI 产品 / 取代医生 / 100% 准确」 |
| 14 | ❌ Cloud Run URL 直接 expose 在主站 prod 环境（必须走 Limited Preview 表单中转） |
| 15 | ❌ Live Showcase demo 出现真实患者标识（PHI / PII）— demo 必须模拟病例 |
| 16 | ❌ Coming Soon 卡写具体产品名 / 上线日期 |
| 17 | ❌ Status badge 挂 "GA" 但 IR 未 sign-off |

---

## 8. 验收 / 阻断规则

每页发布前必过 Gate（继承 v2.0 §9 + 新增）：

新增（v3.0）：
8. **`aiProduct` document 完整性**：slug / name / status / positioningOneLiner / capabilitiesShort[3] / showcase / accessUrl 全填齐,⚑ 占位阻断。
9. **showcase.demoScenario 模拟病例校验**：含 PHI/PII 关键词扫描（姓名 / 身份证 / 手机 / 医保号）阻断。
10. **status=ga 时 IR sign-off 必须**：CMS 端校验 `aiProduct.status === 'ga' && !aiProduct.irApprovedAt` 阻断发布。
11. **Coming Soon 卡 frontmatter 校验**：禁止 `productName`、`launchDate` 字段非空。
12. **Brand 产品-accent 配色登记**：`accentColor` 值必须在 W1-04 v1.2 登记的 product-accent palette 内,否则阻断。

---

## 9. v2.0 → v3.0 变更摘要

| 条目 | v2.0 | v3.0 |
|---|---|---|
| 页面叙事主轴 | PITL 交付方法论 | **三幕剧（Foundation / Products / Method）** |
| 页面结构 | 单页 | **总览页 + N 个产品子页**（B 方案,可扩展） |
| Hero | "Faster, more structured, medically reviewed delivery." | **"Built for the AI era of medicine."** |
| 数字陈列 | MetricStrip 末尾 3 数字 | **AI Asset Balance Sheet · 6–8 数字 · 3 类陈列** |
| 产品露出 | 无 | **DeepEvidence + SeekEvidence + Coming Soon 占位**（slot 化） |
| Live demo | 无 | **双 Tab 实时浏览器 mockup**（沿用参考代码） |
| PITL | 4 步流程主屏 | **降级为三支柱之一（step 3 单步）** |
| MetricStrip | 倒二屏 | **退役** |
| CTA | 单 CTA | **Dual CTA · 物理分流两类受众** |
| CMS | Page 单例 | **新增 `aiProduct` document type** |
| URL | `/ai-platform`（单） | **`/ai-platform/[slug]`（动态）** |
| GA 事件 | — | **新增 4 类** |
| 禁忌清单 | 12 条 | **17 条**（+5） |

---

## 10. 下一步交付物（流程交接）

| # | 交付物 | 责任 | 时点 |
|---|---|---|---|
| 1 | 本 design doc spec review（spec-document-reviewer subagent） | Claude | 立即 |
| 2 | 实施计划（writing-plans skill） | Claude | review 通过后 |
| 3 | IA v2.1 修订 PR | 内容 + IT | W3 |
| 4 | Copy Deck v4.2 §1.6 重写 | 内容 + 法务 + IR | W3 |
| 5 | Brand Guidelines v1.2 配色登记（sponsor 拍板） | 设计 + 品牌 | W3 |
| 6 | `aiProduct` schema 代码化 + 2 条 document 录入 | 前端 + CMS 建模 | W3–W4 |
| 7 | `/ai-platform` 总览页 + 子页模板上线 | 前端 + 设计 | W4 |
| 8 | GA / HubSpot 事件接线 + Lead Scoring 规则更新 | 增长 + IT | W4 |

---

> 本文档替代 IA v2.0 §4.8 关于 `/ai-platform` 的内容架构表述,与 W2-05 Sanity Schema 配套使用。
> 配套补写：Copy Deck v4.2 §1.6 / §1.6b / §1.6c · IA v2.1 · Brand Guidelines v1.2。
> 下一步 owner：spec review → implementation plan（writing-plans）。
