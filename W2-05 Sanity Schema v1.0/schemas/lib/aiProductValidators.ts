/**
 * AI Product Publish Gates · v3.0
 * Spec §8.10 / §8.13–16 — aiProduct document 发布前 5 道闸:
 *
 *   1. validateAccessUrlInternalRedirect (§8.13)
 *      Limited Preview 必须用内部 redirect (e.g. /access/<slug>);
 *      不允许第三方 Cloud Run URL 直接 expose。
 *
 *   2. validateHubspotIntent (§8.14)
 *      Coming Soon 状态 → hubspotIntent 必须为 ai_notify_me +
 *      notifyMeEnabled 必须 true。
 *
 *   3. validateIrSignOff (§8.10, R2-A 收紧)
 *      status === 'ga' 必须 irApprovedAt && irApprovedBy 双非空 —
 *      只有 timestamp 没有责任人姓名不构成 sign-off。
 *
 *   4. validateW4LaunchCeiling (§8.16)
 *      W4 launch 窗口期内 status 上限为 limitedPreview。
 *      GA 升级最早 W6 评估。
 *
 *   5. validateStatusTransition (§3.9)
 *      禁止 comingSoon → ga 直跳, 必须经 limitedPreview。
 *      读取当前 published 版本与 draft 比对。
 *
 * 实现注意:
 *   - validators 接收 ctx (Sanity validation context),返回 true | string | { level, message }
 *   - statusTransition 需异步 fetch 当前 published doc;getClient 来自 ctx
 *   - W4_LAUNCH_WINDOW_END 常量集中定义,2026-W6 后 cleanup
 */

// 单一来源,W4 launch 窗口结束时间。 2026-W6 后清理此 validator 或调整 ceiling。
// Spec §8.16 / Plan task 4 step 1 (v1.1 抽常量, MA-4 fix)。
// 提醒:2026-W6 cleanup calendar reminder。
export const W4_LAUNCH_WINDOW_END = new Date('2026-05-30T23:59:59Z')

type AnyDoc = Record<string, any> | undefined
interface ValidationCtx {
  document?: AnyDoc
  getClient?: (opts: { apiVersion: string }) => any
  // sanity validation ctx 还含其它字段,本 validators 只用 document/getClient
}

// ── §8.13 ────────────────────────────────────────────────────────
export const validateAccessUrlInternalRedirect = (ctx: ValidationCtx): true | string => {
  const doc = ctx?.document
  if (!doc) return true
  if (doc.status === 'limitedPreview' && !doc.accessUrlIsInternalRedirect) {
    return 'Spec §8.13: Limited Preview products must use internal redirect URL ' +
      '(e.g. /access/<slug>) — set accessUrlIsInternalRedirect=true.'
  }
  return true
}

// ── §8.14 ────────────────────────────────────────────────────────
export const validateHubspotIntent = (ctx: ValidationCtx): true | string => {
  const doc = ctx?.document
  if (!doc) return true
  if (doc.status === 'comingSoon') {
    if (doc.hubspotIntent !== 'ai_notify_me') {
      return 'Spec §8.14: Coming Soon must use hubspotIntent=ai_notify_me.'
    }
    if (!doc.notifyMeEnabled) {
      return 'Spec §8.14: Coming Soon must have notifyMeEnabled=true.'
    }
  }
  return true
}

// ── §8.10 (R2-A 收紧) ────────────────────────────────────────────
export const validateIrSignOff = (ctx: ValidationCtx): true | string => {
  const doc = ctx?.document
  if (!doc) return true
  if (doc.status === 'ga' && (!doc.irApprovedAt || !doc.irApprovedBy)) {
    return 'Spec §8.10 (R2-A): GA status requires both irApprovedAt and ' +
      'irApprovedBy non-empty — timestamp without named approver is not a sign-off.'
  }
  return true
}

// ── §8.16 ────────────────────────────────────────────────────────
export const validateW4LaunchCeiling = (ctx: ValidationCtx): true | string => {
  const doc = ctx?.document
  if (!doc) return true
  if (new Date() <= W4_LAUNCH_WINDOW_END && doc.status === 'ga') {
    return 'Spec §8.16: During W4 launch window, status is capped at limitedPreview. ' +
      'GA earliest W6 evaluation.'
  }
  return true
}

// ── §3.9 ────────────────────────────────────────────────────────
// 真实实现 (v1.1 MA-5 fix): fetch 当前 published 版本的 status 与新提交比对。
// previousStatus === 'comingSoon' && newStatus === 'ga' → 阻断。
export const validateStatusTransition = async (
  ctx: ValidationCtx,
): Promise<true | string> => {
  const doc = ctx?.document
  if (!doc?._id || !doc?.status) return true
  if (!ctx?.getClient) return true // 测试环境无 client, 跳过 (单独 unit test 走 mock)
  const client = ctx.getClient({ apiVersion: '2024-01-01' })
  // 去掉 drafts. 前缀获取 published 版本
  const publishedId = String(doc._id).replace(/^drafts\./, '')
  const previousStatus: string | undefined = await client.fetch(
    '*[_id == $id][0].status',
    { id: publishedId },
  )
  if (previousStatus === 'comingSoon' && doc.status === 'ga') {
    return 'Spec §3.9: Cannot transition comingSoon → ga directly. ' +
      'Must pass through limitedPreview.'
  }
  return true
}

/**
 * 串联 5 个 validator, 用作 aiProduct document 顶层 validation。
 * 失败时返回所有失败原因拼接;成功返回 true。
 *
 * 调用方式 (在 aiProduct.ts):
 *   validation: (Rule: any) => Rule.custom(async (_value: any, ctx: any) =>
 *     await runAiProductGates(ctx))
 */
export const runAiProductGates = async (
  ctx: ValidationCtx,
): Promise<true | string> => {
  const syncResults = [
    validateAccessUrlInternalRedirect(ctx),
    validateHubspotIntent(ctx),
    validateIrSignOff(ctx),
    validateW4LaunchCeiling(ctx),
  ]
  const asyncResult = await validateStatusTransition(ctx)
  const all = [...syncResults, asyncResult]
  const errors = all.filter((r) => r !== true)
  return errors.length === 0 ? true : (errors as string[]).join('; ')
}
