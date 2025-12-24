---
title: "Example 3: Replace a product in the middle of a ramp interval"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/create-invoice-schedules-for-ramp-deals/example-3-replace-a-product-in-the-middle-of-a-ramp-interval"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:35.769Z"
---

# Example 3: Replace a product in the middle of a ramp interval

This task demonstrates how to replace a product in the middle of a ramp interval and create an invoice schedule for the updated product.

The diagrams in this section show an example of replacing a product in the middle of Ramp Interval 2 and creating an invoice schedule specific to the updated product.

Suppose your end customer purchased a product with a perpetual license, naming Product A, as shown in the following diagram.

![Biling schedule for ramp deal](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/422c3bca-f3ff-44a8-8b7a-b58308c28b9f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQyMmMzYmNhLWYzZmYtNDRhOC04YjdhLWI1ODMwOGMyOGI5ZiIsImV4cCI6MTc2NjY4NzczNCwianRpIjoiM2Y1ZDIzNzcwZDVmNDU2MWEzYTVjNWExODAwN2NmYjQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.gUJ4S3izvistdiFSN1j0kUZNZtVKSzbl1AZnjEB4CfE)

You added Product A through Order #1 with the following order action and settings. For more information, see Create a Ramp Deal .

Order Action: Create Subscription

-   Term Start: 2023/01/01

-   Term End Date: 2026/01/01

-   Product A (perpetual license)


You billed the product using a regular billing period or invoice schedule and have fully billed the perpetual license fee.

Later, your end customer decides to switch to SaaS, for example, on 2024-07-01, naming Product B.

![Biling schedule for ramp deal](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7d11ba37-7e9f-4111-8543-ec3cddbf1d9e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdkMTFiYTM3LTdlOWYtNDExMS04NTQzLWVjM2NkZGJmMWQ5ZSIsImV4cCI6MTc2NjY4NzczNCwianRpIjoiMGZlYjZkMDQwNDUxNDI2ZDhkMTllNzE2ZjIzZGI4NTUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.ZOe9FC0sAz92Scsqrsqj3d5l-lYuyGzaHFcESGlpEyw)

To replace Product A with Product B, perform the following steps:

1.  Remove Product A and add Product B through Order #2 with the following order actions and settings.

    -   Order Action: Remove Product A (perpetual license)

        -   Effective Date: 2024/07/01

    -   Order Action: Add Product B (SaaS) For more information, see Remove products from subscriptions and Add products in ramp deals .

        -   Start Date: 2024/07/01

        -   Charge End Date: Aligned to subscription end date


2.  Create Invoice Schedule #2 for Product B in Ramp Intervals 2 and 3. For more information now, see Create Invoice Schedules .

    -   Schedule Item 1: run date 2024/07/01, amount $3000

    -   Schedule Item 2: run date 2025/02/01, amount $6000


    Note: In this example, since Product A with the perpetual license has been fully billed, the invoice schedule will generate a credit memo for its removed period.
