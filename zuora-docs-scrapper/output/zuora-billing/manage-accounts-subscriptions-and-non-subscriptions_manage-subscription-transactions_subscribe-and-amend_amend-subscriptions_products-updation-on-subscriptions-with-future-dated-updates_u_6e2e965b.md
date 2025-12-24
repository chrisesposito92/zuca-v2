---
title: "Update products with future-dated Update Product amendments using the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/products-updation-on-subscriptions-with-future-dated-updates/update-products-with-future-dated-update-product-amendments-using-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T05:34:57.684Z"
---

# Update products with future-dated Update Product amendments using the Zuora UI

This topic explains how to update products in the Zuora UI when future-dated amendments exist on a subscription.

You can use the Zuora UI to update a product even when future-dated Update Product amendments already exist on the subscription.

To create an Update Product amendment on a subscription with future-dated Update Product amendments:

1.  Follow step 1-4 in create an Update Product amendment .
2.  Select a product to update from the select product list. If the selected product has an existing future-dated Update Product amendment, the Advanced Option: Make the update effective before future price changes on the same rate plan link is displayed.
3.  Choose the appropriate method to update a product:

    -   If you want to trigger the Update Product amendment after all the existing future-dated amendments, go to step 4.

    -   If you want to trigger the Update Product amendment before the existing future-dated amendments, click the link. A message and an additional option are displayed. Specify a trigger date in the field of the displayed message. The trigger date is the date when this amendment takes effect. In this situation, the contract effective date does not decide when the amendment takes effect. You can set the contract effective date to the date when the customer notifies you to make subscription changes. Note that the trigger date you specified is for all the charges that have updates in the rate plan.


    ![Update a product before a future-date update](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c1d809d8-d019-4315-bfef-12bc7f0484ca?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImMxZDgwOWQ4LWQwMTktNDMxNS1iZmVmLTEyYmM3ZjA0ODRjYSIsImV4cCI6MTc2NjY0MDg5NSwianRpIjoiODI5Y2IzYmRlNjRiNDFjMDk4NGZmN2Q5ZmVkMWRjZGIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.QEdhWbdlrnXTYT9xVm__vbLzZ0vqzeJL7ZwXigrSrPk)

4.  Follow [steps](file:///Users/srsaravanan/Documents/KC%20Backup/knowledgecenter.zuora.com/Zuora_Billing/Manage_accounts,_subscriptions,_and_non-subscription_transactions/Manage_subscription_transactions/Subscribe_and_Amend/E_Amendments/DA_Update_a_product.html) to finish creating an amendment.
