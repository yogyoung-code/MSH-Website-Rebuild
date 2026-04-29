/* =========================================================
   MetricStrip.jsx — SIGNATURE / CONSOLIDATED COMPONENT
   ---------------------------------------------------------
   STRICT-USE successor to MetricTriad.

   USAGE RULE (enforced by convention, see SIGNATURE.md):
   ✓ Homepage hero (variant="featured")
   ✓ About page (variant="featured")
   ✓ Case-study individual page (variant="inline", once, after Outcome)
   ✗ NOT on AI Platform, Solution pages, Pilot pages, Insights, Cases index
   ✗ NEVER more than once per page

   Why: the previous MetricTriad pattern repeated the same
   3.33M+ / AI+PITL / 2415.HK trio on 8+ pages, creating an
   "AI-slop" identical-trio fingerprint and visual amnesia.

   <MetricStrip
     variant="featured"           // 'featured' | 'inline'
     metrics={[
       { value: '3.33M+', label: 'physicians in our network',
         source: 'Internal physician registry', year: '2025',
         approvedBy: 'IR' },
       ...
     ]}
   />

   Each metric MUST include: value, label, source, year.
   approvedBy is optional. The source/year/approvedBy renders
   as a single annotated line — no orphan numbers.
   ========================================================= */

function MetricStrip({ metrics, variant = 'featured', eyebrow }) {
  if (!Array.isArray(metrics) || metrics.length < 2 || metrics.length > 4) {
    console.warn('MetricStrip: expected 2–4 metrics, got', metrics?.length);
  }

  // Refuse silently-anonymous claims — every stat needs a source.
  const sanitized = (metrics || []).map((m) => ({
    ...m,
    source: m.source || '⚑ source missing',
    year: m.year || '⚑ year missing'
  }));

  const featured = variant === 'featured';

  return (
    <section style={{
      padding: featured
        ? 'clamp(56px, 7vw, 112px) clamp(24px, 6vw, 96px)'
        : 'clamp(40px, 5vw, 72px) clamp(24px, 6vw, 96px)',
      background: featured ? 'var(--grad-wash)' : 'var(--bg-1)',
      borderTop: '1px solid var(--border-1)',
      borderBottom: '1px solid var(--border-1)'
    }}>
      <div style={{ maxWidth: 'var(--container-max, 1280px)', margin: '0 auto' }}>
        {eyebrow && (
          <div style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 12, letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--brand-accent-700)',
            marginBottom: 24, fontWeight: 600
          }}>{eyebrow}</div>
        )}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${sanitized.length}, 1fr)`,
          gap: 'clamp(20px, 3vw, 48px)',
          alignItems: 'start'
        }}>
          {sanitized.map((m, i) => (
            <div key={i} style={{
              borderLeft: '2px solid var(--brand-accent-500)',
              paddingLeft: 'clamp(16px, 2vw, 24px)'
            }}>
              <div style={{
                fontFamily: 'var(--font-ui)',
                fontSize: featured ? 'clamp(40px, 5.5vw, 64px)' : 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 600,
                color: 'var(--brand-primary-700)',
                lineHeight: 1.05,
                letterSpacing: '-0.01em'
              }}>{m.value}</div>
              <div style={{
                fontSize: featured ? 16 : 14,
                color: 'var(--fg-2)',
                marginTop: 12,
                lineHeight: 1.4,
                maxWidth: 28 * (featured ? 16 : 14) / 2 // ~28ch
              }}>{m.label}</div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--fg-3)',
                marginTop: 12,
                letterSpacing: '0.02em',
                lineHeight: 1.5
              }}>
                {m.source} · {m.year}
                {m.approvedBy && <> · approved by {m.approvedBy}</>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          section[data-component="MetricStrip"] > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

if (typeof window !== 'undefined') window.MetricStrip = MetricStrip;
