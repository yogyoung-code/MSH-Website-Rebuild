/* =========================================================
   RagAnchorDiagramCN.jsx — /ai-platform 中文孪生 · 支柱 1
   ---------------------------------------------------------
   与 RagAnchorDiagram.jsx 结构一致，节点标签与 aria-label 改中文。
   提问 → 检索 → 生成 → 引用
   ========================================================= */

function RagAnchorDiagramCN({
  nodes = [
    { label: '提问', icon: 'help-circle' },
    { label: '检索', icon: 'search' },
    { label: '生成', icon: 'sparkles' },
    { label: '引用', icon: 'book-open-check' },
  ],
}) {
  return (
    <div role="img" aria-label="检索锚定式生成的架构：提问、检索、生成、引用"
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
          {i < nodes.length - 1 && (
            <span aria-hidden="true" style={{
              position: 'absolute',
              top: 22,
              left: '50%', right: '-50%',
              height: 1,
              background: 'var(--neutral-300)',
              zIndex: 0,
            }} />
          )}

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

          <span style={{
            marginTop: 10,
            fontFamily: 'var(--font-ui)',
            fontSize: 13, fontWeight: 600,
            color: 'var(--brand-primary-700)',
            letterSpacing: '0.04em',
          }}>{n.label}</span>

          {i < nodes.length - 1 && (
            <span aria-hidden="true" style={{
              position: 'absolute',
              top: 18, right: -6,
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

if (typeof window !== 'undefined') window.RagAnchorDiagramCN = RagAnchorDiagramCN;
