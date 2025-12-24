---
title: "Updated BCD earlier than original BCD"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/rating/on-demand-usage-rating/changing-bill-cycle-day/updated-bcd-earlier-than-original-bcd"
product: "zuora-billing"
scraped_at: "2025-12-24T08:27:28.273Z"
---

# Updated BCD earlier than original BCD

When the updated bill cycle date (BCD) is earlier than the original BCD and equal to or later than the billed date, the current and upcoming billing periods are affected.

For example, if you changed the BCD on the customer account from the 20th to the 19th, the new billing periods are as follows:

-   BP1: From 01/01/2025 (inclusive) to 01/19/2025 (exclusive)
-   BP2: From 01/19/2025 (inclusive) to 02/19/2025 (exclusive)
-   BP3: From 02/19/2025 (inclusive) to 03/19/2025 (exclusive)
-   BP4: From 03/19/2025 (inclusive) to 04/01/2025 (exclusive)

![Usage quantity reset dates](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/25cfb4fd-8105-468c-8ea9-fdcfc9876b9a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI1Y2ZiNGZkLTgxMDUtNDY4Yy04ZWE5LWZkY2ZjOTg3NmI5YSIsImV4cCI6MTc2NjY1MTI0NiwianRpIjoiOGUzMDNjN2U2YzIyNGQxZWIyYWIzMzJmZTc3MDg2ODQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.9aggROa3-OGljBmBRkWjZ_Bn42gLGAh38h9s3hAaLOE)

For a tiered on-demand usage charge model, the usage quantity will reset on 01/19/2025, 02/19/2025, and 03/19/2025 .

The same logic applies if you change the BCD to the 18th, which is the same as the billed date.

The following examples explain how invoice amount is calculated for different scenarios.

Example 1:

-   Uploaded usage records:
    -   U3: 5 units on 01/18/2025
-   Bill Run:
    -   Target Date: 01/19/2025
-   Invoice:
    -   Total Invoice Amount: (10 \* $2 + (5 + 5) \* $3) - $35 = $15

Example 2:

-   Uploaded usage records:
    -   U4: 5 units on 01/20/2025
-   Bill Run:
    -   Target Date: 01/21/2025
-   Invoice:
    -   Total Invoice Amount: 5 \* $2 (tier 1 in BP2) = $10
