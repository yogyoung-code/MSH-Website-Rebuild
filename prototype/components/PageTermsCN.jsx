/* PageTermsCN.jsx — 使用条款（中文孪生页 /legal/terms-cn.html）
   ------------------------------------------------------------------
   ⚠ 法律文本，红线：本文件的中文条款内容全部逐条搬运自 legal/terms.html
   页内已有的 zh 文案字典，未作任何改写、精简、润色或再翻译。法域名称、
   法规名称、实体名称、生效日期、联系邮箱与英文版严格一致；任何免责声明、
   责任限制与管辖条款均未删减。

   section id / 锚点与英文版 legal/terms.html 逐一对应（法律页有深链引用）。
   审批状态见 docs/approvals/legal-pages-pending-counsel-signoff.md —
   本页仍为 skeleton，待外部律师定稿 + 翻译审核签核后替换。

   英文有、中文字典缺失的部分以 [草稿 — 待法务签核：<英文小节标题>] 占位，
   不自行翻译补写。
   ------------------------------------------------------------------ */

const TERMS_CN = {
 eyebrow: '法律 · 使用条款',
 title: '使用条款',
 lastUpdated: '2026-05-04',
 sections: [
 { id: 'acceptance', heading: '1. 接受本条款', paragraphs: ['访问或使用 medscihealthcare.com（以下简称"本网站"），即表示您同意本使用条款。本网站由梅斯健康控股有限公司（MedSci Healthcare Holdings Limited，HKEX: 2415）及其关联方（统称"MedSci Healthcare"或"梅斯健康"）运营。如您不同意，请勿使用本网站。梅斯健康在多个司法管辖区开展业务；本条款在全球范围适用，但部分条款受业务实际发生地或您所在地区的强制性当地法律约束，详见下文第 9 条。'] },
 { id: 'permitted-use', heading: '2. 网站允许使用范围', paragraphs: ['本网站提供有关 MedSci Healthcare 面向全球生物制药和医疗科技客户服务的信息。您可以查看和下载网站内容用于非商业参考。未经事先书面许可，不得抓取、镜像、再分发或转载内容。未经授权使用本网站可能导致损害赔偿索赔和/或构成刑事犯罪。'] },
 { id: 'ip', heading: '3. 知识产权', paragraphs: ['本网站所有内容——包括文本、图形、标识、方法论图表及 MedSci Healthcare 文字标识——均归梅斯健康控股有限公司及其子公司（包括上海梅斯医药科技有限公司）所有或获得许可，并受香港、中国大陆及国际适用知识产权法保护。MedSci Healthcare 品牌和标识为注册商标；转载前请联系我们。'] },
 { id: 'third-party', heading: '4. 第三方内容与链接', paragraphs: ['本网站可能链接至第三方资源（包括 HKEX 披露及外部研究）。MedSci Healthcare 不控制也不对第三方内容承担责任。外部链接按照我们的链接政策附带 rel="external noopener"。'] },
 { id: 'no-advice', heading: '5. 不构成专业意见；无保证', paragraphs: ['网站内容仅供一般信息参考，不构成医疗、监管、法律、税务或投资建议。网站内容按"现状"提供，不作任何明示或暗示的陈述或保证，适用于香港、美国、欧盟及中国大陆法律允许的最大范围。'] },
 { id: 'liability', heading: '6. 责任限制', paragraphs: ['在适用法律允许的最大范围内，MedSci Healthcare 及其关联方不对因您使用本网站而产生的任何间接、附带、后果性或惩罚性损害承担责任。'] },
 { id: 'indemnity', heading: '7. 赔偿', paragraphs: ['您同意就因您不当使用本网站所引起的索赔，对 MedSci Healthcare 及其关联方进行赔偿。'] },
 { id: 'changes', heading: '8. 条款变更', paragraphs: ['我们可能不时更新本条款。重大变更将反映在本页顶部的"最近更新"日期中。变更后继续使用即视为接受。'] },
 { id: 'governing-law', heading: '9. 管辖法律、法域适用与争议解决地', paragraphs: ['梅斯健康在多个地区开展业务。适用于任何特定业务、服务或交互的法律法规取决于该业务活动实际发生地以及相关各方所在地。这种多法域适用方式反映了不同地区对企业网站、数据处理、广告宣传及专业服务各有不同法律要求的现实。', '默认管辖法律：本条款受中国香港特别行政区法律管辖，不适用法律冲突规则。因本条款引起的争议应提交至香港国际仲裁中心（HKIAC），按其届时有效的管理仲裁规则进行仲裁。', '对于中国大陆用户：与梅斯集团条款及中华人民共和国法律（包括但不限于《民法典》《电子商务法》《个人信息保护法》《数据安全法》）一致，争议也可由被告住所地有管辖权的人民法院解决。在中华人民共和国强制性法律对消费者或数据主体的保护高于香港法律的情况下，就该特定事项以中华人民共和国法律为准。', '对于位于欧洲经济区（EEA）、英国或瑞士的用户：当地消费者保护和数据保护法（包括 GDPR）的强制性条款在合同不能排除的范围内适用。本条款不限制适用的欧盟或成员国法律规定不可放弃的权利。', '对于位于美国的用户：当梅斯健康向美国客户提供服务或处理美国居民数据时，适用的美国联邦和州法律（包括针对加州居民的 CCPA/CPRA 以及 FTC 广告法规）适用于该等特定活动。'] },
 { id: 'contact', heading: '10. 联系我们', paragraphs: [<span>条款相关问题: <code>legal@medscihealthcare.com</code> 或使用 <a href={window.MSH.L('/contact.html')} style={{ color: 'var(--fg-link)', textDecoration: 'underline' }}>联系页</a>，选择"法务 / 合规"类别。通讯地址：中国上海市松江区新桥镇莘砖公路518号松江漕河泾开发区34号楼18层，邮编 201612。</span>] }
 ]
};

function PageTermsCN() {
  const L = (h) => (window.MSH ? window.MSH.L(h) : h);
  const t = TERMS_CN;
  return (
    <PageShell hideHero breadcrumbs={[
      { label: '首页', href: L('/') },
      { label: '法律', href: L('/legal/') },
      { label: '使用条款' }
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

window.PageTermsCN = PageTermsCN;
window.TERMS_CN = TERMS_CN;
