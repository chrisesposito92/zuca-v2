---
title: "GET PaymentSchedule"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_PaymentSchedule/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:03:33.385Z"
---

## Retrieve a payment schedule

Retrieves a payment schedule by payment schedule key.

**Note:**

-   The Payment Schedules feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. To manage and access this feature through the self-service interface, see [Manage Features](https://knowledgecenter.zuora.com/Zuora_Payments/Payments_Settings/Manage_Features) in the Knowledge Center.
-   This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled.

Security**bearerAuth**

Request

##### path Parameters

| paymentScheduleKeyrequired | stringThe unique ID or number of a payment schedule. For example, 8a90857b822459cd018224dcb9eb13be, or PS-00000007. |
| --- | --- |

##### query Parameters

| nextPendingItems | integerNumber of next pending payment schedule items displayed in the response body. |
| --- | --- |
| lastProcessedItems | integerNumber of the most recent processed payment schedule items dispalyed in the response body. |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

get/v1/payment-schedules/{paymentScheduleKey}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/payment-schedules/{paymentScheduleKey}?nextPendingItems=0&lastProcessedItems=0' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
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

-   "accountId": "8a90a2fd8074995801807816dbac52a4",

-   "accountNumber": "A00000002",

-   "billingDocument": {

    -   "id": "8a90a2fd819503b50181959525e5205d",

    -   "number": "INV00000001",

    -   "type": "Invoice"


    },

-   "billingDocuments": [

    -   {

        -   "id": "8a26e082802185b201976199e1991521",

        -   "number": "INV-001",

        -   "type": "Invoice"


        },

    -   {

        -   "id": "8a11e082802185b901126e34713407d2",

        -   "number": "INV-002",

        -   "type": "Invoice"


        }


    ],

-   "createdById": "8a90e082802185b901802199e15902d1",

-   "createdDate": "2022-07-22 00:43:42",

-   "description": "",

-   "id": "8a90857b822459cd018224dcb9eb13be",

-   "isCustom": true,

-   "items": [

    -   {

        -   "amount": 30,

        -   "billingDocument": {

            -   "id": "8a90a2fd819503b50181959525e5205d",

            -   "number": "INV00000001",

            -   "type": "Invoice"


            },

        -   "createdById": "8a90e082802185b901802199e15902d1",

        -   "createdDate": "2022-07-22 00:43:42",

        -   "currency": "USD",

        -   "description": "",

        -   "errorMessage": null,

        -   "id": "8a90857b822459cd018224dcb9ec13bf",

        -   "number": 1,

        -   "paymentGatewayId": "8a90a2fd807499580180781775c452a8",

        -   "paymentId": null,

        -   "paymentMethodId": "8a90a2fd8074995801807817ebed52aa",

        -   "paymentScheduleId": "8a90857b822459cd018224dcb9eb13be",

        -   "paymentScheduleNumber": "PS-00000007",

        -   "runHour": 23,

        -   "scheduledDate": "2022-07-31",

        -   "standalone": false,

        -   "status": "Pending",

        -   "updatedById": "8a90e082802185b901802199e15902d1",

        -   "updatedDate": "2022-07-22 00:43:42",

        -   "cancelledById": null,

        -   "cancelledOn": null


        },

    -   {

        -   "amount": 10,

        -   "billingDocument": {

            -   "id": "8a90a2fd819503b50181959525e5205d",

            -   "number": "INV00000001",

            -   "type": "Invoice"


            },

        -   "createdById": "8a90e082802185b901802199e15902d1",

        -   "createdDate": "2022-07-22 00:45:35",

        -   "currency": "USD",

        -   "description": "",

        -   "errorMessage": null,

        -   "id": "8a90a2fd822459ec018224de77a0359d",

        -   "number": 2,

        -   "paymentGatewayId": "8a90a2fd807499580180781775c452a8",

        -   "paymentId": null,

        -   "paymentMethodId": "8a90a2fd8074995801807817ebed52aa",

        -   "paymentScheduleId": "8a90857b822459cd018224dcb9eb13be",

        -   "paymentScheduleNumber": "PS-00000007",

        -   "runHour": 20,

        -   "scheduledDate": "2022-08-31",

        -   "standalone": false,

        -   "status": "Pending",

        -   "updatedById": "8a90e082802185b901802199e15902d1",

        -   "updatedDate": "2022-07-22 00:45:35",

        -   "cancelledById": null,

        -   "cancelledOn": null


        }


    ],

-   "nextPaymentDate": "2022-07-31",

-   "occurrences": 2,

-   "paymentScheduleNumber": "PS-00000007",

-   "period": null,

-   "recentPaymentDate": null,

-   "runHour": 0,

-   "standalone": false,

-   "startDate": "2022-07-31",

-   "status": "Active",

-   "success": true,

-   "totalAmount": 40,

-   "totalPaymentsErrored": 0,

-   "totalPaymentsProcessed": 0,

-   "updatedById": "8a90e082802185b901802199e15902d1",

-   "updatedDate": "2022-07-22 00:45:36",

-   "cancellationReason": null,

-   "cancelledById": null,

-   "cancelledOn": null,

-   "cancelDate": "2022-07-28 00:00:00"


}`
