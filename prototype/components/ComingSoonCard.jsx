/* =========================================================
   ComingSoonCard.jsx — /ai-platform v3.0 · Act 2 Card Grid
   ---------------------------------------------------------
   占位卡 + Notify-me lead capture trigger。

   Spec §3.3 / §3.6 #16 — Coming Soon 必有占位卡, 不写产品名 / 不承诺日期。
   双重作用:
     1. 视觉上让矩阵看起来「已是矩阵」而非「双产品」
     2. Notify-me 表单是低门槛 lead capture, 对 reverse DD 友好

   Plan task 8.

   Usage:
     <ComingSoonCard
        title="Next product"
        subtitle="Working on it · 2026 H2"
        description="A focused workflow for a third evidence-driven medical role."
        notifyHref="/contact?intent=ai_notify_me"
     />
   ========================================================= */

function ComingSoonCard({
  title = 'Next product',
  subtitle = 'Working on it · 2026 H2',
  description = 'A focused workflow for a third evidence-driven medical role.',
  notifyHref = '/contact?intent=ai_notify_me',
  notifyLabel = 'Notify me',
  onNotifyClick,
}) {
  // 阻止 spec §3.6 #16 违规:title 不应当包含具体产品名 / 日期。
  // 这里只 console.warn 提示, 不强阻断 (运营约定 + Sanity §8.11 frontmatter 校验
  // 是真正的 gate)。
  React.useEffect(() => {
    if (/^[A-Z][a-zA-Z]+Evidence|GlobalLink|MedSci\s+\w+/.test(String(title))) {
      console.warn('ComingSoonCard: title looks like a real product name; spec §3.6 #16 禁止');
    }
  }, [title]);

  return (
    <article style={{
      background: 'var(--bg-2, var(--neutral-50))',
      border: '1px dashed var(--border-2)',
      borderRadius: 16,
      padding: 'clamp(20px, 2.4vw, 32px)',
      display: 'flex', flexDirection: 'column',
      gap: 16,
      transition: 'border-color 200ms ease, background 200ms ease',
      position: 'relative',
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--brand-accent-500)';
        e.currentTarget.style.background = 'var(--bg-1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-2)';
        e.currentTarget.style.background = 'var(--bg-2, var(--neutral-50))';
      }}
    >
      {/* Coming Soon badge */}
      <div>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '4px 10px', borderRadius: 999,
          background: 'var(--neutral-100)',
          color: 'var(--neutral-700)',
          fontSize: 11, fontWeight: 700,
          letterSpacing: '0.06em', textTransform: 'uppercase',
          fontFamily: 'var(--font-ui)',
        }}>
          <span aria-hidden="true" style={{
            width: 6, height: 6, borderRadius: '50%',
            background: 'var(--neutral-500)',
          }} />
          Coming Soon
        </span>
      </div>

      {/* Title (intentionally generic — spec §3.6 #16) + subtitle */}
      <div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(22px, 2.4vw, 28px)',
          fontWeight: 600,
          color: 'var(--fg-2)',
          lineHeight: 1.2,
          margin: '0 0 6px',
          letterSpacing: '-0.01em',
        }}>{title}</h3>
        <div style={{
          fontFamily: 'var(--font-mono, var(--font-ui))',
          fontSize: 12,
          letterSpacing: '0.04em',
          color: 'var(--fg-3)',
        }}>{subtitle}</div>
      </div>

      <hr aria-hidden="true" style={{
        border: 0, borderTop: '1px dashed var(--border-2)', margin: 0,
      }} />

      {/* Description (kept vague intentionally — spec §3.6 #16) */}
      {description && (
        <p style={{
          margin: 0,
          fontSize: 14,
          lineHeight: 1.6,
          color: 'var(--fg-2)',
          fontStyle: 'italic',
        }}>{description}</p>
      )}

      {/* Notify-me CTA */}
      <div style={{ marginTop: 'auto', paddingTop: 8 }}>
        <a href={notifyHref}
          onClick={(e) => {
            // 触发 GA 事件 (Task 15 wiring; 当前 just lead-capture link)
            if (typeof window !== 'undefined' && window.MSHAnalytics
                && typeof window.MSHAnalytics.trackNotifyMeSubmit === 'function') {
              window.MSHAnalytics.trackNotifyMeSubmit('ai_platform_card_grid');
            }
            if (typeof onNotifyClick === 'function') onNotifyClick(e);
          }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '10px 16px', borderRadius: 8,
            color: 'var(--brand-primary-700)',
            border: '1px solid var(--brand-primary-700)',
            background: 'transparent',
            fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600,
            textDecoration: 'none',
            transition: 'background 200ms ease, color 200ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--brand-primary-700)';
            e.currentTarget.style.color = 'var(--white)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--brand-primary-700)';
          }}
        >
          {notifyLabel} →
        </a>
      </div>
    </article>
  );
}

if (typeof window !== 'undefined') window.ComingSoonCard = ComingSoonCard;
