---
title: "POST CreateProductChargeDefinitionBulk"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_CreateProductChargeDefinitionBulk/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:30:56.606Z"
---

## Create product charge definitions

Bulk creates product charge definitions for a charge. You can create up to 1000 product charge definitions at a given time for a specific charge.

In the request, you must specify the unique ID or number of the charge for which this charge definition is to be created. The ID or number of a product rate plan is optional.

**Note**: This operation requires the [Attribute-based Pricing](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Attribute_based_pricing/AA_Overview_of_Attribute-based_Pricing) feature to be enabled, which is in the **Early Adopter** phase.

Security**bearerAuth**

Request

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| productChargeDefinitions | Array of objects (productChargeDefinitions)Container for the array of product charge definition. |
| --- | --- |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/product-charge-definitions/bulk

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "productChargeDefinitions": [

    -   {

        -   "productRatePlanChargeId": "edcab92612893256dce329d0b377000e",

        -   "effectiveStartDate": "2024-01-01 00:00:00",

        -   "effectiveEndDate": "2025-01-01 00:00:00",

        -   "listPriceBase": "Per_Billing_Period",

        -   "prices": [

            -   {

                -   "currency": "USD",

                -   "price": 18


                }


            ]


        }


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

-   "summary": {

    -   "successCount": 1,

    -   "failureCount": 0,

    -   "failures": [ ]


    },

-   "results": [

    -   {

        -   "chargeDefinitionId": "8a9084f99325571d01932a15d64a3a1b",

        -   "chargeDefinitionNumber": "CD-00052014",

        -   "success": true


        }


    ],

-   "success": true


}`
