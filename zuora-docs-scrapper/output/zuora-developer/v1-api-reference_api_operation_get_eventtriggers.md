---
title: "GET EventTriggers"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_EventTriggers/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:15:15.271Z"
---

## List event triggers

Security**bearerAuth**

Request

##### query Parameters

| baseObject | stringThe Zuora object that trigger condition is defined upon. The format of the value in this field depends on the base object type:Standard object: object name, which should follow the pattern ^[A-Z][\w-]*$. For example, Invoice.Custom object: default__<custom_object_api_name>. For example, default__vehicle. |
| --- | --- |
| eventTypeName | stringThe event type name. Should be specified in the pattern: ^[A-Za-z]{1,}[\w-]*$ |
| active | stringThe status of the event trigger. |
| start | integer >= 0Default: 0The first index of the query result. Default to 0 if absent, and the minimum is 0. |
| limit | integer >= 1Default: 10The maximum number of data records to be returned. Default to 10 if absent. |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

Responses

200

OK

400

Bad Request

500

Server Error

get/events/event-triggers

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/events/event-triggers?baseObject=string&eventTypeName=string&active=string&start=0&limit=10' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string'

Response samples

-   200
-   400
-   500

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "data": [

    -   {

        -   "id": "ac1ee535e8524858a72edb464212729d",

        -   "baseObject": "Invoice",

        -   "condition": "changeType == 'UPDATE' && Invoice.Status == 'Posted' && Invoice.Status_old != 'Posted' && Invoice.Amount > 1000.0",

        -   "description": "Trigger an event when an invoice is posted with amount over 1000",

        -   "eventType": {

            -   "name": "LargeInvoicePosted",

            -   "displayName": "Large Invoice Posted",

            -   "description": "An invoice is posted with amount over 1000"


            },

        -   "active": true


        }


    ],

-   "next": "[https://api.zuora.com/events/event-triggers?start=1&limit=1](https://api.zuora.com/events/event-triggers?start=1&limit=1)"


}`
