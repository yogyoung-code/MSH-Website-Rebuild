/* PageContentSprintCN.jsx — 快速起步：跨境内容冲刺（中文版）。
   转化层文案：面向中国总部的医学 / 市场负责人，非 EN 页直译。
   结构与 PageContentSprint.jsx 一一对应（同样的 section 顺序与 id）。 */
const SPRINT_CN_META = {
  eyebrow: '快速起步 · 2 周',
  title: '跨境内容冲刺——14 天，1 份医生签核的双语材料。',
  sub: '和我们合作门槛最低的一条路。固定费用、固定范围，交付 1 份经医学审核的双语材料。用来在更大的合作之前先评估我们。',
  breadcrumb: [
    { label: '首页', href: '/' },
    { label: '解决方案', href: '/' },
    { label: '跨境内容冲刺', href: '#' },
  ],
  theme: 'cyan',
  meta: [
    { k: '周期', v: '14 个自然日 · 固定' },
    { k: '报价', v: '固定费用 · 报价请联系我们' },
    { k: '范围', v: '1 份材料 · English + 简体中文' },
    { k: '签核', v: '美国持照医生 + 中国持照医生质控' },
  ],
  ctaTitle: '选一件材料，发一份 brief，14 天后拿回来。',
  ctaBody: '开始沟通不需要先签 NDA。30 分钟把材料范围定下来，双方确认合适，再各自投入。报价请联系我们。',
  primaryCta: '启动一次冲刺',
  secondaryCta: '看看过往的冲刺交付物',
};

function PageContentSprintCN() {
  const subnav = [
    { id: 'overview',       label: '概览' },
    { id: 'artifact-menu',  label: '材料清单' },
    { id: 'timeline',       label: '14 天节奏' },
    { id: 'whats-included', label: '含与不含' },
    { id: 'faq',            label: '常见问题' },
  ];

  const artifactMenu = [
    { icon: 'file-text',    tag: '选得最多', title: '双语科学摘要',            d: '4–6 页中英文摘要，讲清一个机制、一个适应症或一项试验。适合 KOL 简报与内部对齐。' },
    { icon: 'presentation', tag: '',         title: '双语学术大会海报',        d: '按 ASCO、ESMO、CSCO 或 CMHA 规格做的双语大会海报，从摘要到参考文献，可直接付印。' },
    { icon: 'newspaper',    tag: '',         title: '本地化新闻稿 / KOL 信函', d: '科学表述准确、符合行业准则的双语新闻稿或 KOL 信函，含披露声明模块。' },
    { icon: 'book-open',    tag: '',         title: '医患沟通手册',            d: '双语手册或产品页，事先排查超适应症与公平平衡问题，可直接进合规审核。' },
    { icon: 'mic',          tag: '',         title: '专题会讲者幻灯',          d: '12–18 页双语讲者幻灯，带讲者备注——用于内部专题会或大会时段。' },
    { icon: 'help-circle',  tag: '',         title: '定制材料',                d: '把规格发来。如果 14 天内、两边各一位医生能做完，我们就按冲刺价报价。' },
  ];

  const timeline = [
    { weeks: '1–2',   title: '接 brief 与启动', body: '第 1–2 天。接收 brief、审阅源数据、确认范围，冲刺开始。', deliverable: '冲刺 brief 签字' },
    { weeks: '3–6',   title: '中英双稿',        body: '第 3–6 天。中英文并行起草。AI 辅助检索，引用位逐条填实。', deliverable: '双语初稿 v1' },
    { weeks: '7–10',  title: '双医生质控',      body: '第 7–10 天。美国持照医生审英文，中国持照医生审中文。两边都签字。', deliverable: '质控签核' },
    { weeks: '11–14', title: '对齐与交付',      body: '第 11–14 天。消除两版差异，附上溯源链路，两种语言的定稿一并交付。', deliverable: '定稿 + 审计日志' },
  ];

  const faqs = [
    { q: '我们要的材料不在清单里，怎么办？',
      a: '把规格发来。如果 14 天内、两边各一位医生审核能做完，我们就按冲刺的固定价报价。做不完，我们会直说，并建议走更长的合作。' },
    { q: '开始前需要签 NDA 吗？',
      a: '不需要。30 分钟的通话先定范围、确认是否合适。源数据离开你这边之前，会先签 NDA。' },
    { q: '材料的所有权归谁？',
      a: '付款后归你。我们保留匿名化的项目统计口径——只有数量与交付周期，不含你的内容。' },
    { q: '冲刺能转成更大的合作吗？',
      a: '可以——冲刺费用可抵扣 60 天内启动的 30 天试点或完整解决方案合作。' },
    { q: '审核人会具名吗？',
      a: '会。每份材料交付时，审计日志上都有一位具名的美国持照医生和一位具名的中国持照医生。' },
    { q: '需要第三语言（日文、韩文等）怎么办？',
      a: '作为冲刺的扩展项，可按需提供。加 5–7 天，并在那一侧增加一位对应的审核人。' },
  ];

  return (
    <div>
      <SolutionPageHeader pageMeta={SPRINT_CN_META} />
      <SolutionSubNav items={subnav} theme="cyan" />

      <SolutionSection
        id="overview" eyebrow="概览"
        title="用两周试驾我们的流水线。"
        kicker="和我们交付其他一切用的是同一条流水线——AI 辅助、双医生审核——压缩到 1 份材料、1 个固定价、1 个固定周期。"
        bg="#fff"
      >
        <div className="two-col-grid" style={{
          background: 'linear-gradient(180deg, #D6F1F9 0%, #FFFFFF 100%)',
          border: '1px solid var(--brand-accent-500)',
          borderRadius: 16, padding: 40,
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32,
        }}>
          {[
            { icon: 'clock',              k: '14 天',   t: '周期写死。',     d: '自然日，不是工作日。第 14 天你手上有一份定稿的双语材料。' },
            { icon: 'circle-dollar-sign', k: '固定费用', t: '不追加范围。',   d: '清单内 1 份材料，1 个价格。定制材料事先报价。' },
            { icon: 'shield-check',       k: '两个签名', t: '双医生质控。',   d: '一位具名的美国持照医生签英文版，一位具名的中国持照医生签中文版。' },
          ].map((c, i) => (
            <div key={i} style={{
              borderLeft: i === 0 ? 'none' : '1px dashed var(--brand-accent-500)',
              paddingLeft: i === 0 ? 0 : 24,
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 10,
                background: 'var(--brand-accent-500)', color: 'var(--brand-primary-900)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16,
              }}>
                <i data-lucide={c.icon} width="20" height="20"></i>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--brand-accent-700)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8, fontWeight: 600 }}>{c.k}</div>
              <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: 18, fontWeight: 600, color: 'var(--brand-primary-700)', margin: '0 0 10px', letterSpacing: '-0.005em' }}>{c.t}</h4>
              <p style={{ fontSize: 13.5, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>{c.d}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection
        id="artifact-menu" eyebrow="材料清单 · 选一件"
        title="冲刺周期内能交付的六类材料。"
        kicker="你的需求落在其中一类，冲刺就能吃下。落不进去就把规格发来——我们要么报一个定制冲刺的价，要么建议走更长的合作。"
        bg="var(--bg-2)"
      >
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {artifactMenu.map((a, i) => (
            <div key={i} style={{
              background: '#fff', border: `1px solid ${a.tag ? 'var(--brand-accent-500)' : 'var(--border-1)'}`,
              borderRadius: 12, padding: 24, position: 'relative',
            }}>
              {a.tag && (
                <div style={{
                  position: 'absolute', top: -10, right: 16,
                  padding: '3px 9px', borderRadius: 4,
                  background: 'var(--brand-accent-500)', color: 'var(--brand-primary-900)',
                  fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
                }}>{a.tag}</div>
              )}
              <div style={{
                width: 38, height: 38, borderRadius: 8,
                background: 'var(--brand-accent-100)', color: 'var(--brand-accent-700)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14,
              }}>
                <i data-lucide={a.icon} width="18" height="18"></i>
              </div>
              <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: 16, fontWeight: 600, color: 'var(--brand-primary-700)', margin: '0 0 10px', letterSpacing: '-0.005em', lineHeight: 1.3 }}>{a.title}</h4>
              <p style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0 }}>{a.d}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection
        id="timeline" eyebrow="14 天节奏"
        title="一次冲刺，逐天发生什么。"
        bg="#fff"
      >
        <PhaseTimeline phases={timeline} theme="cyan" />
      </SolutionSection>

      <SolutionSection
        id="whats-included" eyebrow="含什么 · 不含什么"
        title="范围有边界，不会中途加项。"
        bg="var(--bg-2)"
      >
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div style={{
            background: '#fff', border: '1px solid var(--brand-accent-500)',
            borderRadius: 12, padding: 28,
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--brand-accent-700)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14, fontWeight: 600 }}>包含</div>
            {[
              '1 份双语材料，English + 简体中文',
              '基于你的源材料包做 AI 辅助检索',
              '引用位填上年份与出处',
              '美国持照医生质控签核（英文版）',
              '中国持照医生质控签核（中文版）',
              '合规预扫（对照 PhRMA / RDPAC 准则）',
              '定稿材料 + 可导出的审计日志',
              '60 天内可抵扣完整合作的费用额度',
            ].map((x, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'start', gap: 10, fontSize: 13.5, color: 'var(--fg-1)', marginBottom: 10, lineHeight: 1.5 }}>
                <span style={{ color: 'var(--brand-accent-700)', flexShrink: 0, marginTop: 1 }}><i data-lucide="check" width="14" height="14"></i></span>{x}
              </div>
            ))}
          </div>
          <div style={{
            background: '#fff', border: '1px solid var(--border-1)', borderRadius: 12, padding: 28,
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--fg-3)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14, fontWeight: 600 }}>不包含</div>
            {[
              '新的原始研究或数据采集',
              '监管申报递交（国家药监局 / FDA）',
              '顾问委员会招募与会议组织',
              '伦理委员会（IRB）材料起草',
              '生产制作：印刷、视频、展台搭建',
              '第三语言翻译（日文 / 韩文——可另议）',
              '超出 1 轮的无限次修改',
            ].map((x, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'start', gap: 10, fontSize: 13.5, color: 'var(--fg-2)', marginBottom: 10, lineHeight: 1.5 }}>
                <span style={{ color: 'var(--fg-3)', flexShrink: 0, marginTop: 1 }}><i data-lucide="minus" width="14" height="14"></i></span>{x}
              </div>
            ))}
          </div>
        </div>
      </SolutionSection>

      <SolutionSection
        id="faq" eyebrow="常见问题"
        title="冲刺开始前，被问得最多的几个问题。"
        bg="#fff"
      >
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {faqs.map((f, i) => (
            <div key={i} style={{
              background: 'var(--bg-2)', border: '1px solid var(--border-1)',
              borderRadius: 12, padding: 24,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--brand-accent-700)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10, fontWeight: 600 }}>
                Q.{String(i + 1).padStart(2, '0')}
              </div>
              <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: 16, fontWeight: 600, color: 'var(--brand-primary-700)', margin: '0 0 10px', letterSpacing: '-0.005em', lineHeight: 1.35 }}>{f.q}</h4>
              <p style={{ fontSize: 13.5, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionCTA pageMeta={SPRINT_CN_META} />
      <RelatedSolutions current="cross-border-medical-content-sprint" />
      <SolutionFooter />
    </div>
  );
}
window.PageContentSprintCN = PageContentSprintCN;
