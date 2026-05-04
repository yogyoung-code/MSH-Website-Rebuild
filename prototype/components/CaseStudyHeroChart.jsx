/* =========================================================
   CaseStudyHeroChart.jsx — Detail-page hero chart (B2)
   ---------------------------------------------------------
   Larger SVG visualizations for case study detail heroes.
   Visual upgrade v2: richer data layers, milestone markers,
   gradient fills, approval-rate sparklines.

   Brand discipline: navy + cyan only, no animation,
   monospace annotations, source/year cited.

   Usage:
     <CaseStudyHeroChart kind="evidence-hcp-timeline" />

   Supported kinds:
     evidence-hcp-timeline     — 12-month parallel workstream gantt + milestones
     localized-content-qc      — revision cycle reduction + approval rate comparison
     fda-bridge-acceleration   — planned vs actual timeline + phase milestones
   ========================================================= */

(function () {

  /* Shared chart frame ------------------------------------------------ */
  function ChartFrame({ children, label, source, height }) {
    return (
      <div style={{
        background: 'var(--bg-2, #fafbfc)',
        border: '1px solid var(--border-1)',
        padding: '24px 28px 18px',
        position: 'relative',
        marginTop: 24,
        borderRadius: 4,
      }}>
        {label && (
          <div style={{
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 10,
            letterSpacing: '0.10em',
            textTransform: 'uppercase',
            color: 'var(--fg-3)',
            marginBottom: 18,
            borderBottom: '1px solid var(--border-1)',
            paddingBottom: 10,
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
            marginTop: 14,
            letterSpacing: '0.02em',
            borderTop: '1px solid var(--border-1)',
            paddingTop: 10,
          }}>{source}</div>
        )}
      </div>
    );
  }

  /* Shared metric strip ----------------------------------------------- */
  function MetricStrip({ items }) {
    return (
      <div style={{
        display: 'flex', gap: 36, marginTop: 16,
        fontFamily: 'var(--font-ui)', fontSize: 12,
        flexWrap: 'wrap',
      }}>
        {items.map(function(m, i) {
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <span style={{
                fontWeight: 700,
                color: m.accent ? 'var(--brand-accent-700)' : 'var(--brand-primary-700)',
                fontSize: 22,
                fontFamily: 'var(--font-mono, var(--font-ui))',
                letterSpacing: '-0.02em',
              }}>{m.value}</span>
              <span style={{ color: 'var(--fg-2)' }}>{m.label}</span>
            </div>
          );
        })}
      </div>
    );
  }

  /* ============== Case 1 — Evidence + HCP: 12-month gantt + milestones */
  function EvidenceHCPTimeline() {
    var months = ['M1','M2','M3','M4','M5','M6','M7','M8','M9','M10','M11','M12'];
    var streams = [
      { label: 'RWE feasibility + registry path',     start: 0, end: 5,  color: 'var(--brand-primary-700)', opacity: 0.8 },
      { label: 'HCP segmentation · 2,400+ mapped',    start: 1, end: 8,  color: 'var(--brand-accent-500)',  opacity: 0.75 },
      { label: 'Localized assets · 18 delivered',     start: 3, end: 11, color: 'var(--brand-accent-700)',  opacity: 0.75 },
    ];
    var milestones = [
      { stream: 0, month: 2,  label: 'Feasibility report' },
      { stream: 0, month: 5,  label: 'Registry path locked' },
      { stream: 1, month: 4,  label: 'HCP map v1' },
      { stream: 1, month: 8,  label: '2,400+ mapped' },
      { stream: 2, month: 7,  label: '10 assets delivered' },
      { stream: 2, month: 11, label: 'All 18 signed off' },
    ];
    var W = 520, H = 148;
    var LEFT = 190, TOP = 10;
    var barW = (W - LEFT - 8) / 12;
    var barH = 22, gap = 16;

    return (
      <ChartFrame
        label="Parallel workstreams · 12-month engagement"
        source="Source: Client engagement report · 2025 · Sponsor + IR (pending)"
        height={190}
      >
        <svg viewBox={'0 0 ' + W + ' ' + H} width="100%" height="auto"
             style={{ maxHeight: 240 }} aria-hidden="true">
          {/* Alternating month background bands */}
          {months.map(function(m, i) {
            return (
              <g key={'grid-' + i}>
                {i % 2 === 0 && (
                  <rect x={LEFT + i * barW} y={0} width={barW} height={H - 20}
                    fill="var(--brand-primary-700)" opacity={0.03} />
                )}
                <line
                  x1={LEFT + i * barW} y1={0}
                  x2={LEFT + i * barW} y2={H - 20}
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
            );
          })}
          {/* Right edge line */}
          <line x1={LEFT + 12 * barW} y1={0} x2={LEFT + 12 * barW} y2={H - 20}
            stroke="var(--border-1)" strokeWidth="0.5" />

          {/* Stream bars with rounded caps */}
          {streams.map(function(s, i) {
            var y = TOP + i * (barH + gap);
            var x = LEFT + s.start * barW;
            var w = (s.end - s.start) * barW;
            return (
              <g key={'s-' + i}>
                <text
                  x={LEFT - 8} y={y + barH / 2 + 3.5}
                  textAnchor="end"
                  style={{
                    fontFamily: 'var(--font-ui, Inter, sans-serif)',
                    fontSize: 7.5, fill: 'var(--fg-2)',
                  }}
                >{s.label}</text>
                {/* Bar background track */}
                <rect x={LEFT} y={y + barH / 2 - 1} width={12 * barW} height={2}
                  fill="var(--border-1)" opacity={0.5} rx={1} />
                {/* Active bar */}
                <rect x={x} y={y} width={w} height={barH}
                  fill={s.color} opacity={s.opacity} rx={3} />
                {/* Start cap */}
                <circle cx={x + 3} cy={y + barH / 2} r="2"
                  fill="var(--bg-1)" stroke={s.color} strokeWidth="1.5" />
                {/* End cap */}
                <circle cx={x + w - 3} cy={y + barH / 2} r="3"
                  fill={s.color} />
              </g>
            );
          })}

          {/* Milestone diamonds */}
          {milestones.map(function(ms, i) {
            var y = TOP + ms.stream * (barH + gap) + barH / 2;
            var x = LEFT + ms.month * barW;
            var above = (i % 2 === 0);
            return (
              <g key={'ms-' + i}>
                {/* Diamond marker */}
                <polygon
                  points={[x, y - 4.5, x + 4.5, y, x, y + 4.5, x - 4.5, y].join(',')}
                  fill="var(--bg-1)" stroke="var(--brand-primary-700)" strokeWidth="1.2"
                />
                {/* Label */}
                <text
                  x={x} y={above ? y - 10 : y + 14}
                  textAnchor="middle"
                  style={{
                    fontFamily: 'var(--font-mono, var(--font-ui))',
                    fontSize: 6, fill: 'var(--fg-3)',
                    letterSpacing: '0.02em',
                  }}
                >{ms.label}</text>
              </g>
            );
          })}
        </svg>
        <MetricStrip items={[
          { value: '2,400+', label: 'HCPs mapped' },
          { value: '18', label: 'bilingual assets', accent: true },
          { value: '60%', label: 'faster delivery' },
        ]} />
      </ChartFrame>
    );
  }

  /* ============== Case 2 — Localized Content: cycle + approval rate == */
  function LocalizedContentQC() {
    var W = 460, H = 170;
    var LEFT = 8;

    /* --- Before/After pipeline bars --- */
    var beforePasses = [
      { label: 'Draft', w: 70, approvalPct: 25 },
      { label: 'Rev 1', w: 70, approvalPct: 48 },
      { label: 'Rev 2', w: 70, approvalPct: 67 },
      { label: 'Rev 3', w: 70, approvalPct: 82 },
    ];
    var afterPasses = [
      { label: 'AI + MD Draft', w: 140, approvalPct: 72 },
      { label: 'Final review',  w: 70,  approvalPct: 88 },
    ];
    var BARY = 26, BAR2Y = 90, BH = 26, GAP = 4;

    /* --- Approval rate sparkline (mini bar chart) --- */
    var SPARKY = 148;

    return (
      <ChartFrame
        label="Revision cycle reduction · 120+ content pieces"
        source="Source: Internal QC log · 2024 · Sponsor (pending)"
        height={230}
      >
        <svg viewBox={'0 0 ' + W + ' ' + H} width="100%" height="auto"
             style={{ maxHeight: 260 }} aria-hidden="true">

          {/* === BEFORE row === */}
          <text x={LEFT} y={BARY - 8} style={{
            fontFamily: 'var(--font-ui, Inter, sans-serif)',
            fontSize: 8, fontWeight: 700, fill: 'var(--fg-3)',
            letterSpacing: '0.08em',
          }}>BEFORE · 4-PASS · 8 WEEKS</text>
          {(() => {
            var cx = LEFT;
            return beforePasses.map(function(p, i) {
              var x = cx;
              cx += p.w + GAP;
              return (
                <g key={'b' + i}>
                  <rect x={x} y={BARY} width={p.w} height={BH}
                    fill="var(--fg-3)" opacity={0.18} rx={3} />
                  <text x={x + p.w / 2} y={BARY + BH / 2 - 2}
                    textAnchor="middle"
                    style={{
                      fontFamily: 'var(--font-ui, Inter, sans-serif)',
                      fontSize: 8, fill: 'var(--fg-2)',
                    }}
                  >{p.label}</text>
                  {/* Pass approval % underneath each bar */}
                  <text x={x + p.w / 2} y={BARY + BH / 2 + 10}
                    textAnchor="middle"
                    style={{
                      fontFamily: 'var(--font-mono, var(--font-ui))',
                      fontSize: 7, fill: 'var(--fg-3)',
                    }}
                  >{p.approvalPct}% pass</text>
                </g>
              );
            });
          })()}
          {/* Strikethrough */}
          <line x1={LEFT} y1={BARY + BH / 2}
                x2={LEFT + beforePasses.reduce(function(s, p) { return s + p.w + GAP; }, 0) - GAP}
                y2={BARY + BH / 2}
                stroke="var(--brand-primary-700)" strokeWidth="1.5"
                opacity="0.5" strokeDasharray="6,4" />

          {/* === AFTER row === */}
          <text x={LEFT} y={BAR2Y - 8} style={{
            fontFamily: 'var(--font-ui, Inter, sans-serif)',
            fontSize: 8, fontWeight: 700, fill: 'var(--brand-accent-700)',
            letterSpacing: '0.08em',
          }}>AFTER · 2-PASS · 4 WEEKS</text>
          {(() => {
            var cx = LEFT;
            return afterPasses.map(function(p, i) {
              var x = cx;
              cx += p.w + GAP;
              return (
                <g key={'a' + i}>
                  <rect x={x} y={BAR2Y} width={p.w} height={BH}
                    fill={i === 0 ? 'var(--brand-accent-500)' : 'var(--brand-primary-700)'}
                    opacity={0.8} rx={3} />
                  <text x={x + p.w / 2} y={BAR2Y + BH / 2 - 2}
                    textAnchor="middle"
                    style={{
                      fontFamily: 'var(--font-ui, Inter, sans-serif)',
                      fontSize: 8, fill: 'var(--white, #fff)',
                      fontWeight: 600,
                    }}
                  >{p.label}</text>
                  <text x={x + p.w / 2} y={BAR2Y + BH / 2 + 10}
                    textAnchor="middle"
                    style={{
                      fontFamily: 'var(--font-mono, var(--font-ui))',
                      fontSize: 7, fill: 'var(--white, #fff)', opacity: 0.8,
                    }}
                  >{p.approvalPct}% pass</text>
                </g>
              );
            });
          })()}

          {/* Delta callout */}
          <text x={W - 8} y={BAR2Y + BH + 16} textAnchor="end" style={{
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 11, fill: 'var(--brand-primary-700)',
            fontWeight: 700, letterSpacing: '0.04em',
          }}>−50% cycle time</text>

          {/* === Approval rate comparison bar === */}
          <text x={LEFT} y={SPARKY - 4} style={{
            fontFamily: 'var(--font-ui, Inter, sans-serif)',
            fontSize: 7, fontWeight: 600, fill: 'var(--fg-3)',
            letterSpacing: '0.06em',
          }}>FIRST-PASS APPROVAL RATE</text>
          {/* Before bar */}
          <rect x={LEFT + 120} y={SPARKY - 10} width={80} height={12}
            fill="var(--fg-3)" opacity={0.18} rx={2} />
          <rect x={LEFT + 120} y={SPARKY - 10} width={80 * 0.25} height={12}
            fill="var(--fg-3)" opacity={0.5} rx={2} />
          <text x={LEFT + 120 + 80 + 6} y={SPARKY} style={{
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 8, fill: 'var(--fg-3)',
          }}>25% (before)</text>
          {/* After bar */}
          <rect x={LEFT + 120} y={SPARKY + 6} width={80} height={12}
            fill="var(--brand-accent-500)" opacity={0.15} rx={2} />
          <rect x={LEFT + 120} y={SPARKY + 6} width={80 * 0.88} height={12}
            fill="var(--brand-accent-500)" opacity={0.8} rx={2} />
          <text x={LEFT + 120 + 80 + 6} y={SPARKY + 16} style={{
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 8, fill: 'var(--brand-accent-700)', fontWeight: 700,
          }}>88% (after)</text>
        </svg>
        <MetricStrip items={[
          { value: '120+', label: 'pieces localized' },
          { value: '88%', label: 'first-pass approval', accent: true },
          { value: '3', label: 'therapeutic areas' },
        ]} />
      </ChartFrame>
    );
  }

  /* ============== Case 3 — FDA Bridge: acceleration + phase milestones */
  function FDABridgeAcceleration() {
    var W = 480, H = 130;
    var LEFT = 8;
    var planned = 24, actual = 16;
    var scale = (W - LEFT - 50) / planned;
    var BARY1 = 28, BARY2 = 66, BH = 24;

    /* Phase milestones on the actual bar */
    var phases = [
      { month: 0,  label: 'Kick-off',           align: 'start' },
      { month: 4,  label: 'Gap assessment done', align: 'middle' },
      { month: 9,  label: '3 manuscripts filed', align: 'middle' },
      { month: 12, label: '2 abstracts accepted',align: 'middle' },
      { month: 16, label: 'Package ready',       align: 'end' },
    ];

    /* Quarter gridlines */
    var quarters = [
      { month: 6,  label: 'Q2' },
      { month: 12, label: 'Q4' },
      { month: 18, label: 'Q6' },
      { month: 24, label: 'Q8' },
    ];

    return (
      <ChartFrame
        label="Timeline acceleration · FDA evidence package"
        source="Source: Client program plan · 2025 · Sponsor (pending)"
        height={190}
      >
        <svg viewBox={'0 0 ' + W + ' ' + H} width="100%" height="auto"
             style={{ maxHeight: 220 }} aria-hidden="true">

          {/* Quarter gridlines */}
          {quarters.map(function(q, i) {
            var x = LEFT + q.month * scale;
            return (
              <g key={'q-' + i}>
                <line x1={x} y1={10} x2={x} y2={BARY2 + BH + 4}
                  stroke="var(--border-1)" strokeWidth="0.5" strokeDasharray="3,3" />
                <text x={x} y={8} textAnchor="middle" style={{
                  fontFamily: 'var(--font-mono, var(--font-ui))',
                  fontSize: 6.5, fill: 'var(--fg-3)', letterSpacing: '0.04em',
                }}>{q.label}</text>
              </g>
            );
          })}

          {/* === Planned row === */}
          <text x={LEFT} y={BARY1 - 8} style={{
            fontFamily: 'var(--font-ui, Inter, sans-serif)',
            fontSize: 8, fontWeight: 700, fill: 'var(--fg-3)',
            letterSpacing: '0.08em',
          }}>PLANNED · ORIGINAL TIMELINE</text>
          <rect x={LEFT} y={BARY1} width={planned * scale} height={BH}
            fill="var(--fg-3)" opacity={0.12} rx={3} />
          {/* Subtle hash pattern inside planned bar */}
          {[0,1,2,3,4,5,6,7,8,9,10,11].map(function(n) {
            var lx = LEFT + n * (planned * scale / 12);
            return (
              <line key={'ph-' + n} x1={lx} y1={BARY1} x2={lx} y2={BARY1 + BH}
                stroke="var(--fg-3)" strokeWidth="0.3" opacity={0.3} />
            );
          })}
          <text x={LEFT + planned * scale + 8} y={BARY1 + BH / 2 + 4} style={{
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 10, fill: 'var(--fg-3)', fontWeight: 600,
          }}>{planned} mo</text>

          {/* === Actual row === */}
          <text x={LEFT} y={BARY2 - 8} style={{
            fontFamily: 'var(--font-ui, Inter, sans-serif)',
            fontSize: 8, fontWeight: 700, fill: 'var(--brand-accent-700)',
            letterSpacing: '0.08em',
          }}>ACTUAL · MEDSCI-ACCELERATED</text>
          <rect x={LEFT} y={BARY2} width={actual * scale} height={BH}
            fill="var(--brand-accent-500)" opacity={0.85} rx={3} />
          <text x={LEFT + actual * scale + 8} y={BARY2 + BH / 2 + 4} style={{
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 10, fill: 'var(--brand-accent-700)', fontWeight: 700,
          }}>{actual} mo</text>

          {/* Phase milestone markers on actual bar */}
          {phases.map(function(p, i) {
            var x = LEFT + p.month * scale;
            var y = BARY2 + BH / 2;
            return (
              <g key={'pm-' + i}>
                {/* Vertical tick */}
                <line x1={x} y1={BARY2 - 2} x2={x} y2={BARY2 + BH + 2}
                  stroke="var(--bg-1)" strokeWidth="1.5" />
                {/* Dot */}
                <circle cx={x} cy={y} r="3.5"
                  fill="var(--bg-1)" stroke="var(--brand-accent-700)" strokeWidth="1.5" />
                {/* Label above */}
                <text x={x} y={BARY2 - 6}
                  textAnchor={p.align === 'start' ? 'start' : p.align === 'end' ? 'end' : 'middle'}
                  style={{
                    fontFamily: 'var(--font-mono, var(--font-ui))',
                    fontSize: 6, fill: 'var(--brand-accent-700)',
                    letterSpacing: '0.02em', fontWeight: 600,
                  }}
                >{p.label}</text>
              </g>
            );
          })}

          {/* Delta bracket */}
          <line x1={LEFT + actual * scale} y1={BARY2 + BH + 8}
                x2={LEFT + planned * scale} y2={BARY2 + BH + 8}
                stroke="var(--brand-primary-700)" strokeWidth="1.5" />
          <line x1={LEFT + actual * scale} y1={BARY2 + BH + 5}
                x2={LEFT + actual * scale} y2={BARY2 + BH + 11}
                stroke="var(--brand-primary-700)" strokeWidth="1.5" />
          <line x1={LEFT + planned * scale} y1={BARY2 + BH + 5}
                x2={LEFT + planned * scale} y2={BARY2 + BH + 11}
                stroke="var(--brand-primary-700)" strokeWidth="1.5" />
          <text x={(LEFT + actual * scale + LEFT + planned * scale) / 2}
                y={BARY2 + BH + 22}
                textAnchor="middle"
                style={{
                  fontFamily: 'var(--font-mono, var(--font-ui))',
                  fontSize: 11, fill: 'var(--brand-primary-700)',
                  fontWeight: 700, letterSpacing: '0.04em',
                }}>−8 months ahead of plan</text>
        </svg>
        <MetricStrip items={[
          { value: '3', label: 'manuscripts submitted' },
          { value: '2', label: 'congress abstracts', accent: true },
          { value: '8 mo', label: 'ahead of plan' },
        ]} />
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
