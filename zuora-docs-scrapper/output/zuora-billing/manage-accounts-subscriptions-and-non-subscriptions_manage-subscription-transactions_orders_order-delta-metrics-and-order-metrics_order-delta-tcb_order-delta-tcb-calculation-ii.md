---
title: "Order Delta TCB Calculation II"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-delta-tcb/order-delta-tcb-calculation-ii"
product: "zuora-billing"
scraped_at: "2025-12-24T05:26:09.836Z"
---

# Order Delta TCB Calculation II

This section details calculations involving Rate Plan Charges, including examples of billing periods, charge segments, and adjustments in Total Chargeable Billing (TCB) due to changes in order quantities.

If there's also an one-off renewal service charge of $50 occurring on the renewal date, represented by an Order Line Item whose transaction date is set to be 2022-01-01. There will be an additional Order Delta Tcb generated for the Order Line Item.

![Orderdelta tcb](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2c7266ad-ab45-4fdb-b527-f19609ad0d58?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJjNzI2NmFkLWFiNDUtNGZkYi1iNTI3LWYxOTYwOWFkMGQ1OCIsImV4cCI6MTc2NjY0MDM2NywianRpIjoiNjZiYTcxZDYwZGI5NDNlMGJkZTdlYWQzNmQ2NjMxZWUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.gSYbuWKxJcgteqyBiO21FBWNcHpXz4KXBNVQcqfrvi8)

Order Delta Tcbs for this example will be:

| StartDate | EndDate | RatePanChargeId | OrderLineItemId | GrossAmount | NetAmount |
| --- | --- | --- | --- | --- | --- |
| 2022-01-01 | 2022-04-01 | 4028fc827a0e48c1017a0e58b9330014(for RPC-1) | null | $150 | $150 |
| 2022-01-01 | 2022-01-02 | null | 4028fc827a0e48c1017a0e58b9330014(for OLI-1) | $50 | $50 |

See Object and Fields for more details about the fields on this object.
