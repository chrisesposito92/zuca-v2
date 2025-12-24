---
title: "Order Status"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders/order-status"
product: "zuora-billing"
scraped_at: "2025-12-24T05:21:08.306Z"
---

# Order Status

This topic provides details on various order statuses, including Draft, Pending, Scheduled, Executing, Failed, Completed, Cancelled, and Reverted.

Orders can be in any of the following order statuses.

| Order status | Description |
| --- | --- |
| Draft | Indicates that an order is saved as a draft order. See Draft orders and Save an order as a draft order . |
| Pending | Indicates that an order includes a subscription with unfilled critical dates. See Pending orders and subscriptions , Activate a pending subscription or order , and Activate a draft order |
| Scheduled | Indicates that an order is scheduled. See Scheduled orders and Manage scheduled orders . |
| Executing | Indicates that a scheduled order is executed on the specified scheduled date. See Scheduled orders and Manage scheduled orders . |
| Failed | Indicates that an order has failed to be scheduled. See Scheduled orders and Manage scheduled orders . |
| Completed | Indicates that an order is activated. The precondition is that the order does not include a subscription with unfilled critical dates.For scheduled orders, on the scheduled execution day, if the scheduled order is completed successfully, the order status will become completed automatically. |
| Cancelled | Indicates that a draft or scheduled order is cancelled. See Scheduled orders , Manage scheduled orders , Draft orders , and Cancel a draft order . |
| Reverted | Indicates that an order including a single version subscription is reverted. See Revert orders . |
