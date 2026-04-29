/* =========================================================
   AIProductCardGrid.jsx — /ai-platform v3.0 · Act 2 Card Grid
   ---------------------------------------------------------
   CSS Grid auto-fit responsive 容器。 Spec §3.3 — 默认 2 列, 超过 3 个产品
   自动 3 列, 移动端单列。 容纳 N 张 AIProductCard + 末尾 1 张
   ComingSoonCard 占位 (spec §3.3 必有占位卡)。

   Plan task 7 step 3.

   Usage:
     <AIProductCardGrid
        products={[...]}
        comingSoonSlot={<ComingSoonCard />}
     />
   ========================================================= */

function AIProductCardGrid({ products, comingSoonSlot }) {
  if (!Array.isArray(products) || products.length === 0) {
    // Spec §3.7 row 1 — 整个 Grid 在 0 产品时隐藏
    if (!comingSoonSlot) return null;
  }

  const Card = (typeof window !== 'undefined') ? window.AIProductCard : null;

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
            }}>AIProductCard not loaded — slug: {p.slug}</div>
      ))}
      {comingSoonSlot}
    </div>
  );
}

if (typeof window !== 'undefined') window.AIProductCardGrid = AIProductCardGrid;
