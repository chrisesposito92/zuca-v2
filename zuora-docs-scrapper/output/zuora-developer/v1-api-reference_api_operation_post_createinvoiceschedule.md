---
title: "POST CreateInvoiceSchedule"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_CreateInvoiceSchedule/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:58:29.462Z"
---

## Create an invoice schedule

Creates an invoice schedule.

### Limitations

This API operation has the following limitations:

-   You can create at most 50 invoice schedule items in one request.

-   You can associate at most 10 orders with an invoice schedule in one request.

-   You can associate at most 300 subscriptions with an invoice schedule in one request, including those contained in orders and separate subscriptions.


**Note**: This operation is available only if you have the [Billing Schedule](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Billing_Schedule/Billing_Schedule_overview) feature enabled.

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

| accountKey | stringThe ID or number of the account associated with the invoice schedule. |
| --- | --- |
| additionalSubscriptionsToBill | Array of stringsA list of the numbers of the subscriptions that need to be billed together with the invoice schedule.One invoice schedule can have at most 600 additional subscriptions. |
| invoiceSeparately | booleanWhether the invoice items created from the invoice schedule appears on a separate invoice when Zuora generates invoices. |
| notes | string <= 255 charactersComments on the invoice schedule. |
| orders | Array of stringsA list of the IDs or numbers of the orders associated with the invoice schedule. One invoice schedule can be associated with at most 10 orders. |
| scheduleItems | Array of objects (scheduleItems)Container for invoice schedule items. One invoice schedule can have at most 50 invoice schedule items. |
| specificSubscriptions | Array of objects (specificSubscriptions)A list of the numbers of specific subscriptions associated with the invoice schedule.If the subscriptions specified in this field belong to the orders specified in the orders field, only the specific subscriptions instead of the orders are associated with the invoice schedule.If only the orders field is specified, all the subscriptions from the order are associated with the invoice schedule.Example:{   "orders": [     "O-00000001", "O-00000002"   ],   "specificSubscriptions": [     {       "orderKey": "O-00000001",       "subscriptionKey": "S-00000001"     }   ] } For the order with number O-00000001, only subscription S-00000001 contained in the order is associated with the invoice schedule.For the order with number O-00000002, all subscriptions contained in the order are associated with the invoice schedule. |
| property name*additional property | anyCustom fields of the Invoice Schedule object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/invoice-schedules

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "accountKey": "A00000007",

-   "additionalSubscriptionsToBill": [

    -   "S-00000001",

    -   "S-00000002"


    ],

-   "invoiceSeparately": false,

-   "notes": "2022 Billing Schedule",

-   "orders": [

    -   "O-00000007",

    -   "O-00000008"


    ],

-   "scheduleItems": [

    -   {

        -   "amount": 50000,

        -   "runDate": "2022-02-24",

        -   "targetDateForAdditionalSubscriptions": "2022-02-24"


        },

    -   {

        -   "amount": 14000,

        -   "runDate": "2022-10-17",

        -   "targetDateForAdditionalSubscriptions": "2022-10-17"


        },

    -   {

        -   "amount": 6200,

        -   "runDate": "2022-11-14",

        -   "targetDateForAdditionalSubscriptions": "2022-11-14"


        }


    ],

-   "specificSubscriptions": [

    -   {

        -   "orderKey": "O-00000008",

        -   "subscriptionKey": "S-00000008"


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

-   "actualAmount": 70200,

-   "additionalSubscriptionsToBill": [

    -   "S-00000001",

    -   "S-00000002"


    ],

-   "billedAmount": 0,

-   "currency": "USD",

-   "id": "e2441b3e24eb42859194be7da2403b38",

-   "invoiceSeparately": false,

-   "nextRunDate": "2022-02-24",

-   "notes": "2022 Billing Schedule",

-   "number": "IS-00000004",

-   "orders": [

    -   "O-00000007",

    -   "O-00000008"


    ],

-   "scheduleItems": [

    -   {

        -   "actualAmount": 50000,

        -   "amount": 50000,

        -   "id": "8a8881aa82118bec018211daf9f01680",

        -   "percentage": null,

        -   "runDate": "2022-02-24",

        -   "status": "Pending",

        -   "targetDateForAdditionalSubscriptions": "2022-02-24"


        },

    -   {

        -   "actualAmount": 14000,

        -   "amount": 14000,

        -   "id": "8a8881aa82118bec018211daf9f11681",

        -   "percentage": null,

        -   "runDate": "2022-10-17",

        -   "status": "Pending",

        -   "targetDateForAdditionalSubscriptions": "2022-10-17"


        },

    -   {

        -   "actualAmount": 6200,

        -   "amount": 6200,

        -   "id": "8a8881aa82118bec018211daf9f11682",

        -   "percentage": null,

        -   "runDate": "2022-11-14",

        -   "status": "Pending",

        -   "targetDateForAdditionalSubscriptions": "2022-11-14"


        }


    ],

-   "specificSubscriptions": [

    -   {

        -   "orderKey": "O-00000008",

        -   "subscriptionKey": "S-00000008"


        }


    ],

-   "status": "Pending",

-   "success": true,

-   "totalAmount": 70200,

-   "unbilledAmount": 70200


}`
