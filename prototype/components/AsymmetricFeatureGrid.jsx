/* =========================================================
   AsymmetricFeatureGrid.jsx — LAYOUT COMPONENT
   ---------------------------------------------------------
   Breaks the 3-up grid monotony documented in the UX critique.
   One large featured card + two stacked secondary cards.

   Use to replace identical 3-column grids on:
   - Homepage Cases
   - Homepage Insights
   - Cases index (when ≥3 cases exist)
   - Insights index (when ≥3 insights exist)

   <AsymmetricFeatureGrid
     featured="left"        // 'left' | 'right'
     eyebrow="LATEST WORK"
     title="Selected case studies"
     items={[
       { featured: true, render: () => <CaseStudyCard ... /> },
       { render: () => <CaseStudyCard ... /> },
       { render: () => <CaseStudyCard ... /> }
     ]}
   />

   Mobile: featured first, then stack.
   Pass exactly 3 items. Mark one as `featured: true`; the
   featured item renders in the larger slot.
   ========================================================= */

function AsymmetricFeatureGrid({ items, featured = 'left', eyebrow, title, lede }) {
  if (!Array.isArray(items) || items.length !== 3) {
    console.warn('AsymmetricFeatureGrid: expected exactly 3 items, got', items?.length);
    return null;
  }

  const featuredItem = items.find((i) => i.featured) || items[0];
  const others = items.filter((i) => i !== featuredItem);
  const featLeft = featured === 'left';

  return (
    <section style={{
      padding: 'clamp(56px, 7vw, 112px) clamp(24px, 6vw, 96px)',
      background: 'var(--bg-1)'
    }}>
      <div style={{ maxWidth: 'var(--container-max, 1280px)', margin: '0 auto' }}>
        {(eyebrow || title || lede) && (
          <div style={{
            marginBottom: 'clamp(32px, 4vw, 56px)',
            maxWidth: 720
          }}>
            {eyebrow && (
              <div style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 12, letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--brand-accent-700)',
                marginBottom: 12, fontWeight: 600
              }}>{eyebrow}</div>
            )}
            {title && (
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 3.4vw, 40px)',
                fontWeight: 600,
                color: 'var(--brand-primary-700)',
                lineHeight: 1.2,
                margin: '0 0 12px'
              }}>{title}</h2>
            )}
            {lede && (
              <p style={{
                fontSize: 18, color: 'var(--fg-2)',
                lineHeight: 1.55, margin: 0,
                maxWidth: 640
              }}>{lede}</p>
            )}
          </div>
        )}

        <div className="afg-grid" style={{
          display: 'grid',
          gridTemplateColumns: featLeft ? '1.4fr 1fr' : '1fr 1.4fr',
          gap: 'clamp(20px, 2.5vw, 32px)',
          alignItems: 'stretch'
        }}>
          {featLeft ? (
            <>
              <div className="afg-featured" style={featuredSlotStyle()}>
                {featuredItem.render ? featuredItem.render() : null}
              </div>
              <div style={stackSlotStyle()}>
                {others.map((it, i) => (
                  <div key={i} style={smallSlotStyle()}>
                    {it.render ? it.render() : null}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div style={stackSlotStyle()}>
                {others.map((it, i) => (
                  <div key={i} style={smallSlotStyle()}>
                    {it.render ? it.render() : null}
                  </div>
                ))}
              </div>
              <div className="afg-featured" style={featuredSlotStyle()}>
                {featuredItem.render ? featuredItem.render() : null}
              </div>
            </>
          )}
        </div>

        <style>{`
          @media (max-width: 900px) {
            .afg-grid {
              grid-template-columns: 1fr !important;
            }
            .afg-featured { order: -1; }
          }
        `}</style>
      </div>
    </section>
  );
}

function featuredSlotStyle() {
  return {
    background: 'var(--bg-1)',
    border: '1px solid var(--border-1)',
    borderRadius: 'var(--radius-lg, 12px)',
    padding: 'clamp(24px, 3vw, 40px)',
    display: 'flex', flexDirection: 'column',
    minHeight: 320
  };
}

function stackSlotStyle() {
  return {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gap: 'clamp(20px, 2.5vw, 32px)'
  };
}

function smallSlotStyle() {
  return {
    background: 'var(--bg-1)',
    border: '1px solid var(--border-1)',
    borderRadius: 'var(--radius-lg, 12px)',
    padding: 'clamp(20px, 2vw, 28px)',
    display: 'flex', flexDirection: 'column'
  };
}

if (typeof window !== 'undefined') window.AsymmetricFeatureGrid = AsymmetricFeatureGrid;
