/* TopicChips.jsx — Multi-select pill chips for Insights topic filter (B3) */
/* Lighter visual than FilterBar: pill shape, subtle border, accent on active. */
/* Spec: Copy Deck v4.2 §8.0.3 — chip 颜色 brand-accent-500 描边 + brand-accent-100 浅底 on active. */

function TopicChips({ topics, active, onToggle }) {
  // topics: [{ value, label }]
  // active: array of selected topic values (multi-select)
  // onToggle(value) — toggles membership in active
  const isActive = (v) => Array.isArray(active) && active.indexOf(v) !== -1;

  return (
    <div
      role="group"
      aria-label="Filter Insights by topic"
      style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        padding: '0 clamp(24px, 6vw, 96px)',
        maxWidth: 1280,
        margin: '0 auto 32px'
      }}
    >
      {topics.map(t => {
        const on = isActive(t.value);
        return (
          <button
            key={t.value}
            type="button"
            aria-pressed={on}
            onClick={() => onToggle && onToggle(t.value)}
            style={{
              padding: '6px 14px',
              borderRadius: 999,
              border: on
                ? '1.5px solid var(--brand-accent-500)'
                : '1px solid var(--border-1)',
              background: on ? 'var(--brand-accent-100)' : 'transparent',
              color: on ? 'var(--brand-primary-700)' : 'var(--fg-2)',
              fontFamily: 'var(--font-ui)',
              fontSize: 13,
              fontWeight: on ? 600 : 500,
              letterSpacing: '0.02em',
              cursor: 'pointer',
              transition: 'background 0.15s ease, border-color 0.15s ease, color 0.15s ease'
            }}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}

window.TopicChips = TopicChips;
