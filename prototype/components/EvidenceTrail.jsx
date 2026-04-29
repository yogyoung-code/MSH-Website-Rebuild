/* =========================================================
   EvidenceTrail.jsx — SIGNATURE COMPONENT
   ---------------------------------------------------------
   Annotated evidence-row pattern. Each row pairs a claim with
   its verification badge, a small AI · MD trace, and the
   source + year inline. This visualizes the audit trail —
   the brand's core differentiator — instead of dumping raw
   stats and a footnote.

   Replaces inline data-claims on Solution pages, Case Studies,
   and the AI Platform compliance area, where the verification
   trail itself is what the buyer is paying for.

   <EvidenceTrail
     eyebrow="VERIFIED EVIDENCE"
     title="What we shipped"
     rows={[
       {
         claim: '60% faster time-to-evidence-package',
         status: 'verified',           // 'verified' | 'in-development' | 'on-request'
         trace: ['AI: gap-scan',  'MD: lead reviewer signed'],
         source: 'Client engagement report',
         year: '2025',
         approvedBy: 'Sponsor + IR (pending)'
       }, ...
     ]}
   />
   ========================================================= */

function EvidenceTrail({ rows, eyebrow, title }) {
  if (!Array.isArray(rows) || rows.length === 0) {
    console.warn('EvidenceTrail: expected non-empty rows array');
    return null;
  }

  return (
    <section style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      background: 'var(--bg-1)'
    }}>
      <div style={{ maxWidth: 'var(--reading-max, 960px)', margin: '0 auto' }}>
        {(eyebrow || title) && (
          <div style={{ marginBottom: 'clamp(24px, 3vw, 40px)' }}>
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
                fontSize: 'clamp(24px, 3vw, 32px)',
                fontWeight: 600,
                color: 'var(--brand-primary-700)',
                lineHeight: 1.2,
                margin: 0
              }}>{title}</h2>
            )}
          </div>
        )}

        <ol style={{
          listStyle: 'none', padding: 0, margin: 0,
          borderTop: '1px solid var(--border-1)'
        }}>
          {rows.map((r, i) => (
            <li key={i} style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) auto',
              gap: 24,
              padding: '20px 0',
              borderBottom: '1px solid var(--border-1)',
              alignItems: 'flex-start'
            }}>
              {/* Left: claim + trace */}
              <div>
                <div style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'clamp(16px, 1.5vw, 18px)',
                  fontWeight: 500,
                  color: 'var(--fg-1)',
                  lineHeight: 1.45
                }}>{r.claim}</div>

                {Array.isArray(r.trace) && r.trace.length > 0 && (
                  <div style={{
                    display: 'flex', flexWrap: 'wrap', gap: 6,
                    marginTop: 10
                  }}>
                    {r.trace.map((t, j) => (
                      <span key={j} style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        background: 'var(--bg-2)',
                        color: 'var(--fg-2)',
                        border: '1px solid var(--border-1)',
                        borderRadius: 'var(--radius-sm, 4px)',
                        padding: '3px 8px',
                        letterSpacing: '0.02em'
                      }}>{t}</span>
                    ))}
                  </div>
                )}

                {(r.source || r.year || r.approvedBy) && (
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--fg-3)',
                    marginTop: 10,
                    letterSpacing: '0.02em'
                  }}>
                    {[r.source, r.year, r.approvedBy && `approved by ${r.approvedBy}`]
                      .filter(Boolean).join(' · ')}
                  </div>
                )}
              </div>

              {/* Right: status badge */}
              <div style={{ paddingTop: 2 }}>
                <EvidenceBadge status={r.status} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function EvidenceBadge({ status }) {
  const map = {
    'verified':       { bg: 'var(--success-100)', fg: 'var(--success-500)', mark: '✓', label: 'Verified' },
    'in-development': { bg: 'var(--warning-100)', fg: 'var(--warning-700)', mark: '◐', label: 'In Development' },
    'on-request':     { bg: 'var(--bg-3)',        fg: 'var(--fg-2)',        mark: '🔒', label: 'On Request' },
    'placeholder':    { bg: 'var(--warning-100)', fg: 'var(--warning-700)', mark: '⚑', label: 'Placeholder' }
  };
  const s = map[status] || map['on-request'];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: s.bg, color: s.fg,
      fontFamily: 'var(--font-ui)',
      fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase',
      fontWeight: 600,
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm, 4px)',
      whiteSpace: 'nowrap'
    }}>
      <span aria-hidden="true">{s.mark}</span>
      {s.label}
    </span>
  );
}

if (typeof window !== 'undefined') {
  window.EvidenceTrail = EvidenceTrail;
  window.EvidenceBadge = EvidenceBadge;
}
