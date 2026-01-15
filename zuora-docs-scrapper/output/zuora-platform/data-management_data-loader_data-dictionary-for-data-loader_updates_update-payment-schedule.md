---
title: "Update payment schedule"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/updates/update-payment-schedule"
product: "zuora-platform"
scraped_at: "2026-01-15T21:57:57.428Z"
---

# Update payment schedule

This reference article lists all the fields associated with the Update Payment Schedule Data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| IsNewPaymentSchedule | Marker Column | IsMarker Column : New object begins |
| Id* | The unique ID or number of a payment schedule. For example, 8a90857b822459cd018224dcb9eb13be | string |
| Amount | Indicates the updated amount of the pending payment schedule items. | number |
| Currency | Indicates the updated currency of the pending payment schedule items. | string |
| Occurrences | Indicates the updated number of payment schedule items that are created by the payment schedule. | integer |
| Payment Gateway Id | Indicates the updated payment gateway ID of the pending payment schedule items. | string |
| Payment Method Id | Indicates the updated payment method ID of the pending payment schedule items. | string |
| Period | ndicates the updated period of the pending payment schedule items. Enum: "Monthly" "Weekly" "BiWeekly" | string |
| Period Start Date | Indicates the updated collection date for the next pending payment schedule item. | string <date> |
| Run Hour | Specifies at which hour of the day in the tenant’s time zone this payment will be collected. Available values: [0,1,2,~,22,23]. | integer <date> |
| IsNewPaymentOption | Marker Column | IsMarker Column : New object begins |
| Payment Option Type | The type of the payment option. Currently, only GatewayOptions is supported for specifying Gateway Options fields supported by a payment gateway. | string |
| Payment Option Detail Key | The value of the field. | string |
| Payment Option Detail Value | The name of the field. | string |
