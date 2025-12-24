---
title: "Pending subscriptions or orders"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-tutorials/pending-subscriptions-or-orders"
product: "zuora-billing"
scraped_at: "2025-12-24T05:22:16.436Z"
---

# Pending subscriptions or orders

This topic explains how to activate pending subscriptions or orders when certain conditions are unmet, and understand the limitations of the Order to Revenue feature.

If a subscription in an order has the service activation date, customer acceptance date , or both unfilled, or if the charges of the subscription have the Specific Trigger Date unfilled but with the Triggering Condition set as Upon a Specific Date, the subscription becomes a pending subscription and the order containing the subscription becomes a pending order. A pending subscription or order may be created by different order actions and in different conditions. For more information, see Pending Order and Subscription .

You can directly activate a pending subscription only on the reinvented subscription page (that is, the new UI experience is enabled), otherwise, you need to activate the subscription by activating the order containing the subscription. For enabling the new UI experience, see Enable the new UI experience .

Note that the Order to Revenue feature or the Billing - Revenue Integration feature does not support the charges with no dates that come from the subscriptions in Pending Activation status.
