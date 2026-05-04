# 梅斯健康集团官网重构 · 项目启动会材料

**项目代号**：MSH-WEB-2026
**启动日期**：2026-04-19（W1）
**目标 Go-Live**：W10 / 2026-06-28 ± 1 周
**执行档位**：C · 合规完备版
**团队模式**：纯内部团队
**版本**：v1.0 · 2026-04-19

---

## 1. 为什么做 · Why Now

梅斯健康（2415.HK）当前处于三个同时发生的战略节点：

1. **AI 转型进入第二年**：官网需承载 AI-Enabled Delivery 叙事，不能再是"公司简介 + 新闻"的旧形态
2. **美国业务扩张进入验证期**：需要一个**美国受众直接可用**的门户承接 Entering China / Going Global 双向客户
3. **国际投资者反向尽调高频期**：并购窗口与再融资窗口交叠，现有 medscihealthcare.com 无法支撑"港股上市公司的门面"

**Go-Live 的战略价值衡量**：
- 美国潜客通过搜索 + LinkedIn 进站后，在 90 秒内能回答"这家公司能不能帮我做 China 市场进入 / FDA 证据桥接"
- 香港/新加坡/北美基金投资经理能在 3 分钟内完成"这家 2415.HK 是不是在真的做 AI 医疗跨境业务"的初步判断
- Pilot 漏斗从第一周即可接入合格线索，HubSpot Lead Scoring 模型跑通

---

## 2. 项目范围 · Scope

### 2.1 交付范围（In Scope）

| 大类 | 具体内容 |
|---|---|
| **9 个页面** | 首页 / Entering China / Going Global / Cross-Border Sprint / Other Engagements / AI-Enabled Delivery / About / Contact / Legal |
| **2 个 Pilot 独立子页** | `/pilots/china-evidence-sprint` / `/pilots/fda-evidence-gap-diagnostic` |
| **3 张 Case Study** | Entering China Evidence · Localized Content · Going Global FDA Bridge（每张 ≥ 3 量化指标） |
| **全量 VI 升级** | Design token + 组件库 + 摄影与插画风格 |
| **Sanity Headless CMS** | 完整建模 + Studio 定制 + 发布工作流 |
| **Smart Form + HubSpot** | 分支路由 + Lead Scoring 隔离 |
| **合规自动化** | 禁用词扫描 + Placeholder 门禁 + Claim 审计 |
| **多语言** | EN 主 + CN（首页 / About / IR / Legal） |
| **Insights 内容中心** | 列表页 + 详情页 + 订阅机制 |
| **分析与监控** | GA4 + HubSpot + Vercel Analytics + Sentry |

### 2.2 非交付范围（Out of Scope · W1–W10）

- 中国大陆业务门户（单独决策，不在本项目）
- 登录 / 用户账号系统（V2 再考虑）
- 在线支付 / 电商（不做）
- 招聘系统深度集成（仅基础 Careers 页面入口，V2 迭代）
- APP / 小程序（不做）
- 中国大陆 ICP 备案（战略上本站不承载国内业务）

---

## 3. 团队与角色 · Team & RACI

### 3.1 核心团队（纯内部）

| 角色 | 人数 | W1 工作饱和度 | 主要职责 |
|---|---|---|---|
| 项目发起人（Sponsor） | 1 | 10% | 预算审批 / 重大节点签字 / 投资者沟通 |
| 项目经理（PM） | 1 | 60% | 排期 / 风险 / 跨部门协同 |
| 技术负责人（Tech Lead） | 1 | 80% | 架构决策 / 代码审核 / Sanity schema |
| 前端开发 | 2 | 80% | Next.js 页面开发 / 组件库 |
| 视觉设计师（Sr. Designer） | 1 | 100% | VI 升级 / 首页视觉稿 / Figma 组件库 |
| UX 设计师 | 1 | 60% | 交互原型 / 移动端适配 |
| 内容负责人 | 1 | 40% | Copy Deck 落地 / Case Study 数据对接 |
| 法务接口 | 1 | 20% | 禁用词 / 数据 claim / logo 授权 |
| IR 接口 | 1 | 10% | 港股披露合规 / 数据 claim 二次复核 |
| 市场 / 品牌接口 | 1 | 40% | VI 拍板 / HubSpot / Smart Form 路由 |
| 医学编辑（PITL） | 1 | 30% | 医学/临床表述审阅 / CN 翻译复核 |

### 3.2 RACI 简表

| 决策项 | R（执行） | A（决策） | C（咨询） | I（知会） |
|---|---|---|---|---|
| 技术选型确认 | Tech Lead | Sponsor | 法务 / IT Ops | 全团队 |
| VI 升级方向 | Designer | 市场负责人 | Sponsor / IR | 全团队 |
| Copy Deck 落地 | 内容负责人 | 市场负责人 | 法务 / 医学编辑 | 前端 |
| Case Study 数据 | BD / 内容 | 法务 | Sponsor | 全团队 |
| Go-Live 放行 | PM | Sponsor | 法务 / IR / Tech Lead | 全团队 |

---

## 4. 里程碑 · Milestones

| 里程碑 | 时点 | 交付物 | 放行条件 |
|---|---|---|---|
| **M0 · 启动会** | W1 · 2026-04-19 | 本文档 + 开工运行手册 | Sponsor 签字 |
| **M1 · 视觉拍板** | W2 末 | 新 VI 文档 + 首页高保真 | 市场 + Sponsor 签字 |
| **M2 · CMS 建模完成** | W3 末 | Sanity schema + Studio 上线 | Tech Lead 签字 |
| **M3 · 双主线页上线 Staging** | W5 末 | 首页 + Entering China + Going Global | 内部 UAT 通过 |
| **M4 · 全页面上线 Staging** | W7 末 | 9 页完整 + 2 Pilot 子页 | QA 通过 |
| **M5 · 合规审阅完成** | W9 末 | 法务 + IR 签字的数据 claim 与 logo 授权 | 无 ⚑ placeholder |
| **M6 · Go-Live** | W10–W11 | Production 上线 | 5 项 Gate 全过（见 §6） |

---

## 5. 预算 · Budget

**一次性投入**：45–75 万 RMB（档位 C 合规完备版）
**年度运行**：$10,820–17,900 USD

详见《技术选型文档 v1.0》§11.4 与 §11.7。

**W1 预算动用预计**：4–7 万 RMB（主要为视觉设计启动 + 基础设施订阅年费预付）

---

## 6. Go-Live 放行 Gate（不可绕过）

源自 Copy Deck v4.1 §6.4，必须在 M6 前全部闭环：

| # | Gate | 责任方 | 证据 |
|---|---|---|---|
| 1 | 法务 / IR 对每一条数据型 claim 签字 | 法务 + IR | Claim collection 中每条记录 `approvedBy` 字段非空 |
| 2 | 每一个客户名 / logo 都有书面授权 | 法务 + BD | ClientReference collection 中 `authorizationDocument` 附件存在，或 `anonymized=true` |
| 3 | AI / PITL claim 通过 HK 上市披露 + 美国 FTC 广告合规审查 | 法务 + IR | 审查签字表 |
| 4 | 3 张 Case Study 量化数字全部填齐 | 内容 + BD + 法务 | CMS schema validation 通过，无 ⚑ placeholder |
| 5 | 禁用词扫描通过 | Tech Lead | GitHub Action 全绿，最近一次扫描报告 |

---

## 7. 关键风险 · Top Risks

| # | 风险 | 可能性 | 影响 | 缓解 | 责任 |
|---|---|---|---|---|---|
| R1 | 法务 / IR 审阅耗时超预期 | 高 | 高 | W5 起嵌入审阅节点；并行签字；Sanity workflow 自动催审 | PM + 法务 |
| R2 | Case Study 3 指标 Go-Live 前凑不齐 | 中 | 高 | W1 启动数据采集；Placeholder 发布门禁强制阻断 | BD + 内容 |
| R3 | VI 拍板反复 | 中 | 高 | W2 一次性拍板；Sponsor + 市场负责人全程在场 | 市场 + Designer |
| R4 | 客户 logo 授权来不及 | 中 | 中 | 默认匿名化（"Global Top-10 Medtech"）；授权到位再替换 | 法务 + BD |
| R5 | AI 相关 claim 触 FTC 广告合规 | 中 | 极高 | 所有 AI claim 搭配 PITL 说明；上线前法律顾问复核 | 法务 + 外部法律顾问 |
| R6 | 内部前端资源被其他项目抽调 | 中 | 高 | Sponsor 确认资源独占；建立 PTO 与备份机制 | Sponsor + Tech Lead |
| R7 | HubSpot 现有配置与新 Smart Form 冲突 | 中 | 中 | W1 完成 HubSpot 当前状态盘点 | 市场 + IT |

---

## 8. 第一周冲刺 · W1 Sprint Plan

### 8.1 W1 目标（SMART）

在 2026-04-26 W1 结束前，完成以下 5 项：
1. ✅ 项目启动会召开，Sponsor 签字本文档
2. ✅ 品牌视觉策略单发给设计师，VI 升级正式启动
3. ✅ Sanity schema 初版代码入仓库（可运行 `sanity dev`）
4. ✅ 首页效果图 v0.1（HTML demo）完成，作为 W2 视觉拍板会的起始版本
5. ✅ Case Study 数据采集启动，BD 返回第一批数据源头清单

### 8.2 W1 日程（工作日）

| 日期 | 事项 | 参与 |
|---|---|---|
| Day 1（周一 4/20） | 启动会召开（90min）+ 代码仓库创建 + Figma workspace 建立 | 全员 |
| Day 2（周二 4/21） | Tech Lead 启动 Sanity schema + Designer 启动 VI 探索 | Tech + Design |
| Day 3（周三 4/22） | HubSpot 现状盘点 + Case Study 数据源盘点 | 市场 + BD |
| Day 4（周四 4/23） | 法务 kick-off：禁用词清单 + 数据 claim 源清单 | PM + 法务 |
| Day 5（周五 4/24） | W1 交付物内部评审 + W2 任务分发 | 全员 |

### 8.3 W1 需决策事项

> 启动会当场或当周内拍板，以下事项不可延后。

1. **CMS 最终选型**：Sanity（推荐）vs Payload 自托管 — 法务需表态数据主权要求
2. **HubSpot 席位现状**：现有 Marketing Hub 版本、可用 Form 配额、Lead Scoring 配置
3. **Case Study 数据授权路径**：3 家客户是否可实名，否则匿名化等级
4. **VI 升级范围**：全量重做（档位 C）vs token 级升级（档位 B）— 本项目既定档位 C
5. **Go-Live 目标日锁定**：W10 末（2026-06-28）是否为对外公布节点
6. **预算走向**：4–7 万 W1 启动金是否从现有预算释放

---

## 9. 启动会议程（建议 90min）

| 时间 | 议题 | 负责 |
|---|---|---|
| 0–10min | 战略回顾：为什么重构、为什么现在 | Sponsor |
| 10–25min | 范围与档位：走档位 C 的理由与预算 | PM + Tech Lead |
| 25–40min | 团队与 RACI 确认 | PM |
| 40–55min | 里程碑与 Go-Live 放行 Gate | PM |
| 55–70min | 关键风险讨论与缓解分工 | 全员 |
| 70–80min | W1 决策事项逐条拍板 | Sponsor + 市场 + 法务 + IT |
| 80–90min | 启动会签字 + W1 任务分发 | Sponsor |

---

## 10. 参考文档

- 《梅斯健康集团官网重构 Copy Deck v4.1》
- 《梅斯健康集团官网重构 PRD v4》
- 《梅斯健康官网重构 技术选型文档 v1.0》
- 《梅斯健康官网重构 信息架构（IA）文档 v1.0》
- W1 配套：开工运行手册 / 品牌视觉策略单 / 新 VI 文档 / 首页效果图 / Sanity Schema 初版

---

## 11. 启动会签字区

| 角色 | 姓名 | 签字 | 日期 |
|---|---|---|---|
| 项目发起人 Sponsor | __________ | __________ | __________ |
| 项目经理 PM | __________ | __________ | __________ |
| 技术负责人 | __________ | __________ | __________ |
| 市场 / 品牌 | __________ | __________ | __________ |
| 法务接口 | __________ | __________ | __________ |
| IR 接口 | __________ | __________ | __________ |

> 所有签字人确认：本次启动会已明确范围、里程碑、决策边界、风险责任；W1 冲刺任务清单已分发并被各责任人接受。
