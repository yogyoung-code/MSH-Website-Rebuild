/* =========================================================
   DeliverableSample.jsx — SIGNATURE COMPONENT (deliverable pages)
   ---------------------------------------------------------
   An input → output spec-card pair. Shows what an actual
   deliverable looks like at the artifact level: the inputs
   we accept, the artifact we produce, and what a reviewer
   sees on the audit log.

   Used on deliverable pages (Medical Evidence, Physician
   Engagement, Medical Communications, Cross-Border Sprint)
   to give them a visual shape that's distinct from the
   path pages (which use CountryCompare for direction-of-flow).

   Reads as an engineering spec, not marketing — body in
   var(--font-mono) for the spec details, brand-spec colors
   only, no gradients, no glassmorphism.

   Usage:
   <DeliverableSample
     eyebrow="WHAT YOU GET"
     title="A signed evidence package, in the form your reviewer expects."
     samples={[
       {
         label: 'Systematic literature review',
         input:  { format: 'Research question · 1 paragraph', detail: 'PICO-shaped or RWE-shaped; we structure either.' },
         output: { format: 'PRISMA-aligned report · 12–40 pp + appendix', detail: 'Citation-level source trail attached.' },
         badge:  'verified',
         signedBy: 'Lead reviewer + 1 second reviewer'
       },
       ...
     ]}
   />
   ========================================================= */

function DeliverableSample({ samples, eyebrow, title, lede }) {
  if (!Array.isArray(samples) || samples.length === 0) {
    console.warn('DeliverableSample: requires non-empty samples array');
    return null;
  }
  return (
    <section style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      background: 'var(--bg-2)',
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
                lineHeight: 1.55, margin: 0, maxWidth: 640
              }}>{lede}</p>
            )}
          </div>
        )}

        <div style={{ display: 'grid', gap: 'clamp(16px, 2vw, 24px)' }}>
          {samples.map((s, i) => (
            <SampleRow key={i} sample={s} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SampleRow({ sample, index }) {
  return (
    <article className="ds-row" style={{
      background: 'var(--bg-1)',
      border: '1px solid var(--border-1)',
      borderRadius: 'var(--radius-lg, 12px)',
      padding: 'clamp(20px, 2.4vw, 28px)',
      display: 'grid',
      gridTemplateColumns: '32px 1fr auto 1fr auto',
      gap: 'clamp(12px, 1.5vw, 20px)',
      alignItems: 'stretch'
    }}>
      {/* Index */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--fg-3)',
        letterSpacing: '0.08em',
        paddingTop: 4
      }}>
        {String(index).padStart(2, '0')}
      </div>

      {/* INPUT cell */}
      <SpecCell
        kind="input"
        label="Input"
        format={sample.input?.format}
        detail={sample.input?.detail}
      />

      {/* arrow */}
      <ArrowCell />

      {/* OUTPUT cell */}
      <SpecCell
        kind="output"
        label="Output"
        format={sample.output?.format}
        detail={sample.output?.detail}
        title={sample.label}
      />

      {/* meta column */}
      <aside style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        minWidth: 130,
        paddingLeft: 16,
        borderLeft: '1px solid var(--border-1)'
      }}>
        {sample.badge && <DSBadge status={sample.badge} />}
        {sample.signedBy && (
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--fg-3)',
            lineHeight: 1.4,
            letterSpacing: '0.02em'
          }}>{sample.signedBy}</div>
        )}
      </aside>

      <style>{`
        @media (max-width: 900px) {
          .ds-row {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .ds-row > div:first-child { display: none; }
          .ds-arrow {
            justify-self: center;
            transform: rotate(90deg);
            padding: 4px 0 !important;
          }
          .ds-row > aside {
            padding-left: 0 !important;
            border-left: none !important;
            border-top: 1px solid var(--border-1) !important;
            padding-top: 12px !important;
          }
        }
      `}</style>
    </article>
  );
}

function SpecCell({ kind, label, format, detail, title }) {
  const isInput = kind === 'input';
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 6,
      minWidth: 0
    }}>
      <div style={{
        fontFamily: 'var(--font-ui)',
        fontSize: 11, letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: isInput ? 'var(--fg-3)' : 'var(--brand-accent-700)',
        fontWeight: 700
      }}>{label}</div>
      {title && (
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 16,
          fontWeight: 600,
          color: 'var(--brand-primary-700)',
          lineHeight: 1.3,
          marginBottom: 2
        }}>{title}</div>
      )}
      {format && (
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          color: 'var(--fg-1)',
          lineHeight: 1.45,
          letterSpacing: '0.005em'
        }}>{format}</div>
      )}
      {detail && (
        <div style={{
          fontSize: 13,
          color: 'var(--fg-2)',
          lineHeight: 1.5
        }}>{detail}</div>
      )}
    </div>
  );
}

function ArrowCell() {
  return (
    <div className="ds-arrow" aria-hidden="true" style={{
      display: 'flex', alignItems: 'center',
      padding: '0 4px', color: 'var(--brand-accent-500)'
    }}>
      <svg viewBox="0 0 40 16" width="40" height="16">
        <g fill="currentColor" opacity="0.4">
          <circle cx="3" cy="8" r="1.2" />
          <circle cx="9" cy="8" r="1.2" />
          <circle cx="15" cy="8" r="1.2" />
        </g>
        <path d="M22 8 L36 8 M30 2 L36 8 L30 14"
              stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round"
              fill="none" />
      </svg>
    </div>
  );
}

// Inline Lucide `lock` glyph — UXcritique20260429 normalize pass replaced 🔒
// emoji per Brand Guidelines §8 (no emoji in product UI).
function DSLockGlyph({ size = 10 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="2.6"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
         style={{ display: 'inline-block', flexShrink: 0 }}>
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  );
}

function DSBadge({ status }) {
  // Reuses the spec'd evidence-badge palette but at smaller scale
  const map = {
    'verified':       { bg: 'var(--success-100)', fg: 'var(--success-500)', mark: '✓',            label: 'Verified' },
    'in-development': { bg: 'var(--warning-100)', fg: 'var(--warning-700)', mark: '◐',            label: 'In Dev' },
    'on-request':     { bg: 'var(--bg-3)',        fg: 'var(--fg-2)',        mark: <DSLockGlyph />, label: 'On Request' }
  };
  const s = map[status] || map['on-request'];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      background: s.bg, color: s.fg,
      fontFamily: 'var(--font-ui)',
      fontSize: 10, letterSpacing: '0.08em',
      textTransform: 'uppercase', fontWeight: 700,
      padding: '3px 8px',
      borderRadius: 'var(--radius-sm, 4px)',
      whiteSpace: 'nowrap',
      alignSelf: 'flex-start'
    }}>
      <span aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center' }}>{s.mark}</span>
      {s.label}
    </span>
  );
}

if (typeof window !== 'undefined') window.DeliverableSample = DeliverableSample;
