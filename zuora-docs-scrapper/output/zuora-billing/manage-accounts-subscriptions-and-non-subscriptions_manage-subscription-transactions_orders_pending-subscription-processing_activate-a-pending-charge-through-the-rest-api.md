---
title: "Activate a pending charge through the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/pending-subscription-processing/activate-a-pending-charge-through-the-rest-api"
product: "zuora-billing"
scraped_at: "2026-02-20T17:31:43.947Z"
---

# Activate a pending charge through the REST API

This topic explains how to activate a pending charge using the REST API by performing an Update Product order action.

To activate a pending charge, use the Create an order operation to perform an Update Product order action as follows:

1.  Determine the values of the following fields:

    | Variable | Description |
    | --- | --- |
    | status | The status of the order. To create an active subscription with pending charges, you must specify the status field to Completed . |
    | ContractEffective | The date of the contract that governs the subscription. To create an active subscription with pending charges, you must specify this field. |
    | ServiceActivation | The date on which the services or products within a subscription have been activated and access has been provided to the customer. To create an active subscription with pending charges, you must specify this field. |
    | CustomerAcceptance | The date on which the services or products within a subscription have been accepted by the customer. To create an active subscription with pending charges, you must specify this field. |
    | specificTriggerDate | The actual specific start date for the pending charge. Specify a date value in the specificTriggerDate field. The value must be a date within the subscription term. |

2.  Use the "Create an order" operation to activate a pending charge:

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderNumber": null, "orderDate": "2024-03-01", "status":"Completed", "existingAccountNumber": "A00000001", "subscriptions": [ { "subscriptionNumber": "A-S00000011", "orderActions": [ { "type": "UpdateProduct", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "2024-11-21" }, { "name": "ServiceActivation", "triggerDate": "2024-11-21" },{ "name": "CustomerAcceptance", "triggerDate": "2024-11-21" } ], "updateProduct":{ "ratePlanId":"f5cf073041c9445e4b444616989d0009", "chargeUpdates":[{ "chargeNumber":"C-00000023", "effectiveDate":{ "specificTriggerDate":"2024-10-27" } }] } } ] } ] } |
