/* =========================================================
   AIProductSubpageTemplateCN.jsx — 产品子页统一模板（中文）
   ---------------------------------------------------------
   对应 AIProductSubpageTemplate.jsx，7 个模块顺序与 id 完全一致：
     1 SubHero  2 全屏演示  3 能力清单  4 应用场景
     5 信任脚注  6 使用权限与状态（#access）  7 结尾双 CTA
   产品名 DeepEvidence / SeekEvidence 保持英文原样。
   ========================================================= */

const SUBPAGE_STATUS_BADGE_CN = {
  limitedPreview: { label: '限量预览', bg: 'var(--brand-primary-100)', color: 'var(--brand-primary-700)', dot: 'var(--brand-primary-500)' },
  ga:             { label: '正式可用', bg: 'var(--success-100)',       color: '#0d6e58',                   dot: 'var(--success-500)' },
  inDevelopment:  { label: '研发中',   bg: 'var(--warning-100)',       color: 'var(--warning-700)',        dot: 'var(--warning-500)' },
  comingSoon:     { label: '即将推出', bg: 'var(--neutral-100)',       color: 'var(--neutral-700)',        dot: 'var(--neutral-500)' },
};

function cnLink(href) {
  const L = (window.MSH && window.MSH.L) ? window.MSH.L : function (x) { return x; };
  return L(href);
}

function AIProductSubpageCN({ product }) {
  if (!product) {
    return (
      <div style={{ padding: 96, textAlign: 'center', color: 'var(--fg-3)' }}>
        未找到该产品。
        <p><a href={cnLink('/ai-platform.html')}>← 返回 AI 平台总览</a></p>
      </div>
    );
  }
  return (
    <PageShell hero={<SubHeroCN product={product} />}>
      <FullScreenShowcaseCN product={product} />
      <CapabilitiesListCN product={product} />
      <UseCasesCN product={product} />
      <TrustFootnoteCN product={product} />
      <AccessAndStatusCN product={product} />
      <ProductFinalCTACN product={product} />
    </PageShell>
  );
}

/* ── 1. SubHero ───────────────────────────────────────────── */
function SubHeroCN({ product }) {
  const status = SUBPAGE_STATUS_BADGE_CN[product.status] || SUBPAGE_STATUS_BADGE_CN.comingSoon;
  const name = (product.name && product.name.en) || product.slug;
  const role = (product.userRole && (product.userRole.cn || product.userRole.en)) || product.userRole || '';
  const positioning =
    (product.positioningOneLiner && (product.positioningOneLiner.cn || product.positioningOneLiner.en)) ||
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
      <div style={{ position: 'relative', maxWidth: 'var(--container-max, 1280px)', margin: '0 auto' }}>
        <nav aria-label="面包屑导航" style={{ marginBottom: 24, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
          <a href={cnLink('/')} style={{ color: 'inherit', textDecoration: 'none' }}>首页</a>
          <span style={{ margin: '0 8px' }}>/</span>
          <a href={cnLink('/ai-platform.html') + '#products'} style={{ color: 'inherit', textDecoration: 'none' }}>AI 平台</a>
          <span style={{ margin: '0 8px' }}>/</span>
          <span>{name}</span>
        </nav>

        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '4px 10px', borderRadius: 999,
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.20)',
          color: 'var(--white)',
          fontSize: 11, fontWeight: 700,
          letterSpacing: '0.06em',
          fontFamily: 'var(--font-ui)',
          marginBottom: 24,
        }}>
          <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: '50%', background: status.dot }} />
          {status.label}
        </span>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(40px, 6vw, 72px)',
          lineHeight: 1.05,
          margin: '0 0 16px',
          letterSpacing: '-0.02em',
        }}>{name}</h1>

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
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.85)',
            margin: 0,
            maxWidth: 720,
          }}>{positioning}</p>
        )}
      </div>
    </section>
  );
}

/* ── 2. 全屏演示 ────────────────────────────────────────── */
function FullScreenShowcaseCN({ product }) {
  if (!product.showcase) return null;
  const Showcase = (typeof window !== 'undefined') ? window.AIProductShowcaseCN : null;
  if (!Showcase) return null;
  return <Showcase products={[product]} autoRotateMs={9999999} />;
}

/* ── 3. 能力清单 ────────────────────────────────────────── */
function CapabilitiesListCN({ product }) {
  const caps = Array.isArray(product.capabilitiesFull)
    ? product.capabilitiesFull.map((c) => (c && (c.cn || c.en)) || c).filter(Boolean)
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
          letterSpacing: '0.14em',
          color: 'var(--brand-accent-700)', fontWeight: 700, marginBottom: 12,
        }}>核心能力</div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 3.4vw, 40px)',
          fontWeight: 600,
          color: 'var(--brand-primary-700)',
          margin: '0 0 32px',
          lineHeight: 1.3,
          letterSpacing: '-0.01em',
        }}>这款产品具体做什么。</h2>
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
                fontSize: 14, lineHeight: 1.7,
                color: 'var(--fg-1)', fontFamily: 'var(--font-ui)',
              }}>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── 4. 应用场景 ────────────────────────────────────────── */
function UseCasesCN({ product }) {
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
          letterSpacing: '0.14em',
          color: 'var(--brand-accent-700)', fontWeight: 700, marginBottom: 12,
        }}>应用场景</div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 3.4vw, 40px)',
          fontWeight: 600,
          color: 'var(--brand-primary-700)',
          margin: '0 0 32px',
          lineHeight: 1.3,
          letterSpacing: '-0.01em',
        }}>它在哪些场合被用到。</h2>
        <div className="aips-usecase-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(16px, 2vw, 24px)',
        }}>
          {cases.map((c, i) => {
            const title = (c.title && (c.title.cn || c.title.en)) || c.title || '';
            const desc  = (c.description && (c.description.cn || c.description.en)) || c.description || '';
            return (
              <article key={i} style={{
                background: 'var(--bg-1)',
                border: '1px solid var(--border-1)',
                borderRadius: 14,
                overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}>
                {c.workflowImage && c.workflowImage.url && (
                  <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: 'var(--neutral-100)' }}>
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
                    margin: 0, lineHeight: 1.4,
                  }}>{title}</h3>
                  {desc && (
                    <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: 'var(--fg-2)' }}>{desc}</p>
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

/* ── 5. 信任脚注 ────────────────────────────────────────── */
function TrustFootnoteCN({ product }) {
  return (
    <section style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      background: 'var(--bg-1)',
    }}>
      <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          fontFamily: 'var(--font-ui)', fontSize: 12,
          letterSpacing: '0.14em',
          color: 'var(--brand-accent-700)', fontWeight: 700, marginBottom: 12,
        }}>信任基础</div>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(20px, 2.6vw, 26px)',
          lineHeight: 1.6,
          color: 'var(--brand-primary-700)',
          margin: '0 0 24px',
        }}>
          与梅斯其他 AI 产品一样，建在同一套{' '}
          <a href={cnLink('/ai-platform.html') + '#foundation'} style={{
            color: 'var(--brand-accent-700)', textDecoration: 'underline',
          }}>数据底座</a>{' '}
          与同一套{' '}
          <a href={cnLink('/ai-platform.html') + '#method'} style={{
            color: 'var(--brand-accent-700)', textDecoration: 'underline',
          }}>医生在环方法</a>{' '}之上。
        </p>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--fg-3)', margin: 0 }}>
          每一条回答都带具名临床医生审阅人与引用链路，审计日志在合作项目中可导出。
        </p>
      </div>
    </section>
  );
}

/* ── 6. 使用权限与状态 ─────────────────────────────────── */
function AccessAndStatusCN({ product }) {
  const isComingSoon = product.status === 'comingSoon';
  const isLimited    = product.status === 'limitedPreview';
  const name = (product.name && product.name.en) || product.slug;
  const accessHref =
    isComingSoon ? (cnLink('/contact.html') + '?intent=ai_notify_me')
                 : (product.accessUrl || (cnLink('/ai-platform-' + product.slug + '.html') + '#access'));
  const heading =
    isComingSoon ? '限量预览开放时立刻通知你'
    : isLimited  ? ('申请 ' + name + ' 限量预览')
                 : ('开始使用 ' + name);

  return (
    <section id="access" style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      background: 'var(--brand-primary-900)',
      color: 'var(--white)',
    }}>
      <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{
          fontFamily: 'var(--font-ui)', fontSize: 12,
          letterSpacing: '0.14em',
          color: 'var(--brand-accent-500)', fontWeight: 700,
        }}>使用权限与状态</div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 3.4vw, 40px)',
          fontWeight: 600,
          margin: 0, lineHeight: 1.3,
          letterSpacing: '-0.01em',
        }}>{heading}</h2>
        <p style={{
          margin: 0, fontSize: 14, lineHeight: 1.7,
          color: 'rgba(255,255,255,0.78)', maxWidth: 560,
        }}>
          {isComingSoon
            ? '限量预览开放的那一刻，我们会发邮件通知你。不进营销名单，只发上线提醒。'
            : isLimited
            ? '限量预览面向合作项目中的临床与研究团队开放。申请我们在 5 个工作日内完成审核。'
            : '生产级使用权限，配具名负责人与服务水平约定（SLA）。'}
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
            {isComingSoon ? '上线时通知我 →' : '申请使用权限 →'}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── 7. 结尾双 CTA ─────────────────────────────────────── */
function ProductFinalCTACN({ product }) {
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
        <a href={cnLink('/contact.html') + '?intent=ai_product_team&product=' + product.slug}
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
          <span style={{ fontSize: 11, letterSpacing: '0.14em', color: 'var(--brand-accent-700)', fontWeight: 700 }}>
            联系产品团队
          </span>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.4vw, 28px)',
            fontWeight: 600, lineHeight: 1.4,
          }}>工作流问题、系统对接、定制评测 →</span>
        </a>
        <a href={cnLink('/ai-platform.html')}
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
          <span style={{ fontSize: 11, letterSpacing: '0.14em', color: 'var(--brand-accent-700)', fontWeight: 700 }}>
            完整 AI 平台
          </span>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.4vw, 28px)',
            fontWeight: 600, lineHeight: 1.4,
          }}>看数据底座、方法，以及其他产品 →</span>
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

if (typeof window !== 'undefined') window.AIProductSubpageCN = AIProductSubpageCN;
