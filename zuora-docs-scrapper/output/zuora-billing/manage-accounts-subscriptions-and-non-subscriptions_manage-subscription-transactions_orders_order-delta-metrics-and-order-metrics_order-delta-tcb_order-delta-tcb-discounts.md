---
title: "Order Delta TCB - Discounts"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-delta-tcb/order-delta-tcb---discounts"
product: "zuora-billing"
scraped_at: "2025-12-24T05:26:15.353Z"
---

# Order Delta TCB - Discounts

This topic explains how Order Delta Metrics calculates the delta of gross and net TCB, factoring in discounts.

Order Delta Metrics uses the GrossAmount field to store the delta of the gross TCB before and after an order is placed, and uses the NetAmount field to store the delta of TCB net of discounts.

With the above example, if there is also a 20% discount applied to the regular charge, the OrderDeltaTcb becomes:

| StartDate | EndDate | RatePanChargeId | GrossAmount | NetAmount |
| --- | --- | --- | --- | --- |
| 2021-02-16 | 2021-03-01 | 4028fc827a0e48c1017a0e4dccc60002 (for RPC-2) | $30.2 | $24.16 |
| 2021-02-16 | 2021-03-01 | 4028fc827a0e48c1017a0e58b9330014(for RPC-1) | -$23.2 | -$18.56 |

See the following diagram for more details:

![Order Delta Tcb7](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a7ebf19a-6ba3-46ef-bdec-cb9ee8e75564?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE3ZWJmMTlhLTZiYTMtNDZlZi1iZGVjLWNiOWVlOGU3NTU2NCIsImV4cCI6MTc2NjY0MDM3MywianRpIjoiZWZhNTk3MmM2MTNjNGNkYjgyM2YwOGI3MThjN2U5ZTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.roF1UlxeZQcO9GcBKXSHnO4hPxvd81YxvEQN75LsDN0)
