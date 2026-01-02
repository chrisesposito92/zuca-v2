---
title: "GetAllTestEnvironments"
url: "https://developer.zuora.com/v1-api-reference/api/operation/getAllTestEnvironments/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:25:50.776Z"
---

## List all test environments

Use this operation to retrieves a list of all Test Environments. It returns an ArrayResponse containing TestEnvironmentResponse objects, representing the available Test Environments in the system.

### User Access Permission

You must be assigned the **Refresh Central Sandbox** permission to run this operation.

Security**bearerAuth**

Request

##### header Parameters

| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| --- | --- |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |

Responses

200

Successfully retrieved a list of Test Environment responses

400

Bad request

500

Internal Error

get/test-environments

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  https://rest.test.zuora.com/test-environments \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Track-Id: string'

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "result": [

    -   {

        -   "createTime": "2019-08-24T14:15:22Z",

        -   "createdById": "58f182ab203c447b8b9cd90382da030a",

        -   "dataCopyType": "FULL",

        -   "deactivationTime": "2019-08-24T14:15:22Z",

        -   "environmentType": "ENTERPRISE",

        -   "id": "11111111-1111-1111-1111-111111111111",

        -   "lastRefreshTime": "2019-08-24T14:15:22Z",

        -   "nextRefreshTime": "2019-08-24T14:15:22Z",

        -   "provisionTime": "2019-08-24T14:15:22Z",

        -   "revenueTenantId": "string",

        -   "revenueTenantName": "string",

        -   "sourceTenantId": 23223,

        -   "status": "ACTIVE",

        -   "tenantId": 23223,

        -   "tenantName": "string",

        -   "updateTime": "2019-08-24T14:15:22Z",

        -   "updatedById": "58f182ab203c447b8b9cd90382da030a"


        }


    ],

-   "size": 0


}`
