---
title: "Orders object model"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/orders-object-model"
product: "zuora-billing"
scraped_at: "2026-02-19T03:11:37.758Z"
---

# Orders object model

This topic details the objects and actions used to create and manage orders in Zuora, including their relationships and key metrics.

This article describes the objects used to support Orders . The objects provide essential information needed to create and maintain orders in Zuora.

The following diagram summarizes the Orders objects and their relationships. For the summary of all Zuora key objects, refer to Zuora Business Object Model .

![Order Objects Relationship-Nov2023](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/07b958e5-8920-4b56-a08e-5374001c6d0c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjA3Yjk1OGU1LTg5MjAtNGI1Ni1hMDhlLTUzNzQwMDFjNmQwYyIsImV4cCI6MTc3MTU1NzA5NSwianRpIjoiZmZkNmViZGU0ZGZmNGJhOGExZDExMTljMjdiMDU5OGMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.Lxi8dgRIUr06XK-7gChWj8Detip1Unz4qY7ZqBiG5PI)

Order actions operate at the subscription level or at the rate plan level.

-   One rate plan level order action affects one rate plan. Rate plan level order action types include Add Product, Remove Product, and Update Product.

-   One subscription level order action affects one or more rate plans. Subscription level order action types include Create Subscription, Renewal, Cancelation, Terms and Conditions, Owner Transfer, Suspend, and Resume.


Order Line Items are non subscription based items created by an Order, representing transactional charges such as fees, professional services, or physical goods that are not sold as subscription services.

The following table lists the objects in Orders.

| Object Label | Object Name | Description |
| --- | --- | --- |
| Order | Order | Represents an agreement between a merchant and a customer, which creates or changes one or more Subscriptions.An Order is owned by a single Billing Account.Corresponding data source: Order |
| Order Action | OrderAction | Represents the actions that are done on subscriptions, for example, create a subscription in an order, add a product, cancel, renew. Each order action operates against one subscription.Each order contains one or more order actions.The following types of Order Actions are supported:New SubscriptionUpdateAdd ProductRemove ProductUpdate ProductRenewChange Terms & ConditionsSuspendResumeCorresponding data source: Order Action |
| Order Line Item | OrderLineItem | A non subscription based item created by an Order, representing transactional charges such as one-time fees, physical goods, or professional service charges that are not sold as subscription services.For more information, see Order Line Items . |
| Fulfillment | Fulfillment | A fulfillment is created and attached to an order line item to track the shipment or return status of the order line item.For more information, see Order Line Items . |
| Fulfillment Item | FulfillmentItem | A fulfillment item is created and attached to a fulfillment to keep track of all the assets in your system.For more information, see Order Line Items . |
| Order Delta Mrr | OrderDeltaMrr | Indicates the change in MRR of a Rate Plan Charge as the result of an Order. For more information, see Order Delta Mrr . |
| Order Delta Tcv | OrderDeltaTcv | Indicates the change in TCV of a Rate Plan Charge as the result of an Order.If Order Line Items are also present in the Order, Order Delta TCV will be generated for the Order Line Items as well, representing the total contracted value for the Order Line Items.For more information, see Order Delta Tcv . |
| Order Delta Tcb | OrderDeltaTcb | Indicates the change in estimated billing over the duration of a Rate Plan Charge as the result of an Order.If Order Line Items are present in the Order, Order Delta TCB is generated for the Order Line Items as well, representing the total estimated billing amount for the Order Line Items. Gross and Net amount of Order Delta Tcb will always equal to Order Delta Tcv that is associated with the same Order Line Item.For more information, see Order Delta Tcb . |
| Order Quantity | OrderQuantity | Indicates how a given Order Action has changed quantity for each charge.The Order Quantity metric is only created for non-zero changes in the quantity. Metrics are tied to each Order Action, which are then linked to Orders.Corresponding data source: Order Quantity |
| Ramp | Ramp | The native Ramp in your Order to enable reporting Ramp Metrics for your ramp deals. See Overview of Ramps and Ramp Metrics . |
| Ramp Interval | RampInterval | The time-based periods (inside a Ramp) where products or pricing can change. See Overview of Ramps and Ramp Metrics . |
| Ramp Interval Metrics | RampIntervalMetrics | The metrics container for the TCB, TCV, and Quantity metrics at the Interval level. See Key Metrics for Ramps . You can get these metrics through the Preview order REST API operation and all the get ramp metrics REST API operations. |
| Ramp Interval MRR | RampIntervalMRR | The lowest level of granularity for MRR in Ramp Metrics. See Key Metrics for Ramps. See Key Metrics for Ramps . You can get these metrics through the Preview order REST API operation and all the get ramp metrics REST API operations. |
| Ramp Interval Delta Metrics | RampIntervalDeltaMetrics | The metrics container for the Delta TCB and Delta TCV metrics in the Interval level. See Key Metrics for Ramps . You can get these metrics through the Preview order REST API operation and all the get ramp metrics REST API operations. |
| Ramp Interval Delta MRR | RampIntervalDeltaMRR | The Delta MRR metrics at the Interval level. See Key Metrics for Ramps . You can get these metrics through the Preview order REST API operation and all the get ramp metrics REST API operations. |
| Ramp Interval Delta Quantity | RampIntervalDeltaQuantity | The Delta Quantity metrics at the Interval level. See Key Metrics for Ramps . You can get these metrics through the Preview order REST API operation and all the get ramp metrics REST API operations. |
