---
title: "PUT PaymentScheduleItem"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_PaymentScheduleItem/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:03:07.835Z"
---

## Update a payment schedule item

Updates a payment schedule item by ID.

**Note:**

-   The Payment Schedules feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. To manag\]([https://knowledgecenter.zuora.com/Zuora\_Payments/Payments\_Settings/Manage\_Features](https://knowledgecenter.zuora.com/Zuora_Payments/Payments_Settings/Manage_Features)).
-   This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled.
-   To link or unlink multiple payments with the item, specify the `linkPayments` and `unlinkPayments` field in the request body.
-   When the Multi-currency and Standalone Payments features are not enabled, you can create and update a payment schedule and payment schedule item in a currency other than the account currency.
-   The maximum number of payments that are allowed to be linked to a payment schedule item is `10`.
-   When unlinking and linking payments with the payment schedule item in one request, Zuora will first unlink the linked payments, and then link new payments to the item.

Security**bearerAuth**

Request

##### path Parameters

| psi-idrequired | stringThe unique ID of a payment schedule item. |
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

| amount | number <decimal>The amount of the payment. |
| --- | --- |
| currency | stringThe currency of the payment.Note:For custom payments, if Multi-currency is enabled, the payment currency can be different from the account currency for custom payment.For recurring payments, if Multi-currency is enabled, the payment currency can be different from the account currency but should be the same as billing currency for a recurring payment. |
| description | stringThe description of the payment schedule item. |
| linkPayments | Array of stringsContainer for payments linked to the payment schedule item. |
| paymentGatewayId | string or nullID of the payment gateway of the payment schedule item. |
| paymentMethodId | stringID of the payment method of the payment schedule item. |
| paymentOption | Array of objects (paymentOption)Container for the paymentOption items, which describe the transactional level rules for processing payments. Currently, only the Gateway Options type is supported.Here is an example:"paymentOption": [   {     "type": "GatewayOptions",     "detail": {       "SecCode":"WEB"     }   } ] paymentOption of the payment schedule takes precedence over paymentOption of the payment schedule item. |
| runHour | integerAt which hour of the day in the tenant’s timezone this payment will be collected. If the payment runHour and scheduledDate are backdated, the system will collect the payment when the next runHour occurs. |
| scheduledDate | string <date>The scheduled date when the payment is processed. |
| unlinkPayments | Array of stringsContainer for payments to be unlinked from the payment schedule item. |
| property name*additional property | anyCustom fields of the Payment Schedule Item object. The name of each custom field has the form customField__c. Custom field names are case-sensitive. See Custom Fields for more information. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/payment-schedule-items/{psi-id}

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "paymentMethodId": "8a90b44890c9bb0d0190d960b9191eea"


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

-   "id": "8a90d61290c9ceb60190d8eac80e125a",

-   "number": 1,

-   "paymentScheduleId": "8a90d61290c9ceb60190d8eac80b1259",

-   "paymentScheduleNumber": "PS-00000001",

-   "scheduledDate": "2024-07-31",

-   "runHour": 0,

-   "paymentMethodId": "8a90b44890c9bb0d0190d960b9191eea",

-   "paymentGatewayId": null,

-   "paymentGatewayNumber": null,

-   "amount": 14.99,

-   "balance": 14.99,

-   "currency": "USD",

-   "status": "Pending",

-   "errorMessage": null,

-   "paymentId": null,

-   "billingDocument": {

    -   "id": "8a90b44890c9bb0d0190d8c048a90da6",

    -   "number": "INV00001823",

    -   "type": "Invoice"


    },

-   "description": null,

-   "cancellationReason": null,

-   "cancelledById": null,

-   "cancelledOn": null,

-   "createdDate": "2024-07-22 13:29:43",

-   "createdById": "2c92c8f95e2d6ebb015e325df48e02da",

-   "updatedDate": "2024-07-22 15:40:21",

-   "updatedById": "2c92c8f95e2d6ebb015e325df48e02da",

-   "success": true


}`
