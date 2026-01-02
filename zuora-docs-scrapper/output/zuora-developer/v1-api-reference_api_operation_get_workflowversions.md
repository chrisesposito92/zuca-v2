---
title: "GET WorkflowVersions"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_WorkflowVersions/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:18:32.872Z"
---

## List all versions of a workflow definition

Return a list of all workflow versions under a workflow definition

### User Access Permission

You must be assigned the **Workflow View Access** permission to run this operation.

Security**bearerAuth**

Request

##### path Parameters

| workflow_idrequired | integerThe unique id of the workflow definition to import a workflow version under. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

Responses

200

OK

get/workflows/{workflow\_id}/versions

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/workflows/{workflow\_id}/versions' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
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

        -   "calloutTrigger": true,

        -   "createdAt": "2019-05-31T14:52:38.171Z",

        -   "description": "",

        -   "id": 48,

        -   "interval": null,

        -   "name": "New test workflow",

        -   "ondemandTrigger": true,

        -   "scheduledTrigger": false,

        -   "timezone": null,

        -   "type": "Workflow::Setup",

        -   "updatedAt": "2019-06-03T21:02:26.694Z",

        -   "version": "0.0.1"


        },

    -   {

        -   "calloutTrigger": true,

        -   "createdAt": "2019-05-31T14:52:38.171Z",

        -   "description": "",

        -   "id": 49,

        -   "interval": null,

        -   "name": "New test workflow",

        -   "ondemandTrigger": true,

        -   "scheduledTrigger": false,

        -   "timezone": null,

        -   "type": "Workflow::Setup",

        -   "updatedAt": "2019-06-03T21:02:26.694Z",

        -   "version": "0.0.2"


        }


    ]


}`
