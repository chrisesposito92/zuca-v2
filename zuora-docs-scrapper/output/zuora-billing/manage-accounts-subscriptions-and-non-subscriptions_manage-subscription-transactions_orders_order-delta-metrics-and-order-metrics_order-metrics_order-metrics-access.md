---
title: "Order Metrics Access"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-metrics/order-metrics-access"
product: "zuora-billing"
scraped_at: "2025-12-24T05:26:50.821Z"
---

# Order Metrics Access

Zuora provides data sources and APIs to report on and retrieve order metrics, including order quantity, MRR, TCB, TCV, and ELP, with considerations for subscription terms and impact time periods.

Zuora provides data sources that you can use to report on order metrics:

Note:

If the lengths of the charges in a subscription become 0, for example, due to a 0 subscription term, the Order Metrics will not be calculated.

| Order Metric | Key Subscription Metric |
| --- | --- |
| Order Quantity | Quantity of a charge. |
| Order Mrr | Monthly recurring revenue (MRR) of a charge. |
| Order Tcb | Total contracted billing (TCB) of a charge. This is the forecast value at the time of booking for the total amount that will be billed over the duration of the charge.Note:Discrepancies might exist between TCB and the actual invoice amount. TCB is rated at the time of booking, while the invoice amount is rated at the time of billing. As the rating time is different, several factors can lead to a discrepancy in the rated value, including but not limited to the following:Difference in the rounding result caused by the difference in discount applying sequence or bill run scopeChange of billing rulesChange of customer account bill cycle day (BCD)For more scenarios when discrepancies might exist between TCB and the invoice amount, see the scenarios that cause the booking and billing variances for CCV. |
| Order Tcv | Total contract value (TCV) of a charge. This is the total amount that has been booked over the duration of the charge. |
| Order Elp | Extended list price (ELP) of a charge. This is the quantity of the charge multiplied by the original product catalog list price of the charge, over the duration of the charge. |

If an Order Action does not generate order metrics, it will not be included in the result when querying the order metrics data source objects above.

Data query is also supported to query these order metrics. See all the available tables in data query.

You can also retrieve order metrics using the REST API. See Retrieve an order for more information.

For termed subscriptions, Zuora calculates metrics based on the subscription terms and the impact time periods:

-   Subscription terms: If a subscription is renewed several times, the subscription has multiple terms. Zuora splits metrics based on the terms.

-   Impact time periods: The time periods that are affected by order actions.


For example, suppose that a customer subscribes to your product for three months starting on January 1, then immediately renews the subscription for another three months. The subscription has two terms.

Later, the customer wants to change the quantity of the charge, starting on February 1. The impact period for this quantity change is from February 1 to June 30. Because the subscription already has two terms, the metrics for the quantity change are split across the two subscription terms: February 1 to March 31, then April 1 to June 30.

Note:

Zuora calculates quantity and MRR for evergreen subscriptions. You can retrieve a certain period of TCB for evergreen subscriptions using the Get order metrics for evergreen subscription REST API operation.
