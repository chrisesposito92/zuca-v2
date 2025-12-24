---
title: "Create numerous subscriptions or orders for reseller accounts"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/overview-of-customer-accounts/reseller-account/create-numerous-subscriptions-or-orders-for-reseller-accounts"
product: "zuora-billing"
scraped_at: "2025-12-24T05:14:36.859Z"
---

# Create numerous subscriptions or orders for reseller accounts

This task topic explains the steps to create multiple subscriptions and orders for reseller accounts using concurrent API requests, and execute bill runs at the end of each month to meet business requirements.

You have fleet business in reseller model. Your reseller account usually has itself as the invoice owner and its end users as different subscription owners, so you create subscriptions in batches for your reseller account. To bill your seller account, you want to execute bill runs for the reseller account at the end of each month.

To meet the requirements, you have to create multiple orders to the same subscription owner accounts for your reseller account through concurrent API requests. During the process, account metric calculation might compete on the same account. To facilitate the billing process, you can set the `partnerAccount` field to `true` for the subscription owner account. The `contractedMrr` account metric is calculated on the subscription owner account. Therefore, its calculation is delayed when the partnerAccount field is set as `true` for the subscription owner account.

To create numerous subscriptions or orders, perform the following steps:

1.  Update an existing invoice owner account by setting the `partnerAccount` field to true.
2.  Update subscription owner accounts by setting the `partnerAccount` field to true.
3.  Create subscriptions through the REST API in multiple requests.
    1.  If you have the Orders or Orders Harmonization feature enabled, use the Create an order or Create an order asynchronously operation.
    2.  If you have neither the Orders or Orders Harmonization feature enabled, use the Create a subscription operation. No billing process is triggered when any subscription is created.
4.  Create a bill run to bill the reseller account at the end of the month.
5.  After the bill run is complete, use the Retrieve an account or Retrieve an account summary operation to check the value of the `lastMetricsUpdate` field for the accounts.
