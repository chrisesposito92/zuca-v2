---
title: "Return order line item without fulfillments"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/state-based-quantity-calculations-for-order-line-items-and-fulfillments/return-order-line-item-without-fulfillments"
product: "zuora-billing"
scraped_at: "2025-12-24T05:37:14.997Z"
---

# Return order line item without fulfillments

This topic explains how Zuora calculates the values of the quantityPendingFulfillment and quantityFulfilled fields for return order line items without fulfillments, including state transitions and their impact on associated sales order line items.

Zuora calculates the values of the `quantityPendingFulfillment` and `quantityFulfilled` fields of the return order line item without fulfillments in a similar way to the sales order line item without fulfillments.

Example: return order line item without fulfillments is changed from Executing state to Booked, SentToBilling, or Complete state.

The initial quantity of the sales order line item is 100 and the state of the sales order line item is SentToBilling or Complete. The quantity of the associated return order line item is 40 and the initial state of the return order line item is Executing.

If the state is changed from the Executing to Booked state or a later state, Zuora recognizes that the return order line is fully fulfilled without items pending to be fulfilled. Therefore, Zuora calculates the value of the `quantityFulfilled` field of the return order line item as 40 and the value of the `quantityPendingFulfillment` field of the return order line item as 0.

The quantity of the returned order line item in the Booked state or a later state affects the value of the `quantityAvailableForReturn` field of the associated sales order line item. If the initial quantity of the sales order line item is 100, then Zuora calculates the value of the `quantityAvailableForReturn` field of the sales order line item as 60 by subtracting the value of the `quantity` field of the return order line item from the value of the `quantity` field of the sales order line item.

| sales order line item | State and quantity | Associated return order line item without fulfillments | State and quantity |
| --- | --- | --- | --- |
| state | SentToBilling or Complete | state | The state is one of the following:BookedSentToBilling or Complete state (skipped Booked state) |
| quantity | 100 | quantity | 40 |
| quantityPendingFulfillment | 0 | quantityPendingFulfillment | 0 |
| quantityFulfilled | 100 | quantityFulfilled | 40 |
| quantityAvailableForReturn | 60 |  |  |
