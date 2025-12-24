---
title: "Calculation of order metrics"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-metrics/calculation-of-order-metrics"
product: "zuora-billing"
scraped_at: "2025-12-24T05:26:58.784Z"
---

# Calculation of order metrics

This example illustrates the calculation of various order metrics, such as Order Quantity, Order Mrr, and Order Tcb, using specific date ranges and proration rules in Zuora.

On 8/18/2018, you use another Update Product order action to further increase the quantity to 20. Zuora then creates the following order metrics:

| Order Metric | Start Date | End Date | Value | Calculation |
| --- | --- | --- | --- | --- |
| Order Quantity | 8/18/2018 | 12/31/2018 | 7 | Change in number of units |
| Order Mrr | 8/18/2018 | 12/31/2018 | 35.00 | Value of Order Quantity × list price (5.00) |
| Order Tcb | 8/18/2018 | 12/31/2018 | 156.33 | Aug: (14 / 30 days) × value of Order Mrr = 16.33Sep-Dec: 4 months × value of Order Mrr = 140.00 |
| Order Tcv | 8/18/2018 | 12/31/2018 | 155.81 | Aug: (14 / 31 days) × value of Order Mrr = 15.81Sep-Dec: 4 months × value of Order Mrr = 140.00 |
| Order Elp | 8/18/2018 | 12/31/2018 | 250.13 | Aug: (14 / 30 days) × value of Order Quantity × original list price (8.00) = 26.13Sep-Dec: 4 months × value of Order Quantity × original list price (8.00) = 224 |

This example assumes that your Zuora tenant is configured to use 30 days in a month when prorating partial months. The billing configuration of your Zuora tenant affects the calculation of TCB, but does not affect the calculation of TCV. See Proration and Calculating Total Amount with Partial Period Proration for more information.

When calculating TCV, Zuora always prorates partial months based on the actual number of days in each partial month.

On 1/1/2019, you use an Update Product order action to decrease the quantity from 20 to 16 on the charge end date. If a charge is updated on the charge end date or added to the subscription end date, a 0-length charge is created; therefore, no order metrics (such as the Order Quantity metric) will be generated,

After the preceding order action, you use a Renew order action to renew the subscription for a year. Zuora then creates the following order metrics:
