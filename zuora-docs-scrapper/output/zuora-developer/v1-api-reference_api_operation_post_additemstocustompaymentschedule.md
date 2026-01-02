---
title: "POST AddItemsToCustomPaymentSchedule"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_AddItemsToCustomPaymentSchedule/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:03:33.530Z"
---

## Add payment schedule items to a custom payment schedule

Adds payment schedule items to a custom payment schedule. You cannot use this operation to add payment schedule items to recurring payment schedules.

**Note:**

-   The Payment Schedules feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. To manage and access this feature through the self-service interface, see [Manage Features](https://knowledgecenter.zuora.com/Zuora_Payments/Payments_Settings/Manage_Features) in the Knowledge Center.
-   This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled.
-   When the Multi-currency and Standalone Payments features are not enabled, you can create and update a payment schedule and payment schedule item in a currency other than the account currency.

Security**bearerAuth**

Request

##### path Parameters

| paymentScheduleKeyrequired | stringThe unique ID or number of a payment schedule. For example, 8a90857b822459cd018224dcb9eb13be, or PS-00000007. |
| --- | --- |

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

| items | Array of objects (paymentScheduleItem) |
| --- | --- |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/payment-schedules/{paymentScheduleKey}/items

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "items": [

    -   {

        -   "amount": 50,

        -   "scheduledDate": "2024-11-22"


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

-   "id": "8a90aac892f70c8f0192fb48a8e80281",

-   "paymentScheduleNumber": "PS-00000003",

-   "accountId": "8a90b4488e7d5c0f018e7db3892400b2",

-   "accountNumber": "A00000370",

-   "startDate": "2024-11-22",

-   "runHour": 0,

-   "period": null,

-   "occurrences": 2,

-   "status": "Active",

-   "totalAmount": 150,

-   "nextPaymentDate": "2024-11-22",

-   "recentPaymentDate": null,

-   "totalPaymentsProcessed": 0,

-   "totalPaymentsErrored": 0,

-   "description": "",

-   "isCustom": true,

-   "prepayment": false,

-   "billingDocument": null,

-   "billingDocuments": [ ],

-   "createdDate": "2024-11-05 15:44:56",

-   "createdById": "2c92c8f95e2d6ebb015e325df48e02da",

-   "updatedDate": "2024-11-05 15:46:04",

-   "updatedById": "2c92c8f95e2d6ebb015e325df48e02da",

-   "cancelledById": null,

-   "cancelledOn": null,

-   "cancelDate": null,

-   "items": [

    -   {

        -   "id": "8a90aac892f70c8f0192fb48a9150282",

        -   "number": "1",

        -   "paymentScheduleId": "8a90aac892f70c8f0192fb48a8e80281",

        -   "paymentScheduleNumber": "PS-00000003",

        -   "scheduledDate": "2024-11-22",

        -   "runHour": 0,

        -   "paymentMethodId": null,

        -   "paymentGatewayId": null,

        -   "paymentGatewayNumber": null,

        -   "amount": 100,

        -   "balance": 100,

        -   "currency": "USD",

        -   "status": "Pending",

        -   "errorMessage": null,

        -   "paymentId": null,

        -   "psiPayments": [ ],

        -   "prepayment": false,

        -   "billingDocument": null,

        -   "description": "",

        -   "cancellationReason": null,

        -   "cancelledById": null,

        -   "cancelledOn": null,

        -   "createdDate": "2024-11-05 15:44:56",

        -   "createdById": "2c92c8f95e2d6ebb015e325df48e02da",

        -   "updatedDate": "2024-11-05 15:44:56",

        -   "updatedById": "2c92c8f95e2d6ebb015e325df48e02da"


        },

    -   {

        -   "id": "8a9084f992f70ca40192fb49b64d5704",

        -   "number": "2",

        -   "paymentScheduleId": "8a90aac892f70c8f0192fb48a8e80281",

        -   "paymentScheduleNumber": "PS-00000003",

        -   "scheduledDate": "2024-11-22",

        -   "runHour": 0,

        -   "paymentMethodId": null,

        -   "paymentGatewayId": null,

        -   "paymentGatewayNumber": null,

        -   "amount": 50,

        -   "balance": 50,

        -   "currency": "USD",

        -   "status": "Pending",

        -   "errorMessage": null,

        -   "paymentId": null,

        -   "psiPayments": [ ],

        -   "prepayment": false,

        -   "billingDocument": null,

        -   "description": null,

        -   "cancellationReason": null,

        -   "cancelledById": null,

        -   "cancelledOn": null,

        -   "createdDate": "2024-11-05 15:46:04",

        -   "createdById": "2c92c8f95e2d6ebb015e325df48e02da",

        -   "updatedDate": "2024-11-05 15:46:04",

        -   "updatedById": "2c92c8f95e2d6ebb015e325df48e02da"


        }


    ],

-   "success": true


}`
