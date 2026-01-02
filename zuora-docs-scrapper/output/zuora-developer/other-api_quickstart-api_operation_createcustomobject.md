---
title: "CreateCustomObject"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/createCustomObject/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:46:37.393Z"
---

## Create a custom object

Creates a new custom object.

Security**bearerAuth**

Request

##### path Parameters

| custom_object_typerequired | stringCustom Object Definition Type |
| --- | --- |

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response. Accepted field values will be those available in your tenant. |
| --- | --- |
| custom_object[custom_object_type].fields[] | Array of stringsAllows you to specify which fields are returned in the response. Accepted field values and custom_object_types will be those available in your tenant. |
| custom_object.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values    </details> Example: custom_object.fields[]=id,created_time |
| filter[] | Array of stringsA case-sensitive filter on the list. See the 'Filter lists' section of the Quickstart API Tutorial for detailed instructions. |
| page_size | integer [ 1 .. 99 ]The maximum number of results to return in a single page. If the specified page_size is less than 1 or greater than 99, Zuora will return a 400 error. |
| expand[] | Array of stringsAllows you to expand responses by including related object information in a single call. See the Expand responses section of the Quickstart API Tutorials for detailed instructions. |

##### header Parameters

| zuora-track-id | stringA custom identifier for tracking API requests. If you set a value for this header, Zuora returns the same value in the response header. This header enables you to track your API calls to assist with troubleshooting in the event of an issue. The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), or quote ('). |
| --- | --- |
| async | booleanDefault: falseMaking asynchronous requests allows you to scale your applications more efficiently by leveraging Zuora's infrastructure to enqueue and execute requests for you without blocking. These requests also use built-in retry semantics, which makes them much less likely to fail for non-deterministic reasons, even in extreme high-throughput scenarios. Meanwhile, when you send a request to one of these endpoints, you can expect to receive a response in less than 150 milliseconds and these calls are unlikely to trigger rate limit errors. If set to true, Zuora returns a 202 Accepted response, and the response body contains only a request ID. |
| zuora-entity-ids | stringAn entity ID. If you have Multi-entity enabled and the authorization token is valid for more than one entity, you must use this header to specify which entity to perform the operation on. If the authorization token is only valid for a single entity or you do not have Multi-entity enabled, you do not need to set this header. |
| idempotency-key | stringSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types. This idempotency key should be a unique value, and the Zuora server identifies subsequent retries of the same request using this value. For more information, see Idempotent Requests. |
| accept-encoding | stringInclude a accept-encoding: gzip header to compress responses, which can reduce the bandwidth required for a response. If specified, Zuora automatically compresses responses that contain over 1000 bytes. For more information about this header, see Request and Response Compression. |
| content-encoding | stringInclude a content-encoding: gzip header to compress a request. Upload a gzipped file for the payload if you specify this header. For more information, see Request and Response Compression. |

##### Request Body schema: application/json
required

| property name*additional property | any |
| --- | --- |

Responses

201

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

post/custom\_objects/{custom\_object\_type}

Request samples

-   Payload

application/json

Copy

`{

-   "name__c": "X4",

-   "brand__c": "BMW",

-   "engine__c": "Turbo-4SL"


}`

Response samples

-   201
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

`{

-   "id": "663726af-ad23-45ff-9aa5-5144ded53280",

-   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "created_time": "2022-09-09T16:56:05.241Z",

-   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "updated_time": "2022-09-09T16:56:05.241Z",

-   "name__c": "X4",

-   "brand__c": "BMW",

-   "engine__c": "Turbo-4SL"


}`
