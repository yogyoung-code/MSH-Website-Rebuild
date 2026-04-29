# Signature Components

These four components were extracted in the 2026-04-29 UX-critique pass to
replace patterns flagged as AI-slop / template-feel / brand-spec-drift.

| Component | Replaces | Lives in spec | Brand intent |
|---|---|---|---|
| `PitlRibbon` | `StepDiagram` (generic) | NEW (extends §6 components) | The signature visual claim — **AI lane × Physician lane** with a logo-spiral handoff dot |
| `MetricStrip` | scattered `MetricTriad` | Replaces (`MetricTriad` deprecated) | One disciplined metric block — sourced, year-stamped, restricted-use |
| `EvidenceTrail` | inline data-claim sentences | NEW | Visualizes the audit trail; pairs each claim with a verification badge |
| `AsymmetricFeatureGrid` | identical 3-up card grids | NEW (layout primitive) | Breaks the 3-column monotony; one featured + two secondary |
| `CountryCompare` | nothing (was missing) | NEW (added by `/bolder`) | **Path-page** signature shape — US ↔ CN side-by-side strip with a directional arrow |
| `DeliverableSample` | nothing (was missing) | NEW (added by `/bolder`) | **Deliverable-page** signature shape — input → output spec rows |
| `Pending` / `DraftNotice` | leaked placeholder strings | NEW (added by `/harden`) | "Coming soon" callout + page-level draft banner |

## Hard usage rules

### `MetricStrip`

✓ Allowed surfaces

- Homepage hero (`variant="featured"`) — once
- About page (`variant="featured"`) — once
- Individual case-study page (`variant="inline"`) — once, after Outcome

✗ Forbidden surfaces

- AI Platform page
- Solution pages (any of the 6)
- Pilot pages
- Insights index / individual insight
- Cases index
- Footer / final CTA

✗ Never more than once per page. ✗ Never with a metric that lacks `source` and `year`.

### `PitlRibbon`

✓ Allowed surfaces

- AI Platform page (primary use — replaces `StepDiagram`)
- China Evidence Sprint pilot page (the 30-day workflow)
- FDA Evidence-Gap Diagnostic pilot page
- Optionally on About → "How we work" subsection

✗ Forbidden surfaces

- Any page where the PITL workflow is not the explicit subject
- Homepage (use a single CTA pointing to the AI Platform page instead)

### `EvidenceTrail`

✓ Allowed surfaces

- Solution pages — replace inline numbered claims with a trail
- Individual case-study pages — replace the bottom MetricTriad
- AI Platform page — replace the verbose "Compliance Callout" prose

✗ Forbidden surfaces

- Homepage (too dense; use one signposted claim instead)
- Insights articles (use inline citations, not a trail)

### `CountryCompare` (path-page differentiator)

✓ Allowed surfaces

- `solutions/entering-china` — once, near the top (after sub-nav)
- `solutions/going-global-us` — once, near the top (with `direction="cn-to-us"`)

✗ Forbidden surfaces

- Any deliverable page — defeats the visual differentiation between path vs deliverable
- Homepage — too dense for a hero context

### `DeliverableSample` (deliverable-page differentiator)

✓ Allowed surfaces

- `solutions/medical-evidence` — after Capabilities section
- `solutions/physician-engagement` — after Capabilities section
- `solutions/medical-communications` — after Capabilities section
- `solutions/cross-border-medical-content-sprint` — after Capabilities section

✗ Forbidden surfaces

- Any path page — defeats the differentiation
- Homepage — too dense

### `AsymmetricFeatureGrid`

✓ Allowed surfaces

- Homepage Cases section
- Homepage Insights section
- Cases index (when filter result ≥ 3)
- Insights index (when filter result ≥ 3)

✗ Forbidden when

- Fewer than 3 items match (fall back to a single-card or two-up layout)
- The items are intentionally peer-equal (e.g., compliance pillars on About)

## Migration status

### Completed in `/arrange` (UXcritique20260429)

- [x] Homepage `Sections2.jsx` Cases → `AsymmetricFeatureGrid` (featured-left)
- [x] Homepage `Sections3.jsx` Insights → `AsymmetricFeatureGrid` (featured-right; alternates rhythm vs Cases)
- [x] `ai-platform.html` `StepDiagram` → `PitlRibbon` (dual-lane workflow)
- [x] `ai-platform.html` `StatStrip` → `MetricStrip` (sourced + year, single instance)
- [x] `ai-platform.html` add `EvidenceTrail` showing what the audit log ships with
- [x] All 3 case-study pages: `MetricTriad` → `EvidenceTrail` (with `placeholder ⚑` badges
      for `(pending)` approvals — turns the credibility leak into transparent flagging)
- [x] `index.html` script tags updated to load all four signature components

### Intentionally deferred (and why)

- [ ] Pilot pages (`china-evidence-sprint.html`, `fda-evidence-gap-diagnostic.html`):
      currently render via `PilotCard`; do not import `StepDiagram`. Adding a
      `PitlRibbon` here would be net-new content, not a migration. Best done
      alongside a copy pass that pulls real day-by-day workflow content.
- [ ] Solution pages (6 of them — `PageEnteringChina`, `PageGoingGlobal`,
      `PageMedicalEvidence`, `PagePhysicianEngagement`, `PageMedicalCommunications`,
      `PageContentSprint`): each already carries a bespoke shape (path pages
      use `PhaseTimeline`; deliverable pages use a custom 5-step process diagram).
      The differentiation flagged in the critique already exists structurally.
      Replacing those bespoke diagrams with `PitlRibbon` would *homogenize* what's
      currently differentiated. Recommend keeping the bespoke shapes and only
      adding `PitlRibbon` if a future copy revision merits it.
- [ ] Homepage `AISection` (dark `brand-primary-900` band): contains an inline
      4-step pipeline that is now redundant with the `PitlRibbon` on `/ai-platform`.
      Lightening this to a single intro + link-out belongs in `/distill`, not
      `/arrange` — it is a content/scope decision, not a layout one.

## Deprecation

`MetricTriad.jsx` is **deprecated** as of this branch. New code must consume
`MetricStrip`. The file remains in the tree only because solution and
case-study pages still load it; remove after migration completes.

## Brand-spec compliance checklist

- [x] Colors use only Primary + Accent + Neutral; success token used only
      for the `verified` evidence badge (functional, not decorative).
- [x] No green outside `EvidenceBadge` `verified` state.
- [x] No glassmorphism, no `backdrop-filter`.
- [x] Static cards: white bg + 1px `--border-1` + no shadow.
- [x] Radius: 4 (badge) · 6 (input/lane cell) · 12 (card / ribbon row).
- [x] Motion: `--dur-content` for content stagger; honors
      `prefers-reduced-motion`.
- [x] All numbers in `--font-ui` (Inter), per spec §3.4.
- [x] Sources/years carried inline with claims — no orphan stats.
