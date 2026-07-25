/* Header.jsx — Top navigation per IA v2.0 · i18n-aware (2026-07-24)
   文案与站内链接均走 assets/i18n.js：window.PAGE_LANG 决定语言，
   MSH.L() 把站内链接指向已存在的中文孪生页。 */
function Header() {
  const M = window.MSH;
  const T = (k) => (M ? M.t(k) : '');
  const L = (h) => (M ? M.L(h) : h);
  const [hoverIdx, setHoverIdx] = React.useState(null);
  const [megaOpen, setMegaOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const megaTimerRef = React.useRef(null);
  const openMegaIntent = () => {
    if (megaTimerRef.current) clearTimeout(megaTimerRef.current);
    megaTimerRef.current = setTimeout(() => setMegaOpen(true), 150);
  };
  const cancelMegaIntent = () => {
    if (megaTimerRef.current) clearTimeout(megaTimerRef.current);
  };
  const navItems = T('nav') || [];
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
            {T('slogan')}
          </span>
          <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span style={{
              display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
              background: 'var(--brand-accent-500)',
            }}></span>
            {T('listed')}
          </span>
          <a href={T('irHref')} rel="external noopener" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            {T('ir')} <span style={{ fontSize: 10 }}>↗</span>
          </a>
        </div>
      </div>

      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'flex', alignItems: 'center', gap: 40,
        padding: '14px clamp(16px, 4vw, 40px)',
      }}>
        <a href={L('/')} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img src="/assets/logo/medsci-healthcare-logo.svg"
               alt="MedSci Healthcare — Improving Healthcare Quality"
               style={{ height: 36 }} />
        </a>

        <button
          className="nav-mobile"
          aria-label={mobileOpen ? T('closeMenu') : T('openMenu')}
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
              <a href={it.href ? L(it.href) : '#'}
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
          <LangToggle />
          <Button variant="primary" icon={true} href={L('/contact.html')}>{T('cta')}</Button>
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
            <li style={{ borderBottom: '1px solid var(--border-1)' }}>
              <a href={L('/solutions/physician-research.html')} onClick={() => setMobileOpen(false)} style={{
                display: 'flex', alignItems: 'center', gap: 8, padding: '14px 4px',
                fontFamily: '"Footlight MT Light", Georgia, serif',
                fontSize: 17,
                color: 'var(--fg-1)', textDecoration: 'none'
              }}>
                {T('navQuick')}
                <span style={{
                  fontSize: 10, fontWeight: 600, padding: '1px 6px', borderRadius: 4,
                  background: 'var(--brand-accent-100)', color: 'var(--brand-accent-700)',
                  letterSpacing: '0.04em', textTransform: 'uppercase',
                }}>Fastest</span>
              </a>
            </li>
            {navItems.map((it, i) => (
              <li key={i} style={{ borderBottom: '1px solid var(--border-1)' }}>
                <a href={it.href ? L(it.href) : '#'} onClick={() => setMobileOpen(false)} style={{
                  display: 'block', padding: '14px 4px',
                  fontFamily: '"Footlight MT Light", Georgia, serif',
                  fontSize: 17,
                  color: 'var(--fg-1)', textDecoration: 'none'
                }}>{it.label}</a>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
            <LangToggle variant="mobile" />
            <Button variant="primary" icon={true} href={L('/contact.html')}>{T('cta')}</Button>
          </div>
        </div>
      )}
    </header>
  );
}

/* MegaMenu — 三列：路径/交付/快速起步。内容与文案来自 i18n 词典，
   Header.jsx 与 SolutionHeader.jsx 共用同一份数据，杜绝两处脱同步。 */
function MegaMenu() {
  const M = window.MSH;
  const L = (h) => (M ? M.L(h) : h);
  const mega = M ? M.t('mega') : { strategic: [], deliverables: [], quickStart: [] };
  const colLabels = (M ? M.t('megaCols') : []) || [];
  const tagBg = (tag) => ({ Cyan: 'var(--brand-accent-100)', New: 'var(--success-100, #ecfdf5)', Sprint: 'var(--bg-3)', Platform: 'var(--brand-accent-100)', Fastest: 'var(--brand-accent-100)' }[tag] || 'var(--brand-primary-100)');
  const tagFg = (tag) => ({ Cyan: 'var(--brand-accent-700)', New: 'var(--success-500, #16a34a)', Sprint: 'var(--fg-2)', Platform: 'var(--brand-accent-700)', Fastest: 'var(--brand-accent-700)' }[tag] || 'var(--brand-primary-700)');
  const Column = ({ label, items }) => (
    <div>
      <div style={{
        fontSize: 11, fontWeight: 600, letterSpacing: '0.12em',
        color: 'var(--brand-accent-700)', textTransform: 'uppercase',
        paddingBottom: 10, marginBottom: 10,
        borderBottom: '1px solid var(--border-1)',
      }}>{label}</div>
      {(items || []).map(it => (
        <a key={it.title} href={L(it.href)}
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
      padding: 28, width: 960, zIndex: 60,
      display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32,
    }}>
      <Column label={colLabels[0]} items={mega.strategic} />
      <Column label={colLabels[1]} items={mega.deliverables} />
      <Column label={colLabels[2]} items={mega.quickStart} />
    </div>
  );
}

window.Header = Header;
window.MegaMenu = MegaMenu;
