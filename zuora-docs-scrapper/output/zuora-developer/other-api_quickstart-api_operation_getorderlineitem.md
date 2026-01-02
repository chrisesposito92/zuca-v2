---
title: "GetOrderLineItem"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/getOrderLineItem/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:41:08.506Z"
---

## Retrieve an order line item

Use this operation to retrieve the detailed information about a specific order line item.

Security**bearerAuth**

Request

##### path Parameters

| order_line_item_idrequired | stringIdentifier for the order line item. |
| --- | --- |

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, total, subtotal, quantity_fulfilled, quantity_pending_fulfillment, unit_of_measure, accounting_code, adjustment_liability_account, unit_amount, target_date, billing_rule, contract_asset_account, contract_liability_account, description, discount_total, revenue, discount_unit_amount, discount_percent, category, name, item_number, type, list_price, list_unit_price, original_order_date, original_order_id, original_order_line_item_id, original_order_line_item_number, original_order_number, product_code, price_id, purchase_order_number, quantity, quantity_available_for_return, related_subscription_number, requires_fulfillment, sold_to_id, original_sold_to_id, tax_code, tax_inclusive, end_date, start_date, unbilled_receivables_account, state, order_idExample: fields[]=id,created_time |
| --- | --- |
| line_item.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, total, subtotal, quantity_fulfilled, quantity_pending_fulfillment, unit_of_measure, accounting_code, adjustment_liability_account, unit_amount, target_date, billing_rule, contract_asset_account, contract_liability_account, description, discount_total, revenue, discount_unit_amount, discount_percent, category, name, item_number, type, list_price, list_unit_price, original_order_date, original_order_id, original_order_line_item_id, original_order_line_item_number, original_order_number, product_code, price_id, purchase_order_number, quantity, quantity_available_for_return, related_subscription_number, requires_fulfillment, sold_to_id, original_sold_to_id, tax_code, tax_inclusive, end_date, start_date, unbilled_receivables_account, state, order_idExample: line_item.fields[]=id,created_time |
| invoice_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, booking_reference, applied_to_item_id, price_id, discount_item, deferred_revenue_account, description, invoice_id, sku, name, purchase_order_number, quantity, recognized_revenue_account, remaining_balance, revenue_recognition_rule_name, accounting_code, service_end, service_start, accounts_receivable_account, subscription_id, subscription_item_id, tax, tax_code, tax_inclusive, unit_amount, unit_of_measure, document_item_dateExample: invoice_items.fields[]=id,created_time |
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

get/order\_line\_items/{order\_line\_item\_id}

Request samples

-   cURL
-   Java
-   Node

Copy

curl \--request GET     \--url https://rest.apisandbox.zuora.com/v2/order\_line\_items/8ad09b218736ff1b018749258bf15f73?\='     --header 'Authorization: Bearer 9e548fc38ecd4787aa9810cb8505aacc'     --header 'Content-Type: application/json'

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

-   "id": "8ad09b218736ff1b018749258bf15f73",

-   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "updated_time": "2023-04-03T16:03:39-07:00",

-   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "created_time": "2023-04-03T15:03:30-07:00",

-   "custom_fields": { },

-   "unit_of_measure": "Each",

-   "accounting_code": "",

-   "adjustment_liability_account": "",

-   "adjustment_revenue_account": "",

-   "unit_amount": 1100,

-   "target_date": "2023-02-15",

-   "deferred_revenue_account": "",

-   "description": "",

-   "discount_unit_amount": -100,

-   "name": "A cellphone",

-   "type": "product",

-   "list_unit_price": 1000,

-   "product_code": "aapl_14_pro",

-   "purchase_order_number": "",

-   "quantity": 40,

-   "recognized_revenue_account": "",

-   "related_subscription_number": "",

-   "revenue_recognition_rule_name": "",

-   "sold_to_id": "8ad09b218736ff1b018749258b9a5f70",

-   "tax_code": "",

-   "unbilled_receivables_account": "",

-   "revenue": {

    -   "adjustment_revenue_account": null,

    -   "exclude_item_billing_from_revenue_accounting": false,

    -   "exclude_item_booking_from_revenue_accounting": false


    },

-   "item_number": "1",

-   "category": "sale",

-   "state": "pending",

-   "price_id": "",

-   "quantity_available_for_return": 0,

-   "tax_inclusive": false,

-   "start_date": "2023-02-15",

-   "end_date": "2023-02-15",

-   "order_id": "8ad09b218736ff1b018749258a265f3d",

-   "total": 44000,

-   "subtotal": 44000,

-   "quantity_fulfilled": 0,

-   "quantity_pending_fulfillment": 40,

-   "original_order_date": "2023-02-15",

-   "discount_total": -4000,

-   "list_price": 40000,

-   "original_sold_to_id": "8ad09e208727f63f018734233f6d39c2"


}`
