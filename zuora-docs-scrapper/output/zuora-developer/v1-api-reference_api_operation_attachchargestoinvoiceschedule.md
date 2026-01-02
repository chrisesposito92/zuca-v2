---
title: "AttachChargesToInvoiceSchedule"
url: "https://developer.zuora.com/v1-api-reference/api/operation/attachChargesToInvoiceSchedule/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:58:21.795Z"
---

## Attach charges to an invoice schedule

Attaches charges to an invoice schedule. The invoice schedules you want to attach charges to must be in Fully Processed or Partially Processed status. You can attach charges only if they were previously detached from the same invoice schedule. Invoice schedules will automatically bill re-attached charges in the upcoming planned invoice schedule items.

Security**bearerAuth**

Request

##### path Parameters

| scheduleKeyrequired | stringThe unique ID or number of the invoice schedule to attach charges to. For example, 2c92c8955bd63cc1015bd7c151af02ab or IS-0000001. |
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

| specificSubscriptions | Array of objects (specificSubscriptions)A list of charge numbers to be attached to the invoice schedule.Each item in this array represents a specific subscription associated with the invoice schedule. Use the chargeNumbers field to specify all the charges you want to attach for each subscription. |
| --- | --- |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/invoice-schedules/{scheduleKey}/attach

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "specificSubscriptions": [

    -   {

        -   "orderKey": "O-00017019",

        -   "subscriptionKey": "A-S00008953",

        -   "chargeNumbers": [

            -   "C-00065317"


            ]


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

`{

-   "success": true


}`
