/* PageGlobalCommsOfficeCN.jsx — 全球传播部（GCO）中文版。
   转化层文案：面向中国总部决策人（CEO / CBO / CMO），非 EN 页直译。
   结构与 PageGlobalCommsOffice.jsx 一一对应，便于双语同步维护。 */
const GCO_CN_META = {
  eyebrow: '医学传播 · Build & Operate',
  title: '你的全球传播部——我们搭建，我们运营。',
  sub: '为出海的中国创新企业提供医学公关、全球媒体关系与科学声量运营。我们把英文 newsroom、官方渠道和媒体关系网络搭起来，然后作为你的外包全球传播部持续运营——并管好 AI 如何转述你。',
  breadcrumb: [
    { label: '首页', href: '/' },
    { label: '解决方案', href: '/' },
    { label: 'Medical Communications', href: '/solutions/medical-communications.html' },
    { label: '全球传播部（GCO）', href: '#' },
  ],
  theme: 'cyan',
  meta: [
    { k: '模式', v: '30 天审计 → 8–12 周搭建 → 代运营（12 个月起）' },
    { k: '渠道', v: 'Earned · Owned · 学术大会 · KOL 声音 · AI 答案' },
    { k: '覆盖', v: '医学媒体 + 行业媒体 · 里程碑与危机' },
    { k: '合规', v: '科学主张医生签核 · Earned 与付费明确区分' },
  ],
  ctaTitle: '全球资产，配得上全球声量。',
  ctaBody: '从一份 30 天全球声量审计开始：对标指定竞品的 SOV 基线、渠道与媒体审计、AI 答案基线与错误信息清单、90 天路线图。报价请联系我们。',
  primaryCta: '预约 30 天声量审计',
  primaryHref: '/contact.html?intent=gco_audit',
  secondaryCta: '预约通话',
};

function PageGlobalCommsOfficeCN() {
  const subnav = [
    { id: 'overview',    label: '差距' },
    { id: 'workstreams', label: '服务模块' },
    { id: 'ai-answers',  label: 'AI 答案 · New' },
    { id: 'model',       label: '运作方式' },
    { id: 'dna',         label: '为什么是梅斯' },
    { id: 'boundaries',  label: '红线' },
  ];

  const haves = [
    '已完成对外授权或获批、拥有全球权益的资产',
    'Readout、大会数据与发表记录',
    'BD 势能与逐步扩大的美国团队',
    '一个值得讲的故事',
  ];

  const missing = [
    '覆盖你所在领域的行业媒体记者关系',
    '持续运营的英文 newsroom 与 LinkedIn 官号',
    '会主动提到你的 KOL',
    '对标竞品的声量（share of voice）数据',
    '在 AI 取材池里，属于你自己的一手声音',
  ];

  const workstreams = [
    {
      icon: 'compass', title: '叙事与信息体系',
      body: '面向全球市场的 messaging house：科学故事线、竞争定位，以及一套美国受众与上海管理层都会签字认可的语言。',
      bullets: ['全球 messaging house', '科学故事线与主张地图', '竞争定位', '发言人材料'],
    },
    {
      icon: 'layout-template', title: '自有渠道代运营',
      body: '全球公司会被反复核验的那些渠道，我们先搭建、再代运营：英文 newsroom、LinkedIn、newsletter——一周一周持续更新。',
      bullets: ['英文 newsroom 与 press kit', 'LinkedIn / X 官号运营', '邮件与 newsletter', '官网内容运营'],
    },
    {
      icon: 'newspaper', title: 'Earned 媒体关系',
      body: '面向医学媒体与行业媒体（trade press）的 pitch 与长期关系建设——外加新闻稿撰写、wire 发布与行业奖项申报。',
      bullets: ['医学 + 行业媒体 pitch', '新闻稿与 wire 发布', 'Embargo 管理', '奖项与榜单申报'],
    },
    {
      icon: 'presentation', title: '学术大会与活动声量',
      body: '把大会预算变成声量：会前预热、symposium 宣传、现场与会后报道，以及 JPM 季的材料准备。',
      bullets: ['大会 presence 策划', '现场与会后报道', 'Symposium 宣传', 'JPM / BIO 季支持'],
    },
    {
      icon: 'users', title: 'KOL 与 DOL 声音',
      body: '把第三方声音组织起来：全球 KOL advocacy、digital opinion leader 合作、播客与 webinar——全程知情同意、如实披露。',
      bullets: ['KOL advocacy 计划', 'DOL 合作', '播客与 webinar 系列', '同意与披露日志'],
    },
    {
      icon: 'siren', title: '里程碑与危机传播',
      body: '获批、readout、交易按节奏发布——并为出问题的那一天准备一套演练过的预案。披露决策始终由你的 IR 与法务把关。',
      bullets: ['里程碑发布管理', '舆情监测', '危机预案与演练', '声明与媒体应对'],
    },
    {
      icon: 'radar', title: '情报与度量', tag: 'AI-ENABLED', featured: true,
      body: '让其他模块可被问责的那个模块：AI 辅助监测覆盖行业媒体、医学媒体与社交渠道——按季度输出一份可核查的声量报告。',
      bullets: ['持续媒体监测', '竞品 readout 追踪', '季度 SOV 报告', '逐条 coverage log'],
    },
    {
      icon: 'bot', title: 'AI 答案可见性与准确性', tag: 'NEW', featured: true,
      body: 'AI 正在替你回答问题——而每条回答只取十几个来源，中国企业的英文科学资产在结构上往往不在这个取材池里。我们持续监测 AI 当前如何描述你的企业、管线与临床数据，给出逐条可复现的错误信息清单，并用医生签核的事实性内容做更正。',
      bullets: ['AI 答案持续监测', '引用来源图谱', '可复现的错误信息清单', '内容可抓取性改造'],
      href: '#ai-answers',
      hrefLabel: '我们做什么、不承诺什么',
    },
  ];

  const phases = [
    { weeks: '0–4',  title: '声量审计', body: '对标指定竞品的 SOV 基线、渠道与媒体审计、叙事差距分析、AI 答案基线与错误信息清单——外加一份 90 天路线图。', deliverable: '审计报告 + 路线图' },
    { weeks: '5–16', title: 'Newsroom 搭建', body: 'Messaging house、press kit、英文 newsroom、官方渠道重建、记者地图、AI 可读性标准，以及日常运营 SOP。', deliverable: '一个能运转的 newsroom' },
    { weeks: '17+',  title: '持续运营', body: '传播部开始运转：监测、pitch、渠道运营、大会节点、KOL 声音、AI 答案定期复测——按季度汇报。', deliverable: '季度 SOV + coverage log' },
  ];

  const stats = [
    { n: '3.33M+', l: '我们自己运营的平台上的认证医生', note: '2025 审计' },
    { n: '38',     l: '双语交付物（单一项目）',           note: 'Top-10 medtech · 12 周' },
    { n: '96',     u: '%', l: '2025 年一次通过 QC 签核率', note: '平台审计' },
    { n: '0',      l: '2025 年行业准则违规发现',           note: '合规审计' },
  ];

  const redLines = [
    { t: '占有你的账号与内容。', d: '账号注册在你名下，内容版权归你，粉丝是你的资产。我们只持有运营权限，你随时可以收回。' },
    { t: '承诺报道。',         d: '版面靠 earned 赢得。我们承诺流程与度量——从不承诺标题。' },
    { t: '推广未获批产品。',   d: '只做企业与科学传播，严格遵守 FDA 关于获批前推广的规则。' },
    { t: '混淆 earned 与付费。', d: '赞助或付费内容，一律如实标注。' },
    { t: '替你做披露决策。',   d: '重大信息的披露时点与文本由你的 IR 与法务把关——我们负责传播执行。' },
    { t: '发布未签核的科学内容。', d: '科学主张带具名医生签核——与我们交付的其他一切一样。' },
    { t: '承诺 AI 推荐率提升。', d: '我们不承诺提升你在 AI 答案中的曝光或推荐率——这件事目前缺乏可靠证据支持。我们承诺的是监测覆盖、错误发现与更正流程。' },
  ];

  // AI 答案工作线的市场证据。每个数字都带年份与出处；均非梅斯自身业绩数字。
  const aiEvidence = [
    {
      icon: 'stethoscope', t: '入口已经变了。',
      d: '81% 的美国医生在专业场景使用 AI，39% 用 AI 总结医学研究与诊疗标准（较 2023 年 +33pp）。跨国调研中 92% 的医生在临床实践中使用生成式 AI，无任何专科低于 85%。',
      src: 'AMA 医生增强智能调研，n≈1,700，2026-03 · 跨国医生调研，n=1,165，2026-03',
    },
    {
      icon: 'alert-triangle', t: 'AI 也会说错。',
      d: 'AI 聊天机器人的医学回答 50% 存在问题，其中 20% 问题严重。当它说错的是你的资产，后果由你承担。',
      src: 'BMJ Open，2026-04',
    },
    {
      icon: 'filter', t: '你多半不在取材池里。',
      d: 'AI 引用高度集中：top 10 网站拿走约 50% 的全部引用；本地域名在自己市场只占 5–10%；付费墙或登录墙后的内容几乎拿不到引用。ChatGPT 平均每答引用约 15 个来源，Gemini 平均仅 3 个。',
      src: 'komm.passion / Team Farner，1,500+ 条引用，2026-01 · Semrush AI 可见性指数，1.26 亿条 prompt，2026 Q1–Q2',
    },
    {
      icon: 'quote', t: '于是机器只能引用别人。',
      d: '中国企业的英文科学资产多是 PDF 版管线表、公告、注册墙后的会议海报——结构上就不在池子里。AI 转述你时，只能引用别人写你的内容。这是第四种缺失：缺「源」——AI 引用池里没有你的一手声音。',
    },
  ];

  return (
    <div>
      <SolutionPageHeader pageMeta={GCO_CN_META} />
      <SolutionSubNav items={subnav} theme="cyan" />

      <DeliverableSample
        eyebrow="你实际拿到什么"
        title="一个带审计痕迹的传播职能。"
        lede="与我们交付的一切一样，传播工作全程留痕：报道逐条记入 coverage log，科学表述带医生署名。"
        samples={[
          {
            label: '30 天全球声量审计',
            input: { format: '你的资产故事 · 3–5 家指定竞品',
                     detail: '在医学与行业媒体范围内测出你的声量基线，审计自有渠道，标出叙事差距，并记录 AI 目前如何回答关于你的问题。' },
            output: { format: 'SOV 基线 + 渠道审计 + AI 答案基线 + 90 天路线图',
                      detail: '含一份逐条可复现的错误信息清单。一份按优先级排好的行动计划——交给我们执行，或你自己执行都可以。' },
            badge: 'in-development',
            signedBy: 'Comms lead + Lead MD'
          },
          {
            label: '数据读出发布（readout launch）',
            input: { format: '一次 readout · embargo 日期 · 目标媒体清单',
                     detail: '新闻稿撰写、embargo 下的媒体 pitch、KOL 放大——所有科学主张发出前经医生签核。' },
            output: { format: '新闻稿 + coverage log + 发布后声量复盘',
                      detail: 'Earned 与付费内容始终明确区分；每条主张有出处。' },
            badge: 'in-development',
            signedBy: 'Comms lead + Lead MD'
          },
          {
            label: '季度声量报告（代运营期）',
            input: { format: '持续监测 · 你的竞品集合',
                     detail: 'AI 辅助监测，覆盖行业媒体、医学媒体与社交渠道。' },
            output: { format: '季度 SOV 报告 + coverage log',
                      detail: '逐条可核查：媒体、日期、驱动事件、链接。' },
            badge: 'in-development',
            signedBy: 'Comms lead'
          },
        ]}
      />

      <SolutionSection
        id="overview" eyebrow="差距"
        title="交易破纪录，公司却悄无声息。"
        kicker="中国创新企业的对外授权屡创纪录，但大多数公司仍然没有全球传播职能。资产出海了，声音没有跟上。"
        bg="#fff"
      >
        <div className="two-col-grid" style={{
          background: 'var(--bg-2)', border: '1px solid var(--border-1)',
          borderRadius: 16, padding: 40,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32,
        }}>
          <div style={{ borderRight: '1px dashed var(--border-1)', paddingRight: 32 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--brand-accent-700)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14, fontWeight: 600 }}>你已经有的</div>
            {haves.map((x, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'start', gap: 10,
                fontSize: 14, color: 'var(--fg-1)', marginBottom: 12, lineHeight: 1.5,
              }}>
                <span style={{ color: 'var(--brand-accent-700)', flexShrink: 0, marginTop: 2 }}>
                  <i data-lucide="check" width="14" height="14"></i>
                </span>{x}
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--fg-3)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14, fontWeight: 600 }}>通常缺的</div>
            {missing.map((x, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'start', gap: 10,
                fontSize: 14, color: 'var(--fg-1)', marginBottom: 12, lineHeight: 1.5,
              }}>
                <span style={{ color: 'var(--error-500)', flexShrink: 0, marginTop: 2 }}>
                  <i data-lucide="x" width="14" height="14"></i>
                </span>{x}
              </div>
            ))}
            <div style={{
              marginTop: 18, paddingTop: 14, borderTop: '1px dashed var(--border-1)',
              fontSize: 13, color: 'var(--fg-2)', fontStyle: 'italic',
            }}>
              这个部门的存在，就是为了清掉这一列。
            </div>
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        id="workstreams" eyebrow="服务模块 · 8"
        title="一个传播部，八个模块。"
        kicker="范围从审计出发——多数客户第一年运行八个模块中的四到六个，所有模块汇入同一份 coverage log。"
        bg="var(--bg-2)"
      >
        <DeliverablesGrid items={workstreams} theme="cyan" />
      </SolutionSection>

      {/* W8 专段——最新工作线。此处口径刻意收紧：只承诺监测与更正，绝不承诺 AI 曝光。 */}
      <SolutionSection
        id="ai-answers" eyebrow="新增工作线 · AI 答案"
        title="社媒是「人看你」，AI 答案是「机器转述你」。"
        kicker="两者的输入是同一批内容，但输出的受众不同——所以同一份内容，必须同时为人和为机器写。越来越多的情况是：海外医生和 BD 读到的关于你的第一段描述，是机器写的，取材于你没有选择过的来源。"
        bg="#fff"
      >
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
          {aiEvidence.map((e, i) => (
            <div key={i} style={{
              background: 'var(--bg-2)', border: '1px solid var(--border-1)',
              borderRadius: 12, padding: 26, display: 'flex', gap: 16, alignItems: 'start',
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                background: 'var(--brand-accent-100)', color: 'var(--brand-accent-700)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <i data-lucide={e.icon} width="18" height="18"></i>
              </div>
              <div>
                <h4 style={{
                  fontFamily: 'var(--font-ui)', fontSize: 16.5, fontWeight: 600,
                  color: 'var(--brand-primary-700)', margin: '0 0 8px', letterSpacing: '-0.005em',
                }}>{e.t}</h4>
                <p style={{ fontSize: 13.5, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>{e.d}</p>
                {e.src && (
                  <div style={{
                    marginTop: 12, paddingTop: 10, borderTop: '1px dashed var(--border-1)',
                    fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--fg-3)',
                    lineHeight: 1.5, letterSpacing: '0.02em',
                  }}>{e.src}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 做什么 / 不做什么——这两块必须成对呈现，不可只保留前者。 */}
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div style={{
            background: 'linear-gradient(180deg, #D6F1F9 0%, #FFFFFF 100%)',
            border: '1px solid var(--brand-accent-500)', borderRadius: 12, padding: 30,
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600,
              color: 'var(--brand-accent-700)', letterSpacing: '0.14em',
              textTransform: 'uppercase', marginBottom: 14,
            }}>我们做什么</div>
            {[
              '持续监测 AI 当前如何描述你的企业、管线与临床数据（限于我们测量的引擎）。',
              '给出逐条可复现的错误信息清单：引擎、时间、可复现的问题。',
              '用医生签核的事实性内容做更正。',
              '把你的英文内容改造成 AI 抓得到、引得动的形态。',
            ].map((x, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'start', gap: 10,
                fontSize: 13.5, color: 'var(--fg-1)', marginBottom: 11, lineHeight: 1.55,
              }}>
                <span style={{ color: 'var(--brand-accent-700)', flexShrink: 0, marginTop: 2 }}>
                  <i data-lucide="check" width="14" height="14"></i>
                </span>{x}
              </div>
            ))}
            <div style={{
              marginTop: 16, paddingTop: 14, borderTop: '1px dashed var(--brand-accent-500)',
              fontSize: 12.5, color: 'var(--fg-2)', lineHeight: 1.55,
            }}>
              包含在审计、基建与代运营里，不单独收费。代运营期间按约定频率定期复测。
            </div>
          </div>

          <div style={{
            background: 'var(--bg-2)', border: '1px solid var(--border-1)',
            borderRadius: 12, padding: 30,
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600,
              color: 'var(--fg-3)', letterSpacing: '0.14em',
              textTransform: 'uppercase', marginBottom: 14,
            }}>我们不承诺什么</div>
            {[
              '不承诺提升任何产品在 AI 答案中的曝光或推荐率——这件事目前缺乏可靠证据支持。',
              '我们承诺的是监测覆盖与更正流程，是工作本身，不是排名。',
              '每条结论都标明测量的引擎、时间、重复次数与置信区间。',
              '不声称覆盖所有 AI 引擎，也不声称覆盖任何一个引擎的全部行为。',
            ].map((x, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'start', gap: 10,
                fontSize: 13.5, color: 'var(--fg-1)', marginBottom: 11, lineHeight: 1.55,
              }}>
                <span style={{ color: 'var(--error-500)', flexShrink: 0, marginTop: 2 }}>
                  <i data-lucide="x" width="14" height="14"></i>
                </span>{x}
              </div>
            ))}
            <div style={{
              marginTop: 16, paddingTop: 14, borderTop: '1px dashed var(--border-1)',
              fontSize: 12.5, color: 'var(--fg-2)', lineHeight: 1.55, fontStyle: 'italic',
            }}>
              在一个自己无法控制的系统里向你承诺排名，是在承诺做不到的事。
            </div>
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        id="model" eyebrow="合作模型"
        title="审计。搭建。运营。"
        kicker="从一份有边界的审计进入——或者从一次 readout、一个大会的单点战役开始。代运营在传播部证明自己之后才谈。"
        bg="#fff"
      >
        <PhaseTimeline phases={phases} theme="cyan" />
        <div style={{ marginTop: 20, fontSize: 13, color: 'var(--fg-3)', fontStyle: 'italic' }}>
          单点战役——一次数据读出、一个学术大会——同样按固定范围立项，并带各自的 coverage log。
        </div>
      </SolutionSection>

      <SolutionSection
        id="dna" eyebrow="为什么是梅斯"
        title="我们运营媒体，而不只是发稿。"
        kicker="梅斯以医生媒体平台起家，至今仍在运营——同一套运营能力，用到你的全球形象上。"
        bg="var(--bg-2)"
      >
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 28 }}>
          <div style={{
            background: '#fff', border: '1px solid var(--border-1)',
            borderRadius: 12, padding: 30,
          }}>
            <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: 18, fontWeight: 600, color: 'var(--brand-primary-700)', margin: '0 0 12px', letterSpacing: '-0.005em' }}>
              运营的事，交给运营者。
            </h4>
            <p style={{ fontSize: 14.5, color: 'var(--fg-2)', lineHeight: 1.65, margin: 0 }}>
              多数公关公司替你 pitch 故事；而我们每天都在做编辑部运营——一个 3.33M+ 认证医生的平台、带医生签核的内容流水线、每条主张的审计痕迹。传播部是一份运营工作，运营正是我们的主业。
            </p>
          </div>
          <div style={{
            background: '#fff', border: '1px solid var(--border-1)',
            borderRadius: 12, padding: 30,
          }}>
            <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: 18, fontWeight: 600, color: 'var(--brand-primary-700)', margin: '0 0 12px', letterSpacing: '-0.005em' }}>
              双语是构造出来的，不是翻译出来的。
            </h4>
            <p style={{ fontSize: 14.5, color: 'var(--fg-2)', lineHeight: 1.65, margin: 0 }}>
              上海的管理层与美国的受众读到同一个故事——策略用中文讨论，交付以母语级英文发出，从董事会到新闻署名之间不丢失任何信息。跨境传播多数就悄悄失败在这个转换层。
            </p>
          </div>
        </div>
        <SolutionStatStrip stats={stats} theme="cyan" />
        <div style={{ marginTop: 20, fontSize: 11.5, color: 'var(--fg-3)', lineHeight: 1.5 }}>
          全球传播部（GCO）为 2026 年新设服务线。上列数字为集团平台与其所依托的医学传播业务的审计数字。
        </div>
      </SolutionSection>

      <SolutionSection
        id="boundaries" eyebrow="红线 · 白纸黑字"
        title="我们不做什么。"
        kicker="评价一个传播伙伴，要看它拒绝什么。这些边界写进合同，也写在这里——供你的尽调团队逐条核对。"
        bg="#fff"
      >
        <div style={{
          background: 'var(--bg-2)', border: '1px solid var(--border-1)',
          borderRadius: 16, padding: 36,
        }}>
          <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px 40px' }}>
            {redLines.map((x, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'start', gap: 12 }}>
                <span style={{ color: 'var(--error-500)', flexShrink: 0, marginTop: 2 }}>
                  <i data-lucide="x" width="15" height="15"></i>
                </span>
                <div style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--fg-2)' }}>
                  <strong style={{ color: 'var(--brand-primary-700)' }}>{x.t}</strong> {x.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SolutionSection>

      <ContentReviewCrossSell />
      <SolutionCTA pageMeta={GCO_CN_META} />
      <RelatedSolutions current="global-communications-office" />
      <SolutionFooter />
    </div>
  );
}
window.PageGlobalCommsOfficeCN = PageGlobalCommsOfficeCN;
