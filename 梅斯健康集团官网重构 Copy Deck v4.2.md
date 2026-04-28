# 梅斯健康集团 (MedSci Healthcare, 2415.HK) · Website Copy Deck v4.2

**版本**：2026-04-27 · v4.2（增量版,与 v4.1 配套使用）
**配套**：信息架构 IA v2.0 · PRD v4 · W1-04 Brand Guidelines v1.1 · W1-05 Homepage Mockup v0.6
**作者**：Yog Young
**审批路径**：内容编辑 → 法务（合规审阅,强制）→ IR 总监（港股披露相关页 §9.1 / §12.3 强制双签）→ Sponsor 终审

---

## 0. 本文档说明

本 v4.2 文档是 v4.1 的**增量版**,仅包含本次变更的章节。v4.1 中未变更章节继续生效,不在本文档重复。

### 0.1 v4.1 → v4.2 变更总览

| 类型 | 章节 | 触发依据 |
|---|---|---|
| **回灌** | §1.3b WHAT WE DELIVER（4 业务块卡） | IA v2.0 §15 标记"待补"; 文案已在 Hero.jsx 上线,本次回灌至 SSoT |
| **回灌** | §3b 业务块落地页 ×3（Medical Evidence / Physician Engagement / Medical Communications） | IA v2.0 §15 标记"待补"; 文案已在 PageXxx.jsx 上线 |
| **重写** | §1.6 AI-Enabled Delivery | URL 改 `/ai-enabled-delivery` → `/ai-platform`; 扩 4 步 PITL 流程; 加合规边界 |
| **品牌名** | 全局 | MEDSCI（全大写）→ **MedSci Healthcare**（混合大小写,Brand Guidelines v1.1 §1.1） |

### 0.2 视觉约定（沿用 v4.1）

- **加蓝左边框文段** = 可直接使用的最终英文文案（verbatim use）
- *斜体灰色* = 设计 / 实现说明（不渲染）
- ⚑ 黄褐色 = Go-Live 前必须由法务 / IR 签字的占位符

### 0.3 v4.2 关键合规边界（新增,适用全文档）

- **品牌名**统一为 `MedSci Healthcare`,不使用 `MEDSCI` 全大写
- **绿色**仅作功能性 Success 状态,不作品牌主色（W1-04 v1.1 §2）
- **AI claim** 必须搭配 PITL 解释,不得单独宣称 AI 能力
- **数据 claim** 必须带 source / year / approvedBy,经法务 + IR 签字方可上线

---

## §1.3b WHAT WE DELIVER（Homepage Hero 右列 4 业务块卡）

> **来源**: `prototype/components/Hero.jsx` `WhatWeDeliverCard()` 组件
> **位置**: Homepage Hero 右列单卡; 卡内含 4 行业务块 + 底部 stat strip 3 项
> **作用**: 投资人 / 反尽调访客首屏即看到 4 大业务交付内容（IA v2.0 §0 双主线叙事 + 四大业务块首屏可见原则）

### §1.3b.1 卡片头部

**Eyebrow**: `WHAT WE DELIVER`
**Badge**: `4 BLOCKS`（青色 accent,letter-spacing 0.12em uppercase）

### §1.3b.2 4 行业务块（顺序固定,不可调）

#### 01 · EVIDENCE
**Title**: Medical Evidence
**One-line deliverables**: RWE · Registry · Literature · HEOR
**Hover behavior**: 文字左移 4px,颜色变 brand-accent-500
**Href（桌面）**: `#services`（页面内锚点跳到 What We Deliver 区域）
**Href（移动 / accent route）**: `/solutions/medical-evidence`（直跳详情页）

#### 02 · PHYSICIANS
**Title**: Physician Engagement
**One-line deliverables**: 3.33M+ network · Advisory · KOL · CME
**Href**: `#services` 或 `/solutions/physician-engagement`

#### 03 · COMMUNICATIONS
**Title**: Medical Communications
**One-line deliverables**: Publications · Congress · Localization
**Href**: `#services` 或 `/solutions/medical-communications`

#### 04 · PLATFORM（accent 行,与上 3 行视觉差异化）
**Title**: AI-Enabled Platform
**One-line deliverables**: AI Drafts · PITL · QC · Source trails
**Accent**: 编号 `04 · PLATFORM` 用 brand-accent-500 色（其他 3 行用白 50% 透明度）
**Href**: `#ai`（首页内锚点）→ 阅读后引导跳 `/ai-platform`

### §1.3b.3 底部 Stat Strip（3 项）

3 列横排,边框分隔,深底色 `rgba(0,16,55,0.35)`:

| 数值 | 标签 | 备注 |
|---|---|---|
| **3.33M+** | Physician network | 来源: Internal · Year: 2025 · approvedBy: ⚑ IR |
| **AI + PITL** | Physician-in-the-loop | 来源: Internal Methodology · Year: 2026 · approvedBy: ⚑ Legal |
| **2415.HK** | HKEX listed | 来源: HKEX 公告 · Year: 2024 · approvedBy: ⚑ IR |

> *实现说明*：`approvedBy` 字段在 CMS 阶段对接 `ProofPoint` schema,原型阶段保留 ⚑ 直至首批 Verified 表单签字归档。

### §1.3b.4 禁忌（合规要求）

- ❌ 不得用"3.33 million" 长形式（保持简洁 `3.33M+`,与 IR 披露一致）
- ❌ 4 行业务块说明不得超过 1 行交付物示例（详尽列表下沉至 `#services` 锚区与 `/solutions/{block}` 详情页）
- ❌ 不得显示 `MEDSCI` 全大写

---

## §3b 业务块落地页 ×3

> **来源**: `prototype/solutions/PageMedicalEvidence.jsx`、`PagePhysicianEngagement.jsx`、`PageMedicalCommunications.jsx`
> **作用**: IA v2.0 §4.4 三页对称结构; 文案已上线,本次回灌至 SSoT

### §3b.1 Medical Evidence — `/solutions/medical-evidence`

#### Hero
**Eyebrow**: `Business Block · 01`
**Title**: Medical evidence with a source on every claim, signed by a clinician.
**Subhead**: Real-world evidence, registry analysis, systematic literature review and HEOR — assembled by AI retrieval, gated by physician sign-off, shipped with a structured source trail.

#### Page meta（侧栏 4 项）
- **Use cases**: NMPA / FDA dossier · NRDL · Reimbursement · Publications
- **Sources**: Indexed literature, registries, payer databases, prior submissions
- **Output**: RWE reports · SLR · HEOR models · Value dossier
- **Trail**: Every claim: year, source, signed reviewer

#### Capabilities（4 卡）

**A. Real-world evidence (RWE)**
Structured RWE drawn from registries, EHR datasets and post-market data — bridged across China and US contexts where the data permits.
Bullets: China registry feasibility · US claims / EHR partner network · Comparator construction · Bias & confounding analysis

**B. Registry design & analysis**
Prospective and retrospective registries — protocol drafting, IRB packets, statistical analysis plans, and ongoing PITL reporting.
Bullets: Registry protocol drafting · IRB / ethics packet · SAP & analysis cadence · PITL audit log

**C. Systematic literature review**
AI-assisted retrieval across 10k+ sources in a week, not a quarter — with PRISMA-aligned reporting and physician-curated synthesis.
Bullets: PRISMA-aligned protocol · AI retrieval + de-duplication · Physician-curated synthesis · Citation-level source trail

**D. HEOR & value dossier**
Cost-effectiveness, budget-impact and value frameworks tuned to NRDL, ICER and provincial-payer environments.
Bullets: Cost-effectiveness models · Budget-impact analysis · NRDL / ICER value dossier · Sensitivity & scenario testing

#### Evidence tiers（强制三层,与 §2.8 / §3.8 对齐）

- **Verified**: Year, source, and named physician reviewer attached. Quotable in dossiers, decks and external publications.
- **In Development**: Source identified, analysis in flight, no physician sign-off yet. Internally usable; not for external claims.
- **On Request**: Available under NDA — typically engagement-specific data, payer-sensitive analyses, or pre-publication results.

#### Source-trail process（5 步流程,可视化呈现）

1. **Question** — Sponsor brings one evidence question
2. **Retrieve** — AI-assisted retrieval against indexed sources
3. **Curate** — Physician curates, drops irrelevant, flags confounding
4. **Sign** — Named clinician signs each claim with year + source
5. **Audit log** — Exportable trail accompanies every deliverable — version, reviewer, source, timestamp.
   *Kicker*: "The audit log is part of the deliverable, not a side artifact you have to ask for later."

#### CTA
**Title**: Bring us one evidence question. We'll show you the source trail.
**Body**: Thirty-minute scoping call with a physician-trained evidence lead. We'll come back with a sample source trail from a comparable engagement.

---

### §3b.2 Physician Engagement — `/solutions/physician-engagement`

#### Hero
**Eyebrow**: `Business Block · 02`
**Title**: A 3.33M+ physician network — for advisory, KOL, CME, and consented review.
**Subhead**: When you need a named clinician on the record — for a dossier, a publication, an advisory board, or a reviewer panel — we have the network and the consent infrastructure to do it cleanly.

#### Page meta
- **Network**: 3.33M+ verified physicians, CN + US
- **Use cases**: Advisory · KOL · CME · Reviewer panels
- **Consent**: Engagement-specific, auditable, revocable
- **Output**: Signed reviewer reports, advisory minutes, CME completion

#### Engagement types（4 卡）

**A. Advisory boards**
Single-instance and standing advisory boards across therapeutic areas — agenda, recruitment, facilitation, and signed minutes.
Bullets: Single & standing boards · Agenda & briefing book · Independent facilitation · Signed minutes + audit trail

**B. KOL mapping & engagement**
Tier-1 KOL identification, segmentation by influence and reach, and structured engagement programs across publications and congress.
Bullets: Tier-1 KOL mapping · Influence / reach scoring · Engagement plan · Conflict & disclosure scan

**C. CME-accredited programs**
Independent, CME-accredited continuing medical education — designed for physician learning, not promotion.
Bullets: CME accreditation support · Independent content review · Multi-modal delivery · Completion & outcomes log

**D. Consented reviewer panels**
Named reviewer panels for dossiers, manuscripts and pre-submission packages — every reviewer signs, every change is logged.
Bullets: 5–9 named reviewers per panel · Engagement-specific consent · Per-claim sign-off log · Reviewer disclosure register

#### The network（按地理分层,⚑ 数字待 IR 终审）

| 层 | 标签 | 数量 | 覆盖比例 |
|---|---|---|---|
| 1 | Greater China · tier-1 AMCs | 2.1M+ | ⚑ 88% |
| 2 | Greater China · tier-2 / community | 0.9M+ | ⚑ 64% |
| 3 | United States · academic | 210k+ | ⚑ 42% |
| 4 | United States · community | 120k+ | ⚑ 28% |
| 5 | EU / UK / JP | 95k+ | ⚑ 22% |

> *实现说明*：覆盖比例（pct）字段在 v4.2 之前为内部估算,本次列入 ⚑ 强制 IR 签字; CMS 阶段对接 `ProofPoint` schema 后才能上线。

#### Consent & ethics 4 段（强制,合规底线）

- **Named** — Every reviewer is named. *No anonymous panels. Every clinician on a deliverable signs and discloses, every time.*
- **Consented** — Engagement-specific, auditable, revocable
- **Logged** — Per-claim sign-off log + reviewer disclosure register
- **Disclosed** — Every paid engagement is disclosed in the deliverable and the audit log.

> *Kicker*: "The reason a physician will work with us a second time is the same reason a regulator will accept the deliverable: the consent infrastructure is real."

#### CTA
**Title**: Need a named physician on record by next quarter? Tell us the spec.
**Body**: A 30-minute scoping call. We come back with feasibility on advisor profile, geography, therapeutic area, and timing.
**Primary CTA**: Request an advisory panel

---

### §3b.3 Medical Communications — `/solutions/medical-communications`

#### Hero
**Eyebrow**: `Business Block · 03`
**Title**: Bilingual medical communications, signed off on both sides of the Pacific.
**Subhead**: Publications, congress materials and localized content — produced in EN and CN, reviewed by clinicians in both markets, compliant by construction.

#### Page meta
- **Output**: Manuscripts · Congress posters · Symposia · Localized content
- **Languages**: EN · 简体中文 · 繁體中文 · ja-JP on request
- **Reviewers**: Dual-market physician QC
- **Compliance**: PhRMA / EFPIA / RDPAC-aware review

#### Capabilities（4 卡）

**A. Peer-reviewed publications**
Manuscript drafting, journal targeting, response-letter support — physician-reviewed at every revision pass.
Bullets: Target journal selection · Manuscript drafting & revision · Response-letter library · Authorship & disclosure

**B. Congress posters & symposia**
Posters, oral presentations, satellite symposia — produced for ASCO, ESMO, AHA, CSCO, CMHA and more.
Bullets: Poster & oral content · Satellite symposium production · Bilingual booth assets · Congress reporter coverage

**C. Bilingual localization**
EN ↔ CN scientific localization with terminology consistency, dual-physician QC, and a signed source trail.
Bullets: Scientific translation · Terminology consistency layer · Dual-physician QC · Reviewer disclosure log

**D. Compliance-aware QC**
Pre-physician filtering for off-label risk, fair-balance gaps and disclosure issues — tuned to dual-market codes.
Bullets: Off-label flagging · Fair-balance check · Disclosure & funding scan · Code-of-practice mapping

#### Bilingual workflow（双轨制说明）

> *Kicker*: "The artifact you ship is a single bilingual deliverable. The work behind it is two parallel reviewer tracks that meet in the middle."

工作流强调 EN reviewer track 与 CN reviewer track 并行,在 final QC 阶段会合,确保 dual-market sign-off 在同一交付物上同时呈现。

#### CTA
**Title**: A bilingual artifact in two weeks. Lowest commitment way to work with us.
**Body**: The Cross-Border Content Sprint produces one medically reviewed, bilingual artifact in 14 days — flat fee, signed source trail.
**Primary CTA**: Start a content sprint

---

### §3b 三页通用约束

| 约束 | 适用 | 备注 |
|---|---|---|
| Hero subhead 必含"physician sign-off" / "PITL" / "named clinician" 三选一 | §3b.1 / §3b.2 / §3b.3 | 强化 PITL 叙事 |
| Capabilities 4 卡必填 bullet 4 项 | 三页 | 不得空 bullets |
| 不得提及未签字 metric | 三页 | ⚑ 必须显式标记 |
| 与 §1.3b 速览交叉引用 | 三页 | Hero 右列卡 click → 详情页 hero 必须叙事一致 |
| 三页 hero meta 4 项必填 | 三页 | Use cases / Sources / Output / Trail（或对等字段） |

---

## §1.6 AI-Enabled Delivery（重写版）

> **变更**: URL 从 `/ai-enabled-delivery` 改为 `/ai-platform`（IA v2.0 §1）
> **新增**: 4 步 PITL 流程图 · 合规边界（do / do-not 双列）· 与 Homepage `#ai` 区双层引用

### §1.6.0 元数据

- **Page URL**: `/ai-platform`
- **301 重定向**: `/ai-enabled-delivery` → `/ai-platform`（Cloudflare Pages `_redirects` 配置,W1 上线）
- **Top Nav 标签**: `AI Platform`（与 URL 同名,简洁原则）
- **JSON-LD schema**: `Service` + `Product`（面向技术 SEO）

### §1.6.1 Hero

**Eyebrow**: `AI-Enabled Delivery`
**Headline**: Faster, more structured, medically reviewed delivery.
**Subhead**: MedSci pairs AI with Physician-In-The-Loop (PITL) review at every step. We don't replace experts — we let them work on the highest-leverage decisions.

### §1.6.2 How we combine AI + PITL（导引段）

Every project runs through a four-stage cycle. Each stage has explicit AI-only and physician-only checkpoints, with a shared audit log spanning the whole flow.

### §1.6.3 4 步 PITL 流程图（StepDiagram 组件）

| # | Step | AI 职责 | Physician 职责 |
|---|---|---|---|
| **01** | **Ingestion** | Parse, structure, tag clinical literature, registries, sponsor data | Validate scope and source quality |
| **02** | **Gap Analysis** | Identify evidence gaps vs. regulatory targets | Validate gap framing |
| **03** | **PITL Review** | Track changes, learn patterns | Line-by-line review of AI drafts |
| **04** | **Deliverable** | Generate sponsor-ready package with audit log | Joint sign-off, final QC |

### §1.6.4 三能力块（保留 v4.1 主体,更新合规措辞）

#### A. Faster Evidence Review
RWE / registry / literature synthesis with AI extraction and PITL validation.
Use cases: SLR · RWE bridging · regulatory dossier evidence

#### B. AI-Assisted Scientific Drafting
Manuscript, dossier, regulatory submission drafts with audit trails.
Use cases: ICMJE-compliant manuscript · investigator brochure · NMPA / FDA submission

#### C. AI-Enhanced Medical Content Production
Bilingual congress, publication, and localization workflows.
Use cases: ASCO / ESMO posters · congress symposia · bilingual physician materials

### §1.6.5 合规边界（**强制双列,Compliance Callout 组件**）

#### What we do not claim
- "zero-hallucination"
- "100% accurate"
- "AI doctor"
- "cures" or "guarantees"
- "industry-leading" / "best-in-class" / "world-class"
- "revolutionary"

#### What we do claim, with audit trails
- Faster review cycles, by N% (verified per project)
- Higher consistency in bilingual delivery
- Traceable provenance for every AI output

> *实现说明*：W2-05 forbiddenPhrases.ts 已收录上述禁词列表; check-page.js Gate 16 自动扫描。任何页面出现禁词阻断发布。

### §1.6.6 技术原理（适度,面向反尽调）

- **Retrieval 架构**: Indexed corpus + dense / sparse hybrid retrieval; 不依赖单一 LLM 推理
- **审稿日志**: 每条 AI 输出关联 source citation + reviewer signature
- **双语 QC**: EN / CN 双 reviewer track 并行,final merge 在同一交付物
- **数据驻留**: 客户数据按合同地域驻留（中国 / 美国 / EU 三选一）,不混合

### §1.6.7 与 Homepage `#ai` 区的双层关系

| 层级 | 位置 | 内容 |
|---|---|---|
| **速览** | Homepage `#ai` 区 | 3 段简介 + 4 步 PITL 流程图 + 单 CTA |
| **详尽** | `/ai-platform` 详情页 | 本节全部内容 + Case references + 技术原理 + 合规边界 |

两处文案不重复,链接互通。Homepage `#ai` 区底部 CTA "See the AI Platform" 链至 `/ai-platform`。

### §1.6.8 Case references

筛选 Case Studies 中 `serviceLines: ['platform']` 或带 AI tag 的案例,作为详情页底部交叉引用。

### §1.6.9 CTA

**Title**: Talk to an Expert
**Body**: 30-minute call with our PITL lead. We'll walk through one evidence or content workflow, end-to-end.
**Buttons**: `Book a discovery call` / `See how we audit AI`

### §1.6.10 禁忌

- ❌ 不得在任何 §1.6 文案中出现 §1.6.5 列出的禁词
- ❌ AI claim 不得脱离 PITL 解释独立呈现
- ❌ 不得使用 "MEDSCI" 全大写
- ❌ 不得宣称 "AI 替代 physician"; 必须使用 "AI augments physician decision"
- ❌ 不得给出绝对加速倍数（如 "10x faster"）; 改用 "by N%（verified per project）"

---

## 附录 A · 审批链与 ⚑ 待签字清单

### A.1 法务审批（强制）

- §1.6 全章节（合规边界）
- §3b 三页全部 hero subhead 与 capability 描述
- §1.3b 4 业务块速览文案

### A.2 IR 审批（强制）

- §1.3b stat strip 3 项数字
- §3b.2 The Network 5 行覆盖比例
- §3b 三页内任何与 2415.HK 披露相关的措辞

### A.3 ⚑ 待签字占位清单

| 章节 | 占位 | 签字方 |
|---|---|---|
| §1.3b.3 | stat strip 3 项 approvedBy | IR + Legal |
| §3b.2 | The Network 5 行 pct 字段 | IR |

---

## 附录 B · 与 v4.1 的关系

v4.1 中下列章节继续生效,**不需要在 v4.2 重复**:
- §0 阅读指南
- §1.1–§1.5 / §1.7–§1.9 Homepage 模块
- §2 Entering China
- §3 Going Global (US)
- §4 Cross-Border Sprint
- §5 Other Engagements
- §6 Appendix

发布时与 v4.1 .docx 配套使用。CMS 阶段把 v4.1 + v4.2 合并为 v4.3 .docx 单一文档。

---

> 本文档 v4.2 完成后,触发 W1 B0/B1 原型批次:
> - B0 = 本文档 §1.3b + §3b 已回灌(完成)
> - B1 = §1.6 重写 + `/ai-platform` 原型实现 + 301 上线
