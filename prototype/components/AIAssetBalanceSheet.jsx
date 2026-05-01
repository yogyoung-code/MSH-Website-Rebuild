/* =========================================================
   AIAssetBalanceSheet.jsx — /ai-platform v3.0 · Act 1
   ---------------------------------------------------------
   AI 资产负债表。 Spec §2.2 — 海外投资人反向尽调 first-screen,
   "底座→产品→方法" 护城河逻辑的第一层。

   Visual 参考: medsci-evidence-tech/components/Features.tsx 暗色 stat 卡,
   砍掉 "LIVE DATA STREAM · CONNECTED" 假实时绿点(spec §2.2)。

   Usage:
     <AIAssetBalanceSheet
       groups={[
         {
           label: 'DEMAND-SIDE NETWORK',
           items: [
             { value: '3.3M+', label: 'Registered physicians',
               sourceFootnote: 'Internal registry · 2026-Q1' },
             { value: '25K+',  label: 'Tertiary-hospital KOLs' },
           ],
         },
         { label: 'KNOWLEDGE BASE',  items: [...] },
         { label: 'WORKING CORPUS',  items: [...] },
       ]}
       narrative="This is the data substrate every MedSci AI product is built on..."
     />

   Brand notes:
   - 沿用 W1-04 v1.1 token 体系: --bg-invert (#001037) 暗色画布
   - stat 数字用 --brand-accent-500 (cyan) 突出
   - 待 W1-04 v1.2 落定 --product-canvas-dark / --product-accent-{slug}
     palette 后, 此组件 token 可平滑替换 (spec §6.3)

   A11y:
   - section role="region" + aria-labelledby
   - 每个 stat 是 <dl> 语义 (value=dd, label=dt), 屏幕阅读器友好
   ========================================================= */

function AIAssetBalanceSheet({
  eyebrow = 'THE NUMBERS BEHIND THE PLATFORM',
  subtitle = 'AS OF 2026 Q1 · IR-VERIFIED',
  groups = [],
  narrative = '',
  fineprint = 'Source: Internal registry · Last verified 2026-Q1 · IR sign-off pending',
}) {
  if (!Array.isArray(groups) || groups.length === 0) {
    console.warn('AIAssetBalanceSheet: groups[] is empty');
    return null;
  }

  const headingId = 'ai-asset-balance-sheet-heading';

  return (
    <section
      role="region"
      aria-labelledby={headingId}
      className="ai-asset-balance-sheet"
      style={{
        /* UXcritique: 浅色背景 — 与 Hero 暗色形成自然分段,不再需要 sticky-nav
           做断隔. 4 stats 在一行水平展开（见下方 stats-row）。 */
        background: 'var(--bg-2, var(--neutral-50))',
        color: 'var(--fg-1)',
        padding: 'clamp(40px, 5vw, 80px) clamp(24px, 6vw, 96px)',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-1)',
      }}
    >
      <div style={{
        maxWidth: 'var(--container-max, 1280px)',
        margin: '0 auto',
        position: 'relative',
      }}>
        {/* Heading row */}
        <div style={{ marginBottom: 'clamp(20px, 2.5vw, 32px)', maxWidth: 720 }}>
          <h2 id={headingId} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px, 2.6vw, 32px)',
            fontWeight: 600,
            color: 'var(--brand-primary-700)',
            lineHeight: 1.2,
            margin: 0,
            letterSpacing: '-0.01em',
          }}>{eyebrow}</h2>
          <div style={{
            marginTop: 8,
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--brand-accent-700)',
          }}>{subtitle}</div>
        </div>

        {/* Stats row — flat 4-up: groups flattened, group label shown as
            small uppercase chip above each stat to preserve audit semantics. */}
        <dl className="ai-asset-stats-row" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: 'clamp(12px, 1.4vw, 20px)',
          margin: '0 0 clamp(20px, 2.4vw, 32px)',
        }}>
          {groups.flatMap((g) =>
            (g.items || []).map((it, idx) => (
              <Stat key={`${g.label}-${idx}`} group={g.label} item={it} />
            ))
          )}
        </dl>

        {/* Narrative + fineprint full-width below (light theme) */}
        {(narrative || fineprint) && (
          <aside style={{
            borderLeft: '2px solid var(--brand-accent-500)',
            paddingLeft: 18,
            fontFamily: 'var(--font-ui)',
            color: 'var(--fg-2)',
            fontSize: 14,
            lineHeight: 1.55,
            maxWidth: 880,
          }}>
            {narrative && (
              <p style={{ margin: '0 0 12px', fontStyle: 'italic' }}>{narrative}</p>
            )}
            {fineprint && (
              <div style={{
                fontFamily: 'var(--font-mono, var(--font-ui))',
                fontSize: 10.5,
                letterSpacing: '0.04em',
                color: 'var(--fg-3)',
                paddingTop: 10,
                borderTop: '1px solid var(--border-1)',
              }}>{fineprint}</div>
            )}
          </aside>
        )}
      </div>

      {/* Responsive: ≥1024px expand to 4-up flat row */}
      <style>{`
        @media (min-width: 1024px) {
          .ai-asset-balance-sheet .ai-asset-stats-row {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </section>
  );
}

/* Stat — single flat cell. Group label appears as small uppercase chip
   on top so audit semantics ("DEMAND-SIDE NETWORK" / "KNOWLEDGE BASE")
   survive the flat 4-up layout. */
function Stat({ group, item }) {
  return (
    <div style={{
      borderTop: '1px solid var(--border-2)',
      paddingTop: 'clamp(10px, 1.2vw, 14px)',
      paddingRight: 'clamp(8px, 1vw, 16px)',
      minWidth: 0,
    }}>
      {group && (
        <div style={{
          fontFamily: 'var(--font-mono, var(--font-ui))',
          fontSize: 10,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--fg-3)',
          marginBottom: 8,
          fontWeight: 600,
        }}>{group}</div>
      )}
      <dd style={{
        margin: 0,
        /* spec §3.4: all numbers Inter */
        fontFamily: 'var(--font-ui)',
        fontSize: 'clamp(24px, 3vw, 36px)',
        fontWeight: 600,
        lineHeight: 1.05,
        color: 'var(--brand-accent-700)',
        letterSpacing: '-0.025em',
      }}>{item.value}</dd>
      <dt style={{
        marginTop: 6,
        fontFamily: 'var(--font-ui)',
        fontSize: 13,
        lineHeight: 1.4,
        color: 'var(--fg-1)',
      }}>{item.label}</dt>
      {item.sourceFootnote && (
        <div style={{
          marginTop: 6,
          fontFamily: 'var(--font-mono, var(--font-ui))',
          fontSize: 10.5,
          letterSpacing: '0.04em',
          color: 'var(--fg-3)',
        }}>{item.sourceFootnote}</div>
      )}
    </div>
  );
}

if (typeof window !== 'undefined') window.AIAssetBalanceSheet = AIAssetBalanceSheet;
