---
title: "Usage charges with min/max enforcement"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/use-cases/usage-charges-with-minmax-enforcement"
product: "zuora-billing"
scraped_at: "2026-02-19T03:09:58.922Z"
---

# Usage charges with min/max enforcement

For Usage charges, you can define minimum and maximum thresholds to ensure that billing aligns with business rules, such as maintaining margin limits or usage fairness. These thresholds can be configured at both the tier level and the row level in the decision table.

## Business Scenario

A video streaming service charges customers based on data usage per region, but enforces caps to ensure margins are protected.

| Region | Usage Charge (per GB) | Min. | Max. |
| --- | --- | --- | --- |
| CA | $50 | $45 | $60 |
| NY | $55 | $50 | $65 |

-   A CA customer is billed $50 → within min/max → final = $50

-   A CA customer with a discount reducing rate to $40 → system applies Min = $45 → final = $45

-   An NY customer is billed $70 (due to add-ons) → system applies Max = $65 → final = $65


This ensures that usage-based pricing respects the defined min/max bounds.

## Configure in Zuora UI

1.  Go to and open the product.

2.  Create or edit a rate plan.

3.  Select Charge Type as Usage and Charge Model as Tiered or Volume.

4.  In the Pricing section, select Dynamic Pricing.

5.  In the Decision Table:

    1.  Set the attribute as Region.

    2.  Configure Min = 45, Max = 60 (CA) and Min = 50, Max = 65 (NY).

6.  Click Save.
