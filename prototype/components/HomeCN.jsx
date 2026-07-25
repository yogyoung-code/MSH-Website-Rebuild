/* HomeCN.jsx — 首页中文版 · 第 1 段（Hero / TwoPaths / Services / QuickStart）
   ------------------------------------------------------------------
   与英文版 Hero.jsx + Sections1.jsx + Sections2.jsx 一一对应：
     HeroCN ← Hero        TwoPathsCN ← TwoPaths
     ServicesCN ← Services  QuickStartCN ← QuickStart
   文案为转化层改写，面向中国总部决策人（CEO / CBO / CMO / 医学总监 / 董秘 IR），
   非英文直译。所有数字口径与英文版一致，未新增或修改任何数据主张。
   术语与禁词遵循 docs/i18n-cn-styleguide.md。
   ------------------------------------------------------------------ */

/* 站内链接本地化：中文孪生页存在时自动改指，否则原样返回英文页（不产生死链） */
function _cnL(href) { return (window.MSH && window.MSH.L) ? window.MSH.L(href) : href; }
window._cnL = _cnL;

/* 证据分级标签中文版（英文版在 Button.jsx / EvidenceTrail.jsx 内） */
function EvidenceBadgeCN({ kind = 'verified', children, size = 'md' }) {
  const fs = size === 'sm' ? 10 : 11;
  const map = {
    verified:    { bg: 'var(--success-100)', color: 'var(--success-500)', icon: '✓', label: '已核验' },
    development: { bg: 'var(--warning-100)', color: 'var(--warning-700)', icon: '◐', label: '进行中' },
    request:     { bg: 'var(--neutral-100)', color: 'var(--neutral-700)', icon: '·', label: '索取可得' },
    placeholder: { bg: 'var(--warning-100)', color: 'var(--warning-700)', icon: '⚑', label: '占位' },
  };
  const s = map[kind] || map.verified;
  const padding = size === 'sm' ? '2px 8px' : '4px 10px';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: s.bg, color: s.color,
      padding, borderRadius: 4,
      fontSize: fs, fontWeight: 600, letterSpacing: '0.04em',
      fontFamily: 'var(--font-ui)', lineHeight: 1.4,
    }}>
      <span style={{ fontSize: fs + 1, display: 'inline-flex', alignItems: 'center' }}>{s.icon}</span>
      {children || s.label}
    </span>
  );
}

/* ===================== 1. Hero ===================== */
function HeroCN() {
  return (
    <section id="top" style={{
      background: 'var(--grad-hero)', color: '#fff',
      position: 'relative', overflow: 'hidden',
      padding: '72px clamp(16px, 4vw, 40px) 88px',
    }}>
      <DotSpiralBgCN />
      <div className="two-col-grid" style={{
        maxWidth: 1280, margin: '0 auto', position: 'relative',
        display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 72, alignItems: 'start',
      }}>
        {/* 左栏 */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '5px 12px', borderRadius: 4,
            background: 'rgba(0,174,219,0.14)', color: 'var(--brand-accent-500)',
            fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
            marginBottom: 28, border: '1px solid rgba(0,174,219,0.3)',
          }}>
            <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--brand-accent-500)' }}></span>
            梅斯健康 MedSci Healthcare · 2415.HK
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 600,
            lineHeight: 1.18, letterSpacing: '-0.012em',
            margin: 0, color: '#fff', textWrap: 'balance',
          }}>
            跨境的医学证据与医生资源，一条链路做完
          </h1>
          <p style={{
            fontFamily: 'var(--font-ui)', fontSize: 17, fontWeight: 500,
            color: 'var(--brand-accent-500)',
            marginTop: 24, marginBottom: 0, letterSpacing: '0.02em',
          }}>
            AI 起草 · 医生签核 · 全球可用
          </p>
          <p style={{
            fontSize: 16.5, lineHeight: 1.75, color: 'rgba(255,255,255,0.78)',
            marginTop: 16, maxWidth: 560, fontWeight: 400,
          }}>
            你拿到的是一份证据包：监管机构、审稿人和医保评审 10 分钟内读得完。AI 起草，医生签核。
          </p>
          <p style={{
            fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 20, marginBottom: 0,
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: 'var(--brand-accent-500)', flexShrink: 0 }}></span>
            经核验的医生网络，每周可招募 100–150 份合格医生答卷。
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
            <Button variant="primary-light" style={{ background: '#fff', color: 'var(--brand-primary-700)' }} href={_cnL('/solutions/entering-china.html')}>进入中国</Button>
            <Button variant="outline-light" href={_cnL('/solutions/going-global-us.html')}>出海全球</Button>
            <Button variant="ghost" style={{ color: 'rgba(255,255,255,0.85)' }} icon={true} href={_cnL('/contact.html')}>联系我们的专家</Button>
          </div>
        </div>

        {/* 右栏 — 我们交付什么 */}
        <div className="hero-right-services" style={{ marginTop: 60 }}>
          <WhatWeDeliverCardCN />
        </div>
      </div>
    </section>
  );
}

function WhatWeDeliverCardCN() {
  const items = [
    { num: '01', label: '证据',     title: '医学证据',           deliverables: '真实世界研究 · 登记研究 · 文献 · 卫生经济学', href: '/solutions/medical-evidence.html' },
    { num: '02', label: '医生',     title: '医生互动',           deliverables: '333 万+ 医生网络 · 顾问会 · KOL · CME', href: '/solutions/physician-engagement.html' },
    { num: '03', label: '传播',     title: '医学传播',           deliverables: '论文发表 · 学术大会 · 本地化', href: '/solutions/medical-communications.html' },
    { num: '04', label: '数据与统计', title: '生物统计与数据管理', deliverables: 'CDISC · EDC · 统计分析计划 · TFLs', href: '/solutions/biostatistics-data-management.html', isNew: true },
    { num: '05', label: '平台',     title: 'AI 赋能平台',        deliverables: 'AI 起草 · 医生在环 · 质控 · 溯源链路', href: '/ai-platform.html', accent: true },
    { num: '06', label: '最快起步', title: '医生调研',           deliverables: 'HCP 问卷 · ATU · 数日内上线', href: '/solutions/physician-research.html', isNew: true },
  ];
  const [hoverIdx, setHoverIdx] = React.useState(null);
  return (
    <div style={{
      background: 'var(--brand-primary-900)',
      border: '1px solid rgba(255,255,255,0.16)',
      borderRadius: 16, padding: 6,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 22px 14px',
      }}>
        <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.65)' }}>
          我们交付什么
        </span>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '3px 9px', borderRadius: 4,
          background: 'rgba(0,174,219,0.18)', color: 'var(--brand-accent-500)',
          fontSize: 10.5, fontWeight: 600, letterSpacing: '0.12em',
        }}>
          5 大模块
        </span>
      </div>
      <div>
        {items.map((it, i) => (
          <React.Fragment key={it.num}>
            {it.isNew && (
              <div style={{ margin: '0 22px', borderTop: '1px solid rgba(0,174,219,0.25)' }}></div>
            )}
            <a href={_cnL(it.href)}
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
                  color: (it.accent || it.isNew) ? 'var(--brand-accent-500)' : 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.1em', marginBottom: 6,
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <span>{it.isNew ? '↗' : it.num} · {it.label}</span>
                  {it.isNew && <span style={{
                    padding: '1px 6px', borderRadius: 3, fontSize: 9.5, fontWeight: 700,
                    background: 'rgba(0,174,219,0.22)', color: 'var(--brand-accent-500)',
                    letterSpacing: '0.08em',
                  }}>NEW</span>}
                </div>
                <div style={{
                  fontFamily: 'var(--font-ui)', fontSize: it.isNew ? 16 : 17, fontWeight: 600,
                  color: hoverIdx === i ? 'var(--brand-accent-500)' : '#fff',
                  letterSpacing: '0.005em', marginBottom: 4,
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
    </div>
  );
}

function DotSpiralBgCN() {
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

/* ===================== 2. 两条战略路径 ===================== */
function TwoPathsCN() {
  const paths = [
    {
      dir: '进入中国',
      sub: '面向要落地中国大陆的境外创新企业',
      body: 'NMPA 路径策略、医生顾问会、本地化内容与卫生经济学。从文献到申报，再到医保评审，同一条链路走完。',
      bullets: ['NMPA / CDE 申报资料支持', '医生顾问会', '医保准入证据', '中英双语本地化内容'],
      cta: '了解「进入中国」',
      theme: 'navy',
    },
    {
      dir: '出海美国 / 全球',
      sub: '面向准备美国与全球上市的中国创新企业',
      body: 'FDA 口径的证据、可过 IRB 的方案、美国 KOL 互动与论文发表。这条路是修给看不懂中文的审评员和审稿人的。',
      bullets: ['FDA 指南对照', '可过 IRB 的方案支持', '美国 KOL 与顾问会', '论文发表与学术大会'],
      cta: '了解「出海全球」',
      theme: 'cyan',
    },
  ];
  return (
    <section id="paths" style={{ padding: '96px clamp(16px, 4vw, 40px)', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <SectionEyebrow>两条战略路径 · 同等投入</SectionEyebrow>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 42, fontWeight: 600,
            color: 'var(--brand-primary-700)', margin: '0 auto', letterSpacing: '-0.012em', lineHeight: 1.25,
            maxWidth: 760,
          }}>
            一家公司，两个方向，不偏袒任何一边
          </h2>
        </div>
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {paths.map(p => <PathCardCN key={p.dir} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function PathCardCN({ p }) {
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
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', color: 'var(--fg-3)' }}>
            {isNavy ? '路径 01' : '路径 02'}
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600,
            color: 'var(--brand-primary-700)', margin: 0, letterSpacing: '-0.008em',
          }}>{p.dir}</h3>
        </div>
      </div>
      <p style={{ fontSize: 13.5, fontWeight: 500, color: isNavy ? 'var(--brand-primary-700)' : 'var(--brand-accent-700)', margin: '0 0 16px', letterSpacing: '0.01em' }}>
        {p.sub}
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--fg-2)', margin: '0 0 24px' }}>{p.body}</p>
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
      <Button variant={isNavy ? 'primary' : 'primary-light'} href={_cnL(isNavy ? '/solutions/entering-china.html' : '/solutions/going-global-us.html')}>{p.cta}</Button>
    </div>
  );
}

/* ===================== 3. 服务 · 我们交付什么 ===================== */
function ServicesCN() {
  const services = [
    {
      num: '01', label: '证据',
      title: '医学证据',
      desc: '结构化的真实世界研究、登记研究分析、文献综述与卫生经济学。每一条主张都带年份、来源和签核人。',
      deliverables: ['真实世界研究（RWE）', '登记研究设计与分析', '系统性文献综述', '卫生经济学建模'],
      icon: 'file-search',
      href: '/solutions/medical-evidence.html',
      badge: 'verified',
    },
    {
      num: '02', label: '医生',
      title: '医生互动',
      desc: '333 万+ 医生网络，用于调研、顾问会、KOL 图谱、继续医学教育，以及能把具名临床专家写进记录的知情同意审核组。',
      deliverables: ['医生调研 · HCP 问卷', '顾问会 · 单次与常设', 'KOL 图谱与互动', 'CME 项目 · 审核组'],
      icon: 'stethoscope',
      href: '/solutions/physician-engagement.html',
      badge: 'verified',
    },
    {
      num: '03', label: '传播',
      title: '医学传播',
      desc: '论文发表、大会材料、本地化内容，以及一个全球传播部。双语交付，合规口径，两个市场都有医生签核。',
      deliverables: ['同行评议论文', '大会壁报与卫星会', '中英双语本地化', '全球传播部 · 媒体与公关'],
      icon: 'book-open-text',
      href: '/solutions/medical-communications.html',
      badge: 'verified',
    },
    {
      num: '04', label: '数据与统计',
      title: '生物统计与数据管理',
      desc: '统计编程、临床数据管理与生物统计。对齐 CDISC，双人独立编程，按 FDA 与 NMPA 的申报口径交付。',
      deliverables: ['统计编程 · SDTM / ADaM / TFLs', '临床数据管理 · EDC 到锁库', '生物统计 · 设计 · SAP · DMC', 'AI 赋能与真实世界数据服务'],
      icon: 'bar-chart-3',
      href: '/solutions/biostatistics-data-management.html',
      badge: 'verified',
    },
    {
      num: '05', label: '平台',
      title: 'AI 赋能平台',
      desc: '底下那条流水线：带检索的 AI 起草、医生在环工作流、可审计的溯源链路。',
      deliverables: ['查看完整的 AI 平台页面 →'],
      icon: 'cpu',
      href: '/ai-platform.html',
      accent: true,
      compact: true,
    },
  ];
  return (
    <section id="services" style={{ padding: '96px clamp(16px, 4vw, 40px)', background: 'var(--grad-wash)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}>
          <div style={{ maxWidth: 680 }}>
            <SectionEyebrow>服务 · 我们交付什么</SectionEyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 42, fontWeight: 600,
              color: 'var(--brand-primary-700)', margin: 0, letterSpacing: '-0.012em', lineHeight: 1.25,
            }}>
              五大业务模块，一套证据标准
            </h2>
          </div>
          <p style={{ maxWidth: 360, fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.8, margin: 0 }}>
            四条交付线，加上它们共用的 AI 平台。按路径自由组合——进入中国，或者出海全球。
          </p>
        </div>
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {services.map(s => <ServiceCardCN key={s.num} s={s} />)}
        </div>
      </div>
    </section>
  );
}

function ServiceCardCN({ s }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={_cnL(s.href)}
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
            letterSpacing: '0.1em',
          }}>
            {s.num} · {s.label}
          </div>
          <h3 style={{
            fontFamily: 'var(--font-ui)', fontSize: 22, fontWeight: 600,
            color: s.accent ? '#fff' : 'var(--brand-primary-700)', margin: '4px 0 0', letterSpacing: '0.005em',
          }}>{s.title}</h3>
        </div>
      </div>
      <p style={{
        fontSize: 14.5, color: s.accent ? 'rgba(255,255,255,0.75)' : 'var(--fg-2)',
        lineHeight: 1.8, margin: '0 0 20px', position: 'relative',
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
          <EvidenceBadgeCN kind={s.badge} size="sm" />
          <span style={{ color: 'var(--brand-primary-500)', fontSize: 13, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            查看模块 <span style={{ transform: hover ? 'translateX(4px)' : 'none', transition: 'transform 200ms' }}>→</span>
          </span>
        </div>
      )}
    </a>
  );
}

/* ===================== 4. 快速起步 ===================== */
function QuickStartCN() {
  const offers = [
    // 首行 — 承诺最轻、交付最快
    {
      tag: '快速审核',
      title: '医学与合规内容审核',
      desc: '把你现有的材料发过来，3–5 个工作日返回带合规标注的审核意见，每条问题附改写建议。',
      included: ['按风险分级的批注（严重 / 建议 / 文字）', '每条问题附改写建议', '具名审核人签核'],
      price: '⚑ 一口价 — 报价请联系我们',
      cta: '提交材料',
      variant: 'outline',
      accent: false,
      href: '/solutions/content-review.html',
    },
    {
      tag: '快速入口',
      title: '跨境内容冲刺',
      desc: '2 周交付 1 份经医学审核的中英双语材料。跟我们一起产出新内容，这是承诺最轻的方式。',
      included: ['1 份材料，中英双语', '医生质控签核', '附溯源链路'],
      price: '⚑ 一口价 — 报价请联系我们',
      cta: '启动一次冲刺',
      variant: 'outline',
      accent: false,
      href: '/solutions/cross-border-medical-content-sprint.html',
    },
    // 次行 — 更深入的试点与研究
    {
      tag: '30 天试点',
      title: '中国证据冲刺',
      desc: '边界清晰的 30 天合作，用 NMPA 的口径把你的证据包压力测试一遍。',
      included: ['对齐 NMPA 的差距扫描', '5 人医生顾问组', '本地化摘要材料'],
      price: '⚑ 报价请联系我们',
      cta: '预约试点',
      variant: 'primary',
      accent: false,
      href: '/pilots/china-evidence-sprint.html',
    },
    {
      tag: '敏捷研究',
      title: '医生调研（HCP 问卷）',
      desc: '在 333 万+ 经核验的中国医生网络里投放一次边界清晰的问卷：ATU、认知、治疗行为，或者信息测试。',
      included: ['约 200 位医生，线上定量，2–3 周', '每周招募 100–150 份合格答卷', '数据与洞察报告，医生签核'],
      price: '⚑ 按项目定范围 — 报价请联系我们',
      cta: '定一个研究范围',
      variant: 'primary-light',
      accent: true,
      href: '/solutions/physician-research.html',
    },
  ];
  return (
    <section id="pilots" style={{ padding: '96px clamp(16px, 4vw, 40px)', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}>
          <div style={{ maxWidth: 680 }}>
            <SectionEyebrow color="var(--brand-primary-500)">快速起步 · 无需先做长期承诺</SectionEyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 42, fontWeight: 600,
              color: 'var(--brand-primary-700)', margin: 0, letterSpacing: '-0.012em', lineHeight: 1.25,
            }}>
              先做小的。先定范围，再谈合作
            </h2>
          </div>
          <p style={{ maxWidth: 360, fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.8, margin: 0 }}>
            四个边界清晰的入口：从 3 天的内容审核，到 30 天试点。每一个都划好了范围，方便你的团队在正式合作前先评估我们。
          </p>
        </div>
        <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '0.1em', color: 'var(--brand-accent-700)', marginBottom: 12 }}>
          立刻开始 — 按天计，不按周计
        </div>
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 32 }}>
          {offers.slice(0, 2).map((o, i) => <OfferCardCN key={o.title} o={o} idx={i} />)}
        </div>
        <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '0.1em', color: 'var(--brand-primary-500)', marginBottom: 12 }}>
          更深入 — 边界清晰的试点与研究
        </div>
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {offers.slice(2, 4).map((o, i) => <OfferCardCN key={o.title} o={o} idx={i + 2} />)}
        </div>
      </div>
    </section>
  );
}

function OfferCardCN({ o, idx }) {
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
          fontSize: 10.5, fontWeight: 600, letterSpacing: '0.1em',
        }}>{o.tag}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', marginLeft: 'auto' }}>
          0{idx + 1}
        </span>
      </div>
      <h3 style={{
        fontFamily: 'var(--font-ui)', fontSize: 22, fontWeight: 600,
        color: 'var(--brand-primary-700)', margin: '0 0 12px', letterSpacing: '0.005em',
      }}>{o.title}</h3>
      <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.8, margin: '0 0 20px' }}>{o.desc}</p>
      <div style={{ borderTop: '1px dashed var(--border-1)', paddingTop: 16, marginBottom: 20 }}>
        <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '0.12em', color: 'var(--fg-3)', marginBottom: 10 }}>包含</div>
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
        <Button variant={o.variant} href={_cnL(o.href)}>{o.cta}</Button>
      </div>
    </div>
  );
}

window.EvidenceBadgeCN = EvidenceBadgeCN;
window.HeroCN = HeroCN;
window.TwoPathsCN = TwoPathsCN;
window.ServicesCN = ServicesCN;
window.QuickStartCN = QuickStartCN;
