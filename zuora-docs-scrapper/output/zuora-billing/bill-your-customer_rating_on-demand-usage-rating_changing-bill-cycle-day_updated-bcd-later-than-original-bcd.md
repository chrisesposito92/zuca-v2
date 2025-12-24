---
title: "Updated BCD later than original BCD"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/rating/on-demand-usage-rating/changing-bill-cycle-day/updated-bcd-later-than-original-bcd"
product: "zuora-billing"
scraped_at: "2025-12-24T08:27:33.127Z"
---

# Updated BCD later than original BCD

When the updated BCD is later than the original BCD, the current billing period remains the same, and upcoming billing periods are affected.

For example, if you changed the BCD on the customer account from the 20th to the 25th, the new billing periods are as follows:

-   BP1: From 01/01/2025 (inclusive) to 01/20/2025 (exclusive)
-   BP2: From 01/20/2025 (inclusive) to 01/25/2025 (exclusive)
-   BP3: From 01/25/2025 (inclusive) to 02/25/2025 (exclusive)
-   BP4: From 02/25/2025 (inclusive) to 03/25/2025 (exclusive)
-   BP5: From 03/25/2025 (inclusive) to 04/01/2025 (exclusive)

![Usage quantity reset dates](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/541254fd-bd96-4b85-aa18-8a8f2436d888?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU0MTI1NGZkLWJkOTYtNGI4NS1hYTE4LThhOGYyNDM2ZDg4OCIsImV4cCI6MTc2NjY1MTI1MSwianRpIjoiZTk0YWMyNDcxYzcwNDI4Mjk1ZGI5MjQ3ZGEwY2Y3OGMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.e25plXjhxcFq2YL8r_iYny8VA8u_I-QNQzKQOh5nv14)

For a tiered on-demand usage charge model, the usage quantity will reset on 01/20/2025, 01/25/2025, 02/15/2025, and 03/15/2025 .

The following examples explain how invoice amount is calculated for different scenarios.

Example 1:

-   Uploaded usage records:
    -   U3: 5 units on 01/19/2025
-   Bill Run:
    -   Target Date: 01/20/2025
-   Invoice:
    -   Total Invoice Amount: (10 \* $2 + (5 + 5) \* $3) - $35 = $15


Example 2:

-   Uploaded usage records:
    -   U4: 5 units on 01/24/2025
-   Bill Run:
    -   Target Date: 01/25/2025
-   Invoice:
    -   Total Invoice Amount: 5 \* $2 (tier 1 in BP2) = $10

Example 3:

-   Uploaded usage records:
    -   U5: 5 units on 01/29/2025
-   Bill Run:
    -   Target Date: 01/30/2025
-   Invoice:
    -   Total Invoice Amount: 5 \* $2 (tier 1 in BP3) = $10
