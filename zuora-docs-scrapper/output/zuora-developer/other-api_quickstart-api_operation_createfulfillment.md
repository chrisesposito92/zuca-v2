---
title: "CreateFulfillment"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/createFulfillment/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:42:04.122Z"
---

## Create a fulfillment

Creates a new fulfillment object.

Security**bearerAuth**

Request

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, state, description, quantity, order_line_item_id, fulfillment_number, revenue, fulfillment_date, tracking_number, carrier, fulfillment_system, location, external_id, type, target_dateExample: fields[]=id,created_time |
| --- | --- |
| fulfillment.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, state, description, quantity, order_line_item_id, fulfillment_number, revenue, fulfillment_date, tracking_number, carrier, fulfillment_system, location, external_id, type, target_dateExample: fulfillment.fields[]=id,created_time |
| fulfillment_item.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, fulfillment_id, description, fulfillment_item_numberExample: fulfillment_item.fields[]=id,created_time |
| credit_memo_item.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, applied_to_item_id, price_id, discount_item, deferred_revenue_account, description, credit_memo_id, sku, name, purchase_order_number, quantity, recognized_revenue_account, remaining_balance, revenue_recognition_rule_name, service_end, service_start, accounts_receivable_account, on_account_account, subscription_id, subscription_item_id, tax, tax_code, tax_inclusive, unit_amount, unit_of_measure, subtotal, invoice_item_id, document_item_dateExample: credit_memo_item.fields[]=id,created_time |
| invoice_item.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, booking_reference, applied_to_item_id, price_id, discount_item, deferred_revenue_account, description, invoice_id, sku, name, purchase_order_number, quantity, recognized_revenue_account, remaining_balance, revenue_recognition_rule_name, accounting_code, service_end, service_start, accounts_receivable_account, subscription_id, subscription_item_id, tax, tax_code, tax_inclusive, unit_amount, unit_of_measure, document_item_dateExample: invoice_item.fields[]=id,created_time |
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

| processing_options | object (FulfillmentProcessingOption) |
| --- | --- |
| order_line_item_idrequired | stringThe unique identifier of the associated order line item. |
| carrier | stringThe name of the shipping carrier for this fulfillment. |
| custom_fields | object (CustomFields)Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. |
| description | stringAn arbitrary string attached to the object. Often useful for displaying to users. |
| revenue | object (Revenue)Accounting configuration if you have Zuora Revenue enabled. |
| external_id | stringAn external identifier for the fulfillment |
| fulfillment_daterequired | string <date>The date of the fulfillment. |
| location | stringThe fulfillment location of the fulfillment. |
| fulfillment_system | stringThe fulfillment system for the fulfillment. |
| type | stringThe type of fulfillment.Enum: "delivery" "return" |
| quantityrequired | numberThe number of units of this item. |
| state | stringThe status of the invoice.Enum: "accepted" "booked" "sent_to_billing" "complete" "canceled" |
| tracking_number | stringThe tracking number of the fulfillment. |
| items | Array of objects (FulfillmentItemCreateRequestForFulfillmentPost)Information of all fulfillment items. |

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

post/fulfillments

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

Expand allCollapse all

`{

-   "order_line_item_id": "8ad085e287142db601872469b9ec0944",

-   "description": "Create a fulfillment",

-   "fulfillment_date": "2022-03-01",

-   "type": "delivery",

-   "quantity": 2,

-   "state": "booked",

-   "external_id": "1201",

-   "tracking_number": "0987",

-   "fulfillment_system": "Provision",

-   "items": [

    -   {

        -   "description": "Create Item",

        -   "fulfillment_number": "F-00000021",

        -   "fulfillment_item_number": "Item 01"


        }


    ]


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


}`
