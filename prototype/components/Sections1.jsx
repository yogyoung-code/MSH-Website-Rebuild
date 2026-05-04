/* Sections.jsx — All body sections per IA §4.1 */

// 2. Quick Start Offers (3 cards)
function QuickStart() {
  const offers = [
    {
      tag: '30-Day Pilot',
      title: 'China Evidence Sprint',
      desc: 'A bounded 30-day engagement to pressure-test your evidence package against NMPA expectations.',
      included: ['NMPA-aligned gap scan', '5-physician advisory panel', 'Localized summary deck'],
      price: '⚑ Pricing on request',
      cta: 'Book the pilot',
      variant: 'primary',
      accent: false,
    },
    {
      tag: '30-Day Pilot',
      title: 'FDA Evidence Gap Diagnostic',
      desc: 'Diagnose US-submission gaps in your current dossier before you commit to a full Going-Global program.',
      included: ['FDA guidance cross-walk', 'Literature + registry audit', 'Prioritized gap report'],
      price: '⚑ Pricing on request',
      cta: 'Book the pilot',
      variant: 'primary-light',
      accent: true,
    },
    {
      tag: 'Quick Entry',
      title: 'Cross-Border Content Sprint',
      desc: 'One medically reviewed, bilingual artifact in two weeks. The lowest-commitment way to work with us.',
      included: ['1 artifact, EN + CN', 'Physician QC sign-off', 'Source trail attached'],
      price: '⚑ Flat fee — on request',
      cta: 'Start a sprint',
      variant: 'outline',
      accent: false,
    },
  ];
  return (
    <section id="pilots" style={{ padding: '96px clamp(16px, 4vw, 40px)', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}>
          <div style={{ maxWidth: 680 }}>
            <SectionEyebrow color="var(--brand-primary-500)">Quick start · three funnel doors</SectionEyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 600,
              color: 'var(--brand-primary-700)', margin: 0, letterSpacing: '-0.012em', lineHeight: 1.15,
            }}>
              Start small. Scope first, commit later.
            </h2>
          </div>
          <p style={{ maxWidth: 360, fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>
            Three bounded entry points — a China pilot, an FDA diagnostic, or a content sprint. Each one is scoped so your team can evaluate us before a full engagement.
          </p>
        </div>
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {offers.map((o, i) => <OfferCard key={o.title} o={o} idx={i} />)}
        </div>
      </div>
    </section>
  );
}

function OfferCard({ o, idx }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
         style={{
           background: '#fff',
           border: `1px solid ${hover ? 'var(--brand-primary-300)' : 'var(--border-1)'}`,
           borderRadius: 12, padding: 28,
           transition: 'all 200ms',
           boxShadow: hover ? 'var(--shadow-sm)' : 'none',
           position: 'relative', display: 'flex', flexDirection: 'column',
         }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
        <span style={{
          padding: '3px 9px', borderRadius: 4,
          background: o.accent ? 'var(--brand-accent-100)' : 'var(--brand-primary-100)',
          color: o.accent ? 'var(--brand-accent-700)' : 'var(--brand-primary-700)',
          fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
        }}>{o.tag}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', marginLeft: 'auto' }}>
          0{idx + 1}
        </span>
      </div>
      <h3 style={{
        fontFamily: 'var(--font-ui)', fontSize: 22, fontWeight: 600,
        color: 'var(--brand-primary-700)', margin: '0 0 12px', letterSpacing: '-0.005em',
      }}>{o.title}</h3>
      <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6, margin: '0 0 20px' }}>{o.desc}</p>
      <div style={{ borderTop: '1px dashed var(--border-1)', paddingTop: 16, marginBottom: 20 }}>
        <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', color: 'var(--fg-3)', textTransform: 'uppercase', marginBottom: 10 }}>Included</div>
        {o.included.map(it => (
          <div key={it} style={{ display: 'flex', alignItems: 'start', gap: 8, fontSize: 13, color: 'var(--fg-1)', marginBottom: 6 }}>
            <span style={{ color: 'var(--brand-accent-700)', lineHeight: 1.5, flexShrink: 0 }}>
              <i data-lucide="check" width="14" height="14"></i>
            </span>
            <span>{it}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 'auto' }}>
        <div style={{ fontSize: 12, color: 'var(--fg-3)', marginBottom: 14, fontFamily: 'var(--font-mono)' }}>{o.price}</div>
        <Button variant={o.variant}>{o.cta}</Button>
      </div>
    </div>
  );
}

// 3. Two Primary Paths
function TwoPaths() {
  const paths = [
    {
      dir: 'Entering China',
      sub: 'For non-Chinese innovators landing inside mainland China',
      body: 'NMPA pathway strategy, physician advisory, localized content and HEOR — a single thread from literature to submission to reimbursement committee.',
      bullets: ['NMPA / CDE dossier support', 'Physician advisory panels', 'Reimbursement evidence', 'Localized bilingual content'],
      cta: 'Explore Entering China',
      theme: 'navy',
    },
    {
      dir: 'Going Global (US)',
      sub: 'For Chinese innovators preparing US / global launch',
      body: 'FDA-track evidence, IRB-ready protocols, US KOL engagement and publications — a path built for regulators and reviewers who do not read Chinese.',
      bullets: ['FDA guidance cross-walk', 'IRB-ready protocol support', 'US KOL & advisory', 'Publication & congress'],
      cta: 'Explore Going Global',
      theme: 'cyan',
    },
  ];
  return (
    <section id="paths" style={{ padding: '96px clamp(16px, 4vw, 40px)', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <SectionEyebrow>Two strategic paths · equal weight</SectionEyebrow>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 600,
            color: 'var(--brand-primary-700)', margin: '0 auto', letterSpacing: '-0.012em', lineHeight: 1.15,
            maxWidth: 760,
          }}>
            One firm. Two directions. No house favorite.
          </h2>
        </div>
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {paths.map(p => <PathCard key={p.dir} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function PathCard({ p }) {
  const [hover, setHover] = React.useState(false);
  const isNavy = p.theme === 'navy';
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
         style={{
           background: '#fff',
           border: '1px solid var(--border-1)',
           borderRadius: 20, padding: 40, position: 'relative', overflow: 'hidden',
           transition: 'all 200ms',
           boxShadow: hover ? 'var(--shadow-md)' : 'none',
           borderColor: hover ? (isNavy ? 'var(--brand-primary-700)' : 'var(--brand-accent-500)') : 'var(--border-1)',
         }}>
      {/* Header bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 4,
        background: isNavy ? 'var(--brand-primary-700)' : 'var(--grad-accent)',
      }}></div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 10,
          background: isNavy ? 'var(--brand-primary-100)' : 'var(--brand-accent-100)',
          color: isNavy ? 'var(--brand-primary-700)' : 'var(--brand-accent-700)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <i data-lucide={isNavy ? 'log-in' : 'plane-takeoff'} width="22" height="22"></i>
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', color: 'var(--fg-3)', textTransform: 'uppercase' }}>
            {isNavy ? 'Path 01' : 'Path 02'}
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600,
            color: 'var(--brand-primary-700)', margin: 0, letterSpacing: '-0.008em',
          }}>{p.dir}</h3>
        </div>
      </div>
      <p style={{ fontSize: 13, fontWeight: 500, color: isNavy ? 'var(--brand-primary-700)' : 'var(--brand-accent-700)', margin: '0 0 16px', letterSpacing: '0.01em' }}>
        {p.sub}
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--fg-2)', margin: '0 0 24px' }}>{p.body}</p>
      <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', marginBottom: 28, paddingTop: 20, borderTop: '1px dashed var(--border-1)' }}>
        {p.bullets.map(b => (
          <div key={b} style={{ display: 'flex', alignItems: 'start', gap: 8, fontSize: 13, color: 'var(--fg-1)' }}>
            <span style={{ color: isNavy ? 'var(--brand-primary-500)' : 'var(--brand-accent-700)', flexShrink: 0, marginTop: 2 }}>
              <i data-lucide="chevron-right" width="14" height="14"></i>
            </span>
            {b}
          </div>
        ))}
      </div>
      <Button variant={isNavy ? 'primary' : 'primary-light'}>{p.cta}</Button>
    </div>
  );
}

window.QuickStart = QuickStart;
window.TwoPaths = TwoPaths;
