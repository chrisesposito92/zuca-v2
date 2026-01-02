---
title: "POST CreateAutoBackfillJob"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_CreateAutoBackfillJob/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:25:57.218Z"
---

## Create an auto backfill job

Creates an autobackfill job to update the rate plan charge and order line item with product rate plan charge.

Security**bearerAuth**

Request

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| typerequired | stringEnum: "RatePlanCharge" "OrderLineItem" |
| --- | --- |
| batchSize | integer <int32> [ 1 .. 1000 ]Default: 1000 |
| dryRun | booleanIf true, the job is created in dry-run mode. In dry-run mode, the data is not updated. The default value is false. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/uno/data-backfill/propagation/jobs

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "type": "RatePlanCharge",

-   "batchSize": 1000,

-   "dryRun": false


}`

Response samples

-   200
-   500
-   4XX

application/json

successfailsuccess

Copy

`{

-   "success": true,

-   "jobId": "ff8080818bb300af018bb325fe0c58f3"


}`
