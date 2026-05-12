/* SolutionFooter.jsx — Footer for /solutions/* pages (../ asset paths) */
function SolutionFooter() {
  const cols = [
    { title: 'Solutions', items: [
      { label: 'Entering China',          href: '/solutions/entering-china.html' },
      { label: 'Going Global (US)',       href: '/solutions/going-global-us.html' },
      { label: 'Medical Evidence',        href: '/solutions/medical-evidence.html' },
      { label: 'Physician Engagement',    href: '/solutions/physician-engagement.html' },
      { label: 'Medical Communications',  href: '/solutions/medical-communications.html' },
      { label: 'Content Review',          href: '/solutions/content-review.html' },
    ]},
    { title: 'Pilots', items: [
      { label: '30-Day China Sprint',     href: '/pilots/china-evidence-sprint.html' },
      { label: '30-Day FDA Diagnostic',   href: '/pilots/fda-evidence-gap-diagnostic.html' },
      { label: 'Cross-Border Sprint',     href: '/solutions/cross-border-medical-content-sprint.html' },
    ]},
    { title: 'Resources', items: [
      { label: 'Case Studies',     href: '/case-studies/' },
      { label: 'AI Platform',      href: '/ai-platform.html' },
      { label: 'Insights',         href: '/insights/' },
      { label: 'About MedSci',     href: '/about.html' },
      { label: 'Contact',          href: '/contact.html' },
    ]},
    { title: 'Legal & IR', items: [
      { label: 'Terms of Use',           href: '/legal/terms.html' },
      { label: 'Privacy Policy',         href: '/legal/privacy.html' },
      { label: 'Disclosures',            href: '/legal/disclosures.html' },
      { label: 'Investor Relations ↗',   href: 'https://ir.medsci.cn/en/', rel: 'external noopener' },
    ]},
  ];
  return (
    <footer style={{ background: 'var(--brand-primary-900)', color: 'rgba(255,255,255,0.7)', padding: '72px clamp(16px, 4vw, 40px) 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1fr', gap: 40, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <img src="/assets/logo/medsci-healthcare-logo.svg" alt="MedSci Healthcare"
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
                <a key={i.label} href={i.href}
                   {...(i.rel ? { rel: i.rel } : {})}
                   style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 10, textDecoration: 'none' }}>
                  {i.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 24, fontSize: 11, color: 'rgba(255,255,255,0.45)', flexWrap: 'wrap', gap: 12 }}>
          <span>© 2026 MedSci Healthcare (2415.HK). All rights reserved.</span>
          <span style={{ display: 'inline-flex', gap: 18 }}>
            <a href="https://www.linkedin.com/company/medscihealthcare" rel="external noopener" style={{ color: 'inherit' }}>LinkedIn</a>
            <a href="https://www.hkexnews.hk/" rel="external noopener" style={{ color: 'inherit' }}>HKEX ↗</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

window.SolutionFooter = SolutionFooter;
