---
title: "MRR in Ramp Interval Metrics - Example"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/key-metrics-for-ramps/calculate-mrr-in-ramp-interval-metrics-process-flow/mrr-in-ramp-interval-metrics---example"
product: "zuora-billing"
scraped_at: "2025-12-24T05:28:25.352Z"
---

# MRR in Ramp Interval Metrics - Example

This example illustrates the calculation of Monthly Recurring Revenue (MRR) for a subscription with a 3-year term and multiple Ramp Intervals, including regular and discount charges.

See the following example.

Example subscription:

Suppose your customer has a 3-year termed subscription from 2021/01/01 to 2023/12/31. A Ramp with three Ramp Intervals is configured for this subscription with each year being a Ramp Interval. The subscription is created by Order 1 with two regular charges and one discount charge as below:

-   Charge 1: a monthly recurring regular charge of the Flat Fee charge model, $5/month from 2021/01/01 to 2021/10/31, $10/month from 2021/11/01 to 2023/12/31.

-   Charge 2: a quarterly recurring regular charge of the Flat Fee charge model, $75/quarter for the entire term.

-   Charge 3: a recurring discount percentage charge, 10%, from 2022/07/01 to 2023/06/30. This discount charge is configured to be applicable only to Charge 1.


Both charge 1 and charge 2 are associated with the Ramp. Then the subscription is amended by Order 2 with the price of Charge 1 updated to $20/month from 2023/01/01 to the term end date. This subscription now has two versions. Version 1 is created by Order 1 and Version 2 is created by Order 2.

The following example shows the MRR metrics calculation for Subscription Version 1 created by Order 1.

Step 1 - For each charge in the subscription, calculate the MRR for each charge period during which the charge's net pricing remains constant.

In Subscription Version 1, the MRR values of Charge 1 and Charge 2 are illustrated in the following diagram. See Monthly Recurring Revenue for more information about how MRR is calculated for a charge.

![Ramp metrics- MRR in Order 1](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/5753aac6-5a9d-4060-aa99-e84a92343f9f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU3NTNhYWM2LTVhOWQtNDA2MC1hYTk5LWU4NGE5MjM0M2Y5ZiIsImV4cCI6MTc2NjY0MDUwMywianRpIjoiZmVkMzRhM2UxMjAyNGMzMDlkMjQ2MDUyZTAwNDNjN2EiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9._XPaWpqj3QCvW7-YK7ncwLuDMqgS8Y0FxB6GcYBNVrk)

Step 2 - Map the MRR of each charge segment (or charge period) to a specific Ramp Interval, as in the table below. Each row in the table represents a charge segment or charge period.

| Interval | Charge | Start Date | End Date | Gross MRR | Discount MRR | Net MRR |
| --- | --- | --- | --- | --- | --- | --- |
| Interval 1 | Charge 1 | 2021/1/1 | 2021/10/31 | 5 | 0 | 5 |
| This charge period spans over Interval 1 and Interval 2. | Charge 1 | 2021/11/1 | 2022/6/30 | 10 | 0 | 10 |
| This charge period spans over Interval 2 and Interval 3. | Charge 1 | 2022/7/1 | 2023/6/30 | 10 | -1 | 9 |
| Interval 3 | Charge 1 | 2023/7/1 | 2023/12/31 | 10 | 0 | 10 |
| This charge period spans over Interval 1, Interval 2, and Interval 3. | Charge 2 | 2021/1/1 | 2023/12/31 | 25 | 0 | 25 |

Step 3 - For those charge periods that span over multiple Ramp Intervals, split them into sub periods, and then map the sub periods into the corresponding Ramp Intervals. In this example, Charge 1 has the charge period from 2021/11/1 to 2022/6/30 and the charge period from 2022/7/1 to 2023/6/30 to split. Charge 2 has the charge period from 2021/1/1 to 2023/12/31 to split. See the table below.

| Interval | Charge | Start Date | End Date | Gross MRR | Discount MRR | Net MRR |
| --- | --- | --- | --- | --- | --- | --- |
| Interval 1 | Charge 1 | 2021/1/1 | 2021/10/31 | 5 | 0 | 5 |
| Interval 1 | Charge 1 | 2021/11/1 | 2021/12/31 | 10 | 0 | 10 |
| Interval 2 | Charge 1 | 2022/1/1 | 2022/6/30 | 10 | 0 | 10 |
| Interval 2 | Charge 1 | 2022/7/1 | 2022/12/31 | 10 | -1 | 9 |
| Interval 3 | Charge 1 | 2023/1/1 | 2023/6/30 | 10 | -1 | 9 |
| Interval 3 | Charge 1 | 2023/7/1 | 2023/12/31 | 10 | 0 | 10 |
| Interval 1 | Charge 2 | 2021/1/1 | 2021/12/31 | 25 | 0 | 25 |
| Interval 2 | Charge 2 | 2022/1/1 | 2022/12/31 | 25 | 0 | 25 |
| Interval 3 | Charge 2 | 2023/1/1 | 2023/12/31 | 25 | 0 | 25 |

The final result for the MRR in the Ramp Interval Metrics level for Interval 1, Interval 2, and Interval 3 in Order 1 for Subscription Version 1 is shown in the table below:

| Order | Interval | Charge | Start Date | End Date | Gross MRR | Discount MRR | Net MRR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Order 1 | Interval 1 | Charge 1 | 2021/1/1 | 2021/10/31 | 5 | 0 | 5 |
| Charge 1 | 2021/11/1 | 2021/12/31 | 10 | 0 | 10 |  |  |
| Charge 2 | 2021/1/1 | 2021/12/31 | 25 | 0 | 25 |  |  |
| Interval 2 | Charge 1 | 2022/1/1 | 2022/6/30 | 10 | 0 | 10 |  |
| Charge 1 | 2022/7/1 | 2022/12/31 | 10 | -1 | 9 |  |  |
| Charge 2 | 2022/1/1 | 2022/12/31 | 25 | 0 | 25 |  |  |
| Interval 3 | Charge 1 | 2023/1/1 | 2023/6/30 | 10 | -1 | 9 |  |
| Charge 1 | 2023/7/1 | 2023/12/31 | 10 | 0 | 10 |  |  |
| Charge 2 | 2023/1/1 | 2023/12/31 | 25 | 0 | 25 |  |  |
