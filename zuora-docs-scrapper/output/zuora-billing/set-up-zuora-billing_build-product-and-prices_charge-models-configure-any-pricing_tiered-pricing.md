---
title: "Tiered pricing"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/tiered-pricing"
product: "zuora-billing"
scraped_at: "2025-12-24T04:49:06.652Z"
---

# Tiered pricing

The tiered pricing model adjusts prices based on volume, using a price table with defined tiers. It accumulates charges from all previous tiers and can be applied to various charge types.

## Tiered pricing example

With a tiered charge model, pricing changes progressively as the volume increases. Like the volume pricing model, the tiered pricing model uses a price table to calculate the pricing. The price table is made up of individual tiers that define a range of volumes and the pricing rule to apply if the customer purchases a quantity that falls within the range of that tier. Each tier is defined by a starting unit, an ending unit, a list price, and a price format (which can be either flat fee or per unit).

Unlike the volume model, tiered pricing cumulates all previous tiers when calculating the charge. So, if the quantity purchased falls into Tier 3, the calculation would include (the pricing of Tier 1 + the pricing of Tier 2 + the pricing of the remaining units in Tier 3).

The tiered pricing model can be used with one-time, recurring, or usage-based charges.

For example, the tier is set up as follows:

| Tier | From | To | List Price | Price Format |
| --- | --- | --- | --- | --- |
| 1 | 0.00 | 5.00 | $0.00 | Flat Fee |
| 2 | 5.01 | 7.00 | $200.00 | Flat Fee |
| 3 | 7.01 | 9.00 | $100.00 | Flat Fee |
| Overage price of $75.00 |  |  |  |  |

Based on the sample tiered pricing table above, 8.5 units would fall into Tier 3 and be calculated as follows:

Tier 1: $0.00 Flat fee + Tier 2: $200 Flat fee + Tier 3: $100 Flat fee

Total fees = $300

Note:

Note that the system UI supports only 16 digits, including those after the decimal, for all the tier pricing rates mentioned in the above example. If you want the system to support more than 16 digits (if your pricing has more than 16 decimal places), use [API](https://developer.zuora.com/v1-api-reference/api/operation/Object_POSTProductRatePlanCharge/) to create/update the charges.
