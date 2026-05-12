/* Hero.jsx — Dual-column Hero per IA §4.1 */
function Hero() {
  return (
    <section id="top" style={{
      background: 'var(--grad-hero)', color: '#fff',
      position: 'relative', overflow: 'hidden',
      padding: '72px clamp(16px, 4vw, 40px) 88px',
    }}>
      <DotSpiralBg />
      <div className="two-col-grid" style={{
        maxWidth: 1280, margin: '0 auto', position: 'relative',
        display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 72, alignItems: 'start',
      }}>
        {/* LEFT */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '5px 12px', borderRadius: 4,
            background: 'rgba(0,174,219,0.14)', color: 'var(--brand-accent-500)',
            fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
            marginBottom: 28, border: '1px solid rgba(0,174,219,0.3)',
          }}>
            <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--brand-accent-500)' }}></span>
            MedSci Healthcare · 2415.HK
          </div>
          <h1 style={{
                        fontFamily: 'var(--font-display)', fontSize: 62, fontWeight: 600,
            lineHeight: 1.08, letterSpacing: '-0.012em',
            margin: 0, color: '#fff', textWrap: 'balance',
          }}>
            Medical evidence and physician engagement, across the U.S. and China.
          </h1>
          <p style={{
            fontFamily: 'var(--font-ui)', fontSize: 17, fontWeight: 500,
            color: 'var(--brand-accent-500)',
            marginTop: 24, marginBottom: 0, letterSpacing: '0.005em',
          }}>
            AI-Enabled. Physician-Verified. Globally Ready.
          </p>
          <p style={{
            fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)',
            marginTop: 16, maxWidth: 540, fontWeight: 400,
          }}>
            Your team gets an evidence package every regulator, reviewer and reimbursement committee can read in under ten minutes — assembled by AI, signed by physicians.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
            <Button variant="primary-light" style={{ background: '#fff', color: 'var(--brand-primary-700)' }} href="/solutions/entering-china.html">Enter China</Button>
            <Button variant="outline-light" href="/solutions/going-global-us.html">Go Global</Button>
            <Button variant="ghost" style={{ color: 'rgba(255,255,255,0.85)' }} icon={true} href="/contact.html">Talk to an Expert</Button>
          </div>
        </div>

        {/* RIGHT — WHAT WE DELIVER card */}
        <div className="hero-right-services" style={{ marginTop: 60 }}>
          <WhatWeDeliverCard />
        </div>
      </div>
    </section>
  );
}

function WhatWeDeliverCard() {
  const items = [
    { num: '01', label: 'EVIDENCE',       title: 'Medical Evidence',       deliverables: 'RWE · Registry · Literature · HEOR', href: '/solutions/medical-evidence.html' },
    { num: '02', label: 'PHYSICIANS',     title: 'Physician Engagement',   deliverables: '3.33M+ network · Advisory · KOL · CME', href: '/solutions/physician-engagement.html' },
    { num: '03', label: 'COMMUNICATIONS', title: 'Medical Communications', deliverables: 'Publications · Congress · Localization', href: '/solutions/medical-communications.html' },
    { num: '04', label: 'PLATFORM',       title: 'AI-Enabled Platform',    deliverables: 'AI Drafts · PITL · QC · Source trails', href: '/ai-platform.html', accent: true },
    { num: '05', label: 'QUICK START',    title: 'Content Review & Localization', deliverables: 'Compliance review · Medical rewrite · 3–5 days', href: '/solutions/content-review.html', isNew: true },
  ];
  const [hoverIdx, setHoverIdx] = React.useState(null);
  return (
    <div style={{
            background: 'var(--brand-primary-900)',
      border: '1px solid rgba(255,255,255,0.16)',
      borderRadius: 16,
      padding: 6,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 22px 14px',
      }}>
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase' }}>
          What we deliver
        </span>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '3px 9px', borderRadius: 4,
          background: 'rgba(0,174,219,0.18)', color: 'var(--brand-accent-500)',
          fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
        }}>
          5 Blocks
        </span>
      </div>
      <div>
        {items.map((it, i) => (
          <React.Fragment key={it.num}>
            {it.isNew && (
              <div style={{ margin: '0 22px', borderTop: '1px solid rgba(0,174,219,0.25)' }}></div>
            )}
            <a href={it.href}
               onMouseEnter={() => setHoverIdx(i)} onMouseLeave={() => setHoverIdx(null)}
               style={{
                 display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 12,
                 padding: it.isNew ? '14px 22px 18px' : '16px 22px',
                 borderTop: it.isNew ? 'none' : (i === 0 ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.06)'),
                 borderRadius: it.isNew ? '0 0 12px 12px' : 0,
                 textDecoration: 'none',
                 transition: 'all 200ms',
                 background: it.isNew
                   ? (hoverIdx === i ? 'rgba(0,174,219,0.12)' : 'rgba(0,174,219,0.05)')
                   : (hoverIdx === i ? 'rgba(0,174,219,0.06)' : 'transparent'),
                 transform: hoverIdx === i ? 'translateX(4px)' : 'none',
               }}>
              <div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 500,
                  color: it.accent ? 'var(--brand-accent-500)' : it.isNew ? 'var(--brand-accent-500)' : 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.1em', marginBottom: 6,
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <span>{it.isNew ? '↗' : it.num} · {it.label}</span>
                  {it.isNew && <span style={{
                    padding: '1px 6px', borderRadius: 3, fontSize: 9, fontWeight: 700,
                    background: 'rgba(0,174,219,0.22)', color: 'var(--brand-accent-500)',
                    letterSpacing: '0.08em',
                  }}>NEW</span>}
                </div>
                <div style={{
                  fontFamily: 'var(--font-ui)', fontSize: it.isNew ? 16 : 17, fontWeight: 600,
                  color: hoverIdx === i ? 'var(--brand-accent-500)' : '#fff',
                  letterSpacing: '-0.005em', marginBottom: 4,
                }}>
                  {it.title}
                </div>
                <div style={{ fontSize: 12.5, color: it.isNew ? 'rgba(0,174,219,0.7)' : 'rgba(255,255,255,0.6)', letterSpacing: '0.01em' }}>
                  {it.deliverables}
                </div>
              </div>
              <div style={{
                fontSize: 16, color: hoverIdx === i ? 'var(--brand-accent-500)' : it.isNew ? 'var(--brand-accent-500)' : 'rgba(255,255,255,0.4)',
                transform: hoverIdx === i ? 'translateX(4px)' : 'none', transition: 'all 200ms',
              }}>→</div>
            </a>
          </React.Fragment>
        ))}
      </div>
      {}
    </div>
  );
}

function DotSpiralBg() {
  const dots = [];
  const cx = 360, cy = 300;
  for (let i = 0; i < 90; i++) {
    const angle = i * 0.52;
    const radius = 20 + i * 3.4;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    const size = 2 + (i % 4) * 0.8;
    dots.push(<circle key={i} cx={x} cy={y} r={size} fill="#00AEDB" opacity={Math.max(0.08, 0.35 - i * 0.003)} />);
  }
  return (
    <div style={{
      position: 'absolute', right: -140, top: -80, width: 720, height: 720,
      opacity: 0.6, pointerEvents: 'none',
    }}>
      <svg viewBox="0 0 720 720" width="100%" height="100%">{dots}</svg>
    </div>
  );
}

window.Hero = Hero;
