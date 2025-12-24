---
title: "Subscription"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/subscription"
product: "zuora-platform"
scraped_at: "2025-12-24T05:44:09.588Z"
---

# Subscription

A subscription is a product or service that has recurring charges, such as a monthly flat fee or charges based on usage.

Subscriptions can also include one-time charges, such as activation fees. Every subscription must be associated with an account. At least one active account must exist before any subscriptions can be created.

The Subscription object contains the information needed to create and maintain a subscription associated with an Account object. This SOAP API reference describes the supported calls, limits, and fields associated with the Subscription object.

## Supported calls

You can use this object with the following calls:

-   subscribe()

-   query()

-   update()

-   delete()


To create a subscription, use the subscribe() call.

## Limits

Subscriptions per account

The default maximum number of subscriptions allowed on an account is 12,000. However, if you have overridden the value of this limit for your tenant, the value will remain according to your configuration.

Zuora can increase the limit of subscriptions per account upon request. To increase the limit, see Zuora’s Performance Booster and Performance Booster Elite offerings.

Note that the method that Zuora uses to calculate the number of existing subscriptions on an account is explained as below.

When you create a new subscription on an account, the start and end dates of the subscription determine a time frame. When calculating the number of existing subscriptions on the account, Zuora only counts in those existing subscriptions that have a time frame that overlaps with the new subscription to be created. The time frame of an existing subscription is also determined by the start and end dates of the existing subscription. For an evergreen subscription, this time frame is without an end date.
