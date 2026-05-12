# MSH 高保真原型推进计划 · 设计文档

**版本**：2026-04-27 · v1.0
**作者**：Yog Young + Claude（brainstorming 协同产物）
**配套**：信息架构 IA v2.0 · Copy Deck v4.1（待升 v4.2）· Brand Guidelines v1.1 · W1-05 Homepage Mockup v0.6
**适用范围**：`medscihealthcare.com` 主站 13 个待建原型页面 + 既有 7 页历史债回填
**域名**：medscihealthcare.com（原型环境：`prototype.medscihealthcare.com`，`<meta robots="noindex">`）

---

## 0. 目标与边界

### 0.1 目标

在 6 周内完成 `medscihealthcare.com` 主站的全部高保真原型，使站点可作为：

1. **港股 2415.HK 投资者反向尽调**的可访问入口
2. **美国市场 BD（Going Global）**的销售落地资产
3. **后续 CMS 阶段的视觉与组件 SSoT**

### 0.2 范围内

- 13 个新增页面：`/ai-platform`、`/case-studies/`（列表 + 3 详情）、`/insights/`（列表 + 详情模板）、`/about`、`/contact`、`/pilots/*` × 2、`/legal/*` × 3、`/services/other-engagements`
- 7 个既有页面历史债回填：Homepage + 6 个 `/solutions/*`
- Copy Deck v4.1 → v4.2 升级（2 笔回灌 + 4 个新章 + 1 章重写）

### 0.3 范围外

- CMS 选型与建模（Sanity Schema 进入 W3+ 后再议）
- 真实 SEO 落地（sitemap.xml、robots.txt 生产配置在 W8-W10 单独排期）
- 真实数据接入（HubSpot Lead Scoring、GA4 事件属于 PRD 阶段）
- 中文本地化的非 IA 强制双语页

---

## 1. 决策锁定（来自 brainstorming 澄清）

| 维度 | 决策 | 备注 |
|---|---|---|
| 推进顺序 | Top Nav 五项优先 | AI Platform → Case Studies → Insights → About → Contact → Pilots → Legal → Other |
| 技术栈 | 沿用 React-in-HTML + Babel standalone | 单页独立 .html，unpkg 加载 React/Babel/Lucide，无构建链 |
| 工作目录 | `Documents/MSH-website-rebuild/MSH Website Rebuild/prototype/` | 原型 SSoT，Cowork 自动同步 |
| 文案策略 | 先补 Copy Deck v4.2 章节定稿，再起对应原型页面 | 定稿冻结当周对应批次启动 |
| 验收标准 | B 档：响应式三档断点（≤640 / 641-1024 / ≥1025） | 满足反尽调访客 iPad / 手机使用场景 |
| 推进方案 | 方案 ②（章节交付式） | Copy Deck 与原型同周配对，每周可见产出 |

---

## 2. 待建页面清单与批次（节 A）

### 2.1 6 批次 + 1 收尾批次

| 批次 | 周 | 类型 | 页数 | 页面 | Copy Deck v4.2 章节依赖 |
|---|---|---|---|---|---|
| **B0** | W1（并行 B1） | 文档回灌 | 0 | — | §1.3b + §3b 反向回灌（从 JSX 提取，送法务 / IR 二审） |
| **B1** | W1 | 新页 | 1 | `/ai-platform` | §1.6 重写（URL 改名 + 4 步 PITL 流程图 + 合规边界） |
| **B2** | W2 | 新页 | 4 | `/case-studies/` 列表 + 3 详情 | §7 新章（Case Study 模板 + 3 案例，9 metric 全填） |
| **B3** | W3 | 新页 | 2 | `/insights/` 列表 + `/insights/slug-template` | §8 新章（列表逻辑 + 详情模板 + 3 篇占位文章 mock 数据驱动同一模板） |
| **B4** | W4 | 新页 | 2 | `/about` + `/contact` | §9 About + §10 Contact form 字段定义 |
| **B5** | W5 | 新页 | 6 | `/pilots/*` × 2 + `/services/other-engagements` + `/legal/*` × 3 | §11 Pilots（抽自 §2.6/§3.6）+ §12 Legal 三联（含 CN） |
| **B6** | W6 | 历史债 | 7 | Homepage + 6 solutions 响应式回填 | 不涉及文案 |

### 2.2 切批次依据

- **B1 单页打头**：补 Top Nav 第三项盲区，反尽调访客最看重的 AI 故事页优先打通。
- **B2 模板对称**：4 页同构，做完一页其余 3 页套模板，单周完成可控。
- **B3 双页骨架**：Insights 在 CMS 阶段会大改，原型只投入模板骨架。
- **B4 路径终点**：About / Contact 是反尽调路径终点，B1-B3 已为其供给入站链接。
- **B5 工具性收尾**：Pilots 已有 §2.6/§3.6 文案可抽，Legal 走法务模板，Other 复用 §5。
- **B6 收尾回填**：所有新页面遵循 B 档断点；既有 7 页延后回填以避免影响 B1-B5 节奏。

### 2.3 关键阻塞与缓解

| 阻塞点 | 出现批次 | 缓解策略 |
|---|---|---|
| 法务 / IR 二审周期 ≥ 5 天 | B4（About）/ B5（Legal CN） | 章节定稿提前一周送审，原型实现并行进行 |
| Case Study 9 个 metric 全填齐 | B2 | 数据采集任务前置到 W1，与 B0 并行 |
| Pilots ⚑ PRICING 占位 | B5 | 占位明示标记，不阻塞原型；上线前必须拍板 |
| 既有 7 页桌面零回退 | B6 | 视觉对照测试：B6 部署前后 1280 桌面截图 diff |

---

## 3. Copy Deck v4.2 章节地图（节 B）

### 3.1 v4.1 → v4.2 增量结构

```
v4.2 = v4.1 + 2 笔回灌 + 4 个新章 + 1 章重写
```

| 章节 | 类型 | 批次 | 来源 / 备注 |
|---|---|---|---|
| §1.1 Hero | 无改 | — | — |
| §1.2 Quick Start | 无改 | — | — |
| §1.3 Two Primary Paths | 无改 | — | — |
| **§1.3b WHAT WE DELIVER（4 卡）** | 回灌 | B0 | 源：`components/Hero.jsx` 右列 |
| §1.4 Why MedSci | 无改 | — | — |
| §1.5 Case Studies | 无改 | — | — |
| **§1.6 AI-Enabled Delivery** | 重写 | B1 | URL 改 `/ai-platform`；扩 4 步 PITL；加合规边界 |
| §1.7 Trust Bar | 无改 | — | — |
| §1.8 Insights | 无改 | — | — |
| §1.9 Final CTA | 无改 | — | — |
| §2 Entering China | 无改 | — | — |
| §3 Going Global (US) | 无改 | — | — |
| **§3b 业务块落地页 ×3** | 回灌 | B0 | 源：`PageMedicalEvidence.jsx` / `PagePhysicianEngagement.jsx` / `PageMedicalCommunications.jsx` |
| §4 Cross-Border Sprint | 无改 | — | — |
| §5 Other Engagements | 无改 | — | — |
| §6 Appendix | 增列 | B0+ | 新增 §3b/§7-§12 涉及禁词与 Claim 清单 |
| **§7 Case Studies 详情 ×3** | 新章 | B2 | §7.0 模板 + §7.1-§7.3 三案例 |
| **§8 Insights 列表 + 详情模板** | 新章 | B3 | §8.0 列表 + §8.1 详情骨架 + §8.2 占位 ×3 |
| **§9 About** | 新章 | B4 | §9.1 公司简介 / §9.2 领导层 / §9.3 3.33M+ / §9.4 合规审阅 / §9.5 双语 |
| **§10 Contact (Smart Form)** | 新章 | B4 | §10.1 字段定义 / §10.2 Thank-you / §10.3 路由规则 |
| **§11 Pilots ×2** | 新章 | B5 | §11.1 China Sprint / §11.2 FDA Diagnostic |
| **§12 Legal ×3** | 新章 | B5 | §12.1 Terms / §12.2 Privacy / §12.3 Disclosures（EN+CN） |

### 3.2 关键约束

- **§7 Case Studies**：9 个 metric 全部 metric1/metric2/metric3 非空非 ⚑ 才允许发布；任一占位阻断当批次。
- **§9 / §12 双语**：CN 文案走法务 + IR 二审，审核周期 ≥ 5 天，B4/B5 排期含 buffer。
- **§11 ⚑ PRICING**：不阻塞原型（保留占位），但发布前必须拍板。
- **§1.6 重写**：与 `/ai-enabled-delivery` → `/ai-platform` 301 配置同步部署。原型阶段通过 Cloudflare Pages `_redirects` 文件配置（一行规则），不依赖 W8-W10 的真实 SEO 落地。
- 每章定稿冻结当周对应批次原型启动，不允许回改。

### 3.3 审核路径

```
Draft（内容编辑）
  → 禁词扫描（W2-05 Sanity Schema v1.0/schemas/lib/forbiddenPhrases.ts（已存在，源自 W1-06 初版））+ Claim 表关联检查
  → Legal sign-off（强制：§6 / §9 / §11 / §12）
  → IR sign-off（强制：§9 / §12.3 港股披露）
  → Approved → 当周原型批次启动
```

---

## 4. 目录结构与组件复用（节 C）

### 4.1 prototype/ 目录最终形态

```
Documents/MSH-website-rebuild/MSH Website Rebuild/
├── prototype/                              ← 新建，原型 SSoT
│   ├── index.html                          ← Homepage（从 Homepage.html 重命名）
│   ├── ai-platform.html                    [B1]
│   ├── case-studies/
│   │   ├── index.html                      ← 列表页 [B2]
│   │   ├── entering-china-evidence-hcp.html        [B2]
│   │   ├── entering-china-localized-content.html   [B2]
│   │   └── going-global-fda-evidence-bridge.html   [B2]
│   ├── insights/
│   │   ├── index.html                      ← 列表 [B3]
│   │   └── slug-template.html                      ← 详情模板（1 篇示例文章） [B3]
│   ├── about.html                          [B4]
│   ├── contact.html                        [B4]
│   ├── pilots/
│   │   ├── china-evidence-sprint.html      [B5]
│   │   └── fda-evidence-gap-diagnostic.html [B5]
│   ├── legal/
│   │   ├── terms.html                      [B5]
│   │   ├── privacy.html                    [B5]
│   │   └── disclosures.html                [B5]
│   ├── services/
│   │   └── other-engagements.html          [B5]
│   ├── solutions/                          ← 既有 6 页迁入
│   │   ├── entering-china.html
│   │   ├── going-global-us.html
│   │   ├── medical-evidence.html
│   │   ├── physician-engagement.html
│   │   ├── medical-communications.html
│   │   └── cross-border-medical-content-sprint.html
│   ├── components/
│   │   ├── Button.jsx                      [复用]
│   │   ├── Header.jsx                      [复用 + 改 Solutions mega menu]
│   │   ├── Footer.jsx                      ← 从 Sections3.jsx 第 266 行 Footer() 抽出独立文件
│   │   ├── Hero.jsx                        [Homepage 专用，复用]
│   │   ├── Sections1.jsx / 2 / 3           [Homepage 专用，复用]
│   │   ├── SolutionsShell.jsx              [复用 + B6 移动端断点扩展]
│   │   ├── SolutionHeader.jsx              [复用]
│   │   ├── SolutionFooter.jsx              [复用]
│   │   ├── PageShell.jsx                   ← 新建，通用页壳
│   │   ├── ContentBlocks.jsx               ← 新建，4 块原子（ProseBlock / TwoColumn / StatStrip / EvidenceList）
│   │   ├── PilotCard.jsx                   ← 新建 [B5]
│   │   ├── CaseStudyCard.jsx               ← 新建 [B2]
│   │   ├── InsightCard.jsx                 ← 新建 [B3]
│   │   ├── SmartForm.jsx                   ← 新建 [B4]
│   │   └── LangSwitch.jsx                  ← 新建 [B4/B5]
│   ├── assets/
│   │   ├── colors_and_type.css             [复用]
│   │   ├── responsive.css                  ← 新建 [B6 三档断点 token]
│   │   ├── fonts/                          [复用，Footlight MT / Trajan Pro]
│   │   └── logo/                           [复用]
│   └── README.md                           ← 新建（运行 / 部署 / 约定）
├── prototype-archive/
│   └── 2026-04-27-claude-design-baseline/  ← zip 解压原貌存档（只读）
└── ...其他既有规划文档
```

### 4.2 组件复用矩阵

| 新页面 | 必装 | 套既有 | 新做 |
|---|---|---|---|
| ai-platform | Header / Footer / PageShell | — | StepDiagram（4 步 PITL）/ ComplianceCallout |
| case-studies/index | Header / Footer / PageShell | CaseStudyCard | FilterBar（serviceLine） |
| case-studies/[slug] | Header / Footer / PageShell | — | CaseStudyHero / MetricTriad / QuoteBlock |
| insights/index | Header / Footer / PageShell | InsightCard | TopicChips |
| insights/_slug | Header / Footer / PageShell | — | ArticleBody（Portable Text mock）/ AuthorMeta |
| about | Header / Footer / PageShell / LangSwitch | — | LeadershipGrid / ComplianceTable |
| contact | Header / Footer / PageShell | — | SmartForm |
| pilots/* | Header / Footer / PageShell | PilotCard | FAQAccordion（V2 可选） |
| legal/* | Header / Footer / PageShell / LangSwitch | — | LegalProse |
| services/other | Header / Footer / PageShell | — | OtherEngagementCard ×3 |

**4 块"原子内容块"覆盖 80% 新页面**：ProseBlock / TwoColumn / StatStrip / EvidenceList → `ContentBlocks.jsx`。

### 4.3 既有组件必要改动

**Header.jsx**：
- 改 nav 顺序对齐 IA v2.0 五项：`Solutions ▾ · Case Studies · AI Platform · Insights · About`
- Solutions 下拉改 mega menu（三组：By Path / By Deliverable / Quick Start）
- 加 LangSwitch 占位（仅在双语页激活）
- 移动端汉堡菜单（B6 回填）

**Footer.jsx**（从 `Sections3.jsx` 第 266 行 `Footer()` 抽出独立文件，不重写逻辑）：
- 4 列结构对齐 IA §3
- "Other services" 链接 `rel="nofollow"`
- "Investor Relations" 链接 `rel="external noopener"` + 外链图标
- v4.2 章节定稿后填实链接

**SolutionsShell.jsx**（B6 回填）：
- 加 `@media` 三档断点（≤640 / 641-1024 / ≥1025）
- Hero 右列移动端堆叠至文案下方（IA §13 强制）

### 4.4 资产 / 字体 / token 复用

- 字体 Footlight MT / Trajan Pro 已在 zip 内，整体迁入 `prototype/assets/fonts/`
- `colors_and_type.css` 一字不改全量复用
- 新加 `responsive.css` 只放断点 token，不重复颜色 / 字号

### 4.5 部署 / 预览

- 全静态：本地双击 `index.html` 即可预览（unpkg 走外网）
- 部署：Cloudflare Pages 或 Vercel 静态托管，`prototype/` 目录 push 即上线
- 域名：`prototype.medscihealthcare.com` 二级域，加 `<meta robots="noindex">` 防索引

---

## 5. 单页验收清单（节 D · Definition of Done）

每个新页面发布前必过 3 类共 24 项 gate。

### 5.1 通用 gate（13 页全适用，18 项）

```
□  1. 路由与 IA v2.0 §1 一致（URL / slug / 层级）
□  2. 落进 prototype/ 正确子目录
□  3. <title> ≤ 60 字符
□  4. <meta description> ≤ 155 字符
□  5. <link rel="canonical"> 配齐
□  6. <meta name="robots">：默认 index,follow；Other Engagements 强制 noindex,nofollow
□  7. OpenGraph 配齐（og:title / description / image 1200×630）
□  8. JSON-LD schema 按 IA §11.2 表配
□  9. Header / Footer 全局组件挂载，Top Nav 5 项对齐
□ 10. Footer 4 列文案与 IA §3 一致；Other services 链 rel="nofollow"
□ 11. 所有 CTA 按钮可点击，锚点跳转生效，无 404
□ 12. 主体宽度容器 max-width 与 Homepage 同 token
□ 13. 响应式 3 档（≤640 / 641-1024 / ≥1025）截图无横滚
□ 14. 字体加载 Footlight MT / Trajan Pro / UI 字体三者皆生效
□ 15. 颜色仅来自 colors_and_type.css token，无内联 hex
□ 16. 无禁词命中（W2-05 Sanity Schema v1.0/schemas/lib/forbiddenPhrases.ts（已存在，源自 W1-06 初版））
□ 17. 无 ⚑ 占位符遗漏（文案章节定稿前不进 gate）
□ 18. 控制台无 React/Babel error 或 warning
```

### 5.2 信任与合规 gate（部分页面，4 项）

```
□ 19. 数字 claim 全部带 source + year + approvedBy
       适用：ai-platform / about / case-studies/* / insights/_slug
□ 20. logo 展示有授权或走匿名化标签
       适用：case-studies/* / about / homepage Trust Bar
□ 21. AI/PITL 表述合规（永远配 PITL 解释，不单独宣称 AI）
       适用：ai-platform / case-studies/*（含 AI tag）/ homepage #ai
□ 22. 双语页 hreflang 与 LangSwitch 行为一致
       适用：about / legal/*（CN 文案需法务 + IR 二审通过）
```

### 5.3 页面专属 gate（2 项）

```
□ 23. Case Study 3 metric 全部非空非 ⚑
       触发：case-studies/[slug] 任一详情页
□ 24. Smart Form business_block 字段枚举值与 v2.0 schema 一致
       （evidence | physicians | communications | platform | paths | sprint | other）
       触发：contact.html
```

### 5.4 验收方式

| 环节 | 工具 | 通过判据 |
|---|---|---|
| 自动扫描 | `node scripts/check-page.js <path>`（新建脚本） | 1-8 / 16-18 全自动 |
| 人工目检 | 三档断点截图 + 法务 / IR 邮件回执 | 9-15 / 19-22 |
| 数据核对 | metric / Claim / logo 表逐项核对 | 23-24 |
| 浏览器测试 | Chrome / Safari / Edge × {desktop / iPad / iPhone 14} 9 组合 | 13 / 18 |

### 5.5 批次级附加 gate

| 批次 | 附加 gate |
|---|---|
| B0 | Copy Deck v4.2 §1.3b/§3b 与 JSX 文案 100% 一致（diff 工具核对） |
| B1 | `/ai-enabled-delivery` → `/ai-platform` 301 通过 Cloudflare Pages `_redirects` 文件配置（原型托管侧），上线即生效；W8-W10 真实 SEO 落地阶段再迁移到生产源站 |
| B2 | 9 个 metric 全部 ✅；CMS schema CaseStudy.serviceLines[] 落地 |
| B3 | Insights 模板可被 v2 复用（Portable Text 字段 mock 留接口） |
| B4 | About / Contact 双语切换可走通；Smart Form 7 枚举触发 7 条 thank-you 文案 |
| B5 | Pilots ⚑ PRICING 占位明示标记；Legal CN 法务回执存档 |
| B6 | Homepage + 6 solutions 三档断点回填后 1280 桌面视觉零回退 |

### 5.6 Gate 顺序

```
文案章节定稿
  → 原型实现
  → 自动扫描通过
  → 自检三档断点
  → 法务 / IR 邮件回执
  → 提交批次 commit（本地 trace）
  → 部署 prototype.medscihealthcare.com
```

---

## 6. 风险与对策

| 风险 | 影响 | 概率 | 对策 |
|---|---|---|---|
| 法务 / IR 二审延误 | B4/B5 推迟 | 中 | 章节定稿前置一周送审，原型实现并行进行 |
| Case Study metric 数据采集滞后 | B2 阻塞 | 中 | W1 启动数据采集任务，与 B0 并行 |
| Copy Deck 章节定稿被回改 | 方案 ② 节奏破坏 | 低 | 定稿即冻结，回改触发新版本号（v4.2.1） |
| 既有 6 solutions 页响应式回填导致桌面回退 | B6 风险 | 中 | 部署前后 1280 截图 diff 强制对比 |
| unpkg CDN 抖动导致原型加载失败 | 演示翻车 | 低 | W5 部署前下载 React/Babel/Lucide 到 `assets/vendor/` 自托管（已纳入 §7 W5 deliverable） |
| Pilots ⚑ PRICING 在反尽调演示前未拍板 | 演示尴尬 | 中 | 占位明示"Pricing on request"，不渲染 ⚑ |
| **港股选择性披露**（Trust Bar / About 数字越过 IR 单方公开） | 合规重大 | 中 | 所有数字 claim 强制走 §3.3 IR sign-off；原型 noindex 不构成公开披露但仍按"对外材料"标准审 |
| **跨境个人数据驻留**（US BD Smart Form 收集 / 触达 PIPL+GDPR+CCPA 三重） | 合规中 | 中 | Contact 表单字段最小化；明示数据处理目的与跨境路径；§10 文案过法务双审 |

---

## 7. 交付物总览

| 周 | 文档交付 | 原型交付 | 累计原型页数 |
|---|---|---|---|
| W1 | Copy Deck v4.2（§1.3b / §3b 回灌 / §1.6 重写） | `/ai-platform` | 8（含既有 7） |
| W2 | Copy Deck v4.2（§7） | `/case-studies/` × 4 | 12 |
| W3 | Copy Deck v4.2（§8） | `/insights/` × 2 | 14 |
| W4 | Copy Deck v4.2（§9 / §10） | `/about` + `/contact` | 16 |
| W5 | Copy Deck v4.2（§11 / §12）+ unpkg 资源自托管下载 | `/pilots/*` × 2 + `/legal/*` × 3 + `/services/other-engagements` | 20 |
| W6 | — | Homepage + 6 solutions 响应式回填 | 20（视觉升级，页数不增） |

**最终交付**：20 页原型（13 新 + 7 既有），其中 W6 对既有 7 页做响应式回填，不增页数 + Copy Deck v4.2（含 4 个新章 + 2 笔回灌 + 1 章重写）。

---

## 8. 非范围与未决项

### 8.1 非范围（明确不做）

- CMS（Sanity / Contentful 等）选型与建模
- 真实 Smart Form 后端（HubSpot 接入留至 PRD 阶段）
- GA4 事件埋点的真实部署
- /zh/* 路径的非强制双语页（非 IA 指定页面不做 CN）
- A/B 测试基础设施

### 8.2 未决项（spec 锁定后处理）

- [ ] `prototype/` 与既有 W1/W2 文件夹的归档关系：是否把 W2-03 四个高保真方向 .html 也移入 `prototype-archive/`？
- [x] **CN 文案审核责任人锁定**：内容编辑（草稿）→ 法务（合规审阅，强制）→ IR 总监（港股披露相关页 §9.1 / §12.3 强制双签）→ Sponsor 终审。审批方式：邮件回执，附件留档于 `docs/approvals/YYYY-MM-DD-<page>-CN.eml`。
- [ ] Pilots ⚑ PRICING 的拍板节奏是否独立排期
- [ ] B6 响应式回填是否需要单独的视觉评审会（建议合并到 W6 验收）

---

## 9. 后续动作

1. 本 spec 走 `spec-document-reviewer` 复核循环（最多 3 轮，超出转人工）。
2. 用户审阅 → 通过 → 进入 `superpowers:writing-plans` 写实施计划。
3. 实施计划阶段产出：批次级任务拆分、每页面级 checklist、风险监控仪表盘草案。

---

## 附录 A · 决策追溯

| 决策点 | 选项 | 用户选择 | 时间 |
|---|---|---|---|
| 推进顺序 | 信任优先 / 漏斗优先 / Top Nav 优先 / 复用优先 | Top Nav 优先 | 2026-04-27 |
| 技术栈 | React-in-HTML / Next.js / 静态 HTML | React-in-HTML | 2026-04-27 |
| 工作目录 | 新建 prototype/ / 进 W2-07/ / 另建根目录 | 新建 prototype/ | 2026-04-27 |
| 文案策略 | 占位 ⚑ / 先补 v4.2 / 混合 | 先补 v4.2 | 2026-04-27 |
| 验收标准 | A / B / C / D | B 响应式断点 | 2026-04-27 |
| 推进方案 | ① 串行 / ② 章节交付 / ③ 双轮过 | ② 章节交付 | 2026-04-27 |

---

> 本文档为 brainstorming 产物，与 IA v2.0、Copy Deck v4.1（待升 v4.2）、Brand Guidelines v1.1 配套。
> 下一步：`spec-document-reviewer` 审阅 → 用户审阅 → `superpowers:writing-plans`。
