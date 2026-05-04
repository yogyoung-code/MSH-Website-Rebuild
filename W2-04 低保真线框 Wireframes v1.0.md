# W2-04 低保真线框 Wireframes v1.0

**Project** MSH Website Rebuild · 梅斯健康（HKEX: 2415）
**Scope** 9 顶层页面 + 2 Pilot 子页 · Desktop 1440 / Mobile 375
**Binding** 每页模块映射到 `pageSection.kind`（见 W1-06 Sanity Schema 初版），为 W2-05 扩展提供源头输入
**Consumers** 前端（W3 Hero + 组件库）· Sanity（W3-04 Schema 完整版）· 市场（文案/证据准备）· 合规（Claim 绑定）
**Status** DRAFT v1.0 · 等 W2-02 视觉拍板后锁定 · 非拍板后不进工程

---

## 0. 全站框架 · Shell

> 所有页面外层共用。Shell 不进入 `pageSection`，由 `navigation` + `siteSettings` 两个 singleton 驱动。

### 0.1 顶部披露条 Disclosure Bar（Direction C 触发 / A·B 作为可选项）

```
┌───────────────────────────────────────────────────────────────────────┐
│ HKEX: 2415 · HK$2.48 +0.4% · as of 2026-xx-xx · IR · Announcements · │
│                                                              EN / 中文 │
└───────────────────────────────────────────────────────────────────────┘
```

- **元素**：股票代码 · 实时/延迟价格标识（15min delay 声明）· 最后更新时间戳 · IR 入口 · 公告入口 · 语言切换
- **Schema 绑定**：`siteSettings.disclosureBar{enabled, tickerText, priceProvider, lastUpdatedAuto}`
- **取舍**：拍板 A/B 未选时默认隐藏，Direction C 默认开启

### 0.2 主导航 Primary Nav

```
┌────────┬─────────────────────────────────────────────────┬────────────┐
│ [M]    │  Solutions ▾  Case Studies  AI  Insights  About │  Investors │
│  MSH   │                                                 │  Contact ▸ │
└────────┴─────────────────────────────────────────────────┴────────────┘
```

- **Solutions 下拉**：Entering China / Going Global / Cross-Border Sprint / Other Engagements
- **Schema 绑定**：`navigation.primary[]`（已存在）· 追加 `navigation.footerOnly[]`（W2-05 新增，见 §10）
- **Mobile**：汉堡菜单 · 两级展开 · 底部嵌 EN/中 + Investors 快捷

### 0.3 全站 Footer

```
┌──────────────────────────────────────────────────────────────────────┐
│ MSH Brand Block   | Solutions | Evidence | Investors | Company       │
│ [ticker chip]     | 4 links   | 4 links  | 4 links   | 4 links       │
├──────────────────────────────────────────────────────────────────────┤
│ © 2026 MSH Healthcare Group · HKEX 2415 · Privacy · Terms · Legal    │
└──────────────────────────────────────────────────────────────────────┘
```

- **Schema 绑定**：`navigation.footerOnly[]` + `siteSettings.legalLinks[]`
- 合规链路：Privacy / Terms / Cookies / Disclaimers / Whistleblower

---

## 1. Homepage · 首页

> **Hi-fi** 已产出 A/B/C 三方向，此处记录**模块定义 + 文案槽位**，供 Schema 与文案回填。

### Desktop 骨架

```
┌──────────────────────────────────────────────────────────────────────┐
│  01 HERO                                                              │
│  [H1 60–72px] [lede 16–18px] [CTA primary] [CTA ghost]                │
│  meta: Listed · HQ · Engagements · Reporting                          │
├──────────────────────────────────────────────────────────────────────┤
│  02 TRUST BAR  (C 方向前置；A/B 方向位置不同 — 见拍板会)              │
│  [ 320+ ] [ 47 ] [ 6 offices ] [ ISO 27001 ]                          │
├──────────────────────────────────────────────────────────────────────┤
│  03 QUICK START                                                       │
│  [Pharma sponsors] [Investors] [Journalists]  // 3 role-based cards   │
├──────────────────────────────────────────────────────────────────────┤
│  04 PRIMARY PATHS                                                     │
│  [Path 01 Entering China]  [Path 02 Going Global]                     │
│  bullets × 5 · CTA each · playbook CTA                                │
├──────────────────────────────────────────────────────────────────────┤
│  05 CASE STUDIES (selected)                                           │
│  case × 3 · 每 case: title · tags · metrics × 3 · citation            │
├──────────────────────────────────────────────────────────────────────┤
│  06 AI-ENABLED DELIVERY                                               │
│  Layer 01 Intake / 02 Draft / 03 Audit · 每层 PITL badge               │
├──────────────────────────────────────────────────────────────────────┤
│  07 INSIGHTS                                                          │
│  card × 3 · 类型角标 · 日期                                           │
├──────────────────────────────────────────────────────────────────────┤
│  08 FINAL CTA                                                         │
│  [left: H2 + body]  [right: scoping card · 30min · ≤10BD · mNDA]      │
└──────────────────────────────────────────────────────────────────────┘
```

### 模块 ↔ Sanity `pageSection.kind` 映射

| # | 模块 | kind | 必填 slot | 来源证据 |
|---|------|------|-----------|----------|
| 01 | Hero | `hero` | headline · lede · cta[0..1] · meta[] | 公司基本信息（siteSettings） |
| 02 | Trust Bar | `trustBar` | metrics[4] · asOfDate · logoStrip | verified 证据类目 |
| 03 | Quick Start | `quickStart` | cards[3] · 每卡 role/title/desc/link | 角色画像 |
| 04 | Primary Paths | `primaryPaths` | paths[2] · 每 path bullets[5] · cta×2 | Solution 页面引用 |
| 05 | Case Studies | `caseStudies` | caseRefs[3] · layoutVariant | `caseStudy` document |
| 06 | AI Delivery | `aiDelivery` | layers[3] · pitlBadge · disclosure | `aiDisclosure` document（W2-05 新增） |
| 07 | Insights | `insights` | articleRefs[3] · filterTags? | `insight` document |
| 08 | Final CTA | `finalCta` | heading · body · contactCard | `contactMethod` document |

### Mobile（375）

```
  ━━ 01 HERO  (H1 40px · stacked CTA · meta 2×2 grid)
  ━━ 02 TRUST  (2×2 metric grid · logo strip horizontal scroll)
  ━━ 03 QUICK START  (stacked 3 cards · full width)
  ━━ 04 PATHS  (accordion · 展开看 bullets)
  ━━ 05 CASES  (swipe carousel · 1 case/屏)
  ━━ 06 AI  (accordion · 展开看 PITL disclosure)
  ━━ 07 INSIGHTS  (vertical list 3)
  ━━ 08 CTA  (stacked · scoping card 全宽)
```

### Element checklist

- [ ] H1 ≤ 96 字符（中文）/ 20 词（英文）
- [ ] Hero lede 控制在 240 字符内，含可链接术语
- [ ] Trust Bar 每个数字必须绑 `claim.evidenceRef` 否则 Draft 阻塞
- [ ] Case × 3 每个 case 至少 1 条可公开的 PubMed / HKEX / 新闻源
- [ ] AI Delivery 三层全部挂 PITL badge；Disclosure 文案从 `aiDisclosure.default` 拉

---

## 2. Entering China · 进入中国 Solution 页

### Desktop

```
┌──────────────────────────────────────────────────────────────────────┐
│ 01 SOLUTION HERO                                                      │
│ [eyebrow: SOLUTION · Entering China]                                  │
│ [H1 50px] lede · [CTA scope call · CTA playbook PDF]                  │
│ [breadcrumb: Home / Solutions / Entering China]                       │
├──────────────────────────────────────────────────────────────────────┤
│ 02 WHY NOW · PROBLEM FRAME                                            │
│ 3 bullets · 每条 120 字 · 关联外部政策/市场信号                       │
├──────────────────────────────────────────────────────────────────────┤
│ 03 ENGAGEMENT PLAYBOOK · PROCESS STEPS                                │
│ [Step 1] → [Step 2] → [Step 3] → [Step 4] → [Step 5]                  │
│ Scope / Regulatory / Medical / Real-world / Handover                  │
├──────────────────────────────────────────────────────────────────────┤
│ 04 CAPABILITY MATRIX · FEATURE GRID                                   │
│ 6 capabilities · icon + 名称 + 1 句话                                 │
├──────────────────────────────────────────────────────────────────────┤
│ 05 PROOF · CASE STUDIES (filtered: geo=CN, direction=inbound)         │
│ 3–5 case 列表视图 · 日期 · 指标 · 引用                                │
├──────────────────────────────────────────────────────────────────────┤
│ 06 TEAM · REGIONAL LEADS                                              │
│ 2–4 人 profile · 姓名 + 头衔 + LinkedIn                                │
├──────────────────────────────────────────────────────────────────────┤
│ 07 FAQ                                                                │
│ 6 条 · 折叠                                                            │
├──────────────────────────────────────────────────────────────────────┤
│ 08 RELATED  (Going Global / Cross-Border Sprint)                      │
├──────────────────────────────────────────────────────────────────────┤
│ 09 FINAL CTA  (scoping call · 同 Homepage 08)                         │
└──────────────────────────────────────────────────────────────────────┘
```

### 模块 ↔ kind

| # | 模块 | kind | 备注 |
|---|------|------|------|
| 01 | Solution Hero | `hero`（variant=solution）| W2-05 增 variant 字段 |
| 02 | Why Now | `richText` 或新增 `problemFrame` | 讨论是否值得开独立 kind |
| 03 | Playbook | `processSteps` | 已存在 |
| 04 | Capabilities | `featureGrid` | 已存在 |
| 05 | Proof | `caseStudies` | 带 filter 参数 |
| 06 | Team | 新增 `teamBand` kind（W2-05） | ref `person` document |
| 07 | FAQ | `faq` | 已存在 |
| 08 | Related | 新增 `relatedSolutions` kind（W2-05） | |
| 09 | Final CTA | `finalCta` | |

### Mobile

```
  ━━ 01 Hero (stacked)
  ━━ 02 Why Now (vertical list)
  ━━ 03 Playbook (vertical stepper · 每步 expandable)
  ━━ 04 Capabilities (2-col grid)
  ━━ 05 Proof (list view · 无 filter bar · 顶部 chip scroll)
  ━━ 06 Team (horizontal swipe)
  ━━ 07 FAQ (accordion)
  ━━ 08 Related (2-col cards)
  ━━ 09 CTA
```

### Element checklist

- [ ] 所有"加速""快速"类动词走 forbiddenPhrases 校验
- [ ] Capability icon 限定为线性风格，不使用拟物
- [ ] Team 成员头像可选（合规：内部员工照片需同意声明）
- [ ] FAQ 最多 8 条；超 8 条转 `/faq` 独立页

---

## 3. Going Global · 出海 Solution 页

> 镜像 §2 结构，文案侧重 U.S. FDA · Boston office · 英文科学传播。

```
  结构 ≡ §2 Entering China
  差异：
    02 Why Now → 侧重中国 biotech 出海时间窗 & FDA expectation
    03 Playbook → Pre-IND → IND → Type C/D meeting → Ph1 → Global
    04 Capabilities → 6 条中至少 3 条标注 "U.S.-resident staff required"
    05 Proof → filter: geo=US, direction=outbound
    06 Team → 强制展示 Boston 办公室负责人
```

- **差异化 Schema 需求**：`solutionPage.geoTag ∈ {inbound, outbound, crossborder}` → W2-05 加
- **合规要点**：FDA 互动不得出现"guaranteed""expedited"类词 → forbiddenPhrases 扩展

---

## 4. Cross-Border Sprint · 跨境冲刺 Solution 页

```
┌──────────────────────────────────────────────────────────────────────┐
│ 01 HERO (variant=sprint · 更强节奏感)                                 │
│ H1 · 副标：Time-boxed 12-week engagement for dual-market sponsors     │
├──────────────────────────────────────────────────────────────────────┤
│ 02 WHO THIS IS FOR · persona cards × 3                                │
│ (biotech CEO · MA head · corp-dev lead)                               │
├──────────────────────────────────────────────────────────────────────┤
│ 03 THE 12-WEEK TIMELINE · PROCESS STEPS 变体                          │
│ W1-2 Discovery / W3-6 Build / W7-10 Validate / W11-12 Handover        │
│ 每阶段 deliverables + owner + review-gate                             │
├──────────────────────────────────────────────────────────────────────┤
│ 04 PRICING TRANSPARENCY · new kind? or richText + table              │
│ 3 tiers: Starter · Standard · Enterprise · 每 tier 列 inclusions       │
│ ⚠ 需法务 & 业务对齐后决定是否展示具体报价；默认展示范围 + "on request" │
├──────────────────────────────────────────────────────────────────────┤
│ 05 PROOF (subset of case studies tagged sprint)                       │
├──────────────────────────────────────────────────────────────────────┤
│ 06 FAQ (sprint-specific 6 条)                                         │
├──────────────────────────────────────────────────────────────────────┤
│ 07 FINAL CTA (scoping call · 强调 fast-start)                         │
└──────────────────────────────────────────────────────────────────────┘
```

- **新增 kind 候选**：`personaCards`（§02）· `pricingTable`（§04，受合规约束）
- **Schema W2-05 决策点**：pricing 是否作为独立 kind vs 走 richText + table — 见 W2-05 §3

---

## 5. Other Engagements · 其他合作（Pilot 汇总页）

> 父页，承载所有 Pilot / 非标 / 研发型合作的入口。2 个 Pilot 子页是强制交付（每个独立页面）。

### Desktop

```
┌──────────────────────────────────────────────────────────────────────┐
│ 01 HERO (variant=portfolio)                                           │
│ H1: Other Engagements · 非标合作与 Pilot 项目                         │
├──────────────────────────────────────────────────────────────────────┤
│ 02 INTRO · richText                                                   │
│ 解释 Pilot 定位：早期探索 · 非标 · 合规边界声明                       │
├──────────────────────────────────────────────────────────────────────┤
│ 03 PILOT GRID · 卡片列表                                              │
│ [Pilot A cover] [Pilot B cover] ... (初期 2 张)                       │
│ 每卡：封面 · 领域 tag · 状态（Active / Concluded）· 日期              │
├──────────────────────────────────────────────────────────────────────┤
│ 04 CRITERIA · WHEN WE TAKE ON A PILOT                                 │
│ 3–5 条筛选标准 · 用于劝退不符项目                                     │
├──────────────────────────────────────────────────────────────────────┤
│ 05 CTA · propose a pilot                                              │
└──────────────────────────────────────────────────────────────────────┘
```

- **Schema**：新 document type `pilotSubpage`（W2-05 §1 必做）· 父页用 `pageSection.kind='pilotIndex'`

---

## 6. Pilot 子页 · Pilot Sub-page（× 2）

> 每个 Pilot 一个独立页面。结构定死，编辑只填字段。

### Desktop

```
┌──────────────────────────────────────────────────────────────────────┐
│ BREADCRUMB: Home / Other Engagements / <Pilot Name>                   │
├──────────────────────────────────────────────────────────────────────┤
│ 01 PILOT COVER · richText hero                                        │
│ [eyebrow: PILOT · status chip]                                        │
│ [H1 pilot name]  [sub: 领域 · 时间 · 合作方（匿名可）]                │
├──────────────────────────────────────────────────────────────────────┤
│ 02 AT A GLANCE · meta block                                           │
│ [Territory] [Phase] [Start] [Status] [PI]                             │
├──────────────────────────────────────────────────────────────────────┤
│ 03 THE QUESTION · problem frame (120-200 字)                          │
├──────────────────────────────────────────────────────────────────────┤
│ 04 APPROACH · processSteps                                            │
│ 3–5 步 · 每步 deliverable                                             │
├──────────────────────────────────────────────────────────────────────┤
│ 05 INTERIM FINDINGS · richText + 可选图表                             │
│ ⚠ 所有 Finding 必须标注 `In Development` 或 `Verified` 证据等级       │
├──────────────────────────────────────────────────────────────────────┤
│ 06 CITATIONS · reference list                                         │
├──────────────────────────────────────────────────────────────────────┤
│ 07 DISCLOSURE · 合规 boilerplate                                      │
│ "Pilot engagement. Outcomes not yet peer-reviewed. Contact xxx."      │
├──────────────────────────────────────────────────────────────────────┤
│ 08 CTA · contact PI                                                   │
└──────────────────────────────────────────────────────────────────────┘
```

- **Schema 必做**（W2-05 §1）：`pilotSubpage` document
  - fields: `title · slug · status(enum) · territory · phase · startDate · pi(ref person) · coverEyebrow · problem(richText) · approach(processSteps) · findings(richText+evidence) · citations[] · disclosure(auto from aiDisclosure) · seo`

---

## 7. AI-Enabled Delivery · AI 能力页

### Desktop

```
┌──────────────────────────────────────────────────────────────────────┐
│ 01 HERO                                                               │
│ H1: Technology used deliberately. PITL across every workstream.       │
│ sub: 关于我们如何在医学事务中负责任地使用 AI                          │
├──────────────────────────────────────────────────────────────────────┤
│ 02 POSITIONING                                                        │
│ "We are not an AI company. We are a medical-affairs operator."        │
│ 2 段 richText                                                         │
├──────────────────────────────────────────────────────────────────────┤
│ 03 THE 3-LAYER SYSTEM                                                 │
│ Layer 01 Intake / 02 Draft / 03 Audit (展开版 · 每层 200-300 字)     │
│ 每层右侧：输入 · 输出 · PITL 角色 · 审计频率                          │
├──────────────────────────────────────────────────────────────────────┤
│ 04 CLAIM-TO-EVIDENCE BINDING · diagram + 示例                         │
│ [claim] →→→ [proofPoint ref] →→→ [source DOI / PubMed / HKEX]         │
├──────────────────────────────────────────────────────────────────────┤
│ 05 DISCLOSURES · 合规合集                                             │
│ - PITL 定义 · 所有 HCP/regulator-facing output 都走 PITL              │
│ - Model 清单（默认匿名；可公开的打勾）                                │
│ - 数据处理 · GDPR / HIPAA-aligned / ISO 27001                         │
├──────────────────────────────────────────────────────────────────────┤
│ 06 WHITE PAPERS & PUBLICATIONS (methodology refs)                     │
├──────────────────────────────────────────────────────────────────────┤
│ 07 FAQ (AI-specific · 8 条)                                           │
├──────────────────────────────────────────────────────────────────────┤
│ 08 FINAL CTA (contact research lead)                                  │
└──────────────────────────────────────────────────────────────────────┘
```

- **Schema 必做**：`aiDisclosure` singleton（W2-05 §2）
- **合规 gate**：发布此页需法务 + 合规双签；FTC 方向所有"improves by X%"类主张必须挂 verified 证据

---

## 8. Insights · 洞察

> 分两种页面：**Listing** + **Detail**

### 8A. Listing

```
┌──────────────────────────────────────────────────────────────────────┐
│ 01 HERO (variant=listing · H1 + lede)                                 │
├──────────────────────────────────────────────────────────────────────┤
│ 02 FILTER BAR                                                         │
│ [All] [Regulatory] [Medical Affairs] [Operations] [White Paper]       │
│ (right) search · sort                                                 │
├──────────────────────────────────────────────────────────────────────┤
│ 03 ARTICLE GRID · 3 col × n rows                                      │
│ card: type tag · 标题 · date · 作者 · 预览 · "Read →"                 │
├──────────────────────────────────────────────────────────────────────┤
│ 04 PAGINATION                                                         │
├──────────────────────────────────────────────────────────────────────┤
│ 05 NEWSLETTER CTA (opt-in · GDPR double opt-in 预留)                  │
└──────────────────────────────────────────────────────────────────────┘
```

### 8B. Detail

```
┌──────────────────────────────────────────────────────────────────────┐
│ BREADCRUMB · type tag · date · read-time                              │
│ H1 · byline (author avatar + name + title)                            │
│ feature image (可选)                                                  │
├──────────────────────────────────────────────────────────────────────┤
│ BODY · portableText (headings · lists · pullquote · callout · code)   │
│ 侧栏（≥ 1024px）: TOC · Share · 原文下载 PDF                          │
├──────────────────────────────────────────────────────────────────────┤
│ REFERENCES · numbered list                                            │
├──────────────────────────────────────────────────────────────────────┤
│ AUTHOR BLOCK · bio                                                    │
├──────────────────────────────────────────────────────────────────────┤
│ RELATED ARTICLES · 3 card                                             │
├──────────────────────────────────────────────────────────────────────┤
│ CTA · subscribe or contact                                            │
└──────────────────────────────────────────────────────────────────────┘
```

- **Schema 已在 W1-06**：`insight` document · `author` ref
- **W2-05 增强**：readTime（自动计算）· canonicalUrl（SEO 去重）

---

## 9. About · 关于我们

### Desktop

```
┌──────────────────────────────────────────────────────────────────────┐
│ 01 HERO (variant=about · 文字型)                                      │
│ H1: A medical-affairs operator, governed as a public company.         │
├──────────────────────────────────────────────────────────────────────┤
│ 02 TIMELINE · 2013→2024→now · 关键事件                                │
├──────────────────────────────────────────────────────────────────────┤
│ 03 LEADERSHIP · 4-6 人 · 头衔 · bio · LinkedIn                        │
├──────────────────────────────────────────────────────────────────────┤
│ 04 OFFICES · 6 个 · 地图（可静态）+ 地址                              │
├──────────────────────────────────────────────────────────────────────┤
│ 05 GOVERNANCE · board · committees · auditor                          │
├──────────────────────────────────────────────────────────────────────┤
│ 06 ESG · 简述 + 报告链接                                              │
├──────────────────────────────────────────────────────────────────────┤
│ 07 CAREERS · 简述 + 入口                                              │
├──────────────────────────────────────────────────────────────────────┤
│ 08 PRESS · 媒体联系 + press kit 下载                                  │
├──────────────────────────────────────────────────────────────────────┤
│ 09 CTA (contact general)                                              │
└──────────────────────────────────────────────────────────────────────┘
```

- **Schema 新增**：`timelineBand` kind · `officeGrid` kind · `leadership` 走已有 `person` document ref
- **合规**：Governance 文案必须与 HKEX 已披露信息一致，由 IR 团队校对

---

## 10. Contact · 联系

```
┌──────────────────────────────────────────────────────────────────────┐
│ 01 HERO (variant=contact · H1 + 3 contact lanes)                      │
├──────────────────────────────────────────────────────────────────────┤
│ 02 LANE CARDS                                                         │
│ [Sponsors] [Investors] [Press] [Careers]  // 各走不同邮箱/表单        │
├──────────────────────────────────────────────────────────────────────┤
│ 03 FORM (HubSpot embed)                                               │
│ 字段：姓名 · 邮箱 · 公司 · 角色 · 诉求 · 国家/地区 · 备注             │
│ 合规：GDPR consent · reCAPTCHA · 提交后 redirect                      │
├──────────────────────────────────────────────────────────────────────┤
│ 04 OFFICES GRID (地址 · 电话 · 邮箱)                                  │
├──────────────────────────────────────────────────────────────────────┤
│ 05 LEGAL NOTICES · SLA 响应时长声明                                   │
└──────────────────────────────────────────────────────────────────────┘
```

- **Schema**：`contactMethod` document · `form` 字段字典（W2-05）
- **集成**：HubSpot embed（Forms API）· 后续 W4 做一份 serverless fallback

---

## 11. Legal · 法务页（Privacy + Terms + 其他）

> 最简。纯 richText。列入附页交付以保证上线合规完整。

```
/legal/privacy
/legal/terms
/legal/cookies
/legal/disclaimers
/legal/whistleblower
```

- **Schema**：`legalPage` document · 单字段 `title + slug + body(portableText) + lastReviewed + owner`
- **合规**：每条页面必须有 `lastReviewed ≤ 365 天`，否则在 Studio 显示警告徽章（W2-05 加）

---

## 12. Schema 总需求汇总（供 W2-05）

### 12.1 新增 document
- `pilotSubpage`
- `aiDisclosure` (singleton)
- `legalPage`
- `redirectRule`（从旧站迁移）

### 12.2 新增 object / kind
- `problemFrame` 或用 `richText` 覆盖（决策点 A）
- `personaCards`
- `teamBand`
- `relatedSolutions`
- `timelineBand`
- `officeGrid`
- `pricingTable`（决策点 B · 合规）
- `pilotIndex`
- `hero.variant ∈ {home, solution, sprint, portfolio, listing, about, contact}`
- `navigation.footerOnly[]`
- `caseStudy.citations[]` 结构化（现为自由文本 → 改）
- `claim ↔ proofPoint` 双向 ref + evidenceTier enum + validator

### 12.3 Forbidden phrases 扩展
- 从 Copy Deck Appendix 全量导入（W1-04）
- 分类：FTC / NMPA / FDA / 过度承诺 / 可量化诉求缺证据

### 12.4 Desk structure 分组
- 按角色：Marketing · Medical · IR · Legal
- 每组隐藏无关 schema 降低误操作面

### 12.5 Webhook
- Publish 时触发 claim audit：所有 `claim.evidenceRef == null` 阻塞发布

---

## 13. 验收口径（Ready for Dev）

| 项 | 验收口径 |
|----|----------|
| 线框覆盖 | 9 顶层页 + 2 Pilot 子页 = 11 套 |
| 模块映射 | 每模块都指向确定的 `pageSection.kind` |
| 响应式 | 每页给出 Desktop + Mobile 骨架 |
| Schema 反推 | §12 汇总 → W2-05 直接落 |
| 合规 flag | AI / Pilot / Legal / Contact 四页标注合规 gate |
| 命名 | 与 W1-06 Sanity schema 命名一致，不新造术语 |

---

## 14. 已知待拍板项

1. Homepage Trust Bar 位置：A/B 方向 vs C 方向（等 W2-02 拍板会）
2. Sprint 页定价是否公开：法务+业务决策（W2 内）
3. Problem Frame 是否独立 kind（工程倾向合并进 richText，内容倾向独立）
4. Pilot 子页是否挂到主导航（目前藏在 Other Engagements 下）
5. 多语言：EN 优先上线，中文节点待 W4 评估

---

_W2-04 v1.0 · 2026-04-19 · 待 W2-02 拍板后锁定 → 进 W3 开发_
