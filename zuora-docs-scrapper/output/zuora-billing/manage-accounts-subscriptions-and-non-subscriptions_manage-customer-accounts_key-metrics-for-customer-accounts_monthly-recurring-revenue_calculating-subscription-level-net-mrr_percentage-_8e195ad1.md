---
title: "Percentage discount charge application to multiple regular charges"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/key-metrics-for-customer-accounts/monthly-recurring-revenue/calculating-subscription-level-net-mrr/percentage-discount-charge-application-to-multiple-regular-charges"
product: "zuora-billing"
scraped_at: "2025-12-24T05:15:27.973Z"
---

# Percentage discount charge application to multiple regular charges

This article illustrates the application of a subscription-level percentage discount to multiple regular charges, detailing the impact on recurring and one-time charges, and the resulting MRR calculations.

This example demonstrates how a subscription level percentage discount is applied to two regular charges in a subscription. You can see the following analysis in this example:

Example: This example demonstrates how a subscription level percentage discount is applied to two regular charges in a subscription. You can see the following analysis in this example:

-   Charge 1 is a recurring monthly regular charge of $1000/month.
-   Charge 2 is a one-time regular charge of $400 flat fee.
-   Charge 3 is a recurring 20% percentage discount charge to apply at the subscription level but limited to recurring charges only.

Then the subscription is amended with two order actions as below:

-   Order Action 1 updated the price of Charge 1 to $1200/month with the new price triggered on 7/1/2019.
-   Order Action 2 added a new recurring monthly charge (Charge 4) to the subscription triggered on 9/1/2019. The price is $800/month.
-   Order Action 3 updated Charge 3 and removed the percentage discount from 11/1/2019.

The discounting logic and the MRR calculation for this example can be illustrated by the diagram below:

![Percentage discount](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7b4763d3-73f9-4165-8a2d-8b78e30c03fa?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdiNDc2M2QzLTczZjktNDE2NS04YTJkLThiNzhlMzBjMDNmYSIsImV4cCI6MTc2NjYzOTcyNSwianRpIjoiNGY5ZGU1ZGRiM2VkNGY1NTk4NzYwYzczMWQwNmQwNGMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.sxm1CoUVJDZ8A7rUrXRKYfQjcDtV-UYDcvNyLrez53U)

The discount applying sequence:

To apply a percentage discount charge to multiple regular charges, you do not have to consider the applying sequence, as each regular charge has the same discount percentage.

The discount amount allocation:

The two regular charges (Charge 1 and Charge 4) have the same discount percentage. The discount amount is calculated by *Regular Charge Price \* Discount Percentage*.

This discount charge is limited to recurring charges only, so it is not applicable to Charge 2, which is a one-time charge.

The charge-level MRR calculation:

The Gross MRR, Discount MRR, and Net MRR of each charge segment or charge period in the regular charges are calculated as in the table below.

| Charge Segment | Charge Period | Gross MRR | Discount Charge | Start Date | End Date | Applicable Discount | Discount MRR | Net MRR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Charge1 Segment 1 | N/A | 1000 | 20% | 1/1/2019 | 7/1/2019 | -1000*20%= -200 | 200 | 800 |
| Charge 1 Segment 2 | Charge Period 1 | 1200 | 20% | 7/1/2019 | 11/1/2019 | -1200*20%=-240 | 240 | 960 |
| Charge Period 2 | n/a | 11/1/2019 | 1/1/2020 | 0 | n/a | 1200 |  |  |
| Charge 4 Segment 1 | Charge Period 1 | 800 | 20% | 9/1/2019 | 11/1/2019 | -800*20%=-160 | 160 | 640 |
| Charge Period 2 | n/a | 11/1/2019 | 1/1/2020 | 0 | n/a | 800 |  |  |

The subscription-level MRR calculation:

By adding up the Gross MRR, Discount MRR, and Net MRR of the charge segments or charge periods with the same start and end dates, the MRR of the subscription is as shown in the table below:

| Start Date | End Date | Subscription Gross MRR | Subscription Discount MRR | Subscription Net MRR | Charge Segment or Charge Period Applicable |
| --- | --- | --- | --- | --- | --- |
| 1/1/2019 | 7/1/2019 | 1000 | 200 | 800 | Charge 1/Segment 1 |
| 7/1/2019 | 9/1/2019 | 1200 | 240 | 960 | Charge 1/Segment 2/Charge Period 1 |
| 9/1/2019 | 11/1/2019 | 1200+800 | (240+160)= 400 | 1600 | Charge 1/Segment 2/Charge Period 1 + Charge 4/Segment 1/Charge Period 1 |
| 11/1/2019 | 1/1/2020 | 1200+800 | 0 | 2000 | Charge1/Segment2/Charge Period 2+ Charge 4/Segment 1/Charge Period 2 |
