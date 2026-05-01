/* =========================================================
   CaseStudyHeroChart.jsx — Detail-page hero chart (B2)
   ---------------------------------------------------------
   Larger SVG visualizations for case study detail heroes.
   These are the detail-page counterparts to the
   CardPreviewStrip mini-charts on the homepage cards.

   Brand discipline: navy + cyan only, no animation,
   monospace annotations, source/year cited.

   Usage:
     <CaseStudyHeroChart kind="evidence-hcp-timeline" />

   Supported kinds:
     evidence-hcp-timeline     — 12-month parallel workstream gantt
     localized-content-qc      — revision cycle reduction + pass rate
     fda-bridge-acceleration   — planned vs actual timeline
   ========================================================= */

(function () {

  /* Shared chart frame ------------------------------------------------ */
  function ChartFrame({ children, label, source, height }) {
    return (
      <div style={{
        background: 'var(--bg-2, #fafbfc)',
        border: '1px solid var(--border-1)',
        padding: '20px 24px 16px',
        position: 'relative',
        marginTop: 24,
      }}>
        {label && (
          <div style={{
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 10,
            letterSpacing: '0.10em',
            textTransform: 'uppercase',
            color: 'var(--fg-3)',
            marginBottom: 16,
          }}>{label}</div>
        )}
        <div style={{ minHeight: height || 160 }}>
          {children}
        </div>
        {source && (
          <div style={{
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 9.5,
            color: 'var(--fg-3)',
            marginTop: 12,
            letterSpacing: '0.02em',
          }}>{source}</div>
        )}
      </div>
    );
  }

  /* ============== Case 1 — Evidence + HCP: 12-month parallel gantt === */
  function EvidenceHCPTimeline() {
    const months = ['M1','M2','M3','M4','M5','M6','M7','M8','M9','M10','M11','M12'];
    const streams = [
      { label: 'RWE feasibility + registry path',     start: 0, end: 5,  color: 'var(--brand-primary-700)' },
      { label: 'HCP segmentation · 2,400+ mapped',    start: 1, end: 8,  color: 'var(--brand-accent-500)' },
      { label: 'Localized assets · 18 delivered',     start: 3, end: 11, color: 'var(--brand-accent-700)' },
    ];
    const W = 480, H = 120;
    const LEFT = 180, TOP = 8;
    const barW = (W - LEFT) / 12;
    const barH = 22, gap = 12;

    return (
      <ChartFrame
        label="Parallel workstreams · 12-month engagement"
        source="Source: Client engagement report · 2025 · Sponsor + IR (pending)"
        height={160}
      >
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="auto"
             style={{ maxHeight: 200 }} aria-hidden="true">
          {/* Month grid lines */}
          {months.map((m, i) => (
            <g key={i}>
              <line
                x1={LEFT + i * barW} y1={0}
                x2={LEFT + i * barW} y2={H - 16}
                stroke="var(--border-1)" strokeWidth="0.5"
              />
              <text
                x={LEFT + i * barW + barW / 2} y={H - 4}
                textAnchor="middle"
                style={{
                  fontFamily: 'var(--font-mono, var(--font-ui))',
                  fontSize: 7, fill: 'var(--fg-3)',
                  letterSpacing: '0.04em',
                }}
              >{m}</text>
            </g>
          ))}
          {/* Stream bars */}
          {streams.map((s, i) => {
            const y = TOP + i * (barH + gap);
            const x = LEFT + s.start * barW;
            const w = (s.end - s.start) * barW;
            return (
              <g key={i}>
                <text
                  x={LEFT - 6} y={y + barH / 2 + 3.5}
                  textAnchor="end"
                  style={{
                    fontFamily: 'var(--font-ui, Inter, sans-serif)',
                    fontSize: 7.5, fill: 'var(--fg-2)',
                  }}
                >{s.label}</text>
                <rect x={x} y={y} width={w} height={barH}
                  fill={s.color} opacity={0.75} rx={2} />
                {/* end marker */}
                <circle cx={x + w} cy={y + barH / 2} r="2.5"
                  fill={s.color} />
              </g>
            );
          })}
        </svg>
        {/* Key metrics inline */}
        <div style={{
          display: 'flex', gap: 32, marginTop: 12,
          fontFamily: 'var(--font-ui)', fontSize: 12,
        }}>
          <div>
            <span style={{ fontWeight: 700, color: 'var(--brand-primary-700)', fontSize: 20 }}>2,400+</span>
            <span style={{ color: 'var(--fg-2)', marginLeft: 6 }}>HCPs mapped</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, color: 'var(--brand-accent-700)', fontSize: 20 }}>18</span>
            <span style={{ color: 'var(--fg-2)', marginLeft: 6 }}>bilingual assets</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, color: 'var(--brand-primary-700)', fontSize: 20 }}>60%</span>
            <span style={{ color: 'var(--fg-2)', marginLeft: 6 }}>faster delivery</span>
          </div>
        </div>
      </ChartFrame>
    );
  }

  /* ============== Case 2 — Localized Content: revision cycle ========= */
  function LocalizedContentQC() {
    const W = 400, H = 130;
    // Before: 4-pass cycle; After: 2-pass cycle
    const beforePasses = [
      { label: 'Draft', w: 22 },
      { label: 'Rev 1', w: 22 },
      { label: 'Rev 2', w: 22 },
      { label: 'Rev 3', w: 22 },
    ];
    const afterPasses = [
      { label: 'AI + MD Draft', w: 44 },
      { label: 'Final review', w: 22 },
    ];
    const LEFT = 8, BARY = 20, BAR2Y = 70, BH = 28, GAP = 3;

    return (
      <ChartFrame
        label="Revision cycle reduction · 120+ content pieces"
        source="Source: Internal QC log · 2024 · Sponsor (pending)"
        height={180}
      >
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="auto"
             style={{ maxHeight: 200 }} aria-hidden="true">
          {/* BEFORE label */}
          <text x={LEFT} y={BARY - 6} style={{
            fontFamily: 'var(--font-ui, Inter, sans-serif)',
            fontSize: 8, fontWeight: 700, fill: 'var(--fg-3)',
            letterSpacing: '0.08em',
          }}>BEFORE · 4-PASS · 8 WEEKS</text>
          {/* Before bars */}
          {(() => {
            let cx = LEFT;
            return beforePasses.map((p, i) => {
              const x = cx;
              cx += p.w * 3.5 + GAP;
              return (
                <g key={'b' + i}>
                  <rect x={x} y={BARY} width={p.w * 3.5} height={BH}
                    fill="var(--fg-3)" opacity={0.25} rx={2} />
                  <text x={x + p.w * 1.75} y={BARY + BH / 2 + 3}
                    textAnchor="middle"
                    style={{
                      fontFamily: 'var(--font-ui, Inter, sans-serif)',
                      fontSize: 8, fill: 'var(--fg-2)',
                    }}
                  >{p.label}</text>
                </g>
              );
            });
          })()}
          {/* Strikethrough line across before */}
          <line x1={LEFT} y1={BARY + BH / 2}
                x2={LEFT + beforePasses.reduce((s, p) => s + p.w * 3.5 + GAP, 0) - GAP}
                y2={BARY + BH / 2}
                stroke="var(--brand-primary-700)" strokeWidth="1.5"
                opacity="0.6" strokeDasharray="4,3" />

          {/* AFTER label */}
          <text x={LEFT} y={BAR2Y - 6} style={{
            fontFamily: 'var(--font-ui, Inter, sans-serif)',
            fontSize: 8, fontWeight: 700, fill: 'var(--brand-accent-700)',
            letterSpacing: '0.08em',
          }}>AFTER · 2-PASS · 4 WEEKS</text>
          {/* After bars */}
          {(() => {
            let cx = LEFT;
            return afterPasses.map((p, i) => {
              const x = cx;
              cx += p.w * 3.5 + GAP;
              return (
                <g key={'a' + i}>
                  <rect x={x} y={BAR2Y} width={p.w * 3.5} height={BH}
                    fill={i === 0 ? 'var(--brand-accent-500)' : 'var(--brand-primary-700)'}
                    opacity={0.75} rx={2} />
                  <text x={x + p.w * 1.75} y={BAR2Y + BH / 2 + 3}
                    textAnchor="middle"
                    style={{
                      fontFamily: 'var(--font-ui, Inter, sans-serif)',
                      fontSize: 8, fill: 'var(--white, #fff)',
                      fontWeight: 600,
                    }}
                  >{p.label}</text>
                </g>
              );
            });
          })()}
          {/* Delta callout */}
          <text x={W - 8} y={BAR2Y + BH + 14} textAnchor="end" style={{
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 10, fill: 'var(--brand-primary-700)',
            fontWeight: 700, letterSpacing: '0.04em',
          }}>−50% cycle time</text>
        </svg>
        {/* Key metrics */}
        <div style={{
          display: 'flex', gap: 32, marginTop: 12,
          fontFamily: 'var(--font-ui)', fontSize: 12,
        }}>
          <div>
            <span style={{ fontWeight: 700, color: 'var(--brand-primary-700)', fontSize: 20 }}>120+</span>
            <span style={{ color: 'var(--fg-2)', marginLeft: 6 }}>pieces localized</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, color: 'var(--brand-accent-700)', fontSize: 20 }}>88%</span>
            <span style={{ color: 'var(--fg-2)', marginLeft: 6 }}>first-pass approval</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, color: 'var(--brand-primary-700)', fontSize: 20 }}>3</span>
            <span style={{ color: 'var(--fg-2)', marginLeft: 6 }}>therapeutic areas</span>
          </div>
        </div>
      </ChartFrame>
    );
  }

  /* ============== Case 3 — FDA Bridge: acceleration timeline ========= */
  function FDABridgeAcceleration() {
    const W = 440, H = 100;
    const LEFT = 8;
    // Planned: 24 months; Actual: 16 months (8 months ahead)
    const planned = 24, actual = 16;
    const scale = (W - LEFT - 40) / planned;
    const BARY1 = 24, BARY2 = 58, BH = 22;

    return (
      <ChartFrame
        label="Timeline acceleration · FDA evidence package"
        source="Source: Client program plan · 2025 · Sponsor (pending)"
        height={160}
      >
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="auto"
             style={{ maxHeight: 180 }} aria-hidden="true">
          {/* Planned row */}
          <text x={LEFT} y={BARY1 - 6} style={{
            fontFamily: 'var(--font-ui, Inter, sans-serif)',
            fontSize: 8, fontWeight: 700, fill: 'var(--fg-3)',
            letterSpacing: '0.08em',
          }}>PLANNED</text>
          <rect x={LEFT} y={BARY1} width={planned * scale} height={BH}
            fill="var(--fg-3)" opacity={0.2} rx={2} />
          <text x={LEFT + planned * scale + 6} y={BARY1 + BH / 2 + 3} style={{
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 10, fill: 'var(--fg-3)', fontWeight: 600,
          }}>{planned} mo</text>

          {/* Actual row */}
          <text x={LEFT} y={BARY2 - 6} style={{
            fontFamily: 'var(--font-ui, Inter, sans-serif)',
            fontSize: 8, fontWeight: 700, fill: 'var(--brand-accent-700)',
            letterSpacing: '0.08em',
          }}>ACTUAL</text>
          <rect x={LEFT} y={BARY2} width={actual * scale} height={BH}
            fill="var(--brand-accent-500)" opacity={0.85} rx={2} />
          <text x={LEFT + actual * scale + 6} y={BARY2 + BH / 2 + 3} style={{
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 10, fill: 'var(--brand-accent-700)', fontWeight: 700,
          }}>{actual} mo</text>

          {/* Delta bracket */}
          <line x1={LEFT + actual * scale} y1={BARY2 + BH + 4}
                x2={LEFT + planned * scale} y2={BARY2 + BH + 4}
                stroke="var(--brand-primary-700)" strokeWidth="1.5" />
          <line x1={LEFT + actual * scale} y1={BARY2 + BH + 1}
                x2={LEFT + actual * scale} y2={BARY2 + BH + 7}
                stroke="var(--brand-primary-700)" strokeWidth="1.5" />
          <line x1={LEFT + planned * scale} y1={BARY2 + BH + 1}
                x2={LEFT + planned * scale} y2={BARY2 + BH + 7}
                stroke="var(--brand-primary-700)" strokeWidth="1.5" />
          <text x={(LEFT + actual * scale + LEFT + planned * scale) / 2}
                y={BARY2 + BH + 16}
                textAnchor="middle"
                style={{
                  fontFamily: 'var(--font-mono, var(--font-ui))',
                  fontSize: 10, fill: 'var(--brand-primary-700)',
                  fontWeight: 700, letterSpacing: '0.04em',
                }}>−{planned - actual} months ahead</text>
        </svg>
        {/* Key metrics */}
        <div style={{
          display: 'flex', gap: 32, marginTop: 12,
          fontFamily: 'var(--font-ui)', fontSize: 12,
        }}>
          <div>
            <span style={{ fontWeight: 700, color: 'var(--brand-primary-700)', fontSize: 20 }}>3</span>
            <span style={{ color: 'var(--fg-2)', marginLeft: 6 }}>manuscripts submitted</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, color: 'var(--brand-accent-700)', fontSize: 20 }}>2</span>
            <span style={{ color: 'var(--fg-2)', marginLeft: 6 }}>congress abstracts</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, color: 'var(--brand-primary-700)', fontSize: 20 }}>8 mo</span>
            <span style={{ color: 'var(--fg-2)', marginLeft: 6 }}>ahead of plan</span>
          </div>
        </div>
      </ChartFrame>
    );
  }

  /* ----- Dispatcher ---------------------------------------------- */
  function CaseStudyHeroChart({ kind }) {
    switch (kind) {
      case 'evidence-hcp-timeline':    return <EvidenceHCPTimeline />;
      case 'localized-content-qc':     return <LocalizedContentQC />;
      case 'fda-bridge-acceleration':  return <FDABridgeAcceleration />;
      default:
        console.warn('CaseStudyHeroChart: unknown kind', kind);
        return null;
    }
  }

  if (typeof window !== 'undefined') {
    window.CaseStudyHeroChart = CaseStudyHeroChart;
  }
})();
