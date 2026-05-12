/* PageShell.jsx — Generic non-solutions page shell (B1+) */

function PageShell({ title, subtitle, eyebrow, children, hero, breadcrumbs, hideHero }) {
  const crumbNav = breadcrumbs ? (
    <nav aria-label="Breadcrumb" style={{ marginBottom: 0, fontSize: 13, color: 'var(--fg-3)' }}>
      {breadcrumbs.map((b, i) => (
        <span key={i}>
          {i > 0 && <span style={{ margin: '0 6px' }}>/</span>}
          {b.href ? <a href={b.href} style={{ color: 'inherit' }}>{b.label}</a> : <span>{b.label}</span>}
        </span>
      ))}
    </nav>
  ) : null;

  return (
    <div style={{ background: 'var(--bg-1)', color: 'var(--fg-1)', minHeight: '100vh' }}>
      <Header />
      {/* Breadcrumb bar — always shown when breadcrumbs provided and hero is custom or hidden */}
      {crumbNav && (hideHero || hero) && (
        <div style={{
          padding: '20px clamp(24px, 6vw, 96px) 0',
          maxWidth: 1280,
          margin: '0 auto'
        }}>
          {crumbNav}
        </div>
      )}
      {hideHero ? null : hero ? hero : (
        <section style={{
          padding: 'clamp(48px, 8vw, 96px) clamp(24px, 6vw, 96px)',
          maxWidth: 1280,
          margin: '0 auto'
        }}>
          {crumbNav}
          {eyebrow && (
            <div style={{
              fontFamily: 'var(--font-slogan)',
              fontSize: 14,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--brand-primary-700)',
              marginBottom: 16
            }}>
              {eyebrow}
            </div>
          )}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 6vw, 64px)',
            lineHeight: 1.1,
            margin: '0 0 24px'
          }}>
            {title}
          </h1>
          {subtitle && (
            <p style={{
              fontSize: 'clamp(16px, 2vw, 22px)',
              lineHeight: 1.5,
              maxWidth: 720,
              color: 'var(--fg-2)'
            }}>
              {subtitle}
            </p>
          )}
        </section>
      )}
      <main>{children}</main>
      <Footer />
    </div>
  );
}

window.PageShell = PageShell;
