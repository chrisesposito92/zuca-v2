---
title: "Sales order line item with fulfillments (Part 3)"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/state-based-quantity-calculations-for-order-line-items-and-fulfillments/sales-order-line-item-with-fulfillments-part-3"
product: "zuora-billing"
scraped_at: "2025-12-24T05:37:11.923Z"
---

# Sales order line item with fulfillments (Part 3)

This topic explains about calculating the quantities for sales order line items with fulfillments, including the transition of states and the impact on fulfillment and return quantities.

If there is another fulfillment (Fulfillment 2) with the quantity of 90 directly changed from Executing to the SentToBilling or Complete state, Zuora adds the quantity of the fulfillment with the previous one. Therefore, Zuora calculates the value of the `quantityFulfilled` field of the sales order line item as 100 and the value of the `quantityPendingFulfillment` field of the sales order line item as 0. Zuora also calculates the value of the `quantityAvailableForReturn` field of the sales order line item as 100.

When all fulfillments of the sales order line item are changed to SentToBilling, Complete, or Canceled state and the value of the `quantityPendingFulfillment` field of the sales order line item becomes 0, the sales order line item automatically changes from Booked to Complete.

| Sales order line item with fulfillments | State and quantity | Fulfillment 1 | State and quantity | Fulfillment 2 | State and quantity |
| --- | --- | --- | --- | --- | --- |
| state | Complete | state | SentToBilling or Complete | state | SentToBilling or Complete state (skipped Booked state) |
| quantity | 100 |  |  |  |  |
| quantityPendingFulfillment | 0 |  |  |  |  |
| quantityFulfilled | 100 | quantity | 10 | quantity | 90 |
| quantityAvailableForReturn | 100 |  |  |  |  |
