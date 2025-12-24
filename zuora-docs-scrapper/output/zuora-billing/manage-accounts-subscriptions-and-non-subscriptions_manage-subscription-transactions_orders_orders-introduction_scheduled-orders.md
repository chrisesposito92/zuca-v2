---
title: "Scheduled orders"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/scheduled-orders"
product: "zuora-billing"
scraped_at: "2025-12-24T05:21:20.141Z"
---

# Scheduled orders

This topic explains how to schedule orders for future execution, manage order actions, and understand the impact of scheduled orders on subscriptions and invoicing.

For a subscription, you can schedule one or more orders in a scheduler to be executed on future dates. The scheduler is formed by setting the statuses of the orders to scheduled and setting the scheduled execution dates of the orders as future dates during order creation.

You can schedule orders in Orders or Orders Harmonization tenants through the Orders UI or API.

Each order can include one or more order actions. You can schedule all order actions (except for the Change Plan order action only available in API) through scheduled orders before the scheduled orders are executed. Scheduled orders have the same limit as non-scheduled orders created through the synchronous call regarding the number of order actions. For more information information, see Create an order .
