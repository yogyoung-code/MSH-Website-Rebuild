/**
 * MEDSCI Healthcare · Sanity Schema Registry
 * v0.1 — 2026-04-19
 *
 * 基于 IA v1.0 §8 内容模型 + Copy Deck v4.1 结构约束。
 */

// documents
import page from './documents/page'
import solution from './documents/solution'
import pilotOffer from './documents/pilotOffer'
import caseStudy from './documents/caseStudy'
import proofPoint from './documents/proofPoint'
import claim from './documents/claim'
import clientReference from './documents/clientReference'
import insight from './documents/insight'
import otherEngagementCard from './documents/otherEngagementCard'
import navigation from './documents/navigation'

// objects
import seo from './objects/seo'
import cta from './objects/cta'
import portableText from './objects/portableText'
import metric from './objects/metric'
import evidenceTag from './objects/evidenceTag'
import localizedString from './objects/localizedString'
import localizedText from './objects/localizedText'
import pageSection from './objects/pageSection'

export const schemaTypes = [
  // documents
  page,
  solution,
  pilotOffer,
  caseStudy,
  proofPoint,
  claim,
  clientReference,
  insight,
  otherEngagementCard,
  navigation,
  // objects
  seo,
  cta,
  portableText,
  metric,
  evidenceTag,
  localizedString,
  localizedText,
  pageSection,
]

export default schemaTypes
