---
title: "Remove a product from an active subscription with pending charges through the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/pending-subscription-processing/product-removal-from-an-active-subscription-with-pending-charges/remove-a-product-from-an-active-subscription-with-pending-charges-through-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:30:55.983Z"
---

# Remove a product from an active subscription with pending charges through the REST API

This topic explains how to remove a product from an active subscription with pending charges using the REST API by performing a Remove Product order action.

To remove a product from an active subscription with pending charges, use the Create an order operation to perform a Remove Product order action as follows:

1.  Determine the values of the following fields:

    | Variable | Description |
    | --- | --- |
    | ContractEffective | The date of the contract that governs the subscription. To create an active subscription with pending charges, you must specify this field. |
    | ServiceActivation | The date on which the services or products within a subscription have been activated and access has been provided to the customer. To create an active subscription with pending charges, you must specify this field. |
    | CustomerAcceptance | The date on which the services or products within a subscription have been accepted by the customer. To create an active subscription with pending charges, you must specify this field. |

2.  Use the "Create an order" operation to remove a product:

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderNumber": null, "orderDate": "2024-09-20", "existingAccountNumber": "A00000001", "subscriptions": [ { "subscriptionNumber": "A-S00000027", "orderActions": [ { "type": "RemoveProduct", "triggerDates": [ { "triggerDate": "2024-08-29", "name": "ContractEffective" }, { "name": "ServiceActivation", "triggerDate": "2024-08-29" }, { "name": "CustomerAcceptance", "triggerDate": "2024-08-29" } ], "removeProduct": { "ratePlanId": "f5cf07304b991db61f31dfbb96560010" // This is a product rate plan that contains pending charges. } } ] } ] } |
