# W2-05 Sanity Schema v1.0

**Upstream** W1-06 Sanity Schema 初版 v0.1
**Scope** 对齐 W2-04 线框 §12 汇总需求 · 补齐 Homepage + 9 页 + 2 Pilot 子页所需所有 schema
**Consumers** Frontend（Next 14 GROQ 拉取）· Studio（Role-grouped desk）· Legal（Claim audit hook）
**Status** READY FOR DEV — 待 W2-02 拍板后进 W3

---

## 1. 变更总表 v0.1 → v1.0

### 1.1 新增 Documents
| Name | Purpose |
|------|---------|
| `pilotSubpage` | Other Engagements 下的 Pilot 子页（强制 2 份） |
| `aiDisclosure` (singleton) | AI 能力页 + 首页 AI Delivery 模块共用合规文案 |
| `legalPage` | Privacy · Terms · Cookies · Disclaimers · Whistleblower |
| `redirectRule` | 旧站 URL 迁移（批量导入） |
| `person` | Leadership · Team leads · Authors · Pilot PI 复用 |
| `contactMethod` | Final CTA / Contact 页共用联系方式 + 入口表单映射 |
| `siteSettings` (singleton) | Disclosure Bar / Legal Links / 全局开关 |

### 1.2 新增 Objects / pageSection kinds
| Object | Used by |
|--------|---------|
| `heroVariant`（enum） | hero.variant → home / solution / sprint / portfolio / listing / about / contact |
| `personaCards` | Sprint § Who for |
| `teamBand` | Solution § Team |
| `relatedSolutions` | Solution § Related |
| `timelineBand` | About § Timeline |
| `officeGrid` | About § Offices · Contact § Offices |
| `pricingTable` | Sprint § Pricing（合规 gated） |
| `pilotIndex` | Other Engagements 父页 |
| `problemFrame` | Solution § Why Now（可覆盖为 richText，保留 kind 以便独立样式） |

### 1.3 增强
- `pageSection.kind` 枚举扩展 10 项 + 加 `variant`（仅 hero 使用）
- `caseStudy.citations[]` 由自由文本升级为结构化（sourceType/doi/url/accessedAt）
- `claim ↔ proofPoint` 双向 ref（pp 反查已用 claim 列表）+ `proofPoint.evidenceTier` enum 强制
- `navigation.footerOnly[]` 新增
- `insight.readTime`（auto）+ `canonicalUrl`

### 1.4 合规
- `lib/forbiddenPhrases.ts` 分类重写：FTC / NMPA / FDA / Overpromise / Unsourced-quant
- `lib/validators.ts` 新 validator：`claimBoundAndVerified`
- Publish webhook `webhooks/claim-audit.ts`：任何 `claim.proofPoint == null` OR `proofPoint.evidenceTier != 'verified'` → publish 阻塞 + 发 Slack 告警

### 1.5 Studio
- `studio/desk-structure.ts` 按角色分组：Marketing / Medical / IR / Legal
- 非本组 schema 隐藏，降低误操作面
- Pilot / Legal / AI Disclosure 加红色徽章

---

## 2. 目录

```
W2-05 Sanity Schema v1.0/
├── README.md                       ← 本文档
├── schemas/
│   ├── index.ts                    ← 注册入口（全量）
│   ├── documents/
│   │   ├── page.ts                 ← 继承 v0.1
│   │   ├── solution.ts             ← 继承 v0.1 · +geoTag
│   │   ├── pilotOffer.ts           ← 继承 v0.1
│   │   ├── caseStudy.ts            ← 继承 v0.1 · +citations[]
│   │   ├── proofPoint.ts           ← 继承 v0.1 · +evidenceTier enum
│   │   ├── claim.ts                ← 继承 v0.1 · +bidirectional
│   │   ├── clientReference.ts      ← 继承 v0.1
│   │   ├── insight.ts              ← 继承 v0.1 · +readTime +canonical
│   │   ├── otherEngagementCard.ts  ← 继承 v0.1
│   │   ├── navigation.ts           ← 继承 v0.1 · +footerOnly[]
│   │   ├── pilotSubpage.ts         ← NEW
│   │   ├── aiDisclosure.ts         ← NEW · singleton
│   │   ├── legalPage.ts            ← NEW
│   │   ├── redirectRule.ts        ← NEW
│   │   ├── person.ts              ← NEW
│   │   ├── contactMethod.ts       ← NEW
│   │   └── siteSettings.ts        ← NEW · singleton
│   ├── objects/
│   │   ├── seo.ts                  ← 继承
│   │   ├── cta.ts                  ← 继承
│   │   ├── portableText.ts         ← 继承
│   │   ├── metric.ts               ← 继承
│   │   ├── evidenceTag.ts          ← 继承
│   │   ├── localizedString.ts      ← 继承
│   │   ├── localizedText.ts        ← 继承
│   │   ├── pageSection.ts          ← UPDATED · +kinds +variant
│   │   ├── citation.ts             ← NEW
│   │   └── pricingTier.ts          ← NEW
│   └── lib/
│       ├── forbiddenPhrases.ts     ← REWRITTEN · 分类
│       └── validators.ts           ← UPDATED · +claimBoundAndVerified
├── studio/
│   └── desk-structure.ts           ← REWRITTEN · role-grouped
└── webhooks/
    └── claim-audit.ts              ← NEW · publish gate
```

---

## 3. 拍板前置决策（W2-02 拍板会带出）

| # | 决策 | 选项 | 默认 |
|---|------|------|------|
| D1 | Homepage Trust Bar 位置 | 02 (C 方向) vs 07 (A/B 方向) | 拍板决定 |
| D2 | Sprint 页定价是否公开 | 公开范围 / on request | on request |
| D3 | Problem Frame 是否独立 kind | 独立 / 合并 richText | **独立** (W2-05 默认独立) |
| D4 | Pilot 子页是否进主导航 | 进 / 藏 Other Engagements | 藏 |
| D5 | 多语言 | EN only 上线 / EN+CN | **EN only**（CN 字段保留） |

---

## 4. 迁移 & 上线节奏

1. **W3-01 Monday** — W2-05 schemas 合并进 `packages/sanity/schemas` 主仓
2. **W3-01 Tuesday** — Studio v1 deploy（仅内部访问）· 文案团队开始灌数据
3. **W3-02 Wednesday** — Webhook `claim-audit.ts` 部署 Vercel Edge
4. **W3-03 EOW** — 全部首页模块 + 9 页样板数据就位 · 合规首轮 dry run
5. **W4** — 双语切换开关（如 D5 拍板转 EN+CN）

---

## 5. 兼容性承诺

- v0.1 的所有 document / field 保持向前兼容
- 编辑侧不会因升级丢数据
- 仅新增字段 + 扩展 enum 值 + 新增 document
- `navigation.footerOnly[]` 与 `navigation.primary[]` 并列，不影响已有发布内容

---

_W2-05 v1.0 · 2026-04-19 · Schema freeze on W2-02 sign-off_
