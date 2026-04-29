# Signature Components

These four components were extracted in the 2026-04-29 UX-critique pass to
replace patterns flagged as AI-slop / template-feel / brand-spec-drift.

| Component | Replaces | Lives in spec | Brand intent |
|---|---|---|---|
| `PitlRibbon` | `StepDiagram` (generic) | NEW (extends §6 components) | The signature visual claim — **AI lane × Physician lane** with a logo-spiral handoff dot |
| `MetricStrip` | scattered `MetricTriad` | Replaces (`MetricTriad` deprecated) | One disciplined metric block — sourced, year-stamped, restricted-use |
| `EvidenceTrail` | inline data-claim sentences | NEW | Visualizes the audit trail; pairs each claim with a verification badge |
| `AsymmetricFeatureGrid` | identical 3-up card grids | NEW (layout primitive) | Breaks the 3-column monotony; one featured + two secondary |

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

### `AsymmetricFeatureGrid`

✓ Allowed surfaces

- Homepage Cases section
- Homepage Insights section
- Cases index (when filter result ≥ 3)
- Insights index (when filter result ≥ 3)

✗ Forbidden when

- Fewer than 3 items match (fall back to a single-card or two-up layout)
- The items are intentionally peer-equal (e.g., compliance pillars on About)

## Migration plan (handled by `/arrange`, not `/extract`)

1. Replace the homepage `Sections2` cases section with `AsymmetricFeatureGrid`.
2. Replace the homepage `Sections3` insights section with `AsymmetricFeatureGrid`.
3. Replace `StepDiagram` on `ai-platform.html` with `PitlRibbon`.
4. Replace `StepDiagram` on `pilots/china-evidence-sprint.html` with `PitlRibbon`.
5. Replace `StepDiagram` on `pilots/fda-evidence-gap-diagnostic.html` with `PitlRibbon`.
6. Remove every standalone `MetricTriad` use **except** Homepage hero and About.
   On case-study individual pages, keep one `MetricStrip` after Outcome.
7. Add `EvidenceTrail` to each Solution page in place of inline data-claims.

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
