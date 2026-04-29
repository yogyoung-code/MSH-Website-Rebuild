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
        background: 'var(--bg-invert)',
        color: 'var(--white)',
        padding: 'clamp(64px, 8vw, 128px) clamp(24px, 6vw, 96px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle gradient glow on the canvas background, pure CSS no SVG noise */}
      <span aria-hidden="true" style={{
        position: 'absolute',
        top: '-20%', right: '-10%',
        width: 520, height: 520,
        background: 'radial-gradient(closest-side, rgba(0,174,219,0.12), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 'var(--container-max, 1280px)',
        margin: '0 auto',
        position: 'relative',
      }}>
        {/* Heading row */}
        <div style={{ marginBottom: 'clamp(40px, 5vw, 64px)', maxWidth: 720 }}>
          <h2 id={headingId} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 3.4vw, 40px)',
            fontWeight: 600,
            color: 'var(--white)',
            lineHeight: 1.2,
            margin: 0,
            letterSpacing: '-0.01em',
          }}>{eyebrow}</h2>
          <div style={{
            marginTop: 12,
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 12,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--brand-accent-500)',
          }}>{subtitle}</div>
        </div>

        {/* Body grid: groups (left) + narrative (right) */}
        <div className="ai-asset-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(32px, 4vw, 56px)',
          alignItems: 'start',
        }}>
          {/* LEFT — 3 groups stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 2.4vw, 32px)' }}>
            {groups.map((g, gi) => (
              <Group key={gi} label={g.label} items={g.items} />
            ))}
          </div>

          {/* RIGHT — narrative + fineprint */}
          {(narrative || fineprint) && (
            <aside style={{
              borderLeft: '2px solid var(--brand-accent-500)',
              paddingLeft: 24,
              fontFamily: 'var(--font-ui)',
              color: 'rgba(255,255,255,0.78)',
              fontSize: 15,
              lineHeight: 1.65,
            }}>
              {narrative && (
                <p style={{ margin: '0 0 24px', fontStyle: 'italic' }}>{narrative}</p>
              )}
              {fineprint && (
                <div style={{
                  fontFamily: 'var(--font-mono, var(--font-ui))',
                  fontSize: 11,
                  letterSpacing: '0.04em',
                  color: 'rgba(255,255,255,0.42)',
                  paddingTop: 16,
                  borderTop: '1px solid rgba(255,255,255,0.12)',
                }}>{fineprint}</div>
              )}
            </aside>
          )}
        </div>
      </div>

      {/* Responsive: ≥1024px split into 2 cols */}
      <style>{`
        @media (min-width: 1024px) {
          .ai-asset-balance-sheet .ai-asset-grid {
            grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
          }
        }
      `}</style>
    </section>
  );
}

function Group({ label, items }) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return (
    <div>
      <div style={{
        fontFamily: 'var(--font-mono, var(--font-ui))',
        fontSize: 11,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--brand-accent-500)',
        marginBottom: 14,
        fontWeight: 600,
      }}>{label}</div>

      <dl style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${Math.min(items.length, 3)}, minmax(0, 1fr))`,
        gap: 'clamp(12px, 1.4vw, 20px)',
        margin: 0,
      }}>
        {items.map((it, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: 14,
            padding: 'clamp(18px, 2vw, 24px)',
            transition: 'background 200ms ease, border-color 200ms ease',
          }}>
            <dd style={{
              margin: 0,
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.6vw, 44px)',
              fontWeight: 600,
              lineHeight: 1.05,
              color: 'var(--brand-accent-500)',
              letterSpacing: '-0.02em',
            }}>{it.value}</dd>
            <dt style={{
              marginTop: 10,
              fontFamily: 'var(--font-ui)',
              fontSize: 13,
              lineHeight: 1.45,
              color: 'rgba(255,255,255,0.85)',
            }}>{it.label}</dt>
            {it.sourceFootnote && (
              <div style={{
                marginTop: 10,
                fontFamily: 'var(--font-mono, var(--font-ui))',
                fontSize: 10,
                letterSpacing: '0.06em',
                color: 'rgba(255,255,255,0.4)',
              }}>{it.sourceFootnote}</div>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
}

if (typeof window !== 'undefined') window.AIAssetBalanceSheet = AIAssetBalanceSheet;
