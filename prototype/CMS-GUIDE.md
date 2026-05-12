# Sanity CMS 内容录入指南
**MedSci Healthcare · Content Studio**  
**地址:** http://localhost:3333 （生产环境部署后为 https://msh-healthcare.sanity.studio）

---

## 1. 登录

打开 localhost:3333，选择 Google / GitHub / 邮箱登录。登录后进入 Content Studio 主界面。

## 2. 四大内容分组

| 分组 | 适用角色 | 内容类型 |
|------|---------|---------|
| **Marketing** | 市场团队 | Pages, Solutions, Pilot Index Cards, Insights, Contact Methods, Navigation, Site Settings |
| **Medical** | 医学团队 | Case Studies, ●Pilot Sub-pages, People, Proof Points |
| **Investor Relations** | IR 团队 | Site Settings, Board & Leadership, Press Releases |
| **Legal & Compliance** | 法务团队 | ●Claims, ●AI Disclosure, Legal Pages, Redirect Rules |

● = 红标，需合规审核后方可发布

## 3. 编辑文档

### 3.1 进入编辑器
1. 左侧选择分组（如 Marketing）
2. 选择内容类型（如 Solutions）
3. 点击已有文档编辑，或点右上角 **+** 新建

### 3.2 标签页分组
每个文档的字段按标签页组织，常见分组：
- **Content** — 主要内容字段（标题、描述、正文、图片）
- **Offers & Proof** — 关联引用（Pilot Offers, Case Studies）
- **SEO** — Meta Title, Meta Description（搜索引擎优化）
- **Workflow** — 发布状态、合规审核

### 3.3 双语字段 (localizedString)
大多数文本字段都有两个输入框：
- **English** — 必填
- **中文** — 仅 Homepage / About / Legal / IR 页面需要填

### 3.4 引用字段 (Reference)
某些字段需要关联其他文档，如 Solution 的 "Related Case Studies"：
1. 点击 **+ Add item**
2. 在弹出的搜索框中输入关键词
3. 选择要关联的文档
4. 可添加多个引用

### 3.5 富文本编辑 (Portable Text)
正文字段使用 Sanity 的富文本编辑器，支持：
- 粗体、斜体、下划线
- 标题层级（H2, H3）
- 有序 / 无序列表
- 超链接
- 引用块

### 3.6 图片上传
- 点击图片字段区域
- 拖拽或点击上传图片
- 填写 **Alt** 文字（无障碍必需）

## 4. 发布流程

### Draft → Published
1. 编辑内容时，所有修改**自动保存为 Draft**（黄色圆点）
2. 确认内容无误后，点击右下角 **Publish** 按钮
3. 发布后状态变为绿色 "Published"
4. 前端页面会自动拉取最新已发布内容

### 关键规则
- **Draft 不影响前端** — 你可以随意编辑草稿，不会影响线上内容
- **Publish 即刻生效** — 点击 Publish 后，前端下次请求时会获取新内容
- **合规内容需审核** — Claims、AI Disclosure、Pricing 等字段发布前需法务确认

## 5. 常用操作速查

| 操作 | 步骤 |
|------|------|
| 编辑首页 Hero 标题 | Marketing → Pages → 选择首页 → Content → 修改 Hero heading → Publish |
| 添加新 Insight 文章 | Marketing → Insights → + 新建 → 填写标题/slug/正文/SEO → Publish |
| 编辑团队成员 | Medical → People → 选择或新建 → 填写姓名/角色/简介 → Publish |
| 更新 Case Study | Medical → Case Studies → 选择 → 编辑字段 → Publish |
| 修改导航菜单 | Marketing → Navigation → 编辑菜单项 → Publish |
| 更新全局设置 | Marketing → Site Settings → 修改公司信息/联系方式 → Publish |
| 添加法律声明 | Legal & Compliance → Claims → + 新建 → 填写声明文本 + 证据等级 → 法务审核后 Publish |

## 6. 内容录入优先级建议

### 第一批（核心页面）
1. **Site Settings** — 公司名称、联系信息、社交链接
2. **Navigation** — 导航菜单结构
3. **Solutions** (3个) — 补充 SEO Meta、关联 Case Studies / Pilots
4. **Pages** — 首页各 Section 内容

### 第二批（医学内容）
5. **Case Studies** — 补充完整描述、引用、证据
6. **Proof Points** — 关键数据点（3.33M 医师、250M 文献等）
7. **People** — 管理层信息、照片

### 第三批（合规内容）
8. **Claims** — 所有营销声明需法务审核
9. **AI Disclosure** — AI 使用声明
10. **Legal Pages** — 条款/隐私政策最终版

## 7. 注意事项

- **Slug 格式** — 使用 kebab-case（如 `entering-china`），不要中文、空格或大写
- **SEO Meta Title** — 控制在 60 字符内
- **SEO Meta Description** — 控制在 155 字符内
- **图片 Alt** — 每张图片必须填写 Alt 文字
- **禁词检查** — 系统内置 Gate 16 禁词验证，不允许使用夸大营销语言
- **Evidence Tier** — Claims 和 Citations 必须标注证据等级（Verified / In Development / On Request）
