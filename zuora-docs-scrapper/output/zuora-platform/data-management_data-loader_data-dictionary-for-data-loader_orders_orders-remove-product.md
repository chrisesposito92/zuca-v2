---
title: "Orders - remove product"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/orders/orders---remove-product"
product: "zuora-platform"
scraped_at: "2026-01-15T21:57:27.948Z"
---

# Orders - remove product

This reference article lists all the fields associated with the Remove Product data dictionary.

.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| IsNewOrder | Marker Column | TRUE |
| Existing Account Number* | The account number that this order will be created under. | string <= 70 characters |
| Order Date* | The date when the order is signed. All the order actions under this order will use this order date as the contract effective date if the contract effective date field is skipped or its value is left as null. | string <date> |
| IsNewSubscription | Marker Column | IsMarker Column : New object begins |
| Subscriptions Subscription Number* | Subscription number of the subscription. For example, A-S00000001. If you do not set this field, Zuora will generate the subscription number. | string <= 100 characters |
| IsNewSubscriptionOrderAction | Marker Column | IsMarker Column : New object begins |
| Subscriptions Order Actions Remove Product Rate Plan Id* | ID of the rate plan to remove. This can be the latest version or any history version of ID. | string |
| IsNewSubscriptionOrderActionTriggerDate | Marker Column | IsMarker Column : New object begins |
| Subscriptions Order Actions Trigger Dates Name | Name of the trigger date of the order action. Enum: "ContractEffective" "ServiceActivation" "CustomerAcceptance" | string |
| Subscriptions Order Actions Trigger Dates Trigger Date | Trigger date in YYYY-MM-DD format. | string <date> |
| Scheduling Options Scheduled Date | The date for the scheduled order. | string <date> |
| Scheduling Options Scheduled Date Policy | The policy that determines the date for a scheduled order. | SpecificDate |
