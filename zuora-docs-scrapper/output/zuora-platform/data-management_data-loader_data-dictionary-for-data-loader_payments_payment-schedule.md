---
title: "Payment schedule"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/payments/payment-schedule"
product: "zuora-platform"
scraped_at: "2026-01-15T21:57:29.265Z"
---

# Payment schedule

This reference document lists all the fields associated with the Payment Schedule Data dictionary .

.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| Items PaymentOption Detail SecCode | SEC (Standard Entry Class) code information | 3 letter code |
| PaymentOption Detail SecCode | SEC (Standard Entry Class) code information | 3 letter code |
| Currency | Currency of the payment schedule. | 3 letter currency code |
| Items Currency | The currency of the payment. | 3 letter currency code |
| Account Number* | Account number of the customer account the payment schedule belongs to. | Alphanumeric |
| Billing Document Number | ID of the billing document. NOTE: If a billing document is specified, either id or number of the billing document must be specified. | Alphanumeric |
| Description | Description of the payment schedule. | Alphanumeric |
| Items Billing Document Number | ID of the billing document. NOTE: If a billing document is specified, either id or number of the billing document must be specified. | Alphanumeric |
| Items Description | Description of the payment schedule item. | Alphanumeric |
| Items PaymentOption Type | The type of the payment option. | Alphanumeric |
| Payment Schedule Number | You can use this field to specify a unique number of the payment schedule. | Alphanumeric |
| PaymentOption Type | The type of the payment option. | Alphanumeric |
| Account Id* | ID of the customer account the payment schedule belongs to. | Alphanumeric Id |
| Billing Document Id | ID of the billing document.Note: If a billing document is specified, either id or number of the billing document must be specified. | Alphanumeric Id |
| Items Billing Document Id | ID of the billing document.Note: If a billing document is specified, either id or number of the billing document must be specified. | Alphanumeric Id |
| Items Payment Gateway Id | The ID of the payment gateway. | Alphanumeric Id |
| Items Payment Method Id | The ID of the payment method. | Alphanumeric Id |
| Payment Gateway Id | ID of the payment gateway. | Alphanumeric Id |
| Payment Method Id | ID of the payment method. | Alphanumeric Id |
| Pre-Payment | Indicates whether the payments created by the payment schedule will be used as reserved payments. | Boolean(TRUE\|FALSE) |
| Standalone | Indicate whether the payments created by the payment schedule are standalone payments or not. When setting to true, standalone payments will be created. When setting to false, you can either specify a billing document, or not specifying any billing documents. In the later case, unapplied payments will be created. If set to null, standalone payment will be created. | Boolean(TRUE\|FALSE) |
| Items Scheduled Date | The date to collect the payment. | Date(YYYY-MM-dd) |
| Start Date | The date for the first payment collection. | Date(YYYY-MM-dd) |
| Amount | The amount of each payment schedule item in the payment | Decimal |
| Items Amount | The amount that needs to be collected by this payment schedule item. | Decimal |
| Total Amount | The total amount of that the payment schedule will collect. This field is only available for recurring payment schedules. | Decimal |
| Billing Document Type* | The type of the billing document. | Invoice,DebitMemo |
| Items Billing Document Type* | The type of the billing document. | Invoice,DebitMemo |
| Period | The frequency for the payment collection since the startDate. | Monthly,Weekly,BiWeekly |
| Occurrences | The number of payment schedule item to be created. | Number(0-1000) |
| Items Run Hour | At which hour in the day in the tenant’s timezone this payment will be collected. | Number(0-23) |
| Run Hour | Specifies at which hour in the day in the tenant’s time zone when this payment will be collected. | Number(0-23) |
| IsNewItems | Marker Column | TRUE,FALSE |
| IsNewItemsPaymentOption | Marker Column | TRUE,FALSE |
| IsNewPaymentOption | Marker Column | TRUE,FALSE |
| IsNewPaymentSchedule | Marker Column | TRUE,FALSE |
