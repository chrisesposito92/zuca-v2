---
title: "Order Delta MRR - Object and Fields"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-delta-mrr/order-delta-mrr---object-and-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:25:57.941Z"
---

# Order Delta MRR - Object and Fields

The Order Delta Mrr object is accessible via Data Query and includes fields such as Id, OrderNumber, StartDate, EndDate, GrossAmount, NetAmount, Currency, and others, detailing metrics related to orders.

The Order Delta Mrr object can be accessed through Data Query with the following fields.

| Field Name | Description |
| --- | --- |
| Id | The internal ID of the order delta metrics. |
| OrderNumber | The Order number for the associated Order. |
| StartDate | The Start Date of the metric. This is also the start date of the period where there is an impact on the metrics caused by the order. |
| EndDate | The End Date of the metric. This is also the end date of the period where there is an impact on the metrics caused by the order. The End Date is exclusive. |
| GrossAmount | The gross amount of the metric. This is the gross value of the metric without applying any discounts. |
| NetAmount | The net amount of the metric. This is the net value of the metric after applying the discounts.Note: When calculating Order Delta Metrics, Zuora does not take account level discount into consideration. |
| Currency | ISO 3-letter currency code (uppercase) for the gross and net amount. For example, USD. |
| OrderActionId | The Id of the associated Order Action that creates the metric |
| ChargeNumber | The charge number of rate plan charge object that the metrics is associated with. |
| RatePlanChargeId | The id of the rate plan charge object that the metrics is associated with. |
| ProductRatePlanChargeId | The id of the product plan charge object of the rate plan charge object. |
| CreatedDate | The date time when the metric is created. |
| UpdatedDate | The date time when the metric is last updated. |
| deleted | Indicates whether the metric is deleted. |
