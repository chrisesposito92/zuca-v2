---
title: "Order Delta TCB - Object and Fields"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-delta-tcb/order-delta-tcb---object-and-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:26:17.729Z"
---

# Order Delta TCB - Object and Fields

The Order Delta Tcb object is accessible via Data Query, detailing fields such as Id, OrderNumber, StartDate, EndDate, GrossAmount, NetAmount, Currency, and more, each providing specific metrics information.

The Order Delta Tcb object can be accessed through Data Query with the following fields.

| Field Name | Description |
| --- | --- |
| Id | The internal ID of the order delta metrics. |
| OrderNumber | The Order number for the associated Order. |
| StartDate | The Start Date of the metric. This is also the start date of the period where there is an impact on the metrics caused by the order. |
| EndDate | The End Date of the metric. This is also the end date of the period where there is an impact on the metrics caused by the order. The End Date is exclusive. |
| GrossAmount | The gross amount of the metric. This is the gross value of the metric without applying any discounts. |
| NetAmount | The net amount of the metric. This is the net value of the metric after applying the discounts.Note: When calculating Order Delta Metrics, Zuora does not take account level discount into consideration. |
| Currency | ISO 3-letter currency code (uppercase) for the gross and net amount. For example, USD. |
| OrderActionId | The Id of the associated Order Action that creates the metric. This field can be null if the metric is generated for an Order Line Item. |
| ChargeNumber | The charge number of rate plan charge object what the metrics is associated with. This field can be null if the metric is generated for an Order Line Item. |
| RatePlanChargeId | The id of the rate plan charge object what the metrics is associated with. This field can be null if the metric is generated for an Order Line Item. |
| ProductRatePlanChargeId | The id of the product plan charge object of the rate plan charge object. This field can be null if the related Order Line Item is not created from a product rate plan charge |
| OrderLineItemId | The id of the Order Line Item associated with the metric. This field can be null if the metric is generated for a RatePlanCharge. |
| CreatedDate | The date time when the metric is created. |
| UpdatedDate | The date time when the metric is last updated. |
| deleted | Whether the metric is deleted. |
