---
title: "Account object limits"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/account/account-object-limits"
product: "zuora-platform"
scraped_at: "2025-12-24T05:39:40.479Z"
---

# Account object limits

Introduces the limits of the Account object.

## Number of subscriptions

The default maximum number of subscriptions allowed on an account is 12,000. However, if you have overridden the value of this limit for your tenant, the value will remain according to your configuration.

Zuora can increase the limit of subscriptions per account upon request. To increase the limit, see Zuora's "Performance Booster" and "Performance Booster Elite" offerings.

Note that the method that Zuora uses to calculate the number of existing subscriptions on an account is explained as below.

When you create a new subscription on an account, the start and end dates of the subscription determine a time frame. When calculating the number of existing subscriptions on the account, Zuora only counts in those existing subscriptions that have a time frame that overlaps with the new subscription to be created. The time frame of an existing subscription is also determined by the start and end dates of the existing subscription. For an evergreen subscription, this time frame is without an end date.

## Contacts per account

100 contacts are allowed for each customer account.

## Creating a contract when threshold is exceeded

If you reach or exceed this limit, the following message is displayed:

`You cannot create more than 100 contacts for each customer account. If you need to create this contact, please delete some others first.`
