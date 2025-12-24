---
title: "Sales order line item with fulfillments (Part 1)"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/state-based-quantity-calculations-for-order-line-items-and-fulfillments/sales-order-line-item-with-fulfillments-part-1"
product: "zuora-billing"
scraped_at: "2025-12-24T05:37:05.997Z"
---

# Sales order line item with fulfillments (Part 1)

Zuora calculates fulfillment quantities for sales order line items based on their state changes, determining values for pending, fulfilled, and available for return quantities.

Zuora calculates the value of the `quantityPendingFulfillment` , `quantityFulfilled`, and `quantityAvailableForReturn` fields based on the sum of the fulfillments that are changed to the Booked state or a later state. In the latter case, Zuora will presume that the fulfillments have passed the Booked state.

Example: sales order line item with two fulfillments in different states

The initial quantity of the sales order line item is 100 and the state of the sales order line item is Booked.

If there is a fulfillment (Fulfillment 1) with the quantity of 10 and state of Booked, Zuora recognizes the quantity of the booked fulfillment is the fulfilled quantity for the sales order line item. Therefore, Zuora calculates the value of the `quantityFulfilled` field of the sales order line item as 10 and the value of the `quantityPendingFulfillment` field as 90.

| Sales order line item with fulfillments | State and quantity | Fulfillment 1 | State and quantity |
| --- | --- | --- | --- |
| state | Booked | state | Booked |
| quantity | 100 |  |  |
| quantityPendingFulfillment | 90 |  |  |
| quantityFulfilled | 10 | quantity | 10 |
| quantityAvailableForReturn | 0 |  |  |
