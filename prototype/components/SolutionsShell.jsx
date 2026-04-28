/* SolutionsShell.jsx — shared chrome for /solutions/* pages */

function SolutionPageHeader({ pageMeta }) {
  const { eyebrow, title, sub, breadcrumb, theme = 'navy', meta } = pageMeta;
  const isCyan = theme === 'cyan';
  return (
    <section style={{
      background: 'var(--grad-hero)', color: '#fff',
      position: 'relative', overflow: 'hidden',
      padding: '56px 40px 80px',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
    }}>
      {/* faint dot grid */}
      <SolutionDotGrid theme={theme} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        {/* Breadcrumb */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32,
          fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '0.04em',
          color: 'rgba(255,255,255,0.5)',
        }}>
          {breadcrumb.map((b, i) => (
            <React.Fragment key={i}>
              <a href={b.href} style={{
                color: i === breadcrumb.length - 1 ? 'var(--brand-accent-500)' : 'rgba(255,255,255,0.55)',
                textDecoration: 'none',
              }}>{b.label}</a>
              {i < breadcrumb.length - 1 && <span style={{ opacity: 0.4 }}>/</span>}
            </React.Fragment>
          ))}
        </div>

        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'end' }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '4px 12px', borderRadius: 4,
              background: isCyan ? 'rgba(0,174,219,0.16)' : 'rgba(127,184,227,0.18)',
              color: isCyan ? 'var(--brand-accent-500)' : 'var(--brand-primary-300)',
              fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
              marginBottom: 24,
              border: `1px solid ${isCyan ? 'rgba(0,174,219,0.3)' : 'rgba(127,184,227,0.3)'}`,
            }}>
              <span style={{
                display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
                background: isCyan ? 'var(--brand-accent-500)' : 'var(--brand-primary-300)',
              }}></span>
              {eyebrow}
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 500,
              lineHeight: 1.08, letterSpacing: '-0.014em',
              margin: 0, color: '#fff', textWrap: 'balance', maxWidth: 720,
            }}>{title}</h1>
            <p style={{
              fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)',
              marginTop: 22, marginBottom: 0, maxWidth: 600, fontWeight: 400,
            }}>{sub}</p>
          </div>

          {/* Meta panel */}
          {meta && (
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 12, padding: 6, backdropFilter: 'blur(8px)',
            }}>
              <div style={{
                padding: '14px 18px 10px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}>
                <span style={{
                  fontSize: 10.5, fontWeight: 600, letterSpacing: '0.16em',
                  color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase',
                }}>At a glance</span>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10.5,
                  color: 'rgba(255,255,255,0.4)',
                }}>v2026.04</span>
              </div>
              <div>
                {meta.map((m, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '110px 1fr', gap: 14,
                    padding: '12px 18px',
                    borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.05)',
                    alignItems: 'baseline',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: 10.5,
                      color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}>{m.k}</span>
                    <span style={{
                      fontSize: 13.5, color: '#fff',
                      lineHeight: 1.45, fontWeight: 500, letterSpacing: '0.005em',
                    }}>{m.v}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function SolutionDotGrid({ theme }) {
  const dots = [];
  for (let r = 0; r < 14; r++) {
    for (let c = 0; c < 24; c++) {
      const x = c * 36 + 12;
      const y = r * 36 + 12;
      const op = Math.max(0.04, 0.16 - Math.abs(c - 16) * 0.008 - r * 0.004);
      dots.push(<circle key={`${r}-${c}`} cx={x} cy={y} r={1.5} fill={theme === 'cyan' ? '#00AEDB' : '#7FB8E3'} opacity={op} />);
    }
  }
  return (
    <div style={{
      position: 'absolute', right: -40, top: 0, bottom: 0, width: 720,
      pointerEvents: 'none', opacity: 0.7,
    }}>
      <svg viewBox="0 0 880 520" width="100%" height="100%" preserveAspectRatio="xMaxYMid slice">{dots}</svg>
    </div>
  );
}

// Sub-nav anchored rail (sticky)
function SolutionSubNav({ items, theme = 'navy' }) {
  const [active, setActive] = React.useState(items[0]?.id);
  React.useEffect(() => {
    const handler = () => {
      const offset = 180;
      let cur = items[0]?.id;
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (el && el.getBoundingClientRect().top < offset) cur = it.id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return (
    <div style={{
      position: 'sticky', top: 80, zIndex: 30,
      background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border-1)',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 40px',
        display: 'flex', alignItems: 'center', gap: 4, overflowX: 'auto',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 10.5,
          color: 'var(--fg-3)', letterSpacing: '0.12em',
          textTransform: 'uppercase', marginRight: 18, paddingRight: 18,
          borderRight: '1px solid var(--border-1)', whiteSpace: 'nowrap',
        }}>On this page</span>
        {items.map(it => (
          <a key={it.id} href={`#${it.id}`}
             style={{
               padding: '14px 14px',
               fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 500,
               color: active === it.id
                 ? (theme === 'cyan' ? 'var(--brand-accent-700)' : 'var(--brand-primary-700)')
                 : 'var(--fg-2)',
               textDecoration: 'none',
               borderBottom: `2px solid ${active === it.id
                 ? (theme === 'cyan' ? 'var(--brand-accent-500)' : 'var(--brand-primary-700)')
                 : 'transparent'}`,
               whiteSpace: 'nowrap', transition: 'all 150ms',
             }}>
            {it.label}
          </a>
        ))}
      </div>
    </div>
  );
}

// Section component with eyebrow, title, kicker
function SolutionSection({ id, eyebrow, title, kicker, children, bg = '#fff', screen, label }) {
  return (
    <section id={id} data-screen-label={label} style={{ padding: '88px 40px', background: bg }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {(eyebrow || title) && (
          <div style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            marginBottom: 48, flexWrap: 'wrap', gap: 24,
          }}>
            <div style={{ maxWidth: 720 }}>
              {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
              {title && <h2 style={{
                fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 600,
                color: 'var(--brand-primary-700)', margin: 0,
                letterSpacing: '-0.012em', lineHeight: 1.15, textWrap: 'balance',
              }}>{title}</h2>}
            </div>
            {kicker && (
              <p style={{
                maxWidth: 360, fontSize: 15, color: 'var(--fg-2)',
                lineHeight: 1.6, margin: 0,
              }}>{kicker}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

// Reusable: numbered milestone phase row
function PhaseTimeline({ phases, theme = 'navy' }) {
  const isCyan = theme === 'cyan';
  return (
    <div style={{
      background: '#fff', border: '1px solid var(--border-1)',
      borderRadius: 16, overflow: 'hidden',
    }}>
      <div style={{
        padding: '14px 24px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid var(--border-1)',
        background: 'var(--bg-2)',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          color: isCyan ? 'var(--brand-accent-700)' : 'var(--brand-primary-700)',
          letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600,
        }}>Engagement timeline · {phases.length} phases</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)' }}>
          {phases.map(p => p.weeks).join(' → ')}
        </span>
      </div>
      <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${phases.length}, 1fr)` }}>
        {phases.map((p, i) => (
          <div key={i} style={{
            padding: 28,
            borderLeft: i === 0 ? 'none' : '1px solid var(--border-1)',
            position: 'relative',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14,
            }}>
              <span style={{
                width: 28, height: 28, borderRadius: '50%',
                background: isCyan ? 'var(--brand-accent-100)' : 'var(--brand-primary-100)',
                color: isCyan ? 'var(--brand-accent-700)' : 'var(--brand-primary-700)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700,
              }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 10.5,
                color: 'var(--fg-3)', letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>Wk {p.weeks}</span>
            </div>
            <h4 style={{
              fontFamily: 'var(--font-ui)', fontSize: 16.5, fontWeight: 600,
              color: 'var(--brand-primary-700)', margin: '0 0 10px',
              letterSpacing: '-0.005em',
            }}>{p.title}</h4>
            <p style={{
              fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0,
            }}>{p.body}</p>
            {p.deliverable && (
              <div style={{
                marginTop: 14, paddingTop: 12, borderTop: '1px dashed var(--border-1)',
                fontSize: 12, color: isCyan ? 'var(--brand-accent-700)' : 'var(--brand-primary-500)',
                fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <i data-lucide="package" width="13" height="13"></i>
                {p.deliverable}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Reusable: deliverables matrix (2-col grid of capability cards)
function DeliverablesGrid({ items, theme = 'navy' }) {
  const isCyan = theme === 'cyan';
  return (
    <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
      {items.map((it, i) => (
        <div key={i} style={{
          background: '#fff', border: '1px solid var(--border-1)',
          borderRadius: 12, padding: 28,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
            <div style={{
              width: 42, height: 42, borderRadius: 10,
              background: isCyan ? 'var(--brand-accent-100)' : 'var(--brand-primary-100)',
              color: isCyan ? 'var(--brand-accent-700)' : 'var(--brand-primary-700)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <i data-lucide={it.icon} width="20" height="20"></i>
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10.5,
                color: 'var(--fg-3)', letterSpacing: '0.12em',
                textTransform: 'uppercase', marginBottom: 2,
              }}>Deliverable {String(i + 1).padStart(2, '0')}</div>
              <h4 style={{
                fontFamily: 'var(--font-ui)', fontSize: 17.5, fontWeight: 600,
                color: 'var(--brand-primary-700)', margin: 0, letterSpacing: '-0.005em',
              }}>{it.title}</h4>
            </div>
          </div>
          <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6, margin: '0 0 16px' }}>{it.body}</p>
          {it.bullets && (
            <div className="two-col-grid" style={{
              paddingTop: 14, borderTop: '1px dashed var(--border-1)',
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px',
            }}>
              {it.bullets.map((b, j) => (
                <div key={j} style={{
                  display: 'flex', alignItems: 'start', gap: 8,
                  fontSize: 12.5, color: 'var(--fg-1)',
                }}>
                  <span style={{
                    color: isCyan ? 'var(--brand-accent-700)' : 'var(--brand-primary-500)',
                    flexShrink: 0, marginTop: 1,
                  }}>
                    <i data-lucide="check" width="13" height="13"></i>
                  </span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Reusable: stat strip
function SolutionStatStrip({ stats, theme = 'navy' }) {
  const isCyan = theme === 'cyan';
  return (
    <div className="two-col-grid" style={{
      display: 'grid', gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
      border: '1px solid var(--border-1)', borderRadius: 16,
      overflow: 'hidden', background: '#fff',
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{
          padding: '28px 32px',
          borderLeft: i === 0 ? 'none' : '1px solid var(--border-1)',
        }}>
          <div style={{
            fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 38, fontWeight: 600,
            color: 'var(--brand-primary-700)', letterSpacing: '-0.02em', lineHeight: 1.05,
          }}>
            {s.n}{s.u && <span style={{
              fontSize: 15, color: isCyan ? 'var(--brand-accent-700)' : 'var(--brand-primary-500)',
              marginLeft: 4, fontWeight: 500,
            }}>{s.u}</span>}
          </div>
          <div style={{
            fontSize: 13, color: 'var(--fg-2)', marginTop: 10,
            lineHeight: 1.4, maxWidth: 220,
          }}>{s.l}</div>
          {s.note && <div style={{
            fontSize: 10.5, color: 'var(--fg-3)', marginTop: 8,
            fontFamily: 'var(--font-mono)', letterSpacing: '0.04em',
          }}>{s.note}</div>}
        </div>
      ))}
    </div>
  );
}

// Reusable: Solution-level final CTA (lighter than homepage final CTA)
function SolutionCTA({ pageMeta }) {
  const { ctaTitle, ctaBody, primaryCta, secondaryCta, theme = 'navy' } = pageMeta;
  return (
    <section style={{
      padding: '88px 40px', background: 'var(--grad-hero)',
      color: '#fff', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <SectionEyebrow color="var(--brand-accent-500)">Next step</SectionEyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 600,
              color: '#fff', margin: 0, letterSpacing: '-0.012em', lineHeight: 1.15,
            }}>{ctaTitle}</h2>
            <p style={{
              fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.75)',
              marginTop: 18, marginBottom: 0, maxWidth: 560,
            }}>{ctaBody}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Button variant="primary-light" style={{ background: '#fff', color: 'var(--brand-primary-700)', justifyContent: 'center' }}>
              {primaryCta || 'Book a scoping call'}
            </Button>
            <Button variant="outline-light" style={{ justifyContent: 'center' }}>
              {secondaryCta || 'See related case studies'}
            </Button>
            <div style={{
              marginTop: 8, fontSize: 12, color: 'rgba(255,255,255,0.55)',
              display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center',
            }}>
              <i data-lucide="shield-check" width="13" height="13" style={{ color: 'var(--brand-accent-500)' }}></i>
              NDA-ready · Reply within 2 business days
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Cross-link strip (other solutions)
function RelatedSolutions({ current }) {
  const all = [
    { id: 'entering-china', label: 'Entering China', tag: 'Path · Strategy', theme: 'navy', href: 'entering-china.html', icon: 'log-in' },
    { id: 'going-global-us', label: 'Going Global (US)', tag: 'Path · Strategy', theme: 'cyan', href: 'going-global-us.html', icon: 'plane-takeoff' },
    { id: 'medical-evidence', label: 'Medical Evidence', tag: 'Business Block', theme: 'navy', href: 'medical-evidence.html', icon: 'file-search' },
    { id: 'physician-engagement', label: 'Physician Engagement', tag: 'Business Block', theme: 'navy', href: 'physician-engagement.html', icon: 'stethoscope' },
    { id: 'medical-communications', label: 'Medical Communications', tag: 'Business Block', theme: 'navy', href: 'medical-communications.html', icon: 'book-open-text' },
    { id: 'cross-border-medical-content-sprint', label: 'Cross-Border Content Sprint', tag: 'Quick Start · 2 wks', theme: 'cyan', href: 'cross-border-medical-content-sprint.html', icon: 'zap' },
  ].filter(s => s.id !== current);

  return (
    <section style={{ padding: '72px 40px', background: '#fff', borderTop: '1px solid var(--border-1)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 32 }}>
          <div>
            <SectionEyebrow color="var(--fg-3)">Related solutions</SectionEyebrow>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600,
              color: 'var(--brand-primary-700)', margin: 0, letterSpacing: '-0.008em',
            }}>Continue exploring our solutions library.</h3>
          </div>
          <a href="../Homepage.html" style={{
            color: 'var(--brand-primary-500)', fontWeight: 600, fontSize: 13.5,
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>
            ← Back to homepage
          </a>
        </div>
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
          {all.map(s => <RelatedCard key={s.id} s={s} />)}
        </div>
      </div>
    </section>
  );
}

function RelatedCard({ s }) {
  const [hover, setHover] = React.useState(false);
  const isCyan = s.theme === 'cyan';
  return (
    <a href={s.href}
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
         background: '#fff', border: `1px solid ${hover ? (isCyan ? 'var(--brand-accent-500)' : 'var(--brand-primary-300)') : 'var(--border-1)'}`,
         borderRadius: 10, padding: 20, textDecoration: 'none', color: 'inherit',
         transition: 'all 200ms', display: 'block',
         boxShadow: hover ? 'var(--shadow-sm)' : 'none',
       }}>
      <div style={{
        width: 36, height: 36, borderRadius: 8,
        background: isCyan ? 'var(--brand-accent-100)' : 'var(--brand-primary-100)',
        color: isCyan ? 'var(--brand-accent-700)' : 'var(--brand-primary-700)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 14,
      }}>
        <i data-lucide={s.icon} width="18" height="18"></i>
      </div>
      <div style={{
        fontSize: 9.5, fontWeight: 600, letterSpacing: '0.12em',
        color: 'var(--fg-3)', textTransform: 'uppercase', marginBottom: 4,
      }}>{s.tag}</div>
      <div style={{
        fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 600,
        color: 'var(--brand-primary-700)', letterSpacing: '-0.003em', lineHeight: 1.3,
      }}>{s.label}</div>
      <div style={{
        marginTop: 14, fontSize: 12, color: isCyan ? 'var(--brand-accent-700)' : 'var(--brand-primary-500)',
        fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4,
      }}>
        Open <span style={{ transform: hover ? 'translateX(3px)' : 'none', transition: 'transform 200ms' }}>→</span>
      </div>
    </a>
  );
}

window.SolutionPageHeader = SolutionPageHeader;
window.SolutionSubNav = SolutionSubNav;
window.SolutionSection = SolutionSection;
window.PhaseTimeline = PhaseTimeline;
window.DeliverablesGrid = DeliverablesGrid;
window.SolutionStatStrip = SolutionStatStrip;
window.SolutionCTA = SolutionCTA;
window.RelatedSolutions = RelatedSolutions;
