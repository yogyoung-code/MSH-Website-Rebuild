/* AuthorMetaCN.jsx — 中文版作者 + 医生在环（PITL）审稿人 + 日期 + 阅读时长 */
/* 与 AuthorMeta.jsx 一一对应，仅文案与日期格式本地化；props 完全一致。 */

function AuthorMetaCN({ author, pitlReviewer, publishedAt, readingTime }) {
  // author: { name, title } | pitlReviewer: { name, title } | publishedAt: ISO string | readingTime: string
  const dateFmt = publishedAt
    ? (function () {
        const d = new Date(publishedAt);
        return d.getFullYear() + ' 年 ' + (d.getMonth() + 1) + ' 月 ' + d.getDate() + ' 日';
      })()
    : '';
  return (
    <div style={{
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      color: 'var(--fg-2)',
      lineHeight: 1.6,
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px 12px',
      alignItems: 'baseline'
    }}>
      {author && (
        <span>
          <strong style={{ color: 'var(--fg-1)', fontWeight: 600 }}>{author.name}</strong>
          {author.title && <span style={{ color: 'var(--fg-3)' }}>，{author.title}</span>}
        </span>
      )}

      {pitlReviewer && (
        <>
          <span aria-hidden="true" style={{ color: 'var(--fg-3)' }}>·</span>
          <span>
            审稿 <strong style={{ color: 'var(--fg-1)', fontWeight: 600 }}>{pitlReviewer.name}</strong>
            {pitlReviewer.title && <span style={{ color: 'var(--fg-3)' }}>，{pitlReviewer.title}</span>}
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

window.AuthorMetaCN = AuthorMetaCN;
