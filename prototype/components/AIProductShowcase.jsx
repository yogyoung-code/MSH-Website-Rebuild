/* =========================================================
   AIProductShowcase.jsx — /ai-platform v3.0 · Act 2 (shell only)
   ---------------------------------------------------------
   Slot 化双 Tab 实时 demo 容器。 渲染 N 个产品 Tab,自动轮播 8s,
   hover/focus 暂停。 暗色 glass-card 浏览器 mockup 外壳 + sidebar +
   header + input strip。 中间 content body **本 task (6a) 留空**,
   由 Task 6b (AIProductShowcaseDemo) 用 mini portable-text renderer
   填充 chat / table / forest plot 内容。

   参考代码 port 自:
     prototype/_reference/medsci-evidence-tech/components/Hero.tsx
     (Tailwind + framer-motion + lucide-react,
      372 lines → 本 file 重写为 plain JSX + CSS-vars + CSS transitions)
   Tailwind → CSS-vars 映射:
     docs/engineering/tailwind-to-css-vars-map.md (W3 工程参考表, P1 后会精简)

   Spec:
     §3.0  设计原则:可扩展先于美观 / Global-ready / 跳转优先于堆叠
     §3.2  Live Showcase Tab 数据契约 (CMS aiProduct.showcase slot)
     §3.7  状态降级矩阵 (products.length 0 / icon 404 / JS-disabled / 慢网络)
     §6.4 row 11  Brand v1.2 序列依赖 fallback (hardcoded blue/violet 是 §3.4 enum 子集)

   Plan v1.2 task 6a fix 落实:
     · MA-2  按 6a / 6b 拆分 (6a = shell, 6b = renderer)
     · NIT-1 aria-live='off' 替代 'polite' (8s 轮播 spam SR 风险)
     · Step 0 mapping table 已落 (上面引用)

   Usage:
     <AIProductShowcase
        products={[
          { slug:'deepevidence', name:{en:'DeepEvidence'}, accentColor:'blue',
            status:'limitedPreview', headerModel:'MED-LLM-PRO-V2 (Clinical)',
            sidebarBrand:'DeepEvidence', sidebarIcon:'activity' },
          { slug:'seekevidence', name:{en:'SeekEvidence'}, accentColor:'violet',
            status:'limitedPreview', headerModel:'Research-Graph-V4',
            sidebarBrand:'SeekEvidence', sidebarIcon:'search' },
        ]}
        autoRotateMs={8000}
     />

   Body 渲染:Task 6b 把 demo 内容 portable text → React,装到本 shell 的
   <div className="aips-content-body">slot<div>。 6b 完成后,signature 改为:
     <AIProductShowcase products={...}>
       {(activeProduct) => <AIProductShowcaseDemo {...activeProduct.showcase} />}
     </AIProductShowcase>
   ========================================================= */

// Parent brand (medscihealthcare.com) is single-hue blue + cyan per §2.
// Sub-product brands may define their own product-accent palette (anticipated
// by spec §6.4 row 11). SeekEvidence's public site (seekevidence-web.medsci.cn)
// already uses violet as its product-brand color — preserved here.
const PRODUCT_ACCENT = {
  navy:   { c300: '#7FB8E3', c500: '#005AA4', c600: '#001A51', c950: '#001037' }, // brand-primary scale (DeepEvidence)
  cyan:   { c300: '#D6F1F9', c500: '#00AEDB', c600: '#0088B0', c950: '#001037' }, // brand-accent scale
  violet: { c300: '#C4B5FD', c500: '#8B5CF6', c600: '#7C3AED', c950: '#2E1065' }, // SeekEvidence product brand
};
// Back-compat: legacy enum names that aren't product-brand-aligned still
// degrade to navy so old data doesn't crash.
const ACCENT_ALIAS = { blue: 'navy', teal: 'cyan', amber: 'cyan', emerald: 'cyan' };
function accentOf(slug) {
  const key = ACCENT_ALIAS[slug] || slug;
  return PRODUCT_ACCENT[key] || PRODUCT_ACCENT.navy;
}

// §3.7 row 3 — iconRef 404 / 缺失时, 用产品名首字母 monogram 作为 fallback
function monogramOf(name, slug) {
  const display = (name && (name.en || name)) || slug || '';
  return String(display).trim().charAt(0).toUpperCase() || '?';
}

// DeepEvidence — Lucide `activity` icon path inlined as SVG (not via lucide
// virtual DOM no longer matches real DOM, so unmounting (e.g. on Tab switch)
// throws NotFoundError on removeChild. Inline SVG avoids that.
// scaleX(-1) matches reference Hero.tsx (Activity className="scale-x-[-1]").
function ActivityIconSvg({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size}
         fill="none" stroke="currentColor" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
         style={{
           display: 'inline-block', flexShrink: 0,
           transform: 'scaleX(-1)',
         }}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

// SeekEvidence 5-bar audio-spectrum icon — ported from
// _reference/medsci-evidence-tech/components/Hero.tsx SeekIcon (viewBox 346×268).
// Inline SVG (not Lucide). currentColor inherits from parent.
function SeekIconSvg({ size = 16 }) {
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

/* Render Tab/Sidebar icon: prefer slug-specific custom SVG (DeepEvidence
   Activity x-flipped, SeekEvidence 5-bar), fallback to Lucide sidebarIcon name,
   final fallback to monogram. Reference matches medsci-evidence-tech Hero.tsx. */
function ProductIcon({ product, size = 16 }) {
  const wrap = (node, extra = {}) => (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: size, height: size, ...extra,
    }}>{node}</span>
  );
  if (product.slug === 'seekevidence') {
    return wrap(<SeekIconSvg size={size} />);
  }
  if (product.slug === 'deepevidence') {
    // Inline SVG — NOT Lucide createIcons (which would mutate <i> -> <svg>
    // outside React's reconciler and break Tab switching with NotFoundError).
    return wrap(<ActivityIconSvg size={size} />);
  }
  if (product.sidebarIcon) {
    return wrap(<i data-lucide={product.sidebarIcon} width={size} height={size} />);
  }
  return wrap(<span style={{ fontWeight: 700, fontSize: Math.round(size * 0.7) }}>
    {monogramOf(product.name, product.slug)}
  </span>);
}

// Render logo: iconRef (image URL) > sidebarIcon (lucide name) > monogram
function ProductLogo({ active, accent, size = 28 }) {
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
  // Prefer iconRef (Sanity image asset URL once Task 13 wires real CMS)
  if (active.iconRefUrl) {
    return (
      <span style={iconStyle}
        onError={() => {/* CSS-only fallback path; React no longer triggers re-render */}}>
        <img
          src={active.iconRefUrl}
          alt=""
          aria-hidden="true"
          width={size} height={size}
          style={{ width: size, height: size, objectFit: 'cover' }}
          onError={(e) => {
            // 资源 404 → 把图片元素隐藏, 父级 fallback 显字母
            e.currentTarget.style.display = 'none';
            const monoEl = e.currentTarget.parentElement.querySelector('.aips-mono-fallback');
            if (monoEl) monoEl.style.display = 'inline';
          }}
        />
        <span className="aips-mono-fallback" style={{ display: 'none' }}>
          {monogramOf(active.name, active.slug)}
        </span>
      </span>
    );
  }
  // Default: ProductIcon helper (DeepEvidence flipped Activity, SeekEvidence
  // 5-bar SVG, others fallback to Lucide sidebarIcon → monogram).
  return (
    <span style={iconStyle}>
      <ProductIcon product={active} size={half} />
    </span>
  );
}

// SSR / no-JS 默认 Tab = 0 (spec §3.7); useEffect 在 client hydrate 后启动轮播。
// users should be in control. Pass autoRotateMs={8000} explicitly to opt back in.
function AIProductShowcase({ products, autoRotateMs = 0, renderBody }) {
  // §3.7 row 1 — 0 条产品时显示 placeholder
  if (!Array.isArray(products) || products.length === 0) {
    return <ShowcaseEmptyState />;
  }

  const [activeIdx, setActiveIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [hydrated, setHydrated] = React.useState(false);

  // hydrate flag — useEffect 只在 client 后跑, mark hydrated 后才允许 auto-rotate
  React.useEffect(() => { setHydrated(true); }, []);

  // 自动轮播 + GA showcase_tab_switch (auto trigger)
  React.useEffect(() => {
    if (!hydrated || paused || products.length < 2 || !autoRotateMs) return;
    const t = setInterval(() => {
      setActiveIdx((i) => {
        const next = (i + 1) % products.length;
        if (typeof window !== 'undefined' && window.MSHAnalytics
            && typeof window.MSHAnalytics.trackShowcaseTabSwitch === 'function') {
          window.MSHAnalytics.trackShowcaseTabSwitch(
            products[i].slug, products[next].slug, 'auto'
          );
        }
        return next;
      });
    }, autoRotateMs);
    return () => clearInterval(t);
  }, [hydrated, paused, products.length, autoRotateMs]);

  // lucide createIcons hook — 每次 activeIdx 变化重渲后, lucide rescan
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.lucide && window.lucide.createIcons) {
      // 微延迟,让 React 完成 DOM 更新
      const t = setTimeout(() => window.lucide.createIcons(), 30);
      return () => clearTimeout(t);
    }
  }, [activeIdx]);

  const active = products[activeIdx];
  const accent = accentOf(active.accentColor);

  return (
    <section
      role="region"
      aria-label="AI Products Live Showcase"
      aria-live="off" /* spec §3.7 / NIT-1 — 8s 轮播不 spam SR;Tab 切换由按钮触发 */
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
      {/* Animated background orbs (CSS-only, no SVG noise per spec §2.2) */}
      <BackgroundOrbs accent={accent} />

      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: 1200, margin: '0 auto',
      }}>
        {/* Tab Switcher */}
        <TabSwitcher
          products={products}
          activeIdx={activeIdx}
          onSelect={(i) => {
            // GA showcase_tab_switch (manual trigger)
            if (typeof window !== 'undefined' && window.MSHAnalytics
                && typeof window.MSHAnalytics.trackShowcaseTabSwitch === 'function'
                && i !== activeIdx) {
              window.MSHAnalytics.trackShowcaseTabSwitch(
                products[activeIdx].slug, products[i].slug, 'manual'
              );
            }
            setActiveIdx(i);
            setPaused(true);
          }}
        />

        {/* Browser Mockup (glass-card) */}
        <BrowserMockup active={active} accent={accent}>
          {/* Content body — Task 6b: AIProductShowcaseDemo renderer with §3.7 fallback。
              Custom renderBody prop 优先, 否则用默认 demo renderer (若 window.AIProductShowcaseDemo 已加载)。 */}
          <DemoBodySlot active={active} renderBody={renderBody} />
        </BrowserMockup>

        {/* SR-only live region for active product changes (a11y polite) */}
        <span
          role="status"
          aria-live="polite"
          style={{
            position: 'absolute', width: 1, height: 1, padding: 0, margin: -1,
            overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0,
          }}
        >
          Now showing: {(active.name && active.name.en) || active.slug}
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

/* ── Demo body slot ─────────────────────────────────────── */
// renderBody 优先级:
//   1. caller 传 renderBody(active) → custom 渲染 (e.g. _signature-preview pass-through)
//   2. window.AIProductShowcaseDemo 全局存在 (Task 6b 加载 AIProductShowcaseDemo.jsx) → 用默认 renderer 渲染 demoScenario
//   3. 都没有 → 静态占位 (Task 6a 单跑时见到的状态)
function DemoBodySlot({ active, renderBody }) {
  if (typeof renderBody === 'function') {
    return renderBody(active);
  }
  const Demo = (typeof window !== 'undefined') ? window.AIProductShowcaseDemo : null;
  if (Demo && active.showcase && Array.isArray(active.showcase.demoScenario)) {
    return <Demo demoScenario={active.showcase.demoScenario} accentColor={active.accentColor} />;
  }
  // 占位 (无 demo 内容)
  return (
    <div
      className="aips-content-body-empty"
      style={{
        flex: 1, padding: 24,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'rgba(255,255,255,0.35)',
        fontFamily: 'var(--font-mono, monospace)',
        fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
      }}
    >
      <span>· no demo scenario provided ·</span>
    </div>
  );
}

function BackgroundOrbs({ accent }) {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 30% 20%, rgba(0,174,219,0.08), transparent 55%)',
      }} />
    </div>
  );
}

/* ── Tab Switcher ────────────────────────────────────────── */
function TabSwitcher({ products, activeIdx, onSelect }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'clamp(24px, 3vw, 40px)' }}>
      <div role="tablist" aria-label="AI products" style={{
                background: 'rgba(255,255,255,0.06)',
        padding: 6,
        borderRadius: 16,
        border: '1px solid rgba(255,255,255,0.16)',
        display: 'flex', gap: 4,
      }}>
        {products.map((p, i) => {
          const isActive = i === activeIdx;
          const accent = accentOf(p.accentColor);
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
                {p.iconRefUrl ? (
                  <>
                    <img src={p.iconRefUrl} alt="" width="16" height="16"
                      style={{ width: 16, height: 16, objectFit: 'cover', borderRadius: 4 }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fb = e.currentTarget.parentElement.querySelector('.aips-tab-mono-fb');
                        if (fb) fb.style.display = 'inline-flex';
                      }}
                    />
                    <span className="aips-tab-mono-fb" style={{
                      display: 'none', width: 16, height: 16,
                      alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: 11,
                    }}>{(((p.name && p.name.en) || p.slug || '').charAt(0) || '?').toUpperCase()}</span>
                  </>
                ) : (
                  /* slug-specific ProductIcon (DeepEvidence flipped Activity,
                     SeekEvidence 5-bar SVG, else Lucide sidebarIcon name) */
                  <ProductIcon product={p} size={16} />
                )}
              </span>
              <span>{(p.name && p.name.en) || p.slug}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ── Browser Mockup (glass-card) ─────────────────────────── */
function BrowserMockup({ active, accent, children }) {
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
        /* glass removed; brand-spec navy mid-tier (--brand-primary-700) for the
           "card sitting on the section" effect */
        background: 'var(--brand-primary-700)',
        borderRadius: 16,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.16)',
      }}
    >
      {}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: accent.c500,
        transition: 'background 400ms ease',
        zIndex: 3,
      }} />

      <SidebarMock active={active} accent={accent} />
      <MainArea active={active}>{children}</MainArea>
    </div>
  );
}

/* ── Sidebar mock ────────────────────────────────────────── */
function SidebarMock({ active, accent }) {
  const items = [
    { icon: 'message-square', text: 'New Chat', active: true },
    { icon: 'search',         text: 'Evidence Search' },
    { icon: 'file-text',      text: 'Saved Reports' },
  ];
  return (
    <div className="aips-sidebar" style={{
      width: 256, flexShrink: 0,
      /* sidebar 用 --brand-primary-900,比 mockup outer 稍深,营造 inset 列效果 */
      background: 'var(--brand-primary-900)',
      borderRight: '1px solid rgba(255,255,255,0.10)',
      display: 'flex', flexDirection: 'column',
      padding: 16,
    }}>
      {/* Logo + name (with iconRef→lucide→monogram fallback chain) */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        marginBottom: 32, padding: '8px 8px 0',
      }}>
        <ProductLogo active={active} accent={accent} size={28} />
        <span style={{ fontWeight: 700, fontSize: 13, color: '#e2e8f0', letterSpacing: '0.02em' }}>
          {active.sidebarBrand || (active.name && active.name.en) || active.slug}
        </span>
      </div>

      {/* Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {items.map((it, i) => <SidebarItem key={i} {...it} />)}
      </div>

      {/* Bottom user card */}
      <div style={{
        marginTop: 'auto', paddingTop: 16,
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
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

function SidebarItem({ icon, text, active = false }) {
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

/* ── Main area (header + content body slot + input strip) ─ */
function MainArea({ active, children }) {
  return (
    <div style={{
      flex: 1,
      /* MainArea matches mockup outer = --brand-primary-700 */
      background: 'var(--brand-primary-700)',
      display: 'flex', flexDirection: 'column',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Header strip */}
      <div style={{
        height: 56,
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(255,255,255,0.02)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 24px',
      }}>
        <span style={{
          color: '#64748b',
          fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
          fontFamily: 'var(--font-mono, monospace)',
        }}>
          {active.headerModel ? `Model: ${active.headerModel}` : `Slug: ${active.slug}`}
        </span>
        <div style={{ display: 'flex', gap: 12, color: '#475569' }} aria-hidden="true">
          <i data-lucide="share-2" width="16" height="16" />
          <i data-lucide="more-horizontal" width="16" height="16" />
        </div>
      </div>

      {/* Body slot — children injected by Task 6b renderer */}
      {children}

      {/* Input strip */}
      <div style={{
        padding: 16,
        borderTop: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(255,255,255,0.02)',
      }}>
        <div style={{
          /* input 输入条 sits in MainArea — 用更深的 --brand-primary-900 inset */
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
            <span style={{ color: '#475569', fontSize: 13 }}>Ask anything…</span>
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

/* ── §3.7 Empty state (products.length === 0) ───────────── */
function ShowcaseEmptyState() {
  return (
    <section
      role="region"
      aria-label="AI Products Live Showcase (empty)"
      style={{
        background: 'var(--brand-primary-900)',
        color: 'var(--white)',
        padding: 'clamp(96px, 12vw, 160px) clamp(24px, 6vw, 64px)',
        textAlign: 'center',
      }}
    >
      <p style={{
        margin: '0 0 24px', maxWidth: 480, marginInline: 'auto',
        fontFamily: 'var(--font-display)', fontSize: 24, lineHeight: 1.4,
      }}>
        Products under quiet development. Talk to us.
      </p>
      <a href="/contact.html?intent=ai_dd"
        style={{
          display: 'inline-block',
          padding: '12px 24px', borderRadius: 10,
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.18)',
          color: '#fff', textDecoration: 'none',
          fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600,
        }}>
        Schedule a Reverse-DD session →
      </a>
    </section>
  );
}

if (typeof window !== 'undefined') window.AIProductShowcase = AIProductShowcase;
