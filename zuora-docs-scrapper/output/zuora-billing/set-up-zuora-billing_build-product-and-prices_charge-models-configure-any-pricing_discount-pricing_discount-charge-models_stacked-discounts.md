---
title: "Stacked discounts"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/discount-charge-models/stacked-discounts"
product: "zuora-billing"
scraped_at: "2025-12-24T04:49:26.351Z"
---

# Stacked discounts

Learn how stacked discounts allow multiple discounts to be combined and applied simultaneously, offering flexibility in calculating discounts for product rate plans.

When you create a discount charge based on the Discount - Percentage charge model, you can specify whether the discount charge is stackable. Stacked discounts provide you with the flexibility of combining multiple discounts together and applying them all at once to calculate the discount for a regular product rate plan charge instead of applying the discounts sequentially. In other words, each discount is applied directly to the original charge amount.

The following table explains different methods of how Zuora Billing calculates discounts based on whether a discount charge is marked as stacked. For example, there are three discount charges applied to a regular charge of $100. The discount percentage of the discount charges is 5%, 10%, and 15%, respectively.

-   Stacked: When the three discount charges are marked as stacked, they are summed up together to derive the total discount percentage, which is then used to calculate the total discount.

-   Non-stacked: When the three discount charges are not stacked discounts, they are applied to the regular charge one after another to calculate the discount respectively. The next discount charge is applied to a charge amount, which is calculated after the previous discount charge is applied instead of the original regular charge amount.


| Calculation type | Calculation logic | Discount | Total |
| --- | --- | --- | --- |
| Stacked | $100 * (5%+10%+15%) | $30 | $(100-30)=$70 |
| Non-stacked (sequentially ) | $100 * 5% = $5$(100-5) * 10% = $9.5$(95-9.5) * 15% = $12.83 | $5+$9.5+$12.83=$27.33 | $(100-27.33)=$72.67 |

After subscribing to a percentage discount charge, you can check whether the percentage discount in the subscription is stacked or non-stacked through the `isStackedDiscount` field in the following API operations:

-   List subscriptions by account key

-   Retrieve a subscription by key

-   Retrieve a subscription by key and version
