---
title: "Quantity in Ramp Interval Metrics - Example"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/key-metrics-for-ramps/calculate-quantity-in-ramp-interval-metrics-process-flow/quantity-in-ramp-interval-metrics---example"
product: "zuora-billing"
scraped_at: "2025-12-24T05:29:01.070Z"
---

# Quantity in Ramp Interval Metrics - Example

This example illustrates the calculation of quantity metrics in ramp interval metrics for a subscription with multiple ramp intervals and amendments.

See the following example:

Example Subscription

Suppose your customer has a 3-year termed subscription from 2021/01/01 to 2023/12/31. A Ramp with three Ramp Intervals is configured for this subscription with each year being a Ramp Interval. The subscription is created by Order 1 with one monthly recurring regular charge of the Per Unit charge model. The list price is $10/month for each product and the quantity for this regular charge is:

-   5 for the time period: 2021/1/1 to 2022/6/30

-   10 for the time period: 2022/7/1 to 2023/12/31.


Then the subscription is amended by Order 2 with the quantity being updated to 20 from 2023/1/1 to the term end.

The following example shows the Quantity metrics calculation for Subscription Version 1 created by Order 1 and Subscription Version 2 created by Order 2.

Step 1 - Calculate the Quantity for each charge segment in the subscription. The Quantity metrics for both subscription versions are shown in the diagram below:

![Ramp metrics- Quantity](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/df82cd3a-7d61-435b-9483-2bd7b9dfdb4a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRmODJjZDNhLTdkNjEtNDM1Yi05NDgzLTJiZDdiOWRmZGI0YSIsImV4cCI6MTc2NjY0MDUzOSwianRpIjoiY2IxN2IzYmJmY2VlNGU1ZTkwZDQ1MWQ4ZmYyMGRkMmYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.H_8nLIAMXHCgqj1r6NPgYqug4IpOfLdGB6V-GJlFLAk)

Step 2 - Map the Quantity of each charge segment to Ramp Intervals.

Subscription Version 1:

| Interval | Charge Segment | Start Date | End Date | Quantity |
| --- | --- | --- | --- | --- |
| Charge segment 1 spans over Interval 1 and Interval 2. | Charge Segment 1 | 2021/1/1 | 2022/6/30 | 5 |
| Charge segment 2 spans over Interval 2 and Interval 3. | Charge Segment 2 | 2022/7/1 | 2023/12/31 | 10 |

Subscription Version 2:

| Interval | Charge Segment | Start Date | End Date | Quantity |
| --- | --- | --- | --- | --- |
| Charge segment 1 spans over Interval 1 and Interval 2. | Charge Segment 1 | 2021/1/1 | 2022/6/30 | 5 |
| Interval 2 | Charge Segment 2 | 2022/7/1 | 2022/12/31 | 10 |
| Interval 3 | Charge Segment 3 | 2023/1/1 | 2023/12/31 | 20 |

Step 3 - Segment the time period that spans over multiple Ramp Intervals and map the sub-periods to Intervals.

The final Quantity metrics in Ramp Interval Metrics in Order 1 for Subscription Version 1 is as in the table below:

| Interval | Charge Segment | Start Date | End Date | Quantity |
| --- | --- | --- | --- | --- |
| Interval 1 | Charge Segment 1 | 2021/1/1 | 2021/12/31 | 5 |
| Interval 2 | Charge Segment 1 | 2022/1/1 | 2022/6/30 | 5 |
| Interval 2 | Charge Segment 2 | 2022/7/1 | 2022/12/31 | 10 |
| Interval 3 | Charge Segment 2 | 2023/1/1 | 2023/12/31 | 10 |

The final Quantity metrics in Interval Metrics in Order 2 for Subscription Version 2 is as in the table below:

| Interval | Charge Segment | Start Date | End Date | Quantity |
| --- | --- | --- | --- | --- |
| Interval 1 | Charge Segment 1 | 2021/1/1 | 2021/12/31 | 5 |
| Interval 2 | Charge Segment 1 | 2022/1/1 | 2022/6/30 | 5 |
| Interval 2 | Charge Segment 2 | 2022/7/1 | 2022/12/31 | 10 |
| Interval 3 | Charge Segment 3 | 2023/1/1 | 2023/12/31 | 20 |
