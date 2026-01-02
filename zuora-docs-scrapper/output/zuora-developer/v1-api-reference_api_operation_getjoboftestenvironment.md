---
title: "GetJobOfTestEnvironment"
url: "https://developer.zuora.com/v1-api-reference/api/operation/getJobOfTestEnvironment/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:26:33.462Z"
---

## Retrieve a job of a test environment

Use this operation to retrieve a specific job associated with a Test Environment by its unique job ID. It handles HTTP GET requests to the /test-environments/{id}/jobs/{jobId} endpoint and returns a JobResponse object if the job is found. If the specified job does not exist, it returns a 404 error.

### User Access Permission

You must be assigned the **Refresh Central Sandbox** permission to run this operation.

Security**bearerAuth**

Request

##### path Parameters

| idrequired | stringTest Environment ID |
| --- | --- |
| jobIdrequired | stringTest Environment Job ID |

##### header Parameters

| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| --- | --- |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |

Responses

200

Successfully retrieved a Test Environment job response

404

The resource you were trying to reach was not found

500

Internal Error

get/test-environments/{id}/jobs/{jobId}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/test-environments/{id}/jobs/{jobId}' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Track-Id: string'

Response samples

-   200

application/json

Copy

`{

-   "createTime": "2019-08-24T14:15:22Z",

-   "createdById": "58f182ab203c447b8b9cd90382da030a",

-   "estimatedCompletionTime": "2019-08-24T14:15:22Z",

-   "id": "11111111-1111-1111-1111-111111111111",

-   "jobEndTime": "2019-08-24T14:15:22Z",

-   "jobStartTime": "2019-08-24T14:15:22Z",

-   "jobType": "REFRESH",

-   "progressPercentage": 0,

-   "scheduledRefreshTime": "2019-08-24T14:15:22Z",

-   "status": "QUEUED",

-   "testEnvironmentId": "11111111-1111-1111-1111-111111111111",

-   "updateTime": "2019-08-24T14:15:22Z",

-   "updatedById": "58f182ab203c447b8b9cd90382da030a"


}`
