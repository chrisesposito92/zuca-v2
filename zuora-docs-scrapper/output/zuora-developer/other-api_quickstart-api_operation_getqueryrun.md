---
title: "GetQueryRun"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/getQueryRun/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:46:38.481Z"
---

## Retrieve a query run

Retrieves the query run with the given ID.

Security**bearerAuth**

Request

##### path Parameters

| query_run_idrequired | stringquery_run_id |
| --- | --- |

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values created_by_id, id, sql, remaining_attempts, updated_time, file, number_of_rows, processing_duration, state, column_separatorExample: fields[]=id,created_time |
| --- | --- |
| query_run.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values created_by_id, id, sql, remaining_attempts, updated_time, file, number_of_rows, processing_duration, state, column_separatorExample: query_run.fields[]=id,created_time |
| expand[] | Array of stringsAllows you to expand responses by including related object information in a single call. See the Expand responses section of the Quickstart API Tutorials for detailed instructions. |
| filter[] | Array of stringsA case-sensitive filter on the list. See the Filter lists section of the Quickstart API Tutorial for detailed instructions.Note that the filters on this operation are only applicable to the related objects. For example, when you are calling the "Retrieve a billing document" operation, you can use the filter[] parameter on the related objects such as filter[]=items[account_id].EQ:8ad09e208858b5cf0188595208151c63 |
| page_size | integer [ 1 .. 99 ]The maximum number of results to return in a single page. If the specified page_size is less than 1 or greater than 99, Zuora will return a 400 error. |

##### header Parameters

| zuora-track-id | stringA custom identifier for tracking API requests. If you set a value for this header, Zuora returns the same value in the response header. This header enables you to track your API calls to assist with troubleshooting in the event of an issue. The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), or quote ('). |
| --- | --- |
| async | booleanDefault: falseMaking asynchronous requests allows you to scale your applications more efficiently by leveraging Zuora's infrastructure to enqueue and execute requests for you without blocking. These requests also use built-in retry semantics, which makes them much less likely to fail for non-deterministic reasons, even in extreme high-throughput scenarios. Meanwhile, when you send a request to one of these endpoints, you can expect to receive a response in less than 150 milliseconds and these calls are unlikely to trigger rate limit errors. If set to true, Zuora returns a 202 Accepted response, and the response body contains only a request ID. |
| zuora-entity-ids | stringAn entity ID. If you have Multi-entity enabled and the authorization token is valid for more than one entity, you must use this header to specify which entity to perform the operation on. If the authorization token is only valid for a single entity or you do not have Multi-entity enabled, you do not need to set this header. |
| idempotency-key | stringSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types. This idempotency key should be a unique value, and the Zuora server identifies subsequent retries of the same request using this value. For more information, see Idempotent Requests. |
| accept-encoding | stringInclude a accept-encoding: gzip header to compress responses, which can reduce the bandwidth required for a response. If specified, Zuora automatically compresses responses that contain over 1000 bytes. For more information about this header, see Request and Response Compression. |
| content-encoding | stringInclude a content-encoding: gzip header to compress a request. Upload a gzipped file for the payload if you specify this header. For more information, see Request and Response Compression. |
| zuora-org-ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails.If the header is not set, the operation is performed in scope of the user's accessible orgs. |

Responses

200

Default Response

400

Bad Request

401

Unauthorized

404

Not Found

405

Method Not Allowed

429

Too Many Requests

500

Internal Server Error

502

Bad Gateway

503

Service Unavailable

504

Gateway Timeout

get/query\_runs/{query\_run\_id}

Request samples

-   cURL
-   Java
-   Node

Copy

curl \--request GET      \--url https://rest.apisandbox.zuora.com/v2/query\_runs/8ce80b3b-f2c8-45e2-b495-03703754dbff      \--header 'Authorization: Bearer cbf5f7c69105431289eee98fa13c8b83'      \--header 'Content-Type: application/json'

Response samples

-   200
-   400
-   401
-   404
-   405
-   429
-   500
-   502
-   503
-   504

5 more4295005025035045 more

application/json

Copy

Expand allCollapse all

`{

-   "created_by_id": "47b43d42-f237-4bfa-82b5-5602e2282e3d",

-   "id": "8ce80b3b-f2c8-45e2-b495-03703754dbff",

-   "sql": "SELECT * FROM subscription",

-   "remaining_attempts": 3,

-   "updated_time": "2023-04-12T00:26:42.227Z",

-   "file": {

    -   "id": "8ce80b3b-f2c8-45e2-b495-03703754dbff_1833251171549653.dsv",

    -   "url": "[https://owl-auw2-sbx01-query-result.s3.us-west-2.amazonaws.com/8ce80b3b-f2c8-45e2-b495-03703754dbff_1833251171549653.dsv?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa0aBFH4e%2FOtmrY8sNsiXxnPLClpwjzipqMFdoQ1Pa8QIhAKo4NtaMa8rxoHHh5O31b%2BvuWlxkgaibQfLl1nF8sKnaKvwDCLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBBoMMDQ5NzUxNzE2Nzc0Igx%2FKDjiqJmh1eRP%2FOYq0APDiPAxPWUIAZXyCa76ja6HSqH9QWVPnH%2BVcUEdww8f45l1x8naqU%2FagnKkZct8Bts30Axmeo4iinKLVnFfIfCvjJn1dXg%2FL2gRE2lg7%2BAe3HTFwcRhQivCAKqBhKrQb%2F19Ut%2BgF7vaeS9TtBq3YuItoNUnZkIcJq2UIZYSpvtf4HYuJk6txis5DFH9yzLaPPpcrJ71qF6A%2BHWyAuV%2BVwWgjLXAk1aD9teFf%2F13VvqhdU1ILkTxD8P57cEAa0Iui%2BJJIO9e5O0lk%2BzeZ1eQ3Lbe6PGOeRQcGW6Qkc8cIsXhQb04GPixqaYH1luZQ0QB0AMVH1NCh47w4uhCul8ECgFn33iwY97VHjFl%2FU4lJbTtpnR5YHkuCFps4COSs7VP%2B8y1SSpu1mfsl4OXIH9OT5Abs45sf2CkWsaCmRmfigL25XTWy7x3rsFic9lYnOVKnEj3mN99GzgM2Ms2GsV1lxV9gk8M3V1I6OBCl8o6PVQTDEsr4ZJ3Rs%2FyJg7q0pEPWXLDao4VwA3lQzvQCmvjMHJDXcFgiGkWQm%2B0WzU2cs1BM7JLs5RKUpRGLWBz%2FFvzdA1%2F0rxbE3rdBQklJwKGM6PWE0PUoh7AySU8BZLutYLOUTCrytehBjqkAd9UvURTKb8SFyWeSDwJ1uTEbW3KOBHgbmzbVyihyFJMphgHd3LBwAZoIW%2BR8o4C0BhJgdpaitRHf7GJt2cslLcrxFNNCXcdbX5PlVuphk1hybjrExpmuzjxtbQSbjHS53XwNgRnMPV3zb4macrAECWTqC5il5JlqCYRtaKxSufUZbqZecI%2BO1doJIYrUi7ItCex8WuLCy%2B7Bsm904c2CwJSMTBW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230412T002642Z&X-Amz-SignedHeaders=host&X-Amz-Expires=14400&X-Amz-Credential=ASIAQXFLO6OTGM4JW52F%2F20230412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=1137ea00b89ec0f53423f7fba44ffbbe7e1051ac9dcfd0d169d3a42b6900ecd5](https://owl-auw2-sbx01-query-result.s3.us-west-2.amazonaws.com/8ce80b3b-f2c8-45e2-b495-03703754dbff_1833251171549653.dsv?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa0aBFH4e%2FOtmrY8sNsiXxnPLClpwjzipqMFdoQ1Pa8QIhAKo4NtaMa8rxoHHh5O31b%2BvuWlxkgaibQfLl1nF8sKnaKvwDCLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBBoMMDQ5NzUxNzE2Nzc0Igx%2FKDjiqJmh1eRP%2FOYq0APDiPAxPWUIAZXyCa76ja6HSqH9QWVPnH%2BVcUEdww8f45l1x8naqU%2FagnKkZct8Bts30Axmeo4iinKLVnFfIfCvjJn1dXg%2FL2gRE2lg7%2BAe3HTFwcRhQivCAKqBhKrQb%2F19Ut%2BgF7vaeS9TtBq3YuItoNUnZkIcJq2UIZYSpvtf4HYuJk6txis5DFH9yzLaPPpcrJ71qF6A%2BHWyAuV%2BVwWgjLXAk1aD9teFf%2F13VvqhdU1ILkTxD8P57cEAa0Iui%2BJJIO9e5O0lk%2BzeZ1eQ3Lbe6PGOeRQcGW6Qkc8cIsXhQb04GPixqaYH1luZQ0QB0AMVH1NCh47w4uhCul8ECgFn33iwY97VHjFl%2FU4lJbTtpnR5YHkuCFps4COSs7VP%2B8y1SSpu1mfsl4OXIH9OT5Abs45sf2CkWsaCmRmfigL25XTWy7x3rsFic9lYnOVKnEj3mN99GzgM2Ms2GsV1lxV9gk8M3V1I6OBCl8o6PVQTDEsr4ZJ3Rs%2FyJg7q0pEPWXLDao4VwA3lQzvQCmvjMHJDXcFgiGkWQm%2B0WzU2cs1BM7JLs5RKUpRGLWBz%2FFvzdA1%2F0rxbE3rdBQklJwKGM6PWE0PUoh7AySU8BZLutYLOUTCrytehBjqkAd9UvURTKb8SFyWeSDwJ1uTEbW3KOBHgbmzbVyihyFJMphgHd3LBwAZoIW%2BR8o4C0BhJgdpaitRHf7GJt2cslLcrxFNNCXcdbX5PlVuphk1hybjrExpmuzjxtbQSbjHS53XwNgRnMPV3zb4macrAECWTqC5il5JlqCYRtaKxSufUZbqZecI%2BO1doJIYrUi7ItCex8WuLCy%2B7Bsm904c2CwJSMTBW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230412T002642Z&X-Amz-SignedHeaders=host&X-Amz-Expires=14400&X-Amz-Credential=ASIAQXFLO6OTGM4JW52F%2F20230412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=1137ea00b89ec0f53423f7fba44ffbbe7e1051ac9dcfd0d169d3a42b6900ecd5)",

    -   "content_type": "dsv"


    },

-   "number_of_rows": 4639,

-   "state": "complete",

-   "column_separator": ":"


}`
