/* Button.jsx */
function Button({ variant = 'primary', children, icon = true, onClick, disabled, style, href, target, rel }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 14,
    padding: '11px 20px', borderRadius: 6,
    border: '1px solid transparent', cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 200ms cubic-bezier(0.4,0,0.2,1)',
    opacity: disabled ? 0.4 : 1, textDecoration: 'none',
    whiteSpace: 'nowrap', letterSpacing: '0.005em',
  };
  const variants = {
    primary:         { background: 'var(--brand-primary-700)', color: '#fff' },
    'primary-light': { background: 'var(--brand-primary-500)', color: '#fff' },
    accent:          { background: 'var(--brand-accent-500)', color: 'var(--brand-primary-900)' },
    outline:         { background: 'transparent', color: 'var(--brand-primary-700)', border: '1px solid var(--brand-primary-700)' },
    'outline-light': { background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.4)' },
    ghost:           { background: 'transparent', color: 'var(--brand-primary-500)', padding: '11px 8px' },
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = hover && !disabled ? ({
    primary:         { background: 'var(--brand-primary-900)', transform: 'translateY(-1px)', boxShadow: 'var(--shadow-sm)' },
    'primary-light': { background: 'var(--brand-primary-700)' },
    accent:          { filter: 'brightness(0.95)', transform: 'translateY(-1px)' },
    outline:         { background: 'var(--brand-primary-100)' },
    'outline-light': { background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.7)' },
    ghost:           { textDecoration: 'underline' },
  })[variant] : {};
  const composedStyle = { ...base, ...variants[variant], ...hoverStyle, ...style };
  // When href is provided, render as <a> for proper navigation; otherwise <button>.
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        onClick={onClick}
        style={composedStyle}
      >
        {children}
        {icon && <span style={{ marginLeft: 2, transform: hover ? 'translateX(2px)' : 'none', transition: 'transform 200ms' }}>→</span>}
      </a>
    );
  }
  return (
    <button
      style={composedStyle}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      disabled={disabled} onClick={onClick}
    >
      {children}
      {icon && <span style={{ marginLeft: 2, transform: hover ? 'translateX(2px)' : 'none', transition: 'transform 200ms' }}>→</span>}
    </button>
  );
}

// Inline Lucide `lock` glyph for on-request status. UXcritique20260429
// normalize pass replaced 🔒 emoji per Brand Guidelines v1.1 §8 — no emoji
// in product UI. Self-contained SVG (no lucide.createIcons() dependency).
function _BtnLockGlyph({ size = 11 }) {
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

function EvidenceBadge({ kind = 'verified', children, size = 'md' }) {
  const fs = size === 'sm' ? 10 : 11;
  const map = {
    verified:    { bg: 'var(--success-100)', color: 'var(--success-500)', icon: '✓',                          label: 'Verified' },
    development: { bg: 'var(--warning-100)', color: 'var(--warning-700)', icon: '◐',                          label: 'In Development', italic: true },
    request:     { bg: 'var(--neutral-100)', color: 'var(--neutral-700)', icon: <_BtnLockGlyph size={fs+1} />, label: 'On Request' },
    placeholder: { bg: 'var(--warning-100)', color: 'var(--warning-700)', icon: '⚑',                          label: 'Placeholder' },
  };
  const s = map[kind];
  const padding = size === 'sm' ? '2px 8px' : '4px 10px';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: s.bg, color: s.color,
      padding, borderRadius: 4,
      fontSize: fs, fontWeight: 600,
      letterSpacing: s.italic ? 0 : '0.06em',
      textTransform: s.italic ? 'none' : 'uppercase',
      fontStyle: s.italic ? 'italic' : 'normal',
      fontFamily: 'var(--font-ui)',
      lineHeight: 1,
    }}>
      <span style={{ fontSize: fs + 1, display: 'inline-flex', alignItems: 'center' }}>{s.icon}</span>
      {children || s.label}
    </span>
  );
}

function SectionEyebrow({ children, color }) {
  return (
    <div style={{
      fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
      color: color || 'var(--brand-accent-700)', textTransform: 'uppercase',
      marginBottom: 12, fontFamily: 'var(--font-ui)',
    }}>{children}</div>
  );
}

window.Button = Button;
window.EvidenceBadge = EvidenceBadge;
window.SectionEyebrow = SectionEyebrow;
