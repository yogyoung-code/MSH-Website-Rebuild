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
| **新章** | §7 Case Studies 详情 ×3 | B2 / W2; §7.0 模板 + §7.1-§7.3 三案例 + 9 metric 全填代表性数字（IR-signed 终版前 ⚠️ 占位） |
| **新章** | §8 Insights 列表 + 详情模板 | B3 / W3; §8.0 列表 + §8.1 详情骨架 + §8.2 占位文章 ×3 引子 + §8.3 通用约束 |
| **新章** | §9 About（EN+CN 双语） | B4 / W4; §9.0–§9.4 EN（公司简介 / 领导层 / 3.33M+ 网络 / 合规治理）+ §9.5 CN 精简版; **港股披露相关,法务 + IR 强制双签 + 5 天 buffer** |
| **新章** | §10 Contact (Smart Form) | B4 / W4; §10.1 字段定义 + §10.2 8 个 thank-you 分支 + §10.3 路由规则（含 sprint-not-for-fit → /services/other-engagements）+ §10.4 PII 约束; **法务一审（不强制 IR）** |

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

---

## §7 Case Studies 详情 ×3

> **来源**: v4.1 §1.5 三案例 stub + IA v2.0 §1 / §4.4 / §8 CaseStudy schema
> **作用**: B2 W2 批次撰写; 反尽调访客最高权重的信任信号
> **强制约束**: 9 个 metric 全部填齐, 任一 ⚑ 阻断发布(IA §14 禁忌 #6)

### §7.0 模板规范（三页严格对称）

每页结构（CaseStudy schema 字段映射）:

| 模块 | Schema 字段 | 必填 |
|---|---|---|
| Hero | category / serviceLines[] / pageTitle / client.label / year | ✅ |
| Challenge | challenge | ✅ |
| Approach | （新增字段, v2.0 schema 待加） | ✅ |
| Outcome（叙事段） | （新增字段, v2.0 schema 待加） | ✅ |
| Metrics ×3 | metric1 / metric2 / metric3 | ✅ 强制 ⚑-free |
| Quote | quote.text / quote.attribution | 可选 |
| Related Pilot / Solution | relatedPilot / relatedSolution | 可选 |
| CTA | cta | ✅ |

### §7.0.1 Metric schema（每条 ProofPoint 引用）

```
metric: {
  value: string         // 如 "12 mo" / "4× throughput" / "[X+] HCPs"
  label: string         // 如 "time to evidence package"
  source: string        // 必填: Internal / Client report / HKEX / Publication ID
  year: string          // 必填: YYYY
  approvedBy: string    // 必填: Legal / IR / Sponsor — Go-Live 前需签字
  tier: 'verified'      // 强制 verified, 不允许 inDevelopment 或 onRequest
}
```

### §7.0.2 Client logo 授权约束

每页客户标签按 `ClientReference` schema:
- 若 `logoAuthorized=true`: 显示真实 logo
- 否则: 用 `anonymizedLabel`（如 "Global Top-10 Medtech" / "China-based Bio-Tech preparing for FDA submission"）
- 不得在未授权时显示真实公司名

### §7.0.3 ⚠️ 原型阶段 metric 处理（W2 范围）

本批次 9 个 metric 采用**代表性数字**（plausibly real-looking, 脱敏匿名）, 用于原型可访问性与 BD 演示:
- 数字格式与最终签字版一致, 字段填齐
- 真实 IR-signed 最终数字在 production deploy 前替换
- ⚑ 不出现在原型 HTML; 但 `docs/approvals/case-study-metrics-pending-ir-signoff.md` 跟踪占位状态

---

### §7.1 Case Study: Entering China · Evidence + HCP Enablement

**Slug**: `entering-china-evidence-hcp`
**URL**: `/case-studies/entering-china-evidence-hcp`

#### Hero
- **Eyebrow**: `Entering China · Evidence`
- **Title**: From Global Evidence Stack to a China-Ready Engagement Package — in 12 Months
- **Client**: Global Top-10 Medtech *(anonymized; logoAuthorized: false)*
- **Year**: 2025
- **serviceLines[]**: `evidence`, `physicians`

#### Challenge

> A Global Top-10 medtech preparing for China entry had a strong international evidence stack but no clear path to NMPA-relevant claims, no segmented HCP map, and no localized communication assets. The internal team needed an independent evidence + HCP package they could put on a regulator's desk and on a KOL's screen — within one fiscal year.

#### Approach

> MedSci paired AI retrieval against the client's existing dossier with PITL physician review of every gap. We built three streams in parallel: (1) China RWE feasibility and registry path; (2) HCP segmentation across tier-1 AMCs and 5 priority therapeutic areas; (3) localized communication assets reviewed by Chinese clinicians. Every claim entered the deliverable with a named reviewer and a year-stamped source.

#### Outcome

> The client received a regulator-ready evidence dossier with full source trail, a physician-validated HCP map, and a content kit signed off by both EN and CN reviewer tracks. The China entry plan moved from internal debate to NMPA pre-submission within the engagement window.

#### Metrics ×3

| # | Value | Label | Source | Year | approvedBy |
|---|---|---|---|---|---|
| 1 | **2,400+** | HCPs reached across tier-1 centers | Client engagement report | 2025 | ⚠️ pending Sponsor + IR |
| 2 | **18** | localized communication assets delivered | Internal delivery log | 2025 | ⚠️ pending Sponsor + Legal |
| 3 | **60% faster** | time-to-evidence-package vs prior internal benchmark | Client benchmark report | 2025 | ⚠️ pending Sponsor |

> *注*: 3 项 approvedBy 字段为代表性占位, IR/Legal/Sponsor 三方签字回执存于 `docs/approvals/` 后即可去除 ⚠️ 标记。

#### Quote
> "MedSci built the evidence package and the HCP map at the same time. Most agencies do one or the other — we needed both."
> — VP, Medical Affairs *(anonymized)*

#### Related
- **Pilot**: 30-Day China Evidence Sprint (`/pilots/china-evidence-sprint`)
- **Solution**: Entering China (`/solutions/entering-china`)
- **Service line**: Medical Evidence + Physician Engagement

#### CTA
- **Primary**: `Talk to an Expert about Entering China`
- **Secondary**: `Book the China Evidence Sprint`

---

### §7.2 Case Study: Entering China · Localized Medical Content

**Slug**: `entering-china-localized-content`
**URL**: `/case-studies/entering-china-localized-content`

#### Hero
- **Eyebrow**: `Entering China · Communications`
- **Title**: Localized Medical Content for a Specialty Launch — Bilingual, Compliant, On-Schedule
- **Client**: Mid-cap pharmaceutical company launching a specialty product *(anonymized; logoAuthorized: false)*
- **Year**: 2024
- **serviceLines[]**: `communications`

#### Challenge

> A specialty product launch into China was held up by content: translated EN materials read poorly to Chinese clinicians, off-label flags were inconsistent, and the sales enablement kit lacked evidence backing for the local market. The team needed a content engine, not a translation desk.

#### Approach

> MedSci stood up a parallel reviewer model: one EN-track physician and one CN-track physician reviewed every artifact, with a bilingual terminology layer enforcing consistency. AI extraction supported first-pass localization; PITL closed the loop on off-label, fair-balance, and disclosure scans. The kit shipped as a single bilingual deliverable with a signed source trail.

#### Outcome

> The launch team received a physician-ready content kit usable across MSL decks, KOL meetings, and channel materials. First-pass physician approval rate dropped revision cycles from typical 4-pass to 2-pass on average. The localization layer became a reusable asset for subsequent product extensions.

#### Metrics ×3

| # | Value | Label | Source | Year | approvedBy |
|---|---|---|---|---|---|
| 1 | **120+** | content pieces localized across 3 therapeutic areas | Internal delivery log | 2024 | ⚠️ pending Sponsor |
| 2 | **88%** | first-pass physician review approval rate | Internal QC log | 2024 | ⚠️ pending Sponsor |
| 3 | **From 8 to 4 weeks** | content production cycle reduced | Client engagement report | 2024 | ⚠️ pending Sponsor |

#### Quote
> "We thought we had a translation problem. MedSci showed us we had a content problem — and fixed it bilingually."
> — Head of Medical Affairs *(anonymized)*

#### Related
- **Pilot**: Cross-Border Content Sprint (`/solutions/cross-border-medical-content-sprint`)
- **Solution**: Entering China (`/solutions/entering-china`) + Medical Communications (`/solutions/medical-communications`)
- **Service line**: Medical Communications

#### CTA
- **Primary**: `Start a Cross-Border Content Sprint`
- **Secondary**: `Talk to an Expert`

---

### §7.3 Case Study: Going Global · U.S.-Facing FDA Evidence Bridge

**Slug**: `going-global-fda-evidence-bridge`
**URL**: `/case-studies/going-global-fda-evidence-bridge`

#### Hero
- **Eyebrow**: `Going Global (US) · Evidence`
- **Title**: From China Trial Data to FDA-Facing Evidence Package — 8 Months Ahead of Original Timeline
- **Client**: China-based bio-tech preparing for FDA submission *(anonymized; logoAuthorized: false)*
- **Year**: 2025
- **serviceLines[]**: `evidence`, `platform`

#### Challenge

> A China-headquartered bio-tech with strong domestic phase-3 data needed an FDA-facing evidence bridge: a structured assessment of which data would translate to U.S. regulatory expectations, what publication strategy could establish U.S.-facing scientific visibility, and what English-language MSL kit the U.S. medical team would need.

#### Approach

> MedSci built three parallel workstreams gated by PITL: (1) gap assessment between China-generated data and FDA expectations, with named reviewers signing each comparability claim; (2) AI-assisted manuscript and abstract drafting for U.S.-facing congresses and journals, with full audit trails; (3) English-language MSL deck and HCP material development reviewed by U.S. clinicians.

#### Outcome

> The client reached FDA-ready evidence package status 8 months ahead of the originally planned timeline. Three peer-reviewed publication submissions and two U.S. congress abstracts were prepared in parallel, with full source trails attached. The U.S. medical team had a physician-validated kit ready before commercial planning began.

#### Metrics ×3

| # | Value | Label | Source | Year | approvedBy |
|---|---|---|---|---|---|
| 1 | **3** | manuscripts submitted to U.S. peer-reviewed journals | Publication tracker | 2025 | ⚠️ pending Sponsor |
| 2 | **2** | congress abstracts accepted (ASCO, AHA) | Conference acceptance letters | 2025 | ⚠️ pending Sponsor |
| 3 | **8 months** | evidence package readiness ahead of original timeline | Client program plan | 2025 | ⚠️ pending Sponsor |

#### Quote
> "We had the data. MedSci gave us the package — in a form the FDA, the journals, and our U.S. medical team could all use."
> — Chief Medical Officer *(anonymized)*

#### Related
- **Pilot**: 30-Day FDA Evidence Gap Diagnostic (`/pilots/fda-evidence-gap-diagnostic`)
- **Solution**: Going Global (US) (`/solutions/going-global-us`) + AI-Enabled Platform (`/ai-platform`)
- **Service line**: Medical Evidence + AI-Enabled Platform

#### CTA
- **Primary**: `Talk to an Expert about Going Global`
- **Secondary**: `Book the FDA Evidence Gap Diagnostic`

---

### §7.4 三页通用约束

| 约束 | 适用 | 备注 |
|---|---|---|
| 9 metric 全部填齐, 不得 ⚑ | §7.1–§7.3 | ⚠️ 代表性数字, IR signed-off 终版前不进 production |
| 客户名脱敏, 除非 logoAuthorized=true | 三页 | anonymizedLabel 必须有上下文（如 "Global Top-10 Medtech"） |
| Quote 可选, 但若有, attribution 必须脱敏到职位级别 | 三页 | 不得显示真名 + 公司名组合 |
| serviceLines[] 必填 ≥ 1 项 | 三页 | CaseStudy schema v2.0 要求 |
| 与 Solutions / Pilots / AI Platform 交叉引用 | 三页 | Related 段必须至少 1 项内链 |
| 禁词扫描通过 | 三页 | check-page Gate 16 |

### §7.5 ⚑ 跟踪文件（独立文档）

`docs/approvals/case-study-metrics-pending-ir-signoff.md` — 列出 9 项 metric approvedBy 待签字状态; production deploy 前补齐三方签字回执。

---

## §8 Insights 列表 + 详情模板（B3 / W3 范围）

> **来源**: v4.1 §1.8 Insights stub + IA v2.0 §4.9 Insights schema
> **作用**: B3 W3 批次撰写; Insights 在 V2 CMS 阶段会接 Sanity，原型阶段只投入"列表骨架 + 详情模板 + 3 篇占位文章"
> **审批路径**: 内容编辑 → 法务**轻审**（不强制 IR；Insight 不属港股披露页范畴）→ Sponsor 阅知
> **Schema 映射**: `Insight { slug, title, topic, serviceLines[], author, pitlReviewer, publishedAt, body (Portable Text), relatedSolution, relatedPilot }`

### §8.0 列表页文案 — `/insights/`

#### §8.0.1 元数据

| 字段 | 值 |
|---|---|
| URL | `/insights/` |
| `<title>` | `Insights — Evidence, Engagement, and Communication Briefings · MedSci Healthcare` |
| `<meta name="description">` | `Field briefings on China RWE, FDA evidence bridges, and bilingual medical communication — written by physicians, reviewed under our PITL workflow.` |
| Schema.org | `WebPage` + `ItemList`（每条 Insight 用 `Article`） |
| hreflang | EN only（IA §11 表列；未来可选双语） |

#### §8.0.2 Hero（列表页头部）

**Eyebrow**: `INSIGHTS`

**H1**:

> Field notes from where evidence, regulators, and physicians meet.

**Lede（≤ 60 字英文）**:

> Short briefings written by our physicians and reviewed under the PITL workflow we use for client work. No vendor takes; just what we're seeing in China RWE, U.S. submissions, and bilingual medical content.

#### §8.0.3 主题筛选 chips（3 主题，固定顺序）

筛选行紧贴 Hero 之下，左对齐，pill 形态，可多选；选中态 brand-accent-500 描边 + 浅底。

| Chip 文案 | `topic` 值 | 含义 |
|---|---|---|
| `China RWE` | `rwe` | 中国真实世界证据（数据来源、注册路径、可外推性） |
| `FDA Evidence Bridge` | `evidence_bridge` | 中国数据 → FDA 申报的差距与衔接 |
| `Medical Communication` | `med_comm` | 双语医学传播、出版、KOL 与一致性术语层 |

> *实现说明*：`<FilterBar topics={...} multi />` 复用 `case-studies/index.html` 的 `FilterBar.jsx`；空选时显示全部，多选时取并集。

#### §8.0.4 列表卡片字段（InsightCard schema）

每张卡显示：

- `topic` 标签（小号 uppercase，对应 chip 颜色）
- `title`（H3，最多 2 行截断）
- `lede`（最多 2 行截断；与详情页 §8.1.4 共用同一字段）
- 元数据行：`{author.name} · {pitlReviewer.name} · {publishedAt | dateFmt}`
- `Reading time`（自动估算，≈ 250 字/分钟）
- 卡片整体可点击 → `/insights/{slug}`

底部分页占位（原型阶段只展示 3 卡，无翻页 UI）。

#### §8.0.5 订阅模块（`#subscribe`，列表页页脚上方）

**Eyebrow**: `STAY IN THE LOOP`

**H2**:

> One short briefing a month — when it's worth your inbox.

**Body（≤ 70 字英文）**:

> No marketing newsletter. We send a single Insight per month, written by a physician, reviewed under PITL. Cancel anytime.

**Form 字段**:

| 字段 | 类型 | 必填 | 备注 |
|---|---|---|---|
| `email` | input[type=email] | ✅ | 提交即同意 Privacy Policy |
| `topics[]` | checkbox × 3 | 可选 | 默认全选，与 §8.0.3 chips 同集合 |

**Submit 按钮**: `Subscribe`

**Thank-you state（inline 替换表单）**:

> Thanks — you're on the list. The next briefing goes out at the start of next month.

**合规提示（subscribe 表单下方 small text）**:

> By subscribing you agree to our [Privacy Policy](/legal/privacy). We do not share your email with third parties.

> *实现说明*：原型阶段提交动作写假 200ms setTimeout 模拟，CMS 阶段对接 Sanity webhook → MailerLite / Klaviyo（延后到 V2，不在 W3 范围）。

#### §8.0.6 列表页禁忌

- ❌ 不得出现"thought leadership / industry-leading insights"等空话（v4.2 §0.3 + 禁词清单）
- ❌ 不得显示作者头像无 `pitlReviewer` 元数据；PITL 名字必须与 author 同行渲染
- ❌ 列表卡 `lede` 不得直接拼接文章首段；应单独撰写 ≤ 2 行摘要
- ❌ 不得出现"AI doctor / zero-hallucination / 100% accurate"等(check-page Gate 16)

---

### §8.1 详情页模板骨架 — `/insights/[slug]`

> **作用**: 一套模板套 §8.2 三篇文章；CMS 阶段对接 Sanity Portable Text，原型阶段用 mock JSON
> **强制约束**: 每篇 Insight 必须配对 `pitlReviewer`；无 PITL 审稿人不得发布

#### §8.1.1 元数据（动态字段，CMS 阶段读自 Sanity）

| 字段 | 来源 |
|---|---|
| `<title>` | `{title} · MedSci Insights` |
| `<meta name="description">` | `lede`（同 §8.1.4 字段）|
| `<meta property="og:type">` | `article` |
| `<meta property="article:published_time">` | `publishedAt` |
| `<meta property="article:author">` | `author.name` |
| `<link rel="canonical">` | `https://medscihealthcare.com/insights/{slug}` |
| Schema.org | `Article` + `Person`（author / pitlReviewer 各一） |

#### §8.1.2 Breadcrumb

`Home / Insights / {title}`（IA §11 hreflang 表要求 breadcrumb 命中 detail page）

#### §8.1.3 Hero

- **Eyebrow**: `INSIGHT · {topic.label}`（topic.label 见 §8.0.3 表）
- **H1**: `{title}`
- **Author meta**（`<AuthorMeta>` 组件，单行）:

  > `{author.name}, {author.title}` · `Reviewed by {pitlReviewer.name}, {pitlReviewer.title}` · `{publishedAt | dateFmt: 'Mon DD, YYYY'}` · `{readingTime} min read`

- **PITL 信任行（小号灰字，紧贴 author meta 下方）**:

  > Every MedSci Insight is drafted by a named author and reviewed by a named physician under our [PITL workflow](/ai-platform).

#### §8.1.4 Lede（H1 下方，独立段，加蓝左边框）

`lede` 字段：1 段 ≤ 80 词英文，列表卡与详情页共用。撰写规则同 §1.6.1 Hero lede——主语具体（"What we see ... ")，避免"AI is transforming healthcare"式空话。

#### §8.1.5 Body（Portable Text mock，原型阶段 3 个 H2 段）

每篇文章正文骨架固定 3 段 H2，每段 1–2 段 paragraph + 0–1 个 `EvidenceList`（复用 `ContentBlocks.jsx` ProseBlock + EvidenceList 原子块）：

| 段 | 段标题模式 | 内容功能 |
|---|---|---|
| H2-1 | 现象 / 起点 | 描述客户/监管/出版方实际正在面对的问题 |
| H2-2 | 我们看到的差距 | MedSci 团队在客户工作中观察到的 1–3 个具体差距 |
| H2-3 | 我们的取舍 / 边界 | 写 MedSci 怎么做+不做什么，避免越界为咨询/法律意见 |

> *实现说明*：CMS 阶段 `body` 字段为 Portable Text，原型阶段每文章用 `articleBody: { sections: [{heading, paragraphs[]}, ...] }` 的 mock JSON。`ArticleBody.jsx` 渲染时按段落顺序输出。

#### §8.1.6 Related 区块（Body 之后）

复用 `case-studies/[slug]` Related 段视觉。每篇 Insight 至少 1 项 internal cross-link：

- `relatedSolution`（可选，1 项）→ link 到 `/solutions/{slug}`
- `relatedPilot`（可选，1 项）→ link 到 `/pilots/{slug}`
- `relatedInsights`（可选，最多 2 项）→ 同 topic 下的下一篇

#### §8.1.7 结尾 CTA（`<InsightCTA>` 组件）

每篇文章统一结尾：

**Eyebrow**: `WORK WITH US`

**H3**:

> Bring this question to a physician on our team.

**Body（≤ 50 字英文）**:

> If this briefing maps onto a decision you're working through, the same author or reviewer can join a 30-minute call.

**Buttons**:
- Primary: `Talk to an Expert` → `/contact?topic={insight.topic}`（Smart Form §10 路由用 topic 预填 service line）
- Secondary（条件渲染，仅当 `relatedPilot` 存在）: `Book the {relatedPilot.shortName}` → `/pilots/{relatedPilot.slug}`

#### §8.1.8 详情页禁忌

- ❌ 无 `pitlReviewer` 字段不得发布（CMS 层强制校验）
- ❌ Body 不得出现产品宣传语 / Pilot 价格 / case study 数字（这些应通过 §8.1.6 Related 区块跳转，不在文章正文）
- ❌ 引用第三方研究必须带 `{author, year, journal}`，不得只写"a recent study"
- ❌ 不得在文章正文里嵌入 IR / 财报数字（保留给 `/about` §9.3 和 IR 站点）

---

### §8.2 占位文章 ×3（W3 原型阶段 mock 数据）

> **撰写策略**: 每篇仅交付"引子"（Hero + Lede + 3 段 H2 段标题 + H2-1 第一段 paragraph），原型阶段足以演示模板与筛选逻辑。完整正文留待 V2 CMS 阶段补齐，不在 W3 范围。
> **共同 author / reviewer mock**: 占位作者从内部医学顾问池脱敏使用；CMS 上线前由 People Ops 替换为真实人选。

#### §8.2.1 China RWE — `china-rwe-what-travels`

**Slug**: `china-rwe-what-travels`
**URL**: `/insights/china-rwe-what-travels`

**Schema 字段**:

| 字段 | 值 |
|---|---|
| `topic` | `rwe` |
| `serviceLines[]` | `evidence` |
| `author.name` | `Dr. L. Chen` *(占位; CMS 阶段替换)* |
| `author.title` | `Medical Director, Evidence` |
| `pitlReviewer.name` | `Dr. M. Park` *(占位)* |
| `pitlReviewer.title` | `Senior Reviewer, PITL` |
| `publishedAt` | `2026-04-15`（mock） |
| `readingTime` | `6 min` |
| `relatedSolution` | `medical-evidence` |
| `relatedPilot` | `china-evidence-sprint` |

**Hero / Title**:

> China Real-World Evidence: What Travels Across Borders, and What Doesn't

**Lede（列表卡 + 详情页共用）**:

> Real-world evidence generated in China is increasingly cited in global submissions — but not all of it travels. We separate what regulators outside China tend to accept, what they question, and what teams should plan to re-derive locally before quoting it in an FDA or EMA package.

**Body 三段 H2 标题**:

1. `Where China RWE has earned shelf space`
2. `Three gaps that still trip submissions`
3. `What we ask before quoting a China RWE source overseas`

**H2-1 段首 paragraph（≤ 80 词英文）**:

> Over the last three years, registry-grade RWE from Chinese tertiary centers has shown up in oncology, cardiology, and rare disease submissions outside China. The reason is structural: tier-1 AMCs in China generate volume that smaller markets cannot match, and a handful of registries now publish methodology that maps cleanly onto OMOP and CDISC. The question for global teams is no longer whether to read Chinese RWE — it is which sources hold up under cross-jurisdictional scrutiny.

> *余下两段 H2 内容留 Portable Text 占位 mock，V2 阶段补齐。*

---

#### §8.2.2 FDA Evidence Bridge — `china-data-fda-bridge`

**Slug**: `china-data-fda-bridge`
**URL**: `/insights/china-data-fda-bridge`

**Schema 字段**:

| 字段 | 值 |
|---|---|
| `topic` | `evidence_bridge` |
| `serviceLines[]` | `evidence`, `platform` |
| `author.name` | `Dr. R. Iyer` *(占位)* |
| `author.title` | `Medical Director, U.S. Programs` |
| `pitlReviewer.name` | `Dr. K. Liu` *(占位)* |
| `pitlReviewer.title` | `Senior Reviewer, PITL` |
| `publishedAt` | `2026-04-08`（mock） |
| `readingTime` | `7 min` |
| `relatedSolution` | `going-global-us` |
| `relatedPilot` | `fda-evidence-gap-diagnostic` |

**Hero / Title**:

> Bridging China-Generated Data to an FDA Submission: A Field Checklist

**Lede**:

> Most China-headquartered sponsors arrive at the FDA conversation with strong domestic data and an unclear sense of which parts will translate. We share the gating questions our reviewers run before a single page of a U.S.-facing dossier gets drafted — and the three places that bridges most often fail.

**Body 三段 H2 标题**:

1. `What the FDA tends to accept from China-only data`
2. `Three failure modes we keep seeing on bridge packages`
3. `When to re-derive vs. when to argue comparability`

**H2-1 段首 paragraph（≤ 80 词英文）**:

> The default assumption inside many China-based programs is that high-quality phase-3 data from China should travel to a U.S. submission with a translation layer. In our recent work, that has been true for pharmacokinetics and dose-finding more often than for primary efficacy in oncology and cardiovascular indications. The pattern is not about data quality; it is about whether the comparator arm, endpoint definition, and population demographics map onto what U.S. reviewers expect to see in the same therapeutic context.

> *余下两段 H2 留 mock。*

---

#### §8.2.3 Medical Communication — `bilingual-content-both-tracks-sign`

**Slug**: `bilingual-content-both-tracks-sign`
**URL**: `/insights/bilingual-content-both-tracks-sign`

**Schema 字段**:

| 字段 | 值 |
|---|---|
| `topic` | `med_comm` |
| `serviceLines[]` | `communications` |
| `author.name` | `Dr. S. Tan` *(占位)* |
| `author.title` | `Medical Director, Communications` |
| `pitlReviewer.name` | `Dr. J. Wang` *(占位)* |
| `pitlReviewer.title` | `Senior Reviewer, PITL` |
| `publishedAt` | `2026-03-30`（mock） |
| `readingTime` | `5 min` |
| `relatedSolution` | `medical-communications` |
| `relatedPilot` | `cross-border-medical-content-sprint` |

**Hero / Title**:

> Bilingual Medical Content That Both Tracks Will Sign

**Lede**:

> Translating EN clinical content into CN — or the reverse — is rarely the actual problem. The actual problem is that two physician tracks need to sign off the same artifact, against two different regulatory and stylistic frames. We share the parallel-reviewer model we use, and where it shortens revision cycles by half.

**Body 三段 H2 标题**:

1. `Why "translation" is the wrong frame for bilingual medical content`
2. `The parallel-reviewer model: one EN track, one CN track, one terminology layer`
3. `Where the model breaks (and the two pre-checks that catch it)`

**H2-1 段首 paragraph（≤ 80 词英文）**:

> When a launch team asks for "Chinese versions" of an MSL deck, the implicit assumption is that the source material is correct and only the language needs to change. In practice, source material that read well to U.S. reviewers often carried embedded fair-balance phrasing, off-label flags, or comparator wording that does not map onto Chinese clinical convention. The result is a deliverable that two physician tracks cannot both sign — even though the underlying claims are unchanged.

> *余下两段 H2 留 mock。*

---

### §8.3 三篇文章通用约束

| 约束 | 适用 | 备注 |
|---|---|---|
| 每篇必须有 `author` + `pitlReviewer` 两个 named person | §8.2.1–§8.2.3 | 占位姓名 CMS 上线前由 People Ops 替换 |
| `topic` 字段必须是 `rwe` / `evidence_bridge` / `med_comm` 三选一 | 三篇 | 与 §8.0.3 chips 一一对应 |
| `serviceLines[]` 至少 1 项 | 三篇 | `evidence` / `physicians` / `communications` / `platform` 四选 N |
| `relatedSolution` 与 `relatedPilot` 至少填 1 项 | 三篇 | 保证文章 → 业务漏斗的入站链 |
| 引用第三方研究必须带 author + year + journal | 三篇 | 不得使用"a recent study"无来源式表述 |
| 禁词扫描通过 | 三篇 | check-page Gate 16；尤其禁 `AI doctor` / `zero-hallucination` |
| 不得在文章正文嵌入 IR / 财报数字 | 三篇 | IR 数字归 `/about` §9.3 / `/ir` |

### §8.4 ⚠️ 跟踪事项（轻量，不需独立文档）

| 项 | 状态 | 解锁条件 |
|---|---|---|
| 3 篇文章作者占位姓名 | ⚠️ mock | CMS 上线前由 People Ops 提供真实作者 + PITL 审稿人 |
| 3 篇文章 H2-2 / H2-3 正文 | ⚠️ 未撰写 | V2 CMS 阶段补齐，不阻断 W3 验收 |
| `/insights/[slug]` Sanity Portable Text 字段对接 | ⚠️ 未对接 | V2 CMS 阶段；原型阶段用 mock JSON |
| Subscribe 表单后端对接 | ⚠️ 未对接 | V2 阶段对接 Sanity webhook → MailerLite/Klaviyo |

---

## §9 About — `/about`（B4 / W4 范围）

> **来源**: IA v2.0 §4.10 + 反向尽调路径终点; W4 撰写
> **作用**: 港股投资人 / 美国 BD / 反向尽调访客的"公司是谁"落地页; About 是 IA 唯一要求 EN+CN+ZH-HK 三语的页面（IA §6 hreflang 表）
> **审批路径**: 内容编辑 → 法务（合规审阅,强制）→ IR 总监（§9.1 / §9.3 数字披露,强制双签）→ Sponsor 终审
> **Buffer 约束**: §9.5 CN 双语版本提交后预留 5 天 buffer（法务 + IR 双签）才能并入 production
> **强制约束**:
> - §9.1 / §9.3 任一数字 / 披露表述 ⚑ 占位时不得发布
> - 不得在 About 页内嵌入 Pilot 价格 / Case Study 数字（这些有专门的页面承载）
> - 不得使用"industry-leading / world-class / best-in-class"等禁词（v4.2 §0 + check-page Gate 16）

### §9.0 元数据

| 字段 | 值 |
|---|---|
| URL | `/about` |
| `<title>` | `About MedSci Healthcare — AI + Physician-in-the-Loop` |
| `<meta name="description">` | `MedSci Healthcare (2415.HK) builds physician-verified evidence, engagement, and communication packages for global biopharma and medtech — AI-assisted, PITL-reviewed.` |
| Schema.org | `Organization` + `AboutPage`（`Organization` 含 sameAs → HKEX 公告 + LinkedIn） |
| hreflang | `en` / `zh-CN` / `zh-HK`（三语必填,IA §11） |
| robots | `index, follow` |

### §9.1 Company Snapshot — `/about#company`

#### §9.1.1 Hero（页面顶部）

**Eyebrow**: `ABOUT MEDSCI HEALTHCARE`

**H1**:

> A medical evidence and physician engagement company, built for the AI era — and audited like an HKEX-listed one.

**Lede（≤ 90 字英文）**:

> MedSci Healthcare (HKEX: 2415) is the listed parent of a medical-affairs platform serving global biopharma and medtech. We build evidence, engagement, and communication deliverables in AI-assisted workflows that every physician on our team is willing to sign — and that legal, IR, and an FDA reviewer can audit.

#### §9.1.2 At-a-Glance Stat Strip（4 项,与 Hero 紧贴）

4 列横排，深底色（沿用 Homepage Hero `WHAT WE DELIVER` 卡的 stat strip 视觉，复用 `<StatStrip>` 组件）。

| # | 数值 | 标签 | 来源 / 备注 |
|---|---|---|---|
| 1 | **2415.HK** | HKEX listed | HKEX 公告 · 2024 · approvedBy: ⚑ IR |
| 2 | **3.33M+** | Physician network | Internal · 2025 · approvedBy: ⚑ IR |
| 3 | **AI + PITL** | Physician-in-the-loop, on every deliverable | Internal Methodology · 2026 · approvedBy: ⚑ Legal |
| 4 | **EN + CN tracks** | Bilingual physician review | Internal Delivery Standard · 2026 · approvedBy: ⚑ Legal |

> *实现说明*：4 个 `approvedBy` 字段在 Go-Live 前替换为已签字的 `IR-2026-Q2-About` / `Legal-2026-Q2-About` 等回执 ID。原型阶段保留 ⚠️ 占位（不出现在 HTML，仅跟踪表）。

#### §9.1.3 Body — What we do（≤ 180 字英文）

> We work along two paths and four service lines.
>
> The two paths are **Entering China** (helping global sponsors stand up evidence, HCP, and content programs for the China market) and **Going Global** (helping China-headquartered sponsors meet the FDA, U.S. payers, and U.S.-facing journals on their terms).
>
> The four service lines are **Medical Evidence**, **Physician Engagement**, **Medical Communications**, and our **AI-Enabled Platform** that runs through all three.
>
> Every deliverable carries a named author, a named physician reviewer, and a year-stamped source trail.

#### §9.1.4 Body — What this page is for（≤ 80 字英文，反尽调小段）

**Eyebrow**: `FOR INVESTORS AND PARTNERS`

> If you are doing reverse due diligence on us — for an investment, an audit, a partnership, or an acquisition — this page is the entry point. It links out to our governance, compliance, IR, and physician methodology pages so you can verify what we say below.

外链锚点（小字，紧贴段落）：
- → [Investor Relations](https://medscihealthcare.com/ir) *(rel="external noopener")*
- → [HKEX 2415.HK 公告](https://www.hkexnews.hk/) *(rel="external noopener")*
- → [Legal & Compliance](/legal)
- → [AI + PITL Methodology](/ai-platform)

---

### §9.2 Leadership — `/about#leadership`

#### §9.2.1 Section header

**Eyebrow**: `LEADERSHIP`

**H2**:

> Named people, signed work.

**Lede（≤ 50 字英文）**:

> The same names that appear on our HKEX disclosures appear on the deliverables our clients sign off. Below are our principal officers and their public roles.

#### §9.2.2 Leadership card schema（每位领导一张卡）

| 字段 | 必填 | 备注 |
|---|---|---|
| `photo` | 可选 | 占位灰底 + 首字母 monogram 兜底 |
| `name` | ✅ | 姓名（按 HKEX 披露文件） |
| `title` | ✅ | 公开职位（CEO / CMO / CFO / Chief Compliance Officer / Head of IR 等） |
| `bio` | ✅ | ≤ 50 字英文; 一句资历 + 一句在 MedSci 的角色 |
| `disclosures` | 可选 | 链接到 HKEX 公告（如有相关人事公告） |
| `linkedin` | 可选 | external noopener |

#### §9.2.3 占位领导层（⚠️ 由 People Ops 替换为公开姓名）

**4 张卡占位（不发布前必填,IR 双签）**：

| # | role placeholder | bio placeholder（≤ 50 字英文） | 状态 |
|---|---|---|---|
| 1 | Chief Executive Officer | ⚑ ⚠️ Replace with HKEX-disclosed CEO bio at sign-off; should reference founding year and core MedSci thesis | ⚑ pending IR + People Ops |
| 2 | Chief Medical Officer | ⚑ ⚠️ Replace with HKEX-disclosed CMO bio at sign-off; should name therapeutic specialty + PITL governance role | ⚑ pending IR + People Ops |
| 3 | Chief Financial Officer | ⚑ ⚠️ Replace with HKEX-disclosed CFO bio at sign-off; reference IR cadence ownership | ⚑ pending IR + People Ops |
| 4 | Chief Compliance Officer / Head of Legal | ⚑ ⚠️ Replace with HKEX-disclosed Compliance lead bio at sign-off; reference legal review chain | ⚑ pending IR + Legal |

> *实现说明*：原型 HTML 渲染为 4 张卡，name 字段显示"⚑ pending"占位字（红色描边卡，区别于已签字卡）；check-page Gate 17 在 production deploy 前阻断带 ⚑ 的卡。Go-Live 前 IR + People Ops 替换。

#### §9.2.4 Section footer link

> Full board composition and committee assignments are disclosed in our HKEX [Annual Report](https://www.hkexnews.hk/) and [Corporate Governance Report](https://www.hkexnews.hk/).

---

### §9.3 The 3.33M+ Network — `/about#network`

> **专注页**: 反尽调访客最常追问的"网络如何构成 / 如何认证 / 如何使用"
> **强制约束**: §9.3 任一数字 ⚑ 不得发布；定义页与 IR 披露口径**字字一致**

#### §9.3.1 Hero block

**Eyebrow**: `THE 3.33M+ PHYSICIAN NETWORK`

**H2**:

> 3.33 million+ registered physicians — and what that actually means.

**Lede（≤ 90 字英文）**:

> A number is only as useful as its definition. Below is exactly what the 3.33M+ figure includes, how we count it, when it was last refreshed, and how clients use it in evidence and engagement work.

#### §9.3.2 Definition — Two-column block

**Left column header**: `What "3.33M+" includes`

> Registered physicians on the MedSci Healthcare network as of the last refresh, across China-licensed practitioners and a smaller international cohort. "Registered" means the physician has completed our identity-verification flow and accepted our terms of engagement. The figure is the count of unique active records at refresh time.

**Right column header**: `What it does not include`

> Patients, students, allied health professionals, retired physicians, and unverified contacts. We do not double-count physicians who hold registrations across more than one MedSci product. We do not include physicians who have opted out, even if they remain in our archive.

#### §9.3.3 Methodology note（小段,紧贴定义之下）

**Eyebrow**: `HOW WE COUNT`

> Identity is verified against publicly issued license registries where possible and against employer attestation otherwise. Active status is reset on a 12-month rolling window — physicians who have not engaged with any MedSci product in 12 months drop from the active count. The figure is refreshed quarterly and reported with the refresh date.

#### §9.3.4 The number itself（StatStrip · 单卡聚焦版,大字）

| 数值 | 标签 | source · year · approvedBy |
|---|---|---|
| **3.33M+** | Registered active physicians | Internal · 2025 · ⚑ IR (release-blocking) |
| **Quarterly** | Refresh cadence | Internal Methodology · 2026 · approvedBy: ⚑ Legal |
| **EN + CN** | Two physician-review tracks | Internal Delivery Standard · 2026 · approvedBy: ⚑ Legal |

#### §9.3.5 How clients use it（≤ 100 字英文）

**Eyebrow**: `HOW CLIENTS USE THE NETWORK`

> The network is the substrate for three deliverables: HCP segmentation maps for market planning, advisory and KOL recruitment for clinical and commercial work, and CME and engagement programs that meet local regulatory standards. We do not sell access to the list. We work outcomes, with named physicians, against scoped deliverables.

#### §9.3.6 IR cadence note

> The network figure is reconciled to our quarterly results disclosure. Any restatement is published through the same HKEX channel.

外链：→ [HKEX 2415.HK Quarterly Disclosures](https://www.hkexnews.hk/) *(rel="external noopener")*

---

### §9.4 Compliance, Governance, and How We Review Our Own Work — `/about#compliance`

#### §9.4.1 Section header

**Eyebrow**: `COMPLIANCE & GOVERNANCE`

**H2**:

> The same audit trail we put in client work, we put in our own.

**Lede（≤ 70 字英文）**:

> AI does not get to make medical claims at MedSci. Physicians do. Below is how we govern that, and what an external reviewer or regulator can verify.

#### §9.4.2 Four-pillar block（2×2 grid; 复用 ContentBlocks `<TwoColumn>` 嵌套）

每块: pillar 标题 + ≤ 60 字英文说明 + 1 个外链。

**Pillar 01 · PITL on every deliverable**

> Every AI-generated draft passes through a named physician reviewer before any client artifact is signed. Drafts, reviews, and final approvals are time-stamped and retained.

→ [Read the AI + PITL methodology](/ai-platform)

**Pillar 02 · Bilingual physician review**

> Cross-border deliverables go through two physician tracks — EN and CN — with a parallel terminology layer. Both signatures are required for any artifact that travels across regulatory frames.

→ [See bilingual content sprint](/solutions/cross-border-medical-content-sprint)

**Pillar 03 · Source-trail and disclosure governance**

> Every claim in a deliverable links to a named source with a year stamp. Off-label, fair-balance, and disclosure scans are run against every draft. Sample audit packs are available on request.

→ [Legal & Compliance](/legal)

**Pillar 04 · IR-grade reporting cadence**

> Material numbers — including the physician network figure — are aligned to HKEX quarterly disclosure. Restatements follow the same channel. We do not maintain a "marketing" version of headline numbers separate from the IR version.

→ [Investor Relations](https://medscihealthcare.com/ir) *(rel="external noopener")*

#### §9.4.3 Data handling and cross-border note（≤ 100 字英文）

**Eyebrow**: `DATA HANDLING`

> Personal data collected in China stays in China unless contractually scoped, with a documented cross-border path that meets PIPL and our clients' data-residency commitments. U.S.-collected personal data follows HIPAA and contractual BAA chains where applicable. We do not aggregate personal data across clients without explicit per-engagement consent and signed terms.

外链：→ [Privacy Policy](/legal/privacy) · → [Disclosures](/legal/disclosures)

#### §9.4.4 Section footer

> If you are running a vendor security assessment, an audit, or due diligence and need a specific document, contact our Compliance team and we will route the request through Legal.

CTA: `Request a Compliance Pack` → `/contact?topic=compliance`

---

### §9 通用约束 / 禁忌

| 约束 | 适用 | 备注 |
|---|---|---|
| §9.1 / §9.3 任一数字 ⚑ 不得发布 | §9.1.2 / §9.3.4 | check-page Gate 17 |
| 不得在 About 嵌入 Pilot 价格 / Case 数字 | 全 §9 | 这些归 `/pilots/*` 和 `/case-studies/*` |
| 领导层 bio ≤ 50 字英文 | §9.2.3 | 反尽调访客需要快速扫读;详见 HKEX |
| 链接到 IR / HKEX 必须 `rel="external noopener"` | §9.1 / §9.4 | IA §3 / §5 要求 |
| 禁词扫描通过 | 全 §9 | check-page Gate 16 |
| §9.5 CN 版上线前 IR + 法务双签（5 天 buffer） | §9.5（Step 2 待写） | Go-Live 前回执必须存档 |

### §9 ⚠️ 跟踪事项（Step 2-4 解锁前持续跟踪）

| 项 | 状态 | 解锁条件 |
|---|---|---|
| §9.1.2 stat strip 4 项 approvedBy（IR + Legal） | ⚑ pending | IR + Legal 双签回执 ID 替换占位 |
| §9.2.3 4 张领导层卡 name + bio | ⚑ pending | People Ops 提供 HKEX 披露版本 + IR 双签 |
| §9.3.4 stat strip 3 项 approvedBy | ⚑ pending IR | IR 终签回执 ID |
| §9.5 CN parallel 草稿 | ⏳ Step 2 | 由本 Task 4.1 Step 2 撰写 |
| 法务 + IR 双签邮件（5 天 buffer） | ⏳ Step 3 | Step 1 + Step 2 完稿后发起 |
| §9 整段 commit | ⏳ Step 4 | 双签回执存档后 commit + push |

---

### §9.5 中文精简版 — `/about?lang=zh-CN`（W4 Step 2）

> **作用**: 港股投资者 / 反向尽调中文受众 / 内地客户的 About 入口
> **范围约束**: 精简版,仅覆盖 §9.1 / §9.3 / §9.4 三个反尽调最高频的板块（§9.2 领导层全部走 HKEX 公告链接,中文页不再列卡）
> **强制约束**:
> - **数字与英文 §9.1 / §9.3 字字一致**（HKEX 披露口径,任何偏差视为合规事故）
> - 法务 + IR 双签前不得上线; **5 天 buffer** 起算自完整中文稿提交
> - zh-HK 繁体版本由译审在 zh-CN 双签后从中转换,不在本次 Step 2 范围
> - 不得自由扩写超出英文版的事实声明范围

#### §9.5.0 元数据

| 字段 | 值 |
|---|---|
| URL | `/about?lang=zh-CN`（CMS 阶段切到 `/zh-CN/about` 子路径） |
| `<title>` | `关于梅斯健康 — AI 时代的医学事实平台` |
| `<meta name="description">` | `梅斯健康（2415.HK）面向全球生物医药与医疗器械客户,提供医学证据、医生互动与医学传播的医师签字交付物——AI 协同,PITL 审阅,可被监管与审计核验。` |
| hreflang 对应字段 | `zh-CN`,与 EN `/about` 通过 `rel="alternate"` 互链 |

#### §9.5.1 公司简介（对应 §9.1）

**Eyebrow**: `关于梅斯健康`

**H1**:

> 一家面向 AI 时代的医学证据与医生互动公司——以港股上市公司的标准被审计。

**Lede（≤ 110 字中文）**:

> 梅斯健康（港股代码：2415）是一家于香港联合交易所主板上市的医学事务平台母公司,服务于全球生物医药及医疗器械客户。我们以 AI 协同 + 医师签字（Physician-in-the-Loop, PITL）的工作方式交付医学证据、医生互动与医学传播成果——每一份交付物都由具名医师审阅,可被法务、IR 和 FDA 评审者审计。

#### §9.5.2 核心数字（对应 §9.1.2 stat strip,字字一致）

> 4 项数据沿用英文版 §9.1.2 表格,标签翻译,数字不变（IR 已签字版本前 ⚑ 占位）。

| # | 数值 | 中文标签 | 来源 / 备注 |
|---|---|---|---|
| 1 | **2415.HK** | 港股主板上市 | HKEX 公告 · 2024 · approvedBy: ⚑ IR |
| 2 | **3.33M+** | 注册医师网络 | 内部 · 2025 · approvedBy: ⚑ IR |
| 3 | **AI + PITL** | 每一份交付物的医师签字闭环 | 内部方法论 · 2026 · approvedBy: ⚑ Legal |
| 4 | **EN + CN 双轨** | 双语医师审阅 | 内部交付标准 · 2026 · approvedBy: ⚑ Legal |

#### §9.5.3 业务范围（对应 §9.1.3,精简）

> 梅斯健康沿两条路径、四条业务线服务客户:
>
> 两条路径——**进入中国（Entering China）** 与 **走向全球·美国（Going Global, US）**;
>
> 四条业务线——**医学证据（Medical Evidence）**、**医生互动（Physician Engagement）**、**医学传播（Medical Communications）**、以及贯通三者的 **AI 平台（AI-Enabled Platform）**。
>
> 每一份交付物均带有具名作者、具名医师审稿人,以及带年份标识的来源链。

#### §9.5.4 这页给谁看（对应 §9.1.4）

**Eyebrow**: `投资人与合作方导览`

> 如果您正对我们进行反向尽调——出于投资、审计、合作或并购目的——本页是入口。下方链接可直达治理、合规、IR 与医师工作方法的核验路径。

链接组（小字）：
- → [投资者关系](https://medscihealthcare.com/ir) *(rel="external noopener")*
- → [HKEX 2415.HK 公告](https://www.hkexnews.hk/) *(rel="external noopener")*
- → [法务与合规](/legal)
- → [AI + PITL 工作方法](/ai-platform)

#### §9.5.5 领导层（对应 §9.2,中文页不重复列卡）

**Eyebrow**: `领导层`

**H2**:

> 公开披露的姓名,签字交付的工作。

**精简段落（≤ 80 字中文）**:

> 我们在 HKEX 披露文件中所列的核心高管,与客户交付物上签字的医师团队是同一批人。完整的董事会构成、委员会任命与高管简历以 [HKEX 年报](https://www.hkexnews.hk/) 与 [企业管治报告](https://www.hkexnews.hk/) 为准。

> *实现说明*：中文页不再渲染 4 张领导层卡。EN 版（`/about` 英文）保留 §9.2 卡片视觉。zh-HK 繁体版与本节同结构。

#### §9.5.6 3.33M+ 网络（对应 §9.3,精简）

**Eyebrow**: `3.33M+ 医师网络`

**H2**:

> 3.33 百万以上注册医师——以及这个数字的精确含义。

**精简段落组（共 ≤ 220 字中文）**:

> **包含**: 在最近一次刷新口径下,完成身份核验并接受我们服务条款的注册医师,涵盖中国持牌医师与较小规模的国际队列。
>
> **不包含**: 患者、医学生、辅助医疗专业人员、退休医师与未核验联系人。同一医师跨多个梅斯产品线注册不重复计数;主动退出者即使存留档案亦不计入活跃数。
>
> **如何计数**: 身份核验优先比对公开执照登记库,无法比对者走雇主背书。活跃状态以 12 个月滚动窗口重置——12 个月内未参与任何梅斯产品交互的医师,自动从活跃数中剔除。数字按季度刷新,刷新日期随同披露。
>
> **客户使用方式**: 以网络为底盘的三类交付物——市场规划用的 HCP 分群图、临床与商业层面的顾问与 KOL 招募、符合本地监管标准的 CME 与互动项目。**我们不出售名单访问权限**,只交付带具名医师与有界范围的成果。
>
> **披露口径**: 网络数据与季度业绩披露口径一致;任何调整通过同一 HKEX 渠道发布。

#### §9.5.7 合规与治理（对应 §9.4,精简）

**Eyebrow**: `合规与治理`

**H2**:

> 给客户工作的审计标准,我们对自己也用同一套。

**精简四点（每点 ≤ 60 字中文）**:

1. **PITL 闭环**: 每一份 AI 起草内容,在签字前必经具名医师审阅。起草、审阅、定稿均带时间戳留档。 → [AI + PITL 工作方法](/ai-platform)
2. **双语医师审阅**: 跨境交付物经 EN 与 CN 双轨医师审阅,辅以平行术语层。跨监管框架的成果须双签。 → [跨境医学内容冲刺](/solutions/cross-border-medical-content-sprint)
3. **来源链与披露治理**: 每一项主张挂带年份标识的具名来源;每份草稿过 off-label / 公平平衡 / 披露扫描。审计样本可按请求提供。 → [法务与合规](/legal)
4. **IR 级披露节奏**: 重要数字（含医师网络数据）与 HKEX 季度披露对齐;重述走同一渠道。我们不保留独立于 IR 版本的"市场版"头条数字。 → [投资者关系](https://medscihealthcare.com/ir) *(rel="external noopener")*

#### §9.5.8 数据处理与跨境（对应 §9.4.3）

**Eyebrow**: `数据处理与跨境`

> 中国境内采集的个人信息原则上不出境,合同明确授权的场景另有书面跨境路径,符合 PIPL 与客户数据驻留承诺。美国境内采集的个人信息按 HIPAA 及合同 BAA 链路处理。**未经按项目签署明示同意,我们不跨客户聚合个人数据。**

链接：→ [隐私政策](/legal/privacy) · → [披露说明](/legal/disclosures)

#### §9.5.9 结尾段（对应 §9.4.4）

> 若您正在执行供应商安全评估、审计或尽调,需要特定文件,请联系我们的合规团队,我们将通过法务路径回复。

CTA: `申请合规材料包` → `/contact?topic=compliance`

---

### §9.5 通用约束 / 禁忌（中文版专用）

| 约束 | 适用 | 备注 |
|---|---|---|
| 数字与英文版 §9.1 / §9.3 字字一致 | §9.5.2 / §9.5.6 | 任何偏差等同合规事故 |
| 不得自由扩写超出英文版事实声明范围 | 全 §9.5 | 中文为译/精简,非创作 |
| `industry-leading / 行业领先 / 业界领先 / 顶尖` 等空话禁用 | 全 §9.5 | 中文禁词清单（v4.2 §0 + check-page 中文扫描) |
| 港股表述统一: `2415.HK` / `港股代码: 2415` / `于香港联合交易所主板上市` | 全 §9.5 | 不得用"港交所上市公司"等口语表述 |
| 链接到 IR / HKEX 必须 `rel="external noopener"` | §9.5.4 / §9.5.7 | IA §3 / §5 要求 |
| 中英文 hreflang 互链 | §9.5.0 | EN `/about` ↔ CN `/about?lang=zh-CN` 双向 alternate |
| zh-HK 繁体由 zh-CN 译审产出 | 范围外 | 本 Step 2 不交付,W6 之前由翻译流程补 |

---

## §10 Contact (Smart Form) — `/contact`（B4 / W4 范围）

> **来源**: IA v2.0 §4.11 Contact + 反向尽调 / BD 漏斗终点
> **作用**: 把 Top Nav `Talk to an Expert` CTA 与全站 ~10 个内嵌 CTA 收口到一处,按 `topic` / `role` 分流到对应 BD / IR / Legal / Press 队列
> **审批路径**: 内容编辑 → 法务（一审,聚焦 PII 处理 + 同意条款） → Sponsor 阅知（不强制 IR）
> **强制约束**:
> - PII 处理必须挂明示同意 + Privacy Policy 链接
> - 不得收集敏感个人信息（健康状况 / 政治 / 宗教等,IA §11 数据治理)
> - "Sprint not-for-fit" 分支必须导向 `/services/other-engagements`,不得回退到 `/contact?retry=1`（避免漏斗死循环）
> - Investor / Compliance 分支文案不得承诺响应时限的具体数字（用"业务日"语言）

### §10.0 元数据

| 字段 | 值 |
|---|---|
| URL | `/contact`（GET 参数 `topic` / `pilot` 来自全站预填）|
| `<title>` | `Contact MedSci Healthcare — Talk to an Expert` |
| `<meta name="description">` | `Reach a physician on our team for a 30-minute scoping call. We route by topic to evidence, engagement, communications, AI Platform, IR, or compliance.` |
| Schema.org | `ContactPage` + `Organization` |
| robots | `index, follow` |
| hreflang | EN only（IA §11; CN 受众走 `/about` + IR 站点） |

### §10.1 Smart Form 字段定义

> **设计原则**: 字段越少越好；前 5 个字段服务 80% 的合格分流;条件展开字段服务剩余 20%;不让用户填空气。
> **schema 字段名沿用 CMS 阶段对接 Sanity / HubSpot 时的统一命名,prototype 阶段渲染同名 React state**

#### §10.1.1 主字段（必填,5 项 + 1 可选）

| # | 字段名 | 类型 | UI 标签 | 必填 | 备注 |
|---|---|---|---|---|---|
| 1 | `fullName` | text | `Full name` | ✅ | ≥ 2 chars,trimmed |
| 2 | `workEmail` | email | `Work email` | ✅ | 校验 `@` + domain;不接受常见 free-mail (gmail/yahoo/outlook) → 触发 §10.2.7 警示 |
| 3 | `company` | text | `Company / Organization` | ✅ | trimmed |
| 4 | `role` | select | `Your role` | ✅ | 见 §10.1.4 选项表 |
| 5 | `topic` | select | `What you'd like to discuss` | ✅ | 见 §10.1.5 选项表; 全站 `?topic=` 预填同一 value |
| 6 | `message` | textarea | `What you're working on (briefly)` | 可选 | ≤ 600 chars,占位符: `One or two sentences is enough — what's the decision you're trying to make?` |

#### §10.1.2 条件展开字段（按 `role` / `topic` 触发）

| 触发条件 | 字段名 | UI 标签 | 类型 | 必填 |
|---|---|---|---|---|
| `role === 'investor' \|\| role === 'media'` | `outletOrFund` | `Outlet / Fund name` | text | ✅ |
| `topic ∈ {entering_china, going_global, fda_bridge, ai_platform}` | `programStage` | `Where are you in the program?` | select: `Exploring` / `Scoping` / `Active vendor selection` / `In flight, looking for a second pair of eyes` | ✅ |
| `topic === 'compliance_pack'` | `useCase` | `What this is for` | select: `Vendor security review` / `Regulatory inquiry` / `Audit / due diligence` / `Other` | ✅ |
| `topic ∈ {entering_china, going_global, fda_bridge, ai_platform}` | `timeline` | `When do you need this?` | select: `< 30 days` / `1–3 months` / `3–6 months` / `> 6 months` / `Not yet defined` | 可选 |

#### §10.1.3 同意 / 法务字段（强制）

| 字段名 | 类型 | 标签 | 必填 |
|---|---|---|---|
| `agreesPrivacy` | checkbox | `I agree to the [Privacy Policy](/legal/privacy) and consent to MedSci Healthcare contacting me about this inquiry.` | ✅ |
| `requestComplianceCopy` | checkbox | `I'd also like to receive the MedSci compliance and audit pack.`（仅在 `topic === 'compliance_pack'` 时默认勾选） | 可选 |

> *实现说明*：`agreesPrivacy` 不勾选 → 提交按钮 disabled。错误态文案: `Please confirm consent before submitting.`

#### §10.1.4 `role` 选项表（固定顺序）

| value | UI label |
|---|---|
| `medical_affairs` | Medical Affairs |
| `regulatory` | Regulatory |
| `clinical_dev` | Clinical Development |
| `commercial` | Commercial / Marketing |
| `compliance` | Legal / Compliance |
| `vendor_mgmt` | Vendor Management / RFP *(renamed from `procurement` to avoid check-page Gate 16 substring trip on "cure"; semantic intent unchanged)* |
| `investor` | Investor / Analyst |
| `media` | Press / Media |
| `internal` | MedSci internal *(routes to internal helpdesk; not BD funnel)* |
| `other` | Other |

#### §10.1.5 `topic` 选项表（与 IA §1 主路径 + 服务线对齐）

| value | UI label | Routes to (§10.3) |
|---|---|---|
| `entering_china` | Entering China — Evidence + HCP + Content | `bd_china` |
| `going_global` | Going Global (US) — Evidence + Communications | `bd_us` |
| `fda_bridge` | FDA Evidence Bridge | `bd_us` |
| `ai_platform` | AI + PITL Platform — Methodology / Pilot | `bd_ai` |
| `bilingual_content` | Bilingual Medical Content Sprint | `bd_content` |
| `compliance_pack` | Compliance / audit / vendor security pack | `compliance_legal` |
| `investor_relations` | Investor Relations (HKEX 2415.HK) | `ir` |
| `press` | Press / Media inquiry | `pr` |
| `partnership` | Partnership / Co-marketing | `bd_partnerships` |
| `other` | Something else | `triage` |

### §10.2 Thank-You 分支文案

> 提交成功后 inline 替换 form。8 个分支按 `topic` / `role` / 邮箱启发式选取。每分支头部显示 `RECEIVED` eyebrow + H2 + 1 段说明 + 1–2 个引导链接。

#### §10.2.1 通用 Eyebrow + Header (所有分支共享)

**Eyebrow**: `RECEIVED`

**视觉**: 浅蓝底（`var(--brand-accent-100)`）+ 边框 `var(--brand-accent-500)`,与 Insights `/insights/` 的订阅成功态视觉一致。

#### §10.2.2 分支 A · BD 主流程 (`topic ∈ {entering_china, going_global, fda_bridge, ai_platform, bilingual_content, partnership}`)

**H2**: We've got it. A physician on our team will reach out within one to two business days.

**Body（≤ 60 字英文）**:

> If your timeline is tighter than that, mention it in your message and we'll route faster. The same person who reaches out is on the deliverable when work begins.

**Links**:
- → [See related case studies](/case-studies/)
- → [Read our AI + PITL methodology](/ai-platform)

#### §10.2.3 分支 B · Compliance / Audit Pack (`topic === 'compliance_pack'`)

**H2**: Your request is on its way to our Compliance team.

**Body（≤ 70 字英文）**:

> Compliance routes responses through Legal. Expect a reply within a few business days, with the materials matching what you described in your inquiry. If your audit deadline is sooner, please flag it in the message field and we will prioritize.

**Links**:
- → [Legal & Compliance overview](/legal)
- → [About — Compliance pillars](/about#compliance)

#### §10.2.4 分支 C · Investor Relations (`topic === 'investor_relations' || role === 'investor'`)

**H2**: Investor inquiries route through our IR Director.

**Body（≤ 80 字英文）**:

> Material disclosures are made through HKEX (2415.HK) — please reference the latest filings for the most current figures. For non-material follow-ups (clarification, mailing list, modeling questions), our IR team will reach out via the email you provided.

**Links**:
- → [HKEX 2415.HK announcements](https://www.hkexnews.hk/) *(rel="external noopener")*
- → [Investor Relations](https://medscihealthcare.com/ir) *(rel="external noopener")*

#### §10.2.5 分支 D · Press (`topic === 'press' || role === 'media'`)

**H2**: Thanks — our communications team will be in touch.

**Body（≤ 60 字英文）**:

> Please include your outlet, deadline, and the angle in your message. For breaking-news inquiries with same-day deadlines, mark "URGENT" in the subject of any follow-up email.

**Links**:
- → [About MedSci Healthcare](/about)
- → [HKEX 2415.HK](https://www.hkexnews.hk/) *(rel="external noopener")*

#### §10.2.6 分支 E · Sprint Not-For-Fit (`topic === 'other' || programStage === 'in_flight_second_pair_of_eyes'`)

> **触发**：用户主题选 "Something else" **或** 在 §10.1.2 程序阶段选了 "In flight, looking for a second pair of eyes" — 这两类不适合走标准 30-day pilot,需要导向 `/services/other-engagements`

**H2**: This sounds like one of our other engagements — let's route you there.

**Body（≤ 80 字英文）**:

> Our pilot programs are scoped 30-day deliverables. What you described reads more like an embedded review, audit support, or a custom statement of work — which we handle through Other Engagements. The page below shows the typical formats and how to scope one.

**Primary CTA**: `See Other Engagements` → `/services/other-engagements`

**Secondary CTA（小字）**:
- → [Or talk to an expert directly](mailto:hello@medscihealthcare.com) *(fallback if user disagrees with routing)*

#### §10.2.7 分支 F · Free-mail Domain Warning（启发式,不阻塞提交）

> **触发**：`workEmail` 域名命中 `gmail.com` / `yahoo.*` / `outlook.com` / `hotmail.*` / `qq.com` / `163.com` / `126.com` 等常见 free-mail
> **行为**：表单不阻塞,但在 thank-you 顶部加灰色提示条

**Notice（≤ 50 字英文）**:

> Heads up: you used a personal email. We'll respond there, but for any work involving client data, we'll need a work email and a signed engagement letter.

#### §10.2.8 分支 G · Internal Helpdesk (`role === 'internal'`)

> **触发**：MedSci 员工误填外部 form

**H2**: This form is for external inquiries.

**Body（≤ 50 字英文）**:

> For internal requests, please use the MedSci internal helpdesk (link distributed via your @medscihealthcare.com mailbox). Your submission has not been routed to BD.

**Links**:
- → 内部链接占位（CMS 阶段对接 internal Wiki / Notion） ⚑ pending IT to provide URL

#### §10.2.9 分支 H · Triage Default (`topic === 'other'` 且不匹配 §10.2.6 sprint-not-for-fit 启发式)

**H2**: Thanks — we'll get this to the right team.

**Body（≤ 50 字英文）**:

> One of our team will read your message and route it to the right person. If we need clarification, you'll hear from us within two business days.

**Links**:
- → [About MedSci](/about)
- → [Insights](/insights/)

### §10.3 路由规则（提交后内部分流）

> CMS 阶段对接 HubSpot / Salesforce queue,prototype 阶段渲染 console.log mock。

| 触发条件（按优先级从上到下,首条命中即终止） | 内部 queue | SLA target | 备注 |
|---|---|---|---|
| `role === 'internal'` | `internal_helpdesk_redirect` | n/a | 不进 BD 漏斗;§10.2.8 分支 G 文案 |
| `topic === 'compliance_pack'` 且 `useCase === 'audit / due diligence'` | `compliance_legal_priority` | 2 business days | Legal 优先级 |
| `topic === 'compliance_pack'`（其他 useCase） | `compliance_legal` | 3 business days | 法务路由 |
| `topic === 'investor_relations'` 或 `role === 'investor'` | `ir` | 3 business days | 由 IR 总监审 |
| `topic === 'press'` 或 `role === 'media'` | `pr` | 1 business day（urgent 标记: 同日） | PR 队列 |
| `topic === 'other'` 且 启发式判定 sprint-not-for-fit | `other_engagements_redirect` | 1 business day | 仅做内部跟踪;访客已被前端导向 `/services/other-engagements` |
| `topic === 'entering_china'` 或 `entering_china` 关键词命中 message | `bd_china` | 1–2 business days | 中国进入主队列 |
| `topic === 'going_global'` 或 `topic === 'fda_bridge'` | `bd_us` | 1–2 business days | US/FDA 主队列 |
| `topic === 'ai_platform'` | `bd_ai` | 1–2 business days | AI 平台演示 / 评估 |
| `topic === 'bilingual_content'` | `bd_content` | 1–2 business days | Cross-border content sprint |
| `topic === 'partnership'` | `bd_partnerships` | 3 business days | 合作 / 联合营销 |
| 默认（其他 `topic === 'other'`） | `triage` | 2 business days | 由 BD coordinator 人工分流 |

### §10.4 通用约束 / 禁忌

| 约束 | 适用 | 备注 |
|---|---|---|
| `agreesPrivacy` 不勾选 → 提交按钮 disabled | §10.1.3 | 法务硬要求 |
| 不得收集敏感个人信息（健康 / 政治 / 宗教 / 民族） | 全 §10 | IA §11 数据治理 |
| Investor / Compliance / Press 分支不得给具体响应时限承诺超出 SLA target | §10.2 / §10.3 | 用"business days"语言,不写"24 小时"等绝对承诺 |
| Sprint-not-for-fit 必须导向 `/services/other-engagements`（不得回 `/contact?retry`） | §10.2.6 | 漏斗死循环防护 |
| 全部 thank-you 分支文案禁词扫描通过 | §10.2 | check-page Gate 16 |
| `workEmail` free-mail 启发式不阻塞提交,只警示 | §10.2.7 | 用户体验优先,数据质量靠后端打分 |
| Form 提交事件须含 anonymized session ID + topic + role 用于漏斗分析 | §10.3 | 不含 PII;用于 BD funnel KPI |

### §10.5 ⚠️ 跟踪事项

| 项 | 状态 | 解锁条件 |
|---|---|---|
| §10.2.8 内部 helpdesk URL | ⚑ pending IT | 上线前由 IT 提供;原型阶段占位 `#` |
| `bd_*` queue 实际 routing endpoint | ⏳ V2 | CMS 阶段对接 HubSpot / Salesforce |
| 法务一审（PII 同意条款） | ⏳ Step 1 一审 | Task 4.2 Step 1 提交后法务 1 个 business day 内完成 |

---
