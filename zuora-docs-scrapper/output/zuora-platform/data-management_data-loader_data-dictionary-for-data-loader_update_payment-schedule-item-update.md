---
title: "Payment schedule item update"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/update/payment-schedule-item-update"
product: "zuora-platform"
scraped_at: "2026-02-20T17:38:13.319Z"
---

# Payment schedule item update

This reference document lists all the fields associated with the Update Payment Schedule Item Data Dictionary.

.
Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| IsNewPaymentScheduleItem | Marker Column | TRUE |
| Id* | The unique ID of a payment schedule item. | string |
| Amount | The amount of the payment. | number <decimal> |
| Currency | The currency of the payment. | string |
| Description | The description of the payment schedule item. | string |
| Link Payments | Container for payments linked to the payment schedule item. | Array of strings |
| Payment Gateway Id | ID of the payment gateway of the payment schedule item. | string |
| Payment Method Id | ID of the payment method of the payment schedule item. | string |
| Payment Method Id |  |  |
| Run Hour | The hour of the day in the tenant’s timezone at which this payment be collected. If the payment runHour and scheduledDate are backdated, the system will collect the payment when the next runHour occurs. | integer |
| Scheduled Date | The scheduled date when the payment is processed. | string <date> |
| Unlink Payments | Container for payments to be unlinked from the payment schedule item. | Array of strings |
| IsNewPaymentOption | Marker Column | TRUE/ FALSE |
| Payment Option Type | The type of the payment option. Currently, only GatewayOptions is supported for specifying Gateway Options fields supported by a payment gateway. | string |
| Payment Option Detail SecCode |  | string |
