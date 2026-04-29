/* ArticleBody.jsx — Article body renderer for /insights/[slug] (B3) */
/*
 * Spec: Copy Deck v4.2 §8.1.5 — 3 H2 sections, each with paragraphs and
 * optional EvidenceList items.
 *
 * Prototype shape (mock for Portable Text):
 *   sections: [
 *     {
 *       heading: string,                // H2 text
 *       paragraphs: string[],           // 1+ paragraphs of body copy
 *       evidence?: {                    // optional, rendered as EvidenceList
 *         tier: 'verified' | 'inDevelopment' | 'onRequest',
 *         items: [{ statement, source, year, approvedBy? }]
 *       }
 *     }
 *   ]
 *
 * CMS stage TODO: replace `sections` mock with Sanity Portable Text blocks
 * (Sanity field name: `body`); render via @portabletext/react.
 */

// Defensive: detect "Section content in development" stubs that the prior
// prototype rendered as user-visible prose. UXcritique20260429 wraps them
// in <Pending> instead.
function isPendingSection(s) {
  if (!s) return false;
  if (s.pending === true) return true;
  if (!Array.isArray(s.paragraphs) || s.paragraphs.length === 0) return true;
  return s.paragraphs.every(
    (p) => typeof p === 'string' && /Section content in development|TBD|coming soon/i.test(p)
  );
}

function ArticleBody({ sections }) {
  if (!Array.isArray(sections) || sections.length === 0) return null;
  return (
    <article style={{
      maxWidth: 720,
      margin: '0 auto',
      padding: '0 clamp(24px, 6vw, 96px) 64px'
    }}>
      {sections.map((s, i) => (
        <section key={i} style={{ marginBottom: 48 }}>
          {s.heading && (
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 3vw, 32px)',
              lineHeight: 1.25,
              color: 'var(--brand-primary-700)',
              margin: '0 0 20px'
            }}>
              {s.heading}
            </h2>
          )}
          {isPendingSection(s) ? (
            typeof window !== 'undefined' && window.Pending
              ? <Pending
                  label={s.pendingLabel || 'This section is being written by the article author and reviewed under PITL.'}
                  note={s.pendingNote || 'Subscribe below to be notified when the full article ships.'} />
              : null
          ) : (
            Array.isArray(s.paragraphs) && s.paragraphs.map((p, j) => (
            <p key={j} style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: 'var(--fg-1)',
              margin: '0 0 18px'
            }}>
              {p}
            </p>
          )))}
          {!isPendingSection(s) && s.evidence && Array.isArray(s.evidence.items) && s.evidence.items.length > 0 && (
            <div style={{ margin: '24px 0 0', padding: 0 }}>
              {/* Inline lightweight evidence list (not the full EvidenceList component
                  which is full-width section-level). */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                borderTop: '1px solid var(--border-1)'
              }}>
                {s.evidence.items.map((it, k) => (
                  <li key={k} style={{
                    padding: '16px 0',
                    borderBottom: '1px solid var(--border-1)'
                  }}>
                    <div style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--fg-1)' }}>
                      {it.statement}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--fg-3)', marginTop: 6 }}>
                      {it.source} · {it.year}
                      {it.approvedBy && <> · approved by {it.approvedBy}</>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      ))}
    </article>
  );
}

window.ArticleBody = ArticleBody;
