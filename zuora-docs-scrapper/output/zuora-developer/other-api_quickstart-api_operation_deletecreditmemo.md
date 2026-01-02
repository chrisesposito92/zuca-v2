---
title: "DeleteCreditMemo"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/deleteCreditMemo/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:43:18.576Z"
---

## Delete a credit memo

Permanently deletes a credit memo. This operation cannot be undone once it is performed.

Security**bearerAuth**

Request

##### path Parameters

| credit_memo_idrequired | stringIdentifier for the credit memo, either credit_memo_number or credit_memo_id |
| --- | --- |

##### header Parameters

| zuora-track-id | stringA custom identifier for tracking API requests. If you set a value for this header, Zuora returns the same value in the response header. This header enables you to track your API calls to assist with troubleshooting in the event of an issue. The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), or quote ('). |
| --- | --- |
| async | booleanDefault: falseMaking asynchronous requests allows you to scale your applications more efficiently by leveraging Zuora's infrastructure to enqueue and execute requests for you without blocking. These requests also use built-in retry semantics, which makes them much less likely to fail for non-deterministic reasons, even in extreme high-throughput scenarios. Meanwhile, when you send a request to one of these endpoints, you can expect to receive a response in less than 150 milliseconds and these calls are unlikely to trigger rate limit errors. If set to true, Zuora returns a 202 Accepted response, and the response body contains only a request ID. |
| zuora-entity-ids | stringAn entity ID. If you have Multi-entity enabled and the authorization token is valid for more than one entity, you must use this header to specify which entity to perform the operation on. If the authorization token is only valid for a single entity or you do not have Multi-entity enabled, you do not need to set this header. |
| idempotency-key | stringSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types. This idempotency key should be a unique value, and the Zuora server identifies subsequent retries of the same request using this value. For more information, see Idempotent Requests. |
| accept-encoding | stringInclude a accept-encoding: gzip header to compress responses, which can reduce the bandwidth required for a response. If specified, Zuora automatically compresses responses that contain over 1000 bytes. For more information about this header, see Request and Response Compression. |
| content-encoding | stringInclude a content-encoding: gzip header to compress a request. Upload a gzipped file for the payload if you specify this header. For more information, see Request and Response Compression. |

Responses

204

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

delete/credit\_memos/{credit\_memo\_id}

Request samples

-   cURL
-   Java
-   Node

Copy

curl \--request DELETE      \--url 'https://rest.apisandbox.zuora.com/v2/credit\_memos/2c92c0f86a8dd422016a9e7a70116b0d'      \--header 'Authorization: Bearer dcf5d050c6e7493688859d04da581938'      \--header 'Content-Type: application/json'

Response samples

-   400
-   401
-   404
-   405
-   429
-   500
-   502
-   503
-   504

4 more5005025035044 more

application/json

Copy

Expand allCollapse all

`{

-   "type": "string",

-   "errors": [

    -   {

        -   "code": "string",

        -   "parameter": "string",

        -   "message": "string"


        }


    ],

-   "retryable": true


}`
