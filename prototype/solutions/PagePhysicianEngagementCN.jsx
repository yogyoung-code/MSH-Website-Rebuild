/* PagePhysicianEngagementCN.jsx — 医生互动（Physician Engagement）中文版。
   转化层文案：面向中国总部的 Medical Affairs / 市场准入 / 商务负责人，非 EN 页直译。
   结构与 PagePhysicianEngagement.jsx 一一对应（同样的 section 顺序与 id）。 */
const PHYSICIAN_CN_META = {
  eyebrow: '业务模块 · 02',
  title: '333 万+ 医生网络——调研、顾问会、KOL、继续教育与具名评审。',
  sub: '一份申报材料、一篇论文、一场顾问会、一个评审组：需要具名医生正式署名时，我们既有可触达的网络，也有配得上审计的知情同意机制。',
  breadcrumb: [
    { label: '首页', href: '/' },
    { label: '解决方案', href: '/' },
    { label: '医生互动', href: '#' },
  ],
  theme: 'navy',
  meta: [
    { k: '网络',   v: '333 万+ 认证医生 · 中国 + 美国' },
    { k: '适用场景', v: '调研 · 顾问会 · KOL · CME · 评审组' },
    { k: '知情同意', v: '按项目授权 · 可审计 · 可撤回' },
    { k: '产出',   v: '签核评审报告 · 顾问会纪要 · CME 完成记录' },
  ],
  ctaTitle: '下个季度就要具名医生上会？把要求告诉我们。',
  ctaBody: '一次 30 分钟的需求沟通。我们会就顾问画像、地域、治疗领域与时间给出可行性判断。报价请联系我们。',
  primaryCta: '发起顾问会需求',
  secondaryCta: '查看相关客户案例',
};

function PagePhysicianEngagementCN() {
  const subnav = [
    { id: 'overview', label: '概览' },
    { id: 'network',  label: '医生网络' },
    { id: 'engagements', label: '互动类型' },
    { id: 'consent',  label: '知情同意与伦理' },
    { id: 'proof',    label: '佐证' },
  ];

  const engagementTypes = [
    {
      icon: 'clipboard-list', title: '医生调研（调研与洞察）',
      body: 'ATU、认知度、诊疗行为与信息测试——边界清晰的单个课题，在认证网络里数天即可上线。全站起步最快的交付物。',
      bullets: ['约 200 位医生定量 · 2–3 周', '每周 100–150 份合格问卷', '受访医生具名并知情同意', '数据 + 洞察报告，带签核'],
      featured: true,
      tag: '起步最快',
      href: '/solutions/physician-research.html',
      hrefLabel: '查看完整产品页',
    },
    {
      icon: 'users-round', title: '顾问会（Advisory Board）',
      body: '覆盖各治疗领域的单次与常设顾问会——议程、招募、独立主持，以及带签名的会议纪要。',
      bullets: ['单次与常设两种形式', '议程与背景材料包', '独立主持', '签名纪要 + 审计留痕'],
    },
    {
      icon: 'star', title: 'KOL 图谱与互动',
      body: '识别一线 KOL，按影响力与触达分层，围绕论文发表与学术大会设计结构化的互动计划。',
      bullets: ['一线 KOL 图谱', '影响力 / 触达评分', '互动计划', '利益冲突与披露筛查'],
    },
    {
      icon: 'graduation-cap', title: '继续医学教育（CME）项目',
      body: '独立、可申请学分的继续医学教育——为医生学习设计，不做产品推广。',
      bullets: ['CME 学分认证支持', '内容独立审核', '多形式投放', '完成与效果记录'],
    },
    {
      icon: 'clipboard-signature', title: '具名评审组',
      body: '为申报材料、稿件与递交前资料组建具名评审组——每位评审签字，每处修改留痕。',
      bullets: ['每组 5–9 位具名评审', '按项目授权的知情同意', '逐条主张签核记录', '评审利益披露登记'],
    },
  ];

  const networkBars = [
    { label: '大中华区 · 三甲教学医院',   pct: 88, n: '210 万+' },
    { label: '大中华区 · 二级 / 基层',   pct: 64, n: '90 万+' },
    { label: '美国 · 学术医疗中心',      pct: 42, n: '21 万+' },
    { label: '美国 · 社区医院',          pct: 28, n: '12 万+' },
    { label: '欧盟 / 英国 / 日本',       pct: 22, n: '9.5 万+' },
  ];

  const stats = [
    { n: '333 万+', l: '网络内医生数',              note: '2025 年审计', s: '1' },
    { n: '5–9',     l: '每个具名评审组的评审人数',   note: '常设' },
    { n: '96',      u: '%', l: '首次递交即获医生签核', note: '2025 年审计' },
    { n: '< 14',    u: '天', l: '组建评审组的中位时长', note: '2025 年队列' },
  ];

  return (
    <div>
      <SolutionPageHeader pageMeta={PHYSICIAN_CN_META} />
      <SolutionSubNav items={subnav} theme="navy" />

      {}
      <DeliverableSample
        eyebrow="你实际拿到什么"
        title="每一类互动都交付一份带签核的成果，输入边界写在合同里。"
        lede="不论是顾问会、KOL 图谱、继续医学教育项目还是具名评审组——输入是有边界的，输出带具名医生签核。"
        samples={[
          {
            label: '医生调研课题',
            input: { format: '一个研究问题 · 目标样本要求',
                     detail: 'ATU、认知度、诊疗行为或信息测试——约 200 位医生，数天内上线。' },
            output: { format: '数据集 + 洞察报告 · 2–3 周',
                      detail: '受访医生具名并知情同意；英文报告，另可安排现场汇报。详见完整产品页。' },
            badge: 'verified',
            signedBy: '主审医生 + 调研负责人'
          },
          {
            label: '常设顾问会',
            input: { format: '治疗领域 · 召开频次 · 专家画像',
                     detail: '单次或常设均可；议程、招募与主持由我们负责。' },
            output: { format: '签名会议纪要 + 审计日志 · 每场一份',
                      detail: '独立主持，利益披露登记，留痕可导出。' },
            badge: 'verified',
            signedBy: '每场 5–9 位具名评审'
          },
          {
            label: '一线 KOL 图谱',
            input: { format: '治疗领域 · 地域 · 使用场景',
                     detail: '覆盖中国三甲教学医院与美国学术中心，按影响力与触达评分。' },
            output: { format: '分层 KOL 图谱 + 互动计划 · 12–24 页',
                      detail: '每一位具名医生附利益冲突与披露筛查结果。' },
            badge: 'verified',
            signedBy: '主审医生 + KOL 项目负责人'
          },
          {
            label: '继续医学教育（CME）项目',
            input: { format: '教育缺口 · 目标受众',
                     detail: '为医生学习设计，不做产品推广。内容独立审核。' },
            output: { format: 'CME 活动 + 完成记录 · 多种形式',
                      detail: '学分认证支持、效果记录、完成证书。' },
            badge: 'verified',
            signedBy: '独立审核人 + 主审医生'
          },
          {
            label: '具名评审组',
            input: { format: '申报材料或稿件 · 逐条主张的审阅问题',
                     detail: '按项目授权的知情同意——有有效期、可撤回、经得起审计。' },
            output: { format: '逐条主张签核记录 + 评审报告',
                      detail: '每处修改带时间戳；每位评审具名并披露。' },
            badge: 'verified',
            signedBy: '5–9 位具名评审 + 负责人'
          }
        ]}
      />

      <SolutionSection
        id="overview" eyebrow="概览"
        title="每一个项目背后的医生层。"
        kicker="证据、传播、注册——其他每条工作线在闸口上都需要一位具名医生。这支团队负责守这个闸口。"
        bg="#fff"
      >
        <div className="two-col-grid" style={{
          background: 'var(--brand-primary-900)', color: '#fff',
          borderRadius: 16, padding: 40,
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32,
        }}>
          {[
            { k: '具名', t: '每一位评审都具名。', d: '不做匿名评审组。出现在交付物上的每位医生，每一次都签字并披露。' },
            { k: '知情同意', t: '按单个项目授权。', d: '知情同意只覆盖一个具名项目，有有效期，可撤回，可审计。' },
            { k: '留痕', t: '每一次改动都有记录。', d: '带时间戳的日志记录谁审阅、谁修改、谁签核——可按需导出。' },
          ].map((c, i) => (
            <div key={i} style={{
              borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.1)',
              paddingLeft: i === 0 ? 0 : 24,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-accent-500)', marginBottom: 14 }}>{c.k}</div>
              <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: 19, fontWeight: 600, color: '#fff', margin: '0 0 12px', letterSpacing: '-0.005em' }}>{c.t}</h4>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, margin: 0 }}>{c.d}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection
        id="network" eyebrow="医生网络 · 333 万+ 医生"
        title="按地域与诊疗场景的覆盖。"
        kicker="这张网络我们每年审计一次。覆盖是有意做得不均衡的——在中美两地的三甲与学术中心扎得更深，因为监管与支付决策实际是在那里成形的。"
        bg="var(--bg-2)"
      >
        <div style={{
          background: '#fff', border: '1px solid var(--border-1)',
          borderRadius: 16, padding: 36,
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 24, paddingBottom: 16, borderBottom: '1px dashed var(--border-1)',
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--brand-primary-700)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>
              可触达指数 · 2025 年审计
            </span>
            <EvidenceBadge kind="verified" size="sm" />
          </div>
          {networkBars.map((b, i) => (
            <div key={i} style={{ marginBottom: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 13.5, color: 'var(--fg-1)', fontWeight: 500 }}>{b.label}</span>
                <span style={{ fontSize: 13, color: 'var(--fg-2)', fontFamily: 'var(--font-mono)' }}>
                  {b.n} · <span style={{ color: 'var(--brand-primary-700)', fontWeight: 600 }}>{b.pct}%</span>
                </span>
              </div>
              <div style={{ height: 8, background: 'var(--bg-2)', borderRadius: 4, overflow: 'hidden', position: 'relative' }}>
                <div style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0, width: `${b.pct}%`,
                  background: i < 2 ? 'var(--brand-primary-700)' : 'var(--brand-accent-500)',
                  borderRadius: 4,
                }}></div>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 20, fontSize: 11.5, color: 'var(--fg-3)', lineHeight: 1.5 }}>
            可触达指数指：在当前知情同意与披露状态下，该细分中我们已经触达、或可在 30 天内合理触达的比例。它不是各细分执业医生总数的统计。
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        id="engagements" eyebrow="互动类型 · 5 种"
        title="我们如何让一位医生正式署名。"
        bg="#fff"
      >
        <DeliverablesGrid items={engagementTypes} theme="navy" />
      </SolutionSection>

      <SolutionSection
        id="consent" eyebrow="知情同意与伦理"
        title="每个项目都适用的五条规则。"
        kicker="医生愿意第二次和我们合作，与监管方愿意采信这份交付物，是同一个原因：知情同意机制是真的。"
        bg="var(--bg-2)"
      >
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
          {[
            { n: '01', t: '按项目授权', d: '知情同意只覆盖一个具名项目，绝不复用。' },
            { n: '02', t: '有有效期',   d: '每一份授权都会到期。续期是主动选择加入，不是默认延续。' },
            { n: '03', t: '可撤回',     d: '医生可以随时退出，我们随即删除关联信息。' },
            { n: '04', t: '已披露',     d: '每一笔有偿合作都在交付物与审计日志中披露。' },
            { n: '05', t: '可审计',     d: '知情同意记录可按需导出——监管方索取时可以，医生本人索取时也可以。' },
          ].map(c => (
            <div key={c.n} style={{
              background: '#fff', border: '1px solid var(--border-1)',
              borderRadius: 12, padding: 22,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--brand-accent-700)', letterSpacing: '0.12em', marginBottom: 12, fontWeight: 600 }}>{c.n}</div>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 15, fontWeight: 600, color: 'var(--brand-primary-700)', margin: '0 0 8px', letterSpacing: '-0.005em' }}>{c.t}</div>
              <p style={{ fontSize: 12.5, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0 }}>{c.d}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection
        id="proof" eyebrow="佐证 · 2025"
        title="数字有签核，来源有链路。"
        bg="#fff"
      >
        <SolutionStatStrip stats={stats} theme="navy" />
        <div style={{ marginTop: 16, fontSize: 11.5, color: 'var(--fg-3)', lineHeight: 1.5 }}>
          ¹ 梅斯健康内部医生网络审计，2025 年。指有效可触达数，不是执业医生总数。
        </div>
      </SolutionSection>

      <ContentReviewCrossSell />
      <SolutionCTA pageMeta={PHYSICIAN_CN_META} />
      <RelatedSolutions current="physician-engagement" />
      <SolutionFooter />
    </div>
  );
}
window.PagePhysicianEngagementCN = PagePhysicianEngagementCN;
