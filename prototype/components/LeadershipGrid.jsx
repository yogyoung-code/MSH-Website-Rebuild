/* LeadershipGrid.jsx — Leadership cards grid for /about §9.2 (B4) */
/*
 * Spec: Copy Deck v4.2 §9.2.2 schema — name, title, bio (≤ 50 EN words),
 *       photo (optional, monogram fallback), disclosures (optional),
 *       linkedin (optional), pending (boolean — true = ⚑ placeholder card).
 *
 * Pending cards render with a dashed warning border so they are visibly
 * distinct from signed-off cards. check-page Gate 17 (⚑ scan) is expected
 * to FAIL while any leader has pending=true; that is intentional pre-deploy
 * to force IR + People Ops sign-off before Go-Live.
 */

function LeadershipGrid({ leaders }) {
  if (!Array.isArray(leaders) || leaders.length === 0) return null;
  return (
    <section style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      maxWidth: 1280,
      margin: '0 auto'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 24
      }}>
        {leaders.map((p, i) => (
          <LeadershipCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}

function LeadershipCard({ name, title, bio, photo, disclosures, linkedin, pending }) {
  const monogram = pending
    ? '⚑'
    : (name && name.split(' ').filter(Boolean).map(w => w[0]).join('').slice(0, 2).toUpperCase());

  return (
    <article style={{
      border: pending ? '1.5px dashed var(--brand-warn-600, #b45309)' : '1px solid var(--border-1)',
      padding: 24,
      background: pending ? 'rgba(245, 158, 11, 0.04)' : 'var(--bg-1)'
    }}>
      <div style={{
        width: photo ? 72 : 56,
        height: photo ? 72 : 56,
        borderRadius: photo ? 12 : '50%',
        background: pending ? 'var(--brand-warn-600, #b45309)' : 'var(--brand-primary-100)',
        color: pending ? 'var(--bg-1)' : 'var(--brand-primary-700)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 16,
        backgroundImage: photo ? `url(${photo})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center top'
      }} aria-hidden={!photo}>
        {!photo && monogram}
      </div>

      <div style={{
        fontFamily: 'var(--font-slogan)',
        fontSize: 11,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: pending ? 'var(--brand-warn-600, #b45309)' : 'var(--brand-accent-700)',
        marginBottom: 6
      }}>
        {pending ? 'Pending IR + People Ops sign-off' : title}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 20,
        margin: '0 0 12px',
        color: 'var(--fg-1)',
        lineHeight: 1.25
      }}>
        {pending ? `[${title} — name pending]` : name}
      </h3>

      <p style={{
        fontSize: 14,
        color: 'var(--fg-2)',
        lineHeight: 1.5,
        margin: '0 0 16px'
      }}>
        {bio}
      </p>

      {(disclosures || linkedin) && (
        <div style={{
          fontSize: 12,
          color: 'var(--fg-3)',
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap'
        }}>
          {disclosures && (
            <a href={disclosures} rel="external noopener" style={{
              color: 'var(--fg-link)',
              textDecoration: 'underline'
            }}>HKEX disclosure</a>
          )}
          {linkedin && (
            <a href={linkedin} rel="external noopener" style={{
              color: 'var(--fg-link)',
              textDecoration: 'underline'
            }}>LinkedIn</a>
          )}
        </div>
      )}
    </article>
  );
}

window.LeadershipGrid = LeadershipGrid;
window.LeadershipCard = LeadershipCard;
