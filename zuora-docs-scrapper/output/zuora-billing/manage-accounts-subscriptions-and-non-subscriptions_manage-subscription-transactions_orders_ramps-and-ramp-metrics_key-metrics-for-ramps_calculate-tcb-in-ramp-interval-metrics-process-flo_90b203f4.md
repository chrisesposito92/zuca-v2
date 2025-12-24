---
title: "TCB in Ramp Interval Metrics II"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/key-metrics-for-ramps/calculate-tcb-in-ramp-interval-metrics-process-flow/tcb-in-ramp-interval-metrics-ii"
product: "zuora-billing"
scraped_at: "2025-12-24T05:28:51.019Z"
---

# TCB in Ramp Interval Metrics II

This example demonstrates the calculation of TCB metrics for Subscription Version 2, highlighting the impact of price amendments and the mapping of rating results to Ramp Intervals.

Example 2

The following example shows the TCB metrics calculation for Subscription Version 2 created by Order 2 in the example subscription . The subscription is amended by Order 2 with the price of Charge 1 being updated to $200/month from 2022/07/01 to the term end date.

Step 1 - Calculate the rating results per the same rating rule as that of the Zuora's rating and billing engine (RBE). The rating results for Charge 1 and Charge 2 are shown in the following diagram:

![Ramp metrics- TCB in Order 2](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2238d727-941f-4b63-aef3-906728f6a3ea?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjIyMzhkNzI3LTk0MWYtNGI2My1hZWYzLTkwNjcyOGY2YTNlYSIsImV4cCI6MTc2NjY0MDUyOSwianRpIjoiMGNkMzQ5MTQxMmMwNDNmNTlhODQ0ZDQxNTRkYWM4ZDgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.CWz2cD0xTe0vQ7WbmlvUyrmKWFcx35A88k2R4-mhZ58)

Step 2 - Map the rating results to the Ramp Intervals, as shown in the table below:

| Interval | Rating Result Number | Period Start Date | Period End Date | Regular Charge Amount | Discount Amount |
| --- | --- | --- | --- | --- | --- |
| Interval 1 | 1 | 2021/1/1 | 2021/1/9 | 9/31*100=29.03 | -(29.03*20%)=-5.81 |
| Interval 1 | 2 | 2021/1/10 | 2021/7/9 | 600 | -120 |
| Rating result 3 spans over Interval 1 and Interval 2 | 3 | 2021/7/10 | 2022/1/9 | 600 | -120 |
| Interval 2 | 4 | 2022/1/10 | 2022/6/30 | (5+21/30)/6*600=570 | -(570*20%)=-114 |
| Interval 2 | 5 | 2022/7/1 | 2022/7/9 | 9/30*200=60 | -(60*20%)=-12 |
| Rating result 6 spans over Interval 2 and Interval 3 | 6 | 2022/7/10 | 2023/1/9 | 1200 | -240 |
| Interval 3 | 7 | 2023/1/10 | 2023/7/9 | 1200 | -240 |
| Interval 3 | 8 | 2023/7/10 | 2023/12/31 | (5+22/31)/6*1200=1141.94 | -(1141.94*20%)=-228.39 |

Step 3 - Segment the Rating result 3 and 6 that span over multiple Ramp Intervals based on the overlap period of the rating result and the Ramp Interval. The amount is distributed based on the time length ratio of the overlap period compared to the rating result period length. See the table below:

| Interval | Rating Result Number | Period Start Date | Period End Date | Ratio of Overlap Period | Regular Charge Amount | Discount Amount |
| --- | --- | --- | --- | --- | --- | --- |
| Interval 1 | 1 | 2021/1/1 | 2021/1/9 | 1 | 29.03 | -5.81 |
| Interval 1 | 2 | 2021/1/10 | 2021/7/9 | 1 | 600 | -120 |
| Interval 1 | 3 | 2021/7/10 | 2021/12/31 | (5+22/31)/6 | 600*(5+22/31)/6=570.97 | (-120)*(5+22/31)/6=-114.19 |
| Interval 2 | 2022/1/1 | 2022/1/9 | (9/31)/6 | 600*(9/31)/6=29.03 | (-120)*(9/31)/6=-5.81 |  |
| Interval 2 | 4 | 2022/1/10 | 2022/6/30 | 1 | 570 | -114 |
| Interval 2 | 5 | 2022/7/1 | 2022/7/9 | 1 | 60 | -12 |
| Interval 2 | 6 | 2022/7/10 | 2022/12/31 | (5+22/31)/6 | 1200*(5+22/31)/6=1141.94 | (-240)*(5+22/31)/6=-228.39 |
| Interval 3 | 2023/1/1 | 2023/1/9 | (9/31)/6 | 1200*(9/31)/6=58.06 | (-120)*(9/31)/6=-5.81 |  |
| Interval 3 | 7 | 2023/1/10 | 2023/7/9 | 1 | 600 | -120 |
| Interval 3 | 8 | 2023/7/10 | 2023/12/31 | 1 | 1141.94 | -228.39 |

Step 4 - Combine the distributed rating result amounts per charge segment for each Ramp Interval, as in the table below. In this example, Charge 1 has two charge segments: Charge Segment 1 from 2020/1/1 to 2022/6/30 (price: $100/month) and Charge Segment 2 from 2022/7/1 to 2023/12/31 (price: $200/month). See Segmented rate plan charges for more information about charge segments.

| Interval | Rating Result Number | Period Start Date | Period End Date | Regular Charge Amount | Discount Amount | Combined Regular Charge Amount (Gross TCB) | Combined Discount Amount (Discount TCB) | Charge Segment |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Interval 1 | 1 | 2021/1/1 | 2021/1/9 | 29.03 | -5.81 | 29.03+600+570.97=1200 | (-5.81)+(-120)+(-114.19)=-240 | Charge Segment 1 |
| 2 | 2021/1/10 | 2021/7/9 | 600 | -120 |  |  |  |  |
| 3 | 2021/7/10 | 2021/12/31 | 570.97 | -114.19 |  |  |  |  |
| Interval 2 | 3 | 2022/1/1 | 2022/1/9 | 29.03 | -5.81 | 29.03+570=599.03 | (-5.81)+(-114)=-119.81 |  |
| 4 | 2022/1/10 | 2022/6/30 | 570 | -114 |  |  |  |  |
| Interval 2 | 5 | 2022/7/1 | 2022/7/9 | 60 | -12 | 60+1141.94= 1201.94 | (-12)+(-228.39)=-240.39 | Charge Segment 2 |
| 6 | 2022/7/10 | 2022/12/31 | 1141.94 | -228.39 |  |  |  |  |
| Interval 3 | 6 | 2023/1/1 | 2023/1/9 | 58.06 | -5.81 | 58.06+600+1141.94=2400 | (-5.81)+(-120)+(-228.39)=-480 |  |
| 7 | 2023/1/10 | 2023/7/9 | 600 | -120 |  |  |  |  |
| 8 | 2023/7/10 | 2023/12/31 | 1141.94 | -228.39 |  |  |  |  |

The final result for the TCB in Ramp Interval Metrics in Order 2 for Subscription Version 2 is shown in the table below. The Net TCB value is calculated by the formula: Net TCB = Gross TCB - Discount TCB.

| Interval | Charge | Charge Segment | Start Date | End Date | Gross TCB | Discount TCB | Net TCB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Interval 1 | Charge 1 | Charge Segment 1 | 2021/1/1 | 2021/12/31 | 1200 | -240 | 960 |
| Interval 2 | Charge 1 | Charge Segment 1 | 2022/1/1 | 2022/6/30 | 599.03 | -119.81 | 479.22 |
| Interval 2 | Charge 1 | Charge Segment 2 | 2022/7/1 | 2022/12/31 | 1201.94 | -240.39 | 961.55 |
| Interval 3 | Charge 1 | Charge Segment 1 | 2023/1/1 | 2023/12/31 | 2400 | -480 | 1920 |
