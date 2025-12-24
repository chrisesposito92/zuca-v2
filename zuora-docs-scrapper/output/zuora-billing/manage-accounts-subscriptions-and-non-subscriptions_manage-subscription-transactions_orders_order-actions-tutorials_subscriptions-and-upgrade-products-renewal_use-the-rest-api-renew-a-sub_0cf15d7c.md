---
title: "Use the REST API - renew a subscription and update a product"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscriptions-and-upgrade-products-renewal/use-the-rest-api---renew-a-subscription-and-update-a-product"
product: "zuora-billing"
scraped_at: "2025-12-24T05:24:39.692Z"
---

# Use the REST API - renew a subscription and update a product

This topic explains how to renew a subscription and upgrade a product using the REST API's "Create order" operation.

You can use the "Create order" operation to renew a subscription and upgrade a product. Before the Orders feature is enabled, you have to use the "Renew subscription", "Amend", or "CRUD: Create amendment" operation.

To renew a subscription and upgrade a product by creating an order:

1.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | $SubscriptionNum | The number of the subscription to update. For example, A-S00000001 . |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 . |
    | $RPIdRemove | The ID of the rate plan to remove from the subscription. For example, 8a8081085e0d4b70015e4b844495058d . |
    | $ProductRPId | The ID of the product rate plan to add to the subscription. For example, 8a8081085d834928015d9ce60ef41acf . |
    | $ProductRPChargeId | The ID of the product rate plan charge to use when adding the product rate plan. For example, 8a8081085d834928015d9ce6ae821ad1 . |
    | $Today | Today's date. For example, 2017-09-30 . |
    | $UpgradeDate | The date to upgrade the product in the subscription. For example, 2018-01-01 . |

2.  Use the "Create order" operation to create an order under an existing account: To create the order under a new account instead of an existing account, specify the `newAccount` field instead of the `existingAccountNumber` field.

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderDate": "$Today", "existingAccountNumber": "$AccountNum", "subscriptions": [ { "subscriptionNumber": "$SubscriptionNum", "orderActions": [ { "type": "RenewSubscription", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Today" }, { "name": "ServiceActivation", "triggerDate": "$Today" }, { "name": "CustomerAcceptance", "triggerDate": "$Today" } ] }, { "type": "RemoveProduct", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$UpgradeDate" }, { "name": "ServiceActivation", "triggerDate": "$UpgradeDate" }, { "name": "CustomerAcceptance", "triggerDate": "$UpgradeDate" } ], "removeProduct": { "ratePlanId": "$RPIdRemove" } }, { "type": "AddProduct", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$UpgradeDate" }, { "name": "ServiceActivation", "triggerDate": "$UpgradeDate" }, { "name": "CustomerAcceptance", "triggerDate": "$UpgradeDate" } ], "addProduct": { "productRatePlanId": "$ProductRPId", "chargeOverrides": [ { "productRatePlanChargeId": "$ProductRPChargeId", "pricing": { "recurringVolume": { "quantity": 20 } } } ] } } ] } ], "processingOptions": { "runBilling": false, "collectPayment": false } } |


To preview invoices for the updated subscription, use the "Preview order" operation.
