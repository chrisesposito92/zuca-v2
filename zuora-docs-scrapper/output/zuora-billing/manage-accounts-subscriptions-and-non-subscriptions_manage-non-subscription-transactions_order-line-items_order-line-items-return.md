---
title: "Order line items return"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/order-line-items-return"
product: "zuora-billing"
scraped_at: "2025-12-24T05:37:57.034Z"
---

# Order line items return

You can return sales order line items that are fully or partially delivered, and optionally create fulfillments for these returns using the Zuora UI or specific operations.

You can create one or more return order line items when you want to return one existing sales order line item.

Optionally, you can create fulfillments (no more than 100) on the return order line item to return your items.

You can return a sales order line item that has been fully delivered or partially delivered. The sales order line item that has been fully delivered can be identified by its `SentToBilling` , or `Complete` state. The sales order line item that has been partially delivered can be a sales order line item in the `Booked` state with its fulfillments in either `SentToBilling` or `Complete` state. In these cases, the `quantityAvailableForReturn` field in the REST API or `Available to Return` field in the UI of the sales order line item has a positive value, which indicates there are items that can be returned. For information about the states, see State transitions for an order line item, fulfillment, and order .

There are two methods to create a return order line item with fulfillments:

-   Use the Zuora UI.

-   Use the Create an order and Create fulfillments operations.
