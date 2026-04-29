# F · 视觉验收总报告(G1 + G2 + G3)

**日期**: 2026-04-28
**范围**: 22 prototype 页 × 3 断点 + 7 既有页 baseline diff + 6 步反尽调演示链
**起点 HEAD**: `089f6d4` (handoff commit)
**终点 HEAD**: 待 plumbing commit + user `update-ref` 后写回

---

## 1. 三 Gate 总判定

| Gate | 范围 | 结果 | 报告 |
|---|---|---|---|
| **G1** · 7 既有页 1280 vs W0 baseline | source-level diff | ✅ PASS | [G1-baseline-diff-report.md](./G1-baseline-diff-report.md) |
| **G2** · 22 页 × 3 断点(640/1024/1280)无横滚 | 自动化 iframe 扫描 | ✅ PASS (post 3 hotfix) | [G2-overflow-report.md](./G2-overflow-report.md) |
| **G3** · 反尽调演示链路端到端 | source-level walkthrough + 21 链 grep | ✅ PASS (post 2 hotfix) | [G3-reverse-dd-walkthrough.md](./G3-reverse-dd-walkthrough.md) |

**整体: F PASS** ✅

---

## 2. 本 sprint 触发的 5 个 hotfix(B7-a 到 B7-e)

| # | severity | 修了什么 | 文件 | 触发 Gate |
|---|---|---|---|---|
| **B7-a** | P0 | SolutionHeader 加 mobile responsive (nav-mobile / nav-desktop class + mobileOpen state + 抽屉) | `prototype/components/SolutionHeader.jsx` | G2 (6 solutions @ 640 全 320px 溢出 → PASS) |
| **B7-b** | P0 | SolutionFooter 5-col grid 加 `className="two-col-grid"` | `prototype/components/SolutionFooter.jsx` | G2 (6 solutions @ 640 残余 43px 溢出 → PASS) |
| **B7-c** | P0 | 3 Page 内嵌 grids 加 `className="two-col-grid"` (5 处) | `solutions/PageEnteringChina.jsx`, `solutions/PageGoingGlobal.jsx`, `solutions/PagePhysicianEngagement.jsx` | G2 (3 solutions @ 640 残余 37-92px 溢出 → PASS) |
| **B7-d** | P1 | SolutionFooter 8 个 `href:'#'` 占位 + 2 个 social 占位 → 真实路径 + IR 外链 + linkedin/hkexnews | `prototype/components/SolutionFooter.jsx` | G3 (6 solutions 页底部断链 → PASS) |
| **B7-e** | P1 | Sections3 InsightCard 3 卡 + "All insights →" → `/insights/` (尾斜杠) | `prototype/components/Sections3.jsx` | G3 (Homepage Insights 区段断链 → PASS) |

总: 6 个 .jsx 文件改动。

---

## 3. 残留(已记入 backlog,不阻断 ship)

### 3.1 P2 · `/pilots/` breadcrumb 404

`components/PilotCard.jsx:89` 面包屑 `href:'/pilots/'`,但 `prototype/pilots/` 没 `index.html`。

下个 sprint:决定 /pilots/ landing 设计(列 2 pilot + Other Engagements link)→ 写 minimal pilots/index.html。

### 3.2 P2 · 6 处其他 grid 暂未 backfill `two-col-grid`

`PageMedicalCommunications.jsx:69`、`PageContentSprint.jsx:152/199`、`PageMedicalEvidence.jsx:79`、`PageEnteringChina.jsx:153/190` 当前 PASS 但 className 缺。下 sprint preempt。

### 3.3 ⏳ 5 个 B-phase 异步签字工作流(per HANDOFF §5)

| # | 工作流 | 状态 |
|---|---|---|
| 1 | §12 外部律所 Terms/Privacy/Disclosures | ⏳ kickoff 邮件已草,等用户填 placeholder + 发送 |
| 2 | §9 About 法务+IR 双签 | ⏳ 未起草邮件 |
| 3 | §9.2 Leadership 4 卡 name+bio | ⏳ 未起草 |
| 4 | §11 Pilot pricing × 2 BD+Finance | ⏳ 未起草邮件 |
| 5 | 9 Case-Study metric IR/Sponsor/Legal 三签 | ⏳ 未起草邮件 |

---

## 4. 数字账

| 指标 | 数 |
|---|---|
| 测试格 (G2) | 66 |
| G2 通过率 | 66/66 = 100% (post hotfix) |
| 内部链验证 (G3) | 21/21 = 100% |
| 页面文件 | 22 (全 check-page PASS,0 unpkg,0 ⚑) |
| HTML diff 项 (G1) | 全部 expected,0 unexpected |
| 组件 byte delta (G1) | 9 共享组件 100% 解释 |
| 新增组件 (G1) | 21 |
| 删除组件 (G1) | 0 |

---

## 5. 待用户做(可选)

1. 浏览器 visual cross-check (两个 server 都已起):
   - http://localhost:8000/index.html (current)
   - http://localhost:8001/Homepage.html (W0 baseline)
   - 6 solutions 同名 (8000 + 8001)
   - 三档断点用 Chrome DevTools toggle device toolbar (Ctrl/Cmd+Shift+M)
   - 重点看:Header / Footer 链可点跳真实页;640 hamburger 出;Insights teaser cards 可点跳 /insights/

2. 关 G2/G1 harness 文件(本次 commit 不带,但留盘上):
   - `prototype/_g2-batch.html`
   - `prototype/_g2-harness.html`
   - `prototype/_g1-pair.html`
   - `prototype/_g1-diff.html`
   下次想跑回归扫,直接重用即可;或本机删掉。

---

## 6. 接下来的 SHA(plumbing commit 后写回)

请在你 Mac 上(handoff §6.1 流程):

```bash
cd "/Users/yogyoung/Documents/MSH-website-rebuild/MSH Website Rebuild"
find .git -maxdepth 4 -name '*.lock' -delete
git update-ref refs/heads/master <COMMIT_SHA> <PARENT_SHA>
echo <COMMIT_SHA> > .git/refs/tags/w7-f-visual-acceptance-complete   # 可选 tag
```

`<COMMIT_SHA>` + `<PARENT_SHA>` 会在下条助手消息里给出。

---

## Sources

- G1 详: [G1-baseline-diff-report.md](./G1-baseline-diff-report.md)
- G2 详: [G2-overflow-report.md](./G2-overflow-report.md)
- G3 详: [G3-reverse-dd-walkthrough.md](./G3-reverse-dd-walkthrough.md)
- handoff: [../HANDOFF-2026-04-28.md](../HANDOFF-2026-04-28.md)
