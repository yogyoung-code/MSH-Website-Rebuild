/* LegalProse.jsx — Plain-prose renderer for /legal/* pages with section anchors (B5) */
/*
 * Spec: Copy Deck v4.2 §12 (Terms / Privacy / Disclosures).
 *
 * Props:
 *   title          — page H1
 *   eyebrow        — page eyebrow label
 *   lastUpdated    — ISO date string; rendered as "Last updated: Mon DD, YYYY"
 *   lede           — optional lede paragraph below H1
 *   sections       — [{ id, heading, paragraphs:[string|node], note? }]
 *   pendingNotice  — optional banner string (used for CN versions still
 *                    pending external counsel finalization)
 *
 * Rendering rules:
 * - Each section H2 carries an id for deep-link anchoring (#acceptance,
 *   #ip, etc.) — required for §12 ⚠️ counsel review tracking.
 * - Internal TOC at the top auto-builds from sections array.
 * - ⚠️ markers in paragraph text are rendered verbatim (yellow inline
 *   warning) so prototype reviewers see exactly which text counsel
 *   will replace.
 */

function LegalProse({ title, eyebrow, lastUpdated, lede, sections, pendingNotice }) {
  const dateFmt = lastUpdated
    ? new Date(lastUpdated).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : 'pending counsel sign-off';

  return (
    <article style={{
      maxWidth: 800,
      margin: '0 auto',
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px) 64px'
    }}>
      {/* Header */}
      <div style={{
        fontFamily: 'var(--font-slogan)',
        fontSize: 12,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--brand-accent-700)',
        marginBottom: 12
      }}>{eyebrow}</div>

      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(32px, 4.5vw, 48px)',
        lineHeight: 1.2,
        color: 'var(--brand-primary-700)',
        margin: '0 0 16px'
      }}>{title}</h1>

      <p style={{ fontSize: 13, color: 'var(--fg-3)', margin: '0 0 32px' }}>
        Last updated: <time dateTime={lastUpdated || ''}>{dateFmt}</time>
      </p>

      {/* Pending banner (for CN versions awaiting counsel-final) */}
      {pendingNotice && (
        <div style={{
          padding: '14px 18px',
          background: 'rgba(245, 158, 11, 0.08)',
          border: '1px dashed var(--brand-warn-600, #b45309)',
          fontSize: 14,
          color: 'var(--fg-1)',
          lineHeight: 1.5,
          marginBottom: 32
        }}>
          <strong style={{ color: 'var(--brand-warn-600, #b45309)' }}>Notice / 注意</strong>
          <span style={{ display: 'block', marginTop: 4 }}>{pendingNotice}</span>
        </div>
      )}

      {/* Lede */}
      {lede && (
        <p style={{
          fontSize: 17,
          lineHeight: 1.6,
          color: 'var(--fg-1)',
          margin: '0 0 32px',
          borderLeft: '3px solid var(--brand-primary-500)',
          paddingLeft: 16
        }}>{lede}</p>
      )}

      {/* Internal TOC */}
      {sections && sections.length > 1 && (
        <nav aria-label="On this page" style={{
          background: 'var(--bg-2)',
          padding: '16px 20px',
          marginBottom: 32,
          fontSize: 13
        }}>
          <div style={{
            fontFamily: 'var(--font-slogan)',
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--fg-3)',
            marginBottom: 8
          }}>On this page</div>
          <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 1.8 }}>
            {sections.map((s, i) => (
              <li key={s.id || i}>
                <a href={`#${s.id}`} style={{ color: 'var(--fg-link)', textDecoration: 'none' }}>
                  {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Sections */}
      {sections.map((s, i) => (
        <section key={s.id || i} id={s.id} style={{ marginBottom: 40 }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px, 2.5vw, 28px)',
            color: 'var(--brand-primary-700)',
            lineHeight: 1.3,
            margin: '0 0 16px',
            scrollMarginTop: 24
          }}>{s.heading}</h2>

          {Array.isArray(s.paragraphs) && s.paragraphs.map((p, j) => (
            <div key={j} style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: 'var(--fg-1)',
              margin: '0 0 16px'
            }}>
              {/* If p is a string, render plain. If it's a React element / fragment, render as-is */}
              {typeof p === 'string' ? <LegalParagraph text={p} /> : p}
            </div>
          ))}

          {s.note && (
            <p style={{
              fontSize: 13,
              color: 'var(--fg-3)',
              fontStyle: 'italic',
              lineHeight: 1.5,
              margin: '12px 0 0'
            }}>{s.note}</p>
          )}
        </section>
      ))}
    </article>
  );
}

// LegalParagraph: kept as a thin pass-through after UXcritique20260429
// stripped inline ⚠️ markers from all legal copy. The page-level <DraftNotice>
// banner above LegalProse now communicates draft state. We keep the wrapper
// so existing call sites (`<LegalParagraph text={p} />`) don't break, but it
// no longer scans for any glyph — if pre-counsel ⚠️ ever returns, render plain.
function LegalParagraph({ text }) {
  return <>{String(text)}</>;
}

window.LegalProse = LegalProse;
window.LegalParagraph = LegalParagraph;
