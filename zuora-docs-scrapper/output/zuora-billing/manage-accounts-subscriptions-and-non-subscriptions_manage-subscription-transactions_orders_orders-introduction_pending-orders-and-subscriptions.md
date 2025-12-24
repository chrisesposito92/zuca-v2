---
title: "Pending orders and subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/pending-orders-and-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:21:17.368Z"
---

# Pending orders and subscriptions

This topic explains the statuses of orders and subscriptions when using the "Create order" REST API, including conditions for pending orders and subscriptions.

When you create a new order using the "Create order" REST API, the order and subscription status vary depending on your Billing Trigger Dates and Triggering Condition settings:

-   The order status can be Pending or Completed .

-   The subscription status can be Pending Activation, Pending Acceptance, or Active .


## Pending order

A pending order is created in either of the following conditions:

-   Zuora is configured to require service activation and the Service activation date is left blank in your Create order API call.

-   Zuora is configured to require customer acceptance and the Customer acceptance date is left blank in your Create order API call.

-   When a charge in the subscription has its Trigger Condition set as Upon a Specific Date and the Specific Trigger Date left blank in your Create order API call.


A pending order can be created by the following order actions:

-   Create new subscription

-   Add product

-   Update product

-   Remove product

-   Terms and conditions

-   Renew subscription


However, pending orders created through all order actions except for "Create new subscription" do not impact the subscription status.

## Pending subscription

A Pending Activation subscription is created by a "Create new subscription" order action when Zuora is configured to require service activation and the Service activation date is left blank in your Create order API call.

A Pending Acceptance subscription is created by a "Create new subscription" order action in either of the following conditions:

-   When Zuora is configured to require customer acceptance and the Customer acceptance date is left blank in your Create order API call.

-   When a charge in the subscription has its Trigger Condition as Upon a Specific Date and its Specific Trigger Date left blank in your Create order API call. However, if at the same time Zuora is configured to require service activation and the Service activation date is left blank, it will still be a Pending Activation subscription.


See Create a Subscription for how to create a subscription through Orders.

Note that the Order to Revenue feature or the Billing - Revenue Integration feature does not support the charges with no dates that come from the subscriptions in Pending Activation status.

## API fields for Billing Trigger Dates and Triggering Condition

The Billing Trigger Dates settings are configured in the `subscriptions>orderActions>triggerDates` field in a Create order API call.

The Triggering Condition settings are configured in:

-   For the "Create new subscription" and "Add product" order actions: `subscriptions` `>orderActions>createSubscription(` or `addProduct` `)>subscribeToRatePlans>chargeOverrides>startDate>triggerEvent` (and `specificTriggerDate` ) in a Create order API call.

-   For the "Update product" order action: `subscriptions>orderActions>updateProduct>chargeUpdates>effectiveDate>triggerEvent` (and `specificTriggerDate` )


## Activating an order

Activating an order requires entering the unfilled Billing Trigger Dates or the Specific Trigger Date for the charge that has its Triggering Condition as Upon a Specific Date.

You can activate a pending order by filling these billing trigger dates .

## Limitations on pending orders

A subscription can only be associated with one pending order.

Restrictions on the order actions that can create pending orders include:

-   Create new subscription - To create a pending order through the Create new subscription order action, the order must be in one of the following situations:

    -   The pending order includes one or more pending subscriptions only involving the "Create new subscription" order actions.

    -   The pending order includes one pending subscription involving the "Create new subscription" order action and other non-pending subscriptions involving other types of order actions. In case the subscriptions involving other types of order actions are pending, the creating pending order operation will fail.

-   Terms and conditions - To create a pending order through the Terms and conditions order action, you can have only one Terms and conditions order action in the order, and only one subscription is supported in that pending order.

-   Renew subscription - To create a pending order through the Renew subscription order action, you can have only one Renew subscription order action in the order, and only one subscription is supported in that pending order.

-   Update product - To create a pending order through the Update product order action, for each rate plan you can have only one Update product order action, and only one subscription is supported in that pending order.

-   Remove product - To create a pending order through the Remove product order action, for each rate plan you can have only one Remove product order action, and only one subscription is supported in that pending order.

-   Add product - To create a pending order through the Add product order action, if the charge's trigger condition is Specific Date , you must set a charge number in the `chargeNumber` field for the Add product order action.

-   Change plan - To create a pending order through the Change plan order action, if the charge's trigger condition is Specific Date , you must set a charge number in the `chargeNumber` field for the Change plan order action.


Triggering pending orders is supported via both UI and the Update order action trigger dates API operation:

-   For pending orders that are created through Create subscription order actions, Order metrics are generated for every charge that has been triggered, even if the Order status returned is still Pending .

-   For pending orders created through other types of order actions, Order metrics are generated only when the Order status becomes Complete .


For tenants that have the Single Transaction Subscribe and Amend functionality enabled:

-   On a subscription, you can have either pending orders or pending amendments, but not them both.

-   In terms of using API, you must use the Update order action trigger dates operation to complete a pending order, and you must use the Update action to complete a pending amendment.
