---
title: "Usage tiered pricing with adjustments and formula support"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/use-cases/usage-tiered-pricing-with-adjustments-and-formula-support"
product: "zuora-billing"
scraped_at: "2025-12-24T05:02:51.295Z"
---

# Usage tiered pricing with adjustments and formula support

Learn how to configure dynamic pricing with tiered usage charges and formula-driven adjustments, including discounts and multipliers, while respecting min/max thresholds.

You can configure dynamic pricing with tiered usage charges and apply formula-driven adjustments, such as discounts or multipliers, on top of the base pricing.

## Business Scenario

A SaaS platform charges based on API calls. Different tiers apply, and a 10% discount adjustment is applied for premium customers.

| Tier | Start Unit | End Unit | Base Price (per unit) | Formula Adjustment | Min. | Max. |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 1000 | $0.05 | 10% discount | $40 | $60 |
| 2 | 1001 | ∞ | $0.03 | 10% discount | $80 | $200 |

-   A customer uses 800 calls → Base = $40 → After 10% discount = $36 → Min = $40 enforced → Final = $40

-   A customer uses 1,500 calls → Base = $40 (tier 1) + $15 (tier 2) = $55 → After 10% discount = $49.5 → within Min/Max → Final = $49.5

-   A customer uses 10,000 calls → Base = $340 → After discount = $306 → Max = $200 enforced → Final = $200


This demonstrates how formula-based adjustments can be layered on top of tiered pricing while still respecting min/max thresholds.

## Configure in Zuora UI

1.  Go to and open the product.

2.  Create or edit a rate plan.

3.  Select Charge Type as Usage and Charge Model as Tiered.

4.  In the Pricing section, select Dynamic Pricing.

5.  In the Decision Table:

    1.  Attribute = Customer Segment (e.g., Standard vs. Premium).

    2.  Define tiers (0–1000 = $0.05, 1001+ = $0.03).

    3.  In the Enter Formula box, enter a calculation such as Price \* (1 - 0.1) for Premium customers.

    4.  Set Min and Max thresholds for each tier.

6.  Click Save.
