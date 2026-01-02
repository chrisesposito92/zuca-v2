---
title: "PayInvoice"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/payInvoice/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:42:52.010Z"
---

## Pay an invoice

Pays an invoice using an existing payment method.

Security**bearerAuth**

Request

##### path Parameters

| invoice_idrequired | stringIdentifier for the invoices, either invoice_number or invoice_id |
| --- | --- |

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, state, balance, due_date, invoice_number, posted_by_id, state_transitions, description, account_id, total, subtotal, tax, paid, past_due, document_date, amount_paid, amount_refunded, payment_terms, bill_to_id, sold_to_id, billing_document_settings, currencyExample: fields[]=id,created_time |
| --- | --- |
| invoice.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, state, balance, due_date, invoice_number, posted_by_id, state_transitions, description, account_id, total, subtotal, tax, paid, past_due, document_date, amount_paid, amount_refunded, payment_terms, bill_to_id, sold_to_id, billing_document_settings, currencyExample: invoice.fields[]=id,created_time |
| invoice_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, booking_reference, applied_to_item_id, price_id, discount_item, deferred_revenue_account, description, invoice_id, sku, name, purchase_order_number, quantity, recognized_revenue_account, remaining_balance, revenue_recognition_rule_name, accounting_code, service_end, service_start, accounts_receivable_account, subscription_id, subscription_item_id, tax, tax_code, tax_inclusive, unit_amount, unit_of_measure, document_item_dateExample: invoice_items.fields[]=id,created_time |
| taxation_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, amount_exempt, tax_date, jurisdiction, location_code, name, sales_tax_payable_account, tax_code, tax_code_name, tax_rate, tax_rate_name, tax_inclusive, tax_rate_type, amount_credited, amount_paid, remaining_balanceExample: taxation_items.fields[]=id,created_time |
| account.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, auto_pay, account_number, bill_to_id, sold_to_id, billing_document_settings, communication_profile_id, crm_id, sales_rep, parent_account_id, payment_gateway, payment_terms, remaining_credit_memo_balance, remaining_debit_memo_balance, remaining_invoice_balance, remaining_payment_balance, sequence_set_id, tax_certificate, batch, tax_identifier, bill_cycle_day, description, name, currency, default_payment_method_id, enabledExample: account.fields[]=id,created_time |
| bill_to.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, address, home_phone, first_name, last_name, email, work_email, nickname, other_phone, work_phone, mobile_phone, tax_region, other_phone_type, faxExample: bill_to.fields[]=id,created_time |
| line_item.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, total, subtotal, quantity_fulfilled, quantity_pending_fulfillment, unit_of_measure, accounting_code, adjustment_liability_account, unit_amount, target_date, billing_rule, contract_asset_account, contract_liability_account, description, discount_total, revenue, discount_unit_amount, discount_percent, category, name, item_number, type, list_price, list_unit_price, original_order_date, original_order_id, original_order_line_item_id, original_order_line_item_number, original_order_number, product_code, price_id, purchase_order_number, quantity, quantity_available_for_return, related_subscription_number, requires_fulfillment, sold_to_id, original_sold_to_id, tax_code, tax_inclusive, end_date, start_date, unbilled_receivables_account, state, order_idExample: line_item.fields[]=id,created_time |
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

| amount | numberThe amount of the payment. |
| --- | --- |
| account_id | stringIdentifier of the account that owns the invoice. Either account_id or account_number is required. |
| account_number | stringHuman-readable identifier of the account that owns the invoice. Either account_number or account_id is required. |
| authorization_id | stringIdentifier of the authorization transaction from the payment gateway. |
| description | stringAn arbitrary string attached to the object. Often useful for displaying to users. |
| currencyrequired | string3-letter ISO 4217 currency code. |
| bank_account_account | stringAn active account in your Zuora Chart of Accounts. |
| payment_date | string <date>The date and time when the payment takes effect. |
| payment_method_id | stringIdentifier of the payment method used to create this payment. |
| gateway_id | stringIdentifier of the payment gateway that Zuora will use to authorize this payment. |
| gateway_order_id | stringA merchant-specified natural key value that can be passed to the payment gateway when a payment is created. If not specified, the payment number will be passed in instead. |
| reference_id | stringA second transaction identifier returned by the payment gateway if there is an additional transaction for the refunds. You may use this field to reconcile payments between your payment gateway and Zuora Payments. |
| gateway_options | object |
| statement_descriptor | stringA payment gateway-specific field used by Orbital, Vantiv and Verifi. |
| statement_descriptor_phone | stringA payment gateway-specific field used by Orbital, Vantiv and Verifi. |
| external | booleanIf true, indicates that this payment is not handled by Zuora. |
| custom_fields | object (CustomFields)Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. |

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

post/invoices/{invoice\_id}/pay

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

`{

-   "amount": 22,

-   "currency": "USD",

-   "payment_date": "2023-01-31",

-   "account_id": "2c92c0f96abc17de016abd62bd0c5854",

-   "payment_method_id": "8ad08ccf8292a2d20182a95408ac6530",

-   "gateway_id": "2c92c0f86a8dd422016a941ee0d82c7f"


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

-   "id": "8ad08dc986023f76018608da69e8606a",

-   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "created_time": "2023-01-31T09:22:57-08:00",

-   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "updated_time": "2023-01-31T09:22:57-08:00",

-   "payment_number": "P-00002779",

-   "payment_date": "2023-01-31",

-   "gateway_id": "Test Gateway",

-   "payment_method_id": "8ad08ccf8292a2d20182a95408ac6530",

-   "reference_id": "6168540.740581938",

-   "state": "posted",

-   "account_id": "2c92c0f96abc17de016abd62bd0c5854",

-   "amount": 22,

-   "amount_refunded": 0,

-   "remaining_balance": 0,

-   "currency": "USD",

-   "gateway_response": "This transaction has been approved by Test gateway.",

-   "gateway_response_code": "approve",

-   "gateway_state": "submitted",

-   "custom_fields": {

    -   "field__c": "custom field value"


    },

-   "state_transitions": { },

-   "gateway_state_transitions": {

    -   "submitted_time": "2023-01-31T09:22:57-08:00"


    },

-   "custom_objects": { }


}`
