---
title: "Pending Subscription Processing overview"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/pending-subscription-processing/pending-subscription-processing-overview"
product: "zuora-billing"
scraped_at: "2025-12-24T05:30:19.983Z"
---

# Pending Subscription Processing overview

The Pending Subscription Processing feature enables modification of contracts with pending charges and forecasting of revenues. It supports end-to-end processing through Order to Revenue and is accessible via the Zuora UI and Orders API.

The Pending Subscription Processing feature allows you to modify contracts with pending charges and forecast revenues with estimated dates for pending charges. This feature is supported end-to-end by Order to Revenue . This feature is available in the Zuora UI and the Orders API.

With this feature, you can complete orders and activate subscriptions containing pending charges. Later on, you can activate the charges through the Update Product order action.

You can perform all order actions to amend your subscription with pending charges, except the Revert order action for single version subscriptions .

## Availability

The Pending Subscription Processing feature is in the Early Availability phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early availability program, submit a request at Zuora Global Support .

## Prerequisites

-   You must have the Orders or Orders Harmonization feature enabled to use the Pending Subscription Processing feature.

-   This feature applies only to rate plan charges that are triggered on a specific date, where the date is not specified.

-   This feature applies only to orders and subscriptions created after this feature is turned on in your tenant.


## Expectations

-   You can use the Pending Subscription Processing feature through the Zuora UI and the Orders API. However, the Subscribe and Amend UI and API are not supported.

-   The Pending Subscription Processing feature does support the following features:

    -   Zuora CPQ, Zuora 360

    -   Draft orders

    -   Scheduled orders

    -   Single Version Subscription

    -   Pending charges with active enhanced discounts

    -   Billing Schedule

-   This feature is not applicable when a subscription has the service activation date or customer acceptance date as a required field but is unfilled.


## Use Cases

Refer to the following tutorials on common use cases of this feature:

-   Create an active subscription with pending charges

-   Update the price of a pending charge for a ramped subscription

-   Change the estimated start and end dates of a pending charge

-   Activate a pending charge

-   Cancel an active subscription with pending charges

-   Remove a product from an active subscription with pending charges

-   Suspend and resume a subscription with pending charges
