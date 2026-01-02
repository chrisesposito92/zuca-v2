---
title: "PutAccountPaymentMethodCascading"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PutAccountPaymentMethodCascading/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:48:21.036Z"
---

## Configure cascading payment methods for an account

Zuora provides the Cascading Payment Method feature to dynamically retry the failed payment with alternative payment methods according to a predefined priority list. Use this API operation to configure the cascading consent for a specified account and set up the priority list of payment methods to be used in Cascading Payment Method.

Before you use this API operation, ensure that the Cascading Payment Method feature is enabled. For more information about the Cascading Payment Method feature, see [Cascade payment methods](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/B2_Cascade_payment_methods).

Security**bearerAuth**

Request

##### path Parameters

| account-keyrequired | stringAccount ID. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| consent | booleantrue indicates that you have collected consent from your customer to use the Cascading Payment Method feature. false indicates the consent was not collected and the Cascading Payment Method feature is not enabled.The priorities field can be specified only if consent is true. |
| --- | --- |
| priorities | Array of objects (priority)Container for the priority configuration of payment methods. You can add up to three payment methods to this container. For more information, see Cascade payment methods.priorities is required if consent is true. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/accounts/{account-key}/payment-methods/cascading

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "consent": true,

-   "priorities": [

    -   {

        -   "paymentMethodId": "2c92c0f95be68649015bf14e001f2760",

        -   "order": 1


        },

    -   {

        -   "paymentMethodId": "2c92c0f95be68649015bf14e001f2761",

        -   "order": 2


        },

    -   {

        -   "paymentMethodId": "2c92c0f95be68649015bf14e001f2762",

        -   "order": 3


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

`{

-   "success": true


}`
