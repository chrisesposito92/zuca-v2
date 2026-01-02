---
title: "PUT StopAutoBackfillJobById"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_StopAutoBackfillJobById/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:25:59.844Z"
---

## Stop an auto backfill job

Use this operation to stop an auto backfill job.

Security**bearerAuth**

Request

##### path Parameters

| jobIdrequired | string = 32 charactersID of the job to stop |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json

| statusrequired | stringStopping is currently the only allowed value.Value: "Stopping" |
| --- | --- |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/uno/data-backfill/propagation/jobs/{jobId}

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "status": "Stopping"


}`

Response samples

-   200
-   500
-   4XX

application/json

Copy

Expand allCollapse all

`{

-   "processId": "string",

-   "reasons": [

    -   {

        -   "code": "string",

        -   "message": "string"


        }


    ],

-   "requestId": "d385ab22-0f51-4b97-9ecd-b8ff3fd4fcb6",

-   "success": true


}`
