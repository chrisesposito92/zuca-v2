---
title: "Apply tier-level min/max rules for region-based volume pricing"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/use-cases/apply-tier-level-minmax-rules-for-region-based-volume-pricing"
product: "zuora-billing"
scraped_at: "2025-12-24T05:02:43.663Z"
---

# Apply tier-level min/max rules for region-based volume pricing

The Tier-Level Min/Max Pricing feature ensures that pricing for each tier in a volume or tiered model remains within specified bounds, complying with regional regulations and maintaining profitability.

The Tier-Level Min/Max Pricing feature allows you to control the final charge amount for each tier in a volume or tiered pricing model. This capability is especially useful when pricing must remain within specific bounds to comply with regional regulations, maintain profitability, or align with customer expectations.

Note:

Min/Max caps are currently supported only for Usage Charge Type with Tiered and Volume charge models.

## Business Scenario

A business offers a usage-based subscription product that varies in pricing based on the customer's location (state). The pricing follows a tiered model, and for each region (CA, NY, PA), the business wants to ensure:

-   The total price for a tier never falls below a defined minimum value.

-   The total price for a tier never exceeds a defined maximum value.


This protects revenue and ensures compliance without duplicating product entries.

California (CA)

| Tier | Start Unit | End Unit | Price | Format | Min | Max |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 10 | $2 | Per Unit | $5 | $20 |
| 2 | 11 | ∞ | $1 | Per Unit | $10 | $100 |

New York (NY)

| Tier | Start Unit | End Unit | Price | Format | Min | Max |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 10 | $2.5 | Per Unit | $6.25 | $25 |
| 2 | 11 | ∞ | $1.5 | Per Unit | $15 | $150 |

Pennsylvania (PA)

| Tier | Start Unit | End Unit | Price | Format | Min | Max |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 10 | $1.8 | Per Unit | $4 | $18 |
| 2 | 11 | ∞ | $0.8 | Per Unit | $8 | $80 |

-   The minimum (Min) ensures that the calculated amount for a given tier is not lower than the specified value.

-   The maximum (Max) ensures that the calculated amount for the tier does not exceed the specified value.

    Note:

    You can define the Min and Max values while configuring Rate Cards for a Tiered or Volume charge model. You can also leave either Min or Max blank if you only want to set one boundary.

    -   If both Min and Max are defined, the system validates that Max > Min.

    -   If neither is provided, the system calculates the amount based purely on the unit price and usage quantity.

    -   Min/Max rules apply only at the individual tier level and are not cumulative across tiers.



## Configure in Zuora UI

1.  Go to and open the product.

2.  Create or edit a rate plan.

3.  Select Charge Type as Usage and Charge Model as Tiered or Volume.

4.  In the Pricing section, select Dynamic Pricing.

5.  In the Decision Table:

    1.  In the Field column, choose State (or Region).

    2.  Add conditions for CA, NY, PA.

    3.  Define multiple tiers by entering Start Unit, End Unit, and Price.

    4.  For each tier row, specify Min and Max values in the corresponding columns.

6.  Click Save.
