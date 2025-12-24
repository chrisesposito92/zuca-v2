---
title: "Return order line item with fulfillments (Part 1)"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/state-based-quantity-calculations-for-order-line-items-and-fulfillments/return-order-line-item-with-fulfillments-part-1"
product: "zuora-billing"
scraped_at: "2025-12-24T05:37:17.998Z"
---

# Return order line item with fulfillments (Part 1)

Zuora calculates the values of the `quantityPendingFulfillment` and `quantityFulfilled` fields for return order line items with fulfillments, similar to sales order line items, considering the state changes to Booked or later.

Zuora calculates the values of the `quantityPendingFulfillment` and `quantityFulfilled` fields of the return order line item with fulfillments in a similar way to the sales order line item with fulfillments.

Zuora calculates the values of the `quantityPendingFulfillment` and `quantityFulfilled` fields of the return order line item based on the sum of the fulfillments of the return order line item that are changed to the Booked state or a later state. In the latter case, Zuora will presume that the fulfillments have passed the Booked state. However, Zuora calculates the value of the `quantityAvailableForReturn` field of the sales order line item still based on the return order line item that is changed to the Booked state or a later state.

Example: return order line item with two fulfillments in different states

The initial quantity of the sales order line item is 100 and the state of the sales order line item is SentToBilling or Complete. The quantity of the associated return order line item is 40 and the state of the return order line item is Booked.

If there is a fulfillment (Fulfillment 1) with the quantity of 10 and state of Booked, Zuora recognizes the quantity of the booked fulfillment is the fulfilled quantity for the return order line item. Therefore, Zuora calculates the value of the `quantityFulfilled` field of the return order line item as 10 and the value of the `quantityPendingFulfillment` field as 30. The quantity of the return order line item in the Booked state or a later state affects the value of the `quantityAvailableForReturn` field of the associated sales order line item. Zuora calculates the value of the `quantityAvailableForReturn` field of the sales order line item as 60 by subtracting the value of the `quantity` field of the return order line item from the value of the `quantity` field of the sales order line item.

| Sales order line item | State and quantity | Associated return order line item | State and quantity | Fulfillment 1 | State and quantity |
| --- | --- | --- | --- | --- | --- |
| state | SentToBilling or Complete | state | Booked | state | Booked |
| quantity | 100 | quantity | 40 |  |  |
| quantityPendingFulfillment | 0 | quantityPendingFulfillment | 30 |  |  |
| quantityFulfilled | 100 | quantityFulfilled | 10 | quantity | 10 |
| quantityAvailableForReturn | 60 |  |  |  |  |
