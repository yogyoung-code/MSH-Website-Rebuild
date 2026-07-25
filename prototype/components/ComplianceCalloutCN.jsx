/* =========================================================
   ComplianceCalloutCN.jsx — 合规边界双列（中文）
   ---------------------------------------------------------
   对应 ComplianceCallout.jsx，口径见 Copy Deck v4.2 §1.6.5。
   左列「我们不作的宣称」按禁词清单逐条以否定句表述，
   不在页面上复述禁用词本身（styleguide §4 硬约束）。
   ========================================================= */

function ComplianceCalloutCN({ doNotClaim, doClaim, notTitle, claimTitle }) {
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
            lineHeight: 1.3,
            color: 'var(--brand-warn-700, #92400e)'
          }}>{notTitle || '我们不作的宣称'}</h3>
          <ul style={{ paddingLeft: 20, margin: 0, color: 'var(--fg-2)', fontSize: 14, lineHeight: 1.7 }}>
            {(doNotClaim || []).map((p, i) => <li key={i} style={{ margin: '8px 0' }}>{p}</li>)}
          </ul>
        </div>
        <div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            margin: '0 0 16px',
            lineHeight: 1.3,
            color: 'var(--brand-success-700, #065f46)'
          }}>{claimTitle || '我们作出的宣称，并附审计留痕'}</h3>
          <ul style={{ paddingLeft: 20, margin: 0, color: 'var(--fg-2)', fontSize: 14, lineHeight: 1.7 }}>
            {(doClaim || []).map((p, i) => <li key={i} style={{ margin: '8px 0' }}>{p}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

if (typeof window !== 'undefined') window.ComplianceCalloutCN = ComplianceCalloutCN;
