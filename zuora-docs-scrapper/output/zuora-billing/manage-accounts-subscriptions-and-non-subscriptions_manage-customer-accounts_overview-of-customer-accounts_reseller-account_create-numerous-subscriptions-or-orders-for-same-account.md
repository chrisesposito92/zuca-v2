---
title: "Create numerous subscriptions or orders for same account"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/overview-of-customer-accounts/reseller-account/create-numerous-subscriptions-or-orders-for-same-account"
product: "zuora-billing"
scraped_at: "2025-12-24T05:14:39.324Z"
---

# Create numerous subscriptions or orders for same account

This task topic explains how to manage multiple subscriptions or orders for the same account using batch processing and REST API operations.

You run your business in distributor model, and your main order entry is from Electronic Data Interchange (EDI). These electronic orders come from a distributor as individual orders. A distributor can have multiple orders. To process these orders, you run a batch process every 20 minutes.

The subscriptions under the same invoice owner have different subscription owners, so no competition exists on the same subscription owner. Therefore, you can set the `partnerAccount` field to `false` for subscription owner accounts.

To create numerous subscriptions or orders, perform the following steps:

1.  Update an existing invoice owner account by setting the `partnerAccount` field to `true`.
2.  Ensure that the `partnerAccount` field is set to false for subscription owner accounts.
3.  Create subscriptions through the REST API in multiple requests.
    1.  If you have the Orders or Orders Harmonization feature enabled, use the Create an order or Create an order asynchronously.
    2.  If you have neither the Orders or Orders Harmonization feature enabled, use the Create a subscription operation. No billing process is triggered when any subscription is created.
4.  Use the Retrieve an account or Retrieve an account summary operation to check the value of the `lastMetricsUpdate` field for the accounts.
