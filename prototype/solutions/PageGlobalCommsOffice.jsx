/* PageGlobalCommsOffice.jsx — Global Communications Office (GCO), a build-and-
   operate communications function under the Medical Communications block.
   New service line (2026) for China innovators going global. */
const GCO_META = {
  eyebrow: 'Medical Communications · Build & Operate',
  title: 'Your global communications office — built, then run for you.',
  sub: 'Medical PR, media relations and scientific share-of-voice for China innovators going global. We build the newsroom, the channels and the press relationships — then operate them as your outsourced communications function.',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/' },
    { label: 'Medical Communications', href: '/solutions/medical-communications.html' },
    { label: 'Global Communications Office', href: '#' },
  ],
  theme: 'cyan',
  meta: [
    { k: 'Model',      v: 'Audit 30 days → Build 8–12 wks → Operate (12-mo retainer)' },
    { k: 'Channels',   v: 'Earned · Owned · Congress · KOL voice' },
    { k: 'Coverage',   v: 'Medical + industry trade press · milestones & crisis' },
    { k: 'Compliance', v: 'Physician-signed claims · earned vs. paid disclosed' },
  ],
  ctaTitle: 'Global assets deserve a global voice.',
  ctaBody: 'Start with a bounded 30-day presence audit: a share-of-voice baseline against named competitors, a channel and media audit, and a 90-day roadmap. Pricing on request.',
  primaryCta: 'Scope a presence audit',
  primaryHref: '/contact.html?intent=gco_audit',
  secondaryCta: 'Book a call',
};

function PageGlobalCommsOffice() {
  const subnav = [
    { id: 'overview',    label: 'The gap' },
    { id: 'workstreams', label: 'Workstreams' },
    { id: 'model',       label: 'How it runs' },
    { id: 'dna',         label: 'Why MedSci' },
    { id: 'boundaries',  label: 'Red lines' },
  ];

  const haves = [
    'A licensed or approved asset with global rights',
    'Readouts, congress data and a publication record',
    'BD momentum and a growing US-facing team',
    'A story worth telling',
  ];

  const missing = [
    'Relationships with the trade press that covers your space',
    'An operated English newsroom and LinkedIn presence',
    'KOLs who mention you unprompted',
    'A measured read on your share of voice vs. competitors',
  ];

  const workstreams = [
    {
      icon: 'compass', title: 'Narrative & messaging',
      body: 'A messaging house for the global market: scientific story, competitive positioning, and language your US audience and your Shanghai leadership both sign.',
      bullets: ['Global messaging house', 'Scientific story & claims map', 'Competitive positioning', 'Spokesperson materials'],
    },
    {
      icon: 'layout-template', title: 'Owned channels, operated',
      body: 'We build and then run the channels a global company is checked against: English newsroom, LinkedIn, newsletter — kept alive week after week.',
      bullets: ['English newsroom & press kit', 'LinkedIn / X operations', 'Email & newsletter', 'Website content ops'],
    },
    {
      icon: 'newspaper', title: 'Earned media relations',
      body: 'Pitching and relationship-building with medical media and the industry trade press — plus releases, wire distribution and award submissions.',
      bullets: ['Medical + trade press pitching', 'Press releases & wire distribution', 'Embargo management', 'Awards & rankings'],
    },
    {
      icon: 'presentation', title: 'Congress & event visibility',
      body: 'Turn congress spend into voice: pre-briefs, symposium promotion, on-site and post-congress coverage, and JPM-season materials.',
      bullets: ['Congress presence plans', 'On-site & post coverage', 'Symposium promotion', 'JPM / BIO season support'],
    },
    {
      icon: 'users', title: 'KOL & DOL voice',
      body: 'Third-party voice, organized: global KOL advocacy, digital opinion leaders, podcasts and webinars — consented and disclosed.',
      bullets: ['KOL advocacy programs', 'DOL collaborations', 'Podcast & webinar series', 'Consent & disclosure log'],
    },
    {
      icon: 'siren', title: 'Milestone & crisis communications',
      body: 'Approvals, readouts and deals launched on schedule — and a tested playbook for the day something goes wrong. Disclosure decisions stay with your IR and legal.',
      bullets: ['Milestone launch management', 'Issues monitoring', 'Crisis playbook & drills', 'Statements & media response'],
    },
    {
      icon: 'radar', title: 'Intelligence & measurement', tag: 'AI-ENABLED', featured: true,
      body: 'The workstream that keeps the others accountable: AI-assisted monitoring across trade press, medical media and social channels — reported quarterly as an auditable share-of-voice read.',
      bullets: ['Continuous media monitoring', 'Competitor readout tracking', 'Quarterly SOV report', 'Line-by-line coverage log'],
    },
  ];

  const phases = [
    { weeks: '0–4',  title: 'Presence audit', body: 'Share-of-voice baseline vs. named competitors, channel and media audit, narrative gap analysis — and a 90-day roadmap.', deliverable: 'Audit report + roadmap' },
    { weeks: '5–16', title: 'Newsroom build', body: 'Messaging house, press kit, English newsroom, rebuilt official channels, journalist map, and the operating SOP.', deliverable: 'A working newsroom' },
    { weeks: '17+',  title: 'Operate',        body: 'The office runs: monitoring, pitching, channel operations, congress moments, KOL voice — reported quarterly.', deliverable: 'Quarterly SOV + coverage log' },
  ];

  const stats = [
    { n: '3.33M+', l: 'Verified physicians on the platform we operate', note: '2025 audit' },
    { n: '38',     l: 'Bilingual artifacts produced (single program)',  note: 'Top-10 medtech, 12 wks' },
    { n: '96',     u: '%', l: 'First-pass QC sign-off, 2025',           note: 'platform audit' },
    { n: '0',      l: 'Code-of-practice findings, 2025',                note: 'compliance audit' },
  ];

  const redLines = [
    { t: 'Promise coverage.',            d: 'Placement is earned. We commit to process and measurement — never to headlines.' },
    { t: 'Promote unapproved products.', d: 'Corporate and scientific communications only, inside FDA rules on pre-approval promotion.' },
    { t: 'Blur earned and paid.',        d: 'Sponsored or paid content is disclosed as such, always.' },
    { t: 'Own your disclosure.',         d: 'Material-information timing and text stay with your IR and legal teams — we execute communications.' },
    { t: 'Ship unsigned science.',       d: 'Scientific claims carry a named physician’s sign-off, like everything else we make.' },
  ];

  return (
    <div>
      <SolutionPageHeader pageMeta={GCO_META} />
      <SolutionSubNav items={subnav} theme="cyan" />

      <DeliverableSample
        eyebrow="What you actually receive"
        title="A communications function with an audit trail."
        lede="Like everything we ship, communications work is logged and signed: coverage is tracked line by line, and scientific statements carry a physician’s name."
        samples={[
          {
            label: '30-Day Presence Audit',
            input: { format: 'Your asset story · 3–5 named competitors',
                     detail: 'We baseline your share of voice across medical and industry trade media, audit owned channels, and map the narrative gap.' },
            output: { format: 'SOV baseline + channel audit + 90-day roadmap',
                      detail: 'A prioritized plan you can execute with us — or without us.' },
            badge: 'in-development',
            signedBy: 'Comms lead + Lead MD'
          },
          {
            label: 'Data readout launch',
            input: { format: 'One readout · embargo date · target outlets',
                     detail: 'Release drafting, embargoed pitching, KOL amplification — scientific claims physician-signed before anything ships.' },
            output: { format: 'Release + coverage log + post-launch SOV read',
                      detail: 'Earned vs. paid always disclosed; every claim carries a source.' },
            badge: 'in-development',
            signedBy: 'Comms lead + Lead MD'
          },
          {
            label: 'Quarterly SOV report (retainer)',
            input: { format: 'Continuous monitoring · your competitive set',
                     detail: 'AI-assisted monitoring across trade press, medical media and social channels.' },
            output: { format: 'Quarterly share-of-voice report + coverage log',
                      detail: 'Auditable line by line: outlet, date, driver, link.' },
            badge: 'in-development',
            signedBy: 'Comms lead'
          },
        ]}
      />

      <SolutionSection
        id="overview" eyebrow="The gap"
        title="Record deals. Quiet companies."
        kicker="China’s innovators have closed record global licensing volumes — yet most still have no global communications function. The asset crossed the border; the voice didn’t."
        bg="#fff"
      >
        <div className="two-col-grid" style={{
          background: 'var(--bg-2)', border: '1px solid var(--border-1)',
          borderRadius: 16, padding: 40,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32,
        }}>
          <div style={{ borderRight: '1px dashed var(--border-1)', paddingRight: 32 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--brand-accent-700)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14, fontWeight: 600 }}>What you already have</div>
            {haves.map((x, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'start', gap: 10,
                fontSize: 14, color: 'var(--fg-1)', marginBottom: 12, lineHeight: 1.5,
              }}>
                <span style={{ color: 'var(--brand-accent-700)', flexShrink: 0, marginTop: 2 }}>
                  <i data-lucide="check" width="14" height="14"></i>
                </span>{x}
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--fg-3)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14, fontWeight: 600 }}>What’s usually missing</div>
            {missing.map((x, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'start', gap: 10,
                fontSize: 14, color: 'var(--fg-1)', marginBottom: 12, lineHeight: 1.5,
              }}>
                <span style={{ color: 'var(--error-500)', flexShrink: 0, marginTop: 2 }}>
                  <i data-lucide="x" width="14" height="14"></i>
                </span>{x}
              </div>
            ))}
            <div style={{
              marginTop: 18, paddingTop: 14, borderTop: '1px dashed var(--border-1)',
              fontSize: 13, color: 'var(--fg-2)', fontStyle: 'italic',
            }}>
              The office exists to close this column.
            </div>
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        id="workstreams" eyebrow="Workstreams · 7"
        title="One office, seven workstreams."
        kicker="Scope starts from the audit — most engagements run four to six of the seven in year one, and every workstream reports into the same coverage log."
        bg="var(--bg-2)"
      >
        <DeliverablesGrid items={workstreams} theme="cyan" />
      </SolutionSection>

      <SolutionSection
        id="model" eyebrow="Engagement model"
        title="Audit. Build. Operate."
        kicker="Enter with a bounded audit — or a single readout or congress campaign. The retainer comes after the office has proved it works."
        bg="#fff"
      >
        <PhaseTimeline phases={phases} theme="cyan" />
        <div style={{ marginTop: 20, fontSize: 13, color: 'var(--fg-3)', fontStyle: 'italic' }}>
          Campaign-sized entries — one data readout, one congress — are also scoped as bounded engagements with their own coverage log.
        </div>
      </SolutionSection>

      <SolutionSection
        id="dna" eyebrow="Why MedSci"
        title="We operate media. We don’t just pitch it."
        kicker="MedSci started as a physician media platform and still runs one — the same operating muscle, applied to your global presence."
        bg="var(--bg-2)"
      >
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 28 }}>
          <div style={{
            background: '#fff', border: '1px solid var(--border-1)',
            borderRadius: 12, padding: 30,
          }}>
            <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: 18, fontWeight: 600, color: 'var(--brand-primary-700)', margin: '0 0 12px', letterSpacing: '-0.005em' }}>
              An operating job, given to operators.
            </h4>
            <p style={{ fontSize: 14.5, color: 'var(--fg-2)', lineHeight: 1.65, margin: 0 }}>
              Most agencies pitch stories. We run editorial operations every day — a physician platform with 3.33M+ verified members, content pipelines with physician sign-off, and audit trails on every claim. A communications office is an operating job, and operating is what we do.
            </p>
          </div>
          <div style={{
            background: '#fff', border: '1px solid var(--border-1)',
            borderRadius: 12, padding: 30,
          }}>
            <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: 18, fontWeight: 600, color: 'var(--brand-primary-700)', margin: '0 0 12px', letterSpacing: '-0.005em' }}>
              Bilingual by construction.
            </h4>
            <p style={{ fontSize: 14.5, color: 'var(--fg-2)', lineHeight: 1.65, margin: 0 }}>
              Your Shanghai leadership and your US audience read the same story — strategy discussed in Chinese, shipped in native-grade English, with nothing lost between the boardroom and the byline. That translation layer is where most cross-border communications quietly fail.
            </p>
          </div>
        </div>
        <SolutionStatStrip stats={stats} theme="cyan" />
        <div style={{ marginTop: 20, fontSize: 11.5, color: 'var(--fg-3)', lineHeight: 1.5 }}>
          The Global Communications Office is a new service line (2026). Figures shown are audited numbers from the group platform and the medical communications operations it builds on.
        </div>
      </SolutionSection>

      <SolutionSection
        id="boundaries" eyebrow="Red lines · on the record"
        title="What we don’t do."
        kicker="A communications partner is judged by what it refuses. These boundaries are contractual, not aspirational — and they’re written here so your diligence team can hold us to them."
        bg="#fff"
      >
        <div style={{
          background: 'var(--bg-2)', border: '1px solid var(--border-1)',
          borderRadius: 16, padding: 36,
        }}>
          <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px 40px' }}>
            {redLines.map((x, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'start', gap: 12 }}>
                <span style={{ color: 'var(--error-500)', flexShrink: 0, marginTop: 2 }}>
                  <i data-lucide="x" width="15" height="15"></i>
                </span>
                <div style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--fg-2)' }}>
                  <strong style={{ color: 'var(--brand-primary-700)' }}>{x.t}</strong> {x.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SolutionSection>

      <ContentReviewCrossSell />
      <SolutionCTA pageMeta={GCO_META} />
      <RelatedSolutions current="global-communications-office" />
      <SolutionFooter />
    </div>
  );
}
window.PageGlobalCommsOffice = PageGlobalCommsOffice;
