/* =========================================================
   StickyAnchorNav.jsx — /ai-platform v3.0 · sticky in-page nav
   ---------------------------------------------------------
   Spec §1.2 / §1.3 / §3.8 — 三幕剧 sticky anchor navigation,
   桌面 / 平板 / 移动三档断点 + IntersectionObserver scroll-spy。

   Plan task 9。

   Usage:
     <StickyAnchorNav
        sections={[
          { hash: '#foundation', label: 'Foundation' },
          { hash: '#products',   label: 'Products' },
          { hash: '#method',     label: 'Method' },
          { hash: '#cta',        label: 'Talk' },
        ]}
     />

   断点 (§3.8):
     ≥ 1024px       水平 4 项 sticky bar
     640–1023px     折叠为 sticky <select> 下拉 (系统原生)
     ≤ 639px        sticky 隐藏, 改为 Hero 内 inline pills 渲染 (本组件 export
                    出 InlineHeroAnchors 子组件供 hero 使用)

   A11y:
     - role='navigation' + aria-label='In-page sections'
     - <select> 折叠版 <label> 关联 + aria-controls
     - scroll-spy 用 IntersectionObserver, 当前 section 对应链接加
       aria-current='location'
   ========================================================= */

function StickyAnchorNav({
  sections = [
    { hash: '#foundation', label: 'Foundation' },
    { hash: '#products',   label: 'Products' },
    { hash: '#method',     label: 'Method' },
    { hash: '#cta',        label: 'Talk' },
  ],
  topOffset = 0,
}) {
  const [activeHash, setActiveHash] = React.useState(sections[0]?.hash || '');

  // scroll-spy via IntersectionObserver
  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) return;
    const targets = sections
      .map((s) => document.querySelector(s.hash))
      .filter(Boolean);
    if (targets.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // 当某 section 在视口中 ≥ 30% 时认为 active
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveHash('#' + visible[0].target.id);
        }
      },
      {
        rootMargin: `-${Math.max(0, topOffset)}px 0px -50% 0px`,
        threshold: [0, 0.3, 0.6, 1.0],
      },
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, [sections, topOffset]);

  const onSelectChange = (e) => {
    const hash = e.target.value;
    if (hash) {
      setActiveHash(hash);
      window.location.hash = hash;
    }
  };

  return (
    <>
      {/* Desktop ≥1024px — 4 horizontal links */}
      <nav
        role="navigation"
        aria-label="In-page sections"
        className="aips-sticky-nav-desktop"
        style={{
          position: 'sticky',
          top: topOffset,
          zIndex: 50,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-1)',
        }}
      >
        <div style={{
          maxWidth: 'var(--container-max, 1280px)',
          margin: '0 auto',
          padding: '12px clamp(24px, 6vw, 96px)',
          display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
          gap: 'clamp(16px, 2.4vw, 32px)',
        }}>
          {sections.map((s, i) => {
            const isActive = s.hash === activeHash;
            return (
              <a
                key={i}
                href={s.hash}
                aria-current={isActive ? 'location' : undefined}
                style={{
                  position: 'relative',
                  fontFamily: 'var(--font-ui)',
                  fontSize: 13, fontWeight: 600,
                  color: isActive ? 'var(--brand-primary-700)' : 'var(--fg-3)',
                  textDecoration: 'none',
                  padding: '6px 0',
                  letterSpacing: '0.02em',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = 'var(--brand-primary-500)'; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = 'var(--fg-3)'; }}
              >
                {s.label}
                {isActive && (
                  <span aria-hidden="true" style={{
                    position: 'absolute', left: 0, right: 0, bottom: -13,
                    height: 2, background: 'var(--brand-accent-500)',
                  }} />
                )}
              </a>
            );
          })}
        </div>
      </nav>

      {/* Tablet 640–1023px — sticky <select> dropdown */}
      <div
        className="aips-sticky-nav-tablet"
        style={{
          position: 'sticky',
          top: topOffset,
          zIndex: 50,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-1)',
          padding: '12px clamp(24px, 6vw, 96px)',
          display: 'none',
        }}
      >
        <label htmlFor="aips-sticky-select" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600,
          color: 'var(--fg-2)',
        }}>
          <span style={{ letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: 11 }}>Jump to</span>
          <select
            id="aips-sticky-select"
            aria-controls="ai-platform-content"
            value={activeHash}
            onChange={onSelectChange}
            style={{
              padding: '8px 12px', borderRadius: 8,
              border: '1px solid var(--border-2)',
              background: 'var(--bg-1)',
              fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600,
              color: 'var(--brand-primary-700)',
              cursor: 'pointer',
            }}>
            {sections.map((s, i) => (
              <option key={i} value={s.hash}>{s.label}</option>
            ))}
          </select>
        </label>
      </div>

      <style>{`
        /* Tablet 640–1023px */
        @media (min-width: 640px) and (max-width: 1023px) {
          .aips-sticky-nav-desktop { display: none !important; }
          .aips-sticky-nav-tablet  { display: flex !important; }
        }
        /* Mobile ≤639px — 全隐藏, Hero 内嵌 pills 单独渲染 */
        @media (max-width: 639px) {
          .aips-sticky-nav-desktop,
          .aips-sticky-nav-tablet { display: none !important; }
        }
      `}</style>
    </>
  );
}

/* ── Hero 内嵌 anchor pills (≤639px 移动端用,放 hero 首屏) ── */
function HeroInlineAnchors({
  sections = [
    { hash: '#foundation', label: 'Foundation' },
    { hash: '#products',   label: 'Products' },
    { hash: '#method',     label: 'Method' },
    { hash: '#cta',        label: 'Talk' },
  ],
}) {
  return (
    <nav
      role="navigation"
      aria-label="In-page sections (mobile inline)"
      className="aips-hero-inline-anchors"
      style={{
        display: 'none', /* 默认隐藏, 仅移动 ≤639px 显示 */
        gap: 8, overflowX: 'auto',
        padding: '8px 0',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none', /* Firefox */
      }}
    >
      {sections.map((s, i) => (
        <a key={i} href={s.hash} style={{
          flex: '0 0 auto',
          padding: '8px 14px', borderRadius: 999,
          background: 'rgba(255,255,255,0.10)',
          border: '1px solid rgba(255,255,255,0.20)',
          color: 'var(--white)',
          fontSize: 12, fontWeight: 600,
          textDecoration: 'none',
          fontFamily: 'var(--font-ui)',
          whiteSpace: 'nowrap',
        }}>
          {s.label}
        </a>
      ))}

      <style>{`
        .aips-hero-inline-anchors::-webkit-scrollbar { display: none; }
        @media (max-width: 639px) {
          .aips-hero-inline-anchors { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

if (typeof window !== 'undefined') {
  window.StickyAnchorNav = StickyAnchorNav;
  window.HeroInlineAnchors = HeroInlineAnchors;
}
