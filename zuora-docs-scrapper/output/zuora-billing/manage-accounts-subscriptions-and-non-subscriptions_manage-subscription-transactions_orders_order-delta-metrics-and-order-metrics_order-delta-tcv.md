---
title: "Order Delta TCV"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-delta-tcv"
product: "zuora-billing"
scraped_at: "2026-02-20T17:31:11.467Z"
---

# Order Delta TCV

This topic explains the Order Delta Tcv metric, its calculation, and how to access it through Data Query, highlighting its role in the new Order Delta Metrics.

The Order Delta Tcv metric is part of the Order Delta Metrics . If you are still using the previous Order Metrics, see Key Metrics for Orders .

Note:

As of Zuora Billing Release 306, Zuora has updated the methodologies for calculating metrics in Orders . The new methodologies are reflected in the following Order Delta Metrics objects.

-   Order Delta Mrr

-   Order Delta Tcv

-   Order Delta Tcb


It is recommended that all customers use the new Order Delta Metrics. If you are an existing Order Metrics customer and want to migrate to Order Delta Metrics, submit a request at Zuora Global Support . Whereas new customers, and existing customers not currently on Order Metrics, will no longer have access to Order Metrics, existing customers currently using Order Metrics will continue to be supported.

## Order Delta Tcv

The value of an Order Delta Tcv metric is the change in TCV of a RatePlanCharge as the result of an Order.

For a termed subscription, Order Delta Tcv is generated asynchronously when an Order causes a change to the TCV of one-time or recurring charges. For an evergreen subscription, Order Delta Tcv is generated asynchronously when an Order causes a change to the TCV of one-time charges. The metrics will be associated with the Order Action that causes the change, and the rate plan charges that the action impacts. If there are also Order Line Items in the Order, Order Delta Tcv will be generated for the Order Line Items as well, representing the total contracted value for the Order Line Items.

![Tcv model](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4b996333-fde3-4d76-b6d1-e5db1ec1674f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRiOTk2MzMzLWZkZTMtNGQ3Ni1iNmQxLWU1ZGIxZWMxNjc0ZiIsImV4cCI6MTc3MTY5NTA2NSwianRpIjoiNDQxZjIyZWI2NGJlNGJmZDk5ZGE5ZDU3ZjEyYTVlYmIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.8DcZGiH0N4-8FYmsi4-i1hzaaQL6lmEPHuokHC2NnM4)

Note:

Order Delta Tcv is not generated for evergreen subscriptions.

## Asynchronism

Order Delta Metrics will be generated asynchronously with the Order. There could be a delay between the Order submission and metrics generation.
