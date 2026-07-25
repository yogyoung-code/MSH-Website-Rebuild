/* =========================================================
   CountryCompareCN.jsx — CountryCompare 的中文版（战略路径页专用）
   ---------------------------------------------------------
   结构与 components/CountryCompare.jsx 一一对应。之所以需要 CN 版，
   是因为原组件把栏目标签（From / To / Regulator / Typical timeline /
   Reviewer language / Constraints to plan for）硬编码在内部，
   无法通过 props 传中文。其余样式、断点与 SVG 完全一致。

   用法：
   <CountryCompareCN
     direction="cn-to-us"        // 'us-to-cn' | 'cn-to-us'
     eyebrow="跨境路径"
     title="资产跨越太平洋时，会变的是什么。"
     left={{ code: 'CN', label: '中国（起点）', regulator: 'NMPA · CDE',
             timeline: '中国 II / III 期已完成', reviewerLanguage: '中文 · 简体',
             constraints: ['三甲医院医生签核'] }}
     right={{ ... }}
   />
   ========================================================= */

function CountryCompareCN({ direction = 'us-to-cn', eyebrow, title, lede, left, right }) {
  if (!left || !right) {
    console.warn('CountryCompareCN: requires both left and right props');
    return null;
  }
  const leftToRight = direction === 'us-to-cn'
    || direction === 'left-to-right'
    || direction === undefined;

  return (
    <section style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      background: 'var(--bg-1)',
      borderTop: '1px solid var(--border-1)',
      borderBottom: '1px solid var(--border-1)'
    }}>
      <div style={{ maxWidth: 'var(--container-max, 1280px)', margin: '0 auto' }}>
        {(eyebrow || title || lede) && (
          <div style={{ marginBottom: 'clamp(32px, 4vw, 48px)', maxWidth: 720 }}>
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
                fontSize: 'clamp(28px, 3.4vw, 40px)',
                fontWeight: 600,
                color: 'var(--brand-primary-700)',
                lineHeight: 1.2,
                margin: '0 0 12px',
                letterSpacing: '-0.01em'
              }}>{title}</h2>
            )}
            {lede && (
              <p style={{
                fontSize: 17, color: 'var(--fg-2)',
                lineHeight: 1.55, margin: 0,
                maxWidth: 640
              }}>{lede}</p>
            )}
          </div>
        )}

        <div className="cc-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: 'clamp(16px, 2vw, 32px)',
          alignItems: 'stretch'
        }}>
          <CountryColumnCN data={left} role={leftToRight ? 'origin' : 'destination'} />
          <ArrowCN direction={leftToRight ? 'right' : 'left'} />
          <CountryColumnCN data={right} role={leftToRight ? 'destination' : 'origin'} />
        </div>

        <style>{`
          @media (max-width: 900px) {
            .cc-grid {
              grid-template-columns: 1fr !important;
              gap: 16px !important;
            }
            .cc-arrow {
              transform: rotate(90deg);
              justify-self: center;
              padding: 4px 0 !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

function CountryColumnCN({ data, role }) {
  const isOrigin = role === 'origin';
  return (
    <div style={{
      background: isOrigin ? 'var(--bg-2)' : 'var(--bg-1)',
      border: '1px solid var(--border-1)',
      borderRadius: 'var(--radius-lg, 12px)',
      padding: 'clamp(20px, 2.5vw, 32px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      position: 'relative'
    }}>
      <span style={{
        position: 'absolute', top: 0, left: 'clamp(20px, 2.5vw, 32px)',
        right: 'clamp(20px, 2.5vw, 32px)', height: 2,
        background: isOrigin ? 'var(--brand-primary-300)' : 'var(--brand-accent-500)',
        opacity: 0.85
      }} />

      <header style={{ display: 'flex', alignItems: 'baseline', gap: 12, paddingTop: 4, flexWrap: 'wrap' }}>
        <span style={{
          fontFamily: 'var(--font-ui)',
          fontSize: 11, letterSpacing: '0.14em',
          color: isOrigin ? 'var(--fg-3)' : 'var(--brand-accent-700)',
          fontWeight: 700,
          flexShrink: 0
        }}>{isOrigin ? '从' : '到'}</span>
        {(data.code || data.flag) && (
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 600,
            color: 'var(--fg-2)',
            background: 'var(--bg-1)',
            border: '1px solid var(--border-1)',
            borderRadius: 'var(--radius-sm, 4px)',
            padding: '3px 8px',
            lineHeight: 1.3,
            flexShrink: 0,
            alignSelf: 'center'
          }}>{data.code || data.flag}</span>
        )}
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(22px, 2.4vw, 28px)',
          fontWeight: 600,
          color: 'var(--brand-primary-700)',
          margin: 0, lineHeight: 1.2,
          letterSpacing: '-0.005em'
        }}>{data.label}</h3>
      </header>

      <dl style={{ margin: 0, display: 'grid', gap: 12 }}>
        {data.regulator && <RowCN k="监管机构" v={data.regulator} mono />}
        {data.timeline && <RowCN k="通常周期" v={data.timeline} mono />}
        {data.reviewerLanguage && <RowCN k="审评语言" v={data.reviewerLanguage} />}
      </dl>

      {Array.isArray(data.constraints) && data.constraints.length > 0 && (
        <div style={{ marginTop: 4 }}>
          <div style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 11, letterSpacing: '0.14em',
            color: 'var(--fg-3)',
            fontWeight: 600, marginBottom: 8
          }}>需要提前规划的约束</div>
          <ul style={{
            listStyle: 'none', padding: 0, margin: 0,
            display: 'grid', gap: 6
          }}>
            {data.constraints.map((c, i) => (
              <li key={i} style={{
                fontSize: 14, color: 'var(--fg-1)',
                lineHeight: 1.5, paddingLeft: 14, position: 'relative'
              }}>
                <span aria-hidden="true" style={{
                  position: 'absolute', left: 0, top: 8,
                  width: 6, height: 1.5, background: 'var(--brand-primary-500)'
                }} />
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function RowCN({ k, v, mono }) {
  return (
    <div>
      <dt style={{
        fontFamily: 'var(--font-ui)',
        fontSize: 11, letterSpacing: '0.12em',
        color: 'var(--fg-3)',
        fontWeight: 600, marginBottom: 4
      }}>{k}</dt>
      <dd style={{
        margin: 0,
        fontFamily: mono ? 'var(--font-mono)' : 'var(--font-ui)',
        fontSize: mono ? 14 : 15,
        color: 'var(--fg-1)',
        lineHeight: 1.45
      }}>{v}</dd>
    </div>
  );
}

function ArrowCN({ direction }) {
  const reduced = typeof window !== 'undefined'
    && window.matchMedia
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="cc-arrow" aria-hidden="true" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 12px',
      minWidth: 64
    }}>
      <svg
        viewBox="0 0 64 24"
        width="64" height="24"
        style={{
          transform: direction === 'left' ? 'scaleX(-1)' : 'none',
          color: 'var(--brand-accent-500)'
        }}
      >
        <g fill="currentColor" opacity="0.35">
          <circle cx="6"  cy="12" r="1.4" />
          <circle cx="14" cy="12" r="1.4" />
          <circle cx="22" cy="12" r="1.4" />
          <circle cx="30" cy="12" r="1.4" />
        </g>
        <g fill="currentColor">
          <circle cx="40" cy="12" r="2" />
          <path d="M48 12 L60 12 M52 6 L60 12 L52 18"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
                fill="none" />
        </g>
        {!reduced && (
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            from="0 0" to="0 0"
            dur="0.001s"
            additive="sum"
          />
        )}
      </svg>
    </div>
  );
}

if (typeof window !== 'undefined') window.CountryCompareCN = CountryCompareCN;
