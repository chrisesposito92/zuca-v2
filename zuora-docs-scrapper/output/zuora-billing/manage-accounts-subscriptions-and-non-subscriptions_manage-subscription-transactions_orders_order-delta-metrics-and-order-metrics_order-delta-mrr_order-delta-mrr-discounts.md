---
title: "Order Delta MRR - Discounts"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-delta-mrr/order-delta-mrr---discounts"
product: "zuora-billing"
scraped_at: "2025-12-24T05:25:54.480Z"
---

# Order Delta MRR - Discounts

Order Delta Metrics calculates the impact of discounts on the gross and net Monthly Recurring Revenue (MRR) by applying them to overlapping regular charges.

Order Delta Metrics uses the GrossAmount field to store the delta of the gross MRR before and after an order is placed, and uses the NetAmount field to store the delta of MRR net in discounts.

When calculating the metrics, Zuora tries to apply discounts to those regular charges that have overlaps with the discount charges.

With Example 2 above, if there is also a 20% discount (a percentage discount charge) applied to the regular charge, the OrderDeltaMrr becomes:

| StartDate | EndDate | RatePanChargeId | GrossAmount | NetAmount |
| --- | --- | --- | --- | --- |
| 2021-04-01 | 2022-01-01 | 4028fc827a0e48c1017a0e4dccc60002 (for RPC-2) | $65 | $52 |
| 2021-04-01 | 2022-01-01 | 4028fc827a0e48c1017a0e58b9330014(for RPC-1) | -$50 | -$40 |

The calculation is as shown in the following diagram:

![Order Delta Mrr3](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7159db58-1aca-4691-98ad-51c775cbb53c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjcxNTlkYjU4LTFhY2EtNDY5MS05OGFkLTUxYzc3NWNiYjUzYyIsImV4cCI6MTc2NjY0MDM1MiwianRpIjoiODc1YTVjY2IyYzExNGU5NDhiN2UwMWE0YjY0MTgzMTEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.eNAv8IdvS-O5qWI7LJXKCsxDiye1yMTSpNkZlV6TmoU)
