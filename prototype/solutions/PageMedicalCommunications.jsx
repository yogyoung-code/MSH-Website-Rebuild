/* PageMedicalCommunications.jsx */
const MED_COMMS_META = {
  eyebrow: 'Business Block · 03',
  title: 'Bilingual medical communications, signed off on both sides of the Pacific.',
  sub: 'Publications, congress materials and localized content — produced in EN and CN, reviewed by clinicians in both markets, compliant by construction. And for teams going global: a communications office we build, then operate for you.',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/' },
    { label: 'Medical Communications', href: '#' },
  ],
  theme: 'navy',
  meta: [
    { k: 'Output',     v: 'Manuscripts · Congress · Localized content · Media & PR' },
    { k: 'Languages',  v: 'EN · 简体中文 · 繁體中文 · ja-JP on request' },
    { k: 'Reviewers',  v: 'Dual-market physician QC' },
    { k: 'Compliance', v: 'PhRMA / EFPIA / RDPAC-aware review' },
  ],
  ctaTitle: 'A bilingual artifact in two weeks. Lowest commitment way to work with us.',
  ctaBody: 'The Cross-Border Content Sprint produces one medically reviewed, bilingual artifact in 14 days — flat fee, signed source trail.',
  primaryCta: 'Start a content sprint',
};

function PageMedicalCommunications() {
  const subnav = [
    { id: 'gco', label: 'Communications Office · New' },
    { id: 'overview', label: 'Overview' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'workflow', label: 'Bilingual workflow' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'proof', label: 'Proof' },
  ];

  const capabilities = [
    {
      icon: 'book-open-text', title: 'Peer-reviewed publications',
      body: 'Manuscript drafting, journal targeting, response-letter support — physician-reviewed at every revision pass.',
      bullets: ['Target journal selection', 'Manuscript drafting & revision', 'Response-letter library', 'Authorship & disclosure'],
    },
    {
      icon: 'presentation', title: 'Congress posters & symposia',
      body: 'Posters, oral presentations, satellite symposia — produced for ASCO, ESMO, AHA, CSCO, CMHA and more.',
      bullets: ['Poster & oral content', 'Satellite symposium production', 'Bilingual booth assets', 'Congress reporter coverage'],
    },
    {
      icon: 'languages', title: 'Bilingual localization',
      body: 'EN ↔ CN scientific localization with terminology consistency, dual-physician QC, and a signed source trail.',
      bullets: ['Scientific translation', 'Terminology consistency layer', 'Dual-physician QC', 'Reviewer disclosure log'],
    },
    {
      icon: 'shield-check', title: 'Compliance-aware QC',
      body: 'Pre-physician filtering for off-label risk, fair-balance gaps and disclosure issues — tuned to dual-market codes.',
      bullets: ['Off-label flagging', 'Fair-balance check', 'Disclosure & funding scan', 'Code-of-practice mapping'],
    },
  ];

  return (
    <div>
      <SolutionPageHeader pageMeta={MED_COMMS_META} />
      <SolutionSubNav items={subnav} theme="navy" />

      {}
      <DeliverableSample
        eyebrow="What you actually receive"
        title="Each artifact ships bilingual, signed by clinicians on both sides."
        lede="Bilingual is not a translation step — it's a parallel workflow with one US-licensed and one CN-licensed clinician on the audit log."
        samples={[
          {
            label: 'Peer-reviewed manuscript',
            input: { format: 'Trial / RWE dataset · target journal',
                     detail: 'We work from your protocol; AI fills citation slots, physicians draft and sign every section.' },
            output: { format: 'Submission-ready manuscript · 4k–8k words + figures',
                      detail: 'Authorship + disclosure block, response-letter library, target journal aligned.' },
            badge: 'verified',
            signedBy: 'Lead MD + 1 second reviewer'
          },
          {
            label: 'Congress poster or symposium',
            input: { format: 'Congress (ASCO / ESMO / AHA / CSCO / CMHA) · abstract',
                     detail: 'Camera-ready bilingual content. Booth assets and reporter coverage on request.' },
            output: { format: 'Poster + oral / symposium content · bilingual',
                      detail: 'Booth assets, presenter notes, congress reporter brief.' },
            badge: 'verified',
            signedBy: 'Lead MD + congress lead'
          },
          {
            label: 'Bilingual scientific localization',
            input: { format: 'Source artifact · target audience · code-of-practice',
                     detail: 'EN ↔ CN with terminology consistency layer; dual-physician QC.' },
            output: { format: 'Bilingual artifact + reviewer disclosure log',
                      detail: 'Pre-physician filtering for off-label, fair-balance, and disclosure.' },
            badge: 'verified',
            signedBy: 'US-licensed MD + CN-licensed MD'
          },
          {
            label: 'Compliance-aware QC pass',
            input: { format: 'Existing draft · target jurisdiction code',
                     detail: 'PhRMA / EFPIA / RDPAC awareness. Off-label, fair-balance, disclosure scans.' },
            output: { format: 'Annotated review + remediation list',
                      detail: 'Code-of-practice mapping, ready for legal review.' },
            badge: 'in-development',
            signedBy: 'Compliance lead + Lead MD'
          },
          {
            label: 'Data readout launch (Communications Office)',
            input: { format: 'One readout · embargo date · target outlets',
                     detail: 'Release drafting, embargoed pitching and KOL amplification — scientific claims physician-signed before anything ships.' },
            output: { format: 'Release + coverage log + share-of-voice read',
                      detail: 'Earned vs. paid always disclosed; every claim carries a source.' },
            badge: 'in-development',
            signedBy: 'Comms lead + Lead MD'
          }
        ]}
      />

      {/* GCO flagship band — the block's newest workstream, deliberately high on the page */}
      <SolutionSection
        id="gco" eyebrow="New service line · Build & Operate"
        title="Beyond artifacts: the Global Communications Office."
        kicker="Artifacts win reviews; presence wins markets. Our newest workstream builds your newsroom, channels and press relationships — then operates them as your outsourced global communications function."
        bg="var(--bg-2)"
      >
        <div className="two-col-grid" style={{
          background: 'linear-gradient(180deg, #D6F1F9 0%, #FFFFFF 100%)',
          border: '1px solid var(--brand-accent-500)',
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
            }}>New · 2026 · Going Global flagship</div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 600,
              color: 'var(--brand-primary-700)', margin: '0 0 16px', letterSpacing: '-0.01em', lineHeight: 1.2,
            }}>Your global communications office — built, then run for you.</h3>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.65, margin: '0 0 24px' }}>
              For China innovators going global: media relations with the medical and industry trade press,
              an operated English newsroom and LinkedIn presence, congress amplification, KOL voice, and
              quarterly share-of-voice measurement, and ongoing monitoring and factual correction of how AI
              systems describe you — scientific claims physician-signed, every placement on an auditable
              coverage log.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button variant="primary-light" href="/solutions/global-communications-office.html">Explore the office</Button>
              <Button variant="outline" href="/contact.html?intent=gco_audit">Scope a 30-day presence audit</Button>
            </div>
            <div style={{ marginTop: 14, fontSize: 12.5, color: 'var(--fg-3)' }}>
              也可阅读<a href="/solutions/global-communications-office-cn.html" style={{ color: 'var(--brand-accent-700)', fontWeight: 600, textDecoration: 'none' }}>中文版介绍 →</a>
            </div>
          </div>
          <div style={{
            background: '#fff', border: '1px solid var(--border-1)', borderRadius: 12, padding: 24,
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--fg-3)',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14,
            }}>The office at a glance</div>
            {[
              { k: 'Audit · 30 days',   d: 'Share-of-voice baseline vs. named competitors + a 90-day roadmap.' },
              { k: 'Build · 8–12 wks',  d: 'Messaging house, press kit, English newsroom, journalist map, SOP.' },
              { k: 'Operate · retainer', d: 'Monitoring, pitching, channels, congress moments, KOL voice — reported quarterly.' },
            ].map((x, i) => (
              <div key={i} style={{
                paddingBottom: 12, marginBottom: 12,
                borderBottom: i < 2 ? '1px dashed var(--border-1)' : 'none',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11.5, fontWeight: 600,
                  color: 'var(--brand-accent-700)', letterSpacing: '0.06em', marginBottom: 4,
                }}>{x.k}</div>
                <div style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.5 }}>{x.d}</div>
              </div>
            ))}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              fontSize: 12, color: 'var(--fg-3)', marginTop: 2,
            }}>
              <i data-lucide="shield-check" width="13" height="13" style={{ color: 'var(--brand-accent-700)' }}></i>
              No promised placements · earned vs. paid always disclosed
            </div>
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        id="overview" eyebrow="Overview"
        title="Bilingual is not a translation step. It's a parallel workflow."
        kicker="A US-grade manuscript translated into Chinese is not a CN-grade manuscript. We run two reviewer tracks in parallel — one in each language — and reconcile."
        bg="#fff"
      >
        <div style={{
          background: 'var(--bg-2)', border: '1px solid var(--border-1)',
          borderRadius: 16, padding: 36,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32,
        }}>
          <div style={{ borderRight: '1px dashed var(--border-1)', paddingRight: 32 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--brand-primary-500)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12, fontWeight: 600 }}>EN · regulator-grade</div>
            <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: 18, fontWeight: 600, color: 'var(--brand-primary-700)', margin: '0 0 12px' }}>For FDA reviewers, US KOLs, journal editors.</h4>
            <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>
              Native-grade scientific English. Pre-Sub / Q-Sub conventions. Endpoint vocabulary aligned to current FDA guidance and the journal-of-record style.
            </p>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--brand-accent-700)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12, fontWeight: 600 }}>中文 · 监管级</div>
            <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: 18, fontWeight: 600, color: 'var(--brand-primary-700)', margin: '0 0 12px' }}>For NMPA / CDE reviewers, China KOLs, NRDL.</h4>
            <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>
              Submission-grade simplified Chinese. CDE convention. Pharmacopoeia terminology consistency. Tier-1 KOL voice and reviewer expectations.
            </p>
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        id="capabilities" eyebrow="Capabilities · 4 workstreams"
        title="What ships under the Medical Communications block."
        bg="var(--bg-2)"
      >
        <DeliverablesGrid items={capabilities} theme="navy" />
      </SolutionSection>

      <SolutionSection
        id="workflow" eyebrow="Bilingual workflow"
        title="Two reviewer tracks. One reconciled artifact."
        kicker="The artifact you ship is a single bilingual deliverable. The work behind it is two parallel reviewer tracks that meet in the middle."
        bg="#fff"
      >
        <div style={{
          background: 'var(--brand-primary-900)', color: '#fff',
          borderRadius: 16, padding: 32,
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0 }}>
            {[
              { n: '01', t: 'Source intake',    d: 'Brief, source data, prior artifacts. AI extracts claims, sources, terminology.' },
              { n: '02', t: 'EN draft',         d: 'Section-level draft in regulator-grade English. Citation slots filled.' },
              { n: '03', t: 'CN draft',         d: 'Parallel CN draft — not a translation. Native CN terminology, source trail attached.' },
              { n: '04', t: 'Dual-physician QC', d: 'A US-licensed clinician reviews EN; a CN-licensed clinician reviews CN. Both sign.' },
              { n: '05', t: 'Reconciliation',   d: 'Discrepancies surfaced and resolved. Final artifact ships with both signatures and the source trail.' },
            ].map((s, i, arr) => (
              <div key={s.n} style={{
                padding: '4px 18px',
                borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: i === 3 ? 'var(--brand-accent-500)' : 'rgba(0,174,219,0.15)',
                  color: i === 3 ? 'var(--brand-primary-900)' : 'var(--brand-accent-500)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, marginBottom: 14,
                }}>{s.n}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: i === 3 ? 'var(--brand-accent-500)' : 'rgba(255,255,255,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>
                  {i === 3 ? 'Human gate ×2' : 'AI-assisted'}
                </div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: 15.5, fontWeight: 600, color: '#fff', marginBottom: 8, letterSpacing: '-0.005em' }}>{s.t}</div>
                <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        id="compliance" eyebrow="Compliance · pre-physician filtering"
        title="Four codes our QC layer maps against."
        kicker="Before a physician reviews, the artifact has already been scanned for off-label, fair-balance, disclosure and code-of-practice issues — saving the clinician's time for medical judgment."
        bg="var(--bg-2)"
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { code: 'PhRMA',  region: 'United States', d: 'Code on Interactions with Health Care Professionals. Promotional vs. medical separation.' },
            { code: 'EFPIA',  region: 'European Union', d: 'Code of Practice. Disclosure, fair-balance and HCP transfer-of-value rules.' },
            { code: 'RDPAC',  region: 'Mainland China', d: 'R&D-based Pharmaceutical Association Committee Code. China-specific HCP engagement rules.' },
            { code: 'IFPMA',  region: 'Global',        d: 'International code overlay where multiple jurisdictions intersect on a single artifact.' },
          ].map(c => (
            <div key={c.code} style={{
              background: '#fff', border: '1px solid var(--border-1)', borderRadius: 12, padding: 22,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--brand-accent-700)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10, fontWeight: 600 }}>{c.region}</div>
              <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: 20, fontWeight: 700, color: 'var(--brand-primary-700)', margin: '0 0 10px', letterSpacing: '-0.005em' }}>{c.code}</h4>
              <p style={{ fontSize: 12.5, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0 }}>{c.d}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection
        id="proof" eyebrow="Proof · 2025"
        title="Bilingual artifacts shipped, audited, signed."
        bg="#fff"
      >
        <SolutionStatStrip stats={[
          { n: '38',   l: 'Bilingual artifacts produced (single program)', note: 'Top-10 medtech, 12 wks' },
          { n: '96',   u: '%', l: 'First-pass QC sign-off, 2025', note: 'platform audit' },
          { n: '11',   l: 'Manuscripts in draft, 2025 cohort', note: 'peer-reviewed' },
          { n: '0',    l: 'Code-of-practice findings, 2025', note: 'compliance audit' },
        ]} theme="navy" />
      </SolutionSection>

      <ContentReviewCrossSell />
      <SolutionCTA pageMeta={MED_COMMS_META} />
      <RelatedSolutions current="medical-communications" />
      <SolutionFooter />
    </div>
  );
}
window.PageMedicalCommunications = PageMedicalCommunications;
