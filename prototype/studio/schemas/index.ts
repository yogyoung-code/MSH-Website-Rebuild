/**
 * MSH Healthcare · Sanity Schema Registry · v1.0
 * 2026-04-19
 *
 * Source inputs:
 *   - W1-06 Sanity Schema 初版 v0.1 （documents/objects 基础）
 *   - W2-04 Wireframes v1.0 §12 （新增需求汇总）
 *   - Copy Deck v4.1 （forbiddenPhrases 分类）
 */

// documents (v0.1 carryover — reuse from upstream folder)
import page from './documents/page'
import solution from './documents/solution'
import pilotOffer from './documents/pilotOffer'
import caseStudy from './documents/caseStudy'
import clientReference from './documents/clientReference'
import otherEngagementCard from './documents/otherEngagementCard'
// documents (v0.1 carryover — UPDATED in v1.0)
import claim from './documents/claim'
import proofPoint from './documents/proofPoint'
import insight from './documents/insight'
import navigation from './documents/navigation'
// documents (NEW in v1.0)
import pilotSubpage from './documents/pilotSubpage'
import aiDisclosure from './documents/aiDisclosure'
import legalPage from './documents/legalPage'
import redirectRule from './documents/redirectRule'
import person from './documents/person'
import contactMethod from './documents/contactMethod'
import siteSettings from './documents/siteSettings'
// documents (NEW in v3.0 · /ai-platform redesign · spec §3.4)
import aiProduct from './documents/aiProduct'

// objects (v0.1 carryover)
import seo from './objects/seo'
import cta from './objects/cta'
import portableText from './objects/portableText'
import metric from './objects/metric'
import evidenceTag from './objects/evidenceTag'
import localizedString from './objects/localizedString'
import localizedText from './objects/localizedText'
// objects (UPDATED / NEW in v1.0)
import pageSection from './objects/pageSection'
import citation from './objects/citation'
import pricingTier from './objects/pricingTier'
// objects (NEW in v3.0 · /ai-platform redesign · spec §3.4)
import aiProductSignedBy from './objects/aiProductSignedBy'
import aiProductShowcase from './objects/aiProductShowcase'

export const schemaTypes = [
  localizedString, localizedText, seo, cta, portableText,
  metric, evidenceTag, citation, pricingTier, pageSection,
  aiProductSignedBy, aiProductShowcase,
  page, solution, pilotOffer, caseStudy, proofPoint,
  claim, clientReference, insight, otherEngagementCard,
  navigation, pilotSubpage, aiDisclosure, legalPage,
  redirectRule, person, contactMethod, siteSettings, aiProduct,
]

export default schemaTypes
