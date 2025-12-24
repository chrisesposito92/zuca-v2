---
title: "Orders Revert"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/single-version-subscription/orders-revert"
product: "zuora-billing"
scraped_at: "2025-12-24T05:29:34.007Z"
---

# Orders Revert

This topic provides an outline on reverting orders for single version subscriptions, including prerequisites and limitations.

Revert is an order action to offsite a previous order. You can revert orders for single version subscriptions after turning on the Single Version Subscription feature.

If you revert an order through the Revert an order API operation, specify an order date.

For example, if you revert an order (O-00000637) and this order includes an Update Product order action of updating the product price from $10 to $20, after reversion, a revert order (O-00000638) is automatically created including another Update Product order action of updating the price back to $10. See the reverted order O-00000637 and revert order O-00000638 in View details of single version subscriptions .

Note:

Only subscriptions created through orders can be single version subscriptions. The Single Version Subscription feature is in the Early Adopter phase. We are actively soliciting feedback from a small group of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at Zuora Global Support .

## Prerequisites

Before reverting an order, you need to note the following:

-   You can only revert an order containing one single version subscription; An order cannot be reverted in any of the following situations:

    -   An order contains multiple single version subscriptions.

    -   An order contains order line items, no matter whether the order also contains subscriptions.

-   You can revert an order only when the order and subscription are in the following statuses, and a Revert Order (See example in Change History ) cannot be reverted.

    -   Order status is Completed

    -   Subscription is in one of the following statuses:

        -   Active

        -   Suspended

        -   Cancelled

-   You cannot cancel or delete a reverted order.

-   You cannot revert an order that includes the Create Subscription order action.

-   You cannot revert an order with a prepayment or drawdown charge.
