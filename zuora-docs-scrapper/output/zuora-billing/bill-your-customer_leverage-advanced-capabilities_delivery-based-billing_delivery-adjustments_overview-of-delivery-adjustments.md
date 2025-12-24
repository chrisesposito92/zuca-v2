---
title: "Overview of Delivery Adjustments"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/delivery-based-billing/delivery-adjustments/overview-of-delivery-adjustments"
product: "zuora-billing"
scraped_at: "2025-12-24T08:39:31.619Z"
---

# Overview of Delivery Adjustments

This topic describes the example and process of handling end customer delivery complaints through the Delivery Adjustments for the Delivery Pricing charge model.

You can create delivery adjustments corresponding to end customer-initiated refunds, for example, due to unqualified deliveries. After you specify the start and end dates of an adjustment period in a subscription, Zuora creates one delivery adjustment record for each charge each day. Your start and end dates could be any dates in the past and today, the default number of days eligible for adjustment is 14 days. Zuora generates a Credit Memo automatically once a delivery adjustment is created.

Note:

The Delivery Adjustments feature is only available to the Delivery Pricing recurring charge with Billing Timing as billing in advance, and the Delivery Pricing charge model is available only in tenants with Orders or Orders Harmonization enabled. For more prerequisites, see Create delivery adjustments .

For information about the Delivery Adjustment data source, see Delivery Adjustment data source .

## Process

You can now create delivery adjustments for the end customer-initiated refund.

If needed, you can also cancel a specific delivery adjustment .

The following flowchart shows you how Zuora proceeds if you create delivery adjustments and cancel a specific delivery adjustment.

![Adjustments creation and cancelation](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0c965c2d-229d-4e68-afd1-58280f5955e8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjBjOTY1YzJkLTIyOWQtNGU2OC1hZmQxLTU4MjgwZjU5NTVlOCIsImV4cCI6MTc2NjY1MTk3MCwianRpIjoiMmZjN2NjODgyOGM3NDI4NWJhOTNmOGVmZDQzMTRmZWEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.hXmsO3NsdxeHqA_46DwQjrtvFWyHZWept_iihyuNpNU)

## Notes for Invoice Settlement operations

If you want to perform the Invoice Settlement operations on credit memos created by delivery adjustment, note the following:

-   You may perform the following operations:
    -   Write off credit memos through the Write off a credit memo operation, but the writing-off operation will not impact any delivery adjustments
    -   Apply credit memos to invoices to reduce the outstanding balance
-   You cannot perform the following operations:
    -   Unpost credit memos
    -   Edit credit memos
    -   Cancel credit memos
    -   Delete credit memos
    -   Reverse credit memos
