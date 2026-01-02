---
title: "CreateCreditMemo"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/createCreditMemo/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:43:18.499Z"
---

## Create a credit memo

Creates a new credit memo.

Security**bearerAuth**

Request

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, credit_memo_number, state_transitions, description, account_id, total, subtotal, tax, document_date, exclude_from_auto_apply_rules, posted_by_id, state, balance, invoice_id, reason_code, amount_refunded, bill_to_id, billing_document_settings, currencyExample: fields[]=id,created_time |
| --- | --- |
| credit_memo.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, credit_memo_number, state_transitions, description, account_id, total, subtotal, tax, document_date, exclude_from_auto_apply_rules, posted_by_id, state, balance, invoice_id, reason_code, amount_refunded, bill_to_id, billing_document_settings, currencyExample: credit_memo.fields[]=id,created_time |
| applied_to.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values id, amount, billing_document_id, billing_document_typeExample: applied_to.fields[]=id,created_time |
| credit_memo_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, applied_to_item_id, price_id, discount_item, deferred_revenue_account, description, credit_memo_id, sku, name, purchase_order_number, quantity, recognized_revenue_account, remaining_balance, revenue_recognition_rule_name, service_end, service_start, accounts_receivable_account, on_account_account, subscription_id, subscription_item_id, tax, tax_code, tax_inclusive, unit_amount, unit_of_measure, subtotal, invoice_item_id, document_item_dateExample: credit_memo_items.fields[]=id,created_time |
| taxation_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, amount_exempt, tax_date, jurisdiction, location_code, name, sales_tax_payable_account, tax_code, tax_code_name, tax_rate, tax_rate_name, tax_inclusive, tax_rate_type, source_tax_item_id, amount_applied, amount_refunded, on_account_accountExample: taxation_items.fields[]=id,created_time |
| account.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, auto_pay, account_number, bill_to_id, sold_to_id, billing_document_settings, communication_profile_id, crm_id, sales_rep, parent_account_id, payment_gateway, payment_terms, remaining_credit_memo_balance, remaining_debit_memo_balance, remaining_invoice_balance, remaining_payment_balance, sequence_set_id, tax_certificate, batch, tax_identifier, bill_cycle_day, description, name, currency, default_payment_method_id, enabledExample: account.fields[]=id,created_time |
| bill_to.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, address, home_phone, first_name, last_name, email, work_email, nickname, other_phone, work_phone, mobile_phone, tax_region, other_phone_type, faxExample: bill_to.fields[]=id,created_time |
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

| account_id | stringIdentifier of the account that owns the credit memo. Either this field or account_number is required when creating credit memos from a price(charge in the v1 API). |
| --- | --- |
| account_number | stringHuman-readable identifier of the account that owns the credit memo. Either this field or account_id is required when creating credit memos from a price(charge in the v1 API). |
| description | stringAn arbitrary string associated with the object. Often useful for displaying to users. |
| document_date | string <date>The date when the credit memo takes effect. |
| reason_code | stringReason for issuing this credit memo |
| invoice_id | stringThe identifier of the invoice billing document from which this credit memo is created. Required when creating credit memos from an invoice. |
| transfer_to_accounting | booleanWhether to transfer to an external accounting system. |
| custom_fields | object (CustomFields)Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. |
| exclude_from_auto_apply_rules | booleanIndicates whether to exclude this credit memo from the rule of automatically applying it to invoices. |
| currency | string3-letter ISO 4217 currency code. This field is available only if you have the Multiple Currencies feature enabled and are creating a credit memo from a charge. |
| items | Array of objects (CreditMemoItemCreateRequest)Information of all credit memo items. |
| apply | booleanWhether to automatically apply the billing document upon posting. |
| post | booleanWhether to automatically post a billing document after it is created. |

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

post/credit\_memos

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

Expand allCollapse all

`{

-   "account_id": "8ad08ccf8437067601843a7af4e75ac8",

-   "description": "new credit memo",

-   "document_date": "2022-11-21",

-   "invoice_id": "8ad0950c8455ccf901846413677a40f9",

-   "reason_code": "Charge Dispute",

-   "items": [

    -   {

        -   "invoice_item_id": "8ad0950c8455ccf901846413679a40fa",

        -   "amount": 100,

        -   "service_start": "2022-11-04",

        -   "service_end": "2023-02-01",

        -   "name": "Music Stream Plus",

        -   "description": "A new credit memo item"


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

-   "id": "8ad0855184d191a70184d4ccc64079c5",

-   "credit_memo_number": "CM00000600",

-   "account_id": "8ad08ccf8437067601843a7af4e75ac8",

-   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "created_time": "2022-12-02T13:45:00-08:00",

-   "updated_time": "2022-12-02T13:45:00-08:00",

-   "exclude_from_auto_apply_rules": false,

-   "state_transitions": { },

-   "state": "draft",

-   "invoice_id": "8ad0950c8455ccf901846413677a40f9",

-   "description": "new credit memo",

-   "reason_code": "Charge Dispute",

-   "remaining_balance": 100,

-   "total": 100,

-   "subtotal": 100,

-   "tax": 0,

-   "document_date": "2022-11-21",

-   "amount_refunded": 0


}`
