---
title: "Sales order line item without fulfillments (Part 3)"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/state-based-quantity-calculations-for-order-line-items-and-fulfillments/sales-order-line-item-without-fulfillments-part-3"
product: "zuora-billing"
scraped_at: "2025-12-24T05:37:03.000Z"
---

# Sales order line item without fulfillments (Part 3)

This topic explains the process of changing a sales order line item from the Executing state directly to the SentToBilling or Complete state, detailing how Zuora calculates fulfillment and return quantities.

Example 2: Sales order line item without fulfillments is changed from Executing state directly to SentToBilling or Complete state

If the state is directly changed from the Executing to the SentToBilling or Complete state, Zuora will presume that the order line item has passed the Booked state. In this case, Zuora recognizes that the sales order line item is fully fulfilled. Also, Zuora recognizes that the sales order line item is completed (including invoicing-related setups) and ready can be returned. Zuora calculates the value of the `quantityFulfilled` field as 100 and the value of the `quantityPendingFulfillment` field as 0. Simultaneously, Zuora calculates the value of the `quantityAvailableForReturn` field as 100.

| Sales order line item without fulfillments | From Executing state | To SentToBilling or Complete state |
| --- | --- | --- |
| quantity | 100 | 100 |
| quantityPendingFulfillment | 0 | 0 |
| quantityFulfilled | 0 | 100 |
| quantityAvailableForReturn | 0 | 100 |
