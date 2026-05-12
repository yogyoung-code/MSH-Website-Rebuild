/* PageContentReview.jsx — Entry Offer: Medical & Compliance Content Review */
const CONTENT_REVIEW_META = {
  eyebrow: 'Quick Start · 3–5 days',
  title: 'Your materials, reviewed for compliance and rewritten for clarity — by medical experts, not linguists.',
  sub: 'Submit existing materials. Get a risk-rated compliance review with rewrite suggestions, signed by a named subject-matter expert. The fastest, lowest-commitment way to work with us.',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/' },
    { label: 'Content Review', href: '#' },
  ],
  theme: 'cyan',
  meta: [
    { k: 'Turnaround',  v: '3–5 business days · fixed' },
    { k: 'Pricing',     v: 'Flat fee · by page count' },
    { k: 'Scope',       v: 'Your existing materials · any language pair' },
    { k: 'Sign-off',    v: 'Named medical expert reviewer' },
  ],
  ctaTitle: 'Submit your materials. Get expert-reviewed feedback in days, not weeks.',
  ctaBody: 'No NDA required to start the conversation. We scope the review in a 15-minute call and confirm fit before either side commits.',
  primaryCta: 'Submit materials for review',
  primaryHref: '/contact.html?intent=rfp',
  secondaryCta: 'Talk to an expert first',
  secondaryHref: '/contact.html',
};

function PageContentReview() {
  const subnav = [
    { id: 'overview',      label: 'Overview' },
    { id: 'tiers',         label: 'Service tiers' },
    { id: 'materials',     label: 'What we review' },
    { id: 'process',       label: 'How it works' },
    { id: 'upgrade-path',  label: 'Upgrade path' },
    { id: 'faq',           label: 'FAQ' },
  ];

  const tiers = [
    {
      tag: 'Layer 1',
      title: 'Compliance Content Review',
      timeline: '3–5 business days',
      desc: 'We review your existing materials and flag compliance risks, off-label language, unsupported claims, and unprofessional phrasing — with rewrite suggestions for every finding.',
      included: [
        'Risk-rated markup (Critical / Advisory / Style)',
        'Rewrite suggestion per finding',
        'Review summary with risk scorecard',
        'Named expert reviewer sign-off',
      ],
      ideal: 'Product brochures, website copy, sales decks, partner emails, one-pagers',
      accent: false,
    },
    {
      tag: 'Layer 2',
      title: 'Cross-Border Localization Pack',
      timeline: '5–10 business days',
      desc: 'Everything in Layer 1, plus full bilingual rewrite — not word-for-word translation, but compliance-aware medical localization adapted for the target market.',
      included: [
        'Full Layer 1 review + markup',
        'EN ↔ CN medical localization (not translation)',
        'Target-market tone & terminology adaptation',
        'Expert-reviewed bilingual deliverable',
      ],
      ideal: 'Exhibition materials, KOL decks, distributor packets, due-diligence documents, training content',
      accent: true,
    },
    {
      tag: 'Layer 3',
      title: 'Claims & Communication Readiness',
      timeline: '10–15 business days',
      desc: 'A deep pass across all your market-facing materials — claims risk mapping, support-point consolidation, FAQ/objection handling, and partner-ready document suite.',
      included: [
        'Claims risk audit (evidence-supported vs. unsupported)',
        'Market communication materials optimization',
        'FAQ & objection handling document',
        'Medical support points library',
      ],
      ideal: 'Companies preparing US market entry, distributor onboarding, or investor communications',
      accent: false,
    },
  ];

  const materialTypes = [
    { icon: 'file-text',     label: 'Product brochures & one-pagers' },
    { icon: 'presentation',  label: 'Sales & partner decks' },
    { icon: 'globe',         label: 'Website copy & landing pages' },
    { icon: 'mail',          label: 'Email templates & outreach' },
    { icon: 'users',         label: 'KOL communication materials' },
    { icon: 'building',      label: 'Exhibition & conference collateral' },
    { icon: 'clipboard-list',label: 'Due-diligence & investor materials' },
    { icon: 'book-open',     label: 'Training & onboarding docs' },
    { icon: 'package',       label: 'Packaging claims & label copy' },
    { icon: 'help-circle',   label: 'Custom — tell us the format' },
  ];

  const process = [
    { step: '01', title: 'Upload & scope',  body: 'Send us your materials. We confirm scope, page count, and turnaround in a 15-minute call. No NDA needed at this stage.', deliverable: 'Scope confirmation' },
    { step: '02', title: 'AI pre-scan',     body: 'Our AI pipeline flags potential compliance, terminology, and consistency issues across your documents — creating a structured issue list for expert review.', deliverable: 'Pre-scan report' },
    { step: '03', title: 'Expert review',   body: 'A named medical or regulatory subject-matter expert reviews every flagged item, adds domain judgment, writes rewrite suggestions, and assigns risk severity (Critical / Advisory / Style). For clinical content, physician reviewers are available on request.', deliverable: 'Annotated markup' },
    { step: '04', title: 'Deliver & debrief', body: 'You receive the marked-up documents, a review summary with risk scorecard, and a 20-minute debrief call to walk through critical findings.', deliverable: 'Final package + debrief' },
  ];

  const upgradePath = [
    { label: 'Content Review',     sub: '3–5 days · flat fee',   desc: 'Review your existing materials',    active: true },
    { label: 'Content Sprint',     sub: '14 days · flat fee',    desc: 'Produce a new bilingual artifact',   active: false },
    { label: '30-Day Pilot',       sub: '30 days',               desc: 'Deep diagnostic engagement',         active: false },
    { label: 'Full Engagement',    sub: 'Custom scope',          desc: 'Complete solutions partnership',      active: false },
  ];

  const faqs = [
    { q: 'What if my materials are in a language other than English or Chinese?',
      a: 'We review EN and CN natively. For JP, KR, and other languages, we partner with verified medical linguists and add 2 business days. Ask us for a quote.' },
    { q: 'Do I need an NDA before submitting materials?',
      a: 'No. We scope and confirm fit before you share anything sensitive. NDA is signed before source materials leave your side.' },
    { q: 'What qualifies as "one page" for pricing?',
      a: 'One page = one standard A4/letter page of content, or one slide. Tables and graphics count as content. We confirm the exact page count in the scope call.' },
    { q: 'Who reviews my materials?',
      a: 'A named medical or regulatory subject-matter expert from our in-house team. Their name, credentials, and domain background appear on the review summary. For engagements requiring clinical sign-off, we bring in licensed physician reviewers.' },
    { q: 'Can the review fee count toward a larger engagement?',
      a: 'Yes — the Content Review fee is creditable against a Content Sprint, 30-Day Pilot, or full Solutions engagement that begins within 60 days.' },
    { q: 'How is this different from a translation agency?',
      a: 'Translation agencies optimize for linguistic accuracy. We optimize for regulatory compliance, medical precision, and market readiness. Every finding is risk-rated by a medical or regulatory expert, not a linguist.' },
  ];

  return (
    <div>
      <SolutionPageHeader pageMeta={CONTENT_REVIEW_META} />
      <SolutionSubNav items={subnav} theme="cyan" />

      {/* Overview */}
      <SolutionSection id="overview" eyebrow="Why this exists" title="Your materials are your first impression — make them expert-grade.">
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--fg-2)', margin: '0 0 16px' }}>
              Most cross-border healthcare companies don't need translation — they need someone who can spot the compliance landmines in their existing materials before a partner, regulator, or KOL sees them.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--fg-2)', margin: '0 0 16px' }}>
              A product brochure that says "clinically proven" without evidence. A partner deck that mixes up device classifications. An email template with off-label implications. These aren't language problems — they're medical communication problems.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--fg-2)', margin: 0 }}>
              We built this service because we saw it happen over and over: companies spending months on a product, then losing credibility in the first meeting because their materials weren't expert-grade.
            </p>
          </div>
          <div style={{
            background: 'var(--bg-2)', borderRadius: 12, padding: 28,
            border: '1px solid var(--border-1)',
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-accent-700)', marginBottom: 16 }}>
              What we catch that others miss
            </div>
            {[
              'Off-label or unsupported efficacy claims',
              'Regulatory classification errors',
              'Missing fair-balance statements',
              'Non-compliant comparative language',
              'Terminology inconsistencies across documents',
              'Cultural misalignment for target market',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'start', marginBottom: 10, fontSize: 14, color: 'var(--fg-1)' }}>
                <span style={{ color: 'var(--brand-accent-700)', flexShrink: 0, marginTop: 2 }}>
                  <i data-lucide="alert-triangle" width="14" height="14"></i>
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SolutionSection>

      {/* Service Tiers */}
      <SolutionSection id="tiers" eyebrow="Service tiers" title="Three levels — pick the depth you need." bg="var(--bg-2)">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="two-col-grid">
          {tiers.map((t, i) => (
            <div key={t.tag} style={{
              background: '#fff', border: `1px solid ${t.accent ? 'var(--brand-accent-300)' : 'var(--border-1)'}`,
              borderRadius: 12, padding: 28, display: 'flex', flexDirection: 'column',
              position: 'relative',
            }}>
              {t.accent && <div style={{
                position: 'absolute', top: -1, left: 24, right: 24, height: 3,
                background: 'var(--brand-accent-500)', borderRadius: '0 0 2px 2px',
              }}></div>}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{
                  padding: '3px 9px', borderRadius: 4, fontSize: 10, fontWeight: 600,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  background: t.accent ? 'var(--brand-accent-100)' : 'var(--brand-primary-100)',
                  color: t.accent ? 'var(--brand-accent-700)' : 'var(--brand-primary-700)',
                }}>{t.tag}</span>
                <span style={{ fontSize: 11, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', marginLeft: 'auto' }}>{t.timeline}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-ui)', fontSize: 20, fontWeight: 600, color: 'var(--brand-primary-700)', margin: '0 0 10px' }}>{t.title}</h3>
              <p style={{ fontSize: 13.5, color: 'var(--fg-2)', lineHeight: 1.6, margin: '0 0 18px' }}>{t.desc}</p>
              <div style={{ borderTop: '1px dashed var(--border-1)', paddingTop: 14, marginBottom: 16 }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', color: 'var(--fg-3)', textTransform: 'uppercase', marginBottom: 10 }}>Included</div>
                {t.included.map(item => (
                  <div key={item} style={{ display: 'flex', gap: 8, alignItems: 'start', fontSize: 13, color: 'var(--fg-1)', marginBottom: 6 }}>
                    <span style={{ color: 'var(--brand-accent-700)', flexShrink: 0 }}><i data-lucide="check" width="14" height="14"></i></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 'auto', fontSize: 12, color: 'var(--fg-3)', fontStyle: 'italic' }}>
                Ideal for: {t.ideal}
              </div>
              <div style={{ marginTop: 16 }}>
                <Button variant={t.accent ? 'primary' : 'outline'}>Get a scope estimate</Button>
              </div>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 24, padding: '16px 20px', background: 'var(--brand-primary-100)',
          borderRadius: 8, fontSize: 13, color: 'var(--brand-primary-700)', lineHeight: 1.6,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <i data-lucide="info" width="16" height="16" style={{ flexShrink: 0, color: 'var(--brand-primary-500)' }}></i>
          <span><strong>Fee credit:</strong> The review fee for any tier is creditable against a Content Sprint, 30-Day Pilot, or full engagement that begins within 60 days.</span>
        </div>
      </SolutionSection>

      {/* Materials We Review */}
      <SolutionSection id="materials" eyebrow="What we review" title="If it represents your company to a physician, partner, or regulator — we review it.">
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
          {materialTypes.map(m => (
            <div key={m.label} style={{
              background: 'var(--bg-2)', border: '1px solid var(--border-1)',
              borderRadius: 10, padding: '20px 16px', textAlign: 'center',
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10, margin: '0 auto 12px',
                background: 'var(--brand-accent-100)', color: 'var(--brand-accent-700)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <i data-lucide={m.icon} width="20" height="20"></i>
              </div>
              <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--fg-1)', lineHeight: 1.4 }}>{m.label}</div>
            </div>
          ))}
        </div>
      </SolutionSection>

      {/* Process */}
      <SolutionSection id="process" eyebrow="How it works" title="Upload. Review. Deliver. Four steps, no surprises." bg="var(--bg-2)">
        <PhaseTimeline phases={process} theme="cyan" />
      </SolutionSection>

      {/* Upgrade Path */}
      <SolutionSection id="upgrade-path" eyebrow="Upgrade path" title="Start here. Go as deep as you need.">
        <div style={{ display: 'flex', gap: 0, alignItems: 'stretch' }}>
          {upgradePath.map((u, i) => (
            <div key={u.label} style={{
              flex: 1, padding: '24px 20px', position: 'relative',
              background: u.active ? 'var(--brand-accent-100)' : '#fff',
              border: `1px solid ${u.active ? 'var(--brand-accent-300)' : 'var(--border-1)'}`,
              borderRadius: i === 0 ? '12px 0 0 12px' : i === upgradePath.length - 1 ? '0 12px 12px 0' : 0,
              borderLeft: i > 0 ? 'none' : undefined,
            }}>
              {u.active && <div style={{
                position: 'absolute', top: 8, right: 12,
                fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
                padding: '2px 7px', borderRadius: 3,
                background: 'var(--brand-accent-700)', color: '#fff',
              }}>YOU ARE HERE</div>}
              <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--brand-primary-700)', marginBottom: 4 }}>{u.label}</div>
              <div style={{ fontSize: 11, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', marginBottom: 8 }}>{u.sub}</div>
              <div style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.5 }}>{u.desc}</div>
              {i < upgradePath.length - 1 && (
                <div style={{
                  position: 'absolute', right: -10, top: '50%', transform: 'translateY(-50%)',
                  width: 20, height: 20, background: 'var(--bg-1)', border: '1px solid var(--border-1)',
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, color: 'var(--brand-accent-700)', zIndex: 1,
                }}>→</div>
              )}
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 20, fontSize: 13, color: 'var(--fg-3)' }}>
          Each step's fee is creditable toward the next — you never pay twice for the same ground.
        </div>
      </SolutionSection>

      {/* FAQ */}
      <SolutionSection id="faq" eyebrow="Frequently asked" title="Common questions about Content Review." bg="var(--bg-2)">
        <div style={{ maxWidth: 800 }}>
          {faqs.map((f, i) => (
            <details key={i} style={{
              borderBottom: '1px solid var(--border-1)', padding: '20px 0',
            }}>
              <summary style={{
                fontSize: 15, fontWeight: 600, color: 'var(--brand-primary-700)',
                cursor: 'pointer', listStyle: 'none', display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <i data-lucide="chevron-right" width="16" height="16" style={{ color: 'var(--brand-accent-700)', flexShrink: 0, transition: 'transform 200ms' }}></i>
                {f.q}
              </summary>
              <div style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.65, paddingTop: 12, paddingLeft: 26 }}>
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </SolutionSection>

      {/* Disclaimer */}
      <div style={{ padding: '0 clamp(16px, 4vw, 40px)' }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '20px 0',
          borderTop: '1px solid var(--border-1)',
          fontSize: 11.5, color: 'var(--fg-3)', lineHeight: 1.6,
        }}>
          [Draft — pending legal/IR sign-off] MedSci Healthcare provides compliance review support and medical communication review, not legal advice. This service does not constitute regulatory filing or legal counsel.
        </div>
      </div>

      <SolutionCTA pageMeta={CONTENT_REVIEW_META} />
      <RelatedSolutions current="content-review" />
      <SolutionFooter />
    </div>
  );
}

window.PageContentReview = PageContentReview;
