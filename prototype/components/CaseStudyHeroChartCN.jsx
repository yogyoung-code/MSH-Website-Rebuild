/* =========================================================
   CaseStudyHeroChartCN.jsx — 客户案例详情页 Hero 图表（中文）
   ---------------------------------------------------------
   对应 CaseStudyHeroChart.jsx：所有数据点、坐标、比例与英文版
   逐一致；仅坐标轴标签、图例、里程碑与来源脚注改为中文。

   用法：
     <CaseStudyHeroChartCN kind="evidence-hcp-timeline" />

   支持的 kind：
     evidence-hcp-timeline     — 12 个月并行工作流甘特图 + 里程碑
     localized-content-qc      — 修改轮次压缩 + 一次通过率对比
     fda-bridge-acceleration   — 原计划 vs 实际时间线 + 阶段里程碑
   ========================================================= */

(function () {

  /* 通用图表外框 ------------------------------------------------------ */
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

  /* 通用指标条 -------------------------------------------------------- */
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

  /* ============ 案例一 — 证据 + HCP：12 个月甘特图 + 里程碑 ========== */
  function EvidenceHCPTimeline() {
    var months = ['M1','M2','M3','M4','M5','M6','M7','M8','M9','M10','M11','M12'];
    var streams = [
      { label: '真实世界研究可行性 + 登记研究路径', start: 0, end: 5,  color: 'var(--brand-primary-700)', opacity: 0.8 },
      { label: 'HCP 分层 · 已梳理 2,400+ 位',        start: 1, end: 8,  color: 'var(--brand-accent-500)',  opacity: 0.75 },
      { label: '本地化材料 · 已交付 18 份',           start: 3, end: 11, color: 'var(--brand-accent-700)',  opacity: 0.75 },
    ];
    var milestones = [
      { stream: 0, month: 2,  label: '可行性报告' },
      { stream: 0, month: 5,  label: '登记研究路径确定' },
      { stream: 1, month: 4,  label: 'HCP 地图 v1' },
      { stream: 1, month: 8,  label: '2,400+ 位已梳理' },
      { stream: 2, month: 7,  label: '交付 10 份材料' },
      { stream: 2, month: 11, label: '18 份全部签核' },
    ];
    var W = 520, H = 148;
    var LEFT = 190, TOP = 10;
    var barW = (W - LEFT - 8) / 12;
    var barH = 22, gap = 16;

    return (
      <ChartFrame
        label="并行工作流 · 12 个月项目周期（M = 项目月）"
        source="来源：客户项目报告 · 2025 · 项目发起方 + IR（待签核）"
        height={190}
      >
        <svg viewBox={'0 0 ' + W + ' ' + H} width="100%" style={{ height: 'auto', display: 'block' }}
             style={{ maxHeight: 240 }} aria-hidden="true">
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
          <line x1={LEFT + 12 * barW} y1={0} x2={LEFT + 12 * barW} y2={H - 20}
            stroke="var(--border-1)" strokeWidth="0.5" />

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
                <rect x={LEFT} y={y + barH / 2 - 1} width={12 * barW} height={2}
                  fill="var(--border-1)" opacity={0.5} rx={1} />
                <rect x={x} y={y} width={w} height={barH}
                  fill={s.color} opacity={s.opacity} rx={3} />
                <circle cx={x + 3} cy={y + barH / 2} r="2"
                  fill="var(--bg-1)" stroke={s.color} strokeWidth="1.5" />
                <circle cx={x + w - 3} cy={y + barH / 2} r="3"
                  fill={s.color} />
              </g>
            );
          })}

          {milestones.map(function(ms, i) {
            var y = TOP + ms.stream * (barH + gap) + barH / 2;
            var x = LEFT + ms.month * barW;
            var above = (i % 2 === 0);
            return (
              <g key={'ms-' + i}>
                <polygon
                  points={[x, y - 4.5, x + 4.5, y, x, y + 4.5, x - 4.5, y].join(',')}
                  fill="var(--bg-1)" stroke="var(--brand-primary-700)" strokeWidth="1.2"
                />
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
          { value: '2,400+', label: '位医疗专业人士已梳理' },
          { value: '18', label: '份双语材料', accent: true },
          { value: '60%', label: '交付提速' },
        ]} />
      </ChartFrame>
    );
  }

  /* ============ 案例二 — 本地化内容：轮次压缩 + 一次通过率 ========== */
  function LocalizedContentQC() {
    var W = 460, H = 170;
    var LEFT = 8;

    var beforePasses = [
      { label: '初稿',   w: 70, approvalPct: 25 },
      { label: '修改 1', w: 70, approvalPct: 48 },
      { label: '修改 2', w: 70, approvalPct: 67 },
      { label: '修改 3', w: 70, approvalPct: 82 },
    ];
    var afterPasses = [
      { label: 'AI + 医生初稿', w: 140, approvalPct: 72 },
      { label: '终审',          w: 70,  approvalPct: 88 },
    ];
    var BARY = 26, BAR2Y = 90, BH = 26, GAP = 4;

    var SPARKY = 148;

    return (
      <ChartFrame
        label="修改轮次压缩 · 120+ 份内容"
        source="来源：内部质控日志 · 2024 · 项目发起方（待签核）"
        height={230}
      >
        <svg viewBox={'0 0 ' + W + ' ' + H} width="100%" style={{ height: 'auto', display: 'block' }}
             style={{ maxHeight: 260 }} aria-hidden="true">

          {/* === 此前 === */}
          <text x={LEFT} y={BARY - 8} style={{
            fontFamily: 'var(--font-ui, Inter, sans-serif)',
            fontSize: 8, fontWeight: 700, fill: 'var(--fg-3)',
            letterSpacing: '0.08em',
          }}>此前 · 4 轮 · 8 周</text>
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
                  <text x={x + p.w / 2} y={BARY + BH / 2 + 10}
                    textAnchor="middle"
                    style={{
                      fontFamily: 'var(--font-mono, var(--font-ui))',
                      fontSize: 7, fill: 'var(--fg-3)',
                    }}
                  >{p.approvalPct}% 通过</text>
                </g>
              );
            });
          })()}
          <line x1={LEFT} y1={BARY + BH / 2}
                x2={LEFT + beforePasses.reduce(function(s, p) { return s + p.w + GAP; }, 0) - GAP}
                y2={BARY + BH / 2}
                stroke="var(--brand-primary-700)" strokeWidth="1.5"
                opacity="0.5" strokeDasharray="6,4" />

          {/* === 此后 === */}
          <text x={LEFT} y={BAR2Y - 8} style={{
            fontFamily: 'var(--font-ui, Inter, sans-serif)',
            fontSize: 8, fontWeight: 700, fill: 'var(--brand-accent-700)',
            letterSpacing: '0.08em',
          }}>此后 · 2 轮 · 4 周</text>
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
                  >{p.approvalPct}% 通过</text>
                </g>
              );
            });
          })()}

          <text x={W - 8} y={BAR2Y + BH + 16} textAnchor="end" style={{
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 11, fill: 'var(--brand-primary-700)',
            fontWeight: 700, letterSpacing: '0.04em',
          }}>周期 −50%</text>

          {/* === 一次通过率对比 === */}
          <text x={LEFT} y={SPARKY - 4} style={{
            fontFamily: 'var(--font-ui, Inter, sans-serif)',
            fontSize: 7, fontWeight: 600, fill: 'var(--fg-3)',
            letterSpacing: '0.06em',
          }}>一次通过率</text>
          <rect x={LEFT + 120} y={SPARKY - 10} width={80} height={12}
            fill="var(--fg-3)" opacity={0.18} rx={2} />
          <rect x={LEFT + 120} y={SPARKY - 10} width={80 * 0.25} height={12}
            fill="var(--fg-3)" opacity={0.5} rx={2} />
          <text x={LEFT + 120 + 80 + 6} y={SPARKY} style={{
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 8, fill: 'var(--fg-3)',
          }}>25%（此前）</text>
          <rect x={LEFT + 120} y={SPARKY + 6} width={80} height={12}
            fill="var(--brand-accent-500)" opacity={0.15} rx={2} />
          <rect x={LEFT + 120} y={SPARKY + 6} width={80 * 0.88} height={12}
            fill="var(--brand-accent-500)" opacity={0.8} rx={2} />
          <text x={LEFT + 120 + 80 + 6} y={SPARKY + 16} style={{
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 8, fill: 'var(--brand-accent-700)', fontWeight: 700,
          }}>88%（此后）</text>
        </svg>
        <MetricStrip items={[
          { value: '120+', label: '份内容完成本地化' },
          { value: '88%', label: '医生一次通过率', accent: true },
          { value: '3', label: '个治疗领域' },
        ]} />
      </ChartFrame>
    );
  }

  /* ============ 案例三 — FDA 桥接：时间线提速 + 阶段里程碑 ========== */
  function FDABridgeAcceleration() {
    var W = 480, H = 130;
    var LEFT = 8;
    var planned = 24, actual = 16;
    var scale = (W - LEFT - 50) / planned;
    var BARY1 = 28, BARY2 = 66, BH = 24;

    var phases = [
      { month: 0,  label: '启动',           align: 'start' },
      { month: 4,  label: '差距评估完成',    align: 'middle' },
      { month: 9,  label: '3 篇论文投出',    align: 'middle' },
      { month: 12, label: '2 篇摘要获接收',  align: 'middle' },
      { month: 16, label: '证据包就绪',      align: 'end' },
    ];

    var quarters = [
      { month: 6,  label: 'Q2' },
      { month: 12, label: 'Q4' },
      { month: 18, label: 'Q6' },
      { month: 24, label: 'Q8' },
    ];

    return (
      <ChartFrame
        label="时间线提速 · FDA 证据包"
        source="来源：客户项目计划 · 2025 · 项目发起方（待签核）"
        height={190}
      >
        <svg viewBox={'0 0 ' + W + ' ' + H} width="100%" style={{ height: 'auto', display: 'block' }}
             style={{ maxHeight: 220 }} aria-hidden="true">

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

          {/* === 原计划 === */}
          <text x={LEFT} y={BARY1 - 8} style={{
            fontFamily: 'var(--font-ui, Inter, sans-serif)',
            fontSize: 8, fontWeight: 700, fill: 'var(--fg-3)',
            letterSpacing: '0.08em',
          }}>原计划 · 初始时间线</text>
          <rect x={LEFT} y={BARY1} width={planned * scale} height={BH}
            fill="var(--fg-3)" opacity={0.12} rx={3} />
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
          }}>{planned} 个月</text>

          {/* === 实际 === */}
          <text x={LEFT} y={BARY2 - 8} style={{
            fontFamily: 'var(--font-ui, Inter, sans-serif)',
            fontSize: 8, fontWeight: 700, fill: 'var(--brand-accent-700)',
            letterSpacing: '0.08em',
          }}>实际 · 梅斯健康介入后</text>
          <rect x={LEFT} y={BARY2} width={actual * scale} height={BH}
            fill="var(--brand-accent-500)" opacity={0.85} rx={3} />
          <text x={LEFT + actual * scale + 8} y={BARY2 + BH / 2 + 4} style={{
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 10, fill: 'var(--brand-accent-700)', fontWeight: 700,
          }}>{actual} 个月</text>

          {phases.map(function(p, i) {
            var x = LEFT + p.month * scale;
            var y = BARY2 + BH / 2;
            return (
              <g key={'pm-' + i}>
                <line x1={x} y1={BARY2 - 2} x2={x} y2={BARY2 + BH + 2}
                  stroke="var(--bg-1)" strokeWidth="1.5" />
                <circle cx={x} cy={y} r="3.5"
                  fill="var(--bg-1)" stroke="var(--brand-accent-700)" strokeWidth="1.5" />
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
                }}>较原计划提前 8 个月</text>
        </svg>
        <MetricStrip items={[
          { value: '3', label: '篇论文已投稿' },
          { value: '2', label: '篇大会摘要', accent: true },
          { value: '8 个月', label: '较原计划提前' },
        ]} />
      </ChartFrame>
    );
  }

  /* ----- 分发器 --------------------------------------------------- */
  function CaseStudyHeroChartCN({ kind }) {
    switch (kind) {
      case 'evidence-hcp-timeline':    return <EvidenceHCPTimeline />;
      case 'localized-content-qc':     return <LocalizedContentQC />;
      case 'fda-bridge-acceleration':  return <FDABridgeAcceleration />;
      default:
        console.warn('CaseStudyHeroChartCN: 未知 kind', kind);
        return null;
    }
  }

  if (typeof window !== 'undefined') {
    window.CaseStudyHeroChartCN = CaseStudyHeroChartCN;
  }
})();
