---
title: "Create an active subscription with a pending charge through the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/pending-subscription-processing/active-subscription-creation-with-pending-charges/create-an-active-subscription-with-a-pending-charge-through-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:30:29.041Z"
---

# Create an active subscription with a pending charge through the REST API

This task guides you through creating an active subscription with a pending charge using the REST API by specifying necessary fields and using the "Create an order" operation.

To create an active subscription with a pending charge, use the Create an order operation to perform a Create Subscription order action as follows:

1.  Determine the values of the following fields:

    | Variable | Description |
    | --- | --- |
    | status | The status of the order. To create an active subscription with pending charges, you must specify the status field to Completed . |
    | ContractEffective | The date of the contract that governs the subscription. To create an active subscription with pending charges, you must specify this field. |
    | ServiceActivation | The date on which the services or products within a subscription have been activated and access has been provided to the customer. To create an active subscription with pending charges, you must specify this field. |
    | CustomerAcceptance | The date on which the services or products within a subscription have been accepted by the customer. To create an active subscription with pending charges, you must specify this field. |
    | triggerEvent | The trigger condition for the charge to become active. To create an active subscription with pending charges, you must specify the triggerEvent field to SpecificDate but without specifying a value in the specificTriggerDate field. |
    | estimatedStartDate | The estimated start date for the pending charge. Set the estimatedStartDate field as you want and note that this date must be a date within the subscription term. The system will then automatically calculate and determine the estimated end date for the pending charge. The estimated start and end dates are used to manage the estimated charge duration and forecast the revenue for the pending charge. |

2.  Use the "Create an order" operation to create an active subscription with a pending charge:

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "existingAccountNumber": "A00000001", "status":"Completed", "orderDate": "2024-07-03", "subscriptions": [ { "orderActions": [ { "type": "CreateSubscription", "triggerDates": [ { "triggerDate": "2024-08-29", "name": "ContractEffective" }, { "name": "ServiceActivation", "triggerDate": "2024-08-29" }, { "name": "CustomerAcceptance", "triggerDate": "2024-08-29" } ], "createSubscription": { "terms": { "initialTerm": { "startDate": "2024-07-03", "period": 6, "periodType": "Month", "termType": "TERMED" }, "renewalTerms": [ { "period": 1, "periodType": "Month" } ], "autoRenew": false, "renewalSetting": "RENEW_WITH_SPECIFIC_TERM" }, "subscribeToRatePlans": [ { "productRatePlanId": "f5cf07304ce942618c7429befc0e0000", "chargeOverrides": [ { "productRatePlanChargeId": "f5cf07304ce942618c7429bf83b30003", "estimatedStartDate": "2024-09-27", "startDate": { "triggerEvent": "SpecificDate" } } ] } ] } } ] } ] } |
