import type { StructureBuilder } from 'sanity/structure'

/**
 * Role-grouped Studio Desk · v1.0
 * 按角色隐藏无关 schema，降低误操作面。
 *
 * Groups:
 *   Marketing   · pages · solutions · pilot subpages · insights · contact methods · nav · settings
 *   Medical     · case studies · pilot subpages · persons · proof points
 *   IR          · site settings · announcements (legal) · person (board)
 *   Legal       · claims · proof points · legal pages · ai disclosure · redirects · forbiddenPhrases audit
 */

const BADGE_RED = '●' // prepend to titles needing compliance attention

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content Studio')
    .items([
      // ── Marketing ────────────────────────────────
      S.listItem()
        .title('Marketing')
        .child(
          S.list()
            .title('Marketing')
            .items([
              S.listItem().title('Pages').child(S.documentTypeList('page')),
              S.listItem().title('Solutions').child(S.documentTypeList('solution')),
              S.listItem().title('Pilot Index Cards').child(S.documentTypeList('otherEngagementCard')),
              S.listItem().title('Insights').child(S.documentTypeList('insight')),
              S.listItem().title('Contact Methods').child(S.documentTypeList('contactMethod')),
              S.listItem().title('Navigation').child(S.document().schemaType('navigation').documentId('navigation')),
              S.listItem().title('Site Settings').child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            ]),
        ),

      // ── Medical ──────────────────────────────────
      S.listItem()
        .title('Medical')
        .child(
          S.list()
            .title('Medical')
            .items([
              S.listItem().title('Case Studies').child(S.documentTypeList('caseStudy')),
              S.listItem().title(`${BADGE_RED} Pilot Sub-pages`).child(S.documentTypeList('pilotSubpage')),
              S.listItem().title('People').child(S.documentTypeList('person')),
              S.listItem().title('Proof Points').child(S.documentTypeList('proofPoint')),
            ]),
        ),

      // ── Investor Relations ───────────────────────
      S.listItem()
        .title('Investor Relations')
        .child(
          S.list()
            .title('Investor Relations')
            .items([
              S.listItem().title('Site Settings').child(S.document().schemaType('siteSettings').documentId('siteSettings')),
              S.listItem().title('Board & Leadership').child(
                S.documentList()
                  .title('Leadership')
                  .filter('_type == "person" && "leadership" in roles'),
              ),
              S.listItem().title('Insights (Press Releases)').child(
                S.documentList().title('Press Releases').filter('_type == "insight" && type == "press_release"'),
              ),
            ]),
        ),

      // ── Legal & Compliance ───────────────────────
      S.listItem()
        .title('Legal & Compliance')
        .child(
          S.list()
            .title('Legal & Compliance')
            .items([
              S.listItem().title(`${BADGE_RED} Claims`).child(S.documentTypeList('claim')),
              S.listItem().title(`${BADGE_RED} AI Disclosure`).child(S.document().schemaType('aiDisclosure').documentId('aiDisclosure')),
              S.listItem().title('Legal Pages').child(S.documentTypeList('legalPage')),
              S.listItem().title('Redirect Rules').child(S.documentTypeList('redirectRule')),
              S.listItem().title('Claims pending audit').child(
                S.documentList()
                  .title('Claims pending audit')
                  .filter('_type == "claim" && (!defined(lastAuditAt) || lastAuditAt < dateTime(now()) - 60*60*24*90)'),
              ),
            ]),
        ),
    ])
