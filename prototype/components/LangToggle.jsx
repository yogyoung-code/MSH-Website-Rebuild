/* LangToggle.jsx — 全站语言切换器（EN ⇄ 中文）
   规则（用户口径）：只有存在语言孪生页时才可点；否则置灰并给出提示，绝不产生死链。
   孪生地址由 assets/i18n.js 的 MSH.altHref() 计算（命名约定 foo.html ⇄ foo-cn.html）。 */
function LangToggle({ variant = 'desktop' }) {
  const M = window.MSH;
  const alt = M ? M.altHref() : null;
  const cur = M ? M.t('langLabel') : 'EN';
  const other = M ? M.t('langOther') : '中文';
  const hint = M ? M.t('langUnavailable') : '';
  const go = () => { if (alt) window.location.href = alt; };

  if (variant === 'mobile') {
    return (
      <button onClick={go} disabled={!alt} title={alt ? '' : hint}
        aria-label={alt ? cur + ' → ' + other : hint}
        style={{
          padding: '8px 14px', background: 'transparent',
          border: '1px solid var(--border-1)',
          cursor: alt ? 'pointer' : 'not-allowed',
          opacity: alt ? 1 : 0.45,
          fontSize: 13, color: 'var(--fg-2)'
        }}>{cur} <span style={{ opacity: 0.5 }}>/</span> {other}</button>
    );
  }
  return (
    <div onClick={go} title={alt ? '' : hint}
      role="button" tabIndex={alt ? 0 : -1} aria-disabled={!alt}
      onKeyDown={(e) => { if (alt && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); go(); } }}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 5,
        fontSize: 13, color: 'var(--fg-2)',
        cursor: alt ? 'pointer' : 'not-allowed',
        opacity: alt ? 1 : 0.45,
        padding: '6px 10px', borderRadius: 6,
      }}>
      <i data-lucide="globe" width="14" height="14"></i>
      <span style={{ fontWeight: 600 }}>{cur}</span>
      <span style={{ opacity: 0.35 }}>/</span>
      <span>{other}</span>
    </div>
  );
}

window.LangToggle = LangToggle;
