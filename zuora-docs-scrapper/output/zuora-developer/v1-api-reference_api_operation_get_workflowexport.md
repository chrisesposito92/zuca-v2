---
title: "GET WorkflowExport"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_WorkflowExport/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:18:33.562Z"
---

## Export a workflow version

Exports a workflow version into a JSON file. This file can be used to create a copy of this workflow version.

### User Access Permission

You must be assigned the **Workflow View Access** permission to run this operation.

Security**bearerAuth**

Request

##### path Parameters

| workflow_idrequired | integerThe ID of the workflow definition to export. |
| --- | --- |

##### query Parameters

| version | stringDefault result is the active version of the workflow definition. Version number and 'latest' can be used to export a specific version of the workflow definition. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

Responses

200

OK

400

The input of version is invalid.

404

Workflow version is not found.

get/workflows/{workflow\_id}/export

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/workflows/{workflow\_id}/export?version=string' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Track-Id: string'

Response samples

-   200
-   400
-   404

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "linkages": [

    -   {

        -   "linkage_type": "Start",

        -   "source_task_id": null,

        -   "source_workflow_id": 286,

        -   "target_task_id": 849


        }


    ],

-   "tasks": [

    -   {

        -   "action_type": "Callout",

        -   "assignment": [ ],

        -   "call_type": "SOAP",

        -   "concurrent_limit": 9999999,

        -   "css": {

            -   "left": "470px",

            -   "top": "160px"


            },

        -   "error": null,

        -   "error_class": null,

        -   "error_details": null,

        -   "id": 849,

        -   "iterate_row_reference": null,

        -   "name": "Call Echo",

        -   "object": null,

        -   "object_batched_reference": null,

        -   "object_id": null,

        -   "original_task_id": null,

        -   "original_workflow_id": null,

        -   "parameters": {

            -   "authorization": {

                -   "type": "none"


                },

            -   "body_type": "raw",

            -   "datas": [

                -   {

                    -   "key": "",

                    -   "value": ""


                    }


                ],

            -   "headers": [

                -   {

                    -   "key": "",

                    -   "value": ""


                    }


                ],

            -   "include_response_code": "true",

            -   "method": "GET",

            -   "raw_body": "",

            -   "retry_rules": {

                -   "current_retry_count": "0",

                -   "retry_count": "0",

                -   "retry_window": "30"


                },

            -   "strict_variables": "true",

            -   "url": "[http://scooterlabs.com/echo](http://scooterlabs.com/echo)",

            -   "validate_response": "false",

            -   "validation": {

                -   "status_codes": [

                    -   "",

                    -   "200"


                    ],

                -   "zuora_call": "false"


                },

            -   "validation_scheme": ""


            },

        -   "priority": "Medium",

        -   "process_id": null,

        -   "status": null,

        -   "tags": [

            -   ""


            ],

        -   "task_id": null


        }


    ],

-   "workflow": {

    -   "call_type": null,

    -   "callout_trigger": true,

    -   "css": {

        -   "left": "30px",

        -   "top": "40px"


        },

    -   "data": { },

    -   "delete_ttl": 60,

    -   "description": "",

    -   "finished_at": null,

    -   "id": 286,

    -   "interval": null,

    -   "name": "Call Echo",

    -   "notifications": { },

    -   "ondemand_trigger": true,

    -   "original_workflow_id": null,

    -   "parameters": { },

    -   "priority": "Medium",

    -   "scheduled_trigger": false,

    -   "started_at": null,

    -   "status": null,

    -   "sync_trigger": false,

    -   "task_summary": { },

    -   "timezone": null,

    -   "type": "Workflow::Setup",

    -   "version": "0.0.1"


    }


}`
