---
title: "Order Metrics"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-metrics"
product: "zuora-billing"
scraped_at: "2025-12-24T05:26:48.452Z"
---

# Order Metrics

Order metrics are delta values that reflect changes in key subscription metrics due to order actions. They are generated for each order action that impacts subscription metrics, such as changes in product quantity or revenue.

Order metrics are delta values representing the changes in key subscription metrics as a result of order actions. Metrics are tied to each Order Action that generates them, which are then linked to Orders. If there is no change in subscription metrics, an Order Action will not generate order metrics.

For instance, if you use an Update Product order action to change the number of units of a product that a customer has subscribed to, Zuora creates an Order Quantity metric to represent the "delta" between the updated number of units and the previous number of units. In other words, the value of the Order Quantity metric is the updated number of units minus the previous number of units.

All order metrics are considered to be delta metrics. In the case of an Add Product order action, the value of the corresponding Order Quantity metric is the updated number of units of the product minus the previous number of units of the product (zero). This means that the value of the Order Quantity metric is simply the number of units that the customer has subscribed to.

Zuora creates order metrics for each charge that is affected by an order action. A single change to a charge may lead to multiple order metrics for different time periods.

## Availability

This feature is only available if you have the Order Metrics feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature.

The following objects and fields of the Order Metrics are end of support. Zuora no longer provides product support, and bug fixes or security issues are no longer addressed.

-   The Order ELP and Order Item objects

-   The "Generated Reason" and "Order Item ID" fields in the Order MRR, Order TCB, Order TCV, and Order Quantity objects


As of Zuora Billing Release 306, Order Metrics is no longer available. Zuora has updated the methodologies for calculating metrics in Orders . The new methodologies are reflected in the following Order Delta Metrics objects.

-   Order Delta Mrr

-   Order Delta Tcv

-   Order Delta Tcb

-   Order Delta Quantity


It is recommended that all customers use the new Order Delta Metrics. If you are an existing Order Metrics customer and want to migrate to Order Delta Metrics, submit a request at Zuora Global Support . Whereas new customers, and existing customers not currently on Order Metrics, will no longer have access to Order Metrics, existing customers currently using Order Metrics will continue to be supported.

If you are an existing Subscribe and Amend customer and want Order Delta Metrics only, you can turn on Orders Harmonization . You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.

## Order Quantity

The value of an Order Quantity metric is the change in quantity of a charge. Zuora creates Order Quantity metrics for one-time charges and recurring charges.

For example, suppose that you have subscribed a customer to 10 units of your product for 12 months, with a monthly billing period. This scenario is represented by a recurring charge with a quantity of 10 units and a duration of 12 months.

After 3 months, you use an Update Product order action to increase the quantity to 13 units. Zuora then creates an Order Quantity metric for the recurring charge. The value of the Order Quantity metric is 3 = 13 − 10 and the duration of the Order Quantity metric is 9 = 12 − 3 months.

See the "Example" section for a more detailed explanation of this scenario.

## Order Mrr

The value of an Order Mrr metric is the change in monthly recurring revenue (MRR) of a charge. Zuora creates Order Mrr metrics for recurring charges only.

For example, suppose that you have subscribed a customer to 10 units of your product for 12 months, with a monthly billing period and a list price of $5.00 per unit. This scenario is represented by a recurring charge with a quantity of 10 units, a duration of 12 months, and MRR equal to $50.00 = 10 units × $5.00.

After 3 months, you use an Update Product order action to increase the quantity to 13 units, so that the new MRR of the recurring charge is $65.00 = 13 units × $5.00. Zuora then creates an Order Mrr metric for the recurring charge. The value of the Order Mrr metric is $15.00 = $65.00 − $50.00 and the duration of the Order Mrr metric is 9 = 12 − 3 months.

See the "Example" section for a more detailed explanation of this scenario.

## Order Tcb

The total contracted billing (TCB) of a charge is defined as the total amount that will be billed over the duration of the charge. The value of an Order Tcb metric is the change in TCB of a charge. Zuora creates Order Tcb metrics for one-time charges and recurring charges. When no TCB change occurs, for example, adding production that only contains usage charges, the Order Tcb metric is generated and displayed as `$NaN` in the TCB field.

Note:

Discrepancies might exist between TCB and the actual invoice amount. TCB is rated at the time of booking, while the invoice amount is rated at the time of billing. As the rating time is different, several factors can lead to a discrepancy in the rated value, including but not limited to the following:

-   Difference in the rounding result caused by the difference in discount applying sequence or bill run scope

-   Change of billing rules

-   Change of customer account bill cycle day (BCD)


For more scenarios when discrepancies might exist between TCB and the invoice amount, see the scenarios that cause the booking and billing variances for CCV.

For example, suppose that you have subscribed a customer to 10 units of your product for 12 months, with a monthly billing period and a list price of $5.00 per unit. This scenario is represented by a recurring charge with a quantity of 10 units, a duration of 12 months, and TCB equal to $600.00 = 12 months × 10 units × $5.00.

After 3 months, you use an Update Product order action to increase the quantity to 13 units, so that the new TCB of the recurring charge is $735.00 = (3 months × 10 units × $5.00) + (9 months × 13 units × $5.00). Zuora then creates an Order Tcb metric for the recurring charge. The value of the Order Tcb metric is $135.00 = $735.00 − $600.00 and the duration of the Order Tcb metric is 9 = 12 − 3 months.

Note:

When calculating TCB, Zuora prorates partial months according to the billing configuration of your Zuora tenant. See Proration and Calculating Total Amount with Partial Period Proration for more information.

See the "Example" section for a more detailed explanation of this scenario, including an example of how proration affects Tcb metrics.

## Order Tcv

The total contract value (TCV) of a charge is defined as the total amount that has been booked over the duration of the charge. The value of an Order Tcv metric is the change in TCV of a charge. Zuora creates Order Tcv metrics for one-time charges and recurring charges.

For example, suppose that you have subscribed a customer to 10 units of your product for 12 months, with a monthly billing period and a list price of $5.00 per unit. This scenario is represented by a recurring charge with a quantity of 10 units, a duration of 12 months, and TCV equal to $600.00 = 12 months × 10 units × $5.00.

After 3 months, you use an Update Product order action to increase the quantity to 13 units, so that the new TCV of the recurring charge is $735.00 = (3 months × 10 units × $5.00) + (9 months × 13 units × $5.00). Zuora then creates an Order Tcv metric for the recurring charge. The value of the Order Tcv metric is $135.00 = $735.00 − $600.00 and the duration of the Order Tcv metric is 9 = 12 − 3 months.

Note:

When calculating TCV, Zuora prorates partial months based on the number of days in each partial month. Zuora does not prorate partial months according to the billing configuration of your Zuora tenant. This means that the TCV and TCB of a given charge may not be the same. Zuora recommends that you use TCB in preference to TCV.

See the "Example" section for a more detailed explanation of this scenario, including an example of proration affects Order Tcv metrics.

## Order Elp

Note:

The Order ELP feature is only available to existing Orders customers who already have access to the feature.

The extended list price (ELP) of a charge is defined as the quantity of the charge multiplied by the original product catalog list price of the charge, over the duration of the charge. The value of an Order Elp metric is the change in ELP of a charge. Zuora creates Order Elp metrics for one-time charges and recurring charges.

For example, suppose that you have subscribed a customer to 10 units of your product for 12 months, with a monthly billing period, and that the original list price of the product in your product catalog was $8.00 per unit. This scenario is represented by a recurring charge with a quantity of 10 units, a duration of 12 months, and ELP equal to $960.00 = 12 months × 10 units × $8.00.

After 3 months, you use an Update Product order action to increase the quantity to 13 units, so that the new ELP of the recurring charge is $1,176.00 = (3 months × 10 units × $8.00) + (9 months × 13 units × $8.00). Zuora then creates an Order Elp metric for the recurring charge. The value of the Order Elp metric is $216.00 = $1,176.00 − $960.00 and the duration of the Order Elp metric is 9 = 12 − 3 months.

Note:

When calculating ELP, Zuora prorates partial months according to the billing configuration of your Zuora tenant. See Proration and Calculating Total Amount with Partial Period Proration for more information.

See the "Example" section for a more detailed explanation of this scenario, including an example of how proration affects Elp metrics.
