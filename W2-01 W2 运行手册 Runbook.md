# W2 运行手册 Runbook

**梅斯健康集团官网重构 · www.medscihealthcare.com**
版本 v1.0 · 2026-04-26 · 面向：设计 / 前端 / CMS / 合规 / PM

> W2（2026-04-27 → 2026-05-03）核心命题：**M1 视觉拍板** + **IA 落到低保真线框** + **Sanity Schema v1.0 冻结**。本周结束时，设计与数据模型必须双双进入可以不可逆推进的状态；W3 起前端不再等 VI、也不再等 schema。
>
> 本 Runbook 只收录 W2 相关节奏，仓库结构/分支策略/环境变量/CI 等请继续沿用 W1-02 Runbook 相应章节。

---

## 0. W2 目标（SMART）

在 2026-05-03 前完成 5 项，缺一阻断 W3：

1. **M1 拍板闭环**：3 套首页高保真方向 → Sponsor + 市场负责人 **一次性**拍板其一 → 锁为 v1.0。
2. **VI 终版冻结**：W1-04 Brand Guidelines 升级到 v1.0（去掉 TBD 字段，设计令牌 JSON 发包）。
3. **9 页 + 2 Pilot 子页低保真线框入 Figma**：desktop + mobile 两套，模块顺序与 IA §4 对齐。
4. **Sanity Schema v1.0**：W1-06 初版扩到完整 document 集合 + 强校验 + Studio desk 分组 + workflow hook；`sanity build` 通过。
5. **W3 Sprint Plan 分发**：W2 末前全员拿到 W3 任务卡，不得跨周拖延。

**非目标**（W2 不做）：
- 不做任何真实 CMS 内容录入（Copy Deck 文案尚未全锁）。
- 不开前端页面开发（等 VI 拍板 + 线框齐后 W3 启动）。
- HubSpot Smart Form 不在 W2 作业范围（W7 窗口）。

---

## 1. 里程碑 · W2 M1 Gate

**M1 · 视觉拍板**（W2 末 2026-05-02 周五 15:00）

| 放行条件 | 证据 |
|---|---|
| 3 方向高保真 HTML 原型已产出并可在 Preview URL 访问 | W2-03 交付物 |
| Sponsor + 市场负责人 + Designer 现场到齐（不允许代签） | 会议纪要签到表 |
| 《视觉拍板会 Decision Deck》每一决策行均有"选 A/B/C"记录 | W2-02 签字页 |
| 拍板结果当场写入 `msh-design-tokens/DECISION.md` 并 commit | Git 提交 SHA |
| Designer 承诺 W3 末前出 Figma 终稿 | Designer 签字 |

**不过 Gate 的后果**：W3 前端开发不启动；VI 再议事项进入 W3 日程第一优先，压缩后续 buffer。按 Kick-off Deck §7 R3 风险处置。

---

## 2. W2 交付物清单

| 代号 | 交付物 | 负责 | 格式 | 对齐文档 |
|---|---|---|---|---|
| W2-01 | W2 运行手册 Runbook（本文档） | PM | md | 本文档 |
| W2-02 | 视觉拍板会 Decision Deck | PM + Designer | md | Kick-off Deck §4 M1 |
| W2-03 | 首页高保真方向 A/B/C HTML 原型 | Designer + 前端 | HTML (3 files) | W1-05 v0.1 为起始基线 |
| W2-04 | 9 页 + 2 Pilot 子页低保真线框 | Designer | md（ASCII 线框 + 要素清单）+ Figma link | IA §4 模块映射 |
| W2-05 | Sanity Schema v1.0 | CMS / Integrations | TS code + README.md | W1-06 v0.1 为基线 |
| W2-06 | W3 Sprint Plan + 任务卡 | PM | Linear board 截图 + md | Kick-off §4 里程碑 M2 |

---

## 3. W2 日程（工作日 5 天）

| 日 | 日期 | 上午 | 下午 | 主理 | 交付闸 |
|---|---|---|---|---|---|
| Day 1 | 周一 4/27 | W1 交付物回看 + W2 任务分发（30 min） | Designer 启动 3 方向探索；CMS 启动 Schema v1.0 升级 | PM | — |
| Day 2 | 周二 4/28 | Designer × 前端对齐：组件工程可行性（Hero 动效 / 表单 / 徽标系统） | Designer 产出 3 方向 Figma 初稿；CMS 完成 `caseStudy / claim / proofPoint` 强校验 | Designer + CMS | 3 方向 Figma 初稿 in-review |
| Day 3 | 周三 4/29 | 低保真线框 11 页并行产出（Designer 主导，2 Pilot 子页由 CMS 协助 prop 出来） | Schema v1.0 desk 结构分组完成；合规列入 forbiddenPhrases 全量 | Designer + CMS + Compliance | 线框 drafts in Figma |
| Day 4 | 周四 4/30 | 3 方向 HTML 原型前端出样（Designer + 前端配对 2h 短会） | 内部预审会（14:00 90 min，无 Sponsor）：消除明显硬伤，把 3 方向从"候选"筛成"上会候选" | Designer + 前端 + PM | 3 方向 HTML Preview URL 可访问 |
| Day 5 | 周五 5/02 | Schema v1.0 `sanity build` + `sanity deploy` 到 preview dataset；冒烟 CRUD 测试 | **15:00 M1 拍板会**（90 min）；16:30 W3 Sprint Plan 分发 | 全员 | **M1 Gate** |

**周六 5/03 缓冲**：仅用于 M1 未过时的返工；若 Gate 过，全员休息。

---

## 4. 职责矩阵（W2 专用，RACI）

| 交付物 | R | A | C | I |
|---|---|---|---|---|
| 3 方向高保真方向 | Designer | Sponsor | 市场 / Tech Lead / PM | 全员 |
| 低保真线框 11 页 | Designer | PM | 内容 / CMS | 全员 |
| Schema v1.0 升级 | CMS / Integrations | Tech Lead | Compliance / Designer | PM |
| 拍板会组织 | PM | Sponsor | Designer | 全员 |
| W3 任务分发 | PM | Tech Lead | 各 Owner | 全员 |

R=责任执行 A=最终负责 C=咨询 I=知会。

---

## 5. 关键决策清单（W2 当场拍板，不可延后）

1. **首页视觉方向**：A（保守升级）/ B（AI 主题重定位）/ C（投资者反向尽调特化）——见 W2-02。
2. **主色终版 HEX**：W1-04 Brand Guidelines v0.9 中 `primary.600` 候选 2 组，需在拍板会落定。
3. **Hero 动效档位**：静态 / 轻度动效（CSS transition）/ 重度动效（WebGL / Lottie）——与 Tech Lead 协商工时。
4. **Case Study 三卡排版**：水平滚动卡 / 3 栏栅格 / 带筛选列表——影响 `caseStudy` schema preview field 设计。
5. **Trust Bar logo 呈现**：灰度 logo 墙 / Verified 数字墙 / 两者并列——影响合规 logo 授权范围判断。
6. **移动端断点**：320 / 390 / 430 / 768 / 1024 / 1440 中取 5 档作为 QA 基线。
7. **CN 首页是否 W1 Go-Live**：是（并入 M3 Staging）/ 否（延至 V2）——影响 i18n 工时 2–3 人日。

拍板结果当天写入 `msh-design-tokens/DECISION.md`，Commit message 格式：`decision(m1): …`。

---

## 6. 视觉拍板会操作指南

### 6.1 会前 24h 准备（Day 4 周四 17:00 前完成）

- PM：3 方向 Preview URL（A/B/C）发给 Sponsor + 市场负责人，要求过目 ≥ 15 分钟带备注入会。
- Designer：3 方向差异矩阵（单页 A4 打印），标注"不可兼得的取舍"（例：方向 B 的视觉冲击力 vs. 方向 A 的稳定感）。
- PM：签字页双份纸版，含 7 项决策清单（§5）。
- Tech Lead：3 方向的工程化成本估计（以 Designer 方向一为基线 1.0×）。

### 6.2 会议议程（90 min）

| 段 | 内容 | 主理 |
|---|---|---|
| 0–5 min | 开场：重申 M1 拍板不可回退原则 | PM |
| 5–20 min | Designer 讲 3 方向设计意图（每方向 5 min） | Designer |
| 20–35 min | Preview URL 现场过完整首页（每方向 5 min） | Designer + 前端（演示） |
| 35–55 min | 7 项决策逐一过签（每项 2–3 min，计时制） | PM 主持 |
| 55–75 min | 对选中方向提出可接受的微调清单（不超过 10 条） | Sponsor + 市场 |
| 75–85 min | 微调清单 → Designer 承诺 W3 末前交付终稿 | Designer |
| 85–90 min | 签字 + 决策提交 Git | 全员 |

### 6.3 会议纪律（硬规则）

- **不讨论不涉及 7 项决策的问题**；其他争议全部记录入 `W2-02 Appendix · Parking Lot`，不影响签字。
- **未到场者一律视为默认通过**；不接受会后复议（对齐 Kick-off §7 R3）。
- **15 分钟规则**：任一决策争论超过 15 分钟，PM 有权搁置并由 Sponsor 拍板。

---

## 7. Sanity Schema v1.0 验收清单（CMS 侧）

W1-06 初版 → v1.0 升级路径：

- [x] 继承：10 个 document schema + 8 个 object schema。
- [ ] 新增 `pilotSubpage` document（覆盖 `/pilots/china-evidence-sprint` / `/pilots/fda-evidence-gap-diagnostic`）。
- [ ] 新增 `redirectRule` document（301 跳转表，为 W11 Go-Live 做数据准备）。
- [ ] 强化 `caseStudy` schema：`metrics` 数组 min=3 改为运行时校验 + UI 级 banner。
- [ ] 强化 `claim` ↔ `proofPoint` 绑定：publish 时若 `proofPoint.tier != verified` 必须同时设 `placeholderBadge=true`。
- [ ] `pageSection.kind` 枚举补齐 Solution 页专用模块（whoItsFor / problems / whatWeDeliver / boundaries / secondaryEntry）。
- [ ] `navigation` schema 增加 `footerOnly` 字段，防止 Other Engagements 被拖到主导航。
- [ ] `forbiddenPhrases.ts` 从 Copy Deck Appendix 全量导入（~40 条），分 `severity = warn / block`。
- [ ] Studio `desk-structure.ts`：按角色分组（Content / Compliance / System）；`legal_review` 状态文档自动聚合到 Compliance 视图。
- [ ] Studio 发布按钮 hook：publish 前调 `/api/claim-audit` 校验全量 Claim 可溯源，失败则 block。
- [ ] `pnpm --filter msh-studio run build` 通过；`sanity deploy --dataset preview` 成功。
- [ ] 冒烟：Studio 手动创建 1 Homepage + 1 Solution + 1 CaseStudy + 1 Claim，校验阻断文案全部可见。

验收闸：Day 5 上午 CMS / Integrations 演示 5 min + Tech Lead 签字。

---

## 8. 风险与升级（W2 专属）

| # | 风险 | 可能性 | 影响 | 缓解 | 触发人 |
|---|---|---|---|---|---|
| W2-R1 | 3 方向 Sponsor 都不满意 → M1 延期 | 中 | 极高 | 会前 24h 预沟通；Designer 不接受"再出 1 版"，只接受"在 A/B/C 基础上微调" | PM |
| W2-R2 | Designer 出方向时间不够 → Day 4 无法进入原型化 | 中 | 高 | Day 2 设硬闸；不足则压缩方向数到 2（A + B），放弃 C | Designer |
| W2-R3 | Schema 校验规则过严阻断编辑体验 | 中 | 中 | 所有 severity=block 校验必须附 actionable 错误文案；Day 4 内部演示取真实反馈 | CMS |
| W2-R4 | 市场负责人请假 | 低 | 极高 | PM 提前 1 周锁档期；备选：改为录像授权 + 书面投票（仅限不可抗力） | PM |
| W2-R5 | Tech Lead 对方向 C 工程成本评估过高导致流产 | 中 | 中 | Day 4 内部预审就暴露工程成本；成本分歧当天在群里闭环，不带到拍板会 | Tech Lead |

升级路径同 W1-02 §11。

---

## 9. W2 → W3 交接清单

W2 末（周五 17:00 前）必须入库：

- [ ] 首页 v1.0 视觉方向：1 HTML（基于拍板方向）+ Figma 终稿链接（Designer 承诺 W3 末交）+ `msh-design-tokens/DECISION.md` 已 commit。
- [ ] 11 页低保真线框 Figma 文件 + 导出 PNG 提交到 `msh-web/docs/wireframes/`。
- [ ] `@medsci/design-tokens@0.2.0` 发到内部 npm（包含 W2 拍板色 + 字号 + 间距）。
- [ ] Sanity Schema v1.0 合并至 `main`；Studio preview dataset 可用。
- [ ] W3 Sprint Plan 入 Linear（M2 目标：Sanity Studio 上线 + 首页 CMS 接线 + 2 主路径页线框进设计稿）。
- [ ] 本 Runbook `签收`行已由 Tech Lead / PM / Compliance 三方签字。

未完成项需在 W3 Day 1 Standup 当日闭环，不得携入 W3 第二日。

---

## 10. 附录：W2 命令速查

```bash
# Schema v1.0 本地验证
cd msh-studio
pnpm install
pnpm build
pnpm sanity schema extract           # 输出 schema.json 供前端 type-gen
pnpm sanity deploy --dataset preview

# Design tokens 发包
cd msh-design-tokens
pnpm version minor                   # 0.1 → 0.2
pnpm build
pnpm publish --registry=https://npm.medsci.internal

# 3 方向 Preview
cd msh-web
pnpm dev --filter homepage-a         # localhost:3001
pnpm dev --filter homepage-b         # localhost:3002
pnpm dev --filter homepage-c         # localhost:3003

# 生成线框导出
cd msh-web/docs/wireframes
figma-export --file <FILE_KEY> --format png --out ./
```

---

**对齐文档**：
- W1-01 Kick-off Deck（里程碑 M1 定义）
- W1-02 W1 Runbook（仓库 / 环境 / CI 基础，W2 直接继承）
- W1-03 Brand Visual Brief（3 方向探索边界）
- W1-04 Brand Guidelines（VI v1.0 升级基线）
- W1-05 Homepage Mockup v0.1（3 方向起始基线）
- W1-06 Sanity Schema 初版（v1.0 升级基线）
- W2-02 视觉拍板会 Decision Deck
- W2-03 首页高保真方向 A/B/C
- W2-04 9 页低保真线框
- W2-05 Sanity Schema v1.0
- 梅斯健康官网重构 信息架构 IA 文档 v1.0（§4 模块映射、§8 内容模型）
- 梅斯健康集团官网重构 Copy Deck v4.1（禁用词 Appendix）

**签收**：Tech Lead ___ · PM ___ · Compliance ___ · Sponsor ___（日期：__________ ）
