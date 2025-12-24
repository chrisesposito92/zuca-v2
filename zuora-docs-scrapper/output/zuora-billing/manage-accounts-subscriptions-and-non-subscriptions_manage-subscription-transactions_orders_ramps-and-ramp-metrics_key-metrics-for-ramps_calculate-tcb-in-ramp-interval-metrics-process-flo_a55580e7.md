---
title: "TCB in Ramp Interval Metrics I"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/key-metrics-for-ramps/calculate-tcb-in-ramp-interval-metrics-process-flow/tcb-in-ramp-interval-metrics-i"
product: "zuora-billing"
scraped_at: "2025-12-24T05:28:48.618Z"
---

# TCB in Ramp Interval Metrics I

This example illustrates the calculation of TCB metrics for a subscription with a 3-year term and multiple ramp intervals, detailing the charges, billing rules, and amendments affecting the subscription's versions.

See the following example.

Suppose your customer has a 3-year termed subscription from 2021/01/01 to 2023/12/31. A Ramp with three Ramp Intervals is configured for this subscription with each year being a Ramp Interval. The subscription is created by Order 1 with one regular charge and one discount charge as below:

-   Charge 1: a recurring regular charge of the Flat Fee charge model, price: $100/month, billing period: Semi-Annual, billing cycle day: 10th of the month, and billing alignment: Align to charge.

-   Charge 2: recurring discount percentage charge, 20%, billing period: Semi-Annual, and billing cycle day: 10th of the month. This discount charge is applicable to Charge 1.


The billing rules settings in the tenant are:

-   Prorate recurring charges for partial period? = Yes

-   Bill recurring charges for partial month? (with monthly based billing periods)? = Yes

-   When prorating a month, assume 30 days in a month or use actual days? = Use actual number of days

-   When prorating periods greater than a month, prorate by month first, or by day? = Prorate by month first


Then the subscription is amended by Order 2 with the price of Charge 1 being updated to $200/month from 2022/07/01 to the term end date. This subscription now has two versions. Version 1 is created by Order 1 and Version 2 is created by Order 2.

Example 1:

The following example shows the TCB metrics calculation for Subscription Version 1 created by Order 1.

Step 1 - Calculate the rating results per the same rating rule as that of the Zuora's rating and billing engine (RBE). The rating results for Charge 1 and Charge 2 are shown in the following diagram:

![Ramp metrics- TCB in Order 1](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/20cdc2bd-0c84-4c3a-8002-4d877a4cfc17?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjIwY2RjMmJkLTBjODQtNGMzYS04MDAyLTRkODc3YTRjZmMxNyIsImV4cCI6MTc2NjY0MDUyNiwianRpIjoiMzU4NDBiMmNhZWY0NDg5Nzg1NTFiMzZiMWQxMTU3ZWIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.otK54gpJ7yWniBGIOdOIsNy52iCWynln65NqA4Yl01Y)

Step 2 - Map the rating results to the Ramp Intervals, as shown in the table below:

| Interval | Rating Result Number | Period Start Date | Period End Date | Regular Charge Amount | Discount Amount |
| --- | --- | --- | --- | --- | --- |
| Interval 1 | 1 | 2021/1/1 | 2021/1/9 | 9/31*100=29.03 | -(29.03*20%)=-5.81 |
| Interval 1 | 2 | 2021/1/10 | 2021/7/9 | 600 | -(600*20%)=-120 |
| Rating result 3 spans over Interval 1 and Interval 2. | 3 | 2021/7/10 | 2022/1/9 | 600 | -120 |
| Interval 2 | 4 | 2022/1/10 | 2022/7/9 | 600 | -120 |
| Rating result 5 spans over Interval 2 and Interval 3. | 5 | 2022/7/10 | 2023/1/9 | 600 | -120 |
| Interval 3 | 6 | 2023/1/10 | 2023/7/9 | 600 | -120 |
| Interval 3 | 7 | 2023/7/10 | 2023/12/31 | (5+22/31)/6*600=570.97 | -(570.97*20%)=-114.19 |

Step 3 - Segment the Rating result 3 and 5 that span over multiple Ramp Intervals based on the overlap period of the rating result and the Ramp Interval. The amount is distributed based on the time length ratio of the overlap period compared to the rating result period length. See the table below:

| Interval | Rating Result Number | Period Start Date | Period End Date | Ratio of Overlap Period | Regular Charge Amount | Discount Amount |
| --- | --- | --- | --- | --- | --- | --- |
| Interval 1 | 1 | 2021/1/1 | 2021/1/9 | 1 | 29.03 | -5.81 |
| Interval 1 | 2 | 2021/1/10 | 2021/7/9 | 1 | 600 | -120 |
| Interval 1 | 3 | 2021/7/10 | 2021/12/31 | (5+22/31)/6 | 600*(5+22/31)/6=570.97 | (-120)*(5+22/31)/6=-114.19 |
| Interval 2 | 2022/1/1 | 2022/1/9 | (9/31)/6 | 600*(9/31)/6=29.03 | (-120)*(9/31)/6=-5.81 |  |
| Interval 2 | 4 | 2022/1/10 | 2022/7/9 | 1 | 600 | -120 |
| Interval 2 | 5 | 2022/7/10 | 2022/12/31 | (5+22/31)/6 | 600*(5+22/31)/6=570.97 | (-120)*(5+22/31)/6=-114.19 |
| Interval 3 | 2023/1/1 | 2023/1/9 | (9/31)/6 | 600*(9/31)/6=29.03 | (-120)*(9/31)/6=-5.81 |  |
| Interval 3 | 6 | 2023/1/10 | 2023/7/9 | 1 | 600 | -120 |
| Interval 3 | 7 | 2023/7/10 | 2023/12/31 | 1 | 570.97 | -114.19 |

Step 4 - Combine the distributed rating result amounts per charge segment for each Ramp Interval, as in the table below. In this example, both Charge 1 and Charge 2 have only one charge segment. See Segmented rate plan charges for more information about charge segments.

| Interval | Rating Result Number | Period Start Date | Period End Date | Regular Charge Amount | Discount Amount | Combined Regular Charge Amount (Gross TCB) | Combined Discount Amount (Discount TCB) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Interval 1 | 1 | 2021/1/1 | 2021/1/9 | 29.03 | -5.81 | 29.03+600+570.97=1200 | (-5.81)+(-120)+(-114.91)=-240 |
| 2 | 2021/1/10 | 2021/7/9 | 600 | -120 |  |  |  |
| 3 | 2021/7/10 | 2021/12/31 | 570.97 | -114.19 |  |  |  |
| Interval 2 | 3 | 2022/1/1 | 2022/1/9 | 29.03 | -5.81 | 1200 | -240 |
| 4 | 2022/1/10 | 2022/7/9 | 600 | -120 |  |  |  |
| 5 | 2022/7/10 | 2022/12/31 | 570.97 | -114.19 |  |  |  |
| Interval 3 | 5 | 2023/1/1 | 2023/1/9 | 29.03 | -5.81 | 1200 | -240 |
| 6 | 2023/1/10 | 2023/7/9 | 600 | -120 |  |  |  |
| 7 | 2023/7/10 | 2023/12/31 | 570.97 | -114.19 |  |  |  |

The final result for the TCB in Ramp Interval Metrics in Order 1 for Subscription Version 1 is shown in the table below. The Net TCB value is calculated by the formula: Net TCB = Gross TCB - Discount TCB.

| Interval | Charge | Charge Segment | Start Date | End Date | Gross TCB | Discount TCB | Net TCB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Interval 1 | Charge 1 | Charge Segment 1 | 2021/1/1 | 2021/12/31 | 1200 | -240 | 960 |
| Interval 2 | Charge 1 | Charge Segment 1 | 2022/1/1 | 2022/12/31 | 1200 | -240 | 960 |
| Interval 3 | Charge 1 | Charge Segment 1 | 2023/1/1 | 2023/12/31 | 1200 | -240 | 960 |
