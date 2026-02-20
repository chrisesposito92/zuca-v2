---
title: "Change the estimated start and end dates of a pending charge through the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/pending-subscription-processing/change-the-estimated-start-and-end-dates-of-a-pending-charge-through-the-rest-api"
product: "zuora-billing"
scraped_at: "2026-02-20T17:31:43.605Z"
---

# Change the estimated start and end dates of a pending charge through the REST API

This topic explains how to update the estimated start and end dates of a pending charge using the REST API by performing an Update Product order action.

To change the estimated start and end dates of a pending charge, use the Create an order operation to perform an Update Product order action as follows:

The estimated start date should be within the subscription term start date and end date.

1.  Determine the values of the following fields:

    | Variable | Description |
    | --- | --- |
    | status | The status of the order. To create an active subscription with pending charges, you must specify the status field to Completed . |
    | ContractEffective | The date of the contract that governs the subscription. To create an active subscription with pending charges, you must specify this field. |
    | ServiceActivation | The date on which the services or products within a subscription have been activated and access has been provided to the customer. To create an active subscription with pending charges, you must specify this field. |
    | CustomerAcceptance | The date on which the services or products within a subscription have been accepted by the customer. To create an active subscription with pending charges, you must specify this field. |
    | estimatedStartDate | The estimated start date for the pending charge. Set the estimatedStartDate field as you want and note that this date must be a date within the subscription term. The system will then automatically calculate and determine the estimated end date for the pending charge. The estimated start and end dates are used to manage the estimated charge duration and forecast the revenue for the pending charge. |

2.  Use the "Create an order" operation to update the estimated start date of the pending charge:

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderNumber": null, "orderDate": "2024-01-01", "status":"Completed", "existingAccountNumber": "A00000001", "subscriptions": [ { "subscriptionNumber": "A-S00000012", "orderActions": [ { "type": "UpdateProduct", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "2024-10-01" }, { "name": "ServiceActivation", "triggerDate": "2024-10-01" },{ "name": "CustomerAcceptance", "triggerDate": "2024-10-01" } ], "updateProduct":{ "ratePlanId":"f5cf07304089445e4b4446255bec0007", "chargeUpdates":[{ "chargeNumber":"C-00000025", "estimatedStartDate":"2024-11-01" }] } } ] } ] } |
