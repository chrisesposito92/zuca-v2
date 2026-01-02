---
title: "PUT EventTrigger"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_EventTrigger/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:15:16.055Z"
---

## Update an event trigger

Security**bearerAuth**

Request

##### path Parameters

| idrequired | string <uuid> |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

##### Request Body schema: application/json
required

| active | booleanThe status of the trigger. |
| --- | --- |
| condition | string [ 1 .. 5000 ] charactersThe JEXL expression to be evaluated against object changes. See above for more information and an example. |
| description | string <= 1000 charactersThe description of the trigger. |
| eventType | objectThe type of events to be triggered. |

Responses

200

OK

404

Not Found

500

Server Error

put/events/event-triggers/{id}

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "description": "Trigger the event when an invoice is posted with amount over 1000",

-   "condition": "changeType == 'UPDATE' && Invoice.Status == 'Posted' && Invoice.Status_old != 'Posted' && Invoice.Amount > 1000.0"


}`

Response samples

-   200
-   404
-   500

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "id": "5a70564ad08c412fb98e06a80c365c93",

-   "baseObject": "Invoice",

-   "condition": "changeType == 'UPDATE' && Invoice.Status == 'Posted' && Invoice.Status_old != 'Posted' && Invoice.Amount > 1000.0",

-   "description": "Trigger the event when an invoice is posted with amount over 1000",

-   "eventType": {

    -   "name": "LargeInvoicePosted",

    -   "displayName": "Large Invoice Posted",

    -   "namespace": "user.notification"


    },

-   "active": true


}`
