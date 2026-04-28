/* CaseStudyCard.jsx — Case study summary card (B2) */

function CaseStudyCard({ slug, eyebrow, title, summary, metrics, href }) {
  // metrics: [{ value, label }] — only first metric shown in card preview
  const previewMetric = metrics && metrics[0];
  return (
    <a href={href} style={{
      display: 'block',
      border: '1px solid var(--border-1)',
      padding: 24,
      textDecoration: 'none',
      color: 'inherit',
      background: 'var(--bg-1)',
      transition: 'border-color 0.2s ease'
    }}>
      <div style={{
        fontFamily: 'var(--font-slogan)',
        fontSize: 12,
        letterSpacing: '0.12em',
        color: 'var(--brand-primary-700)',
        marginBottom: 12
      }}>{eyebrow}</div>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 22,
        margin: '0 0 12px',
        lineHeight: 1.2
      }}>{title}</h3>
      <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: '0 0 16px' }}>
        {summary}
      </p>
      {previewMetric && (
        <div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 32,
            color: 'var(--brand-primary-700)'
          }}>{previewMetric.value}</div>
          <div style={{ fontSize: 13, color: 'var(--fg-3)' }}>{previewMetric.label}</div>
        </div>
      )}
    </a>
  );
}

window.CaseStudyCard = CaseStudyCard;
