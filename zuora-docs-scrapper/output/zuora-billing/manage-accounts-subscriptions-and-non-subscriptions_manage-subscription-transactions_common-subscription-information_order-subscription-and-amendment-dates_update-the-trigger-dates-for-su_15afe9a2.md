---
title: "Use the Zuora REST API for updating subscription trigger dates"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/order-subscription-and-amendment-dates/update-the-trigger-dates-for-subscriptions/use-the-zuora-rest-api-for-updating-subscription-trigger-dates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:19:07.105Z"
---

# Use the Zuora REST API for updating subscription trigger dates

This article explains how to update trigger dates for a subscription using the Zuora REST API.

You can update the trigger dates for a subscription by using the Update action to set the following fields of the Subscription object:

-   ContractEffectiveDate

-   ServiceActivationDate

-   ContractAcceptanceDate


| Request | POST /v1/action/update |
| --- | --- |
| Request Body | { "objects":[ { "Id":"ff80808174ba55290174bdbcb6680727", "ContractEffectiveDate":"2020-10-03", "ContractAcceptanceDate":"2020-10-06", "ServiceActivationDate":"2020-10-03" } ], "type":"Subscription" } |
