---
title: "Updating the trigger condition using the Zuora REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/order-subscription-and-amendment-dates/trigger-condition-updation-for-the-subscription-rate-plan-charges/updating-the-trigger-condition-using-the-zuora-rest-api"
product: "zuora-billing"
scraped_at: "2026-01-15T21:56:13.162Z"
---

# Updating the trigger condition using the Zuora REST API

This topic explains on updating the trigger condition for a charge using the Zuora REST API by setting the TriggerEvent field of the RatePlanCharge object.

You can update the trigger condition for a charge by using the [Update](https://www.zuora.com/developer/api-references/api/operation/Action_POSTupdate) action to set the `TriggerEvent` field of the [RatePlanCharge](https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/rateplancharge) object. The value of the `TriggerEvent` field can be one of the following:

-   ContractEffective

-   ServiceActivation

-   CustomerAcceptance

-   SpecificDate - When selected, you must set the specific trigger date in the `TriggerDate` field.


| Request | POST /v1/action/update |
| --- | --- |
| Request Body | { "objects":[ { "Id":"2c92c0f874048c1f017405ce70df2788", "TriggerEvent":"SpecificDate", "TriggerDate":"2020-09-01" } ], "type":"RatePlanCharge" } |
