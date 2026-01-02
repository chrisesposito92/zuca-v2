---
title: "GetFulfillments"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/getFulfillments/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:42:03.631Z"
---

## List fulfilllments

Returns a dictionary with a data property that contains an array of fulfillments, starting after the cursor, if used. Each entry in the array is a separate fulfillment object. If no more fulfillment are available, the resulting array will be empty. This request should never return an error.

Security**bearerAuth**

Request

##### query Parameters

| cursor | stringA cursor for use in pagination. A cursor defines the starting place in a list. For instance, if you make a list request and receive 100 objects, ending with next_page=W3sib3JkZXJ=, your subsequent call can include cursor=W3sib3JkZXJ= in order to fetch the next page of the list. |
| --- | --- |
| expand[] | Array of stringsAllows you to expand responses by including related object information in a single call. See the Expand responses section of the Quickstart API Tutorials for detailed instructions. |
| filter[] | Array of stringsA case-sensitive filter on the list. See the Filter lists section of the Quickstart API Tutorials for detailed instructions. |
| sort[] | Array of stringsA case-sensitive query parameter that specifies the sort order of the list, which can be either ascending (e.g. account_number.asc) or descending (e.g. account_number.desc). You cannot sort on properties that are arrays. If the array-type properties are specified for the sort[] parameter, they are ignored. |
| page_size | integer [ 1 .. 99 ]Default: 30The maximum number of results to return in a single page. If the specified page_size is less than 1 or greater than 99, Zuora will return a 400 error. |
| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, state, description, quantity, order_line_item_id, fulfillment_number, revenue, fulfillment_date, tracking_number, carrier, fulfillment_system, location, external_id, type, target_dateExample: fields[]=id,created_time |
| fulfillment.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, state, description, quantity, order_line_item_id, fulfillment_number, revenue, fulfillment_date, tracking_number, carrier, fulfillment_system, location, external_id, type, target_dateExample: fulfillment.fields[]=id,created_time |
| fulfillment_item.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, fulfillment_id, description, fulfillment_item_numberExample: fulfillment_item.fields[]=id,created_time |
| credit_memo_item.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, applied_to_item_id, price_id, discount_item, deferred_revenue_account, description, credit_memo_id, sku, name, purchase_order_number, quantity, recognized_revenue_account, remaining_balance, revenue_recognition_rule_name, service_end, service_start, accounts_receivable_account, on_account_account, subscription_id, subscription_item_id, tax, tax_code, tax_inclusive, unit_amount, unit_of_measure, subtotal, invoice_item_id, document_item_dateExample: credit_memo_item.fields[]=id,created_time |
| invoice_item.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, booking_reference, applied_to_item_id, price_id, discount_item, deferred_revenue_account, description, invoice_id, sku, name, purchase_order_number, quantity, recognized_revenue_account, remaining_balance, revenue_recognition_rule_name, accounting_code, service_end, service_start, accounts_receivable_account, subscription_id, subscription_item_id, tax, tax_code, tax_inclusive, unit_amount, unit_of_measure, document_item_dateExample: invoice_item.fields[]=id,created_time |

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

get/fulfillments

Request samples

-   cURL
-   Java
-   Node

Copy

curl \--request GET     \--url 'https://rest.apisandbox.zuora.com/v2/fulfillments'     \--header 'Authorization: Bearer 08dacd3fe8b648f6861d5eb506d02a86'     \--header 'Content-Type: application/json'


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

-   "next_page": "W3sib3JkZXJCeSI6eyJmaWVsZCI6IlVwZGF0ZWREYXRlIiwib3JkZXIiOiJERVNDIn0sInZhbHVlIjoiMjAyMi0xMi0yMFQxMjoyODo1NC0wODowMCJ9LHsib3JkZXJCeSI6eyJmaWVsZCI6IklkIiwib3JkZXIiOiJERVNDIn0sInZhbHVlIjoiMmM5MmMwZjk2YWJjMTdkZTAxNmFiZDYyYmQwYzU4NTQifV0=",

-   "data": [

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "updated_time": "2023-03-28T09:00:42-07:00",

        -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "created_time": "2023-03-28T09:00:02-07:00",

        -   "custom_fields": {

            -   "field__c": "custom field value"


            },

        -   "order_line_item_id": "8ad085e287142db601872469b9ec0944",

        -   "fulfillment_number": "F-0000002001234",

        -   "fulfillment_date": "2022-03-01",

        -   "quantity": 5,

        -   "state": "booked",

        -   "target_date": "2022-03-31",

        -   "description": "Create a fulfillment",

        -   "tracking_number": "09827",

        -   "fulfillment_system": "Provision",

        -   "external_id": "b12487f0-cd81-11ed-82b6-c9f5c53749cc",

        -   "revenue": {

            -   "exclude_item_billing_from_revenue_accounting": false,

            -   "exclude_item_booking_from_revenue_accounting": false


            },

        -   "location": "Oregon"


        },

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "updated_time": "2023-03-28T09:00:42-07:00",

        -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "created_time": "2023-03-28T09:00:02-07:00",

        -   "custom_fields": {

            -   "field__c": "custom field value"


            },

        -   "order_line_item_id": "8ad085e287142db601872469b9ec0944",

        -   "fulfillment_number": "F-0000002001234",

        -   "fulfillment_date": "2022-03-01",

        -   "quantity": 5,

        -   "state": "booked",

        -   "target_date": "2022-03-31",

        -   "description": "Create a fulfillment",

        -   "tracking_number": "09827",

        -   "fulfillment_system": "Provision",

        -   "external_id": "b12487f0-cd81-11ed-82b6-c9f5c53749cc",

        -   "revenue": {

            -   "exclude_item_billing_from_revenue_accounting": false,

            -   "exclude_item_booking_from_revenue_accounting": false


            },

        -   "location": "Oregon"


        },

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "updated_time": "2023-03-28T09:00:42-07:00",

        -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "created_time": "2023-03-28T09:00:02-07:00",

        -   "custom_fields": {

            -   "field__c": "custom field value"


            },

        -   "order_line_item_id": "8ad085e287142db601872469b9ec0944",

        -   "fulfillment_number": "F-0000002001234",

        -   "fulfillment_date": "2022-03-01",

        -   "quantity": 5,

        -   "state": "booked",

        -   "target_date": "2022-03-31",

        -   "description": "Create a fulfillment",

        -   "tracking_number": "09827",

        -   "fulfillment_system": "Provision",

        -   "external_id": "b12487f0-cd81-11ed-82b6-c9f5c53749cc",

        -   "revenue": {

            -   "exclude_item_billing_from_revenue_accounting": false,

            -   "exclude_item_booking_from_revenue_accounting": false


            },

        -   "location": "Oregon"


        },

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "updated_time": "2023-03-28T09:00:42-07:00",

        -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "created_time": "2023-03-28T09:00:02-07:00",

        -   "custom_fields": {

            -   "field__c": "custom field value"


            },

        -   "order_line_item_id": "8ad085e287142db601872469b9ec0944",

        -   "fulfillment_number": "F-0000002001234",

        -   "fulfillment_date": "2022-03-01",

        -   "quantity": 5,

        -   "state": "booked",

        -   "target_date": "2022-03-31",

        -   "description": "Create a fulfillment",

        -   "tracking_number": "09827",

        -   "fulfillment_system": "Provision",

        -   "external_id": "b12487f0-cd81-11ed-82b6-c9f5c53749cc",

        -   "revenue": {

            -   "exclude_item_billing_from_revenue_accounting": false,

            -   "exclude_item_booking_from_revenue_accounting": false


            },

        -   "location": "Oregon"


        },

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "updated_time": "2023-03-28T09:00:42-07:00",

        -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "created_time": "2023-03-28T09:00:02-07:00",

        -   "custom_fields": {

            -   "field__c": "custom field value"


            },

        -   "order_line_item_id": "8ad085e287142db601872469b9ec0944",

        -   "fulfillment_number": "F-0000002001234",

        -   "fulfillment_date": "2022-03-01",

        -   "quantity": 5,

        -   "state": "booked",

        -   "target_date": "2022-03-31",

        -   "description": "Create a fulfillment",

        -   "tracking_number": "09827",

        -   "fulfillment_system": "Provision",

        -   "external_id": "b12487f0-cd81-11ed-82b6-c9f5c53749cc",

        -   "revenue": {

            -   "exclude_item_billing_from_revenue_accounting": false,

            -   "exclude_item_booking_from_revenue_accounting": false


            },

        -   "location": "Oregon"


        }


    ]


}`
