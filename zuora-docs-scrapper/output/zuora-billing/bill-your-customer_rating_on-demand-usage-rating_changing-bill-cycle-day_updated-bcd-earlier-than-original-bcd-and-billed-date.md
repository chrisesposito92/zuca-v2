---
title: "Updated BCD earlier than original BCD and billed date"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/rating/on-demand-usage-rating/changing-bill-cycle-day/updated-bcd-earlier-than-original-bcd-and-billed-date"
product: "zuora-billing"
scraped_at: "2025-12-24T08:27:30.646Z"
---

# Updated BCD earlier than original BCD and billed date

When the updated BCD is earlier than the original BCD and the billed date, the current billing period remains the same, and upcoming billing periods are affected.

For example, if you changed the BCD on the customer account from the 20th to the 15th, the new billing periods are as follows:

-   BP1: From 01/01/2025 (inclusive) to 01/20/2025 (exclusive)
-   BP2: From 01/20/2025 (inclusive) to 02/15/2025 (exclusive)
-   BP3: From 02/15/2025 (inclusive) to 03/15/2025 (exclusive)
-   BP4: From 03/15/2025 (inclusive) to 04/01/2025 (exclusive)

![Usage quantity reset dates](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6e5d2229-4518-4d96-8d2e-5eb152a000b3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZlNWQyMjI5LTQ1MTgtNGQ5Ni04ZDJlLTVlYjE1MmEwMDBiMyIsImV4cCI6MTc2NjY1MTI0OCwianRpIjoiZDBiZGMwNzk3MjliNGE1YzlkNzhjMjQ2ODc3ODAwMWEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.R1UDjt7S34toryEhqQ77OhXteBuj3wVVrN60EpNqzn4)

For a tiered on-demand usage charge model, the usage quantity will reset on 01/20/2025, 02/15/2025, and 03/15/2025 .

As shown in the diagram above, when the BCD is updated to the 15th, the first expected billing period ends on 01/15/2025. However, this date falls within the existing billed period from 01/01/2025 to 01/18/2025, which cannot be split due to the irreversible nature of the rating process. As a result, the first usage quantity reset occurs on 01/20/2025 instead of 01/15/2025.

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
    -   U4: 5 units on 01/21/2025
-   Bill Run:
    -   Target Date: 01/22/2025
-   Invoice:
    -   Total Invoice Amount: 5 \* $2 (tier 1 in BP2) = $10
