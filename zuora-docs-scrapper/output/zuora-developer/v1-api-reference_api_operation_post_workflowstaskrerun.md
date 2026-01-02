---
title: "POST WorkflowsTaskRerun"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_WorkflowsTaskRerun/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:18:05.487Z"
---

## Rerun a workflow task

Reruns a specific workflow task by its ID.

### User Access Permission

You must be assigned the **Workflow Run Access** permission to run this operation.

Security**bearerAuth**

Request

##### path Parameters

| task_idrequired | stringThe unique ID of the task. |
| --- | --- |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

Responses

200

OK

post/workflows/tasks/{task\_id}/rerun

Request samples

-   cURL

Copy

curl \-i \-X POST \\
  'https://rest.test.zuora.com/workflows/tasks/{task\_id}/rerun' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Idempotency-Key: string' \\
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

-   "action_type": "If",

-   "call_type": "SOAP",

-   "data": {

    -   "Callout": {

        -   "RequestBody": {

            -   "queryString": "Select Id From Contact Where LastName = 'Drew' AND FirstName = 'Nancy' AND WorkEmail = 'nancy@xyz.com'"


            },

        -   "RequestHeaders": {

            -   "Content-Type": "application/json"


            },

        -   "ResponseBody": {

            -   "message": "An unexpected error occurred\n"


            },

        -   "ResponseCode": 500,

        -   "ResponseHeaders": {

            -   "cache-control": [

                -   "max-age=0, no-cache, no-store"


                ],

            -   "connection": [

                -   "close"


                ],

            -   "content-type": [

                -   "text/plain; charset=UTF-8"


                ],

            -   "date": [

                -   "Thu, 19 Sep 2019 12:35:43 GMT"


                ],

            -   "expires": [

                -   "Thu, 19 Sep 2019 12:35:43 GMT"


                ],

            -   "pragma": [

                -   "no-cache"


                ],

            -   "server": [

                -   "kong/0.9.9"


                ],

            -   "x-n": [

                -   "S"


                ]


            },

        -   "URL": "[https://rest.apisandbox.zuora.com/v1/action/query](https://rest.apisandbox.zuora.com/v1/action/query)"


        },

    -   "Files": {

        -   "XML_52881.xml": {

            -   "name": "JSONData_xslt.xml",

            -   "object_class": "Workflow",

            -   "size": 0.011725425720214844


            }


        },

    -   "Tasks": {

        -   "Previous": {

            -   "ErrorClass": "WorkflowError::Callout",

            -   "ErrorReason": "Callout response was 500 after 1 tries.",

            -   "Id": 2770,

            -   "Status": "Error"


            }


        },

    -   "Workflow": {

        -   "ExecutionDate": "2019-09-19",

        -   "ExecutionDateTime": "2019-09-19T12:35:37",

        -   "LastRunDate": "2019-09-19",

        -   "LastRunDateTime": "2019-09-19T12:34:41",

        -   "WorkflowRunUser": "test-user"


        }


    },

-   "end_time": "2019-09-19T12:35:43.942Z",

-   "error": null,

-   "error_class": null,

-   "error_details": null,

-   "id": 2771,

-   "instance": true,

-   "name": "If",

-   "object": null,

-   "object_id": null,

-   "original_task_id": 2582,

-   "original_workflow_id": 416,

-   "parameters": {

    -   "if_clause": "{% if 0 > 1 %}\r\nTrue\r\n{% else %}\r\nFalse\r\n{% endif %}",

    -   "strict_variables": "true"


    },

-   "start_time": "2019-09-19T12:35:43.857Z",

-   "status": "Success",

-   "tags": [ ],

-   "workflow_id": 476


}`
