/* Header.jsx — Top navigation per IA v2.0 */
function Header() {
  const [hoverIdx, setHoverIdx] = React.useState(null);
  const [megaOpen, setMegaOpen] = React.useState(false);
  const [lang, setLang] = React.useState('EN');
  const navItems = [
    { label: 'Solutions', hasMega: true },
    { label: 'Case Studies', href: '#cases' },
    { label: 'AI Platform', href: '#ai' },
    { label: 'Insights', href: '#insights' },
    { label: 'About', href: '#about' },
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.96)',
      borderBottom: '1px solid var(--border-1)', backdropFilter: 'saturate(1.2) blur(8px)',
    }}>
      {/* Utility strip */}
      <div style={{
        background: 'var(--brand-primary-900)', color: 'rgba(255,255,255,0.75)',
        fontSize: 12, letterSpacing: '0.02em',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '6px 40px', display: 'flex', gap: 20, alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-slogan)', fontStyle: 'italic', color: 'rgba(255,255,255,0.55)' }}>
            Improving Healthcare Quality
          </span>
          <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span style={{
              display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
              background: 'var(--brand-accent-500)',
            }}></span>
            HKEX listed · 2415.HK
          </span>
          <a href="#ir" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            Investor Relations <span style={{ fontSize: 10 }}>↗</span>
          </a>
        </div>
      </div>

      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'flex', alignItems: 'center', gap: 40,
        padding: '14px 40px',
      }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img src="assets/logo/medsci-healthcare-logo.svg"
               alt="MedSci Healthcare — Improving Healthcare Quality"
               style={{ height: 36 }} />
        </a>

        <nav style={{ display: 'flex', gap: 4, marginLeft: 16, position: 'relative' }}
             onMouseLeave={() => setMegaOpen(false)}>
          {navItems.map((it, i) => (
            <div key={it.label} style={{ position: 'relative' }}
                 onMouseEnter={() => { setHoverIdx(i); if (it.hasMega) setMegaOpen(true); else setMegaOpen(false); }}>
              <a href={it.href || '#'}
                 style={{
                   display: 'inline-flex', alignItems: 'center', gap: 4,
                   padding: '10px 14px',
                   fontFamily: '"Footlight MT Light", "Footlight MT", "Footlight MT Light Std", "Bookman Old Style", Georgia, serif',
                   fontSize: 15.5, fontWeight: 400,
                   color: hoverIdx === i ? 'var(--brand-primary-700)' : 'var(--fg-2)',
                   textDecoration: 'none',
                   transition: 'color 150ms',
                 }}>
                {it.label}
                {it.hasMega && <span style={{ fontSize: 10, opacity: 0.6 }}>▾</span>}
              </a>
            </div>
          ))}
          {megaOpen && <MegaMenu onLeave={() => setMegaOpen(false)} />}
        </nav>

        <div style={{ marginLeft: 'auto', display: 'flex', gap: 14, alignItems: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            fontSize: 13, color: 'var(--fg-2)', cursor: 'pointer',
            padding: '6px 10px', borderRadius: 6,
          }}
          onClick={() => setLang(lang === 'EN' ? 'CN' : 'EN')}>
            <i data-lucide="globe" width="14" height="14"></i>
            {lang} <span style={{ fontSize: 10, opacity: 0.5 }}>▾</span>
          </div>
          <Button variant="primary" icon={true}>Talk to an Expert</Button>
        </div>
      </div>
    </header>
  );
}

function MegaMenu() {
  const groups = [
    {
      label: 'By Path · Strategy',
      items: [
        { title: 'Entering China', desc: 'Evidence, regulatory and HCP traction inside China.', href: 'solutions/entering-china.html', tag: 'Navy' },
        { title: 'Going Global (US)', desc: 'US/global launch readiness for China innovators.', href: 'solutions/going-global-us.html', tag: 'Cyan' },
      ],
    },
    {
      label: 'By Deliverable · Business Blocks',
      items: [
        { title: 'Medical Evidence', desc: 'RWE · Registry · Literature · HEOR.', href: 'solutions/medical-evidence.html' },
        { title: 'Physician Engagement', desc: '3.33M+ network · Advisory · KOL · CME.', href: 'solutions/physician-engagement.html' },
        { title: 'Medical Communications', desc: 'Publications · Congress · Localization.', href: 'solutions/medical-communications.html' },
      ],
    },
    {
      label: 'Quick Start',
      items: [
        { title: 'Cross-Border Content Sprint', desc: 'Low-commitment entry. A single artifact in 2 weeks.', href: 'solutions/cross-border-medical-content-sprint.html' },
      ],
    },
  ];
  return (
    <div style={{
      position: 'absolute', top: '100%', left: -40,
      background: '#fff', border: '1px solid var(--border-1)',
      borderRadius: 12, boxShadow: 'var(--shadow-md)',
      padding: 28, width: 960, zIndex: 60,
      display: 'grid', gridTemplateColumns: '1fr 1.3fr 1fr', gap: 32,
    }}>
      {groups.map(g => (
        <div key={g.label}>
          <div style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.12em',
            color: 'var(--brand-accent-700)', textTransform: 'uppercase',
            paddingBottom: 10, marginBottom: 10,
            borderBottom: '1px solid var(--border-1)',
          }}>{g.label}</div>
          {g.items.map(it => (
            <a key={it.title} href={it.href}
               style={{ display: 'block', padding: '10px 0', textDecoration: 'none' }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--brand-primary-700)', marginBottom: 4 }}>
                {it.title}
                {it.tag && <span style={{
                  marginLeft: 8, fontSize: 10, fontWeight: 500, padding: '1px 6px', borderRadius: 4,
                  background: it.tag === 'Cyan' ? 'var(--brand-accent-100)' : 'var(--brand-primary-100)',
                  color: it.tag === 'Cyan' ? 'var(--brand-accent-700)' : 'var(--brand-primary-700)',
                  letterSpacing: '0.04em', textTransform: 'uppercase',
                }}>{it.tag}</span>}
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--fg-2)', lineHeight: 1.5 }}>{it.desc}</div>
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}

window.Header = Header;
