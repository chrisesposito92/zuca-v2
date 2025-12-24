---
title: "Sales order line item without fulfillments (Part 1)"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/state-based-quantity-calculations-for-order-line-items-and-fulfillments/sales-order-line-item-without-fulfillments-part-1"
product: "zuora-billing"
scraped_at: "2025-12-24T05:36:56.613Z"
---

# Sales order line item without fulfillments (Part 1)

This topic explains the calculation logic for sales order line items without fulfillments, detailing state changes from Executing to Booked, and then to SentToBilling or Complete, with corresponding updates to fulfillment fields.

The initial quantity of the sales order line item is 100. The initial state of the sales order line item is Executing. For sales order line item without fulfillments, you can learn the calculation logic from the following examples.

Example 1: Sales order line item without fulfillments is changed from Executing state to Booked state and then to SentToBilling or Complete state.

If the state is updated from the Executing to Booked state, Zuora recognizes that the sales order line item is fully fulfilled without items pending to be fulfilled. Therefore, Zuora calculates the value of the `quantityFulfilled` field as 100 and the value of the `quantityPendingFulfillment` field as 0.

| Sales order line item without fulfillments | From Executing state | To Booked state |
| --- | --- | --- |
| quantity | 100 | 100 |
| quantityPendingFulfillment | 0 | 0 |
| quantityFulfilled | 0 | 100 |
| quantityAvailableForReturn | 0 | 0 |
