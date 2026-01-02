---
title: "POST WorkflowVersionsImport"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_WorkflowVersionsImport/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:18:32.369Z"
---

## Import a workflow version

Create a new workflow version under a workflow definition using the exported JSON document of an existing workflow version.

### User Access Permission

You must be assigned the **Workflow Manage Access** permission to run this operation.

Security**bearerAuth**

Request

##### path Parameters

| workflow_idrequired | integerThe unique id of the workflow definition to import a workflow version under. |
| --- | --- |

##### query Parameters

| versionrequired | stringThe version number of the new workflow version to import. Must be greater than any existing version numbers. |
| --- | --- |
| activate | booleanIndicates whether the imported version is an active version. Default to be false. |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

##### Request Body schema: application/json

| linkages | Array of objects (Linkage) |
| --- | --- |
| tasks | Array of objects (Task) |
| workflow | object (detailed workflow)A workflow. |

Responses

200

OK

post/workflows/{workflow\_id}/versions/import

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "workflow": {

    -   "id": 458,

    -   "name": "Checking Workflow",

    -   "description": "",

    -   "type": "Workflow::Setup",

    -   "ondemand_trigger": true,

    -   "callout_trigger": false,

    -   "scheduled_trigger": false,

    -   "interval": "",

    -   "timezone": "",

    -   "status": "Active",

    -   "version": "0.0.1"


    },

-   "tasks": [

    -   {

        -   "id": 1418,

        -   "name": "Checking the Approval Email",

        -   "parameters": {

            -   "emailBody": "<body style=\\font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; color: #333;\\>\\n\\t<p> Hello,</p>\\n\\t<p>You have a pending approval. Please <a href=\\{{Data.Approval.approveLink}}\\>approve</a> or <a href=\\{{Data.Approval.rejectLink}}\\>reject</a>.</p>\\n\\t<p>Thanks</p> \\n</body>",

            -   "senderName": "Admin",

            -   "senderEmail": "workflow@zuora.com",

            -   "approvalNote": "",

            -   "subjectEmail": "This is the email to check if this email is working",

            -   "delivery_method": "email",

            -   "email_approver_emails": [

                -   "admin@company.com"


                ]


            },

        -   "action_type": "Approval",

        -   "object": "",

        -   "object_id": "",

        -   "call_type": "SOAP",

        -   "task_id": null,

        -   "concurrent_limit": 9999999,

        -   "tags": [ ]


        }


    ],

-   "linkages": [

    -   {

        -   "source_workflow_id": 458,

        -   "source_task_id": null,

        -   "target_task_id": 1418,

        -   "linkage_type": "Finish"


        }


    ]


}`

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "id": 3373,

-   "name": "Checking Workflow",

-   "description": "",

-   "status": "Active",

-   "ondemandTrigger": true,

-   "calloutTrigger": false,

-   "scheduledTrigger": false,

-   "interval": "",

-   "timezone": "",

-   "createdAt": "2024-11-15T12:51:45.859+08:00",

-   "updatedAt": "2024-11-15T12:51:45.859+08:00",

-   "active_version": {

    -   "id": 3373,

    -   "description": "",

    -   "type": "Workflow::Setup",

    -   "version": "0.0.1",

    -   "status": "Inactive"


    }


}`
