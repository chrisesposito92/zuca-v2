---
title: "Sales order line item with fulfillments (Part 2)"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/state-based-quantity-calculations-for-order-line-items-and-fulfillments/sales-order-line-item-with-fulfillments-part-2"
product: "zuora-billing"
scraped_at: "2025-12-24T05:37:09.008Z"
---

# Sales order line item with fulfillments (Part 2)

This topic details the process of fulfilling sales order line items, including the calculation of quantities available for return and the transition of states from Booked to Complete.

If the fulfillment of the sales order line item is completed and is ready can be returned. Zuora calculates the value of the `quantityAvailableForReturn` field of the sales order line item as 10.

| Sales order line item with fulfillments | State and quantity | Fulfillment 1 | State and quantity |
| --- | --- | --- | --- |
| state | Booked | state | SentToBilling or Complete |
| quantity | 100 |  |  |
| quantityPendingFulfillment | 90 |  |  |
| quantityFulfilled | 10 |  |  |
| quantityAvailableForReturn | 10 | quantity | 10 |
