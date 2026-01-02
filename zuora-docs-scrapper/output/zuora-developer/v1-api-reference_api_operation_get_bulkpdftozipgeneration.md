---
title: "Get BulkPDFToZIPGeneration"
url: "https://developer.zuora.com/v1-api-reference/api/operation/Get_BulkPDFToZIPGeneration/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:59:17.248Z"
---

## Retrieve information of a bulk PDF file generation job

Retrieves information about the job which includes its status, message, and downloadable ZIP file URL link.

Security**bearerAuth**

Request

##### path Parameters

| jobIdrequired | stringThe ID of the job for which information needs to be retrieved. For example, 2c92c8955bd63cc1015bd7c151af02ab |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

get/v1/operations/bulk-pdf/{jobId}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/operations/bulk-pdf/{jobId}' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: string'

Response samples

-   200
-   500
-   4XX

application/json

Copy

Expand allCollapse all

`{

-   "jobId": "2c92c8955bd63cc1015bd7c151af02ab",

-   "jobName": "BulkPDFGenerationJobV1",

-   "status": "Completed",

-   "stepStatus": "PostProcessing",

-   "fileUrls": [

    -   "[https://s3.us-west-2.amazonaws.com/billing-file-repository/bulk-pdf-generation/12345/all-invoices-posted-jan-2024_1.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231222T075849Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259199&X-Amz-Credential=fakeMyKeyId%2F20231222%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=62368dbec1763101fba328cf83ae7d3efd780fa03f443370d2f353757e79fc99](https://s3.us-west-2.amazonaws.com/billing-file-repository/bulk-pdf-generation/12345/all-invoices-posted-jan-2024_1.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231222T075849Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259199&X-Amz-Credential=fakeMyKeyId%2F20231222%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=62368dbec1763101fba328cf83ae7d3efd780fa03f443370d2f353757e79fc99)",

    -   "[https://s3.us-west-2.amazonaws.com/billing-file-repository/bulk-pdf-generation/12345/all-invoices-posted-jan-2024_2.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231222T075849Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259199&X-Amz-Credential=fakeMyKeyId%2F20231222%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=62368dbec1763101fba328cf83ae7d3efd780fa03f443370d2f353757e79fc99](https://s3.us-west-2.amazonaws.com/billing-file-repository/bulk-pdf-generation/12345/all-invoices-posted-jan-2024_2.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231222T075849Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259199&X-Amz-Credential=fakeMyKeyId%2F20231222%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=62368dbec1763101fba328cf83ae7d3efd780fa03f443370d2f353757e79fc99)"


    ],

-   "createdOn": "2024-01-08 12:52:05",

-   "createdBy": "caf630704a6f4100818601625ecffe0b",

-   "success": true


}`
