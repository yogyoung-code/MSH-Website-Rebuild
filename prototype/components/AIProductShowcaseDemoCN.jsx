/* =========================================================
   AIProductShowcaseDemoCN.jsx — 演示正文渲染器（中文）
   ---------------------------------------------------------
   对应 AIProductShowcaseDemo.jsx。block 类型契约完全一致：
     userMessage / aiResponse / dataTable / actionChips
   正文由 demoScenario 传入（中文），组件内嵌文案仅降级态。
   内部辅助函数加 CN 后缀，避免与英文组件在同页重名。
   ========================================================= */

const ACCENT_DEMO_CN = {
  blue:    { bubble: '#2563eb', bubbleShadow: 'rgba(30, 58, 138, 0.2)',
             ring: 'rgba(20,184,166,0.15)', highlight: '#5eead4',
             rule: 'rgba(20,184,166,0.30)', dot: '#14b8a6', eyebrow: '#2dd4bf' },
  navy:    { bubble: '#2563eb', bubbleShadow: 'rgba(30, 58, 138, 0.2)',
             ring: 'rgba(20,184,166,0.15)', highlight: '#5eead4',
             rule: 'rgba(20,184,166,0.30)', dot: '#14b8a6', eyebrow: '#2dd4bf' },
  violet:  { bubble: '#7c3aed', bubbleShadow: 'rgba(76, 29, 149, 0.2)',
             ring: 'rgba(99,102,241,0.15)', highlight: '#a5b4fc',
             rule: 'rgba(99,102,241,0.30)', dot: '#818cf8', eyebrow: '#a5b4fc' },
  teal:    { bubble: '#0d9488', bubbleShadow: 'rgba(19, 78, 74, 0.2)',
             ring: 'rgba(20,184,166,0.15)', highlight: '#5eead4',
             rule: 'rgba(20,184,166,0.30)', dot: '#14b8a6', eyebrow: '#2dd4bf' },
  cyan:    { bubble: '#0088B0', bubbleShadow: 'rgba(0, 68, 88, 0.2)',
             ring: 'rgba(0,174,219,0.15)', highlight: '#D6F1F9',
             rule: 'rgba(0,174,219,0.30)', dot: '#00AEDB', eyebrow: '#5ecfe8' },
};
function demoAccentOfCN(slug) { return ACCENT_DEMO_CN[slug] || ACCENT_DEMO_CN.blue; }

function AIProductShowcaseDemoCN({ demoScenario, accentColor = 'blue' }) {
  if (!Array.isArray(demoScenario) || demoScenario.length === 0) {
    return <DemoFallbackCN />;
  }

  const accent = demoAccentOfCN(accentColor);

  let rendered;
  try {
    rendered = demoScenario.map((block, i) => {
      const key = block._key || `b-${i}`;
      switch (block._type) {
        case 'userMessage':
          return <UserMessageCN key={key} accent={accent}>{block.body}</UserMessageCN>;
        case 'aiResponse':
          return <AIResponseCN key={key} accent={accent} {...block} />;
        case 'dataTable':
          return <DataTableCN key={key} accent={accent} {...block} />;
        case 'actionChips':
          return <ActionChipsCN key={key} items={block.items || []} />;
        default:
          console.warn('AIProductShowcaseDemoCN: 未知 block 类型', block._type);
          return null;
      }
    });
  } catch (err) {
    console.error('AIProductShowcaseDemoCN: 渲染出错', err);
    return <DemoFallbackCN />;
  }

  return (
    <div style={{ flex: 1, padding: 'clamp(16px, 2vw, 24px)', overflow: 'hidden' }}>
      <div style={{
        display: 'flex', flexDirection: 'column', gap: 24,
        maxWidth: 720, margin: '0 auto',
      }}>
        {rendered}
      </div>
    </div>
  );
}

function UserMessageCN({ children, accent }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div style={{
        background: accent.bubble,
        color: '#fff',
        borderRadius: 16,
        borderTopRightRadius: 4,
        padding: '14px 20px',
        maxWidth: '85%',
        boxShadow: `0 10px 15px -3px ${accent.bubbleShadow}`,
        fontSize: 14, lineHeight: 1.7,
      }}>
        {children}
      </div>
    </div>
  );
}

function AIResponseCN({ accent, eyebrow, prose, bullets = [], citations = [] }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
      <div style={{
        width: 32, height: 32, borderRadius: '50%',
        background: accent.ring,
        border: `1px solid ${accent.rule}`,
        boxShadow: `0 0 15px ${accent.ring}`,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, marginTop: 4,
      }}>
        <i data-lucide="activity" width="14" height="14" style={{ color: accent.dot, transform: 'scaleX(-1)' }} />
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{
          background: '#151921',
          border: '1px solid rgba(255,255,255,0.10)',
          borderRadius: 16,
          borderTopLeftRadius: 4,
          padding: 24,
          boxShadow: '0 20px 25px -5px rgba(0,0,0,0.10)',
        }}>
          {eyebrow && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.18em',
                color: accent.eyebrow,
              }}>{eyebrow}</span>
              <span aria-hidden="true" style={{
                flex: 1, height: 1,
                background: `linear-gradient(to right, ${accent.rule}, transparent)`,
              }} />
            </div>
          )}

          {prose && (
            <p style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.9, margin: '0 0 16px' }}>
              <ProseInlineCN text={prose} accent={accent} />
            </p>
          )}

          {bullets.length > 0 && (
            <ul style={{
              listStyle: 'none', padding: 0, margin: '0 0 24px',
              display: 'flex', flexDirection: 'column', gap: 12,
            }}>
              {bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span aria-hidden="true" style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: accent.dot, marginTop: 8, marginRight: 12, flexShrink: 0,
                  }} />
                  <span style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.7 }}>
                    {b.title && <strong style={{ color: '#fff' }}>{b.title}：</strong>}
                    <span><ProseInlineCN text={b.body || ''} accent={accent} /></span>
                  </span>
                </li>
              ))}
            </ul>
          )}

          {citations.length > 0 && (
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {citations.map((c, i) => (
                <CitationBadgeCN key={i} accent={accent} {...c} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProseInlineCN({ text, accent }) {
  if (!text) return null;
  const parts = String(text).split(/(\[[^\]]+\])/g);
  return parts.map((p, i) => {
    if (p.startsWith('[') && p.endsWith(']')) {
      return (
        <span key={i} style={{
          color: accent.highlight,
          fontWeight: 500,
          borderBottom: `1px solid ${accent.rule}`,
          padding: '0 2px',
          borderRadius: 2,
          cursor: 'pointer',
          transition: 'background 200ms ease',
        }}>
          {p.slice(1, -1)}
        </span>
      );
    }
    return <React.Fragment key={i}>{p}</React.Fragment>;
  });
}

function CitationBadgeCN({ label, type, accent }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      background: '#0F1117',
      border: '1px solid rgba(100,116,139,0.30)',
      borderRadius: 4,
      padding: '4px 8px',
      cursor: 'pointer',
      transition: 'border-color 200ms ease, background 200ms ease',
    }}>
      {type && (
        <span style={{
          fontSize: 10, fontWeight: 700,
          color: '#94a3b8',
          background: '#1e293b',
          padding: '2px 6px',
          borderRadius: 2,
        }}>{type}</span>
      )}
      <span style={{ fontSize: 12, color: '#cbd5e1' }}>{label}</span>
    </span>
  );
}

function DataTableCN({ accent, eyebrow, badge, columns = [], rows = [] }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
      <div style={{
        width: 32, height: 32, borderRadius: '50%',
        background: accent.ring,
        border: `1px solid ${accent.rule}`,
        boxShadow: `0 0 15px ${accent.ring}`,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, marginTop: 4,
      }}>
        <i data-lucide="bar-chart-3" width="14" height="14" style={{ color: accent.dot }} />
      </div>

      <div style={{ flex: 1 }}>
        <div style={{
          background: '#151921',
          border: '1px solid rgba(255,255,255,0.10)',
          borderRadius: 16,
          borderTopLeftRadius: 4,
          padding: 24,
          boxShadow: '0 20px 25px -5px rgba(0,0,0,0.10)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden="true" style={{
            position: 'absolute', top: 0, right: 0,
            width: 160, height: 160, borderRadius: '50%',
            background: accent.ring, filter: 'blur(60px)',
            pointerEvents: 'none',
          }} />

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 20, position: 'relative', zIndex: 1,
          }}>
            {eyebrow && (
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.18em',
                color: accent.eyebrow,
              }}>{eyebrow}</span>
            )}
            {badge && (
              <span style={{
                fontSize: 11,
                background: accent.ring,
                color: accent.highlight,
                padding: '4px 8px', borderRadius: 4,
                border: `1px solid ${accent.rule}`,
              }}>{badge}</span>
            )}
          </div>

          <div style={{ overflowX: 'auto', position: 'relative', zIndex: 1 }}>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.10)' }}>
                  {columns.map((col, i) => (
                    <th key={i} style={{
                      padding: '8px 16px 8px 0',
                      fontSize: 11, fontWeight: 500,
                      color: '#64748b',
                      fontFamily: 'var(--font-mono, monospace)',
                      letterSpacing: '0.1em',
                      whiteSpace: 'nowrap',
                    }}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} style={{
                    borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  }}>
                    {row.map((cell, j) => {
                      const isFirst = j === 0;
                      const isHighlight = cell && typeof cell === 'object' && cell.highlight;
                      const text = typeof cell === 'object' ? cell.value : cell;
                      return (
                        <td key={j} style={{
                          padding: '12px 16px 12px 0',
                          fontSize: 13,
                          fontWeight: isFirst ? 500 : 400,
                          color: isHighlight ? '#4ade80' : isFirst ? '#fff' : '#cbd5e1',
                          fontFamily: (cell && cell.mono) ? 'var(--font-mono, monospace)' : 'inherit',
                        }}>
                          {text}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionChipsCN({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', paddingLeft: 48 }}>
      {items.map((it, i) => (
        <button key={i}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: '#1A1F29',
            color: '#cbd5e1',
            fontSize: 12,
            padding: '6px 12px',
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.05)',
            cursor: 'pointer',
            fontFamily: 'var(--font-ui)',
            transition: 'background 200ms ease, border-color 200ms ease',
          }}>
          {it.icon && <i data-lucide={it.icon} width="12" height="12" />}
          <span>{it.label}</span>
        </button>
      ))}
    </div>
  );
}

function DemoFallbackCN() {
  return (
    <div style={{
      flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 'clamp(24px, 4vw, 48px)',
    }}>
      <div style={{ textAlign: 'center', maxWidth: 420, color: 'rgba(255,255,255,0.6)' }}>
        <div aria-hidden="true" style={{
          width: 56, height: 56, borderRadius: 14,
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.10)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 20,
        }}>
          <i data-lucide="image-off" width="24" height="24" style={{ color: '#64748b' }} />
        </div>
        <p style={{ margin: '0 0 16px', fontSize: 15, lineHeight: 1.7 }}>
          演示内容暂时无法加载。详情请见产品页。
        </p>
        <a href="#products"
          style={{
            display: 'inline-block',
            padding: '8px 16px', borderRadius: 8,
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: '#fff', textDecoration: 'none',
            fontSize: 12, fontWeight: 600,
          }}>
          查看产品页 →
        </a>
      </div>
    </div>
  );
}

if (typeof window !== 'undefined') {
  window.AIProductShowcaseDemoCN = AIProductShowcaseDemoCN;
}
