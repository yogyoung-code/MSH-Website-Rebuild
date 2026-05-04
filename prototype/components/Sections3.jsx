/* Sections3.jsx — AI, Trust, Insights, Final CTA, Footer */

// 7. AI-Enabled Delivery
//    UXcritique20260429 distill: was a long dark band with an inline 4-step
//    pipeline + 3-up capability cards + 2 buttons. That duplicated the
//    full PitlRibbon now living on /ai-platform. Distilled to a tight
//    intro: eyebrow + 2-line headline + 1 primary CTA. The dark band
//    (grad-hero gradient via brand-primary-900) stays — it's brand-spec.
function AISection() {
  return (
    <section id="ai" style={{
      padding: 'clamp(72px, 9vw, 128px) clamp(24px, 6vw, 96px)',
      background: 'var(--brand-primary-900)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle radial spotlight — kept restrained */}
      <div aria-hidden="true" style={{
        position: 'absolute', left: '50%', top: -200, width: 800, height: 800, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,174,219,0.10) 0%, transparent 60%)',
        transform: 'translateX(-50%)', pointerEvents: 'none',
      }}></div>

      <div style={{
        maxWidth: 960, margin: '0 auto', position: 'relative',
        textAlign: 'left',
      }}>
        <SectionEyebrow color="var(--brand-accent-500)">AI-Enabled Platform · /ai-platform</SectionEyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 4.4vw, 52px)',
          fontWeight: 600,
          color: '#fff',
          margin: '0 0 20px',
          letterSpacing: '-0.012em',
          lineHeight: 1.15,
          maxWidth: 760,
        }}>
          AI lane on top. Physician lane on the bottom.
          <br />
          <span style={{ color: 'var(--brand-accent-500)' }}>Every handoff is signed.</span>
        </h2>
        <p style={{
          fontSize: 17,
          color: 'rgba(255,255,255,0.72)',
          lineHeight: 1.6,
          margin: '0 0 36px',
          maxWidth: 640,
        }}>
          AI accelerates retrieval and drafting; named physicians gate every release. Every deliverable
          ships with a traceable source log. We don't claim zero-hallucination — we claim structured,
          auditable, and reviewed.
        </p>
        <Button variant="accent" href="/ai-platform.html">See the full PITL workflow</Button>
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
    <section id="trust" style={{ padding: '72px clamp(16px, 4vw, 40px)', background: '#fff', borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <SectionEyebrow color="var(--fg-3)">Trust · verified proof points</SectionEyebrow>
          <EvidenceBadge kind="verified" size="sm">Verified · signed source</EvidenceBadge>
        </div>
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--border-1)', borderRadius: 16, overflow: 'hidden' }}>
          {stats.map((s, i) => (
            <div key={s.l} style={{
              padding: '28px 32px',
              borderLeft: i === 0 ? 'none' : '1px solid var(--border-1)',
              background: '#fff',
            }}>
              <div style={{
                /* Spec §3.4: all numbers in Inter. */
                fontFamily: 'var(--font-ui)', fontSize: 40, fontWeight: 600,
                color: 'var(--brand-primary-700)', letterSpacing: '-0.025em', lineHeight: 1.05,
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

// 9. Insights — clean 3-up grid (UXcritique20260429 polish-2)
//    Reverted from AsymmetricFeatureGrid (over-fit InsightCard's equal-width
//    design). Differentiation from Cases section now via background:
//    Cases = bg-2 gray, Insights = bg-1 white. Two adjacent 3-ups read as
//    different surfaces because the surrounding chrome differs.
function Insights() {
  const posts = [
    { topic: 'China RWE',             date: 'Apr 2026', title: 'What NMPA reviewers actually read first: a teardown of 40 oncology dossiers.',         reviewer: 'Dr. L. Chen',  min:  8 },
    { topic: 'FDA Evidence Bridge',   date: 'Mar 2026', title: 'Bridging a China registry into an FDA submission — what translates and what does not.', reviewer: 'Dr. J. Patel', min: 11 },
    { topic: 'Medical Communication', date: 'Mar 2026', title: 'Bilingual congress materials that pass compliance on both sides of the Pacific.',     reviewer: 'Dr. M. Zhao',  min:  6 },
  ];
  return (
    <section id="insights" style={{
      padding: 'clamp(72px, 9vw, 96px) clamp(24px, 6vw, 40px)',
      background: 'var(--bg-1)'
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          marginBottom: 48, flexWrap: 'wrap', gap: 24
        }}>
          <div style={{ maxWidth: 680 }}>
            <SectionEyebrow>Insights · PITL-reviewed</SectionEyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.6vw, 40px)', fontWeight: 600,
              color: 'var(--brand-primary-700)', margin: 0,
              letterSpacing: '-0.012em', lineHeight: 1.15,
            }}>
              Written by our operators. Reviewed by our physicians.
            </h2>
          </div>
          <a href="/insights/" style={{
            color: 'var(--brand-primary-500)', fontWeight: 600, fontSize: 14,
            fontFamily: 'var(--font-ui)'
          }}>All insights →</a>
        </div>
        <div className="two-col-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20
        }}>
          {posts.map((p, i) => <InsightCard key={i} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function InsightCard({ p }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={p.href || '/insights/'}
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
         background: '#fff', border: `1px solid ${hover ? 'var(--brand-primary-300)' : 'var(--border-1)'}`,
         borderRadius: 12, padding: 28, textDecoration: 'none', color: 'inherit',
         boxShadow: hover ? 'var(--shadow-sm)' : 'none',
         transition: 'all 200ms', display: 'block',
       }}>
      {/* UXcritique image-add pass 2 reverted: Insights cards keep pure-text
          treatment per design lead. CardPreviewStrip kept for Cases only. */}
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
    <section id="cta" style={{ padding: '96px clamp(16px, 4vw, 40px)', background: 'var(--grad-hero)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
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

window.AISection = AISection;
window.TrustBar = TrustBar;
window.Insights = Insights;
window.FinalCTA = FinalCTA;
