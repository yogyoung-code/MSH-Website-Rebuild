/* SolutionFooter.jsx — Footer for /solutions/* pages (../ asset paths) */
function SolutionFooter() {
  const cols = [
    { title: 'Solutions', items: [
      { label: 'Entering China', href: 'entering-china.html' },
      { label: 'Going Global (US)', href: 'going-global-us.html' },
      { label: 'Medical Evidence', href: 'medical-evidence.html' },
      { label: 'Physician Engagement', href: 'physician-engagement.html' },
      { label: 'Medical Communications', href: 'medical-communications.html' },
    ]},
    { title: 'Pilots', items: [
      { label: '30-Day China Sprint', href: '#' },
      { label: '30-Day FDA Diagnostic', href: '#' },
      { label: 'Cross-Border Sprint', href: 'cross-border-medical-content-sprint.html' },
    ]},
    { title: 'Resources', items: [
      { label: 'Case Studies', href: '../Homepage.html#cases' },
      { label: 'AI Platform', href: '../Homepage.html#ai' },
      { label: 'Insights', href: '../Homepage.html#insights' },
      { label: 'About MedSci', href: '#' },
      { label: 'Contact', href: '#' },
    ]},
    { title: 'Legal & IR', items: [
      { label: 'Terms of Use', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Disclosures', href: '#' },
      { label: 'Investor Relations ↗', href: '#' },
    ]},
  ];
  return (
    <footer style={{ background: 'var(--brand-primary-900)', color: 'rgba(255,255,255,0.7)', padding: '72px 40px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1fr', gap: 40, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <img src="../assets/logo/medsci-healthcare-logo.svg" alt="MedSci Healthcare"
                 style={{ height: 38, filter: 'brightness(0) invert(1)', opacity: 0.95 }} />
            <p style={{ fontFamily: 'var(--font-slogan)', fontStyle: 'italic', fontSize: 14, color: 'rgba(255,255,255,0.5)', marginTop: 16, marginBottom: 20 }}>
              Improving Healthcare Quality
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, marginBottom: 16, maxWidth: 320 }}>
              AI-enabled medical review and a physician network helping US ↔ China healthcare innovators land cross-border evidence, communication and market-readiness.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>
              <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--brand-accent-500)' }}></span>
              MedSci Healthcare · 2415.HK
            </div>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#fff', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18 }}>
                {c.title}
              </div>
              {c.items.map(i => (
                <a key={i.label} href={i.href} style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 10, textDecoration: 'none' }}>
                  {i.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 24, fontSize: 11, color: 'rgba(255,255,255,0.45)', flexWrap: 'wrap', gap: 12 }}>
          <span>© 2026 MedSci Healthcare (2415.HK). All rights reserved.</span>
          <span style={{ display: 'inline-flex', gap: 18 }}>
            <a href="#" style={{ color: 'inherit' }}>LinkedIn</a>
            <a href="#" style={{ color: 'inherit' }}>HKEX ↗</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

window.SolutionFooter = SolutionFooter;
