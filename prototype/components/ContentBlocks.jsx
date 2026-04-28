/* ContentBlocks.jsx — Atomic content units (B1+) */

function ProseBlock({ heading, children, anchor }) {
  return (
    <section id={anchor} style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      maxWidth: 1280,
      margin: '0 auto'
    }}>
      {heading && (
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 4vw, 40px)',
          margin: '0 0 24px',
          lineHeight: 1.2
        }}>{heading}</h2>
      )}
      <div style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--fg-2)' }}>
        {children}
      </div>
    </section>
  );
}

function TwoColumn({ left, right, ratio = '1fr 1fr', anchor }) {
  return (
    <section id={anchor} style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      maxWidth: 1280,
      margin: '0 auto'
    }}>
      <div className="two-col-grid" style={{
        display: 'grid',
        gridTemplateColumns: ratio,
        gap: 'clamp(24px, 4vw, 64px)'
      }}>
        <div>{left}</div>
        <div>{right}</div>
      </div>
    </section>
  );
}

function StatStrip({ items, anchor }) {
  // items: [{ value, label, source?, year? }, ...]
  return (
    <section id={anchor} style={{
      padding: 'clamp(32px, 4vw, 64px) clamp(24px, 6vw, 96px)',
      background: 'var(--brand-primary-50, #f5f7fa)',
      borderTop: '1px solid var(--border-1)',
      borderBottom: '1px solid var(--border-1)'
    }}>
      <div className="stat-strip-grid" style={{
        maxWidth: 1280,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: `repeat(${items.length}, 1fr)`,
        gap: 'clamp(24px, 4vw, 48px)'
      }}>
        {items.map((it, i) => (
          <div key={i} style={{ textAlign: 'left' }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              color: 'var(--brand-primary-700)',
              lineHeight: 1
            }}>{it.value}</div>
            <div style={{ fontSize: 14, color: 'var(--fg-2)', marginTop: 8 }}>{it.label}</div>
            {(it.source || it.year) && (
              <div style={{ fontSize: 12, color: 'var(--fg-3)', marginTop: 4 }}>
                {it.source}{it.source && it.year ? ' · ' : ''}{it.year}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceList({ tier = 'verified', items, anchor }) {
  // items: [{ statement, source, year, approvedBy }]
  // tier: 'verified' | 'inDevelopment' | 'onRequest'
  const tierConfig = {
    verified:      { label: 'VERIFIED',       color: 'var(--brand-success-600, #047857)' },
    inDevelopment: { label: 'IN DEVELOPMENT', color: 'var(--brand-warn-600, #b45309)' },
    onRequest:     { label: 'ON REQUEST',     color: 'var(--fg-3)' },
  }[tier];
  return (
    <section id={anchor} style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      maxWidth: 1280,
      margin: '0 auto'
    }}>
      <div style={{
        display: 'inline-block',
        padding: '4px 12px',
        background: tierConfig.color,
        color: '#fff',
        fontFamily: 'var(--font-slogan)',
        fontSize: 12,
        letterSpacing: '0.12em',
        marginBottom: 24
      }}>
        {tierConfig.label}
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((it, i) => (
          <li key={i} style={{
            padding: '20px 0',
            borderTop: i === 0 ? '1px solid var(--border-1)' : 'none',
            borderBottom: '1px solid var(--border-1)'
          }}>
            <div style={{ fontSize: 17, lineHeight: 1.5, color: 'var(--fg-1)' }}>
              {it.statement}
            </div>
            <div style={{ fontSize: 13, color: 'var(--fg-3)', marginTop: 8 }}>
              {it.source} · {it.year}
              {it.approvedBy && <> · approved by {it.approvedBy}</>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

window.ProseBlock = ProseBlock;
window.TwoColumn = TwoColumn;
window.StatStrip = StatStrip;
window.EvidenceList = EvidenceList;
