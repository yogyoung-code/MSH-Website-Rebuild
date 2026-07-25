/* =========================================================
   TrustArchitectureCN.jsx — 三支柱信任架构（中文）
   ---------------------------------------------------------
   对应 TrustArchitecture.jsx。三支柱顺序与英文版一致：
     支柱 1  检索锚定式生成（RagAnchorDiagramCN）
     支柱 2  医生在环 PITL（PitlRibbonCN variant='full'）
     支柱 3  审计留痕默认开启（EvidenceTrailCN）
   ========================================================= */

const PILLARS_CN = [
  {
    num: 1,
    title: '检索锚定式生成',
    oneLiner:
      'AI 不编造医学事实。每一条产出都锚定到一份可引用的来源——指南、药品说明书、登记研究，或同行评议论文。',
  },
  {
    num: 2,
    title: '医生在环（Physician-in-the-Loop, PITL）',
    oneLiner: '每一节都由具名医生签核。AI 提出方案，人来定夺。',
  },
  {
    num: 3,
    title: '审计留痕默认开启',
    oneLiner:
      '每一条主张都附带来源、审阅人、时间戳与修改记录。合作项目中可导出。',
  },
];

function TrustArchitectureCN({
  eyebrow = '第三幕 · 方法',
  title = '我们如何让医疗 AI 可被问责。',
  pitlSteps,
  evidenceRows,
}) {
  return (
    <section style={{
      padding: 'clamp(64px, 8vw, 128px) clamp(24px, 6vw, 96px)',
      background: 'var(--bg-1)',
      borderTop: '1px solid var(--border-1)',
    }}>
      <div style={{ maxWidth: 'var(--container-max, 1280px)', margin: '0 auto' }}>
        <div style={{ marginBottom: 'clamp(40px, 5vw, 64px)', maxWidth: 720 }}>
          {eyebrow && (
            <div style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 12, letterSpacing: '0.14em',
              color: 'var(--brand-accent-700)',
              marginBottom: 12, fontWeight: 600,
            }}>{eyebrow}</div>
          )}
          {title && (
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.4vw, 40px)',
              fontWeight: 600,
              color: 'var(--brand-primary-700)',
              lineHeight: 1.3,
              margin: 0,
              letterSpacing: '-0.01em',
            }}>{title}</h2>
          )}
        </div>

        <div className="trust-arch-pillars" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(20px, 2.4vw, 32px)',
          marginBottom: 'clamp(40px, 5vw, 64px)',
        }}>
          {PILLARS_CN.map((p) => (
            <PillarSummaryCN key={p.num} {...p} />
          ))}
        </div>

        {/* 支柱 1 详解 */}
        <PillarBlockCN
          eyebrow="支柱 1 · 检索锚定式生成"
          title="每一个回答都锚定到一份可引用的来源。"
          oneLiner={PILLARS_CN[0].oneLiner}
        >
          {(typeof window !== 'undefined' && window.RagAnchorDiagramCN)
            ? <window.RagAnchorDiagramCN />
            : <DiagramFallbackCN />}
        </PillarBlockCN>

        {/* 支柱 2 详解 */}
        {pitlSteps && (typeof window !== 'undefined' && window.PitlRibbonCN) && (
          <div style={{ margin: 'clamp(24px, 3vw, 40px) calc(-1 * clamp(24px, 6vw, 96px))' }}>
            <window.PitlRibbonCN
              eyebrow="支柱 2 · 医生在环（Physician-in-the-Loop, PITL）"
              title="每一节都由具名医生签核。"
              steps={pitlSteps}
            />
          </div>
        )}

        {/* 支柱 3 详解 */}
        {evidenceRows && (typeof window !== 'undefined' && window.EvidenceTrailCN) && (
          <div style={{ marginTop: 'clamp(24px, 3vw, 40px)' }}>
            <window.EvidenceTrailCN
              eyebrow="支柱 3 · 审计留痕默认开启"
              title="每一条主张都带着它的溯源链路一起交付。"
              rows={evidenceRows}
            />
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .trust-arch-pillars {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </section>
  );
}

function PillarSummaryCN({ num, title, oneLiner }) {
  return (
    <div style={{
      background: 'var(--bg-2, var(--neutral-50))',
      border: '1px solid var(--border-1)',
      borderRadius: 14,
      padding: 'clamp(20px, 2.4vw, 28px)',
      display: 'flex', flexDirection: 'column',
      gap: 12,
    }}>
      <div style={{
        fontFamily: 'var(--font-mono, var(--font-ui))',
        fontSize: 11, letterSpacing: '0.14em',
        color: 'var(--brand-accent-700)',
        fontWeight: 700,
      }}>支柱 {num}</div>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(18px, 2.2vw, 22px)',
        fontWeight: 600,
        color: 'var(--brand-primary-700)',
        margin: 0,
        lineHeight: 1.4,
      }}>{title}</h3>
      <p style={{
        margin: 0,
        fontSize: 14, lineHeight: 1.7,
        color: 'var(--fg-2)',
      }}>{oneLiner}</p>
    </div>
  );
}

function PillarBlockCN({ eyebrow, title, oneLiner, children }) {
  return (
    <div style={{
      background: 'var(--bg-1)',
      border: '1px solid var(--border-1)',
      borderRadius: 16,
      padding: 'clamp(24px, 3vw, 40px)',
      marginTop: 'clamp(24px, 3vw, 40px)',
    }}>
      <div style={{
        fontFamily: 'var(--font-ui)',
        fontSize: 11, letterSpacing: '0.14em',
        color: 'var(--brand-accent-700)',
        fontWeight: 700, marginBottom: 8,
      }}>{eyebrow}</div>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(20px, 2.4vw, 26px)',
        fontWeight: 600,
        color: 'var(--brand-primary-700)',
        margin: '0 0 12px',
        lineHeight: 1.4,
      }}>{title}</h3>
      {oneLiner && (
        <p style={{
          margin: '0 0 24px', maxWidth: 720,
          fontSize: 14, lineHeight: 1.7,
          color: 'var(--fg-2)',
        }}>{oneLiner}</p>
      )}
      {children}
    </div>
  );
}

function DiagramFallbackCN() {
  return (
    <div style={{
      padding: 16, color: 'var(--fg-3)', fontSize: 13,
      fontFamily: 'var(--font-mono, monospace)',
      textAlign: 'center',
    }}>
      图示未加载 —— 提问 → 检索 → 生成 → 引用
    </div>
  );
}

if (typeof window !== 'undefined') window.TrustArchitectureCN = TrustArchitectureCN;
