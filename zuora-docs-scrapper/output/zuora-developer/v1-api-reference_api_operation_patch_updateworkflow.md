---
title: "PATCH UpdateWorkflow"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PATCH_UpdateWorkflow/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:18:32.626Z"
---

## Update a workflow

Updates a specific workflow by its ID, which allows you to [configure the settings of a workflow](https://knowledgecenter.zuora.com/CE_Workflow/Using_Workflow/B_Configure_a_Workflow) via API.

### User Access Permission

You must be assigned the **Workflow Manage Access** permission to run this operation.

Security**bearerAuth**

Request

##### path Parameters

| workflow_idrequired | stringThe unique ID of a workflow definition. For example, 19080. |
| --- | --- |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |

##### Request Body schema: application/json

| active_workflow_version_id | integerThe id of a version. This version will then be set to the active version of the workflow definition. |
| --- | --- |
| description | stringThe description of the workflow defintion |
| name | stringThe name of the workflow definition |
| status | stringCan be Active or Inactive. Active workfow definitions run like normal. Inactive workflow definitions cannot be run. |

Responses

200

OK

404

The workflow for the given id does not exist

422

Bad Request for one of the following reasons:

-   The name or description fields are not strings.
-   The ondemand\_trigger, callout\_trigger, or scheduled\_trigger fields are not booleans.
-   The timezone does not match one of the valid values in [this spread sheet](https://docs.google.com/spreadsheets/d/1skhepi-q5l9LyaMUPZjU_V9gzTphNMqNyV6ST5mygEo/edit?usp=sharing).
-   The priority is not one of High, Medium, or Low.
-   The status is not one of Active or Inactive.
-   The scheduled\_trigger is set to true but a valid timezone and interval were not passed.

patch/workflows/{workflow\_id}

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "description": "Retrieve and update products"


}`

Response samples

-   200
-   404
-   422

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "id": 265,

-   "name": "Refresh products",

-   "description": "Retrieve and update products",

-   "status": "Active",

-   "ondemandTrigger": true,

-   "calloutTrigger": true,

-   "scheduledTrigger": false,

-   "interval": null,

-   "timezone": null,

-   "createdAt": "2021-02-04T13:39:10.530+08:00",

-   "updatedAt": "2021-07-23T11:43:48.576+08:00",

-   "active_version": {

    -   "id": 265,

    -   "description": "the first description",

    -   "type": "Workflow::Setup",

    -   "version": "0.0.1",

    -   "status": "Active"


    }


}`
