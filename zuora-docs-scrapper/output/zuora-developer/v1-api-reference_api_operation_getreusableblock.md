---
title: "GetReusableBlock"
url: "https://developer.zuora.com/v1-api-reference/api/operation/getReusableBlock/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:14:49.275Z"
---

## Retrieve a reusable block

Queries the reusable block based on the specified ID or name.

Security**bearerAuth**

Request

##### path Parameters

| blockKeyrequired | stringThe ID or name of the reusable block. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |

Responses

200

OK

400

Bad Request

404

Not Found

405

Method Not Allowed

415

Unsupported Media Type

500

Internal Server Error

get/notifications/reusable-blocks/{blockKey}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/notifications/reusable-blocks/{blockKey}' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string'

Response samples

-   200
-   400
-   404
-   405
-   415
-   500

1 more5001 more

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "id": "c6af751e4a0041eebb000c51e95e6c2d",

-   "createdBy": "8a90e08282f4ed040182f67bab2902ff",

-   "createdOn": "2025-04-22T08:17:24.000 UTC",

-   "updatedBy": "8a90e08282f4ed040182f67bab2902ff",

-   "updatedOn": "2025-04-22T08:17:24.000 UTC",

-   "active": true,

-   "name": "Header Block",

-   "number": "RB-00000010",

-   "category": "Headers",

-   "tags": [ ],

-   "content": "(The content of the block)"


}`
