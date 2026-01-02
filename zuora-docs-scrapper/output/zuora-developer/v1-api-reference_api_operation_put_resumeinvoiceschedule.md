---
title: "PUT ResumeInvoiceSchedule"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_ResumeInvoiceSchedule/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:58:30.032Z"
---

## Resume an invoice schedule

Resumes an invoice schedule in Paused status immediately.

After an invoice schedule is resumed, it can continue to be automatically executed by Zuora Scheduler or by the [Execute an invoice schedule](https://developer.zuora.com/api-references/api/operation/POST_ExecuteInvoiceSchedule/) API operation.

**Note**: This operation is available only if you have the [Billing Schedule](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Billing_Schedule/Billing_Schedule_overview) feature enabled.

Security**bearerAuth**

Request

##### path Parameters

| scheduleKeyrequired | stringThe unique ID or number of the schedule to be resumed. For example, 2c92c8955bd63cc1015bd7c151af02ab or IS-0000001. |
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

put/v1/invoice-schedules/{scheduleKey}/resume

Request samples

-   cURL

Copy

curl \-i \-X PUT \\
  'https://rest.test.zuora.com/v1/invoice-schedules/{scheduleKey}/resume' \\
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

-   "actualAmount": 20200,

-   "billedAmount": 50000,

-   "currency": "USD",

-   "id": "e2441b3e24eb42859194be7da2403b38",

-   "nextRunDate": "2022-10-17",

-   "notes": "2022 Billing Schedule",

-   "number": "IS-00000004",

-   "orders": [

    -   "O-00000007",

    -   "O-00000008"


    ],

-   "scheduleItems": [

    -   {

        -   "actualAmount": 0,

        -   "amount": 50000,

        -   "id": "8a8881aa82118bec018211daf9f01680",

        -   "invoiceId": "8a8881aa82118bec018211dafc1e1695",

        -   "percentage": null,

        -   "runDate": "2022-02-24",

        -   "status": "Processed",

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

-   "status": "PartiallyProcessed",

-   "success": true,

-   "totalAmount": 70200,

-   "unbilledAmount": 20200


}`
