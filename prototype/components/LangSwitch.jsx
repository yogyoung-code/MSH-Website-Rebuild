/* LangSwitch.jsx — Bilingual switcher for IA-mandated bilingual pages (B4+) */

function LangSwitch({ enabled, current = 'en', onSwitch }) {
  if (!enabled) return null;
  return (
    <div style={{
      display: 'inline-flex', gap: 4, alignItems: 'center',
      fontFamily: 'var(--font-slogan)', fontSize: 13, letterSpacing: '0.08em'
    }}>
      <button onClick={() => onSwitch('en')} disabled={current === 'en'} style={{
        padding: '4px 10px', border: 'none', cursor: current === 'en' ? 'default' : 'pointer',
        background: current === 'en' ? 'var(--brand-primary-700)' : 'transparent',
        color: current === 'en' ? '#fff' : 'inherit'
      }}>EN</button>
      <span style={{ color: 'var(--fg-3)' }}>|</span>
      <button onClick={() => onSwitch('zh')} disabled={current === 'zh'} style={{
        padding: '4px 10px', border: 'none', cursor: current === 'zh' ? 'default' : 'pointer',
        background: current === 'zh' ? 'var(--brand-primary-700)' : 'transparent',
        color: current === 'zh' ? '#fff' : 'inherit'
      }}>中文</button>
    </div>
  );
}

window.LangSwitch = LangSwitch;
