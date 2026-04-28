/* AuthorMeta.jsx — Single-line author + PITL reviewer + date + reading time (B3) */
/* Spec: Copy Deck v4.2 §8.1.3 — used on Insight detail page Hero. */

function AuthorMeta({ author, pitlReviewer, publishedAt, readingTime }) {
  // author: { name, title } | pitlReviewer: { name, title } | publishedAt: ISO string | readingTime: string
  const dateFmt = publishedAt
    ? new Date(publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : '';
  return (
    <div style={{
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      color: 'var(--fg-2)',
      lineHeight: 1.5,
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px 12px',
      alignItems: 'baseline'
    }}>
      {author && (
        <span>
          <strong style={{ color: 'var(--fg-1)', fontWeight: 600 }}>{author.name}</strong>
          {author.title && <span style={{ color: 'var(--fg-3)' }}>, {author.title}</span>}
        </span>
      )}

      {pitlReviewer && (
        <>
          <span aria-hidden="true" style={{ color: 'var(--fg-3)' }}>·</span>
          <span>
            Reviewed by <strong style={{ color: 'var(--fg-1)', fontWeight: 600 }}>{pitlReviewer.name}</strong>
            {pitlReviewer.title && <span style={{ color: 'var(--fg-3)' }}>, {pitlReviewer.title}</span>}
          </span>
        </>
      )}

      {dateFmt && (
        <>
          <span aria-hidden="true" style={{ color: 'var(--fg-3)' }}>·</span>
          <time dateTime={publishedAt}>{dateFmt}</time>
        </>
      )}

      {readingTime && (
        <>
          <span aria-hidden="true" style={{ color: 'var(--fg-3)' }}>·</span>
          <span>{readingTime}</span>
        </>
      )}
    </div>
  );
}

window.AuthorMeta = AuthorMeta;
