---
title: "Orders - create subscription on an existing account with volume charge"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/import/orders/orders---create-subscription-on-an-existing-account-with-volume-charge"
product: "zuora-platform"
scraped_at: "2026-02-19T03:16:46.896Z"
---

# Orders - create subscription on an existing account with volume charge

This reference article lists the fields associated with the Create Subscription on an Existing Account with Volume Charge Data dictionary.

.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| IsNewOrder | Marker Column | TRUE or FALSE |
| Existing Account Number* | The account number that this order will be created under. | string <= 70 characters |
| Order Date* | The date the order is signed. If the contract effective date field is skipped or its value is left as null, all the order actions under this order will use this order date as the contract effective date. | string <date> |
| Order Number | The order number of the new order. If not provided, system will auto-generate a number for this order.Note: Make sure the order number does not contain a slash. | string <= 100 characters |
| IsNewSubscription | Marker Column | TRUE or FALSE |
| Subscriptions Subscription Number | Subscription number of the subscription. For example, A-S00000001. If you do not set this field, Zuora will generate the subscription number. | string <= 100 characters |
| IsNewSubscriptionOrderAction | Marker Column | TRUE or FALSE |
| Subscriptions Order Actions Create Subscription Subscription Number | Leave this empty to represent new subscription creation. Specify a subscription number to update an existing subscription. | string |
| Subscriptions Order Actions Create Subscription Currency Code | The code of currency that is used for this subscription. If the currency is not selected, the default currency from the account will be used. All subscriptions in the same order must use the same currency. The currency for a subscription cannot be changed.Note: This field is available only if you have the Multiple Currencies feature enabled. | string <= 3 characters |
| IsNewSubscriptionOrderActioncreateSubscriptionratePlan | Marker Column | TRUE or FALSE |
| Subscriptions Order Actions Create Subscription Subscribe To Rate Plans Product Rate Plan Id* | Internal identifier of the product rate plan that the rate plan is based on. | string |
| Subscriptions Order Actions Create Subscription Subscribe To Rate Plans External Catalog Plan Id | An external ID of the product rate plan to be added. You can use this field to specify a product rate plan that is imported from an external system. The value of the externalCatalogPlanId field must match one of the values that are predefined in the externallyManagedPlanIds field on a product rate plan. | string |
| IsNewSubscriptionOrderActioncreateSubscriptionratePlanRatePlanCharge | Marker Column | TRUE or FALSE |
| Subscriptions Order Actions Create Subscription Subscribe To Rate Plans Charge Overrides Product Rate Plan Charge Id* | Internal identifier of the product rate plan charge that the charge is based on. | string |
| Subscriptions Order Actions Create Subscription Subscribe To Rate Plans Externally Managed Plan Id | An enum field on the Subscription object to indicate the name of a third-party store. This field is used to represent subscriptions created through third-party stores. Enum: "Amazon" "Apple" "Google" "Roku" | string |
| IsNewSubscriptionOrderActioncreateSubscriptionratePlanRatePlanChargepriceRecurringVolumePricingUpdatechargeTier | Marker Column | TRUE or FALSE |
| Subscriptions Order Actions Create Subscription Subscribe To Rate Plans Charge Overrides Pricing Recurring Volume tier Number* |  |  |
| Subscriptions Order Actions Create Subscription Subscribe To Rate Plans Charge Overrides Pricing Recurring Volume tier Price* | Price or per-unit price of the tier, depending on the value of the priceFormat field. | number |
| Subscriptions Order Actions Create Subscription Subscribe To Rate Plans Charge Overrides Pricing Recurring Volume tier CAP |  | string |
| Subscriptions Order Actions Create Subscription Subscribe To Rate Plans Charge Overrides Pricing Recurring Volume tier Price Format* | Specifies whether the tier has a fixed price or a per-unit price. Enum: "FlatFee" "PerUnit" | string |
| Subscriptions Order Actions Create Subscription Subscribe To Rate Plans Charge Overrides Pricing Recurring Volume tier Starting Unit* | Number of units at which the tier becomes effective. | number |
| Subscriptions Order Actions Create Subscription Subscribe To Rate Plans Charge Overrides Pricing Recurring Volume tier Ending Unit | Limit on the number of units for which the tier is effective. | number |
| Subscriptions Order Actions Create Subscription Subscribe To Rate Plans Charge Overrides Start Date Trigger Event | Condition for the charge to become active. If the value of this field is SpecificDate, use the specificTriggerDate field to specify the date when the charge becomes active. Enum: "ContractEffective" "ServiceActivation" "CustomerAcceptance" "SpecificDate" | string |
| Subscriptions Order Actions Create Subscription Subscribe To Rate Plans Charge Overrides Billing Bill Cycle Day | The day of the month that each billing period begins is only applicable if the value of the billCycleType field is SpecificDayofMonth. | integer [ 0 .. 31 ] |
| Subscriptions Order Actions Create Subscription Subscribe To Rate Plans Charge Overrides Billing Bill Cycle Type | Specifies how Zuora determines the day that each billing period begins on. DefaultFromCustomer - Each billing period begins on the bill cycle day of the account that owns the subscription. SpecificDayofMonth - Use the billCycleDay field to specify the day of the month that each billing period begins on. SubscriptionStartDay - Each billing period begins on the same day of the month as the start date of the subscription. ChargeTriggerDay - Each billing period begins on the same day of the month as the date when the charge becomes active. SpecificDayofWeek - Use the weeklyBillCycleDay field to specify the day of the week that each billing period begins on. Enum: "DefaultFromCustomer" "SpecificDayofMonth" "SubscriptionStartDay" "ChargeTriggerDay" "SpecificDayofWeek" | string |
| Subscriptions Order Actions Create Subscription Subscribe To Rate Plans Charge Overrides Billing Period | Billing frequency of the charge. The value of this field controls the duration of each billing period. If the value of this field is Specific_Days, Specific_Months or Specific_Weeks, use the specificBillingPeriod field to specify the duration of each billing period. Enum: "Month" "Quarter" "Semi_Annual" "Annual" "Eighteen_Months" "Two_Years" "Three_Years" "Five_Years" "Specific_Months" "Subscription_Term" "Week" "Specific_Weeks" "Specific_Days" | string |
| Subscriptions Order Actions Create Subscription Subscribe To Rate Plans Charge Overrides Billing Period Alignment | Specifies how Zuora determines when to start new billing periods. You can use this field to align the billing periods of different charges. AlignToCharge - Zuora starts a new billing period on the first billing day that falls on or after the date the charge becomes active. AlignToSubscriptionStart - Zuora starts a new billing period on the first billing day that falls on or after the subscription's start date. AlignToTermStart - For each subscription term, Zuora starts a new billing period on the first billing day that falls on or after the start date of the term. See the billCycleType field for information about how Zuora determines the billing day. Enum: "AlignToCharge" "AlignToSubscriptionStart" "AlignToTermStart" | string |
| Subscriptions Order Actions Create Subscription Terms Auto Renew | Specifies whether the subscription automatically renews at the end of the each term. Only applicable if the type of the first term is TERMED. | boolean |
| Subscriptions Order Actions Create Subscription Terms Renewal Setting | Specifies the type of the terms that follow the first term if the subscription is renewed. Only applicable if the type of the first term is TERMED. RENEW_WITH_SPECIFIC_TERM - Each renewal term has a predefined duration. The first entry in renewalTerms specifies the duration of the second term of the subscription, the second entry specifies the duration of the third term of the subscription, and so on. The last entry specifies the ultimate duration of each renewal term. RENEW_TO_EVERGREEN - The second term of the subscription does not have a predefined duration. Enum: "RENEW_WITH_SPECIFIC_TERM" "RENEW_TO_EVERGREEN" | string |
| Subscriptions Order Actions Create Subscription Terms Initial Terms Term Type* | Type of the first term. If the value of this field is TERMED, the first term has a predefined duration based on the value of the period field. If the value of this field is EVERGREEN, the first term does not have a predefined duration. Enum: "TERMED" "EVERGREEN" | string |
| Subscriptions Order Actions Create Subscription Terms Initial Terms Period | Duration of the renewal term in months, years, days, or weeks, depending on the value of the periodType field. | integer |
| Subscriptions Order Actions Create Subscription Terms Initial Terms Period Type | Unit of time that the renewal term is measured in. Enum: "Month" "Year" "Day" "Week" | string |
| Subscriptions Order Actions Create Subscription Terms Initial Terms Start Date | Start date of the first term, in YYYY-MM-DD format. | string <date> |
| IsNewSubscriptionOrderActioncreateSubscriptionTermRenewalTerm | Marker Column | TRUE or FALSE |
| Subscriptions Order Actions Create Subscription Terms Renewal Terms Period | Duration of the first term in months, years, days, or weeks, depending on the value of the periodType field. Only applicable if the value of the termType field is TERMED. | integer |
| Subscriptions Order Actions Create Subscription Terms Renewal Terms Period Type | Unit of time that the first term is measured in. Only applicable if the value of the termType field is TERMED. Enum: "Month" "Year" "Day" "Week" | string |
| IsNewSubscriptionOrderActionTriggerDate | Marker Column | TRUE or FALSE |
| Subscriptions Order Actions Trigger Dates Name | Name of the trigger date of the order action. Enum: "ContractEffective" "ServiceActivation" "CustomerAcceptance" | string |
| Subscriptions Order Actions Trigger Dates Trigger Date | Trigger date in YYYY-MM-DD format. | string <date> |
| Scheduling Options Scheduled Date | The date for the scheduled order. | string <date> |
| Scheduling Options Scheduled Date Policy | The policy that determines the date for a scheduled order. | SpecificDate |
