/* =========================================================
   ga4-events.js — /ai-platform v3.0 · Spec §6.6
   ---------------------------------------------------------
   4 events for AI Platform (IA v2.1 §10.1):
     - ai_product_card_click    Card Grid 任一卡点击          (Lead Score A)
     - showcase_tab_switch      Live Showcase Tab 切换         (telemetry-only)
     - notify_me_submit         Coming Soon Notify-me 提交     (Lead Score B)
     - access_request_submit    Limited Preview 申请提交      (Lead Score A)

   Consent-mode v2 接线:
     - 默认 _consentState = 'denied'
     - consent-mode-v2.js 在用户接受 cookie 后调用
       MSHAnalytics.setConsent('granted')
     - 所有 4 类 trackXxx 入口先 _consentGranted() 网关, 拒绝 cookie
       场景下事件 NOT 上报 (Spec §6.6 末尾)

   Plan task 15 step 1。

   Closure-state implementation (v1.1 MI-3 fix):
     原 plan 用 dataLayer.push event 查 lookup, 易丢;
     改用 closure state _consentState + setConsent() API, 一次写入,
     永久持有 (除非用户撤销 cookie 后再 setConsent('denied'))。
   ========================================================= */

(function (global) {
  'use strict';

  var Analytics = {
    _consentState: 'denied',

    setConsent: function (state) {
      this._consentState = state;
    },

    _consentGranted: function () {
      return this._consentState === 'granted';
    },

    _gtag: function () {
      if (typeof global.gtag === 'function') {
        global.gtag.apply(null, arguments);
      } else if (Array.isArray(global.dataLayer)) {
        // dataLayer fallback (gtag.js 还没初始化但已 push)
        global.dataLayer.push(Array.prototype.slice.call(arguments));
      }
    },

    /* ── ai_product_card_click (Lead Score A) ────────────── */
    // Card Grid 任一卡点击触发, 含 product_slug + position + status。
    trackProductCardClick: function (slug, position, status) {
      if (!this._consentGranted()) return;
      this._gtag('event', 'ai_product_card_click', {
        product_slug: slug,
        position: position,
        status: status,
        page_path: this._pagePath(),
      });
    },

    /* ── showcase_tab_switch (telemetry-only, 不计 lead score) ── */
    trackShowcaseTabSwitch: function (fromSlug, toSlug, trigger) {
      if (!this._consentGranted()) return;
      this._gtag('event', 'showcase_tab_switch', {
        from_slug: fromSlug,
        to_slug: toSlug,
        trigger: trigger || 'auto', // auto | manual
        page_path: this._pagePath(),
      });
    },

    /* ── notify_me_submit (Lead Score B) ─────────────────── */
    trackNotifyMeSubmit: function (sourcePage) {
      if (!this._consentGranted()) return;
      this._gtag('event', 'notify_me_submit', {
        source_page: sourcePage,
        hubspot_intent: 'ai_notify_me',
        page_path: this._pagePath(),
      });
    },

    /* ── access_request_submit (Lead Score A) ────────────── */
    trackAccessRequestSubmit: function (productSlug, role) {
      if (!this._consentGranted()) return;
      this._gtag('event', 'access_request_submit', {
        product_slug: productSlug,
        role: role,
        hubspot_intent: 'ai_product_access',
        page_path: this._pagePath(),
      });
    },

    _pagePath: function () {
      try {
        return global.location && global.location.pathname || '';
      } catch (e) { return ''; }
    },
  };

  global.MSHAnalytics = Analytics;
})(typeof window !== 'undefined' ? window : this);
