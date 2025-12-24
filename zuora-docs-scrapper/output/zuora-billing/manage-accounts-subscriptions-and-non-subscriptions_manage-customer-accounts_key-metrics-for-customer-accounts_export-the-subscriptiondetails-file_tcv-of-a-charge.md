---
title: "TCV of a charge"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/key-metrics-for-customer-accounts/export-the-subscriptiondetails-file/tcv-of-a-charge"
product: "zuora-billing"
scraped_at: "2025-12-24T05:14:57.306Z"
---

# TCV of a charge

This article explains how to get the details of TCV of a charge from the SubscriptionDetails file.

The `SubscriptionDetails` export file contains a row for every one-time charge, and a row for every section of a recurring charge. This means that one recurring charge can occupy more than one row of the spreadsheet:

1.  Filter the spreadsheet by the Subscription Code column to show only the desired subscription.
2.  (optional) To more easily locate the rows for the desired charge you can add additional column filters. For example, filter by Charge Type to show only the relevant type of charge (One-Time or Recurring), and Product to show only the relevant product name. You can also refer to the Effective Start and Effective End columns to trace renewals and amendments.
3.  To calculate the TCV for a recurring charge, add up the TCV values for all the sections of that charge. The TCV values for every one-time charge and section of a recurring charge in the subscription are in the TCV column.

    ![Charge TCV](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/771bc15c-5ce5-40bc-9f81-c3b574ab73ba?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc3MWJjMTVjLTVjZTUtNDBiYy05ZjgxLWMzYjU3NGFiNzNiYSIsImV4cCI6MTc2NjYzOTY5NSwianRpIjoiMWJiODBiMjc2MDk1NDA1NWIxYWYyMjJjNDg0NzlkMTEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.s08LcnS8ppNZqBDTX4HdaPnSjwjslDQix_58Z3x0_eA)
