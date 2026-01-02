---
title: "GetBillingDocument"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/getBillingDocument/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:46:58.528Z"
---

## Retrieve a billing document

Retrieves the billing document with the given ID.

Security**bearerAuth**

Request

##### path Parameters

| billing_document_idrequired | stringIdentifier for the billingDocument, either billing_document_number or billing_document_id |
| --- | --- |

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, balance, description, state, taxExample: fields[]=id,created_time |
| --- | --- |
| billing_document.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, balance, description, state, taxExample: billing_document.fields[]=id,created_time |
| billing_document_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, price_id, discount_item, deferred_revenue_account, description, name, quantity, recognized_revenue_account, service_end, service_start, accounts_receivable_account, subscription_id, subscription_item_id, tax, tax_inclusive, unit_amountExample: billing_document_items.fields[]=id,created_time |
| taxation_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, amount_exempt, tax_date, jurisdiction, location_code, name, sales_tax_payable_account, tax_code, tax_code_name, tax_rate, tax_rate_name, tax_inclusive, tax_rate_typeExample: taxation_items.fields[]=id,created_time |
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

get/billing\_documents/{billing\_document\_id}

Request samples

-   cURL
-   Java
-   Node

Copy

curl \-X GET "https://rest.sandbox.na.zuora.com/v2/billing\_documents/8ad0855180f9da510180fbf80db40c79"
    \-H "Authorization: Bearer 6d151216ef504f65b8ff6e9e9e8356d3"
    \-H "Content-Type: application/json"

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

-   "id": "8ad093f27f54fa8d017f6b191ff02543",

-   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "updated_time": "2022-09-07T14:16:31-07:00",

-   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "created_time": "2022-03-08T11:54:43-08:00",

-   "custom_fields": {

    -   "field__c": "custom field value"


    },

-   "account_id": "2c92c0f96abc17de016abd62bd0c5854",

-   "description": "comments",

-   "due_date": "2020-02-01",

-   "document_date": "2020-02-01",

-   "type": "invoice",

-   "billing_document_number": "INV00006606",

-   "amount_refunded": 0,

-   "state_transitions": {

    -   "posted_at": "2022-03-08T11:54:43-08:00"


    },

-   "posted_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "state": "open",

-   "total": 300,

-   "subtotal": 300,

-   "tax": 0,

-   "remaining_balance": 225,

-   "amount_paid": 75,

-   "paid": false,

-   "past_due": true


}`
