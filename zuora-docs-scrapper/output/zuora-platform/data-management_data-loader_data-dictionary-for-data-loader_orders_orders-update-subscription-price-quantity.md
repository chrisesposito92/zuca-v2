---
title: "Orders - update subscription price quantity"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/orders/orders---update-subscription-price-quantity"
product: "zuora-platform"
scraped_at: "2026-01-15T21:57:29.206Z"
---

# Orders - update subscription price quantity

This reference article lists all the fields associated with the Update Subscription Price Quantity data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| IsNewOrder | Marker Column | TRUE |
| Existing Account Number* | The account number that this order will be created under. | string <= 70 characters |
| Order Date* | The date when the order is signed. All the order actions under this order will use this order date as the contract effective date if the contract effective date field is skipped or its value is left as null. | string <date> |
| IsNewSubscription | Marker Column | IsMarker Column : New object begins |
| Subscriptions Subscription Number* | Subscription number of the subscription. For example, A-S00000001. If you do not set this field, Zuora will generate the subscription number. | string <= 100 characters |
| IsNewSubscriptionOrderAction | Marker Column | IsMarker Column : New object begins |
| IsNewSubscriptionOrderActionTriggerDate | Marker Column | IsMarker Column : New object begins |
| Subscriptions Order Actions Trigger Dates Name | Name of the trigger date of the order action. Enum: "ContractEffective" "ServiceActivation" "CustomerAcceptance" | string |
| Subscriptions Order Actions Trigger Dates Trigger Date | Trigger date in YYYY-MM-DD format. | string <date> |
| Subscriptions Order Actions Update Product Rate Plan Id* | ID of the rate plan to remove. This can be the latest version or any history version of ID. Note that the removal of a rate plan through the Change Plan order action supports the function of removal before future-dated removals, as in a Remove Product order action. | string |
| IsNewSubscriptionOrderActionUpdateProductRatePlanCharge | Marker Column | IsMarker Column : New object begins |
| Subscriptions Order Actions Update Product Charge Updates Charge Number | Number of a product rate-plan charge for this subscription. | string |
| Subscriptions Order Actions Update Product Charge Updates Pricing Recurring Per Unit List Price* | Per-unit price of the charge. | number |
| Subscriptions Order Actions Update Product Charge Updates Pricing Recurring Per Unit Quantity | Number of units purchased. | number >= 0 |
| Scheduling Options Scheduled Date | The date for the scheduled order. | string <date> |
| Scheduling Options Scheduled Date Policy | The policy that determines the date for a scheduled order. | SpecificDate |
