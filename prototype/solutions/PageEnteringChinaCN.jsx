/* PageEnteringChinaCN.jsx — 进入中国（中文版）。
   转化层文案：面向跨国药械企业的中国区负责人，以及要在中国落地证据的团队。非 EN 页直译。
   结构与 PageEnteringChina.jsx 一一对应（同样的 section 顺序与 id），便于双语同步维护。 */

const ENTERING_CHINA_CN_META = {
  eyebrow: '战略路径 · 01',
  title: '在中国拿到 NMPA 级证据，和中国医生的具名签核。',
  sub: '面向准备或加速 NMPA 递交、医保准入、医生侧上市的中国区团队。从文献到材料包再到顾问会，一条线做完，一条溯源链路可查。',
  breadcrumb: [
    { label: '首页', href: '/' },
    { label: '解决方案', href: '/' },
    { label: '进入中国', href: '#' },
  ],
  theme: 'navy',
  meta: [
    { k: '适用', v: '美国、欧盟、日本的医械、药企与诊断企业' },
    { k: '路径', v: 'NMPA / CDE · 医保准入 · 医生侧上市' },
    { k: '周期', v: '12–32 周 · 按项目定范围' },
    { k: '语言', v: '英文 + 简体中文 · 双医生质控' },
  ],
  ctaTitle: '把你的材料给我们。30 天对着 NMPA 逐条走一遍。',
  ctaBody: '边界清晰的中国证据冲刺：5 位医生评审、对齐 NMPA 的缺口扫描、一份本地化摘要材料。报价请联系我们。',
  primaryCta: '预约中国证据冲刺',
  secondaryCta: '查看中国方向的客户案例',
};

function PageEnteringChinaCN() {
  const subnav = [
    { id: 'overview',     label: '概览' },
    { id: 'who-its-for',  label: '适用对象' },
    { id: 'approach',     label: '做法' },
    { id: 'deliverables', label: '交付物' },
    { id: 'timeline',     label: '时间表' },
    { id: 'proof',        label: '实证' },
    { id: 'pilot',        label: '试点' },
  ];

  const personas = [
    { tag: '医械',   title: '美国 II–III 类器械厂商',   body: '已在美国或欧盟获批，正在评估 NMPA 路径、双线证据，以及三甲医院的 KOL 基础。', icon: 'cpu' },
    { tag: '药企',   title: '跨国药企的后期资产',       body: '要把 III 期材料桥接进中国，但没有全资本地实体——需要医生顾问与卫生经济学。', icon: 'pill' },
    { tag: '诊断',   title: 'IVD 与伴随诊断',           body: 'NMPA 三类 IVD、走医保路径的伴随诊断，以及覆盖三甲与二级医院的登记研究策略。', icon: 'flask-conical' },
  ];

  const approachSteps = [
    { n: '01', t: '路径扫描',     d: '把资产对到正确的 NMPA / CDE 路径上。对照现行指南与近期同类获批案例逐条核。' },
    { n: '02', t: '证据搭建',     d: '本地化文献综述、登记研究可行性、卫生经济学——每条主张都带出处与年份。' },
    { n: '03', t: '医生评审会',   d: '5–9 位中国 KOL 组成知情同意的顾问团，评审全套材料，并对医学叙述签核。' },
    { n: '04', t: '材料包与上市', d: '可递交材料包、双语摘要材料、医保定位，以及医生侧的推广计划。' },
  ];

  const deliverables = [
    {
      icon: 'file-search', title: 'NMPA / CDE 材料包支持',
      body: '按 CDE 现行指南组织的递交材料包，附结构化缺口报告、应答模板与审评就绪检查。',
      bullets: ['对照 CDE 指南的缺口分析', '应答模板库', '本地化临床摘要', '审评问答准备'],
    },
    {
      icon: 'stethoscope', title: '中国医生顾问与 KOL',
      body: '常设或单次顾问会、覆盖三甲学术医疗中心的 KOL 图谱，以及知情同意的评审团。',
      bullets: ['三甲 KOL 图谱', '常设与临时顾问会', '知情同意评审团', '具名临床医生签核'],
    },
    {
      icon: 'banknote', title: '医保准入证据（卫生经济学）',
      body: '面向省级医保目录谈判、DRG 环境与商业支付方场景调校的卫生经济学建模与价值材料。',
      bullets: ['成本效果模型', '预算影响分析', '国家医保目录（NRDL）价值材料', '省级价格扫描'],
    },
    {
      icon: 'languages', title: '本地化双语内容',
      body: '可递交级的中英互译，带术语一致性层、双医生质控，以及签核过的溯源链路。',
      bullets: ['中 ↔ 英科学翻译', '术语一致性层', '双医生质控', '合规视角审核'],
    },
  ];

  const phases = [
    { weeks: '0–2',   title: '范围与缺口扫描', body: '路径诊断、证据盘点，以及横跨注册、临床与医保三条轴、按优先级排序的缺口矩阵。', deliverable: '缺口矩阵 v1' },
    { weeks: '2–8',   title: '证据组装',       body: '文献、登记研究可行性与卫生经济学初稿——AI 辅助检索，医生评审综述。', deliverable: '证据材料包初稿' },
    { weeks: '6–14',  title: '医生评审会',     body: '5–9 位具名中国 KOL 组成知情同意评审团，评审材料、提出异议，并对医学叙述签字。', deliverable: '签核的评审报告' },
    { weeks: '12–24', title: '材料包与推广',   body: '可递交材料包、本地化医生沟通材料、医保定位，以及医生侧上市材料。', deliverable: '递交材料包' },
  ];

  const stats = [
    { n: '11',   u: '周', l: '2025 年队列 NMPA 递交周期中位数',   note: 'n = 7 个项目' },
    { n: '5–9',  u: '',   l: '每份材料包的具名医生评审人数',       note: '常设 + 临时' },
    { n: '0',    u: '',   l: '2025 年首次 NMPA 递交收到的 RFI 数', note: '肿瘤器械案例' },
    { n: '96',   u: '%',  l: '双语交付物一次通过质控签核率',       note: '2025 审计' },
  ];

  return (
    <div>
      <SolutionPageHeader pageMeta={ENTERING_CHINA_CN_META} />
      <SolutionSubNav items={subnav} theme="navy" />

      <CountryCompareCN
        eyebrow="跨境路径"
        title="资产跨越太平洋时，会变的是什么。"
        lede="每个进入中国的项目都从同一件事开始：把你现有的美国 / 欧盟 / 日本材料摊开，看哪些能直接带过来，哪些必须在中国境内重新做一遍。"
        direction="us-to-cn"
        left={{
          code: 'US / EU / JP',
          label: '美国 / 欧盟 / 日本',
          regulator: 'FDA · CDER / CDRH（或同等机构）',
          timeline: '6–18 个月材料准备',
          reviewerLanguage: '英文',
          constraints: [
            'IRB 可提交方案',
            'CDISC 口径的对照组构建',
            '西方真实世界研究登记库（Sentinel、PCORnet）'
          ]
        }}
        right={{
          code: 'CN',
          label: '中国（大陆）',
          regulator: 'NMPA · CDE',
          timeline: '11 周中位数（2025 年队列）',
          reviewerLanguage: '中文 · 简体中文',
          constraints: [
            '三甲医院医生签核',
            '中国真实世界研究适用个人信息保护法（PIPL）数据本地化',
            '国家医保目录 / DRG 价值材料'
          ]
        }}
      />

      {/* Overview */}
      <SolutionSection
        id="overview" eyebrow="概览 · 为什么走这条路"
        title="从文献到 NMPA，一条线，由中国医生签核。"
        kicker="跨境证据通常断在三处：翻译、审评交接、顾问会。我们用一个团队、一条溯源链路、具名医生签核，把这三处提前堵上。"
        bg="#fff"
      >
        <div className="two-col-grid" style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 32,
          background: 'var(--bg-2)', border: '1px solid var(--border-1)',
          borderRadius: 16, padding: 40,
        }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-ui)', fontSize: 19, fontWeight: 600,
              color: 'var(--brand-primary-700)', margin: '0 0 14px',
            }}>关于中国这条路，我们的判断。</h3>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.65, margin: '0 0 14px' }}>
              NMPA 审评在变快、变挑剔，也更看得懂数据。一份美国级材料翻成中文，本身已经不够。能过的是本地证据、本地临床医生签字，并且对上最新指南。
            </p>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.65, margin: 0 }}>
              我们由医生主导，用 AI 加速，在监管节奏之内做事，不在节奏之外。
            </p>
          </div>
          <div style={{
            background: '#fff', border: '1px solid var(--border-1)',
            borderRadius: 12, padding: 22,
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10.5,
              color: 'var(--fg-3)', letterSpacing: '0.12em',
              marginBottom: 14,
            }}>我们不做什么</div>
            {[
              '游说审评人，或提前协商结果。',
              '承诺一个固定的获批时间表。',
              '在没有具名临床医生的情况下给证据签字。',
              '跳过医生质控直接交译文。',
            ].map((x, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'start', gap: 10,
                fontSize: 13, color: 'var(--fg-1)', marginBottom: 10, lineHeight: 1.45,
              }}>
                <span style={{ color: 'var(--error-500)', flexShrink: 0, marginTop: 1 }}>
                  <i data-lucide="x" width="14" height="14"></i>
                </span>
                {x}
              </div>
            ))}
          </div>
        </div>
      </SolutionSection>

      {/* Who it's for */}
      <SolutionSection
        id="who-its-for" eyebrow="适用对象"
        title="我们最常合作的三类企业。"
        kicker="如果你的资产已经拿到美国 / 欧盟批准，但还没有一套跑得起来的中国商业化计划，我们通常能把路径压缩 3–6 个月。"
        bg="var(--bg-2)"
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {personas.map((p, i) => (
            <div key={i} style={{
              background: '#fff', border: '1px solid var(--border-1)',
              borderRadius: 12, padding: 28, display: 'flex', flexDirection: 'column',
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 10,
                background: 'var(--brand-primary-100)', color: 'var(--brand-primary-700)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 18,
              }}>
                <i data-lucide={p.icon} width="20" height="20"></i>
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 10.5,
                color: 'var(--brand-accent-700)', letterSpacing: '0.14em',
                marginBottom: 6,
              }}>{p.tag}</span>
              <h4 style={{
                fontFamily: 'var(--font-ui)', fontSize: 18, fontWeight: 600,
                color: 'var(--brand-primary-700)', margin: '0 0 12px', letterSpacing: '-0.005em',
              }}>{p.title}</h4>
              <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      {/* Approach */}
      <SolutionSection
        id="approach" eyebrow="做法 · 4 步"
        title="一条流水线。四步。每一道口都有医生签核。"
        kicker="和其他项目跑的是同一条流水线，只是按 NMPA 节奏与中文审评习惯做了调校。"
        bg="#fff"
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--border-1)', borderRadius: 16, overflow: 'hidden' }}>
          {approachSteps.map((s, i) => (
            <div key={s.n} style={{
              padding: 28, borderLeft: i === 0 ? 'none' : '1px solid var(--border-1)',
              background: i === 2 ? 'var(--brand-primary-100)' : '#fff',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10.5,
                color: i === 2 ? 'var(--brand-primary-700)' : 'var(--brand-accent-700)',
                letterSpacing: '0.14em', marginBottom: 12, fontWeight: 600,
              }}>
                {s.n} · {i === 2 ? '医生把关' : 'AI 辅助'}
              </div>
              <h4 style={{
                fontFamily: 'var(--font-ui)', fontSize: 17, fontWeight: 600,
                color: 'var(--brand-primary-700)', margin: '0 0 10px', letterSpacing: '-0.005em',
              }}>{s.t}</h4>
              <p style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      {/* Deliverables */}
      <SolutionSection
        id="deliverables" eyebrow="交付物 · 4 个模块"
        title="交付什么、医生在哪一步签字、审计留痕长什么样。"
        bg="var(--bg-2)"
      >
        <DeliverablesGrid items={deliverables} theme="navy" />
      </SolutionSection>

      {/* Timeline */}
      <SolutionSection
        id="timeline" eyebrow="项目时间表"
        title="一个完整的进入中国项目，从头到尾。"
        kicker="多数项目跑 14–24 周。如果你只需要缺口扫描，我们可以立一个更短的试点。"
        bg="#fff"
      >
        <PhaseTimeline phases={phases} theme="navy" />
      </SolutionSection>

      {/* Proof */}
      <SolutionSection
        id="proof" eyebrow="实证 · 2025 年队列"
        title="这些数字，我们能拿出签核过的来源。"
        bg="var(--bg-2)"
      >
        <SolutionStatStrip stats={stats} theme="navy" />
        <div style={{ marginTop: 20, fontSize: 11.5, color: 'var(--fg-3)', lineHeight: 1.5 }}>
          来源：梅斯健康项目审计，2025 年。NMPA 结果因治疗领域、资产类别与材料完整度而异——过往结果不预示未来的批准。
        </div>
      </SolutionSection>

      {/* Pilot */}
      <SolutionSection
        id="pilot" eyebrow="试点 · 低承诺入口"
        title="30 天中国证据冲刺。"
        kicker="一次边界清晰的合作：把你的证据包对着 NMPA 现行预期压力测试一遍——在双方投入完整项目之前。"
        bg="#fff"
      >
        <div className="two-col-grid" style={{
          background: 'var(--grad-wash)', border: '1px solid var(--brand-primary-300)',
          borderRadius: 16, padding: 40,
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40,
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '4px 10px', borderRadius: 4,
              background: 'var(--brand-primary-700)', color: '#fff',
              fontSize: 10.5, fontWeight: 600, letterSpacing: '0.14em',
              marginBottom: 16,
            }}>30 天试点 · 报价请联系我们</div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 600,
              color: 'var(--brand-primary-700)', margin: '0 0 16px', letterSpacing: '-0.01em', lineHeight: 1.2,
            }}>中国证据冲刺</h3>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.65, margin: '0 0 24px' }}>
              我们拿你现有的证据包，对着 NMPA / CDE 现行指南跑一遍——找出真正会拖慢你递交的那三四个缺口。你拿到的是一份本地化摘要材料，和一个明确的 go / no-go。
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <Button variant="primary">预约试点</Button>
              <Button variant="outline">下载简介</Button>
            </div>
          </div>
          <div style={{
            background: '#fff', border: '1px solid var(--border-1)',
            borderRadius: 12, padding: 24,
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10.5,
              color: 'var(--fg-3)', letterSpacing: '0.12em',
              marginBottom: 14,
            }}>试点包含 · 30 天</div>
            {[
              '对照现行指南的 NMPA 缺口扫描',
              '5 位医生组成的顾问团评审',
              '本地化双语摘要材料',
              '按优先级排序的 go / no-go 建议',
              '每条主张都有签核的溯源链路',
            ].map((x, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'start', gap: 10,
                fontSize: 13.5, color: 'var(--fg-1)', marginBottom: 12, lineHeight: 1.5,
              }}>
                <span style={{ color: 'var(--brand-primary-500)', flexShrink: 0, marginTop: 1 }}>
                  <i data-lucide="check" width="14" height="14"></i>
                </span>
                {x}
              </div>
            ))}
            <div style={{
              marginTop: 14, paddingTop: 14, borderTop: '1px dashed var(--border-1)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <EvidenceBadge kind="verified" size="sm">已核验</EvidenceBadge>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)' }}>
                2025 年已完成 12 次冲刺
              </span>
            </div>
          </div>
        </div>
      </SolutionSection>

      <ContentReviewCrossSell />
      <SolutionCTA pageMeta={ENTERING_CHINA_CN_META} />
      <RelatedSolutions current="entering-china" />
      <SolutionFooter />
    </div>
  );
}

window.PageEnteringChinaCN = PageEnteringChinaCN;
