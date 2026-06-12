/* PagePhysicianResearch.jsx — Quick Start product page, ported from the AIMS
   physician-research page and rebuilt on the MSH solutions component system. */
const RESEARCH_META = {
  eyebrow: 'Quick Start · Fastest first deliverable',
  title: 'Physician research — your fastest read on Chinese physicians.',
  sub: 'HCP surveys and insights — a bounded study with a clear output, fielded across a verified network of 3.33M+ physicians. Give us one question; we bring back the data, named, consented, and physician-reviewed.',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/' },
    { label: 'Physician Engagement', href: '/solutions/physician-engagement.html' },
    { label: 'Physician Research', href: '#' },
  ],
  theme: 'cyan',
  meta: [
    { k: 'Method',    v: 'Online quant surveys · IDIs · mixed designs' },
    { k: 'Fielding',  v: '100–150 qualified responses recruited / week' },
    { k: 'Timeline',  v: 'Agile study ≈ 2–3 weeks · deeper tiers 8–10+ weeks' },
    { k: 'Output',    v: 'Data + insight report, physician-signed, EN' },
  ],
  ctaTitle: 'Give us one question for Chinese physicians.',
  ctaBody: 'We will field a bounded study and bring you the data — fast, named, consented, and physician-reviewed. A 30-minute scoping call is all it takes to start.',
  primaryCta: 'Scope a study',
  secondaryCta: 'Book a call',
};

function PagePhysicianResearch() {
  const subnav = [
    { id: 'overview', label: 'Why start here' },
    { id: 'studies',  label: 'Study types' },
    { id: 'tiers',    label: 'Scoping tiers' },
    { id: 'process',  label: 'How a study runs' },
    { id: 'platform', label: 'Fielding platform' },
    { id: 'proof',    label: 'Proof' },
  ];

  const reasons = [
    {
      icon: 'target', title: 'Bounded, with a clear output',
      body: 'A single study with a defined question and a defined deliverable — no multi-year commitment to approve.',
      bullets: ['One question, one report', 'Fixed scope per study', 'No program lock-in', 'Quoted with a specialist'],
    },
    {
      icon: 'wallet', title: 'Buyable before a China budget exists',
      body: 'Small and pre-commitment — the easiest way to get value from Chinese physicians before a formal budget is in place.',
      bullets: ['Starter-scale engagement', 'Fits exploratory budgets', 'Fast internal approval', 'Scoped per study'],
    },
    {
      icon: 'zap', title: 'Fielded in days, not months',
      body: 'The 3.33M+ verified network recruits roughly 100–150 qualified physician responses per week, with quality control on every batch.',
      bullets: ['Verified physician panel', 'Specialty / tier / region screens', 'QC on every batch', 'Agile study ≈ 2–3 weeks'],
    },
    {
      icon: 'git-branch', title: 'It opens every other door',
      body: 'Findings give you a reason to come back — the natural bridge to KOL mapping, advisory boards, and CME.',
      bullets: ['→ KOL mapping', '→ Advisory boards', '→ CME programs', '→ Market-entry strategy'],
    },
  ];

  const studyTypes = [
    { t: 'ATU study',                 d: 'Awareness–Trial–Usage: track brand performance, attitudes, and prescribing across a product’s lifecycle.', who: 'Brand / Marketing' },
    { t: 'Perception & awareness',    d: 'How Chinese physicians view a disease, product, or category today.',                                            who: 'Marketing / Med Affairs' },
    { t: 'Treatment-pattern',         d: 'Real practice: diagnosis, line of therapy, referral and prescribing behavior.',                                 who: 'Medical Affairs' },
    { t: 'KOL research',              d: 'Identify and profile key opinion leaders and the views that move a field.',                                     who: 'Medical Affairs' },
    { t: 'Competitive intelligence',  d: 'Where your product stands against competitors in physicians’ minds.',                                      who: 'Marketing / Strategy' },
    { t: 'Message & concept testing', d: 'Test positioning and materials with the physicians who’ll receive them.',                                  who: 'Marketing' },
  ];

  const tiers = [
    { tag: 'AGILE',      t: 'A fast read',     specs: ['Quantitative online survey', '~200 physicians, online only', '<10-min questionnaire', '≈ 2–3 weeks', 'Output: data + simple report'],                          when: 'Coverage gaps · pre-launch pulse · a quick decision' },
    { tag: 'STRATEGIC',  t: 'Decision support', specs: ['Qual + quant mixed', '~5 IDIs + ~200 survey', '30-min interviews', '≈ 8–10 weeks', 'Output: 15–20 pg insight report'],                                          when: 'Brand planning · strategy choices' },
    { tag: 'WHITEPAPER', t: 'Market-shaping',   specs: ['Deep qual + quant', '~10 IDIs + 200 HCP / 100 patients', '+ literature & secondary data', '≈ 10+ weeks', 'Output: publishable blue-book'],                      when: 'Launch · publication · category leadership' },
  ];

  const phases = [
    { weeks: '0',    title: 'Brief',    body: 'Agree the question, KPIs, audience tags, and target sample.',                                   deliverable: 'Study brief' },
    { weeks: '1',    title: 'Proposal', body: 'Objectives, method, deliverables, timeline, team — the right method within budget.',            deliverable: 'Scoped proposal' },
    { weeks: '1–2',  title: 'Recruit',  body: 'Qualified physicians from the network, matched to specialty, tier, and seniority.',             deliverable: 'Fielding plan' },
    { weeks: '2–3',  title: 'Field',    body: 'Online quantitative survey + qualitative IDIs; data quality-checked every cycle.',              deliverable: 'Clean dataset' },
    { weeks: '3+',   title: 'Report',   body: 'Analysis plus medical insight — an English report and a live presentation.',                    deliverable: 'Signed insight report' },
  ];

  const rcpSteps = [
    { icon: 'folder-plus',    t: 'Project setup',           d: 'Targets & quotas configured once' },
    { icon: 'user-plus',      t: 'Recruitment',             d: 'Verified network, multi-dimensional screening' },
    { icon: 'clipboard-list', t: 'Survey',                  d: 'Professional engine, answered online' },
    { icon: 'shield-check',   t: 'Compliance & incentives', d: 'Auto-validated, auto-disbursed' },
    { icon: 'bar-chart-3',    t: 'Insights',                d: 'Live dashboards, exportable data' },
  ];

  const rcpCapabilities = [
    { icon: 'user-check',     t: 'Verified recruitment',       d: 'Named, identity-verified physicians; screened by specialty, title, hospital tier, and region — selection structure visible in real time.' },
    { icon: 'clipboard-list', t: 'Professional survey engine', d: 'Long questionnaires, logic branching, and scale matrices — complex medical instruments, answered on any device.' },
    { icon: 'shield-check',   t: 'Compliance built in',        d: 'Fair-market-value honorarium checks, risk scoring, multi-level approval, and a full audit trail on every payment and change.' },
    { icon: 'activity',       t: 'Real-time dashboards',       d: 'Recruitment funnel, completion rate, and quota consumption update live; detail data exports on demand.' },
  ];

  const stats = [
    { n: '3.33M+',  l: 'Verified physicians in network', note: '2025 audit' },
    { n: '100–150', l: 'Qualified responses recruited per week', note: 'QC on every batch' },
    { n: '2–3',     u: 'wks', l: 'Agile study, brief to report', note: '~200-physician quant' },
    { n: '73',      u: '%+', l: 'Senior-title coverage in panel', note: '2025 audit' },
  ];

  return (
    <div>
      <SolutionPageHeader pageMeta={RESEARCH_META} />
      <SolutionSubNav items={subnav} theme="cyan" />

      <DeliverableSample
        eyebrow="What you actually receive"
        title="One question in. One signed insight report out."
        lede="Every study is a bounded input-output contract: you bring a research question; we return named, consented physician data with medical insight on top."
        samples={[
          {
            label: 'Agile quant survey',
            input: { format: 'One research question · target sample spec',
                     detail: '~200 physicians screened by specialty, hospital tier, region and seniority.' },
            output: { format: 'Dataset + topline report · 2–3 weeks',
                      detail: 'Quality-checked responses, English deliverable, live readout on request.' },
            badge: 'verified',
            signedBy: 'Lead MD + research lead'
          },
          {
            label: 'Strategic mixed-method study',
            input: { format: 'Decision context · qual + quant design',
                     detail: '~5 IDIs plus ~200-physician survey, 30-minute interviews.' },
            output: { format: '15–20 pp insight report + presentation',
                      detail: 'Analysis plus medical interpretation — built for a brand-planning decision.' },
            badge: 'verified',
            signedBy: 'Lead MD + named physician reviewers'
          },
        ]}
      />

      <SolutionSection
        id="overview" eyebrow="Why teams start here"
        title="The fastest to scope, the easiest to approve."
        kicker="Of everything we offer, physician research is the lowest-risk way to prove the relationship — and the natural first step into the network."
        bg="#fff"
      >
        <DeliverablesGrid items={reasons} theme="cyan" />
      </SolutionSection>

      <SolutionSection
        id="studies" eyebrow="Study types · 6 formats"
        title="The research you can name and scope."
        kicker="Six study types cover most first conversations. Each is a discrete, scopeable deliverable."
        bg="var(--bg-2)"
      >
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {studyTypes.map(s => (
            <div key={s.t} style={{
              background: '#fff', border: '1px solid var(--border-1)',
              borderRadius: 12, padding: 26,
            }}>
              <h4 style={{
                fontFamily: 'var(--font-ui)', fontSize: 17.5, fontWeight: 600,
                color: 'var(--brand-primary-700)', margin: '0 0 10px', letterSpacing: '-0.005em',
              }}>{s.t}</h4>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--fg-2)', margin: '0 0 14px' }}>{s.d}</p>
              <div style={{
                paddingTop: 12, borderTop: '1px dashed var(--border-1)',
                fontSize: 11.5, color: 'var(--fg-3)',
                fontFamily: 'var(--font-mono)', letterSpacing: '0.04em',
              }}>
                Asked by · <span style={{ color: 'var(--brand-accent-700)', fontWeight: 600 }}>{s.who}</span>
              </div>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection
        id="tiers" eyebrow="Scoping · 3 tiers"
        title="Match the depth to the decision."
        kicker="Start light; go deeper when the stakes justify it. Scope is set per project and quoted with a specialist."
        bg="#fff"
      >
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {tiers.map(x => (
            <div key={x.tag} style={{
              background: 'var(--bg-2)', border: '1px solid var(--border-1)',
              borderRadius: 12, padding: 28, display: 'flex', flexDirection: 'column',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600,
                letterSpacing: '0.14em', color: 'var(--brand-accent-700)',
                textTransform: 'uppercase', marginBottom: 8,
              }}>{x.tag}</div>
              <h4 style={{
                fontFamily: 'var(--font-ui)', fontSize: 19, fontWeight: 600,
                color: 'var(--brand-primary-700)', margin: '0 0 16px', letterSpacing: '-0.005em',
              }}>{x.t}</h4>
              <div style={{ marginBottom: 18 }}>
                {x.specs.map(s => (
                  <div key={s} style={{
                    display: 'flex', alignItems: 'start', gap: 8,
                    fontSize: 13, color: 'var(--fg-1)', marginBottom: 7,
                  }}>
                    <span style={{ color: 'var(--brand-accent-700)', flexShrink: 0, marginTop: 1 }}>
                      <i data-lucide="check" width="13" height="13"></i>
                    </span>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
              <div style={{
                marginTop: 'auto', paddingTop: 14, borderTop: '1px dashed var(--border-1)',
                fontSize: 12.5, color: 'var(--fg-3)', lineHeight: 1.5,
              }}>
                <strong style={{ color: 'var(--fg-2)' }}>When:</strong> {x.when}
              </div>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection
        id="process" eyebrow="Process · 5 phases"
        title="How a study runs."
        kicker="The verified network recruits roughly 100–150 qualified physician responses per week — an agile study can field in days, not months."
        bg="var(--bg-2)"
      >
        <PhaseTimeline phases={phases} theme="cyan" />
      </SolutionSection>

      <SolutionSection
        id="platform" eyebrow="Fielding platform · RapidClinicPulse"
        title="One platform runs the whole study."
        kicker="From project setup through recruitment, survey, compliance, and real-time insight — every step on one system, every step auditable."
        bg="#fff"
      >
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14, marginBottom: 28 }}>
          {rcpSteps.map((s, i) => (
            <div key={s.t} style={{
              background: 'var(--bg-2)', border: '1px solid var(--border-1)',
              borderRadius: 12, padding: '20px 18px', textAlign: 'center',
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'var(--brand-accent-100)', color: 'var(--brand-accent-700)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 10,
              }}>
                <i data-lucide={s.icon} width="19" height="19"></i>
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600,
                color: 'var(--brand-accent-700)', letterSpacing: '0.1em', marginBottom: 4,
              }}>{String(i + 1).padStart(2, '0')}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--brand-primary-700)', marginBottom: 4 }}>{s.t}</div>
              <div style={{ fontSize: 12, lineHeight: 1.5, color: 'var(--fg-3)' }}>{s.d}</div>
            </div>
          ))}
        </div>
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {rcpCapabilities.map(c => (
            <div key={c.t} style={{
              background: '#fff', border: '1px solid var(--border-1)',
              borderRadius: 12, padding: 24, display: 'flex', gap: 16, alignItems: 'start',
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                background: 'var(--brand-accent-100)', color: 'var(--brand-accent-700)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <i data-lucide={c.icon} width="19" height="19"></i>
              </div>
              <div>
                <h4 style={{
                  fontFamily: 'var(--font-ui)', fontSize: 15.5, fontWeight: 600,
                  color: 'var(--brand-primary-700)', margin: '0 0 6px', letterSpacing: '-0.005em',
                }}>{c.t}</h4>
                <p style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>{c.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20, fontSize: 13, color: 'var(--fg-3)', fontStyle: 'italic' }}>
          Every honorarium stands up to audit — fair-market-value checked, approved, and logged.
        </div>
      </SolutionSection>

      <SolutionSection
        id="proof" eyebrow="Proof · 2025"
        title="Signed numbers, representative work."
        bg="var(--bg-2)"
      >
        <SolutionStatStrip stats={stats} theme="cyan" />

        {/* Case in point — ported from the AIMS page, client anonymized */}
        <div style={{
          marginTop: 32,
          background: '#fff', border: '1px solid var(--border-1)',
          borderLeft: '4px solid var(--brand-accent-500)',
          borderRadius: 12, padding: '30px 34px',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 12,
          }}>Case in point · representative engagement, client anonymized</div>
          <h4 style={{
            fontFamily: 'var(--font-ui)', fontSize: 19, fontWeight: 600,
            color: 'var(--brand-primary-700)', margin: '0 0 12px', letterSpacing: '-0.005em',
          }}>An ATU study for a mature oncology brand</h4>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--fg-2)', margin: '0 0 20px', maxWidth: 820 }}>
            A global brand team needed to refresh its read on the CML market — why HCP perceptions were shifting
            in 2L and 3L+ therapy. We ran an ATU study tracking brand performance, beliefs, attitudes, and behaviors:
            qualitative IDIs plus an online quantitative survey across senior physicians, with custom KPIs covering
            formulary entry, awareness, patient journey, prescription choice, and market potential.
          </p>
          <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}>
            {[
              ['~3 months', 'concept to delivered report'],
              ['Qual + Quant', 'IDIs plus an online survey'],
              ['English report', 'plus a live presentation'],
            ].map(([v, l]) => (
              <div key={v}>
                <div style={{ fontWeight: 600, fontSize: 17, color: 'var(--brand-primary-700)' }}>{v}</div>
                <div style={{ fontSize: 12.5, color: 'var(--fg-3)' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: 20, fontSize: 13.5, color: 'var(--fg-2)', lineHeight: 1.6,
          background: 'var(--brand-primary-100)', borderRadius: 8, padding: '16px 20px',
        }}>
          <strong style={{ color: 'var(--brand-primary-700)' }}>Our compliance standard:</strong> every engagement
          is named, consented, logged, and disclosed — no anonymous panels, no list-selling, ever.
        </div>
      </SolutionSection>

      <SolutionCTA pageMeta={RESEARCH_META} />
      <RelatedSolutions current="physician-research" />
      <SolutionFooter />
    </div>
  );
}
window.PagePhysicianResearch = PagePhysicianResearch;
