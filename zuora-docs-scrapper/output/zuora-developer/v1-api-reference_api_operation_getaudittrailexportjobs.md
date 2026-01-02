---
title: "GetAuditTrailExportJobs"
url: "https://developer.zuora.com/v1-api-reference/api/operation/getAuditTrailExportJobs/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:52:33.831Z"
---

## Retrieve the list of export jobs for a meter

Retrieves the list of previously initiated export jobs for a specific meter in Zuora Mediation. The API supports advanced filtering by time range, run status, run type, export type, session IDs, and operator IDs. Use the returned `status` and `fileList` fields to determine whether a job is complete and which files to download. Then use the "Retrieve the presigned URL for an export job" API operation with each `fileKey` in `fileList` to obtain the download URLs.

Security**bearerAuth**

Request

##### path Parameters

| meterIdrequired | integer <int64>ID of the meter. |
| --- | --- |

##### query Parameters

| exportType | stringType of the export. SAMPLE indicates an export of success records, ERROR indicates an export of error records.Enum: "SAMPLE" "ERROR" |
| --- | --- |
| sessionIds | Array of stringsThe session IDs of the meter run. For example, R-000001, R-000002. |
| pageSize | integer <int32> <= 100Default: 30Page size for pagination. |
| page | integer <int32>Default: 1The page number. |

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

Bad Request

500

Internal Server Error

get/meters/{meterId}/auditTrail/export

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/meters/{meterId}/auditTrail/export?exportType=SAMPLE&sessionIds=string&pageSize=30&page=1' \\
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
-   500

application/json

Copy

Expand allCollapse all

`{

-   "success": true,

-   "data": {

    -   "page": 1,

    -   "pageSize": 5,

    -   "jobs": [

        -   {

            -   "requestId": "cd3367fb-019d-4600-863f-07c51b7c9e10",

            -   "meterId": 709,

            -   "query": {

                -   "operatorIds": [ ],

                -   "exportType": "SAMPLE",

                -   "runType": "NORMAL",

                -   "queryToTime": "2025-11-20T23:59:59Z",

                -   "queryFromTime": "2025-11-13T07:02:11Z",

                -   "format": "csv",

                -   "statuses": null,

                -   "sessionIds": [ ]


                },

            -   "status": "FINISHED",

            -   "count": 15001524,

            -   "creationTime": "2025-11-20T16:40:58Z",

            -   "completionTime": "2025-11-20T16:49:01Z",

            -   "fileList": [

                -   "cd3367fb-019d-4600-863f-07c51b7c9e10/audit_trail.csv"


                ]


            }


        ]


    },

-   "previousPage": null,

-   "nextPage": null


}`
