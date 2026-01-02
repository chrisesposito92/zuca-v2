---
title: "ApplyCreditMemo"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/applyCreditMemo/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:43:18.469Z"
---

## Apply a credit memo

Apply a credit memo to one or more other billing documents.

Security**bearerAuth**

Request

##### path Parameters

| credit_memo_idrequired | stringIdentifier for the credit memo, either credit_memo_number or credit_memo_id |
| --- | --- |

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

| effective_date | string <date>The date when the credit memo is applied |
| --- | --- |
| billing_documentsrequired | Array of objects (CreditMemoApplicationRequest)Array of billing documents to apply this credit memo to. |

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

post/credit\_memos/{credit\_memo\_id}/apply

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

Expand allCollapse all

`{

-   "effective_date": "2022-12-15",

-   "billing_documents": [

    -   {

        -   "type": "invoice",

        -   "id": "8ad09e2085cf16230185cfc951f743fc",

        -   "amount": 2,

        -   "items": [

            -   {

                -   "credit_memo_item_id": "8ad0934e85d31edf0185e0120a122ae8",

                -   "amount": 2,

                -   "id": "8ad09e2085cf16230185cfc9521f43fd"


                }


            ]


        }


    ]


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

-   "id": "8ad0934e85d31edf0185e0120a052ae5",

-   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "updated_time": "2023-01-24T07:06:32-08:00",

-   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "created_time": "2023-01-23T11:19:16-08:00",

-   "account_id": "2c92c0f96abc17de016abd62bd0c5854",

-   "description": "test debit memo from invoice",

-   "document_date": "2022-08-26",

-   "reason_code": "Ad hoc credit",

-   "invoice_id": "8ad09e2085cf16230185cfc951f743fc",

-   "exclude_from_auto_apply_rules": false,

-   "credit_memo_number": "CM00000675",

-   "amount_refunded": 0,

-   "state_transitions": {

    -   "posted_at": "2023-01-23T11:19:16-08:00"


    },

-   "posted_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "state": "draft",

-   "total": 9,

-   "subtotal": 9,

-   "tax": 0,

-   "remaining_balance": 5


}`
