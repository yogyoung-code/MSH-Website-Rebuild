/* Header.jsx — Top navigation per IA v2.0 */
function Header() {
  const [hoverIdx, setHoverIdx] = React.useState(null);
  const [megaOpen, setMegaOpen] = React.useState(false);
  const [lang, setLang] = React.useState('EN');
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // UXcritique20260429 polish: 150ms hover-intent so cursor flicks past
  // the Solutions item don't trigger the mega-menu accidentally.
  const megaTimerRef = React.useRef(null);
  const openMegaIntent = () => {
    if (megaTimerRef.current) clearTimeout(megaTimerRef.current);
    megaTimerRef.current = setTimeout(() => setMegaOpen(true), 150);
  };
  const cancelMegaIntent = () => {
    if (megaTimerRef.current) clearTimeout(megaTimerRef.current);
  };
  const navItems = [
    { label: 'Solutions', hasMega: true },
    { label: 'Case Studies', href: '/case-studies/' },
    { label: 'AI Platform', href: '/ai-platform.html' },
    { label: 'Insights', href: '/insights/' },
    { label: 'About', href: '/about.html' },
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: 'var(--bg-1)',
      borderBottom: '1px solid var(--border-1)',
    }}>
      {/* Utility strip */}
      <div style={{
        background: 'var(--brand-primary-900)', color: 'rgba(255,255,255,0.75)',
        fontSize: 12, letterSpacing: '0.02em',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '6px clamp(16px, 4vw, 40px)', display: 'flex', gap: 20, alignItems: 'center' }}>
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
          <a href="https://ir.medsci.cn/en/" rel="external noopener" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            Investor Relations <span style={{ fontSize: 10 }}>↗</span>
          </a>
        </div>
      </div>

      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'flex', alignItems: 'center', gap: 40,
        padding: '14px clamp(16px, 4vw, 40px)',
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img src="/assets/logo/medsci-healthcare-logo.svg"
               alt="MedSci Healthcare — Improving Healthcare Quality"
               style={{ height: 36 }} />
        </a>

        <button
          className="nav-mobile"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            marginLeft: 'auto',
            background: 'transparent',
            border: '1px solid var(--border-1)',
            padding: '8px 12px',
            cursor: 'pointer',
            fontSize: 20,
            color: 'var(--brand-primary-700)',
            lineHeight: 1
          }}
        >{mobileOpen ? '×' : '☰'}</button>

        <nav className="nav-desktop" style={{ display: 'flex', gap: 4, marginLeft: 16, position: 'relative' }}
             onMouseLeave={() => { cancelMegaIntent(); setMegaOpen(false); }}>
          {navItems.map((it, i) => (
            <div key={it.label} style={{ position: 'relative' }}
                 onMouseEnter={() => { setHoverIdx(i); if (it.hasMega) openMegaIntent(); else { cancelMegaIntent(); setMegaOpen(false); } }}>
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

        <div className="nav-desktop" style={{ marginLeft: 'auto', display: 'flex', gap: 14, alignItems: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            fontSize: 13, color: 'var(--fg-2)', cursor: 'pointer',
            padding: '6px 10px', borderRadius: 6,
          }}
          onClick={() => setLang(lang === 'EN' ? 'CN' : 'EN')}>
            <i data-lucide="globe" width="14" height="14"></i>
            {lang} <span style={{ fontSize: 10, opacity: 0.5 }}>▾</span>
          </div>
          <Button variant="primary" icon={true} href="/contact.html">Talk to an Expert</Button>
        </div>
      </div>

      {/* Mobile drawer — visible only when hamburger toggled open */}
      {mobileOpen && (
        <div style={{
          borderTop: '1px solid var(--border-1)',
          background: 'var(--bg-1)',
          padding: '16px 24px 24px'
        }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {navItems.map((it, i) => (
              <li key={i} style={{ borderBottom: '1px solid var(--border-1)' }}>
                <a href={it.href || '#'} onClick={() => setMobileOpen(false)} style={{
                  display: 'block', padding: '14px 4px',
                  fontFamily: '"Footlight MT Light", Georgia, serif',
                  fontSize: 17,
                  color: 'var(--fg-1)', textDecoration: 'none'
                }}>{it.label}</a>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
            <button onClick={() => setLang(lang === 'EN' ? 'CN' : 'EN')} style={{
              padding: '8px 14px', background: 'transparent',
              border: '1px solid var(--border-1)', cursor: 'pointer',
              fontSize: 13, color: 'var(--fg-2)'
            }}>{lang}</button>
            <Button variant="primary" icon={true} href="/contact.html">Talk to an Expert</Button>
          </div>
        </div>
      )}
    </header>
  );
}

// UXcritique20260429 polish: 3-column / 9-item panel collapsed to 2 columns.
// Left column = strategic entries (paths + sprint together). Right column =
// deliverable blocks. Cleaner pairing — each column has 3 items, balanced weight.
function MegaMenu() {
  const strategic = [
    { title: 'Entering China',           desc: 'Evidence, regulatory and HCP traction inside China.',     href: '/solutions/entering-china.html',                       tag: 'Navy' },
    { title: 'Going Global (US)',        desc: 'US / global launch readiness for China innovators.',      href: '/solutions/going-global-us.html',                      tag: 'Cyan' },
    { title: 'Cross-Border Content Sprint', desc: 'Low-commitment entry. A single artifact in 2 weeks.',  href: '/solutions/cross-border-medical-content-sprint.html', tag: 'Sprint' },
  ];
  const deliverables = [
    { title: 'Medical Evidence',        desc: 'RWE · Registry · Literature · HEOR.',                    href: '/solutions/medical-evidence.html' },
    { title: 'Physician Engagement',    desc: '3.33M+ network · Advisory · KOL · CME.',                 href: '/solutions/physician-engagement.html' },
    { title: 'Medical Communications',  desc: 'Publications · Congress · Localization.',                href: '/solutions/medical-communications.html' },
  ];
  const tagBg = (tag) => tag === 'Cyan' ? 'var(--brand-accent-100)' : tag === 'Sprint' ? 'var(--bg-3)' : 'var(--brand-primary-100)';
  const tagFg = (tag) => tag === 'Cyan' ? 'var(--brand-accent-700)' : tag === 'Sprint' ? 'var(--fg-2)'  : 'var(--brand-primary-700)';
  const Column = ({ label, items }) => (
    <div>
      <div style={{
        fontSize: 11, fontWeight: 600, letterSpacing: '0.12em',
        color: 'var(--brand-accent-700)', textTransform: 'uppercase',
        paddingBottom: 10, marginBottom: 10,
        borderBottom: '1px solid var(--border-1)',
      }}>{label}</div>
      {items.map(it => (
        <a key={it.title} href={it.href}
           style={{ display: 'block', padding: '10px 0', textDecoration: 'none' }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--brand-primary-700)', marginBottom: 4 }}>
            {it.title}
            {it.tag && <span style={{
              marginLeft: 8, fontSize: 10, fontWeight: 500, padding: '1px 6px', borderRadius: 4,
              background: tagBg(it.tag), color: tagFg(it.tag),
              letterSpacing: '0.04em', textTransform: 'uppercase',
            }}>{it.tag}</span>}
          </div>
          <div style={{ fontSize: 12.5, color: 'var(--fg-2)', lineHeight: 1.5 }}>{it.desc}</div>
        </a>
      ))}
    </div>
  );
  return (
    <div style={{
      position: 'absolute', top: '100%', left: -40,
      background: '#fff', border: '1px solid var(--border-1)',
      borderRadius: 12, boxShadow: 'var(--shadow-md)',
      padding: 28, width: 720, zIndex: 60,
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32,
    }}>
      <Column label="By Path · Strategy"          items={strategic} />
      <Column label="By Deliverable · Block"      items={deliverables} />
    </div>
  );
}

window.Header = Header;
