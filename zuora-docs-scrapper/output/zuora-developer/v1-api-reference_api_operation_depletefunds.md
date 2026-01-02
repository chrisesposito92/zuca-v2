---
title: "DepleteFunds"
url: "https://developer.zuora.com/v1-api-reference/api/operation/DepleteFunds/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:52:07.848Z"
---

## Deplete funds

Depleting a prepaid balance fund enables you to expire the remaining balance, which can be recognized by revenue. When an expiry request is received, the remaining fund balance is reduced to zero, and the related objects like PrepaidBalance, ValidityPeriodSummary, PrepaidBalanceTransaction, and DailyConsumption will be updated.

Security**bearerAuth**

Request

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| fundIds | objectThe unique ID of the fund. A maximum of 100 fund Ids are allowed. |
| --- | --- |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/prepaid-balance-funds/deplete

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "fundIds": [

    -   "4028818c8d0c9db5018d0cbbdecd72c1",

    -   "4028818c8d0c9db5018d0cbbdecd72c2"


    ]


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "fundIds": [

    -   {

        -   "fundId": "4028818c8d3ade79018d3ae1048a5e10",

        -   "status": "success",

        -   "message": "The fund object is depleted."


        },

    -   {

        -   "fundId": "4028818c8d3ade79018d3ae1048a5ef8",

        -   "status": "success",

        -   "message": "The fund object is depleted."


        }


    ]


}`
