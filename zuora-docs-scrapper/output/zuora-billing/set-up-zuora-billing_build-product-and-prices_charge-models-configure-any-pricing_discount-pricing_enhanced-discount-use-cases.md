---
title: "Enhanced discount use cases"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/enhanced-discount-use-cases"
product: "zuora-billing"
scraped_at: "2025-12-24T04:49:44.096Z"
---

# Enhanced discount use cases

Explore use cases for applying enhanced discounts to recurring charges, including considerations for discount duration and billing period comparisons.

## Applying enhanced discount to recurring charges

You can compare the results when the Enhanced Discount feature is enabled and disabled for discount charges in the following use cases to decide whether to use the Enhanced Discount feature and how to specify the discount duration.

The use cases below are grouped based on the length comparison between the charge billing period and the discount duration.

## How to understand Zuora use cases?

Before reading the following use cases, ensure you have the following knowledge:

-   Enhanced Discount enabled for a discount charge means that the Allow apply to billing period partially checkbox is selected for the discount charge. For more information, see Manage Enhanced Discount .

-   The “charge” in this article refers to a regular charge except for delivery pricing, prepayment and drawdown, and discount charges.

-   The results below are based on the following billing rules values. If you set the billing rules to other values, your results will differ slightly.

    -   When prorating a month, assume 30 days in a month or use actual days : Use actual number of days

    -   When prorating periods greater than a month, prorate by month first, or by day : Prorate by day

-   No matter whether the Enhanced Discount feature is enabled or not, during a period that has already been billed, if the charge is not changed, discount changes during the billed period, such as creating, updating, or removing the discount charge, will not be processed by the rating engine in the next invoice.


## Charge billing period is longer than discount duration

If your charge billing period is longer than the discount duration, refer to the following use cases.
