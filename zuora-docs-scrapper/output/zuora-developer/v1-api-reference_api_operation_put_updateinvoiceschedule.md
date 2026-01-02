---
title: "PUT UpdateInvoiceSchedule"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_UpdateInvoiceSchedule/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:58:29.232Z"
---

## Update an invoice schedule

Updates a pending invoice schedule. You can use this API operation to update invoice schedules in the following aspects:

-   Update notes and pending invoice schedule items
-   Update orders associated with invoice schedules
-   Remove or add invoice schedule items For more samples, see [Edit invoice schedules](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Billing_Schedule/Billing_Schedule_tutorials/Edit_invoice_schedules)

### Restrictions and limitations

When updating invoice schedules through the REST API, keep the following restrictions and limitations in mind:

-   You can only update invoice schedule items in `Pending` status.
-   You can only add orders or specific subscriptions to pending invoice schedules, and remove orders or specific subscriptions from pending invoice schedules.
-   For the invoice schedule items that you want to update, you must include the new values for these items in the request.
-   For the invoice schedule items that you want to keep unchanged, you must include all the existing information about these items in the request. Otherwise, the existing invoice schedule items that you do not include in the request are deleted.
-   For the orders that you want to keep unchanged for an invoice schedule, you must include all the existing order numbers associated with the invoice schedule in the request. Otherwise, the existing orders that you do not include in the request are removed.

**Note**: This operation is available only if you have the [Billing Schedule](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Billing_Schedule/Billing_Schedule_overview) feature enabled.

Security**bearerAuth**

Request

##### path Parameters

| scheduleKeyrequired | stringThe unique ID or number of the invoice schedule to be updated. For example, 2c92c8955bd63cc1015bd7c151af02ab or IS-0000001. |
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

| additionalSubscriptionsToBill | Array of stringsA list of the numbers of the subscriptions that need to be billed together with the invoice schedule.One invoice schedule can have at most 600 additional subscriptions. |
| --- | --- |
| invoiceSeparately | booleanWhether the invoice items created from the invoice schedule appears on a separate invoice when Zuora generates invoices. |
| nextRunDate | string <date>The run date of the next execution of the invoice schedule.By default, the next run date is the same as the run date of next pending invoice schedule item. The date can be overwritten by a different date other than the default value. If the invoice schedule has completed the execution, the next run date is null. |
| notes | string <= 255 charactersComments on the invoice schedule. |
| orders | Array of stringsA list of the IDs or numbers of the orders associated with the invoice schedule. One invoice schedule can be associated with at most 10 orders.The orders specified in this field override all the existing orders associated with the invoice schedule. |
| scheduleItems | Array of objects (scheduleItems)Container for invoice schedule items. The maximum number of schedule items is 50.The invoice schedule items specified in this field override all the existing invoice schedule items. |
| specificSubscriptions | Array of objects (specificSubscriptions)A list of the numbers of specific subscriptions associated with the invoice schedule.If the subscriptions specified in this field belong to the orders specified in the orders field, only the specific subscriptions instead of the orders are associated with the invoice schedule.If only the orders field is specified, all the subscriptions from the order are associated with the invoice schedule.The specific subscriptions specified in this field override all the existing specific subscriptions associated with the invoice schedule.Example:{   "orders": [     "O-00000001", "O-00000002"   ],   "specificSubscriptions": [     {       "orderKey": "O-00000001",       "subscriptionKey": "S-00000001"     }   ] } For the order with number O-00000001, only subscription S-00000001 contained in the order is associated with the invoice schedule.For the order with number O-00000002, all subscriptions contained in the order are associated with the invoice schedule. |
| property name*additional property | anyCustom fields of the Invoice Schedule object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/invoice-schedules/{scheduleKey}

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "additionalSubscriptionsToBill": [

    -   "S-00000001",

    -   "S-00000002"


    ],

-   "invoiceSeparately": false,

-   "nextRunDate": "2022-02-01",

-   "notes": "2022 Billing Schedule - V2",

-   "orders": [

    -   "O-00000007",

    -   "O-00000008"


    ],

-   "scheduleItems": [

    -   {

        -   "amount": 54000,

        -   "id": "8a8881aa82118bec018211daf9f01680",

        -   "runDate": "2022-02-24",

        -   "targetDateForAdditionalSubscriptions": "2022-02-24"


        },

    -   {

        -   "amount": 10000,

        -   "id": "8a8881aa82118bec018211daf9f11681",

        -   "runDate": "2022-10-17",

        -   "targetDateForAdditionalSubscriptions": "2022-10-17"


        },

    -   {

        -   "amount": 6200,

        -   "id": "8a8881aa82118bec018211daf9f11682",

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

        -   "actualAmount": 54000,

        -   "amount": 54000,

        -   "id": "8a8881aa82118bec018211daf9f01680",

        -   "percentage": null,

        -   "runDate": "2022-02-24",

        -   "status": "Pending",

        -   "targetDateForAdditionalSubscriptions": "2022-02-24"


        },

    -   {

        -   "actualAmount": 10000,

        -   "amount": 10000,

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
