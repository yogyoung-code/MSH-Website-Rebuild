/* Sections3.jsx — AI, Trust, Insights, Final CTA, Footer */

// 7. AI-Enabled Delivery (detailed)
function AISection() {
  const steps = [
    { n: '01', t: 'Ingestion', d: 'Literature, registries, regulatory guidance and prior submissions — sourced, tagged, and indexed for retrieval.' },
    { n: '02', t: 'Gap Analysis', d: 'AI drafts a structured gap matrix across evidence, regulatory and reimbursement axes — flags contradictions.' },
    { n: '03', t: 'PITL Review', d: 'Named physicians review, edit and sign off. Every change is logged. No sign-off, no ship.' },
    { n: '04', t: 'Deliverable', d: 'An audit-ready package — dossier, deck or publication draft — with an attached source trail.' },
  ];
  const caps = [
    { t: 'Faster Evidence Review', d: 'AI-structured synthesis across 10k+ sources in a week, not a quarter — retrieval, not generation, at the core.' },
    { t: 'AI-Assisted Scientific Drafting', d: 'Section-level drafts with citation slots. Physicians edit and approve; the model never writes the final.' },
    { t: 'AI-Enhanced Content Production', d: 'Bilingual QC, terminology consistency, and compliance-aware review — pre-filtered before the physician sees it.' },
  ];
  return (
    <section id="ai" style={{ padding: '104px 40px', background: 'var(--brand-primary-900)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', left: '50%', top: -200, width: 800, height: 800, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,174,219,0.12) 0%, transparent 60%)', transform: 'translateX(-50%)', pointerEvents: 'none',
      }}></div>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start', marginBottom: 64 }}>
          <div>
            <SectionEyebrow color="var(--brand-accent-500)">AI-Enabled Platform · /ai-platform</SectionEyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 600,
              color: '#fff', margin: 0, letterSpacing: '-0.012em', lineHeight: 1.15,
            }}>
              Faster, more structured, medically reviewed delivery.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 16.5, color: 'rgba(255,255,255,0.78)', lineHeight: 1.65, margin: '0 0 16px' }}>
              Our platform pairs retrieval-based AI with a physician-in-the-loop (PITL) workflow. AI accelerates synthesis and drafting; doctors gate release. Every deliverable ships with a traceable source log.
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
              We do not claim zero-hallucination, 100% accuracy, or an AI doctor. We claim structured, auditable, and reviewed.
            </p>
          </div>
        </div>

        {/* PITL flow diagram */}
        <div style={{
          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 20, padding: 32, marginBottom: 48,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', color: 'var(--brand-accent-500)', textTransform: 'uppercase' }}>
              AI + PITL pipeline · 4 steps
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>
              ingestion → gap → PITL → deliverable
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {steps.map((s, i) => (
              <div key={s.n} style={{
                padding: '20px 24px',
                borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.08)',
                position: 'relative',
              }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--brand-accent-500)',
                  marginBottom: 10, letterSpacing: '0.08em',
                }}>
                  <span style={{
                    width: 24, height: 24, borderRadius: '50%',
                    background: i === 2 ? 'var(--brand-accent-500)' : 'rgba(0,174,219,0.18)',
                    color: i === 2 ? 'var(--brand-primary-900)' : 'var(--brand-accent-500)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: 11,
                  }}>{s.n}</span>
                  {i === 2 ? 'HUMAN GATE' : 'AI-ASSISTED'}
                </div>
                <div style={{ fontSize: 17, fontWeight: 600, color: '#fff', marginBottom: 8, letterSpacing: '-0.005em' }}>{s.t}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.62)', lineHeight: 1.55 }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 capabilities */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 40 }}>
          {caps.map((c, i) => (
            <div key={c.t} style={{
              padding: 28, borderRadius: 12,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--brand-accent-500)',
                letterSpacing: '0.1em', marginBottom: 12,
              }}>
                CAPABILITY 0{i + 1}
              </div>
              <h3 style={{ fontFamily: 'var(--font-ui)', fontSize: 18, fontWeight: 600, color: '#fff', margin: '0 0 10px', letterSpacing: '-0.005em' }}>
                {c.t}
              </h3>
              <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, margin: 0 }}>{c.d}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="accent">Explore the AI Platform</Button>
          <Button variant="outline-light">See a source trail</Button>
        </div>
      </div>
    </section>
  );
}

// 8. Trust / Proof Bar
function TrustBar() {
  const stats = [
    { n: '3.33M+', l: 'Physicians in network', yr: '2025', s: '1' },
    { n: '128', l: 'Submissions audited', yr: 'Q4 2025', s: '2' },
    { n: '96%', l: 'Physician sign-off, first submission', yr: '2025', s: '1' },
    { n: '42 → 18', l: 'Median regulatory response (days)', yr: '2025', s: '3' },
  ];
  return (
    <section id="trust" style={{ padding: '72px 40px', background: '#fff', borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <SectionEyebrow color="var(--fg-3)">Trust · verified proof points</SectionEyebrow>
          <EvidenceBadge kind="verified" size="sm">Verified · signed source</EvidenceBadge>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--border-1)', borderRadius: 16, overflow: 'hidden' }}>
          {stats.map((s, i) => (
            <div key={s.l} style={{
              padding: '28px 32px',
              borderLeft: i === 0 ? 'none' : '1px solid var(--border-1)',
              background: '#fff',
            }}>
              <div style={{
                fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 40, fontWeight: 600,
                color: 'var(--brand-primary-700)', letterSpacing: '-0.02em', lineHeight: 1.05,
              }}>
                {s.n}
                <sup style={{ fontSize: 11, color: 'var(--brand-primary-500)', marginLeft: 4, fontWeight: 500 }}>{s.s}</sup>
              </div>
              <div style={{ fontSize: 13, color: 'var(--fg-2)', marginTop: 10, lineHeight: 1.4, maxWidth: 220 }}>
                {s.l}
              </div>
              <div style={{ fontSize: 10.5, color: 'var(--fg-3)', marginTop: 8, fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                {s.yr}
              </div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 11, color: 'var(--fg-3)', marginTop: 16, lineHeight: 1.5 }}>
          ¹ Internal MedSci Healthcare network audit, 2025. ² Platform submission log, Q4 2025. ³ Aggregated across engagements, 2025.
        </div>
      </div>
    </section>
  );
}

// 9. Insights
function Insights() {
  const posts = [
    { topic: 'China RWE', date: 'Apr 2026', title: 'What NMPA reviewers actually read first: a teardown of 40 oncology dossiers.', reviewer: 'Dr. L. Chen', min: 8 },
    { topic: 'FDA Evidence Bridge', date: 'Mar 2026', title: 'Bridging a China registry into an FDA submission — what translates and what does not.', reviewer: 'Dr. J. Patel', min: 11 },
    { topic: 'Medical Communication', date: 'Mar 2026', title: 'Bilingual congress materials that pass compliance on both sides of the Pacific.', reviewer: 'Dr. M. Zhao', min: 6 },
  ];
  return (
    <section id="insights" style={{ padding: '96px 40px', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}>
          <div style={{ maxWidth: 680 }}>
            <SectionEyebrow>Insights · PITL-reviewed</SectionEyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 600,
              color: 'var(--brand-primary-700)', margin: 0, letterSpacing: '-0.012em', lineHeight: 1.15,
            }}>
              Written by our operators. Reviewed by our physicians.
            </h2>
          </div>
          <a href="/insights" style={{ color: 'var(--brand-primary-500)', fontWeight: 600, fontSize: 14 }}>All insights →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {posts.map((p, i) => <InsightCard key={i} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function InsightCard({ p }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="#"
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
         background: '#fff', border: `1px solid ${hover ? 'var(--brand-primary-300)' : 'var(--border-1)'}`,
         borderRadius: 12, padding: 28, textDecoration: 'none', color: 'inherit',
         boxShadow: hover ? 'var(--shadow-sm)' : 'none',
         transition: 'all 200ms', display: 'block',
       }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
        <span style={{
          fontSize: 10, fontWeight: 600, letterSpacing: '0.12em',
          color: 'var(--brand-accent-700)', textTransform: 'uppercase',
          padding: '3px 8px', borderRadius: 4, background: 'var(--brand-accent-100)',
        }}>{p.topic}</span>
        <span style={{ fontSize: 11, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)' }}>{p.date}</span>
      </div>
      <h3 style={{
        fontFamily: 'var(--font-ui)', fontSize: 18, fontWeight: 600,
        color: 'var(--brand-primary-700)', margin: '0 0 20px', letterSpacing: '-0.005em', lineHeight: 1.35,
        minHeight: 72, textWrap: 'balance',
      }}>{p.title}</h3>
      <div style={{
        paddingTop: 16, borderTop: '1px dashed var(--border-1)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontSize: 12, color: 'var(--fg-3)',
      }}>
        <span>PITL reviewer · {p.reviewer}</span>
        <span>{p.min} min read</span>
      </div>
    </a>
  );
}

// 10. Final CTA
function FinalCTA() {
  return (
    <section id="cta" style={{ padding: '96px 40px', background: 'var(--grad-hero)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', position: 'relative', textAlign: 'center' }}>
        <SectionEyebrow color="var(--brand-accent-500)">Talk to an expert</SectionEyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 52, fontWeight: 600,
          color: '#fff', margin: 0, letterSpacing: '-0.015em', lineHeight: 1.1,
        }}>
          Bring us one evidence question. We'll scope the pilot.
        </h2>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: '24px auto 0', maxWidth: 640 }}>
          Thirty-minute intro call with a physician-trained program lead. No deck, no NDA to start — just your hardest cross-border evidence question.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary-light" style={{ background: '#fff', color: 'var(--brand-primary-700)' }}>Book a pilot</Button>
          <Button variant="outline-light">Talk to an expert</Button>
        </div>
        <div style={{ marginTop: 40, display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap', fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <i data-lucide="shield-check" width="14" height="14" style={{ color: 'var(--brand-accent-500)' }}></i>
            NDA-ready
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <i data-lucide="clock" width="14" height="14" style={{ color: 'var(--brand-accent-500)' }}></i>
            Reply within 2 business days
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <i data-lucide="globe" width="14" height="14" style={{ color: 'var(--brand-accent-500)' }}></i>
            EN / 中文
          </span>
        </div>
      </div>
    </section>
  );
}

// Footer per IA §3
function Footer() {
  const cols = [
    { title: 'Solutions', items: ['Entering China', 'Going Global (US)', 'Medical Evidence', 'Physician Engagement', 'Medical Communications'] },
    { title: 'Pilots', items: ['30-Day China Sprint', '30-Day FDA Diagnostic', 'Cross-Border Sprint'] },
    { title: 'Resources', items: ['Case Studies', 'AI Platform', 'Insights', 'About MedSci', 'Contact', 'Other services *'] },
    { title: 'Legal & IR', items: ['Terms of Use', 'Privacy Policy', 'Disclosures', 'Investor Relations ↗'] },
  ];
  return (
    <footer style={{ background: 'var(--brand-primary-900)', color: 'rgba(255,255,255,0.7)', padding: '72px 40px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1fr', gap: 40, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <img src="assets/logo/medsci-healthcare-logo.svg" alt="MedSci Healthcare — Improving Healthcare Quality"
                 style={{ height: 38, filter: 'brightness(0) invert(1)', opacity: 0.95 }} />
            <p style={{ fontFamily: 'var(--font-slogan)', fontStyle: 'italic', fontSize: 14, color: 'rgba(255,255,255,0.5)', marginTop: 16, marginBottom: 20 }}>
              Improving Healthcare Quality
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, marginBottom: 16, maxWidth: 320 }}>
              AI-enabled medical review and a physician network helping US ↔ China healthcare innovators land cross-border evidence, communication and market-readiness.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>
              <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--brand-accent-500)' }}></span>
              MedSci Healthcare · 2415.HK
            </div>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#fff', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18 }}>
                {c.title}
              </div>
              {c.items.map(i => (
                <a key={i} href="#" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 10, textDecoration: 'none' }}>
                  {i}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 24, fontSize: 11, color: 'rgba(255,255,255,0.45)', flexWrap: 'wrap', gap: 12 }}>
          <span>© 2026 MedSci Healthcare (2415.HK). All rights reserved.</span>
          <span style={{ fontFamily: 'var(--font-mono)' }}>* rel="nofollow" — secondary services, not on sitemap.</span>
          <span style={{ display: 'inline-flex', gap: 18 }}>
            <a href="#" style={{ color: 'inherit' }}>LinkedIn</a>
            <a href="#" style={{ color: 'inherit' }}>HKEX ↗</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

window.AISection = AISection;
window.TrustBar = TrustBar;
window.Insights = Insights;
window.FinalCTA = FinalCTA;
window.Footer = Footer;
