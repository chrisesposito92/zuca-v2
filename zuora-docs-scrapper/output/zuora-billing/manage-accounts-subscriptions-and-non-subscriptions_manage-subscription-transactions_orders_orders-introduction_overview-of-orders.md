---
title: "Overview of Orders"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders"
product: "zuora-billing"
scraped_at: "2026-02-20T17:30:55.182Z"
---

# Overview of Orders

This section provides an introduction to the Orders feature, detailing its functionalities such as creating and managing subscriptions, order line items, and viewing Order Delta Metrics.

This section introduces the Orders feature.

## What is an order?

An order represents the transaction record. With Orders, you can:

-   Create multiple subscriptions and manage multiple changes to a subscription.

    ![SubscriptionAndOrder](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/13974f89-28c0-4586-8e22-761a6f173e5b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjEzOTc0Zjg5LTI4YzAtNDU4Ni04ZTIyLTc2MWE2ZjE3M2U1YiIsImV4cCI6MTc3MTY5NTA0OSwianRpIjoiODZkNWQyMTk1MjdjNDg0OTkzODhmMDc2NTc3Y2ZkZGMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.1ycQh1C1x4mKvoO4wbdI8fFYUAmZgvD5WD0si10YVQs)

-   Create multiple order line items, update order line items, and manage the state of each order line item based on your business needs.

-   ![OrderLineItem_Order_OrderDeltaMetrics](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/5538475c-74cb-4465-8543-f18494dbff3f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU1Mzg0NzVjLTc0Y2ItNDQ2NS04NTQzLWYxODQ5NGRiZmYzZiIsImV4cCI6MTc3MTY5NTA0OSwianRpIjoiNmQwZTQ2NzA3Zjc1NDA2ZThkNDk5ZjAzMTZkODAxN2YiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.v_xq0oGeWLy6yqdBMvLWvuLfigN_ZKpFrVyR4R6toNI)

    View Order Delta Metrics to see the impact of every change made to subscriptions and order line items.


Major benefits of Orders are the following:

-   Simplified process of booking complex deals in Zuora.

-   Use multiple order actions to create complex deal structures in a single order, making it easier to manage and report on those complex deals.

-   See the impact of an order by viewing Order Delta Metrics

-   Create a ramp deal with native Ramps and Ramp Metrics based on Ramp Intervals, such as Ramp Interval MRR and Ramp Interval TCB for each charge.

-   Create an order line item to send a non subscription based transactional charge, such as one-time fees, physical goods, or professional service charges, from Quotes through Revenue , without the need for a subscription.


The following components represent an Order:

-   Order A contractual agreement between a merchant and a customer. One order can affect multiple subscriptions and order line items which belong to the same invoice owner account. These subscriptions and order line items can be owned by multiple customers.

-   Order Action The content of an Order, representing the actions that are done on subscriptions, for example, create a subscription, add a product, renewal. An Order can have one or more Order Actions, and each Order Action operates on one subscription.

-   Order Delta Metrics Indicating the changes in key metrics as the result of an order, including Order Delta Mrr, Order Delta Tcv, and Order Delta Tcb.

-   Order Line Items Non subscription based items created by an Order, representing transactional charges such as one-time fees, physical goods, or professional service charges that are not sold as subscription services. An order line item can be in any of the following states: Executing, Booked, SentToBilling, Complete, and Canceled. See State transitions for an order line item, fulfillment, and order .
    Note: The Order Line Items feature is now generally available. You need to enable the Orders or Orders Harmonization feature to access the Order Line Items feature.

-   Ramps and Ramp Metrics Native Ramps are available in an Order for ramp deal management and out-of-the-box metrics based on Ramp Intervals. See How to Get Started for how to access the Ramps feature. wiki.page("/Template:System/Boilerplate", "Ramps")


See Orders Object Model for more information.

If you are an existing Zuora’s Subscribe and Amend customer and want to adopt Orders, see Orders Harmonization .

## Create a new subscription

Customers want to subscribe to your products in a new subscription.

See Create a subscription for a tutorial.

## Replace products

Customers want to remove products and subscribe to your other products on the existing subscription.

For example, your customer subscribes to your Service A. But later the customer wants to replace the Service A with your Service B. You can do the subscription changes in one order. First, create a Remove Product action to remove Service A from the subscription. Then create an Add Product action to add Service B to the subscription.

See Replace a product in a subscription for a tutorial.

## Subscription renewal with products upgrade or downgrade

Customers want to upgrade or downgrade the products when renewing subscriptions.

For example, your customer subscribes to your Basic Services for a year. Later the customer wants to renew the subscription and upgrades the service to the Premium Services. You can do the subscription changes in one order. First, create a Renew Subscription action to renew the subscription. Then create a Remove Product action to remove Basic Services from the subscription. Finally, create an Add Product action to add the Premium Services to the subscription.

See Renew a subscription and upgrade a product for a tutorial.

## Ramp deal

A ramp deal is a multi-year deal in which products can vary in price, quantity, discount over different ramp intervals (time-based periods) or can remain flat for the entire duration of the subscription term. Once the Ramps feature is enabled, you can create and manage a ramp deal with native Ramps and report Ramp Metrics.

See Overview of ramps and ramps metrics .

## Purchase non-subscription items

The customer purchases transactional items such as physical goods, or is charged one or more fees for a service. You can use an order line item to represent these non subscription based charges, and then bill for these charges without a subscription.

See Create an order line item for a tutorial.

## Purchase non-subscription and subscription goods and services

The customer purchases physical goods and subscribes to a recurring service for the physical goods. You send the transactional charge for the physical goods as a new order line item, and the recurring charges for the service as a new subscription.

See Create an order line item with a new subscription for a tutorial.

## Update non-subscription items

The customer has purchased a physical good that must be shipped. In order to track this physical good throughout its lifecycle, you can update the order line item as the physical good goes through each stage of the fulfillment process. In addition, you can specify at what point an invoice should be generated for the physical good.

See Generate invoice for order line items for a tutorial.

## Orders API

See the Orders API documentation for the new REST API operations that are available with Orders.

## Order Delta Metrics

Order Delta Metrics represent the changes in key metrics as the result of an order.

Metrics are tied to Rate Plan Charges and each Order Action that generates them. If there is no change in subscription metrics after an action is executed, metrics will not be generated.

When there are also order line items in the order, metrics will be generated and attached to the order line items as well.

See Overview of Order Delta Metrics for more information about metrics for orders.

## Retrieve Order Delta Metrics

You can retrieve Order Delta Metrics through the following ways:

-   Make the API call through the Preview an order operation.

-   Use Data Query. See Data Query use cases in the following article:

    -   Order Delta Mrr use cases

    -   Order Delta Tcv use cases

    -   Order Delta Tcb use cases


## Order Metrics

This section introduces the Order Metrics feature.

Note:

As of Zuora Billing Release 306, Order Metrics is no longer available. See Order Delta Metrics . If you are an existing Subscribe and Amend customer and want Order Delta Metrics only, you can turn on Orders Harmonization . Join the Orders Harmonization community group for more information. You can still keep the existing Subscribe and Amend API integrations and UI to create and manage subscriptions.

The following information is for the existing Zuora Subscribe and Amend customers who have enabled Order Metrics only (not Orders).

If you are an existing Subscribe and Amend customers who have enabled Order Metrics only, an order is auto-generated when you do any of the following operations.

-   Create active subscriptions (UI, REST API, and SOAP API)

-   Update subscriptions from the Draft or Pending status to the Active status (UI and SOAP API)

-   Create subscription amendments that are in the Complete status (UI, REST API, and SOAP API)

-   Update subscription amendments from the Draft or Pending status to the Complete status (UI and SOAP API)


Note that if you do the preceding operations with unsupported conditions, the orders will not be generated. See Known Limitations in Orders and Order Metrics . If the lengths of the charges in a subscription become 0, for example, due to a 0 subscription term, the Order Metrics will not be calculated. If a charge itself is not changed, order metrics will not be generated. For example, updating a product on the charge end date will not change the charge, and thus, order metrics will not be generated.

Orders data is not generated for draft, pending, or deleted subscriptions and amendments.

Also note that as part of the Order Metrics migration, a new Amendment Type of "Composite" will appear in the Subscription to represent the Subscription creation.

For more information about the Order Metrics objects, see Key Metrics for Orders .

## Practice of using characters in orders

The characters "#", "?", and "/" are not allowed in Orders UI and API.

## Resources

See the following resources for more information about the Orders feature:

-   Order action tutorials

-   Orders tutorials

-   Orders Object Model

-   REST API Reference

-   Ramps and Ramps Metrics

-   Order Line Items

-   Data sources:

    -   Order Data Source

    -   Order Action Data Source

    -   Order Line Item Data Source

    -   Fulfillment Data Source

    -   Fulfillment Item Data Source

-   Data query:

    -   Data Query as references for general SQL query examples

    -   Query the Order Line Item object through Data Query

    -   Query the Fulfillment object through Data Query

    -   Query the Fulfillment Item object through Data Query
