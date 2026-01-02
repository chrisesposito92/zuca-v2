---
title: "PATCH CustomObjectBulkJob"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PATCH_CustomObjectBulkJob/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:16:56.521Z"
---

## Cancel a custom object bulk job

Cancel a custom object bulk job. Note that you can cancel a custom object bulk job only if the job status is `accepted` or `pending`.

Security**bearerAuth**

Request

##### path Parameters

| idrequired | string <uuid>The ID of the custom object bulk job that you want to cancel. |
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

400

Bad request

404

Job not found

patch/objects/jobs/{id}/cancel

Request samples

-   cURL

Copy

curl \-i \-X PATCH \\
  'https://rest.test.zuora.com/objects/jobs/{id}/cancel' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: 2019-08-24'

Response samples

-   200
-   400
-   404

application/json

responseresponse

Copy

`{

-   "CreatedById": "11e64eef-ada8-786d-9658-00259058c29c",

-   "CreatedDate": "2022-12-01T21:24:04.337Z",

-   "Id": "7f19b861-5ec7-479b-935c-fcfbd6477655",

-   "UpdatedById": "0fdfc048-0a9e-433f-ad23-d50e31448b2e",

-   "UpdatedDate": "2022-12-01T21:37:43.212Z",

-   "namespace": "default",

-   "object": "jobtest",

-   "operation": "create",

-   "processingTime": 0,

-   "recordsProcessed": 0,

-   "status": "cancelled"


}`
