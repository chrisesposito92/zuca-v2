---
title: "CreateBillRunPreview"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/createBillRunPreview/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:44:25.809Z"
---

## Create a bill run preview

Creates a bill run preview for a batch of customer accounts.

Security**bearerAuth**

Request

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values created_by_id, updated_by_id, created_time, id, updated_time, assume_renewal, charges_excluded, batches, target_date, state, number_of_accounts, number_of_accounts_succeeded, state_transitions, billing_preview_run_number, file, include_draft_items, include_evergreen_subscriptionsExample: fields[]=id,created_time |
| --- | --- |
| bill_run_preview.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values created_by_id, updated_by_id, created_time, id, updated_time, assume_renewal, charges_excluded, batches, target_date, state, number_of_accounts, number_of_accounts_succeeded, state_transitions, billing_preview_run_number, file, include_draft_items, include_evergreen_subscriptionsExample: bill_run_preview.fields[]=id,created_time |
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

##### Request Body schema: application/json
required

| assume_renewal | stringIndicates whether to generate a preview of future invoice items and credit memo items with the assumption that the subscriptions are renewed. all: The assumption is applied to all the subscriptions. Zuora generates preview invoice item data and credit memo item data from the first day of the customer's next billing period to the target date. auto_renew_only: The assumption is applied to the subscriptions that have auto_renew enabled. Zuora generates preview invoice item data and credit memo item data from the first day of the customer's next billing period to the target date.Enum: "all" "auto_renew_only" "none" |
| --- | --- |
| batches | Array of stringsIdentifiers of the customer account batches to be included in this bill run preview. |
| charges_excluded | Array of stringsCharge type or types to be excluded from this bill run preview.Items Enum: "one_time" "recurring" "usage" |
| include_draft_items | booleanIf true, draft items will be included in this bill run preview. |
| include_evergreen_subscriptions | booleanIf true, evergreen subscriptions will be included in this bill run preview. |
| target_daterequired | string <date>All unbilled items on or before this date are included in this bill run. |

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

post/bill\_run\_previews

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

Expand allCollapse all

`{

-   "include_draft_items": false,

-   "include_evergreen_subscriptions": true,

-   "charges_excluded": [

    -   "one_time",

    -   "usage"


    ],

-   "target_date": "2023-01-01",

-   "batches": [

    -   "Batch3",

    -   "Batch4"


    ],

-   "assume_renewal": "auto_renew_only"


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

Expand allCollapse all

`{

-   "id": "8ad0934e8727f642018729728eae1b2a",

-   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "updated_time": "2023-03-28 11:19:57",

-   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "created_time": "2023-03-28 11:19:46",

-   "assume_renewal": "auto_renew_only",

-   "batches": [

    -   "Batch3",

    -   "Batch4"


    ],

-   "charges_excluded": [

    -   "one_time",

    -   "usage"


    ],

-   "include_draft_items": false,

-   "include_evergreen_subscriptions": true,

-   "target_date": "2023-01-01",

-   "state_transitions": {

    -   "complete_time": "2023-03-28 11:19:57",

    -   "processing_start_time": "2023-03-28 11:19:47"


    },

-   "file": {

    -   "url": "8ad0962d8727efba01872972b9f235a5"


    },

-   "billing_preview_run_number": "BPR-00000039",

-   "state": "completed",

-   "number_of_accounts_succeeded": 1,

-   "number_of_accounts": 1


}`
