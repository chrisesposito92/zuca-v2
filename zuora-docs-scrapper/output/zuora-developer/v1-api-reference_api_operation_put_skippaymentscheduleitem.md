---
title: "PUT SkipPaymentScheduleItem"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_SkipPaymentScheduleItem/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:03:08.932Z"
---

## Skip a payment schedule item

Skips a payment schedule item by ID. The skipped payment schedule item will turn to the `canceled` status, and a new item will be scheduled on the next recurring date after the last existing scheduled date.

**Note:**

-   Only payment schedule items in recurring payment schedules can be skipped, and the item must be in the `pending` status.
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

put/v1/payment-schedule-items/{item-id}/skip

Request samples

-   cURL

Copy

curl \-i \-X PUT \\
  'https://rest.test.zuora.com/v1/payment-schedule-items/{item-id}/skip' \\
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

`{

-   "amount": 30,

-   "billingDocument": null,

-   "cancellationReason": "Skip Payment",

-   "cf1__c": null,

-   "cf2__c": null,

-   "createdById": "402892f9423062950142306f2f530002",

-   "createdDate": "2022-09-22 00:59:17",

-   "currency": "USD",

-   "description": "",

-   "errorMessage": null,

-   "id": "402881a683642cff018364354abf12b6",

-   "number": 7,

-   "paymentGatewayId": null,

-   "paymentMethodId": "402892f9423062950142306f326c0056",

-   "paymentScheduleId": "402881a68361af72018361d4be120047",

-   "paymentScheduleNumber": "PS-00000004",

-   "runHour": 3,

-   "scheduledDate": "2022-11-04",

-   "standalone": true,

-   "status": "Pending",

-   "success": true,

-   "updatedById": "402892f9423062950142306f2f530002",

-   "updatedDate": "2022-09-22 00:59:17"


}`
