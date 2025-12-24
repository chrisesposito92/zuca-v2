---
title: "Changing bill cycle day"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/rating/on-demand-usage-rating/changing-bill-cycle-day"
product: "zuora-billing"
scraped_at: "2025-12-24T08:27:25.632Z"
---

# Changing bill cycle day

Learn how changing the account-level bill cycle day affects billing periods and invoice consistency.

Changing the account-level bill cycle day (BCD) does not affect already billed periods, ensuring consistency and preventing mismatches between billed usage quantities and existing invoice amounts. However, it might affect the current or upcoming billing periods, depending on the new bill cycle day you specified.

Take the following scenario as an example:

-   Charge name: Charge 1
-   Charge model: Tiered Pricing
-   Trigger condition: Upon contract effective
-   Billing period: Month
-   Rating group: By Billing Period
-   Usage records rating option: On Demand
-   Billing day: Default from customer account (for example, the account’s bill cycle day is the 20th of the month)
-   Billing period alignment: Align to charge
-   Price table:

| Tier | Quantity From | Quantity To | List Price |
| --- | --- | --- | --- |
| 1 | 0 | 10 | 2.00 |
| 2 | 11 | 20 | 3.00 |
| 3 | 21 | - | 5.00 |

Assume that a 3-month-termed subscription is created for this on-demand usage charge. You have uploaded a few usage records and generated a bill run for it.

![On demand usage rating default billing periods](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/3b7b0ef9-f794-4841-8ded-4d6b762bfacf?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjNiN2IwZWY5LWY3OTQtNDg0MS04ZGVkLTRkNmI3NjJiZmFjZiIsImV4cCI6MTc2NjY1MTI0MywianRpIjoiMDVlNDM3MDMyN2Q5NGQyYTk4OGVmMWU2MTA3MTVmZjgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Y407wFPSplkqCYDw_-YrtA5VgQkvc-JQVpyIpT5Ktuc)

-   Subscription:
    -   Term Start Date: 01/01/2025
    -   Term Duration: 3 months
    -   Term Period: From 01/01/2025 to 04/01/2025
-   Billing periods:
    -   BP1: From 01/01/2025 (inclusive) to 01/20/2025 (exclusive)
    -   BP2: From 01/20/2025 (inclusive) to 02/20/2025 (exclusive)
    -   BP3: From 02/20/2025 (inclusive) to 03/20/2025 (exclusive)

-   Uploaded usage records:
    -   U1: 10 units on 01/10/2025
    -   U2: 5 units on 01/17/2025
-   Bill Run:
    -   Target Date: 01/18/2025

In this case, the first invoice is generated for the period from 01/01/2025 to 01/18/2025.

Total quantity: 10 + 5 = 15

Total invoice amount: 10 \* $2 + 5 \* $3 = $35
