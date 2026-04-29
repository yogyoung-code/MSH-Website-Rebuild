/* =========================================================
   CountryCompare.jsx — SIGNATURE COMPONENT (path pages)
   ---------------------------------------------------------
   A restrained two-column comparator that shows US ↔ CN side
   by side with a directional arrow indicating which way the
   asset is travelling. Used to give path pages (Entering
   China, Going Global) a visual shape that deliverable
   pages don't have.

   Designed to look like an engineering spec table, not a
   marketing flourish. Numbers in Inter (per spec §3.4),
   no gradient text, no glassmorphism, no neon accents.

   Usage:
   <CountryCompare
     direction="cn-to-us"     // 'us-to-cn' | 'cn-to-us'
     eyebrow="THE CROSS-BORDER PATH"
     title="What changes when an asset crosses the Pacific."
     left={{
       flag: '🇺🇸', label: 'United States',
       regulator: 'FDA · CDER / CDRH',
       timeline: '6–18 mo dossier prep',
       reviewerLanguage: 'English',
       constraints: ['IRB-ready protocols', 'PSLRA disclosure', 'PCORnet / Sentinel registry options']
     }}
     right={{
       flag: '🇨🇳', label: 'China (Mainland)',
       regulator: 'NMPA · CDE',
       timeline: '11 wks median (2025 cohort)',
       reviewerLanguage: '中文 (Simplified Chinese)',
       constraints: ['NRDL value dossier', 'PIPL data residency', 'Tier-1 AMC physician sign-off']
     }}
   />
   ========================================================= */

function CountryCompare({ direction = 'us-to-cn', eyebrow, title, lede, left, right }) {
  if (!left || !right) {
    console.warn('CountryCompare: requires both left and right props');
    return null;
  }
  const leftToRight = direction === 'us-to-cn'
    || direction === 'left-to-right'
    || direction === undefined;

  return (
    <section style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      background: 'var(--bg-1)',
      borderTop: '1px solid var(--border-1)',
      borderBottom: '1px solid var(--border-1)'
    }}>
      <div style={{ maxWidth: 'var(--container-max, 1280px)', margin: '0 auto' }}>
        {(eyebrow || title || lede) && (
          <div style={{ marginBottom: 'clamp(32px, 4vw, 48px)', maxWidth: 720 }}>
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
                margin: '0 0 12px',
                letterSpacing: '-0.01em'
              }}>{title}</h2>
            )}
            {lede && (
              <p style={{
                fontSize: 17, color: 'var(--fg-2)',
                lineHeight: 1.55, margin: 0,
                maxWidth: 640
              }}>{lede}</p>
            )}
          </div>
        )}

        <div className="cc-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: 'clamp(16px, 2vw, 32px)',
          alignItems: 'stretch'
        }}>
          <CountryColumn data={left} role={leftToRight ? 'origin' : 'destination'} />
          <Arrow direction={leftToRight ? 'right' : 'left'} />
          <CountryColumn data={right} role={leftToRight ? 'destination' : 'origin'} />
        </div>

        <style>{`
          @media (max-width: 900px) {
            .cc-grid {
              grid-template-columns: 1fr !important;
              gap: 16px !important;
            }
            .cc-arrow {
              transform: rotate(90deg);
              justify-self: center;
              padding: 4px 0 !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

function CountryColumn({ data, role }) {
  const isOrigin = role === 'origin';
  return (
    <div style={{
      background: isOrigin ? 'var(--bg-2)' : 'var(--bg-1)',
      border: '1px solid var(--border-1)',
      borderRadius: 'var(--radius-lg, 12px)',
      padding: 'clamp(20px, 2.5vw, 32px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      position: 'relative'
    }}>
      {/* role marker stripe */}
      <span style={{
        position: 'absolute', top: 0, left: 'clamp(20px, 2.5vw, 32px)',
        right: 'clamp(20px, 2.5vw, 32px)', height: 2,
        background: isOrigin ? 'var(--brand-primary-300)' : 'var(--brand-accent-500)',
        opacity: 0.85
      }} />

      <header style={{ display: 'flex', alignItems: 'baseline', gap: 12, paddingTop: 4 }}>
        <span style={{
          fontFamily: 'var(--font-ui)',
          fontSize: 11, letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: isOrigin ? 'var(--fg-3)' : 'var(--brand-accent-700)',
          fontWeight: 700,
          flexShrink: 0
        }}>{isOrigin ? 'From' : 'To'}</span>
        {data.flag && (
          <span aria-hidden="true" style={{
            fontSize: 22, lineHeight: 1
          }}>{data.flag}</span>
        )}
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(22px, 2.4vw, 28px)',
          fontWeight: 600,
          color: 'var(--brand-primary-700)',
          margin: 0, lineHeight: 1.2,
          letterSpacing: '-0.005em'
        }}>{data.label}</h3>
      </header>

      <dl style={{ margin: 0, display: 'grid', gap: 12 }}>
        {data.regulator && <Row k="Regulator" v={data.regulator} mono />}
        {data.timeline && <Row k="Typical timeline" v={data.timeline} mono />}
        {data.reviewerLanguage && <Row k="Reviewer language" v={data.reviewerLanguage} />}
      </dl>

      {Array.isArray(data.constraints) && data.constraints.length > 0 && (
        <div style={{ marginTop: 4 }}>
          <div style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 11, letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--fg-3)',
            fontWeight: 600, marginBottom: 8
          }}>Constraints to plan for</div>
          <ul style={{
            listStyle: 'none', padding: 0, margin: 0,
            display: 'grid', gap: 6
          }}>
            {data.constraints.map((c, i) => (
              <li key={i} style={{
                fontSize: 14, color: 'var(--fg-1)',
                lineHeight: 1.5, paddingLeft: 14, position: 'relative'
              }}>
                <span aria-hidden="true" style={{
                  position: 'absolute', left: 0, top: 8,
                  width: 6, height: 1.5, background: 'var(--brand-primary-500)'
                }} />
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Row({ k, v, mono }) {
  return (
    <div>
      <dt style={{
        fontFamily: 'var(--font-ui)',
        fontSize: 11, letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--fg-3)',
        fontWeight: 600, marginBottom: 4
      }}>{k}</dt>
      <dd style={{
        margin: 0,
        fontFamily: mono ? 'var(--font-mono)' : 'var(--font-ui)',
        fontSize: mono ? 14 : 15,
        color: 'var(--fg-1)',
        lineHeight: 1.45
      }}>{v}</dd>
    </div>
  );
}

function Arrow({ direction }) {
  // Renders a horizontal flow arrow between the two columns. Honors
  // prefers-reduced-motion (no looping animation if reduced).
  const reduced = typeof window !== 'undefined'
    && window.matchMedia
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="cc-arrow" aria-hidden="true" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 12px',
      minWidth: 64
    }}>
      <svg
        viewBox="0 0 64 24"
        width="64" height="24"
        style={{
          transform: direction === 'left' ? 'scaleX(-1)' : 'none',
          color: 'var(--brand-accent-500)'
        }}
      >
        {/* Track (subtle dot pattern echoing logo spiral) */}
        <g fill="currentColor" opacity="0.35">
          <circle cx="6"  cy="12" r="1.4" />
          <circle cx="14" cy="12" r="1.4" />
          <circle cx="22" cy="12" r="1.4" />
          <circle cx="30" cy="12" r="1.4" />
        </g>
        {/* Active head */}
        <g fill="currentColor">
          <circle cx="40" cy="12" r="2" />
          <path d="M48 12 L60 12 M52 6 L60 12 L52 18"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
                fill="none" />
        </g>
        {!reduced && (
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            from="0 0" to="0 0"
            dur="0.001s"
            additive="sum"
          />
        )}
      </svg>
    </div>
  );
}

if (typeof window !== 'undefined') window.CountryCompare = CountryCompare;
