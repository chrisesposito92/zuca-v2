---
title: "Total Amount calculation with Partial Period Proration"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-metrics/total-amount-calculation-with-partial-period-proration"
product: "zuora-billing"
scraped_at: "2025-12-24T05:27:01.149Z"
---

# Total Amount calculation with Partial Period Proration

This topic provides an overview of order metrics, including Order Quantity, Order Mrr, Order Tcb, Order Tcv, and Order Elp, along with their respective calculations and values for the year 2019.

This example assumes that your Zuora tenant is configured to use 30 days in a month when prorating partial months. The billing configuration of your Zuora tenant affects the calculation of TCB, but does not affect the calculation of TCV. See Proration and Calculating Total Amount with Partial Period Proration for more information.

When calculating TCV, Zuora always prorates partial months based on the actual number of days in each partial month.

On 1/1/2019, you use an Update Product order action to decrease the quantity from 20 to 16 on the charge end date. If a charge is updated on the charge end date or added to the subscription end date, a 0-length charge is created; therefore, no order metrics (such as the Order Quantity metric) will be generated,

After the preceding order action, you use a Renew order action to renew the subscription for a year. Zuora then creates the following order metrics:

| Order Metric | Start Date | End Date | Value | Calculation |
| --- | --- | --- | --- | --- |
| Order Quantity | 1/1/2019 | 12/31/2019 | 16 | Change in number of units |
| Order Mrr | 1/1/2019 | 12/31/2019 | 80.00 | Value of Order Quantity × list price (5.00) |
| Order Tcb | 1/1/2019 | 12/31/2019 | 720.00 | Jan-Dec: 12 months × value of Order Mrr |
| Order Tcv | 1/11/2019 | 12/31/2019 | 720.00 | Jan-Dec: 12 months × value of Order Tcv |
| Order Elp | 1/1/2019 | 12/31/2019 | 1536.00 | Aug: 12 months × value of Order Quantity × original list price (8.00) |
