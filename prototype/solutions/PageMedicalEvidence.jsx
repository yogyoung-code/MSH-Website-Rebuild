/* PageMedicalEvidence.jsx */
const MED_EVIDENCE_META = {
  eyebrow: 'Business Block · 01',
  title: 'Medical evidence with a source on every claim, signed by a clinician.',
  sub: 'Real-world evidence, registry analysis, systematic literature review and HEOR — assembled by AI retrieval, gated by physician sign-off, shipped with a structured source trail.',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/' },
    { label: 'Medical Evidence', href: '#' },
  ],
  theme: 'navy',
  meta: [
    { k: 'Use cases', v: 'NMPA / FDA dossier · NRDL · Reimbursement · Publications' },
    { k: 'Sources',   v: 'Indexed literature, registries, payer databases, prior submissions' },
    { k: 'Output',    v: 'RWE reports · SLR · HEOR models · Value dossier' },
    { k: 'Trail',     v: 'Every claim: year, source, signed reviewer' },
  ],
  ctaTitle: 'Bring us one evidence question. We\'ll show you the source trail.',
  ctaBody: 'Thirty-minute scoping call with a physician-trained evidence lead. We\'ll come back with a sample source trail from a comparable engagement.',
};

function PageMedicalEvidence() {
  const subnav = [
    { id: 'overview', label: 'Overview' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'process', label: 'Source-trail process' },
    { id: 'evidence-tiers', label: 'Evidence tiers' },
    { id: 'proof', label: 'Proof' },
  ];

  const capabilities = [
    {
      icon: 'database', title: 'Real-world evidence (RWE)',
      body: 'Structured RWE drawn from registries, EHR datasets and post-market data — bridged across China and US contexts where the data permits.',
      bullets: ['China registry feasibility', 'US claims / EHR partner network', 'Comparator construction', 'Bias & confounding analysis'],
    },
    {
      icon: 'list-ordered', title: 'Registry design & analysis',
      body: 'Prospective and retrospective registries — protocol drafting, IRB packets, statistical analysis plans, and ongoing PITL reporting.',
      bullets: ['Registry protocol drafting', 'IRB / ethics packet', 'SAP & analysis cadence', 'PITL audit log'],
    },
    {
      icon: 'book-open-text', title: 'Systematic literature review',
      body: 'AI-assisted retrieval across 10k+ sources in a week, not a quarter — with PRISMA-aligned reporting and physician-curated synthesis.',
      bullets: ['PRISMA-aligned protocol', 'AI retrieval + de-duplication', 'Physician-curated synthesis', 'Citation-level source trail'],
    },
    {
      icon: 'banknote', title: 'HEOR & value dossier',
      body: 'Cost-effectiveness, budget-impact and value frameworks tuned to NRDL, ICER and provincial-payer environments.',
      bullets: ['Cost-effectiveness models', 'Budget-impact analysis', 'NRDL / ICER value dossier', 'Sensitivity & scenario testing'],
    },
  ];

  const tiers = [
    { kind: 'verified',    title: 'Verified',        body: 'Year, source, and named physician reviewer attached. Quotable in dossiers, decks and external publications.' },
    { kind: 'development', title: 'In Development',  body: 'Source identified, analysis in flight, no physician sign-off yet. Internally usable; not for external claims.' },
    { kind: 'request',     title: 'On Request',      body: 'Available under NDA — typically engagement-specific data, payer-sensitive analyses, or pre-publication results.' },
  ];

  const stats = [
    { n: '10k+',   u: '',   l: 'Sources indexed per SLR engagement', note: 'AI retrieval' },
    { n: '128',    u: '',   l: 'Submissions audited, Q4 2025',       note: 'platform log' },
    { n: '3.33M+', u: '',   l: 'Physicians available for QC',         note: 'network audit' },
    { n: '0',      u: '',   l: 'Un-attributable claims, 2025 audit',   note: 'all years cited' },
  ];

  return (
    <div>
      <SolutionPageHeader pageMeta={MED_EVIDENCE_META} />
      <SolutionSubNav items={subnav} theme="navy" />

      <SolutionSection
        id="overview" eyebrow="Overview"
        title="The pipeline that runs underneath every other engagement."
        kicker="Whether you're entering China, going global, or just need a registry rebuilt — the evidence pipeline is the same. Retrieval, structured synthesis, physician review, signed source trail."
        bg="#fff" label="01 · Overview"
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
              'Structured retrieval across 10k+ sources per engagement.',
              'Every numerical claim cites a year and a source.',
              'Every report is signed off by a named physician.',
              'A reviewable audit log on every deliverable.',
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
              'Zero hallucination. (We claim physician-verified.)',
              '100% accuracy. (We claim auditable.)',
              'AI doctors. (We claim AI retrieval; doctors review.)',
              'Real-time approval prediction.',
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
        title="What we deliver under the Medical Evidence block."
        bg="var(--bg-2)" label="02 · Capabilities"
      >
        <DeliverablesGrid items={capabilities} theme="navy" />
      </SolutionSection>

      {/* UXcritique20260429: deliverable-page signature shape — input → output
          spec rows give this page a visual identity distinct from path pages.
          Reads as an engineering spec, not marketing. */}
      <DeliverableSample
        eyebrow="What you actually receive"
        title="Each capability ships as a signed artifact, with a defined input shape."
        lede="Every deliverable is scoped against an explicit input contract and ships in a format that a regulator, payer, or peer reviewer can read without translation."
        samples={[
          {
            label: 'Real-world evidence (RWE) report',
            input: {
              format: 'Therapy area · target dossier · jurisdiction',
              detail: 'We work from your existing trial protocol and registry questions; no raw PHI required.'
            },
            output: {
              format: 'PRISMA-aligned RWE report · 18–60 pp + appendix',
              detail: 'Citation-level source trail · year + signed reviewer per claim.'
            },
            badge: 'verified',
            signedBy: 'Lead reviewer + 1 second reviewer'
          },
          {
            label: 'Registry protocol package',
            input: {
              format: 'Research question · sites in scope',
              detail: 'Single-question or multi-arm; either prospective or retrospective.'
            },
            output: {
              format: 'Protocol + IRB packet + SAP · 30–80 pp',
              detail: 'Statistical analysis plan, ethics packet, ongoing PITL audit cadence.'
            },
            badge: 'verified',
            signedBy: 'Biostatistician + Lead MD'
          },
          {
            label: 'HEOR value dossier',
            input: {
              format: 'Therapy area · payer model · jurisdiction',
              detail: 'NRDL / ICER / commercial-payer scenarios scoped against your asset.'
            },
            output: {
              format: 'Cost-effectiveness model + value dossier · 20–50 pp',
              detail: 'Sensitivity scenarios, budget-impact analysis, payer-by-payer scan.'
            },
            badge: 'verified',
            signedBy: 'HEOR lead + Lead MD'
          },
          {
            label: 'Cross-jurisdictional bridge memo',
            input: {
              format: 'Origin dossier · target market · gap question',
              detail: 'Used most often to bridge China-generated data into FDA/EMA expectations or vice versa.'
            },
            output: {
              format: 'Bridge memo + comparability table · 10–24 pp',
              detail: 'Per-claim translation status: travels / partial / re-derive locally.'
            },
            badge: 'in-development',
            signedBy: 'Per-engagement panel'
          }
        ]}
      />

      <SolutionSection
        id="process" eyebrow="Source-trail process"
        title="Every claim travels with its source. Every source carries a signature."
        kicker="The audit log is part of the deliverable, not a side artifact you have to ask for later."
        bg="#fff" label="03 · Process"
      >
        <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border-1)', borderRadius: 16, padding: 36 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0 }}>
            {[
              { n: '01', t: 'Source ingest',    d: 'Indexed literature, registries, prior submissions and payer datasets — tagged for retrieval.' },
              { n: '02', t: 'AI retrieval',     d: 'Question-driven retrieval; de-duplicated and clustered across language and source type.' },
              { n: '03', t: 'Synthesis',        d: 'Structured synthesis with citation slots — no claim leaves this step without a source attached.' },
              { n: '04', t: 'Physician review', d: 'Named clinician reviews, edits, signs off. Every change is logged with reviewer + timestamp.' },
              { n: '05', t: 'Audit log',        d: 'Exportable trail accompanies every deliverable — version, reviewer, source, timestamp.' },
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
        id="evidence-tiers" eyebrow="Three-tier evidence system"
        title="Always know what you can quote, and what you cannot."
        kicker="Every claim in our deliverables carries one of three badges. You always know the maturity of the evidence you're holding."
        bg="var(--bg-2)" label="04 · Evidence tiers"
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {tiers.map(t => (
            <div key={t.kind} style={{
              background: '#fff', border: '1px solid var(--border-1)', borderRadius: 12, padding: 28,
            }}>
              <div style={{ marginBottom: 18 }}>
                <EvidenceBadge kind={t.kind} />
              </div>
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
        id="proof" eyebrow="Proof · 2025"
        title="Numbers we can show you with a signed source trail."
        bg="#fff" label="05 · Proof"
      >
        <SolutionStatStrip stats={stats} theme="navy" />
      </SolutionSection>

      <SolutionCTA pageMeta={MED_EVIDENCE_META} />
      <RelatedSolutions current="medical-evidence" />
      <SolutionFooter />
    </div>
  );
}

window.PageMedicalEvidence = PageMedicalEvidence;
