---
title: "GET WorkflowsUsages"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_WorkflowsUsages/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:18:05.150Z"
---

## Retrieve workflow task usage

Gets workflow task usage sorted by day within a specified time frame.

### User Access Permission

You must be assigned the **Workflow View Access** permission to run this operation.

Security**bearerAuth**

Request

##### query Parameters

| startDaterequired | string <date>The start date of the usage data that you want to get. For example, 2019-01-01. |
| --- | --- |
| endDaterequired | string <date>The end date of the usage data that you want to get. For example, 2019-12-31. |
| metricsrequired | stringThe type of metric that you want to get. Currently, only taskCount is supported. taskCount is the amount of task runs. |

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

get/workflows/metrics.json

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/workflows/metrics.json?startDate=2019-08-24&endDate=2019-08-24&metrics=string' \\
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

-   "metrics": [

    -   {

        -   "date": "2019-01-16",

        -   "values": {

            -   "taskCount": 1417


            }


        },

    -   {

        -   "date": "2019-08-02",

        -   "values": {

            -   "taskCount": 24


            }


        },

    -   {

        -   "date": "2019-05-23",

        -   "values": {

            -   "taskCount": 2


            }


        }


    ]


}`
