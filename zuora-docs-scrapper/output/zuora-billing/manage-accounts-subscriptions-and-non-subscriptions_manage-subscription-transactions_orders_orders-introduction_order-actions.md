---
title: "Order actions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/order-actions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:21:13.133Z"
---

# Order actions

Order actions allow you to manage subscriptions by creating, modifying, or canceling them, with specific limits on the number of actions and subscriptions per order.

Order actions represent the actions that can be performed on subscriptions, such as creating subscriptions and making changes to subscriptions.

An order can contain multiple order actions, acting against one or more subscriptions.

-   Up to 50 subscriptions are allowed in a single Create order or Preview order operation call.

-   Up to 50 order actions are allowed in a single Create order or Preview order operation call.

-   Up to 50 order actions are allowed on a single subscription in a Create order or Preview order operation call.

-   Up to 300 subscriptions are allowed in a single Create order asynchronously or Preview order asynchronously operation call.

-   Up to 300 order actions are allowed in a single Create order asynchronously or Preview order asynchronously operation call.

-   Up to 300 order actions are allowed on a single subscription in a Create order asynchronously or Preview order asynchronously operation call.


See Limitations on Orders for more information.

The following types of order actions are supported:

-   Create Subscription

-   Add Product

-   Update Product

-   Change Plan : Only available in API

-   Remove Product

-   Terms And Conditions

-   Suspend

-   Resume

-   Renewal

-   Owner Transfer

-   Cancelation

-   Revert Order : Only available to single version subscriptions .


An `orderactionrateplan` object is exclusively available in Data Query . Through this object, you can retrieve information about the subscription rate plans impacted by a specific order action.

The following type of order action is not currently supported:

-   Update a subscription to change the subscription term end date before the renewal term start date
