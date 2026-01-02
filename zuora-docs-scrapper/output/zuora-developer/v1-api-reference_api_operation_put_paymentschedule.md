---
title: "PUT PaymentSchedule"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_PaymentSchedule/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:03:33.483Z"
---

## Update a payment schedule

Updates a payment schedule. For custom payment schedules, only the custom fields on the payment schedules can be udpated. Use the [Update a payment schedule item](https://developer.zuora.com/api-references/api/operation/PUT_PaymentScheduleItem/) operation to update payment schedule items of custom payment schedule.

Note the following rules for the `periodStartDate`, `period`, and `occurrences`:

-   If `periodStartDate` is specified, all pending payment schedule items will be rescheduled using this new `periodStartDate`. If `period` is changed, we recommend passing in `periodStartDate`. Otherwise, the system would use the original start date if there is no processed or canceled items, or the last processed or canceled '`scheduleDate` + 1 `period`' as the new `periodStartDate`.
-   If only `occurrences` is updated, the new item will start with the last processed or canceled '`scheduleDate` + 1 `period`'.

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

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| amount | numberIndicates the updated amount of the pending payment schedule items. |
| --- | --- |
| currency | stringIndicates the updated currency of the pending payment schedule items.Note:For custom payments, if Multi-currency is enabled, the payment currency can be different from the account currency for custom payment.For recurring payments, if Multi-currency is enabled, the payment currency can be different from the account currency but should be the same as billing currency for a recurring payment. |
| description | string <= 255 charactersDescription of the payment schedule. |
| occurrences | integerIndicates the updated number of payment schedule items that are created by the payment schedule.Note:If "updated occurrences > existing occurrences", the following number of pending payment schedule item will be added to the payment schedule: “updated occurrences - existing occurrences”.If "existing occurrences > updated occurrences >= the number of processed/errored/canceled payment schedule items", the following number of pending items will be removed by descending order of the schedule dates: "existing occurrences - updated occurrences".If "updated occurrences < the number of processed/erroed/canceled payment schedule items", a validation error will be returned. |
| paymentGatewayId | stringIndicates the updated payment gateway ID of the pending payment schedule items. |
| paymentMethodId | stringIndicates the updated payment method ID of the pending payment schedule items. |
| paymentOption | Array of objects (paymentOption)Container for the paymentOption items, which describe the transactional level rules for processing payments. Currently, only the Gateway Options type is supported.Here is an example:"paymentOption": [   {     "type": "GatewayOptions",     "detail": {       "SecCode":"WEB"     }   } ] paymentOption of the payment schedule takes precedence over paymentOption of the payment schedule item.Note: To enable this field, submit a request at Zuora Global Support. |
| period | stringIndicates the updated period of the pending payment schedule items.Enum: "Monthly" "Weekly" "BiWeekly" |
| periodStartDate | string <date>Indicates the updated collection date for the next pending payment schedule item. |
| runHour | integer <date>Specifies at which hour of the day in the tenant’s time zone this payment will be collected. Available values: [0,1,2,~,22,23].If the time difference between your tenant’s timezone and the timezone where Zuora servers are is not in full hours, for example, 2.5 hours, the payment schedule items will be triggered half hour later than your scheduled time. If the payment runHour and scheduledDate are backdated, the system will collect the payment when the next runHour occurs. |
| property name*additional property | anyCustom fields of the Payment Schedule object. The name of each custom field has the form customField__c. Custom field names are case-sensitive. See Custom Fields for more information.Note: The values will automatically be pushed to payment schedule items level if the same fields exist at the payment schedule item level. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/payment-schedules/{paymentScheduleKey}

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "description": "Details of this payment schedule"


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

-   "accountId": "8a90a2fd8074995801807816dbac52a4",

-   "accountNumber": "A00000002",

-   "billingDocument": null,

-   "createdById": "8a90e082802185b901802199e15902d1",

-   "createdDate": "2022-07-10 01:46:33",

-   "description": "Details of this payment schedule",

-   "id": "8a90e08281e10bb00181e749f4db01b8",

-   "isCustom": false,

-   "items": [

    -   {

        -   "amount": 100,

        -   "billingDocument": null,

        -   "createdById": "8a90e082802185b901802199e15902d1",

        -   "createdDate": "2022-07-10 01:46:33",

        -   "currency": "USD",

        -   "description": "test xiaokai",

        -   "errorMessage": null,

        -   "id": "8a90e08281e10bb00181e749f4dd01b9",

        -   "number": 1,

        -   "paymentGatewayId": "8a90a2fd807499580180781775c452a8",

        -   "paymentId": null,

        -   "paymentMethodId": "8a90a2fd8074995801807817ebed52aa",

        -   "paymentScheduleId": "8a90e08281e10bb00181e749f4db01b8",

        -   "paymentScheduleNumber": "PS-00000002",

        -   "runHour": 12,

        -   "scheduledDate": "2022-07-10",

        -   "standalone": true,

        -   "status": "Canceled",

        -   "updatedById": "8a90e082802185b901802199e15902d1",

        -   "updatedDate": "2022-07-28 06:12:39"


        },

    -   {

        -   "amount": 100,

        -   "billingDocument": null,

        -   "createdById": "8a90e082802185b901802199e15902d1",

        -   "createdDate": "2022-07-10 01:46:33",

        -   "currency": "USD",

        -   "description": "test xiaokai",

        -   "errorMessage": null,

        -   "id": "8a90e08281e10bb00181e749f4e501ba",

        -   "number": 2,

        -   "paymentGatewayId": "8a90a2fd807499580180781775c452a8",

        -   "paymentId": null,

        -   "paymentMethodId": "8a90a2fd8074995801807817ebed52aa",

        -   "paymentScheduleId": "8a90e08281e10bb00181e749f4db01b8",

        -   "paymentScheduleNumber": "PS-00000002",

        -   "runHour": 12,

        -   "scheduledDate": "2022-08-10",

        -   "standalone": true,

        -   "status": "Canceled",

        -   "updatedById": "8a90e082802185b901802199e15902d1",

        -   "updatedDate": "2022-07-28 06:12:39"


        },

    -   {

        -   "amount": 10,

        -   "billingDocument": null,

        -   "createdById": "8a90e082802185b901802199e15902d1",

        -   "createdDate": "2022-07-10 01:46:33",

        -   "currency": "USD",

        -   "description": "test xiaokai",

        -   "errorMessage": null,

        -   "id": "8a90e08281e10bb00181e749f4e601bb",

        -   "number": 3,

        -   "paymentGatewayId": "8a90a2fd807499580180781775c452a8",

        -   "paymentId": null,

        -   "paymentMethodId": "8a90a2fd8074995801807817ebed52aa",

        -   "paymentScheduleId": "8a90e08281e10bb00181e749f4db01b8",

        -   "paymentScheduleNumber": "PS-00000002",

        -   "runHour": 23,

        -   "scheduledDate": "2022-11-01",

        -   "standalone": true,

        -   "status": "Pending",

        -   "updatedById": "8a90e082802185b901802199e15902d1",

        -   "updatedDate": "2022-07-28 06:12:39"


        },

    -   {

        -   "amount": 10,

        -   "billingDocument": null,

        -   "createdById": "8a90e082802185b901802199e15902d1",

        -   "createdDate": "2022-07-24 20:07:12",

        -   "currency": "USD",

        -   "description": "test xiaokai",

        -   "errorMessage": null,

        -   "id": "8a908de6822b2e1501823352ac745b53",

        -   "number": 4,

        -   "paymentGatewayId": "8a90a2fd807499580180781775c452a8",

        -   "paymentId": null,

        -   "paymentMethodId": "8a90a2fd8074995801807817ebed52aa",

        -   "paymentScheduleId": "8a90e08281e10bb00181e749f4db01b8",

        -   "paymentScheduleNumber": "PS-00000002",

        -   "runHour": 23,

        -   "scheduledDate": "2022-12-01",

        -   "standalone": true,

        -   "status": "Pending",

        -   "updatedById": "8a90e082802185b901802199e15902d1",

        -   "updatedDate": "2022-07-28 06:12:39"


        },

    -   {

        -   "amount": 10,

        -   "billingDocument": null,

        -   "createdById": "8a90e082802185b901802199e15902d1",

        -   "createdDate": "2022-07-28 06:12:39",

        -   "currency": "USD",

        -   "description": "test xiaokai",

        -   "errorMessage": null,

        -   "id": "8a90e082824456ae018244f00e0317eb",

        -   "number": 5,

        -   "paymentGatewayId": "8a90a2fd807499580180781775c452a8",

        -   "paymentId": null,

        -   "paymentMethodId": "8a90a2fd8074995801807817ebed52aa",

        -   "paymentScheduleId": "8a90e08281e10bb00181e749f4db01b8",

        -   "paymentScheduleNumber": "PS-00000002",

        -   "runHour": 23,

        -   "scheduledDate": "2023-01-01",

        -   "standalone": true,

        -   "status": "Pending",

        -   "updatedById": "8a90e082802185b901802199e159021d",

        -   "updatedDate": "2022-07-28 06:12:39"


        }


    ],

-   "nextPaymentDate": "2022-11-01",

-   "occurrences": 5,

-   "paymentScheduleNumber": "PS-00000002",

-   "period": "Monthly",

-   "recentPaymentDate": null,

-   "runHour": 23,

-   "standalone": true,

-   "startDate": "2022-07-10",

-   "status": "Active",

-   "success": true,

-   "totalAmount": 230,

-   "totalPaymentsErrored": 0,

-   "totalPaymentsProcessed": 0,

-   "updatedById": "8a90e082802185b901802199e15902d1",

-   "updatedDate": "2022-07-28 06:12:39"


}`
