---
title: "CreateAuditTrailExportJob"
url: "https://developer.zuora.com/v1-api-reference/api/operation/createAuditTrailExportJob/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:52:31.764Z"
---

## Create a job to export audit trail data for a meter

Creates a background job to export the audit trail entries for a specific meter in Zuora Mediation. This API is for large-scale, offline access to audit data. Only one export job is processed per tenant at a time, and each export has a record limit, for example, up to 5 million rows per report. Use the returned requestId with the "Retrieve the list of export jobs for a meter" API operation to track the job status and retrieve the generated file names from `fileList`, then download them using the "Retrieve the presigned URL for an export job" API operation.

Security**bearerAuth**

Request

##### path Parameters

| meterIdrequired | integer <int64>The ID of the meter. |
| --- | --- |

##### query Parameters

| exportTyperequired | stringType of the export. SAMPLE indicates an export of success records, ERROR indicates an export of error records.Enum: "SAMPLE" "ERROR" |
| --- | --- |
| runTyperequired | stringSpecifies the type of run. DEBUG indicates a test run, NORMAL indicates a live run.Enum: "DEBUG" "NORMAL" |
| sessionIds | Array of stringsA list of specific run IDs to export. For example, R-000001, R-000002. |
| runStatuses | Array of stringsFilters audit entries by their run status. If omitted, all statuses are included. Statuses are case-sensitive. Possible values:NEVER_RUNTESTINGTESTING_FAILEDTESTING_PASSEDRUNNINGPAUSEDCOMPLETEDFAILEDCANCELEDINITIALIZINGUSAGE_PUSHINGPUSH_COMPLETEDCONSUME_COMPLETED |
| operatorIds | Array of stringsA list of operator IDs to filter by. The Operator ID is displayed for each operator node, for both current meters and historic runs. On the Mediation UI, click on a test ID or session ID to see the details of the run. |
| queryFromTimerequired | stringThe minimum timestamp for the data to be exported. The standard used is ISO 8601 with timezones.Example: queryFromTime=2025-07-01T00:00:00+0530 |
| queryToTimerequired | stringThe maximum timestamp for the data to be exported. The standard used is ISO 8601 with timezones.Example: queryToTime=2025-07-01T00:00:00+0530 |
| format | stringDefault: "csv"The required format for the exported data. Only the csv format is supported. |

##### header Parameters

| Content-Typerequired | stringDefault: application/jsonSpecify the content type of the request body. Use application/json. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

Responses

200

OK

400

Bad Request - Invalid or missing parameters.

401

Unauthorized - Authentication failed.

500

Internal Server Error - Unexpected error.

post/meters/{meterId}/auditTrail/export

Request samples

-   cURL

Copy

curl \-i \-X POST \\
  'https://rest.test.zuora.com/meters/{meterId}/auditTrail/export?exportType=SAMPLE&runType=DEBUG&sessionIds=string&runStatuses=string&operatorIds=string&queryFromTime=string&queryToTime=string&format=csv' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Content-Type: application/json' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string'

Response samples

-   200
-   400
-   401
-   500

application/json

Copy

Expand allCollapse all

`{

-   "success": true,

-   "data": {

    -   "requestId": "cd3367fb-019d-4600-863f-07c51b7c9e10"


    },

-   "previousPage": null,

-   "nextPage": null


}`
