---
title: "Multiple percentage discounts example"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/discount-charge-models/multiple-percentage-discounts-example"
product: "zuora-billing"
scraped_at: "2025-12-24T04:49:23.742Z"
---

# Multiple percentage discounts example

This example demonstrates how multiple percentage discounts are applied to a $1000 recurring subscription charge, including rate plan, subscription-level, and account-level discounts.

The following example shows how multiple percentage discounts are applied. Customer A has a $1000 recurring subscription charge with three discounts that can be applied. The three discounts are:

-   A rate plan discount of 10% off

-   A subscription-level discount of 20% off

-   An account-level discount of 30% off

    The table below describes how the discounts will be applied:

    | Discount Order | Level | Discount % | Base Amount | Total Discount Amount | Amount Due (Sub Total) |
    | --- | --- | --- | --- | --- | --- |
    | 1 | Rate Plan | 10% | $1000 | $100 | $900 |
    | 2 | Subscription | 20% | $900 | $180 | $720 |
    | 3 | Account | 30% | $720 | $216 | $504 |
    | Total Discounts : $496 |  |  |  |  |  |
    | Total Amount Due After Discounts : $504 |  |  |  |  |  |
