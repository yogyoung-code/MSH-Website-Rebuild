/* i18n.js — 全站中英双语层（MSH Website Rebuild）
   ------------------------------------------------------------------
   设计要点：
   1. 每个页面在 <head> 里设 window.PAGE_LANG = 'EN' | 'CN'（默认 EN）。
   2. 中文孪生页命名约定：foo.html → foo-cn.html；目录页 /x/ → /x/index-cn.html；
      首页 / → /index-cn.html。已上线的中文页登记在 CN_PAGES 里。
   3. MSH.L(href) 会在 CN 语境下自动把站内链接改指向中文孪生页；
      若该页尚无中文版，则原样返回英文链接（不产生死链）。
   4. MSH.altHref() 返回当前页的语言孪生地址；没有则返回 null，
      语言切换器据此置灰（用户口径：有中文版才可点）。
   5. 共享导航/页脚文案走 DICT，改一次全站生效；页面正文仍走中文孪生 JSX。
   ------------------------------------------------------------------ */
(function (w) {
  'use strict';

  /* ========== 1. 中文孪生页注册表（存在即可点） ========== */
  /* 只登记「已经生成」的中文页；新增中文页时把路径加进来即可全站生效。 */
  var CN_PAGES = [
    '/404-cn.html',
    '/about-cn.html',
    '/ai-platform-cn.html',
    '/ai-platform-deepevidence-cn.html',
    '/ai-platform-seekevidence-cn.html',
    '/case-studies/entering-china-evidence-hcp-cn.html',
    '/case-studies/entering-china-localized-content-cn.html',
    '/case-studies/going-global-fda-evidence-bridge-cn.html',
    '/case-studies/index-cn.html',
    '/contact-cn.html',
    '/index-cn.html',
    '/insights/ai-driven-medical-affairs-cn.html',
    '/insights/bridging-china-data-fda-cn.html',
    '/insights/china-rwe-regulatory-landscape-cn.html',
    '/insights/hcp-engagement-connected-channels-cn.html',
    '/insights/index-cn.html',
    '/insights/medical-affairs-2030-cn.html',
    '/insights/named-patient-programs-china-cn.html',
    '/legal/disclosures-cn.html',
    '/legal/privacy-cn.html',
    '/legal/terms-cn.html',
    '/pilots/china-evidence-sprint-cn.html',
    '/pilots/fda-evidence-gap-diagnostic-cn.html',
    '/services/other-engagements-cn.html',
    '/solutions/biostatistics-data-management-cn.html',
    '/solutions/content-review-cn.html',
    '/solutions/cross-border-medical-content-sprint-cn.html',
    '/solutions/entering-china-cn.html',
    '/solutions/global-communications-office-cn.html',
    '/solutions/going-global-us-cn.html',
    '/solutions/medical-communications-cn.html',
    '/solutions/medical-evidence-cn.html',
    '/solutions/physician-engagement-cn.html',
    '/solutions/physician-research-cn.html'
  ];
  var CN_SET = {};
  for (var i = 0; i < CN_PAGES.length; i++) CN_SET[CN_PAGES[i]] = true;

  /* ========== 2. 路径工具 ========== */
  function splitHref(href) {
    var m = String(href).match(/^([^?#]*)([?#].*)?$/);
    return { path: m[1] || '', rest: m[2] || '' };
  }
  function isInternal(href) {
    if (!href) return false;
    href = String(href);
    if (/^(https?:)?\/\//i.test(href)) return false;   // 站外
    if (/^(mailto:|tel:)/i.test(href)) return false;
    return href.charAt(0) === '/' || href.charAt(0) === '#';
  }
  /* 归一化：把 '/', '/x/' 补成 index.html */
  function normalize(path) {
    if (!path) return '/index.html';
    if (path === '/') return '/index.html';
    if (path.charAt(path.length - 1) === '/') return path + 'index.html';
    if (path.indexOf('.') === -1) return path + '.html';  // 无扩展名的干净 URL
    return path;
  }
  function toCN(path) {
    var p = normalize(path);
    if (/-cn\.html$/.test(p)) return p;
    return p.replace(/\.html$/, '-cn.html');
  }
  function toEN(path) {
    var p = normalize(path);
    return p.replace(/-cn\.html$/, '.html');
  }
  function cnExists(path) { return !!CN_SET[toCN(path)]; }

  /* ========== 3. 当前语言 ========== */
  function lang() { return (w.PAGE_LANG === 'CN' || w.PAGE_LANG === 'zh' || w.PAGE_LANG === 'zh-CN') ? 'CN' : 'EN'; }

  /* ========== 4. 站内链接本地化 ========== */
  /* CN 语境下把 /solutions/x.html → /solutions/x-cn.html（仅当中文版存在）。*/
  function L(href) {
    if (lang() !== 'CN' || !isInternal(href)) return href;
    var s = splitHref(href);
    if (!s.path) return href;                 // 纯锚点 '#pilots'
    if (s.path === '/' || s.path === '') {    // 首页（含 '/#pilots'）
      return cnExists('/') ? '/index-cn.html' + s.rest : href;
    }
    return cnExists(s.path) ? toCN(s.path) + s.rest : href;
  }

  /* ========== 5. 语言孪生地址 ========== */
  function altHref() {
    if (w.LANG_ALTERNATE_HREF) return w.LANG_ALTERNATE_HREF;   // 页面显式覆盖优先
    var path = w.location ? w.location.pathname : '/';
    if (lang() === 'CN') return toEN(path);                    // 中文页 → 英文原页恒存在
    return cnExists(path) ? toCN(path) : null;                 // 英文页 → 仅当中文版存在
  }

  /* ========== 6. 共享文案词典 ========== */
  var DICT = {
    EN: {
      slogan: 'Improving Healthcare Quality',
      listed: 'HKEX listed · 2415.HK',
      ir: 'Investor Relations',
      irHref: 'https://ir.medsci.cn/en/',
      cta: 'Talk to an Expert',
      openMenu: 'Open menu', closeMenu: 'Close menu',
      langLabel: 'EN', langOther: '中文',
      langUnavailable: 'Chinese version coming soon',
      nav: [
        { label: 'Solutions', hasMega: true },
        { label: 'Case Studies', href: '/case-studies/' },
        { label: 'AI Platform', href: '/ai-platform.html' },
        { label: 'Insights', href: '/insights/' },
        { label: 'About', href: '/about.html' }
      ],
      navQuick: 'Physician Research',
      megaCols: ['By Path · Strategy', 'By Deliverable · Block', 'Quick Start · Entry'],
      mega: {
        strategic: [
          { title: 'Entering China',    desc: 'Evidence, regulatory and HCP traction inside China.', href: '/solutions/entering-china.html',  tag: 'Navy' },
          { title: 'Going Global (US)', desc: 'US / global launch readiness for China innovators.',  href: '/solutions/going-global-us.html', tag: 'Cyan' }
        ],
        deliverables: [
          { title: 'Medical Evidence',       desc: 'RWE · Registry · Literature · HEOR.',                  href: '/solutions/medical-evidence.html' },
          { title: 'Physician Engagement',   desc: 'Surveys · Advisory · KOL · CME · 3.33M+ network.',     href: '/solutions/physician-engagement.html' },
          { title: 'Medical Communications', desc: 'Publications · Congress · Localization · Media & PR.', href: '/solutions/medical-communications.html' },
          { title: 'Biostatistics & Data Management', desc: 'CDISC datasets · EDC · SAP · FDA / NMPA submission.', href: '/solutions/biostatistics-data-management.html', tag: 'New' },
          { title: 'AI-Enabled Platform',    desc: 'DeepEvidence · SeekEvidence · PITL · QC.',             href: '/ai-platform.html', tag: 'Platform' }
        ],
        quickStart: [
          { title: 'Physician Research',          desc: 'HCP surveys & insights — an agile study fields in days.',  href: '/solutions/physician-research.html', tag: 'Fastest' },
          { title: 'Content Review',              desc: 'Compliance-flagged review of your materials in 3–5 days.', href: '/solutions/content-review.html',     tag: 'New' },
          { title: 'Cross-Border Content Sprint', desc: 'One bilingual artifact, physician-reviewed, in 2 weeks.',  href: '/solutions/cross-border-medical-content-sprint.html', tag: 'Sprint' },
          { title: '30-Day Pilots',               desc: 'China Evidence Sprint — a bounded 30-day engagement.',     href: '/#pilots', tag: 'Pilots' }
        ]
      },
      shell: {
        atAGlance: 'At a glance',
        onThisPage: 'On this page',
        timeline: function (n) { return 'Engagement timeline · ' + n + ' phases'; },
        week: function (w) { return 'Wk ' + w; },
        step: function (n) { return 'Step ' + n; },
        deliverable: function (n) { return 'Deliverable ' + n; },
        learnMore: 'Learn more',
        primaryCta: 'Book a scoping call',
        secondaryCta: 'See related case studies',
        nextStep: 'Next step',
        ndaNote: 'NDA-ready · Reply within 2 business days',
        relatedTitle: 'Related solutions',
        relatedLede: 'Continue exploring our solutions library.',
        backHome: '← Back to homepage',
        input: 'Input', output: 'Output',
        verified: 'Verified', inDev: 'In Dev',
        crossEyebrow: 'Quick start · 3–5 days',
        crossTitle: 'Not ready for a full engagement?',
        crossBody: 'Start with a Medical & Compliance Content Review — submit your existing materials and get expert-reviewed feedback in 3–5 business days.',
        tags: {
          path: 'Path · Strategy', block: 'Business Block', gco: 'Build & Operate · New',
          fastest: 'Quick Start · Fastest', sprint: 'Quick Start · 2 wks', review: 'Quick Start · 3–5 days'
        },
        related: {
          'entering-china': 'Entering China',
          'going-global-us': 'Going Global (US)',
          'medical-evidence': 'Medical Evidence',
          'physician-engagement': 'Physician Engagement',
          'medical-communications': 'Medical Communications',
          'global-communications-office': 'Global Communications Office',
          'biostatistics-data-management': 'Biostatistics & Data Management',
          'physician-research': 'Physician Research',
          'cross-border-medical-content-sprint': 'Cross-Border Content Sprint',
          'content-review': 'Content Review'
        }
      },
      footerBlurb: 'AI-enabled medical review and a physician network helping US ↔ China healthcare innovators land cross-border evidence, communication and market-readiness.',
      footerNofollow: '* rel="nofollow" — secondary services, not on sitemap.',
      copyright: '© 2026 MedSci Healthcare (2415.HK). All rights reserved.',
      footerCols: [
        { title: 'Solutions', items: [
          { label: 'Entering China',              href: '/solutions/entering-china.html' },
          { label: 'Going Global (US)',           href: '/solutions/going-global-us.html' },
          { label: 'Medical Evidence',            href: '/solutions/medical-evidence.html' },
          { label: 'Physician Engagement',        href: '/solutions/physician-engagement.html' },
          { label: 'Physician Research',          href: '/solutions/physician-research.html' },
          { label: 'Medical Communications',      href: '/solutions/medical-communications.html' },
          { label: 'Global Communications Office',href: '/solutions/global-communications-office.html' },
          { label: 'Biostatistics & Data Mgmt',   href: '/solutions/biostatistics-data-management.html' },
          { label: 'Content Review',              href: '/solutions/content-review.html' }
        ]},
        { title: 'Pilots', items: [
          { label: '30-Day China Sprint',   href: '/pilots/china-evidence-sprint.html' },
          { label: '30-Day FDA Diagnostic', href: '/pilots/fda-evidence-gap-diagnostic.html' },
          { label: 'Cross-Border Sprint',   href: '/solutions/cross-border-medical-content-sprint.html' }
        ]},
        { title: 'Resources', items: [
          { label: 'Case Studies',     href: '/case-studies/' },
          { label: 'AI Platform',      href: '/ai-platform.html' },
          { label: 'Insights',         href: '/insights/' },
          { label: 'About MedSci',     href: '/about.html' },
          { label: 'Contact',          href: '/contact.html' },
          { label: 'Other services *', href: '/services/other-engagements.html', rel: 'nofollow' }
        ]},
        { title: 'Legal & IR', items: [
          { label: 'Terms of Use',         href: '/legal/terms.html' },
          { label: 'Privacy Policy',       href: '/legal/privacy.html' },
          { label: 'Disclosures',          href: '/legal/disclosures.html' },
          { label: 'Investor Relations ↗', href: 'https://ir.medsci.cn/en/', rel: 'external noopener' }
        ]}
      ]
    },

    CN: {
      slogan: '让医疗更有质量',
      listed: '港交所上市 · 2415.HK',
      ir: '投资者关系',
      irHref: 'https://ir.medsci.cn/',
      cta: '联系我们的专家',
      openMenu: '打开菜单', closeMenu: '关闭菜单',
      langLabel: '中文', langOther: 'EN',
      langUnavailable: '该页面暂无英文版',
      nav: [
        { label: '解决方案', hasMega: true },
        { label: '客户案例', href: '/case-studies/' },
        { label: 'AI 平台',  href: '/ai-platform.html' },
        { label: '洞察',     href: '/insights/' },
        { label: '关于我们', href: '/about.html' }
      ],
      navQuick: '医生调研',
      megaCols: ['按路径 · 战略', '按交付 · 模块', '快速起步 · 入口'],
      mega: {
        strategic: [
          { title: '进入中国',        desc: '在中国境内拿到证据、注册与医生侧的真实进展。', href: '/solutions/entering-china.html',  tag: 'Navy' },
          { title: '出海美国 / 全球', desc: '为中国创新企业做美国与全球上市准备。',        href: '/solutions/going-global-us.html', tag: 'Cyan' }
        ],
        deliverables: [
          { title: '医学证据',     desc: '真实世界研究 · 登记研究 · 文献 · 卫生经济学。',      href: '/solutions/medical-evidence.html' },
          { title: '医生互动',     desc: '调研 · 顾问会 · KOL · 继续教育 · 333 万+ 医生网络。', href: '/solutions/physician-engagement.html' },
          { title: '医学传播',     desc: '论文发表 · 学术大会 · 本地化 · 媒体与公关。',        href: '/solutions/medical-communications.html' },
          { title: '生物统计与数据管理', desc: 'CDISC 数据集 · EDC · 统计分析计划 · FDA / NMPA 申报。', href: '/solutions/biostatistics-data-management.html', tag: 'New' },
          { title: 'AI 赋能平台',  desc: 'DeepEvidence · SeekEvidence · 医生在环 · 质控。',    href: '/ai-platform.html', tag: 'Platform' }
        ],
        quickStart: [
          { title: '医生调研',       desc: '医生调研与洞察——敏捷立项，数日内即可上线。',       href: '/solutions/physician-research.html', tag: 'Fastest' },
          { title: '内容合规审核',   desc: '3–5 个工作日出具带合规标注的材料审核。',           href: '/solutions/content-review.html',     tag: 'New' },
          { title: '跨境内容冲刺',   desc: '2 周交付 1 份医生审核过的中英双语材料。',           href: '/solutions/cross-border-medical-content-sprint.html', tag: 'Sprint' },
          { title: '30 天试点',      desc: '中国证据冲刺——边界清晰的 30 天合作。',            href: '/#pilots', tag: 'Pilots' }
        ]
      },
      shell: {
        atAGlance: '概览',
        onThisPage: '本页导航',
        timeline: function (n) { return '合作时间轴 · ' + n + ' 个阶段'; },
        week: function (w) { return '第 ' + w + ' 周'; },
        step: function (n) { return '第 ' + n + ' 步'; },
        deliverable: function (n) { return '交付物 ' + n; },
        learnMore: '了解更多',
        primaryCta: '预约范围界定通话',
        secondaryCta: '查看相关客户案例',
        nextStep: '下一步',
        ndaNote: '可签 NDA · 2 个工作日内回复',
        relatedTitle: '相关解决方案',
        relatedLede: '继续浏览我们的解决方案。',
        backHome: '← 返回首页',
        input: '输入', output: '输出',
        verified: '已核验', inDev: '研发中',
        crossEyebrow: '快速起步 · 3–5 个工作日',
        crossTitle: '还没到启动完整项目的时候？',
        crossBody: '可以先做一次内容合规审核——把你现有的材料发过来，3–5 个工作日内拿到带合规标注的专家审核意见。',
        tags: {
          path: '路径 · 战略', block: '业务模块', gco: '搭建与代运营 · New',
          fastest: '快速起步 · 最快', sprint: '快速起步 · 2 周', review: '快速起步 · 3–5 个工作日'
        },
        related: {
          'entering-china': '进入中国',
          'going-global-us': '出海美国 / 全球',
          'medical-evidence': '医学证据',
          'physician-engagement': '医生互动',
          'medical-communications': '医学传播',
          'global-communications-office': '全球传播部（GCO）',
          'biostatistics-data-management': '生物统计与数据管理',
          'physician-research': '医生调研',
          'cross-border-medical-content-sprint': '跨境内容冲刺',
          'content-review': '内容合规审核'
        }
      },
      footerBlurb: 'AI 赋能的医学审核能力，加上覆盖全国的医生网络，帮助中美两端的医疗健康创新者跑通跨境证据、传播与市场准入。',
      footerNofollow: '* rel="nofollow" — 次要服务，不进 sitemap。',
      copyright: '© 2026 梅斯健康 MedSci Healthcare（2415.HK）。保留所有权利。',
      footerCols: [
        { title: '解决方案', items: [
          { label: '进入中国',           href: '/solutions/entering-china.html' },
          { label: '出海美国 / 全球',    href: '/solutions/going-global-us.html' },
          { label: '医学证据',           href: '/solutions/medical-evidence.html' },
          { label: '医生互动',           href: '/solutions/physician-engagement.html' },
          { label: '医生调研',           href: '/solutions/physician-research.html' },
          { label: '医学传播',           href: '/solutions/medical-communications.html' },
          { label: '全球传播部（GCO）',  href: '/solutions/global-communications-office.html' },
          { label: '生物统计与数据管理', href: '/solutions/biostatistics-data-management.html' },
          { label: '内容合规审核',       href: '/solutions/content-review.html' }
        ]},
        { title: '试点项目', items: [
          { label: '30 天中国证据冲刺',  href: '/pilots/china-evidence-sprint.html' },
          { label: '30 天 FDA 证据诊断', href: '/pilots/fda-evidence-gap-diagnostic.html' },
          { label: '跨境内容冲刺',       href: '/solutions/cross-border-medical-content-sprint.html' }
        ]},
        { title: '资源', items: [
          { label: '客户案例',     href: '/case-studies/' },
          { label: 'AI 平台',      href: '/ai-platform.html' },
          { label: '洞察',         href: '/insights/' },
          { label: '关于梅斯',     href: '/about.html' },
          { label: '联系我们',     href: '/contact.html' },
          { label: '其他服务 *',   href: '/services/other-engagements.html', rel: 'nofollow' }
        ]},
        { title: '法律与投资者关系', items: [
          { label: '使用条款',       href: '/legal/terms.html' },
          { label: '隐私政策',       href: '/legal/privacy.html' },
          { label: '信息披露',       href: '/legal/disclosures.html' },
          { label: '投资者关系 ↗',   href: 'https://ir.medsci.cn/', rel: 'external noopener' }
        ]}
      ]
    }
  };

  /* ========== 7. 取词 ========== */
  function t(key) {
    var d = DICT[lang()] || DICT.EN;
    var v = d[key];
    return (v === undefined) ? DICT.EN[key] : v;
  }
  /* 行内二选一：MSH.pick('Talk to an Expert', '联系我们的专家') */
  function pick(en, cn) { return lang() === 'CN' ? cn : en; }

  /* 共享 shell 文案快捷取词：MSH.s('atAGlance') */
  function sh(key) { var o = t('shell') || {}; return o[key]; }

  w.MSH = {
    lang: lang, t: t, s: sh, pick: pick, L: L,
    altHref: altHref, cnExists: cnExists,
    toCN: toCN, toEN: toEN, CN_PAGES: CN_PAGES, DICT: DICT
  };
  /* 兼容旧代码：GCO 页原先直接读 window.LANG_ALTERNATE_HREF */
  if (!w.LANG_ALTERNATE_HREF) {
    var a = altHref();
    if (a) w.LANG_ALTERNATE_HREF = a;
  }
})(window);
