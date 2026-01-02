---
title: "POST JournalRun"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_JournalRun/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:13:09.757Z"
---

## Create a journal run

This REST API reference describes how to create a journal run. Request and response field descriptions and sample code are provided.

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

| accountingPeriodName | stringName of the accounting period.This field determines the target start and end dates of the journal run.Required if you do not include targetStartDate and targetEndDate. |
| --- | --- |
| journalEntryDaterequired | string <date>Date of the journal entry. |
| organizationLabels | objectThe organization that this run is created for.For each item in the array, either the organizationId or the organizationName field is required.This field is only required when you have already turned on Multi-Org feature. |
| targetEndDate | string <date>The target end date of the journal run.If you include accountingPeriodName, the targetEndDate must be empty or the same as the end date of the accounting period specified in accountingPeriodName. |
| targetStartDate | string <date>The target start date of the journal run.Required if you include targetEndDate.If you include accountingPeriodName, the targetStartDate must be empty or the same as the start date of the accounting period specified in accountingPeriodName. |
| transactionTypesrequired | Array of objects (transactionTypes)Transaction types included in the journal run.You can include one or more transaction types. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/journal-runs

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "accountingPeriodName": "Nov-2014",

-   "journalEntryDate": "2014-11-04",

-   "transactionTypes": [

    -   {

        -   "type": "Invoice Item"


        },

    -   {

        -   "type": "Revenue Event Item"


        }


    ]


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "journalRunNumber": "JR-00000008",

-   "success": true


}`
