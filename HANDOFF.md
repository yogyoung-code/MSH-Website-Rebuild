# MSH Website Rebuild — Session Handoff

> 截至 2026-05-03，供下一个会话快速接入。

---

## 项目概况

梅斯健康（MedSci Healthcare, HKEX 2415.HK）官网重构，目标：承载 AI 时代品牌形象 + 服务美国业务扩张 + 国际投资并购反向尽调。

## 技术栈

- **框架**: React 18 + Babel JSX in-browser（无打包器，`<script type="text/babel">` 加载 `.jsx`）
- **组件注册**: `window.<ComponentName>` 跨文件访问
- **样式**: CSS 变量 (`assets/colors_and_type.css`)，navy + cyan 品牌色
- **展示字体**: Footlight MT Light（用户锁定，不可更改）
- **响应式**: `assets/responsive.css` 三档断点 ≤640px / 641-1024px / ≥1025px
- **关键 CSS 类名**: `two-col-grid`, `stat-strip-grid`, `services-grid`, `nav-desktop`, `nav-mobile`, `hero-right-services`, `ai-product-card-grid`, `ai-asset-stats-row`, `netfp-grid`, `afg-grid`, `cc-grid`, `aips-usecase-grid`, `aips4-io`, `aips-sticky-nav-desktop`

## 文件结构

```
prototype/
├── index.html                    # 首页
├── ai-platform.html              # AI Platform（v3 正式版）
├── ai-platform-v3.html           # 同 ai-platform.html
├── ai-platform-v4.html           # 实验版，已 noindex
├── about.html                    # 关于页
├── contact.html                  # 联系页
├── assets/
│   ├── colors_and_type.css       # 品牌变量
│   └── responsive.css            # 响应式规则
├── components/
│   ├── Header.jsx / SolutionHeader.jsx
│   ├── Footer.jsx / SolutionFooter.jsx
│   ├── Hero.jsx
│   ├── Sections1.jsx             # QuickStart, TwoPaths
│   ├── Sections2.jsx             # Services, WhyMSH, Cases
│   ├── Sections3.jsx             # AI, Trust, Insights, FinalCTA
│   ├── SolutionsShell.jsx        # /solutions/* 共享组件
│   ├── Shared.jsx                # Button, SectionEyebrow, EvidenceBadge 等
│   ├── AIProductSpec.jsx         # AI 平台页组件
│   ├── CaseStudyHeroChart.jsx    # Case study 图表
│   └── ...
├── solutions/                    # 5 个方案详情页 + sprint 页
├── pilots/                       # 2 个 pilot 页
├── case-studies/                 # index + 3 个详情页
├── legal/                        # terms / privacy / disclosures（EN + zh-CN 双语）
└── insights/                     # index + slug-template
```

## 已完成事项

1. **全部页面搭建** — 首页 10 个 section、5 solutions、2 pilots、3 case studies、3 legal、about、contact、ai-platform、insights
2. **法律页面多法域条款** — terms §9 扩展（HK/PRC/EEA/US）、privacy §1A（PIPL/GDPR/CCPA/PDPO）、disclosures §1A（HKEX/PRC/US/EU 监管框架），均含 `[Draft]` 标记待法务确认
3. **响应式适配** — viewport meta 统一、responsive.css 三档、所有组件 inline padding 从 `40px` 转为 `clamp(16px, 4vw, 40px)`
4. **Gate 16 禁词验证** — `guarantee`, `100% accurate`, `industry-leading`, `cure`（含子串）全部通过
5. **管理层数据** — LeadershipGrid 已填充真实数据
6. **Case study 图表** — CaseStudyHeroChart 组件已创建并接入 3 个详情页
7. **AI Platform** — v3 为正式版，v4 已 noindex

## 待完成事项

| 优先级 | 事项 | 备注 |
|--------|------|------|
| 中 | Case study 图表数据细化 | 用户说"加图表"，结构已有，数据可调 |
| 中 | 领导层头像 + 办公室照片集成 | 用户说"已提供"，需确认实际文件位置并嵌入 |
| 低 | Pricing 信息 | 用户明确 TBD |
| 部署前 | 移除所有 `[Draft — ...]` / `[草稿 — ...]` 标记 | 需法务签字后 |
| 部署前 | Gate 17：移除所有 `⚑` 占位符 | grep `⚑` 全站扫描 |
| 部署前 | 实机浏览器测试（移动端 + 桌面端） | responsive.css 已写但未实测 |
| 可选 | Insights mini-charts | 用户决定不恢复 |

## 质量门禁

- **Gate 16**: 禁词 `guarantee`, `100% accurate`, `industry-leading`, `cure`（注意子串匹配 `secure/ensure/procurement` 不算）
- **Gate 17**: 生产 HTML 中不得出现 `⚑` 标记
- **Copy Deck v4.2 §12**: 法律页面结构的 SSoT

## 新会话启动提示词

```
继续 MSH Website Rebuild 项目。请先阅读 memory 中的项目进度记录，以及工作区下的 `MSH Website Rebuild/HANDOFF.md`，了解技术栈、已完成事项和待办清单后再开始工作。对话使用中文，回复简洁。
```
