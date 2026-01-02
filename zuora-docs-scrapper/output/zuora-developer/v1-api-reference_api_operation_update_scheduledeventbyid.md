---
title: "UPDATE ScheduledEventByID"
url: "https://developer.zuora.com/v1-api-reference/api/operation/UPDATE_ScheduledEventByID/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:15:42.088Z"
---

## Update a scheduled event by ID

Security**bearerAuth**

Request

##### path Parameters

| idrequired | stringThe ID of the scheduled event. |
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

| active | booleanIndicate whether the scheduled event is active or inactive |
| --- | --- |
| condition | string <= 65535 charactersThe filter rule conditions, written in JEXL. The scheduled event is triggered only if the condition is evaluated as true. The rule might contain event context merge fields and data source merge fields. Data source merge fields must be from the base object of the event or from the joined objects of the base object. Scheduled events with invalid merge fields will fail to evaluate, thus will not be triggered. For example, to trigger an invoice due date scheduled event to only invoices with an amount over 1000, you would define the following condition:Invoice.Amount > 1000.0Invoice.Amount refers to the Amount field of the Zuora object Invoice. |
| description | string <= 1000 charactersThe description of the scheduled event. |
| displayName | string [ 1 .. 500 ] charactersThe display name of the scheduled event. |
| hours | integer [ 0 .. 23 ]The scheduled time (hour) that the scheduled event notifications are sent. This time is based on the localized timezone of your tenant. |
| minutes | integer [ 0 .. 59 ]The scheduled time (minute) that the scheduled event notifications are sent. This time is based on the localized timezone of your tenant. |
| parameters | objectThe parameters of the filter rule. The names of the parameters must match with the filter rule and can't be duplicated. |

Responses

200

OK

400

Bad Request

500

Server Error

put/events/scheduled-events/{id}

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "active": true,

-   "condition": "Subscription.Status == _SUBSCRIPTION_STATUS",

-   "description": "Trigger a scheduled event at 10:30 AM based on TermEndDate of subscription objects.",

-   "displayName": "Term End Date Scheduled Event",

-   "hours": 10,

-   "minutes": 30,

-   "parameters": {

    -   "_SUBSCRIPTION_STATUS": {

        -   "description": "The status of the subscription",

        -   "displayName": "Subscription Status",

        -   "options": [

            -   "Draft",

            -   "Active",

            -   "Pending",

            -   "Expired",

            -   "Cancelled"


            ],

        -   "valueType": "STRING"


        }


    }


}`

Response samples

-   200
-   400
-   500

application/json

Copy

Expand allCollapse all

`{

-   "active": true,

-   "apiField": "TermEndDate",

-   "apiObject": "Subscription",

-   "condition": "Subscription.Status == _SUBSCRIPTION_STATUS",

-   "cronExpression": "0 30 10 ? * *",

-   "description": "Trigger a scheduled event at 10:30 AM based on TermEndDate of subscription objects.",

-   "displayName": "Term End Date Scheduled Event",

-   "id": "d306545b74e445e4bffcf1c7609804be",

-   "name": "TermEndDateScheduledEvent",

-   "namespace": "user.notification",

-   "parameters": {

    -   "_SUBSCRIPTION_STATUS": {

        -   "description": "The status of the subscription",

        -   "displayName": "Subscription Status",

        -   "options": [

            -   "Draft",

            -   "Active",

            -   "Pending",

            -   "Expired",

            -   "Cancelled"


            ],

        -   "valueType": "STRING"


        }


    }


}`
