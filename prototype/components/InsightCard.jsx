/* InsightCard.jsx — Insight summary card (B3) */

function InsightCard({ slug, topic, title, lede, author, pitlReviewer, publishedAt, readingTime, href }) {
  // topic: { value, label } | author: { name, title } | pitlReviewer: { name, title } | publishedAt: ISO string
  const dateFmt = publishedAt
    ? new Date(publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : '';
  return (
    <a href={href} style={{
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid var(--border-1)',
      padding: 24,
      textDecoration: 'none',
      color: 'inherit',
      background: 'var(--bg-1)',
      transition: 'border-color 0.2s ease',
      height: '100%'
    }}>
      <div style={{
        fontFamily: 'var(--font-slogan)',
        fontSize: 12,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--brand-accent-700)',
        marginBottom: 12
      }}>
        Insight · {topic && topic.label}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 22,
        margin: '0 0 12px',
        lineHeight: 1.25,
        color: 'var(--fg-1)'
      }}>{title}</h3>

      <p style={{
        fontSize: 15,
        color: 'var(--fg-2)',
        lineHeight: 1.5,
        margin: '0 0 20px',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
      }}>
        {lede}
      </p>

      <div style={{
        marginTop: 'auto',
        paddingTop: 16,
        borderTop: '1px solid var(--border-1)',
        fontSize: 12,
        color: 'var(--fg-3)',
        lineHeight: 1.5
      }}>
        <div style={{ color: 'var(--fg-2)', marginBottom: 4 }}>
          {author && author.name}
          {pitlReviewer && pitlReviewer.name && (
            <span style={{ color: 'var(--fg-3)' }}>
              {' '}· Reviewed by {pitlReviewer.name}
            </span>
          )}
        </div>
        <div>
          {dateFmt}
          {readingTime && <span> · {readingTime}</span>}
        </div>
      </div>
    </a>
  );
}

window.InsightCard = InsightCard;
