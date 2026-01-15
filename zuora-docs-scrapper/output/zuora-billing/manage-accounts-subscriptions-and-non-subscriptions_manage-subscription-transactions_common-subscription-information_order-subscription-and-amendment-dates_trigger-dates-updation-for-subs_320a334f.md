---
title: "Updating the subscription trigger dates using the Zuora REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/order-subscription-and-amendment-dates/trigger-dates-updation-for-subscriptions/updating-the-subscription-trigger-dates-using-the-zuora-rest-api"
product: "zuora-billing"
scraped_at: "2026-01-15T21:56:13.559Z"
---

# Updating the subscription trigger dates using the Zuora REST API

This article explains how to update trigger dates for a subscription using the Zuora REST API.

You can update the trigger dates for a subscription by using the Update action to set the following fields of the Subscription object:

-   ContractEffectiveDate

-   ServiceActivationDate

-   ContractAcceptanceDate


| Request | POST /v1/action/update |
| --- | --- |
| Request Body | { "objects":[ { "Id":"ff80808174ba55290174bdbcb6680727", "ContractEffectiveDate":"2020-10-03", "ContractAcceptanceDate":"2020-10-06", "ServiceActivationDate":"2020-10-03" } ], "type":"Subscription" } |
