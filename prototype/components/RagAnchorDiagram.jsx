/* =========================================================
   RagAnchorDiagram.jsx — /ai-platform v3.0 · Act 3 Pillar 1
   ---------------------------------------------------------
   Spec §4.1 row 1 — Retrieval-Anchored Generation 架构小图。
   Query → Retrieval → Generation → Citation 四节点串联,
   inline SVG, 现有 token 配色, 无第三方依赖。

   Plan task 10 step 2.
   ========================================================= */

function RagAnchorDiagram({
  nodes = [
    { label: 'Query',      icon: 'help-circle' },
    { label: 'Retrieval',  icon: 'search' },
    { label: 'Generation', icon: 'sparkles' },
    { label: 'Citation',   icon: 'book-open-check' },
  ],
}) {
  return (
    <div role="img" aria-label="Retrieval-Anchored Generation architecture: query, retrieval, generation, citation"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${nodes.length}, minmax(0, 1fr))`,
        alignItems: 'center',
        gap: 0,
        margin: 'clamp(16px, 2vw, 24px) 0',
        position: 'relative',
      }}
    >
      {nodes.map((n, i) => (
        <div key={i} style={{
          position: 'relative',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 8px',
        }}>
          {/* Connector line (between nodes) */}
          {i < nodes.length - 1 && (
            <span aria-hidden="true" style={{
              position: 'absolute',
              top: 22, /* center on icon (44/2) */
              left: '50%', right: '-50%',
              height: 1,
              background: 'var(--neutral-300)',
              zIndex: 0,
            }} />
          )}

          {/* Node icon */}
          <span aria-hidden="true" style={{
            position: 'relative', zIndex: 1,
            width: 44, height: 44, borderRadius: 12,
            background: 'var(--brand-accent-100)',
            color: 'var(--brand-accent-700)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            border: '1px solid var(--brand-accent-500)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
          }}>
            <i data-lucide={n.icon} width="20" height="20" />
          </span>

          {/* Label */}
          <span style={{
            marginTop: 10,
            fontFamily: 'var(--font-ui)',
            fontSize: 12, fontWeight: 600,
            color: 'var(--brand-primary-700)',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}>{n.label}</span>

          {/* Arrow head (between nodes) */}
          {i < nodes.length - 1 && (
            <span aria-hidden="true" style={{
              position: 'absolute',
              top: 18, right: -6, /* sit on the line */
              width: 0, height: 0,
              borderTop: '4px solid transparent',
              borderBottom: '4px solid transparent',
              borderLeft: '6px solid var(--neutral-300)',
              zIndex: 1,
            }} />
          )}
        </div>
      ))}
    </div>
  );
}

if (typeof window !== 'undefined') window.RagAnchorDiagram = RagAnchorDiagram;
