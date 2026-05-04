# W2-06 W2 验收检查 · Acceptance Check

**Project** MSH Website Rebuild · 梅斯健康（HKEX: 2415）
**Gate** M1 视觉拍板 · Homepage Hi-fi + VI sign-off
**Date** 2026-04-19 prepared · 2026-05-02 sign-off 会议
**Owner** 项目经理 (PM) · 交付清单对齐 PRD v4 Roadmap

---

## 1. 交付清单 · Deliverables

| # | 文件名 | 类型 | 状态 | 校验口径 |
|---|-------|------|------|---------|
| 1 | `W2-01 W2 运行手册 Runbook.md` | md | ✅ Ready | 12 节 · 5 SMART 目标 · 5 日日程 · RACI · 7 决策 · 拍板会流程 · Schema checklist · 5 风险 · W2→W3 handoff · 命令清单 · 对齐引用 |
| 2 | `W2-02 视觉拍板会 Decision Deck.md` | md | ✅ Ready | 11 节 · 90min 议程 · 3 方向定位 · 16 维差异矩阵 · 工程成本 1.0×/1.35×/0.85× · 7 决策 checklist · 调整上限 10 · sign-off · parking lot |
| 3 | `W2-03 首页高保真方向 A 克制升级.html` | html | ✅ Ready | Veeva-like · #001a51 navy · static · 9 模块完整 · 响应式 · Direction badge |
| 4 | `W2-03 首页高保真方向 B AI 原生.html` | html | ✅ Ready | Tempus AI-like · dark hero + animated grid · prefers-reduced-motion bailout · AI 模块前置（IA §4.1 偏离已 flag） |
| 5 | `W2-03 首页高保印方向 C 投资者反向尽调.html` | html | ✅ Ready | Novartis IR-like · #111827 + #B8860B · Trust Bar 前置 · About+IR 第一屏 · 无图无动画 · HKEX: 2415 披露徽章 |
| 6 | `W2-04 低保真线框 Wireframes v1.0.md` | md | ✅ Ready | 14 节 · Shell + 11 页（9 顶层 + 2 Pilot 子页）· Desktop + Mobile 双骨架 · 模块 ↔ `pageSection.kind` 映射 · element checklist · Schema 需求汇总 |
| 7 | `W2-05 Sanity Schema v1.0/` | 目录 | ✅ Ready | README changelog · 17 documents · 10 objects · role-grouped desk · claim-audit webhook · forbiddenPhrases 分类 |
| 8 | `W2-06 W2 验收 Acceptance Check.md` | md | ✅ Ready | 本文 |

---

## 2. 范围对齐 · Scope Coverage

### 2.1 对齐 PRD v4 Roadmap（Phase 1 · W2）

| PRD 要求 | W2 交付 | 位置 |
|---------|---------|------|
| 视觉基调 A/B/C 比稿 | 3 份 hi-fi HTML | W2-03 A/B/C |
| Token 系统冻结 | 3 方向各自 token（色/字/间距） | HTML `<style>` + Decision Deck §3 |
| 组件规范初稿 | 按 pageSection kind 拆分 | W2-04 §12 + W2-05 pageSection.ts |
| Schema 封版 | 全量 schema v1.0 | W2-05 整目录 |
| 首页 Hi-fi | 3 方向全量 | W2-03 A/B/C |
| 拍板决议 | Decision Deck + sign-off 页 | W2-02 §8 §10 |

### 2.2 IA v1.0 §4 页面覆盖

| IA 要求 | W2-04 Section | 状态 |
|---------|--------------|------|
| Homepage | §1 | ✅ |
| Entering China | §2 | ✅ |
| Going Global | §3 | ✅ |
| Cross-Border Sprint | §4 | ✅ |
| Other Engagements (Pilot 父) | §5 | ✅ |
| Pilot 子页 × 2 | §6 | ✅ (1 个模板 · 2 instance) |
| AI-Enabled Delivery | §7 | ✅ |
| Insights (Listing + Detail) | §8 | ✅ |
| About | §9 | ✅ |
| Contact | §10 | ✅ |
| Legal | §11 | ✅ |

**覆盖**：9 顶层 + 2 Pilot = 11 套线框 · IA 全覆盖。

### 2.3 Schema v0.1 → v1.0 差异

| 新增 | 数量 |
|------|------|
| Documents | 7 (pilotSubpage / aiDisclosure / legalPage / redirectRule / person / contactMethod / siteSettings) |
| Objects | 2 (citation / pricingTier) |
| pageSection.kind 扩展 | +10 项 |
| hero.variant | 7 值 |
| Studio 角色分组 | 4 组 |
| Webhook | 1 (claim-audit Edge) |
| forbiddenPhrases 分类 | 5 类 |

---

## 3. 合规检查 · Compliance Gate

| 风险 | 控制点 | 落地 |
|-----|-------|------|
| FTC / 广告主张 | `forbiddenPhrases.ts` 分类 + Studio 级 lint | v1.0 已分类 |
| NMPA 过度承诺 | 中文词表 | 已含 '最快' '独家代理' '批准' |
| FDA 相关 | '"FDA approved" 须绑定 NDA/BLA 号'；'expedited'/'Breakthrough' 仅官方授予后使用 | 已含 |
| Claim 无证 | Publish webhook 阻塞 + Slack 告警 | `webhooks/claim-audit.ts` |
| 证据分级 | Verified / In Development / On Request 三级 | `proofPoint.evidenceTier` + `citation.evidenceTier` 强制 enum |
| PITL AI | `aiDisclosure` singleton · 法务+合规双签 · lastReviewed ≤ 180 天 | ✅ |
| Legal 页陈旧 | `legalPage.lastReviewed` ≤ 365 天硬约束 · Studio 徽章告警 | ✅ |
| 隐私表单 | HubSpot GDPR double opt-in | contactMethod.formId 字段 |

---

## 4. 未解决问题（带入 W2-02 拍板会）

| # | 议题 | 决定人 | 默认值 |
|---|------|-------|-------|
| D1 | 三方向选一：A / B / C | Sponsor + 市场 | — |
| D2 | Trust Bar 位置 | 随 D1 | C=02 / A·B=07 |
| D3 | Sprint 定价是否公开 | 业务 + 法务 | on_request |
| D4 | Problem Frame 独立 kind | 工程 + 市场 | 独立 |
| D5 | Pilot 子页是否进主导航 | 市场 | 藏 Other Engagements |
| D6 | 多语言上线节奏 | PM | EN first · CN W4 评估 |
| D7 | AI 模块是否移到第一屏（B 方向） | 合规 + Sponsor | 移（B 专属） |

---

## 5. 下游 Handoff · W3 开工清单

W2 锁定后即推 W3-01（设计冲刺）：

- [ ] 拍板方向 → 所选 HTML 直接进 Figma tokenize（2 日）
- [ ] W2-05 schema 合并进 `packages/sanity/schemas` 主仓
- [ ] Studio v1 deploy（内部访问）· 文案团队开始灌样板
- [ ] `webhooks/claim-audit.ts` → Vercel Edge Function deploy
- [ ] 9 页线框 → 组件拆分（W3-02 Storybook 出壳）
- [ ] Sanity redirectRule 批量 CSV 导入（旧站 300+ URL）

---

## 6. 交付入口 · Quick Links

全部文件位于项目根目录：`MSH Website Rebuild/`

- [W2-01 Runbook](./W2-01 W2 运行手册 Runbook.md)
- [W2-02 Decision Deck](./W2-02 视觉拍板会 Decision Deck.md)
- [W2-03 · Direction A · 克制升级](./W2-03 首页高保真方向 A 克制升级.html)
- [W2-03 · Direction B · AI 原生](./W2-03 首页高保真方向 B AI 原生.html)
- [W2-03 · Direction C · 投资者反向尽调](./W2-03 首页高保真方向 C 投资者反向尽调.html)
- [W2-04 Wireframes v1.0](./W2-04 低保真线框 Wireframes v1.0.md)
- [W2-05 Sanity Schema v1.0 · README](./W2-05 Sanity Schema v1.0/README.md)

---

## 7. 验收签字

| 角色 | 姓名 | 签 | 日期 |
|------|------|-----|------|
| Sponsor |   |   |   |
| 市场负责人 |   |   |   |
| 工程负责人 |   |   |   |
| 设计负责人 |   |   |   |
| 合规负责人 |   |   |   |
| PM |   |   |   |

**验收状态 · Overall Status:** ☐ Approved · ☐ Approved with changes · ☐ Rejected

---

_W2-06 · 2026-04-19 · M1 拍板会 2026-05-02（Fri 15:00-16:30 HKT）_
