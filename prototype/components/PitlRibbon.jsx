/* =========================================================
   PitlRibbon.jsx — SIGNATURE COMPONENT
   ---------------------------------------------------------
   The single visual element only MedSci Healthcare can show:
   a horizontal workflow ribbon with TWO LANES per step —
   AI (top, accent cyan) and Physician (bottom, primary navy) —
   connected by a "handoff" dot motif echoing the logo spiral.

   Replaces the generic StepDiagram on AI Platform and Pilot pages.

   Usage:
   <PitlRibbon steps={[
     { num: 1, title: "Ingestion",      ai: "...", physician: "...", output: "..." },
     { num: 2, title: "Gap Analysis",   ai: "...", physician: "...", output: "..." },
     { num: 3, title: "PITL Review",    ai: "...", physician: "...", output: "..." },
     { num: 4, title: "Deliverable",    ai: "...", physician: "...", output: "..." },
   ]} />

   Brand compliance:
   - Colors: Primary + Accent + Neutral only (NO green; success token is functional only)
   - Static cards: 1px neutral-200 border, no shadow
   - Motion: 400ms content stagger; honors prefers-reduced-motion
   - A11y: lanes labeled with aria-label; keyboard focus rings on tabbable cells
   ========================================================= */

function PitlRibbon({ steps, eyebrow, title }) {
  if (!Array.isArray(steps) || steps.length < 2) {
    console.warn('PitlRibbon: expected at least 2 steps, got', steps);
    return null;
  }

  const reduced = typeof window !== 'undefined'
    && window.matchMedia
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // UXcritique20260429 /delight (3a): on-scroll-into-view stagger.
  // AI lane cells fade in first (0–180ms), Physician lane cells follow
  // (200–380ms). Single one-shot reveal — no looping. IntersectionObserver
  // disconnects after first trigger. Honors prefers-reduced-motion.
  const ribbonRef = React.useRef(null);
  const [inView, setInView] = React.useState(reduced);
  React.useEffect(() => {
    if (reduced) return;
    if (typeof IntersectionObserver === 'undefined') {
      // Older browsers — show immediately, skip animation.
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });
    if (ribbonRef.current) obs.observe(ribbonRef.current);
    return () => obs.disconnect();
  }, [reduced]);

  return (
    <section ref={ribbonRef} style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
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
                textTransform: 'uppercase',
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
                lineHeight: 1.2,
                margin: 0
              }}>{title}</h2>
            )}
          </div>
        )}

        {/* Lane labels (desktop only) */}
        <div className="pitl-lanes" aria-hidden="true" style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr',
          gap: 24,
          marginBottom: 16,
          fontFamily: 'var(--font-ui)',
          fontSize: 11,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
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
                STEP {s.num ?? i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* AI lane */}
        <div className="pitl-lane pitl-lane--ai" style={laneRowStyle('ai')}>
          <div style={laneLabelStyle('ai')} aria-label="AI lane">
            <span style={{
              display: 'inline-block', width: 8, height: 8,
              borderRadius: '50%', background: 'var(--brand-accent-500)',
              marginRight: 8, verticalAlign: 'middle'
            }} />
            AI
          </div>
          <div style={laneCellsStyle(steps.length)}>
            {steps.map((s, i) => (
              <div key={i} style={laneCellStyle('ai', reduced, i, inView)}>
                <div style={{ fontSize: 14, color: 'var(--fg-1)', lineHeight: 1.5 }}>
                  {s.ai || <em style={{ color: 'var(--fg-3)' }}>—</em>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Handoff dot motif (echoes logo spiral) */}
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
            {steps.map((_, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', height: 24
              }}>
                {/* connector line through */}
                <span style={{
                  position: 'absolute', left: 0, right: 0, top: '50%',
                  height: 1, background: 'var(--neutral-300)'
                }} />
                {/* handoff dot */}
                <span style={{
                  position: 'relative', width: 10, height: 10, borderRadius: '50%',
                  background: 'var(--brand-primary-500)',
                  boxShadow: '0 0 0 4px var(--bg-1)'
                }} />
              </div>
            ))}
          </div>
        </div>

        {/* Physician lane */}
        <div className="pitl-lane pitl-lane--md" style={laneRowStyle('md')}>
          <div style={laneLabelStyle('md')} aria-label="Physician lane">
            <span style={{
              display: 'inline-block', width: 8, height: 8,
              borderRadius: '50%', background: 'var(--brand-primary-700)',
              marginRight: 8, verticalAlign: 'middle'
            }} />
            Physician
          </div>
          <div style={laneCellsStyle(steps.length)}>
            {steps.map((s, i) => (
              <div key={i} style={laneCellStyle('md', reduced, i, inView)}>
                <div style={{ fontSize: 14, color: 'var(--fg-1)', lineHeight: 1.5 }}>
                  {s.physician || <em style={{ color: 'var(--fg-3)' }}>—</em>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step titles + outputs row */}
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
            {steps.map((s, i) => (
              <div key={i}>
                <h3 style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 16, fontWeight: 600,
                  color: 'var(--brand-primary-700)',
                  margin: '0 0 6px', lineHeight: 1.3
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
            ))}
          </div>
        </div>

        {/* Mobile note: lanes collapse via CSS in responsive.css */}
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

function laneRowStyle(track) {
  return {
    display: 'grid',
    gridTemplateColumns: '120px 1fr',
    gap: 24,
    alignItems: 'stretch',
    background: track === 'ai' ? 'var(--brand-accent-100)' : 'var(--brand-primary-100)',
    border: '1px solid var(--border-1)',
    borderRadius: 'var(--radius-lg, 12px)',
    padding: 16
  };
}

function laneLabelStyle(track) {
  return {
    fontFamily: 'var(--font-ui)',
    fontSize: 12,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    fontWeight: 700,
    color: track === 'ai' ? 'var(--brand-accent-700)' : 'var(--brand-primary-700)',
    alignSelf: 'center'
  };
}

function laneCellsStyle(n) {
  return {
    display: 'grid',
    gridTemplateColumns: `repeat(${n}, 1fr)`,
    gap: 'clamp(8px, 1.2vw, 16px)'
  };
}

function laneCellStyle(track, reduced, i, inView) {
  // /delight (3a): AI cells lead 0–180ms; Physician cells follow 200–380ms.
  // Each lane staggers 60ms across cells. Whole reveal completes ~600ms after trigger.
  const laneDelay = track === 'ai' ? 0 : 200;
  const cellDelay = laneDelay + i * 60;
  const visible = reduced || inView;
  return {
    background: 'var(--bg-1)',
    border: '1px solid var(--border-1)',
    borderRadius: 'var(--radius-md, 6px)',
    padding: '12px 14px',
    minHeight: 72,
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(8px)',
    transition: reduced
      ? 'none'
      : `opacity 400ms cubic-bezier(0.22, 1, 0.36, 1) ${cellDelay}ms, transform 400ms cubic-bezier(0.22, 1, 0.36, 1) ${cellDelay}ms`,
    willChange: visible ? 'auto' : 'opacity, transform'
  };
}

if (typeof window !== 'undefined') window.PitlRibbon = PitlRibbon;
