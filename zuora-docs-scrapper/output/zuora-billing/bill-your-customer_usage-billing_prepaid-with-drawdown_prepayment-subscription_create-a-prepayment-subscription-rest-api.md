---
title: "Create a prepayment subscription - REST API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/prepayment-subscription/create-a-prepayment-subscription---rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T08:29:30.707Z"
---

# Create a prepayment subscription - REST API

This document provides instructions on using the REST API to create a prepayment subscription, including setting up prepayment and drawdown charges.

Use the [Create an order](https://developer.zuora.com/v1-api-reference/api/operation/POST_Order/) operation to create the subscription.

Determine the values of the following fields specific to prepayment charge and drawdown charge in the new subscription:

-   prepayment charge:

    -   `prepaidQuantity`

    -   `validityPeriodType`

-   drawdown charge:

    -   `drawdownRate`


## Sample REST API request to create a prepayment subscription

Request: `POST /v1/orders`

Request Body: { "orderDate": "2022-01-01", "existingAccountNumber": "A00000010", "subscriptions": \[ { "orderActions": \[ { "type": "CreateSubscription", "triggerDates": \[ { "name": "ContractEffective", "triggerDate": "2022-01-01" }, { "name": "ServiceActivation", "triggerDate": "2022-01-01" }, { "name": "CustomerAcceptance", "triggerDate": "2022-01-01" } \], "createSubscription": { "terms": { "initialTerm": { "period":12, "periodType":"Month", "termType": "TERMED" }, "renewalSetting":"RENEW\_WITH\_SPECIFIC\_TERM", "renewalTerms":\[{ "period":"12", "periodType":"Month" }\] }, //Add the prepayment charge and the drawdown charge to the subscription: "subscribeToRatePlans":\[{ "productRatePlanId":"402880ed7e2ffb23017e30021f420011", "chargeOverrides":\[{ "productRatePlanChargeId":"402880ed7e2ffb23017e3002a1c60013", "prepaidQuantity": 10, "validityPeriodType": "Month" }, { "productRatePlanChargeId":"4028818a7e2d8366017e2dae5980001e", "drawdownRate":1 } \] }\] } } \] } \], "processingOptions": { "runBilling": false, "collectPayment": false } }

You can view the customer's prepaid balance through the Zuora UI or Data Query.
