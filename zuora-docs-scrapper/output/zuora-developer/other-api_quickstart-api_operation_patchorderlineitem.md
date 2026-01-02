---
title: "PatchOrderLineItem"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/patchOrderLineItem/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:41:08.610Z"
---

## Update an order line item

Use this operation to update the information of a specific order line item.

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

##### Request Body schema: application/json
required

| revenue | object (OrderLineItemRevenue)Accounting configuration if you have Zuora Revenue enabled. |
| --- | --- |
| unit_of_measure | stringA configured unit of measure. |
| accounting_code | stringAn active accounting code in your Zuora chart of accounts. |
| adjustment_liability_account | stringAn active accounting code in your Zuora chart of accounts. |
| unit_amount | numberThe unit amount to be charged. |
| target_date | string <date>All order line items that were unbilled on or before this date are included in future bill runs. |
| billing_rule | anyThe billing rule for the order line item.Enum: "trigger_without_fulfillment" "trigger_on_fulfillment" |
| contract_asset_account | stringAn active accounting code in your Zuora chart of accounts. |
| contract_liability_account | stringAn active accounting code in your Zuora chart of accounts. |
| custom_fields | object (CustomFields)Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. |
| description | stringAn arbitrary string attached to the object. Often useful for displaying to users. |
| discount_unit_amount | numberDiscount amount per unit. |
| discount_percent | numberDiscount percent. |
| category | anyCategory of the order line item.Enum: "sale" "return" |
| name | stringThe name of the order line item. |
| type | anyThe type of the order line item.Enum: "product" "fee" "services" |
| list_unit_price | numberThe list price per unit for the order line item. |
| product_code | stringThe product code for the order line item. |
| purchase_order_number | stringUsed by customers to specify the Purchase Order Number provided by the buyer. |
| quantity | numberThe quantity of the product ordered. |
| related_subscription_number | stringUse this field to relate an order line item to an subscription. |
| sold_to_id | stringThe unique identifier of a contact belonging to the billing account of the order line item. Use this field to assign and existing contact as the sold to contact of an order line item. |
| tax_code | stringThe tax code for the order line item. |
| unbilled_receivables_account | stringAn active accounting code in your Zuora chart of accounts.. |
| state | anyThe state of an order line item. If you want to generate billing documents for order line items, you must set this field to sent_to_billing. For invoice preview, you do not need to set this field.Enum: "pending" "booked" "sent_to_billing" "complete" "canceled" |
| item_number | stringHuman-readable identifier of the order item. It can be user-supplied. |
| start_date | string <date>The date a transaction starts. The default value of this field is the order date. |
| end_date | string <date>The date the order line item transitions to complete. |

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

patch/order\_line\_items/{order\_line\_item\_id}

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

`{

-   "name": "A cellphone",

-   "type": "product",

-   "quantity": 40,

-   "list_unit_price": 1000,

-   "product_code": "aapl_14_pro",

-   "unit_amount": 1100,

-   "unit_of_measure": "Each"


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
