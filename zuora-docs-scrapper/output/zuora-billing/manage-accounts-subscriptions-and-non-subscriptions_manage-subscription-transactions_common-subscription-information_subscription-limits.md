---
title: "Subscription limits"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/subscription-limits"
product: "zuora-billing"
scraped_at: "2025-12-24T05:20:57.987Z"
---

# Subscription limits

This topic outlines the subscription limits per account, including the default maximum number of subscriptions, options for increasing limits, and the method for calculating existing subscriptions.

## Subscriptions per account

The default maximum number of subscriptions allowed on an account is 12,000. However, if you have overridden the value of this limit for your tenant, the value will remain according to your configuration.

Zuora can increase the limit of subscriptions per account upon request. To increase the limit, see Zuora's Performance Booster and Performance Booster Elite offerings.

Note that the method that Zuora uses to calculate the number of existing subscriptions on an account is explained as below.

When you create a new subscription on an account, the start and end dates of the subscription determine a time frame. When calculating the number of existing subscriptions on the account, Zuora only counts in those existing subscriptions that have a time frame that overlaps with the new subscription to be created. The time frame of an existing subscription is also determined by the start and end dates of the existing subscription. For an evergreen subscription, this time frame is without an end date.

## Charges per subscription

For a single subscription in your tenant, you are recommended to create at most 50 rate plan charges.
