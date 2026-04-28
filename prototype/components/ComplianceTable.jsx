/* ComplianceTable.jsx — 4-pillar compliance & governance grid for /about §9.4 (B4) */
/*
 * Spec: Copy Deck v4.2 §9.4.2 — four pillars, each with a title, ≤ 60-word
 *       body, and one outbound link. Pillars (in fixed order):
 *         01 PITL on every deliverable
 *         02 Bilingual physician review
 *         03 Source-trail and disclosure governance
 *         04 IR-grade reporting cadence
 *
 * Render: 2×2 grid on desktop, single column on narrow viewports
 *         (responsive.css W6 will tighten breakpoints; this is the
 *         baseline auto-fit grid).
 */

function ComplianceTable({ pillars }) {
  if (!Array.isArray(pillars) || pillars.length === 0) return null;
  return (
    <section style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      maxWidth: 1280,
      margin: '0 auto'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 24
      }}>
        {pillars.map((p, i) => (
          <CompliancePillar
            key={i}
            index={i + 1}
            heading={p.heading}
            body={p.body}
            link={p.link}
          />
        ))}
      </div>
    </section>
  );
}

function CompliancePillar({ index, heading, body, link }) {
  const indexLabel = String(index).padStart(2, '0');
  return (
    <article style={{
      borderTop: '2px solid var(--brand-primary-700)',
      paddingTop: 20,
      paddingRight: 8
    }}>
      <div style={{
        fontFamily: 'var(--font-slogan)',
        fontSize: 12,
        letterSpacing: '0.16em',
        color: 'var(--brand-accent-700)',
        marginBottom: 8
      }}>
        Pillar {indexLabel}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 22,
        margin: '0 0 16px',
        color: 'var(--brand-primary-700)',
        lineHeight: 1.25
      }}>
        {heading}
      </h3>

      <p style={{
        fontSize: 15,
        color: 'var(--fg-1)',
        lineHeight: 1.6,
        margin: '0 0 16px'
      }}>
        {body}
      </p>

      {link && (
        <a
          href={link.href}
          {...(link.external ? { rel: 'external noopener' } : {})}
          style={{
            fontSize: 13,
            fontFamily: 'var(--font-ui)',
            color: 'var(--fg-link)',
            textDecoration: 'underline',
            letterSpacing: '0.02em'
          }}
        >
          → {link.label}
        </a>
      )}
    </article>
  );
}

window.ComplianceTable = ComplianceTable;
window.CompliancePillar = CompliancePillar;
