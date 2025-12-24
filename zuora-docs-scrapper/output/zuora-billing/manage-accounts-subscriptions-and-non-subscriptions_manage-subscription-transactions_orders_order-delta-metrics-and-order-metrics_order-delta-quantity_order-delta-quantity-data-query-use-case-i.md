---
title: "Order Delta Quantity - Data Query Use Case I"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-delta-quantity/order-delta-quantity---data-query-use-case-i"
product: "zuora-billing"
scraped_at: "2025-12-24T05:26:43.443Z"
---

# Order Delta Quantity - Data Query Use Case I

This topic details a use case for querying Order Delta Quantity metrics, illustrating how to track quantity changes in recurring charges using data queries.

Example

You create an Order O-000001 containing the following order action:

Update a rate plan with a recurring charge quantity from 20 to 30 from 2025-07-01. The charge starts on 1/1/2025 and ends on 1/1/2026

In this example, Zuora creates two order delta metrics for the same charge.

You can get a summary for the Order Delta Quantity metrics for the order action above to see the quantity changes for one charge. See the following data query for details:

SELECT qty.ChargeNumber, oa.Type, qty.RatePlanChargeId, qty.StartDate, qty.EndDate, qty.Quantity FROM OrderDeltaQuantity qty INNER JOIN OrderAction oa ON oa.id = qty.OrderActionId WHERE qty.orderNumber ='O-000001'

The result is as in the following table:

| ChargeNumber | Type | RatePlanChargeId | StartDate | EndDate | Quantity |
| --- | --- | --- | --- | --- | --- |
| C-00002406 | UpdateProduct | 0461789589394a289684a5cfbccb00dd | 2025-07-01 | 2026-01-01 | -20.000000000 |
| C-00002406 | UpdateProduct | 0461789589394a289684a5cfbccb00de | 2025-07-01 | 2026-01-01 | 30.000000000 |

You can also get a summary for the Order Delta Quantity metrics at the charge number level using the following data query:

SELECT ChargeNumber, SUM(Quantity) FROM OrderDeltaQuantity WHERE orderNumber = 'O-000001' AND StartDate <= date '2025-07-01' AND EndDate > date '2025-07-01' GROUP BY ChargeNumber
