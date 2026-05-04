# MSH Healthcare · Sanity Studio

本地 CMS Studio，基于 W2-05 Schema v1.0。

## 快速启动

```bash
# 1. 创建 Sanity 项目
#    访问 https://www.sanity.io/manage → 新建项目
#    ���下 Project ID

# 2. 配置
#    编辑 sanity.config.ts — 替换 YOUR_PROJECT_ID
#    编辑 ../assets/sanity-client.js — 替换 YOUR_PROJECT_ID

# 3. 安装 & 启动 Studio
cd studio
npm install
npx sanity login    # 首次需要登录
npx sanity dev      # 启动 → http://localhost:3333

# 4. CORS 配置
#    在 Sanity 管理后台 → API → CORS Origins 添加:
#    - http://localhost:3333
#    - http://localhost:8080 (或你的前端端口)
#    勾选 "Allow credentials"

# 5. 导入种子数据
npx sanity dataset import seed/seed.ndjson production --replace

# 6. ��动前端
cd ..
python3 -m http.server 8080   # 或任意静态服务器
```

## 架构

```
prototype/
├── studio/                    ← Sanity Studio (独立 npm 项目)
│   ├── sanity.config.ts       ← 项目配置 (projectId 在这里)
│   ├── schemas/               ← W2-05 全量 schema
│   ├── desk-structure.ts      ← 按角色分组的 Studio 面板
│   └── seed/                  ← 种子数据
│       ├── seed.ndjson        ← mock data → Sanity 格式
│       └── import.mjs         ← 导入脚本
├── assets/
│   └── sanity-client.js       ← 浏览器端 GROQ 查询封装
├── components/
│   ��── useSanity.jsx          ← React hook: CMS fetch + mock fallback
└── *.html                     ← 各页面 (已注入 Sanity client script)
```

## 数据流

```
Sanity Studio (localhost:3333)
      ↓ 编辑 & 发布
Sanity Content Lake (cloud)
      ↓ GROQ over CDN
sanity-client.js (浏览器)
      ↓ window.MSHContent.fetch*()
useSanity() hook
      ↓ CMS data || mock fallback
React 组件渲染
```

## 前端接入模式

每个页面的 mock data 保持不变作为 fallback。当 Sanity 配置就绪后：

1. `sanity-client.js` 自动初始化 client
2. `useSanity(fetcherName, mockData)` 尝试从 CMS 拉取
3. 成功 → 替换 mock；失败 → 继续用 mock，无白屏

调试：URL 加 `?debug=1` 显示数据源状态徽章。

## Schema 来源

全部 schema 来自 `W2-05 Sanity Schema v1.0/`，包含：
- 18 document types (page, solution, caseStudy, insight, aiProduct, etc.)
- 12 object types (pageSection, metric, citation, etc.)
- 合规验证器 (forbiddenPhrases, claimBoundAndVerified)
- Publish webhook (claim-audit.ts)
