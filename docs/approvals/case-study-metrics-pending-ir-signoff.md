# Case Study Metrics · IR/Legal/Sponsor 待签字跟踪

**触发**: Copy Deck v4.2 §7 三案例的 9 项 metric 在原型阶段使用代表性数字
**最终签字方**: IR / Legal / Sponsor 三方
**Production deploy 前必须补齐**

## 9 项 metric 状态

### §7.1 Entering China · Evidence + HCP（3 项）

| # | Value | approvedBy | 状态 |
|---|---|---|---|
| 1 | 2,400+ HCPs reached | Sponsor + IR | ⚠️ 待签 |
| 2 | 18 localized assets | Sponsor + Legal | ⚠️ 待签 |
| 3 | 60% faster time-to-evidence | Sponsor | ⚠️ 待签 |

### §7.2 Entering China · Localized Content（3 项）

| # | Value | approvedBy | 状态 |
|---|---|---|---|
| 1 | 120+ pieces / 3 TAs | Sponsor | ⚠️ 待签 |
| 2 | 88% first-pass approval | Sponsor | ⚠️ 待签 |
| 3 | 8→4 weeks cycle | Sponsor | ⚠️ 待签 |

### §7.3 Going Global · FDA Evidence Bridge（3 项）

| # | Value | approvedBy | 状态 |
|---|---|---|---|
| 1 | 3 manuscripts submitted | Sponsor | ⚠️ 待签 |
| 2 | 2 congress abstracts accepted | Sponsor | ⚠️ 待签 |
| 3 | 8 months ahead of timeline | Sponsor | ⚠️ 待签 |

## 后续动作

1. 将本文件附带原型链接发给 BD / Legal / IR / Sponsor 四方
2. 每条 metric 走 (a) 数据真实性核 (b) 表述合规审 (c) Sponsor 同意公开 三关
3. 签字回执（邮件 / 文档）存档至 `docs/approvals/2026-MM-DD-case-{slug}-metrics.eml/.md`
4. 全部签字后, 把 ⚠️ 替换为实际签字方姓名/职位, ⚑ 跟踪文件归档
5. Production deploy 前, 全站 check-page 重跑确认无任何 ⚑ / ⚠️ 残留

## 风险

- **风险**: 签字流程拖延, 阻塞 production launch
- **缓解**: 与 IR / Legal 同步排期, 至少留 10 工作日 buffer
- **降级方案**: 若任一案例无法在 deploy 前签齐, 把该案例从 listing 暂时下线（保留 detail 页 noindex 状态）, 不阻塞其他 2 案例上线
