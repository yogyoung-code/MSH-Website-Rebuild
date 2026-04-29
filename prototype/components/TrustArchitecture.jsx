/* =========================================================
   TrustArchitecture.jsx — /ai-platform v3.0 · Act 3 三支柱
   ---------------------------------------------------------
   Spec §4.1 — Trust Architecture: PITL 从主轴降级为支柱之一。
     Pillar 1: Retrieval-Anchored Generation (RagAnchorDiagram)
     Pillar 2: Physician-In-The-Loop (PitlRibbon variant='compact')
     Pillar 3: Audit Trail by Default (EvidenceTrail 现有组件)

   Plan task 10。

   Usage:
     <TrustArchitecture
        pitlSteps={[...4 steps...]}
        evidenceRows={[...rows...]}
     />
   ========================================================= */

const PILLARS = [
  {
    num: 1,
    title: 'Retrieval-Anchored Generation',
    oneLiner:
      'AI does not invent medical facts. Every output is anchored to a citable source — guideline, drug label, registry, or peer-reviewed paper.',
  },
  {
    num: 2,
    title: 'Physician-In-The-Loop (PITL)',
    oneLiner: 'Named clinicians sign every section. AI proposes; humans dispose.',
  },
  {
    num: 3,
    title: 'Audit Trail by Default',
    oneLiner:
      'Every claim ships with its source, reviewer, timestamp, and edit history. Exportable on engagement.',
  },
];

function TrustArchitecture({
  eyebrow = 'ACT 3 · THE METHOD',
  title = 'How we keep medical AI accountable.',
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
        {/* Section heading */}
        <div style={{ marginBottom: 'clamp(40px, 5vw, 64px)', maxWidth: 720 }}>
          {eyebrow && (
            <div style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 12, letterSpacing: '0.14em',
              textTransform: 'uppercase',
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
              lineHeight: 1.2,
              margin: 0,
              letterSpacing: '-0.01em',
            }}>{title}</h2>
          )}
        </div>

        {/* Three pillars one-liners (overview row) */}
        <div className="trust-arch-pillars" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(20px, 2.4vw, 32px)',
          marginBottom: 'clamp(40px, 5vw, 64px)',
        }}>
          {PILLARS.map((p) => (
            <PillarSummary key={p.num} {...p} />
          ))}
        </div>

        {/* Pillar 1 detail — RagAnchorDiagram */}
        <PillarBlock
          eyebrow="PILLAR 1 · RETRIEVAL-ANCHORED GENERATION"
          title="Anchor every answer to a citable source."
          oneLiner={PILLARS[0].oneLiner}
        >
          {(typeof window !== 'undefined' && window.RagAnchorDiagram)
            ? <window.RagAnchorDiagram />
            : <DiagramFallback />}
        </PillarBlock>

        {/* Pillar 2 detail — PitlRibbon variant='compact' (Task 1 复用) */}
        {pitlSteps && (typeof window !== 'undefined' && window.PitlRibbon) && (
          <div style={{ margin: 'clamp(24px, 3vw, 40px) calc(-1 * clamp(24px, 6vw, 96px))' }}>
            <window.PitlRibbon
              variant="compact"
              eyebrow="PILLAR 2 · PHYSICIAN-IN-THE-LOOP (PITL)"
              title="Named clinicians sign every section."
              steps={pitlSteps}
            />
          </div>
        )}

        {/* Pillar 3 detail — EvidenceTrail (现有组件复用) */}
        {evidenceRows && (typeof window !== 'undefined' && window.EvidenceTrail) && (
          <div style={{ marginTop: 'clamp(24px, 3vw, 40px)' }}>
            <window.EvidenceTrail
              eyebrow="PILLAR 3 · AUDIT TRAIL BY DEFAULT"
              title="Every claim ships with its trail."
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

function PillarSummary({ num, title, oneLiner }) {
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
      }}>PILLAR {num}</div>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(18px, 2.2vw, 22px)',
        fontWeight: 600,
        color: 'var(--brand-primary-700)',
        margin: 0,
        lineHeight: 1.3,
      }}>{title}</h3>
      <p style={{
        margin: 0,
        fontSize: 14, lineHeight: 1.6,
        color: 'var(--fg-2)',
      }}>{oneLiner}</p>
    </div>
  );
}

function PillarBlock({ eyebrow, title, oneLiner, children }) {
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
        textTransform: 'uppercase',
        color: 'var(--brand-accent-700)',
        fontWeight: 700, marginBottom: 8,
      }}>{eyebrow}</div>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(20px, 2.4vw, 26px)',
        fontWeight: 600,
        color: 'var(--brand-primary-700)',
        margin: '0 0 12px',
        lineHeight: 1.25,
      }}>{title}</h3>
      {oneLiner && (
        <p style={{
          margin: '0 0 24px', maxWidth: 720,
          fontSize: 14, lineHeight: 1.6,
          color: 'var(--fg-2)',
        }}>{oneLiner}</p>
      )}
      {children}
    </div>
  );
}

function DiagramFallback() {
  return (
    <div style={{
      padding: 16, color: 'var(--fg-3)', fontSize: 13,
      fontFamily: 'var(--font-mono, monospace)',
      textAlign: 'center',
    }}>
      Diagram not loaded — Query → Retrieval → Generation → Citation
    </div>
  );
}

if (typeof window !== 'undefined') window.TrustArchitecture = TrustArchitecture;
