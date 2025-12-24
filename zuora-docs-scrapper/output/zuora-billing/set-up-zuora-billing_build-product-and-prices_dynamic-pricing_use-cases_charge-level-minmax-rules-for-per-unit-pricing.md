---
title: "Charge-level min/max rules for per unit pricing"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/use-cases/charge-level-minmax-rules-for-per-unit-pricing"
product: "zuora-billing"
scraped_at: "2025-12-24T05:02:46.295Z"
---

# Charge-level min/max rules for per unit pricing

Learn how to apply charge-level minimum and maximum rules for per unit pricing to ensure charges do not fall below or exceed set thresholds across various charge models.

While tier-level min/max rules apply within tiered and volume pricing, charge-level caps can be used across any charge model, such as Per Unit, Flat Fee, or Overage, to enforce minimum or maximum thresholds on the entire charge. The supported charge models are:

-   Per Unit

-   Volume

-   Tiered


## Business Scenario

Charge-Level Cap with Per Unit Model A Per Unit charge is defined with a flat unit price for each unit consumed, but the business wants to ensure that the final charge never drops below a minimum or exceeds a maximum.

| State | Unit Price | Min. Charge | Max. Charge |
| --- | --- | --- | --- |
| CA | $10 | $100 | $200 |
| NY | $12 | $120 | $240 |

-   Example 1 – CA, Quantity = 8 → 8 \* $10 = $80 → Result: $100 (Min Cap Enforced)

-   Example 2 – NY, Quantity = 25 → 25 \* $12 = $300 → Result: $240 (Max Cap Enforced)

-   Example 3 – NY, Quantity = 10 → 10 \* $12 = $120 → Result: $120 (Within Range)


## Configure in Zuora UI

1.  Go to and open the product.

2.  Create or edit a rate plan.

3.  Select Charge Type as Usage and Charge Model as Per Unit.

4.  In the Pricing section, select Dynamic Pricing.

5.  In the Decision Table:

    1.  Add attributes like State (CA, NY).

    2.  Enter the Unit Price (e.g., $10 for CA, $12 for NY).

    3.  Define Charge-Level Min and Max thresholds in the Min/Max fields at the bottom of the table.

6.  Click Save.
