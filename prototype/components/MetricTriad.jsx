/* MetricTriad.jsx — 3-metric strip for case study (B2) */

function MetricTriad({ metrics }) {
  if (!metrics || metrics.length !== 3) {
    console.warn('MetricTriad: expected exactly 3 metrics, got', metrics);
  }
  return (
    <section style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      background: 'var(--brand-primary-50, #f5f7fa)',
      borderTop: '1px solid var(--border-1)',
      borderBottom: '1px solid var(--border-1)'
    }}>
      <div className="stat-strip-grid" style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(24px, 4vw, 64px)'
      }}>
        {metrics.map((m, i) => (
          <div key={i}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 64px)',
              color: 'var(--brand-primary-700)', lineHeight: 1
            }}>{m.value}</div>
            <div style={{ fontSize: 14, color: 'var(--fg-2)', marginTop: 12 }}>{m.label}</div>
            <div style={{ fontSize: 12, color: 'var(--fg-3)', marginTop: 4 }}>
              Source: {m.source} · {m.year}{m.approvedBy && <> · approved by {m.approvedBy}</>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.MetricTriad = MetricTriad;
