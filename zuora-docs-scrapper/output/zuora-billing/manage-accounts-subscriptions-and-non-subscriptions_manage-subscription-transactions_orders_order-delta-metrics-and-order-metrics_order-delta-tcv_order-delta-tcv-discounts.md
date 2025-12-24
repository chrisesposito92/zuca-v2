---
title: "Order Delta TCV - Discounts"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-delta-tcv/order-delta-tcv---discounts"
product: "zuora-billing"
scraped_at: "2025-12-24T05:26:33.089Z"
---

# Order Delta TCV - Discounts

This topic explains how Order Delta Metrics calculates the delta of TCV, considering discounts applied to regular charges.

Order Delta Metrics uses the GrossAmount field to store the delta of the gross TCV before and after an order is placed, and uses the NetAmount field to store the delta of TCV net of discounts.

When calculating the metrics, Zuora tries to apply discounts to those regular charges that have overlaps with the discount charges.

With the above example, if there is also a 20% discount applied to the regular charge, the OrderDeltaTcv becomes:

| StartDate | EndDate | RatePanChargeId | GrossAmount | NetAmount |
| --- | --- | --- | --- | --- |
| 2021-04-01 | 2022-01-01 | 4028fc827a0e48c1017a0e4dccc60002 (for RPC-2) | $65 | $52 |
| 2021-04-01 | 2022-01-01 | 4028fc827a0e48c1017a0e58b9330014(for RPC-1) | -$50 | -$40 |

The calculation is as shown in the following diagram:

![Order Delta Tcv4](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/574f8b6d-e176-4d7b-8bbe-95c8e2c608a5?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU3NGY4YjZkLWUxNzYtNGQ3Yi04YmJlLTk1YzhlMmM2MDhhNSIsImV4cCI6MTc2NjY0MDM5MSwianRpIjoiNTExYjQ4ZmM5NmRjNDhmZWJhYTMxNzg1ODZkYjcyNzYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.FpJ9EFve_ArJxjHSUub7rGK9ifnflG_HJhOJpnrrMlQ)
