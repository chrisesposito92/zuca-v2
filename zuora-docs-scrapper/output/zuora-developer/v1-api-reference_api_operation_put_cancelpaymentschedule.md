---
title: "PUT CancelPaymentSchedule"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_CancelPaymentSchedule/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:03:32.481Z"
---

## Cancel a payment schedule

Cancels a payment schedule.

**Note:**

-   All pending payment schedule items will be canceled, effective from `cancelDate`.
-   The Payment Schedules feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. To manage and access this feature through the self-service interface, see [Manage Features](https://knowledgecenter.zuora.com/Zuora_Payments/Payments_Settings/Manage_Features) in the Knowledge Center.
-   This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled.
-   For more information on the payment schedule cancellation use case, see [Payment schedules use cases](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Schedules/Payment_schedules_use_cases) in the Knowledge Center.

Security**bearerAuth**

Request

##### path Parameters

| paymentScheduleKeyrequired | stringThe unique ID or number of a payment schedule. For example, 8a90857b822459cd018224dcb9eb13be, or PS-00000007. |
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

| cancelDaterequired | string <date>Specifies when the payment schedule will be canceled.Note: If there is no legitimate payment schedule item to cancel, the payment schedule cancel operation will be rejected. |
| --- | --- |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/payment-schedules/{paymentScheduleKey}/cancel

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "cancelDate": "2019-08-24"


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

-   "accountId": "402880e741112b310149b7343ef81234",

-   "accountNumber": "A-00000001",

-   "cf1__c": "v1",

-   "createdById": "402892f942306295014230a4ab4909bf",

-   "createdDate": "2021-11-01 19:40:00",

-   "description": null,

-   "errorCount": 0,

-   "id": "402880e749b72b310149b7343ef80005",

-   "items": [

    -   {

        -   "accountId": "402880e741112b310149b7343ef81234",

        -   "amount": 10,

        -   "cf1__c": "v1",

        -   "createdById": "402892f942306295014230a4ab4909bf",

        -   "createdDate": "2021-11-01 19:40:00",

        -   "currency": "USD",

        -   "description": null,

        -   "errorMessage": null,

        -   "id": "412880e749b72b310149b7343ef81346",

        -   "number": 1,

        -   "paymentGatewayId": "abc",

        -   "paymentId": null,

        -   "paymentMethodId": "123",

        -   "paymentScheduleId": "string",

        -   "paymentScheduleNumber": "string",

        -   "runHour": 1,

        -   "scheduledDate": "2021-11-01",

        -   "status": "Canceled",

        -   "updatedById": "402892f942306295014230a4ab4909bf",

        -   "updatedDate": "2021-11-01 19:40:00"


        },

    -   {

        -   "accountId": "402880e741112b310149b7343ef81234",

        -   "amount": 10,

        -   "cf1__c": "v1",

        -   "createdById": "402892f942306295014230a4ab4909bf",

        -   "createdDate": "2021-11-01 19:40:00",

        -   "currency": "USD",

        -   "description": null,

        -   "errorMessage": null,

        -   "id": "412880e749b72b310149b7343ef81347",

        -   "number": 2,

        -   "paymentGatewayId": "abc",

        -   "paymentId": null,

        -   "paymentMethodId": "123",

        -   "paymentScheduleId": "string",

        -   "paymentScheduleNumber": "string",

        -   "runHour": 1,

        -   "scheduledDate": "2021-12-01",

        -   "status": "Canceled",

        -   "updatedById": "402892f942306295014230a4ab4909bf",

        -   "updatedDate": "2021-11-01 19:40:00"


        }


    ],

-   "nextProcessDate": "2021-11-01",

-   "occurrences": 2,

-   "paymentScheduleNumber": "PS-00000001",

-   "period": "Monthly",

-   "processedCount": 0,

-   "recentProcessedDate": null,

-   "runHour": 1,

-   "startDate": "2021-11-01",

-   "status": "Canceled",

-   "success": true,

-   "totalAmount": 20,

-   "updatedById": "402892f942306295014230a4ab4909bf",

-   "updatedDate": "2021-11-01 19:40:00"


}`
