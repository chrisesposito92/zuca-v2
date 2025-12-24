---
title: "Bill Run Advanced Filter involving order line items and invoice schedules"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-run-advanced-filter/bill-run-advanced-filter-involving-order-line-items-and-invoice-schedules"
product: "zuora-billing"
scraped_at: "2025-12-24T08:26:13.163Z"
---

# Bill Run Advanced Filter involving order line items and invoice schedules

Understand how to use the Account and Subscription Filters to create bill runs that include order line items and invoice schedules, with examples demonstrating the billing process for different account scenarios.

When you use the Account Filter and Subscription Filter to create bill runs, the order line items and invoice schedules associated with the accounts and subscriptions will be picked up and billed.

Suppose your tenant only has the following four accounts:

-   Name: Account 1, including an order line item

-   Name: Account 2, including an invoice schedule

-   Name: Account 3, including subscription 1

-   Name: Account 4, including subscription 2


The following examples show you how the order line items and invoice schedules are billed.

## Example 1: Use Account Filter to create bill runs involving order line items and subscriptions

In the Account Filter section, you create a custom filter as follows.

![Advanced Filter Example](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/92d7f3de-93a5-427d-b522-da4d695b0fab?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjkyZDdmM2RlLTkzYTUtNDI3ZC1iNTIyLWRhNGQ2OTViMGZhYiIsImV4cCI6MTc2NjY1MTE3MSwianRpIjoiNTA4MTM2MmMyMjAxNDIyZDg5OTU0NDAzNWFmZTRmMmUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.w5CxxJyKE2cXlir9SSoclfBWyFkXL-MwqQCKx9c0o8g)

After creating the bill run, the order line item and subscription 1 in Accounts 1 and 3 are billed.

## Example 2: Use Subscription Filter to create bill runs involving order line items, invoice schedules, and subscriptions

In the Subscription Filter section, you create a custom filter as follows.

![Advanced Filter Example](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/163f7897-e3d8-4c2e-828f-123615164d84?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE2M2Y3ODk3LWUzZDgtNGMyZS04MjhmLTEyMzYxNTE2NGQ4NCIsImV4cCI6MTc2NjY1MTE3MSwianRpIjoiYjhhMGU0OTQ5YTc0NDczODk5ZTBlZDAyYzUwMWIwMjEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.z5jl3ltdEBUWPXHLKu5Ammv-NC3TEugry3Z3nD6GEPo)

Note:

In this example, only Account 3 subscribes to the Apple App Store, and meets the above subscription level condition.

After creating the bill run, the order line item, invoice schedule, and subscription 1 in Accounts 1-3 are billed.

This is because the Account Filter is not specified, Accounts 1-4 are all picked up by default. When the filter narrows down to the subscription level, the following happens:

-   Since Accounts 1 and 2 are not associated with any subscriptions, they are not impacted by the subscription condition and are still picked up, and thus, the associated order line item and invoice schedule are billed.

-   For Accounts 3 and 4, based on the condition Chanel = Apple App Store, only Account 3 matches the subscription condition, Subscription 1 is picked up and billed, but Subscription 2 is filtered out.
