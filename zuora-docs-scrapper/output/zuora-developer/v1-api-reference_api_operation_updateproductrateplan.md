---
title: "UpdateProductRatePlan"
url: "https://developer.zuora.com/v1-api-reference/api/operation/updateProductRatePlan/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:47:23.468Z"
---

## Update a product rate plan

Updates an existing Product Rate Plan (PRP) in the Product Catalog. Use this API to update core plan fields such as name, description, grade, and effective dates.

Security**bearerAuth**

Request

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |

##### Request Body schema: application/json
required

| idrequired | stringUnique identifier of the Product Rate Plan to update. |
| --- | --- |
| name | stringRate plan name. |
| description | stringRate plan description. |
| grade | integerPlan grade or display rank used for ordering in catalogs or UIs. |
| startDate | string <date>Rate plan effective start date (UTC, YYYY-MM-DD). |
| endDate | string <date>Rate plan effective end date (UTC, YYYY-MM-DD). |

Responses

200

OK

400

Request Errors or Unauthorized

401

Unauthorized

500

Internal Server Error

put/commerce/plans

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "id": "5758b1d5a589840e0e6855e1c2ce014d",

-   "name": "Bronze Plan",

-   "description": "Basic version of our software service",

-   "grade": 1,

-   "startDate": "2025-09-10",

-   "endDate": "2043-08-16"


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
