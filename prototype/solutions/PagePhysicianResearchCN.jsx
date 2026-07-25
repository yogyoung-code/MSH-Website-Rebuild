/* PagePhysicianResearchCN.jsx — 医生调研（Physician Research）中文版。
   全站起步最快的入口产品：多少天上线、拿到什么报告、样本从哪来、谁质控。
   转化层文案，面向中国总部的 Medical Affairs / 市场准入 / 商务负责人。
   结构与 PagePhysicianResearch.jsx 一一对应（同样的 section 顺序与 id）。 */
const RESEARCH_CN_META = {
  eyebrow: '快速起步 · 起步最快的交付物',
  title: '医生调研——最快拿到中国医生的真实回答。',
  sub: '医疗专业人士（HCP）调研与洞察：一个边界清晰的课题、一份写明形式的产出，在 333 万+ 认证医生网络中执行。你给一个问题，我们带回数据——受访医生具名、知情同意、经医生复核。',
  breadcrumb: [
    { label: '首页', href: '/' },
    { label: '解决方案', href: '/' },
    { label: '医生互动', href: '/solutions/physician-engagement.html' },
    { label: '医生调研', href: '#' },
  ],
  theme: 'cyan',
  meta: [
    { k: '方法',   v: '在线定量问卷 · 深度访谈（IDI） · 混合设计' },
    { k: '招募',   v: '每周招募 100–150 份合格问卷' },
    { k: '周期',   v: '敏捷课题约 2–3 周 · 更深层级 8–10 周以上' },
    { k: '产出',   v: '数据 + 洞察报告，医生签核，英文' },
  ],
  ctaTitle: '给我们一个想问中国医生的问题。',
  ctaBody: '我们会执行一个边界清晰的课题，把数据带回来——快、具名、知情同意、经医生复核。一次 30 分钟的需求沟通就能启动。报价请联系我们。',
  primaryCta: '立项一个调研课题',
  primaryHref: '/contact.html?intent=research_scope',
  secondaryCta: '预约通话',
};

function PagePhysicianResearchCN() {
  const subnav = [
    { id: 'overview', label: '为什么从这里开始' },
    { id: 'studies',  label: '课题类型' },
    { id: 'tiers',    label: '立项层级' },
    { id: 'process',  label: '课题怎么跑' },
    { id: 'platform', label: '执行平台' },
    { id: 'proof',    label: '佐证' },
  ];

  const reasons = [
    {
      icon: 'target', title: '边界清晰，产出写得明白',
      body: '一个课题、一个问题、一份交付物——不需要先批一个多年期的合作。',
      bullets: ['一个问题，一份报告', '单课题固定范围', '不绑定长期项目', '由专员出具报价'],
    },
    {
      icon: 'wallet', title: '中国预算落地之前就能买',
      body: '量级小、可先行——在正式预算到位之前，从中国医生身上拿到价值的最省事路径。',
      bullets: ['起步量级的合作', '适配探索性预算', '内部审批快', '按课题分别立项'],
    },
    {
      icon: 'zap', title: '数天上线，不是数月',
      body: '333 万+ 认证医生网络每周可招募约 100–150 份合格医生问卷，每一批数据都做质控。',
      bullets: ['认证医生样本库', '按专科 / 医院层级 / 地区筛选', '每批数据都做质控', '敏捷课题约 2–3 周'],
    },
    {
      icon: 'git-branch', title: '它能打开后面所有的门',
      body: '调研结果给了你再谈一次的理由——通往 KOL 图谱、顾问会与继续医学教育的自然桥梁。',
      bullets: ['→ KOL 图谱', '→ 顾问会', '→ 继续医学教育（CME）', '→ 市场进入策略'],
    },
  ];

  const studyTypes = [
    { t: 'ATU 研究',        d: '认知—试用—使用：跟踪品牌表现、态度与处方行为在产品生命周期中的变化。', who: '品牌 / 市场' },
    { t: '认知与知晓度',    d: '中国医生当下如何看待某个疾病、产品或品类。',                          who: '市场 / 医学事务' },
    { t: '诊疗行为研究',    d: '真实临床：诊断、治疗线、转诊与处方行为。',                            who: '医学事务' },
    { t: 'KOL 研究',        d: '识别并刻画关键意见领袖，以及左右一个领域走向的观点。',                who: '医学事务' },
    { t: '竞争情报',        d: '在医生心中，你的产品与竞品各自处在什么位置。',                        who: '市场 / 战略' },
    { t: '信息与概念测试',  d: '把定位与材料拿给最终会读到它们的医生做测试。',                        who: '市场' },
  ];

  const tiers = [
    { tag: '敏捷',   t: '一次快速摸底', specs: ['在线定量问卷', '约 200 位医生，仅线上', '问卷 10 分钟以内', '约 2–3 周', '产出：数据 + 简版报告'],                                    when: '覆盖盲区 · 上市前摸底 · 一个要尽快定的决策' },
    { tag: '战略',   t: '支撑决策',     specs: ['定性 + 定量混合', '约 5 场深度访谈 + 约 200 份问卷', '访谈 30 分钟', '约 8–10 周', '产出：15–20 页洞察报告'],                          when: '品牌规划 · 战略取舍' },
    { tag: '白皮书', t: '塑造市场',     specs: ['深度定性 + 定量', '约 10 场深度访谈 + 200 位 HCP / 100 位患者', '+ 文献与二手数据', '约 10 周以上', '产出：可公开发表的蓝皮书'],       when: '上市 · 论文发表 · 建立品类话语权' },
  ];

  const phases = [
    { weeks: '0',    title: '需求确认', body: '确定问题、KPI、受众标签与目标样本。',                             deliverable: '课题简报' },
    { weeks: '1',    title: '方案',     body: '目标、方法、交付物、时间表与团队——在预算内选对方法。',            deliverable: '立项方案' },
    { weeks: '1–2',  title: '招募',     body: '从网络中筛出合格医生，匹配专科、医院层级与职称。',                deliverable: '执行计划' },
    { weeks: '2–3',  title: '执行',     body: '在线定量问卷 + 定性深度访谈；每一轮数据都做质检。',               deliverable: '清洗后数据集' },
    { weeks: '3+',   title: '报告',     body: '分析加上医学解读——一份英文报告和一次现场汇报。',                 deliverable: '签核洞察报告' },
  ];

  const rcpSteps = [
    { icon: 'folder-plus',    t: '项目搭建',     d: '目标与配额一次配置完成' },
    { icon: 'user-plus',      t: '招募',         d: '认证网络，多维度筛选' },
    { icon: 'clipboard-list', t: '问卷',         d: '专业问卷引擎，线上作答' },
    { icon: 'shield-check',   t: '合规与劳务费', d: '自动校验，自动发放' },
    { icon: 'bar-chart-3',    t: '洞察',         d: '实时看板，数据可导出' },
  ];

  const rcpCapabilities = [
    { icon: 'user-check',     t: '认证招募',     d: '具名、经身份核验的医生；按专科、职称、医院层级与地区筛选——入选结构实时可见。' },
    { icon: 'clipboard-list', t: '专业问卷引擎', d: '长问卷、逻辑跳转与量表矩阵——复杂的医学量表，在任意设备上作答。' },
    { icon: 'shield-check',   t: '合规内置',     d: '劳务费公允价值校验、风险评分、多级审批；每一笔支付与每一次改动都有完整审计留痕。' },
    { icon: 'activity',       t: '实时看板',     d: '招募漏斗、完成率与配额消耗实时更新；明细数据可按需导出。' },
  ];

  const stats = [
    { n: '333 万+', l: '网络内认证医生',           note: '2025 年审计' },
    { n: '100–150', l: '每周招募的合格问卷数',     note: '每批都做质控' },
    { n: '2–3',     u: '周', l: '敏捷课题，从简报到报告', note: '约 200 位医生定量' },
    { n: '73',      u: '%+', l: '样本库中高级职称占比',   note: '2025 年审计' },
  ];

  return (
    <div>
      <SolutionPageHeader pageMeta={RESEARCH_CN_META} />
      <SolutionSubNav items={subnav} theme="cyan" />

      <DeliverableSample
        eyebrow="你实际拿到什么"
        title="进去一个问题，出来一份签核过的洞察报告。"
        lede="每一个课题都是一份边界清晰的输入—输出约定：你带来一个研究问题，我们交回具名、知情同意的医生数据，外加医学解读。"
        samples={[
          {
            label: '敏捷定量问卷',
            input: { format: '一个研究问题 · 目标样本要求',
                     detail: '约 200 位医生，按专科、医院层级、地区与职称筛选。' },
            output: { format: '数据集 + 概要报告 · 2–3 周',
                      detail: '数据逐批质控，英文交付物，可安排现场汇报。' },
            badge: 'verified',
            signedBy: '主审医生 + 调研负责人'
          },
          {
            label: '战略层混合方法课题',
            input: { format: '决策背景 · 定性 + 定量设计',
                     detail: '约 5 场深度访谈，加约 200 位医生的问卷，访谈 30 分钟。' },
            output: { format: '15–20 页洞察报告 + 汇报',
                      detail: '分析加上医学解读——为一次品牌规划决策而写。' },
            badge: 'verified',
            signedBy: '主审医生 + 具名医生评审'
          },
        ]}
      />

      <SolutionSection
        id="overview" eyebrow="为什么团队从这里开始"
        title="最容易立项，也最容易过审批。"
        kicker="在我们提供的所有服务里，医生调研是验证这段合作关系风险最低的方式——也是进入这张网络最自然的起点。"
        bg="#fff"
      >
        <DeliverablesGrid items={reasons} theme="cyan" />
      </SolutionSection>

      <SolutionSection
        id="studies" eyebrow="课题类型 · 6 种"
        title="可以直接点名、直接立项的调研。"
        kicker="六类课题覆盖了大部分首次沟通的需求。每一类都是独立、可立项的交付物。"
        bg="var(--bg-2)"
      >
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {studyTypes.map(s => (
            <div key={s.t} style={{
              background: '#fff', border: '1px solid var(--border-1)',
              borderRadius: 12, padding: 26,
            }}>
              <h4 style={{
                fontFamily: 'var(--font-ui)', fontSize: 17.5, fontWeight: 600,
                color: 'var(--brand-primary-700)', margin: '0 0 10px', letterSpacing: '-0.005em',
              }}>{s.t}</h4>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--fg-2)', margin: '0 0 14px' }}>{s.d}</p>
              <div style={{
                paddingTop: 12, borderTop: '1px dashed var(--border-1)',
                fontSize: 11.5, color: 'var(--fg-3)',
                fontFamily: 'var(--font-mono)', letterSpacing: '0.04em',
              }}>
                提问方 · <span style={{ color: 'var(--brand-accent-700)', fontWeight: 600 }}>{s.who}</span>
              </div>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection
        id="tiers" eyebrow="立项 · 3 个层级"
        title="决策有多重，就做多深。"
        kicker="先从轻的开始，值得的时候再往深走。范围按项目设定，由专员出具报价。"
        bg="#fff"
      >
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {tiers.map(x => (
            <div key={x.tag} style={{
              background: 'var(--bg-2)', border: '1px solid var(--border-1)',
              borderRadius: 12, padding: 28, display: 'flex', flexDirection: 'column',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600,
                letterSpacing: '0.14em', color: 'var(--brand-accent-700)',
                textTransform: 'uppercase', marginBottom: 8,
              }}>{x.tag}</div>
              <h4 style={{
                fontFamily: 'var(--font-ui)', fontSize: 19, fontWeight: 600,
                color: 'var(--brand-primary-700)', margin: '0 0 16px', letterSpacing: '-0.005em',
              }}>{x.t}</h4>
              <div style={{ marginBottom: 18 }}>
                {x.specs.map(s => (
                  <div key={s} style={{
                    display: 'flex', alignItems: 'start', gap: 8,
                    fontSize: 13, color: 'var(--fg-1)', marginBottom: 7,
                  }}>
                    <span style={{ color: 'var(--brand-accent-700)', flexShrink: 0, marginTop: 1 }}>
                      <i data-lucide="check" width="13" height="13"></i>
                    </span>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
              <div style={{
                marginTop: 'auto', paddingTop: 14, borderTop: '1px dashed var(--border-1)',
                fontSize: 12.5, color: 'var(--fg-3)', lineHeight: 1.5,
              }}>
                <strong style={{ color: 'var(--fg-2)' }}>适用：</strong> {x.when}
              </div>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection
        id="process" eyebrow="流程 · 5 个阶段"
        title="一个课题是怎么跑的。"
        kicker="认证网络每周可招募约 100–150 份合格医生问卷——敏捷课题的执行以天计，不是以月计。"
        bg="var(--bg-2)"
      >
        <PhaseTimeline phases={phases} theme="cyan" />
      </SolutionSection>

      <SolutionSection
        id="platform" eyebrow="执行平台 · RapidClinicPulse"
        title="一个平台跑完整个课题。"
        kicker="从项目搭建到招募、问卷、合规与实时洞察——每一步都在同一套系统上，每一步都可审计。"
        bg="#fff"
      >
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14, marginBottom: 28 }}>
          {rcpSteps.map((s, i) => (
            <div key={s.t} style={{
              background: 'var(--bg-2)', border: '1px solid var(--border-1)',
              borderRadius: 12, padding: '20px 18px', textAlign: 'center',
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'var(--brand-accent-100)', color: 'var(--brand-accent-700)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 10,
              }}>
                <i data-lucide={s.icon} width="19" height="19"></i>
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600,
                color: 'var(--brand-accent-700)', letterSpacing: '0.1em', marginBottom: 4,
              }}>{String(i + 1).padStart(2, '0')}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--brand-primary-700)', marginBottom: 4 }}>{s.t}</div>
              <div style={{ fontSize: 12, lineHeight: 1.5, color: 'var(--fg-3)' }}>{s.d}</div>
            </div>
          ))}
        </div>
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {rcpCapabilities.map(c => (
            <div key={c.t} style={{
              background: '#fff', border: '1px solid var(--border-1)',
              borderRadius: 12, padding: 24, display: 'flex', gap: 16, alignItems: 'start',
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                background: 'var(--brand-accent-100)', color: 'var(--brand-accent-700)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <i data-lucide={c.icon} width="19" height="19"></i>
              </div>
              <div>
                <h4 style={{
                  fontFamily: 'var(--font-ui)', fontSize: 15.5, fontWeight: 600,
                  color: 'var(--brand-primary-700)', margin: '0 0 6px', letterSpacing: '-0.005em',
                }}>{c.t}</h4>
                <p style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>{c.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20, fontSize: 13, color: 'var(--fg-3)', fontStyle: 'italic' }}>
          每一笔劳务费都经得起审计——公允价值校验、审批通过、逐笔留痕。
        </div>
      </SolutionSection>

      <SolutionSection
        id="proof" eyebrow="佐证 · 2025"
        title="数字有签核，案例有出处。"
        bg="var(--bg-2)"
      >
        <SolutionStatStrip stats={stats} theme="cyan" />

        {/* 典型案例 —— 由 AIMS 页面移植，客户已匿名 */}
        <div style={{
          marginTop: 32,
          background: '#fff', border: '1px solid var(--border-1)',
          borderLeft: '4px solid var(--brand-accent-500)',
          borderRadius: 12, padding: '30px 34px',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 12,
          }}>典型案例 · 代表性项目，客户已匿名</div>
          <h4 style={{
            fontFamily: 'var(--font-ui)', fontSize: 19, fontWeight: 600,
            color: 'var(--brand-primary-700)', margin: '0 0 12px', letterSpacing: '-0.005em',
          }}>一个成熟肿瘤品牌的 ATU 研究</h4>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--fg-2)', margin: '0 0 20px', maxWidth: 820 }}>
            一家全球品牌团队需要重新读一遍 CML 市场——为什么医疗专业人士在二线与三线及以上治疗上的认知正在改变。
            我们执行了一个 ATU 研究，跟踪品牌表现、观念、态度与行为：定性深度访谈加在线定量问卷，受访者为高级职称医生；
            自定义 KPI 覆盖用药目录准入、知晓度、患者旅程、处方选择与市场潜力。
          </p>
          <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}>
            {[
              ['约 3 个月', '从概念到交付报告'],
              ['定性 + 定量', '深度访谈加一次在线问卷'],
              ['英文报告', '外加一次现场汇报'],
            ].map(([v, l]) => (
              <div key={v}>
                <div style={{ fontWeight: 600, fontSize: 17, color: 'var(--brand-primary-700)' }}>{v}</div>
                <div style={{ fontSize: 12.5, color: 'var(--fg-3)' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: 20, fontSize: 13.5, color: 'var(--fg-2)', lineHeight: 1.6,
          background: 'var(--brand-primary-100)', borderRadius: 8, padding: '16px 20px',
        }}>
          <strong style={{ color: 'var(--brand-primary-700)' }}>我们的合规标准：</strong>每一次合作都具名、
          知情同意、留痕、披露——不做匿名样本组，也从不出售名单。
        </div>
      </SolutionSection>

      <SolutionCTA pageMeta={RESEARCH_CN_META} />
      <RelatedSolutions current="physician-research" />
      <SolutionFooter />
    </div>
  );
}
window.PagePhysicianResearchCN = PagePhysicianResearchCN;
