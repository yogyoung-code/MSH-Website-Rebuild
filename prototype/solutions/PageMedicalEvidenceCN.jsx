/* PageMedicalEvidenceCN.jsx — 医学证据中文版。
   转化层文案：面向中国总部的医学总监 / Medical Affairs 负责人 / CMO，非 EN 页直译。
   结构与 PageMedicalEvidence.jsx 一一对应（同样的 section 顺序与 id），便于双语同步维护。 */
const ME_CN_L = (h) => ((typeof MSH !== 'undefined' && MSH && MSH.L) ? MSH.L(h) : h);

const MED_EVIDENCE_CN_META = {
  eyebrow: '业务模块 · 01',
  title: '每条结论都有出处，每份报告都有医生签核。',
  sub: '真实世界研究、登记研究分析、系统文献综述与卫生经济学与结果研究——AI 检索汇集，医生签核放行，交付时附结构化溯源链路。',
  breadcrumb: [
    { label: '首页', href: ME_CN_L('/') },
    { label: '解决方案', href: ME_CN_L('/') },
    { label: '医学证据', href: '#' },
  ],
  theme: 'navy',
  meta: [
    { k: '适用场景', v: 'NMPA / FDA 申报 · 医保目录（NRDL） · 报销准入 · 论文发表' },
    { k: '数据来源', v: '已索引文献、登记数据库、支付方数据库、既往申报材料' },
    { k: '交付物',   v: '真实世界研究报告 · 系统文献综述 · HEOR 模型 · 价值档案' },
    { k: '溯源',     v: '每条主张：年份、来源、签核人' },
  ],
  ctaTitle: '带一个证据问题过来，我们给你看溯源链路。',
  ctaBody: '30 分钟范围界定通话，对接有医学训练背景的证据负责人。我们会带一份同类项目的溯源链路样例回来。报价请联系我们。',
  primaryCta: '预约 30 分钟范围界定通话',
  primaryHref: ME_CN_L('/contact.html'),
  secondaryCta: '查看相关客户案例',
};

function PageMedicalEvidenceCN() {
  const subnav = [
    { id: 'overview',       label: '概览' },
    { id: 'capabilities',   label: '能力' },
    { id: 'process',        label: '溯源流程' },
    { id: 'evidence-tiers', label: '证据分级' },
    { id: 'proof',          label: '实证' },
  ];

  const capabilities = [
    {
      icon: 'database', title: '真实世界研究（RWE）',
      body: '从登记数据库、EHR 数据集与上市后数据中做结构化真实世界研究；在数据允许的范围内，把中国与美国两地的口径接起来。',
      bullets: ['中国登记研究可行性', '美国 claims / EHR 合作网络', '对照组构建', '偏倚与混杂分析'],
    },
    {
      icon: 'list-ordered', title: '登记研究设计与分析',
      body: '前瞻性与回顾性登记研究——方案撰写、伦理（IRB）材料包、统计分析计划，以及持续的医生在环报告。',
      bullets: ['登记研究方案撰写', '伦理 / IRB 材料包', '统计分析计划（SAP）与分析节奏', '医生在环（PITL）审计日志'],
    },
    {
      icon: 'book-open-text', title: '系统文献综述',
      body: 'AI 辅助检索，一周内覆盖 10k+ 来源，而不是一个季度——按 PRISMA 口径出报告，综述取舍由医生把关。',
      bullets: ['PRISMA 口径方案', 'AI 检索 + 去重', '医生把关的综述', '逐条引文的溯源链路'],
    },
    {
      icon: 'banknote', title: '卫生经济学与结果研究（HEOR）与价值档案',
      body: '成本效果、预算影响与价值框架，按国家医保目录（NRDL）、ICER 与省级支付方环境调校。',
      bullets: ['成本效果模型', '预算影响分析', 'NRDL / ICER 价值档案', '敏感性与情景测试'],
    },
  ];

  const tiers = [
    { kind: 'verified',    badge: '已核验',  title: '已核验',  body: '附年份、来源与具名医生审阅人。可直接引用于申报资料、对外材料与公开发表。' },
    { kind: 'development', badge: '进行中',  title: '进行中',  body: '来源已定位，分析进行中，尚未经医生签核。可内部使用，不用于对外主张。' },
    { kind: 'request',     badge: '需申请',  title: '需申请',  body: '在保密协议下提供——通常是项目专属数据、支付方敏感分析，或尚未发表的结果。' },
  ];

  const stats = [
    { n: '10k+',   u: '', l: '单个系统文献综述项目索引的来源数', note: 'AI 检索' },
    { n: '128',    u: '', l: '已审计的申报材料（2025 Q4）',       note: '平台日志' },
    { n: '333 万+', u: '', l: '可参与质控的医生',                  note: '网络审计' },
    { n: '0',      u: '', l: '无法溯源的主张（2025 年审计）',      note: '全部标注年份' },
  ];

  return (
    <div>
      <SolutionPageHeader pageMeta={MED_EVIDENCE_CN_META} />
      <SolutionSubNav items={subnav} theme="navy" />

      <SolutionSection
        id="overview" eyebrow="概览"
        title="所有其他项目底下跑的，都是这条流水线。"
        kicker="无论是进入中国、出海全球，还是把一个登记研究重做一遍——证据流水线是同一条：检索、结构化综合、医生审阅、签核后的溯源链路。"
        bg="#fff"
      >
        <div className="two-col-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24,
        }}>
          <div style={{
            background: 'var(--bg-2)', border: '1px solid var(--border-1)',
            borderRadius: 16, padding: 32,
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--brand-accent-700)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12 }}>
              我们承诺的
            </div>
            {[
              '每个项目做 10k+ 来源的结构化检索。',
              '每一个数字主张都标注年份与来源。',
              '每一份报告都有具名医生签核。',
              '每一份交付物都带可复核的审计日志。',
            ].map((x, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'start', gap: 10, fontSize: 14, color: 'var(--fg-1)', marginBottom: 10, lineHeight: 1.5 }}>
                <span style={{ color: 'var(--brand-primary-500)', flexShrink: 0, marginTop: 1 }}><i data-lucide="check" width="14" height="14"></i></span>{x}
              </div>
            ))}
          </div>
          <div style={{
            background: 'var(--brand-primary-900)', color: '#fff',
            borderRadius: 16, padding: 32,
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--brand-accent-500)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12 }}>
              我们不承诺的
            </div>
            {[
              '不承诺 AI 输出不会出错。（我们承诺的是：每份产出经医生签核。）',
              '不承诺某个准确率数字。（我们承诺的是：全流程可审计。）',
              'AI 不做临床判断。（AI 负责检索，医生负责审阅与签核。）',
              '不预测审批结果。',
            ].map((x, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'start', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.85)', marginBottom: 10, lineHeight: 1.5 }}>
                <span style={{ color: 'var(--brand-accent-500)', flexShrink: 0, marginTop: 1 }}><i data-lucide="x" width="14" height="14"></i></span>{x}
              </div>
            ))}
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        id="capabilities" eyebrow="能力 · 4 个模块"
        title="医学证据模块下我们交付什么。"
        bg="var(--bg-2)"
      >
        <DeliverablesGrid items={capabilities} theme="navy" />
      </SolutionSection>

      <DeliverableSample
        eyebrow="你实际拿到什么"
        title="每项能力都交付成一份签核过的文件，输入口径事先约定。"
        lede="每份交付物都对着明确的输入清单立项，交付格式让监管、支付方或同行评审可以直接读，不用再翻一遍。"
        samples={[
          {
            label: '真实世界研究（RWE）报告',
            input: {
              format: '治疗领域 · 目标申报资料 · 适用法域',
              detail: '基于你已有的试验方案与登记研究问题；不需要提供原始个人健康信息。'
            },
            output: {
              format: 'PRISMA 口径 RWE 报告 · 18–60 页 + 附录',
              detail: '逐条引文的溯源链路 · 每条主张带年份与签核人。'
            },
            badge: 'verified',
            signedBy: '主审 + 1 名复核'
          },
          {
            label: '登记研究方案包',
            input: {
              format: '研究问题 · 纳入中心',
              detail: '单问题或多臂；前瞻性、回顾性均可。'
            },
            output: {
              format: '方案 + 伦理材料包 + 统计分析计划 · 30–80 页',
              detail: '统计分析计划、伦理材料包，以及持续的医生在环审计节奏。'
            },
            badge: 'verified',
            signedBy: '生物统计师 + 主审医生'
          },
          {
            label: 'HEOR 价值档案',
            input: {
              format: '治疗领域 · 支付方模型 · 适用法域',
              detail: '按你的产品测算 NRDL / ICER / 商保情景。'
            },
            output: {
              format: '成本效果模型 + 价值档案 · 20–50 页',
              detail: '敏感性情景、预算影响分析、逐支付方扫描。'
            },
            badge: 'verified',
            signedBy: 'HEOR 负责人 + 主审医生'
          },
          {
            label: '跨法域桥接备忘录',
            input: {
              format: '原始申报资料 · 目标市场 · 差距问题',
              detail: '最常见的用法：把中国产生的数据桥接到 FDA / EMA 的口径，反向亦可。'
            },
            output: {
              format: '桥接备忘录 + 可比性对照表 · 10–24 页',
              detail: '逐条标注：可直接沿用 / 部分可用 / 需在当地重做。'
            },
            badge: 'in-development',
            signedBy: '按项目组建的评审组'
          }
        ]}
      />

      <SolutionSection
        id="process" eyebrow="溯源流程"
        title="每条主张带着来源走，每个来源带着签名。"
        kicker="审计日志是交付物的一部分，不是事后另外索要的附件。"
        bg="#fff"
      >
        <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border-1)', borderRadius: 16, padding: 36 }}>
          <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0 }}>
            {[
              { n: '01', t: '来源接入',   d: '已索引文献、登记数据库、既往申报材料与支付方数据集——统一打标以供检索。' },
              { n: '02', t: 'AI 检索',    d: '按问题驱动检索；跨语种、跨来源类型去重并聚类。' },
              { n: '03', t: '结构化综合', d: '带引文位的结构化综合——没有出处的结论不会离开这一步。' },
              { n: '04', t: '医生审阅',   d: '具名医生审阅、修改、签核。每一处改动记录审阅人与时间戳。' },
              { n: '05', t: '审计日志',   d: '可导出的溯源链路随每份交付物一起给出——版本、审阅人、来源、时间戳。' },
            ].map((s, i, arr) => (
              <div key={s.n} style={{
                padding: '0 18px', position: 'relative',
                borderRight: i < arr.length - 1 ? '1px dashed var(--border-1)' : 'none',
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: i === 3 ? 'var(--brand-accent-500)' : 'var(--brand-primary-100)',
                  color: i === 3 ? 'var(--brand-primary-900)' : 'var(--brand-primary-700)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, marginBottom: 14,
                }}>{s.n}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: i === 3 ? 'var(--brand-accent-700)' : 'var(--fg-3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>
                  {i === 3 ? '人工把关' : 'AI 辅助'}
                </div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: 15.5, fontWeight: 600, color: 'var(--brand-primary-700)', marginBottom: 8, letterSpacing: '-0.005em' }}>{s.t}</div>
                <div style={{ fontSize: 12.5, color: 'var(--fg-2)', lineHeight: 1.5 }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        id="evidence-tiers" eyebrow="三级证据体系"
        title="始终知道哪些能引用，哪些不能。"
        kicker="我们交付物里的每条主张都带三种标记之一。你随时知道手上这条证据处在什么成熟度。"
        bg="var(--bg-2)"
      >
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {tiers.map(t => (
            <div key={t.kind} style={{
              background: '#fff', border: '1px solid var(--border-1)', borderRadius: 12, padding: 28,
            }}>
              <div style={{ marginBottom: 18 }}>
                <EvidenceBadge kind={t.kind}>{t.badge}</EvidenceBadge>
              </div>
              <h4 style={{
                fontFamily: 'var(--font-ui)', fontSize: 18, fontWeight: 600,
                color: 'var(--brand-primary-700)', margin: '0 0 12px', letterSpacing: '-0.005em',
              }}>{t.title}</h4>
              <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>{t.body}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection
        id="proof" eyebrow="实证 · 2025"
        title="这些数字，我们能拿出签核过的溯源链路。"
        bg="#fff"
      >
        <SolutionStatStrip stats={stats} theme="navy" />
      </SolutionSection>

      <ContentReviewCrossSell />
      <SolutionCTA pageMeta={MED_EVIDENCE_CN_META} />
      <RelatedSolutions current="medical-evidence" />
      <SolutionFooter />
    </div>
  );
}

window.PageMedicalEvidenceCN = PageMedicalEvidenceCN;
