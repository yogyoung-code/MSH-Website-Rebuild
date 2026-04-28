# §9 About — Legal + IR Sign-Off Tracker

**Status**: ⏳ Drafts complete (Steps 1+2). Awaiting Steps 3 (review email) and 4 (commit after sign-off).
**Created**: 2026-04-27
**Buffer required**: 5 working days from full draft submission to sign-off (`/about` page is HKEX-disclosure-adjacent; mandatory dual-sign per Copy Deck v4.2 审批路径).

---

## Tracking matrix

| # | Item | Section | Approver | Status | Receipt ID (fill on sign-off) |
|---|---|---|---|---|---|
| 1 | Stat strip 4 items: `2415.HK` / `3.33M+` / `AI + PITL` / `EN + CN tracks` | §9.1.2 / §9.5.2 | IR Director + Legal | ⏳ pending | _e.g._ `IR-2026-Q2-About-001` |
| 2 | Leadership cards × 4 (CEO / CMO / CFO / Compliance) — name + bio per HKEX disclosure | §9.2.3 | IR Director + People Ops | ⏳ pending | _e.g._ `PO-2026-Q2-Leadership-001` |
| 3 | 3.33M+ network — definition / methodology / refresh cadence / IR alignment language | §9.3 / §9.5.6 | IR Director + Legal | ⏳ pending | _e.g._ `IR-2026-Q2-Network-001` |
| 4 | Compliance pillars × 4 — PITL / bilingual review / source trail / IR cadence | §9.4 / §9.5.7 | Legal + Chief Compliance | ⏳ pending | _e.g._ `Legal-2026-Q2-Compliance-001` |
| 5 | Data handling / cross-border (PIPL + HIPAA + BAA) language | §9.4.3 / §9.5.8 | Legal | ⏳ pending | _e.g._ `Legal-2026-Q2-DataHandling-001` |
| 6 | CN parallel (§9.5) — wording fidelity to EN, port-股 terminology compliance | §9.5 entire | IR Director + Legal (CN-fluent) | ⏳ pending | _e.g._ `IR-2026-Q2-About-CN-001` |
| 7 | HKEX external links use `rel="external noopener"` (technical compliance) | §9.1.4 / §9.5.4 / §9.5.7 | Engineering self-check | ⏳ pending W4 build | covered in `/about` build commit |

---

## Workflow

1. ✅ **Step 1** (this commit batch): Draft EN §9.1–§9.4
2. ✅ **Step 2** (this commit batch): Draft CN §9.5
3. ⏳ **Step 3**: Send draft to Legal + IR with 5-working-day buffer
   - Email subject: `[Sign-off needed by {date}] MedSci About page §9 EN+CN drafts`
   - Attach: this tracker + Copy Deck v4.2 §9 sections (EN + CN)
   - Required signers: IR Director, Head of Legal, Chief Compliance, People Ops (for §9.2)
4. ⏳ **Step 4**: After all 6 receipts captured, commit drafts + this tracker (with receipt IDs filled in) + any wording revisions agreed during review.

---

## Hard blocks (cannot deploy without)

- Any `⚑` placeholder remaining in §9.1.2 / §9.2.3 / §9.3.4 stat strips → **check-page Gate 17 fails, deploy blocked.**
- §9.5 CN must be word-for-word numerically aligned with EN §9.1/§9.3 — any divergence is treated as a disclosure incident.
- zh-HK 繁体版本 (deferred to translation pipeline post-§9.5 sign-off; not in W4 critical path but required before W6 production deploy per IA §11 hreflang table).

---

## Light items (track but not deploy-blocking for prototype)

- Leadership photos (placeholder grey + monogram fallback acceptable for prototype/BD demo).
- HKEX direct deep links (page-level OK; specific announcement deep links can be added once IR confirms which to feature).
