---
title: "GetCustomObject"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/getCustomObject/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:46:38.607Z"
---

## Retrieve a custom object

Retrieves the custom object with the given ID.

Security**bearerAuth**

Request

##### path Parameters

| custom_object_typerequired | stringCustom Object Definition Type |
| --- | --- |
| custom_object_idrequired | stringCustom Object Id |

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response. Accepted field values will be those available in your tenant. |
| --- | --- |
| custom_object[custom_object_type].fields[] | Array of stringsAllows you to specify which fields are returned in the response. Accepted field values and custom_object_types will be those available in your tenant. |
| custom_object.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values    </details> Example: custom_object.fields[]=id,created_time |
| filter[] | Array of stringsA case-sensitive filter on the list. See the 'Filter lists' section of the Quickstart API Tutorial for detailed instructions. |
| page_size | integer [ 1 .. 99 ]Default: 30The maximum number of results to return in a single page. If the specified page_size is less than 1 or greater than 99, Zuora will return a 400 error. |
| expand[] | Array of stringsAllows you to expand responses by including related object information in a single call. See the Expand responses section of the Quickstart API Tutorials for detailed instructions. |

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

get/custom\_objects/{custom\_object\_type}/{custom\_object\_id}

Request samples

-   cURL

Copy

curl \--request GET      \--url 'https://rest.apisandbox.zuora.com/v2/custom\_objects/car/07a0903d-dd59-480e-a6ae-37fb4486f002'      \--header 'Authorization: Bearer b33c3733c75c486298f520483bdcdcc0'      \--header 'Content-Type: application/json'

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

`{

-   "id": "8ad08ccf8437067601843a7af4e64rq3",

-   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "updated_time": "2021-08-04T03:49:06.051Z",

-   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "created_time": "2021-08-04T03:49:06.051Z",

-   "name__c": "X4",

-   "brand__c": "BMW",

-   "engine__c": "Turbo-4SL"


}`
