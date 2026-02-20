---
title: "Order line items cancelation"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/order-line-items-cancelation"
product: "zuora-billing"
scraped_at: "2026-02-20T17:32:32.627Z"
---

# Order line items cancelation

This topic explains about canceling order line items when they become invalid during processing, including conditions and methods for cancellation.

If there is some issue when the order line item is being processed and the order line item becomes invalid, you must cancel the order line item on the order. To cancel an existing order line item, its state must be `Executing` . In the same state, you can also partially cancel the order line item by specifying the quantity of the order line item to a smaller value. If the order line item is already updated to `SentToBilling` , you cannot cancel it. For more information about the state transition flow of an order line item, see Order Line Item states, Order states, and state transitions .

There are two ways to cancel an order line item:

-   In the Zuora application, update the order line item state to Canceled

-   Use the "Update an order line item" operation


Note:

Canceling an order line item takes effect immediately and cannot be undone. After the order line item is canceled, it will not be invoiced.
