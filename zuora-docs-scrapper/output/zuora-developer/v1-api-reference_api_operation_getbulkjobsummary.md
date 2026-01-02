---
title: "GetBulkJobSummary"
url: "https://developer.zuora.com/v1-api-reference/api/operation/getBulkJobSummary/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:20:23.976Z"
---

## Retrieve the summary of a bulk job

Get the summary of a specific job by its ID. This operation returns a summary of the specified bulk job.

Security**bearerAuth**

Request

##### path Parameters

| idrequired | string <uuid> = 64 charactersThe unique identifier of the job whose summary is being queried. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

Responses

200

Job summary retrieved successfully

404

Job not found

500

Internal server error

get/bulk-data/bulk-jobs/{id}/summary

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/bulk-data/bulk-jobs/{id}/summary' \\
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

`{

-   "id": "3a3e85c4-96e7-486b-ae02-827120104301",

-   "name": "Sample Bulk Job",

-   "description": "Job processing sample data",

-   "createdAt": 1614081280,

-   "createdBy": "admin",

-   "status": "In Progress",

-   "rowCount": 1000,

-   "rowsSucceeded": 800,

-   "rowsFailed": 200,

-   "lastUpdatedAt": 1614082580,

-   "failureReason": "Processing error",

-   "objectType": "account",

-   "jobType": "Import",

-   "isCustomObject": false,

-   "customObjectNamespace": "default",

-   "dataSourceType": "UserUpload",

-   "systemType": "BILLING",

-   "fileType": "csv"


}`
