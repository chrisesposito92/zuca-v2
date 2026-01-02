---
title: "CreateOrUpdateReusableBlocks"
url: "https://developer.zuora.com/v1-api-reference/api/operation/createOrUpdateReusableBlocks/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:14:48.516Z"
---

## Create or update reusable blocks

Creates reusable blocks if you do not specify block IDs, or updates existing reusable blocks if you specify valid block IDs. All fields must be provided for each reusable block you want to update.

The maximum number of reusable blocks that you can create or update by one call is 1,000.

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

##### Request Body schema: application/json
required

The request body to import or update reusable blocks.

| allowPartialSuccess | booleanWhen set to false, the call will fail if one or multiple instances fail to import, and a 200 response is returned if all reusable blocks have been successfully updated. When set to true, a success (200) response is returned if one or more instances have imported successfully. All failed instances are also returned in the response. |
| --- | --- |
| reusableBlocks | Array of objects (CreateOrUpdateReusableBlockFormat) [ 1 .. 1000 ] itemsA container for reusable blocks. |

Responses

200

OK

post/notifications/reusable-blocks/import

Request samples

-   Payload
-   cURL

application/json

Create a reusable blockUpdate a reusable blockCreate a reusable block

Copy

Expand allCollapse all

`{

-   "allowPartialSuccess": true,

-   "reusableBlocks": [

    -   {

        -   "name": "Footer Block",

        -   "category": "Footers",

        -   "content": "(The content of the block)"


        }


    ]


}`

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "reasons": [ ]


}`
