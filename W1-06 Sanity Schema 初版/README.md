# W1-06 Sanity Schema 初版

梅斯健康官网 Sanity Headless CMS Schema 初版（v0.1）。基于 `梅斯健康官网重构 信息架构IA文档 v1.0.md` §8 内容模型，以及 `梅斯健康集团官网重构 Copy Deck v4.1` 的结构约束编写。

## 目录结构

```
schemas/
├── index.ts                          # Schema 注册入口
├── documents/                        # 内容文档（可发布）
│   ├── page.ts                       # 通用页面（含 Homepage/About/Services 等）
│   ├── solution.ts                   # Entering China / Going Global / Cross-Border Sprint
│   ├── pilotOffer.ts                 # Quick-Start Pilot Offers
│   ├── caseStudy.ts                  # 案例（≥3 量化指标强校验）
│   ├── proofPoint.ts                 # 三层证据点（Verified/In Development/On Request）
│   ├── claim.ts                      # 合规声明池（审计）
│   ├── clientReference.ts            # 客户 Logo / 引述（匿名化默认）
│   ├── insight.ts                    # White paper / Blog / Playbook
│   ├── otherEngagementCard.ts        # Other Engagements（noindex 闸）
│   └── navigation.ts                 # 全站导航结构
├── objects/                          # 复用对象（内嵌）
│   ├── seo.ts                        # SEO 元数据（含 robots 开关）
│   ├── cta.ts                        # CTA 按钮（变体/锚点/外链）
│   ├── portableText.ts               # 富文本（Copy Deck 规则）
│   ├── metric.ts                     # 量化指标（数值+单位+来源年份）
│   ├── evidenceTag.ts                # 证据等级标签
│   ├── localized.ts                  # EN/CN 双语字段
│   └── pageSection.ts                # 首页/着陆页 9 模块 section
└── lib/
    ├── forbiddenPhrases.ts           # 禁用词正则（Copy Deck Appendix）
    └── validators.ts                 # 通用校验（Claim→ProofPoint 绑定等）
```

## 设计要点

1. **合规闸（Go-Live Gate）**
   - 所有 `claim` 必须绑定 `proofPoint`，`ProofPoint.tier = Verified` 才允许 `status = published`。
   - `caseStudy` 若 metrics < 3，禁止发布（validation 阻断）。
   - Portable Text 正文在发布前扫描 `forbiddenPhrases`，命中即标红并阻断。

2. **三层证据**
   - `proofPoint.tier ∈ { verified, in_development, on_request }`
   - 前端渲染徽标（✓ / ◐ / ⌕），`on_request` 必附联系表单 CTA。

3. **Other Engagements 隔离**
   - `otherEngagementCard` 与 `solution` 分离 schema；前端路由写死 `noindex, nofollow`。
   - `navigation` 主导航不得绑定 `otherEngagementCard`，仅允许 Footer 挂载。

4. **Lead Scoring 隔离**
   - `pilotOffer` / `solution` 表单 → HubSpot `list_id = A`（Sales SQL）
   - `otherEngagementCard` 表单 → HubSpot `list_id = B`（Partner/Referral，不计 SQL）
   - Schema 层通过 `formRoutingKey` 字段约束。

5. **i18n**
   - 采用字段级 `localized`（EN/CN 双栏）。仅 Homepage / About / Legal / IR 支持 CN；其余页面 `cnLocked = true`。

6. **版本/工作流**
   - `workflow.status ∈ { draft, legal_review, approved, published, archived }`
   - `approved → published` 需 Editor 角色（Sanity Access Control）。

## 使用

```bash
# 安装到 Sanity Studio
pnpm add @sanity/types
cp -r schemas ./apps/studio/src/
# 在 apps/studio/src/schemas/index.ts 注册
```

## 验收清单

- [ ] 10 个 document schema 可在 Studio 侧边栏呈现
- [ ] CaseStudy 创建时 metrics < 3 时禁用"发布"按钮
- [ ] Claim 未绑定 Verified ProofPoint 时 publish 阻断并提示
- [ ] 禁用词正则在 Portable Text 输入时实时提示
- [ ] OtherEngagementCard 不在主 Navigation 可选清单中
- [ ] 所有 schema 字段均有 `description` 供编辑者阅读

## 版本

v0.1 — 2026-04-19 初版，与 IA v1.0 / Copy Deck v4.1 对齐
