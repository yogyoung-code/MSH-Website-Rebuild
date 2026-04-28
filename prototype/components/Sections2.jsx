/* Sections2.jsx — Services, Why, Cases */

// 4. Services · What We Deliver (4 cards)
function Services() {
  const services = [
    {
      num: '01', label: 'Evidence',
      title: 'Medical Evidence',
      desc: 'Structured real-world evidence, registry analysis, literature synthesis and HEOR — every claim carries a year, a source and a signature.',
      deliverables: ['Real-world evidence (RWE)', 'Registry design & analysis', 'Systematic literature review', 'HEOR modeling'],
      icon: 'file-search',
      href: 'solutions/medical-evidence.html',
      badge: 'verified',
    },
    {
      num: '02', label: 'Physicians',
      title: 'Physician Engagement',
      desc: 'A 3.33M+ physician network — for advisory boards, KOL mapping, CME, and consented reviewer panels that put a named clinician on record.',
      deliverables: ['Advisory boards · single & standing', 'KOL mapping & engagement', 'CME-accredited programs', 'Consented reviewer panels'],
      icon: 'stethoscope',
      href: 'solutions/physician-engagement.html',
      badge: 'verified',
    },
    {
      num: '03', label: 'Communications',
      title: 'Medical Communications',
      desc: 'Publications, congress materials, localized content and compliance-aware review — bilingual artifacts signed off by physicians in both markets.',
      deliverables: ['Peer-reviewed publications', 'Congress posters & symposia', 'Bilingual localization', 'Compliance-aware QC'],
      icon: 'book-open-text',
      href: 'solutions/medical-communications.html',
      badge: 'verified',
    },
    {
      num: '04', label: 'Platform',
      title: 'AI-Enabled Platform',
      desc: 'The pipeline underneath — AI drafts with retrieval, a physician-in-the-loop workflow, and audit-ready source trails.',
      deliverables: ['See the full AI Platform page →'],
      icon: 'cpu',
      href: '#ai',
      accent: true,
      compact: true,
    },
  ];
  return (
    <section id="services" style={{ padding: '96px 40px', background: 'var(--grad-wash)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}>
          <div style={{ maxWidth: 680 }}>
            <SectionEyebrow>Services · What we deliver</SectionEyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 600,
              color: 'var(--brand-primary-700)', margin: 0, letterSpacing: '-0.012em', lineHeight: 1.15,
            }}>
              Four business blocks. One standard of evidence.
            </h2>
          </div>
          <p style={{ maxWidth: 340, fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>
            Three delivery lines plus the AI platform they all run on. Mix and match by path — Entering China or Going Global.
          </p>
        </div>
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {services.map(s => <ServiceCard key={s.num} s={s} />)}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ s }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={s.href}
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
         background: s.accent ? 'var(--brand-primary-900)' : '#fff',
         border: `1px solid ${hover ? (s.accent ? 'var(--brand-accent-500)' : 'var(--brand-primary-300)') : (s.accent ? 'var(--brand-primary-700)' : 'var(--border-1)')}`,
         borderRadius: 12, padding: 32,
         transition: 'all 200ms',
         boxShadow: hover ? 'var(--shadow-sm)' : 'none',
         textDecoration: 'none', display: 'block',
         color: s.accent ? '#fff' : 'inherit',
         position: 'relative', overflow: 'hidden',
       }}>
      {s.accent && (
        <div style={{
          position: 'absolute', right: -80, top: -80, width: 240, height: 240,
          borderRadius: '50%', background: 'var(--brand-accent-500)', opacity: 0.08,
          pointerEvents: 'none',
        }}></div>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20, position: 'relative' }}>
        <div style={{
          width: 44, height: 44, borderRadius: 10,
          background: s.accent ? 'rgba(0,174,219,0.16)' : 'var(--brand-primary-100)',
          color: s.accent ? 'var(--brand-accent-500)' : 'var(--brand-primary-700)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <i data-lucide={s.icon} width="22" height="22"></i>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
            color: s.accent ? 'var(--brand-accent-500)' : 'var(--fg-3)',
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            {s.num} · {s.label}
          </div>
          <h3 style={{
            fontFamily: 'var(--font-ui)', fontSize: 22, fontWeight: 600,
            color: s.accent ? '#fff' : 'var(--brand-primary-700)', margin: '4px 0 0', letterSpacing: '-0.005em',
          }}>{s.title}</h3>
        </div>
      </div>
      <p style={{
        fontSize: 14.5, color: s.accent ? 'rgba(255,255,255,0.75)' : 'var(--fg-2)',
        lineHeight: 1.6, margin: '0 0 20px', position: 'relative',
      }}>{s.desc}</p>
      <div style={{ borderTop: `1px dashed ${s.accent ? 'rgba(255,255,255,0.15)' : 'var(--border-1)'}`, paddingTop: 16, position: 'relative' }}>
        {s.compact ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--brand-accent-500)', fontWeight: 600, fontSize: 13.5 }}>
            {s.deliverables[0]}
          </div>
        ) : (
          <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px' }}>
            {s.deliverables.map(d => (
              <div key={d} style={{ display: 'flex', alignItems: 'start', gap: 8, fontSize: 13, color: 'var(--fg-1)' }}>
                <span style={{ color: 'var(--brand-accent-700)', flexShrink: 0, marginTop: 2 }}>
                  <i data-lucide="dot" width="14" height="14"></i>
                </span>
                <span>{d}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {!s.compact && (
        <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <EvidenceBadge kind={s.badge} size="sm" />
          <span style={{ color: 'var(--brand-primary-500)', fontSize: 13, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            Explore block <span style={{ transform: hover ? 'translateX(4px)' : 'none', transition: 'transform 200ms' }}>→</span>
          </span>
        </div>
      )}
    </a>
  );
}

// 5. Why MedSci (three pillars)
function WhyMedSci() {
  const pillars = [
    {
      num: '①', title: 'Physician in the loop, on every artifact',
      body: 'Nothing ships without a named clinician sign-off. AI speeds the draft; doctors gate the release. Your audit trail captures who reviewed what, when, and on what source.',
      icon: 'user-check',
    },
    {
      num: '②', title: 'Evidence with a source, every claim',
      body: 'Every number carries a year and a citation. Every case study carries a signature. We use a three-tier evidence system — Verified, In Development, On Request — so you always know what you can quote.',
      icon: 'badge-check',
    },
    {
      num: '③', title: 'Cross-border by construction',
      body: 'We do not retrofit a US deliverable for a China submission, or the reverse. Bilingual review, local reviewer panels, and dual-market compliance are in the pipeline from day one.',
      icon: 'arrow-right-left',
    },
  ];
  return (
    <section id="why" style={{ padding: '96px 40px', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <SectionEyebrow>Why MedSci Healthcare</SectionEyebrow>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 600,
            color: 'var(--brand-primary-700)', margin: '0 auto 16px', letterSpacing: '-0.012em', lineHeight: 1.15,
            maxWidth: 860,
          }}>
            Medical-grade, not tech-hyped.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.6, maxWidth: 660, margin: '0 auto' }}>
            AI-enabled, physician-verified. Four promises, not marketing claims.
          </p>
        </div>
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {pillars.map((p, i) => (
            <div key={p.title} style={{
              background: '#fff', border: '1px solid var(--border-1)', borderRadius: 12,
              padding: '36px 32px', position: 'relative',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 24, right: 24, height: 3,
                background: 'var(--brand-accent-500)', borderRadius: '0 0 3px 3px',
                opacity: 0.85,
              }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 40, height: 40, borderRadius: 10,
                  background: 'var(--brand-primary-100)', color: 'var(--brand-primary-700)',
                  flexShrink: 0,
                }}>
                  <i data-lucide={p.icon} width="20" height="20"></i>
                </div>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600,
                  color: 'var(--fg-3)', letterSpacing: '0.14em', textTransform: 'uppercase',
                }}>Pillar 0{i + 1}</span>
              </div>
              <h3 style={{
                fontFamily: 'var(--font-ui)', fontSize: 20, fontWeight: 600,
                color: 'var(--brand-primary-700)', margin: '0 0 14px',
                letterSpacing: '-0.005em', lineHeight: 1.3,
              }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.65, margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 6. Selected Case Studies (3 cards)
function Cases() {
  const cases = [
    {
      cat: 'Entering China',
      theme: 'navy',
      title: 'A US oncology device, reviewed and submitted to NMPA in 11 weeks.',
      metrics: [
        { n: '11', u: 'wks', l: 'Submission cycle' },
        { n: '5',  u: '',    l: 'Physician reviewers on record' },
        { n: '0',  u: '',    l: 'RFIs on first submission' },
      ],
      badge: 'verified',
      year: '2025-09',
    },
    {
      cat: 'Entering China',
      theme: 'navy',
      title: 'Localized content program for a global Top-10 medtech, across three therapeutic areas.',
      metrics: [
        { n: '38', u: '',    l: 'Bilingual artifacts produced' },
        { n: '12', u: 'wks', l: 'Program duration' },
        { n: '96', u: '%',   l: 'First-pass QC sign-off' },
      ],
      badge: 'verified',
      year: '2025-11',
    },
    {
      cat: 'Going Global',
      theme: 'cyan',
      title: 'A China oncology innovator, FDA-track evidence bridge and advisory panel.',
      metrics: [
        { n: '42 → 18', u: 'days', l: 'Median response time' },
        { n: '7',  u: '', l: 'US KOL advisors engaged' },
        { n: '3',  u: '', l: 'Publications in draft' },
      ],
      badge: 'development',
      year: 'In progress',
    },
  ];
  return (
    <section id="cases" style={{ padding: '96px 40px', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}>
          <div style={{ maxWidth: 680 }}>
            <SectionEyebrow>Selected case studies</SectionEyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 600,
              color: 'var(--brand-primary-700)', margin: 0, letterSpacing: '-0.012em', lineHeight: 1.15,
            }}>
              Three signed engagements. Three signed source trails.
            </h2>
          </div>
          <a href="/case-studies" style={{
            color: 'var(--brand-primary-500)', fontWeight: 600, fontSize: 14,
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>
            See all case studies <span>→</span>
          </a>
        </div>
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {cases.map((c, i) => <CaseCard key={i} c={c} />)}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ c }) {
  const [hover, setHover] = React.useState(false);
  const isNavy = c.theme === 'navy';
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
         style={{
           background: '#fff', border: `1px solid ${hover ? 'var(--brand-primary-300)' : 'var(--border-1)'}`,
           borderRadius: 12, padding: 28, cursor: 'pointer',
           boxShadow: hover ? 'var(--shadow-sm)' : 'none',
           transition: 'all 200ms',
           display: 'flex', flexDirection: 'column',
         }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
        <span style={{
          fontSize: 10, fontWeight: 600, letterSpacing: '0.12em',
          color: isNavy ? 'var(--brand-primary-700)' : 'var(--brand-accent-700)',
          textTransform: 'uppercase',
          padding: '3px 8px', borderRadius: 4,
          background: isNavy ? 'var(--brand-primary-100)' : 'var(--brand-accent-100)',
        }}>
          {c.cat}
        </span>
        <EvidenceBadge kind={c.badge} size="sm" />
      </div>
      <h3 style={{
        fontFamily: 'var(--font-ui)', fontSize: 19, fontWeight: 600,
        color: 'var(--brand-primary-700)', margin: '0 0 24px', letterSpacing: '-0.005em',
        lineHeight: 1.35, minHeight: 76, textWrap: 'balance',
      }}>{c.title}</h3>
      <div className="stat-strip-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10,
        paddingTop: 20, borderTop: '1px dashed var(--border-1)', marginTop: 'auto',
      }}>
        {c.metrics.map((m, i) => (
          <div key={i}>
            <div style={{
              fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 24, fontWeight: 600,
              color: 'var(--brand-primary-700)', letterSpacing: '-0.015em', lineHeight: 1.1,
              whiteSpace: 'nowrap',
            }}>
              {m.n}{m.u && <span style={{ fontSize: 13, color: 'var(--brand-accent-700)', marginLeft: 3, fontWeight: 500 }}>{m.u}</span>}
            </div>
            <div style={{ fontSize: 11, color: 'var(--fg-2)', marginTop: 6, lineHeight: 1.35 }}>{m.l}</div>
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontSize: 12, color: 'var(--fg-3)',
      }}>
        <span style={{ fontFamily: 'var(--font-mono)' }}>Signed · {c.year}</span>
        <span style={{ color: 'var(--brand-primary-500)', fontWeight: 600, fontSize: 13 }}>
          Read case <span style={{ transform: hover ? 'translateX(4px)' : 'none', transition: 'transform 200ms', display: 'inline-block' }}>→</span>
        </span>
      </div>
    </div>
  );
}

window.Services = Services;
window.WhyMedSci = WhyMedSci;
window.Cases = Cases;
