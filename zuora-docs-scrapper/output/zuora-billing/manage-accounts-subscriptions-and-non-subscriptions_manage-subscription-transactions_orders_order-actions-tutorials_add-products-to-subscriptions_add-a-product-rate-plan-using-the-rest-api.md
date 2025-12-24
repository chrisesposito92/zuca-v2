---
title: "Add a product rate plan using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/add-products-to-subscriptions/add-a-product-rate-plan-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:23:03.666Z"
---

# Add a product rate plan using the REST API

This topic explains how to add a product rate plan to a subscription using the REST API by creating an order.

You can use the Create an order operation to add a product rate plan to a subscription.

Before the Orders feature is enabled, you would have used the "Update subscription", "Amend", or "CRUD: Create amendment" operation.

To add a product to a subscription by creating an order:

1.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | $SubscriptionNum | The number of the subscription to update. For example, A-S00000001 .To create the order under a new account instead of an existing account, specify the newAccount field instead of the existingAccountNumber field. |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 . |
    | $ProductRPId | The ID of the product rate plan to add to the subscription. For example, 2c92c0f9592a69410159432fab376d81 . |
    | $ProductRPChargeId | The ID of the product rate plan charge to use when adding the product rate plan. For example, 2c92c0f9592a6941015943308a2c6e72 . |
    | $Today | Today's date. For example, 2017-09-30 . |

2.  Use the "Create an order" operation to create an order under an existing account:

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderDate": "$Today", "existingAccountNumber": "$AccountNum", "subscriptions": [ { "subscriptionNumber": "$SubscriptionNum", "orderActions": [ { "type": "AddProduct", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Today" }, { "name": "ServiceActivation", "triggerDate": "$Today" }, { "name": "CustomerAcceptance", "triggerDate": "$Today" } ], "addProduct": { "productRatePlanId": "$ProductRPId", "chargeOverrides": [ { "productRatePlanChargeId": "$ProductRPChargeId", "pricing": { "recurringFlatFee": { "listPrice": 10 } } } ] } } ] } ], "processingOptions": { "runBilling": false, "collectPayment": false } } |


To preview invoices for the updated subscription, use the "Preview order" operation.
