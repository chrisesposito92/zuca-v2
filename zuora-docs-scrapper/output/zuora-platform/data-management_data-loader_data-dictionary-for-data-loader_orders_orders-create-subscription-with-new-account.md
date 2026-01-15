---
title: "Orders - create subscription with new account"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/orders/orders---create-subscription-with-new-account"
product: "zuora-platform"
scraped_at: "2026-01-15T21:57:03.520Z"
---

# Orders - create subscription with new account

This reference lists all the fields associated with the Create Subscription with New Account data dictionary.

.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value | Unsupported Fields |
| --- | --- | --- | --- |
| IsNewOrder | Marker Column | TRUE or FALSE | New Account Credit Card Card Number |
| Order Date* | The date the order is signed. If the contract effective date field is skipped or its value is left as null, all the order actions under this order will use this order date as the contract effective date. | string <date> | New Account Credit Card Card Type |
| New Account Bill Cycle Day* | The day of the month on which the account prefers billing periods to begin. If set to 0, the bill cycle day will be set as "AutoSet." | integer |  |
| New Account Currency* | ISO 3-letter currency code (uppercase). For example, USD. | string | New Account Credit Card Expiration Year |
| New Account Name* | Account name. | string <= 255 characters | New Account Credit Card Holder Info Address Line1 |
| New Account Invoice Delivery Prefs Email | Specifies whether to turn on the invoice delivery method 'Email' for the new account. Values are: true (default). Turn on the invoice delivery method 'Email' for the new account. false. Turn off the invoice delivery method 'Email' for the new account. | boolean | New Account Credit Card Holder Info City |
| New Account Invoice Delivery Prefs Print | Specifies whether to turn on the invoice delivery method 'Print' for the new account. Values are: true. Turn on the invoice delivery method 'Print' for the new account. false (default). Turn off the invoice delivery method 'Print' for the new account. | boolean | New Account Credit Card Holder Info Country |
| New Account Bill To Contact First Name* | First name of the contact. | string <= 100 characters | New Account Credit Card Holder Info Email |
| New Account Bill To Contact Last Name* | Last name of the contact. | string <= 100 characters | New Account Credit Card Holder Info Phone |
| New Account Bill To Contact Address1 | First line of the contact's address. This is often a street address or a business name. | string <= 255 characters | New Account Credit Card Holder Info State |
| New Account Bill To Contact City | City of the contact's address. | string <= 40 characters | New Account Credit Card Holder Info Zip Code |
| New Account Bill To Contact Country | Country; must be a valid country name or abbreviation. If using Zuora Tax, you must specify a country in the bill-to contact to calculate tax. | string <= 64 characters | New Account Credit Card Holder Info card Holder Name |
| New Account Bill To Contact State | State or province of the contact's address. | string <= 40 characters |  |
| New Account Bill To Contact Work Email | Business email address of the contact. | string <email> <= 80 characters |  |
| IsNewSubscription | Marker Column | True or False |  |
| Subscriptions Subscription Number | Subscription number of the subscription. For example, A-S00000001. If you do not set this field, Zuora will generate the subscription number. | string <= 100 characters |  |
| IsNewSubscriptionOrderAction | Marker Column | True or False |  |
| Subscriptions Order Actions Create Subscription Notes | Notes about the subscription. These notes are only visible to Zuora users. | string <= 500 characters |  |
| Subscriptions Order Actions Create Subscription Currency Code | The code of currency that is used for this subscription. If the currency is not selected, the default currency from the account will be used. All subscriptions in the same order must use the same currency. The currency for a subscription cannot be changed.Note: This field is available only if you have the Multiple Currencies feature enabled. | string <= 3 characters |  |
| IsNewSubscriptionOrderActioncreateSubscriptionratePlan | Marker Column | True or False |  |
| Subscriptions Order Actions Create Subscription Subscribe To Rate Plans Product Rate Plan Id | Internal identifier of the product rate plan that the rate plan is based on. | string |  |
| Subscriptions Order Actions Create Subscription Subscribe To Rate Plans External Catalog Plan Id | An external ID of the product rate plan to be added. You can use this field to specify a product rate plan that is imported from an external system. The value of the externalCatalogPlanId field must match one of the values that are predefined in the externallyManagedPlanIds field on a product rate plan. | string |  |
| Subscriptions Order Actions Create Subscription Subscribe To Rate Plans Externally Managed Plan Id | An enum field on the Subscription object to indicate the name of a third-party store. This field is used to represent subscriptions created through third-party stores. Enum: "Amazon" "Apple" "Google" "Roku" | string |  |
| Subscriptions Order Actions Create Subscription Terms Auto Renew | Specifies whether the subscription automatically renews at the end of the each term. Only applicable if the type of the first term is TERMED. | boolean |  |
| Subscriptions Order Actions Create Subscription Terms Renewal Setting | Specifies the type of the terms that follow the first term if the subscription is renewed. This is only applicable if the type of the first term is TERMED. RENEW_WITH_SPECIFIC_TERM - Each renewal term has a predefined duration. The first entry in renewalTerms specifies the duration of the second term of the subscription, the second entry in renewalTerms specifies the duration of the third term of the subscription, and so on. The last entry in renewalTerms specifies the ultimate duration of each renewal term. RENEW_TO_EVERGREEN - The second term of the subscription does not have a predefined duration. Enum: "RENEW_WITH_SPECIFIC_TERM" "RENEW_TO_EVERGREEN" | string |  |
| Subscriptions Order Actions Create Subscription Terms Initial Terms Term Type* | Type of the first term. If the value of this field is TERMED, the first term has a predefined duration based on the value of the period field. If the value of this field is EVERGREEN, the first term does not have a predefined duration. Enum: "TERMED" "EVERGREEN" | string |  |
| Subscriptions Order Actions Create Subscription Terms Initial Terms Period | Duration of the renewal term in months, years, days, or weeks, depending on the value of the periodType field. | integer |  |
| Subscriptions Order Actions Create Subscription Terms Initial Terms Period Type | Unit of time that the renewal term is measured in. Enum: "Month" "Year" "Day" "Week" | string |  |
| Subscriptions Order Actions Create Subscription Terms Initial Terms Start Date | Start date of the first term, in YYYY-MM-DD format. | string <date> |  |
| IsNewSubscriptionOrderActioncreateSubscriptionTermRenewalTerm | Marker Column | True or False |  |
| Subscriptions Order Actions Create Subscription Terms Renewal Terms Period | Duration of the first term in months, years, days, or weeks, depending on the value of the periodType field. Only applicable if the value of the termType field is TERMED. | integer |  |
| Subscriptions Order Actions Create Subscription Terms Renewal Terms Period Type | Unit of time that the first term is measured in. Only applicable if the value of the termType field is TERMED. Enum: "Month" "Year" "Day" "Week" | string |  |
| IsNewSubscriptionOrderActionTriggerDate | Marker Column | True or False |  |
| Subscriptions Order Actions Trigger Dates Name | Name of the trigger date of the order action. Enum: "ContractEffective" "ServiceActivation" "CustomerAcceptance" | string |  |
| Subscriptions Order Actions Trigger Dates Trigger Date | Trigger date in YYYY-MM-DD format. | string <date> |  |
| Scheduling Options Scheduled Date | The date for the scheduled order. | string <date> |  |
| Scheduling Options Scheduled Date Policy | The policy that determines the date for a scheduled order. | SpecificDate |  |
