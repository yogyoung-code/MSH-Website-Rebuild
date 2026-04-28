# Legal Pages — External Counsel + IR Sign-Off Tracker

**Status**: ⏳ Skeleton drafts complete (Copy Deck v4.2 §12.1 / §12.2 / §12.3). Awaiting external counsel finalization and (for §12.3) IR co-sign.
**Created**: 2026-04-27
**Buffer required**: §12.3 Disclosures = 5 working days from external-counsel-final to IR + Legal dual-sign (HKEX-disclosure-adjacent). §12.1 + §12.2 follow external counsel turnaround (typically 5–10 business days).

---

## Tracking matrix

| # | Page | URL | Spec | Approver(s) | Status | Receipt ID (fill on sign-off) |
|---|---|---|---|---|---|---|
| 1 | Terms of Use (EN) | `/legal/terms` | §12.1 | External Counsel | ⏳ skeleton | _e.g._ `Counsel-2026-Q2-Terms-EN-001` |
| 2 | Terms of Use (CN) | `/legal/terms?lang=zh-CN` | §12.1.zh | External Counsel + Translation Review | ⏳ skeleton | _e.g._ `Counsel-2026-Q2-Terms-CN-001` |
| 3 | Privacy Policy (EN) | `/legal/privacy` | §12.2 | External Counsel | ⏳ skeleton | _e.g._ `Counsel-2026-Q2-Privacy-EN-001` |
| 4 | Privacy Policy (CN) | `/legal/privacy?lang=zh-CN` | §12.2.zh | External Counsel + Translation Review | ⏳ skeleton | _e.g._ `Counsel-2026-Q2-Privacy-CN-001` |
| 5 | Disclosures (EN) | `/legal/disclosures` | §12.3 | **IR Director + Head of Legal (mandatory dual-sign)** | ⏳ skeleton | _e.g._ `IR-LEGAL-2026-Q2-Disclosures-EN-001` |
| 6 | Disclosures (CN) | `/legal/disclosures?lang=zh-CN` | §12.3.zh | **IR Director + Head of Legal + Translation Review** | ⏳ skeleton | _e.g._ `IR-LEGAL-2026-Q2-Disclosures-CN-001` |

---

## Counsel review markers (collected)

These are the inline ⚠️ markers from §12 sections — counsel needs to resolve each before sign-off.

### §12.1 Terms of Use

- §12.1.1.1: Jurisdictional acceptance language (HK + U.S. + EU)
- §12.1.1.2: Automated-access carve-outs (research crawlers)
- §12.1.1.5: Disclaimer scope tri-jurisdictional
- §12.1.1.6: Liability caps per jurisdiction
- §12.1.1.7: Indemnity clause replacement
- §12.1.1.9: Governing law and venue (HK preferred)

### §12.2 Privacy Policy

- §12.2.1.2: Sensitive PI definitions tri-jurisdictional (CCPA + GDPR + PIPL)
- §12.2.1.3: Article 6(1)(f) balancing test for legitimate interest
- §12.2.1.4: CCPA / CPRA "share" definition (2023 amendments)
- §12.2.1.5: PIPL Standard Contractual Clauses status
- §12.2.1.7: Retention periods per data class
- §12.2.1.10: Children threshold age per jurisdiction
- §12.2.1.12: GDPR Article 37 mandatory DPO designation

### §12.3 Disclosures (DUAL-SIGN: IR + Legal)

- §12.3.1.1: Safe-Harbor language alignment (HKEX Listing Rules + U.S. PSLRA equivalent)
- §12.3.1.2: "Last refreshed" dates × 5 (network / ticker / methodology / bilingual / Case Studies)
- §12.3.1.2: Case Study metric reconciliation window
- §12.3.1.5: HKEX direct deep links × 3 (annual report / quarterly results / corp governance)
- §12.3.1.6: AI + PITL methodology language alignment to FTC + HKEX

---

## Hard blocks (cannot deploy without)

- All 6 sign-off receipts captured in this tracker.
- All ⚠️ markers in §12 resolved — no remaining inline `⚠️` in production HTML.
- check-page Gate 16 scan passes on all 3 EN pages (forbidden phrases: `guarantee` / `100% accurate` / `industry-leading` / etc.).
- check-page Gate 17 scan passes (no `⚑` in HTML output).
- §12.3 numbers reconciled to most recent HKEX 2415.HK quarterly disclosure as of deploy date.

---

## Workflow

1. ✅ **Step 1** (this commit): Skeleton drafts for §12.1 / §12.2 / §12.3 (EN); §12.x.zh CN scaffolding with translation mapping rules.
2. ⏳ **Step 2**: Yog + Head of Legal email kickoff to external counsel; share §12 spec sections.
3. ⏳ **Step 3**: External counsel returns finalized EN versions; Yog + Legal review.
4. ⏳ **Step 4**: §12.3 EN routes to IR Director for dual-sign (5-day buffer from receipt of counsel-final).
5. ⏳ **Step 5**: Translation review produces zh-CN versions; same dual-sign loop applies for §12.3.zh.
6. ⏳ **Step 6**: Receipts captured here; tracker rows go from ⏳ → ✅; Copy Deck v4.2 §12 replaced with counsel-final language; `/legal/*.html` rebuilt; check-page re-run.

---

## Open coordination

- **Translation pipeline owner**: not yet assigned. Likely People Ops + external translation vendor.
- **DPO designation**: §12.2.1.12 question pending counsel — if mandatory, also need a name to publish in §12.2.1.12 contact line.
- **HKEX deep link strategy**: §12.3.1.5 currently links to `hkexnews.hk` index pages. IR may prefer direct deep links to specific filings, which need refresh-on-update process.
