---
title: "POST PaymentSchedules"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_PaymentSchedules/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:03:32.968Z"
---

## Create multiple payment schedules at once

Creates multiple payment schedules at once. You can create both recurring payment schedules and custom payment schedules in one request. The maximum number of payment schedules that can be created by a single request is 50. The maximum number of payment schedule items that each payment schedule can contain is 1000, i.e., you must specify less than 1000 items for a custom payment schedule, and the `occurrences` field must be less than 1000 for a recurring payment schedule.

**Note:**

-   This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled.

-   If multiple billing documents are associated to a payment schedule, when collecting the payment schedule item, the payment belongs to the payment schedule item will be applied to billing documents based on the due date of the billing document, in the ascending order.

-   If Standalone Payment is enabled, you can choose to use payment schedules to process payments associated with billing documents, standalone payments, or unapplied payments. If Standalone Payment is not enabled, you can only use payment schedules to process unapplied payments or payments associated with billing documents.

-   This operation is version controlled. If you set `Zuora-Version` to `329.0`, when creating custom payment schedules associated with billing documents, you need to specify the billing document for each payment schedule item; If `Zuora-Version` is set to `330.0`, when creating custom payment schedules associated with billing documents, you only need to specify the billing documents at the payment schedule level. The default version number is `329.0`. However, we recommend that you specify the version to `330.0`. `329.0` will be deprecated soon.


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

| paymentSchedules | Array of objects (POSTPaymentScheduleRequest)Container of the payment schedules to be created. |
| --- | --- |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/payment-schedules/batch

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "paymentSchedules": [

    -   {

        -   "accountId": "8a90b4488e7d5c0f018e7db3892400b2",

        -   "amount": 14.99,

        -   "billingDocument": {

            -   "id": "8a90b44890c9bb0d0190d8c048a90da6",

            -   "type": "Invoice"


            },

        -   "items": [

            -   {

                -   "scheduledDate": "2024-07-31",

                -   "amount": 14.99


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

-   "paymentSchedules": [

    -   {

        -   "id": "402880e741112b310149b7343ef81234",

        -   "paymentScheduleNumber": "PS-00311401"


        },

    -   {

        -   "id": "402880e741112b310149b7343ef81234",

        -   "paymentScheduleNumber": "PS-00311402"


        }


    ]


}`
