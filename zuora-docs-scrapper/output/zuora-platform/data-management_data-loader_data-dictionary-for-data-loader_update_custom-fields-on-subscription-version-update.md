---
title: "Custom fields on subscription version update"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/update/custom-fields-on-subscription-version-update"
product: "zuora-platform"
scraped_at: "2026-02-20T17:37:57.937Z"
---

# Custom fields on subscription version update

This referece article lists all the fields associated with the Update Custom Fields on Subscription Version data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Object | Field Name | Value | Required to Update | Description |
| --- | --- | --- | --- | --- |
| Subscription | IsNewSubscription | True or False | This field is required when updating custom fields on a specifc version of Subscription. | Indicator Column marking the start of a new object |
| Subscription | Subscription Number* | string <string> | Required for updating the custom fields. | The subscription number to be updated. |
| Subscription | Version* | string <string> | Required for updating the custom fields. | The subscription version to be updated. |
| Rate Plan | IsNewRatePlan | True or False | This field is required when updating custom fields on a rate plan charge. | Indicator Column marking the start of a new object. |
| Rate Plan | Rate Plans Rate Plan Id* | string | This field is required when updating custom fields on a rate plan charge. | The rate plan id in any version of the subscription. This will be linked to the only one rate plan in the current version. |
| Rate Plan Charge | IsNewRatePlanRatePlanCharge | True or False | This field is required when updating custom fields on a rate plan charge. | Indicator Column marking the start of a new object. |
| Rate Plan Charge | Rate Plans Charge Charge Id* | string | This field is required when updating custom fields on a rate plan charge. | Use either this field or the chargeNumber field to specify the charge for which you will be updating the custom fields. By using this field you actually specify a specific charge segment of a charge. |
| Rate Plan Charge | Rate Plans Charge Charge Number* | string | This field is required when updating custom fields on a rate plan charge. | Use either this field or the chargeId field to specify the charge for which you will be updating the custom fields. By using this field you actually specify the last charge segment of a charge. |
