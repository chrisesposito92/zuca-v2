---
title: "Overview of Order Delta Metrics"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/overview-of-order-delta-metrics"
product: "zuora-billing"
scraped_at: "2025-12-24T05:25:41.112Z"
---

# Overview of Order Delta Metrics

Order Delta Metrics quantify changes in key metrics resulting from Order Actions, impacting subscriptions and Rate Plan Charges.

Order Delta Metrics represent the changes in key metrics as the result of an Order. Orders are composed of:

-   Order Actions that create or change subscriptions.

-   Order Line Items that represent fees for physical goods or non-recurring services.


Order Delta Metrics are tied to the corresponding Order Action that generates them, as well as to the Rate Plan Charge objects that the Order Action impacts. If there is no change in subscription metrics, an Order Action will not generate order metrics.

For each Order Line Item within an Order, OrderDeltaTcv, and OrderDeltaTcb metrics are generated.

For example, if you use an Update product Order Action to change the unit price of a recurring product that a customer has subscribed to, Zuora creates an OrderDeltaMrr metric to represent the delta value between the updated Monthly Recurring Revenue (MRR) and the previous value as a result of the change. In other words, the value of the OrderDeltaMrr metric is the updated value of MRR minus the previous value of MRR for that Rate Plan Charge.

See the following diagram for an example calculation. In this example, OrderDeltaMrr is 10 between 2021-04-01 and 2021-06-01.

![Order Delta Metrics](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/bad79bb7-0e4e-4c29-96de-1c891a65d815?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJhZDc5YmI3LTBlNGUtNGMyOS05NmRlLTFjODkxYTY1ZDgxNSIsImV4cCI6MTc2NjY0MDMzOSwianRpIjoiZDIzNTdiYzU2MGRkNGQwY2FjN2EzYTNhODM5YWMyMmUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.y18baQ7VHphcYpNQIszWoQhzyJEW_SVc6Wz9Qz6AbPs)

Similarly, in the case of Add product Order Action, the value of the corresponding OrderDeltaMrr is the MRR of the newly added product minus the previous MRR value of the product (Zero). Therefore, the Order Delta Mrr value equals the MRR value of the product the customer has subscribed to.

See the following diagram for another calculation example of Order Delta Mrr. In this example, OrderDeltaMrr is 20 between 2021-01-01 and 2021-06-01.

![Order Delta Metrics2](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6db93db2-975e-4e0b-87a5-ea2381389297?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZkYjkzZGIyLTk3NWUtNGUwYi04N2E1LWVhMjM4MTM4OTI5NyIsImV4cCI6MTc2NjY0MDMzOSwianRpIjoiMTU5ZjZmN2FlMTAzNGFkY2I1Mzg4Mzg3YTc3ZjIzY2YiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.FYLwv0PkAz3RpJGpRCskuZ_rsfyXl9-oTTQ7vicjJ3g)

An order action might impact multiple Rate Plan Charge objects, in which case multiple Order Delta Metrics will be generated.

| Order Metric | Key Subscription Metric |
| --- | --- |
| Order Delta Mrr | The change in Monthly Recurring Revenue (MRR) of a RatePlanCharge as the result of an Order. |
| Order Delta Tcb | The change in estimated billing over the duration of a RatePlanCharge or an Order Line Item as the result of an Order. |
| Order Delta Tcv | The change in Total Contract Value (TCV) of a RatePlanCharge or an Order Line Item as the result of an Order. |
| Order Delta Quantity | The change in quantity of a RatePlanCharge or an Order Line Item as the result of an Order. |

Note:

Order Delta Metrics are generated asynchronously with the Orders.
