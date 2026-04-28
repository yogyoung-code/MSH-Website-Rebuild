/* QuoteBlock.jsx — Centered pull quote (B2) */

function QuoteBlock({ text, attribution }) {
  return (
    <section style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      maxWidth: 920, margin: '0 auto', textAlign: 'center'
    }}>
      <blockquote style={{
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(20px, 3vw, 32px)',
        lineHeight: 1.4,
        color: 'var(--fg-1)',
        fontStyle: 'italic'
      }}>"{text}"</blockquote>
      <div style={{ marginTop: 24, fontSize: 14, color: 'var(--fg-3)' }}>— {attribution}</div>
    </section>
  );
}

window.QuoteBlock = QuoteBlock;
