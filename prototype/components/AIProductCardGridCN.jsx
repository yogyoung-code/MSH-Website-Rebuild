/* =========================================================
   AIProductCardGridCN.jsx — /ai-platform 中文孪生 · Act 2
   ---------------------------------------------------------
   与 AIProductCardGrid.jsx 结构一致，只把卡片换成 AIProductCardCN。
   ========================================================= */

function AIProductCardGridCN({ products, comingSoonSlot }) {
  if (!Array.isArray(products) || products.length === 0) {
    if (!comingSoonSlot) return null;
  }

  const Card = (typeof window !== 'undefined') ? window.AIProductCardCN : null;

  return (
    <div className="ai-product-card-grid" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 'clamp(16px, 2vw, 24px)',
      width: '100%',
    }}>
      {Array.isArray(products) && products.map((p, i) => (
        Card
          ? <Card key={p.slug || i} product={p} position={i + 1} />
          : <div key={p.slug || i} style={{
              padding: 24, border: '1px dashed var(--border-2)', borderRadius: 16,
              color: 'var(--fg-3)', fontFamily: 'var(--font-mono, monospace)', fontSize: 12,
            }}>AIProductCardCN 未加载 — slug: {p.slug}</div>
      ))}
      {comingSoonSlot}
    </div>
  );
}

if (typeof window !== 'undefined') window.AIProductCardGridCN = AIProductCardGridCN;
