---
title: "Subscription level fixed-amount discount charge application to multiple regular charges"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/key-metrics-for-customer-accounts/monthly-recurring-revenue/calculating-subscription-level-net-mrr/subscription-level-fixed-amount-discount-charge-application-to-multiple-regular-charges"
product: "zuora-billing"
scraped_at: "2025-12-24T05:15:24.974Z"
---

# Subscription level fixed-amount discount charge application to multiple regular charges

This topic explains how to apply a subscription level fixed-amount discount charge to multiple regular charges, detailing the discount applying sequence, amount allocation, and MRR calculations.

This example demonstrates how a subscription level fixed-amount discount charge is allocated on the four regular charges of a subscription. You can see the following analysis in this example:

-   The discount applying sequence
-   The discount amount allocation
-   The charge-level MRR calculation
-   The subscription-level MRR calculation

Example: Suppose your customer has a half year termed subscription triggered on 1/1/2019. The subscription has 4 charges.

-   R1: A recurring monthly regular charge of $300/month, effective from 1/1/2019
-   O1: A one-time regular charge of $100 flat fee.
-   R2: A recurring monthly regular charge of $300/month, effective from 1/16/2019
-   O2: A one-time charge of $100 flat fee.

A subscription level fixed-amount discount charge of $650/month is added to the subscription for the first quarter.

The discounting logic and the MRR calculation for this example can be illustrated by the diagram below:

![Subscription level fixed-amount discount](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/448cf618-a549-40ef-b28a-b1dc80c8dcd7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ0OGNmNjE4LWE1NDktNDBlZi1iMjhhLWIxZGM4MGM4ZGNkNyIsImV4cCI6MTc2NjYzOTcyMiwianRpIjoiMWY4NmY3YjY1MDUyNDI0YzhhZDkzZWE4Y2IzYWFmZmYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.a2-ZG_0f20NkovYyM4JF1dq7q92OEYnXWydoSL_olN8)

The discount applying sequence:

When applying the subscription-level discount, the regular charges in the subscription are sorted to the following order per the sequence of applying a fixed-amount discount charge to multiple regular charges:

1.  R1

2.  R2

3.  O1

4.  O2


The discount amount allocation:

The discount is first applied to R1 and then to R2.

-   The price of R1 in the charge period from 1/1 to 4/1 is $300/m, so after the discount is applied to R1, the discount balance as a recurring charge is $350/m (650/m-300/m) in the charge period from 1/1 to 4/1.
-   The discount balance is then applied to R2. As the price of R2 in the charge period from 1/16 to 4/1 is $300/m, so at maximum, a recurring discount charge of $300/m can be applied to R2. The discount balance as a recurring charge is $350/m in the charge period from 1/1 to 1/16 and $50 (calculated by 350-300=50) in the charge period from 1/16 to 4/1.

When applying a discount to a one-time charge, the discount is applied as a total amount for the discount charge's effective time frame. In this example, O1 and O2 are effective charges in January, the discount balance as a total amount for the monthly discount charge in January is 350-300\*16/31 = 195.161.

The charge-level MRR calculation:

The Gross MRR, Discount MRR, and Net MRR of each regular charge segment or charge period are calculated as in the table below. O1 and O2 are one-time charges and are not counted in the MRR calculation. Note in this example, both R1 and R2 have only one charge segment.

| Charge | Charge Period | Gross MRR | Start Date | End Date | Applied Discount | Discount Balance | Discount MRR | Net MRR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| R1 | Charge Period 1 | 300 | 1/1 | 4/1 | -300/m | 650/m-300/m=350/m | 300 | 0 |
| Charge Period 2 | 4/1 | 7/1 | 0 | n/a | n/a | 300 |  |  |
| R2 | Charge Period 1 | 300 | 1/16 | 4/1 | -300/m | 350/m-300/m=50/m(350/m for 1/1-1/16) | 300 | 0 |
| Charge Period 2 | 4/1 | 7/1 | 0 | n/a | n/a | 300 |  |  |

The subscription-level MRR calculation:

By adding up the MRR of the charge segments or charge periods with the same start and end dates, the MRR of the subscription is as shown in the table below:

| tart Date | End Date | Subscription Gross MRR | Subscription Discount MRR | Subscription Net MRR | Charge Segment or Charge Period Applicable |
| --- | --- | --- | --- | --- | --- |
| 1/1 | 1/16 | 300 | 300 | 0 | R1 Charge Period1 |
| 1/16 | 4/1 | 600 | 600 | 0 | R1 Charge Period1 + R2 Charge Period 1 |
| 4/1 | 7/1 | 600 | n/a | 600 | R1 Charge Period 2 + R2 Charge Period 2 |
