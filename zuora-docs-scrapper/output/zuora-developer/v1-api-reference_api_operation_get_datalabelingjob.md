---
title: "GET DataLabelingJob"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_DataLabelingJob/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:22:13.746Z"
---

## Retrieve a data labeling job

Retrieves a data labeling job. You can use this operation to track the status of the data labeling job.

Security**bearerAuth**

Request

##### path Parameters

| job-idrequired | string <uuid> = 32 charactersIdentifier of the data labeling job. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

404

Not Found

get/v1/multi-organizations/data-labeling-job/{job-id}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/multi-organizations/data-labeling-job/{job-id}' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: string'

Response samples

-   200
-   404

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "jobId": "ff80808186b966950186b97922e200ab",

-   "jobStatus": "Completed",

-   "objectType": "Account",

-   "progress": {

    -   "failed": 1,

    -   "labeled": 9,

    -   "timeout": 1


    },

-   "success": true,

-   "totalObject": 11


}`
