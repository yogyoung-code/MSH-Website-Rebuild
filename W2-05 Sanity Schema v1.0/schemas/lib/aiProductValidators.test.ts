/**
 * aiProductValidators.test.ts — unit tests for §8.10/§8.13–16 publish gates
 *
 * Run paths (Plan task 4 step 1.6, v1.2 修订):
 *
 *   Path A (推荐, 工程已有 vitest 时):
 *     npx vitest run schemas/lib/aiProductValidators.test.ts
 *
 *   Path B (fallback, 无 vitest, 用 node:test):
 *     # 编译: 用 bundler resolution 绕开 sanity 模块解析坑
 *     npx tsc schemas/lib/aiProductValidators.test.ts \
 *       --outDir /tmp/test-out --target es2022 --module nodenext \
 *       --moduleResolution bundler --skipLibCheck
 *     node --test /tmp/test-out/aiProductValidators.test.js
 *
 *   Path C (最简, sandbox 无 sanity package 时):
 *     此测试不依赖 sanity 真实 API, ctx.document 是 plain object,
 *     ctx.getClient 用 mock。 直接 ts-node 或先 tsc 编译再 node --test 即可。
 */
import { test } from 'node:test'
import assert from 'node:assert'
import {
  validateAccessUrlInternalRedirect,
  validateHubspotIntent,
  validateIrSignOff,
  validateW4LaunchCeiling,
  validateStatusTransition,
  runAiProductGates,
  W4_LAUNCH_WINDOW_END,
} from './aiProductValidators'

// ── §8.13 accessUrlInternalRedirect ──────────────────────────────
test('§8.13: blocks limitedPreview without internal redirect', () => {
  const r = validateAccessUrlInternalRedirect({
    document: { status: 'limitedPreview', accessUrlIsInternalRedirect: false },
  })
  assert.match(String(r), /Limited Preview products must use internal redirect/)
})

test('§8.13: passes when limitedPreview + internal redirect', () => {
  const r = validateAccessUrlInternalRedirect({
    document: { status: 'limitedPreview', accessUrlIsInternalRedirect: true },
  })
  assert.strictEqual(r, true)
})

test('§8.13: passes for ga status (gate not applicable)', () => {
  const r = validateAccessUrlInternalRedirect({
    document: { status: 'ga', accessUrlIsInternalRedirect: false },
  })
  assert.strictEqual(r, true)
})

// ── §8.14 hubspotIntent ──────────────────────────────────────────
test('§8.14: blocks comingSoon with wrong intent', () => {
  const r = validateHubspotIntent({
    document: {
      status: 'comingSoon',
      hubspotIntent: 'ai_product_access',
      notifyMeEnabled: true,
    },
  })
  assert.match(String(r), /must use hubspotIntent=ai_notify_me/)
})

test('§8.14: blocks comingSoon with notifyMeEnabled=false', () => {
  const r = validateHubspotIntent({
    document: {
      status: 'comingSoon',
      hubspotIntent: 'ai_notify_me',
      notifyMeEnabled: false,
    },
  })
  assert.match(String(r), /must have notifyMeEnabled=true/)
})

test('§8.14: passes valid Coming Soon config', () => {
  const r = validateHubspotIntent({
    document: {
      status: 'comingSoon',
      hubspotIntent: 'ai_notify_me',
      notifyMeEnabled: true,
    },
  })
  assert.strictEqual(r, true)
})

// ── §8.10 IR sign-off (R2-A 收紧) ────────────────────────────────
test('§8.10 R2-A: blocks GA with only irApprovedAt', () => {
  const r = validateIrSignOff({
    document: { status: 'ga', irApprovedAt: '2026-05-01T00:00:00Z' },
  })
  assert.match(String(r), /both irApprovedAt and irApprovedBy/)
})

test('§8.10 R2-A: blocks GA with only irApprovedBy', () => {
  const r = validateIrSignOff({
    document: { status: 'ga', irApprovedBy: 'IR Lead Jane Doe' },
  })
  assert.match(String(r), /both irApprovedAt and irApprovedBy/)
})

test('§8.10 R2-A: passes GA with both fields', () => {
  const r = validateIrSignOff({
    document: {
      status: 'ga',
      irApprovedAt: '2026-05-01T00:00:00Z',
      irApprovedBy: 'IR Lead Jane Doe',
    },
  })
  assert.strictEqual(r, true)
})

test('§8.10 R2-A: passes limitedPreview without IR fields', () => {
  const r = validateIrSignOff({
    document: { status: 'limitedPreview' },
  })
  assert.strictEqual(r, true)
})

// ── §8.16 W4 launch ceiling ──────────────────────────────────────
test('§8.16: blocks GA during W4 launch window', () => {
  // 仅当当前时间 <= W4_LAUNCH_WINDOW_END 时此 test 有意义。
  // 若执行时间 > 2026-05-30 则 gate 已自然过期, 此 case 退化为 true。
  const now = new Date()
  if (now <= W4_LAUNCH_WINDOW_END) {
    const r = validateW4LaunchCeiling({ document: { status: 'ga' } })
    assert.match(String(r), /capped at limitedPreview/)
  } else {
    // post-window: gate inactive, blocking GA returns true
    const r = validateW4LaunchCeiling({ document: { status: 'ga' } })
    assert.strictEqual(r, true)
  }
})

test('§8.16: passes limitedPreview always', () => {
  const r = validateW4LaunchCeiling({ document: { status: 'limitedPreview' } })
  assert.strictEqual(r, true)
})

test('§8.16: passes comingSoon always', () => {
  const r = validateW4LaunchCeiling({ document: { status: 'comingSoon' } })
  assert.strictEqual(r, true)
})

// ── §3.9 status transition ───────────────────────────────────────
test('§3.9: blocks comingSoon → ga direct transition', async () => {
  const ctxMock = {
    document: { _id: 'drafts.aiproduct.foo', status: 'ga' },
    getClient: () => ({
      fetch: async (_q: string, _params: any) => 'comingSoon',
    }),
  }
  const r = await validateStatusTransition(ctxMock)
  assert.match(String(r), /Cannot transition comingSoon → ga directly/)
})

test('§3.9: passes comingSoon → limitedPreview', async () => {
  const ctxMock = {
    document: { _id: 'drafts.aiproduct.foo', status: 'limitedPreview' },
    getClient: () => ({
      fetch: async (_q: string, _params: any) => 'comingSoon',
    }),
  }
  const r = await validateStatusTransition(ctxMock)
  assert.strictEqual(r, true)
})

test('§3.9: passes limitedPreview → ga', async () => {
  const ctxMock = {
    document: { _id: 'drafts.aiproduct.foo', status: 'ga' },
    getClient: () => ({
      fetch: async (_q: string, _params: any) => 'limitedPreview',
    }),
  }
  const r = await validateStatusTransition(ctxMock)
  assert.strictEqual(r, true)
})

test('§3.9: passes new doc (no previous status)', async () => {
  const ctxMock = {
    document: { _id: 'drafts.aiproduct.foo', status: 'comingSoon' },
    getClient: () => ({
      fetch: async (_q: string, _params: any) => undefined,
    }),
  }
  const r = await validateStatusTransition(ctxMock)
  assert.strictEqual(r, true)
})

// ── runAiProductGates 串联 ────────────────────────────────────────
test('runAiProductGates: aggregates multiple failures', async () => {
  const ctxMock = {
    document: {
      _id: 'drafts.aiproduct.foo',
      status: 'ga',
      // 故意触发 §8.10 (irApprovedAt/By 缺) + §8.16 (W4 launch GA 阻断)
      irApprovedAt: undefined,
      irApprovedBy: undefined,
    },
    getClient: () => ({
      fetch: async (_q: string, _params: any) => 'limitedPreview',
    }),
  }
  const r = await runAiProductGates(ctxMock)
  // 至少应包含 §8.10 报错;§8.16 视当前时间是否 <= W4_LAUNCH_WINDOW_END
  assert.match(String(r), /both irApprovedAt and irApprovedBy/)
})

test('runAiProductGates: passes valid limitedPreview doc', async () => {
  const ctxMock = {
    document: {
      _id: 'drafts.aiproduct.foo',
      status: 'limitedPreview',
      accessUrlIsInternalRedirect: true,
      hubspotIntent: 'ai_product_access',
      notifyMeEnabled: false,
    },
    getClient: () => ({
      fetch: async (_q: string, _params: any) => 'comingSoon',
    }),
  }
  const r = await runAiProductGates(ctxMock)
  assert.strictEqual(r, true)
})
