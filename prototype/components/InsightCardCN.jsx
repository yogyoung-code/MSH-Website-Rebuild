/* InsightCardCN.jsx — 中文版洞察卡片（B3 中文孪生） */
/* 结构与 InsightCard.jsx 一一对应；topic.value 不翻译，仅 label 中文化。 */

function InsightCardCN({ slug, topic, title, lede, author, pitlReviewer, publishedAt, readingTime, href }) {
  const m = typeof publishedAt === 'string' ? publishedAt.match(/^(\d{4})-(\d{2})-(\d{2})/) : null;
  const dateFmt = m ? `${Number(m[1])} 年 ${Number(m[2])} 月 ${Number(m[3])} 日` : '';
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
        洞察 · {topic && topic.label}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 22,
        margin: '0 0 12px',
        lineHeight: 1.35,
        color: 'var(--fg-1)'
      }}>{title}</h3>

      <p style={{
        fontSize: 15,
        color: 'var(--fg-2)',
        lineHeight: 1.6,
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
        lineHeight: 1.6
      }}>
        <div style={{ color: 'var(--fg-2)', marginBottom: 4 }}>
          {author && author.name}
          {pitlReviewer && pitlReviewer.name && (
            <span style={{ color: 'var(--fg-3)' }}>
              {' '}· 审稿 {pitlReviewer.name}
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

window.InsightCardCN = InsightCardCN;
