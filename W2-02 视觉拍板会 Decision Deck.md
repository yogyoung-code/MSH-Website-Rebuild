# 视觉拍板会 Decision Deck · M1

**会议**：M1 · 视觉拍板
**时间**：2026-05-02（周五）15:00–16:30
**地点**：上海总部 L5 会议室 A + 线上 Zoom（美国协作伙伴）
**主持**：PM
**强制到场**：Sponsor · 市场负责人 · Designer · Tech Lead · PM · Compliance
**拍板范围**：首页视觉方向 · VI 关键变量 · 7 项决策清单
**决策性质**：**不可回退**。本会后结果写入 `msh-design-tokens/DECISION.md` 并 Commit；再议须重新走 Sponsor 专属会议。

---

## 0. 会前材料（会议前 24h 已发）

| 材料 | 位置 | 阅读时长 |
|---|---|---|
| 3 方向 HTML 原型 | `W2-03 首页高保真方向 A.html` / `B.html` / `C.html` | 现场演示 |
| 3 方向差异矩阵（本文档 §3） | 本 Deck | 5 min |
| 工程成本估计（§5） | Tech Lead 预评估 | 3 min |
| 风险决策树（§6） | 本 Deck | 3 min |
| W1-03 Brand Visual Brief | 项目仓库 | 作为前置假设（不再讨论） |

---

## 1. 会议议程（90 min · 硬计时）

| 段 | 时长 | 内容 | 主理 |
|---|---|---|---|
| 开场 | 5 min | 重申 M1 不可回退原则 · 纪律复述 | PM |
| 方向讲解 | 15 min（3 × 5） | Designer 讲 A / B / C 设计意图与取舍 | Designer |
| 原型过屏 | 15 min（3 × 5） | 每方向现场走完整 9 模块 + 移动端 2 屏 | Designer + 前端 |
| 7 项决策 | 20 min | PM 主持，逐项计时 2–3 min 拍板 | PM |
| 微调清单 | 20 min | 对选中方向提 ≤ 10 条修改意见 | Sponsor + 市场 |
| 承诺窗口 | 10 min | Designer 回签 W3 末前 Figma 终稿 | Designer |
| 签字提交 | 5 min | 决策签字 · Git commit | 全员 |

**计时纪律**：任一决策讨论超 15 min，Sponsor 当场拍板；其他延伸问题进 Parking Lot。

---

## 2. 三方向定位（一句话）

| 方向 | 定位 | 竞品对标 | 色系 | Hero 动效 | 目标受众侧重 |
|---|---|---|---|---|---|
| **A · 克制升级** | 稳妥路径：上市公司级可信，一丝 AI 点缀 | Veeva / IQVIA | 深蓝 + 科学绿 + 鲜青 Accent 5% | 静态 + 轻 fade-in | 投资者与 BD 均衡 |
| **B · AI 原生** | 重定位：AI-Enabled Delivery 作为主叙事 | Tempus AI / Flatiron | 深蓝 + 数据可视化层 + 动态网格 | 轻度 canvas/动态网格（≤400ms） | 美国 Biotech 客户 |
| **C · 投资者反向尽调特化** | 叙事重心：2415.HK 上市公司身份前置 | Novartis / Moderna IR | 石墨黑 + 暖金 + 学术冷灰 | 静态 · 学术期刊感 | 投资者、并购对手方 |

---

## 3. 差异矩阵（会议主看板）

| 维度 | A · 克制升级 | B · AI 原生 | C · IR 特化 |
|---|---|---|---|
| **视觉主题** | 上市公司稳重 + 医学临床 | 技术原生 + 数据前置 | 学术期刊 + 披露级 |
| **Primary 色** | `#0A2540` 深海军蓝 | `#0A2540` + `#00C6B8` 面积加大至 12% | `#111827` 石墨黑 |
| **Accent 色** | `#00C6B8` 鲜青（5% 面积） | `#00C6B8` 鲜青（12% 面积，含渐变） | `#B8860B` 暖金（3% 面积） |
| **字体 Display** | Inter Display 64px | Inter Display 72px + letter-spacing 负值 | Söhne（授权）或 Inter Display，字阶紧致 |
| **Hero 视觉** | 1 张克制临床图 + 标题 + 3 CTA | 动态数据网格 + 标题 + 2 CTA（CTA 压到 2 档） | 文字型 Hero + 2415.HK 披露徽章 + 投资者 CTA |
| **Hero 之外首屏** | 快入卡（3 Pilot） | AI-Enabled Delivery 能力块 | About + Investor Relations 入口 |
| **Trust Bar 位置** | 模块 7（原 IA 位置） | 模块 7 + Hero 下方镜像（双层） | Hero 正下方（前置） |
| **Case Study 排版** | 3 栏栅格 | 带筛选列表（AI / 跨境 / 出版物） | 3 栏栅格 + 引用出版物角标 |
| **数据可视化密度** | 低（数字墙） | 高（mini-chart 嵌入） | 中（表格级严谨） |
| **动效档位** | 静态 + 滚动 fade | 轻度 canvas / Lottie | 纯静态 |
| **图像风格** | 真实临床纪实照 | 几何抽象插画 + 局部照片 | 无人像 · 纯版式 + 数据 |
| **工程成本** | **1.0×**（基线） | **1.35×**（+ canvas/动画工时） | **0.85×**（纯静态省工） |
| **a11y 风险** | 低 | 中（动效需 reduced-motion 兜底） | 低 |
| **FTC 合规敏感度** | 低 | 中（AI 视觉需 PITL 文案并置） | 低 |
| **投资者反向尽调表现** | 良（稳妥） | 中（"AI 公司"印象可能过强） | **优**（披露徽章、2415.HK 前置） |
| **美国 BD 场景表现** | 良 | **优**（差异化突出 AI 能力） | 中（可能偏学术） |

---

## 4. 3 方向首页首屏对比（原型快照指引）

> 会议现场逐一点开 `W2-03 首页高保真方向 *.html` Preview URL，每方向 5 min 走完：首屏 → 9 模块 → 移动端 2 屏。以下为静态描述，帮助会前预览。

### 4.1 方向 A · 克制升级

- 顶栏：白底 + 深蓝 logo + 导航文字 Semibold · 右上角 "2415.HK" 小徽章
- Hero：左 60% 文字（Display 64px 黑标 + 副标 + 3 CTA 分层）· 右 40% 克制临床场景摄影（实验室 + 研究员背影）
- 主 CTA "Book a 30-Day Evidence Sprint" 深蓝填充 + Accent 边框 hover
- 第二 CTA "Talk to an Expert" 线框 · 第三 CTA "See Our AI Delivery" 纯文字链
- 视觉重量：文字 > 图像 > 色彩
- 模块顺序严格按 IA §4.1（不动）

### 4.2 方向 B · AI 原生

- 顶栏：深色模式（可选浅色切换）· Accent 一点青色高亮导航项 hover
- Hero：占满 100vh · 背景 animated grid（Three.js 低帧率 / CSS `@property` 渐变，可退化为静态）
- 标题 "AI-Enabled Medical Delivery for Cross-Border Healthcare" · 副标强调 PITL + 证据三层
- 下方直接嵌 mini-chart："3.33M+ Physicians" "40+ RWE Studies" "HCP Reach: 97% Top-Tier Hospitals"（数字墙前置）
- 模块顺序：1 Hero → 6 AI-Enabled Delivery → 2 Quick Start → 3 Primary Paths → ...（**把 AI 模块提前**，IA 需 Compliance 批准偏差）
- 强烈建议：若方向 B 选中，**必须同步修订 IA §4.1 并走 Compliance review**

### 4.3 方向 C · 投资者反向尽调特化

- 顶栏：黑底 + 暖金 logo + 右上角 "HKEX: 2415" 披露徽章（点开跳港交所披露易）
- Hero：纯文字 · Display 56px "A Publicly Listed Medical Affairs Group Connecting China & Global Healthcare"
- Hero 正下方：Trust Bar 前置（Verified 数字墙 · 审计来源年份外露）
- About / Investor Relations 入口提升到首屏第二屏
- Case Study 带 PubMed / JAMA 引用角标（如有）
- 不用摄影 · 纯版式 + 数据 + 表格
- 模块顺序偏离 IA：Hero → **Trust Bar**（原 7）→ About 入口（原 About 页内容摘要）→ Primary Paths → Quick Start → Case Studies → AI Delivery → Insights → Final CTA
- **警告**：此方向会弱化 BD / 客户漏斗；若美国业务扩张为首要 KPI，需权衡

---

## 5. 工程成本估计（Tech Lead 预评估）

基线：方向 A = 1.0× 工时。

| 方向 | 前端工时（人日） | 额外设计工时 | 额外 QA 工时 | 总 × | 备注 |
|---|---|---|---|---|---|
| A | 14 | 0 | 2 | 1.00× | 基线 |
| B | 19 | +2 | +3 | 1.35× | canvas/动画 + reduced-motion 降级 + 动效 a11y 测试 |
| C | 12 | -1 | 2 | 0.85× | 纯静态 · 无插画 · 图像资产少 |

预算影响（基于 W1 测算 · 档位 C）：
- A：无偏差。
- B：首期 + 1.5–2 万 RMB；年度运行不变。
- C：首期 - 0.5–1 万 RMB；图像素材支出减少。

---

## 6. 风险决策树（拍板现场参考）

```
[开始] 美国 BD / 客户获取是首要 KPI 吗？
   ├── 是 → B 或 A
   │     ├── 接受 +35% 工程成本 + IA 偏差 → B
   │     └── 求稳 → A（次选：保留 Hero 的 AI 点缀强度）
   └── 否 → C 或 A
         ├── 投资者 / 并购反向尽调是首要场景 → C
         └── BD 与 IR 均衡 → A
```

**硬约束**：
- 方向 B 需 Compliance 在拍板现场对 IA §4.1 模块顺序偏差签字，否则视为无效。
- 方向 C 需市场负责人承诺：首页流量主要来自投资者 / 披露场景（GA4 历史数据支持），否则视为无效。
- 任一方向被否决不视为需要第 4 个方向 —— 在剩余 2 个中二选一。

---

## 7. 七项决策清单（逐项拍板）

> 每项 2–3 min · PM 计时 · 现场勾选 · 签字页汇总

### 决策 1 · 首页视觉方向

- [ ] A · 克制升级
- [ ] B · AI 原生
- [ ] C · 投资者反向尽调特化

**签字生效**：Sponsor + 市场负责人（二者一致即通过；分歧时 Sponsor 拍板）。

### 决策 2 · 主色终版

- [ ] `#0A2540` 深海军蓝（方向 A / B 默认）
- [ ] `#0B2F52` 略浅深蓝（会前 Designer 建议 alt）
- [ ] `#111827` 石墨黑（方向 C 默认）

**签字**：市场负责人。

### 决策 3 · Hero 动效档位

- [ ] 静态 · 仅滚动 fade-in（A / C 默认）
- [ ] 轻度动效 · CSS transition + 小范围 canvas（B 默认）
- [ ] 重度动效 · WebGL / Lottie（不推荐 · 需 Tech Lead 额外签字）

**签字**：Tech Lead + 市场负责人。

### 决策 4 · Case Study 排版

- [ ] 3 栏栅格（A / C 默认）
- [ ] 带筛选列表（B 默认）
- [ ] 水平滚动卡（需额外 a11y 评估）

**签字**：市场负责人。

### 决策 5 · Trust Bar 位置

- [ ] 模块 7（IA 原位）— A / B 默认
- [ ] 模块 7 + Hero 下方镜像 — B 备选
- [ ] Hero 正下方前置 — C 默认

**签字**：Sponsor + Compliance（Compliance 关注数据 claim 可否在 Hero 紧邻处出现）。

### 决策 6 · 移动端断点

W2 QA 将按 5 档断点冒烟，从以下候选锁定 5 档：

- [ ] 320 px（iPhone SE 底）
- [ ] 390 px（iPhone 14/15 主流）
- [ ] 430 px（iPhone Pro Max）
- [ ] 768 px（iPad 竖屏）
- [ ] 1024 px（iPad 横屏 / 小笔记本）
- [ ] 1440 px（桌面主流）

**签字**：Tech Lead。

### 决策 7 · CN 首页是否 W1 Go-Live 发布

- [ ] 是（并入 M3 Staging · W5 末）
- [ ] 否（延至 V2 · 节省 2–3 人日）

**签字**：Sponsor（影响反向尽调体验）。

---

## 8. 微调清单（选中方向后填）

> 上限 10 条 · 每条需满足：可在 1 Figma 工作日内消化 · 不影响 IA 模块顺序 · 不新增组件。

| # | 修改项 | 所在模块 | 提出人 | Designer 接受？ | 交付时点 |
|---|---|---|---|---|---|
| 1 |   |   |   |   |   |
| 2 |   |   |   |   |   |
| 3 |   |   |   |   |   |
| 4 |   |   |   |   |   |
| 5 |   |   |   |   |   |
| 6 |   |   |   |   |   |
| 7 |   |   |   |   |   |
| 8 |   |   |   |   |   |
| 9 |   |   |   |   |   |
| 10 |   |   |   |   |   |

**第 11 条起一律进 Parking Lot**，Designer 不承诺 W3 末前消化。

---

## 9. Designer 承诺（W3 交付）

选中方向后，Designer 需书面承诺：

- [ ] W3 Day 2（周二 5/05）：首页 v1.0 Figma 终稿（含微调）
- [ ] W3 Day 3（周三 5/06）：`@medsci/design-tokens@0.2.0` 发到内部 npm
- [ ] W3 Day 5（周五 5/08）：双主线页 Figma 初稿（Entering China · Going Global）
- [ ] W4 Day 2：Case Study 卡 + Pilot 子页 + Other Engagements 视觉稿

超期处置：Designer 主动在 W3 Day 1 Standup 申明风险；PM 决定是否请求外部 freelancer 补位。

---

## 10. 签字页（Sign-off）

会议结束时由 PM 拍照上传 `msh-design-tokens/DECISION.md`，同步 Slack `#msh-web-rebuild`。

| 决策 | 选择 | 签字 | 日期 |
|---|---|---|---|
| 1 · 首页视觉方向 | A / B / C | Sponsor: ______ · 市场: ______ | 2026-05-02 |
| 2 · 主色终版 | HEX: ________ | 市场: ______ | 2026-05-02 |
| 3 · Hero 动效档位 | 静态 / 轻 / 重 | Tech Lead: ______ · 市场: ______ | 2026-05-02 |
| 4 · Case Study 排版 | 栅格 / 列表 / 水平 | 市场: ______ | 2026-05-02 |
| 5 · Trust Bar 位置 | IA 原位 / 双层 / 前置 | Sponsor: ______ · Compliance: ______ | 2026-05-02 |
| 6 · 移动端断点 5 档 | ________ px | Tech Lead: ______ | 2026-05-02 |
| 7 · CN 首页 W1 Go-Live | 是 / 否 | Sponsor: ______ | 2026-05-02 |

**Designer 承诺**：____________________（签字 · 日期）
**PM 确认归档**：____________________（签字 · 日期）

---

## 11. Parking Lot（未拍板事项）

以下议题不在本会决策范围，记录后带入 W3 及后续：

| 议题 | 提出人 | 建议处置 | 承接时点 |
|---|---|---|---|
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |

---

**对齐文档**：
- W1-01 Kick-off Deck §4 里程碑 M1
- W1-03 Brand Visual Brief §4（色系）· §10（Designer 交付）
- W1-04 Brand Guidelines v0.9（升级到 v1.0 的起点）
- W1-05 Homepage Mockup v0.1（方向 A 起始基线）
- W2-01 W2 Runbook §1（M1 Gate 条件）
- W2-03 首页高保真方向 A / B / C
