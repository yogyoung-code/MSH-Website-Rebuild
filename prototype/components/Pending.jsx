
function Pending({ label, note, compact }) {
  return (
    <div role="status" style={{
      border: '1px dashed var(--warning-500)',
      background: 'var(--warning-100)',
      borderRadius: 'var(--radius-md, 6px)',
      padding: compact ? '12px 16px' : '20px 24px',
      margin: compact ? '8px 0' : '16px 0',
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }}>
      <span aria-hidden="true" style={{
        fontFamily: 'var(--font-ui)',
        fontSize: 11,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        fontWeight: 700,
        color: 'var(--warning-700)',
        background: 'var(--bg-1)',
        border: '1px solid var(--warning-500)',
        padding: '3px 8px',
        borderRadius: 'var(--radius-sm, 4px)',
        flexShrink: 0,
        whiteSpace: 'nowrap'
      }}>Coming soon</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        {label && (
          <div style={{
            fontFamily: 'var(--font-ui)',
            fontSize: compact ? 13 : 14,
            fontWeight: 500,
            color: 'var(--fg-1)',
            lineHeight: 1.45
          }}>{label}</div>
        )}
        {note && (
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--fg-3)',
            marginTop: 6,
            lineHeight: 1.5
          }}>{note}</div>
        )}
      </div>
    </div>
  );
}

function DraftNotice({ message, signoff }) {
  return (
    <div role="status" aria-live="polite" style={{
      borderTop: '4px solid var(--warning-500)',
      borderBottom: '1px solid var(--border-1)',
      background: 'var(--warning-100)',
      padding: 'clamp(16px, 2vw, 24px) clamp(24px, 6vw, 96px)'
    }}>
      <div style={{
        maxWidth: 'var(--container-max, 1280px)',
        margin: '0 auto',
        display: 'flex',
        gap: 16,
        alignItems: 'flex-start',
        flexWrap: 'wrap'
      }}>
        <span style={{
          fontFamily: 'var(--font-ui)',
          fontSize: 11,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          fontWeight: 700,
          color: 'var(--warning-700)',
          background: 'var(--bg-1)',
          border: '1px solid var(--warning-500)',
          padding: '4px 10px',
          borderRadius: 'var(--radius-sm, 4px)',
          flexShrink: 0
        }}>Draft</span>
        <div style={{
          flex: '1 1 480px',
          fontSize: 14,
          color: 'var(--fg-1)',
          lineHeight: 1.55
        }}>
          {message || 'This page is in draft. The text below has not yet been finalized.'}
          {signoff && (
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--fg-3)',
              marginTop: 4,
              letterSpacing: '0.02em'
            }}>Pending sign-off: {signoff}</div>
          )}
        </div>
      </div>
    </div>
  );
}

if (typeof window !== 'undefined') {
  window.Pending = Pending;
  window.DraftNotice = DraftNotice;
}
