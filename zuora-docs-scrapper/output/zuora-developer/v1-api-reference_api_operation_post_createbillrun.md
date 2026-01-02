---
title: "POST CreateBillRun"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_CreateBillRun/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:59:41.487Z"
---

## Create a bill run

Creates an ad-hoc bill run or a scheduled bill run. Support the following:

-   Create ad-hoc or scheduled bill runs by batch
-   Create ad-hoc or scheduled bill runs by account
-   Create a bill run by subscription
-   Create ad-hoc or scheduled bill runs by custom filter combining the Account, Subscription, and Rate Plan objects.

To use this operation, you must have the [Create Bill Runs billing permission](https://knowledgecenter.zuora.com/Zuora_Platform/Tenant_Management/A_Administrator_Settings/User_Roles/d_Billing_Roles).

**Notes**

When using this operation to create bill runs, keep the following notes in mind:

-   When creating bill runs by batch, you must specify the `batches` field and do not specify `billRunFilters` field. When creating bill runs by account, subscription, or custom filter, you must specify the `billRunFilters` field and do not specify the `batches` field.
-   When creating bill runs by account, only one single account is allowed. All subscription under the account are picked up.
-   When creating a bill run by subscription, all subscriptions must belong to the same account. At most 50 subscriptions are allowed.
-   If more than 500 bill runs created through this operation are in `Pending` status, you cannot use this operation to create any more bill runs.

Security**bearerAuth**

Request

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| autoEmail | booleanDefault: falseWhether to automatically send emails after Auto-Post is complete.Note: To use this field, you must first set the Support Bill Run Auto-Post? billing rule to Yes through the Zuora UI. |
| --- | --- |
| autoPost | booleanDefault: falseWhether to automatically post the bill run after the bill run is created.Note: To use this field, you must first set the Support Bill Run Auto-Post? billing rule to Yes through the Zuora UI. |
| autoRenewal | booleanDefault: falseWhether to automatically renew auto-renew subscriptions that are up for renewal. |
| batches | Array of stringsThe batch of accounts for this bill run.You can only specify either this field or the billRunFilters field.Values: AllBatches or an array of Batch*n* where n is one of numbers 1 - 50, for example, Batch7.Note: By default, you have 50 configurable account batches. To increase the limit to 200 batches, you must have the Performance Booster Elite package. |
| billCycleDay | stringThe day of the bill cycle. This field is only valid if the batches field is specified.Values:AllBillCycleDays or one of numbers 1 - 31 for an ad-hoc bill runAllBillCycleDays, one of numbers 1 - 31, or AsRunDay for a scheduled bill run |
| billRunFilters | Array of objects (billRunFilters)The target account, subscriptions, invoice schedule, or a combination of objects for this bill run. You can only specify either this field or the batches field. |
| billRunType | stringThe type of the bill run. If you do not specify any value for this field, the default value is Regular.You can use this field only if the "Catch-Up Bill Run" feature is enabled.You must specify this field to create a catch up bill run.Values:RegularCatchUp |
| chargeTypeToExclude | Array of stringsThe types of the charges to be excluded from the generation of billing documents. You can specify at most two charge types in the array.Items Enum: "OneTime" "Recurring" "Usage" |
| includeSubscriptions | booleanDefault: trueIndicates whether to bill subscriptions in the bill run. |
| includeOrderLineItems | booleanDefault: trueIndicates whether to bill order line items in the bill run. |
| invoiceDate | string <date>The invoice date for the bill run.When creating an ad-hoc bill run, if you do not specify any value for this field, the default value is the current date.When creating a scheduled bill run, if you do not specify any value for this field, the invoice date is the value of the repeatFrom field.Note: You can use one of the following methods to specify the invoice date:Specify invoiceDateSpecify invoiceDateMonthOffset and InvoiceDateDayOfMonth |
| invoiceDateMonthOffset | integerThe month offset of invoice date for this bill run compared to bill run execution date.Notes:This field is only valid when the repeatType field is set to Monthly.You can use one of the following methods to specify the invoice date:Specify invoiceDateSpecify invoiceDateMonthOffset and InvoiceDateDayOfMonth |
| invoiceDateDayOfMonth | integer [ 1 .. 31 ]The day of month of invoice date for this bill run. Specify a day of the month. If you specify 31, even though the month doesn't have 31, for example, February or April, the date recurs on the end day of each scheduled month.Notes:This field is only valid when the repeatType field is set to Monthly.You can use one of the following methods to specify the invoice date:Specify invoiceDateSpecify invoiceDateMonthOffset and InvoiceDateDayOfMonth |
| name | stringThe name of the bill run. |
| noEmailForZeroAmountInvoice | booleanDefault: falseWhether to suppress emails for invoices with zero total amount generated in this bill run after the bill run is complete.It is best practice to not send emails for invoices with zero amount. |
| organizationLabels | Array of objectsThe organization(s) that the bill run is created for.For each item in the array, either the organizationId or the organizationName field is required.This field is only required when you have already turned on Multi-Org feature. |
| schedule | object (schedule)Container for information about the scheduled bill run. |
| targetDate | string <date>The target date for this bill run.You must specify this field when creating an ad-hoc bill run.For scheduled bill runs, if you do not specify any value for this field, the target date is the value of the repeatFrom field. |
| targetDateMonthOffset | integerThe month offset of target date for this bill run compared to bill run execution date.Note: This field is only valid when the repeatType field is set to Monthly. |
| targetDateDayOfMonth | integer [ 1 .. 31 ]The day of month of target date for this bill run. Specify a day of the month. If you specify 31, even though the month doesn't have 31, for example, February or April, the date recurs on the end day of each scheduled month.Note: This field is only valid when the repeatType field is set to Monthly. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/bill-runs

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "autoEmail": false,

-   "autoPost": false,

-   "autoRenewal": false,

-   "billRunFilters": [

    -   {

        -   "accountId": "2c9081a03c63c94c013c66688a2c00bf",

        -   "filterType": "Subscription",

        -   "subscriptionId": "402882297e387c51017e38a245c313db"


        }


    ],

-   "chargeTypeToExclude": [

    -   "OneTime",

    -   "Usage"


    ],

-   "invoiceDate": "2020-02-01",

-   "name": "test",

-   "noEmailForZeroAmountInvoice": false,

-   "targetDate": "2020-02-01"


}`

Response samples

-   200
-   500
-   4XX

application/json

Copy

Expand allCollapse all

`{

-   "autoEmail": false,

-   "autoPost": false,

-   "autoRenewal": false,

-   "batches": null,

-   "billCycleDay": 1,

-   "billRunFilters": [

    -   {

        -   "accountId": "2c9081a03c63c94c013c66688a2c00bf",

        -   "filterType": "Subscription",

        -   "subscriptionId": "402882297e387c51017e38a245c313db"


        }


    ],

-   "billRunNumber": "BR-00000016",

-   "chargeTypeToExclude": [

    -   "OneTime",

    -   "Usage"


    ],

-   "createdById": "ff808081298c6e5401298c7274a40005",

-   "createdDate": "2022-01-24 19:58:27",

-   "id": "2c9890077e8a8490017e8bf3a5171a43",

-   "invoiceDate": "2020-02-01",

-   "invoiceDateOffset": null,

-   "name": "test",

-   "noEmailForZeroAmountInvoice": false,

-   "schedule": null,

-   "scheduledExecutionTime": null,

-   "status": "Pending",

-   "success": true,

-   "targetDate": "2020-02-01",

-   "targetDateOffset": null,

-   "updatedById": "ff808081298c6e5401298c7274a40005",

-   "updatedDate": "2022-01-24 19:58:27"


}`
