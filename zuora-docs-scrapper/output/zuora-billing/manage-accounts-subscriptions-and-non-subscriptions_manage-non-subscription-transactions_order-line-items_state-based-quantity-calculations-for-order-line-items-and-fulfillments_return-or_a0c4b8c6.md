---
title: "Return order line item with fulfillments (Part 2)"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/state-based-quantity-calculations-for-order-line-items-and-fulfillments/return-order-line-item-with-fulfillments-part-2"
product: "zuora-billing"
scraped_at: "2025-12-24T05:37:21.007Z"
---

# Return order line item with fulfillments (Part 2)

This topic explains how Zuora calculates the quantities for COPILOT\_DONE

If there is a fulfillment (Fulfillment 2) with the quantity of 10 that is directly changed from Executing to the SentToBilling or Complete state, Zuora adds the quantity of the fulfillment with the previously booked one. Therefore, Zuora calculates the value of the `quantityFulfilled` field of the return order line item as 20 and the value of the `quantityPendingFulfillment` field as 20.

| Sales order line item | State and quantity | Associated return order line item | State and quantity | Fulfillment 1 | State and quantity | Fulfillment 2 | State and quantity |
| --- | --- | --- | --- | --- | --- | --- | --- |
| state | SentToBilling or Complete | state | Booked | state | Booked | state | SentToBilling or Complete |
| quantity | 100 | quantity | 40 |  |  |  |  |
| quantityPendingFulfillment | 0 | quantityPendingFulfillment | 20 |  |  |  |  |
| quantityFulfilled | 100 | quantityFulfilled | 20 | quantity | 10 | quantity | 10 |
| quantityAvailableForReturn | 60 |  |  |  |  |  |  |

When all fulfillments of the return order line item are changed to SentToBilling, Complete, or Canceled state and the value of the `quantityPendingFulfillment` field of the return order line item becomes 0, the return order line item automatically changes from Booked to Complete. However, in this example, the return order line item will not change to Complete because the value of the `quantityPendingFulfillment` field is still 20.
