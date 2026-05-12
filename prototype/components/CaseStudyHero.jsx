/* CaseStudyHero.jsx — Custom hero for case study detail (B2) */
/* v2: accepts optional `chart` prop (React element or CaseStudyHeroChart kind string) */

function CaseStudyHero({ category, title, client, year, chart }) {
  return (
    <section style={{
      padding: '20px clamp(24px, 6vw, 96px) clamp(48px, 5vw, 80px)',
      maxWidth: 1280, margin: '0 auto'
    }}>
      <div style={{
        fontFamily: 'var(--font-slogan)',
        fontSize: 12, letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--brand-primary-700)', marginBottom: 16
      }}>{category}</div>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(32px, 5vw, 56px)',
        lineHeight: 1.15, margin: '0 0 24px',
        color: 'var(--brand-primary-700)'
      }}>{title}</h1>
      <div style={{ fontSize: 16, color: 'var(--fg-3)' }}>
        Client: {client} · Year: {year}
      </div>
      {chart && (
        <div style={{ maxWidth: 720, marginTop: 8 }}>
          {typeof chart === 'string'
            ? (typeof CaseStudyHeroChart !== 'undefined'
                ? <CaseStudyHeroChart kind={chart} />
                : null)
            : chart}
        </div>
      )}
    </section>
  );
}

window.CaseStudyHero = CaseStudyHero;
