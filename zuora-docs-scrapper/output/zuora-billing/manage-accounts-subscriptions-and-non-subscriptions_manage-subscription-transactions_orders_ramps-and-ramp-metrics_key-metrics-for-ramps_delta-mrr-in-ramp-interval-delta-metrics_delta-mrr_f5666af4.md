---
title: "Delta MRR in Ramp Interval Delta Metrics - Example"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/key-metrics-for-ramps/delta-mrr-in-ramp-interval-delta-metrics/delta-mrr-in-ramp-interval-delta-metrics---example"
product: "zuora-billing"
scraped_at: "2025-12-24T05:28:30.378Z"
---

# Delta MRR in Ramp Interval Delta Metrics - Example

This topic explains the calculation of Delta MRR metrics in Order 2, comparing Subscription Version 2 with Version 1, focusing on changes in MRR for Charge 1 across different intervals.

Example:

In this example, we continue to use the same sample subscription above as in MRR in Ramp Interval Metrics and show the Delta MRR metrics calculation in Order 2. Order 2 creates Subscription Version 2 based on Subscription Version 1.

The MRR metrics of Charge 1 and Charge 2 in Subscription Version 2 are illustrated in the following diagram:

![Ramp metrics- MRR in Order 2](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/83f91583-2171-4542-9b97-752e0e40df6d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgzZjkxNTgzLTIxNzEtNDU0Mi05Yjk3LTc1MmUwZTQwZGY2ZCIsImV4cCI6MTc2NjY0MDUwOCwianRpIjoiZmU1OTNkMTQ1ODMyNDcxOWI5ODNiYjFiZjhlNzUyYTIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.yR49sLgcD6MQk5AFhkzwJz56idCN_uWRsAE9eafEbac)

Comparing the MRR values in Subscription Version 2 with that of Version 1 as in MRR in Ramp Interval Metrics , you can see:

-   Charge 2 has no change in MRR in Interval 1, Interval 2, an Interval 3. Therefore, no Delta MRR metrics will be present for Charge 2 in Order 2.

-   Charge 1 has no change in MRR in Interval 1 and Interval 2. Therefore, no Delta MRR metrics will be present in Interval 1 and Interval 2 for Charge 1 in Order 2.

-   Charge 1 has MRR changes in Interval 3. Therefore, Delta MRR metrics will be present in Order 2 for Charge 1 in Interval 3.


The table below compares the MRR values for Charge 1 in Interval 3 between Subscription Version 1 and Version 2:

| Subscription Version | Interval | Charge | Start Date | End Date | Gross MRR | Discount MRR | Net MRR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Version 1 | Interval 3 | Charge 1 | 2023/1/1 | 2023/6/30 | 10 | -1 | 9 |
| Charge 1 | 2023/7/1 | 2023/12/31 | 10 | 0 | 10 |  |  |
| Version 2 | Interval 3 | Charge 1 | 2023/1/1 | 2023/6/30 | 20 | -2 | 18 |
| Charge 1 | 2023/7/1 | 2023/12/31 | 20 | 0 | 20 |  |  |

Therefore, you can access the following sets of Delta MRR metrics in Ramp Interval Delta Metrics in Order 2:

| Order | Interval | Charge | Start Date | End Date | Delta Gross MRR | Delta Discount MRR | Delta Net MRR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Order 2 | Interval 3 | Charge 1 | 2023/1/1 | 2023/6/30 | 20-10=10 | (-2)-(-1)=-1 | 18-9=9 |
| 2023/7/1 | 2023/12/31 | 20-10=10 | 0-0=0 | 20-10=10 |  |  |  |
