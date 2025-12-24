---
title: "TCV in Ramp Interval Metrics I"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/key-metrics-for-ramps/calculate-tcv-in-ramp-interval-metrics-process-flow/tcv-in-ramp-interval-metrics-i"
product: "zuora-billing"
scraped_at: "2025-12-24T05:28:35.669Z"
---

# TCV in Ramp Interval Metrics I

This example illustrates the calculation of TCV metrics for a 3-year subscription with multiple charges and ramp intervals.

See the following example:

Suppose your customer has a 3-year termed subscription from 2021/01/01 to 2023/12/31. A Ramp with three Ramp Intervals is configured for this subscription with each year being a Ramp Interval. The subscription is created by Order 1 with two regular charges and one discount charge as below:

-   Charge 1: a monthly recurring regular charge of the Flat Fee charge model, $5/month from 2021/01/01 to 2021/10/31, $10/month from 2021/11/01 to 2023/12/31.

-   Charge 2: a one-time regular charge of the Flat Fee charge model, $15 on 2021/01/01.

-   Charge 3: a recurring discount percentage charge, 10%, from 2022/07/01 to 2023/06/30. This discount charge is configured to be applicable only to Charge 1.


Both charge 1 and charge 2 are associated with the Ramp. Then the subscription is amended by Order 2 with the price of Charge 1 updated to $20/month from 2023/01/01 to the term end date. This subscription now has two versions. Version 1 is created by Order 1 and Version 2 is created by Order 2.

Example 1:

The following example describes the TCV metrics calculation for Subscription Version 1 created by Order 1.

Step 1 - For each charge in the subscription, calculate the TCV for each charge segment (or charge period) during which the charge's net pricing remains constant.

In Subscription Version 1, the TCV values of Charge 1 and Charge 2 are illustrated in the following diagram. See Total Contract Value for more information about how TCV is calculated for a charge.

![Ramp metrics- TCV in Order 1](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a8c6b00d-fce9-42b4-99e1-30bd5ac55c03?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE4YzZiMDBkLWZjZTktNDJiNC05OWUxLTMwYmQ1YWM1NWMwMyIsImV4cCI6MTc2NjY0MDUxNCwianRpIjoiNDNiZmViZWE4MTQyNDMyZTlkNWM2NTA3N2ExMGFiZDAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.hpJzIWOcoKG1FVYhPMoCEuL7FjWKm0jYR6w-H-Rf1AE)

Step 2 - Map the TCV of each charge segment (or charge period) to a specific Ramp Interval, as in the table below. Each row in the table represents a charge segment or charge period.

| Interval | Charge | Start Date | End Date | Gross TCV | Discount TCV | Net TCV |
| --- | --- | --- | --- | --- | --- | --- |
| Interval 1 | Charge 1 | 2021/1/1 | 2021/10/31 | 50 | 0 | 50 |
| This charge period spans over Interval 1 and Interval 2. | Charge 1 | 2021/11/1 | 2022/6/30 | 80 | 0 | 80 |
| This charge period spans over Interval 2 and Interval 3. | Charge 1 | 2022/7/1 | 2023/6/30 | 10*12=120 | (-1)*12=(-12) | 120+(-12)=108 |
| Interval 3 | Charge 1 | 2023/7/1 | 2023/12/31 | 60 | 0 | 60 |
| Interval 1 | Charge 2 | 2021/1/1 | 2021/1/1 | 15 | 0 | 15 |

Step 3 - For those charge periods that span over multiple Ramp Intervals, split them into sub periods, and then map the sub periods into the corresponding Ramp Intervals. In this example, Charge 1 has the charge period from 2021/11/1 to 2022/6/30 and the charge period from 2022/7/1 to 2023/6/30 to split. See the table below.

| Interval | Charge | Start Date | End Date | Ratio of Overlap Period | Gross TCV | Discount TCV | Net TCV |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Interval 1 | Charge 1 | 2021/1/1 | 2021/10/31 | 1 | 50 | 0 | 50 |
| Interval 1 | Charge 1 | 2021/11/1 | 2021/12/31 | 2/(2+6) | 80*2/(2+6)=20 | 0 | 20 |
| Interval 2 | Charge 1 | 2022/1/1 | 2022/6/30 | 6/(2+6) | 80*6/(2+6)=60 | 0 | 60 |
| Interval 2 | Charge 1 | 2022/7/1 | 2022/12/31 | 6/12 | 120*6/12=60 | (-12)*6/12=(-6) | 54 |
| Interval 3 | Charge 1 | 2023/1/1 | 2023/6/30 | 6/12 | 120*6/12=60 | (-12)*6/12=(-6) | 54 |
| Interval 3 | Charge 1 | 2023/7/1 | 2023/12/31 | 1 | 60 | 0 | 60 |
| Interval 1 | Charge 2 | 2021/1/1 | 2021/1/1 | 1 | 15 | 0 | 15 |

Step 4 - Group the distributed rating result amounts per charge segment for each Ramp Interval, as in the table below. In this example, Charge 1 (the recurring charge) has two charge segments: Charge Segment 1 from 2021/1/1 to 2021/10/31 and Charge Segment 2 from 2021/11/1 to 2023/12/31. Charge 2 (the one-time charge) has only one charge segment. See Segmented rate plan charges for more information about charge segments.

| Interval | Charge Segment | Start Date | End Date | Gross TCV | Discount TCV | Net TCV |
| --- | --- | --- | --- | --- | --- | --- |
| Interval 1 | Charge 1 > Segment 1 | 2021/1/1 | 2021/10/31 | 50 | 0 | 5 |
| Interval 1 | Charge 1 > Segment 2 | 2021/11/1 | 2021/12/31 | 20 | 0 | 20 |
| Interval 2 | Charge 1 > Segment 2 | 2022/1/1 | 2022/6/30 | 60 | 0 | 60 |
| Charge 1 > Segment 2 | 2022/7/1 | 2022/12/31 | 60 | -6 | 54 |  |
| Interval 3 | Charge 1 > Segment 2 | 2023/1/1 | 2023/6/30 | 60 | -6 | 54 |
| Charge 1 > Segment 2 | 2023/7/1 | 2023/12/31 | 60 | 0 | 60 |  |
| Interval 1 | Charge 2 has only one charge segment. | 2021/1/1 | 2021/1/1 | 15 | 0 | 15 |

Return the added up value per charge segment per Interval as the TCV in the Ramp Interval Metrics. In this example, the final result returned as the TCV in the Ramp Interval Metrics level is as below:

| Order | Interval | Charge Segment | Start Date | End Date | Gross TCV | Discount TCV | Net TCV |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Order 1 | Interval 1 | Charge 1 > Segment 1 | 2021/1/1 | 2021/10/31 | 50 | 0 | 50 |
| Charge 1 > Segment 2 | 2021/11/1 | 2021/12/31 | 20 | 0 | 20 |  |  |
| Charge 2 | 2021/1/1 | 2021/1/1 | 15 | 0 | 15 |  |  |
| Interval 2 | Charge 1 > Segment 2 | 2022/1/1 | 2022/12/31 | 60+60=120 | 0+(-6)=(-6) | 60+54=114 |  |
| Interval 3 | Charge 1 > Segment 2 | 2023/1/1 | 2023/12/31 | 60+60=120 | (-6)+0=(-6) | 54+60=114 |  |
