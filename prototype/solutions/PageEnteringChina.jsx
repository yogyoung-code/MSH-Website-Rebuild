/* PageEnteringChina.jsx — body content for /solutions/entering-china */

const ENTERING_CHINA_META = {
  eyebrow: 'Path · Strategy · 01',
  title: 'Land NMPA-grade evidence and physician traction inside mainland China.',
  sub: 'For non-Chinese innovators preparing or accelerating an NMPA submission, reimbursement bid, or HCP launch — a single thread from literature to dossier to advisory panel.',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/' },
    { label: 'Entering China', href: '#' },
  ],
  theme: 'navy',
  meta: [
    { k: 'For',       v: 'US, EU, JP medtech, pharma, diagnostics innovators' },
    { k: 'Pathway',   v: 'NMPA / CDE · Reimbursement · Physician launch' },
    { k: 'Duration',  v: '12–32 weeks · scoped per-engagement' },
    { k: 'Languages', v: 'English + Simplified Chinese, dual-physician QC' },
  ],
  ctaTitle: "Bring us your dossier. We'll cross-walk it against NMPA in 30 days.",
  ctaBody: 'A bounded China Evidence Sprint — five physician reviewers, an NMPA-aligned gap scan, and a localized summary deck. Pricing on request.',
  primaryCta: 'Book the China Evidence Sprint',
  secondaryCta: 'See China case studies',
};

function PageEnteringChina() {
  const subnav = [
    { id: 'overview',     label: 'Overview' },
    { id: 'who-its-for',  label: 'Who it’s for' },
    { id: 'approach',     label: 'Approach' },
    { id: 'deliverables', label: 'Deliverables' },
    { id: 'timeline',     label: 'Timeline' },
    { id: 'proof',        label: 'Proof' },
    { id: 'pilot',        label: 'Pilot' },
  ];

  const personas = [
    { tag: 'Medtech',    title: 'US Class II–III device makers',  body: 'Cleared in the US or EU, evaluating an NMPA pathway, dual-stream evidence, and KOL traction in tier-1 hospitals.', icon: 'cpu' },
    { tag: 'Pharma',     title: 'Global pharma, late-stage assets', body: 'Bridging a Phase III dossier into China without a wholly-owned local affiliate — needing physician advisory and HEOR.', icon: 'pill' },
    { tag: 'Diagnostics', title: 'IVD and companion diagnostics',   body: 'NMPA Class III IVDs, reimbursement-track companion Dx, and registry strategy across tier-1 / tier-2 sites.', icon: 'flask-conical' },
  ];

  const approachSteps = [
    { n: '01', t: 'Pathway scan',      d: 'Map your asset to the right NMPA / CDE pathway. Cross-walk against current guidance and recent comparable approvals.' },
    { n: '02', t: 'Evidence build',    d: 'Localized literature review, registry feasibility, and HEOR — every claim with a citation and a year.' },
    { n: '03', t: 'Physician panel',   d: 'A consented advisory panel of 5–9 China KOLs reviews the dossier and signs off on the medical narrative.' },
    { n: '04', t: 'Dossier & launch',  d: 'Submission-ready packet, bilingual summary deck, reimbursement positioning, and HCP engagement plan.' },
  ];

  const deliverables = [
    {
      icon: 'file-search', title: 'NMPA / CDE dossier support',
      body: 'Submission packets aligned to current CDE guidance, with structured gap reports, response templates, and reviewer-readiness checks.',
      bullets: ['Gap analysis vs. CDE guidance', 'Response template library', 'Localized clinical summary', 'Reviewer-track Q&A prep'],
    },
    {
      icon: 'stethoscope', title: 'China physician advisory & KOL',
      body: 'Standing or single-instance advisory boards, KOL mapping across tier-1 academic medical centers, and consented reviewer panels.',
      bullets: ['Tier-1 KOL mapping', 'Standing & ad-hoc advisory', 'Consented reviewer panel', 'Named clinician sign-off'],
    },
    {
      icon: 'banknote', title: 'Reimbursement evidence (HEOR)',
      body: 'HEOR modeling and value dossiers tuned to provincial NRDL negotiation, DRG environments, and commercial-payer scenarios.',
      bullets: ['Cost-effectiveness models', 'Budget-impact analysis', 'NRDL value dossier', 'Provincial pricing scan'],
    },
    {
      icon: 'languages', title: 'Localized bilingual content',
      body: 'Submission-grade EN ↔ CN translation with terminology consistency, dual-physician QC and a signed source trail.',
      bullets: ['EN ↔ CN scientific translation', 'Terminology consistency layer', 'Dual-physician QC', 'Compliance-aware review'],
    },
  ];

  const phases = [
    { weeks: '0–2',   title: 'Scoping & gap scan',     body: 'Pathway diagnosis, evidence inventory, and a prioritized gap matrix across regulatory, clinical and reimbursement axes.', deliverable: 'Gap matrix v1' },
    { weeks: '2–8',   title: 'Evidence assembly',      body: 'Literature, registry feasibility, and HEOR drafts — AI-assisted retrieval, physician-reviewed synthesis.', deliverable: 'Evidence dossier draft' },
    { weeks: '6–14',  title: 'Physician panel',        body: 'A consented panel of 5–9 named China KOLs reviews the package, raises objections, and signs the medical narrative.', deliverable: 'Signed panel report' },
    { weeks: '12–24', title: 'Dossier & engagement',   body: 'Submission-ready packet, localized HCP comms, reimbursement positioning, and HCP launch deck.', deliverable: 'Submission packet' },
  ];

  const stats = [
    { n: '11',     u: 'wks', l: 'Median NMPA submission cycle, 2025 cohort', note: 'n = 7 engagements' },
    { n: '5–9',    u: '',    l: 'Named physician reviewers per dossier',     note: 'standing + ad-hoc' },
    { n: '0',      u: '',    l: 'RFIs on first NMPA submission, 2025',       note: 'oncology device case' },
    { n: '96',     u: '%',   l: 'First-pass QC sign-off, bilingual artifacts', note: '2025 audit' },
  ];

  return (
    <div>
      <SolutionPageHeader pageMeta={ENTERING_CHINA_META} />
      <SolutionSubNav items={subnav} theme="navy" />

      {}
      <CountryCompare
        eyebrow="The cross-border path"
        title="What changes when an asset crosses the Pacific."
        lede="Every China-entry engagement starts with a clear-eyed view of what your existing US/EU/JP stack carries forward, and what we'll need to re-derive locally."
        direction="us-to-cn"
        left={{
          code: 'US / EU / JP',
          label: 'United States / EU / JP',
          regulator: 'FDA · CDER / CDRH (or equivalent)',
          timeline: '6–18 mo dossier prep',
          reviewerLanguage: 'English',
          constraints: [
            'IRB-ready protocols',
            'Comparator construction in CDISC',
            'Western RWE registries (Sentinel, PCORnet)'
          ]
        }}
        right={{
          code: 'CN',
          label: 'China (Mainland)',
          regulator: 'NMPA · CDE',
          timeline: '11 wks median (2025 cohort)',
          reviewerLanguage: '中文 · Simplified Chinese',
          constraints: [
            'Tier-1 AMC physician sign-off',
            'PIPL data residency for Chinese RWE',
            'NRDL / DRG value dossier'
          ]
        }}
      />

      {/* Overview */}
      <SolutionSection
        id="overview" eyebrow="Overview · why this path"
        title="A single thread from literature to NMPA, signed by China physicians."
        kicker="Most cross-border evidence breaks at translation, at reviewer hand-off, or at advisory. We pre-empt all three with one team, one source trail, and named clinician sign-off."
        bg="#fff"
       
      >
        <div className="two-col-grid" style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 32,
          background: 'var(--bg-2)', border: '1px solid var(--border-1)',
          borderRadius: 16, padding: 40,
        }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-ui)', fontSize: 19, fontWeight: 600,
              color: 'var(--brand-primary-700)', margin: '0 0 14px',
            }}>What we believe about the China path.</h3>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.65, margin: '0 0 14px' }}>
              NMPA reviewers are getting faster, more selective, and more data-literate. A US-grade dossier translated into Chinese is no longer competitive on its own — what wins is local evidence, signed by local clinicians, mapped to the latest guidance.
            </p>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.65, margin: 0 }}>
              We are physician-led, AI-accelerated, and operate inside the regulatory cadence — not outside it.
            </p>
          </div>
          <div style={{
            background: '#fff', border: '1px solid var(--border-1)',
            borderRadius: 12, padding: 22,
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10.5,
              color: 'var(--fg-3)', letterSpacing: '0.12em',
              textTransform: 'uppercase', marginBottom: 14,
            }}>What we do not do</div>
            {[
              'Lobby reviewers or pre-negotiate approvals.',
              'Promise a fixed approval timeline.',
              'Sign off on evidence without a named clinician.',
              'Translate without a physician QC step.',
            ].map((x, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'start', gap: 10,
                fontSize: 13, color: 'var(--fg-1)', marginBottom: 10, lineHeight: 1.45,
              }}>
                <span style={{ color: 'var(--error-500)', flexShrink: 0, marginTop: 1 }}>
                  <i data-lucide="x" width="14" height="14"></i>
                </span>
                {x}
              </div>
            ))}
          </div>
        </div>
      </SolutionSection>

      {/* Who it's for */}
      <SolutionSection
        id="who-its-for" eyebrow="Who it's for"
        title="Three innovator profiles we work with most often."
        kicker="If your asset is somewhere between US/EU clearance and a working China commercialization plan, we can usually compress 3–6 months out of the path."
        bg="var(--bg-2)"
       
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {personas.map((p, i) => (
            <div key={i} style={{
              background: '#fff', border: '1px solid var(--border-1)',
              borderRadius: 12, padding: 28, display: 'flex', flexDirection: 'column',
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 10,
                background: 'var(--brand-primary-100)', color: 'var(--brand-primary-700)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 18,
              }}>
                <i data-lucide={p.icon} width="20" height="20"></i>
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 10.5,
                color: 'var(--brand-accent-700)', letterSpacing: '0.14em',
                textTransform: 'uppercase', marginBottom: 6,
              }}>{p.tag}</span>
              <h4 style={{
                fontFamily: 'var(--font-ui)', fontSize: 18, fontWeight: 600,
                color: 'var(--brand-primary-700)', margin: '0 0 12px', letterSpacing: '-0.005em',
              }}>{p.title}</h4>
              <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      {/* Approach */}
      <SolutionSection
        id="approach" eyebrow="Approach · 4 steps"
        title="One pipeline. Four steps. One physician sign-off at every gate."
        kicker="The same pipeline that runs every other engagement, tuned to NMPA cadence and Chinese-language reviewer norms."
        bg="#fff"
       
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--border-1)', borderRadius: 16, overflow: 'hidden' }}>
          {approachSteps.map((s, i) => (
            <div key={s.n} style={{
              padding: 28, borderLeft: i === 0 ? 'none' : '1px solid var(--border-1)',
              background: i === 2 ? 'var(--brand-primary-100)' : '#fff',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10.5,
                color: i === 2 ? 'var(--brand-primary-700)' : 'var(--brand-accent-700)',
                letterSpacing: '0.14em', marginBottom: 12, fontWeight: 600,
              }}>
                {s.n} · {i === 2 ? 'HUMAN GATE' : 'AI-ASSISTED'}
              </div>
              <h4 style={{
                fontFamily: 'var(--font-ui)', fontSize: 17, fontWeight: 600,
                color: 'var(--brand-primary-700)', margin: '0 0 10px', letterSpacing: '-0.005em',
              }}>{s.t}</h4>
              <p style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      {/* Deliverables */}
      <SolutionSection
        id="deliverables" eyebrow="Deliverables · 4 workstreams"
        title="What ships, where the physician signs, and what the audit trail looks like."
        bg="var(--bg-2)"
       
      >
        <DeliverablesGrid items={deliverables} theme="navy" />
      </SolutionSection>

      {/* Timeline */}
      <SolutionSection
        id="timeline" eyebrow="Engagement timeline"
        title="A typical China-entry engagement, end-to-end."
        kicker="Most engagements run 14–24 weeks. We scope shorter pilots if you only need the gap scan."
        bg="#fff"
       
      >
        <PhaseTimeline phases={phases} theme="navy" />
      </SolutionSection>

      {/* Proof */}
      <SolutionSection
        id="proof" eyebrow="Proof · 2025 cohort"
        title="Numbers we can show you with a signed source trail."
        bg="var(--bg-2)"
       
      >
        <SolutionStatStrip stats={stats} theme="navy" />
        <div style={{ marginTop: 20, fontSize: 11.5, color: 'var(--fg-3)', lineHeight: 1.5 }}>
          Source: MedSci Healthcare engagement audit, 2025. NMPA outcomes vary by therapeutic area, asset class and dossier completeness — past results do not predict future approvals.
        </div>
      </SolutionSection>

      {/* Pilot */}
      <SolutionSection
        id="pilot" eyebrow="Pilot · low-commitment entry"
        title="The 30-Day China Evidence Sprint."
        kicker="A bounded engagement to pressure-test your evidence package against current NMPA expectations — before either side commits to a full program."
        bg="#fff"
       
      >
        <div className="two-col-grid" style={{
          background: 'var(--grad-wash)', border: '1px solid var(--brand-primary-300)',
          borderRadius: 16, padding: 40,
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40,
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '4px 10px', borderRadius: 4,
              background: 'var(--brand-primary-700)', color: '#fff',
              fontSize: 10.5, fontWeight: 600, letterSpacing: '0.14em',
              textTransform: 'uppercase', marginBottom: 16,
            }}>30-Day Pilot · Pricing on request</div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 600,
              color: 'var(--brand-primary-700)', margin: '0 0 16px', letterSpacing: '-0.01em', lineHeight: 1.2,
            }}>China Evidence Sprint</h3>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.65, margin: '0 0 24px' }}>
              We take your existing evidence package and run it against current NMPA / CDE guidance — surfacing the three or four gaps that will actually slow your submission. You walk away with a localized summary deck and an explicit go / no-go on a full engagement.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <Button variant="primary">Book the pilot</Button>
              <Button variant="outline">Download the brief</Button>
            </div>
          </div>
          <div style={{
            background: '#fff', border: '1px solid var(--border-1)',
            borderRadius: 12, padding: 24,
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10.5,
              color: 'var(--fg-3)', letterSpacing: '0.12em',
              textTransform: 'uppercase', marginBottom: 14,
            }}>Pilot includes · 30 days</div>
            {[
              'NMPA-aligned gap scan vs. current guidance',
              '5-physician advisory panel review',
              'Localized bilingual summary deck',
              'Prioritized go / no-go recommendation',
              'Signed source trail for every claim',
            ].map((x, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'start', gap: 10,
                fontSize: 13.5, color: 'var(--fg-1)', marginBottom: 12, lineHeight: 1.5,
              }}>
                <span style={{ color: 'var(--brand-primary-500)', flexShrink: 0, marginTop: 1 }}>
                  <i data-lucide="check" width="14" height="14"></i>
                </span>
                {x}
              </div>
            ))}
            <div style={{
              marginTop: 14, paddingTop: 14, borderTop: '1px dashed var(--border-1)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <EvidenceBadge kind="verified" size="sm" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)' }}>
                12 sprints completed · 2025
              </span>
            </div>
          </div>
        </div>
      </SolutionSection>

      <ContentReviewCrossSell />
      <SolutionCTA pageMeta={ENTERING_CHINA_META} />
      <RelatedSolutions current="entering-china" />
      <SolutionFooter />
    </div>
  );
}

window.PageEnteringChina = PageEnteringChina;
