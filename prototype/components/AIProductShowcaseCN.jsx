/* =========================================================
   AIProductShowcaseCN.jsx — 产品实景演示外壳（中文）
   ---------------------------------------------------------
   对应 AIProductShowcase.jsx。外壳、Tab、暗色 mockup 与断点
   与英文版一致；侧边栏、输入条、空态与无障碍标签改中文。
   所有内部辅助函数加 CN 后缀，避免与英文组件在同页重名。
   ========================================================= */

const PRODUCT_ACCENT_CN = {
  navy:   { c300: '#7FB8E3', c500: '#005AA4', c600: '#001A51', c950: '#001037' },
  cyan:   { c300: '#D6F1F9', c500: '#00AEDB', c600: '#0088B0', c950: '#001037' },
  violet: { c300: '#C4B5FD', c500: '#8B5CF6', c600: '#7C3AED', c950: '#2E1065' },
};
const ACCENT_ALIAS_CN = { blue: 'navy', teal: 'cyan', amber: 'cyan', emerald: 'cyan' };
function accentOfCN(slug) {
  const key = ACCENT_ALIAS_CN[slug] || slug;
  return PRODUCT_ACCENT_CN[key] || PRODUCT_ACCENT_CN.navy;
}

function monogramOfCN(name, slug) {
  const display = (name && (name.en || name)) || slug || '';
  return String(display).trim().charAt(0).toUpperCase() || '?';
}

function ActivityIconSvgCN({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size}
         fill="none" stroke="currentColor" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
         style={{ display: 'inline-block', flexShrink: 0, transform: 'scaleX(-1)' }}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function SeekIconSvgCN({ size = 16 }) {
  return (
    <svg viewBox="0 0 346 268" width={size} height={Math.round(size * 268 / 346)}
         fill="currentColor" aria-hidden="true"
         style={{ display: 'inline-block', flexShrink: 0 }}>
      <path d="M114.91 163c-0.024-26.97-0.096-53.44-0.043-79.91 0.017-8.45 3.968-14.74 11.69-18.18 7.99-3.55 15.65-2.43 22.4 3.2 4.78 3.98 6.88 9.39 6.89 15.46 0.103 36.13 0.053 72.25 0.16 108.38 0.027 8.93-8 19.95-19.82 19.24-13.87-0.83-21.16-7.34-21.24-21.22-0.05-8.83-0.024-17.65-0.034-26.97z"/>
      <path d="M217.03 181.99c0.036-32.79-0.009-65.08 0.14-97.37 0.07-15.28 12.78-24.83 26.99-20.59 8.67 2.59 13.95 10.02 13.96 20.15 0.032 29.79-0.039 59.59-0.077 89.38-0.008 6.49-0.026 12.98-0.076 19.47-0.068 8.88-8.81 18.66-18.7 18.17-15.49-0.77-22.24-7-22.24-22.73-0.0001-2-0.004-4-0.001-6.49z"/>
      <path d="M166.12 124c0.026-5 -0.16-9.51 0.12-13.99 0.72-11.6 9.76-20.21 20.76-20.01 10.9 0.19 19.78 9.26 19.9 20.86 0.18 17.82 0.18 35.65-0.025 53.47-0.142 12.05-8.94 20.89-20.26 20.93-11.33 0.04-20.2-8.74-20.42-20.78-0.249-13.32-0.062-26.65-0.066-40.47z"/>
      <path d="M72.33 106.22c15.93-9.63 32.32-0.9 32.74 17.2 0.224 9.65 0.164 19.32-0.053 28.97-0.26 11.58-7.79 19.93-18.27 20.65-11.94 0.82-21.13-5.92-22.11-18.02-0.937-11.56-0.313-23.27 0.054-34.9 0.174-5.53 2.998-10.13 7.636-13.9z"/>
      <path d="M308.89 133.01c0.005 6.99 0.122 13.49-0.009 19.98-0.24 11.91-8.51 19.96-20.34 19.98-11.85 0.02-20.21-8 -20.42-19.9-0.179-10.32-0.213-20.65-0.015-30.96 0.219-11.4 8.336-19.17 19.79-19.35 11.86-0.18 20.25 7.29 20.91 18.78 0.21 3.65 0.063 7.32 0.08 11.48z"/>
    </svg>
  );
}

function ProductIconCN({ product, size = 16 }) {
  const wrap = (node, extra = {}) => (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: size, height: size, ...extra,
    }}>{node}</span>
  );
  if (product.slug === 'seekevidence') return wrap(<SeekIconSvgCN size={size} />);
  if (product.slug === 'deepevidence') return wrap(<ActivityIconSvgCN size={size} />);
  if (product.sidebarIcon) return wrap(<i data-lucide={product.sidebarIcon} width={size} height={size} />);
  return wrap(<span style={{ fontWeight: 700, fontSize: Math.round(size * 0.7) }}>
    {monogramOfCN(product.name, product.slug)}
  </span>);
}

function ProductLogoCN({ active, accent, size = 28 }) {
  const half = Math.max(12, Math.round(size * 0.55));
  const iconStyle = {
    width: size, height: size, borderRadius: 8,
    background: `${accent.c600}33`, color: accent.c300,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)',
    transition: 'background 400ms ease, color 400ms ease',
    fontWeight: 700, fontSize: Math.round(size * 0.5),
    fontFamily: 'var(--font-display)',
    overflow: 'hidden',
  };
  if (active.iconRefUrl) {
    return (
      <span style={iconStyle}>
        <img src={active.iconRefUrl} alt="" aria-hidden="true"
          width={size} height={size}
          style={{ width: size, height: size, objectFit: 'cover' }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const monoEl = e.currentTarget.parentElement.querySelector('.aips-mono-fallback');
            if (monoEl) monoEl.style.display = 'inline';
          }}
        />
        <span className="aips-mono-fallback" style={{ display: 'none' }}>
          {monogramOfCN(active.name, active.slug)}
        </span>
      </span>
    );
  }
  return (
    <span style={iconStyle}>
      <ProductIconCN product={active} size={half} />
    </span>
  );
}

function AIProductShowcaseCN({ products, autoRotateMs = 0, renderBody }) {
  if (!Array.isArray(products) || products.length === 0) {
    return <ShowcaseEmptyStateCN />;
  }

  const [activeIdx, setActiveIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => { setHydrated(true); }, []);

  React.useEffect(() => {
    if (!hydrated || paused || products.length < 2 || !autoRotateMs) return;
    const t = setInterval(() => {
      setActiveIdx((i) => {
        const next = (i + 1) % products.length;
        if (typeof window !== 'undefined' && window.MSHAnalytics
            && typeof window.MSHAnalytics.trackShowcaseTabSwitch === 'function') {
          window.MSHAnalytics.trackShowcaseTabSwitch(products[i].slug, products[next].slug, 'auto');
        }
        return next;
      });
    }, autoRotateMs);
    return () => clearInterval(t);
  }, [hydrated, paused, products.length, autoRotateMs]);

  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.lucide && window.lucide.createIcons) {
      const t = setTimeout(() => window.lucide.createIcons(), 30);
      return () => clearTimeout(t);
    }
  }, [activeIdx]);

  const active = products[activeIdx];
  const accent = accentOfCN(active.accentColor);

  return (
    <section
      role="region"
      aria-label="AI 产品实景演示"
      aria-live="off"
      className="ai-product-showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      style={{
        position: 'relative',
        background: 'var(--brand-primary-900)',
        padding: 'clamp(72px, 9vw, 128px) clamp(24px, 6vw, 64px)',
        overflow: 'hidden',
        color: 'var(--white)',
      }}
    >
      <BackgroundOrbsCN accent={accent} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto' }}>
        <TabSwitcherCN
          products={products}
          activeIdx={activeIdx}
          onSelect={(i) => {
            if (typeof window !== 'undefined' && window.MSHAnalytics
                && typeof window.MSHAnalytics.trackShowcaseTabSwitch === 'function'
                && i !== activeIdx) {
              window.MSHAnalytics.trackShowcaseTabSwitch(products[activeIdx].slug, products[i].slug, 'manual');
            }
            setActiveIdx(i);
            setPaused(true);
          }}
        />

        <BrowserMockupCN active={active} accent={accent}>
          <DemoBodySlotCN active={active} renderBody={renderBody} />
        </BrowserMockupCN>

        <span
          role="status"
          aria-live="polite"
          style={{
            position: 'absolute', width: 1, height: 1, padding: 0, margin: -1,
            overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0,
          }}
        >
          当前展示：{(active.name && (active.name.cn || active.name.en)) || active.slug}
        </span>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .ai-product-showcase .aips-sidebar { display: none !important; }
        }
      `}</style>
    </section>
  );
}

function DemoBodySlotCN({ active, renderBody }) {
  if (typeof renderBody === 'function') return renderBody(active);
  const Demo = (typeof window !== 'undefined')
    ? (window.AIProductShowcaseDemoCN || window.AIProductShowcaseDemo) : null;
  if (Demo && active.showcase && Array.isArray(active.showcase.demoScenario)) {
    return <Demo demoScenario={active.showcase.demoScenario} accentColor={active.accentColor} />;
  }
  return (
    <div
      className="aips-content-body-empty"
      style={{
        flex: 1, padding: 24,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'rgba(255,255,255,0.35)',
        fontFamily: 'var(--font-ui)',
        fontSize: 12, letterSpacing: '0.1em',
      }}
    >
      <span>· 暂无演示脚本 ·</span>
    </div>
  );
}

function BackgroundOrbsCN({ accent }) {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 30% 20%, rgba(0,174,219,0.08), transparent 55%)',
      }} />
    </div>
  );
}

function TabSwitcherCN({ products, activeIdx, onSelect }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'clamp(24px, 3vw, 40px)' }}>
      <div role="tablist" aria-label="AI 产品" style={{
        background: 'rgba(255,255,255,0.06)',
        padding: 6,
        borderRadius: 16,
        border: '1px solid rgba(255,255,255,0.16)',
        display: 'flex', gap: 4,
      }}>
        {products.map((p, i) => {
          const isActive = i === activeIdx;
          const accent = accentOfCN(p.accentColor);
          return (
            <button
              key={p.slug}
              role="tab"
              aria-selected={isActive}
              aria-controls={`aips-panel-${p.slug}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelect(i)}
              style={{
                position: 'relative',
                padding: '12px 28px',
                borderRadius: 12,
                fontSize: 13,
                fontWeight: 700,
                fontFamily: 'var(--font-ui)',
                border: 'none',
                cursor: 'pointer',
                color: isActive ? '#fff' : '#94a3b8',
                background: isActive ? accent.c500 : 'transparent',
                boxShadow: 'none',
                transition: 'background 250ms ease, color 250ms ease, box-shadow 250ms ease',
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}
            >
              <span aria-hidden="true" style={{ display: 'inline-flex', width: 16, height: 16, alignItems: 'center', justifyContent: 'center' }}>
                <ProductIconCN product={p} size={16} />
              </span>
              <span>{(p.name && p.name.en) || p.slug}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function BrowserMockupCN({ active, accent, children }) {
  return (
    <div
      id={`aips-panel-${active.slug}`}
      role="tabpanel"
      aria-labelledby={`aips-tab-${active.slug}`}
      style={{
        maxWidth: 1024, margin: '0 auto',
        height: 'clamp(600px, 76vh, 760px)',
        position: 'relative',
        display: 'flex', flexDirection: 'row',
        background: 'var(--brand-primary-700)',
        borderRadius: 16,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.16)',
      }}
    >
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: accent.c500,
        transition: 'background 400ms ease',
        zIndex: 3,
      }} />
      <SidebarMockCN active={active} accent={accent} />
      <MainAreaCN active={active}>{children}</MainAreaCN>
    </div>
  );
}

function SidebarMockCN({ active, accent }) {
  const items = [
    { icon: 'message-square', text: '新建对话', active: true },
    { icon: 'search',         text: '证据检索' },
    { icon: 'file-text',      text: '已存报告' },
  ];
  return (
    <div className="aips-sidebar" style={{
      width: 256, flexShrink: 0,
      background: 'var(--brand-primary-900)',
      borderRight: '1px solid rgba(255,255,255,0.10)',
      display: 'flex', flexDirection: 'column',
      padding: 16,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32, padding: '8px 8px 0' }}>
        <ProductLogoCN active={active} accent={accent} size={28} />
        <span style={{ fontWeight: 700, fontSize: 13, color: '#e2e8f0', letterSpacing: '0.02em' }}>
          {active.sidebarBrand || (active.name && active.name.en) || active.slug}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {items.map((it, i) => <SidebarItemCN key={i} {...it} />)}
      </div>

      <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: 12, padding: 12,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: 'linear-gradient(to bottom right, #475569, #334155)',
              boxShadow: '0 0 0 2px rgba(255,255,255,0.10)',
              flexShrink: 0,
            }} />
            <div style={{ flex: 1 }}>
              <div style={{ height: 8, width: 80, background: 'rgba(51,65,85,0.5)', borderRadius: 4, marginBottom: 6 }} />
              <div style={{ height: 8, width: 48, background: 'rgba(51,65,85,0.5)', borderRadius: 4 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarItemCN({ icon, text, active = false }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '10px 12px', borderRadius: 8,
      cursor: 'pointer',
      background: active ? 'rgba(255,255,255,0.10)' : 'transparent',
      color: active ? '#fff' : '#64748b',
      border: active ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
      boxShadow: active ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
      transition: 'background 200ms ease, color 200ms ease',
    }}>
      <i data-lucide={icon} width="16" height="16" />
      <span style={{ fontSize: 13, fontWeight: 500 }}>{text}</span>
    </div>
  );
}

function MainAreaCN({ active, children }) {
  return (
    <div style={{
      flex: 1,
      background: 'var(--brand-primary-700)',
      display: 'flex', flexDirection: 'column',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        height: 56,
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(255,255,255,0.02)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 24px',
      }}>
        <span style={{
          color: '#64748b',
          fontSize: 10, letterSpacing: '0.18em',
          fontFamily: 'var(--font-mono, monospace)',
        }}>
          {active.headerModel ? `模型：${active.headerModel}` : `Slug：${active.slug}`}
        </span>
        <div style={{ display: 'flex', gap: 12, color: '#475569' }} aria-hidden="true">
          <i data-lucide="share-2" width="16" height="16" />
          <i data-lucide="more-horizontal" width="16" height="16" />
        </div>
      </div>

      {children}

      <div style={{
        padding: 16,
        borderTop: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(255,255,255,0.02)',
      }}>
        <div style={{
          background: 'var(--brand-primary-900)',
          border: '1px solid rgba(255,255,255,0.10)',
          borderRadius: 12,
          height: 48,
          display: 'flex', alignItems: 'center',
          padding: '0 16px',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1 }}>
            <span className="aips-input-cursor" style={{
              display: 'inline-block', width: 2, height: 16,
              background: '#475569', borderRadius: 1,
            }} />
            <span style={{ color: '#475569', fontSize: 13 }}>输入你的问题…</span>
          </div>
          <div aria-hidden="true" style={{
            padding: 6, borderRadius: 8,
            background: '#fff',
            color: '#0B0C10',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="3"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShowcaseEmptyStateCN() {
  const L = (window.MSH && window.MSH.L) ? window.MSH.L : function (x) { return x; };
  return (
    <section
      role="region"
      aria-label="AI 产品实景演示（暂无内容）"
      style={{
        background: 'var(--brand-primary-900)',
        color: 'var(--white)',
        padding: 'clamp(96px, 12vw, 160px) clamp(24px, 6vw, 64px)',
        textAlign: 'center',
      }}
    >
      <p style={{
        margin: '0 0 24px', maxWidth: 480, marginInline: 'auto',
        fontFamily: 'var(--font-display)', fontSize: 24, lineHeight: 1.5,
      }}>
        产品尚在低调打磨中。欢迎与我们直接沟通。
      </p>
      <a href={L('/contact.html') + '?intent=ai_dd'}
        style={{
          display: 'inline-block',
          padding: '12px 24px', borderRadius: 10,
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.18)',
          color: '#fff', textDecoration: 'none',
          fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600,
        }}>
        预约一次尽调说明会 →
      </a>
    </section>
  );
}

if (typeof window !== 'undefined') window.AIProductShowcaseCN = AIProductShowcaseCN;
