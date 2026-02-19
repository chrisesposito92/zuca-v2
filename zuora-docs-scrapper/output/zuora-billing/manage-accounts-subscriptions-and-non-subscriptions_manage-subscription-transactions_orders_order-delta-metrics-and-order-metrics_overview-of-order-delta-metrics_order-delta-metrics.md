---
title: "Order Delta Metrics"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/overview-of-order-delta-metrics/order-delta-metrics"
product: "zuora-billing"
scraped_at: "2026-02-19T03:12:00.187Z"
---

# Order Delta Metrics

This article provides the updated methodologies for calculating metrics in Orders, replacing the deprecated Order Metrics. They are essential for managing changes in subscription quantities and are accessible through API calls and Data Query.

## Availability

The Order Delta Metrics feature is only available if you have the Orders feature enabled. If you are an existing Subscribe and Amend customer and want Order Delta Metrics only, you can turn on Orders Harmonization . You can still keep the existing Subscribe and Amend API integrations and UI to create and manage subscriptions.

As of Zuora Billing Release 306, Order Metrics is no longer available. Zuora has updated the methodologies for calculating metrics in Orders . The new methodologies are reflected in the following Order Delta Metrics objects.

-   Order Delta Mrr

-   Order Delta Tcv

-   Order Delta Tcb

-   Order Delta Quantity


It is recommended that all customers use the Order Delta Metrics . If you are an existing Order Metrics customer and want to migrate to Order Delta Metrics , submit a request at Zuora Global Support . Whereas new customers, and existing customers not currently on Order Metrics , will no longer have access to Order Metrics , existing customers currently using Order Metrics will continue to be supported.

## Order Delta Mrr

The value of an Order Delta Mrr metric is the change in MRR of a RatePlanCharge as the result of an Order. Zuora creates Order Delta Mrr metrics for recurring charges only. For example, suppose that you have subscribed a customer to 10 units of your product for 12 months, with a list price of $5.00 per unit per month. This scenario is represented by a recurring charge with a quantity of 10 units, a duration of 12 months, and MRR equal to $50.00 = 10 units × $5.00.

After 3 months, you use an Update Product order action to increase the quantity to 13 units, so that the new MRR of the recurring charge is $65.00 = 13 units × $5.00. Zuora then creates an Order MRR metric for the recurring charge. The value of the Order MRR metric is $15.00 = $65.00 − $50.00 and the duration of the Order MRR metric is 9 = 12 − 3 months.

![Order Delta Metrics3](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7f75fa3d-7485-4f4c-98cd-c8424146e374?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdmNzVmYTNkLTc0ODUtNGY0Yy05OGNkLWM4NDI0MTQ2ZTM3NCIsImV4cCI6MTc3MTU1NzExNSwianRpIjoiNWNiYWYyODBkMWQyNDdhZjkxM2NiM2JjZGFjOWE1NWIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.Qdkea6Z87bQhJ0gx1yDsSHKzJexecDPZ6w8zex6j8Hs)

See Example 2 in Order Delta Mrr for a more detailed explanation of this scenario.

## Order Delta Tcv

The total contract value (TCV) of a charge is defined as the total amount that has been booked over the duration of the rate plan charge. For Order Line Items, the total contracted value is the contracted value at the time when the order is executed. The value of an Order Delta Tcv metric is the change in TCV of a RatePlanCharge or an Order Line Item. See TCV of Rate Plan Charges for more information.

For example, a customer subscribes to 10 units of your product for 12 months, with a list price of $5.00 per unit per month. This scenario is represented by a recurring charge with a quantity of 10 units, a duration of 12 months, and TCV equal to $600.00 = 12 months × 10 units × $5.00.

After 9 months, you use an Update Product order action to increase the quantity to 13 units, so that the new TCV of the recurring charge is $735.00 = (3 months × 10 units × $5.00) + (9 months × 13 units × $5.00). Zuora then creates an Order Tcv metric for the recurring charge. The value of the Order Delta Tcv metric is $135.00 = $735.00 − $600.00 and the duration of the Order Delta Tcv metric is 9 = 12 − 3 months.

Assuming with the Product update example, there is also a one-off service charge of $20 that occurred on the transaction day, represented by the Order Line Item as in the following diagram. An Order Delta Tcv metric is generated for that $20 with start and end dates being the same as the transaction day.

![Order Delta Metrics4](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b449d308-e6f7-417a-96a6-553407b66c05?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI0NDlkMzA4LWU2ZjctNDE3YS05NmE2LTU1MzQwN2I2NmMwNSIsImV4cCI6MTc3MTU1NzExNSwianRpIjoiN2YxMjZjNDMxMzk0NDAwMmIwYzE2NmQwZjU5YjI5MTYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.pj8zHAWZdsDPcGiQK4JRV5U3z7mRTPLq1XPqAPLh9H8)

When calculating TCV for Rate Plan Charges, Zuora prorates partial months based on the number of days in each partial month. Zuora does not prorate partial months according to the billing configuration of your Zuora tenant. This is because TCV is meant to be a metric representing the total booked value, and is not impacted by how it will actually be billed.

See more examples in Order Delta Tcv for a more detailed explanation of this scenario, including an example of how proration affects Order Delta Tcv metrics.

See Object and Fields for more details about the fields on the Order Delta Tcv object.

## Order Delta Tcb

The total contracted billing (TCB) of a charge is defined as the estimated total amount that will be billed over the duration of the rate plan charge based on billing settings at ordering time. For Order Line Items, the TCB is the estimated billing amount at the time when the order is executed.

Note:

Discrepancies might exist between TCB and the actual invoice amount. TCB is rated at the time of booking, while the invoice amount is rated at the time of billing. As the rating time is different, several factors can lead to a discrepancy in the rated value, including but not limited to the following:

-   Difference in the rounding result caused by the difference in discount applying sequence or bill run scope

-   Change of billing rules

-   Change of customer account bill cycle day (BCD)


For more scenarios when discrepancies might exist between TCB and the invoice amount, see the scenarios that cause the booking and billing variances for CCV.

For example, a customer subscribes to 10 units of your product for 12 months, with a list price of $5.00 per unit per month. Bill cycle is per quarter and the bill cycle day is the 1st of the month. This scenario is represented by a recurring charge with a quantity of 10 units, a duration of 4 billing periods, and TCB equal to $600.00 = 10 units × $5.00 × 3 months × 4 billing periods.

After 3 months, you use an Update Product order action to increase the quantity to 13 units, so that the new TCB of the recurring charge is $735.00 = (3 months × 10 units × $5.00) \* 1 billing period + (3 months × 13 units × $5.00) \* 3 billing periods. Zuora then creates an Order Delta Tcb metric for the recurring charge. The value of the Order Delta Tcb metric is $135.00 = $735.00 − $600.00 and the duration of the Order Delta Tcb metric is 9 = 12 − 3 months.

Assuming with the product update example, there is also a one-off service charge of $20 that occurred on the transaction day, represented by the Order Line Item. An Order Delta Tcb metric is generated for that $20 with start and end dates being the same as the transaction day.

![Order Delta Metrics5](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6631871b-53c2-4566-a54c-7258837937de?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY2MzE4NzFiLTUzYzItNDU2Ni1hNTRjLTcyNTg4Mzc5MzdkZSIsImV4cCI6MTc3MTU1NzExNSwianRpIjoiYWY5MjJiNTkyMWRhNDNjOGE0N2UyMzcyZTU2MjM1ZjciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.CMJFn5rwafXRpZqwE402IQfD-93RwjJ88RqTXQkOXgE)

When calculating TCB, Zuora prorates partial months according to the billing configuration of your Zuora tenant. See Proration and Calculating Total Amount with Partial Period Proration for more information.

See more examples in Order Delta Tcb for a more detailed explanation of this scenario, including an example of how proration affects Tcb metrics.

See Object and Fields for more details about the fields on the Order Delta Tcb object.

## Order Delta Quantity

The value of an Order Delta Quantity metric is the change in quantity of a RatePlanCharge as the result of an Order. Zuora creates Order Delta Quantity metrics for one-time and recurring charges. You can use the `orderdeltaquantity` table in Data Query to retrieve the order delta quantity metrics.

For example, suppose that your customer has subscribed to 20 units of product for 12 months, with a list price of $5.00 per unit per month. The subscription starts from 2024-01-01 and is renewed on 2025-01-01. Your customer decides to increase the quantity to 30 units of product on 2025-07-01 and you perform the corresponding Update Product order action. Zuora then creates the Order Delta Quantity metrics for each charge segment for each order action shown in the following diagram.

![order delta quantity-increase quantity](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8d894cf0-8d4b-41e9-9ad4-d3ae2ca8404a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhkODk0Y2YwLThkNGItNDFlOS05YWQ0LWQzYWUyY2E4NDA0YSIsImV4cCI6MTc3MTU1NzExNSwianRpIjoiYzczN2FjZTliYWI5NDZjNDk2YjU1NTY0YjcyYzAzZTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.tXmYUM1K66aZuZY3CI2N_9GgQpW5smFxNMiAlHGNYg8)

In the above example, for the Update Product order action, the order delta quantity for charge segment PRC-2 between 2025–07-01 and 2026-01-01 is -20 due to the shrinking of the rate plan, and the order delta quantity for charge segment PRC-3 between 2025–07-01 and 2026-01-01 is 30 due to the updated quantity.

See Order Delta Quantity for more examples of different order actions.

## Accessing Order Delta Metrics

You can access Order Delta Metrics through the following ways:

-   Make the API call through the Preview an order operation.

-   Use Data Query. See Data Query use cases in the following article:

    -   Order Delta Mrr use cases

    -   Order Delta Tcv use cases

    -   Order Delta Tcb use cases


## Objects and Fields

See the following articles for the objects and fields for Order Delta Metrics:

-   Order Delta Mrr

-   Order Delta Tcv

-   Order Delta Tcb

-   Order Delta Quantity


## Historical Data

As of Zuora Billing Release 306, Order Delta Metrics will be generated asynchronously for every Order. If you want to generate Order Delta Metrics for your Orders generated in the past, submit a request at Zuora Global Support .

## Considerations

Order Delta Metrics have the following limitations:

-   Order Delta TCB does not support metrics generation for evergreen subscriptions.

-   Order Delta TCV does not support metrics generation for charges that belong to evergreen subscriptions without an end date.

-   When you create an Order, Zuora only generates Order Delta Metrics if the order is active.

-   Discounts are supported at the subscription level, rate plan level, and account level. However, discount metrics are calculated for subscription and rate plan level discounts only, not calculated for account level discounts. You can perform the following amendments for subscriptions with account level discounts; however, no metrics will be generated:

    -   Create Subscription

    -   Add Product

    -   Update

    -   Remove

    -   T&Cs

    -   Cancellation

    -   Renew

    -   Suspend / Resume
