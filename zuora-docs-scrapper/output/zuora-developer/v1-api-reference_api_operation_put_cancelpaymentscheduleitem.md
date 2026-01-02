---
title: "PUT CancelPaymentScheduleItem"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_CancelPaymentScheduleItem/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:03:09.123Z"
---

## Cancel a payment schedule item

Cancels a payment schedule item by ID.

**Note:**

-   The Payment Schedules feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. To manage and access this feature through the self-service interface, see [Manage Features](https://knowledgecenter.zuora.com/Zuora_Payments/Payments_Settings/Manage_Features) in the Knowledge Center.
-   This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled.

Security**bearerAuth**

Request

##### path Parameters

| item-idrequired | stringThe unique ID of a payment schedule item. |
| --- | --- |

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

put/v1/payment-schedule-items/{item-id}/cancel

Request samples

-   cURL

Copy

curl \-i \-X PUT \\
  'https://rest.test.zuora.com/v1/payment-schedule-items/{item-id}/cancel' \\
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

-   "amount": 30,

-   "billingDocument": {

    -   "id": "8a90a2fd819503b50181959525e5205d",

    -   "number": "INV00000001",

    -   "type": "Invoice"


    },

-   "cancellationReason": "Skip Payment",

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

-   "scheduledDate": "2022-11-01",

-   "standalone": false,

-   "status": "Canceled",

-   "success": true,

-   "updatedById": "8a90e082802185b901802199e15902d1",

-   "updatedDate": "2022-07-29 02:54:54"


}`
