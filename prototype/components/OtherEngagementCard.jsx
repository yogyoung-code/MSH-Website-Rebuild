/* OtherEngagementCard.jsx — 3-card grid for /services/other-engagements (B5) */
/*
 * Spec: Copy Deck v4.1 §5.3–§5.5 (extracted into v4.2 by reference).
 *
 * IA v2.0 §8 OtherEngagementCard schema:
 *   { title, body, contactRoute, audience? }
 *
 * Strategy note (per IA §10): /services/other-engagements is intentionally
 * NOT in the Pilot funnel KPI — leads from this page route to Sales Owner
 * relationship channels, not the structured BD queue. The page itself is
 * meta robots="noindex, nofollow" and reached only via footer + private
 * referral.
 */

function OtherEngagementCard({ index, title, body, audience, contactRoute }) {
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
      }}>Engagement {indexLabel}</div>

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
        href={`/contact.html?topic=${contactRoute || 'other'}`}
        style={{
          marginTop: 'auto',
          alignSelf: 'flex-start',
          fontSize: 13,
          fontWeight: 600,
          color: 'var(--fg-link)',
          textDecoration: 'underline',
          letterSpacing: '0.02em'
        }}
      >→ Talk to our team</a>
    </article>
  );
}

function OtherEngagementGrid({ engagements }) {
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
          <OtherEngagementCard key={i} index={i + 1} {...e} />
        ))}
      </div>
    </section>
  );
}

window.OtherEngagementCard = OtherEngagementCard;
window.OtherEngagementGrid = OtherEngagementGrid;
