---
title: "Update a rate plan with selective charges"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/product-update-in-subscriptions/update-a-rate-plan-with-selective-charges"
product: "zuora-billing"
scraped_at: "2025-12-24T05:23:17.264Z"
---

# Update a rate plan with selective charges

This topic explains how to update a rate plan by adding selective charges using the Create an order operation.

You can use the Create an order operation to update a rate plan with selective charges.

To update a rate plan with selective charges:

1.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | productRatePlanChargeId | The ID of the product rate plan charge. For example, 402880e78cd84081018cd85d8d32001f. |
    | RatePlanId | The ID of the subscription rate plan rate plan. For example, 402880e48d15c3a8018d15cfe49d00ab. |

2.  Use the following code for updating a subscription rate plan by adding selective charges. For example, consider that you want to add one remaining charge with productRatePlanChargeId to an existing subscription rate plan with ratePlanId .

    Note: This operation is possible only if this charge hasn’t been added to this subscription rate plan earlier.

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderDate": "2024-01-01", "existingAccountNumber": "AN_acc17031289013921703128901395", "subscriptions": [ { "subscriptionNumber": "A-S00000021", "orderActions": [ { "type": "UpdateProduct", "triggerDates": [ { "triggerDate": "2024-01-01", "name": "ContractEffective" }, { "triggerDate": "2024-01-01", "name": "ServiceActivation" }, { "triggerDate": "2024-01-01", "name": "CustomerAcceptance" } ], "updateProduct": { "ratePlanId": "402880e48d15c3a8018d15cfe49d00ab", "isAddingSubsetCharges": true, "chargeUpdates": [ { "productRatePlanChargeId": "402880e78cd84081018cd85d8d32001f" } ] } } ] } |


In the above example, you can mention `productRatePlanChargeNumber` instead of `productRatePlanChargeId` to specify the charge.

This feature is in the Early Adopter phase. We are actively soliciting feedback from a small group of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at Zuora Global Support .
