---
title: "Order Delta TCB"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-delta-tcb"
product: "zuora-billing"
scraped_at: "2026-02-19T03:12:00.817Z"
---

# Order Delta TCB

This article explains the Order Delta Tcb metric, its calculation, and how to access it through Data Query, highlighting its role in the Order Delta Metrics.

This article introduces the concept and calculation of the Order Delta Tcb metric, and how to access the Order Delta Tcb object and fields through Data Query.

The Order Delta Tcb metric is part of the Order Delta Metrics . If you are still using the previous Order Metrics, see Key Metrics for Orders .

Note:

As of Zuora Billing Release 306, Zuora has updated the methodologies for calculating metrics in Orders . The new methodologies are reflected in the following Order Delta Metrics objects.

-   Order Delta Mrr

-   Order Delta Tcv

-   Order Delta Tcb


It is recommended that all customers use the new Order Delta Metrics. If you are an existing Order Metrics customer and want to migrate to Order Delta Metrics, submit a request at Zuora Global Support . Whereas new customers, and existing customers not currently on Order Metrics, will no longer have access to Order Metrics, existing customers currently using Order Metrics will continue to be supported.

## Order Delta Tcb

The value of an Order Delta Tcb metric is the change in estimated billing over the duration of a RatePlanCharge object as the result of an Order.

For a termed subscription, Order Delta Tcb is generated asynchronously when an Order causes a change to the TCB of one-time or recurring charges. For an evergreen subscription, Order Delta Tcb will not be generated. The metrics are associated with the Order Action that causes the change, and the Rate Plan Charges that the Order Action impacts.

If Order Line Items are present in the Order, Order Delta TCB is generated for the Order Line Items as well, representing the total estimated billing amount for the Order Line Items. Gross and Net amount of Order Delta Tcb will always equal to Order Delta Tcv that is associated with the same Order Line Item.

![Tcb model](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/631a10ed-b736-4464-bb87-e5eb984ac809?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYzMWExMGVkLWI3MzYtNDQ2NC1iYjg3LWU1ZWI5ODRhYzgwOSIsImV4cCI6MTc3MTU1NzExNSwianRpIjoiNzBiYzVjOGExM2FmNGE0YTk5ZTY0ODk1ZTdlZTM0ZmEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.XNGY6gPNR4uVJJpJ6_49dUDrgJE9Bls6W7wIULbu0-E)

Note:

Order Delta Tcb is not generated for evergreen subscriptions.

## Asynchronism

Order Delta Metrics will be generated asynchronously with the order. There could be a delay between the Order submission and metrics generation.
