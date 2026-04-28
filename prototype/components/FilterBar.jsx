/* FilterBar.jsx — Service line filter chips (B2) */

function FilterBar({ filters, active, onChange }) {
  return (
    <div style={{
      display: 'flex', gap: 8, flexWrap: 'wrap',
      padding: '0 clamp(24px, 6vw, 96px)',
      maxWidth: 1280, margin: '0 auto 32px'
    }}>
      {filters.map(f => (
        <button key={f.value} onClick={() => onChange(f.value)} style={{
          padding: '8px 16px',
          border: '1px solid var(--border-1)',
          background: active === f.value ? 'var(--brand-primary-700)' : 'transparent',
          color: active === f.value ? '#fff' : 'var(--fg-1)',
          fontFamily: 'var(--font-slogan)',
          fontSize: 13,
          letterSpacing: '0.08em',
          cursor: 'pointer'
        }}>{f.label}</button>
      ))}
    </div>
  );
}

window.FilterBar = FilterBar;
