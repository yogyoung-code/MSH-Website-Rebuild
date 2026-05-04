/* =========================================================
   AIProductSpec.jsx — /ai-platform v4 · engineering-spec product block
   ---------------------------------------------------------
   Replaces the v3 AIProductShowcase chat-UI demo. Reads as an
   API contract / product spec sheet, not a chat playground:
     · Product header (number · role · name · positioning)
     · Capabilities short list
     · Input → Output contract row (with real example pulled
       from product.showcase.demoScenario)
     · Citation strip (audit-trail badges)
     · Status pill + single CTA

   Brand alignment:
     · Inter for all numbers + spec data
     · Source Serif (display) for product name + section H3 only
     · No glassmorphism, no gradients on cells, no animation
     · Single-hue blue + cyan accent only (brand v1.1)
     · borders: 1px var(--border-1); no shadows on static cards
   ========================================================= */

function AIProductSpec({ products, eyebrow, title, lede }) {
  if (!Array.isArray(products) || products.length === 0) {
    return (
      <section style={{ padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--fg-2)', margin: 0 }}>
          Products under quiet development.
        </p>
        <a href="/contact.html?intent=ai_dd" style={{
          display: 'inline-block', marginTop: 16,
          color: 'var(--brand-primary-500)', fontFamily: 'var(--font-ui)',
          fontSize: 14, fontWeight: 600, textDecoration: 'underline'
        }}>Schedule a Reverse-DD session →</a>
      </section>
    );
  }
  return (
    <section style={{
      padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px)',
      background: 'var(--bg-1)',
      borderTop: '1px solid var(--border-1)',
      borderBottom: '1px solid var(--border-1)',
    }}>
      <div style={{ maxWidth: 'var(--container-max, 1280px)', margin: '0 auto' }}>
        {(eyebrow || title || lede) && (
          <div style={{ marginBottom: 'clamp(32px, 4vw, 56px)', maxWidth: 720 }}>
            {eyebrow && (
              <div style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 12, letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--brand-accent-700)',
                fontWeight: 700, marginBottom: 12,
              }}>{eyebrow}</div>
            )}
            {title && (
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 3.4vw, 40px)',
                fontWeight: 600,
                color: 'var(--brand-primary-700)',
                lineHeight: 1.2,
                margin: '0 0 12px',
                letterSpacing: '-0.01em',
              }}>{title}</h2>
            )}
            {lede && (
              <p style={{
                fontSize: 17, color: 'var(--fg-2)',
                lineHeight: 1.6, margin: 0, maxWidth: 640,
              }}>{lede}</p>
            )}
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px, 3vw, 40px)' }}>
          {products.map((p, i) => (
            <ProductSpecBlock key={p.slug} product={p} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductSpecBlock({ product, index }) {
  const accent = product.accentColor === 'cyan' ? 'cyan' : 'navy';
  const accentVar = accent === 'cyan' ? 'var(--brand-accent-500)' : 'var(--brand-primary-500)';
  const accentVarDark = accent === 'cyan' ? 'var(--brand-accent-700)' : 'var(--brand-primary-700)';

  // Pull demo content from product.showcase.demoScenario
  const scenario = (product.showcase && product.showcase.demoScenario) || [];
  const userMsg = scenario.find(s => s._type === 'userMessage');
  const aiResp  = scenario.find(s => s._type === 'aiResponse');
  const dataTbl = scenario.find(s => s._type === 'dataTable');
  const citations = (aiResp && aiResp.citations) || [];

  const num = String(index).padStart(2, '0');
  const role = (product.userRole && product.userRole.en) || '';
  const name = (product.name && product.name.en) || product.slug;
  const positioning = (product.positioningOneLiner && product.positioningOneLiner.en) || '';
  const caps = product.capabilitiesShort || [];

  return (
    <article style={{
      background: 'var(--bg-1)',
      border: '1px solid var(--border-1)',
      borderRadius: 'var(--radius-lg, 12px)',
      padding: 'clamp(24px, 3vw, 40px)',
      borderLeft: `3px solid ${accentVar}`,
    }}>
      {/* Header */}
      <header style={{ marginBottom: 'clamp(20px, 2.4vw, 28px)' }}>
        <div style={{
          fontFamily: 'var(--font-mono, var(--font-ui))',
          fontSize: 11, letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--fg-3)',
          fontWeight: 600, marginBottom: 8,
        }}>
          PRODUCT {num} · <span style={{ color: accentVarDark }}>{role}</span>
        </div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(26px, 3vw, 36px)',
          fontWeight: 600,
          color: 'var(--brand-primary-700)',
          margin: '0 0 10px',
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
        }}>{name}</h3>
        {positioning && (
          <p style={{
            fontSize: 17, color: 'var(--fg-2)',
            lineHeight: 1.55, margin: 0, maxWidth: 720,
          }}>{positioning}</p>
        )}
      </header>

      {/* Capabilities */}
      {caps.length > 0 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 12,
          marginBottom: 'clamp(20px, 2.4vw, 28px)',
          paddingTop: 16,
          borderTop: '1px solid var(--border-1)',
        }}>
          {caps.map((c, i) => (
            <div key={i} style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 14, color: 'var(--fg-1)', lineHeight: 1.5,
              display: 'flex', gap: 10, alignItems: 'flex-start',
            }}>
              <span aria-hidden="true" style={{
                display: 'inline-block', width: 6, height: 6, marginTop: 8,
                borderRadius: '50%', background: accentVar, flexShrink: 0,
              }} />
              <span>{(c && c.en) || c}</span>
            </div>
          ))}
        </div>
      )}

      {/* Input → Output contract — rendered only if there's a demo. For
          inDevelopment products without a scenario, skip the IO grid entirely
          (avoids two empty "— no demo provided —" cells reading as broken). */}
      {(userMsg || aiResp || dataTbl) && (
        <div className="aips4-io" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 12,
          marginBottom: citations.length ? 'clamp(20px, 2.4vw, 28px)' : 0,
        }}>
          <SpecCell role="input" label="Input · what you ask">
            {userMsg ? (
              <p style={{ margin: 0, fontFamily: 'var(--font-mono, var(--font-ui))', fontSize: 13.5, lineHeight: 1.55, color: 'var(--fg-1)' }}>
                {userMsg.body}
              </p>
            ) : <Empty />}
          </SpecCell>

          <SpecCell role="output" label="Output · what ships" accentVar={accentVar}>
            {aiResp ? <AIResponseSummary aiResp={aiResp} accentVar={accentVar} /> :
             dataTbl ? <DataTablePreview dataTbl={dataTbl} accentVar={accentVar} /> :
             <Empty />}
          </SpecCell>
        </div>
      )}

      {/* For products without a demo (e.g., DeepInsight inDevelopment), show
          a single forward-looking note in lieu of the IO contract. */}
      {!(userMsg || aiResp || dataTbl) && product.status === 'inDevelopment' && (
        <div style={{
          background: 'var(--bg-2, var(--neutral-50))',
          border: '1px dashed var(--border-2)',
          borderRadius: 'var(--radius-md, 6px)',
          padding: 'clamp(16px, 1.8vw, 20px)',
          marginBottom: 'clamp(20px, 2.4vw, 28px)',
        }}>
          <div style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 11, letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--fg-3)', fontWeight: 700, marginBottom: 8,
          }}>Roadmap · in development</div>
          <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: 'var(--fg-2)' }}>
            Live input/output contract publishes when the first design partner ships. Industrial customers shaping the spec — physician engagement signal, market and competitive monitoring, therapeutic-area opportunity scoring — can request the design-partner brief.
          </p>
        </div>
      )}

      {/* Citations strip */}
      {citations.length > 0 && (
        <div style={{
          paddingTop: 16,
          borderTop: '1px solid var(--border-1)',
          marginBottom: 'clamp(20px, 2.4vw, 28px)',
        }}>
          <div style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 11, letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--fg-3)', fontWeight: 600,
            marginBottom: 10,
          }}>Anchored to</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {citations.map((c, i) => (
              <span key={i} style={{
                display: 'inline-flex', alignItems: 'baseline', gap: 6,
                padding: '5px 10px',
                background: 'var(--bg-2, var(--neutral-50))',
                border: '1px solid var(--border-1)',
                borderRadius: 'var(--radius-sm, 4px)',
                fontFamily: 'var(--font-mono, var(--font-ui))',
                fontSize: 12, color: 'var(--fg-1)',
              }}>
                <span style={{
                  fontSize: 10, letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: accentVarDark, fontWeight: 700,
                }}>{c.type || 'Source'}</span>
                <span>{c.label || ''}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Footer: status + CTA */}
      <footer style={{
        display: 'flex', flexWrap: 'wrap', gap: 16,
        alignItems: 'center', justifyContent: 'space-between',
        paddingTop: 16,
        borderTop: '1px solid var(--border-1)',
      }}>
        <StatusPill status={product.status} />
        {(() => {
          const isDev = product.status === 'inDevelopment';
          const intent = isDev ? 'ai_design_partner' : 'ai_product_access';
          const label = isDev ? 'Become a design partner →' : 'Apply for Limited Preview →';
          return (
            <a href={`/contact.html?intent=${intent}&product=${product.slug}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 24px',
              background: isDev ? 'transparent' : 'var(--brand-primary-700)',
              color: isDev ? 'var(--brand-primary-700)' : 'var(--white, #fff)',
              border: isDev ? '1px solid var(--brand-primary-700)' : 'none',
              fontFamily: 'var(--font-ui)',
              fontSize: 14, fontWeight: 700,
              letterSpacing: '0.04em',
              textDecoration: 'none',
              borderRadius: 'var(--radius-md, 6px)',
            }}>{label}</a>
          );
        })()}
      </footer>

      <style>{`
        @media (min-width: 900px) {
          .aips4-io { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </article>
  );
}

function SpecCell({ role, label, accentVar, children }) {
  const isOutput = role === 'output';
  return (
    <div style={{
      background: 'var(--bg-2, var(--neutral-50))',
      border: '1px solid var(--border-1)',
      borderRadius: 'var(--radius-md, 6px)',
      padding: 'clamp(16px, 1.8vw, 20px)',
      borderLeft: isOutput ? `2px solid ${accentVar || 'var(--brand-accent-500)'}` : '2px solid var(--border-2)',
    }}>
      <div style={{
        fontFamily: 'var(--font-ui)',
        fontSize: 11, letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: isOutput ? (accentVar || 'var(--brand-accent-700)') : 'var(--fg-3)',
        fontWeight: 700, marginBottom: 10,
      }}>{label}</div>
      {children}
    </div>
  );
}

function AIResponseSummary({ aiResp, accentVar }) {
  return (
    <div>
      {aiResp.eyebrow && (
        <div style={{
          fontFamily: 'var(--font-mono, var(--font-ui))',
          fontSize: 11, color: accentVar,
          letterSpacing: '0.08em', marginBottom: 8,
        }}>{aiResp.eyebrow}</div>
      )}
      {aiResp.prose && (
        <p style={{ fontSize: 13.5, color: 'var(--fg-2)', lineHeight: 1.55, margin: '0 0 10px' }}>
          {aiResp.prose}
        </p>
      )}
      {Array.isArray(aiResp.bullets) && (
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
          {aiResp.bullets.map((b, i) => (
            <li key={i} style={{
              paddingLeft: 18, position: 'relative',
              fontSize: 13.5, lineHeight: 1.5, color: 'var(--fg-1)',
            }}>
              <span aria-hidden="true" style={{
                position: 'absolute', left: 0, top: 6,
                width: 8, height: 1.5, background: accentVar,
              }} />
              <strong style={{ display: 'block', fontWeight: 600, marginBottom: 2, color: 'var(--brand-primary-700)' }}>
                {b.title}
              </strong>
              <span style={{ color: 'var(--fg-2)' }}>{b.body}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function DataTablePreview({ dataTbl, accentVar }) {
  return (
    <div>
      {dataTbl.eyebrow && (
        <div style={{
          fontFamily: 'var(--font-mono, var(--font-ui))',
          fontSize: 11, color: accentVar,
          letterSpacing: '0.08em', marginBottom: 6,
        }}>{dataTbl.eyebrow}</div>
      )}
      {dataTbl.badge && (
        <div style={{
          display: 'inline-block',
          fontFamily: 'var(--font-mono, var(--font-ui))',
          fontSize: 11,
          padding: '3px 8px',
          background: 'var(--bg-1)',
          border: '1px solid var(--border-1)',
          borderRadius: 'var(--radius-sm, 4px)',
          color: 'var(--fg-2)',
          marginBottom: 10,
        }}>{dataTbl.badge}</div>
      )}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-ui)', fontSize: 12.5 }}>
          <thead>
            <tr>
              {(dataTbl.columns || []).map((c, i) => (
                <th key={i} style={{
                  textAlign: 'left',
                  padding: '6px 10px',
                  borderBottom: '1px solid var(--border-2)',
                  fontWeight: 600, color: 'var(--fg-3)',
                  fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase',
                }}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(dataTbl.rows || []).slice(0, 3).map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => {
                  const v = (cell && typeof cell === 'object') ? cell.value : cell;
                  const highlight = cell && typeof cell === 'object' && cell.highlight;
                  const mono = cell && typeof cell === 'object' && cell.mono;
                  return (
                    <td key={ci} style={{
                      padding: '8px 10px',
                      borderBottom: '1px solid var(--border-1)',
                      color: 'var(--fg-1)',
                      fontFamily: mono ? 'var(--font-mono, var(--font-ui))' : 'var(--font-ui)',
                      fontWeight: highlight ? 600 : 400,
                      whiteSpace: 'nowrap',
                    }}>{v}</td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatusPill({ status }) {
  const map = {
    limitedPreview: { label: 'Limited Preview', bg: 'var(--brand-accent-100)', fg: 'var(--brand-accent-700)' },
    inDevelopment:  { label: 'In Development',  bg: 'var(--warning-100)',     fg: 'var(--warning-700)' },
    onRequest:      { label: 'On Request',      bg: 'var(--bg-3, var(--neutral-100))', fg: 'var(--fg-2)' },
  };
  const s = map[status] || map.onRequest;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 10px',
      background: s.bg, color: s.fg,
      fontFamily: 'var(--font-ui)',
      fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase',
      fontWeight: 700,
      borderRadius: 'var(--radius-sm, 4px)',
    }}>
      <span aria-hidden="true" style={{
        display: 'inline-block', width: 6, height: 6,
        background: 'currentColor', borderRadius: '50%',
      }} />
      {s.label}
    </span>
  );
}

function Empty() {
  return (
    <div style={{
      fontFamily: 'var(--font-mono, var(--font-ui))',
      fontSize: 12, color: 'var(--fg-3)',
      letterSpacing: '0.06em', fontStyle: 'italic',
    }}>— no demo provided —</div>
  );
}

if (typeof window !== 'undefined') window.AIProductSpec = AIProductSpec;
