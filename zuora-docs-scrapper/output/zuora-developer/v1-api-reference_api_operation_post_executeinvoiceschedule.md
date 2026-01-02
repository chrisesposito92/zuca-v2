---
title: "POST ExecuteInvoiceSchedule"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_ExecuteInvoiceSchedule/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:58:30.189Z"
---

## Execute an invoice schedule

Executes an invoice schedule immediately. During the execution, a bill run is created and generates an invoice or a credit memo asynchronously.

When you use this API operation to execute an invoice schedule item, you have the flexibility to decide whether to specify a specific item ID.

-   If you specify the unique ID of an invoice schedule item to be executed in the request, the corresponding invoice schedule item is executed.
-   If you do not specify the ID of any invoice schedule item in the request, the subscription end date is used as the target date to determine the next pending schedule item to be executed.

A paused invoice schedule and charges inside cannot be automatically executed by Zuora Scheduler or by this "Execute an invoice schedule" API operation. In this case, you can do one of the following:

-   Use the [Generate billing documents by account ID](https://developer.zuora.com/v1-api-reference/api/operation/POST_GenerateBillingDocuments/) API operation
-   Create a bill run with the target date greater than the next run date of the invoice schedule through UI or API

For more samples, see [Execute invoice schedules](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Billing_Schedule/Billing_Schedule_tutorials/Execute_invoice_schedules).

**Note**: This operation is available only if you have the [Billing Schedule](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Billing_Schedule/Billing_Schedule_overview) feature enabled.

Security**bearerAuth**

Request

##### path Parameters

| scheduleKeyrequired | stringThe unique ID or number of the schedule to be executed. For example, 2c92c8955bd63cc1015bd7c151af02ab or IS-0000001. |
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

| scheduleItemId | stringThe ID of the invoice schedule item to be executed.The item must be the earliest pending schedule item. If all the invoice schedule items have been processed and credit is needed to be generated, do not specify this field in the request. |
| --- | --- |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/invoice-schedules/{scheduleKey}/execute

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "scheduleItemId": "8ad09b7d82b5c62f0182c5cd16944f73"


}`

Response samples

-   200
-   500
-   4XX

application/jsonautoEmailautoPostautoRenewalbillRunFiltersbillRunNumbercreatedByIdcreatedDateidinvoiceDatenoEmailForZeroAmountInvoicestatussuccesstargetDateupdatedByIdupdatedDateapplication/json

Copy

Expand allCollapse all

`{

-   "autoEmail": false,

-   "autoPost": false,

-   "autoRenewal": false,

-   "billRunFilters": [

    -   {

        -   "accountId": "2c9081a03c63c94c013c66688a2c00bf",

        -   "filterType": "Subscription",

        -   "subscriptionId": "402882297e387c51017e38a245c313db"


        }


    ],

-   "billRunNumber": "BR-00000016",

-   "chargeTypeToExclude": [

    -   "OneTime",

    -   "Usage"


    ],

-   "createdById": "ff808081298c6e5401298c7274a40005",

-   "createdDate": "2022-01-24 19:58:27",

-   "id": "2c9890077e8a8490017e8bf3a5171a43",

-   "invoiceDate": "2020-02-01",

-   "noEmailForZeroAmountInvoice": false,

-   "status": "Pending",

-   "success": true,

-   "targetDate": "2020-02-01",

-   "updatedById": "ff808081298c6e5401298c7274a40005",

-   "updatedDate": "2022-01-24 19:58:27"


}`
