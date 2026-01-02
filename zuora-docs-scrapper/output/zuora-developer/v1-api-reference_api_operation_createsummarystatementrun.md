---
title: "CreateSummaryStatementRun"
url: "https://developer.zuora.com/v1-api-reference/api/operation/createSummaryStatementRun/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:59:17.568Z"
---

## Create a summary statement run

Allows you to initiate the generation of a summary statement run. You can specify parameters such as the run type (AdHoc or scheduled) and the target account categories (single or multiple accounts).

Security**bearerAuth**

Request

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| runTyperequired | stringThe scheduled type of the run which can either be AdHoc or Scheduled. Currently, only AdHoc is supported.Value: "AdHoc" |
| --- | --- |
| targetAccountCategoryrequired | stringSpecifies the type of account filter.If the filter type is set to AllAccounts, AccountsWithOpenInvoices, AccountsWithOpenBalances, AccountsWithoutInvoices, or AccountsWithoutInvoicesAndOpenBalances, you can further refine the filter using batchName and billCycleDay. However, these criteria are not applicable when the filter type is SingleAccount.Enum: "SingleAccount" "AllAccounts" "AccountsWithOpenInvoices" "AccountsWithOpenBalances" "AccountsWithoutInvoices" "AccountsWithoutInvoicesAndOpenBalances" |
| accountKey | string or nullThe related account ID or account number when the filter type is SingleAccount. |
| batchName | stringThe batch name used for filtering accounts, for example, Batch1. |
| billCycleDay | string or nullThe bill cycle day for filtering accounts, with values ranging from '01' to '31'. |
| dateRangeTyperequired | stringThe date range for the statement.If PreviousThreeCalendarMonth or PreviousOneCalendarMonth is selected, the start and end dates are automatically calculated. For example, if PreviousThreeCalendarMonth is chosen today (2024-08-20), the dates would be 2024-05-01 to 2024-07-31.Enum: "Custom" "PreviousThreeCalendarMonth" "PreviousOneCalendarMonth" |
| startDate | string <date>Required when Custom is selected for the date range. The start date can be set to a maximum of 5 years in the past and must follow the format YYYY-MM-DD. |
| endDate | string <date>When creating a statement run, this field cannot be manually entered. If Custom is selected, the end date automatically defaults to today’s date in the tenant’s timezone. |
| autoEmailEnabled | booleanIndicates whether to send an email after a statement is generated. Acceptable values are true or false. If unspecified, the default value is false. |
| description | stringA text description of the statement run. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/summary-statement-runs

Request samples

-   Payload
-   cURL

application/json

Example1Example2Example3Example1

Copy

`{

-   "description": "This is a sample response for accounts from a batch with a billCycleDay of 01.",

-   "runType": "AdHoc",

-   "targetAccountCategory": "AllAccounts",

-   "batchName": "Batch1",

-   "billCycleDay": "01",

-   "dateRangeType": "PreviousOneCalendarMonth",

-   "autoEmailEnabled": false


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "id": "402881869169397401916d8ff8d218c5",

-   "statementRunNumber": "SSR-00000004",

-   "targetAccountCategory": "AllAccounts",

-   "accountKey": null,

-   "runType": "AdHoc",

-   "batchName": "Batch51",

-   "billCycleDay": null,

-   "dateRangeType": "PreviousThreeCalendarMonth",

-   "startDate": "2024-05-01 19:13:57",

-   "endDate": "2024-07-31 19:13:57",

-   "autoEmailEnabled": false,

-   "description": "HelloWorld",

-   "status": "Pending",

-   "createdById": "402881e522cf4f9b0122cf5d82860002",

-   "createdDate": "2024-08-19 19:13:57",

-   "updatedById": "402881e522cf4f9b0122cf5d82860002",

-   "updatedDate": "2024-08-20 10:13:57.586",

-   "success": true


}`
