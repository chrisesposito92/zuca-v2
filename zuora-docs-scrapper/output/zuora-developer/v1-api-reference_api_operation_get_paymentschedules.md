---
title: "GET PaymentSchedules"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_PaymentSchedules/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:03:07.117Z"
---

## List payment schedules by customer account

Retrieves payment schedules of a customer account.

**Note:**

-   The Payment Schedules feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. To manage and access this feature through the self-service interface, see [Manage Features](https://knowledgecenter.zuora.com/Zuora_Payments/Payments_Settings/Manage_Features) in the Knowledge Center.
-   This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled.

Security**bearerAuth**

Request

##### query Parameters

| lastProcessedItems | integerNumber of the most recent processed payment schedules dispalyed in the response body. |
| --- | --- |
| nextPendingItems | integerNumber of next pending payment schedule items displayed in the response body. |
| accountId | stringThe ID of the customer account. If neither accountId nor accountNumber is specified, all payment schedules will be returned. |
| accountNumber | integerThe number of the customer account. If neither accountId nor accountNumber is specified, all payment schedules will be returned. |

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

get/v1/payment-schedules

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/payment-schedules?lastProcessedItems=0&nextPendingItems=0&accountId=string&accountNumber=0' \\
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

`[

-   {

    -   "accountId": "8a90a2fd8074995801807816dbac52a4",

    -   "accountNumber": "A00000002",

    -   "billingDocument": null,

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

            -   "updatedDate": "2022-07-22 00:43:42"


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

            -   "updatedDate": "2022-07-22 00:45:35"


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

    -   "totalAmount": 50,

    -   "totalPaymentsErrored": 0,

    -   "totalPaymentsProcessed": 0,

    -   "updatedById": "8a90e082802185b901802199e15902d1",

    -   "updatedDate": "2022-07-22 00:45:36"


    },

-   {

    -   "accountId": "8a90a2fd8074995801807816dbac52a4",

    -   "accountNumber": "A00000002",

    -   "billingDocument": null,

    -   "createdById": "8a90e082802185b901802199e15902d1",

    -   "createdDate": "2022-07-20 21:24:40",

    -   "description": "test update ps Xiaokai",

    -   "id": "8a90e0828219a57101821f00287a3abd",

    -   "isCustom": false,

    -   "items": [

        -   {

            -   "amount": 10,

            -   "billingDocument": {

                -   "id": "8a90a2fd819503b50181959525e5205d",

                -   "number": "INV00000001",

                -   "type": "Invoice"


                },

            -   "createdById": "8a90e082802185b901802199e15902d1",

            -   "createdDate": "2022-07-20 21:24:40",

            -   "currency": "USD",

            -   "description": "test update ps",

            -   "errorMessage": null,

            -   "id": "8a90e0828219a57101821f00287a3abf",

            -   "number": 1,

            -   "paymentGatewayId": "8a90a2fd807499580180781775c452a8",

            -   "paymentId": "8a90e86d821fd6d1018221eae795158b",

            -   "paymentMethodId": "8a90a2fd8074995801807817ebed52aa",

            -   "paymentScheduleId": "8a90e0828219a57101821f00287a3abd",

            -   "paymentScheduleNumber": "PS-00000006",

            -   "runHour": 11,

            -   "scheduledDate": "2022-07-21",

            -   "standalone": false,

            -   "status": "Processed",

            -   "updatedById": "3",

            -   "updatedDate": "2022-07-21 11:00:19"


            },

        -   {

            -   "amount": 10,

            -   "billingDocument": {

                -   "id": "8a90a2fd819503b50181959525e5205d",

                -   "number": "INV00000001",

                -   "type": "Invoice"


                },

            -   "createdById": "8a90e082802185b901802199e15902d1",

            -   "createdDate": "2022-07-20 21:24:40",

            -   "currency": "USD",

            -   "description": "test update ps",

            -   "errorMessage": null,

            -   "id": "8a90e0828219a57101821f00287b3ac0",

            -   "number": 2,

            -   "paymentGatewayId": "8a90a2fd807499580180781775c452a8",

            -   "paymentId": null,

            -   "paymentMethodId": "8a90a2fd8074995801807817ebed52aa",

            -   "paymentScheduleId": "8a90e0828219a57101821f00287a3abd",

            -   "paymentScheduleNumber": "PS-00000006",

            -   "runHour": 11,

            -   "scheduledDate": "2022-08-04",

            -   "standalone": false,

            -   "status": "Pending",

            -   "updatedById": "8a90e082802185b901802199e15902d1",

            -   "updatedDate": "2022-07-20 21:26:26"


            },

        -   {

            -   "amount": 10,

            -   "billingDocument": {

                -   "id": "8a90a2fd819503b50181959525e5205d",

                -   "number": "INV00000001",

                -   "type": "Invoice"


                },

            -   "createdById": "8a90e082802185b901802199e15902d1",

            -   "createdDate": "2022-07-20 21:24:40",

            -   "currency": "USD",

            -   "description": "test update ps",

            -   "errorMessage": null,

            -   "id": "8a90e0828219a57101821f00287b3ac1",

            -   "number": 3,

            -   "paymentGatewayId": "8a90a2fd807499580180781775c452a8",

            -   "paymentId": null,

            -   "paymentMethodId": "8a90a2fd8074995801807817ebed52aa",

            -   "paymentScheduleId": "8a90e0828219a57101821f00287a3abd",

            -   "paymentScheduleNumber": "PS-00000006",

            -   "runHour": 11,

            -   "scheduledDate": "2022-08-18",

            -   "standalone": false,

            -   "status": "Pending",

            -   "updatedById": "8a90e082802185b901802199e15902d1",

            -   "updatedDate": "2022-07-20 21:26:26"


            },

        -   {

            -   "amount": 10,

            -   "billingDocument": {

                -   "id": "8a90a2fd819503b50181959525e5205d",

                -   "number": "INV00000001",

                -   "type": "Invoice"


                },

            -   "createdById": "8a90e082802185b901802199e15902d1",

            -   "createdDate": "2022-07-20 21:26:26",

            -   "currency": "USD",

            -   "description": "test update ps",

            -   "errorMessage": null,

            -   "id": "8a90e0828219a57101821f01c5447f04",

            -   "number": 4,

            -   "paymentGatewayId": "8a90a2fd807499580180781775c452a8",

            -   "paymentId": null,

            -   "paymentMethodId": "8a90a2fd8074995801807817ebed52aa",

            -   "paymentScheduleId": "8a90e0828219a57101821f00287a3abd",

            -   "paymentScheduleNumber": "PS-00000006",

            -   "runHour": 11,

            -   "scheduledDate": "2022-09-01",

            -   "standalone": false,

            -   "status": "Pending",

            -   "updatedById": "8a90e082802185b901802199e15902d1",

            -   "updatedDate": "2022-07-20 21:26:26"


            }


        ],

    -   "nextPaymentDate": "2022-08-04",

    -   "occurrences": 4,

    -   "paymentScheduleNumber": "PS-00000006",

    -   "period": "BiWeekly",

    -   "recentPaymentDate": "2022-07-21",

    -   "runHour": 11,

    -   "standalone": false,

    -   "startDate": "2022-07-21",

    -   "status": "Active",

    -   "totalAmount": 40,

    -   "totalPaymentsErrored": 0,

    -   "totalPaymentsProcessed": 1,

    -   "updatedById": "3",

    -   "updatedDate": "2022-07-21 11:00:21"


    }


]`
