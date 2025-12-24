---
title: "Order Delta MRR Calculation II"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-delta-mrr/order-delta-mrr-calculation-ii"
product: "zuora-billing"
scraped_at: "2025-12-24T05:25:51.493Z"
---

# Order Delta MRR Calculation II

This topic explains the calculation of Monthly Recurring Revenue (MRR) and OrderDeltaMrr changes when subscription quantities are adjusted over time.

See Object and Fields for more details about the fields on this object.

Example 2

If there's also an one-off renewal service charge of $50 occurring on the renewal date, represented by an Order Line Item whose transaction date is set to be 2022-01-01. There will be an additional Order Delta Tcb generated for the Order Line Item.

![Order Delta Tcb5](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2c7266ad-ab45-4fdb-b527-f19609ad0d58?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJjNzI2NmFkLWFiNDUtNGZkYi1iNTI3LWYxOTYwOWFkMGQ1OCIsImV4cCI6MTc2NjY0MDM0OSwianRpIjoiM2ZiYWVjM2Q0ZWI0NGFlN2I5OTE3MTcyYWE1MTExNTYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.F0SqSr52ZmMcT1FkBajB7t3YSCrqk6kfPD3yt2whHuQ)

| StartDate | EndDate | RatePanChargeId | GrossAmount | NetAmount |
| --- | --- | --- | --- | --- |
| 2021-04-01 | 2022-01-01 | 4028fc827a0e48c1017a0e4dccc60002 (for RPC-2) | $65 | $65 |
| 2021-04-01 | 2022-01-01 | 4028fc827a0e48c1017a0e58b9330014(for RPC-1) | -$50 | -$50 |

See Object and Fields for more details about the fields on this object.
