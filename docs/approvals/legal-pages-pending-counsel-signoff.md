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

---

## Appendix A — Counsel response template (18 markers)

Each block is structured for counsel to fill inline and return. Receipt IDs are issued by Yog upon counsel-final acceptance and recorded in the Tracking matrix above.

### §12.1 Terms of Use — 6 markers

#### Marker §12.1.1.1 — Jurisdictional acceptance language

**Skeleton text** (for context):
> "By accessing or using medscihealthcare.com (the 'Site'), you agree to these Terms of Use. If you do not agree, do not use the Site. ⚠️ Counsel to confirm jurisdiction-specific acceptance language."

**Counsel response**:
- Final language: _[paste]_
- Reasoning / jurisdictions consulted (HK / U.S. / EU / mainland China): _[paste]_
- Citations / authorities: _[paste]_
- Conflict flag: _[Y/N]_
- Signed by + date: _[name, YYYY-MM-DD]_

#### Marker §12.1.1.2 — Automated-access carve-outs

**Skeleton text**: "You may not scrape, mirror, redistribute, or republish content without prior written permission. ⚠️ Counsel to add automated-access carve-outs (legitimate research crawlers, etc.)."
- Final language: _[paste]_
- Crawler / archival exemptions specified: _[paste]_
- Signed by + date: _[name, YYYY-MM-DD]_

#### Marker §12.1.1.5 — Disclaimer scope tri-jurisdictional

**Skeleton text**: "Site content is provided on an 'as is' basis without representations or warranties of any kind. ⚠️ Counsel to align disclaimer with U.S. + China + HK jurisdictional norms."
- Final language: _[paste]_
- Per-jurisdiction notes (U.S. UCC §2-316, HK Sale of Goods Ord., PRC Civil Code …): _[paste]_
- Signed by + date: _[name, YYYY-MM-DD]_

#### Marker §12.1.1.6 — Liability caps per jurisdiction

**Skeleton text**: "...will not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the Site. ⚠️ Counsel to set jurisdictional caps."
- Final language (incl. monetary cap if applicable): _[paste]_
- Per-jurisdiction notes: _[paste]_
- Signed by + date: _[name, YYYY-MM-DD]_

#### Marker §12.1.1.7 — Indemnity clause replacement

**Skeleton text**: "You agree to indemnify MedSci Healthcare and its affiliates against claims arising from your misuse of the Site. ⚠️ Counsel-drafted indemnity clause to replace."
- Final language: _[paste]_
- Carve-outs (gross negligence / willful misconduct / etc.): _[paste]_
- Signed by + date: _[name, YYYY-MM-DD]_

#### Marker §12.1.1.9 — Governing law and venue

**Skeleton text**: "These Terms are governed by ⚠️ [Counsel-set jurisdiction], without regard to conflict-of-laws rules. You agree to ⚠️ [Counsel-set venue / arbitration clause]."
- Governing law jurisdiction: _[paste — HK preferred per internal default]_
- Venue / arbitration mechanism: _[paste — HKIAC? Singapore? court?]_
- Signed by + date: _[name, YYYY-MM-DD]_

---

### §12.2 Privacy Policy — 7 markers

#### Marker §12.2.1.2 — Sensitive PI definitions tri-jurisdictional

**Skeleton text**: "We do not collect or store sensitive personal information (health, political, religious, or biometric) through this Site. ⚠️ Counsel to confirm sensitive PI definitions tri-jurisdictional (CCPA + GDPR + PIPL)."
- Final language: _[paste]_
- Definitions reconciled across CCPA Cal. Civ. Code §1798.140(ae), GDPR Art. 9, PIPL Art. 28: _[paste]_
- Signed by + date: _[name, YYYY-MM-DD]_

#### Marker §12.2.1.3 — Article 6(1)(f) balancing test

**Skeleton text**: "Legitimate interest: server logs, abuse prevention, analytics aggregation. ⚠️ Counsel to validate Article 6(1)(f) balancing test for legitimate-interest categories."
- Validation outcome: _[Y/N + reasoning]_
- LIA (Legitimate Interest Assessment) reference doc: _[link or attached]_
- Signed by + date: _[name, YYYY-MM-DD]_

#### Marker §12.2.1.4 — CCPA / CPRA "share" definition

**Skeleton text**: "MedSci Healthcare does not sell personal information, as that term is defined under CCPA. ⚠️ Counsel to confirm 'share' definition under CPRA 2023 amendments."
- "Share" applicability: _[Y/N + reasoning]_
- If yes, opt-out mechanism language: _[paste]_
- Signed by + date: _[name, YYYY-MM-DD]_

#### Marker §12.2.1.5 — PIPL Standard Contractual Clauses

**Skeleton text**: "Cross-border transfer of such data follows the contractual mechanism … ⚠️ Counsel to confirm Standard Contractual Clauses status."
- SCC mechanism in use: _[CAC-issued PIPL SCC / individual filing / certification]_
- Filing reference number(s): _[paste]_
- Signed by + date: _[name, YYYY-MM-DD]_

#### Marker §12.2.1.7 — Retention periods per data class

**Skeleton text**: "Smart Form submissions: retained for ⚠️ [Counsel-set period, typically 12-36 months] from last interaction."
- Smart Form retention period: _[paste]_
- Server logs retention: _[paste — currently 90 days]_
- Anonymized analytics: _[paste — currently indefinite]_
- Signed by + date: _[name, YYYY-MM-DD]_

#### Marker §12.2.1.10 — Children threshold age per jurisdiction

**Skeleton text**: "The Site is not directed at children under ⚠️ [13 / 16, counsel-set per jurisdiction]."
- Threshold age (single or per-jurisdiction list): _[paste]_
- Reasoning: _[paste — COPPA 13 / GDPR Art. 8 16 / PIPL 14]_
- Signed by + date: _[name, YYYY-MM-DD]_

#### Marker §12.2.1.12 — GDPR Article 37 mandatory DPO designation

**Skeleton text**: "Data Protection Officer (DPO): ⚠️ counsel to confirm whether GDPR Article 37 mandatory DPO designation applies."
- DPO mandatory: _[Y/N + reasoning]_
- If yes, DPO name + contact for publishing: _[paste]_
- Signed by + date: _[name, YYYY-MM-DD]_

---

### §12.3 Disclosures — 5 markers (DUAL-SIGN: Counsel + IR + Legal)

> ⚠️ §12.3 markers carry an additional IR + Head of Legal sign-off after counsel returns final EN. Counsel completes Block A; IR + Legal complete Block B.

#### Marker §12.3.1.1 — Safe-Harbor language alignment

**Skeleton text**: "We do not undertake to update forward-looking statements except as required by HKEX rules. ⚠️ Counsel to align Safe-Harbor language to HKEX Listing Rules + U.S. PSLRA equivalent if SEC-listed instruments come into scope."

**Block A — Counsel**:
- Final language: _[paste]_
- HKEX Listing Rules cited: _[paste]_
- U.S. PSLRA applicability: _[paste — only if SEC instruments in scope]_
- Signed by + date: _[name, YYYY-MM-DD]_

**Block B — IR Director + Head of Legal**:
- Co-sign: _[both names + dates]_
- Receipt ID: _e.g._ `IR-LEGAL-2026-Q2-Disclosures-§12.3.1.1`

#### Marker §12.3.1.2 — "Last refreshed" dates × 5

**Skeleton text** (table cell): "⚠️ pending IR refresh" — for the 3.33M+ physician network row.

**Block A — Counsel**: confirm acceptable language for "pending refresh" stub: _[paste]_
**Block B — IR Director**: provide actual refresh dates for each of 5 rows:
| Row | Last refreshed (YYYY-MM-DD) |
|---|---|
| 3.33M+ registered physicians | _[date]_ |
| 2415.HK ticker symbol | 2024 (HKEX listing) |
| AI + PITL methodology claims | _[date]_ |
| Bilingual physician review (EN + CN) | _[date]_ |
| Case Study metrics × 9 | _[per-page date / single batch date]_ |
- Co-sign IR + Legal: _[both names + dates]_
- Receipt ID: _e.g._ `IR-LEGAL-2026-Q2-Disclosures-§12.3.1.2`

#### Marker §12.3.1.2 (continued) — Case Study metric reconciliation window

**Skeleton text**: "Where any number on the Site differs from the most recent HKEX disclosure, the HKEX disclosure governs and we will reconcile the Site within ⚠️ [counsel-set window, typically 30 days]."

**Block A — Counsel**: window length + final language: _[paste]_
**Block B — IR Director**: confirm operational feasibility of window: _[Y/N]_
- Co-sign + receipt ID

#### Marker §12.3.1.5 — HKEX direct deep links × 3

**Skeleton text**: "⚠️ [Counsel + IR to provide direct deep link or cite year]" for annual report / quarterly results / corporate governance report.

**Block A — Counsel**: confirm acceptable to deep-link to HKEX-hosted PDFs vs. summary citation: _[paste guidance]_
**Block B — IR Director**: provide direct URLs:
| Filing | Direct URL |
|---|---|
| Latest annual report | _[paste]_ |
| Latest quarterly results | _[paste]_ |
| Corporate governance report | _[paste]_ |
- Refresh process: _[paste — who updates these links when new filings drop]_
- Co-sign + receipt ID

#### Marker §12.3.1.6 — AI + PITL methodology language alignment

**Skeleton text**: "⚠️ Counsel + IR to confirm public-facing methodology summary aligns to HKEX disclosure language and U.S. FTC advertising rules."

**Block A — Counsel**: FTC §5 unfair/deceptive review pass: _[paste]_
**Block B — IR Director + Head of Legal**: confirm alignment with internal Methodology v1 (CMO-signed) and HKEX disclosure language: _[paste]_
- Co-sign + receipt ID `IR-LEGAL-2026-Q2-Disclosures-§12.3.1.6`

---

## Appendix B — Translation review template (zh-CN parallel pages)

> Triggered after Block A (counsel-final EN) for each page. Translation review confirms legal-meaning parity, NOT free creative re-translation.

### Per-page translation review block

```
Page: §12.x (Terms / Privacy / Disclosures)
Translator: [name]
Reviewer (legal-fluent CN bilingual): [name]
Translation date: [YYYY-MM-DD]
Counsel-final EN reference: [Receipt ID]

Term mapping confirmations (must match):
- "controller" → "信息处理者" (PIPL standard)
- "Sensitive PI" → "敏感个人信息" (PIPL standard)
- "DPO" → "数据保护负责人"
- "Forward-looking statements" → "前瞻性陈述"
- "Restatement" → "重述"
- "Safe Harbor" → "安全港" (or retain English per IR preference)

Numerical parity check (§12.3 only):
- All headline numbers (3.33M+, ticker, dates, retention periods) confirmed word-for-word identical to EN: [Y/N]

Translation reviewer sign-off + date: [name, YYYY-MM-DD]
Receipt ID: e.g. Counsel-2026-Q2-Terms-CN-001
```
