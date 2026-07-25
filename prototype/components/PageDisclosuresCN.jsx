/* PageDisclosuresCN.jsx — 信息披露（中文孪生页 /legal/disclosures-cn.html）
   ------------------------------------------------------------------
   ⚠ 法律文本，红线：本文件的中文条款内容全部逐条搬运自 legal/disclosures.html
   页内已有的 zh 文案字典，未作任何改写、精简、润色或再翻译。法域名称、
   法规名称、实体名称、生效日期、联系邮箱与英文版严格一致；任何免责声明、
   责任限制与管辖条款均未删减。

   section id / 锚点与英文版 legal/disclosures.html 逐一对应（法律页有深链引用）。
   审批状态见 docs/approvals/legal-pages-pending-counsel-signoff.md —
   本页仍为 skeleton，待外部律师定稿 + 翻译审核签核后替换。

   英文有、中文字典缺失的部分以 [草稿 — 待法务签核：<英文小节标题>] 占位，
   不自行翻译补写。
   ------------------------------------------------------------------ */

const DISCLOSURES_CN = {
 eyebrow: '法律 · 披露',
 title: '披露（HKEX 2415.HK）',
 lastUpdated: '2026-05-04',
 sections: [
 { id: 'forward-looking', heading: '1. 前瞻性陈述', paragraphs: ['medscihealthcare.com 可能包含非历史事实的陈述——包括关于战略、服务、预期成果、市场状况及 AI 方法论的陈述。前瞻性陈述涉及风险与不确定性；实际结果可能有所不同。', '除 HKEX 规则要求外，我们不承诺更新前瞻性陈述。'] },
 { id: 'regulatory-scope', heading: '1A. 监管法域适用范围',
 paragraphs: [
 '梅斯健康在香港联合交易所上市（HKEX: 2415），业务遍及中国大陆、香港、美国及欧盟等多个司法管辖区。本网站信息所适用的监管要求取决于业务活动实际发生地及受众所在地：',
 '(a) HKEX 上市规则及《证券及期货条例》（香港）— 管辖与梅斯健康控股有限公司上市证券相关的所有披露义务。HKEX 披露为财务及重大信息的权威来源。',
 '(b) 中华人民共和国法律法规 — 包括《证券法》《公司法》《广告法》和《反不正当竞争法》— 适用于我们中国大陆子公司（包括上海梅斯医药科技有限公司）的经营活动和广告宣传。',
 '(c) 美国联邦及州法规 — 包括 FTC 第 5 条（不公平或欺骗性行为）及适用的 FDA 推广法规 — 在梅斯健康的服务或宣传面向美国受众或涉及美国市场活动时适用。',
 '(d) 欧盟法规 — 包括《不公平商业行为指令》— 在服务或宣传面向欧洲经济区受众时适用。',
 '当不同司法管辖区的要求存在冲突时，我们就该特定事项遵循对投资者和消费者保护最为充分的标准。本网站所有头条数字和前瞻性陈述均与下文第 2 条所述的 HKEX 披露保持一致。'
 ] },
 { id: 'source-numbers', heading: '2. 头条数字来源', paragraphs: ['333 万+ 注册医师 / 2415.HK 股票代码 / AI + PITL 方法论 / 双语医师审阅 / Case Study 9 项指标 — 来源详见英文版表格。。', '[草稿 — 待法务签核：2. Source of headline numbers — authoritative-source table]', '网站上的任何数字如与最新 HKEX 披露不一致，以 HKEX 披露为准，我们将在 30 个日历日内完成网站核对。'] },
 { id: 'restatement', heading: '3. 重述政策', paragraphs: ['网站发布数字若需更正，我们通过同一 HKEX 披露渠道发布更正，网站随后同步更新。我们不静默编辑历史数字。'] },
 { id: 'no-investment-advice', heading: '4. 不构成投资建议', paragraphs: ['medscihealthcare.com 任何内容不构成买卖 MedSci Healthcare 或任何其他实体证券的要约、招揽或建议。投资者应咨询合格顾问并参考最新 HKEX 披露。'] },
 { id: 'hkex-index', heading: '5. HKEX 披露索引', paragraphs: [<span>最新 HKEX 2415.HK 公告: <a href="https://www.hkexnews.hk/" rel="external noopener" style={{ color: 'var(--fg-link)', textDecoration: 'underline' }}>HKEX news</a>。</span>, <span>最新年报：<a href="https://ir.medsci.cn/en/" rel="external noopener" style={{ color: 'var(--fg-link)', textDecoration: 'underline' }}>ir.medsci.cn</a></span>, <span>最新季报：<a href="https://ir.medsci.cn/en/" rel="external noopener" style={{ color: 'var(--fg-link)', textDecoration: 'underline' }}>ir.medsci.cn</a></span>, <span>企业管治报告：<a href="https://ir.medsci.cn/en/" rel="external noopener" style={{ color: 'var(--fg-link)', textDecoration: 'underline' }}>ir.medsci.cn</a></span>] },
 { id: 'methodology-claims', heading: '6. AI + PITL 方法论公开声明', paragraphs: [<span>关于 AI 平台（<a href={window.MSH.L('/ai-platform.html')} style={{ color: 'var(--fg-link)', textDecoration: 'underline' }}>medscihealthcare.com/ai-platform</a>）的公开声明反映我们由 CMO 签字的内部方法论文档，每季度审阅。声明包括：每份交付物均经医师在环审阅、实名作者与实名审阅者署名，以及带时间戳的审计轨迹。</span>] },
 { id: 'contact', heading: '7. 联系方式', paragraphs: [<span>投资者关系: <code>ir@medscihealthcare.com</code>（或 <a href="https://ir.medsci.cn/en/" rel="external noopener" style={{ color: 'var(--fg-link)', textDecoration: 'underline' }}>IR 站点</a>）。法务 / 合规: <code>legal@medscihealthcare.com</code>。注册办公室：梅斯健康控股有限公司（MedSci Healthcare Holdings Limited）。运营地址：中国上海市松江区新桥镇莘砖公路518号松江漕河泾开发区34号楼18层，邮编 201612。电话：+86 21 5448 1353。</span>] }
 ]
};

function PageDisclosuresCN() {
  const L = (h) => (window.MSH ? window.MSH.L(h) : h);
  const t = DISCLOSURES_CN;
  return (
    <PageShell hideHero breadcrumbs={[
      { label: '首页', href: L('/') },
      { label: '法律', href: L('/legal/') },
      { label: '信息披露' }
    ]}>
      <LegalProseCN
        eyebrow={t.eyebrow}
        title={t.title}
        lastUpdated={t.lastUpdated}
        sections={t.sections}
      />
    </PageShell>
  );
}

window.PageDisclosuresCN = PageDisclosuresCN;
window.DISCLOSURES_CN = DISCLOSURES_CN;
