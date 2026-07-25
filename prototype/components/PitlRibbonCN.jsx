/* =========================================================
   PitlRibbonCN.jsx — 医生在环双轨流程带（中文）
   ---------------------------------------------------------
   对应 PitlRibbon.jsx：两条轨道（上轨 AI / 下轨 医生），
   中间以交接圆点相连。结构、动效、断点与英文版完全一致，
   仅轨道标签、步骤标签与尾链接改中文。
   ========================================================= */

function PitlRibbonCN({ steps, eyebrow, title, variant = 'full', moreHref, moreLabel }) {
  if (!Array.isArray(steps) || steps.length < 2) {
    console.warn('PitlRibbonCN: 至少需要 2 个步骤，实际为', steps);
    return null;
  }

  if (variant === 'compact' && steps.length !== 4) {
    console.warn('PitlRibbonCN: variant="compact" 需恰好 4 步，回落为 full。');
    variant = 'full';
  }

  const isCompact = variant === 'compact';
  const SPOTLIGHT_IDX = 2;

  const reduced = typeof window !== 'undefined'
    && window.matchMedia
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const ribbonRef = React.useRef(null);
  const [inView, setInView] = React.useState(reduced);
  React.useEffect(() => {
    if (reduced) return;
    if (typeof IntersectionObserver === 'undefined') { setInView(true); return; }
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });
    if (ribbonRef.current) obs.observe(ribbonRef.current);
    return () => obs.disconnect();
  }, [reduced]);

  return (
    <section ref={ribbonRef} data-variant={variant} style={{
      padding: isCompact
        ? 'clamp(32px, 4vw, 56px) clamp(24px, 6vw, 96px)'
        : 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      background: 'var(--bg-1)',
      borderTop: '1px solid var(--border-1)',
      borderBottom: '1px solid var(--border-1)'
    }}>
      <div style={{ maxWidth: 'var(--container-max, 1280px)', margin: '0 auto' }}>
        {(eyebrow || title) && (
          <div style={{ marginBottom: 'clamp(32px, 4vw, 48px)', maxWidth: 720 }}>
            {eyebrow && (
              <div style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 12, letterSpacing: '0.12em',
                color: 'var(--brand-accent-700)',
                marginBottom: 12, fontWeight: 600
              }}>{eyebrow}</div>
            )}
            {title && (
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 3.4vw, 40px)',
                fontWeight: 600,
                color: 'var(--brand-primary-700)',
                lineHeight: 1.3,
                margin: 0
              }}>{title}</h2>
            )}
          </div>
        )}

        {/* 步骤序号（桌面端） */}
        <div className="pitl-lanes" aria-hidden="true" style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr',
          gap: 24,
          marginBottom: 16,
          fontFamily: 'var(--font-ui)',
          fontSize: 11,
          letterSpacing: '0.1em',
          color: 'var(--fg-3)'
        }}>
          <div></div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
            gap: 'clamp(8px, 1.2vw, 16px)'
          }}>
            {steps.map((s, i) => (
              <div key={i} style={{ fontWeight: 600, color: 'var(--brand-primary-500)' }}>
                步骤 {s.num != null ? s.num : i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* AI 轨 */}
        <div className="pitl-lane pitl-lane--ai" style={laneRowStyleCN('ai', isCompact)}>
          <div style={laneLabelStyleCN('ai')} aria-label="AI 轨">
            <span style={{
              display: 'inline-block', width: 8, height: 8,
              borderRadius: '50%', background: 'var(--brand-accent-500)',
              marginRight: 8, verticalAlign: 'middle'
            }} />
            AI
          </div>
          <div style={laneCellsStyleCN(steps.length)}>
            {steps.map((s, i) => {
              const collapsed = isCompact && i !== SPOTLIGHT_IDX;
              const spotlight = isCompact && i === SPOTLIGHT_IDX;
              return (
                <div key={i}
                  className={'pitl-cell pitl-cell--ai' + (spotlight ? ' is-spotlight' : '') + (collapsed ? ' is-collapsed' : '')}
                  aria-hidden={collapsed ? 'true' : undefined}
                  style={laneCellStyleCN('ai', reduced, i, inView, isCompact, SPOTLIGHT_IDX)}>
                  {!collapsed && (
                    <div style={{ fontSize: 14, color: 'var(--fg-1)', lineHeight: 1.6 }}>
                      {s.ai || <em style={{ color: 'var(--fg-3)' }}>—</em>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 交接圆点 */}
        <div aria-hidden="true" style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr',
          gap: 24,
          margin: '12px 0'
        }}>
          <div></div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
            gap: 'clamp(8px, 1.2vw, 16px)'
          }}>
            {steps.map((_, i) => {
              const collapsed = isCompact && i !== SPOTLIGHT_IDX;
              return (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', height: collapsed ? 12 : 24,
                  opacity: collapsed ? 0.35 : 1,
                  transition: 'opacity 200ms ease, height 200ms ease'
                }}>
                  <span style={{
                    position: 'absolute', left: 0, right: 0, top: '50%',
                    height: 1, background: 'var(--neutral-300)'
                  }} />
                  <span style={{
                    position: 'relative',
                    width: collapsed ? 6 : 10,
                    height: collapsed ? 6 : 10,
                    borderRadius: '50%',
                    background: 'var(--brand-primary-500)',
                    boxShadow: '0 0 0 4px var(--bg-1)'
                  }} />
                </div>
              );
            })}
          </div>
        </div>

        {/* 医生轨 */}
        <div className="pitl-lane pitl-lane--md" style={laneRowStyleCN('md', isCompact)}>
          <div style={laneLabelStyleCN('md')} aria-label="医生轨">
            <span style={{
              display: 'inline-block', width: 8, height: 8,
              borderRadius: '50%', background: 'var(--brand-primary-700)',
              marginRight: 8, verticalAlign: 'middle'
            }} />
            医生
          </div>
          <div style={laneCellsStyleCN(steps.length)}>
            {steps.map((s, i) => {
              const collapsed = isCompact && i !== SPOTLIGHT_IDX;
              const spotlight = isCompact && i === SPOTLIGHT_IDX;
              return (
                <div key={i}
                  className={'pitl-cell pitl-cell--md' + (spotlight ? ' is-spotlight' : '') + (collapsed ? ' is-collapsed' : '')}
                  aria-hidden={collapsed ? 'true' : undefined}
                  style={laneCellStyleCN('md', reduced, i, inView, isCompact, SPOTLIGHT_IDX)}>
                  {!collapsed && (
                    <div style={{ fontSize: 14, color: 'var(--fg-1)', lineHeight: 1.6 }}>
                      {s.physician || <em style={{ color: 'var(--fg-3)' }}>—</em>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 步骤标题 + 产出 */}
        <div style={{
          display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24,
          marginTop: 20
        }}>
          <div></div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
            gap: 'clamp(8px, 1.2vw, 16px)'
          }}>
            {steps.map((s, i) => {
              const spotlight = isCompact && i === SPOTLIGHT_IDX;
              const dimmed = isCompact && i !== SPOTLIGHT_IDX;
              return (
                <div key={i} style={{
                  opacity: dimmed ? 0.55 : 1,
                  transition: 'opacity 200ms ease'
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: spotlight ? 17 : 16,
                    fontWeight: spotlight ? 700 : 600,
                    color: spotlight ? 'var(--brand-accent-700)' : 'var(--brand-primary-700)',
                    margin: '0 0 6px', lineHeight: 1.4
                  }}>{s.title}</h3>
                  {s.output && (
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12,
                      color: 'var(--fg-3)',
                      letterSpacing: '0.02em'
                    }}>→ {s.output}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {isCompact && (
          <div style={{
            marginTop: 16,
            fontFamily: 'var(--font-ui)',
            fontSize: 12,
            color: 'var(--fg-3)',
            letterSpacing: '0.02em',
            textAlign: 'right'
          }}>
            <a href={moreHref || '#method'}
               style={{ color: 'var(--brand-accent-700)', textDecoration: 'none', fontWeight: 600 }}>
              {moreLabel || '查看完整的医生在环流程 →'}
            </a>
          </div>
        )}

        <style>{`
          @media (max-width: 768px) {
            .pitl-lanes { display: none !important; }
            .pitl-lane { grid-template-columns: 1fr !important; }
            .pitl-lane > div:first-child { margin-bottom: 8px; }
            .pitl-lane .pitl-cells { grid-template-columns: 1fr !important; gap: 8px !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

function laneRowStyleCN(track, isCompact) {
  return {
    display: 'grid',
    gridTemplateColumns: '120px 1fr',
    gap: 24,
    alignItems: 'stretch',
    background: track === 'ai' ? 'var(--brand-accent-100)' : 'var(--brand-primary-100)',
    border: '1px solid var(--border-1)',
    borderRadius: 'var(--radius-lg, 12px)',
    padding: isCompact ? '10px 16px' : 16
  };
}

function laneLabelStyleCN(track) {
  return {
    fontFamily: 'var(--font-ui)',
    fontSize: 12,
    letterSpacing: '0.12em',
    fontWeight: 700,
    color: track === 'ai' ? 'var(--brand-accent-700)' : 'var(--brand-primary-700)',
    alignSelf: 'center'
  };
}

function laneCellsStyleCN(n) {
  return {
    display: 'grid',
    gridTemplateColumns: `repeat(${n}, 1fr)`,
    gap: 'clamp(8px, 1.2vw, 16px)'
  };
}

function laneCellStyleCN(track, reduced, i, inView, isCompact, spotlightIdx) {
  const laneDelay = track === 'ai' ? 0 : 200;
  const cellDelay = laneDelay + i * 60;
  const visible = reduced || inView;
  const collapsed = isCompact && i !== spotlightIdx;
  const spotlight = isCompact && i === spotlightIdx;

  if (collapsed) {
    return {
      background: 'transparent',
      border: '1px dashed var(--border-1)',
      borderRadius: 'var(--radius-md, 6px)',
      padding: 0,
      minHeight: 8,
      opacity: visible ? 0.4 : 0,
      transition: reduced ? 'none' : 'opacity 300ms ease, min-height 300ms ease'
    };
  }

  return {
    background: 'var(--bg-1)',
    border: spotlight
      ? '1px solid var(--brand-accent-500)'
      : '1px solid var(--border-1)',
    borderRadius: 'var(--radius-md, 6px)',
    padding: '12px 14px',
    minHeight: 72,
    boxShadow: spotlight ? '0 0 0 3px var(--brand-accent-100)' : 'none',
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(8px)',
    transition: reduced
      ? 'none'
      : `opacity 400ms cubic-bezier(0.22, 1, 0.36, 1) ${cellDelay}ms, transform 400ms cubic-bezier(0.22, 1, 0.36, 1) ${cellDelay}ms, box-shadow 300ms ease, border-color 300ms ease`,
    willChange: visible ? 'auto' : 'opacity, transform'
  };
}

if (typeof window !== 'undefined') window.PitlRibbonCN = PitlRibbonCN;
