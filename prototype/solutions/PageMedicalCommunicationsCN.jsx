/* PageMedicalCommunicationsCN.jsx — 医学传播中文版。
   转化层文案：面向中国总部的医学总监 / Medical Affairs 负责人 / CMO，非 EN 页直译。
   结构与 PageMedicalCommunications.jsx 一一对应（同样的 section 顺序与 id），含 GCO 旗舰横幅。
   GCO 口径对齐已定稿的 PageGlobalCommsOfficeCN.jsx（审计 → 搭建 → 代运营）。 */
const MC_CN_L = (h) => ((typeof MSH !== 'undefined' && MSH && MSH.L) ? MSH.L(h) : h);

const MED_COMMS_CN_META = {
  eyebrow: '业务模块 · 03',
  title: '中英双语医学传播，太平洋两岸的医生都签核。',
  sub: '论文发表、学术大会材料与本地化内容——中英双轨产出，两个市场的医生分别审阅，合规内建在流程里。面向出海团队，我们还可以把传播部搭起来并代运营。',
  breadcrumb: [
    { label: '首页', href: MC_CN_L('/') },
    { label: '解决方案', href: MC_CN_L('/') },
    { label: '医学传播', href: '#' },
  ],
  theme: 'navy',
  meta: [
    { k: '交付物', v: '论文 · 学术大会 · 本地化内容 · 媒体与公关' },
    { k: '语种',   v: 'EN · 简体中文 · 繁體中文 · 日语（按需）' },
    { k: '审阅',   v: '双市场医生质控' },
    { k: '合规',   v: 'PhRMA / EFPIA / RDPAC 口径审核' },
  ],
  ctaTitle: '两周拿到一份双语材料。和我们合作门槛最低的方式。',
  ctaBody: '跨境内容冲刺 14 天交付 1 份经医学审核的双语材料——范围固定，附签核溯源链路。报价请联系我们。',
  primaryCta: '启动一次内容冲刺',
  primaryHref: MC_CN_L('/solutions/cross-border-medical-content-sprint.html'),
  secondaryCta: '预约通话',
  secondaryHref: MC_CN_L('/contact.html'),
};

function PageMedicalCommunicationsCN() {
  const subnav = [
    { id: 'gco',          label: '全球传播部 · New' },
    { id: 'overview',     label: '概览' },
    { id: 'capabilities', label: '能力' },
    { id: 'workflow',     label: '双语流程' },
    { id: 'compliance',   label: '合规' },
    { id: 'proof',        label: '实证' },
  ];

  const capabilities = [
    {
      icon: 'book-open-text', title: '同行评审论文发表',
      body: '论文撰写、目标期刊选择、审稿回复支持——每一轮修改都有医生审阅。',
      bullets: ['目标期刊选择', '论文撰写与修改', '审稿回复模板库', '署名与利益披露'],
    },
    {
      icon: 'presentation', title: '学术大会海报与卫星会',
      body: '海报、口头报告、卫星会——服务于 ASCO、ESMO、AHA、CSCO、CMHA 等大会。',
      bullets: ['海报与口头报告内容', '卫星会制作', '双语展台物料', '大会现场报道'],
    },
    {
      icon: 'languages', title: '中英双语本地化',
      body: '中英科学内容本地化，带术语一致性、双医生质控，以及签核过的溯源链路。',
      bullets: ['科学翻译', '术语一致性层', '双医生质控', '审阅人披露日志'],
    },
    {
      icon: 'shield-check', title: '合规导向质控',
      body: '在医生审阅之前先筛出超适应症风险、公平平衡缺口与披露问题——按双市场行业准则调校。',
      bullets: ['超适应症标注', '公平平衡检查', '披露与资助扫描', '行业准则对照'],
    },
  ];

  return (
    <div>
      <SolutionPageHeader pageMeta={MED_COMMS_CN_META} />
      <SolutionSubNav items={subnav} theme="navy" />

      <DeliverableSample
        eyebrow="你实际拿到什么"
        title="每份材料都双语交付，两边的医生分别署名。"
        lede="双语不是一道翻译工序，而是一条并行流程：审计日志上同时有一位美国执业医生和一位中国执业医生。"
        samples={[
          {
            label: '同行评审论文',
            input: { format: '试验 / 真实世界研究数据集 · 目标期刊',
                     detail: '基于你的方案；AI 填充引文位，医生逐节撰写并签核。' },
            output: { format: '可投稿论文 · 4k–8k 词 + 图表',
                      detail: '署名与利益披露块、审稿回复模板库、对齐目标期刊体例。' },
            badge: 'verified',
            signedBy: '主审医生 + 1 名复核'
          },
          {
            label: '学术大会海报或卫星会',
            input: { format: '大会（ASCO / ESMO / AHA / CSCO / CMHA） · 摘要',
                     detail: '可直接付印的双语内容。展台物料与现场报道按需追加。' },
            output: { format: '海报 + 口头 / 卫星会内容 · 双语',
                      detail: '展台物料、讲者备注、大会报道简报。' },
            badge: 'verified',
            signedBy: '主审医生 + 大会负责人'
          },
          {
            label: '双语科学本地化',
            input: { format: '源材料 · 目标受众 · 适用行业准则',
                     detail: '中英互译，带术语一致性层；双医生质控。' },
            output: { format: '双语材料 + 审阅人披露日志',
                      detail: '医生审阅前先筛超适应症、公平平衡与披露问题。' },
            badge: 'verified',
            signedBy: '美国执业医生 + 中国执业医生'
          },
          {
            label: '合规导向质控轮次',
            input: { format: '现有稿件 · 目标法域准则',
                     detail: '对照 PhRMA / EFPIA / RDPAC。超适应症、公平平衡、披露扫描。' },
            output: { format: '批注稿 + 整改清单',
                      detail: '行业准则逐条对照，可直接进法务审阅。' },
            badge: 'in-development',
            signedBy: '合规负责人 + 主审医生'
          },
          {
            label: '数据读出发布（全球传播部）',
            input: { format: '一次 readout · embargo 日期 · 目标媒体清单',
                     detail: '新闻稿撰写、embargo 下的媒体 pitch、KOL 放大——所有科学主张发出前经医生签核。' },
            output: { format: '新闻稿 + coverage log + 声量复盘',
                      detail: 'Earned 与付费内容始终明确区分；每条主张有出处。' },
            badge: 'in-development',
            signedBy: 'Comms lead + Lead MD'
          }
        ]}
      />

      {/* GCO 旗舰横幅 —— 本模块最新的服务线，刻意放在页面靠前位置 */}
      <SolutionSection
        id="gco" eyebrow="新服务线 · Build & Operate"
        title="不止于材料：全球传播部（GCO）。"
        kicker="材料赢得评审，声量赢得市场。这条新服务线先把你的 newsroom、官方渠道与媒体关系搭起来，再作为你的外包全球传播部持续运营。"
        bg="var(--bg-2)"
      >
        <div className="two-col-grid" style={{
          background: 'linear-gradient(180deg, #D6F1F9 0%, #FFFFFF 100%)',
          border: '1px solid var(--brand-accent-500)',
          borderRadius: 16, padding: 40,
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40,
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '4px 10px', borderRadius: 4,
              background: 'var(--brand-accent-500)', color: 'var(--brand-primary-900)',
              fontSize: 10.5, fontWeight: 600, letterSpacing: '0.14em',
              textTransform: 'uppercase', marginBottom: 16,
            }}>New · 2026 · 出海旗舰</div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 600,
              color: 'var(--brand-primary-700)', margin: '0 0 16px', letterSpacing: '-0.01em', lineHeight: 1.2,
            }}>你的全球传播部——我们搭建，我们运营。</h3>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.65, margin: '0 0 24px' }}>
              面向出海的中国创新企业：面向医学媒体与行业媒体的媒体关系、代运营的英文 newsroom
              与 LinkedIn 官号、学术大会声量、KOL 声音、季度声量（share of voice）度量，
              以及 AI 答案的持续监测与事实性更正——科学主张医生签核，每一次报道都记入可审计的 coverage log。
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button variant="primary-light" href={MC_CN_L('/solutions/global-communications-office.html')}>了解这个部门</Button>
              <Button variant="outline" href={MC_CN_L('/contact.html?intent=gco_audit')}>预约 30 天声量审计</Button>
            </div>
            <div style={{ marginTop: 14, fontSize: 12.5, color: 'var(--fg-3)' }}>
              也可阅读<a href="/solutions/global-communications-office.html" style={{ color: 'var(--brand-accent-700)', fontWeight: 600, textDecoration: 'none' }}>英文版介绍 →</a>
            </div>
          </div>
          <div style={{
            background: '#fff', border: '1px solid var(--border-1)', borderRadius: 12, padding: 24,
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--fg-3)',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14,
            }}>这个部门一览</div>
            {[
              { k: '审计 · 30 天',    d: '对标指定竞品的 SOV 基线 + 一份 90 天路线图。' },
              { k: '搭建 · 8–12 周',  d: 'Messaging house、press kit、英文 newsroom、记者地图、运营 SOP。' },
              { k: '代运营 · 长期合约', d: '监测、pitch、渠道运营、大会节点、KOL 声音——按季度汇报。' },
            ].map((x, i) => (
              <div key={i} style={{
                paddingBottom: 12, marginBottom: 12,
                borderBottom: i < 2 ? '1px dashed var(--border-1)' : 'none',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11.5, fontWeight: 600,
                  color: 'var(--brand-accent-700)', letterSpacing: '0.06em', marginBottom: 4,
                }}>{x.k}</div>
                <div style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.5 }}>{x.d}</div>
              </div>
            ))}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              fontSize: 12, color: 'var(--fg-3)', marginTop: 2,
            }}>
              <i data-lucide="shield-check" width="13" height="13" style={{ color: 'var(--brand-accent-700)' }}></i>
              不承诺报道版面 · Earned 与付费始终明确区分
            </div>
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        id="overview" eyebrow="概览"
        title="双语不是一道翻译工序，而是一条并行流程。"
        kicker="把一份美国口径的论文翻成中文，不等于一份中国口径的论文。我们并行跑两条审阅轨——每种语言一条——最后对齐。"
        bg="#fff"
      >
        <div className="two-col-grid" style={{
          background: 'var(--bg-2)', border: '1px solid var(--border-1)',
          borderRadius: 16, padding: 36,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32,
        }}>
          <div style={{ borderRight: '1px dashed var(--border-1)', paddingRight: 32 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--brand-primary-500)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12, fontWeight: 600 }}>EN · 监管级</div>
            <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: 18, fontWeight: 600, color: 'var(--brand-primary-700)', margin: '0 0 12px' }}>面向 FDA 审评员、美国 KOL、期刊编辑。</h4>
            <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>
              母语级科学英文。Pre-Sub / Q-Sub 惯例。终点指标用词对齐现行 FDA 指南与目标期刊的体例。
            </p>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--brand-accent-700)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12, fontWeight: 600 }}>中文 · 监管级</div>
            <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: 18, fontWeight: 600, color: 'var(--brand-primary-700)', margin: '0 0 12px' }}>面向 NMPA / CDE 审评员、中国 KOL、医保目录。</h4>
            <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>
              申报级简体中文。CDE 惯例。药典术语一致。一线 KOL 的表达习惯与审阅人预期。
            </p>
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        id="capabilities" eyebrow="能力 · 4 个模块"
        title="医学传播模块下交付什么。"
        bg="var(--bg-2)"
      >
        <DeliverablesGrid items={capabilities} theme="navy" />
      </SolutionSection>

      <SolutionSection
        id="workflow" eyebrow="双语流程"
        title="两条审阅轨，一份对齐后的材料。"
        kicker="你拿到的是一份双语交付物。背后是两条并行的审阅轨，在中间汇合。"
        bg="#fff"
      >
        <div style={{
          background: 'var(--brand-primary-900)', color: '#fff',
          borderRadius: 16, padding: 32,
        }}>
          <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0 }}>
            {[
              { n: '01', t: '来源接入',   d: '简报、源数据、既往材料。AI 抽取主张、来源与术语。' },
              { n: '02', t: 'EN 初稿',    d: '监管级英文逐节起草。引文位填充完毕。' },
              { n: '03', t: 'CN 初稿',    d: '并行的中文初稿——不是翻译。中文原生术语，附溯源链路。' },
              { n: '04', t: '双医生质控', d: '美国执业医生审英文，中国执业医生审中文。两人都签核。' },
              { n: '05', t: '对齐定稿',   d: '差异逐条摆出来并解决。最终材料带双方签名与溯源链路一起交付。' },
            ].map((s, i, arr) => (
              <div key={s.n} style={{
                padding: '4px 18px',
                borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: i === 3 ? 'var(--brand-accent-500)' : 'rgba(0,174,219,0.15)',
                  color: i === 3 ? 'var(--brand-primary-900)' : 'var(--brand-accent-500)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, marginBottom: 14,
                }}>{s.n}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: i === 3 ? 'var(--brand-accent-500)' : 'rgba(255,255,255,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>
                  {i === 3 ? '人工把关 ×2' : 'AI 辅助'}
                </div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: 15.5, fontWeight: 600, color: '#fff', marginBottom: 8, letterSpacing: '-0.005em' }}>{s.t}</div>
                <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        id="compliance" eyebrow="合规 · 医生审阅前置筛查"
        title="质控层对照的四套准则。"
        kicker="在医生审阅之前，材料已经过超适应症、公平平衡、披露与行业准则的扫描——把医生的时间留给医学判断。"
        bg="var(--bg-2)"
      >
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { code: 'PhRMA',  region: '美国',     d: '与医疗专业人士互动准则。推广内容与医学内容分离。' },
            { code: 'EFPIA',  region: '欧盟',     d: '行为准则。披露、公平平衡，以及面向 HCP 的价值转移规则。' },
            { code: 'RDPAC',  region: '中国大陆', d: '中国外商投资企业协会药品研制和开发行业委员会准则。中国本地的 HCP 互动规则。' },
            { code: 'IFPMA',  region: '全球',     d: '多个法域在同一份材料上交叉时，叠加适用的国际准则。' },
          ].map(c => (
            <div key={c.code} style={{
              background: '#fff', border: '1px solid var(--border-1)', borderRadius: 12, padding: 22,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--brand-accent-700)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10, fontWeight: 600 }}>{c.region}</div>
              <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: 20, fontWeight: 700, color: 'var(--brand-primary-700)', margin: '0 0 10px', letterSpacing: '-0.005em' }}>{c.code}</h4>
              <p style={{ fontSize: 12.5, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0 }}>{c.d}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection
        id="proof" eyebrow="实证 · 2025"
        title="已交付、已审计、已签核的双语材料。"
        bg="#fff"
      >
        <SolutionStatStrip stats={[
          { n: '38', l: '双语交付物（单一项目）',      note: 'Top-10 medtech · 12 周' },
          { n: '96', u: '%', l: '2025 年一次通过 QC 签核率', note: '平台审计' },
          { n: '11', l: '2025 年在写论文数',            note: '同行评审' },
          { n: '0',  l: '2025 年行业准则违规发现',      note: '合规审计' },
        ]} theme="navy" />
      </SolutionSection>

      <ContentReviewCrossSell />
      <SolutionCTA pageMeta={MED_COMMS_CN_META} />
      <RelatedSolutions current="medical-communications" />
      <SolutionFooter />
    </div>
  );
}
window.PageMedicalCommunicationsCN = PageMedicalCommunicationsCN;
