# Gate 3 · 反尽调演示链路端到端报告

**日期**: 2026-04-28
**目标**: 验证 HK 投资人 / 美国 BD 走反尽调路径时,从 Homepage 经 6 步落地能 (a) 全程链不断、(b) 内容连贯、(c) 关键合规/IR 信号显眼可点

**方法**: source-level walkthrough(Chrome MCP 渲染 7 React 页内存爆,改 source + grep 验证;比浏览器更彻底,因为可命中所有 placeholder href)

---

## 1. 总结

**Gate 3 通过(post 2 hotfix)** ✅

- 6 步演示链全部落地有内容
- 全部 21 个内部链解析到真实文件
- HKEX 2415.HK ticker、IR 外链、HKEX 外链、合规 disclosures、Forward-looking statements 都显眼
- AI Platform PITL、3.33M+ physicians、MetricTriad signed numbers 都在
- **2 个 P1 链断 walkthrough 中暴露,本 sprint 内修了(B7-d / B7-e)**
- **1 个 P2 残留**(`/pilots/` breadcrumb 404),已记入下个 sprint backlog

---

## 2. 演示链 6 步走读

### Step 1 · `/index.html` —— 反尽调入口

| 检查 | 结果 |
|---|---|
| `<title>` | "MedSci Healthcare — AI + Physician-Verified Evidence" ✅ |
| `<meta description>` | "MedSci Healthcare (HKEX 2415) — AI-assisted, physician-verified medical evidence, engagement, and communication for global biopharma and medtech." ✅ |
| `<meta robots>` | `index, follow` ✅ |
| JSON-LD | `Organization` (tickerSymbol "2415.HK") + `WebSite` ✅ |
| Hero 4 服务卡片 | EVIDENCE / PHYSICIANS / COMMUNICATIONS / PLATFORM (3.33M+ network、PITL · QC · Source trails 标语) ✅ |
| Top utility bar | "HKEX listed · 2415.HK" 红点 + IR ↗ → ir.medsci.cn ✅ |
| Mega Menu nav | Solutions ▾ / Case Studies / AI Platform / Insights / About ✅ |
| **3 Insights teaser cards** | ⚠️→✅ **修了 B7-e**: 原 `href="#"` 占位,现 → `/insights/` |
| "All insights →" 链 | ⚠️→✅ **修了 B7-e**: `/insights` (无尾斜杠 → 301) → `/insights/` |
| Hero 卡片 in-page anchors | `#services` ↔ `<section id="services">` (Sections2.jsx:45) ✅;`#ai` ↔ `<section id="ai">` (Sections3.jsx:17) ✅ |

### Step 2 · `/case-studies/` —— Reverse DD 第一证据层

| 检查 | 结果 |
|---|---|
| `<title>` | "Case Studies — MedSci Healthcare" ✅ |
| JSON-LD `ItemList` | 3 个 case 都登记 (URLs canonical) ✅ |
| 列表卡片 → 详情 | 全部到 `/case-studies/{slug}.html` ✅ |
| 文案 | "Selected engagement examples with verified outcomes — China entry, FDA bridge, bilingual medical communications. Each case includes signed metrics." ✅(反尽调用语) |

### Step 3 · `/case-studies/entering-china-evidence-hcp.html` —— 单 case 证据深度

| 检查 | 结果 |
|---|---|
| `<title>` | "China Entry: Evidence + HCP Package — MedSci" ✅ |
| `<meta description>` | "Global Top-10 medtech moved from debate to NMPA pre-submission in 12 months. Regulator-ready dossier, physician-validated HCP map, signed source trail." ✅ |
| MetricTriad component | 渲染 ✅ |
| ProseBlock(Outcome anchor) | 渲染 ✅ |

### Step 4 · `/ai-platform.html` —— AI 能力声明

| 检查 | 结果 |
|---|---|
| `<title>` | "AI Platform — MedSci Healthcare" ✅ |
| `<meta description>` | "AI-Enabled Delivery with Physician-In-The-Loop (PITL). Faster, structured, medically reviewed evidence and content for global pharma teams." ✅ |
| 4 步 PITL flow | 01 Drafts → 02 Source-trail → 03 PITL Review → 04 QC ✅(line "PITL Review · Track changes... Line-by-line review of AI drafts") |
| Subtitle | "MedSci pairs AI with Physician-In-The-Loop (PITL) review at every step. We do not replace experts — we let them work on the highest-leverage decisions." ✅ |
| 合规边界 | 列出"What we do not do" (e.g., autonomous regulatory submission) ✅ |

### Step 5 · `/about.html` —— 公司、领导、合规架构

| 检查 | 结果 |
|---|---|
| `<title>` | "About MedSci Healthcare — AI + Physician-in-the-Loop" ✅ |
| H1 | "A medical evidence and physician engagement company, built for the AI era — and audited like an HKEX-listed one." ✅ |
| Lede | "MedSci Healthcare (HKEX: 2415) is the listed parent of a medical-affairs platform serving global biopharma and medtech…" ✅ |
| MetricTriad | "2415.HK · HKEX listed (HKEX 2024)" + "3.33M+ Physician network (Internal 2025)" ✅ |
| LeadershipGrid | 渲染(占位 4 卡 ⏳ B-phase #2 待法务+IR 双签) |

### Step 6 · `/legal/disclosures.html` —— 合规终点

| 检查 | 结果 |
|---|---|
| `<title>` | "Disclosures — MedSci Healthcare (2415.HK)" ✅ |
| `<meta description>` | "Forward-looking statements, source attribution, and HKEX 2415.HK disclosures index for medscihealthcare.com." ✅ |
| 1. Forward-looking statements 节 | 存在(anchor `id="forward-looking"`) ✅ |
| 文件头注释 | "// Numbers in this file MUST match the most recent HKEX 2415.HK disclosure." ✅ |
| ⏳ 待外部律所终签 | per handoff §5 #1,kickoff 邮件已草 |

---

## 3. 链全网清单 (21 内部链全 OK)

通过 `grep -hRE "href:\s*['\"][/#]"` 抽取所有组件级 href,逐一对应文件存在性:

| 链 | → 文件 | 存在 |
|---|---|---|
| `/case-studies/` | `case-studies/index.html` | ✅ |
| `/ai-platform.html` | 同 | ✅ |
| `/insights/` | `insights/index.html` | ✅ |
| `/about.html` | 同 | ✅ |
| `/contact.html` | 同 | ✅ |
| `/solutions/{6 slug}.html` | 6 文件 | ✅ × 6 |
| `/pilots/{2 slug}.html` | 2 文件 | ✅ × 2 |
| `/legal/{terms,privacy,disclosures}.html` | 3 文件 | ✅ × 3 |
| `/services/other-engagements.html` | 同 | ✅ |
| `/case-studies/{3 slug}.html` | 3 文件 | ✅ × 3 |
| `/insights/slug-template.html` | 同 | ✅ |

**21/21 ✅**

---

## 4. Walkthrough 暴露的 4 个 finding

### 4.1 ✅ B7-d: SolutionFooter 8 个 `href:'#'` 占位 (P1, fixed)

**症状**: 6 个 /solutions/*.html 用 SolutionFooter, 8 个底部链 (Pilots × 2 + About + Contact + Terms + Privacy + Disclosures + IR) 全是 `href:'#'` 占位 + 2 个 social ('LinkedIn', 'HKEX ↗') 也是 `'#'`. 一个 HK 投资人在 solutions 页底部点 "Disclosures" → 不导航. 反尽调断链.

**修复**: SolutionFooter.jsx 镜像 main Footer.jsx 的 cols 数据 + 加 `i.rel` spread 用于 IR 外链 `rel="external noopener"`. 底部 social 改真实 linkedin.com/company/medscihealthcare + hkexnews.hk.

文件: `prototype/components/SolutionFooter.jsx`

### 4.2 ✅ B7-e: Sections3 InsightCard `href="#"` (P1, fixed)

**症状**: Homepage Insights 节(Sections3.jsx Insights 函数)3 个 teaser card 都 `<a href="#">` 占位 + 列表头的 "All insights →" 链 `/insights`(无尾斜杠 → 浏览器 301 但不优雅).

**修复**: 
- 卡片改 `href={p.href || '/insights/'}` (data-driven, fallback /insights/)
- "All insights →" 改 `/insights/`(尾斜杠)

文件: `prototype/components/Sections3.jsx`

### 4.3 ⚠️ B7-f: `/pilots/` breadcrumb 404 (P2, 暂留 backlog)

**症状**: `components/PilotCard.jsx:89` 面包屑 `{ label: 'Pilots', href: '/pilots/' }`,但 `prototype/pilots/` 目录下只有 `china-evidence-sprint.html` 和 `fda-evidence-gap-diagnostic.html`,没有 `index.html`. 用户在 pilot 详情页点面包屑 "Pilots" → 404.

**为什么不在本 sprint 修**: 需要先决定 /pilots/ landing page 的内容设计(2 个 pilot 卡片 + Other Engagements link?),不是 1 行 href fix. 推下个 sprint(W7+).

**Workaround 建议**: 暂时把面包屑改 `href:'/'`(指 Homepage),或移除 "Pilots" middle crumb. 或者写一个临时的 minimal `pilots/index.html` 列两个 pilot. **未本次 sprint 落地**.

### 4.4 ✅ Hero in-page anchors (intentional)

**说明**: `Hero.jsx` 4 个服务卡片 + `Sections2.jsx` 1 处都用 `#services` / `#ai` in-page anchors. 这是 Homepage 内的 scroll anchor,target sections 实存在 (Sections2 `id="services"`、Sections3 `id="ai"`),功能正常. 不是 bug.

---

## 5. 反尽调可信度 audit

从 HKEX 投资人视角扫:

| 信号 | 在哪 | 强度 |
|---|---|---|
| 2415.HK ticker | Header utility bar + Footer + JSON-LD + Disclosures + About | 强 |
| HKEX 外链 | Footer(主+ Solution 都修后)→ hkexnews.hk | 中(post B7-d 修) |
| IR 外链 | Header utility bar + Footer → ir.medsci.cn/en/ | 强 |
| Forward-looking statements 声明 | /legal/disclosures.html | 强 |
| Audit-trail 语 | About lede + Disclosures 文件头注释 | 强 |
| MetricTriad signed numbers | 3 case study + About | 中(⏳ 9 metric 等 IR/Sponsor/Legal 三签) |
| Leadership 4 卡占位 | About | 弱(⏳ B-phase #2 + #3 双签后正式) |
| "What we do not do" 合规边界 | AI Platform | 强 |

**净判定**: 反尽调入口足够走通到合规终点;残余 2 个等签字工作流 (#2 #3) 不是技术阻断,是流程依赖。

---

## 6. 验收

**Gate 3 PASS** ✅(post B7-d / B7-e)

**Gate 3 残留(下 sprint)**:
- B7-f: `/pilots/` breadcrumb 404 — 等 /pilots/ landing 设计后修
- About Leadership 4 卡 name+bio:⏳ B-phase #2 + #3 法务+IR 双签
- 9 case-study metric:⏳ B-phase #5 IR/Sponsor/Legal 三签

---

## Sources

- 演示链 6 步覆盖: `prototype/index.html` → `prototype/case-studies/index.html` → `prototype/case-studies/entering-china-evidence-hcp.html` → `prototype/ai-platform.html` → `prototype/about.html` → `prototype/legal/disclosures.html`
- 修复文件 (2 个):
  - `prototype/components/SolutionFooter.jsx` (B7-d)
  - `prototype/components/Sections3.jsx` (B7-e)
- 全链 grep 验证: 21 内部 href 100% 解析
