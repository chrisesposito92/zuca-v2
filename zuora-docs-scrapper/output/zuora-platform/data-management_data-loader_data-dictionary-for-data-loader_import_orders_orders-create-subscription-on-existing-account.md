---
title: "Orders - create subscription on existing account"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/import/orders/orders---create-subscription-on-existing-account"
product: "zuora-platform"
scraped_at: "2026-02-19T03:16:46.861Z"
---

# Orders - create subscription on existing account

This reference article lists the fields associated with the Creating Subscription on Existing Account data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| IsNewOrder | Marker Column | TRUE |
| Existing Account Number* | The account number that this order will be created under. | string <= 70 characters |
| Order Date* | The date the order is signed. If the contract effective date field is skipped or its value is left as null, all the order actions under this order will use this order date as the contract effective date. | string <date> |
| IsNewSubscription | Marker Column | IsMarker Column : New object begins |
| IsNewSubscriptionOrderAction | Marker Column | IsMarker Column : New object begins |
| Subscriptions Order Actions Create Subscription Currency Code | The code of currency that is used for this subscription. If the currency is not selected, the default currency from the account will be used. All subscriptions in the same order must use the same currency. The currency for a subscription cannot be changed. | string<=3 characters |
| IsNewSubscriptionOrderActioncreateSubscriptionratePlan | Marker Column | IsMarker Column : New object begins |
| Subscriptions Order Actions Create Subscription Subscribe To Rate Plans Product Rate Plan Id* | Internal identifier of the product rate plan that the rate plan is based on. | string |
| Subscriptions Order Actions Create Subscription Terms Auto Renew | Specifies whether the subscription automatically renews at the end of the each term. Only applicable if the type of the first term is TERMED. | boolean |
| Subscriptions Order Actions Create Subscription Terms Renewal Setting | Specifies the type of the terms that follow the first term if the subscription is renewed. Only applicable if the type of the first term is TERMED. RENEW_WITH_SPECIFIC_TERM—Each renewal term has a predefined duration. The first entry in renewalTerms specifies the duration of the second term of the subscription, the second entry specifies the duration of the third term of the subscription, and so on. The last entry specifies the ultimate duration of each renewal term. RENEW_TO_EVERGREEN - The second term of the subscription does not have a predefined duration. Enum: "RENEW_WITH_SPECIFIC_TERM" "RENEW_TO_EVERGREEN" | string |
| Subscriptions Order Actions Create Subscription Terms Initial Terms Term Type* | Type of the first term. If the value of this field is TERMED, the first term has a predefined duration based on the value of the period field. If the value of this field is EVERGREEN, the first term does not have a predefined duration. Enum: "TERMED" "EVERGREEN" | string |
| Subscriptions Order Actions Create Subscription Terms Initial Terms Period | Duration of the first term in months, years, days, or weeks, depending on the value of the periodType field. Only applicable if the value of the termType field is TERMED. | integer |
| Subscriptions Order Actions Create Subscription Terms Initial Terms Period Type | Unit of time that the first term is measured in. Only applicable if the value of the termType field is TERMED. Enum: "Month" "Year" "Day" "Week" | string |
| Subscriptions Order Actions Create Subscription Terms Initial Terms Start Date | Start date of the first term, in YYYY-MM-DD format. | string <date> |
| IsNewSubscriptionOrderActioncreateSubscriptionTermRenewalTerm | Marker Column | IsMarker Column : New object begins |
| Subscriptions Order Actions Create Subscription Terms Renewal Terms Period | Duration of the renewal term in months, years, days, or weeks, depending on the value of the periodType field. | integer |
| Subscriptions Order Actions Create Subscription Terms Renewal Terms Period Type | Unit of time that the renewal term is measured in. Enum: "Month" "Year" "Day" "Week" | string |
| IsNewSubscriptionOrderActionTriggerDate | Marker Column | IsMarker Column : New object begins |
| Subscriptions Order Actions Trigger Dates Name | Name of the trigger date of the order action. Enum: "ContractEffective" "ServiceActivation" "CustomerAcceptance" | string |
| Subscriptions Order Actions Trigger Dates Trigger Date | Trigger date in YYYY-MM-DD format. | string <date> |
| Scheduling Options Scheduled Date | The date for the scheduled order. | string <date> |
| Scheduling Options Scheduled Date Policy | The policy that determines the date for a scheduled order. | SpecificDate |
