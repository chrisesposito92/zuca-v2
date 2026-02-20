---
title: "Bill Run with filters"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/import/bill-run/bill-run-with-filters"
product: "zuora-platform"
scraped_at: "2026-02-20T17:36:46.889Z"
---

# Bill Run with filters

This reference document provides a comprehensive list of fields associated with the Bill Run with Filters data dictionary.

.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| IsNewBillRun | IsMarker Column : New object begins | TRUE or FALSE |
| Auto Email | Default: false Whether to automatically send emails after Auto-Post is complete.Note: To use this field, you must first set the Support Bill Run Auto-Post billing rule to Yes through the Zuora UI | boolean |
| Auto Post | Default: false Whether to automatically post the bill run after the bill run is created.Note: To use this field, you must first set the Support Bill Run Auto-Post billing rule to Yes through the Zuora UI. | boolean |
| Auto Renewal | Default: false Whether to automatically renew auto-renew subscriptions that are up for renewal. | boolean |
| Charge Type To Exclude | The batch of accounts for this bill run. You can only specify either this field or the billRunFilters field. Values: AllBatches or an array of Batch*n* where n is one of numbers 1 - 50, for example, Batch7.Note: By default, you have 50 configurable account batches. To increase the limit to 200 batches, you must have the Performance Booster Elite package. | Array of strings |
| Invoice Date | The day of the bill cycle. This field is only valid if the batches field is specified. Values: AllBillCycleDays or one of numbers 1 - 31 for an ad-hoc bill run AllBillCycleDays, one of numbers 1 - 31, or AsRunDay for a scheduled bill run | string |
| Invoice Day Of Month | The day of month of invoice date for this bill run. Specify a day of the month. If you specify 31, even though the month doesn't have 31, for example, February or April, the date recurs on the end day of each scheduled month.Note: This field is only valid when the repeatType field is set to Monthly. You can use one of the following methods to specify the invoice date: Specify invoiceDate Specify invoiceDateMonthOffset and InvoiceDateDayOfMonth. | integer [ 1 .. 31 ] |
| Invoice Month Offset | The month offset of invoice date for this bill run compared to bill run execution date.Note: This field is only valid when the repeatType field is set to Monthly. You can use one of the following methods to specify the invoice date: Specify invoiceDate Specify invoiceDateMonthOffset and InvoiceDateDayOfMonth. | integer |
| Name | The name of the bill run. | string |
| No Email For Zero Amount Invoice | Default: false Whether to suppress emails for invoices with zero total amount generated in this bill run after the bill run is complete. As a best practice do not send emails for invoices with zero amount. | boolean |
| Target Date | The target date for this bill run. You must specify this field when creating an ad-hoc bill run. For scheduled bill runs, if you do not specify any value for this field, the target date is the value of the repeatFrom field. | string <date> |
| Target Date Day Of Month | The day of month of target date for this bill run. Specify a day of the month. If you specify 31, even though the month doesn't have 31, for example, February or April, the date recurs on the end day of each scheduled month. Note:Note: This field is only valid when the repeatType field is set to Monthly. | integer [ 1 .. 31 ] |
| Target Date Month Offset | The month offset of target date for this bill run compared to bill run execution date.Note: This field is only valid when the repeatType field is set to Monthly. | integer |
| IsNewBillRunFilters | IsMarker Column : New object begins | TRUE or FALSE |
| Bill Run Filters Account Id* | The target account of the bill run. If multiple subscriptions are specified, the account ID must be the same. | string |
| Bill Run Filters Filter Type* | To create bill runs at account level or subscription level. Enum: "Account" "Subscription" | string |
| Bill Run Filters Subscription Id* | The target subscripiton ID of the account. If you set the filterType field to Subscription, you must specify the subscriptionId field. | string |
| Schedule Monthly On End Of Month | Whether to schedule monthly bill run on the end of month or the specific day of month.Note: This field is available only when the repeatType field is set to Monthly and the repeatFrom field is set to the end of month. | boolean |
| Schedule Repeat From | The start date of the scheduled bill run. | string <date> |
| Schedule Repeat To | The end date of of the scheduled bill run. | string <date> |
| Schedule Repeat Type | The repeat type of the bill run. Enum: "None" "Daily" "Weekly" "Monthly" | string |
| Schedule Run Time | The scheduled run time (hour) of day. Values: 0 - 23 | integer |
| Schedule Weekly On Day | The repeat day in a week. This field is required if you set repeatType field to Weekly. Items Enum: "Mon" "Tue" "Wed" "Thu" "Fri" "Sat" "Sun" | Array of strings |
