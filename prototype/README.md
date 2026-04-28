# MSH Prototype

**域名（生产）：** medscihealthcare.com
**域名（原型）：** prototype.medscihealthcare.com（带 `<meta robots="noindex">`）
**Tech：** React-in-HTML + Babel standalone，无构建链。本地双击 `index.html` 即可预览。

## 目录

- `index.html` — Homepage
- `solutions/*.html` — 6 个 solutions 子页（既有）
- `case-studies/`、`insights/`、`pilots/`、`legal/`、`services/` — 新批次产出
- `components/*.jsx` — 共享 React 组件
- `assets/colors_and_type.css` — 颜色与字体 token（W1-04 v1.1）
- `assets/responsive.css` — 三档断点 token（W6 加入）
- `assets/vendor/` — React/Babel/Lucide 自托管（W0 Task 0.7 下载，入 git 用于部署）

## 验收

跑：`node scripts/check-page.js prototype/<page>.html`
通过 24 项 gate（spec §5）后才入批次 commit。

## 部署 (Deployment)

### Cloudflare Pages

1. 在 Cloudflare 控制台创建新 Pages 项目
2. 关联 Git 仓库（或直接上传 prototype/ 目录）
3. 域名绑定：`prototype.medscihealthcare.com`
4. `_redirects` 文件已配置在 prototype/ 根，部署后自动生效
5. 验证：部署后访问 `/china` 应 301 到 `/solutions/entering-china`
6. 控制台访问凭据 / 项目 ID 记录到团队密码管理器

### 验证 _redirects 生效

```bash
curl -I https://prototype.medscihealthcare.com/china
# 期望：HTTP/2 301
# Location: /solutions/entering-china
```

### Robots / 索引

部署后所有页面应带 `<meta name="robots" content="noindex">` 防外网索引。
