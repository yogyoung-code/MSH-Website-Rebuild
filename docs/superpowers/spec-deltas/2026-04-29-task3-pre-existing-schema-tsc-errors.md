# Task 3 spec-delta · pre-existing schema tsc errors

**发现时间**: 2026-04-29 · Task 3 (aiProduct schema scaffold) tsc validation step
**严重性**: 不阻塞 Task 3-4-5 推进; 但 W3-W4 任意时点应清掉, 否则 Sanity studio
boot 时会报这两条
**owner**: 待 W2-05 schema 当前 owner 接手 (非 Task 3 责任范围)

## 现象

```bash
cd "W2-05 Sanity Schema v1.0" && tsc --noEmit ... schemas/index.ts
schemas/documents/clientReference.ts(64,7): error TS2559:
  Type '{ title: string; value: string; }[]' has no properties in common with type 'StringOptions'.
schemas/objects/portableText.ts(2,10): error TS2305:
  Module '"../lib/validators"' has no exported member 'noForbiddenPhrases'.
```

## 与本 spec / plan 的关系

无直接关系。 两条都是 W2-05 v1.0 阶段的遗留, 不在 v3.0 /ai-platform 重构范围
内, 也不被 plan task 1-20 触碰。 Task 3 新增的 3 个文件
(aiProductSignedBy / aiProductShowcase / aiProduct) tsc 单独跑全部 EXIT 0。

## 根因

1. **clientReference.ts(64)**: `{ title, value }[]` 直接传给 `options` 字段,
   Sanity 6.x 类型要求传给 `options.list`。 应是
   `options: { list: [{ title, value }, ...] }` 而不是 `options: [...]`。
2. **portableText.ts(2)**: 引用了 `noForbiddenPhrases` 但 `lib/validators.ts`
   中实际命名为 `noForbiddenText`。 命名不一致, 应改 import 或 export 别名。

## 建议处置

不入 Task 3 commit。 单独开 issue 或在下次 W2-05 schema 维护时一并修。
若 Task 4 (aiProductValidators.ts) owner 同时接管这两个修复, 可一起做。

## Round trip

记录到此, 不改 v3.2 spec。 plan v1.2 task 4 step 3 `tsc --noEmit` 时如果跑
全 schemas/ 目录, 这两条 error 会出现, 届时 reviewer 须能识别非 Task 4 引入。
