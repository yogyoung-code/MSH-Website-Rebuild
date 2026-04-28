# Pilots — BD + Finance Pricing Sign-Off Tracker

**Status**: ⏳ Drafts complete (Copy Deck v4.2 §11). Awaiting BD + Finance pricing finalization.
**Created**: 2026-04-27
**Buffer required**: To be defined; pricing decision is not on a strict 5-day buffer (unlike §9 dual-sign).

---

## Tracking matrix

| # | Pilot | URL | Spec | Pricing field status | Receipt ID (fill on sign-off) |
|---|---|---|---|---|---|
| 1 | 30-Day China Evidence Sprint | `/pilots/china-evidence-sprint` | §11.1 | ⚑ pending BD + Finance | _e.g._ `BD-FIN-2026-Q2-China-Sprint-001` |
| 2 | 30-Day FDA Evidence Gap Diagnostic | `/pilots/fda-evidence-gap-diagnostic` | §11.2 | ⚑ pending BD + Finance | _e.g._ `BD-FIN-2026-Q2-FDA-Diagnostic-001` |

---

## Prototype-stage rendering rule (per §11.3)

While `pricing.status === 'pending'`:

- `PilotCard.jsx` does NOT emit `⚑` into HTML (would trip check-page Gate 17).
- Instead renders the user-visible string `"Pricing on request"` + secondary CTA `"Talk to BD about pricing"` linking to `/contact?topic=<pilot-slug>`.

After sign-off, replace the `pending` state with the agreed pricing structure:

```js
{
  status: 'final',
  display: '$XX,000 USD' | 'USD $XX–XX K (range)',
  receiptId: 'BD-FIN-2026-Q2-China-Sprint-001',
  signedAt: '2026-MM-DD'
}
```

---

## Hard blocks (cannot deploy without)

- Any `⚑` rendering in static HTML → check-page Gate 17 fails, deploy blocked.
- Pricing display string MUST NOT contain "guarantee" / "industry-leading" / etc. (§0 forbidden phrases).
- "Talk to BD about pricing" CTA must route to `/contact?topic=<pilot-slug>` (matches §10.1.5 topic enum).

---

## Open questions for BD + Finance

1. Single price vs. range vs. tiered (PoC / standard / extended)?
2. Currency display (USD-only or USD + RMB equivalents)?
3. Cancellation/refund pricing reflection (already in FAQ Q6, but if pricing is tiered the refund math changes)?
4. Extension credit terms (Sprint fee creditable against first month of broader engagement — confirm BD-side validity)?

These answers should land in the same sign-off receipt and update §11.1.4 / §11.2.4 + §11 FAQ in next Copy Deck patch.
