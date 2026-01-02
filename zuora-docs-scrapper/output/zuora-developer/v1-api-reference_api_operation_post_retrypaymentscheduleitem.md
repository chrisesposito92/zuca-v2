---
title: "POST RetryPaymentScheduleItem"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_RetryPaymentScheduleItem/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:03:08.965Z"
---

## Retry failed payment schedule items

Retries failed payment schedule items. The payment method and payment gateway of the failed payment can be updated to new values before the retry.

Note that you can retry a payment schedule item only when the payment schedule item is either in the `Error` or `Pending` status.

**Note:**

-   To manage and access this feature through the self-service interface, see [Manage Features](https://knowledgecenter.zuora.com/Zuora_Payments/Payments_Settings/Manage_Features) in the Knowledge Center.
-   This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled.

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
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| items | Array of objects (Payment schedule items to be retried.)The maximum number of items allowable to pass is 10. |
| --- | --- |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/payment-schedule-items/retry-payment

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "items": [

    -   {

        -   "id": "402882e97f24bc36017f2986654f0253"


        },

    -   {

        -   "id": "402882e97f24bc36017f298665570254",

        -   "paymentGatewayId": "402883827d097a28017d09b41f690261",

        -   "paymentMethodId": "402882e97f24bc36017f258c2ff20076"


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

-   "items": [

    -   {

        -   "amount": null,

        -   "createdById": null,

        -   "createdDate": null,

        -   "currency": null,

        -   "description": null,

        -   "errorMessage": "Can not retry because payment Processed status is not allowed.",

        -   "id": "402882e97f24bc36017f2986654f0253",

        -   "paymentGatewayId": null,

        -   "paymentId": null,

        -   "paymentMethodId": null,

        -   "paymentScheduleId": "string",

        -   "paymentScheduleNumber": "string",

        -   "runHour": null,

        -   "scheduledDate": null,

        -   "status": null,

        -   "updatedById": null,

        -   "updatedDate": null


        },

    -   {

        -   "PSIPaymentDate__c": "2022-02-22",

        -   "PSIPaymentPicklist__c": "1",

        -   "PSIPaymentText__c": "Payment Text From PSI via API Payment Error",

        -   "PSIPicklist__c": "1",

        -   "PSIText__c": "PSI Text Value",

        -   "amount": 2,

        -   "createdById": "402881e522cf4f9b0122cf5d82860002",

        -   "createdDate": "2022-02-23 18:19:07",

        -   "currency": "USD",

        -   "description": null,

        -   "errorMessage": null,

        -   "id": "402882e97f24bc36017f298665570254",

        -   "paymentGatewayId": "402883827d097a28017d09b41f690261",

        -   "paymentId": "402882e97f24bc36017f298efb360277",

        -   "paymentMethodId": "402882e97f24bc36017f258c2ff20076",

        -   "paymentScheduleId": "string",

        -   "paymentScheduleNumber": "string",

        -   "runHour": 0,

        -   "scheduledDate": "2022-02-22",

        -   "status": "Processed",

        -   "updatedById": "402881e522cf4f9b0122cf5d82860002",

        -   "updatedDate": "2022-02-23 18:28:30"


        }


    ],

-   "success": true


}`
