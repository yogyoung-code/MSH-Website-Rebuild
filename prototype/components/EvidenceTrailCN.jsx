/* =========================================================
   EvidenceTrailCN.jsx — 溯源链路（中文）
   ---------------------------------------------------------
   对应 EvidenceTrail.jsx：结构、状态枚举与栅格完全一致，
   仅状态徽标文案与「approved by」前缀改中文。
   ========================================================= */

function EvidenceTrailCN({ rows, eyebrow, title }) {
  if (!Array.isArray(rows) || rows.length === 0) {
    console.warn('EvidenceTrailCN: rows 为空');
    return null;
  }

  return (
    <section style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      background: 'var(--bg-1)'
    }}>
      <div style={{ maxWidth: 'var(--reading-max, 960px)', margin: '0 auto' }}>
        {(eyebrow || title) && (
          <div style={{ marginBottom: 'clamp(24px, 3vw, 40px)' }}>
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
                fontSize: 'clamp(24px, 3vw, 32px)',
                fontWeight: 600,
                color: 'var(--brand-primary-700)',
                lineHeight: 1.3,
                margin: 0
              }}>{title}</h2>
            )}
          </div>
        )}

        <ol style={{
          listStyle: 'none', padding: 0, margin: 0,
          borderTop: '1px solid var(--border-1)'
        }}>
          {rows.map((r, i) => (
            <li key={i} style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) auto',
              gap: 24,
              padding: '20px 0',
              borderBottom: '1px solid var(--border-1)',
              alignItems: 'flex-start'
            }}>
              <div>
                <div style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'clamp(16px, 1.5vw, 18px)',
                  fontWeight: 500,
                  color: 'var(--fg-1)',
                  lineHeight: 1.6
                }}>{r.claim}</div>

                {Array.isArray(r.trace) && r.trace.length > 0 && (
                  <div style={{
                    display: 'flex', flexWrap: 'wrap', gap: 6,
                    marginTop: 10
                  }}>
                    {r.trace.map((t, j) => (
                      <span key={j} style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        background: 'var(--bg-2)',
                        color: 'var(--fg-2)',
                        border: '1px solid var(--border-1)',
                        borderRadius: 'var(--radius-sm, 4px)',
                        padding: '3px 8px',
                        letterSpacing: '0.02em'
                      }}>{t}</span>
                    ))}
                  </div>
                )}

                {(r.source || r.year || r.approvedBy) && (
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--fg-3)',
                    marginTop: 10,
                    letterSpacing: '0.02em'
                  }}>
                    {[r.source, r.year, r.approvedBy && ('签核人：' + r.approvedBy)]
                      .filter(Boolean).join(' · ')}
                  </div>
                )}
              </div>

              <div style={{ paddingTop: 2 }}>
                <EvidenceBadgeCN status={r.status} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function LockGlyphCN({ size = 11 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="2.4"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
         style={{ display: 'inline-block', flexShrink: 0 }}>
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  );
}

function EvidenceBadgeCN({ status }) {
  const map = {
    'verified':       { bg: 'var(--success-100)', fg: 'var(--success-500)', mark: '✓',            label: '已核实' },
    'in-development': { bg: 'var(--warning-100)', fg: 'var(--warning-700)', mark: '◐',            label: '开发中' },
    'on-request':     { bg: 'var(--bg-3)',        fg: 'var(--fg-2)',        mark: <LockGlyphCN />, label: '按需提供' },
    'placeholder':    { bg: 'var(--warning-100)', fg: 'var(--warning-700)', mark: '·',            label: '占位待签' }
  };
  const s = map[status] || map['on-request'];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: s.bg, color: s.fg,
      fontFamily: 'var(--font-ui)',
      fontSize: 11, letterSpacing: '0.06em',
      fontWeight: 600,
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm, 4px)',
      whiteSpace: 'nowrap'
    }}>
      <span aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center' }}>{s.mark}</span>
      {s.label}
    </span>
  );
}

if (typeof window !== 'undefined') {
  window.EvidenceTrailCN = EvidenceTrailCN;
  window.EvidenceBadgeCN = EvidenceBadgeCN;
}
