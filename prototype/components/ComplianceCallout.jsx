/* ComplianceCallout.jsx — Compliance boundaries (B1) */

function ComplianceCallout({ doNotClaim, doClaim }) {
  return (
    <section style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      maxWidth: 1280,
      margin: '0 auto'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(24px, 4vw, 64px)',
        background: 'var(--bg-2, #fafbfc)',
        padding: 'clamp(24px, 4vw, 48px)',
        border: '1px solid var(--border-1)'
      }} className="two-col-grid">
        <div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            margin: '0 0 16px',
            color: 'var(--brand-warn-700, #92400e)'
          }}>What we do not claim</h3>
          <ul style={{ paddingLeft: 20, margin: 0, color: 'var(--fg-2)' }}>
            {doNotClaim.map((p, i) => <li key={i} style={{ margin: '8px 0' }}>{p}</li>)}
          </ul>
        </div>
        <div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            margin: '0 0 16px',
            color: 'var(--brand-success-700, #065f46)'
          }}>What we do claim, with audit trails</h3>
          <ul style={{ paddingLeft: 20, margin: 0, color: 'var(--fg-2)' }}>
            {doClaim.map((p, i) => <li key={i} style={{ margin: '8px 0' }}>{p}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

window.ComplianceCallout = ComplianceCallout;
