---
title: "GET RetrieveProductRatePlanDefinitions"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_RetrieveProductRatePlanDefinitions/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:30:09.648Z"
---

## List product rate plan definitions

Retrieves basic information about the product rate plan definitions for a product rate plan.

**Note**: This operation requires the [Attribute-based Pricing](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Attribute_based_pricing/AA_Overview_of_Attribute-based_Pricing) feature to be enabled, which is in the **Early Adopter** phase.

Security**bearerAuth**

Request

##### query Parameters

| charge | stringThe unique number or ID of the charge for which the product rate plan definitions are to be retrieved. |
| --- | --- |
| rateplan | stringThe unique number or ID of the product rate plan for which the product rate plan definitions are to be retrieved. |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

get/v1/product-rateplan-definitions

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/product-rateplan-definitions?charge=string&rateplan=string' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: string'

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "productRatePlanDefinitions": [

    -   {

        -   "id": "2c9890f78b212d76018b218993c9005c",

        -   "productRatePlanChargeId": "2c9890f78aba5c16018ababa00120019",

        -   "productRatePlanChargeName": "New Component",

        -   "productRatePlanChargeNumber": "PRPC-NEW-00000175",

        -   "productRatePlanId": "2c9890678b1ca909018b1caea5c30000",

        -   "productRatePlanName": "New Rate Plan2",

        -   "productRatePlanNumber": "PRP-NEW-00000353"


        },

    -   {

        -   "id": "2c9890f78b212d76018b21742683005a",

        -   "productRatePlanChargeId": "2c9890f78b212d76018b2174263c004a",

        -   "productRatePlanChargeName": "API_Usage_Tiered-multi",

        -   "productRatePlanChargeNumber": "PRPC-NEW-00000246",

        -   "productRatePlanId": "2c9890678b1ca909018b1caea5c30000",

        -   "productRatePlanName": "New Rate Plan2",

        -   "productRatePlanNumber": "PRP-NEW-00000353"


        }


    ],

-   "success": true


}`
