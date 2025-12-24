---
title: "Usage rating by group overview"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/rating/usage-rating-by-group/usage-rating-by-group-overview"
product: "zuora-billing"
scraped_at: "2025-12-24T08:27:43.449Z"
---

# Usage rating by group overview

Usage rating by group allows you to categorize usage records within a billing period by various rating group options, providing flexibility in applying pricing rules.

Usage rating by group allows you to group usage records by a rating group option within a billing period. Zuora calculates the total quantity of each rating group and applies the pricing rule based on each rating group. The amount billed in a billing period is the sum of all the rated amounts of each rating group in the billing period.

Usage rating by group gives you more flexibility in rating usages. You can specify a rating group option if you use the per unit, volume pricing, or tiered pricing charge model. For other charge models, usages are rated based on the billing period. The price you defined in the charge model is applied for each rating group rather than the whole billing period.

Zuora provides the following rating group options when creating a product rate plan charge:

-   By Billing Period: Usage records in the same billing period are in a rating group.
-   By Usage Start Date: Usage records on the same usage start date are in a rating group.
-   By Usage Record: Each usage record is a rating group.
-   By Usage Upload: Usage records in the same usage file ( `.xls` or `.csv` ) are in a rating group. If you import a mass usage in a single upload, which contains multiple usage files in `.xls` or `.csv` format, usage records are grouped for each usage file. For each rating group, Zuora calculates the charge amount based on each billing period.
-   Custom Group: Usage records in the same custom group are in a rating group. You can define the group ID for each usage record when you create usage records or import usage files through the REST API. Usage records without any group ID are in one group. This option is only for the volume pricing or tiered pricing charge models.

Note: The Custom Group option is only available if you have the Active Rating feature enabled.

## Configuration

You can specify a rating group for usage rating when you create a rate plan charge from the Zuora UI, SOAP API, or REST API.

-   Zuora UI: Create Product Rate Plan Charges.
-   SOAP API ProductRatePlanCharge and RatePlanCharge objects: Set the RatingGroup field to ByGroupID.
-   REST API: Set the ratingGroup field to ByGroupID in the [Create subscription](https://developer.zuora.com/v1-api-reference/api/operation/POST_Subscription/) operation.
