---
title: "Delta TCB in Ramp Interval Delta Metrics - Example"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/key-metrics-for-ramps/calculate-delta-tcb-in-ramp-interval-delta-metrics-process-flow/delta-tcb-in-ramp-interval-delta-metrics---example"
product: "zuora-billing"
scraped_at: "2025-12-24T05:28:56.068Z"
---

# Delta TCB in Ramp Interval Delta Metrics - Example

This example demonstrates the calculation of Delta TCB metrics in Order 2 by comparing Subscription Version 2 with Subscription Version 1, highlighting changes in TCB values across different intervals.

Example:

In this example, we continue to use the same sample subscription above as in TCB in Ramp Interval Metrics and show the Delta TCB metrics calculation in Order 2. Order 2 creates Subscription Version 2 based on Subscription Version 1.

Step 1 - Combine the TCB in the Ramp Interval Metrics level for each charge per Ramp Interval.

The TCB in the Ramp Interval Metrics level for Subscription Version 2 is as in the table below. The two items of TCB for Interval 2 need to be combined.

| Interval | Charge | Charge Segment | Start Date | End Date | Gross TCB | Discount TCB | Net TCB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Interval 1 | Charge 1 | Charge Segment 1 | 2021/1/1 | 2021/12/31 | 1200 | -240 | 960 |
| Interval 2 | Charge 1 | Charge Segment 1 | 2022/1/1 | 2022/6/30 | 599.03 | -119.81 | 479.22 |
| Interval 2 | Charge 1 | Charge Segment 2 | 2022/7/1 | 2022/12/31 | 1201.94 | -240.39 | 961.55 |
| Interval 3 | Charge 1 | Charge Segment 1 | 2023/1/1 | 2023/12/31 | 2400 | -480 | 1920 |

After combination, the result for Subscription Version 2 is:

| Interval | Charge | Start Date | End Date | Gross TCB | Discount TCB | Net TCB |
| --- | --- | --- | --- | --- | --- | --- |
| Interval 1 | Charge 1 | 2021/1/1 | 2021/12/31 | 1200 | -240 | 960 |
| Interval 2 | Charge 1 | 2022/1/1 | 2022/12/31 | 599.03+1201.94 =1800.97 | (-119.81)+(-240.39)=-360.2 | 1440.77 |
| Interval 3 | Charge 1 | 2023/1/1 | 2023/12/31 | 2400 | -480 | 1920 |

The TCB in the Ramp Interval Metrics level for Subscription Version 1 is as in the table below. Charge 1 has only one charge segment, so no combination is needed.

| Interval | Charge | Start Date | End Date | Gross TCB | Discount TCB | Net TCB |
| --- | --- | --- | --- | --- | --- | --- |
| Interval 1 | Charge 1 | 2021/1/1 | 2021/12/31 | 1200 | -240 | 960 |
| Interval 2 | Charge 1 | 2022/1/1 | 2022/12/31 | 1200 | -240 | 960 |
| Interval 3 | Charge 1 | 2023/1/1 | 2023/12/31 | 1200 | -240 | 960 |

Step 2 - Compare the combined TCB value for each charge per Ramp Interval between a subscription's current version and the previous version after an Order is created and return the delta TCB value by the formula: Delta = V2 - V1.

Comparing the TCB values in the Subscription Version 1 and 2 as in the table below:

| Interval | Charge | Start Date | End Date | Subscription Version | Gross TCB | Discount TCB | Net TCB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Interval 1 | Charge 1 | 2021/1/1 | 2021/12/31 | Version 2 | 1200 | -240 | 960 |
| Version 1 | 1200 | -240 | 960 |  |  |  |  |
| Interval 2 | Charge 1 | 2022/1/1 | 2022/12/31 | Version 2 | 1800.97 | -360.2 | 1140.77 |
| Version 1 | 1200 | -240 | 960 |  |  |  |  |
| Interval 3 | Charge 1 | 2023/1/1 | 2023/12/31 | Version 2 | 2400 | -480 | 1920 |
| Version 1 | 1200 | -240 | 960 |  |  |  |  |

As you can see from the table above:

-   Charge 1 has no change in TCB in Interval 1. Therefore, no Delta TCB metrics will be present for Interval 1 in Order 2.

-   Charge 1 has TCB changes in Interval 2 and Interval 3. Therefore, Delta TCB metrics will be present in Order 2 for Interval 2 and Interval 3.


Therefore, the Delta TCB in Order 2 is as in the table below:

| Interval | Charge | Start Date | End Date | Delta Gross TCB | Delta Discount TCB | Delta Net TCB |
| --- | --- | --- | --- | --- | --- | --- |
| Interval 2 | Charge 1 | 2022/1/1 | 2022/12/31 | 600.97 | -120.2 | 180.77 |
| Interval 3 | Charge 1 | 2023/1/1 | 2023/12/31 | 1200 | -240 | 960 |
