/* PageBiostatistics.jsx — Biostatistics & Data Management (Business Block · 04) */
const BIOSTAT_META = {
  eyebrow: 'Business Block · 04',
  title: 'Biostatistics and data management, built to submission standard.',
  sub: 'Statistical programming, clinical data management and biostatistics — CDISC-aligned, double-programmed, and delivered to FDA and NMPA submission expectations across phase I–IV, registries and investigator-initiated studies.',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/' },
    { label: 'Biostatistics & Data Management', href: '#' },
  ],
  theme: 'navy',
  meta: [
    { k: 'Use cases', v: 'FDA / NMPA submissions · Registries · IIT · Publications' },
    { k: 'Standards', v: 'CDISC (CDASH / SDTM / ADaM) · ICH-GCP · FDA Technical Conformance Guide' },
    { k: 'Output',    v: 'SDTM / ADaM + Define.xml · TFLs · SAP · Data management report' },
    { k: 'QC',        v: 'Double programming · Pinnacle 21 · three-tier review' },
  ],
  ctaTitle: 'Bring us one dataset, one protocol, or one submission deadline.',
  ctaBody: 'Thirty-minute scoping call with a senior biostatistician. We respond within 24 hours and come back with a preliminary scope within 48.',
};

function PageBiostatistics() {
  const subnav = [
    { id: 'overview', label: 'Overview' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'process', label: 'Data lifecycle' },
    { id: 'working-model', label: 'Working model' },
    { id: 'proof', label: 'Proof' },
  ];

  const capabilities = [
    {
      icon: 'code-2', title: 'Statistical programming',
      body: 'SAS-based programming from raw data to analysis outputs — every analysis dataset and TFL independently double-programmed before it leaves the building.',
      bullets: ['SDTM / ADaM conversion & validation', 'Tables, listings & figures (TFLs)', 'Define.xml + Reviewer’s Guide', 'PK/PD, interim & DMC outputs'],
    },
    {
      icon: 'database', title: 'Clinical data management',
      body: 'EDC-based data management from protocol review to database lock — completeness, consistency and traceability managed under SOPs.',
      bullets: ['EDC build & edit-check configuration', 'CRF design & completion guidelines', 'Query management · WHODrug / MedDRA coding', 'SAE reconciliation & database lock'],
    },
    {
      icon: 'sigma', title: 'Biostatistics',
      body: 'Statistical support across the development lifecycle — from design and sample size through SAP, analysis and the statistical sections of the CSR.',
      bullets: ['Study design & sample-size estimation', 'Randomization incl. adaptive designs', 'Statistical analysis plan (SAP)', 'ISS / ISE & CSR statistical sections'],
    },
    {
      icon: 'sparkles', title: 'AI-enabled & RWD data services',
      body: 'AI accelerates the repetitive layers — CRF drafting, edit-check scripting, coding assistance — while statisticians and data managers make the calls.',
      bullets: ['Protocol-to-CRF drafting', 'Edit-check script generation', 'Coding & TFL-template assistance', 'RWD governance · hospital registry databases'],
    },
  ];

  const workingModel = [
    { title: '24-hour response', body: 'Scoping conversations answered within 24 hours; a preliminary plan within 48. A dedicated project manager reports weekly from kickoff to close-out.' },
    { title: 'Double programming, three-tier review', body: 'Every analysis dataset and TFL is independently re-programmed and reconciled, then passed through a three-tier QC review before delivery.' },
    { title: 'Global collaboration', body: 'Shared programming environments, versioned code, unified SOPs and cross-time-zone reviews — built working inside global sponsor biostatistics teams.' },
  ];

  const stats = [
    { n: '5,000+', u: '', l: 'Patients enrolled in a single supported registry program', note: 'program log · 2025' },
    { n: '100k+',  u: '', l: 'Patient records in one hospital disease database we built', note: 'project record' },
    { n: '0',      u: '', l: 'Conformance issues on a global NDA/BLA dataset package',    note: 'Pinnacle 21 log' },
    { n: '30%',    u: '', l: 'Study-cycle reduction on a supported IIT engagement',       note: 'project close-out' },
  ];

  return (
    <div>
      <SolutionPageHeader pageMeta={BIOSTAT_META} />
      <SolutionSubNav items={subnav} theme="navy" />

      <SolutionSection
        id="overview" eyebrow="Overview"
        title="The data backbone underneath every submission and publication."
        kicker="Whether the destination is an FDA dossier, an NMPA registration, or a peer-reviewed paper — the data has to be collected right, cleaned right, and analyzed right. That is this block."
        bg="#fff"
      >
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24,
        }}>
          <div style={{
            background: 'var(--bg-2)', border: '1px solid var(--border-1)',
            borderRadius: 16, padding: 32,
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--brand-accent-700)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12 }}>
              We claim
            </div>
            {[
              'Every analysis dataset and TFL is independently double-programmed.',
              'CDISC-conformant outputs, checked with Pinnacle 21 before delivery.',
              'A named biostatistician signs the SAP and the final analysis.',
              'Full-lifecycle coverage — phase I–IV, registries, and IIT.',
            ].map((x, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'start', gap: 10, fontSize: 14, color: 'var(--fg-1)', marginBottom: 10, lineHeight: 1.5 }}>
                <span style={{ color: 'var(--brand-primary-500)', flexShrink: 0, marginTop: 1 }}><i data-lucide="check" width="14" height="14"></i></span>{x}
              </div>
            ))}
          </div>
          <div style={{
            background: 'var(--brand-primary-900)', color: '#fff',
            borderRadius: 16, padding: 32,
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--brand-accent-500)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12 }}>
              We do not claim
            </div>
            {[
              'Zero queries. (We claim a documented query-resolution trail.)',
              'Instant database lock. (We claim a defined, SOP-driven lock process.)',
              'AI statisticians. (AI accelerates programming; statisticians decide.)',
              'Guaranteed regulatory approval.',
            ].map((x, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'start', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.85)', marginBottom: 10, lineHeight: 1.5 }}>
                <span style={{ color: 'var(--brand-accent-500)', flexShrink: 0, marginTop: 1 }}><i data-lucide="x" width="14" height="14"></i></span>{x}
              </div>
            ))}
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        id="capabilities" eyebrow="Capabilities · 4 workstreams"
        title="What we deliver under the Biostatistics & Data Management block."
        bg="var(--bg-2)"
      >
        <DeliverablesGrid items={capabilities} theme="navy" />
      </SolutionSection>

      {}
      <DeliverableSample
        eyebrow="What you actually receive"
        title="Each engagement ships as a defined data artifact, with a defined input shape."
        lede="Every deliverable is scoped against an explicit input contract and ships in a format a regulator, a sponsor biostatistics team, or a journal reviewer can work with directly."
        samples={[
          {
            label: 'Submission-ready CDISC dataset package',
            input: {
              format: 'Raw study data · protocol · annotated CRF',
              detail: 'Any EDC export; legacy formats accepted and mapped.'
            },
            output: {
              format: 'SDTM + ADaM + Define.xml + Reviewer’s Guide',
              detail: 'Pinnacle 21 report included · double-programmed · eCTD-ready.'
            },
            badge: 'verified',
            signedBy: 'Lead statistical programmer + biostatistician'
          },
          {
            label: 'Database-lock package',
            input: {
              format: 'Live EDC study · data management plan',
              detail: 'We can take over mid-study or run data management from startup.'
            },
            output: {
              format: 'Locked datasets + data management report',
              detail: 'Query log, coding report and SAE reconciliation included.'
            },
            badge: 'verified',
            signedBy: 'Lead data manager + QC reviewer'
          },
          {
            label: 'SAP + TFL package',
            input: {
              format: 'Protocol · endpoints · analysis questions',
              detail: 'From sample-size re-check to full efficacy and safety analysis.'
            },
            output: {
              format: 'SAP + tables, listings & figures',
              detail: 'Independently double-programmed; publication-grade figures on request.'
            },
            badge: 'verified',
            signedBy: 'Biostatistician + independent programmer'
          },
          {
            label: 'IIT full-service package',
            input: {
              format: 'Research question · site(s) · target journal',
              detail: 'Designed for investigator-initiated studies with tiered budgets.'
            },
            output: {
              format: 'Protocol input + EDC + DM + SAP + analysis + publication support',
              detail: 'EDC deployment in as little as 3 working days.'
            },
            badge: 'verified',
            signedBy: 'Dedicated PM + biostatistician'
          }
        ]}
      />

      <SolutionSection
        id="process" eyebrow="Data lifecycle"
        title="From first CRF field to final analysis — one traceable pipeline."
        kicker="Every step runs under SOPs, and every hand-off leaves a record a monitor or inspector can follow."
        bg="#fff"
      >
        <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border-1)', borderRadius: 16, padding: 36 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0 }}>
            {[
              { n: '01', t: 'Scoping & DM plan',  d: 'Protocol review, data management plan, CRF design and edit-check specification — AI-drafted, specialist-approved.' },
              { n: '02', t: 'Build & test',       d: 'EDC database build, logic-check configuration and user acceptance testing before first patient in.' },
              { n: '03', t: 'Conduct & clean',    d: 'Automated checks plus manual review; query generation, tracking and closure; WHODrug / MedDRA coding.' },
              { n: '04', t: 'Lock & QC',          d: 'Blinded and unblinded data review, three-tier QC, and a formal, SOP-driven database lock with sign-off.' },
              { n: '05', t: 'Analyze & deliver',  d: 'SAP execution, double-programmed datasets and TFLs, data management report — with the audit trail attached.' },
            ].map((s, i, arr) => (
              <div key={s.n} style={{
                padding: '0 18px', position: 'relative',
                borderRight: i < arr.length - 1 ? '1px dashed var(--border-1)' : 'none',
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: i === 3 ? 'var(--brand-accent-500)' : 'var(--brand-primary-100)',
                  color: i === 3 ? 'var(--brand-primary-900)' : 'var(--brand-primary-700)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, marginBottom: 14,
                }}>{s.n}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: i === 3 ? 'var(--brand-accent-700)' : 'var(--fg-3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>
                  {i === 3 ? 'Human gate' : 'AI-assisted'}
                </div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: 15.5, fontWeight: 600, color: 'var(--brand-primary-700)', marginBottom: 8, letterSpacing: '-0.005em' }}>{s.t}</div>
                <div style={{ fontSize: 12.5, color: 'var(--fg-2)', lineHeight: 1.5 }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        id="working-model" eyebrow="Working model"
        title="Built to plug into your team — sponsor-side or site-side."
        kicker="The same working model that runs inside global sponsor biostatistics teams runs for a single-site investigator-initiated study."
        bg="var(--bg-2)"
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {workingModel.map(t => (
            <div key={t.title} style={{
              background: '#fff', border: '1px solid var(--border-1)', borderRadius: 12, padding: 28,
            }}>
              <h4 style={{
                fontFamily: 'var(--font-ui)', fontSize: 18, fontWeight: 600,
                color: 'var(--brand-primary-700)', margin: '0 0 12px', letterSpacing: '-0.005em',
              }}>{t.title}</h4>
              <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>{t.body}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection
        id="proof" eyebrow="Proof · engagement records"
        title="Numbers we can show you, each with a project record behind it."
        bg="#fff"
      >
        <SolutionStatStrip stats={stats} theme="navy" />
      </SolutionSection>

      <SolutionCTA pageMeta={BIOSTAT_META} />
      <RelatedSolutions current="biostatistics-data-management" />
      <SolutionFooter />
    </div>
  );
}

window.PageBiostatistics = PageBiostatistics;
