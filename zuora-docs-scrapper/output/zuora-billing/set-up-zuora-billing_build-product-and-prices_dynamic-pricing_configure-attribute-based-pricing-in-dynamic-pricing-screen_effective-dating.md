---
title: "Effective dating"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/configure-attribute-based-pricing-in-dynamic-pricing-screen/effective-dating"
product: "zuora-billing"
scraped_at: "2025-12-24T05:01:52.147Z"
---

# Effective dating

Effective dating in Dynamic Pricing allows for time-based price conditions, enabling different prices for the same attribute across various date ranges. If no effective date is specified, the current UTC timestamp is applied by default.

Dynamic Pricing supports effective dating, which allows you to define time-based price conditions in the Decision Table. You can specify different prices for the same attribute condition across different date ranges. If no effective date is explicitly provided, Zuora applies the current UTC timestamp by default.

Note:

You cannot backdate changes; effective dates can only be set for the present or future.

| SaleType | Customer Country | Effective Date (UTC) | Price (USD) |
| --- | --- | --- | --- |
| Direct | Italy | 2025-09-10T20:44:10 → 2025-10-01 | 11 |
| Direct | Italy | 2025-10-01T20:44:10 → 2025-10-15 | 13 |
| Direct | Italy | 2025-10-15T20:44:10 onward | 12 |

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ce28c244-17e5-4bed-a1c6-d9e8989a4807?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNlMjhjMjQ0LTE3ZTUtNGJlZC1hMWM2LWQ5ZTg5ODlhNDgwNyIsImV4cCI6MTc2NjYzODkxMSwianRpIjoiMTcxMjQ5ZjMzYWNjNGI0ZDg0MzRhMjBiM2NkMzg0ZDMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.mNTz2pR2aRNcga9T6spJIzk05mNAb6tDjfjVa74MsUA)

This would result in:

-   Subscriptions created before Oct 1 use $11.

-   Subscriptions created between Oct 1–15 use $13.

-   Subscriptions created after Oct 15 use $12.


When a customer renews a subscription created with a Dynamic Pricing charge, Zuora checks the catalog at the time of renewal. The renewal subscription uses the current effective price from the Decision Table, and the original subscription's price is not carried over unless the effective date condition is still valid. For example, if an original subscription was created on September 15 at a price of $11, then the renewal planned on October 5th will be based on the updated effective date range at the price of $13.
