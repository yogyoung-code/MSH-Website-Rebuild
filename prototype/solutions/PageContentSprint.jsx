/* PageContentSprint.jsx — Quick Start: Cross-Border Content Sprint */
const SPRINT_META = {
  eyebrow: 'Quick Start · 2 weeks',
  title: 'Cross-Border Content Sprint — one bilingual artifact, signed by clinicians, in 14 days.',
  sub: 'The lowest-commitment way to work with us. A flat fee, a fixed scope, a single medically reviewed bilingual artifact. Designed to evaluate us before any larger engagement.',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/' },
    { label: 'Cross-Border Content Sprint', href: '#' },
  ],
  theme: 'cyan',
  meta: [
    { k: 'Duration',   v: '14 calendar days · fixed' },
    { k: 'Pricing',    v: 'Flat fee · on request' },
    { k: 'Scope',      v: '1 artifact · EN + 简体中文' },
    { k: 'Sign-off',   v: 'US-physician + CN-physician QC' },
  ],
  ctaTitle: 'Pick an artifact. Send a brief. Get it back in 14 days.',
  ctaBody: 'No NDA required to start the conversation. We scope the artifact in 30 minutes and confirm fit before either side commits.',
  primaryCta: 'Start a sprint',
  secondaryCta: 'See past sprint artifacts',
};

function PageContentSprint() {
  const subnav = [
    { id: 'overview',     label: 'Overview' },
    { id: 'artifact-menu', label: 'Artifact menu' },
    { id: 'timeline',     label: '14-day timeline' },
    { id: 'whats-included', label: 'What\'s included' },
    { id: 'faq',          label: 'FAQ' },
  ];

  const artifactMenu = [
    { icon: 'file-text',     tag: 'Most picked', title: 'Bilingual scientific summary',     d: '4–6 page EN + CN summary of one mechanism, indication or trial. Useful for KOL briefs and internal alignment.' },
    { icon: 'presentation',  tag: '',            title: 'Conference poster, bilingual',     d: 'A camera-ready bilingual congress poster — abstract through references — to ASCO, ESMO, CSCO or CMHA spec.' },
    { icon: 'newspaper',     tag: '',            title: 'Localized press / KOL letter',     d: 'A scientifically accurate, code-compliant bilingual press / KOL letter, with disclosure block included.' },
    { icon: 'book-open',     tag: '',            title: 'Patient-physician brochure',       d: 'A bilingual brochure or detail-aid pre-checked for off-label and fair-balance issues, ready for compliance review.' },
    { icon: 'mic',           tag: '',            title: 'Symposium speaker deck',           d: 'A 12–18 slide speaker deck, bilingual, with notes — for an internal symposium or congress slot.' },
    { icon: 'help-circle',   tag: '',            title: 'Custom artifact',                  d: 'Tell us the spec. If it fits in 14 days with one physician on each side, we\'ll quote the sprint price.' },
  ];

  const timeline = [
    { weeks: '1–2',  title: 'Brief & kickoff',     body: 'Day 1–2. Brief intake, source data review, scope confirmation, sprint started.', deliverable: 'Sprint brief signed' },
    { weeks: '3–6',  title: 'EN + CN drafts',      body: 'Day 3–6. Parallel EN + CN drafts. AI-assisted retrieval, citation slots filled.', deliverable: 'Bilingual draft v1' },
    { weeks: '7–10', title: 'Dual-physician QC',   body: 'Day 7–10. US-licensed clinician reviews EN; CN-licensed clinician reviews CN. Both sign.', deliverable: 'QC sign-off' },
    { weeks: '11–14',title: 'Reconcile & ship',    body: 'Day 11–14. Discrepancies resolved, source trail attached, final artifact shipped in both languages.', deliverable: 'Final + audit log' },
  ];

  const faqs = [
    { q: 'What if our artifact doesn\'t fit the menu?',
      a: 'Send us the spec. If it can ship in 14 days with one physician reviewer on each side, we will quote the sprint flat fee. If it can\'t, we\'ll say so and recommend a longer engagement.' },
    { q: 'Do we need an NDA to start?',
      a: 'No. We scope and confirm fit on a 30-minute call. NDA is signed before any source data leaves your side.' },
    { q: 'Who owns the artifact?',
      a: 'You do, on payment. We retain the right to anonymized portfolio metrics — counts and turnaround times only, never your content.' },
    { q: 'Can the sprint convert into a larger engagement?',
      a: 'Yes — and the sprint fee is creditable against the first 30-Day Pilot or full Solutions engagement that follows within 60 days.' },
    { q: 'Are reviewers named?',
      a: 'Yes. Every artifact ships with a named US-licensed clinician and a named CN-licensed clinician on the audit log.' },
    { q: 'What if we need a third language (JP, KR, etc.)?',
      a: 'Available on request as an extension to the sprint. Adds 5–7 days and a corresponding reviewer on that side.' },
  ];

  return (
    <div>
      <SolutionPageHeader pageMeta={SPRINT_META} />
      <SolutionSubNav items={subnav} theme="cyan" />

      <SolutionSection
        id="overview" eyebrow="Overview"
        title="A two-week test drive of our pipeline."
        kicker="The same AI-assisted, dual-physician-reviewed pipeline that ships everything else — compressed to a single artifact, a flat fee, and a fixed timeline."
        bg="#fff"
      >
        <div style={{
          background: 'linear-gradient(180deg, #D6F1F9 0%, #FFFFFF 100%)',
          border: '1px solid var(--brand-accent-500)',
          borderRadius: 16, padding: 40,
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32,
        }}>
          {[
            { icon: 'clock',         k: '14 days', t: 'Fixed timeline.', d: 'Calendar days, not business days. Day 14 you have a final bilingual artifact in hand.' },
            { icon: 'circle-dollar-sign', k: 'Flat fee', t: 'No scope creep.', d: 'One price for one artifact within the menu. Custom artifacts are quoted up front.' },
            { icon: 'shield-check',  k: 'Two signatures', t: 'Dual-physician QC.', d: 'A named US-licensed clinician signs the EN; a named CN-licensed clinician signs the CN.' },
          ].map((c, i) => (
            <div key={i} style={{
              borderLeft: i === 0 ? 'none' : '1px dashed var(--brand-accent-500)',
              paddingLeft: i === 0 ? 0 : 24,
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 10,
                background: 'var(--brand-accent-500)', color: 'var(--brand-primary-900)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16,
              }}>
                <i data-lucide={c.icon} width="20" height="20"></i>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--brand-accent-700)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8, fontWeight: 600 }}>{c.k}</div>
              <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: 18, fontWeight: 600, color: 'var(--brand-primary-700)', margin: '0 0 10px', letterSpacing: '-0.005em' }}>{c.t}</h4>
              <p style={{ fontSize: 13.5, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>{c.d}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection
        id="artifact-menu" eyebrow="Artifact menu · pick one"
        title="Six artifact types we can ship within the sprint."
        kicker="If your need fits one of these, the sprint can absorb it. If not, send us the spec — we'll quote a custom sprint or recommend a longer engagement."
        bg="var(--bg-2)"
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {artifactMenu.map((a, i) => (
            <div key={i} style={{
              background: '#fff', border: `1px solid ${a.tag ? 'var(--brand-accent-500)' : 'var(--border-1)'}`,
              borderRadius: 12, padding: 24, position: 'relative',
            }}>
              {a.tag && (
                <div style={{
                  position: 'absolute', top: -10, right: 16,
                  padding: '3px 9px', borderRadius: 4,
                  background: 'var(--brand-accent-500)', color: 'var(--brand-primary-900)',
                  fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
                }}>{a.tag}</div>
              )}
              <div style={{
                width: 38, height: 38, borderRadius: 8,
                background: 'var(--brand-accent-100)', color: 'var(--brand-accent-700)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14,
              }}>
                <i data-lucide={a.icon} width="18" height="18"></i>
              </div>
              <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: 16, fontWeight: 600, color: 'var(--brand-primary-700)', margin: '0 0 10px', letterSpacing: '-0.005em', lineHeight: 1.3 }}>{a.title}</h4>
              <p style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0 }}>{a.d}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection
        id="timeline" eyebrow="14-day timeline"
        title="Day-by-day, what happens on a sprint."
        bg="#fff"
      >
        <PhaseTimeline phases={timeline} theme="cyan" />
      </SolutionSection>

      <SolutionSection
        id="whats-included" eyebrow="What's included · what's not"
        title="A bounded scope, with no surprise add-ons."
        bg="var(--bg-2)"
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div style={{
            background: '#fff', border: '1px solid var(--brand-accent-500)',
            borderRadius: 12, padding: 28,
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--brand-accent-700)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14, fontWeight: 600 }}>Included</div>
            {[
              'One bilingual artifact, EN + 简体中文',
              'AI-assisted retrieval across your source pack',
              'Citation slots filled with year + source',
              'US-licensed physician QC sign-off (EN)',
              'CN-licensed physician QC sign-off (CN)',
              'Compliance pre-scan (PhRMA / RDPAC mapping)',
              'Final artifact + exportable audit log',
              '60-day credit toward a full engagement',
            ].map((x, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'start', gap: 10, fontSize: 13.5, color: 'var(--fg-1)', marginBottom: 10, lineHeight: 1.5 }}>
                <span style={{ color: 'var(--brand-accent-700)', flexShrink: 0, marginTop: 1 }}><i data-lucide="check" width="14" height="14"></i></span>{x}
              </div>
            ))}
          </div>
          <div style={{
            background: '#fff', border: '1px solid var(--border-1)', borderRadius: 12, padding: 28,
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--fg-3)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14, fontWeight: 600 }}>Not included</div>
            {[
              'New primary research or data collection',
              'Regulatory submission filing (NMPA / FDA)',
              'Advisory board recruitment & facilitation',
              'IRB or ethics-committee packet drafting',
              'Production: print, video, congress booth build',
              'Translation into a third language (JP / KR — on request)',
              'Open-ended revision rounds beyond 1 cycle',
            ].map((x, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'start', gap: 10, fontSize: 13.5, color: 'var(--fg-2)', marginBottom: 10, lineHeight: 1.5 }}>
                <span style={{ color: 'var(--fg-3)', flexShrink: 0, marginTop: 1 }}><i data-lucide="minus" width="14" height="14"></i></span>{x}
              </div>
            ))}
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        id="faq" eyebrow="FAQ"
        title="The questions we get most often before a sprint."
        bg="#fff"
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {faqs.map((f, i) => (
            <div key={i} style={{
              background: 'var(--bg-2)', border: '1px solid var(--border-1)',
              borderRadius: 12, padding: 24,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--brand-accent-700)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10, fontWeight: 600 }}>
                Q.{String(i + 1).padStart(2, '0')}
              </div>
              <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: 16, fontWeight: 600, color: 'var(--brand-primary-700)', margin: '0 0 10px', letterSpacing: '-0.005em', lineHeight: 1.35 }}>{f.q}</h4>
              <p style={{ fontSize: 13.5, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionCTA pageMeta={SPRINT_META} />
      <RelatedSolutions current="cross-border-medical-content-sprint" />
      <SolutionFooter />
    </div>
  );
}
window.PageContentSprint = PageContentSprint;
