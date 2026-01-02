---
title: "PUT CancelBillRun"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_CancelBillRun/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:59:40.574Z"
---

## Cancel a bill run

Cancels a bill run in Draft status.

When cancelling a scheduled bill run, keep the following information in mind:

-   If you set `cancelOnce` to `true`, only the current bill run is cancelled. The other future scheduled bill runs will be automatically executed based on the schedule.
-   If you set `cancelOnce` to `false`, all future recurring bill runs are cancelled.

Security**bearerAuth**

Request

##### path Parameters

| billRunIdrequired | stringThe unique ID of a bill run. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| cancelOnce | booleanDefault: trueWhether to cancel the current bill run or cancel all future recurring bill runs, only valid for a scheduled bill run. |
| --- | --- |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/bill-runs/{billRunId}/cancel

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "cancelOnce": true


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

-   "autoRenewal": true,

-   "batches": null,

-   "billCycleDay": 1,

-   "billRunFilters": [ ],

-   "billRunNumber": "BR-00000014",

-   "chargeTypeToExclude": null,

-   "createdById": "ff808081298c6e5401298c7274a40005",

-   "createdDate": "2022-01-19 11:28:34",

-   "id": "2c9890e97e57e546017e706109df04a1",

-   "invoiceDate": "2022-01-26",

-   "invoiceDateOffset": 0,

-   "name": "test",

-   "nextRun": {

    -   "autoEmail": false,

    -   "autoPost": false,

    -   "autoRenewal": true,

    -   "batches": null,

    -   "billCycleDay": 1,

    -   "billRunFilters": [ ],

    -   "billRunNumber": "BR-00000021",

    -   "chargeTypeToExclude": null,

    -   "createdById": "ff808081298c6e5401298c7274a40005",

    -   "createdDate": "2022-01-26 14:47:05",

    -   "id": "2c9890077e901749017e95235b13093d",

    -   "invoiceDate": null,

    -   "invoiceDateOffset": 0,

    -   "noEmailForZeroAmountInvoice": false,

    -   "schedule": {

        -   "repeatFrom": "2022-02-28",

        -   "repeatTo": "2023-01-31",

        -   "repeatType": "Monthly",

        -   "runTime": 0,

        -   "weeklyOnDay": null


        },

    -   "scheduledExecutionTime": "2022-02-28 00:00:00",

    -   "status": "Pending",

    -   "targetDate": null,

    -   "targetDateOffset": 0,

    -   "updatedById": "ff808081298c6e5401298c7274a40005",

    -   "updatedDate": "2022-01-26 14:47:05"


    },

-   "noEmailForZeroAmountInvoice": false,

-   "schedule": null,

-   "scheduledExecutionTime": "2022-01-28 00:00:00",

-   "status": "CancelInProgress",

-   "success": true,

-   "targetDate": null,

-   "targetDateOffset": 0,

-   "updatedById": "ff808081298c6e5401298c7274a40005",

-   "updatedDate": "2022-01-26 14:47:09"


}`
