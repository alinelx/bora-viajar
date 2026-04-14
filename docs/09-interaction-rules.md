# BoraViajar – Interaction Rules

## Recommendation Weighting

* Accept = weight 1.0
* Maybe = weight 0.5
* Reject = excluded

---

## Generate More Logic

* Only generate previously unseen options
* Exclude rejected pool from regeneration
* If no unseen options remain:

  * Reintroduce rejected pool
  * Notify user that suggestions are being recycled
* Maximum 3 refreshes per category/session

---

## Recommendation Completion Rules

* User must review at least 70% of recommendations before itinerary generation
* User may skip recommendation phase manually

---

## Itinerary Generation Rules

* Prioritize accepted recommendations
* Use maybe recommendations as fallback/secondary suggestions
* Respect budget constraints during generation
* Respect travel pace / mobility preferences

---

## Editing Rules

* Manual edits override AI-generated content
* Added manual activities are tagged source=manual
* Deleted AI activities remain excluded unless regenerated

---

## Persistence Rules

* Save draft automatically on major flow transitions
* Persist latest itinerary version only
