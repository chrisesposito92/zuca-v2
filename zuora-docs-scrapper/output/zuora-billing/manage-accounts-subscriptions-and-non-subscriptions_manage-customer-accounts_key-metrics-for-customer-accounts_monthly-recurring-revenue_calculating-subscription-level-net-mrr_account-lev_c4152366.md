---
title: "Account level fixed-amount discount charge application to multiple subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/key-metrics-for-customer-accounts/monthly-recurring-revenue/calculating-subscription-level-net-mrr/account-level-fixed-amount-discount-charge-application-to-multiple-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:15:22.097Z"
---

# Account level fixed-amount discount charge application to multiple subscriptions

This topic explains how to apply an account-level fixed-amount discount charge to multiple subscriptions, detailing the discount applying sequence, amount allocation, and MRR calculations.

This example demonstrates how an account level fixed-amount discount charge is allocated on the four regular charges that belong to the two subscriptions of the same customer account. You can see the following analysis in this example:

-   The discount applying sequence
-   The discount amount allocation
-   The charge-level MRR calculation
-   The subscription-level MRR calculation

Example1: Suppose a new customer account (as the subscription owner) has two subscription.

-   Subscription 1 is a half year termed subscription with a rate plan containing two regular charges triggered on 1/1/2019.
    -   Charge 1 (R1) is a regular monthly charge of $300/month.
    -   Charge 2 (O1) is a regular one-time charge of a $100 flat fee.
-   Subscription 2 has the same product rate plan (containing R2 and O2), but the effective term is from 1/16/2019 to 7/1/2019.
-   An account-level discount charge of $1500/quarter is added to Subscription 1 for the first quarter.

The discounting logic and the MRR calculation for this example can be illustrated by the diagram below:

![Account level fixed-amount discount](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1dc7d6b3-8a5e-440d-988d-49e08a9c1ccc?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFkYzdkNmIzLThhNWUtNDQwZC05ODhkLTQ5ZTA4YTljMWNjYyIsImV4cCI6MTc2NjYzOTcyMCwianRpIjoiNzJhMjk2ODM0MTY3NGU2OTlmNmM0ZmFmMjk4Mzg4Y2YiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.00rjhQF2H0qrHM4NybMa20tJFdRYxodM1ub_l6mznrw)

The discount applying sequence:

To apply an account-level discount, the regular charges in all the subscriptions of the target subscription owner account is sorted to the following sequence. See Sequence of applying a fixed-amount discount charge to multiple regular charges .

-   R1
-   R2
-   O1
-   O2

The discount amount allocation:

When applying a discount to a regular recurring charge, the discount must be evenly distributed and applied as a monthly recurring charge:

-   When applying a discount on R1, the $1500/q recurring quarterly discount charge is viewed as a $500/m monthly recurring discount charge. The price of R1 in the charge period from 1/1 to 4/1 is $300/m, so at maximum, a recurring discount charge of $300/m can be applied to R1. The discount balance as a recurring monthly charge is $200/m (500-300) for the charge period from 1/1 to 4/1.
-   The discount charge is then applied as a 200/m recurring discount charge on R2. As the price of R2 in the charge period from 1/16 to 4/1 is $300/m, the discount balance as a recurring charge is 0 in the charge period from 1/16 to 4/1 and $200/m in the charge period from 1/1 to 1/16.

To apply a discount to a one-time charge, the discount is applied as a total amount for the discount charge's effective time range.

-   To apply the discount on O1, the discount balance as a total amount for the quarterly discount charge is 200 - 200\*16/31=$96.744. As the price of O1 is $100, after the discount is applied to O1, the discount balance is 0.
-   As no discount balance is available from 1/1 to 4/1, no discount can be applied to O2.

The charge-level MRR calculation:

The Gross MRR, Discount, and Net MRR of each charge or charge period are calculated as in the table below. O1 and O2 are one-time charges and are not counted in the MRR calculation.

| Charge | Charge Period | Gross MRR | Start Date | End Date | Applied Discount | Discount Balance | Discount MRR | Net MRR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| R1 | Charge Period 1 | 300 | 1/1 | 4/1 | -300/m | 500/m-300/m=200/m | 300 | 0 |
| Charge Period 2 | 4/1 | 7/1 | 0 | n/a | n/a | 300 |  |  |
| R2 | Charge Period 1 | 300 | 1/16 | 4/1 | -200/m | 200/m-200/m=0/m | 200 | 100 |
| Charge Period 2 | 4/1 | 7/1 | 0 | n/a | n/a | 300 |  |  |

The subscription-level MRR calculation:

By adding up the MRR of the charge segments or charge periods with the same start and end dates, the MRR of Subscription 1 and Subscription 2 is as shown in the table below:

| Subscription | Charge Period | Start Date | End Date | Subscription Gross MRR | Subscription Discount MRR | Subscription Net MRR |
| --- | --- | --- | --- | --- | --- | --- |
| Subscription 1 | R1 Charge Period1 | 1/1 | 4/1 | 300 | 300 | 0 |
| R1 Charge Period 2 | 4/1 | 7/1 | 300 | n/a | 300 |  |
| Subscription 2 | R2 Charge Period 1 | 1/16 | 4/1 | 300 | 200 | 100 |
| R2 Charge Period 2 | 4/1 | 7/1 | 300 | n/a | 300 |  |
