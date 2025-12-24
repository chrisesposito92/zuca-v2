---
title: "Examples of incorrect use of AND operator for condition and condition groups"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-run-advanced-filter/examples-of-incorrect-use-of-and-operator-for-condition-and-condition-groups"
product: "zuora-billing"
scraped_at: "2025-12-24T08:26:15.013Z"
---

# Examples of incorrect use of AND operator for condition and condition groups

Explore the examples of incorrect use of AND operator for condition and condition groups.

The following picture shows the incorrectly used AND operator for defining the condition for the Account Filter and condition group for the Subscription Filter. In the picture, the AND operator creates conflict conditions. For example, the bill run can not pick up an account whose number equals A00000001 and A00000002 since each account has a unique number. If you want the bill run to pick up the account whose number equals A00000001 and the account whose number equals A00000002, you must use the OR operator instead.

![Advanced Filter Wrong Example](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/cb2d6541-0099-4028-b485-dce202ff2d76?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNiMmQ2NTQxLTAwOTktNDAyOC1iNDg1LWRjZTIwMmZmMmQ3NiIsImV4cCI6MTc2NjY1MTE3MywianRpIjoiNmFiMDgxNzRhMDcwNDNlYjk4NzgyOGQ0MGYxMjkwOTEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.sw5x5gJY0OFCzvawa2cquCAta1c0W7h5qeFgK1Lo-r4)
