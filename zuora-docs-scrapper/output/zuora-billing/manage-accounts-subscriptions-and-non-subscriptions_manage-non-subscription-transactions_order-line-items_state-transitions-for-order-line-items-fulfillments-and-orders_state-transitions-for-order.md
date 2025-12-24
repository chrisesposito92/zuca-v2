---
title: "State transitions for order"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/state-transitions-for-order-line-items-fulfillments-and-orders/state-transitions-for-order"
product: "zuora-billing"
scraped_at: "2025-12-24T05:36:50.815Z"
---

# State transitions for order

This topic explains the state transitions for orders, detailing how order and line item states affect the overall order status.

The following diagram illustrates the state transitions of an order.

![Order State Machine and Orchestration - Order State Machine](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/792e216e-1d3c-4138-afc3-0b9ab26b22f6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc5MmUyMTZlLTFkM2MtNDEzOC1hZmMzLTBiOWFiMjZiMjJmNiIsImV4cCI6MTc2NjY0MTAwOSwianRpIjoiMGFkZDg4OTg5ZTE3NGJlZGEyZjE1YjMxYTJhYTI4ODgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.JDpqHZ9Nq3yXQJGn_u5Fg_toYsEOWWpPOErppYRNBFM)

When an order is submitted, the order state becomes Executing, which will:

-   Execute all order actions that are not pending

-   Put all order line items to the Executing state (unless another State is specified for the order line item in the `itemState` field in the Orders UI or API)


An order is Complete only when:

-   All order actions are executed (activated)

-   And all order line items are complete


An order is Canceled when:

-   No subscription (or order action) is in it

-   And if all order items are canceled.


In summary, the state of an order is determined by two sets of factors:

-   State of each of the order line items within the order

-   Status of the order itself. See Order Status .


Note that the field you can see in the Orders UI is the Status field, not the `state` field.

The following sections describe the order state in different scenarios.

## When only order line items are present in the order

When only order line items are present in the order, the order state is as below:

-   When any order line item in the order is in the Executing state, the order is in the Executing state.

-   When any order line item in the order is in the SentToBilling state, the order is in the Executing state.

-   When all order line items in the order are in the Complete state, the order is in the Complete state.

-   When all order line items in the order are in the Canceled state, the order is in the Canceled state.

-   When some order line items in the order are in the Complete state and the other order line items are in the Canceled state, the order is in the Complete state.


## When only subscriptions are present in the order

When only subscriptions are present in the order, the order state is determined by the status of the order.

-   When the status of the order is Draft, the order is in the Executing state.

-   When the status of the order is Pending, the order is in the Executing state.

-   When the status of the order is Completed, the order is in the Complete state.


## When both order line items and subscriptions are present in the order

When both order line item and subscription are present in the order, the order state can be either Executing or Complete.

-   When the order status is Pending, the order state is Executing.

-   When any of the order line items in the order is in the Executing or SentToBilling state, the order is the Executing state.

-   When all of the order line items in the order are in the Complete state and the order status is Completed, the order is in the Complete state.

-   When all of the order line items in the order are in the Canceled state and the order status is Completed, the order is in the Complete state.

-   When some of the order line items in the order are in the Complete state, the other of the order line items in the order are in the Canceled state, and the order status is Completed, the order is in the Complete state.
