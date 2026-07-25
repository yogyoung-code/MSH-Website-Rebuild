/* PageAboutCN.jsx — 关于我们（中文孪生页 /about-cn.html）
   ------------------------------------------------------------------
   读者：中国总部的决策人（CEO / CBO / CMO / 医学总监 / 董秘与 IR）与投资人。
   信任锚点：港交所上市主体、可核验的管理层履历、可审计的交付能力。
   转化层改写，非英文页直译；section 顺序与 id 与 about.html 一一对应，
   便于双语同步维护。

   ⚠ 事实性内容红线：管理层姓名、职务、履历、照片、披露链接，以及所有数字
   与 claim，必须与英文版 about.html 严格一致。姓名的中文写法未经 IR 确认前
   保持英文原样。数字口径（333 万+ = 3.33M+）与港交所季度披露一致。
   ------------------------------------------------------------------ */

const ABOUT_CN = {
  eyebrow: '关于梅斯健康',
  h1: '一家为 AI 时代重建的医学证据与医生互动公司，按港交所上市公司的标准接受审计',
  lede: '梅斯健康 MedSci Healthcare（2415.HK）是一家在港交所上市的医学事务平台母公司，服务全球生物医药与医疗器械企业。我们用 AI 辅助的流程做医学证据、医生互动与医学传播的交付物——每一份都有我们团队的具名医生愿意签核，也经得起法务、IR 与 FDA 评审人逐条核对。',

  statStrip: [
    { value: '2415.HK',   label: '港交所上市',                source: 'HKEX',   year: '2024' },
    { value: '333 万+',   label: '医生网络',                  source: '内部数据', year: '2025' },
    { value: 'AI + PITL', label: '每一份交付物都有医生在环',  source: '内部方法', year: '2026' },
    { value: 'EN + CN',   label: '中英双语医生审核',          source: '内部标准', year: '2026' }
  ],

  whatWeDo: {
    heading: '我们做什么',
    paragraphs: [
      '梅斯健康沿两条路径、四条业务线开展工作。',
      '两条路径是进入中国——为全球申办方在中国境内把证据、医生与内容项目立起来；以及出海美国 / 全球——为总部在中国的申办方，按 FDA、美国支付方与面向美国的期刊认的口径把材料做出来。',
      '四条业务线是医学证据、医生互动、医学传播，以及贯通这三条线的 AI 赋能平台。',
      '每一份交付物都带具名作者、具名医生审核人，以及标注年份的来源链路。'
    ]
  },

  forInvestors: {
    eyebrow: '给投资人与合作方',
    body: '如果你正在为投资、审计、合作或并购核查我们，这一页是入口。下面的链接指向我们的治理、合规、投资者关系与医生工作方法——本页下文说的每一条，你都可以照着逐项核对。',
    links: [
      { label: '投资者关系',            href: 'https://ir.medsci.cn/',    external: true },
      { label: '港交所 2415.HK 公告',   href: 'https://www.hkexnews.hk/', external: true },
      { label: '法务与合规',            href: '/legal' },
      { label: 'AI + 医生在环工作方法', href: '/ai-platform' }
    ]
  },

  leadership: {
    eyebrow: '管理层',
    heading: '公开披露的名字，签核负责的工作',
    lede: '出现在我们港交所披露文件里的名字，和客户交付物上签核的名字是同一批人。以下为主要高管及其公开职务。',
    footerNote: '完整的董事会构成与委员会任命，以我们的港交所年报及企业管治报告为准。',
    cards: [
      {
        title: '董事长兼创始人',
        name: '张发宝 Fabao Zhang',
        bio: '创立梅斯，2021 年 11 月起出任董事长。负责集团整体战略发展、公司治理与管理。安徽中医药大学副教授。中国科学院大学博士。',
        photo: 'https://medsci-customer.medsci.cn/wp-content/uploads/2023/04/paul-300x300.jpg',
        disclosures: 'https://ir.medsci.cn/en/management/'
      },
      {
        title: '联席首席执行官',
        name: '李欣梅 Xinmei Li',
        bio: '2012 年起任上海梅斯联席首席执行官兼董事。曾任佛罗里达州立大学、得克萨斯大学西南医学中心博士后研究员。中国科学技术大学生物物理学博士。',
        photo: 'https://medsci-customer.medsci.cn/wp-content/uploads/2023/04/xinmei-300x300.jpg',
        disclosures: 'https://ir.medsci.cn/en/management/'
      },
      {
        title: '联席首席执行官兼执行董事',
        name: '王帅 Shuai Wang',
        bio: '2024 年 7 月获任联席首席执行官，2022 年 4 月起任执行董事，2016 年起任上海梅斯副总裁。中国医科大学临床医学学士。',
        photo: 'https://medsci-customer.medsci.cn/wp-content/uploads/2023/04/shuai-300x300.jpg',
        disclosures: 'https://ir.medsci.cn/en/management/'
      },
      {
        title: '首席运营官',
        name: '程亮 Liang Cheng',
        bio: '负责法务合规与战略合作。逾 11 年咨询从业经验。国际管理咨询协会会员。上海交通大学 EMBA。',
        photo: 'https://medsci-customer.medsci.cn/wp-content/uploads/2024/07/chengliang-300x300.png',
        disclosures: 'https://ir.medsci.cn/en/management/'
      },
      {
        title: '副总裁',
        name: '杨春 Chun Yang',
        bio: '2012 年起负责上海梅斯的整体战略规划与业务运营管理。',
        photo: 'https://medsci-customer.medsci.cn/wp-content/uploads/2023/04/yog-300x300.jpg',
        disclosures: 'https://ir.medsci.cn/en/management/'
      },
      {
        title: '医学副总裁',
        name: '黄明爱 Mingai Huang',
        bio: '负责梅斯各产品与交付物的医学事务，以及医生审核与签核治理。',
        photo: 'https://medsci-customer.medsci.cn/wp-content/uploads/2023/04/mingai-300x300.jpg',
        disclosures: 'https://ir.medsci.cn/en/management/'
      }
    ]
  },

  network: {
    eyebrow: '333 万+ 医生网络',
    heading: '333 万+ 注册医生——以及这个数字到底指什么',
    lede: '一个数字有没有用，取决于它的定义。下面写清楚 333 万+ 包含什么、我们怎么统计、上一次刷新是什么时候，以及客户在证据与互动工作里怎么用它。',
    twoCol: {
      leftHeading: '「333 万+」包含什么',
      leftBody: '截至上一次刷新，在梅斯健康网络上注册的医生，以在中国持照执业者为主，另有规模较小的境外队列。「注册」指该医生已完成我们的身份核验流程，并接受了我们的合作条款。这个数字是刷新时点去重后的活跃记录数。',
      rightHeading: '不包含什么',
      rightBody: '患者、学生、其他医疗从业者、已退休医生，以及未经核验的联系人。同一位医生在多个梅斯产品上注册的，不重复计数。已选择退出的医生不计入，即使其记录仍留在我们的存档里。'
    },
    methodology: {
      eyebrow: '我们怎么统计',
      body: '身份优先与公开的执业注册库比对，无法比对时以任职单位出具的证明为准。活跃状态按 12 个月滚动窗口重置——12 个月内没有与任何梅斯产品发生互动的医生，从活跃口径中剔除。数字按季度刷新，并随刷新日期一起公布。'
    },
    networkUse: {
      eyebrow: '客户怎么用这个网络',
      body: '网络支撑三类交付物：用于市场规划的 HCP 分群图谱，面向临床与商业工作的顾问会与 KOL 招募，以及符合当地监管要求的继续医学教育（CME）与互动项目。我们不出售名单访问权。我们交付的是范围界定清楚的成果，由具名医生完成。'
    },
    irNote: '医生网络数字与我们的季度业绩披露口径一致。任何重述通过同一个港交所渠道发布。'
  },

  compliance: {
    eyebrow: '合规与治理',
    heading: '给客户做的那套审计留痕，我们对自己用同一套',
    lede: '在梅斯，医学主张不由 AI 作出，由医生作出。下面写清楚我们怎么管这件事，以及外部审阅人或监管方能核验到什么。',
    pillars: [
      {
        heading: '每一份交付物都有医生在环',
        body: '每一份 AI 生成的草稿，都要经具名医生审核，之后客户交付物才会签核。草稿、审核意见与终稿审批都带时间戳并留存。',
        link: { label: '阅读 AI + 医生在环工作方法', href: '/ai-platform' }
      },
      {
        heading: '中英双语医生审核',
        body: '跨境交付物走中英两条医生审核线，中间有一层平行术语表。凡是要跨监管辖区使用的材料，两边签核缺一不可。',
        link: { label: '查看跨境内容冲刺', href: '/solutions/cross-border-medical-content-sprint' }
      },
      {
        heading: '来源链路与披露治理',
        body: '交付物里的每一条主张都链接到具名来源并标注年份。每份草稿都要跑一遍超适应症、公平陈述与披露扫描。审计样本包可按需提供。',
        link: { label: '法务与合规', href: '/legal' }
      },
      {
        heading: 'IR 级别的披露节奏',
        body: '重要数字——包括医生网络数字——与港交所季度披露对齐。重述走同一渠道。我们不另外维护一套区别于 IR 口径的「市场版」头条数字。',
        link: { label: '投资者关系', href: 'https://ir.medsci.cn/', external: true }
      }
    ],
    dataNote: {
      eyebrow: '数据处理',
      body: '在中国境内收集的个人信息留在境内，合同另有约定的场景除外；出境走有书面记录的跨境路径，满足《个人信息保护法》（PIPL）与客户的数据驻留承诺。在美国收集的个人信息按 HIPAA 及适用的 BAA 链路处理。未经逐个项目的明示同意与签署条款，我们不跨客户汇总个人数据。',
      links: [
        { label: '隐私政策', href: '/legal/privacy' },
        { label: '信息披露', href: '/legal/disclosures' }
      ]
    },
    footerCta: {
      body: '如果你正在做供应商安全评估、审计或尽调，需要某一份具体文件，联系我们的合规团队，我们会通过法务把请求走完流程再回复。',
      ctaLabel: '索取合规材料包',
      ctaHref: '/contact.html?topic=compliance_pack'
    }
  }
};

function PageAboutCN() {
  const t = ABOUT_CN;
  const L = (h) => (window.MSH ? window.MSH.L(h) : h);

  return (
    <PageShell hero={
      <section className="about-hero-bg" style={{
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
        overflow: 'hidden',
      }}>
        <style>{`
          .about-hero-bg {
            background-image: url(/assets/photos/hq-night.jpg);
          }
        `}</style>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10,25,47,0.40)',
        }} />

        <div style={{
          position: 'relative',
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(32px, 5vw, 64px) clamp(24px, 6vw, 96px) clamp(48px, 6vw, 80px)',
        }}>
          {/* 面包屑 */}
          <nav aria-label="面包屑导航" style={{
            marginBottom: 24, fontSize: 14,
            color: 'rgba(255,255,255,0.5)',
          }}>
            <a href={L('/')} style={{ color: 'inherit', textDecoration: 'none' }}>首页</a>
            <span style={{ margin: '0 8px' }}>/</span>
            <span>关于我们</span>
          </nav>

          <div style={{
            fontFamily: 'var(--font-slogan)',
            fontSize: 12,
            letterSpacing: '0.16em',
            color: 'var(--brand-accent-500)',
            marginBottom: 16,
          }}>{t.eyebrow}</div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(30px, 4.6vw, 52px)',
            lineHeight: 1.25,
            color: 'var(--white)',
            margin: '0 0 24px',
            maxWidth: 960,
          }}>{t.h1}</h1>

          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.82)',
            lineHeight: 1.75,
            margin: 0,
            maxWidth: 880,
          }}>{t.lede}</p>
        </div>
      </section>
    }>

      {/* 关键数字 */}
      <StatStrip items={t.statStrip} anchor="company" />

      {/* 我们做什么 */}
      <ProseBlock heading={t.whatWeDo.heading}>
        {t.whatWeDo.paragraphs.map((p, i) => (
          <p key={i} style={{ margin: '0 0 16px', lineHeight: 1.85 }}>{p}</p>
        ))}
      </ProseBlock>

      {/* 给投资人与合作方 */}
      <section style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '0 clamp(24px, 6vw, 96px) 64px'
      }}>
        <div style={{
          background: 'var(--bg-2)',
          borderLeft: '3px solid var(--brand-primary-500)',
          padding: '24px 32px'
        }}>
          <div style={{
            fontFamily: 'var(--font-slogan)',
            fontSize: 12,
            letterSpacing: '0.12em',
            color: 'var(--brand-primary-700)',
            marginBottom: 12
          }}>{t.forInvestors.eyebrow}</div>

          <p style={{ fontSize: 15, color: 'var(--fg-1)', lineHeight: 1.8, margin: '0 0 16px' }}>
            {t.forInvestors.body}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, fontSize: 14 }}>
            {t.forInvestors.links.map((l, i) => (
              <a key={i} href={l.external ? l.href : L(l.href)}
                 {...(l.external ? { rel: 'external noopener' } : {})}
                 style={{ color: 'var(--fg-link)', textDecoration: 'underline' }}>
                → {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 管理层 */}
      <section id="leadership" style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px) 0'
      }}>
        <div style={{
          fontFamily: 'var(--font-slogan)',
          fontSize: 12,
          letterSpacing: '0.16em',
          color: 'var(--brand-accent-700)',
          marginBottom: 12
        }}>{t.leadership.eyebrow}</div>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(26px, 3.6vw, 38px)',
          color: 'var(--brand-primary-700)',
          margin: '0 0 16px',
          lineHeight: 1.35
        }}>{t.leadership.heading}</h2>

        <p style={{ fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.8, margin: '0 0 8px', maxWidth: 880 }}>
          {t.leadership.lede}
        </p>
      </section>

      {t.leadership.cards.length > 0 && (
        <LeadershipGridCN leaders={t.leadership.cards} />
      )}

      <section style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '0 clamp(24px, 6vw, 96px) 32px',
        fontSize: 13,
        color: 'var(--fg-3)',
        lineHeight: 1.7
      }}>
        {t.leadership.footerNote}
      </section>

      {/* 333 万+ 医生网络 */}
      <section id="network" style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px) 0'
      }}>
        <div style={{
          fontFamily: 'var(--font-slogan)',
          fontSize: 12,
          letterSpacing: '0.16em',
          color: 'var(--brand-accent-700)',
          marginBottom: 12
        }}>{t.network.eyebrow}</div>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(26px, 3.6vw, 38px)',
          color: 'var(--brand-primary-700)',
          margin: '0 0 16px',
          lineHeight: 1.35
        }}>{t.network.heading}</h2>

        <p style={{ fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.8, margin: '0 0 32px', maxWidth: 880 }}>
          {t.network.lede}
        </p>
      </section>

      <TwoColumn
        left={<>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, margin: '0 0 12px', color: 'var(--brand-primary-700)', lineHeight: 1.4 }}>
            {t.network.twoCol.leftHeading}
          </h3>
          <p style={{ fontSize: 15, color: 'var(--fg-1)', lineHeight: 1.8, margin: 0 }}>
            {t.network.twoCol.leftBody}
          </p>
        </>}
        right={<>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, margin: '0 0 12px', color: 'var(--brand-primary-700)', lineHeight: 1.4 }}>
            {t.network.twoCol.rightHeading}
          </h3>
          <p style={{ fontSize: 15, color: 'var(--fg-1)', lineHeight: 1.8, margin: 0 }}>
            {t.network.twoCol.rightBody}
          </p>
        </>}
      />

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(24px, 6vw, 96px) 32px' }}>
        <div style={{
          fontFamily: 'var(--font-slogan)',
          fontSize: 12,
          letterSpacing: '0.12em',
          color: 'var(--brand-accent-700)',
          marginBottom: 8
        }}>{t.network.methodology.eyebrow}</div>
        <p style={{ fontSize: 15, color: 'var(--fg-1)', lineHeight: 1.8, margin: '0 0 24px', maxWidth: 880 }}>
          {t.network.methodology.body}
        </p>

        <div style={{
          fontFamily: 'var(--font-slogan)',
          fontSize: 12,
          letterSpacing: '0.12em',
          color: 'var(--brand-accent-700)',
          marginBottom: 8
        }}>{t.network.networkUse.eyebrow}</div>
        <p style={{ fontSize: 15, color: 'var(--fg-1)', lineHeight: 1.8, margin: '0 0 24px', maxWidth: 880 }}>
          {t.network.networkUse.body}
        </p>

        <p style={{ fontSize: 13, color: 'var(--fg-3)', lineHeight: 1.7, margin: 0 }}>
          {t.network.irNote}{' '}
          <a href="https://www.hkexnews.hk/" rel="external noopener" style={{ color: 'var(--fg-link)', textDecoration: 'underline' }}>
            港交所 2415.HK
          </a>
        </p>
      </section>

      {/* 合规与治理 */}
      <section id="compliance" style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: 'clamp(48px, 6vw, 96px) clamp(24px, 6vw, 96px) 0'
      }}>
        <div style={{
          fontFamily: 'var(--font-slogan)',
          fontSize: 12,
          letterSpacing: '0.16em',
          color: 'var(--brand-accent-700)',
          marginBottom: 12
        }}>{t.compliance.eyebrow}</div>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(26px, 3.6vw, 38px)',
          color: 'var(--brand-primary-700)',
          margin: '0 0 16px',
          lineHeight: 1.35
        }}>{t.compliance.heading}</h2>

        <p style={{ fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.8, margin: '0 0 32px', maxWidth: 880 }}>
          {t.compliance.lede}
        </p>
      </section>

      <ComplianceTableCN pillars={t.compliance.pillars} />

      <section style={{
        maxWidth: 1280, margin: '0 auto',
        padding: '0 clamp(24px, 6vw, 96px) 32px'
      }}>
        <div style={{
          fontFamily: 'var(--font-slogan)',
          fontSize: 12,
          letterSpacing: '0.12em',
          color: 'var(--brand-accent-700)',
          marginBottom: 8
        }}>{t.compliance.dataNote.eyebrow}</div>
        <p style={{ fontSize: 15, color: 'var(--fg-1)', lineHeight: 1.8, margin: '0 0 12px', maxWidth: 880 }}>
          {t.compliance.dataNote.body}
        </p>
        <div style={{ display: 'flex', gap: 16, fontSize: 13 }}>
          {t.compliance.dataNote.links.map((l, i) => (
            <a key={i} href={L(l.href)} style={{ color: 'var(--fg-link)', textDecoration: 'underline' }}>→ {l.label}</a>
          ))}
        </div>
      </section>

      {/* 收口 CTA */}
      <section style={{
        background: 'var(--bg-2)',
        borderTop: '1px solid var(--border-1)',
        padding: '64px clamp(24px, 6vw, 96px)'
      }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 15, color: 'var(--fg-1)', lineHeight: 1.8, margin: '0 0 24px' }}>
            {t.compliance.footerCta.body}
          </p>
          <a href={L(t.compliance.footerCta.ctaHref)} style={{
            display: 'inline-block',
            padding: '12px 28px',
            background: 'var(--brand-primary-700)',
            color: 'var(--bg-1)',
            fontFamily: 'var(--font-ui)',
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: '0.04em',
            textDecoration: 'none'
          }}>
            {t.compliance.footerCta.ctaLabel}
          </a>
        </div>
      </section>
    </PageShell>
  );
}

window.PageAboutCN = PageAboutCN;
window.ABOUT_CN = ABOUT_CN;
