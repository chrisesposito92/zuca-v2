---
title: "UpdateReusableBlock"
url: "https://developer.zuora.com/v1-api-reference/api/operation/updateReusableBlock/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:14:49.013Z"
---

## Update a reusable block

Updates a reusable block.

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

##### Request Body schema: application/json
required

The request body to update a reusable block.

| active | booleanDefault: trueThe status of the reusable block. Only active blocks can be embedded into email templates. |
| --- | --- |
| category | stringThe category of the reusable block. You can filter blocks by category when editing email templates in the UI.Enum: "Headers" "Footers" "Other" |
| content | stringThe content of the reusable block, which is automatically inserted into email templates when sending email notifications. |
| name | stringThe name of the reusable block. The value must be unique across all blocks. |
| number | stringThe number of the reusable block. The value must be unique across all blocks. |
| tags | Array of stringsList of tags that help you quickly locate reusable blocks when editing email templates in the UI by using the tag filter. |

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

put/notifications/reusable-blocks/{blockKey}

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "tag": [

    -   "logo"


    ]


}`

Response samples

-   200
-   400
-   404
-   405
-   415
-   500

1 more5001 more

application/json

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

-   "tags": [

    -   "logo"


    ],

-   "content": "(The content of the block)"


}`
