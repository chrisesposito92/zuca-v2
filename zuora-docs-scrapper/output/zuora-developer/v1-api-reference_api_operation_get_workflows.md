---
title: "GET Workflows"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_Workflows/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:17:57.340Z"
---

## List workflows

Retrieves a list of workflow definitions available in your Zuora tenant.

### User Access Permission

You must be assigned the **Workflow View Access** permission to run this operation.

Security**bearerAuth**

Request

##### query Parameters

| callout_trigger | booleanIf set to true, the operation retrieves workflows that have the callout trigger enabled. If set to false, the operation retrieves workflows that have the callout trigger disabled. If not specified, the operation will not use this filter. |
| --- | --- |
| interval | stringA CRON expession that specifies a schedule (for example, 0 0 * * *). If specified, the operation retrieves the workflow that is run based on the specified schedule. |
| name | stringIf specified, the operation retrieves the workflow that is in the specified name. |
| ondemand_trigger | booleanIf set to true, the operation retrieves workflows that have the ondemand trigger enabled. If set to false, the operation retrieves workflows that have the ondemand trigger disabled. If not specified, the operation will not use this filter. |
| scheduled_trigger | booleanIf set to true, the operation retrieves workflows that have the scheduled trigger enabled. If set to false, the operation retrieves workflows that have the scheduled trigger disabled. If not specfied, the operation will not use this filter. |
| page | integerDefault: 1If you want to retrieve only the workflows on a specific page, you can specify the page number in the query. |
| page_length | integerDefault: 20The number of workflows shown in a single call. If the page parameter is not specified, the operation will return only the first page of results. If there are multiple pages of results, use it with the page parameter to get the results on subsequent pages. The maximum value is 50. |

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

get/workflows

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/workflows?callout\_trigger=true&interval=string&name=string&ondemand\_trigger=true&scheduled\_trigger=true&page=1&page\_length=20' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string'

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "data": [

    -   {

        -   "active_version": {

            -   "description": "",

            -   "id": 49,

            -   "status": "Active",

            -   "type": "Workflow::Setup",

            -   "version": "0.0.1"


            },

        -   "calloutTrigger": true,

        -   "createdAt": "2019-05-31T14:52:38.171Z",

        -   "description": "",

        -   "id": 48,

        -   "interval": null,

        -   "latest_inactive_verisons": [

            -   {

                -   "calloutTrigger": true,

                -   "createdAt": "2021-09-22T19:30:52.350Z",

                -   "description": "",

                -   "id": 50,

                -   "interval": "",

                -   "name": "test",

                -   "ondemandTrigger": true,

                -   "priority": "Medium",

                -   "scheduledTrigger": false,

                -   "status": "Inactive",

                -   "timezone": "Sydney",

                -   "type": "Workflow::Setup",

                -   "updatedAt": "2021-09-22T19:30:52.350Z",

                -   "version": "0.0.2"


                },

            -   {

                -   "calloutTrigger": true,

                -   "createdAt": "2021-09-22T19:30:52.350Z",

                -   "description": "",

                -   "id": 51,

                -   "interval": "",

                -   "name": "test",

                -   "ondemandTrigger": true,

                -   "priority": "Medium",

                -   "scheduledTrigger": false,

                -   "status": "Inactive",

                -   "timezone": "Sydney",

                -   "type": "Workflow::Setup",

                -   "updatedAt": "2021-09-22T19:30:52.350Z",

                -   "version": "0.0.3"


                }


            ],

        -   "name": "New test workflow",

        -   "ondemandTrigger": true,

        -   "scheduledTrigger": false,

        -   "status": "Active",

        -   "timezone": null,

        -   "updatedAt": "2019-06-03T21:02:26.694Z"


        }


    ],

-   "pagination": {

    -   "next_page": "[https://rest.zuora.com/workflows?page=2&page_length=1](https://rest.zuora.com/workflows?page=2&page_length=1)",

    -   "page": 1,

    -   "page_length": 1


    }


}`
