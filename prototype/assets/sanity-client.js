/**
 * MSH Healthcare · Sanity Client (Browser CDN)
 *
 * 浏览器端 GROQ 查询封装。
 * 设计原则:
 *   - 零构建工具 — 通过 <script> 标签引入，挂载到 window.MSHContent
 *   - Fallback — CMS 未就绪或网络错误时返回 null，页面 mock data 兜底
 *   - 缓存 — sessionStorage 缓存 5 分钟，减少重复请求
 *
 * 使用:
 *   1. 在 <head> 中添加:
 *      <script src="https://cdn.jsdelivr.net/npm/@sanity/client@6/dist/sanityClient.browser.min.js"></script>
 *      <script src="../assets/sanity-client.js"></script>
 *   2. 在 React 组件中:
 *      const [data, setData] = React.useState(MOCK_DATA);
 *      React.useEffect(() => {
 *        MSHContent.fetchSolutions().then(d => d && setData(d));
 *      }, []);
 *
 * 配置:
 *   - 修改下方 PROJECT_ID 和 DATASET
 *   - 在 Sanity 管理后台 → API → CORS 添加你的前端域名
 */

(function () {
  'use strict';

  // ─── Config ──────────────────────────────────────────────
  const PROJECT_ID = 'dtsbk1qu';
  const DATASET    = 'production';
  const API_VERSION = '2024-01-01';
  const USE_CDN    = true;               // 公开读取用 CDN
  const CACHE_TTL  = 5 * 60 * 1000;      // 5 min sessionStorage cache
  const LANG       = 'en';               // 默认语言 key

  // ─── Client init ─────────────────────────────────────────
  let client = null;
  try {
    if (typeof window.sanityClient !== 'undefined') {
      // CDN build exposes window.sanityClient
      client = window.sanityClient.createClient
        ? window.sanityClient.createClient({
            projectId: PROJECT_ID,
            dataset: DATASET,
            apiVersion: API_VERSION,
            useCdn: USE_CDN,
          })
        : null;
    }
  } catch (e) {
    console.warn('[MSHContent] Sanity client init failed:', e);
  }

  // ─── Cache helpers ───────────────────────────────────────
  function cacheGet(key) {
    try {
      const raw = sessionStorage.getItem('msh_' + key);
      if (!raw) return null;
      const { ts, data } = JSON.parse(raw);
      if (Date.now() - ts > CACHE_TTL) {
        sessionStorage.removeItem('msh_' + key);
        return null;
      }
      return data;
    } catch { return null; }
  }

  function cacheSet(key, data) {
    try {
      sessionStorage.setItem('msh_' + key, JSON.stringify({ ts: Date.now(), data }));
    } catch { /* quota exceeded — ignore */ }
  }

  // ─── Core fetch ──────────────────────────────────────────
  async function query(groq, params, cacheKey) {
    if (!client) return null;
    if (PROJECT_ID === 'YOUR_PROJECT_ID') return null; // 未配置

    if (cacheKey) {
      const cached = cacheGet(cacheKey);
      if (cached) return cached;
    }

    try {
      const result = await client.fetch(groq, params || {});
      if (cacheKey && result) cacheSet(cacheKey, result);
      return result;
    } catch (e) {
      console.warn('[MSHContent] GROQ fetch error:', e);
      return null;
    }
  }

  // ─── Localized field helper ──────────────────────────────
  // Schema 用 localizedString: { en, cn }，前端取当前语言
  function L(obj) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[LANG] || obj.en || obj.cn || '';
  }

  // ─── GROQ Queries ────────────────────────────────────────

  /** Homepage sections (page where pageType == 'homepage') */
  async function fetchHomepage() {
    return query(
      `*[_type == 'page' && pageType == 'homepage'][0]{
        title, slug, sections[]{
          kind, variant, anchorId,
          eyebrow, heading, subheading, body,
          theme, ctas[],
          items[]->{
            _type, title, slug, tagline,
            // caseStudy fields
            industry, metrics,
            // insight fields
            summary, publishedAt, readTime,
            // person fields
            name, role, photo
          }
        }
      }`,
      {},
      'homepage'
    );
  }

  /** All solutions */
  async function fetchSolutions() {
    return query(
      `*[_type == 'solution'] | order(kind asc){
        _id, kind, title, tagline, slug, geoTag, heroImage,
        relatedOffers[]->{title, slug, badgeTag, duration, priceBand},
        relatedCaseStudies[]->{title, slug, industry, metrics},
        primaryCta, secondaryCta, status
      }`,
      {},
      'solutions'
    );
  }

  /** Single solution by slug */
  async function fetchSolution(slug) {
    return query(
      `*[_type == 'solution' && slug.current == $slug][0]{
        _id, kind, title, tagline, slug, geoTag, heroImage,
        sections[]{kind, variant, anchorId, eyebrow, heading, subheading, body, theme, ctas[]},
        relatedOffers[]->{title, slug, badgeTag, whatYouGet, duration, priceBand, priceDisplay, eligibility, primaryCta},
        relatedCaseStudies[]->{title, slug, industry, metrics, client->{name, logo}},
        claims[]->{text, proofPoint->{evidenceTier, source}},
        primaryCta, secondaryCta, status
      }`,
      { slug },
      'solution_' + slug
    );
  }

  /** All case studies */
  async function fetchCaseStudies() {
    return query(
      `*[_type == 'caseStudy' && status == 'published'] | order(title.en asc){
        _id, title, slug, industry,
        solution->{kind, title, slug},
        metrics, evidence,
        client->{name, logo},
        consentOnFile, status
      }`,
      {},
      'caseStudies'
    );
  }

  /** Single case study by slug */
  async function fetchCaseStudy(slug) {
    return query(
      `*[_type == 'caseStudy' && slug.current == $slug][0]{
        _id, title, slug, industry,
        solution->{kind, title, slug},
        challenge, approach, outcome,
        metrics, evidence,
        client->{name, logo},
        consentOnFile,
        citations[]{sourceType, title, doi, url, accessedAt},
        evidenceClaims[]->{text, proofPoint->{evidenceTier, source}},
        status
      }`,
      { slug },
      'caseStudy_' + slug
    );
  }

  /** All insights */
  async function fetchInsights() {
    return query(
      `*[_type == 'insight'] | order(publishedAt desc){
        _id, title, slug, type, summary,
        authors[]->{name, role},
        publishedAt, readTime, tags,
        featureImage
      }`,
      {},
      'insights'
    );
  }

  /** Single insight by slug */
  async function fetchInsight(slug) {
    return query(
      `*[_type == 'insight' && slug.current == $slug][0]{
        _id, title, slug, type, summary, body,
        authors[]->{name, role, photo},
        publishedAt, readTime, tags,
        featureImage,
        citations[]{sourceType, title, doi, url, accessedAt}
      }`,
      { slug },
      'insight_' + slug
    );
  }

  /** All pilot offers */
  async function fetchPilots() {
    return query(
      `*[_type == 'pilotOffer'] | order(title.en asc){
        _id, title, tagline, slug, badgeTag,
        parentSolution->{kind, title, slug},
        whatYouGet, duration, priceBand, priceDisplay,
        eligibility, primaryCta, status
      }`,
      {},
      'pilots'
    );
  }

  /** Single pilot by slug */
  async function fetchPilot(slug) {
    return query(
      `*[_type == 'pilotOffer' && slug.current == $slug][0]{
        _id, title, tagline, slug, badgeTag,
        parentSolution->{kind, title, slug},
        whatYouGet, duration, priceBand, priceDisplay,
        eligibility, primaryCta, status
      }`,
      { slug },
      'pilot_' + slug
    );
  }

  /** All AI products */
  async function fetchAiProducts() {
    return query(
      `*[_type == 'aiProduct'] | order(name.en asc){
        _id, slug, name, status, userRole,
        positioningOneLiner, capabilitiesShort,
        showcase{
          accentColor, iconRef,
          tabs[]{label, demoType, content}
        },
        accessUrl, notifyMeEnabled, hubspotIntent,
        seo
      }`,
      {},
      'aiProducts'
    );
  }

  /** Single AI product by slug */
  async function fetchAiProduct(slug) {
    return query(
      `*[_type == 'aiProduct' && slug.current == $slug][0]{
        _id, slug, name, status, userRole,
        positioningOneLiner, capabilitiesShort,
        capabilitiesFull, useCases,
        showcase{
          accentColor, iconRef,
          tabs[]{label, demoType, content},
          "signedBy": signedBy{
            medicalWriter->{name, role},
            clinicalReviewer->{name, role},
            signedAt
          }
        },
        accessUrl, accessUrlIsInternalRedirect,
        notifyMeEnabled, hubspotIntent,
        trustRefs,
        irApprovedAt, irApprovedBy,
        seo
      }`,
      { slug },
      'aiProduct_' + slug
    );
  }

  /** Navigation */
  async function fetchNavigation() {
    return query(
      `*[_type == 'navigation'][0]{
        primary[]{label, href, children[]{label, href}},
        footerOnly[]{label, href}
      }`,
      {},
      'navigation'
    );
  }

  /** Site settings (singleton) */
  async function fetchSiteSettings() {
    return query(
      `*[_type == 'siteSettings'][0]{
        disclosureBar, legalLinks[]{label, href},
        globalToggles
      }`,
      {},
      'siteSettings'
    );
  }

  /** AI Disclosure (singleton) */
  async function fetchAiDisclosure() {
    return query(
      `*[_type == 'aiDisclosure'][0]`,
      {},
      'aiDisclosure'
    );
  }

  // ─── Public API ──────────────────────────────────────────
  window.MSHContent = {
    // Config
    isConfigured: () => PROJECT_ID !== 'YOUR_PROJECT_ID' && client !== null,
    setLang: (lang) => { /* future: switch L() default */ },

    // Helpers
    L,
    query, // raw GROQ escape hatch

    // Page-level fetchers
    fetchHomepage,
    fetchSolutions,
    fetchSolution,
    fetchCaseStudies,
    fetchCaseStudy,
    fetchInsights,
    fetchInsight,
    fetchPilots,
    fetchPilot,
    fetchAiProducts,
    fetchAiProduct,
    fetchNavigation,
    fetchSiteSettings,
    fetchAiDisclosure,
  };
})();
