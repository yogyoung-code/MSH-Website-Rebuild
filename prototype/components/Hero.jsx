/* Hero.jsx — Dual-column Hero per IA §4.1 */
function Hero() {
  return (
    <section id="top" style={{
      background: 'var(--grad-hero)', color: '#fff',
      position: 'relative', overflow: 'hidden',
      padding: '72px 40px 88px',
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
            fontFamily: 'var(--font-display)', fontSize: 62, fontWeight: 500,
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
            <Button variant="primary-light" style={{ background: '#fff', color: 'var(--brand-primary-700)' }}>Enter China</Button>
            <Button variant="outline-light">Go Global</Button>
            <Button variant="ghost" style={{ color: 'rgba(255,255,255,0.85)' }} icon={true}>Talk to an Expert</Button>
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
    { num: '01', label: 'EVIDENCE',       title: 'Medical Evidence',       deliverables: 'RWE · Registry · Literature · HEOR', href: '#services' },
    { num: '02', label: 'PHYSICIANS',     title: 'Physician Engagement',   deliverables: '3.33M+ network · Advisory · KOL · CME', href: '#services' },
    { num: '03', label: 'COMMUNICATIONS', title: 'Medical Communications', deliverables: 'Publications · Congress · Localization', href: '#services' },
    { num: '04', label: 'PLATFORM',       title: 'AI-Enabled Platform',    deliverables: 'AI Drafts · PITL · QC · Source trails', href: '#ai', accent: true },
  ];
  const [hoverIdx, setHoverIdx] = React.useState(null);
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.14)',
      borderRadius: 16,
      padding: 6,
      backdropFilter: 'blur(8px)',
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
          4 Blocks
        </span>
      </div>
      <div>
        {items.map((it, i) => (
          <a key={it.num} href={it.href}
             onMouseEnter={() => setHoverIdx(i)} onMouseLeave={() => setHoverIdx(null)}
             style={{
               display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 12,
               padding: '16px 22px',
               borderTop: i === 0 ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.06)',
               textDecoration: 'none',
               transition: 'all 200ms',
               background: hoverIdx === i ? 'rgba(0,174,219,0.06)' : 'transparent',
               transform: hoverIdx === i ? 'translateX(4px)' : 'none',
             }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 500,
                color: it.accent ? 'var(--brand-accent-500)' : 'rgba(255,255,255,0.5)',
                letterSpacing: '0.1em', marginBottom: 6,
              }}>
                {it.num} · {it.label}
              </div>
              <div style={{
                fontFamily: 'var(--font-ui)', fontSize: 17, fontWeight: 600,
                color: hoverIdx === i ? 'var(--brand-accent-500)' : '#fff',
                letterSpacing: '-0.005em', marginBottom: 4,
              }}>
                {it.title}
              </div>
              <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.01em' }}>
                {it.deliverables}
              </div>
            </div>
            <div style={{
              fontSize: 16, color: hoverIdx === i ? 'var(--brand-accent-500)' : 'rgba(255,255,255,0.4)',
              transform: hoverIdx === i ? 'translateX(4px)' : 'none', transition: 'all 200ms',
            }}>→</div>
          </a>
        ))}
      </div>
      {/* Stat strip */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        borderTop: '1px solid rgba(255,255,255,0.14)',
        background: 'rgba(0,16,55,0.35)',
        borderRadius: '0 0 12px 12px',
      }}>
        {[
          { v: '3.33M+', l: 'Physician network', n: '1' },
          { v: 'AI + PITL', l: 'Physician-in-the-loop', n: null },
          { v: '2415.HK', l: 'HKEX listed', n: null },
        ].map((s, i) => (
          <div key={s.v} style={{
            padding: '16px 18px',
            borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.08)',
          }}>
            <div style={{
              fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 20, fontWeight: 600,
              color: '#fff', letterSpacing: '-0.01em',
            }}>
              {s.v}
              {s.n && <sup style={{ fontSize: 9, color: 'var(--brand-accent-500)', marginLeft: 3, fontWeight: 500 }}>{s.n}</sup>}
            </div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginTop: 3, letterSpacing: '0.02em' }}>
              {s.l}
            </div>
          </div>
        ))}
      </div>
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
