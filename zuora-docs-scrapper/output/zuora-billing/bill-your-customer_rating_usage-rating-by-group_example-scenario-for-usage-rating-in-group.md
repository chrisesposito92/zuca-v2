---
title: "Example scenario for usage rating in group"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/rating/usage-rating-by-group/example-scenario-for-usage-rating-in-group"
product: "zuora-billing"
scraped_at: "2025-12-24T08:27:45.964Z"
---

# Example scenario for usage rating in group

This scenario demonstrates how usage charges are calculated using volume pricing with different rating group options.

This example shows you how usage charges are calculated on volume pricing, when different rating group options are selected.

Suppose you provide a volume-based Home Phone Service. The rate plan for your service is as follows:

-   Charge Model: Volume Pricing
-   UOM: Minutes
-   Billing Period: Month
-   Billing Day: Subscription Start Day
-   The Round and determine a price for usage records individually when rating usage charges? setting is set to No.
-   Price Table: This price table is applied for each rating group rather than for the whole billing period.

| Tier | From | To | List Price | Price Format |
| --- | --- | --- | --- | --- |
| 1 | 0 | 50 | $11 | Per Unit |
| 2 | 51 | 100 | $10 | Per Unit |
| 3 | 101 | - | $9 | Per Unit |

A customer subscribes to your service for a year starting January 1, 2018. Later, you import the following usage data for your customer in two upload files:

Usage data in the `uploading1.xls` file:

| Start Date | Quantity | UOM | File Name | Group ID |
| --- | --- | --- | --- | --- |
| 01/01/2018 | 20 | Minutes | uploading1.xls | Group A |
| 01/16/2018 | 90 | Minutes | uploading1.xls | Group A |
| 02/01/2018 | 80 | Minutes | uploading1.xls | Group B |
| 02/16/2018 | 15 | Minutes | uploading1.xls | Group A |

Usage data in the `uploading2.xls` file:

| Start Date | Quantity | UOM | File Name | Group ID |
| --- | --- | --- | --- | --- |
| 01/01/2018 | 50 | Minutes | uploading2.xls | Group B |
| 02/16/2018 | 100 | Minutes | uploading2.xls | Group A |

The charge amount will vary according to the rating group option you choose.
