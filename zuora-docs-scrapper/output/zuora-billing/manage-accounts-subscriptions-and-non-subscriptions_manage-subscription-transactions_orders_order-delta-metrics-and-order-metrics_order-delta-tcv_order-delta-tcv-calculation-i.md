---
title: "Order Delta TCV Calculation I"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-delta-tcv/order-delta-tcv-calculation-i"
product: "zuora-billing"
scraped_at: "2025-12-24T05:26:25.692Z"
---

# Order Delta TCV Calculation I

This topic explains how to calculate Order Delta TCV for RatePlanCharges and Order Line Items, including examples of subscription renewals and additional charges.

When calculating Order Delta Tcv for RatePlanCharges, Zuora compares the differences in TCV between the subscription version before and after the order is placed. For Order Line Items, the delta TCV grossAmount equals the grossAmount of the associated Order Line Item.

Example 1

For example, suppose that you have subscribed a customer to 10 units of your product for 12 months, with a monthly billing period and a list price of $5.00 per unit per month. Then you renew the subscription for another 3 months.

The delta of TCV before and after the Order is $50 per month for an additional 3 months and therefore OrderDeltaTcv = $150 from 2022-01-01 to 2022-03-31.

![Order Delta Tcv](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c1da0314-6d10-4971-a7f9-967222932df7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImMxZGEwMzE0LTZkMTAtNDk3MS1hN2Y5LTk2NzIyMjkzMmRmNyIsImV4cCI6MTc2NjY0MDM4MywianRpIjoiN2NkZGE2MWRlZmU3NDliZWE2MTljMjlhMzkxNjdkM2IiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.AjgtK6PKV9Ca1QZh12CwvEA5t2I-ovTekGK2VQO2PmY)

Order Delta Tcv for this example is shown in the table below:

| StartDate | EndDate | RatePanChargeId | OrderLineItemId | GrossAmount | NetAmount |
| --- | --- | --- | --- | --- | --- |
| 2022-01-01 | 2022-04-01 | 4028fc827a0e48c1017a0e58b9330014(for RPC-1) | null | $150 | $150 |

See Object and Fields for more details about the fields on this object.
