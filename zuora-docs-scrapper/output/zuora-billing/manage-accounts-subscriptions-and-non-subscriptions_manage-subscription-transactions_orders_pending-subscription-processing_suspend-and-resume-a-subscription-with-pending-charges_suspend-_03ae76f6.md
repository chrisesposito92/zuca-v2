---
title: "Suspend and resume a subscription with pending charges through the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/pending-subscription-processing/suspend-and-resume-a-subscription-with-pending-charges/suspend-and-resume-a-subscription-with-pending-charges-through-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:31:07.981Z"
---

# Suspend and resume a subscription with pending charges through the REST API

This topic explains how to suspend and resume subscriptions with pending charges using the REST API by performing Suspend and Resume order actions.

To suspend an active subscription with pending charges, use the Create an order operation to perform a Suspend order action. To resume a suspended subscription with pending charges, use the same operation to perform a Resume order action. See tutorials as follows:

1.  Determine the values of the following fields:

    | Variable | Description |
    | --- | --- |
    | ContractEffective | The date of the contract that governs the subscription. To create an active subscription with pending charges, you must specify this field. |
    | ServiceActivation | The date on which the services or products within a subscription have been activated and access has been provided to the customer. To create an active subscription with pending charges, you must specify this field. |
    | CustomerAcceptance | The date on which the services or products within a subscription have been accepted by the customer. To create an active subscription with pending charges, you must specify this field. |

2.  Use the "Create an order" operation to suspend an active subscription with pending charges:

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderNumber": null, "orderDate": "2024-08-20", "existingAccountNumber": "A00000001", "subscriptions": [ { "subscriptionNumber": "A-S00000001", "orderActions": [ { "type": "Suspend", "triggerDates": [ { "triggerDate": "2024-08-29", "name": "ContractEffective" }, { "name": "ServiceActivation", "triggerDate": "2024-08-29" }, { "name": "CustomerAcceptance", "triggerDate": "2024-08-29" } ], "suspend": { "suspendPolicy": "SpecificDate", "suspendSpecificDate": "2024-10-20" } } ] } ] } |

3.  Use the "Create an order" operation to resume a suspended subscription:

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderNumber": null, "orderDate": "2024-09-20", "status":"Completed", "existingAccountNumber": "A00000001", "subscriptions": [ { "subscriptionNumber": "A-S00000001", "orderActions": [ { "type": "Resume", "triggerDates": [ { "triggerDate": "2024-08-29", "name": "ContractEffective" }, { "name": "ServiceActivation", "triggerDate": "2024-08-29" }, { "name": "CustomerAcceptance", "triggerDate": "2024-08-29" } ], "resume":{ "resumePolicy":"SpecificDate", "resumeSpecificDate":"2024-11-20" } } ] } ] } |
