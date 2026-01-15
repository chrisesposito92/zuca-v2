---
title: "Delete order and amend OTR"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/delete-order-and-amend-otr_1"
product: "zuora-revenue"
scraped_at: "2026-01-15T22:03:34.877Z"
---

# Delete order and amend OTR

This concept explains how Zuora Revenue processes deleted orders and amendments from Zuora Billing within the Order to Revenue (OTR) workflow, including the handling of previous subscription versions and revenue adjustments.

This article describes how Zuora Revenue processes deleted orders and amendments received from Zuora Billing as part of the Order to Revenue (OTR) workflow. When an order or amendment is deleted in Billing, Zuora Revenue receives the previous subscription version, evaluates the revenue segments associated with the sales order (SO) line IDs, and applies cumulative catch-up adjustments as needed.

## How delete and amend OTR works

When you delete an order or amendment in Billing, Zuora Revenue performs the following actions:

-   Sends the previous subscription version and associated SO line IDs to Revenue.

-   Marks a segment as Void if it does not exist in the previous version.

-   Applies retrospective cumulative catch-up adjustments to update revenue treatment.


## Prerequisites

-   Revenue Support must enable the Consume Deleted Transaction profile.

-   Historical data migrations ignore deleted versions and will not apply delete-order handling.


## Scenarios

Let us look at some of the scenarios that will help you to understand delete and amend OTR and its impact in Zuora Revenue.

[Scenario 1 - Delete a cancel order](/zuora-revenue/advanced-revenue-operations/delete-order-and-amend-otr/delete-a-cancel-order)

[Scenario 2 - Segment reuse](/zuora-revenue/advanced-revenue-operations/delete-order-and-amend-otr/segment-reuse)

[Scenario 3 - Delete a renewal order](/zuora-revenue/advanced-revenue-operations/delete-order-and-amend-otr/delete-a-renewal-order)

[Scenario 4 - Delete an add-product order](/zuora-revenue/advanced-revenue-operations/delete-order-and-amend-otr/delete-an-add-product-order)
