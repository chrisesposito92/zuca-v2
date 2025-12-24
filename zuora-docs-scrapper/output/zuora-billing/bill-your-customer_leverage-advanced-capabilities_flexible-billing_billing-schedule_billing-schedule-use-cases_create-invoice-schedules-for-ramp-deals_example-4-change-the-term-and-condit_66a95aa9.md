---
title: "Example 4: Change the Term and Condition of a ramp deal"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/create-invoice-schedules-for-ramp-deals/example-4-change-the-term-and-condition-of-a-ramp-deal"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:38.329Z"
---

# Example 4: Change the Term and Condition of a ramp deal

Learn how to extend the term of a ramp deal from 36 to 48 months by updating the subscription terms and managing product removals and additions.

The following diagram shows an example of extending the term of the ramp deal of Example 1 from 36 to 48 months through the Terms And Conditions order action, after scheduling a product removal on the term's end date.
Note: You can only extend the term of the ramp in the following condition: The existing charges were not extended or reduced through the Terms And Conditions order action.

![Biling schedule for ramp deal](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a09dfef4-57bf-40f4-adbb-85b67312333f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImEwOWRmZWY0LTU3YmYtNDBmNC1hZGJiLTg1YjY3MzEyMzMzZiIsImV4cCI6MTc2NjY4NzczNiwianRpIjoiOGM5NjllMWI4MTg3NGE0Mjg0ODgxMzhjMmEwZWY3MmQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.sqTk47Tzf-LhT4BswPIHleiTCWp9cFYlWEReNXon1E8)

Suppose you created a ramp deal and invoice schedule, as shown in Example 1 . That means you have finished steps 1 and 2 in Example 1 through Order #1.

Now, you want to renew the contract by extending the term from 36 to 48 months.

To ensure the existing charges are not extended when you extend the term, perform the following steps through Order #2 with the following order actions and settings:

1.  Remove Product A in Ramp Interval 3 with the Effective Date 2026/01/01, so that the existing charges are not extended. For more information, see Remove products from subscriptions .
2.  Update the subscription term from 36 to 48 months and add Ramp Interval 4. For more information, see Change terms and conditions of ramp deals .
3.  Add Product A back with Effective Date 2026/01/01. For more information, see Add products in ramp deals .
4.  Create an Invoice Schedule #2 for Product A in Ramp Interval 4. For more information, see Create Invoice Schedules .

    -   Schedule Item 1: run date 2026/01/01, amount $700

    -   Schedule Item 2: run date 2026/07/01, amount $700
