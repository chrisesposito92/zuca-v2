---
title: "Example 1: Create a ramp deal with an invoice schedule"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/create-invoice-schedules-for-ramp-deals/example-1-create-a-ramp-deal-with-an-invoice-schedule"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:31.037Z"
---

# Example 1: Create a ramp deal with an invoice schedule

This task provides a step-by-step guide to creating an invoice schedule for a 3-year ramp deal, including setting up ramp intervals and schedule items.

The following diagram shows a basic example of creating an invoice schedule for a 3-year ramp deal.

![Biling schedule for ramp deal](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/65b038c5-eec3-4c1c-b22e-7a1e3b9f549b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY1YjAzOGM1LWVlYzMtNGMxYy1iMjJlLTdhMWUzYjlmNTQ5YiIsImV4cCI6MTc2NjY4NzcyOCwianRpIjoiMTI1OThhZjQ1ZDUxNDc0YTliMTNlNjg1NjBkODA2MTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.p6aRb9C5F3BZEDdz3ZsPOlXJda19xBdv6ptvlgTFREE)

To create an invoice schedule for the ramp deal, perform the following steps:

1.  Create a 3-year ramp deal containing an annual recurring rate plan charge with the following three ramp intervals. For more information, see Create a Ramp Deal.

    -   Interval 1 start date: 2023/01/01, end date: 2023/12/31, charge price: $1000/year

    -   Interval 2 start date: 2024/01/01, end date: 2024/12/31, charge price: $1200/year

    -   Interval 3 start date: 2025/01/01, end date: 2025/12/31, charge price: $1400/year


2.  Create Invoice Schedule #1 with the following four schedule items. For more information, see Create Invoice Schedules .

    -   Schedule Item 1: run date 2023/01/01, amount $600

    -   Schedule Item 2: run date 2023/06/01, amount $600

    -   Schedule Item 3: run date 2024/01/01, amount $1200

    -   Schedule Item 4: run date 2025/01/01, amount $1200



The following invoices and underneath invoice items are generated for the preceding schedule items:

-   Invoice #1, $600

    -   Product A: 2023/01/01 - 2023/08/07

-   Invoice #2, $600

    -   Product A: 2023/08/07 - 2023/12/31

    -   Product A: 2024/01/01 - 2024/02/29

-   Invoice #3, $1200

    -   Product A: 2024/03/01 - 2024/12/31

    -   Product A: 2025/01/01 - 2025/02/20

-   Invoice #4, $1200

    -   Product A: 2025/02/21 - 2025/12/31


As follows, Invoice #1 and Invoice #2 are used to explain how dates are calculated:

-   For Invoice #1, according to the amount of $600, Zuora calculates and displays the actual time period 2023/01/01 - 2023/08/07 in Ramp Interval 1, which consumes the amount of $600.

-   For Invoice #2, according to the amount of $600, Zuora calculates and displays the actual time periods 2023/08/07 - 2023/12/31 (in Ramp Interval 1 with rest of $400) and 2024/01/01 - 2024/02/29 (in Ramp Interval 2 with day consumption $1200/365), which together consume the amount close but not more than $600.
