# 梅斯健康集团官网重构 · 信息架构（IA）文档 v2.0

**配套**：Copy Deck v4.1 · PRD v4 · 技术选型文档 v1.0 · W1-04 Brand Guidelines v1.1 · W1-05 Homepage Mockup v0.6
**受众**：内部技术 / IT 团队（前端开发、CMS 建模、SEO、法务接口）
**版本**：2026-04-23 · v2.0（依据 W1-05 Homepage Mockup v0.6 对齐修订）
**域名**：medscihealthcare.com

---

## 0. IA 核心原则

1. **双主线叙事**：Entering China 与 Going Global (US) 视觉等权重，不分主次（Copy Deck §1.1、§1.3）。
2. **四大业务块首屏可见**（v2.0 新增）：Homepage Hero 右列以"WHAT WE DELIVER"单卡承载 4 个业务块（Medical Evidence / Physician Engagement / Medical Communications / AI-Enabled Platform）+ 关键证据点（3.33M+ / AI + PITL / 2415.HK），使领导与首访客户在首屏即可明示交付内容。
3. **三层漏斗清晰**：Content Sprint（低） → 30-Day Pilot（中） → 完整项目（高）（Copy Deck §4.7）。
4. **主站战略纯净**：medscihealthcare.com 只承载海外业务与反向尽调；国内 opportunistic 业务不得污染主叙事（Copy Deck §5 / PRD v4 §11）。
5. **证据分层可用性**：Verified / In Development / Available on Request 三类内容在不同页面有不同可用域（Copy Deck §6.2）。
6. **合规可追溯**：所有数据 claim 带年份 / 来源 / 签字人（Copy Deck §6.3–6.4）。
7. **品牌一致性**：品牌名统一为 **MedSci Healthcare**（混合大小写，遵从官方 Logo）；主色系严格使用 W1-04 v1.1 单色蓝派生（不含绿色，绿色降级为功能性 Success 色）。
8. **AI 叙事双层**：Hero 右列 4 业务块只以 1 行速览提及 AI-Enabled Platform，展开细节下沉至 `#ai` 独立区块。

---

## 1. 全站栏目树

```
medscihealthcare.com
│
├── /                                       (Homepage · EN / CN 双语)
│
├── /solutions/                             (Solutions 集合页，Top Nav 入口)
│   ├── entering-china                      (战略路径 1 · EN)
│   ├── going-global-us                     (战略路径 2 · EN)
│   ├── medical-evidence                    (业务块 01 · EN) ← v2.0 新增
│   ├── physician-engagement                (业务块 02 · EN) ← v2.0 新增
│   ├── medical-communications              (业务块 03 · EN) ← v2.0 新增
│   └── cross-border-medical-content-sprint (低门槛漏斗入口 · EN)
│
├── /pilots/
│   ├── china-evidence-sprint               (30-Day China Pilot · EN)
│   └── fda-evidence-gap-diagnostic         (30-Day FDA Pilot · EN)
│
├── /ai-platform                            (AI 能力页 · EN) ← v2.0 URL 重命名（原 /ai-enabled-delivery）
│
├── /case-studies/                          (Top Nav 入口)
│   ├── entering-china-evidence-hcp         (Case 1)
│   ├── entering-china-localized-content    (Case 2)
│   └── going-global-fda-evidence-bridge    (Case 3)
│
├── /insights/                              (内容中心 · EN，Top Nav 入口)
│   └── [slug]
│
├── /about                                  (About MedSci · EN / CN 双语，Top Nav 入口)
│
├── /contact                                (Smart Form 落地页 · EN)
│
├── /ir                                     (→ 外部跳转港交所 2415.HK 公告页 · EN / CN)
│
├── /legal/
│   ├── terms                               (EN / CN)
│   ├── privacy                             (EN / CN)
│   └── disclosures                         (港股披露声明 · EN / CN)
│
└── /services/
    └── other-engagements                   (⚠️ noindex · 仅 footer + 销售 referral 访问)
```

**v2.0 栏目结构变更**：

| 变更 | v1.0 | v2.0 |
|---|---|---|
| 业务块子页 | 仅 2 条战略路径 | 战略路径 × 2 + 业务块 × 3 + Sprint × 1 = 6 条 `/solutions/*` |
| AI 页 URL | `/ai-enabled-delivery` | **`/ai-platform`**（Nav 标签同步） |
| 301 追加 | — | `/ai-enabled-delivery` → 301 → `/ai-platform` |

**说明**：
- `/solutions/` 现承担双轴：战略维度（Entering China / Going Global）+ 交付维度（3 业务块 + Cross-Border Sprint），合并在同一 URL 前缀便于 SEO 与 sitemap 组织。
- `/services/` 与 `/solutions/` 严格区分：`/services/` 仅容纳 Other Engagements，不做 SEO。
- `/pilots/` 作为独立 URL 前缀，便于 GA 与 HubSpot 按路径做漏斗分析。
- `/ir` 使用 301 或 rel="external" 跳转，避免站内承担合规披露。

---

## 2. 顶部导航（Top Nav）v2.0

桌面端（左对齐 Logo + 右对齐菜单）：

```
[MedSci Logo]   Solutions ▾   Case Studies   AI Platform   Insights   About   [🔘 Talk to an Expert]   [EN ▾]
```

移动端：汉堡菜单展开，按同顺序纵向排列；CTA 与语言切换置于底部。

**Solutions 下拉（Mega Menu）**：

| 分组 | 项 | URL |
|---|---|---|
| **By Path（战略方向）** | Entering China | `/solutions/entering-china` |
|  | Going Global (US) | `/solutions/going-global-us` |
| **By Deliverable（业务块）** | Medical Evidence | `/solutions/medical-evidence` |
|  | Physician Engagement | `/solutions/physician-engagement` |
|  | Medical Communications | `/solutions/medical-communications` |
| **Quick Start** | Cross-Border Content Sprint | `/solutions/cross-border-medical-content-sprint` |

**导航决策理由（v2.0）**：
- 从 v1.0 的 6 条（含 2 条战略路径独立占位）精简到 5 条（Solutions 收纳所有解决方案页）：首屏认知负荷进一步降低，Solutions 作为聚合入口更符合 B2B 反向尽调用户的浏览习惯。
- **4 大业务块不单列进 Top Nav**，避免菜单膨胀；入口通过 Hero 右列 "WHAT WE DELIVER" 卡 + `#services` 锚区双渠道提供。
- **Case Studies 单列入导航**（v2.0 新增，v1.0 原在 footer）：反向尽调场景中 Case Studies 是最高权重的信任信号，升格为一级导航。
- `AI Platform` 单列：呼应 PRD v4 对 AI 叙事的独立叙事要求，且 URL 与 Label 一致（`/ai-platform`）。
- `Other Engagements`、`Cross-Border Sprint` **不进顶导航**（Copy Deck §5 设计说明）。
- `Contact` 不单列，每页都有 "Talk to an Expert" CTA。

---

## 3. 页脚（Footer）v2.0

```
列 1 · Solutions                列 2 · Pilots               列 3 · Resources          列 4 · Legal & IR
─────────────────────           ─────────────────────       ─────────────────────     ─────────────────────
Entering China                  30-Day China Sprint         Case Studies              Terms of Use
Going Global (US)               30-Day FDA Diagnostic       AI Platform               Privacy Policy
Medical Evidence                Cross-Border Sprint         Insights                  Disclosures
Physician Engagement                                        About MedSci              Investor Relations →
Medical Communications                                      Contact                   (→ HKEX 2415.HK)
                                                            Other services *
                                                            (rel="nofollow")
```

下方：`© 2026 MedSci Healthcare (2415.HK). All rights reserved.` + 社交（LinkedIn 必有，其他按需）

**关键规则**：
- "Other services" 链接到 `/services/other-engagements`，设置 `rel="nofollow"`（Copy Deck §5.7）。
- "Investor Relations" 标注外部跳转图标，落到港交所披露页或公司 IR 子站（若独立存在）。
- Footer 是 `Other Engagements` 的**唯一内部入口**。
- Pilots 列新增 Cross-Border Sprint（v2.0 从 Solutions 列移动过来，归入漏斗入口组）。

---

## 4. 页面明细与页面内模块（Module Map）

### 4.1 Homepage — `/`（v2.0 对齐 W1-05 Mockup v0.6）

| # | 模块 | 锚点 | Copy Deck 锚点 | 关键组件 | 数据来源 |
|---|---|---|---|---|---|
| 1 | **Hero**（双列） | `#top` | §1.1 | 左列：Eyebrow + 子 Slogan + H1 + Subhead + 3 CTA；右列：**"WHAT WE DELIVER" 4 业务块卡 + Stat Strip**（v2.0） | Page 单例 + Services 索引 |
| 2 | Quick Start Offers（3 卡） | `#pilots` | §1.2 | 3× PilotOffer summary | PilotOffer + ContentSprintOffer |
| 3 | Two Primary Paths | `#paths` | §1.3 | 左右双栏卡 | Solution × 2 |
| 4 | **Services · What We Deliver**（4 卡） | `#services` | §1.3b（Copy Deck 待补） | 4× ServiceLine 卡（3 full + 1 AI 简略） | ServiceLine × 4 |
| 5 | Why MedSci（三支柱） | `#why` | §1.4 | 3 支柱文本块 | Page 单例 |
| 6 | Selected Case Studies（3 卡） | `#cases` | §1.5 | 3× CaseStudy card | CaseStudy × 3（⚑ 3 metrics 必填） |
| 7 | AI-Enabled Delivery（详尽） | `#ai` | §1.6 | 主文案 + 3 子能力块 + PITL 流程图 + CTA | Page 单例 |
| 8 | Trust / Proof Bar | `#trust` | §1.7 | logo / 数字墙（Verified 层） | ProofPoint where tier="verified" |
| 9 | Insights | `#insights` | §1.8 | 3 最新 Insight 摘要 | Insight ORDER BY publishedAt DESC LIMIT 3 |
| 10 | Final CTA | `#cta` | §1.9 | 标题 + 文案 + 2 按钮 | Page 单例 |

**Hero 右列"WHAT WE DELIVER"卡详细结构**（v2.0 新增规范）：

```
┌─────────────────────────────────┐
│ WHAT WE DELIVER     [4 BLOCKS]  │  ← 头部 label + 青色 badge
├─────────────────────────────────┤
│ 01 · EVIDENCE                   │
│ Medical Evidence            →   │  ← hover: 左移 6px + 标题蓝
│ RWE · Registry · Lit · HEOR     │
├─────────────────────────────────┤
│ 02 · PHYSICIANS                 │
│ Physician Engagement        →   │
│ 3.33M+ · Advisory · KOL · CME   │
├─────────────────────────────────┤
│ 03 · COMMUNICATIONS             │
│ Medical Communications      →   │
│ Publications · Congress · …     │
├─────────────────────────────────┤
│ 04 · PLATFORM                   │
│ AI-Enabled Platform         →   │  ← href="#ai"，其余 3 条 href="#services"
│ AI Drafts · PITL · QC           │
├─────────────────────────────────┤
│ 3.33M+ · AI + PITL · 2415.HK   │  ← 底部 stat strip（3 个关键证据点）
└─────────────────────────────────┘
```

**强制约束（v2.0 更新）**：
- 模块顺序：Hero → Pilots → Paths → **Services** → Why → Cases → AI → Trust → Insights → Final CTA。`Services` 模块为 v2.0 新增，位于 Two Primary Paths 之后、Why MedSci 之前，不可调序。
- `Other Ways We Help` **不在首页**（Copy Deck §1.10 / §5）。
- Case Study 卡若任一 metric 仍为 `⚑ placeholder`，CMS 层阻断发布。
- Hero 右列 4 业务块卡**只显示速览**（每条 ≤ 1 行交付物示例）；明示交付列表在 `#services` 区展开。
- Hero 左列子 Slogan **锁定**为 *AI-Enabled. Physician-Verified. Globally Ready.*（W1-04 v1.1 §1.4，Sponsor 已拍板）。

---

### 4.2 Entering China — `/solutions/entering-china`

| # | 模块 | Copy Deck 锚点 | 备注 |
|---|---|---|---|
| 1 | Page Title + Intro | §2.1–§2.2 | — |
| 2 | Who It's For | §2.3 | 4 条受众列表 |
| 3 | Problems We Solve | §2.4 | 4 Problem 块（第二人称） |
| 4 | What We Deliver | §2.5 | 4 子方案（A/B/C/D） |
| 5 | Pilot Offer（嵌入卡片） | §2.6 | reference `/pilots/china-evidence-sprint` |
| 6 | Why MedSci for Entering China | §2.7 | 3 支柱 |
| 7 | Proof Points（三层） | §2.8 | `verified` + `inDevelopment` + `onRequest` |
| 8 | Boundaries | §2.9 | 诚实排除声明 |
| 9 | Secondary Entry Point | §2.10 | **CTA 指向 Cross-Border Sprint**，不指向 Other Engagements |
| 10 | Final CTA | §2.11 | Book a Pilot + Talk to an Expert |

---

### 4.3 Going Global (US) — `/solutions/going-global-us`

结构与 Entering China 严格对称，便于设计复用：

| # | 模块 | Copy Deck 锚点 |
|---|---|---|
| 1 | Page Title + Intro | §3.1–§3.2 |
| 2 | Who It's For | §3.3 |
| 3 | Problems We Solve | §3.4 |
| 4 | What We Deliver（4 子方案 A/B/C/D） | §3.5 |
| 5 | Pilot Offer | §3.6（reference `/pilots/fda-evidence-gap-diagnostic`） |
| 6 | Why MedSci for Going Global | §3.7 |
| 7 | Proof Points（三层） | §3.8 |
| 8 | Boundaries | §3.9 |
| 9 | Secondary Entry Point | §3.10（→ Cross-Border Sprint） |
| 10 | Final CTA | §3.11 |

---

### 4.4 业务块落地页（v2.0 新增，3 页对称结构）

对应 4 大业务块中的 3 条（第 4 条 AI-Enabled Platform 单独使用 `/ai-platform`）：

- `/solutions/medical-evidence`
- `/solutions/physician-engagement`
- `/solutions/medical-communications`

**通用模块结构**（三页严格对称）：

| # | 模块 | 内容要点 |
|---|---|---|
| 1 | Page Title + Intro | 业务块定义 + 1 句价值主张 |
| 2 | What's Included | 4–6 条明示交付物（对应首页 Hero 卡速览的展开版） |
| 3 | Who It's For | 受众 / 适用场景 |
| 4 | Engagement Models | 单次 Sprint / Retainer / 项目制 的选择矩阵 |
| 5 | Proof Points（三层） | Verified + In Development + On Request |
| 6 | Related Case Studies | 2–3 个 Case Studies 卡片，筛选条件 `category` 或 `serviceLine` 匹配 |
| 7 | Linked Pilot（如适用） | 指向对应 Pilot（若有） |
| 8 | Final CTA | Book / Talk to an Expert |

**交叉引用**：
- Medical Evidence 页顶部引导链接：Entering China / Going Global 双路径的 Evidence 应用场景（§2.5 / §3.5）。
- Physician Engagement 页：链接 About 页的 3.33M+ 物理医生网络说明。
- Medical Communications 页：链接 Case Studies 筛选结果（`serviceLine=communications`）。

---

### 4.5 Cross-Border Medical Content Sprint — `/solutions/cross-border-medical-content-sprint`

| # | 模块 | Copy Deck 锚点 |
|---|---|---|
| 1 | Page Title | §4.1 |
| 2 | Intro | §4.2 |
| 3 | Who It's For | §4.3 |
| 4 | Who It's **Not** For（诚实排除） | §4.4 |
| 5 | What You Get | §4.5 |
| 6 | Engagement Details | §4.6（含 ⚑ PRICING） |
| 7 | How It Fits（漏斗解释图） | §4.7 |
| 8 | CTA | §4.8 |

**路由规则**：§4.4 的"Not For"三类用户通过 Smart Form 判定后，前端**路由到 `/services/other-engagements`**，不进入 Pilot 漏斗（Copy Deck §4.4 设计说明）。

---

### 4.6 Other Engagements — `/services/other-engagements`

| # | 模块 | Copy Deck 锚点 |
|---|---|---|
| 1 | Page Title | §5.1 |
| 2 | Intro（"occasionally" / "selected" 措辞） | §5.2 |
| 3 | Card 1 — Specialty Clinic Patient Education | §5.3 |
| 4 | Card 2 — Evidence-Backed Content for Healthcare Brands | §5.4 |
| 5 | Card 3 — Cross-Border Review / Localization / Compliance-Aware | §5.5 |
| 6 | Page CTA（Smart Form 预选分支） | §5.6 |

**技术约束**（Copy Deck §5.7 必做）：
- `<meta name="robots" content="noindex, nofollow">`
- 排除 sitemap.xml
- 所有内链 `rel="nofollow"`
- GA4 标记 `traffic_category=secondary`
- HubSpot Lead Scoring 排除来源 `/services/other-engagements`

---

### 4.7 Pilot 子页 — `/pilots/china-evidence-sprint` & `/pilots/fda-evidence-gap-diagnostic`

Copy Deck §2.6 / §3.6 已给出内嵌卡片文案；此处作为独立 URL 落地页存在（用于广告投放、邮件签名、销售 referral）。

结构：
1. Pilot Title + Description
2. What's Included
3. Best For
4. Engagement Details（含 ⚑ PRICING 占位）
5. Proof Points（引用所属主路径的 Verified 层）
6. FAQ（可选，V2 迭代）
7. CTA（Book the Pilot + Talk to an Expert）

---

### 4.8 AI Platform — `/ai-platform`（v2.0 URL 重命名）

基于 Copy Deck §1.6 扩展，与首页 `#ai` 区块形成"首页速览 + 独立页详尽"双层结构：

1. Hero：Faster, more structured, medically reviewed delivery
2. How We Combine AI + PITL（4 步流程图：Ingestion → Gap Analysis → PITL Review → Deliverable）
3. 3 能力块：Faster Evidence Review · AI-Assisted Scientific Drafting · AI-Enhanced Medical Content Production
4. **合规边界说明**（Copy Deck §1.6 设计说明）：禁用 zero-hallucination / 100% accurate / cure / AI doctor 等表述；所有 AI claim 搭配 PITL 解释。
5. 技术原理简述（适度，面向反向尽调）：Retrieval 架构、审稿日志、双语 QC
6. Case references（关联 Case Studies，serviceLine=platform 或带 AI tag）
7. CTA

**301 重定向**：`/ai-enabled-delivery` → 301 → `/ai-platform`（保留旧 URL 外部链接 SEO 继承）。

---

### 4.9 Insights — `/insights` & `/insights/[slug]`

列表页：
- 三类主题（Copy Deck §1.8）：China RWE · FDA Evidence Bridge · Medical Communication
- 筛选器：主题 / 发布时间 / 服务线（v2.0 新增按 ServiceLine 筛选）
- 订阅入口（Newsletter）

详情页：
- 作者 / 审稿人（PITL 审阅）/ 发布时间
- 相关 Pilot / Solution / ServiceLine 的 CTA 区块
- 相关 Insights 推荐

---

### 4.10 About — `/about`

- 公司简介（2415.HK 港股信息）
- Leadership（有授权照片）
- 物理医生网络规模（3.33M+，Verified 层，与 Homepage Hero 右列 stat strip 对齐）
- 合规与质量审阅机制（法务 / IR / PITL）
- 投资者关系入口链接
- 职业机会（可选，V2 迭代）

**双语**：EN 主 + CN 精简版（服务反向尽调场景）。

---

### 4.11 Contact / Smart Form — `/contact`

- 单页嵌入 Smart Form
- 首屏即表单，减少跳转
- Thank-you 页：根据意图分支展示不同后续路径
- 表单字段须支持 ServiceLine 意图选择（v2.0：新增 business_block 字段，枚举 evidence/physicians/communications/platform/paths/sprint/other）

---

### 4.12 Legal — `/legal/terms` · `/legal/privacy` · `/legal/disclosures`

- 标准法律条款
- 数据处理声明（符合 GDPR / CCPA 基础要求）
- 港股上市披露声明（2415.HK 合规）
- Cookie 同意横幅（挂到全站）

---

## 5. 导航 / 交叉链接矩阵（v2.0 扩充）

| 从 | 到 | 链接类型 | 规则 |
|---|---|---|---|
| Top Nav Solutions ▾ | `/solutions/entering-china` 等 6 条 | Mega Menu 内链 | follow |
| Top Nav Case Studies | `/case-studies/` | 内链 | follow |
| Top Nav AI Platform | `/ai-platform` | 内链 | follow |
| Top Nav Insights | `/insights/` | 内链 | follow |
| Top Nav About | `/about` | 内链 | follow |
| Homepage Hero CTA 1 | `/solutions/entering-china` | 内链 | follow |
| Homepage Hero CTA 2 | `/solutions/going-global-us` | 内链 | follow |
| Homepage Hero CTA Secondary | `/contact` (Smart Form) | 内链 | follow |
| **Homepage Hero 右列 01 Medical Evidence** | `#services` → （desktop 滚动 / 移动跳转后再进 `/solutions/medical-evidence`） | 锚跳 | follow |
| **Homepage Hero 右列 02 Physician Engagement** | `#services` → `/solutions/physician-engagement` | 锚跳 | follow |
| **Homepage Hero 右列 03 Medical Communications** | `#services` → `/solutions/medical-communications` | 锚跳 | follow |
| **Homepage Hero 右列 04 AI-Enabled Platform** | `#ai` → `/ai-platform` | 锚跳 | follow |
| Homepage Services 4 卡片 | 对应 `/solutions/*` 或 `/ai-platform` | 内链 | follow |
| Homepage Quick Start Card 1 | `/pilots/china-evidence-sprint` | 内链 | follow |
| Homepage Quick Start Card 2 | `/pilots/fda-evidence-gap-diagnostic` | 内链 | follow |
| Homepage Quick Start Card 3 | `/solutions/cross-border-medical-content-sprint` | 内链 | follow |
| Entering China §2.10 | `/solutions/cross-border-medical-content-sprint` | 内链 | follow |
| Going Global §3.10 | `/solutions/cross-border-medical-content-sprint` | 内链 | follow |
| Cross-Border Sprint §4.4 "Not For" | `/services/other-engagements` | Smart Form 后端路由 | **不产生前端可见链接** |
| Footer "Other services" | `/services/other-engagements` | 内链 | **rel="nofollow"** |
| Footer "Investor Relations" | HKEX 2415.HK 披露页 | 外链 | rel="external noopener" |

---

## 6. URL 规范

| 规则 | 说明 |
|---|---|
| 结构 | `/<section>/<slug>` 单层或双层，不超过 3 层 |
| 语言前缀 | 默认无前缀即 EN；CN 版使用 `/zh/` 前缀（如 `/zh/about`） |
| 大小写 | 全小写 |
| 分隔符 | 连字符 `-`，不使用下划线 |
| 词干 | 名词短语优先（`entering-china` 而非 `how-to-enter-china`） |
| 动词避免 | 落地页不用动宾短语作 slug |
| 尾斜杠 | 不强制；301 规范化为无尾斜杠 |
| 查询参数 | 仅用于 UTM / 分享追踪，不用于内容路由 |
| 中文 URL | 仅 `/zh/` 及子页使用英文 slug，不用中文字符 |

**保留 URL & 301 清单**（v2.0 更新）：
- `/china` → 301 → `/solutions/entering-china`
- `/usa` / `/us` → 301 → `/solutions/going-global-us`
- `/pilot` → 301 → `/pilots/china-evidence-sprint`
- **`/ai-enabled-delivery` → 301 → `/ai-platform`**（v2.0 新增）
- **`/services/medical-evidence` → 301 → `/solutions/medical-evidence`**（避免 /services/ 误读为业务线）
- **`/services/physician-engagement` → 301 → `/solutions/physician-engagement`**
- **`/services/medical-communications` → 301 → `/solutions/medical-communications`**

---

## 7. 多语言（i18n）策略

| 页面 | EN | CN | 语言切换器可见 | 备注 |
|---|---|---|---|---|
| Homepage | ✅ | ✅ 精简版 | ✅ | CN 只保留 Hero / Services / Why MedSci / Trust Bar / Final CTA |
| Entering China | ✅ | ❌ | ❌ | 受众是海外客户 |
| Going Global (US) | ✅ | ❌ | ❌ | 文案本身面向美国受众 |
| Medical Evidence / Physician Engagement / Medical Communications | ✅ | ❌ | ❌ | v2.0 新增，面向海外客户 |
| Cross-Border Sprint | ✅ | ❌ | ❌ | — |
| Pilot 子页 | ✅ | ❌ | ❌ | — |
| AI Platform | ✅ | ❌ | ❌ | — |
| Case Studies | ✅ | ❌ | ❌ | — |
| Insights | ✅ | ❌ | ❌ | 未来可选择性双语 |
| About | ✅ | ✅ | ✅ | 反向尽调必备 |
| Contact | ✅ | ❌ | ❌ | — |
| /ir | ✅ | ✅ | ✅ | 港股投资者 |
| Legal | ✅ | ✅ | ✅ | 合规要求 |

**切换规则**：
- 只在对应页有 CN 版本时显示语言切换器；否则切换器 disabled 或隐藏。
- 用户语言偏好用 `NEXT_LOCALE` cookie 记录，但**不自动跳转**（避免 hreflang 混乱）。
- `<link rel="alternate" hreflang="zh-CN" href="...">` 在双语页面正确配置。

---

## 8. CMS 内容模型（建议 schema，v2.0 扩充）

```
Page (单例页：Home / AI Platform / About / Contact)
 └─ slug, title, modules[], seo{}

Solution (路径 + 业务块合并类型)
 ├─ slug, pageTitle, intro, audience[], problems[], deliverables[]
 ├─ category: path | service_line | sprint   ← v2.0 新增
 ├─ businessBlock?: evidence | physicians | communications  ← v2.0 新增（仅 service_line 使用）
 ├─ pilotRef → PilotOffer
 ├─ whyMedsci[], proofPoints[], boundaries{do, doNot}
 ├─ secondaryEntryCTA{ label, target }
 └─ finalCTA{}

PilotOffer
 ├─ slug, title, description, included[], bestFor[]
 ├─ engagementDetails, pricing (⚑ placeholder)
 └─ cta

CaseStudy
 ├─ slug, category(enter_china | go_global | cross_border)
 ├─ serviceLines[]: evidence | physicians | communications | platform  ← v2.0 新增
 ├─ challenge, deliverables[]
 ├─ metric1, metric2, metric3  (validation: 必填，禁止 ⚑ 前缀)
 └─ cta

ProofPoint
 ├─ tier: verified | inDevelopment | onRequest
 ├─ statement, source, year (year 必填)
 ├─ availableOn: string[]  (允许出现的页面 slug 列表)
 └─ approvedBy, approvedAt

Claim
 ├─ statement, source, year
 ├─ approvedBy, approvedAt
 └─ status: draft | inReview | approved | retired

ClientReference
 ├─ companyName (可能脱敏)
 ├─ logoAuthorized (bool), logoAsset
 ├─ anonymizedLabel (e.g. "Global Top-10 Medtech")
 └─ authorizationDocument

Insight
 ├─ slug, title, topic(rwe | evidence_bridge | med_comm)
 ├─ serviceLines[]  ← v2.0 新增，用于 Insights 筛选
 ├─ author, pitlReviewer (PITL)
 ├─ publishedAt, body (Portable Text)
 └─ relatedSolution, relatedPilot

OtherEngagementCard
 ├─ slug, title, description
 └─ smartFormIntent (预选分支)

Navigation  (全站导航配置)
 ├─ topNav[], footerSections[]
 ├─ megaMenuGroups[]  ← v2.0 新增（Solutions 下拉分组）
 └─ languageSwitcher{}

HomepageHeroServices  (v2.0 新增，Homepage 单例内嵌类型)
 ├─ items[]: { num, title, deliverablesOneLine, href }  ← 4 条
 └─ statStrip[]: { label, value }  ← 3 条（3.33M+ / AI + PITL / 2415.HK）
```

---

## 9. 发布 / 审阅工作流（Publishing Workflow）

```
[Draft] ──editor──► [In Review] ──Legal sign-off──► [IR sign-off] ──► [Approved] ──schedule──► [Published]
   │                    │
   │                    └─ (禁用词扫描 + Placeholder 阻断)
   └─ CMS 侧校验规则自动运行
```

**每页发布前必过 Gate**：
1. 禁用表述扫描通过（zero-hallucination / 100% accurate / industry-leading / guaranteed / cure / AI doctor 等，见 W1-06 `forbiddenPhrases.ts`）
2. 所有数据 claim 关联到已签字 `Claim` 条目
3. Case Study 3 个 metric 全部填齐（非 ⚑）
4. 所有 logo 有授权或走匿名化
5. AI / PITL claim 通过合规审查
6. SEO 字段完整（title / description / OG）
7. **v2.0 新增**：Homepage Hero Services 4 条目 + stat strip 3 条目全部关联 Solution / ProofPoint 或 Claim，不得硬编码

---

## 10. 分析 / 漏斗追踪

### 10.1 GA4 事件（v2.0 扩充）

| 事件 | 触发点 | 属性 |
|---|---|---|
| `pilot_cta_click` | 任意 Pilot CTA 点击 | pilot_slug, source_page |
| `sprint_cta_click` | Cross-Border Sprint CTA 点击 | source_page |
| `smart_form_submit` | Smart Form 提交 | intent, business_block, source_page, traffic_category |
| `case_study_view` | Case Study 详情 10s+ | case_slug, service_lines |
| `insight_read` | Insight 阅读完成 70% | insight_slug, topic, service_lines |
| `ir_click` | IR 链接点击 | — |
| `other_engagements_view` | 访问 Other Engagements | traffic_category=secondary |
| **`hero_service_click`** | Hero 右列 4 业务块任一点击 | business_block, position (1-4) |
| **`services_card_click`** | `#services` 区 4 卡点击 | business_block, source=homepage |
| **`nav_solutions_click`** | Top Nav Solutions 下拉内任意项点击 | target_slug, group (path/deliverable/sprint) |

### 10.2 HubSpot Lead Scoring 规则（与 IA 联动）

| 来源 | Lead Score |
|---|---|
| Entering China / Going Global 主路径 | A（高） |
| Pilot 子页 | A |
| **业务块落地页（/solutions/{evidence,physicians,communications}）** | **A（高，v2.0 新增）** |
| **AI Platform 页（/ai-platform）** | **A（v2.0 调整，原为 B）** |
| Cross-Border Sprint | B（中） |
| Insights 下载 | B |
| **Other Engagements** | **N/A（不进 Pilot 漏斗 KPI）** |

---

## 11. 元数据与 SEO

### 11.1 每页标配

- `<title>` ≤ 60 字符
- `<meta name="description">` ≤ 155 字符
- OpenGraph：`og:title` · `og:description` · `og:image`（1200×630）
- Twitter Card：`summary_large_image`
- `<link rel="canonical">`
- `<link rel="alternate" hreflang>`（双语页面）

### 11.2 结构化数据（JSON-LD）

| 页面 | Schema |
|---|---|
| Homepage | `Organization` + `WebSite`（含 4 `Service` 子项对应业务块） |
| Solutions (paths / service lines / sprint) | `Service` |
| Pilots | `Service` + `Offer` |
| AI Platform | `Service` + `Product`（面向技术 SEO） |
| Case Studies | `Article` + `CaseStudy`（自定义） |
| Insights | `Article` |
| About | `Organization` + `AboutPage` |

### 11.3 爬虫规则（robots.txt）

```
User-agent: *
Allow: /
Disallow: /services/
Disallow: /contact/thank-you
Disallow: /api/

Sitemap: https://medscihealthcare.com/sitemap.xml
```

---

## 12. 无障碍（a11y）要求

- WCAG 2.1 AA 基线
- 键盘可达：Tab / Shift+Tab / Enter / Esc 全链路
- `alt` 文本：所有信息性图片；装饰性图片 `alt=""`
- 对比度：正文 ≥ 4.5:1；大字与 UI 组件 ≥ 3:1
- Focus visible：显著焦点环
- 表单 label 与输入框正确关联
- 动效可暂停（Reduced Motion 偏好生效）
- **Hero 右列 Services 卡**：4 条 `<a>` 必须有 `aria-label` 完整描述（示例：`aria-label="Medical Evidence — RWE, Registry, Literature Review, HEOR — jump to Services section"`）

---

## 13. 移动端与响应式

| 断点 | 内容呈现 |
|---|---|
| ≤ 640px | 单列堆叠；Hero 按钮纵向；Hero 右列 Services 卡移至 Hero 文案下方；Quick Start 3 卡纵向滑动；Services 4 卡 1 列 |
| 641–1024px | Two Primary Paths 改为上下堆叠；Hero 保持左右双列但右列 Services 卡缩放；Services 4 卡 2 列 |
| ≥ 1025px | 完整两栏 / 四卡布局 |

**特别处理**：
- 移动端首屏 Hero 压缩到 1 句 headline + 1 CTA（主 CTA 选择用户最近一次导航偏好；默认 Entering China）。
- Hero 右列 Services 卡在移动端**不隐藏**，改为堆叠至 Hero 文案下方，保证首屏"业务块可见"原则不破。
- Case Study 3 metrics 移动端改为上下列表不横向滚动。

---

## 14. 关键边界 / 禁忌清单（给开发，v2.0 更新）

1. ❌ **首页不得出现 Other Ways We Help 模块**（Copy Deck §1.10）
2. ❌ **Top Nav 仅 5 项**：Solutions · Case Studies · AI Platform · Insights · About，不得再增项
3. ❌ **Cross-Border Sprint / Other Engagements 不得出现在 Top Nav**（含 Solutions 下拉的 Quick Start 分组除外）
4. ❌ **Entering China §2.10 的 CTA 不得指向 `/services/other-engagements`**
5. ❌ **Going Global §3.10 的 CTA 不得指向 `/services/other-engagements`**
6. ❌ **Case Study 任一 metric 为 ⚑ 占位时不得发布**
7. ❌ **未授权 logo 不得直接显示**，走匿名化标签
8. ❌ **禁用词清单**（Copy Deck §6.3 + W1-06 `forbiddenPhrases.ts`）命中即阻断发布
9. ❌ **`/services/other-engagements` 不得进 sitemap.xml**
10. ❌ **Hero 右列 4 业务块速览不得超过 1 行交付物示例**；详尽列表必须下沉到 `#services` 或对应 `/solutions/{block}` 页
11. ❌ **不得使用 `MEDSCI` 全大写**，品牌名统一为 `MedSci Healthcare`（W1-04 v1.1）
12. ❌ **不得使用绿色作为品牌主色或强调色**，绿色仅限功能性 Success 状态（W1-04 v1.1 §2）

---

## 15. 与 Copy Deck v4.1 的一一对照表（v2.0 扩充）

| Copy Deck 章节 | 对应 URL / 模块 | IA 约束来源 |
|---|---|---|
| §1.1 Hero | `/` 模块 1 | §4.1 |
| §1.2 Quick Start | `/` 模块 2 + 跳转到 3 个子页 | §4.1 / §5 交叉链接 |
| §1.3 Two Primary Paths | `/` 模块 3 | §4.1 |
| **§1.3b What We Deliver**（Copy Deck 待补） | `/` 模块 4（Services） | §4.1 / v2.0 新增 |
| §1.4 Why MedSci | `/` 模块 5 | §4.1 |
| §1.5 Case Studies | `/` 模块 6 + `/case-studies/*` | §4.1 / §8 Schema |
| §1.6 AI-Enabled Delivery | `/` 模块 7 + `/ai-platform` | §4.1 / §4.8 |
| §1.7 Trust Bar | `/` 模块 8 | §4.1 / §8 ProofPoint |
| §1.8 Insights | `/` 模块 9 + `/insights` | §4.1 / §4.9 |
| §1.9 Final CTA | `/` 模块 10 | §4.1 |
| §2 Entering China | `/solutions/entering-china` | §4.2 |
| §3 Going Global | `/solutions/going-global-us` | §4.3 |
| **§3b 业务块落地页**（Copy Deck 待补） | `/solutions/{evidence,physicians,communications}` | §4.4 / v2.0 新增 |
| §4 Cross-Border Sprint | `/solutions/cross-border-medical-content-sprint` | §4.5 |
| §5 Other Engagements | `/services/other-engagements` | §4.6 / §14 禁忌 |
| §6 Appendix | 发布工作流 + Schema | §8 / §9 |

**Copy Deck 需同步补写**：
- §1.3b What We Deliver — 4 业务块区首页文案（标题、说明、4 卡文案）
- §3b 业务块落地页文案 ×3（Medical Evidence / Physician Engagement / Medical Communications）
- §1.6 AI-Enabled Delivery 更新（URL → `/ai-platform`，与 `#services` 区第 4 卡双向引用说明）

---

## 16. 下一步与交付物（IA 侧，v2.0）

| # | 交付物 | 负责 | 时点 |
|---|---|---|---|
| 1 | 低保真线框图（10 页主干，新增 3 业务块页 + Services Hero 卡） | 设计 | W2 |
| 2 | **Copy Deck v4.2 修订**（补 §1.3b / §3b / §1.6 URL 更新） | 内容 + 法务 | W2 |
| 3 | CMS schema 代码化同步（Solution.category/businessBlock、HomepageHeroServices 新类型） | 前端 + CMS 建模 | W2 |
| 4 | 组件映射表（模块 → 组件，含 Hero 右列 Services 卡） | 设计 + 前端 | W3 |
| 5 | Smart Form 分支流程图（新增 business_block 字段） | 市场 + 前端 | W3 |
| 6 | 301 / 重定向清单（`/ai-enabled-delivery`、`/services/{block}` 系列） | SEO + IT | W8 |
| 7 | sitemap.xml 与 robots.txt 草案 | 前端 + SEO | W9 |
| 8 | 双语切换逻辑 UAT 用例 | QA | W10 |

---

## 17. v1.0 → v2.0 变更摘要

| 条目 | v1.0 | v2.0 |
|---|---|---|
| 品牌名 | MEDSCI | **MedSci Healthcare** |
| Top Nav | Entering China · Going Global · AI-Enabled Delivery · Insights · About（6 项） | **Solutions · Case Studies · AI Platform · Insights · About（5 项）** |
| Homepage 模块数 | 9 | **10**（新增 Services · What We Deliver） |
| Hero 右列 | 3.33M+ 独立大卡 + 2 张小卡 | **单张 "WHAT WE DELIVER" 卡（4 业务块 + stat strip）** |
| Solutions 页数 | 3（2 路径 + 1 Sprint） | **6**（2 路径 + 3 业务块 + 1 Sprint） |
| AI 页 URL | `/ai-enabled-delivery` | **`/ai-platform`** |
| Case Studies 在 Nav | footer | **Top Nav 一级** |
| CMS Solution 类型字段 | slug/pageTitle/... | **新增 category + businessBlock** |
| CaseStudy/Insight | — | **新增 serviceLines[]** |
| 新增 GA 事件 | — | **hero_service_click / services_card_click / nav_solutions_click** |
| 禁忌清单 | 8 条 | **12 条**（新增 Nav 项数 / Hero 速览 / 品牌大小写 / 绿色禁用） |

---

> 本文档 v2.0 基于 W1-05 Homepage Mockup v0.6 + W1-04 Brand Guidelines v1.1 同步修订，与《梅斯健康官网重构 技术选型文档 v1.0》及 W1-06 Sanity Schema 配套使用。
> 下一步：Copy Deck v4.2 + W2 低保真线框图 + Sanity schema 同步升级（Solution.category/businessBlock、HomepageHeroServices 类型）。
