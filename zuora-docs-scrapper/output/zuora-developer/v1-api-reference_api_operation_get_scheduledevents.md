---
title: "GET ScheduledEvents"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_ScheduledEvents/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:15:41.823Z"
---

## List all scheduled events

Security**bearerAuth**

Request

##### query Parameters

| eventTypeName | stringThe name of the scheduled event. Should be specified in the pattern: ^[A-Za-z]{1,}[\w\-]*$ |
| --- | --- |
| apiObject | stringThe base object that the scheduled event is defined upon. Should be specified in the pattern: ^[A-Z][\w\-]*$ |
| apiField | stringThe base field of the base object in the apiObject field. Should be specified in the pattern: ^[A-Z][\w\-]*$ |
| active | booleanIndicate whether the scheduled event is active or inactive. |
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

get/events/scheduled-events

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/events/scheduled-events?eventTypeName=string&apiObject=string&apiField=string&active=true&start=0&limit=10' \\
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

Copy

Expand allCollapse all

`{

-   "data": [

    -   {

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


        }


    ],

-   "next": "/events/scheduled-events?start=10&limit=10"


}`
