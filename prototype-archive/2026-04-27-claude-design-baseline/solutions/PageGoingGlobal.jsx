/* PageGoingGlobal.jsx — body content for /solutions/going-global-us */

const GOING_GLOBAL_META = {
  eyebrow: 'Path · Strategy · 02',
  title: 'Get FDA-track evidence and US KOL traction — for China innovators heading west.',
  sub: 'For China-grown medtech, pharma and diagnostics innovators preparing a US / global launch — an evidence path built for regulators and reviewers who do not read Chinese.',
  breadcrumb: [
    { label: 'Home', href: '../Homepage.html' },
    { label: 'Solutions', href: '../Homepage.html#services' },
    { label: 'Going Global (US)', href: '#' },
  ],
  theme: 'cyan',
  meta: [
    { k: 'For',       v: 'China medtech, pharma, diagnostics, AI/SaMD innovators' },
    { k: 'Pathway',   v: 'FDA · IRB · US KOL · Publication track' },
    { k: 'Duration',  v: '16–36 weeks · scoped per-engagement' },
    { k: 'Languages', v: 'CN ↔ EN, US-physician QC, regulator-grade English' },
  ],
  ctaTitle: 'Show us your dossier. We’ll diagnose the FDA gap in 30 days.',
  ctaBody: 'A bounded FDA Evidence Gap Diagnostic — guidance cross-walk, registry audit, and a prioritized gap report. Pricing on request.',
  primaryCta: 'Book the FDA Diagnostic',
  secondaryCta: 'See US case studies',
};

function PageGoingGlobal() {
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
    { tag: 'Medtech',    title: 'China innovators · 510(k) / De Novo path', body: 'Class II–III devices with strong China clinical traction, evaluating a 510(k), De Novo or PMA, and a US KOL bench.', icon: 'cpu' },
    { tag: 'Pharma',     title: 'Late-stage assets · IND / NDA', body: 'Phase II/III assets with NMPA-grade evidence, building an IND-ready package, US PI/site bench and publication plan.', icon: 'pill' },
    { tag: 'AI / SaMD',  title: 'Algorithmic and SaMD products', body: 'AI-enabled diagnostics or SaMD evaluating an FDA pathway — needing US registry strategy and post-market plans.', icon: 'brain-circuit' },
  ];

  const approachSteps = [
    { n: '01', t: 'Guidance cross-walk',  d: 'Map the asset to current FDA guidance — devices, drugs, SaMD or companion Dx — flagging what bridges from China data and what does not.' },
    { n: '02', t: 'Evidence bridge',      d: 'AI-assisted retrieval across China and global literature; structured bridging of registry and trial data into FDA-readable format.' },
    { n: '03', t: 'US KOL panel',         d: 'A consented US KOL panel reviews the dossier in English, edits the medical narrative, and signs off on key claims.' },
    { n: '04', t: 'Submission & comms',   d: 'IND / 510(k) / De Novo packets, IRB-ready protocols, publication plan, and US-congress materials in regulator-grade English.' },
  ];

  const deliverables = [
    {
      icon: 'file-search', title: 'FDA dossier & guidance cross-walk',
      body: 'IND, 510(k), De Novo or PMA packets aligned to current FDA guidance, with a structured gap report and reviewer-readiness checks.',
      bullets: ['Guidance cross-walk', 'Bridging strategy report', 'Pre-Sub / Q-Sub support', 'RFI response library'],
    },
    {
      icon: 'clipboard-check', title: 'IRB-ready protocol & registry support',
      body: 'IRB-grade protocol drafting, US registry feasibility, and statistical analysis plans tuned to FDA reviewer expectations.',
      bullets: ['Protocol & SAP drafting', 'IRB packet prep', 'US registry feasibility', 'Endpoint cross-walk'],
    },
    {
      icon: 'users', title: 'US KOL & advisory bench',
      body: 'A consented US KOL bench across academic medical centers — for advisory boards, named investigators, and reviewer-grade narrative sign-off.',
      bullets: ['US KOL mapping', 'Standing advisory board', 'Investigator network', 'Named clinician sign-off'],
    },
    {
      icon: 'book-open-text', title: 'Publication & US congress',
      body: 'Peer-reviewed publication strategy, congress posters and symposia, and bilingual press materials timed to US milestones.',
      bullets: ['Publication strategy', 'Manuscript drafting', 'Congress poster / symposium', 'US press positioning'],
    },
  ];

  const phases = [
    { weeks: '0–2',   title: 'Diagnostic & gap',   body: 'Guidance cross-walk, bridging-data inventory, and a prioritized FDA gap report.', deliverable: 'FDA gap report' },
    { weeks: '2–10',  title: 'Bridge & build',    body: 'Bridging analyses, English-language scientific synthesis, and IRB-ready protocol drafting — physician-reviewed throughout.', deliverable: 'Bridging dossier' },
    { weeks: '8–18',  title: 'US KOL panel',      body: 'A consented US KOL panel reviews the package, edits the medical narrative in English, and signs off.', deliverable: 'Signed KOL report' },
    { weeks: '14–28', title: 'Submission & PR',   body: 'IND / 510(k) / De Novo packet, publication plan in flight, and US congress materials.', deliverable: 'FDA-ready packet' },
  ];

  const stats = [
    { n: '42 → 18', u: 'days', l: 'Median regulator response time, 2025', note: 'aggregated, n = 9' },
    { n: '7',       u: '',     l: 'Avg US KOL advisors per engagement',   note: 'consented panel' },
    { n: '11',      u: '',     l: 'Manuscripts in draft, 2025 cohort',    note: 'peer-reviewed' },
    { n: '0',       u: '',     l: 'Findings of un-attributable claims',    note: 'audit, 2025' },
  ];

  return (
    <div>
      <SolutionPageHeader pageMeta={GOING_GLOBAL_META} />
      <SolutionSubNav items={subnav} theme="cyan" />

      <SolutionSection
        id="overview" eyebrow="Overview · why this path"
        title="Bridge China-grade evidence into a dossier the FDA can actually read."
        kicker="The hardest part of going global is not translation — it’s rewriting your scientific narrative for reviewers who weren’t in the room when you generated the data."
        bg="#fff" label="01 · Overview"
      >
        <div style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 32,
          background: 'var(--bg-2)', border: '1px solid var(--border-1)',
          borderRadius: 16, padding: 40,
        }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-ui)', fontSize: 19, fontWeight: 600, color: 'var(--brand-primary-700)', margin: '0 0 14px' }}>
              What we believe about going west.
            </h3>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.65, margin: '0 0 14px' }}>
              FDA reviewers want bridging logic, not translation. They want to know which China-generated endpoints map onto FDA-recognized ones — and which do not. They want a US clinician on record. They want a registry plan that survives outside Beijing.
            </p>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.65, margin: 0 }}>
              We rebuild your dossier in regulator-grade English, with a US KOL bench attached.
            </p>
          </div>
          <div style={{
            background: '#fff', border: '1px solid var(--border-1)',
            borderRadius: 12, padding: 22,
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--fg-3)',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14,
            }}>What we do not do</div>
            {[
              'Translate your dossier and call it bridged.',
              'Promise a 510(k) clearance date.',
              'Write claims that no US clinician will sign.',
              'Skip a Pre-Sub when one is warranted.',
            ].map((x, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'start', gap: 10,
                fontSize: 13, color: 'var(--fg-1)', marginBottom: 10, lineHeight: 1.45,
              }}>
                <span style={{ color: 'var(--error-500)', flexShrink: 0, marginTop: 1 }}>
                  <i data-lucide="x" width="14" height="14"></i>
                </span>{x}
              </div>
            ))}
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        id="who-its-for" eyebrow="Who it's for"
        title="Three China-innovator profiles we work with most often."
        bg="var(--bg-2)" label="02 · Who it's for"
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {personas.map((p, i) => (
            <div key={i} style={{
              background: '#fff', border: '1px solid var(--border-1)',
              borderRadius: 12, padding: 28,
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 10,
                background: 'var(--brand-accent-100)', color: 'var(--brand-accent-700)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18,
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

      <SolutionSection
        id="approach" eyebrow="Approach · 4 steps"
        title="Diagnose. Bridge. Sign. Submit."
        bg="#fff" label="03 · Approach"
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--border-1)', borderRadius: 16, overflow: 'hidden' }}>
          {approachSteps.map((s, i) => (
            <div key={s.n} style={{
              padding: 28, borderLeft: i === 0 ? 'none' : '1px solid var(--border-1)',
              background: i === 2 ? 'var(--brand-accent-100)' : '#fff',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10.5,
                color: 'var(--brand-accent-700)',
                letterSpacing: '0.14em', marginBottom: 12, fontWeight: 600,
              }}>{s.n} · {i === 2 ? 'HUMAN GATE' : 'AI-ASSISTED'}</div>
              <h4 style={{
                fontFamily: 'var(--font-ui)', fontSize: 17, fontWeight: 600,
                color: 'var(--brand-primary-700)', margin: '0 0 10px', letterSpacing: '-0.005em',
              }}>{s.t}</h4>
              <p style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection
        id="deliverables" eyebrow="Deliverables · 4 workstreams"
        title="What ships, where the US clinician signs, what the source trail captures."
        bg="var(--bg-2)" label="04 · Deliverables"
      >
        <DeliverablesGrid items={deliverables} theme="cyan" />
      </SolutionSection>

      <SolutionSection
        id="timeline" eyebrow="Engagement timeline"
        title="A typical Going-Global engagement, end-to-end."
        kicker="Most engagements run 18–28 weeks. Pre-Sub or Q-Sub interactions can shift the back half."
        bg="#fff" label="05 · Timeline"
      >
        <PhaseTimeline phases={phases} theme="cyan" />
      </SolutionSection>

      <SolutionSection
        id="proof" eyebrow="Proof · 2025 cohort"
        title="Numbers we can show you with a signed source trail."
        bg="var(--bg-2)" label="06 · Proof"
      >
        <SolutionStatStrip stats={stats} theme="cyan" />
        <div style={{ marginTop: 20, fontSize: 11.5, color: 'var(--fg-3)', lineHeight: 1.5 }}>
          Source: MedSci Healthcare engagement audit, 2025. FDA outcomes vary by pathway, asset class and dossier completeness — past results do not predict future clearance or approval.
        </div>
      </SolutionSection>

      <SolutionSection
        id="pilot" eyebrow="Pilot · low-commitment entry"
        title="The 30-Day FDA Evidence Gap Diagnostic."
        kicker="A bounded engagement to identify the three or four FDA gaps that will actually slow your submission — before a full Going-Global program."
        bg="#fff" label="07 · Pilot"
      >
        <div style={{
          background: 'linear-gradient(180deg, #D6F1F9 0%, #FFFFFF 100%)', border: '1px solid var(--brand-accent-500)',
          borderRadius: 16, padding: 40,
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40,
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '4px 10px', borderRadius: 4,
              background: 'var(--brand-accent-500)', color: 'var(--brand-primary-900)',
              fontSize: 10.5, fontWeight: 600, letterSpacing: '0.14em',
              textTransform: 'uppercase', marginBottom: 16,
            }}>30-Day Pilot · Pricing on request</div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 600,
              color: 'var(--brand-primary-700)', margin: '0 0 16px', letterSpacing: '-0.01em', lineHeight: 1.2,
            }}>FDA Evidence Gap Diagnostic</h3>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.65, margin: '0 0 24px' }}>
              We take your existing China-generated package and run it against current FDA guidance — surfacing bridging gaps in evidence, statistical design, and reviewer narrative. You walk away with a prioritized gap report and a clear go / no-go.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <Button variant="primary-light">Book the diagnostic</Button>
              <Button variant="outline">Download the brief</Button>
            </div>
          </div>
          <div style={{
            background: '#fff', border: '1px solid var(--border-1)', borderRadius: 12, padding: 24,
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--fg-3)',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14,
            }}>Pilot includes · 30 days</div>
            {[
              'FDA guidance cross-walk for your pathway',
              'Literature + registry audit (CN + EN)',
              'US-physician narrative review',
              'Prioritized gap report with severity tiers',
              'Bridging-strategy recommendation',
            ].map((x, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'start', gap: 10,
                fontSize: 13.5, color: 'var(--fg-1)', marginBottom: 12, lineHeight: 1.5,
              }}>
                <span style={{ color: 'var(--brand-accent-700)', flexShrink: 0, marginTop: 1 }}>
                  <i data-lucide="check" width="14" height="14"></i>
                </span>{x}
              </div>
            ))}
            <div style={{
              marginTop: 14, paddingTop: 14, borderTop: '1px dashed var(--border-1)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <EvidenceBadge kind="verified" size="sm" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)' }}>
                9 diagnostics completed · 2025
              </span>
            </div>
          </div>
        </div>
      </SolutionSection>

      <SolutionCTA pageMeta={GOING_GLOBAL_META} />
      <RelatedSolutions current="going-global-us" />
      <SolutionFooter />
    </div>
  );
}

window.PageGoingGlobal = PageGoingGlobal;
