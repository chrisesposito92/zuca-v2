---
title: "TCV of a subscription"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/key-metrics-for-customer-accounts/export-the-subscriptiondetails-file/tcv-of-a-subscription"
product: "zuora-billing"
scraped_at: "2025-12-24T05:14:59.858Z"
---

# TCV of a subscription

This article explains how the TCV of a subscription is calculated by summing all one-time and recurring charges over the subscription's lifetime, excluding usage charges.

The TCV of a subscription is the sum of the TCV values for all one-time and recurring charges over the lifetime of the subscription; from the date the subscription started until the end of the current term. The `SubscriptionDetails` export file contains these values:

1.  Filter the spreadsheet by the Subscription Code column to show only the desired subscription.
2.  Sum up all these values to calculate the TCV of the subscription. The TCV values for every one-time charge and recurring charge in the subscription are in the TCV column. Note that usage charges do not have a TCV value , so leaving these rows displayed will not affect the calculation.

    ![Subscription TCV](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/215ea4c7-06f5-4de0-a559-88babe5b3cb2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjIxNWVhNGM3LTA2ZjUtNGRlMC1hNTU5LTg4YmFiZTViM2NiMiIsImV4cCI6MTc2NjYzOTY5NywianRpIjoiMWM3NDU5ZmRhOGNkNGU2ZDk4NzZkYTllMDBmNzRkN2EiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.lHRanWzCYRUc-pakmirmefCECDtPpQLYqdJC29swHOw)
