---
title: "Remove a rate plan and add a product rate plan using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/replace-products-in-subscriptions/remove-a-rate-plan-and-add-a-product-rate-plan-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:23:37.274Z"
---

# Remove a rate plan and add a product rate plan using the REST API

This topic explains how to replace a rate plan in a subscription by using the REST API to remove a rate plan and add a product rate plan.

You can use remove product and add product order actions in the Create an order operation to replace a rate plan in a subscription.

Before the Orders feature is enabled, you have to use the Update a subscription or Amend operation.

To replace a rate plan in a subscription by creating an order:

1.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 .To create the order under a new account instead of an existing account, specify the newAccount field instead of the existingAccountNumber field. |
    | $SubscriptionNum | The number of the subscription to update. For example, A-S00000001 . |
    | $RPIdRemove | The ID of the rate plan to be removed from the subscription. For example, 8a8081085e0d4b70015e4b844495058d . |
    | $ProductRPId | The ID of the product rate plan to add to the subscription. For example, 8a8081085d834928015d9ce60ef41acf . |
    | $ProductRPChargeId | The ID of the product rate plan charge to use when adding the product rate plan. For example, 8a8081085d834928015d9ce6ae821ad1 . |
    | $Today | Today's date. For example, 2017-09-30 . |
    | $Tomorrow | Tomorrow's date. For example, 2017-10-01 . |

2.  Use the "Create an order" operation to create an order under an existing account:

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderDate": "$Today", "existingAccountNumber": "$AccountNum", "subscriptions": [ { "subscriptionNumber": "$SubscriptionNum", "orderActions": [ { "type": "RemoveProduct", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Today" }, { "name": "ServiceActivation", "triggerDate": "$Today" }, { "name": "CustomerAcceptance", "triggerDate": "$Today" } ], "removeProduct": { "ratePlanId": "$RPIdRemove" } }, { "type": "AddProduct", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Tomorrow" }, { "name": "ServiceActivation", "triggerDate": "$Tomorrow" }, { "name": "CustomerAcceptance", "triggerDate": "$Tomorrow" } ], "addProduct": { "productRatePlanId": "$ProductRPId", "chargeOverrides": [ { "productRatePlanChargeId": "$ProductRPChargeId", "pricing": { "recurringVolume": { "quantity": 20 } } } ] } } ] } ], "processingOptions": { "runBilling": false, "collectPayment": false } } |


To preview invoices for the updated subscription, use the Preview an order operation.
