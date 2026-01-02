---
title: "POST Run Workflow"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_Run_Workflow/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:18:33.541Z"
---

## Run a workflow

Run a specified workflow. In the request body, you can include parameters that you want to pass to the workflow. For the parameters to be recognized and picked up by tasks in the workflow, you need to define the parameters first.

**Note**: To run a workflow, do not use the following reserved words in the request body of the parameters.

-   `controller`
-   `action`
-   `id`
-   `user_email`
-   `user_token`
-   `format`

### User Access Permission

You must be assigned the **Workflow Run Access** permission to run this operation.

To learn about how to define parameters, see [Configure the settings of a workflow](https://knowledgecenter.zuora.com/CE_Workflow/Using_Workflow/B_Configure_a_Workflow).

Security**bearerAuth**

Request

##### path Parameters

| workflow_idrequired | integerThe ID of the workflow definition you want to run. |
| --- | --- |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

##### Request Body schema: application/json

Include parameters you want to pass to the workflow.

object

Responses

200

OK

400

Callout not enabled for the workflow

406

The provided body is missing one or more required parameters

409

The provided workflow\_id references a workflow instance

post/workflows/{workflow\_id}/run

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "accountId": "4028905f5a87c0ff015a87d25ae90025",

-   "paymentId": "4028905f5a87c0ff015a889ddfb800c0"


}`

Response samples

-   200
-   400
-   406
-   409

application/json

responseresponse

Copy

`{

-   "createdAt": "2019-09-19 18:25:33 UTC",

-   "id": 400,

-   "name": "WF-396-00000003",

-   "originalWorkflowId": 396,

-   "status": "Queued",

-   "type": "Workflow::Instance",

-   "updatedAt": "2019-09-19 18:25:33 UTC"


}`
