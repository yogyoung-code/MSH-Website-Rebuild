/* LegalProseCN.jsx — /legal/*-cn.html 中文法律条款渲染器
   ------------------------------------------------------------------
   与 components/LegalProse.jsx 一一对应，仅本地化界面文案与日期格式：
     Last updated → 最近更新    On this page → 本页导航
     toLocaleDateString('en-US') → toLocaleDateString('zh-CN')
   条款正文不做任何加工：sections 传进来什么就渲染什么。

   Props（与 LegalProse 同名同义）：
     title / eyebrow / lastUpdated / lede / sections / pendingNotice
     sections — [{ id, heading, paragraphs:[string|node], note? }]

   渲染规则：
   - 每个小节 H2 带 id，锚点与英文版逐一对应（法律页有深链引用，不得改动）。
   - 顶部目录由 sections 自动生成。
   - 以「[草稿 —」开头的字符串段落按待签核占位渲染（虚线警示框），
     方便法务一眼看出哪些小节的中文文案尚未到位。
   ------------------------------------------------------------------ */

function LegalDraftMarkCN({ text }) {
  return (
    <span style={{
      display: 'block',
      padding: '10px 14px',
      background: 'rgba(245, 158, 11, 0.08)',
      border: '1px dashed var(--brand-warn-600, #b45309)',
      color: 'var(--brand-warn-600, #b45309)',
      fontSize: 14,
      lineHeight: 1.6
    }}>{text}</span>
  );
}

function LegalProseCN({ title, eyebrow, lastUpdated, lede, sections, pendingNotice }) {
  const dateFmt = lastUpdated
    ? new Date(lastUpdated).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
    : '待法务签核';

  return (
    <article style={{
      maxWidth: 1280,
      margin: '0 auto',
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px) 64px'
    }}>
      {/* Header */}
      <div style={{
        fontFamily: 'var(--font-slogan)',
        fontSize: 12,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--brand-accent-700)',
        marginBottom: 12
      }}>{eyebrow}</div>

      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(32px, 4.5vw, 48px)',
        lineHeight: 1.2,
        color: 'var(--brand-primary-700)',
        margin: '0 0 16px'
      }}>{title}</h1>

      <p style={{ fontSize: 13, color: 'var(--fg-3)', margin: '0 0 32px' }}>
        最近更新：<time dateTime={lastUpdated || ''}>{dateFmt}</time>
      </p>

      {/* 待签核提示条 */}
      {pendingNotice && (
        <div style={{
          padding: '14px 18px',
          background: 'rgba(245, 158, 11, 0.08)',
          border: '1px dashed var(--brand-warn-600, #b45309)',
          fontSize: 14,
          color: 'var(--fg-1)',
          lineHeight: 1.5,
          marginBottom: 32
        }}>
          <strong style={{ color: 'var(--brand-warn-600, #b45309)' }}>注意 / Notice</strong>
          <span style={{ display: 'block', marginTop: 4 }}>{pendingNotice}</span>
        </div>
      )}

      {/* 导语 */}
      {lede && (
        <p style={{
          fontSize: 17,
          lineHeight: 1.6,
          color: 'var(--fg-1)',
          margin: '0 0 32px',
          borderLeft: '3px solid var(--brand-primary-500)',
          paddingLeft: 16
        }}>{lede}</p>
      )}

      {/* 本页导航 */}
      {sections && sections.length > 1 && (
        <nav aria-label="本页导航" style={{
          background: 'var(--bg-2)',
          padding: '16px 20px',
          marginBottom: 32,
          fontSize: 13
        }}>
          <div style={{
            fontFamily: 'var(--font-slogan)',
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--fg-3)',
            marginBottom: 8
          }}>本页导航</div>
          <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 1.8 }}>
            {sections.map((s, i) => (
              <li key={s.id || i}>
                <a href={`#${s.id}`} style={{ color: 'var(--fg-link)', textDecoration: 'none' }}>
                  {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* 条款正文 */}
      {sections.map((s, i) => (
        <section key={s.id || i} id={s.id} style={{ marginBottom: 40 }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px, 2.5vw, 28px)',
            color: 'var(--brand-primary-700)',
            lineHeight: 1.3,
            margin: '0 0 16px',
            scrollMarginTop: 24
          }}>{s.heading}</h2>

          {Array.isArray(s.paragraphs) && s.paragraphs.map((p, j) => (
            <div key={j} style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: 'var(--fg-1)',
              margin: '0 0 16px'
            }}>
              {typeof p === 'string'
                ? (p.indexOf('[草稿 —') === 0 ? <LegalDraftMarkCN text={p} /> : p)
                : p}
            </div>
          ))}

          {s.note && (
            <p style={{
              fontSize: 13,
              color: 'var(--fg-3)',
              fontStyle: 'italic',
              lineHeight: 1.5,
              margin: '12px 0 0'
            }}>{s.note}</p>
          )}
        </section>
      ))}
    </article>
  );
}

window.LegalProseCN = LegalProseCN;
window.LegalDraftMarkCN = LegalDraftMarkCN;
