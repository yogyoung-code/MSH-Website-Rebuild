import type { StructureBuilder } from 'sanity/structure'

/**
 * Sanity Studio 侧栏结构
 * 按"内容 / 合规 / 结构"三块组织，Homepage/Navigation 作为单例入口。
 */
export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('MEDSCI CMS')
    .items([
      S.listItem()
        .title('内容')
        .child(
          S.list()
            .title('内容')
            .items([
              S.listItem()
                .title('Homepage (单例)')
                .child(S.editor().id('homepage').schemaType('page').documentId('singleton-homepage')),
              S.documentTypeListItem('solution').title('Solutions'),
              S.documentTypeListItem('pilotOffer').title('Pilot Offers'),
              S.documentTypeListItem('caseStudy').title('Case Studies'),
              S.documentTypeListItem('insight').title('Insights'),
              S.documentTypeListItem('page').title('通用页面'),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('合规与证据')
        .child(
          S.list()
            .title('合规')
            .items([
              S.documentTypeListItem('claim').title('Claims 声明池'),
              S.documentTypeListItem('proofPoint').title('Proof Points'),
              S.documentTypeListItem('clientReference').title('Client References'),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Other Engagements (noindex)')
        .child(S.documentTypeList('otherEngagementCard').title('Other Engagements')),
      S.divider(),
      S.listItem()
        .title('站点结构')
        .child(
          S.list()
            .title('结构')
            .items([
              S.listItem()
                .title('Navigation — Global')
                .child(S.editor().id('nav-global').schemaType('navigation').documentId('singleton-nav-global')),
              S.listItem()
                .title('Navigation — US')
                .child(S.editor().id('nav-us').schemaType('navigation').documentId('singleton-nav-us')),
              S.listItem()
                .title('Navigation — CN')
                .child(S.editor().id('nav-cn').schemaType('navigation').documentId('singleton-nav-cn')),
            ]),
        ),
    ])
