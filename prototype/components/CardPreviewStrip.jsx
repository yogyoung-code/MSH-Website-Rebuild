/* =========================================================
   CardPreviewStrip.jsx — Homepage card · top "data preview"
   ---------------------------------------------------------
   Inline-SVG mini visualizations that sit at the top of
   CaseCard / InsightCard. NOT decoration — each strip is a
   de-identified data hook tied to the case / article it
   precedes. Strict brand discipline:
     · pure SVG, no images, no canvas
     · navy + cyan only (no per-strip color carve-out)
     · 130px tall, full-card width, square top corners
       (parent card has overflow:hidden + border-radius)
     · monospace micro-label top-right, italic muted
     · no animation, no shadows, no gradients

   Usage:
     <CardPreviewStrip kind="case-timeline-11wk" />
   Supported kinds (image-add pass 2):
     case-timeline-11wk    case-passrate-38    case-deltabars-42-18
     insight-bars-nmpa     insight-funnel-bridge   insight-bilingual-pair
   Unknown kinds render an empty placeholder strip (no crash).
   ========================================================= */

(function () {
  /* Shared strip frame ------------------------------------------------ */
  function Strip({ children, label }) {
    return (
      <div style={{
        position: 'relative',
        height: 130,
        background: 'var(--bg-2, #fafbfc)',
        borderBottom: '1px solid var(--border-1)',
        marginLeft: -28, marginRight: -28, marginTop: -28,  // escape card padding
        marginBottom: 24,
        padding: '14px 20px 14px',
        overflow: 'hidden',
      }}>
        {label && (
          <div aria-hidden="true" style={{
            position: 'absolute', top: 8, right: 14,
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 9.5, letterSpacing: '0.10em',
            textTransform: 'uppercase',
            color: 'var(--fg-3)',
          }}>{label}</div>
        )}
        {children}
      </div>
    );
  }

  /* ============== Case 1 — 11-week phase timeline ================== */
  function CaseTimeline11wk() {
    const phases = [
      { label: 'Intake',       weeks: 1 },
      { label: 'Translation',  weeks: 3 },
      { label: 'PITL review',  weeks: 4 },
      { label: 'NMPA submit',  weeks: 3 },
    ];
    const total = phases.reduce((s, p) => s + p.weeks, 0);
    const W = 100, H = 22; // logical % units
    let cursor = 0;
    return (
      <Strip label="Phase timeline · 11 wks">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
          <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none"
               width="100%" height="32" aria-hidden="true">
            {phases.map((p, i) => {
              const w = (p.weeks / total) * W;
              const x = cursor;
              cursor += w;
              const isReview = p.label === 'PITL review';
              return (
                <g key={i}>
                  <rect x={x + 0.4} y={4} width={Math.max(0, w - 0.8)} height={H - 8}
                    fill={isReview ? 'var(--brand-primary-700)' : 'var(--brand-accent-500)'}
                    opacity={isReview ? 0.9 : 0.65} />
                </g>
              );
            })}
            <circle cx={W - 1.5} cy={H / 2} r="1.6" fill="var(--brand-primary-700)" />
          </svg>
          <div style={{
            display: 'grid', gridTemplateColumns: phases.map(p => `${p.weeks}fr`).join(' '),
            gap: 4, fontFamily: 'var(--font-ui)', fontSize: 10.5,
            color: 'var(--fg-2)',
          }}>
            {phases.map((p, i) => (
              <div key={i} style={{ lineHeight: 1.25 }}>
                <div style={{ fontWeight: 600, color: 'var(--brand-primary-700)' }}>{p.label}</div>
                <div style={{ color: 'var(--fg-3)', fontSize: 10 }}>{p.weeks} wk</div>
              </div>
            ))}
          </div>
          <div style={{
            position: 'absolute', right: 18, bottom: 12,
            fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 600,
            color: 'var(--brand-accent-700)',
          }}>0 RFIs · first submission</div>
        </div>
      </Strip>
    );
  }

  /* ============== Case 2 — 38 artifacts · QC pass grid ============= */
  function CasePassrate38() {
    const total = 38;
    const cols = 13, rows = 3;
    const cells = [];
    // Mark dot 18 (arbitrary, deterministic) as "needed minor revision" — 1 of 38 ≈ 97.4%
    // Spec says 96% pass; we visualize the 38-artifact grid + a narrow QC bar.
    for (let i = 0; i < total; i++) cells.push({ i, miss: i === 17 });
    return (
      <Strip label="Artifact grid · 38 produced">
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 4, marginTop: 16, maxWidth: 240 }}>
          {cells.map((c) => (
            <div key={c.i} aria-hidden="true" style={{
              width: '100%', paddingBottom: '100%',
              borderRadius: '50%',
              background: c.miss ? 'transparent' : 'var(--brand-accent-500)',
              border: c.miss ? '1.2px solid var(--brand-primary-500)' : 'none',
              opacity: c.miss ? 1 : 0.55,
            }} />
          ))}
        </div>
        <div style={{
          position: 'absolute', right: 18, bottom: 12, textAlign: 'right',
          fontFamily: 'var(--font-ui)',
        }}>
          <div style={{
            fontSize: 22, fontWeight: 600, color: 'var(--brand-primary-700)',
            letterSpacing: '-0.02em', lineHeight: 1,
          }}>96<span style={{ fontSize: 13, color: 'var(--brand-accent-700)', fontWeight: 500 }}>%</span></div>
          <div style={{ fontSize: 10, color: 'var(--fg-3)', marginTop: 4 }}>QC first-pass</div>
        </div>
      </Strip>
    );
  }

  /* ============== Case 3 — 42 → 18 days delta bars ================= */
  function CaseDeltaBars() {
    const before = 42, after = 18, max = 50;
    const W = 220, BH = 18, GAP = 12;
    const bw = (v) => (v / max) * W;
    return (
      <Strip label="Median response · before / after">
        <svg viewBox={`0 0 ${W + 60} ${BH * 2 + GAP + 14}`} width="100%" height="98" aria-hidden="true">
          {/* labels */}
          <text x="0" y={BH - 5} style={{
            fontFamily: 'var(--font-ui), Inter, sans-serif',
            fontSize: 8.5, fontWeight: 700, letterSpacing: '0.08em',
            fill: 'var(--fg-3)',
          }}>BEFORE</text>
          <text x="0" y={BH * 2 + GAP - 5} style={{
            fontFamily: 'var(--font-ui), Inter, sans-serif',
            fontSize: 8.5, fontWeight: 700, letterSpacing: '0.08em',
            fill: 'var(--fg-3)',
          }}>AFTER</text>
          {/* before bar (gray) */}
          <rect x="38" y="2" width={bw(before)} height={BH}
            fill="var(--fg-3)" opacity="0.35" />
          <text x={38 + bw(before) + 6} y={BH - 4} style={{
            fontFamily: 'var(--font-ui), Inter, sans-serif',
            fontSize: 12, fontWeight: 600, fill: 'var(--brand-primary-700)',
          }}>{before} d</text>
          {/* after bar (cyan) */}
          <rect x="38" y={BH + GAP} width={bw(after)} height={BH}
            fill="var(--brand-accent-500)" opacity="0.85" />
          <text x={38 + bw(after) + 6} y={BH * 2 + GAP - 4} style={{
            fontFamily: 'var(--font-ui), Inter, sans-serif',
            fontSize: 12, fontWeight: 600, fill: 'var(--brand-accent-700)',
          }}>{after} d</text>
          {/* delta callout */}
          <text x="0" y={BH * 2 + GAP + 12} style={{
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 10, fill: 'var(--brand-primary-700)', fontWeight: 600, letterSpacing: '0.04em',
          }}>−{before - after} d  ·  −{Math.round((1 - after / before) * 100)}%</text>
        </svg>
      </Strip>
    );
  }

  /* ============== Insight 1 — top 5 NMPA-flagged sections =========== */
  function InsightBarsNMPA() {
    const rows = [
      { label: 'Endpoint definition',         pct: 78 },
      { label: 'Statistical analysis plan',   pct: 65 },
      { label: 'Safety profile sign-off',     pct: 52 },
      { label: 'Sample-size justification',   pct: 40 },
      { label: 'Inclusion criteria',          pct: 25 },
    ];
    return (
      <Strip label="Teardown · 40 dossiers">
        <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {rows.map((r, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1fr 28px',
              alignItems: 'center', gap: 6,
              fontFamily: 'var(--font-ui)', fontSize: 9.5,
              lineHeight: 1.2,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ minWidth: 110, color: 'var(--fg-2)' }}>{r.label}</span>
                <div style={{
                  flex: 1, height: 6,
                  background: 'var(--border-1)',
                  borderRadius: 2, overflow: 'hidden',
                }}>
                  <div style={{
                    width: `${r.pct}%`, height: '100%',
                    background: 'var(--brand-accent-500)', opacity: 0.7,
                  }} />
                </div>
              </div>
              <span style={{
                fontFamily: 'var(--font-mono, var(--font-ui))',
                fontSize: 10, fontWeight: 600, color: 'var(--brand-primary-700)',
                textAlign: 'right',
              }}>{r.pct}%</span>
            </div>
          ))}
        </div>
      </Strip>
    );
  }

  /* ============== Insight 2 — China → FDA bridge funnel ============= */
  function InsightFunnelBridge() {
    const steps = [
      { label: 'China registry · all cases',     pct: 100 },
      { label: 'Endpoint maps to FDA',            pct:  73 },
      { label: 'Acceptable as supportive',        pct:  58 },
    ];
    return (
      <Strip label="Bridge funnel · 14 cases reviewed">
        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              fontFamily: 'var(--font-ui)', fontSize: 10.5,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{
                width: `${s.pct}%`, maxWidth: '70%',
                height: 14,
                background: i === 0 ? 'var(--brand-primary-700)'
                          : i === 1 ? 'var(--brand-accent-700)'
                                    : 'var(--brand-accent-500)',
                opacity: i === 0 ? 0.85 : 0.7,
              }} />
              <span style={{ color: 'var(--fg-2)', flex: 1 }}>{s.label}</span>
              <span style={{
                fontFamily: 'var(--font-mono, var(--font-ui))',
                fontSize: 11, fontWeight: 700, color: 'var(--brand-primary-700)',
              }}>{s.pct}%</span>
            </div>
          ))}
        </div>
      </Strip>
    );
  }

  /* ============== Insight 3 — bilingual parity =================== */
  function InsightBilingualPair() {
    return (
      <Strip label="Bilingual parity · 1 : 1">
        <div style={{
          marginTop: 18,
          display: 'flex', flexDirection: 'column', gap: 10,
          fontFamily: 'var(--font-ui)',
        }}>
          {/* Chinese line */}
          <div style={{
            display: 'flex', alignItems: 'baseline', gap: 8,
          }}>
            <span style={{
              fontFamily: 'var(--font-mono, var(--font-ui))',
              fontSize: 9.5, color: 'var(--fg-3)', letterSpacing: '0.06em',
              minWidth: 30,
            }}>CN</span>
            <span style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: 14, color: 'var(--brand-primary-700)',
              letterSpacing: '0.02em', flex: 1,
            }}>评审委员会已批准 · PITL 复核签字</span>
          </div>
          {/* dotted divider with arrow */}
          <div style={{ position: 'relative', height: 12 }}>
            <div style={{
              position: 'absolute', left: 38, right: 78, top: 5,
              height: 1, borderTop: '1px dashed var(--border-2, var(--border-1))',
            }} />
            <div style={{
              position: 'absolute', right: 0, top: -4,
              fontFamily: 'var(--font-mono, var(--font-ui))',
              fontSize: 10, color: 'var(--brand-accent-700)',
              fontWeight: 600, letterSpacing: '0.04em',
            }}>↔ both compliant</div>
          </div>
          {/* English line */}
          <div style={{
            display: 'flex', alignItems: 'baseline', gap: 8,
          }}>
            <span style={{
              fontFamily: 'var(--font-mono, var(--font-ui))',
              fontSize: 9.5, color: 'var(--fg-3)', letterSpacing: '0.06em',
              minWidth: 30,
            }}>EN</span>
            <span style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: 13, color: 'var(--brand-primary-700)',
              letterSpacing: '0.005em', flex: 1, fontStyle: 'italic',
            }}>Approved by review board · PITL signed</span>
          </div>
        </div>
      </Strip>
    );
  }

  /* ----- Dispatcher ---------------------------------------------- */
  function CardPreviewStrip({ kind }) {
    switch (kind) {
      case 'case-timeline-11wk':     return <CaseTimeline11wk />;
      case 'case-passrate-38':       return <CasePassrate38 />;
      case 'case-deltabars-42-18':   return <CaseDeltaBars />;
      case 'insight-bars-nmpa':      return <InsightBarsNMPA />;
      case 'insight-funnel-bridge':  return <InsightFunnelBridge />;
      case 'insight-bilingual-pair': return <InsightBilingualPair />;
      default:
        // Unknown kind — render an empty strip so the card layout stays stable.
        return <Strip label={kind || 'preview'}><React.Fragment /></Strip>;
    }
  }

  if (typeof window !== 'undefined') {
    window.CardPreviewStrip = CardPreviewStrip;
  }
})();
