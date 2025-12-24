---
title: "Sales order line item without fulfillments (Part 2)"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/state-based-quantity-calculations-for-order-line-items-and-fulfillments/sales-order-line-item-without-fulfillments-part-2"
product: "zuora-billing"
scraped_at: "2025-12-24T05:36:59.871Z"
---

# Sales order line item without fulfillments (Part 2)

This topic explains the transition of a sales order line item without fulfillments from the Executing state to the SentToIBilling or Complete state, detailing the fulfillment and return calculations.

If the state is updated from Booked to SentToBilling or Complete, Zuora recognizes that the sales order line is completed (including invoicing-related setups) and all items are ready and can be returned. Therefore, Zuora calculates the value of the `quantityAvailableForReturn` field as 100.

| Sales order line item without fulfillments | From Booked state | To SentToBilling or Complete state |
| --- | --- | --- |
| quantity | 100 | 100 |
| quantityPendingFulfillment | 0 | 0 |
| quantityFulfilled | 100 | 100 |
| quantityAvailableForReturn | 0 | 100 |
