/* HomeCN2.jsx — 首页中文版 · 第 2 段（AI / 为什么是梅斯 / 医生网络 / 案例 / 洞察 / 信任 / CTA）
   ------------------------------------------------------------------
   与英文版 Sections2.jsx + Sections3.jsx + PhysicianNetworkMap.jsx +
   CardPreviewStrip.jsx 一一对应：
     AISectionCN ← AISection            WhyMedSciCN ← WhyMedSci
     PhysicianNetworkMapCN ← PhysicianNetworkMap
     CasesCN ← Cases                    InsightsCN ← Insights
     TrustBarCN ← TrustBar              FinalCTACN ← FinalCTA
   必须在 HomeCN.jsx 之后加载（复用其中的 _cnL / EvidenceBadgeCN）。
   数字口径与英文版完全一致，未新增或修改任何数据主张。
   ------------------------------------------------------------------ */

/* 复用 HomeCN.jsx 的工具（跨文件取值做一次兜底，加载顺序：HomeCN.jsx → HomeCN2.jsx） */
var _cnL = window._cnL || function (href) { return (window.MSH && window.MSH.L) ? window.MSH.L(href) : href; };
var EvidenceBadgeCN = window.EvidenceBadgeCN;

/* ===================== 5. AI 赋能交付 ===================== */
function AISectionCN() {
  return (
    <section id="ai" style={{
      padding: 'clamp(72px, 9vw, 128px) clamp(24px, 6vw, 96px)',
      background: 'var(--brand-primary-900)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute', left: '50%', top: -200, width: 800, height: 800, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,174,219,0.10) 0%, transparent 60%)',
        transform: 'translateX(-50%)', pointerEvents: 'none',
      }}></div>

      <div style={{ maxWidth: 960, margin: '0 auto', position: 'relative', textAlign: 'left' }}>
        <SectionEyebrow color="var(--brand-accent-500)">AI 赋能平台 · /ai-platform</SectionEyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(30px, 4.2vw, 48px)',
          fontWeight: 600,
          color: '#fff',
          margin: '0 0 20px',
          letterSpacing: '-0.012em',
          lineHeight: 1.25,
          maxWidth: 760,
        }}>
          上面一条泳道是 AI，下面一条是医生
          <br />
          <span style={{ color: 'var(--brand-accent-500)' }}>每一次交接都有签字</span>
        </h2>
        <p style={{
          fontSize: 16.5,
          color: 'rgba(255,255,255,0.72)',
          lineHeight: 1.8,
          margin: '0 0 36px',
          maxWidth: 680,
        }}>
          AI 负责检索与起草，具名医生把关每一次发布。每份交付物都附一份可追溯的来源日志。我们不宣称 AI 不会出错——我们承诺的是结构化、可审计、有人复核。
        </p>
        <Button variant="accent" href={_cnL('/ai-platform.html')}>查看完整的医生在环（PITL）流程</Button>
      </div>
    </section>
  );
}

/* ===================== 6. 为什么是梅斯健康 ===================== */
function WhyMedSciCN() {
  const pillars = [
    {
      title: '每一份交付物都有医生在环',
      body: '没有具名临床专家签核，任何东西都不发出去。AI 加快起草，医生把关发布。审计留痕记录谁在什么时候、依据什么来源审了什么。',
      icon: 'user-check',
    },
    {
      title: '每一条主张都指得回来源',
      body: '每个数字都带年份和引用，每个客户案例都带签字。我们用三级证据体系——已核验、进行中、索取可得——所以你随时知道哪些能对外引用。',
      icon: 'badge-check',
    },
    {
      title: '跨境是设计出来的，不是改出来的',
      body: '我们不会把一份美国交付物改一改拿去交 NMPA，反过来也不会。双语审核、本地审核组、双市场合规，从立项那天起就在流程里。',
      icon: 'arrow-right-left',
    },
  ];
  return (
    <section id="why" style={{ padding: '96px clamp(16px, 4vw, 40px)', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <SectionEyebrow>为什么是梅斯健康</SectionEyebrow>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 42, fontWeight: 600,
            color: 'var(--brand-primary-700)', margin: '0 auto 16px', letterSpacing: '-0.012em', lineHeight: 1.25,
            maxWidth: 860,
          }}>
            医疗级，不是科技话术
          </h2>
          <p style={{ fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.8, maxWidth: 660, margin: '0 auto' }}>
            AI 赋能，医生签核。三条承诺，不是营销口号。
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
                  fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600,
                  color: 'var(--fg-3)', letterSpacing: '0.14em',
                }}>支柱 0{i + 1}</span>
              </div>
              <h3 style={{
                fontFamily: 'var(--font-ui)', fontSize: 20, fontWeight: 600,
                color: 'var(--brand-primary-700)', margin: '0 0 14px',
                letterSpacing: '0.005em', lineHeight: 1.4,
              }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.85, margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== 7. 精选客户案例 ===================== */
function CasesCN() {
  const cases = [
    {
      cat: '进入中国',
      theme: 'navy',
      previewKind: 'case-timeline-11wk',
      title: '一款美国肿瘤器械，11 周完成审核并递交 NMPA',
      metrics: [
        { n: '11', u: '周', l: '递交周期' },
        { n: '5',  u: '',   l: '在册的具名医生审核人' },
        { n: '0',  u: '',   l: '首次递交后的发补' },
      ],
      badge: 'verified',
      year: '2025-09',
      href: '/case-studies/entering-china-evidence-hcp.html',
    },
    {
      cat: '进入中国',
      theme: 'navy',
      previewKind: 'case-passrate-38',
      title: '为一家全球 Top-10 医疗器械企业做的本地化内容项目，覆盖三个治疗领域',
      metrics: [
        { n: '38', u: '',   l: '产出的双语材料' },
        { n: '12', u: '周', l: '项目周期' },
        { n: '96', u: '%',  l: '首次质控签核通过率' },
      ],
      badge: 'verified',
      year: '2025-11',
      href: '/case-studies/entering-china-localized-content.html',
    },
    {
      cat: '出海全球',
      theme: 'cyan',
      previewKind: 'case-deltabars-42-18',
      title: '一家中国肿瘤创新企业的 FDA 口径证据桥接与顾问组',
      metrics: [
        { n: '42 → 18', u: '天', l: '答复中位时长' },
        { n: '7',  u: '', l: '参与的美国 KOL 顾问' },
        { n: '3',  u: '', l: '在写的论文' },
      ],
      badge: 'development',
      year: '进行中',
      href: '/case-studies/going-global-fda-evidence-bridge.html',
    },
  ];
  return (
    <section id="cases" style={{
      padding: 'clamp(72px, 9vw, 96px) clamp(24px, 6vw, 40px)',
      background: 'var(--bg-2)'
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          marginBottom: 48, flexWrap: 'wrap', gap: 24
        }}>
          <div style={{ maxWidth: 680 }}>
            <SectionEyebrow>精选客户案例</SectionEyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 3.8vw, 42px)', fontWeight: 600,
              color: 'var(--brand-primary-700)', margin: 0,
              letterSpacing: '-0.012em', lineHeight: 1.25,
            }}>
              三个签过字的项目，三条签过字的溯源链路
            </h2>
          </div>
          <a href={_cnL('/case-studies/')} style={{
            color: 'var(--brand-primary-500)', fontWeight: 600, fontSize: 14,
            fontFamily: 'var(--font-ui)',
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>
            查看全部客户案例 <span>→</span>
          </a>
        </div>
        <div className="two-col-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20
        }}>
          {cases.map((c, i) => <CaseCardCN key={i} c={c} />)}
        </div>
      </div>
    </section>
  );
}

function CaseCardCN({ c }) {
  const [hover, setHover] = React.useState(false);
  const isNavy = c.theme === 'navy';
  return (
    <a href={_cnL(c.href || '#')} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
         style={{
           background: '#fff', border: `1px solid ${hover ? 'var(--brand-primary-300)' : 'var(--border-1)'}`,
           borderRadius: 12, padding: 28, cursor: 'pointer',
           boxShadow: hover ? 'var(--shadow-sm)' : 'none',
           transition: 'all 200ms',
           display: 'flex', flexDirection: 'column',
           overflow: 'hidden', textDecoration: 'none', color: 'inherit',
         }}>
      {c.previewKind && window.CardPreviewStripCN && <window.CardPreviewStripCN kind={c.previewKind} />}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
        <span style={{
          fontSize: 10.5, fontWeight: 600, letterSpacing: '0.1em',
          color: isNavy ? 'var(--brand-primary-700)' : 'var(--brand-accent-700)',
          padding: '3px 8px', borderRadius: 4,
          background: isNavy ? 'var(--brand-primary-100)' : 'var(--brand-accent-100)',
        }}>
          {c.cat}
        </span>
        <EvidenceBadgeCN kind={c.badge} size="sm" />
      </div>
      <h3 style={{
        fontFamily: 'var(--font-ui)', fontSize: 18.5, fontWeight: 600,
        color: 'var(--brand-primary-700)', margin: '0 0 24px', letterSpacing: '0.005em',
        lineHeight: 1.55, minHeight: 86, textWrap: 'balance',
      }}>{c.title}</h3>
      <div className="stat-strip-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10,
        paddingTop: 20, borderTop: '1px dashed var(--border-1)', marginTop: 'auto',
      }}>
        {c.metrics.map((m, i) => (
          <div key={i}>
            <div style={{
              fontFamily: 'var(--font-ui)', fontSize: 24, fontWeight: 600,
              color: 'var(--brand-primary-700)', letterSpacing: '-0.02em', lineHeight: 1.1,
              whiteSpace: 'nowrap',
            }}>
              {m.n}{m.u && <span style={{ fontSize: 13, color: 'var(--brand-accent-700)', marginLeft: 3, fontWeight: 500 }}>{m.u}</span>}
            </div>
            <div style={{ fontSize: 11.5, color: 'var(--fg-2)', marginTop: 6, lineHeight: 1.5 }}>{m.l}</div>
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontSize: 12, color: 'var(--fg-3)',
      }}>
        <span style={{ fontFamily: 'var(--font-mono)' }}>已签署 · {c.year}</span>
        <span style={{ color: 'var(--brand-primary-500)', fontWeight: 600, fontSize: 13 }}>
          阅读案例 <span style={{ transform: hover ? 'translateX(4px)' : 'none', transition: 'transform 200ms', display: 'inline-block' }}>→</span>
        </span>
      </div>
    </a>
  );
}

/* ===================== 8. 信任 · 已核验的证据点 ===================== */
function TrustBarCN() {
  const stats = [
    { n: '333 万+', l: '网络内医生', yr: '2025', s: '1' },
    { n: '128', l: '已审计的申报', yr: '2025 Q4', s: '2' },
    { n: '96%', l: '首次递交的医生签核率', yr: '2025', s: '1' },
    { n: '42 → 18', l: '监管答复中位时长（天）', yr: '2025', s: '3' },
  ];
  return (
    <section id="trust" style={{ padding: '72px clamp(16px, 4vw, 40px)', background: '#fff', borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <SectionEyebrow color="var(--fg-3)">信任 · 已核验的证据点</SectionEyebrow>
          <EvidenceBadgeCN kind="verified" size="sm">已核验 · 有签字来源</EvidenceBadgeCN>
        </div>
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--border-1)', borderRadius: 16, overflow: 'hidden' }}>
          {stats.map((s, i) => (
            <div key={s.l} style={{
              padding: '28px 32px',
              borderLeft: i === 0 ? 'none' : '1px solid var(--border-1)',
              background: '#fff',
            }}>
              <div style={{
                fontFamily: 'var(--font-ui)', fontSize: 36, fontWeight: 600,
                color: 'var(--brand-primary-700)', letterSpacing: '-0.025em', lineHeight: 1.15,
              }}>
                {s.n}
                <sup style={{ fontSize: 11, color: 'var(--brand-primary-500)', marginLeft: 4, fontWeight: 500 }}>{s.s}</sup>
              </div>
              <div style={{ fontSize: 13, color: 'var(--fg-2)', marginTop: 10, lineHeight: 1.6, maxWidth: 220 }}>
                {s.l}
              </div>
              <div style={{ fontSize: 10.5, color: 'var(--fg-3)', marginTop: 8, fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                {s.yr}
              </div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 11.5, color: 'var(--fg-3)', marginTop: 16, lineHeight: 1.7 }}>
          ¹ 梅斯健康内部医生网络审计，2025。² 平台申报日志，2025 Q4。³ 跨项目汇总，2025。
        </div>
      </div>
    </section>
  );
}

/* ===================== 9. 洞察 ===================== */
function InsightsCN() {
  const posts = [
    { topic: '中国真实世界研究', date: '2026 年 4 月', title: '中国 RWE 政策正在变：全球申办方需要知道什么', reviewer: 'Dr. M. Park', min: 7, href: 'insights/china-rwe-regulatory-landscape.html' },
    { topic: 'FDA 证据桥接',   date: '2026 年 4 月', title: '把中国产生的数据桥接到 FDA 申报：一份实操清单', reviewer: 'Dr. K. Liu',  min: 8, href: 'insights/bridging-china-data-fda.html' },
    { topic: '中国市场准入',   date: '2026 年 4 月', title: '同情用药项目：创新疗法进入中国的一条新路径',   reviewer: 'Dr. J. Wang', min: 6, href: 'insights/named-patient-programs-china.html' },
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
            <SectionEyebrow>洞察 · 经医生在环复核</SectionEyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.4vw, 38px)', fontWeight: 600,
              color: 'var(--brand-primary-700)', margin: 0,
              letterSpacing: '-0.012em', lineHeight: 1.25,
            }}>
              我们的操盘人写，我们的医生复核
            </h2>
          </div>
          <a href={_cnL('/insights/')} style={{
            color: 'var(--brand-primary-500)', fontWeight: 600, fontSize: 14,
            fontFamily: 'var(--font-ui)'
          }}>全部洞察 →</a>
        </div>
        <div className="two-col-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20
        }}>
          {posts.map((p, i) => <InsightCardCN key={i} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function InsightCardCN({ p }) {
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
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
        <span style={{
          fontSize: 10.5, fontWeight: 600, letterSpacing: '0.1em',
          color: 'var(--brand-accent-700)',
          padding: '3px 8px', borderRadius: 4, background: 'var(--brand-accent-100)',
        }}>{p.topic}</span>
        <span style={{ fontSize: 11, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)' }}>{p.date}</span>
      </div>
      <h3 style={{
        fontFamily: 'var(--font-ui)', fontSize: 18, fontWeight: 600,
        color: 'var(--brand-primary-700)', margin: '0 0 20px', letterSpacing: '0.005em', lineHeight: 1.55,
        minHeight: 84, textWrap: 'balance',
      }}>{p.title}</h3>
      <div style={{
        paddingTop: 16, borderTop: '1px dashed var(--border-1)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontSize: 12, color: 'var(--fg-3)',
      }}>
        <span>医生在环复核 · {p.reviewer}</span>
        <span>{p.min} 分钟读完</span>
      </div>
    </a>
  );
}

/* ===================== 10. 结尾 CTA ===================== */
function FinalCTACN() {
  return (
    <section id="cta" style={{ padding: '96px clamp(16px, 4vw, 40px)', background: 'var(--grad-hero)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', position: 'relative', textAlign: 'center' }}>
        <SectionEyebrow color="var(--brand-accent-500)">联系我们的专家</SectionEyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 46, fontWeight: 600,
          color: '#fff', margin: 0, letterSpacing: '-0.015em', lineHeight: 1.25,
        }}>
          带一个证据问题过来，我们把试点范围定出来
        </h2>
        <p style={{ fontSize: 16.5, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, margin: '24px auto 0', maxWidth: 660 }}>
          30 分钟引导通话，对接人是有医学背景的项目负责人。不用看 PPT，起步也不用先签 NDA——只带上你最难的那个跨境证据问题。
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary-light" style={{ background: '#fff', color: 'var(--brand-primary-700)' }} href={_cnL('/pilots/china-evidence-sprint.html')}>预约试点</Button>
          <Button variant="outline-light" href={_cnL('/contact.html')}>联系我们的专家</Button>
        </div>
        <div style={{ marginTop: 40, display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap', fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <i data-lucide="shield-check" width="14" height="14" style={{ color: 'var(--brand-accent-500)' }}></i>
            可签 NDA
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <i data-lucide="clock" width="14" height="14" style={{ color: 'var(--brand-accent-500)' }}></i>
            2 个工作日内回复
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <i data-lucide="globe" width="14" height="14" style={{ color: 'var(--brand-accent-500)' }}></i>
            中文 / EN
          </span>
        </div>
      </div>
    </section>
  );
}

window.AISectionCN = AISectionCN;
window.WhyMedSciCN = WhyMedSciCN;
window.CasesCN = CasesCN;
window.InsightsCN = InsightsCN;
window.TrustBarCN = TrustBarCN;
window.FinalCTACN = FinalCTACN;

/* ===================== 11. 卡片数据预览条 · 中文版 ===================== */
/* =========================================================
   CardPreviewStripCN — 首页卡片顶部「数据预览」条 · 中文版
   ---------------------------------------------------------
   结构与 CardPreviewStrip.jsx 完全一致，仅微标签与轴文案中文化。
   所有数字口径与英文版一致，未新增或修改任何数据主张。
   ========================================================= */

(function () {
  /* Shared strip frame ------------------------------------------------ */
  function Strip({ children, label }) {
    return (
      <div style={{
        position: 'relative',
        height: 130,
        background: 'var(--bg-2, #fafbfc)',
        borderBottom: '1px solid var(--border-1)',
        marginLeft: -28, marginRight: -28, marginTop: -28,  // escape card padding
        marginBottom: 24,
        padding: '14px 20px 14px',
        overflow: 'hidden',
      }}>
        {label && (
          <div aria-hidden="true" style={{
            position: 'absolute', top: 8, right: 14,
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 9.5, letterSpacing: '0.10em',
            textTransform: 'uppercase',
            color: 'var(--fg-3)',
          }}>{label}</div>
        )}
        {children}
      </div>
    );
  }

  /* ============== Case 1 — 11-week phase timeline ================== */
  function CaseTimeline11wk() {
    const phases = [
      { label: '接件',           weeks: 1 },
      { label: '翻译与本地化',   weeks: 3 },
      { label: '医生在环复核',   weeks: 4 },
      { label: 'NMPA 递交',      weeks: 3 },
    ];
    const total = phases.reduce((s, p) => s + p.weeks, 0);
    const W = 100, H = 22; // logical % units
    let cursor = 0;
    return (
      <Strip label="阶段时间轴 · 11 周">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
          <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none"
               width="100%" height="32" aria-hidden="true">
            {phases.map((p, i) => {
              const w = (p.weeks / total) * W;
              const x = cursor;
              cursor += w;
              const isReview = p.label === '医生在环复核';
              return (
                <g key={i}>
                  <rect x={x + 0.4} y={4} width={Math.max(0, w - 0.8)} height={H - 8}
                    fill={isReview ? 'var(--brand-primary-700)' : 'var(--brand-accent-500)'}
                    opacity={isReview ? 0.9 : 0.65} />
                </g>
              );
            })}
            <circle cx={W - 1.5} cy={H / 2} r="1.6" fill="var(--brand-primary-700)" />
          </svg>
          <div style={{
            display: 'grid', gridTemplateColumns: phases.map(p => `${p.weeks}fr`).join(' '),
            gap: 4, fontFamily: 'var(--font-ui)', fontSize: 10.5,
            color: 'var(--fg-2)',
          }}>
            {phases.map((p, i) => (
              <div key={i} style={{ lineHeight: 1.25 }}>
                <div style={{ fontWeight: 600, color: 'var(--brand-primary-700)' }}>{p.label}</div>
                <div style={{ color: 'var(--fg-3)', fontSize: 10 }}>{p.weeks} 周</div>
              </div>
            ))}
          </div>
          <div style={{
            position: 'absolute', right: 18, bottom: 12,
            fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 600,
            color: 'var(--brand-accent-700)',
          }}>首次递交 0 发补</div>
        </div>
      </Strip>
    );
  }

  /* ============== Case 2 — 38 artifacts · QC pass grid ============= */
  function CasePassrate38() {
    const total = 38;
    const cols = 13, rows = 3;
    const cells = [];
    // Mark dot 18 (arbitrary, deterministic) as "needed minor revision" — 1 of 38 ≈ 97.4%
    // Spec says 96% pass; we visualize the 38-artifact grid + a narrow QC bar.
    for (let i = 0; i < total; i++) cells.push({ i, miss: i === 17 });
    return (
      <Strip label="材料网格 · 产出 38 份">
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 4, marginTop: 16, maxWidth: 240 }}>
          {cells.map((c) => (
            <div key={c.i} aria-hidden="true" style={{
              width: '100%', paddingBottom: '100%',
              borderRadius: '50%',
              background: c.miss ? 'transparent' : 'var(--brand-accent-500)',
              border: c.miss ? '1.2px solid var(--brand-primary-500)' : 'none',
              opacity: c.miss ? 1 : 0.55,
            }} />
          ))}
        </div>
        <div style={{
          position: 'absolute', right: 18, bottom: 12, textAlign: 'right',
          fontFamily: 'var(--font-ui)',
        }}>
          <div style={{
            fontSize: 22, fontWeight: 600, color: 'var(--brand-primary-700)',
            letterSpacing: '-0.02em', lineHeight: 1,
          }}>96<span style={{ fontSize: 13, color: 'var(--brand-accent-700)', fontWeight: 500 }}>%</span></div>
          <div style={{ fontSize: 10, color: 'var(--fg-3)', marginTop: 4 }}>首次质控通过</div>
        </div>
      </Strip>
    );
  }

  /* ============== Case 3 — 42 → 18 days delta bars ================= */
  function CaseDeltaBars() {
    const before = 42, after = 18, max = 50;
    const W = 220, BH = 18, GAP = 12;
    const bw = (v) => (v / max) * W;
    return (
      <Strip label="答复中位时长 · 前 / 后">
        <svg viewBox={`0 0 ${W + 60} ${BH * 2 + GAP + 14}`} width="100%" height="98" aria-hidden="true">
          {/* labels */}
          <text x="0" y={BH - 5} style={{
            fontFamily: 'var(--font-ui), Inter, sans-serif',
            fontSize: 8.5, fontWeight: 700, letterSpacing: '0.08em',
            fill: 'var(--fg-3)',
          }}>此前</text>
          <text x="0" y={BH * 2 + GAP - 5} style={{
            fontFamily: 'var(--font-ui), Inter, sans-serif',
            fontSize: 8.5, fontWeight: 700, letterSpacing: '0.08em',
            fill: 'var(--fg-3)',
          }}>此后</text>
          {/* before bar (gray) */}
          <rect x="38" y="2" width={bw(before)} height={BH}
            fill="var(--fg-3)" opacity="0.35" />
          <text x={38 + bw(before) + 6} y={BH - 4} style={{
            fontFamily: 'var(--font-ui), Inter, sans-serif',
            fontSize: 12, fontWeight: 600, fill: 'var(--brand-primary-700)',
          }}>{before} 天</text>
          {/* after bar (cyan) */}
          <rect x="38" y={BH + GAP} width={bw(after)} height={BH}
            fill="var(--brand-accent-500)" opacity="0.85" />
          <text x={38 + bw(after) + 6} y={BH * 2 + GAP - 4} style={{
            fontFamily: 'var(--font-ui), Inter, sans-serif',
            fontSize: 12, fontWeight: 600, fill: 'var(--brand-accent-700)',
          }}>{after} 天</text>
          {/* delta callout */}
          <text x="0" y={BH * 2 + GAP + 12} style={{
            fontFamily: 'var(--font-mono, var(--font-ui))',
            fontSize: 10, fill: 'var(--brand-primary-700)', fontWeight: 600, letterSpacing: '0.04em',
          }}>−{before - after} 天  ·  −{Math.round((1 - after / before) * 100)}%</text>
        </svg>
      </Strip>
    );
  }

  /* ============== Insight 1 — top 5 NMPA-flagged sections =========== */
  function InsightBarsNMPA() {
    const rows = [
      { label: '终点定义',       pct: 78 },
      { label: '统计分析计划',   pct: 65 },
      { label: '安全性数据签核', pct: 52 },
      { label: '样本量依据',     pct: 40 },
      { label: '入组标准',       pct: 25 },
    ];
    return (
      <Strip label="拆解 · 40 份申报资料">
        <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {rows.map((r, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1fr 28px',
              alignItems: 'center', gap: 6,
              fontFamily: 'var(--font-ui)', fontSize: 9.5,
              lineHeight: 1.2,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ minWidth: 110, color: 'var(--fg-2)' }}>{r.label}</span>
                <div style={{
                  flex: 1, height: 6,
                  background: 'var(--border-1)',
                  borderRadius: 2, overflow: 'hidden',
                }}>
                  <div style={{
                    width: `${r.pct}%`, height: '100%',
                    background: 'var(--brand-accent-500)', opacity: 0.7,
                  }} />
                </div>
              </div>
              <span style={{
                fontFamily: 'var(--font-mono, var(--font-ui))',
                fontSize: 10, fontWeight: 600, color: 'var(--brand-primary-700)',
                textAlign: 'right',
              }}>{r.pct}%</span>
            </div>
          ))}
        </div>
      </Strip>
    );
  }

  /* ============== Insight 2 — China → FDA bridge funnel ============= */
  function InsightFunnelBridge() {
    const steps = [
      { label: '中国登记研究 · 全部病例', pct: 100 },
      { label: '终点可对应 FDA',           pct:  73 },
      { label: '可作为支持性证据',         pct:  58 },
    ];
    return (
      <Strip label="桥接漏斗 · 已复核 14 个案例">
        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              fontFamily: 'var(--font-ui)', fontSize: 10.5,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{
                width: `${s.pct}%`, maxWidth: '70%',
                height: 14,
                background: i === 0 ? 'var(--brand-primary-700)'
                          : i === 1 ? 'var(--brand-accent-700)'
                                    : 'var(--brand-accent-500)',
                opacity: i === 0 ? 0.85 : 0.7,
              }} />
              <span style={{ color: 'var(--fg-2)', flex: 1 }}>{s.label}</span>
              <span style={{
                fontFamily: 'var(--font-mono, var(--font-ui))',
                fontSize: 11, fontWeight: 700, color: 'var(--brand-primary-700)',
              }}>{s.pct}%</span>
            </div>
          ))}
        </div>
      </Strip>
    );
  }

  /* ============== Insight 3 — bilingual parity =================== */
  function InsightBilingualPair() {
    return (
      <Strip label="双语一致性 · 1 : 1">
        <div style={{
          marginTop: 18,
          display: 'flex', flexDirection: 'column', gap: 10,
          fontFamily: 'var(--font-ui)',
        }}>
          {/* Chinese line */}
          <div style={{
            display: 'flex', alignItems: 'baseline', gap: 8,
          }}>
            <span style={{
              fontFamily: 'var(--font-mono, var(--font-ui))',
              fontSize: 9.5, color: 'var(--fg-3)', letterSpacing: '0.06em',
              minWidth: 30,
            }}>CN</span>
            <span style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: 14, color: 'var(--brand-primary-700)',
              letterSpacing: '0.02em', flex: 1,
            }}>评审委员会已批准 · PITL 复核签字</span>
          </div>
          {/* dotted divider with arrow */}
          <div style={{ position: 'relative', height: 12 }}>
            <div style={{
              position: 'absolute', left: 38, right: 78, top: 5,
              height: 1, borderTop: '1px dashed var(--border-2, var(--border-1))',
            }} />
            <div style={{
              position: 'absolute', right: 0, top: -4,
              fontFamily: 'var(--font-mono, var(--font-ui))',
              fontSize: 10, color: 'var(--brand-accent-700)',
              fontWeight: 600, letterSpacing: '0.04em',
            }}>↔ 两版均合规</div>
          </div>
          {/* English line */}
          <div style={{
            display: 'flex', alignItems: 'baseline', gap: 8,
          }}>
            <span style={{
              fontFamily: 'var(--font-mono, var(--font-ui))',
              fontSize: 9.5, color: 'var(--fg-3)', letterSpacing: '0.06em',
              minWidth: 30,
            }}>EN</span>
            <span style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: 13, color: 'var(--brand-primary-700)',
              letterSpacing: '0.005em', flex: 1, fontStyle: 'italic',
            }}>Approved by review board · PITL signed</span>
          </div>
        </div>
      </Strip>
    );
  }

  /* ----- Dispatcher ---------------------------------------------- */
  function CardPreviewStripCN({ kind }) {
    switch (kind) {
      case 'case-timeline-11wk':     return <CaseTimeline11wk />;
      case 'case-passrate-38':       return <CasePassrate38 />;
      case 'case-deltabars-42-18':   return <CaseDeltaBars />;
      case 'insight-bars-nmpa':      return <InsightBarsNMPA />;
      case 'insight-funnel-bridge':  return <InsightFunnelBridge />;
      case 'insight-bilingual-pair': return <InsightBilingualPair />;
      default:
        // Unknown kind — render an empty strip so the card layout stays stable.
        return <Strip label={kind || '预览'}><React.Fragment /></Strip>;
    }
  }

  if (typeof window !== 'undefined') {
    window.CardPreviewStripCN = CardPreviewStripCN;
  }
})();

/* ===================== 12. 医生网络分布图 · 中文版 =====================
   PhysicianNetworkMapCN — 结构与 components/PhysicianNetworkMap.jsx 完全一致，
   仅文案、城市标注与 SVG 无障碍描述中文化。坐标与数字口径未改动。 */

(function () {
  // ----- Geometry constants ---------------------------------------------
  // (BTH · Yangtze Delta · Pearl Delta · Cheng-Yu · Wuhan-Changsha-Zhengzhou
  // · Shandong peninsula · Hainan). Drops Xinjiang, Tibet, NE Heilongjiang
  // for clarity at homepage viewport size. US inset removed entirely.
  const VIEW_W = 760;
  const VIEW_H = 700;
  const CN_LNG_MIN =  99, CN_LNG_MAX = 126;   // 27° span
  const CN_LAT_MIN =  18, CN_LAT_MAX =  44;   // 26° span

  function projectCN(lng, lat) {
    const x = ((lng - CN_LNG_MIN) / (CN_LNG_MAX - CN_LNG_MIN)) * VIEW_W;
    const y = ((CN_LAT_MAX - lat) / (CN_LAT_MAX - CN_LAT_MIN)) * VIEW_H;
    return [x, y];
  }

  // ----- Deterministic PRNG (mulberry32) --------------------------------
  function mulberry32(seed) {
    return function () {
      seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // ----- Per-city physician counts (China) ------------------------------
  // Distribution mirrors China's tier-1/tier-2 hospital concentration
  // (Beijing-Tianjin-Hebei + Yangtze Delta + Pearl River Delta = ~55%).
  // Sum ≈ 3.0M; balance is in cities not individually rendered.
  const CITIES_CN = [
    { code: 'BJ',  name: 'Beijing',      lng: 116.4, lat: 39.9, n: 285, label: 'NE',  emphasis: true },
    { code: 'TJ',  name: 'Tianjin',      lng: 117.2, lat: 39.1, n:  95, label: null },
    { code: 'SJZ', name: 'Shijiazhuang', lng: 114.5, lat: 38.0, n:  70, label: null },
    { code: 'JN',  name: 'Jinan',        lng: 117.0, lat: 36.7, n:  90, label: null },
    { code: 'QD',  name: 'Qingdao',      lng: 120.4, lat: 36.1, n:  80, label: null },
    { code: 'ZZ',  name: 'Zhengzhou',    lng: 113.6, lat: 34.7, n: 100, label: null },
    { code: 'XA',  name: "Xi'an",        lng: 108.9, lat: 34.3, n: 110, label: null },
    { code: 'LZ',  name: 'Lanzhou',      lng: 103.8, lat: 36.1, n:  40, label: null },
    { code: 'NJ',  name: 'Nanjing',      lng: 118.8, lat: 32.1, n: 110, label: null },
    { code: 'SH',  name: 'Shanghai',     lng: 121.5, lat: 31.2, n: 320, label: 'NE',  emphasis: true },
    { code: 'HZ',  name: 'Hangzhou',     lng: 120.2, lat: 30.3, n: 130, label: 'SE',  emphasis: true },
    { code: 'HF',  name: 'Hefei',        lng: 117.3, lat: 31.9, n:  70, label: null },
    { code: 'WH',  name: 'Wuhan',        lng: 114.3, lat: 30.6, n: 150, label: 'NW',  emphasis: true },
    { code: 'CD',  name: 'Chengdu',      lng: 104.1, lat: 30.7, n: 175, label: 'NW',  emphasis: true },
    { code: 'CQ',  name: 'Chongqing',    lng: 106.5, lat: 29.6, n: 130, label: 'SW' },
    { code: 'CS',  name: 'Changsha',     lng: 113.0, lat: 28.2, n:  90, label: null },
    { code: 'NC',  name: 'Nanchang',     lng: 115.9, lat: 28.7, n:  70, label: null },
    { code: 'FZ',  name: 'Fuzhou',       lng: 119.3, lat: 26.1, n:  80, label: null },
    { code: 'GZ',  name: 'Guangzhou',    lng: 113.3, lat: 23.1, n: 230, label: 'SE',  emphasis: true },
    { code: 'SZ',  name: 'Shenzhen',     lng: 114.1, lat: 22.5, n: 145, label: null },
    { code: 'NN',  name: 'Nanning',      lng: 108.4, lat: 22.8, n:  55, label: null },
    { code: 'KM',  name: 'Kunming',      lng: 102.7, lat: 25.0, n:  60, label: null },
    { code: 'GY',  name: 'Guiyang',      lng: 106.7, lat: 26.6, n:  35, label: null },
    { code: 'HK',  name: 'Hong Kong',    lng: 114.2, lat: 22.3, n:  35, label: null },
    { code: 'TPE', name: 'Taipei',       lng: 121.5, lat: 25.0, n:  30, label: null },
    { code: 'SY',  name: 'Shenyang',     lng: 123.4, lat: 41.8, n:  85, label: null },
    { code: 'DL',  name: 'Dalian',       lng: 121.6, lat: 38.9, n:  60, label: null },
    { code: 'HH',  name: 'Hohhot',       lng: 111.7, lat: 40.8, n:  35, label: null },
    { code: 'TY',  name: 'Taiyuan',      lng: 112.5, lat: 37.9, n:  60, label: null },
    { code: 'YC',  name: 'Yinchuan',     lng: 106.3, lat: 38.5, n:  20, label: null },
    { code: 'XN',  name: 'Xining',       lng: 101.8, lat: 36.6, n:  18, label: null },
    { code: 'HK2', name: 'Haikou',       lng: 110.3, lat: 20.0, n:  25, label: null },
  ];
  /* Harbin / Changchun / Urumqi / Lhasa dropped — outside the zoomed-in
     central+eastern viewport (image-add pass 2). Their physician counts
     remain conceptually inside the 3.33M aggregate footnote. */

  // ----- Country outlines (simplified silhouettes) ----------------------
  // Hand-simplified clockwise polygons in [lng, lat] pairs. Not survey-grade —
  // intent is shape recognition beneath the dot density. China refined to
  // ~130 pts to capture the rooster-comb NE, Pamir tip W, Yunnan finger S,
  // Yangtze delta indent E. Hainan + Taiwan rendered as separate paths.
  const CHINA_OUTLINE = [
    /* NE corner (Mohe) — clockwise → east along Heilongjiang/Russia border */
    [122.4, 53.5], [123.5, 53.4], [125.0, 53.0], [126.5, 52.6],
    [127.5, 52.5], [129.0, 52.5], [130.5, 52.7], [132.0, 53.4],
    [133.5, 52.6], [134.6, 50.5], [134.7, 48.4],
    /* Russia border south, then NK border (Tumen R) */
    [134.0, 47.5], [133.5, 46.5], [132.5, 45.5], [131.5, 44.5],
    [131.0, 43.0], [130.7, 42.7], [130.0, 42.5], [129.0, 42.0],
    [128.0, 41.7], [126.5, 41.7], [125.5, 41.0],
    /* Yalu mouth, Liaodong peninsula, Bohai bay */
    [124.0, 40.0], [123.5, 39.7], [122.7, 39.5], [122.0, 39.2],
    [121.5, 39.0], [121.2, 38.8], [121.0, 38.7], [121.4, 39.0],
    [121.6, 39.7], [121.0, 40.5], [120.5, 40.4], [119.5, 39.7],
    [118.7, 39.2], [118.0, 38.8], [117.7, 38.3], [118.0, 37.7],
    /* Yellow R delta, Shandong peninsula, Qingdao */
    [118.7, 37.6], [119.5, 37.5], [120.7, 37.7], [121.7, 37.5],
    [122.4, 37.4], [122.7, 37.0], [122.5, 36.8], [121.5, 36.6],
    [120.7, 36.1], [120.0, 35.8], [119.5, 35.3], [119.2, 34.7],
    /* Jiangsu coast, Yangtze mouth, Shanghai */
    [120.0, 34.0], [120.5, 33.5], [121.0, 32.8], [121.5, 32.4],
    [121.9, 32.0], [121.8, 31.4], [121.4, 30.9], [121.0, 30.5],
    /* Hangzhou bay, Zhejiang coast */
    [121.0, 30.2], [121.7, 29.9], [122.0, 29.5], [121.7, 28.7],
    [121.6, 28.0], [121.0, 27.5], [120.5, 26.7],
    /* Fujian coast: Fuzhou → Xiamen → Shantou */
    [119.7, 25.7], [119.0, 25.0], [118.5, 24.5], [117.7, 23.9],
    [117.0, 23.5], [116.0, 22.9], [115.0, 22.7], [114.5, 22.5],
    /* Pearl R delta, Hong Kong, Guangdong, Leizhou peninsula */
    [114.0, 22.5], [113.5, 22.7], [113.0, 22.2], [112.3, 21.8],
    [111.5, 21.5], [110.7, 21.3], [110.3, 21.0], [110.2, 20.5],
    [110.0, 20.2], [109.7, 20.5], [109.7, 21.2], [109.5, 21.5],
    /* Beibu Gulf to Vietnam border */
    [108.7, 21.6], [108.0, 21.5], [107.5, 21.5], [106.7, 22.0],
    /* SW: Guangxi → Yunnan finger → Myanmar border (anti-clockwise on map) */
    [105.8, 22.9], [104.7, 22.8], [103.5, 22.6], [102.5, 22.4],
    [101.7, 22.4], [101.5, 21.7], [101.7, 21.2], [100.8, 21.5],
    [100.0, 21.7], [99.2, 22.1], [99.0, 23.1], [98.7, 24.1],
    [97.5, 24.5], [97.5, 25.7], [98.0, 27.0], [97.5, 28.2],
    [96.5, 28.7], [95.8, 29.1],
    /* McMahon Line east, Bhutan, Sikkim, Nepal, India */
    [94.5, 28.5], [93.0, 27.9], [92.0, 27.7], [91.5, 27.7],
    [90.5, 27.5], [89.0, 27.7], [88.0, 27.9], [87.0, 27.8],
    [85.5, 28.1], [84.0, 28.7], [82.5, 29.0], [81.2, 30.0],
    [80.3, 30.3], [79.5, 30.7], [79.0, 31.5], [78.5, 32.5],
    /* Aksai Chin → Karakorum → Pamir tip (westernmost) */
    [78.0, 33.5], [76.7, 35.5], [75.7, 36.6], [74.7, 37.3],
    [73.7, 38.7],
    /* Pamir → Tian Shan → Kazakhstan / Mongolia border (north loop) */
    [74.5, 39.5], [75.7, 40.5], [76.5, 40.8], [78.0, 41.4],
    [79.5, 41.7], [80.5, 43.0], [81.7, 44.5], [82.5, 45.0],
    [82.5, 46.0], [83.0, 47.0], [85.0, 47.4], [85.7, 48.0],
    [87.0, 48.5], [88.0, 49.0],
    /* Down for Gobi border with Mongolia */
    [89.5, 48.0], [91.0, 46.5], [93.0, 45.0], [95.0, 44.0],
    [96.5, 42.7], [99.0, 42.6], [101.0, 42.5], [103.5, 42.0],
    [105.5, 41.8], [107.5, 42.4], [109.5, 42.5], [111.5, 43.4],
    [114.0, 44.8], [116.0, 46.0], [117.5, 47.5], [119.0, 49.0],
    /* NE loop into Heilongjiang/Russia border, back to Mohe */
    [119.5, 49.7], [120.7, 50.5], [121.5, 51.7], [121.8, 52.7],
    [122.4, 53.5],
  ];
  /* Hainan island — recognizable elongated oval */
  const HAINAN_OUTLINE = [
    [110.5, 20.1], [110.7, 19.7], [110.7, 19.2], [110.4, 18.5],
    [110.0, 18.2], [109.5, 18.2], [108.9, 18.7], [108.7, 19.3],
    [108.7, 19.7], [109.0, 20.0], [109.7, 20.2],
  ];
  /* Taiwan island — tilted oval, sharper south tip */
  const TAIWAN_OUTLINE = [
    [121.5, 25.3], [121.9, 25.0], [122.0, 24.5], [121.9, 23.5],
    [121.5, 22.7], [120.8, 22.0], [120.2, 22.5], [120.1, 23.5],
    [120.4, 24.5], [121.0, 25.1],
  ];
  /* US outline removed in image-add pass 2 — US inset deemed unnecessary
     given the zoomed-in China focus. Trans-Pacific story moves to Hero copy
     and the upcoming /global page. */

  function polygonPath(points, projector) {
    if (!points || !points.length) return '';
    const projected = points.map(([lng, lat]) => projector(lng, lat));
    const [x0, y0] = projected[0];
    const rest = projected.slice(1).map(([x, y]) => `L ${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
    return `M ${x0.toFixed(1)} ${y0.toFixed(1)} ${rest} Z`;
  }

  // ----- Trans-Pacific & intra-China connection lines -------------------
  // Each pair = [code-a, code-b]; opacity scales with hub weight.
  const CONNECTIONS_CN = [
    ['BJ','SH'], ['BJ','GZ'], ['BJ','CD'], ['SH','GZ'],
    ['SH','CD'], ['SH','WH'], ['GZ','WH'], ['CD','XA'],
    ['BJ','SY'], ['SH','HZ'],
  ];
  /* CONNECTIONS_PAC removed — US inset deprecated in image-add pass 2. */

  // ----- Pre-compute density dots ---------------------------------------
  // For each city we scatter k = round(n / 8) "satellite" dots within a
  // jittered radius proportional to sqrt(n). This makes the dot pattern
  // itself reveal physician density (heavy on the eastern coast) without
  // having to draw a country outline.
  const rng = mulberry32(2415);
  const DENSITY_DOTS = (function build() {
    const out = [];
    for (const c of CITIES_CN) {
      const k = Math.max(2, Math.round(c.n / 8));
      const jitter = 6 + Math.sqrt(c.n) * 0.85;
      const [cx, cy] = projectCN(c.lng, c.lat);
      for (let i = 0; i < k; i++) {
        // Polar jitter — uniform in disk
        const r = jitter * Math.sqrt(rng());
        const a = rng() * Math.PI * 2;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r;
        // Vary dot radius slightly for organic feel
        const rad = 0.9 + rng() * 0.6;
        out.push({ x, y, r: rad, op: 0.18 + rng() * 0.18 });
      }
    }
    return out;
  })();

  // 城市中文名（仅用于图上标注，坐标与数字沿用英文版）
  const CN_CITY_NAMES = {
    BJ: '北京', TJ: '天津', SJZ: '石家庄', JN: '济南', QD: '青岛', ZZ: '郑州',
    XA: '西安', LZ: '兰州', NJ: '南京', SH: '上海', HZ: '杭州', HF: '合肥',
    WH: '武汉', CD: '成都', CQ: '重庆', CS: '长沙', NC: '南昌', FZ: '福州',
    GZ: '广州', SZ: '深圳', NN: '南宁', KM: '昆明', GY: '贵阳', HK: '香港',
    TPE: '台北', SY: '沈阳', DL: '大连', HH: '呼和浩特', TY: '太原',
    YC: '银川', XN: '西宁', HK2: '海口',
  };

  function cityCN(code) { return CITIES_CN.find(c => c.code === code); }

  // ----- Component ------------------------------------------------------
  function PhysicianNetworkMapCN() {
    return (
      <section id="network" style={{
        padding: 'clamp(72px, 9vw, 112px) clamp(24px, 6vw, 40px)',
        background: 'var(--bg-1)',
        borderTop: '1px solid var(--border-1)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="netfp-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(32px, 4vw, 64px)',
            alignItems: 'start',
          }}>
            {/* LEFT — copy + 3 inline stats */}
            <div style={{ maxWidth: 480 }}>
              <div style={{
                fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--brand-accent-700, #007995)',
                marginBottom: 14,
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{
                  display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
                  background: 'var(--brand-accent-500)',
                }} />
                网络分布 · 2026 Q1
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 3.6vw, 40px)', fontWeight: 600,
                color: 'var(--brand-primary-700)',
                margin: '0 0 18px',
                letterSpacing: '-0.012em', lineHeight: 1.15,
                textWrap: 'balance',
              }}>
                医生实际执业的地方在哪里
              </h2>
              <p style={{
                fontSize: 16, lineHeight: 1.6,
                color: 'var(--fg-2)',
                margin: '0 0 28px',
              }}>
                333 万+ 注册医生，覆盖全部 31 个省级行政区。密度最高的区域，正是中国三甲医院、监管机构与临床试验中心聚集的地方：京津冀、长三角、珠三角与成渝。
              </p>

              {/* Inline mini-stats */}
              <dl style={{
                margin: 0, padding: 0, display: 'grid',
                gridTemplateColumns: 'auto 1fr', columnGap: 20, rowGap: 14,
              }}>
                <Stat n="333 万+" l="注册医生" />
                <Stat n="2.5 万+" l="三甲医院 KOL" />
                <Stat n="31"      l="覆盖的省级行政区" />
                <Stat n="6"       l="已标注的高密度枢纽" accent />
              </dl>

              <div style={{
                fontSize: 11, color: 'var(--fg-3)',
                fontFamily: 'var(--font-mono, var(--font-ui))',
                letterSpacing: '0.04em', marginTop: 20, lineHeight: 1.55,
              }}>
                来源：梅斯健康内部医生库 · 2026-Q1。各城市数字为展示取整；权威数字在每个项目的 PITL 页脚中审计留痕。
              </div>
            </div>

            {/* RIGHT — SVG visualization */}
            <figure style={{ margin: 0, position: 'relative' }}>
              <NetworkMapSVG />
              <figcaption style={{
                fontSize: 11, color: 'var(--fg-3)',
                fontFamily: 'var(--font-mono, var(--font-ui))',
                letterSpacing: '0.04em', marginTop: 12,
                display: 'flex', flexWrap: 'wrap', gap: 18,
              }}>
                <LegendDot color="var(--brand-accent-500)" label="医生密度" />
                <LegendDot color="var(--brand-accent-500)" label="高密度枢纽" emphasis />
                <LegendDot color="var(--brand-primary-500)" label="枢纽间连线" line />
              </figcaption>
            </figure>
          </div>
        </div>

        <style>{`
          @media (min-width: 900px) {
            #network .netfp-grid {
              grid-template-columns: minmax(320px, 0.9fr) minmax(0, 1.4fr) !important;
            }
          }
        `}</style>
      </section>
    );
  }

  function Stat({ n, l, accent }) {
    return (
      <React.Fragment>
        <dt style={{
          fontFamily: 'var(--font-ui)',
          fontSize: 28, fontWeight: 600,
          color: accent ? 'var(--brand-accent-700, #007995)' : 'var(--brand-primary-700)',
          letterSpacing: '-0.02em', lineHeight: 1.05,
          alignSelf: 'baseline',
        }}>{n}</dt>
        <dd style={{
          margin: 0, fontSize: 13.5, lineHeight: 1.45,
          color: 'var(--fg-2)', alignSelf: 'baseline', paddingTop: 8,
        }}>{l}</dd>
      </React.Fragment>
    );
  }

  function LegendDot({ color, label, outline, line, emphasis }) {
    let glyph;
    if (line) {
      glyph = (
        <svg width="22" height="6" aria-hidden="true">
          <line x1="0" y1="3" x2="22" y2="3" stroke={color} strokeWidth="1" opacity="0.55" />
        </svg>
      );
    } else if (emphasis) {
      // Hub style: filled cyan dot inside a soft halo (matches map markers)
      glyph = (
        <svg width="14" height="14" aria-hidden="true">
          <circle cx="7" cy="7" r="6" fill={color} opacity="0.18" />
          <circle cx="7" cy="7" r="3.2" fill={color} />
        </svg>
      );
    } else {
      glyph = (
        <span aria-hidden="true" style={{
          display: 'inline-block', width: 8, height: 8, borderRadius: '50%',
          background: outline ? 'transparent' : color,
          border: outline ? `1.5px solid ${color}` : 'none',
          opacity: outline ? 1 : 0.55,
        }} />
      );
    }
    return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>{glyph}{label}</span>;
  }

  // ----- Inner SVG ------------------------------------------------------
  function NetworkMapSVG() {
    return (
      <div style={{
        position: 'relative', width: '100%',
        background: 'linear-gradient(180deg, var(--bg-2, #fafbfc) 0%, var(--bg-1) 100%)',
        border: '1px solid var(--border-1)',
        borderRadius: 12, padding: 'clamp(8px, 1.2vw, 16px)',
      }}>
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          width="100%"
          role="img"
          aria-labelledby="netmap-cn-title netmap-cn-desc"
          preserveAspectRatio="xMidYMid meet"
          style={{ display: 'block', overflow: 'hidden' }}
        >
          <title id="netmap-cn-title">梅斯健康医生网络分布图</title>
          <desc id="netmap-cn-desc">
            梅斯健康医生网络在中东部地区的密度分布。集群主要沿东部沿海分布——京津、长三角与珠三角，内陆枢纽包括成都、武汉与西安。西部与东北边缘（新疆、西藏、黑龙江北部）不在画幅内。
          </desc>

          {/* --- subtle graticule (5° grid) --- */}
          <Graticule />

          {/* --- China silhouette: low-opacity navy fill + thin stroke.
                 Hand-simplified, included for shape recognition only. --- */}
          <g aria-hidden="true">
            <path d={polygonPath(CHINA_OUTLINE, projectCN)}
              fill="var(--brand-primary-700)" fillOpacity="0.05"
              stroke="var(--brand-primary-500)" strokeOpacity="0.35" strokeWidth="0.8"
              strokeLinejoin="round" />
            <path d={polygonPath(HAINAN_OUTLINE, projectCN)}
              fill="var(--brand-primary-700)" fillOpacity="0.05"
              stroke="var(--brand-primary-500)" strokeOpacity="0.35" strokeWidth="0.8"
              strokeLinejoin="round" />
            <path d={polygonPath(TAIWAN_OUTLINE, projectCN)}
              fill="var(--brand-primary-700)" fillOpacity="0.05"
              stroke="var(--brand-primary-500)" strokeOpacity="0.35" strokeWidth="0.8"
              strokeLinejoin="round" />
          </g>

          {/* --- density dots --- */}
          <g aria-hidden="true">
            {DENSITY_DOTS.map((d, i) => (
              <circle key={i} cx={d.x} cy={d.y} r={d.r}
                fill="var(--brand-accent-500)" opacity={d.op} />
            ))}
          </g>

          {/* --- intra-China connection lines (top hubs only) --- */}
          <g opacity="0.35" stroke="var(--brand-primary-500)" strokeWidth="0.6" fill="none">
            {CONNECTIONS_CN.map(([a, b], i) => {
              const A = cityCN(a), B = cityCN(b);
              if (!A || !B) return null;
              const [ax, ay] = projectCN(A.lng, A.lat);
              const [bx, by] = projectCN(B.lng, B.lat);
              return <line key={i} x1={ax} y1={ay} x2={bx} y2={by} />;
            })}
          </g>

          {/* --- city hub markers (large, labelled top hubs) --- */}
          <g>
            {CITIES_CN.map((c) => {
              const [x, y] = projectCN(c.lng, c.lat);
              const r = c.emphasis ? 5 : 3;
              return (
                <g key={c.code}>
                  {c.emphasis && (
                    <circle cx={x} cy={y} r={r + 4}
                      fill="var(--brand-accent-500)" opacity="0.18" />
                  )}
                  <circle cx={x} cy={y} r={r}
                    fill={c.emphasis ? 'var(--brand-accent-500)' : 'var(--brand-accent-700, #007995)'}
                    stroke="var(--bg-1)" strokeWidth={c.emphasis ? 1.5 : 0.8} />
                </g>
              );
            })}
          </g>

          {/* --- city labels (only emphasis cities) --- */}
          <g style={{
            fontFamily: 'var(--font-ui), Inter, system-ui, sans-serif',
            fontSize: 11, fontWeight: 600,
            fill: 'var(--brand-primary-700)',
            paintOrder: 'stroke',
            stroke: 'var(--bg-1)',
            strokeWidth: 3,
            strokeLinejoin: 'round',
          }}>
            {CITIES_CN.filter(c => c.label).map((c) => {
              const [x, y] = projectCN(c.lng, c.lat);
              const dx = c.label === 'NE' || c.label === 'SE' ? 9 : -9;
              const dy = c.label === 'NE' || c.label === 'NW' ? -8 : 14;
              const anchor = (c.label === 'NW' || c.label === 'SW') ? 'end' : 'start';
              return (
                <text key={c.code} x={x + dx} y={y + dy} textAnchor={anchor}>{CN_CITY_NAMES[c.code] || c.name}</text>
              );
            })}
          </g>

        </svg>

        {/* Bottom-right viewBox label, anchors the visualization */}
        <div style={{
          position: 'absolute', right: 18, bottom: 14,
          fontFamily: 'var(--font-mono, var(--font-ui))',
          fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>
          等距投影 · 已简化 · 非按比例
        </div>
      </div>
    );
  }

  function Graticule() {
    const lines = [];
    // Vertical (longitude) every 5° within the new zoom (99 → 126°E)
    for (let lng = 100; lng <= 125; lng += 5) {
      const [x] = projectCN(lng, CN_LAT_MIN);
      lines.push(<line key={`v${lng}`} x1={x} y1={0} x2={x} y2={VIEW_H}
        stroke="var(--border-1)" strokeWidth="0.5" opacity="0.4" />);
    }
    // Horizontal (latitude) every 5° within the new zoom (18 → 44°N)
    for (let lat = 20; lat <= 40; lat += 5) {
      const [, y] = projectCN(CN_LNG_MIN, lat);
      lines.push(<line key={`h${lat}`} x1={0} y1={y} x2={VIEW_W} y2={y}
        stroke="var(--border-1)" strokeWidth="0.5" opacity="0.4" />);
    }
    return <g aria-hidden="true">{lines}</g>;
  }

  // ----- Register component on window -----------------------------------
  if (typeof window !== 'undefined') {
    window.PhysicianNetworkMapCN = PhysicianNetworkMapCN;
  }
})();
