---
title: "Delta TCV in Ramp Interval Delta Metrics - Example"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/key-metrics-for-ramps/calculate-delta-tcv-in-ramp-interval-delta-metrics-process-flow/delta-tcv-in-ramp-interval-delta-metrics---example"
product: "zuora-billing"
scraped_at: "2025-12-24T05:28:43.340Z"
---

# Delta TCV in Ramp Interval Delta Metrics - Example

This example demonstrates the calculation of Delta TCV metrics in Order 2, comparing Subscription Version 2 with Version 1, and highlights changes in TCV across different intervals.

Example:

In this example, we continue to use the same sample subscription above as in TCV in Ramp Interval Metrics and show the Delta TCV metrics calculation in Order 2. Order 2 creates Subscription Version 2 based on Subscription Version 1.

Step 1 - Combine the TCV in the Ramp Interval Metrics level for each charge per Ramp Interval.

The TCV in the Ramp Interval Metrics level for Subscription Version 2 is as in the table below. For Charge 1, the two items of TCV for Interval 2 need to be combined.

| Interval | Charge Segment | Start Date | End Date | Gross TCV | Discount TCV | Net TCV |
| --- | --- | --- | --- | --- | --- | --- |
| Interval 1 | Charge 1 > Segment 1 | 2021/1/1 | 2021/10/31 | 50 | 0 | 50 |
| Charge 1 > Segment 2 | 2021/11/1 | 2021/12/31 | 20 | 0 | 20 |  |
| Charge 2 | 2021/1/1 | 2021/1/1 | 15 | 0 | 15 |  |
| Interval 2 | Charge 1 > Segment 2 | 2022/1/1 | 2022/12/31 | 120 | -6 | 114 |
| Interval 3 | Charge 1 > Segment 3 | 2023/1/1 | 2023/12/31 | 240 | -12 | 228 |

After combination, the TCV values for Subscription Version 2 are as below:

| Interval | Charge | Start Date | End Date | Gross TCV | Discount TCV | Net TCV |
| --- | --- | --- | --- | --- | --- | --- |
| Interval 1 | Charge 1 | 2021/1/1 | 2021/12/31 | 70 | 0 | 70 |
| Charge 2 | 2021/1/1 | 2021/1/1 | 15 | 0 | 15 |  |
| Interval 2 | Charge 1 | 2022/1/1 | 2022/12/31 | 120 | -6 | 114 |
| Interval 3 | Charge 1 | 2023/1/1 | 2023/12/31 | 240 | -12 | 228 |

The TCV in the Ramp Interval Metrics level for Subscription Version 1 is as in the table below. For Charge 1, the two items of TCV for Interval 2 need to be combined.

| Interval | Charge Segment | Start Date | End Date | Gross TCV | Discount TCV | Net TCV |
| --- | --- | --- | --- | --- | --- | --- |
| Interval 1 | Charge 1 > Segment 1 | 2021/1/1 | 2021/10/31 | 50 | 0 | 50 |
| Charge 1 > Segment 2 | 2021/11/1 | 2021/12/31 | 20 | 0 | 20 |  |
| Charge 2 | 2021/1/1 | 2021/1/1 | 15 | 0 | 15 |  |
| Interval 2 | Charge 1 > Segment 2 | 2022/1/1 | 2022/12/31 | 120 | -6 | 114 |
| Interval 3 | Charge 1 > Segment 2 | 2023/1/1 | 2023/12/31 | 120 | -6 | 114 |

After combination, the TCV values for Subscription Version 1 are as below:

| Interval | Charge | Start Date | End Date | Gross TCV | Discount TCV | Net TCV |
| --- | --- | --- | --- | --- | --- | --- |
| Interval 1 | Charge 1 | 2021/1/1 | 2021/12/31 | 70 | 0 | 70 |
| Charge 2 | 2021/1/1 | 2021/1/1 | 15 | 0 | 15 |  |
| Interval 2 | Charge 1 | 2022/1/1 | 2022/12/31 | 120 | -6 | 114 |
| Interval 3 | Charge 1 | 2023/1/1 | 2023/12/31 | 120 | -6 | 114 |

Step 2 - Compare the combined TCV value for each charge per Ramp Interval between a subscription's current version and the previous version after an Order is created and return the delta TCV value by the formula: Delta = V2 - V1.

Comparing the TCV values in the Subscription Version 1 and 2 as in the table below:

| Interval | Charge | Start Date | End Date | Subscription Version | Gross TCV | Discount TCV | Net TCV |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Interval 1 | Charge 1 | 2021/1/1 | 2021/12/31 | Version 2 | 70 | 0 | 70 |
| Version 1 | 70 | 0 | 70 |  |  |  |  |
| Interval 2 | Charge 1 | 2022/1/1 | 2022/12/31 | Version 2 | 120 | -6 | 114 |
| Version 1 | 120 | -6 | 114 |  |  |  |  |
| Interval 3 | Charge 1 | 2023/1/1 | 2023/12/31 | Version 2 | 240 | -12 | 228 |
| Version 1 | 120 | -6 | 114 |  |  |  |  |
| Interval 1 | Charge 2 | 2021/1/1 | 2021/1/1 | Version 2 | 15 | 0 | 15 |
| Version 1 | 15 | 0 | 15 |  |  |  |  |

As you can see from the table above:

-   Charge 1 has no change in TCV in Interval 1 or Interval 2. Therefore, no Delta TCV metrics will be present for Interval 1 or Interval 2 in Order 2.

-   Charge 1 has TCB changes in Interval 3. Therefore, Delta TCV metrics will be present in Order 2 for Interval 3.

-   Charge 2 has no change in TCV. Therefore, no Delta TCV metrics will be present for Charge 2 in Order 2.


Therefore, the Delta TCB in Order 2 is as in the table below:

| Interval | Charge | Start Date | End Date | Delta Gross TCV | Delta Discount TCV | Delta Net TCV |
| --- | --- | --- | --- | --- | --- | --- |
| Interval 3 | Charge 1 | 2023/1/1 | 2023/12/31 | 120 | -6 | 114 |
