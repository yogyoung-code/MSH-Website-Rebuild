/* PageContentReviewCN.jsx — 入口型产品：内容合规审核（中文版）。
   转化层文案：面向中国总部的市场 / 医学 / 法务负责人，非 EN 页直译。
   结构与 PageContentReview.jsx 一一对应（同样的 section 顺序与 id）。 */
const CONTENT_REVIEW_CN_META = {
  eyebrow: '快速起步 · 3–5 个工作日',
  title: '你的材料，由医学专家做合规审核，并给出改写建议。',
  sub: '把现有材料发过来。3–5 个工作日后拿到一份按风险分级标注的审核结果，每条问题附改写建议，由具名专家签核。这是和我们合作门槛最低的一条路。',
  breadcrumb: [
    { label: '首页', href: '/' },
    { label: '解决方案', href: '/' },
    { label: '内容合规审核', href: '#' },
  ],
  theme: 'cyan',
  meta: [
    { k: '周期', v: '3–5 个工作日 · 固定' },
    { k: '报价', v: '按页数计 · 报价请联系我们' },
    { k: '范围', v: '你的现有材料 · 任意语言对' },
    { k: '签核', v: '具名医学专家审核人' },
  ],
  ctaTitle: '把材料发过来，几天之内拿到专家审核结果。',
  ctaBody: '开始沟通不需要先签 NDA。15 分钟的通话把范围定下来，双方确认合适，再各自投入。报价请联系我们。',
  primaryCta: '提交材料，申请审核',
  primaryHref: '/contact.html?intent=rfp',
  secondaryCta: '先和专家聊聊',
  secondaryHref: '/contact.html',
};

function PageContentReviewCN() {
  const subnav = [
    { id: 'overview',      label: '概览' },
    { id: 'tiers',         label: '服务分层' },
    { id: 'materials',     label: '审什么' },
    { id: 'process',       label: '怎么做' },
    { id: 'upgrade-path',  label: '升级路径' },
    { id: 'faq',           label: '常见问题' },
  ];

  const tiers = [
    {
      tag: '第 1 层',
      title: '内容合规审核',
      timeline: '3–5 个工作日',
      desc: '审阅你的现有材料，标出合规风险、超适应症表述、缺证据支撑的主张与不专业的措辞——每一条都给出改写建议。',
      included: [
        '按风险分级的标注（严重 / 提示 / 文风）',
        '每条问题配一版改写建议',
        '带风险评分卡的审核小结',
        '具名专家审核人签核',
      ],
      ideal: '产品册、官网文案、销售 PPT、合作方邮件、一页纸材料',
      accent: false,
    },
    {
      tag: '第 2 层',
      title: '跨境本地化包',
      timeline: '5–10 个工作日',
      desc: '包含第 1 层全部内容，另加完整双语改写——不是逐字翻译，而是面向目标市场、带合规判断的医学本地化。',
      included: [
        '第 1 层完整审核与标注',
        '中英双向医学本地化（不是翻译）',
        '目标市场的语气与术语适配',
        '经专家审核的双语交付物',
      ],
      ideal: '展会材料、KOL 演示、经销商资料包、尽调文件、培训内容',
      accent: true,
    },
    {
      tag: '第 3 层',
      title: '主张与传播就绪度',
      timeline: '10–15 个工作日',
      desc: '对你全部对外材料做一次深度梳理——主张风险地图、支持点归集、FAQ 与异议应对，以及一套可交给合作方的文档。',
      included: [
        '主张风险审计（有证据支撑 vs. 无支撑）',
        '市场传播材料优化',
        'FAQ 与异议应对文档',
        '医学支持点素材库',
      ],
      ideal: '准备进入美国市场、启动经销商合作或做投资者沟通的企业',
      accent: false,
    },
  ];

  const materialTypes = [
    { icon: 'file-text',     label: '产品册与一页纸材料' },
    { icon: 'presentation',  label: '销售与合作方演示' },
    { icon: 'globe',         label: '官网文案与落地页' },
    { icon: 'mail',          label: '邮件模板与外联信' },
    { icon: 'users',         label: 'KOL 沟通材料' },
    { icon: 'building',      label: '展会与学术大会物料' },
    { icon: 'clipboard-list',label: '尽调与投资者材料' },
    { icon: 'book-open',     label: '培训与入职文档' },
    { icon: 'package',       label: '包装主张与标签文案' },
    { icon: 'help-circle',   label: '其他格式——告诉我们' },
  ];

  const process = [
    { step: '01', title: '上传与定范围', body: '把材料发过来。15 分钟的通话确认范围、页数与交期。这个阶段不需要 NDA。', deliverable: '范围确认单' },
    { step: '02', title: 'AI 预扫',     body: 'AI 流水线先扫出跨文档的合规、术语与一致性问题，形成一份结构化问题清单，交给专家审阅。', deliverable: '预扫报告' },
    { step: '03', title: '专家审核',    body: '一位具名的医学或法规专家逐条审阅每个标记项，加上专业判断，写出改写建议，并给出风险等级（严重 / 提示 / 文风）。涉及临床内容时，可按需安排医生审核人。', deliverable: '标注稿' },
    { step: '04', title: '交付与复盘',  body: '你拿到带标注的文档、一份含风险评分卡的审核小结，以及一次 20 分钟的复盘通话，逐条过严重项。', deliverable: '交付包 + 复盘' },
  ];

  const upgradePath = [
    { label: '内容合规审核', sub: '3–5 天 · 固定费用', desc: '审阅你的现有材料',     active: true },
    { label: '跨境内容冲刺', sub: '14 天 · 固定费用',  desc: '产出一份新的双语材料', active: false },
    { label: '30 天试点',    sub: '30 天',             desc: '深度诊断型合作',       active: false },
    { label: '完整合作',     sub: '定制范围',           desc: '完整解决方案伙伴关系', active: false },
  ];

  const faqs = [
    { q: '材料不是中文或英文，怎么办？',
      a: '中英文我们原生审。日文、韩文及其他语种，我们与经过核验的医学语言专家合作，交期加 2 个工作日。报价请联系我们。' },
    { q: '提交材料前需要先签 NDA 吗？',
      a: '不需要。我们先定范围、确认是否合适，你不必先给出敏感内容。源材料离开你这边之前，会先签 NDA。' },
    { q: '计价上的「一页」怎么算？',
      a: '一页 = 一页标准 A4 / Letter 的内容，或一张幻灯片。表格与图形计入内容。确切页数在范围沟通会上确认。' },
    { q: '谁来审我的材料？',
      a: '我们内部团队里一位具名的医学或法规专家。姓名、资质与专业背景会出现在审核小结上。需要临床签核的项目，我们引入持照医生审核人。' },
    { q: '审核费用能抵扣更大的合作吗？',
      a: '可以——内容合规审核的费用，可抵扣 60 天内启动的跨境内容冲刺、30 天试点或完整解决方案合作。' },
    { q: '这和翻译公司有什么不同？',
      a: '翻译公司优化的是语言准确性。我们优化的是法规合规、医学准确与市场就绪度。每一条问题由医学或法规专家做风险分级，不是由语言人员。' },
  ];

  return (
    <div>
      <SolutionPageHeader pageMeta={CONTENT_REVIEW_CN_META} />
      <SolutionSubNav items={subnav} theme="cyan" />

      {/* 概览 */}
      <SolutionSection id="overview" eyebrow="为什么有这项服务" title="材料是对方对你的初次印象——它得经得起专家看。">
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--fg-2)', margin: '0 0 16px' }}>
              多数做跨境的医疗健康企业缺的不是翻译，而是有人在合作方、监管方或 KOL 看到之前，把现有材料里的合规雷区先挑出来。
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--fg-2)', margin: '0 0 16px' }}>
              一份写着「临床验证」却没有证据支撑的产品册。一套把器械分类搞错的合作方 PPT。一封带超适应症暗示的邮件模板。这些不是语言问题，是医学传播问题。
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--fg-2)', margin: 0 }}>
              我们做这项服务，是因为反复看到同一件事：产品打磨了几个月，却在见面的头一场会上因为材料不够专业丢掉了可信度。
            </p>
          </div>
          <div style={{
            background: 'var(--bg-2)', borderRadius: 12, padding: 28,
            border: '1px solid var(--border-1)',
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-accent-700)', marginBottom: 16 }}>
              别人容易漏掉、我们会挑出来的
            </div>
            {[
              '超适应症或缺证据支撑的疗效表述',
              '监管分类错误',
              '缺失的公平平衡（fair balance）表述',
              '不合规的对比性表述',
              '跨文档的术语不一致',
              '与目标市场的文化错位',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'start', marginBottom: 10, fontSize: 14, color: 'var(--fg-1)' }}>
                <span style={{ color: 'var(--brand-accent-700)', flexShrink: 0, marginTop: 2 }}>
                  <i data-lucide="alert-triangle" width="14" height="14"></i>
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SolutionSection>

      {/* 服务分层 */}
      <SolutionSection id="tiers" eyebrow="服务分层" title="三层，按需要的深度挑一层。" bg="var(--bg-2)">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="two-col-grid">
          {tiers.map((t, i) => (
            <div key={t.tag} style={{
              background: '#fff', border: `1px solid ${t.accent ? 'var(--brand-accent-300)' : 'var(--border-1)'}`,
              borderRadius: 12, padding: 28, display: 'flex', flexDirection: 'column',
              position: 'relative',
            }}>
              {t.accent && <div style={{
                position: 'absolute', top: -1, left: 24, right: 24, height: 3,
                background: 'var(--brand-accent-500)', borderRadius: '0 0 2px 2px',
              }}></div>}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{
                  padding: '3px 9px', borderRadius: 4, fontSize: 10, fontWeight: 600,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  background: t.accent ? 'var(--brand-accent-100)' : 'var(--brand-primary-100)',
                  color: t.accent ? 'var(--brand-accent-700)' : 'var(--brand-primary-700)',
                }}>{t.tag}</span>
                <span style={{ fontSize: 11, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', marginLeft: 'auto' }}>{t.timeline}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-ui)', fontSize: 20, fontWeight: 600, color: 'var(--brand-primary-700)', margin: '0 0 10px' }}>{t.title}</h3>
              <p style={{ fontSize: 13.5, color: 'var(--fg-2)', lineHeight: 1.6, margin: '0 0 18px' }}>{t.desc}</p>
              <div style={{ borderTop: '1px dashed var(--border-1)', paddingTop: 14, marginBottom: 16 }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', color: 'var(--fg-3)', textTransform: 'uppercase', marginBottom: 10 }}>包含</div>
                {t.included.map(item => (
                  <div key={item} style={{ display: 'flex', gap: 8, alignItems: 'start', fontSize: 13, color: 'var(--fg-1)', marginBottom: 6 }}>
                    <span style={{ color: 'var(--brand-accent-700)', flexShrink: 0 }}><i data-lucide="check" width="14" height="14"></i></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 'auto', fontSize: 12, color: 'var(--fg-3)', fontStyle: 'italic' }}>
                适合：{t.ideal}
              </div>
              <div style={{ marginTop: 16 }}>
                <Button variant={t.accent ? 'primary' : 'outline'}>获取范围与报价</Button>
              </div>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 24, padding: '16px 20px', background: 'var(--brand-primary-100)',
          borderRadius: 8, fontSize: 13, color: 'var(--brand-primary-700)', lineHeight: 1.6,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <i data-lucide="info" width="16" height="16" style={{ flexShrink: 0, color: 'var(--brand-primary-500)' }}></i>
          <span><strong>费用抵扣：</strong>任一层的审核费用，均可抵扣 60 天内启动的跨境内容冲刺、30 天试点或完整合作。</span>
        </div>
      </SolutionSection>

      {/* 审什么 */}
      <SolutionSection id="materials" eyebrow="审什么" title="只要它代表你的公司去见医生、合作方或监管方，我们就审。">
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
          {materialTypes.map(m => (
            <div key={m.label} style={{
              background: 'var(--bg-2)', border: '1px solid var(--border-1)',
              borderRadius: 10, padding: '20px 16px', textAlign: 'center',
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10, margin: '0 auto 12px',
                background: 'var(--brand-accent-100)', color: 'var(--brand-accent-700)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <i data-lucide={m.icon} width="20" height="20"></i>
              </div>
              <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--fg-1)', lineHeight: 1.4 }}>{m.label}</div>
            </div>
          ))}
        </div>
      </SolutionSection>

      {/* 怎么做 */}
      <SolutionSection id="process" eyebrow="怎么做" title="上传、审核、交付。四步，没有意外。" bg="var(--bg-2)">
        <PhaseTimeline phases={process} theme="cyan" />
      </SolutionSection>

      {/* 升级路径 */}
      <SolutionSection id="upgrade-path" eyebrow="升级路径" title="从这里开始，需要多深就走多深。">
        <div style={{ display: 'flex', gap: 0, alignItems: 'stretch' }}>
          {upgradePath.map((u, i) => (
            <div key={u.label} style={{
              flex: 1, padding: '24px 20px', position: 'relative',
              background: u.active ? 'var(--brand-accent-100)' : '#fff',
              border: `1px solid ${u.active ? 'var(--brand-accent-300)' : 'var(--border-1)'}`,
              borderRadius: i === 0 ? '12px 0 0 12px' : i === upgradePath.length - 1 ? '0 12px 12px 0' : 0,
              borderLeft: i > 0 ? 'none' : undefined,
            }}>
              {u.active && <div style={{
                position: 'absolute', top: 8, right: 12,
                fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
                padding: '2px 7px', borderRadius: 3,
                background: 'var(--brand-accent-700)', color: '#fff',
              }}>当前位置</div>}
              <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--brand-primary-700)', marginBottom: 4 }}>{u.label}</div>
              <div style={{ fontSize: 11, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', marginBottom: 8 }}>{u.sub}</div>
              <div style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.5 }}>{u.desc}</div>
              {i < upgradePath.length - 1 && (
                <div style={{
                  position: 'absolute', right: -10, top: '50%', transform: 'translateY(-50%)',
                  width: 20, height: 20, background: 'var(--bg-1)', border: '1px solid var(--border-1)',
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, color: 'var(--brand-accent-700)', zIndex: 1,
                }}>→</div>
              )}
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 20, fontSize: 13, color: 'var(--fg-3)' }}>
          每一步的费用都可抵扣下一步——同一块地不会让你付两次钱。
        </div>
      </SolutionSection>

      {/* 常见问题 */}
      <SolutionSection id="faq" eyebrow="常见问题" title="关于内容合规审核，问得最多的几个。" bg="var(--bg-2)">
        <div style={{ maxWidth: 800 }}>
          {faqs.map((f, i) => (
            <details key={i} style={{
              borderBottom: '1px solid var(--border-1)', padding: '20px 0',
            }}>
              <summary style={{
                fontSize: 15, fontWeight: 600, color: 'var(--brand-primary-700)',
                cursor: 'pointer', listStyle: 'none', display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <i data-lucide="chevron-right" width="16" height="16" style={{ color: 'var(--brand-accent-700)', flexShrink: 0, transition: 'transform 200ms' }}></i>
                {f.q}
              </summary>
              <div style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.65, paddingTop: 12, paddingLeft: 26 }}>
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </SolutionSection>

      {/* 免责声明 */}
      <div style={{ padding: '0 clamp(16px, 4vw, 40px)' }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '20px 0',
          borderTop: '1px solid var(--border-1)',
          fontSize: 11.5, color: 'var(--fg-3)', lineHeight: 1.6,
        }}>
          [草稿 — 待法务 / IR 签核] 梅斯健康提供合规审核支持与医学传播审核，不构成法律意见。本服务不构成监管申报，也不构成法律顾问服务。
        </div>
      </div>

      <SolutionCTA pageMeta={CONTENT_REVIEW_CN_META} />
      <RelatedSolutions current="content-review" />
      <SolutionFooter />
    </div>
  );
}

window.PageContentReviewCN = PageContentReviewCN;
