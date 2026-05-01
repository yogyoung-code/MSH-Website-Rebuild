/* =========================================================
   AIProductCard.jsx — /ai-platform v3.0 · Act 2 Card Grid
   ---------------------------------------------------------
   单卡:status badge + product name + userRole + positioningOneLiner
   (2 行) + capabilitiesShort (3 bullets) + 双 CTA (Learn more / Request access)。

   Spec §3.3 — Card 结构 + Status Badge 三色 (limitedPreview blue /
   ga green / comingSoon gray)。

   Plan task 7 step 1-2.

   Usage:
     <AIProductCard product={...} />
   ========================================================= */

const STATUS_BADGE = {
  limitedPreview: {
    label: 'Limited Preview',
    bg:    'var(--brand-primary-100, #E4F2FC)',
    color: 'var(--brand-primary-700, #001A51)',
    dot:   'var(--brand-primary-500, #005AA4)',
  },
  ga: {
    label: 'Generally Available',
    bg:    'var(--success-100, #E6F4EF)',
    color: '#0d6e58',
    dot:   'var(--success-500, #2E9F82)',
  },
  inDevelopment: {
    label: 'In Development',
    bg:    'var(--warning-100, #FEF3C7)',
    color: 'var(--warning-700, #92400E)',
    dot:   'var(--warning-500, #F59E0B)',
  },
  comingSoon: {
    label: 'Coming Soon',
    bg:    'var(--neutral-100, #E2E8F0)',
    color: 'var(--neutral-700, #334155)',
    dot:   'var(--neutral-500, #64748B)',
  },
};

function AIProductCard({ product, position }) {
  if (!product) return null;
  const status = STATUS_BADGE[product.status] || STATUS_BADGE.comingSoon;
  const slug = product.slug || '';

  // GA hook (Task 15 — `ai_product_card_click` Lead Score A)
  const fireClick = function () {
    if (typeof window !== 'undefined' && window.MSHAnalytics
        && typeof window.MSHAnalytics.trackProductCardClick === 'function') {
      window.MSHAnalytics.trackProductCardClick(slug, position || 0, product.status);
    }
  };
  const nameEn = (product.name && product.name.en) || slug;
  const userRole = (product.userRole && product.userRole.en) || product.userRole || '';
  const positioning =
    (product.positioningOneLiner && product.positioningOneLiner.en) ||
    product.positioningOneLiner || '';
  const caps = Array.isArray(product.capabilitiesShort)
    ? product.capabilitiesShort.map((c) => (c && c.en) || c).filter(Boolean)
    : [];

  return (
    <article style={{
      background: 'var(--bg-1)',
      border: '1px solid var(--border-1)',
      borderRadius: 16,
      padding: 'clamp(20px, 2.4vw, 32px)',
      display: 'flex', flexDirection: 'column',
      gap: 16,
      transition: 'border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease',
      position: 'relative',
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-strong, var(--brand-primary-700))';
        e.currentTarget.style.boxShadow = '0 12px 24px -8px rgba(0,16,55,0.08)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-1)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Status badge */}
      <div>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '4px 10px', borderRadius: 999,
          background: status.bg, color: status.color,
          fontSize: 11, fontWeight: 700,
          letterSpacing: '0.06em', textTransform: 'uppercase',
          fontFamily: 'var(--font-ui)',
        }}>
          <span aria-hidden="true" style={{
            width: 6, height: 6, borderRadius: '50%', background: status.dot,
          }} />
          {status.label}
        </span>
      </div>

      {/* Product name + user role */}
      <div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(22px, 2.4vw, 28px)',
          fontWeight: 600,
          color: 'var(--brand-primary-700)',
          lineHeight: 1.2,
          margin: '0 0 6px',
          letterSpacing: '-0.01em',
        }}>{nameEn}</h3>
        {userRole && (
          <div style={{
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 12,
            letterSpacing: '0.04em',
            color: 'var(--fg-3)',
          }}>{userRole}</div>
        )}
      </div>

      <hr aria-hidden="true" style={{
        border: 0, borderTop: '1px solid var(--border-1)', margin: 0,
      }} />

      {/* Positioning 2-line */}
      {positioning && (
        <p style={{
          margin: 0,
          fontSize: 14,
          lineHeight: 1.6,
          color: 'var(--fg-2)',
        }}>{positioning}</p>
      )}

      <hr aria-hidden="true" style={{
        border: 0, borderTop: '1px solid var(--border-1)', margin: 0,
      }} />

      {/* Capabilities (3 bullets) */}
      {caps.length > 0 && (
        <ul style={{
          listStyle: 'none', padding: 0, margin: 0,
          display: 'flex', flexDirection: 'column', gap: 8,
        }}>
          {caps.map((c, i) => (
            <li key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 10,
              fontSize: 13, lineHeight: 1.5,
              color: 'var(--fg-1)',
            }}>
              <span aria-hidden="true" style={{
                width: 6, height: 6, borderRadius: '50%',
                background: 'var(--brand-accent-500)',
                marginTop: 7, flexShrink: 0,
              }} />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTAs */}
      <div style={{
        marginTop: 'auto', paddingTop: 8,
        display: 'flex', gap: 12,
        flexWrap: 'wrap',
      }}>
        <a href={`/ai-platform/${slug}`}
          onClick={fireClick}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '10px 16px', borderRadius: 8,
            color: 'var(--brand-primary-700)',
            border: '1px solid var(--brand-primary-700)',
            background: 'transparent',
            fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600,
            textDecoration: 'none',
            transition: 'background 200ms ease, color 200ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--brand-primary-700)';
            e.currentTarget.style.color = 'var(--white)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--brand-primary-700)';
          }}
        >
          Learn more →
        </a>
        {product.status !== 'comingSoon' && product.status !== 'inDevelopment' && (
          <a href={`/ai-platform/${slug}#access`}
            onClick={fireClick}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '10px 16px', borderRadius: 8,
              color: 'var(--white)',
              background: 'var(--brand-primary-700)',
              border: '1px solid var(--brand-primary-700)',
              fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600,
              textDecoration: 'none',
              transition: 'background 200ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--brand-primary-500)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--brand-primary-700)';
            }}
          >
            Request access
          </a>
        )}
        {product.status === 'inDevelopment' && (
          <a href={`/contact.html?intent=ai_design_partner&product=${slug}`}
            onClick={fireClick}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '10px 16px', borderRadius: 8,
              color: 'var(--brand-accent-700)',
              background: 'var(--brand-accent-100, #E6FBFF)',
              border: '1px solid var(--brand-accent-500)',
              fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600,
              textDecoration: 'none',
              transition: 'background 200ms ease',
            }}
          >
            Become a design partner →
          </a>
        )}
      </div>
    </article>
  );
}

if (typeof window !== 'undefined') window.AIProductCard = AIProductCard;
