---
title: "Order Delta MRR - Data Query Use Case"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-delta-mrr/order-delta-mrr---data-query-use-case"
product: "zuora-billing"
scraped_at: "2025-12-24T05:26:00.994Z"
---

# Order Delta MRR - Data Query Use Case

This topic provides an example of performing queries on the Order Line Item object using Data Query, including creating and modifying order actions and retrieving Order Delta Mrr metrics.

You can perform queries on the Order Line Item object through Data Query. See the following example.

Example

You create an Order O-000001 containing the following order actions:

-   Add a rate plan with a recurring charge of $50 per month. The term starts on 1/1/2021 and ends on 12/31/2021. A 10% discount applies to the charge.

-   Remove the discount on 4/1/2021.


In this example, Zuora creates two Mrr metrics for the same charge. You can get a summary for the Order Delta Mrr metrics for the Order above using the following query:

Select oa.Type, mrr.ChargeNumber, mrr.RatePlanChargeId, mrr.StartDate, mrr.EndDate, mrr.GrossAmount, mrr.NetAmount From OrderDeltaMrr inner join OrderAction oa on mrr.orderActionId = oa.Id Where mrr.OrderNumber = ‘O-000001’

The result is as in the following table:

| Type | ChargeNumber | RatePlanChargeId | Start Date | End Date | Gross Amount | Net Amount |
| --- | --- | --- | --- | --- | --- | --- |
| AddProduct | C-0000001 | 2c9d808873750727017375191f70003e | 2021-01-01 | 2022-01-01 | 50 | 45 |
| RemoveProduct | C-0000001 | 2c9d808873750727017375191f70003e | 2021-04-01 | 2022-01-01 | -50 | -45 |
