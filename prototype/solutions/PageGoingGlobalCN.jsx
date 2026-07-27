/* PageGoingGlobalCN.jsx — 出海美国 / 全球（中文版）。
   转化层文案：面向中国总部决策人（CEO / CBO / CMO / 医学总监 / 董秘 IR），非 EN 页直译。
   结构与 PageGoingGlobal.jsx 一一对应（同样的 section 顺序与 id），便于双语同步维护。 */

const GOING_GLOBAL_CN_META = {
  eyebrow: '战略路径 · 02',
  title: '做出 FDA 认的证据，拿到美国医生的具名签核。',
  sub: '你的数据在中国生成，看材料的人在美国、不读中文。我们按 FDA 现行指南把这套材料重做一遍，并配一支具名的美国 KOL 团队。适用于准备美国 / 全球上市的中国医械、药企与诊断企业。',
  breadcrumb: [
    { label: '首页', href: '/' },
    { label: '解决方案', href: '/' },
    { label: '出海美国 / 全球', href: '#' },
  ],
  theme: 'cyan',
  meta: [
    { k: '适用', v: '中国医械、药企、诊断、AI / SaMD 企业' },
    { k: '路径', v: 'FDA · IRB · 美国 KOL · 论文发表' },
    { k: '周期', v: '16–36 周 · 按项目定范围' },
    { k: '语言', v: '中 ↔ 英 · 美国医生质控 · 监管级英文' },
  ],
  ctaTitle: '把你的材料给我们。30 天出一份 FDA 缺口诊断。',
  ctaBody: '边界清晰的 FDA 证据缺口诊断：指南逐条对照、登记数据审计、按优先级排序的缺口报告。报价请联系我们。',
  primaryCta: '预约 FDA 证据诊断',
  secondaryCta: '查看美国方向的客户案例',
};

function PageGoingGlobalCN() {
  const _L = (h) => (window.MSH ? window.MSH.L(h) : h);

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
    { tag: '医械',       title: '中国创新企业 · 510(k) / De Novo 路径', body: 'II–III 类器械，在中国已有扎实的临床基础，正在评估 510(k)、De Novo 或 PMA，并需要一支美国 KOL 团队。', icon: 'cpu' },
    { tag: '药企',       title: '后期资产 · IND / NDA', body: 'II / III 期资产，已有 NMPA 级证据，要做 IND-ready 材料包、美国主要研究者与中心网络，以及论文发表计划。', icon: 'pill' },
    { tag: 'AI / SaMD',  title: '算法与 SaMD 产品', body: 'AI 诊断或 SaMD 正在评估 FDA 路径——需要美国登记研究策略与上市后计划。', icon: 'brain-circuit' },
  ];

  const approachSteps = [
    { n: '01', t: '指南逐条对照',  d: '把资产对到 FDA 现行指南上——器械、药品、SaMD 或伴随诊断——标出哪些中国数据能桥接过去，哪些不能。' },
    { n: '02', t: '证据桥接',      d: 'AI 辅助检索中国与全球文献；把登记研究与试验数据结构化桥接成 FDA 读得懂的格式。' },
    { n: '03', t: '美国 KOL 评审', d: '一支知情同意的美国 KOL 团队用英文评审全套材料，改写医学叙述，并对关键主张具名签核。' },
    { n: '04', t: '递交与传播',    d: 'IND / 510(k) / De Novo 材料包、IRB 可提交方案、论文发表计划、美国大会材料，全部为监管级英文。' },
  ];

  const deliverables = [
    {
      icon: 'file-search', title: 'FDA 材料包与指南对照',
      body: '按 FDA 现行指南组织的 IND、510(k)、De Novo 或 PMA 材料包，附结构化缺口报告与审评就绪检查。',
      bullets: ['指南逐条对照', '桥接策略报告', 'Pre-Sub / Q-Sub 支持', 'RFI 应答模板库'],
    },
    {
      icon: 'clipboard-check', title: 'IRB 可提交方案与登记研究支持',
      body: 'IRB 级方案撰写、美国登记研究可行性评估，以及按 FDA 审评预期调校的统计分析计划。',
      bullets: ['方案与统计分析计划撰写', 'IRB 材料包准备', '美国登记研究可行性', '终点指标对照'],
    },
    {
      icon: 'users', title: '美国 KOL 与顾问团队',
      body: '覆盖美国学术医疗中心的知情同意 KOL 团队——用于顾问会、具名研究者，以及审评级叙述的签核。',
      bullets: ['美国 KOL 图谱', '常设顾问委员会', '研究者网络', '具名临床医生签核'],
    },
    {
      icon: 'book-open-text', title: '论文发表与美国学术大会',
      body: '同行评议发表策略、大会壁报与卫星会，以及与美国里程碑节点对齐的双语媒体材料。',
      bullets: ['发表策略', '论文撰写', '大会壁报 / 卫星会', '美国媒体定位'],
    },
    {
      icon: 'megaphone', title: '全球传播部（GCO）', tag: 'NEW', featured: true,
      body: '交易或获批之后，是声音的问题：一个先搭建、再代运营的传播职能——行业媒体关系、自有渠道代运营、学术大会声量放大、声量（share of voice）度量，以及 AI 如何转述你的持续监测与事实性更正。',
      bullets: ['30 天声量审计', 'Newsroom 搭建 · 8–12 周', '媒体与 KOL 声音代运营', '里程碑与危机传播', 'AI 答案监测与更正'],
      href: _L('/solutions/global-communications-office.html'),
      hrefLabel: '了解全球传播部',
    },
  ];

  const phases = [
    { weeks: '0–2',   title: '诊断与缺口',   body: '指南逐条对照、可桥接数据盘点，以及一份按优先级排序的 FDA 缺口报告。', deliverable: 'FDA 缺口报告' },
    { weeks: '2–10',  title: '桥接与搭建',   body: '桥接分析、英文科学综述、IRB 可提交方案撰写——全程有医生评审。', deliverable: '桥接材料包' },
    { weeks: '8–18',  title: '美国 KOL 评审', body: '知情同意的美国 KOL 团队评审全套材料，用英文改写医学叙述并签核。', deliverable: '签核的 KOL 报告' },
    { weeks: '14–28', title: '递交与传播',   body: 'IND / 510(k) / De Novo 材料包、进行中的发表计划，以及美国大会材料。', deliverable: 'FDA 可递交材料包' },
  ];

  const stats = [
    { n: '42 → 18', u: '天', l: '2025 年监管方响应周期中位数', note: '汇总口径，n = 9' },
    { n: '7',       u: '',   l: '每个项目平均美国 KOL 顾问人数', note: '知情同意团队' },
    { n: '11',      u: '',   l: '2025 年队列在写论文数',        note: '同行评议' },
    { n: '0',       u: '',   l: '不可溯源主张的发现数',          note: '2025 审计' },
  ];

  return (
    <div>
      <SolutionPageHeader pageMeta={GOING_GLOBAL_CN_META} />
      <SolutionSubNav items={subnav} theme="cyan" />

      <CountryCompareCN
        eyebrow="跨境路径"
        title="资产跨越太平洋时，会变的是什么——向西。"
        lede="每个出海项目都从同一件事开始：把你现有的中国材料摊开，看哪些能直接带到 FDA 审评人、美国 KOL 与美国期刊面前，哪些必须在当地重新做一遍。"
        direction="cn-to-us"
        left={{
          code: 'CN',
          label: '中国（起点）',
          regulator: 'NMPA · CDE',
          timeline: '中国 II / III 期已完成',
          reviewerLanguage: '中文 · 简体中文',
          constraints: [
            '三甲医院医生签核',
            'CDE 惯例的材料结构',
            '中文科学写法下的终点指标表述'
          ]
        }}
        right={{
          code: 'US',
          label: '美国（目的地）',
          regulator: 'FDA · CDER / CDRH',
          timeline: '6–18 个月材料准备',
          reviewerLanguage: '监管级英文',
          constraints: [
            'IRB 可提交方案 + 统计分析计划',
            'PCORnet / Sentinel 登记数据映射',
            '若涉及 SEC 上市证券，适用 PSLRA 披露'
          ]
        }}
      />

      <SolutionSection
        id="overview" eyebrow="概览 · 为什么走这条路"
        title="把中国级证据，桥接成 FDA 读得懂的材料。"
        kicker="出海最难的不是翻译。难的是把你的科学叙述，重新写给当初不在数据现场的那批审评人看。"
        bg="#fff"
      >
        <div className="two-col-grid" style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 32,
          background: 'var(--bg-2)', border: '1px solid var(--border-1)',
          borderRadius: 16, padding: 40,
        }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-ui)', fontSize: 19, fontWeight: 600, color: 'var(--brand-primary-700)', margin: '0 0 14px' }}>
              关于西行，我们的判断。
            </h3>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.65, margin: '0 0 14px' }}>
              FDA 审评人要的是桥接逻辑，不是译文。他们要知道哪些中国终点指标能对上 FDA 认可的口径，哪些对不上。他们要一位美国临床医生具名。他们要一份出了北京也跑得通的登记研究计划。
            </p>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.65, margin: 0 }}>
              我们用监管级英文把你的材料重做一遍，并附上一支美国 KOL 团队。
            </p>
          </div>
          <div style={{
            background: '#fff', border: '1px solid var(--border-1)',
            borderRadius: 12, padding: 22,
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--fg-3)',
              letterSpacing: '0.12em', marginBottom: 14,
            }}>我们不做什么</div>
            {[
              '把材料翻译一遍，就说完成了桥接。',
              '承诺 510(k) 的获批日期。',
              '写没有美国临床医生愿意签字的主张。',
              '该做 Pre-Sub 的时候跳过 Pre-Sub。',
            ].map((x, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'start', gap: 10,
                fontSize: 13, color: 'var(--fg-1)', marginBottom: 10, lineHeight: 1.45,
              }}>
                <span style={{ color: 'var(--error-500)', flexShrink: 0, marginTop: 1 }}>
                  <i data-lucide="x" width="14" height="14"></i>
                </span>{x}
              </div>
            ))}
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        id="who-its-for" eyebrow="适用对象"
        title="我们最常合作的三类中国创新企业。"
        bg="var(--bg-2)"
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {personas.map((p, i) => (
            <div key={i} style={{
              background: '#fff', border: '1px solid var(--border-1)',
              borderRadius: 12, padding: 28,
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 10,
                background: 'var(--brand-accent-100)', color: 'var(--brand-accent-700)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18,
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

      <SolutionSection
        id="approach" eyebrow="做法 · 4 步"
        title="诊断。桥接。签核。递交。"
        bg="#fff"
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--border-1)', borderRadius: 16, overflow: 'hidden' }}>
          {approachSteps.map((s, i) => (
            <div key={s.n} style={{
              padding: 28, borderLeft: i === 0 ? 'none' : '1px solid var(--border-1)',
              background: i === 2 ? 'var(--brand-accent-100)' : '#fff',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10.5,
                color: 'var(--brand-accent-700)',
                letterSpacing: '0.14em', marginBottom: 12, fontWeight: 600,
              }}>{s.n} · {i === 2 ? '医生把关' : 'AI 辅助'}</div>
              <h4 style={{
                fontFamily: 'var(--font-ui)', fontSize: 17, fontWeight: 600,
                color: 'var(--brand-primary-700)', margin: '0 0 10px', letterSpacing: '-0.005em',
              }}>{s.t}</h4>
              <p style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection
        id="deliverables" eyebrow="交付物 · 5 个模块"
        title="交付什么、美国医生在哪一步签字、溯源链路记下什么。"
        bg="var(--bg-2)"
      >
        <DeliverablesGrid items={deliverables} theme="cyan" />
      </SolutionSection>

      <SolutionSection
        id="timeline" eyebrow="项目时间表"
        title="一个完整的出海项目，从头到尾。"
        kicker="多数项目跑 18–28 周。Pre-Sub 或 Q-Sub 互动会影响后半程的节奏。"
        bg="#fff"
      >
        <PhaseTimeline phases={phases} theme="cyan" />
      </SolutionSection>

      <SolutionSection
        id="proof" eyebrow="实证 · 2025 年队列"
        title="这些数字，我们能拿出签核过的来源。"
        bg="var(--bg-2)"
      >
        <SolutionStatStrip stats={stats} theme="cyan" />
        <div style={{ marginTop: 20, fontSize: 11.5, color: 'var(--fg-3)', lineHeight: 1.5 }}>
          来源：梅斯健康项目审计，2025 年。FDA 结果因路径、资产类别与材料完整度而异——过往结果不预示未来的批准或获批。
        </div>
      </SolutionSection>

      <SolutionSection
        id="pilot" eyebrow="试点 · 低承诺入口"
        title="30 天 FDA 证据缺口诊断。"
        kicker="一次边界清晰的合作：先找出真正会拖慢你递交的那三四个 FDA 缺口，再决定要不要做完整项目。"
        bg="#fff"
      >
        <div className="two-col-grid" style={{
          background: 'linear-gradient(180deg, #D6F1F9 0%, #FFFFFF 100%)', border: '1px solid var(--brand-accent-500)',
          borderRadius: 16, padding: 40,
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40,
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '4px 10px', borderRadius: 4,
              background: 'var(--brand-accent-500)', color: 'var(--brand-primary-900)',
              fontSize: 10.5, fontWeight: 600, letterSpacing: '0.14em',
              marginBottom: 16,
            }}>30 天试点 · 报价请联系我们</div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 600,
              color: 'var(--brand-primary-700)', margin: '0 0 16px', letterSpacing: '-0.01em', lineHeight: 1.2,
            }}>FDA 证据缺口诊断</h3>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.65, margin: '0 0 24px' }}>
              我们拿你现有的中国数据包，对着 FDA 现行指南跑一遍——把证据、统计设计与审评叙述上的桥接缺口全部摊开。你拿到的是一份按优先级排序的缺口报告，和一个明确的 go / no-go。
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <Button variant="primary-light">预约诊断</Button>
              <Button variant="outline">下载简介</Button>
            </div>
          </div>
          <div style={{
            background: '#fff', border: '1px solid var(--border-1)', borderRadius: 12, padding: 24,
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--fg-3)',
              letterSpacing: '0.12em', marginBottom: 14,
            }}>试点包含 · 30 天</div>
            {[
              '针对你的路径做 FDA 指南逐条对照',
              '文献 + 登记数据审计（中文 + 英文）',
              '美国医生的叙述评审',
              '按严重程度分级的缺口报告',
              '桥接策略建议',
            ].map((x, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'start', gap: 10,
                fontSize: 13.5, color: 'var(--fg-1)', marginBottom: 12, lineHeight: 1.5,
              }}>
                <span style={{ color: 'var(--brand-accent-700)', flexShrink: 0, marginTop: 1 }}>
                  <i data-lucide="check" width="14" height="14"></i>
                </span>{x}
              </div>
            ))}
            <div style={{
              marginTop: 14, paddingTop: 14, borderTop: '1px dashed var(--border-1)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <EvidenceBadge kind="verified" size="sm">已核验</EvidenceBadge>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)' }}>
                2025 年已完成 9 次诊断
              </span>
            </div>
          </div>
        </div>
      </SolutionSection>

      <ContentReviewCrossSell />
      <SolutionCTA pageMeta={GOING_GLOBAL_CN_META} />
      <RelatedSolutions current="going-global-us" />
      <SolutionFooter />
    </div>
  );
}

window.PageGoingGlobalCN = PageGoingGlobalCN;
