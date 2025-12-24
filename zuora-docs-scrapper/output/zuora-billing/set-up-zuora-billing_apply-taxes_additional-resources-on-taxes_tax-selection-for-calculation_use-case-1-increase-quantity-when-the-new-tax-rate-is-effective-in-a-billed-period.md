---
title: "Use case 1: Increase quantity when the new tax rate is effective in a billed period"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/tax-selection-for-calculation/use-case-1-increase-quantity-when-the-new-tax-rate-is-effective-in-a-billed-period"
product: "zuora-billing"
scraped_at: "2025-12-24T05:11:05.082Z"
---

# Use case 1: Increase quantity when the new tax rate is effective in a billed period

This use case demonstrates how a change in tax rate affects billing when a customer increases their service quantity during a billed period.

Imagine that you are a software-as-a-service provider that licenses the service for $10 per user per year. Here are the charge details of your product.

| Charge name | Charge model | Unit price | Billing period |
| --- | --- | --- | --- |
| Service fee | Per unit | $10 | Annual |

One customer purchased 10 units with an initial term of 12 months, starting on 1/1/2021. On that day, you created a bill run with a target date of 1/1/2021 for this customer. The tax rate was at 10%. The bill run generated the following invoice:

| Charge name | Service period | Quantity | Amount | Tax rate | Tax amount | Subtotal |
| --- | --- | --- | --- | --- | --- | --- |
| Service fee | 1/1/2021-12/31/2021 | 10 | 100 | 10% | 10 | 110 |
| Total | 110 |  |  |  |  |  |

On 7/1/2021, this customer increased the quantity from 10 to 11. You created a new bill run with a target date of 7/1/2021 to charge the customer for the additional unit. On that day, the tax rate applicable to your product has been changed to 11%. Depending on whether you enable the Tax Selection for Calculation feature, the tax amount on the invoice from the second bill run will be different.

If the feature is not enabled (default): The new tax rate is applied to all the purchased units, and the old tax rate is applied to the proration credit. In this case, the tax rate is 10% for the credit item, and the tax rate is 11% for the charge item.

| Charge name | Service period | Quantity | Amount | Tax rate | Tax amount | Subtotal |
| --- | --- | --- | --- | --- | --- | --- |
| Service fee-Proration credit | 7/1/2021-12/31/2021 | 10 | -50.41 | 10% | -5.04 | -55.45 |
| Service fee - Proration | 7/1/2021-12/31/2021 | 11 | 55.45 | 11% | 6.10 | 61.55 |
| Total | 6.10 |  |  |  |  |  |

Calculation of Amount:

-   Service fee-Proration credit: 10 \* 10 / 365 \* 184 = 50.41(round)

-   Service fee-Proration: 11 \* 10 / 365 \* 184 = 55.45(round)


If the feature is enabled: The new tax rate is applied only to the additional units added. In this case, the tax rate is 11% for both the credit item and the charge item, meaning that only the one unit added is taxed at the new rate of 11%.

| Charge name | Service period | Quantity | Amount | Tax rate | Tax amount | Subtotal |
| --- | --- | --- | --- | --- | --- | --- |
| Service fee-Proration credit | 7/1/2021-12/31/2021 | 10 | -50.41 | 11% | -5.53 | -55.96 |
| Service fee - Proration | 7/1/2021-12/31/2021 | 11 | 55.45 | 11% | 6.10 | 61.55 |
| Total | 5.59 |  |  |  |  |  |
