/* CaseStudyHeroCN.jsx — 客户案例详情页 Hero（中文）
   对应 CaseStudyHero.jsx：结构、留白与 props 完全一致，
   仅「Client / Year」标签改中文，图表改指 CaseStudyHeroChartCN。 */

function CaseStudyHeroCN({ category, title, client, year, chart }) {
  return (
    <section style={{
      padding: '20px clamp(24px, 6vw, 96px) clamp(48px, 5vw, 80px)',
      maxWidth: 1280, margin: '0 auto'
    }}>
      <div style={{
        fontFamily: 'var(--font-slogan)',
        fontSize: 12, letterSpacing: '0.12em',
        color: 'var(--brand-primary-700)', marginBottom: 16
      }}>{category}</div>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(32px, 5vw, 56px)',
        lineHeight: 1.25, margin: '0 0 24px',
        color: 'var(--brand-primary-700)'
      }}>{title}</h1>
      <div style={{ fontSize: 16, color: 'var(--fg-3)' }}>
        客户：{client} · 年份：{year}
      </div>
      {chart && (
        <div style={{ maxWidth: 720, marginTop: 8 }}>
          {typeof chart === 'string'
            ? (typeof CaseStudyHeroChartCN !== 'undefined'
                ? <CaseStudyHeroChartCN kind={chart} />
                : null)
            : chart}
        </div>
      )}
    </section>
  );
}

window.CaseStudyHeroCN = CaseStudyHeroCN;
