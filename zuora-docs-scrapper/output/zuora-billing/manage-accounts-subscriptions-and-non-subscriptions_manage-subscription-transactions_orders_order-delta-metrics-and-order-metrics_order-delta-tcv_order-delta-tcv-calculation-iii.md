---
title: "Order Delta TCV Calculation III"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-delta-tcv/order-delta-tcv-calculation-iii"
product: "zuora-billing"
scraped_at: "2025-12-24T05:26:30.490Z"
---

# Order Delta TCV Calculation III

This section provides an example of calculating Total Contract Value (TCV) adjustments when subscription quantities change over a billing period.

Example 3

For another example, suppose that you have subscribed a customer to 10 units of your product for 12 months, with a monthly billing period and a list price of $5.00 per unit per month. The corresponding Rate Plan Charge (actually the charge segment RPC-1) will have a TCV of $600 ($5 per unit per month × 10 units × 12 months) from 2021-01-01 to 2021-12-31.

After 3 months, you place an order and increase the quantity to 13 units, so that the TCV of the Rate Plan Charge becomes $735 = ($5 per unit per month × 10 units × 3 months) + ($5 per unit per month × 13 units × 9 months).

The above changes are interpreted as an OrderDeltaTcv of -$450 for RPC-1 between 04-01 to 12-31, due to the fact that the duration of RPC-1 has shrunk; and an OrderDeltaTcv of $585 for RPC-2 between 04-01 to 12-31, because Zuora creates a new RatePlanCharge object for the new price from 04-01 to 12-31, as shown below.

![Order Delta Tcv3](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8b5584e1-449d-4ce1-85b6-da00ff6f4a6b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhiNTU4NGUxLTQ0OWQtNGNlMS04NWI2LWRhMDBmZjZmNGE2YiIsImV4cCI6MTc2NjY0MDM4OCwianRpIjoiMmU5YTcxZWFiZWYyNDZiM2FhMjI1YjFhMTZiYTQ0MjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.8wK2e7rH3MgHdpEUDKE9Dg8ukJHt8Lm2-HZhAvhDRvs)

| StartDate | EndDate | RatePanChargeId | GrossAmount | NetAmount |
| --- | --- | --- | --- | --- |
| 2021-04-01 | 2022-01-01 | 4028fc827a0e48c1017a0e4dccc60002 (for RPC-2) | $585 | $585 |
| 2021-04-01 | 2022-01-01 | 4028fc827a0e48c1017a0e58b9330014(for RPC-1) | -$450 | -$450 |

See Object and Fields for more details about the fields on this object.
