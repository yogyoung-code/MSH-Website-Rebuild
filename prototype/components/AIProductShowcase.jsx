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

// 5 color enum (W1-04 v1.2 P1 落实后改 var(--product-accent-{slug}-{shade}))
// 当前 hardcoded 值是 §3.4 闭合 enum 子集, §6.4 row 11 fallback 路径,
// gate §8.12 语义不绕过。
const PRODUCT_ACCENT = {
  blue:    { c300: '#93c5fd', c500: '#3b82f6', c600: '#2563eb', c950: '#172554' },
  violet:  { c300: '#c4b5fd', c500: '#8b5cf6', c600: '#7c3aed', c950: '#2e1065' },
  teal:    { c300: '#5eead4', c500: '#14b8a6', c600: '#0d9488', c950: '#042f2e' },
  amber:   { c300: '#fcd34d', c500: '#f59e0b', c600: '#d97706', c950: '#451a03' },
  emerald: { c300: '#6ee7b7', c500: '#10b981', c600: '#059669', c950: '#022c22' },
};
function accentOf(slug) { return PRODUCT_ACCENT[slug] || PRODUCT_ACCENT.blue; }

// SSR / no-JS 默认 Tab = 0 (spec §3.7); useEffect 在 client hydrate 后启动轮播。
function AIProductShowcase({ products, autoRotateMs = 8000, renderBody }) {
  // §3.7 row 1 — 0 条产品时显示 placeholder
  if (!Array.isArray(products) || products.length === 0) {
    return <ShowcaseEmptyState />;
  }

  const [activeIdx, setActiveIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [hydrated, setHydrated] = React.useState(false);

  // hydrate flag — useEffect 只在 client 后跑, mark hydrated 后才允许 auto-rotate
  React.useEffect(() => { setHydrated(true); }, []);

  // 自动轮播
  React.useEffect(() => {
    if (!hydrated || paused || products.length < 2) return;
    const t = setInterval(() => {
      setActiveIdx((i) => (i + 1) % products.length);
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
        background: '#05080f', /* mapping §2 row 1: --product-canvas-dark fallback */
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
          onSelect={(i) => { setActiveIdx(i); setPaused(true); }}
        />

        {/* Browser Mockup (glass-card) */}
        <BrowserMockup active={active} accent={accent}>
          {/* Content body slot — Task 6b 填充。 当前 Task 6a 留空白占位 */}
          <div
            className="aips-content-body"
            data-active-slug={active.slug}
            style={{
              flex: 1, padding: 24,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'rgba(255,255,255,0.35)',
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
            }}
          >
            {typeof renderBody === 'function'
              ? renderBody(active)
              : <span>· content body — Task 6b ·</span>}
          </div>
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
        @keyframes aipsOrbPulse { 0%,100% {opacity: 0.30} 50% {opacity: 0.55} }
        @keyframes aipsCursorPulse { 0%,100% {opacity: 1} 50% {opacity: 0.4} }
        .ai-product-showcase .aips-orb { animation: aipsOrbPulse 4s ease-in-out infinite; }
        .ai-product-showcase .aips-input-cursor { animation: aipsCursorPulse 1.2s ease-in-out infinite; }
        @media (max-width: 767px) {
          .ai-product-showcase .aips-sidebar { display: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ai-product-showcase .aips-orb,
          .ai-product-showcase .aips-input-cursor { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

/* ── Background orbs ─────────────────────────────────────── */
function BackgroundOrbs({ accent }) {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to bottom, ${accent.c950}66 0%, #05080f 60%, #05080f 100%)`,
        transition: 'background 800ms ease-in-out',
      }} />
      <div className="aips-orb" style={{
        position: 'absolute', top: '-20%', right: '-10%',
        width: 800, height: 800, borderRadius: '50%',
        background: `${accent.c600}4d`, // ~30% alpha
        filter: 'blur(100px)',
        transition: 'background 800ms ease-in-out',
      }} />
      <div className="aips-orb" style={{
        position: 'absolute', bottom: '-10%', left: '-10%',
        width: 600, height: 600, borderRadius: '50%',
        background: `${accent.c500}33`, // ~20% alpha
        filter: 'blur(100px)',
        transition: 'background 800ms ease-in-out',
        animationDelay: '2s',
      }} />
    </div>
  );
}

/* ── Tab Switcher ────────────────────────────────────────── */
function TabSwitcher({ products, activeIdx, onSelect }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'clamp(24px, 3vw, 40px)' }}>
      <div role="tablist" aria-label="AI products" style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        padding: 6,
        borderRadius: 16,
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
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
                background: isActive
                  ? `linear-gradient(to right, ${accent.c600}, ${accent.c500})`
                  : 'transparent',
                boxShadow: isActive
                  ? '0 10px 15px -3px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.20)'
                  : 'none',
                transition: 'background 250ms ease, color 250ms ease, box-shadow 250ms ease',
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}
            >
              <span aria-hidden="true" style={{ display: 'inline-flex', width: 16, height: 16 }}>
                <i data-lucide={p.sidebarIcon || 'activity'} width="16" height="16" />
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
        height: 'clamp(480px, 60vh, 600px)',
        position: 'relative',
        display: 'flex', flexDirection: 'row',
        background: 'rgba(15,17,23,0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderRadius: 16,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.10)',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.10)',
      }}
    >
      {/* Top accent gradient strip */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(to right, ${accent.c500}, ${accent.c300}, ${accent.c600})`,
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
      background: 'rgba(11,12,16,0.8)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderRight: '1px solid rgba(255,255,255,0.05)',
      display: 'flex', flexDirection: 'column',
      padding: 16,
    }}>
      {/* Logo + name */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        marginBottom: 32, padding: '8px 8px 0',
      }}>
        <div style={{
          width: 28, height: 28, borderRadius: 8,
          background: `${accent.c600}33`, color: accent.c300,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)',
          transition: 'background 400ms ease, color 400ms ease',
        }}>
          <i data-lucide={active.sidebarIcon || 'activity'} width="16" height="16" />
        </div>
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
      background: 'rgba(15,17,23,0.6)',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(4px)',
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
          background: '#0B0C10',
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
        background: '#05080f',
        color: '#fff',
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
      <a href="/contact?intent=ai_dd"
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
