---
title: "PreviewAccount"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/previewAccount/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:40:23.514Z"
---

## Preview an account

Generates a preview of future invoice and credit memo items for a customer account. Previewing a customer account shows you how much a single customer will be invoiced from the most recent invoice to a specific end of term date in the future.
Previewing a customer account only calculates taxes for charges if you use [Zuora Tax](https://knowledgecenter.zuora.com/Billing/Taxes/A_Zuora_Tax) and the price associated with the invoice item is tax inclusive; otherwise, it does not calculate taxes.

Security**bearerAuth**

Request

##### path Parameters

| account_idrequired | stringIdentifier for the account, either account_number or account_id |
| --- | --- |

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

| exclude | stringAny combination of one-time, recurring, and usage.Enum: "one_time" "recurring" "usage" |
| --- | --- |
| include_draft_items | booleanIndicates whether to include items in the draft status. |
| include_evergreen_subscriptions | booleanIndicates whether to include evergreen subscriptions. |
| target_daterequired | string <date>The target date is used to determine which charges to bill. All unbilled charges as of or prior to the target date are included. Zuora automatically keeps track of all charges that need to be billed and that have not been billed prior to the target date. |

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

post/accounts/{account\_id}/preview

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

`{

-   "exclude": "one_time",

-   "include_draft_items": true,

-   "include_evergreen_subscriptions": true,

-   "target_date": "2022-01-01"


}`

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

-   "account_id": "string",

-   "credit_memo_items": [

    -   {

        -   "amount": 0,

        -   "subtotal": 0,

        -   "applied_to_item_id": "string",

        -   "document_item_date": "2022-01-01T07:08:12-07:00",

        -   "document_item_number": "string",

        -   "charge_type": "string",

        -   "description": "string",

        -   "id": "string",

        -   "processing_type": "subscription_item",

        -   "quantity": 0,

        -   "subscription_item_id": "string",

        -   "service_start_date": "string",

        -   "service_end_date": "string",

        -   "sku": "string",

        -   "sku_name": "string",

        -   "subscription_id": "string",

        -   "subscription_number": "string",

        -   "unit_of_measure": "string"


        }


    ],

-   "invoice_items": [

    -   {

        -   "amount": 0,

        -   "applied_to_item_id": "string",

        -   "document_date": "2022-01-01",

        -   "subscription_item_description": "string",

        -   "subscription_item_id": "string",

        -   "subscription_item_name": "string",

        -   "subscription_item_number": "string",

        -   "charge_type": "string",

        -   "id": "string",

        -   "processing_type": "subscription_item",

        -   "product_name": "string",

        -   "quantity": 0,

        -   "service_start_date": "string",

        -   "service_end_date": "string",

        -   "subscription_id": "string",

        -   "subscription_number": "string",

        -   "subscription_name": "string",

        -   "tax": 0,

        -   "unit_of_measure": "string"


        }


    ]


}`
