---
title: "Example 2: Add a product in a ramp deal with an invoice schedule"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/create-invoice-schedules-for-ramp-deals/example-2-add-a-product-in-a-ramp-deal-with-an-invoice-schedule"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:33.456Z"
---

# Example 2: Add a product in a ramp deal with an invoice schedule

This task guides you through adding a product to a ramp deal and creating an invoice schedule for a new purchase order.

The following diagram shows an example of adding a product in the ramp deal of Example 1 and creating an invoice schedule specific to the added product.

![Biling schedule for ramp deal](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f3cc4cb0-2f7f-4114-95a5-779997201d56?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImYzY2M0Y2IwLTJmN2YtNDExNC05NWE1LTc3OTk5NzIwMWQ1NiIsImV4cCI6MTc2NjY4NzczMSwianRpIjoiOTIxNGEyODBlYTYxNDlmMGJjMmM5MTBiM2YxOGE1MGQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.75O2Q8l65f6dA6WPBz1tPS2mPAEVxg48DGAkfvP2jv4)

Suppose you created a ramp deal and invoice schedule, as shown in Example 1 . That means you have finished steps 1 and 2 in Example 1.

Now, you want to create a new invoice schedule for the new purchase order with a $1200 contract amount, so you add a product in Ramp Interval 2.

To add a product in Ramp Interval 2, perform the following steps:

1.  Add Product B, starting on 2024-01-01, with a charge price of $600/year. For more information, see Add products in ramp deals .
2.  Create a new invoice schedule, Schedule #2, for the new purchase order with the following two schedule items. For more information, see Create Invoice Schedules .

    -   Schedule Item 1: run date 2024/01/01, amount $600

    -   Schedule Item 2: run date 2025/01/01, amount $600


3.  Optional. If you want to create a combined invoice for two invoice schedules with the same run dates, specify the Invoice Separately list to False on the invoice schedules. So that schedule items from Invoice Schedule #1 and #2 can be merged into one invoice when they have the same run dates.

The following invoices and underneath invoice items are generated for the preceding schedule items:

-   Invoice #1, $600

    -   Product A: 2023/01/01 - 2023/08/07

-   Invoice #2, $600

    -   Product A: 2023/08/07 - 2023/12/31

    -   Product A: 2024/01/01 - 2024/02/29

-   Invoice #3, $1800

    -   Product A: 2024/03/01 - 2024/12/31

    -   Product A: 2025/01/01 - 2025/02/20

    -   Product B: 2024/01/01 - 2024/12/31

-   Invoice #4, $1800

    -   Product A: 2025/02/21 - 2025/12/31

    -   Product B: 2025/01/01 - 2025/12/31
