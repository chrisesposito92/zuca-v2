---
title: "PUT PostBillRun"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_PostBillRun/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:59:41.033Z"
---

## Post a bill run

Posts a bill run asynchronously. To post a bill run, the current bill run must be in `Completed` status.

When a bill run is being posted, its status is changed to `PostInProgress`. After all invoices for this bill run are posted, its status is changed to `Posted`.

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

| invoiceDaterequired | string <date>The date that appears on the invoice being created, in yyyy-mm-dd format.The value cannot fall in a closed accounting period. |
| --- | --- |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/bill-runs/{billRunId}/post

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "invoiceDate": "2022-01-01"


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
