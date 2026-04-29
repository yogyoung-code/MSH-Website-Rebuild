/* =========================================================
   AIProductSubpageTemplate.jsx — /ai-platform/<slug> 统一模板
   ---------------------------------------------------------
   Spec §3.5 — 产品子页 7 模块统一模板。 加新产品 = 新建 aiProduct doc +
   一份 ai-platform-<slug>.html instance, 共享同一模板组件。

   Plan task 12 step 1。

   7 modules (spec §3.5):
     1. SubHero            产品名 + status badge + 1 句 positioning
     2. FullScreenShowcase 当前产品的 demo 单 Tab 全屏版 (复用 AIProductShowcase + 单 product)
     3. CapabilitiesList   4–6 条核心能力, 带 icon + 1 行解释
     4. UseCases           3 个典型用户场景 (场景描述 + 工作流截图)
     5. TrustFootnote      链回 #foundation 数字底座 + #method PITL/audit log
     6. AccessAndStatus    按 status 渲染:Limited Preview 申请 / Notify-me
     7. ProductFinalCTA    Talk to product team + See full AI Platform

   Usage:
     <AIProductSubpage product={...} />
   ========================================================= */

const SUBPAGE_STATUS_BADGE = {
  limitedPreview: { label: 'Limited Preview', bg: 'var(--brand-primary-100)', color: 'var(--brand-primary-700)', dot: 'var(--brand-primary-500)' },
  ga:             { label: 'Generally Available', bg: 'var(--success-100)',     color: '#0d6e58',                   dot: 'var(--success-500)' },
  comingSoon:     { label: 'Coming Soon',          bg: 'var(--neutral-100)',     color: 'var(--neutral-700)',         dot: 'var(--neutral-500)' },
};

function AIProductSubpage({ product }) {
  if (!product) {
    return (
      <div style={{ padding: 96, textAlign: 'center', color: 'var(--fg-3)' }}>
        Product not found.
        <p><a href="/ai-platform">← Back to AI Platform overview</a></p>
      </div>
    );
  }
  return (
    <PageShell hero={<SubHero product={product} />}>
      <FullScreenShowcase product={product} />
      <CapabilitiesList product={product} />
      <UseCases product={product} />
      <TrustFootnote product={product} />
      <AccessAndStatus product={product} />
      <ProductFinalCTA product={product} />
    </PageShell>
  );
}

/* ── 1. SubHero ───────────────────────────────────────────── */
function SubHero({ product }) {
  const status = SUBPAGE_STATUS_BADGE[product.status] || SUBPAGE_STATUS_BADGE.comingSoon;
  const nameEn = (product.name && product.name.en) || product.slug;
  const role   = (product.userRole && product.userRole.en) || product.userRole || '';
  const positioning =
    (product.positioningOneLiner && product.positioningOneLiner.en) ||
    product.positioningOneLiner || '';

  return (
    <section style={{
      padding: 'clamp(64px, 8vw, 128px) clamp(24px, 6vw, 96px) clamp(48px, 6vw, 80px)',
      background: 'linear-gradient(180deg, #001037 0%, #001A51 60%, #002a6c 100%)',
      color: 'var(--white)',
      position: 'relative', overflow: 'hidden',
    }}>
      <span aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 30% 30%, rgba(0,174,219,0.18), transparent 55%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'relative',
        maxWidth: 'var(--container-max, 1280px)', margin: '0 auto',
      }}>
        <nav aria-label="Breadcrumb" style={{
          marginBottom: 24, fontSize: 13,
          color: 'rgba(255,255,255,0.6)',
        }}>
          <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
          <span style={{ margin: '0 8px' }}>/</span>
          <a href="/ai-platform#products" style={{ color: 'inherit', textDecoration: 'none' }}>AI Platform</a>
          <span style={{ margin: '0 8px' }}>/</span>
          <span>{nameEn}</span>
        </nav>

        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '4px 10px', borderRadius: 999,
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.20)',
          color: 'var(--white)',
          fontSize: 11, fontWeight: 700,
          letterSpacing: '0.06em', textTransform: 'uppercase',
          fontFamily: 'var(--font-ui)',
          marginBottom: 24,
        }}>
          <span aria-hidden="true" style={{
            width: 6, height: 6, borderRadius: '50%', background: status.dot,
          }} />
          {status.label}
        </span>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(40px, 6vw, 72px)',
          lineHeight: 1.05,
          margin: '0 0 16px',
          letterSpacing: '-0.02em',
        }}>{nameEn}</h1>

        {role && (
          <div style={{
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 13, letterSpacing: '0.06em',
            color: 'var(--brand-accent-500)',
            marginBottom: 20,
          }}>{role}</div>
        )}

        {positioning && (
          <p style={{
            fontSize: 'clamp(16px, 2vw, 22px)',
            lineHeight: 1.5,
            color: 'rgba(255,255,255,0.85)',
            margin: 0,
            maxWidth: 720,
          }}>{positioning}</p>
        )}
      </div>
    </section>
  );
}

/* ── 2. Full-screen Showcase (单 Tab) ──────────────────── */
function FullScreenShowcase({ product }) {
  if (!product.showcase) return null;
  const Showcase = (typeof window !== 'undefined') ? window.AIProductShowcase : null;
  if (!Showcase) return null;
  // 单 product, AIProductShowcase 自动隐藏 Tab Switcher (length < 2 不轮播)
  return (
    <Showcase products={[product]} autoRotateMs={9999999} />
  );
}

/* ── 3. CapabilitiesList ─────────────────────────────────── */
function CapabilitiesList({ product }) {
  const caps = Array.isArray(product.capabilitiesFull)
    ? product.capabilitiesFull.map((c) => (c && c.en) || c).filter(Boolean)
    : [];
  if (caps.length === 0) return null;
  return (
    <section style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      background: 'var(--bg-1)',
    }}>
      <div style={{ maxWidth: 'var(--container-max, 1280px)', margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-ui)', fontSize: 12,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--brand-accent-700)', fontWeight: 700, marginBottom: 12,
        }}>CAPABILITIES</div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 3.4vw, 40px)',
          fontWeight: 600,
          color: 'var(--brand-primary-700)',
          margin: '0 0 32px',
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
        }}>What this product does.</h2>
        <ul className="aips-cap-list" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(16px, 2vw, 24px)',
          listStyle: 'none', padding: 0, margin: 0,
        }}>
          {caps.map((c, i) => (
            <li key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 12,
              padding: 'clamp(16px, 2vw, 20px)',
              background: 'var(--bg-2, var(--neutral-50))',
              border: '1px solid var(--border-1)',
              borderRadius: 12,
            }}>
              <span aria-hidden="true" style={{
                flexShrink: 0,
                width: 32, height: 32, borderRadius: 8,
                background: 'var(--brand-accent-100)',
                color: 'var(--brand-accent-700)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <i data-lucide="check" width="18" height="18" />
              </span>
              <span style={{
                fontSize: 14, lineHeight: 1.5,
                color: 'var(--fg-1)', fontFamily: 'var(--font-ui)',
              }}>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── 4. UseCases ─────────────────────────────────────────── */
function UseCases({ product }) {
  const cases = Array.isArray(product.useCases) ? product.useCases : [];
  if (cases.length === 0) return null;
  return (
    <section style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      background: 'var(--bg-2, var(--neutral-50))',
      borderTop: '1px solid var(--border-1)',
    }}>
      <div style={{ maxWidth: 'var(--container-max, 1280px)', margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-ui)', fontSize: 12,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--brand-accent-700)', fontWeight: 700, marginBottom: 12,
        }}>USE CASES</div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 3.4vw, 40px)',
          fontWeight: 600,
          color: 'var(--brand-primary-700)',
          margin: '0 0 32px',
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
        }}>Where it shows up.</h2>
        <div className="aips-usecase-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(16px, 2vw, 24px)',
        }}>
          {cases.map((c, i) => {
            const title = (c.title && c.title.en) || c.title || '';
            const desc  = (c.description && c.description.en) || c.description || '';
            return (
              <article key={i} style={{
                background: 'var(--bg-1)',
                border: '1px solid var(--border-1)',
                borderRadius: 14,
                overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}>
                {c.workflowImage && c.workflowImage.url && (
                  <div style={{
                    aspectRatio: '16/9', overflow: 'hidden', background: 'var(--neutral-100)',
                  }}>
                    <img src={c.workflowImage.url}
                      alt={c.workflowImage.alt || title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
                <div style={{ padding: 'clamp(16px, 2vw, 24px)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(18px, 2vw, 22px)',
                    fontWeight: 600,
                    color: 'var(--brand-primary-700)',
                    margin: 0, lineHeight: 1.3,
                  }}>{title}</h3>
                  {desc && (
                    <p style={{
                      margin: 0, fontSize: 14, lineHeight: 1.6,
                      color: 'var(--fg-2)',
                    }}>{desc}</p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── 5. TrustFootnote ────────────────────────────────────── */
function TrustFootnote({ product }) {
  return (
    <section style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      background: 'var(--bg-1)',
    }}>
      <div style={{
        maxWidth: 720, margin: '0 auto',
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: 'var(--font-ui)', fontSize: 12,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--brand-accent-700)', fontWeight: 700, marginBottom: 12,
        }}>TRUST</div>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(20px, 2.6vw, 26px)',
          lineHeight: 1.4,
          color: 'var(--brand-primary-700)',
          margin: '0 0 24px',
        }}>
          Built on the same{' '}
          <a href="/ai-platform#foundation" style={{
            color: 'var(--brand-accent-700)', textDecoration: 'underline',
            fontStyle: 'italic',
          }}>data substrate</a>{' '}
          and{' '}
          <a href="/ai-platform#method" style={{
            color: 'var(--brand-accent-700)', textDecoration: 'underline',
            fontStyle: 'italic',
          }}>physician-in-the-loop method</a>{' '}
          as every other MedSci AI product.
        </p>
        <p style={{
          fontSize: 13, lineHeight: 1.6,
          color: 'var(--fg-3)',
          margin: 0,
        }}>
          Each answer ships with named clinician reviewer, citation trail,
          and exportable audit log on engagement.
        </p>
      </div>
    </section>
  );
}

/* ── 6. AccessAndStatus ──────────────────────────────────── */
function AccessAndStatus({ product }) {
  const isComingSoon = product.status === 'comingSoon';
  const isLimited    = product.status === 'limitedPreview';
  const accessHref =
    isComingSoon ? '/contact?intent=ai_notify_me'
                 : (product.accessUrl || `/ai-platform/${product.slug}#access`);
  const heading =
    isComingSoon ? 'Get notified when it ships'
    : isLimited  ? `Apply for ${(product.name && product.name.en) || product.slug} Limited Preview`
                 : `Get started with ${(product.name && product.name.en) || product.slug}`;

  return (
    <section id="access" style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      background: 'var(--brand-primary-900)',
      color: 'var(--white)',
    }}>
      <div style={{
        maxWidth: 720, margin: '0 auto',
        display: 'flex', flexDirection: 'column', gap: 20,
      }}>
        <div style={{
          fontFamily: 'var(--font-ui)', fontSize: 12,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--brand-accent-500)', fontWeight: 700,
        }}>ACCESS &amp; STATUS</div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 3.4vw, 40px)',
          fontWeight: 600,
          margin: 0, lineHeight: 1.2,
          letterSpacing: '-0.01em',
        }}>{heading}</h2>
        <p style={{
          margin: 0, fontSize: 14, lineHeight: 1.6,
          color: 'rgba(255,255,255,0.78)', maxWidth: 560,
        }}>
          {isComingSoon
            ? 'We will email you the moment Limited Preview opens. No marketing list — just the launch alert.'
            : isLimited
            ? 'Limited Preview is open to clinicians and research teams under engagement. We review applications within 5 business days.'
            : 'Production-grade access with named owner and SLA.'}
        </p>
        <div style={{ marginTop: 12 }}>
          <a href={accessHref}
            onClick={() => {
              if (typeof window !== 'undefined' && window.MSHAnalytics) {
                if (isComingSoon && window.MSHAnalytics.trackNotifyMeSubmit) {
                  window.MSHAnalytics.trackNotifyMeSubmit('ai_platform_subpage');
                } else if (window.MSHAnalytics.trackAccessRequestSubmit) {
                  window.MSHAnalytics.trackAccessRequestSubmit(product.slug, product.userRole);
                }
              }
            }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 28px', borderRadius: 10,
              background: 'var(--white)',
              color: 'var(--brand-primary-700)',
              fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 700,
              textDecoration: 'none',
            }}>
            {isComingSoon ? 'Notify me →' : 'Request access →'}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── 7. ProductFinalCTA ──────────────────────────────────── */
function ProductFinalCTA({ product }) {
  return (
    <section style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      background: 'var(--bg-2, var(--neutral-50))',
      borderTop: '1px solid var(--border-1)',
    }}>
      <div className="aips-product-final" style={{
        maxWidth: 'var(--container-max, 1280px)', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr',
        gap: 'clamp(16px, 2vw, 24px)',
      }}>
        <a href={`/contact?intent=ai_product_team&product=${product.slug}`}
          style={{
            padding: 'clamp(20px, 2.4vw, 28px)',
            background: 'var(--bg-1)',
            border: '1px solid var(--border-1)',
            borderRadius: 14,
            textDecoration: 'none',
            color: 'var(--brand-primary-700)',
            display: 'flex', flexDirection: 'column', gap: 6,
            transition: 'border-color 200ms ease, box-shadow 200ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--brand-primary-700)';
            e.currentTarget.style.boxShadow = '0 12px 24px -8px rgba(0,16,55,0.10)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-accent-700)', fontWeight: 700 }}>
            TALK TO PRODUCT TEAM
          </span>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.4vw, 28px)',
            fontWeight: 600, lineHeight: 1.25,
          }}>Workflow questions, integrations, custom evaluations →</span>
        </a>
        <a href="/ai-platform"
          style={{
            padding: 'clamp(20px, 2.4vw, 28px)',
            background: 'var(--bg-1)',
            border: '1px solid var(--border-1)',
            borderRadius: 14,
            textDecoration: 'none',
            color: 'var(--brand-primary-700)',
            display: 'flex', flexDirection: 'column', gap: 6,
            transition: 'border-color 200ms ease, box-shadow 200ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--brand-primary-700)';
            e.currentTarget.style.boxShadow = '0 12px 24px -8px rgba(0,16,55,0.10)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-accent-700)', fontWeight: 700 }}>
            FULL AI PLATFORM
          </span>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.4vw, 28px)',
            fontWeight: 600, lineHeight: 1.25,
          }}>See the data substrate, the method, and other products →</span>
        </a>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .aips-product-final { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

if (typeof window !== 'undefined') window.AIProductSubpage = AIProductSubpage;
