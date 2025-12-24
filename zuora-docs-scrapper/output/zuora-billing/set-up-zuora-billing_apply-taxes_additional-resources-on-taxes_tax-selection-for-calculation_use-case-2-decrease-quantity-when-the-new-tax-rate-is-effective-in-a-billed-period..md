---
title: "Use case 2: Decrease quantity when the new tax rate is effective in a billed period."
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/tax-selection-for-calculation/use-case-2-decrease-quantity-when-the-new-tax-rate-is-effective-in-a-billed-period."
product: "zuora-billing"
scraped_at: "2025-12-24T05:11:07.610Z"
---

# Use case 2: Decrease quantity when the new tax rate is effective in a billed period.

This use case demonstrates the impact of a new tax rate on billing when a customer decreases the quantity of a service, highlighting differences in tax calculations with and without the Tax Selection for Calculation feature enabled.

In the previous example, imagine that your customer decreased the quantity from 10 to 9. You created a new bill run with a target date of 7/1/2021 to refund the customer. On that day, the tax rate applicable to your product has been changed to 11%. Depending on whether you enable the Tax Selection for Calculation feature, the tax amount on the invoice from the second bill run will be different.

If the feature is not enabled (default): The tax rate is 10% for the credit item, and the tax rate is 11% for the charge item.

| Charge name | Service period | Quantity | Amount | Tax rate | Tax amount | Subtotal |
| --- | --- | --- | --- | --- | --- | --- |
| Service fee-Proration credit | 7/1/2021-12/31/2021 | 10 | -50.41 | 10% | -5.04 | -55.45 |
| Service fee - Proration | 7/1/2021-12/31/2021 | 9 | 45.37 | 11% | 4.99 | 50.36 |
| Total | -5.09 |  |  |  |  |  |

Calculation of Amount:

-   Service fee-Proration credit: 10 \* 10 / 365 \* 184 = 50.41(round)

-   Service fee-Proration: 9 \* 10 / 365 \* 184 = 45.37(round)


If the feature is enabled: the old tax rate is applied to the removed units, meaning that the one unit removed is taxed at the old rate of 10%.

| Charge name | Service period | Quantity | Amount | Tax rate | Tax amount | Subtotal |
| --- | --- | --- | --- | --- | --- | --- |
| Service fee – Proration credit | 7/1/2021-12/31/2021 | 10 | -50.41 | 10% | -5.04 | -55.45 |
| Service fee - Proration | 7/1/2021-12/31/2021 | 9 | 45.37 | 10% | 4.54 | 49.91 |
| Total | -5.54 |  |  |  |  |  |
