/* SolutionFooter.jsx — Footer for /solutions/* pages · i18n-aware (2026-07-24)
   链接与栏目文案来自 assets/i18n.js；MSH.L() 在中文语境下自动指向中文孪生页。 */
function SolutionFooter() {
  const M = window.MSH;
  const T = (k) => (M ? M.t(k) : '');
  const L = (h) => (M ? M.L(h) : h);
  const cols = T('footerCols') || [];
  return (
    <footer style={{ background: 'var(--brand-primary-900)', color: 'rgba(255,255,255,0.7)', padding: '72px clamp(16px, 4vw, 40px) 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1fr', gap: 40, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <img src="/assets/logo/medsci-healthcare-logo.svg" alt="MedSci Healthcare — Improving Healthcare Quality"
                 style={{ height: 38, filter: 'brightness(0) invert(1)', opacity: 0.95 }} />
            <p style={{ fontFamily: 'var(--font-slogan)', fontStyle: 'italic', fontSize: 14, color: 'rgba(255,255,255,0.5)', marginTop: 16, marginBottom: 20 }}>
              {T('slogan')}
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 16, maxWidth: 320 }}>
              {T('footerBlurb')}
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
              {c.items.map(it => (
                <a key={it.label} href={it.rel === 'external noopener' ? it.href : L(it.href)}
                   {...(it.rel ? { rel: it.rel } : {})}
                   style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 10, textDecoration: 'none' }}>
                  {it.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 24, fontSize: 11, color: 'rgba(255,255,255,0.45)', flexWrap: 'wrap', gap: 12 }}>
          <span>{T('copyright')}</span>
          <span style={{ fontFamily: 'var(--font-mono)' }}>{T('footerNofollow')}</span>
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
