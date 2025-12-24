---
title: "Order Delta TCB Calculation III"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-delta-tcb/order-delta-tcb-calculation-iii"
product: "zuora-billing"
scraped_at: "2025-12-24T05:26:12.986Z"
---

# Order Delta TCB Calculation III

This document provides details on calculation parameters including StartDate, EndDate, RatePanChargeId, GrossAmount, and NetAmount. Refer to the Object and Fields section for more information.

Example 3

For another example, suppose that you have subscribed a customer to 10 units of your product for 2 months, with a monthly billing period and a list price of $5.00 per unit per month. The charge starts on the 1st and the billing period starts on the 16th.

The corresponding Rate Plan Charge (actually the charge segment RPC-1) will have a TCB of $97.4 = $50(1 full billing period) + $24.2 (for the starting partial period, 50\*15/31, 15=\[2021-01-01, 2021-01-15\], 31=\[2020-12-16, 2021-01-15\]) + $23.2 (for the ending partial period, 50\*13/28, 13=\[2021-02-16, 2021-02-28\], 28=\[2021-02-16, 2021-03-15\]) from 2021-01-01 to 2021-03-01.

After one and half months, you place an order and increase the quantity to 13 units from 2021-02-16, so that the TCB of the Rate Plan Charge becomes $104.4 = $50(1 full billing period) + $24.2 (for the starting partial period, 50\*15/31) + $30.2 (for the ending partial period, 65\*13/28).

The above changes are interpreted as an OrderDeltaTcb of -$23.2 for RPC-1 between 02-16 to 03-01, due to the fact that the duration of RPC-1 has shrunk; and an OrderDeltaTcb of $30.2 for RPC-2 between 02-16 to 03-01, because Zuora creates a new RatePlanCharge object for the new price from 02-16 to 03-01, as shown below.

![Order Delta Tcb6](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/60592a68-3fb9-4231-846d-0eab5a20e94d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYwNTkyYTY4LTNmYjktNDIzMS04NDZkLTBlYWI1YTIwZTk0ZCIsImV4cCI6MTc2NjY0MDM3MCwianRpIjoiMzk3YmM5MmFiYWY2NDkxMTgwMzA0ZDg0MzdjYWM2Y2EiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.BwMd-eaI2Uj3FnGdipcGSDNdj1lxmm6M-fegXVmyaOw)

| StartDate | EndDate | RatePanChargeId | GrossAmount | NetAmount |
| --- | --- | --- | --- | --- |
| 2021-02-16 | 2021-03-01 | 4028fc827a0e48c1017a0e4dccc60002 (for RPC-2) | $30.2 | $30.2 |
| 2021-02-16 | 2021-03-01 | 4028fc827a0e48c1017a0e58b9330014(for RPC-1) | -$23.2 | -$23.2 |

See Object and Fields for more details about the fields on this object.
