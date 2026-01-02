---
title: "QueryCommercePlansList"
url: "https://developer.zuora.com/v1-api-reference/api/operation/queryCommercePlansList/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:47:14.015Z"
---

## Query product rate plans

Queries product rate plans (PRPs) from the Product Catalog using filters such as plan ID, name, or product ID.
You can optionally expand related Product Rate Plan Charges (PRPCs) in the response.

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

| filtersrequired | Array of objectsFilter conditions for querying product rate plans.Each filter defines a field, operator, and value. |
| --- | --- |
| expand | objectExpand related entities in the response. |

Responses

200

OK

400

Bad Request

401

Unauthorized

500

Internal Server Error

post/commerce/plans/list

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "filters": [

    -   {

        -   "field": "prp_id",

        -   "operator": "EQ",

        -   "value": "38660706ef2f48cfb5222f7dde491895"


        }


    ],

-   "expand": {

    -   "product_rate_plan_charges": true


    }


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
