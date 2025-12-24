---
title: "Delta Quantity in Ramp Interval Delta Metrics - Example"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/key-metrics-for-ramps/delta-quantity-in-ramp-interval-delta-metrics/delta-quantity-in-ramp-interval-delta-metrics---example"
product: "zuora-billing"
scraped_at: "2025-12-24T05:29:06.356Z"
---

# Delta Quantity in Ramp Interval Delta Metrics - Example

This topic provides an example of calculating delta quantity in ramp interval delta metrics, comparing subscription versions to illustrate changes in quantity metrics.

An example for the delta quantity in ramp interval delta metrics is given below:

Example:

In this example, we continue to use the same sample subscription above as in Quantity in Ramp Interval Metrics and show the Delta MRR metrics calculation in Order 2. Order 2 creates Subscription Version 2 based on Subscription Version 1.

Comparing the Quantity amount in Subscription Version 2 with that of Version 1, you can see:

-   The Quantity metric in Ramp Interval Metrics for Interval 1 and Interval 2 has no change. Therefore, no Delta Quantity metrics will be present for Interval 1 and Interval 2.

-   The Quantity metric in Ramp Interval Metrics is changed in Interval 3.


The table below compares the Quantity amount in Interval 3 between Subscription Version 1 and Version 2:

| Subscription Version | Interval | Start Date | End Date | Quantity |
| --- | --- | --- | --- | --- |
| Version 1 | Interval 3 | 2023/1/1 | 2023/12/31 | 10 |
| Version 2 | Interval 3 | 2023/1/1 | 2023/12/31 | 20 |

Therefore, you can access the following set of Delta MRR metrics in Ramp Interval Delta Metrics in Order 2:

| Order | Interval | Charge | Start Date | End Date | Delta Quantity Amount |
| --- | --- | --- | --- | --- | --- |
| Order 2 | Interval 3 | The regular charge in this example | 2023/1/1 | 2023/12/31 | 20-10=10 |
