---
title: "POST PaymentSchedule"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_PaymentSchedule/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:03:02.799Z"
---

## Create a payment schedule

Creates a payment schedule. You can create either recurring payment schedules or custom payment schedules.

**Note:**

-   This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled.
-   You can choose to use payment schedules to process payments associated with billing documents or unapplied payments. If Standalone Payment is enabled, you can also use payment schedules to process standalone payments.
-   If multiple billing documents are associated to a payment schedule, when collecting the payment schedule item, the payment belongs to the payment schedule item will be applied to billing documents based on the due date of the billing document, in the ascending order.
-   When the Multi-currency and Standalone Payments features are not enabled, you can create and update a payment schedule and payment schedule item in a currency other than the account currency.
-   This operation is version controlled. If you set `Zuora-Version` to `329.0`, when creating custom payment schedules associated with billing documents, you need to specify the billing document for each payment schedule item; If `Zuora-Version` is set to `330.0` or a later available version, when creating custom payment schedules associated with billing documents, you only need to specify the billing documents at the payment schedule level. The default version number is `329.0`. However, we recommend that you specify the version to `330.0` or a later version.

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

| accountId | stringID of the customer account the payment schedule belongs to.Note: accountId and accountNumber cannot both be null. When both fields are specified, the two values must match each other. |
| --- | --- |
| accountNumber | stringAccount number of the customer account the payment schedule belongs to.Note: accountId and accountNumber cannot both be null. When both fields are specified, the two values must match each other. |
| amount | numberThe amount of each payment schedule item in the payment schedule.Note:This field is required when items is not specified.This field will be ignored when items is specified.When creating recurring payment schedules, there are 2 options to specify amounts:Specify totalAmount and occurrences, amount will be calculated.Specify amount and occurrences, totalAmount will be calculated. You must specify either totalAmount or amount. Specifying both fields at the same time is not allowed. |
| billingDocument | objectObject of the billing document with which the payment schedule is associated.Note:This field is optional. If you have the Standalone Payment feature enabled, you can leave this field blank and set standalone to true to create standalone payments. You can also choose to create unapplied payments by leaving this object blank and setting standalone to false.If Standalone Payment is not enabled, leaving this object unspecified will create unapplied payments.This field is available only if you are on the latest Zuora API version, or you set the Zuora-Version request header to 330.0 or a later available version. |
| billingDocuments | Array of objectsContainer array of the multiple billing documents associated with the payment schedule.If multiple billing documents are associated to a payment schedule, when collecting the payment schedule item, the payment belongs to the payment schedule item will be applied to billing documents based on the due date of the billing document, in the ascending order. |
| currency | stringCurrency of the payment schedule.Note:This field is optional. The default value is the account's default currency.This field will be ignored when items is specified.For custom payments, if Multi-currency is enabled, the payment currency can be different from the account currency for custom payment.For recurring payments, if Multi-currency is enabled, the payment currency can be different from the account currency but should be the same as billing currency for a recurring payment. |
| description | stringDescription of the payment schedule. Max length is 255. |
| items | Array of objects (paymentScheduleItemFieldsCustom)Container array for payment schedule items. |
| occurrences | integerThe number of payment schedule item to be created. Maximum value is 1000.Note:This field is required when items is not specified.This field will be ignored when items is specified. |
| paymentGatewayId | stringID of the payment gateway.Note:This field is optional. The default value is the account's default payment gateway ID. If no payment gateway ID is found on the cusotmer account level, the default value will be the tenant's default payment gateway ID.This field will be ignored when items is specified. |
| paymentMethodId | stringID of the payment method.Note:This field is optional. The default value is the account's default payment method ID.This field will be ignored when items is specified. |
| paymentOption | Array of objects (paymentOption)Container for the paymentOption items, which describe the transactional level rules for processing payments. Currently, only the Gateway Options type is supported.Here is an example:"paymentOption": [   {     "type": "GatewayOptions",     "detail": {       "SecCode":"WEB"     }   } ] paymentOption of the payment schedule takes precedence over paymentOption of the payment schedule item. |
| paymentScheduleNumber | stringYou can use this field to specify the number of the payment schedule. Only characters from the following sets are allowed: A-Z, a-z, 0-9, and -. Payment numbers must start with a letter. In addition,- can only be used at most once and cannot be placed at the beginning or the end of the payment numbers. |
| period | stringThe frequency for the payment collection since the startDate.Note:Thie field is required when items is not specified.This field will be ignored when items is specified.If startDate is 30 or 31 and period is Monthly, when in February, payment schedule will use the last day of February for payment collection.Enum: "Monthly" "Weekly" "BiWeekly" |
| prepayment | booleanIndicates whether the payments created by the payment schedule will be used as reserved payments. This field will only be available if the prepaid cash drawdown permission is enabled. See Prepaid Cash with Drawdown for more information. |
| runHour | integerSpecifies at which hour in the day in the tenant’s time zone when this payment will be collected. Available values: [0,1,2,~,22,23].Note:If the time difference between your tenant’s timezone and the timezone where Zuora servers are is not in full hours, for example, 2.5 hours, the payment schedule items will be triggered half hour later than your scheduled time.If the payment runHour and scheduledDate are backdated, the system will collect the payment when the next runHour occurs.This field is optional. The default value is 0.This field will be ignored when items is specified. |
| standalone | booleanIndicate whether the payments created by the payment schedule are standalone payments or not. When setting to true, standalone payments will be created. When setting to false, you can either specify a billing document, or not specifying any billing documents. In the later case, unapplied payments will be created. If set to null, standalone payment will be created.Note:This field is only available if the Standalone Payment is enabled. Do not include this field if Standalone Payment is not enabled.If Standalone Payment is enabled, default value is true. |
| startDate | string <date>The date for the first payment collection.Note:This field is required when items is not specified.This field will be ignored when items is specified. |
| totalAmount | numberThe total amount of that the payment schedule will collect. This field is only available for recurring payment schedules.Note:When creating recurring payment schedules, there are 2 options to specify amounts:Specify totalAmount and occurrences, amount will be calculated.Specify amount and occurrences, totalAmount will be calculated.You must specify either totalAmount or amount. Specifying both fields at the same time is not allowed.If the Standalone Payments feature is enabled and standalone is set to true for the payment schedule, totalAmount will be ignored. |
| property name*additional property | anyCustom fields of the Payment Schedule object. The name of each custom field has the form customField__c. Custom field names are case-sensitive. See Custom Fields for more information.Note: The values will automatically be pushed to payment schedule items level if the same fields exist at the payment schedule item level. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/payment-schedules

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

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

-   "id": "8a90d61290c9ceb60190d8eac80b1259",

-   "paymentScheduleNumber": "PS-00000001",

-   "accountId": "8a90b4488e7d5c0f018e7db3892400b2",

-   "accountNumber": "A00000370",

-   "startDate": "2024-07-31",

-   "runHour": 0,

-   "period": null,

-   "occurrences": 1,

-   "status": "Active",

-   "totalAmount": 14.99,

-   "nextPaymentDate": "2024-07-31",

-   "recentPaymentDate": null,

-   "totalPaymentsProcessed": 0,

-   "totalPaymentsErrored": 0,

-   "description": null,

-   "isCustom": true,

-   "prepayment": false,

-   "billingDocument": {

    -   "id": "8a90b44890c9bb0d0190d8c048a90da6",

    -   "number": "INV00001823",

    -   "type": "Invoice"


    },

-   "billingDocuments": [

    -   {

        -   "id": "8a90b44890c9bb0d0190d8c048a90da6",

        -   "number": "INV00001823",

        -   "type": "Invoice"


        }


    ],

-   "createdDate": "2024-07-22 13:29:43",

-   "createdById": "2c92c8f95e2d6ebb015e325df48e02da",

-   "updatedDate": "2024-07-22 13:29:43",

-   "updatedById": "2c92c8f95e2d6ebb015e325df48e02da",

-   "cancelledById": null,

-   "cancelledOn": null,

-   "cancelDate": null,

-   "items": [

    -   {

        -   "id": "8a90d61290c9ceb60190d8eac80e125a",

        -   "number": 1,

        -   "paymentScheduleId": "8a90d61290c9ceb60190d8eac80b1259",

        -   "paymentScheduleNumber": "PS-00000001",

        -   "scheduledDate": "2024-07-31",

        -   "runHour": 0,

        -   "paymentMethodId": null,

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

        -   "updatedDate": "2024-07-22 13:29:43",

        -   "updatedById": "2c92c8f95e2d6ebb015e325df48e02da"


        }


    ],

-   "success": true


}`
