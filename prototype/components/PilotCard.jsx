/* PilotCard.jsx — Pilot page composition + pricing-placeholder logic (B5) */
/*
 * Spec: Copy Deck v4.2 §11.1 / §11.2 — both Pilot pages share identical
 * structure; only the content data object differs. This file exports:
 *
 *   PilotPage({ pilot })      — full page composition (consumed by
 *                                /pilots/<slug>.html)
 *   PilotPricing({ pricing }) — ⚑ PRICING placeholder logic per §11.3
 *
 * ⚑ PRICING rule: when pricing.status === 'pending', render the
 * user-visible string "Pricing on request" + a secondary CTA. The
 * static HTML must not embed the ⚑ glyph (check-page Gate 17).
 */

function PilotPricing({ pricing, contactTopic }) {
  if (!pricing || pricing.status === 'pending') {
    return (
      <div style={{
        padding: '20px 24px',
        border: '1px dashed var(--brand-warn-600, #b45309)',
        background: 'rgba(245, 158, 11, 0.04)',
        marginBottom: 24
      }}>
        <div style={{
          fontFamily: 'var(--font-slogan)',
          fontSize: 11,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--brand-warn-600, #b45309)',
          marginBottom: 6
        }}>Pricing</div>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 24,
          color: 'var(--brand-primary-700)',
          margin: '0 0 8px',
          lineHeight: 1.25
        }}>Pricing on request</div>
        <p style={{ fontSize: 14, color: 'var(--fg-2)', margin: '0 0 14px', lineHeight: 1.5 }}>
          BD and Finance are finalizing the engagement structure. Reach out and we'll share scope and budget bands within one business day.
        </p>
        <a href={`/contact?topic=${contactTopic || 'other'}`} style={{
          display: 'inline-block',
          padding: '10px 20px',
          background: 'var(--brand-primary-700)',
          color: 'var(--bg-1)',
          fontFamily: 'var(--font-ui)',
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: '0.04em',
          textDecoration: 'none'
        }}>Talk to BD about pricing</a>
      </div>
    );
  }
  // Finalized pricing
  return (
    <div style={{
      padding: '20px 24px',
      border: '1px solid var(--border-1)',
      background: 'var(--bg-2)',
      marginBottom: 24
    }}>
      <div style={{
        fontFamily: 'var(--font-slogan)',
        fontSize: 11,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--brand-accent-700)',
        marginBottom: 6
      }}>Pricing</div>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 24,
        color: 'var(--brand-primary-700)',
        lineHeight: 1.25
      }}>{pricing.display}</div>
      {pricing.note && (
        <p style={{ fontSize: 13, color: 'var(--fg-3)', margin: '8px 0 0', lineHeight: 1.5 }}>{pricing.note}</p>
      )}
    </div>
  );
}

function PilotPage({ pilot }) {
  return (
    <PageShell hideHero breadcrumbs={[
      { label: 'Home',   href: '/' },
      { label: 'Pilots', href: '/pilots/' },
      { label: pilot.hero.title }
    ]}>
      {/* Hero */}
      <header style={{
        maxWidth: 880,
        margin: '0 auto',
        padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px) 32px'
      }}>
        <div style={{
          fontFamily: 'var(--font-slogan)',
          fontSize: 12,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--brand-accent-700)',
          marginBottom: 16
        }}>{pilot.hero.eyebrow}</div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 5vw, 56px)',
          lineHeight: 1.15,
          color: 'var(--brand-primary-700)',
          margin: '0 0 24px'
        }}>{pilot.hero.title}</h1>

        <p style={{
          fontSize: 18,
          color: 'var(--fg-1)',
          lineHeight: 1.6,
          margin: 0,
          maxWidth: 720
        }}>{pilot.hero.lede}</p>
      </header>

      {/* What's included */}
      <section style={{
        maxWidth: 1280, margin: '0 auto',
        padding: 'clamp(32px, 5vw, 64px) clamp(24px, 6vw, 96px) 32px'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(24px, 3vw, 32px)',
          color: 'var(--brand-primary-700)',
          margin: '0 0 24px'
        }}>What's included</h2>
        <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.6, margin: '0 0 24px', maxWidth: 720 }}>
          {pilot.includes.intro}
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {pilot.includes.items.map((it, i) => (
            <li key={i} style={{
              padding: '20px 0',
              borderTop: i === 0 ? '1px solid var(--border-1)' : 'none',
              borderBottom: '1px solid var(--border-1)'
            }}>
              <strong style={{ display: 'block', fontSize: 16, color: 'var(--fg-1)', marginBottom: 6 }}>
                {it.label}
              </strong>
              <span style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5 }}>
                {it.body}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Best for */}
      <section style={{
        maxWidth: 1280, margin: '0 auto',
        padding: '32px clamp(24px, 6vw, 96px)'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(22px, 2.5vw, 28px)',
          color: 'var(--brand-primary-700)',
          margin: '0 0 16px'
        }}>Best for</h2>
        <ul style={{ paddingLeft: 20, margin: 0, fontSize: 15, color: 'var(--fg-1)', lineHeight: 1.7 }}>
          {pilot.bestFor.map((b, i) => <li key={i} style={{ marginBottom: 8 }}>{b}</li>)}
        </ul>
      </section>

      {/* Engagement details + Pricing (two-column) */}
      <section style={{
        maxWidth: 1280, margin: '0 auto',
        padding: 'clamp(32px, 5vw, 64px) clamp(24px, 6vw, 96px)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 32
        }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px, 2.5vw, 28px)',
              color: 'var(--brand-primary-700)',
              margin: '0 0 20px'
            }}>Engagement details</h2>
            <dl style={{ margin: 0, fontSize: 14, lineHeight: 1.6 }}>
              {pilot.engagementDetails.map((d, i) => (
                <React.Fragment key={i}>
                  <dt style={{
                    fontFamily: 'var(--font-slogan)',
                    fontSize: 11,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--fg-3)',
                    marginTop: i === 0 ? 0 : 14
                  }}>{d.label}</dt>
                  <dd style={{ margin: '4px 0 0', color: 'var(--fg-1)' }}>{d.value}</dd>
                </React.Fragment>
              ))}
            </dl>
          </div>
          <div>
            <PilotPricing pricing={pilot.pricing} contactTopic={pilot.contactTopic} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href={pilot.cta.primaryHref} style={{
                display: 'inline-block',
                textAlign: 'center',
                padding: '14px 24px',
                background: 'var(--brand-primary-700)',
                color: 'var(--bg-1)',
                fontFamily: 'var(--font-ui)',
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '0.04em',
                textDecoration: 'none'
              }}>{pilot.cta.primaryLabel}</a>
              <a href={pilot.cta.secondaryHref} style={{
                display: 'inline-block',
                textAlign: 'center',
                padding: '14px 24px',
                background: 'transparent',
                color: 'var(--brand-primary-700)',
                border: '1px solid var(--brand-primary-700)',
                fontFamily: 'var(--font-ui)',
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '0.04em',
                textDecoration: 'none'
              }}>{pilot.cta.secondaryLabel}</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{
        background: 'var(--bg-2)',
        borderTop: '1px solid var(--border-1)',
        borderBottom: '1px solid var(--border-1)',
        padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)'
      }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 40px)',
            color: 'var(--brand-primary-700)',
            margin: '0 0 32px'
          }}>FAQ</h2>
          {pilot.faq.map((f, i) => (
            <details key={i} style={{
              borderTop: '1px solid var(--border-1)',
              padding: '20px 0'
            }}>
              <summary style={{
                cursor: 'pointer',
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                color: 'var(--fg-1)',
                lineHeight: 1.4,
                fontWeight: 500,
                listStyle: 'none'
              }}>{f.q}</summary>
              <p style={{
                marginTop: 12,
                fontSize: 15,
                lineHeight: 1.7,
                color: 'var(--fg-2)'
              }}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Boundaries */}
      <section style={{
        maxWidth: 1280, margin: '0 auto',
        padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(24px, 3vw, 32px)',
          color: 'var(--brand-primary-700)',
          margin: '0 0 24px'
        }}>Honest boundaries</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-slogan)',
              fontSize: 11,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--brand-accent-700)',
              marginBottom: 12
            }}>What we do</div>
            <ul style={{ paddingLeft: 20, margin: 0, fontSize: 15, lineHeight: 1.7, color: 'var(--fg-1)' }}>
              {pilot.boundaries.do.map((b, i) => <li key={i} style={{ marginBottom: 8 }}>{b}</li>)}
            </ul>
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-slogan)',
              fontSize: 11,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--fg-3)',
              marginBottom: 12
            }}>What we are not</div>
            <ul style={{ paddingLeft: 20, margin: 0, fontSize: 15, lineHeight: 1.7, color: 'var(--fg-1)' }}>
              {pilot.boundaries.dont.map((b, i) => <li key={i} style={{ marginBottom: 8 }}>{b}</li>)}
            </ul>
          </div>
        </div>
        {pilot.boundaries.footnote && (
          <p style={{
            marginTop: 24,
            fontSize: 14,
            color: 'var(--fg-3)',
            lineHeight: 1.5,
            fontStyle: 'italic'
          }}>{pilot.boundaries.footnote}</p>
        )}
      </section>

      {/* Related */}
      {pilot.related && (
        <section style={{
          maxWidth: 880, margin: '0 auto',
          padding: '0 clamp(24px, 6vw, 96px) 64px'
        }}>
          <div style={{
            borderTop: '1px solid var(--border-1)',
            paddingTop: 24,
            fontSize: 14,
            color: 'var(--fg-2)',
            lineHeight: 1.7
          }}>
            <div style={{
              fontFamily: 'var(--font-slogan)',
              fontSize: 12,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--brand-primary-700)',
              marginBottom: 12
            }}>Related</div>
            {pilot.related.solution && (
              <div>
                Solution:{' '}
                <a href={`/solutions/${pilot.related.solution.slug}`} style={{ color: 'var(--fg-link)', textDecoration: 'underline' }}>
                  {pilot.related.solution.label}
                </a>
              </div>
            )}
            {pilot.related.caseStudy && (
              <div>
                Case study:{' '}
                <a href={`/case-studies/${pilot.related.caseStudy.slug}`} style={{ color: 'var(--fg-link)', textDecoration: 'underline' }}>
                  {pilot.related.caseStudy.label}
                </a>
              </div>
            )}
          </div>
        </section>
      )}
    </PageShell>
  );
}

window.PilotPage = PilotPage;
window.PilotPricing = PilotPricing;
