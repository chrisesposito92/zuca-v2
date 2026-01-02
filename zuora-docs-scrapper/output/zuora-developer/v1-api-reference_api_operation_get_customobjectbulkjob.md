---
title: "GET CustomObjectBulkJob"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_CustomObjectBulkJob/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:16:56.759Z"
---

## Retrieve a custom object bulk job

Retrieves the custom object bulk job details by job ID.

Only the users that have the "View Custom Objects" permission can retrieve custom object bulk jobs. See [Platform Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles#Platform_Permissions) for more information.

Security**bearerAuth**

Request

##### path Parameters

| idrequired | string <uuid>The ID of the custom object bulk job to be retrieved. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | string <date>API version that determines the response schema. The default version is used if this parameter is not included. Specify Zuora-Version in the request header if you expect a specific response schema. |

Responses

200

OK

404

Bulk job not found

get/objects/jobs/{id}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/objects/jobs/{id}' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: 2019-08-24'

Response samples

-   200
-   404

application/json

Copy

Expand allCollapse all

`{

-   "CreatedById": "7b39d73f-22e6-404a-b8e7-894f7620e91c",

-   "CreatedDate": "2021-03-15T06:47:18Z",

-   "Id": "ed4b9701-bafb-4976-8019-b08269430153",

-   "UpdatedById": "7b39d73f-22e6-404a-b8e7-894f7620e91c",

-   "UpdatedDate": "2021-03-15T06:47:18Z",

-   "error": {

    -   "code": 71012560,

    -   "message": "Service limit reached, please retry later."


    },

-   "namespace": "default",

-   "object": "passenger",

-   "operation": "delete",

-   "processingTime": 1882,

-   "recordsProcessed": 500,

-   "status": "failed"


}`
