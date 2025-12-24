---
title: "Order Delta TCB - Data Query Use Case"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-delta-tcb/order-delta-tcb---data-query-use-case"
product: "zuora-billing"
scraped_at: "2025-12-24T05:26:20.174Z"
---

# Order Delta TCB - Data Query Use Case

This document provides an example of performing queries on the Order Line Item object using Data Query, including creating an order with specific actions and retrieving Tcb metrics.

You can perform queries on the Order Line Item object through Data Query . See the following example.

Example

You create an Order O-000001 containing the following order actions:

-   Add a rate plan with a recurring charge of $50 per month. The term starts on 1/1/2021 and ends on 12/31/2021. A 10% discount applies to the charge.

-   Remove the discount on 4/1/2021.


In this example, Zuora creates two Tcb metrics for the same charge.

You can get a summary for the Order Delta Tcb metrics for the Order above using the following data query:

Select oa.Type, tcb.StartDate, tcb.EndDate, tcb.GrossAmount, tcb.NetAmount From OrderDeltaTcb tcb inner join OrderAction oa on tcb.orderActionId = oa.Id Where tcb.orderNumber = ‘O-000001’

The result is as in the following table:

| Type | StartDate | EndDate | GrossAmount | NetAmount |
| --- | --- | --- | --- | --- |
| UpdateProduct | 2021-01-01 | 2021-12-31 | 600 | 540 |
| UpdateProduct | 2021-04-01 | 2021-12-31 | -600 | -540 |
