# Entry Offer 网站体现方案

**Medical & Compliance Content Review / Localization Support**

**版本**：2026-05-04 v1.0
**背景**：董事会建议 — 非中国市场业务拓展初期，需突出"容易理解、预算不高、马上要用"的入口型产品

---

## 一、核心定位

### 产品名称（推荐）

**主名称**：Medical & Compliance Content Review
**副名称**：Regulatory-Aware Localization Support
**绝对不叫**：Translation Services / Document Translation / Bilingual Editing

### 一句话定位

> We make your cross-border medical content more professional, more compliant, and more ready for the target market — not just translated.

### 与现有 Content Sprint 的关系

| | Content Sprint (已有) | Content Review (新增) |
|---|---|---|
| **门槛** | 需明确 artifact spec | 只需提交现有材料 |
| **交付** | 从零生产 1 个双语 artifact | 审查/修订客户已有材料 |
| **周期** | 14 天 | 3–5 个工作日 |
| **承诺感** | 中（需写 brief + kickoff） | 极低（上传材料即可启动） |
| **价位段** | Flat fee（中） | Flat fee（低） |
| **漏斗角色** | Low-commitment entry | **Lowest-commitment entry** |

Content Sprint 生产新内容，Content Review 审查已有内容。后者是更轻的前门。

---

## 二、三层产品架构

### Layer 1 — Quick Review（快单，3–5 天）

**产品包名**：Medical & Compliance Content Review Pack

**内容**：
- 审查客户现有英文/中文材料（标出高风险表述、合规红线、不专业措辞）
- 逐条批注 + 建议替代表述
- 出具 Review Summary（含风险评级：Critical / Advisory / Style）

**适用材料**：产品介绍、website copy、sales deck、brochure、email templates、partner-facing one-pager

**标准件**：
- Single-document review（≤10 页）
- Multi-document review（≤30 页）
- 每个 review 附 named reviewer（US-licensed 或 CN-licensed，视材料语言）

---

### Layer 2 — Localization Pack（升级，5–10 天）

**产品包名**：Cross-Border Medical Localization Pack

**内容**：
- Layer 1 全部（审查 + 批注）
- 合规语境下的中英双语改写（不是普通翻译）
- 美国/中国市场本地化适配（语气、术语、合规表述）
- 医生/合作伙伴可读版本

**适用场景**：展会资料包、KOL 沟通材料、distributor/partner deck、尽调材料、培训内容

---

### Layer 3 — Claims & Communication Readiness（延展，10–15 天）

**产品包名**：Claims & Communication Readiness Pack

**内容**：
- Claims 风险梳理（哪些表述有证据支撑、哪些需要降级或移除）
- 市场传播材料全套优化
- FAQ / objection handling 文件
- Medical support points 整理

**向上衔接**：做完 Layer 3 后自然导向 Evidence Support / Publication / KOL Engagement 等主业务线

---

## 三、网站集成方案

### 3.1 不做独立顶级页面，而是多点渗透

**原则**：Entry Offer 不应成为主站 Hero 的主叙事（那是投资人/大客户的反向尽调通道），而应作为"实用型快速入口"在多个触点出现，让中小企业 BD 一眼看到"这个我现在就能买"。

### 3.2 具体改动清单

#### ① 首页 QuickStart section — 从 3 卡变 4 卡

**当前**：China Evidence Sprint / FDA Evidence Gap Diagnostic / Cross-Border Content Sprint
**新增**：第 4 张卡 → **Medical & Compliance Review**

```
卡片数据：
{
  tag: 'Quick Review',
  title: 'Medical & Compliance Content Review',
  desc: 'Submit your existing materials. Get a compliance-flagged review with rewrite suggestions in 3–5 business days.',
  included: ['Risk-rated markup', 'Rewrite suggestions', 'Named reviewer sign-off'],
  price: '⚑ Flat fee — on request',
  cta: 'Submit materials',
  variant: 'outline',
  accent: false,
}
```

**布局调整**：4 卡 grid 改为 `2×2`（桌面端），移动端仍单列。section 标题改为：

> **Start small. No commitment required.**
> Four entry points — from a 3-day content review to a 30-day pilot. Each one is scoped so your team can evaluate us before a full engagement.

#### ② Solutions Mega Menu — 新增 Quick Start 列

**当前**：By Path (3 项) | By Deliverable (3 项)
**改为**：By Path (2 项) | By Deliverable (3 项) | Quick Start (3 项)

Quick Start 列内容：
- Cross-Border Content Sprint → `/solutions/cross-border-medical-content-sprint.html` [Sprint]
- Medical & Compliance Review → `/solutions/content-review.html` [New]
- 30-Day Pilots → `#pilots` [Pilots]

Sprint 从 By Path 移入 Quick Start，By Path 恢复纯粹的战略双轨。

Mega Menu 从 2 列变 3 列，宽度从 720px → 960px。

#### ③ 新建 /solutions/content-review.html 详情页

**页面结构**（复用 SolutionsShell 组件）：

| Section | 内容 |
|---|---|
| Hero | eyebrow: "Quick Start · 3–5 days" / title: "Your materials, reviewed for compliance and rewritten for clarity — by physicians, not just linguists." |
| 三层产品卡 | Layer 1 Review → Layer 2 Localization → Layer 3 Claims Readiness，含价格区间和各自 CTA |
| 适用材料清单 | icon grid：Product brochure / Sales deck / Website copy / Partner one-pager / Email templates / Exhibition materials / KOL communication / Training docs |
| 审查流程 | 4 步 timeline：Upload → AI-assisted pre-scan → Physician review & markup → Deliver with summary |
| Sample markup | 一段示例对比（Before → After），展示从"普通翻译"到"合规医学改写"的差异 |
| FAQ | 5–6 条 |
| CTA | "Submit your materials for a free scope estimate" |

#### ④ 首页 Hero "WHAT WE DELIVER" 右列 — 新增一行

当前 4 行：Medical Evidence / Physician Engagement / Medical Communications / AI-Enabled Platform

在最底部新增带 "NEW" badge 的一行：

> **Content Review & Localization** — Compliance-flagged review of your existing materials. [Quick Start →]

用较小字号 + 浅色，不抢主业务视觉权重。

#### ⑤ Footer Quick Links — 新增入口

在 Footer 的 Solutions 列新增：
- Medical & Compliance Review → `/solutions/content-review.html`

#### ⑥ Contact 表单 Smart Form — 新增意向选项

SmartForm 的 "What are you looking for?" 下拉新增选项：
- `Content review & localization` （排在 Content Sprint 之后）

#### ⑦ 各 Solutions 详情页 — 底部 cross-sell banner

在 Entering China / Going Global / Medical Evidence / Physician Engagement / Medical Communications 五个详情页的底部 CTA 区域之前，新增一个轻量 cross-sell strip：

> **Not ready for a full engagement?** Start with a Medical & Compliance Content Review — submit your existing materials and get physician-reviewed feedback in 3–5 days. [Learn more →]

---

## 四、信息架构变更

### 栏目树新增

```
medscihealthcare.com
├── /solutions/
│   ├── ... (现有 6 页不变)
│   └── content-review                    ← NEW · Entry Offer 详情页
```

### 导航变更

```
Solutions ▾
┌─────────────────┬──────────────────────┬─────────────────────────┐
│ By Path         │ By Deliverable       │ Quick Start             │
│ Entering China  │ Medical Evidence     │ Content Sprint [Sprint] │
│ Going Global    │ Physician Engagement │ Content Review [New]    │
│                 │ Medical Comms        │ 30-Day Pilots [Pilots]  │
└─────────────────┴──────────────────────┴─────────────────────────┘
```

---

## 五、文案策略 — 关键区隔点

### 绝对不说的词

- Translation / Translator / Bilingual editing / Language support / Proofreading

### 必须强调的差异点

1. **Physician-reviewed** — 不是翻译公司的语言编辑，是有执照的临床医生在审
2. **Compliance-aware** — 每条修改批注都标注合规风险等级（Critical / Advisory / Style）
3. **Market-ready** — 改完的材料直接可以给美国合作方/分销商/医生看，不需要再润色
4. **AI-assisted, human-verified** — AI 做初筛和建议，医生做最终判断（与主站 AI 叙事一致）
5. **Upgradeable** — 明确告知：Review → Sprint → Pilot → Full Engagement 的升级路径

### 目标客户画像（网站文案应覆盖）

- 中国出海美国的中小药企/器械公司（最直接）
- 参加展会、正在找 distributor/partner 的企业
- 没有成熟 in-house medical/regulatory writing team 的企业
- 需要快速包装英文材料给美国合作方的 BD 团队

---

## 六、升级路径视觉化

建议在 Content Review 详情页中包含一个 升级路径图：

```
Content Review          →   Content Sprint      →   30-Day Pilot        →   Full Engagement
(3–5 days, flat fee)        (14 days, flat fee)     (30 days)               (custom scope)
审查你已有的材料              从零生产新 artifact     诊断型深度参与             完整项目合作
─────────────────────────────────────────────────────────────────────────────────────────
                                ← 每一步费用可抵扣下一步 →
```

这个路径图也应在首页 QuickStart section 下方以简化形式出现。

---

## 七、实施优先级

| 优先级 | 改动 | 工作量 | 影响 |
|---|---|---|---|
| P0 | 新建 `/solutions/content-review.html` 详情页 | 1 天 | 核心落地页 |
| P0 | 首页 QuickStart 加第 4 卡 | 0.5 天 | 首页即见 |
| P1 | Mega Menu 改 3 列 + Quick Start 分组 | 0.5 天 | 导航可达 |
| P1 | Smart Form 新增选项 | 0.5h | 线索收集 |
| P2 | Hero 右列加一行 | 0.5h | 首屏露出 |
| P2 | 各 Solutions 页 cross-sell strip | 0.5 天 | 交叉导流 |
| P3 | Footer 加链接 | 0.5h | 补全 |

---

## 八、风险提示与合规边界

1. **不承诺法律背书**：页面需明确声明 "MedSci Healthcare provides compliance review support and medical communication review, not legal advice. This service does not constitute regulatory filing or legal counsel."
2. **定价标准化**：建议按材料页数分 2–3 档 flat fee，避免零碎改稿拖死利润
3. **与 Other Engagements 区分**：Content Review 是正式产品线（SEO 可见），不放 noindex 的 /services/ 下
4. **Draft 标记**：新页面同样需要 `[Draft — pending legal/IR sign-off]` 标记，生产部署前需法务确认文案

---

## 九、Sanity CMS Schema 建议

复用现有 `solutionPage` schema，新增 `entryType` 字段标记此页为 entry offer。无需新建 schema。

页面的 `slug` 设为 `content-review`，`theme` 设为 `cyan`（与 Sprint 一致，区别于主业务的 navy）。
