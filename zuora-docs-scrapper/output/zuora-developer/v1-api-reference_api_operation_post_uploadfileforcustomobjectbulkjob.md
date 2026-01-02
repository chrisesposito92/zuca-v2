---
title: "POST UploadFileForCustomObjectBulkJob"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_UploadFileForCustomObjectBulkJob/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:16:56.970Z"
---

## Upload a file for a custom object bulk job

Uploads a `.csv` file for a custom object bulk job to create or update custom object records. The job must be in `pending` status. Only one file is allowed per job. Each file supports only one type of operation, with an `id` column required for update operations. The job will start once the upload is finished.

Only the users that have the "Edit Custom Objects" permission can upload files to custom object bulk jobs. See [Platform Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles#Platform_Permissions) for more information.

Security**bearerAuth**

Request

##### path Parameters

| idrequired | string <uuid>The ID of the custom object bulk job that the file is uploaded to. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | string <date>API version that determines the response schema. The default version is used if this parameter is not included. Specify Zuora-Version in the request header if you expect a specific response schema. |
| Content-Typerequired | stringThe Content-Type of the request must be text/csv. |

##### Request Body schema: text/csv
required

string

The CSV file to be uploaded. The file must be encoded in UTF-8 and the file size limit is 15 MB.

Responses

200

OK

400

Bad request

403

Unauthorized

404

Job not found

post/objects/jobs/{id}/files

Request samples

-   Curl

Copy

curl \-X POST \-H "Authorization: Bearer e5cb941a9b1f47838b4085b4d5e00415" \-H "Content-Type: text/csv" --data-binary "@CustomObjectRecords.csv" "https://rest.zuora.com/objects/jobs/5112347a-f7a1-4373-99df-c082984de7be/files"

Response samples

-   200
-   400
-   403
-   404

application/json

responseresponse

Copy

`{

-   "CreatedById": "2c92c0f96a07409d016a0a58ab1172ec",

-   "CreatedDate": "2021-03-10T00:05:54.207Z",

-   "Id": "5112347a-f7a1-4373-99df-c082984de7be",

-   "UpdatedById": "2c92c0f96a07409d016a0a58ab1172ec",

-   "UpdatedDate": "2021-03-10T00:08:15.539Z",

-   "namespace": "default",

-   "object": "vehicle",

-   "operation": "create",

-   "processingTime": 0,

-   "recordsProcessed": 0,

-   "status": "in_progress"


}`
