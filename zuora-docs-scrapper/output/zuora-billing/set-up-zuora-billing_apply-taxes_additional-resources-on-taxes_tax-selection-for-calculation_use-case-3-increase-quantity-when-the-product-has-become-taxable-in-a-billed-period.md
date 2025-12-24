---
title: "Use case 3: Increase quantity when the product has become taxable in a billed period"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/tax-selection-for-calculation/use-case-3-increase-quantity-when-the-product-has-become-taxable-in-a-billed-period"
product: "zuora-billing"
scraped_at: "2025-12-24T05:11:10.083Z"
---

# Use case 3: Increase quantity when the product has become taxable in a billed period

This use case illustrates the impact of a product becoming taxable during a billing period when the quantity is increased, highlighting the differences in tax application based on feature enablement.

Building on the previous example, imagine that when your customer purchased your product on 1/1/2021, the product was not subject to tax. The first invoice is like this:

| Charge name | Service period | Quantity | Amount | Tax rate | Tax amount | Subtotal |
| --- | --- | --- | --- | --- | --- | --- |
| Service fee | 1/1/2021-12/31/2021 | 10 | 100 | 0 | 0 | 100 |
| Total | 100 |  |  |  |  |  |

When your customer decided to increase the quantity from 10 to 11 on 7/1/2021, the product has become taxable at 10% due to a tax rule change in the region.

If the feature is not enabled (default): the credit item is not taxed while the charge item is taxed at 10%.

| Charge name | Service period | Quantity | Amount | Tax rate | Tax amount | Subtotal |
| --- | --- | --- | --- | --- | --- | --- |
| Service fee-Proration credit | 7/1/2021-12/31/2021 | 10 | -50.41 | 0 | 0 | -50.41 |
| Service fee - Proration | 7/1/2021-12/31/2021 | 11 | 55.45 | 10% | 5.55 | 61 |
| Total | 10.59 |  |  |  |  |  |

If the feature is enabled : the new tax rate is applied to both the credit item and charge item, meaning that only the one additional unit is taxed at 10% due to the taxability change of your product.

| Charge name | Service period | Quantity | Amount | Tax rate | Tax amount | Subtotal |
| --- | --- | --- | --- | --- | --- | --- |
| Service fee – Proration credit | 7/1/2021-12/31/2021 | 10 | -50.41 | 10% | -5.04 | -55.45 |
| Service fee - Proration | 7/1/2021-12/31/2021 | 11 | 55.45 | 10% | 5.55 | 61 |
| Total | 5.55 |  |  |  |  |  |
