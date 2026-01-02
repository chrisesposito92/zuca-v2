---
title: "DELETE WorkflowVersion"
url: "https://developer.zuora.com/v1-api-reference/api/operation/DELETE_WorkflowVersion/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:17:42.371Z"
---

## Delete a workflow version

Delete a workflow version based on the version id.

### User Access Permission

You must be assigned the **Workflow Manage Access** permission to run this operation.

Security**bearerAuth**

Request

##### path Parameters

| version_idrequired | integerThe unique id of the workflow version. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

Responses

200

OK

403

Cannot delete the active version of a workflow.

delete/workflows/versions/{version\_id}

Request samples

-   cURL

Copy

curl \-i \-X DELETE \\
  'https://rest.test.zuora.com/workflows/versions/{version\_id}' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Track-Id: string'

Response samples

-   200
-   403

application/json

responseresponse

Copy

`{

-   "id": 113,

-   "success": true


}`
