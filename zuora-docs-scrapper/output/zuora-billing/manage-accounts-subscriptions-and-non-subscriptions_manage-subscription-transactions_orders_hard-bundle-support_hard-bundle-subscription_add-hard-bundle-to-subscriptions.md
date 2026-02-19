---
title: "Add hard bundle to subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/hard-bundle-support/hard-bundle-subscription/add-hard-bundle-to-subscriptions"
product: "zuora-billing"
scraped_at: "2026-02-19T03:12:38.789Z"
---

# Add hard bundle to subscriptions

This task topic explains how to configure a hard bundle with optional component charges using the Add Product order action.

Use the addProduct order action to subscribe to a hard bundle with one optional component charge.

1.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | $existingAccountNumber | The number of the account that will own the order and the subscription. For example,A00003063. |
    | $orderDate | The date on which the order was created. For example, For example,2025-12-01. |
    | $productRatePlanId | The ID of the hard bundle rate plan to add to the subscription.. For example, 3c4a78d0205e45ee8c303b719dc3d42c . |
    | $productRatePlanChargeId1 | The ID of the rate plan charge to include when adding the hard bundle rate plan.27ba5218ef0e4c43a51dd80b313ecb74. |

2.  Refer to the example payload to create a new order with one optional component charge.

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "category": "NewSales", "existingAccountNumber": "$existingAccountNumber", "orderDate": "$orderDate", "subscriptions": [ { "subscriptionNumber": "$subscriptionNumber", "orderActions": [ { "type": "AddProduct", "addProduct": { "productRatePlanId": "$productRatePlanId", "chargeOverrides": [ { "productRatePlanChargeId": "$productRatePlanChargeId" } ] }, "triggerDates": [ { "triggerDate": "2025-12-01", "name": "ContractEffective" }, { "triggerDate": "2025-12-01", "name": "ServiceActivation" }, { "triggerDate": "2025-12-01", "name": "CustomerAcceptance" } ] } ] } ] } |
