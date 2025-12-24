---
title: "Adding a partial rate plan with selective charges using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/add-products-to-subscriptions/adding-a-partial-rate-plan-with-selective-charges-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:23:06.931Z"
---

# Adding a partial rate plan with selective charges using the REST API

Learn how to add a partial rate plan with selective charges to a subscription using the REST API.

You can use the Create an order operation to add a subset of charges when adding a new rate plan to a subscription via Create Subscription or Add Product order action.

To add a partial rate plan with selective charges to a subscription:

1.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | productRatePlanId | The ID of the product rate plan. For example, 402880e78c89ef9d018c8a64a2166e07. |
    | productRatePlanChargeId | The ID of the product rate plan charge. For example, 402880e78ccd1743018cce745d420130 |

2.  Use the following code for adding a partial rate plan with selective charges to a subscription with productRatePlanId having three charges and subscribing one charge with productRatePlanChargeId :

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderDate": "2024-01-01", "existingAccountNumber": "A00000071", "subscriptions": [ { "subscriptionNumber": "A-S00000019", "orderActions": [ { "type": "AddProduct", "triggerDates": [ { "triggerDate": "2024-01-01", "name": "ContractEffective" }, { "triggerDate": "2024-01-01", "name": "ServiceActivation" }, { "triggerDate": "2024-01-01", "name": "CustomerAcceptance" } ], "addProduct": { "productRatePlanId": "402880e78c89ef9d018c8a64a2166e07", "isAddingSubsetCharges": true, "chargeOverrides": [ { "productRatePlanChargeId": "402880e78ccd1743018cce745d420130" } ] } } ] } ] } |


In the above example, you can mention `productRatePlanChargeNumber` instead of `productRatePlanChargeId` to specify the charge.

This feature is in the Early Adopter phase. We are actively soliciting feedback from a small group of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at Zuora Global Support .
