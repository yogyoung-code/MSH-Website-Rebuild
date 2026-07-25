/* PageBiostatisticsCN.jsx — 生物统计与数据管理（业务模块 · 04）中文版。
   转化层文案：面向中国的数据管理 / 统计负责人与注册事务，非 EN 页直译。
   结构与 PageBiostatistics.jsx 一一对应（同样的 section 顺序与 id）。 */
const BIOSTAT_CN_META = {
  eyebrow: '业务模块 · 04',
  title: '生物统计与数据管理，按申报标准交付。',
  sub: '统计编程、临床数据管理与生物统计——CDISC 数据集口径、双人独立编程，按 FDA 与国家药监局（NMPA）两套申报要求交付，覆盖 I–IV 期、登记研究与研究者发起研究（IIT）。',
  breadcrumb: [
    { label: '首页', href: '/' },
    { label: '解决方案', href: '/' },
    { label: '生物统计与数据管理', href: '#' },
  ],
  theme: 'navy',
  meta: [
    { k: '适用场景', v: 'FDA / NMPA 申报 · 登记研究 · IIT · 论文发表' },
    { k: '标准',     v: 'CDISC（CDASH / SDTM / ADaM）· ICH-GCP · FDA Technical Conformance Guide' },
    { k: '交付物',   v: 'SDTM / ADaM + Define.xml · TFL · SAP · 数据管理报告' },
    { k: '质控',     v: '双人独立编程 · Pinnacle 21 · 三级审核' },
  ],
  ctaTitle: '给我们一个数据集、一份方案，或一个申报截止日。',
  ctaBody: '与资深生物统计师开一次 30 分钟的范围沟通会。24 小时内回复，48 小时内给出初步范围。报价请联系我们。',
  primaryCta: '预约范围沟通会',
  secondaryCta: '查看相关客户案例',
};

function PageBiostatisticsCN() {
  const subnav = [
    { id: 'overview',      label: '概览' },
    { id: 'capabilities',  label: '能力' },
    { id: 'process',       label: '数据生命周期' },
    { id: 'working-model', label: '协作方式' },
    { id: 'proof',         label: '实证' },
  ];

  const capabilities = [
    {
      icon: 'code-2', title: '统计编程',
      body: '基于 SAS 的编程，从原始数据到分析结果——每一个分析数据集、每一张 TFL 都经第二人独立编程复核后才出门。',
      bullets: ['SDTM / ADaM 转换与验证', '统计表、清单与图（TFL）', 'Define.xml + 审评者指南', 'PK/PD、期中分析与 DMC 输出'],
    },
    {
      icon: 'database', title: '临床数据管理',
      body: '基于电子数据采集（EDC）的数据管理，从方案审阅到锁库——完整性、一致性与可追溯性都在 SOP 下管理。',
      bullets: ['EDC 建库与逻辑核查配置', 'CRF 设计与填写指南', '质疑管理 · WHODrug / MedDRA 编码', 'SAE 一致性核对与锁库'],
    },
    {
      icon: 'sigma', title: '生物统计',
      body: '覆盖研发全周期的统计支持——从设计与样本量，到统计分析计划（SAP）、分析，以及 CSR 的统计章节。',
      bullets: ['研究设计与样本量估算', '随机化，含适应性设计', '统计分析计划（SAP）', 'ISS / ISE 与 CSR 统计章节'],
    },
    {
      icon: 'sparkles', title: 'AI 辅助与真实世界数据服务',
      body: 'AI 承担重复的那一层——CRF 起草、逻辑核查脚本、编码辅助——判断由统计师与数据管理人员做出。',
      bullets: ['方案到 CRF 起草', '逻辑核查脚本生成', '编码与 TFL 模板辅助', 'RWD 治理 · 医院登记数据库'],
    },
  ];

  const workingModel = [
    { title: '24 小时响应', body: '范围沟通 24 小时内回复，48 小时内给出初步方案。专职项目经理从启动到收尾每周汇报。' },
    { title: '双人编程，三级审核', body: '每一个分析数据集与 TFL 都由第二人独立重编并比对，交付前再过一遍三级质控审核。' },
    { title: '跨时区协作', body: '共享编程环境、版本化代码、统一 SOP 与跨时区评审——在全球申办方生物统计团队内部磨出来的方式。' },
  ];

  const stats = [
    { n: '5,000+', u: '', l: '单个登记研究项目累计入组患者',           note: '项目日志 · 2025' },
    { n: '100k+',  u: '', l: '我们搭建的某医院疾病数据库患者记录数',   note: '项目记录' },
    { n: '0',      u: '', l: '某全球 NDA/BLA 数据集包的一致性问题数',  note: 'Pinnacle 21 日志' },
    { n: '30%',    u: '', l: '某 IIT 项目的研究周期缩短幅度',          note: '项目收尾报告' },
  ];

  return (
    <div>
      <SolutionPageHeader pageMeta={BIOSTAT_CN_META} />
      <SolutionSubNav items={subnav} theme="navy" />

      <SolutionSection
        id="overview" eyebrow="概览"
        title="每一份申报、每一篇论文底下的那套数据。"
        kicker="不管终点是 FDA 的申报资料、国家药监局（NMPA）的注册，还是一篇同行评议论文——数据都得采得对、清得干净、算得住。这就是这个模块。"
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
              我们主张
            </div>
            {[
              '每一个分析数据集与 TFL 都经第二人独立编程。',
              'CDISC 一致性输出，交付前用 Pinnacle 21 核查。',
              '统计分析计划（SAP）与最终分析由具名生物统计师签核。',
              '覆盖全周期——I–IV 期、登记研究与 IIT。',
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
              我们不主张
            </div>
            {[
              '零质疑项。（我们给的是有留痕的质疑处理记录。）',
              '即时锁库。（我们给的是按 SOP 执行的锁库流程。）',
              'AI 统计师。（AI 加速编程，判断由统计师做出。）',
              '监管获批的结果。（批不批由审评机构定。）',
            ].map((x, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'start', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.85)', marginBottom: 10, lineHeight: 1.5 }}>
                <span style={{ color: 'var(--brand-accent-500)', flexShrink: 0, marginTop: 1 }}><i data-lucide="x" width="14" height="14"></i></span>{x}
              </div>
            ))}
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        id="capabilities" eyebrow="能力 · 4 个工作流"
        title="生物统计与数据管理模块下，我们交什么。"
        bg="var(--bg-2)"
      >
        <DeliverablesGrid items={capabilities} theme="navy" />
      </SolutionSection>

      {}
      <DeliverableSample
        eyebrow="你实际拿到什么"
        title="每次合作都以一件定义清楚的数据交付物结束，输入形态同样写死。"
        lede="每一项交付物都对着一份明确的输入约定立项，交付格式可以被审评方、申办方统计团队或期刊审稿人直接使用。"
        samples={[
          {
            label: '可用于申报的 CDISC 数据集包',
            input: {
              format: '原始研究数据 · 方案 · 标注 CRF',
              detail: '任意 EDC 导出格式；历史遗留格式也接收，并做映射。'
            },
            output: {
              format: 'SDTM + ADaM + Define.xml + 审评者指南',
              detail: '含 Pinnacle 21 报告 · 双人独立编程 · 可直接进 eCTD。'
            },
            badge: 'verified',
            signedBy: '统计编程负责人 + 生物统计师'
          },
          {
            label: '锁库交付包',
            input: {
              format: '在研 EDC 项目 · 数据管理计划',
              detail: '可以中途接手，也可以从启动期开始做数据管理。'
            },
            output: {
              format: '锁定数据集 + 数据管理报告',
              detail: '含质疑日志、编码报告与 SAE 一致性核对。'
            },
            badge: 'verified',
            signedBy: '数据管理负责人 + 质控审核人'
          },
          {
            label: 'SAP + TFL 交付包',
            input: {
              format: '方案 · 终点 · 分析问题',
              detail: '从样本量复核，到完整的疗效与安全性分析。'
            },
            output: {
              format: 'SAP + 统计表、清单与图',
              detail: '第二人独立编程复核；可按要求出版级图表。'
            },
            badge: 'verified',
            signedBy: '生物统计师 + 独立编程人员'
          },
          {
            label: 'IIT 全流程包',
            input: {
              format: '研究问题 · 研究中心 · 目标期刊',
              detail: '面向研究者发起研究，预算分档。'
            },
            output: {
              format: '方案输入 + EDC + 数据管理 + SAP + 分析 + 发表支持',
              detail: 'EDC 最快 3 个工作日部署。'
            },
            badge: 'verified',
            signedBy: '专职项目经理 + 生物统计师'
          }
        ]}
      />

      <SolutionSection
        id="process" eyebrow="数据生命周期"
        title="从建库到最终分析——一条可追溯的流水线。"
        kicker="每一步都在 SOP 下运行，每一次交接都留下监查员或检查官能顺着走的记录。"
        bg="#fff"
      >
        <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border-1)', borderRadius: 16, padding: 36 }}>
          <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0 }}>
            {[
              { n: '01', t: '立项与数据管理计划', d: '方案审阅、数据管理计划、CRF 设计与逻辑核查规格——AI 起草，专业人员定稿。' },
              { n: '02', t: '建库与测试',         d: 'EDC 建库、逻辑核查配置，以及首例入组前的用户验收测试。' },
              { n: '03', t: '执行与清理',         d: '自动核查加人工复核；质疑的生成、跟踪与关闭；WHODrug / MedDRA 编码。' },
              { n: '04', t: '锁库与质控',         d: '揭盲前后的数据审阅、三级质控，以及一次正式的、按 SOP 执行的锁库与签核。' },
              { n: '05', t: '分析与交付',         d: '执行 SAP，交付双人独立编程的数据集与 TFL、数据管理报告——附审计留痕。' },
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
                  {i === 3 ? '人工节点' : 'AI 辅助'}
                </div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: 15.5, fontWeight: 600, color: 'var(--brand-primary-700)', marginBottom: 8, letterSpacing: '-0.005em' }}>{s.t}</div>
                <div style={{ fontSize: 12.5, color: 'var(--fg-2)', lineHeight: 1.5 }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        id="working-model" eyebrow="协作方式"
        title="嵌进你的团队——申办方一侧或研究中心一侧都可以。"
        kicker="在全球申办方生物统计团队内部跑的那套方式，同样用在单中心的研究者发起研究上。"
        bg="var(--bg-2)"
      >
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {workingModel.map(t => (
            <div key={t.title} style={{
              background: '#fff', border: '1px solid var(--border-1)', borderRadius: 12, padding: 28,
            }}>
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
        id="proof" eyebrow="实证 · 项目记录"
        title="可以拿给你看的数字，每一个背后都有一份项目记录。"
        bg="#fff"
      >
        <SolutionStatStrip stats={stats} theme="navy" />
      </SolutionSection>

      <SolutionCTA pageMeta={BIOSTAT_CN_META} />
      <RelatedSolutions current="biostatistics-data-management" />
      <SolutionFooter />
    </div>
  );
}

window.PageBiostatisticsCN = PageBiostatisticsCN;
