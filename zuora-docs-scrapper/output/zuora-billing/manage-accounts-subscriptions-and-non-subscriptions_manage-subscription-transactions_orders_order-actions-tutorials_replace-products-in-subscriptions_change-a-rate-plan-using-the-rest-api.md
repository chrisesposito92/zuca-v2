---
title: "Change a rate plan using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/replace-products-in-subscriptions/change-a-rate-plan-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:23:35.312Z"
---

# Change a rate plan using the REST API

Use the REST API to change a rate plan in a subscription by creating an order, including determining variables and executing the order operation.

You can directly use the change plan order action in the "Create an order" operation to replace a rate plan in a subscription.

The change plan type of order action is currently not supported for Billing - Revenue Integration. When Billing - Revenue Integration is enabled, the change plan type of order action will no longer be applicable in Zuora Billing.

Before the Orders feature is enabled, you have to use the Update a subscription or Amend operation.

To replace a rate plan in a subscription by creating an order:

1.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | $existingAccountNumber | The number of the existing account that will own the order. For example, A00000001 . |
    | $SubscriptionNum | The number of the subscription to update. For example, A-S00000001 . |
    | $ProductRPId | The ID of the rate plan to be removed from the subscription. For example, 4028fc8281666f5501816680015f01f1 . |
    | $NewProductPRId | The ID of the product rate plan to be added to the subscription. For example, 4028fc8281666f55018166803c4f01f2 . |
    | $Today | The date of today. For example, 2022-09-01 . |

2.  Use the "Create an order" operation to create an order under an existing account:

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderDate":"$Today", "existingAccountNumber":"$existingAccountNumber", "subscriptions":[ { "subscriptionNumber":"$SubscriptionNum", "orderActions":[ { "type":"ChangePlan", "triggerDates":[{ "name":"ContractEffective", "triggerDate":"$Today" }, { "name": "ServiceActivation", "triggerDate": "$Today" }, { "name": "CustomerAcceptance", "triggerDate": "$Today" }], "changePlan":{ "productRatePlanId":$ProductRPId, "subType": "Upgrade", "newProductRatePlan": { "productRatePlanId":"$NewProductPRId" } } } ] } ] } |


To preview invoices for the updated subscription, use the Preview an order operation.
