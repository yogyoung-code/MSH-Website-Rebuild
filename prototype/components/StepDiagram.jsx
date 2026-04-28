/* StepDiagram.jsx — 4-step PITL process (B1) */

function StepDiagram({ steps }) {
  // steps: [{ num, title, ai, physician }]
  return (
    <section style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      maxWidth: 1280,
      margin: '0 auto'
    }}>
      <div className="step-grid" style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
        gap: 'clamp(16px, 2vw, 32px)',
        position: 'relative'
      }}>
        {steps.map((s, i) => (
          <div key={i} style={{
            border: '1px solid var(--border-1)',
            padding: 24,
            background: 'var(--bg-1)'
          }}>
            <div style={{
              fontFamily: 'var(--font-slogan)',
              fontSize: 12,
              letterSpacing: '0.12em',
              color: 'var(--brand-primary-700)',
              marginBottom: 12
            }}>STEP {s.num}</div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 22,
              margin: '0 0 16px',
              lineHeight: 1.2
            }}>{s.title}</h3>
            {s.ai && (
              <div style={{ fontSize: 14, color: 'var(--fg-2)', marginBottom: 8 }}>
                <strong>AI:</strong> {s.ai}
              </div>
            )}
            {s.physician && (
              <div style={{ fontSize: 14, color: 'var(--fg-2)' }}>
                <strong>Physician:</strong> {s.physician}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

window.StepDiagram = StepDiagram;
