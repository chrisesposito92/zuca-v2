---
title: "SubmitEventStoreQuery"
url: "https://developer.zuora.com/v1-api-reference/api/operation/submitEventStoreQuery/"
product: "zuora-developer"
scraped_at: "2026-02-20T21:21:28.672Z"
---

## Submit an event store query

Submits a SQL-style asynchronous query to the Event Store to retrieve and inspect metering events for validation, troubleshooting, and reconciliation. The API returns a `queryId` that can be used to poll and fetch paginated results.

Security**bearerAuth**

Request

##### header Parameters

| Content-Typerequired | stringDefault: application/jsonSpecify the content type of the request body. Use application/json. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

##### Request Body schema: application/json
required

| queryrequired | stringThe query clause. |
| --- | --- |

Responses

200

OK

400

Bad Request - Invalid or missing parameters.

401

Unauthorized - Authentication failed.

500

Internal Server Error - Unexpected error.

post/meters/event-store-queries

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "query": "select * from usage_event"


}`

Response samples

-   200
-   400
-   401
-   500

application/json

Copy

Expand allCollapse all

`{

-   "success": true,

-   "data": {

    -   "queryId": "b9a5b91ab34c42b1b9399c0e76245e3f7f76610637ec4d17abdcd4214493814e"


    },

-   "previousPage": "null",

-   "nextPage": "null"


}`
