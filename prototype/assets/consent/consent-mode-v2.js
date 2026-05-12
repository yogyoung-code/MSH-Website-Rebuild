/* =========================================================
   consent-mode-v2.js — /ai-platform v3.0 · Spec §6.6
   ---------------------------------------------------------
   Google consent-mode v2 接线 + MSHAnalytics closure state sync。

   Plan task 15 step 2。

   行为:
     1. 页面加载时, 默认 deny analytics_storage + ad_storage
        (隐式 server-side 默认事件 OK, 不含 user identifier)
     2. 用户在 Cookie 横幅点 Accept → grantAnalytics()
        a. gtag consent update analytics_storage='granted'
        b. dataLayer push consent_update event
        c. MSHAnalytics.setConsent('granted') closure state sync
     3. 用户拒绝 → revokeAnalytics() (opt-out)

   Cookie 横幅 UI 不在本文件 (Task 19+ launch day 加, 用现有 W2 cookie banner
   或 Onetrust 等)。 本文件只暴露 default-deny + grant/revoke API。

   集成方式 (HTML <head>):
     <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){ dataLayer.push(arguments); }
       gtag('js', new Date());
       gtag('config', 'G-XXXXXX');
     </script>
     <script src="assets/consent/consent-mode-v2.js"></script>
     <script src="assets/analytics/ga4-events.js"></script>
   ========================================================= */

(function (global) {
  'use strict';

  // ── default state: deny everything until user opts in ─
  if (typeof global.gtag === 'function') {
    global.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      functionality_storage: 'granted', // 必要功能性 cookie 默认 granted (form state etc.)
      security_storage: 'granted',
    });
  }

  // ── grant API (Cookie 横幅 Accept 调) ──────────────────
  function grantAnalytics() {
    if (typeof global.gtag === 'function') {
      global.gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
    if (Array.isArray(global.dataLayer)) {
      global.dataLayer.push({
        event: 'consent_update',
        analytics_storage: 'granted',
      });
    }
    // 同步 MSHAnalytics closure state (v1.1 MI-3 fix)
    if (global.MSHAnalytics && typeof global.MSHAnalytics.setConsent === 'function') {
      global.MSHAnalytics.setConsent('granted');
    }
  }

  // ── revoke API (Cookie 横幅 Reject / 用户撤销) ─────────
  function revokeAnalytics() {
    if (typeof global.gtag === 'function') {
      global.gtag('consent', 'update', {
        analytics_storage: 'denied',
      });
    }
    if (Array.isArray(global.dataLayer)) {
      global.dataLayer.push({
        event: 'consent_update',
        analytics_storage: 'denied',
      });
    }
    if (global.MSHAnalytics && typeof global.MSHAnalytics.setConsent === 'function') {
      global.MSHAnalytics.setConsent('denied');
    }
  }

  // ── 暴露 API 给 cookie 横幅 / dev console ──────────────
  global.MSHConsent = {
    grantAnalytics: grantAnalytics,
    revokeAnalytics: revokeAnalytics,
  };
})(typeof window !== 'undefined' ? window : this);
