/* PagePhysicianEngagement.jsx */
const PHYSICIAN_META = {
  eyebrow: 'Business Block · 02',
  title: 'A 3.33M+ physician network — for advisory, KOL, CME, and consented review.',
  sub: 'When you need a named clinician on the record — for a dossier, a publication, an advisory board, or a reviewer panel — we have the network and the consent infrastructure to do it cleanly.',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/' },
    { label: 'Physician Engagement', href: '#' },
  ],
  theme: 'navy',
  meta: [
    { k: 'Network',   v: '3.33M+ verified physicians, CN + US' },
    { k: 'Use cases', v: 'Advisory · KOL · CME · Reviewer panels' },
    { k: 'Consent',   v: 'Engagement-specific, auditable, revocable' },
    { k: 'Output',    v: 'Signed reviewer reports, advisory minutes, CME completion' },
  ],
  ctaTitle: 'Need a named physician on record by next quarter? Tell us the spec.',
  ctaBody: 'A 30-minute scoping call. We come back with feasibility on advisor profile, geography, therapeutic area, and timing.',
  primaryCta: 'Request an advisory panel',
};

function PagePhysicianEngagement() {
  const subnav = [
    { id: 'overview', label: 'Overview' },
    { id: 'network',  label: 'The network' },
    { id: 'engagements', label: 'Engagement types' },
    { id: 'consent',  label: 'Consent & ethics' },
    { id: 'proof',    label: 'Proof' },
  ];

  const engagementTypes = [
    {
      icon: 'users-round', title: 'Advisory boards',
      body: 'Single-instance and standing advisory boards across therapeutic areas — agenda, recruitment, facilitation, and signed minutes.',
      bullets: ['Single & standing boards', 'Agenda & briefing book', 'Independent facilitation', 'Signed minutes + audit trail'],
    },
    {
      icon: 'star', title: 'KOL mapping & engagement',
      body: 'Tier-1 KOL identification, segmentation by influence and reach, and structured engagement programs across publications and congress.',
      bullets: ['Tier-1 KOL mapping', 'Influence / reach scoring', 'Engagement plan', 'Conflict & disclosure scan'],
    },
    {
      icon: 'graduation-cap', title: 'CME-accredited programs',
      body: 'Independent, CME-accredited continuing medical education — designed for physician learning, not promotion.',
      bullets: ['CME accreditation support', 'Independent content review', 'Multi-modal delivery', 'Completion & outcomes log'],
    },
    {
      icon: 'clipboard-signature', title: 'Consented reviewer panels',
      body: 'Named reviewer panels for dossiers, manuscripts and pre-submission packages — every reviewer signs, every change is logged.',
      bullets: ['5–9 named reviewers per panel', 'Engagement-specific consent', 'Per-claim sign-off log', 'Reviewer disclosure register'],
    },
  ];

  const networkBars = [
    { label: 'Greater China · tier-1 AMCs',     pct: 88, n: '2.1M+' },
    { label: 'Greater China · tier-2 / community', pct: 64, n: '0.9M+' },
    { label: 'United States · academic',         pct: 42, n: '210k+' },
    { label: 'United States · community',        pct: 28, n: '120k+' },
    { label: 'EU / UK / JP',                     pct: 22, n: '95k+' },
  ];

  const stats = [
    { n: '3.33M+', l: 'Physicians in network',           note: '2025 audit', s: '1' },
    { n: '5–9',    l: 'Reviewers per consented panel',   note: 'standing' },
    { n: '96',     u: '%', l: 'Physician sign-off, first submission', note: '2025 audit' },
    { n: '< 14',   u: 'days', l: 'Median time to convene a panel', note: '2025 cohort' },
  ];

  return (
    <div>
      <SolutionPageHeader pageMeta={PHYSICIAN_META} />
      <SolutionSubNav items={subnav} theme="navy" />

      {}
      <DeliverableSample
        eyebrow="What you actually receive"
        title="Each engagement type ships as a signed artifact, scoped against an explicit input."
        lede="Whether you need an advisory board, a KOL map, a CME program or a consented reviewer panel — the input contract is bounded and the output is named-clinician signed."
        samples={[
          {
            label: 'Standing advisory board',
            input: { format: 'Therapy area · cadence · reviewer profile',
                     detail: 'Single-instance or standing; we handle agenda, recruitment, and facilitation.' },
            output: { format: 'Signed board minutes + audit log · per session',
                      detail: 'Independent facilitation, disclosure register, exportable trail.' },
            badge: 'verified',
            signedBy: '5–9 named reviewers per session'
          },
          {
            label: 'Tier-1 KOL map',
            input: { format: 'Therapy area · geography · use case',
                     detail: 'Influence + reach scoring across CN tier-1 AMCs and US academic centers.' },
            output: { format: 'Segmented KOL map + engagement plan · 12–24 pp',
                      detail: 'Conflict-and-disclosure scan attached for every named clinician.' },
            badge: 'verified',
            signedBy: 'Lead MD + KOL programs lead'
          },
          {
            label: 'CME-accredited program',
            input: { format: 'Educational gap · target audience',
                     detail: 'Designed for physician learning, not promotion. Independent content review.' },
            output: { format: 'CME activity + completion log · multi-modal',
                      detail: 'Accreditation support, outcomes log, completion certificates.' },
            badge: 'verified',
            signedBy: 'Independent reviewer + Lead MD'
          },
          {
            label: 'Consented reviewer panel',
            input: { format: 'Dossier or manuscript · per-claim review questions',
                     detail: 'Engagement-specific consent — time-bound, revocable, audit-grade.' },
            output: { format: 'Per-claim sign-off log + reviewer report',
                      detail: 'Every change timestamped; every reviewer named and disclosed.' },
            badge: 'verified',
            signedBy: '5–9 named reviewers + lead'
          }
        ]}
      />


      <SolutionSection
        id="overview" eyebrow="Overview"
        title="The physician layer of every engagement we run."
        kicker="Every other workstream — evidence, communications, regulatory — depends on a named clinician at the gate. This is the team that runs that gate."
        bg="#fff"
      >
        <div className="two-col-grid" style={{
          background: 'var(--brand-primary-900)', color: '#fff',
          borderRadius: 16, padding: 40,
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32,
        }}>
          {[
            { k: 'Named', t: 'Every reviewer is named.', d: 'No anonymous panels. Every clinician on a deliverable signs and discloses, every time.' },
            { k: 'Consented', t: 'Engagement-specific consent.', d: 'Consent is scoped to a single engagement, time-bound, revocable, and auditable.' },
            { k: 'Logged', t: 'Every change is logged.', d: 'A timestamped log captures who reviewed, edited and signed off — exportable on request.' },
          ].map((c, i) => (
            <div key={i} style={{
              borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.1)',
              paddingLeft: i === 0 ? 0 : 24,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-accent-500)', marginBottom: 14 }}>{c.k}</div>
              <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: 19, fontWeight: 600, color: '#fff', margin: '0 0 12px', letterSpacing: '-0.005em' }}>{c.t}</h4>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, margin: 0 }}>{c.d}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection
        id="network" eyebrow="The network · 3.33M+ physicians"
        title="Coverage by geography and care setting."
        kicker="A physician network we audit annually. Coverage is uneven by design — we go deep on tier-1 AMCs in both markets, where regulatory and reimbursement decisions are actually shaped."
        bg="var(--bg-2)"
      >
        <div style={{
          background: '#fff', border: '1px solid var(--border-1)',
          borderRadius: 16, padding: 36,
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 24, paddingBottom: 16, borderBottom: '1px dashed var(--border-1)',
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--brand-primary-700)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>
              Reachability index · 2025 audit
            </span>
            <EvidenceBadge kind="verified" size="sm" />
          </div>
          {networkBars.map((b, i) => (
            <div key={i} style={{ marginBottom: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 13.5, color: 'var(--fg-1)', fontWeight: 500 }}>{b.label}</span>
                <span style={{ fontSize: 13, color: 'var(--fg-2)', fontFamily: 'var(--font-mono)' }}>
                  {b.n} · <span style={{ color: 'var(--brand-primary-700)', fontWeight: 600 }}>{b.pct}%</span>
                </span>
              </div>
              <div style={{ height: 8, background: 'var(--bg-2)', borderRadius: 4, overflow: 'hidden', position: 'relative' }}>
                <div style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0, width: `${b.pct}%`,
                  background: i < 2 ? 'var(--brand-primary-700)' : 'var(--brand-accent-500)',
                  borderRadius: 4,
                }}></div>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 20, fontSize: 11.5, color: 'var(--fg-3)', lineHeight: 1.5 }}>
            Reachability index reflects the share of the segment we have engaged or can reasonably engage within 30 days, given current consent and disclosure status. Not a count of total practicing physicians in each segment.
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        id="engagements" eyebrow="Engagement types · 4 modes"
        title="How we put a physician on the record."
        bg="#fff"
      >
        <DeliverablesGrid items={engagementTypes} theme="navy" />
      </SolutionSection>

      <SolutionSection
        id="consent" eyebrow="Consent & ethics"
        title="Five rules we apply to every engagement."
        kicker="The reason a physician will work with us a second time is the same reason a regulator will accept the deliverable: the consent infrastructure is real."
        bg="var(--bg-2)"
      >
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
          {[
            { n: '01', t: 'Engagement-specific', d: 'Consent is scoped to one named engagement — never reused.' },
            { n: '02', t: 'Time-bound',          d: 'Every consent expires. Renewal is opt-in, not opt-out.' },
            { n: '03', t: 'Revocable',           d: 'A physician can withdraw at any point and we delete the linkage.' },
            { n: '04', t: 'Disclosed',           d: 'Every paid engagement is disclosed in the deliverable and the audit log.' },
            { n: '05', t: 'Auditable',           d: 'Consent records are exportable on request, on regulator demand, or by the physician themselves.' },
          ].map(c => (
            <div key={c.n} style={{
              background: '#fff', border: '1px solid var(--border-1)',
              borderRadius: 12, padding: 22,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--brand-accent-700)', letterSpacing: '0.12em', marginBottom: 12, fontWeight: 600 }}>{c.n}</div>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 15, fontWeight: 600, color: 'var(--brand-primary-700)', margin: '0 0 8px', letterSpacing: '-0.005em' }}>{c.t}</div>
              <p style={{ fontSize: 12.5, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0 }}>{c.d}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection
        id="proof" eyebrow="Proof · 2025"
        title="Signed numbers, signed source trail."
        bg="#fff"
      >
        <SolutionStatStrip stats={stats} theme="navy" />
        <div style={{ marginTop: 16, fontSize: 11.5, color: 'var(--fg-3)', lineHeight: 1.5 }}>
          ¹ Internal MedSci Healthcare network audit, 2025. Active reachability — not total practicing physicians.
        </div>
      </SolutionSection>

      <ContentReviewCrossSell />
      <SolutionCTA pageMeta={PHYSICIAN_META} />
      <RelatedSolutions current="physician-engagement" />
      <SolutionFooter />
    </div>
  );
}
window.PagePhysicianEngagement = PagePhysicianEngagement;
