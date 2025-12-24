---
title: "TCV of a customer"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/key-metrics-for-customer-accounts/export-the-subscriptiondetails-file/tcv-of-a-customer"
product: "zuora-billing"
scraped_at: "2025-12-24T05:15:02.545Z"
---

# TCV of a customer

This article explains how to export the SubscriptionDetails file from Zuora to analyze TCV data, including one-time and recurring charges.

The TCV of a subscription is the sum of the TCV values of all the one-time and recurring charges across the customer's subscriptions. The `SubscriptionDetails` export file contains these values:

1.  Filter the spreadsheet by the "Customer Account" column to show only the desired customer.
2.  Sum up all these values to calculate the TCV of the customer. The TCV values for every one-time and recurring charge across all the customer's subscriptions are in TCV column. Note that usage charges do not have a TCV value, so leaving these rows displayed will not affect the calculation.

    Figure 1.

    ![Customer TCV](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/5c172222-4a69-4f56-9e59-c916b37e8566?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjVjMTcyMjIyLTRhNjktNGY1Ni05ZTU5LWM5MTZiMzdlODU2NiIsImV4cCI6MTc2NjYzOTcwMCwianRpIjoiZTZiNmIxMzU0ZGJiNDAxOTkyMTQ0MTM0ZWNmM2I3YTEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.-apmqJbTxExw299CIjLmO_eQB7vRVsGkPv3sLAHi_Aw)
