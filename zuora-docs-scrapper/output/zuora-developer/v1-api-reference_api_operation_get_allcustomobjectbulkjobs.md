---
title: "GET AllCustomObjectBulkJobs"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_AllCustomObjectBulkJobs/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:16:57.138Z"
---

## List all custom object bulk jobs

Lists all custom object bulk jobs submitted by your tenant.

Security**bearerAuth**

Request

##### query Parameters

| pageSize | integer <= 100Default: 25The number of records returned per page in the response. |
| --- | --- |
| cursor | stringThe cursor points to the last job of the previous result set. The cursor job is not included in this query result. The call returns the first page if cursor is not provided and pageSize is valid. |
| status | stringThe status of bulk jobs to be retrieved.Enum: "pending" "accepted" "in_progress" "completed" "failed" "cancelled" |

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

get/objects/jobs

Request samples

-   Curl

Copy

curl \-X GET \-H "Authorization: Bearer e5cb941a9b1f47838b4085b4d5e00415" \-H "Content-Type: application/json" "https://rest.zuora.com/objects/jobs?pageSize=2&cursor=a9e9a58d-0a11-4685-b1ab-99521dbc20a1"

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "count": 2,

-   "cursor": "a9e9a58d-0a11-4685-b1ab-99521dbc20a1",

-   "jobs": [

    -   {

        -   "CreatedById": "2c92c0f96a07409d016a0a58ab1172ec",

        -   "CreatedDate": "2021-03-10T00:05:54.207Z",

        -   "Id": "5112347a-f7a1-4373-99df-c082984de7be",

        -   "UpdatedById": "2c92c0f96a07409d016a0a58ab1172ec",

        -   "UpdatedDate": "2021-03-10T00:08:15.614Z",

        -   "namespace": "default",

        -   "object": "vehicle",

        -   "operation": "create",

        -   "processingTime": 62,

        -   "recordsProcessed": 3,

        -   "status": "completed"


        },

    -   {

        -   "CreatedById": "2c92c0f96a07409d016a0a58ab1172ec",

        -   "CreatedDate": "2021-03-09T22:27:59.503Z",

        -   "Id": "a9e9a58d-0a11-4685-b1ab-99521dbc20a1",

        -   "UpdatedById": "2c92c0f96a07409d016a0a58ab1172ec",

        -   "UpdatedDate": "2021-03-09T22:27:59.503Z",

        -   "namespace": "default",

        -   "object": "vehicle",

        -   "operation": "create",

        -   "processingTime": 0,

        -   "recordsProcessed": 0,

        -   "status": "pending"


        }


    ]


}`
