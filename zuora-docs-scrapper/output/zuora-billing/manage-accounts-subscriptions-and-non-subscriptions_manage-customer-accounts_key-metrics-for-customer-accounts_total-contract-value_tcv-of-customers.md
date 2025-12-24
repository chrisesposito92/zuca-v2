---
title: "TCV of customers"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/key-metrics-for-customer-accounts/total-contract-value/tcv-of-customers"
product: "zuora-billing"
scraped_at: "2025-12-24T05:15:45.742Z"
---

# TCV of customers

This article explains how to find the Total Contract Value (TCV) for a customer account using the Zuora UI and APIs.

In the Zuora UI, complete the following steps to find the TCV value for a customer account:

1.  Navigate to Customers > Customer Accounts in the left-hand navigation.
2.  Click the name of the desired customer account to open the account details page.
3.  On the account details page, scroll down to the Subscriptions & Amendments section, and find the Total TCV value in the Subscriptions-Owned tab.

To find the TCV value for a charge, use Zuora APIs:

-   In the Zuora REST API, use the tcv field in the Get subscriptions by key or Get subscriptions by account method.

-   In the Zuora SOAP API, use the TCV field on the RatePlanCharge object.
