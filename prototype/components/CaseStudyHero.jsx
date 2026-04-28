/* CaseStudyHero.jsx — Custom hero for case study detail (B2) */

function CaseStudyHero({ category, title, client, year }) {
  return (
    <section style={{
      padding: 'clamp(64px, 8vw, 128px) clamp(24px, 6vw, 96px)',
      maxWidth: 1280, margin: '0 auto'
    }}>
      <div style={{
        fontFamily: 'var(--font-slogan)',
        fontSize: 14, letterSpacing: '0.12em',
        color: 'var(--brand-primary-700)', marginBottom: 16
      }}>{category}</div>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(36px, 6vw, 64px)',
        lineHeight: 1.1, margin: '0 0 24px'
      }}>{title}</h1>
      <div style={{ fontSize: 16, color: 'var(--fg-3)' }}>
        Client: {client} · Year: {year}
      </div>
    </section>
  );
}

window.CaseStudyHero = CaseStudyHero;
