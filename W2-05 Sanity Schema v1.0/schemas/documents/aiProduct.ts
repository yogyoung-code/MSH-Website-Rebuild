import { defineType, defineField } from 'sanity'
import { kebabSlug } from '../lib/validators'
import { runAiProductGates } from '../lib/aiProductValidators'

/**
 * AI Product · v3.0
 * Spec §3.4 — slot 化产品矩阵的 CMS 数据契约。
 *
 * 设计目标:
 *   - 加新产品 = 新建一条 aiProduct doc → Showcase Tab + Card Grid + 子页全部
 *     自动多一条,**零前端代码改动** (IA B 方案 + §3.5 模板复用)。
 *   - status (comingSoon / limitedPreview / ga) 驱动 Card / 子页 / Smart Form 不同分支。
 *   - 全部 i18n 走 localizedString / localizedText (W2-05 conventions)。
 *
 * publish gates (§8.8–16) 在 Task 4 (aiProductValidators.ts) 集成 — 本 scaffold
 * 只做字段定义 + Studio-级基础校验 (required / length)。
 *
 * 引用:
 *   - W1-04 v1.2 product-accent palette → showcase.accentColor
 *   - W2-05 ProofPoint → showcase.citations
 *   - W2-05 forbiddenPhrases (Act 2 +6 条) → 文本字段后续 noForbiddenText 集成
 */
export default defineType({
  name: 'aiProduct',
  title: 'AI Product',
  type: 'document',
  // 顶层 publish gates · spec §8.10 / §8.13–16 + §3.9
  // 实现见 ../lib/aiProductValidators.ts (Task 4) — 5 个 validator 串联,
  // 任一失败均阻断发布,错误信息合并返回。
  validation: (Rule: any) =>
    Rule.custom(async (_value: any, ctx: any) => await runAiProductGates(ctx)),
  groups: [
    { name: 'overview', title: 'Overview', default: true },
    { name: 'showcase', title: 'Live Showcase' },
    { name: 'subpage', title: 'Subpage Content' },
    { name: 'access', title: 'Access & Status' },
    { name: 'irLegal', title: 'IR / Legal' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // ── Overview ─────────────────────────────────────────────────
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'overview',
      options: { source: 'name.en', maxLength: 60 },
      description: 'URL: /ai-platform/<slug>。 e.g. "deepevidence" / "seekevidence"。',
      validation: kebabSlug,
    }),
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'localizedString',
      group: 'overview',
      description: 'EN 主, CN 可选。 不要写 "AI 医生" / "AI doctor" 类冒充身份的名字 (§7 #17)。',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      group: 'overview',
      options: {
        list: [
          { title: 'Coming Soon', value: 'comingSoon' },
          { title: 'Limited Preview', value: 'limitedPreview' },
          { title: 'Generally Available (GA)', value: 'ga' },
        ],
        layout: 'radio',
      },
      initialValue: 'comingSoon',
      description:
        '状态机 (§3.9): comingSoon → limitedPreview → ga; ga 可降级回 limitedPreview; ' +
        '禁止 comingSoon → ga 直跳。 W4 launch 上限 = limitedPreview (§8.16)。',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'userRole',
      title: 'User Role / Scene Tag',
      type: 'localizedString',
      group: 'overview',
      description:
        'e.g. "Clinical AI · Point of Care" / "Research AI · Evidence Synthesis"。 ' +
        '务必 global 范畴 (Clinician / Researcher),不要 China-only 表述 (§3.0 Global-ready 口径)。',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'positioningOneLiner',
      title: 'Positioning (Card 2-line)',
      type: 'localizedText',
      group: 'overview',
      description: '产品卡正文 2 行。 e.g. "Authoritative-source clinical guidance at the bedside."',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'capabilitiesShort',
      title: 'Capabilities (Card · 3 bullets)',
      type: 'array',
      of: [{ type: 'localizedString' }],
      group: 'overview',
      description: '卡片视图 3 条核心能力 (短语)。 spec §3.3 规定为 3 条,长度严格。',
      validation: (R) =>
        R.length(3).error('Exactly 3 short capabilities required for card display.'),
    }),

    // ── Live Showcase ────────────────────────────────────────────
    defineField({
      name: 'showcase',
      title: 'Live Showcase',
      type: 'aiProductShowcase',
      group: 'showcase',
      description:
        'Act 2 双 Tab 实时 demo 内容。 demo prose body 必须由 Medical Writer + Clinical Reviewer 双签 (§8.15 gate)。',
      validation: (R) => R.required(),
    }),

    // ── Subpage ──────────────────────────────────────────────────
    defineField({
      name: 'capabilitiesFull',
      title: 'Capabilities (Subpage · 4–6 detailed)',
      type: 'array',
      of: [{ type: 'localizedString' }],
      group: 'subpage',
      description: '子页详细能力 4–6 条,每条短句 + 后续可挂 icon。',
      validation: (R) =>
        R.min(4).max(6).error('4–6 detailed capabilities for subpage.'),
    }),
    defineField({
      name: 'useCases',
      title: 'Use Cases (3 typical workflows)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'aiProductUseCase',
          title: 'Use Case',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'localizedString',
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'localizedText',
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'workflowImage',
              title: 'Workflow Screenshot',
              type: 'image',
              fields: [{ name: 'alt', type: 'string', title: 'Alt' }],
            }),
          ],
          preview: {
            select: { title: 'title.en' },
            prepare: ({ title }) => ({ title: title || '(use case)' }),
          },
        },
      ],
      group: 'subpage',
      description: 'Spec §3.5 子页第 4 模块,严格 3 条。',
      validation: (R) =>
        R.length(3).error('Exactly 3 use cases for subpage display.'),
    }),
    defineField({
      name: 'trustRefs',
      title: 'Trust Anchor Refs (read-only)',
      type: 'object',
      group: 'subpage',
      readOnly: true,
      description:
        '子页 Trust Footnote 链回总览页 anchor (§3.5 第 5 模块)。 字段为常量,前端硬编码读取。',
      fields: [
        defineField({
          name: 'foundationAnchor',
          title: 'Foundation Anchor',
          type: 'string',
          initialValue: '#foundation',
        }),
        defineField({
          name: 'methodAnchor',
          title: 'Method Anchor',
          type: 'string',
          initialValue: '#method',
        }),
      ],
    }),

    // ── Access & Status ──────────────────────────────────────────
    defineField({
      name: 'accessUrl',
      title: 'Access URL',
      type: 'url',
      group: 'access',
      description:
        'Limited Preview 必须为内部 redirect (e.g. /access/<slug>); GA 后切到正式 URL。 §8.13 gate 强制 limitedPreview 时为内部 redirect。',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'accessUrlIsInternalRedirect',
      title: 'Access URL is internal redirect?',
      type: 'boolean',
      group: 'access',
      initialValue: true,
      description:
        'Limited Preview 必须 true。 §8.13 / §7 #19 — 不允许第三方 Cloud Run URL 直接 expose。',
    }),
    defineField({
      name: 'notifyMeEnabled',
      title: 'Notify-me Enabled',
      type: 'boolean',
      group: 'access',
      initialValue: false,
      description:
        'Coming Soon 状态必须 true (§8.14 gate)。 触发 ComingSoonCard 的 Notify-me CTA。',
    }),
    defineField({
      name: 'hubspotIntent',
      title: 'HubSpot Smart Form Intent',
      type: 'string',
      group: 'access',
      options: {
        list: [
          { title: 'AI Product Access (Limited Preview / GA)', value: 'ai_product_access' },
          { title: 'AI Notify Me (Coming Soon)', value: 'ai_notify_me' },
        ],
        layout: 'radio',
      },
      description:
        'Coming Soon → ai_notify_me; Limited Preview / GA → ai_product_access。 §8.14 gate 强制一致性。',
      validation: (R) => R.required(),
    }),

    // ── IR / Legal ───────────────────────────────────────────────
    defineField({
      name: 'irApprovedAt',
      title: 'IR Sign-off Date',
      type: 'datetime',
      group: 'irLegal',
      description: 'GA 状态必须双填 (§8.10 gate)。 limitedPreview 阶段可留空。',
    }),
    defineField({
      name: 'irApprovedBy',
      title: 'IR Sign-off By (Name)',
      type: 'string',
      group: 'irLegal',
      description:
        'GA 状态必须双填 (§8.10 gate)。 timestamp + 责任人姓名缺一不可 (R2-A round-2 收紧)。',
    }),

    // ── SEO ──────────────────────────────────────────────────────
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'name.en',
      status: 'status',
      slug: 'slug.current',
      icon: 'showcase.iconRef',
    },
    prepare: ({ title, status, slug, icon }) => ({
      title: title || '(unnamed AI product)',
      subtitle: `${slug || '?'} · ${status || 'draft'}`,
      media: icon,
    }),
  },
})
