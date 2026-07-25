/* OtherEngagementCardCN.jsx — /services/other-engagements-cn 的三卡网格 */
/*
 * 结构与英文版 OtherEngagementCard.jsx 一一对应，仅界面文案中文化。
 *
 * 策略说明：/services/other-engagements 及其中文孪生页不进试点漏斗 KPI，
 * 线索走销售负责人的关系渠道，不进结构化 BD 队列。页面为
 * meta robots="noindex, nofollow"，仅通过页脚与私下推荐进入。
 */

function cnLinkOE(href) {
  return (typeof window !== 'undefined' && window.MSH && window.MSH.L) ? window.MSH.L(href) : href;
}

function OtherEngagementCardCN({ index, title, body, audience, contactRoute }) {
  const indexLabel = String(index).padStart(2, '0');
  return (
    <article style={{
      border: '1px solid var(--border-1)',
      padding: 28,
      background: 'var(--bg-1)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      <div style={{
        fontFamily: 'var(--font-slogan)',
        fontSize: 11,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--brand-accent-700)',
        marginBottom: 8
      }}>合作形式 {indexLabel}</div>

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 20,
        margin: '0 0 12px',
        color: 'var(--brand-primary-700)',
        lineHeight: 1.3
      }}>{title}</h3>

      <p style={{
        fontSize: 15,
        color: 'var(--fg-1)',
        lineHeight: 1.6,
        margin: '0 0 16px'
      }}>{body}</p>

      {audience && (
        <p style={{
          fontSize: 13,
          color: 'var(--fg-3)',
          lineHeight: 1.5,
          margin: '0 0 20px',
          fontStyle: 'italic'
        }}>{audience}</p>
      )}

      <a
        href={cnLinkOE('/contact.html?topic=' + (contactRoute || 'other'))}
        style={{
          marginTop: 'auto',
          alignSelf: 'flex-start',
          fontSize: 13,
          fontWeight: 600,
          color: 'var(--fg-link)',
          textDecoration: 'underline',
          letterSpacing: '0.02em'
        }}
      >→ 联系我们的团队</a>
    </article>
  );
}

function OtherEngagementGridCN({ engagements }) {
  if (!Array.isArray(engagements) || engagements.length === 0) return null;
  return (
    <section style={{
      maxWidth: 1280,
      margin: '0 auto',
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 24
      }}>
        {engagements.map((e, i) => (
          <OtherEngagementCardCN key={i} index={i + 1} {...e} />
        ))}
      </div>
    </section>
  );
}

window.OtherEngagementCardCN = OtherEngagementCardCN;
window.OtherEngagementGridCN = OtherEngagementGridCN;
