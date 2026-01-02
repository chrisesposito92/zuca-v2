---
title: "CreateDebitMemo"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/createDebitMemo/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:43:39.434Z"
---

## Create a debit memo

Creates debit memo

Security**bearerAuth**

Request

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, balance, due_date, debit_memo_number, state_transitions, description, account_id, total, subtotal, tax, document_date, posted_by_id, state, reason_code, paid, past_due, billing_document_settings, payment_terms, bill_to_id, invoice_id, currencyExample: fields[]=id,created_time |
| --- | --- |
| debit_memo.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, balance, due_date, debit_memo_number, state_transitions, description, account_id, total, subtotal, tax, document_date, posted_by_id, state, reason_code, paid, past_due, billing_document_settings, payment_terms, bill_to_id, invoice_id, currencyExample: debit_memo.fields[]=id,created_time |
| debit_memo_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, applied_to_item_id, price_id, discount_item, deferred_revenue_account, description, document_item_date, invoice_item_id, sku, name, quantity, recognized_revenue_account, remaining_balance, service_end, service_start, accounts_receivable_account, subscription_id, subscription_item_id, subtotal, tax, tax_code, tax_inclusive, unit_amount, unit_of_measure, debit_memo_idExample: debit_memo_items.fields[]=id,created_time |
| taxation_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, amount_exempt, tax_date, jurisdiction, location_code, name, sales_tax_payable_account, tax_code, tax_code_name, tax_rate, tax_rate_name, tax_inclusive, tax_rate_type, amount_credited, amount_paid, remaining_balanceExample: taxation_items.fields[]=id,created_time |
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

| account_id | stringIdentifier of the account that owns the debit memo. |
| --- | --- |
| account_number | stringHuman-readable identifier of the account that owns the debit memo. |
| description | stringAn arbitrary string associated with the object. Often useful for displaying to users. |
| due_date | string <date>The date on which payment for the debit memo is due. |
| document_date | string <date>The date when the debit memo takes effect. |
| reason_code | stringReason for issuing this debit memo. This field is applicable only if the type field is set to credit_memo or debit_memo. |
| invoice_id | stringThe identifier of the invoice from which this credit memo or debit memo is created. This field is applicable only if the type field is set to credit_memo or debit_memo. |
| transfer_to_accounting | booleanWhether to transfer to an external accounting system. |
| custom_fields | object (CustomFields)Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. |
| exclude_from_auto_apply_rules | booleanIndicates whether to exclude this credit memo from the rule of automatically applying it to invoices. This field is applicable only if the type field is set to credit_memo. |
| pay | booleanIndicates whether this billing document is automatically picked up for processing in the corresponding payment run. |
| currency | string3-letter ISO 4217 currency code |
| items | Array of objects (BillingDocumentItemCreateRequest)Information of all billing document items. |
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

post/debit\_memos

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

Expand allCollapse all

`{

-   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d",

-   "document_date": "2022-08-26",

-   "description": "test debit memo from invoice",

-   "post": true,

-   "invoice_id": "8ad09b7d82d9662c0182daeaa9f4477e",

-   "items": [

    -   {

        -   "amount": 1,

        -   "invoice_item_id": "8ad09b7d82d9662c0182daeaaa114781",

        -   "sku": "SKU-00011672",

        -   "service_start": "2022-07-26",

        -   "taxation_items": [

            -   {

                -   "source_tax_item_id": "8ad09b7d82d9662c0182daeaaa174784",

                -   "name": "taxbf3049ff",

                -   "amount": 0.5,

                -   "tax_code_name": "tax1",

                -   "tax_date": "2022-08-26",

                -   "tax_rate_name": "rate1",

                -   "tax_rate": 0.5,

                -   "tax_inclusive": false,

                -   "tax_rate_type": "amount",

                -   "tax_code": "Maintenance Charges"


                },

            -   {

                -   "name": "tax0896ba54",

                -   "source_tax_item_id": "8ad09b7d82d9662c0182daeaaa174783",

                -   "amount": 1,

                -   "tax_code_name": "tax2",

                -   "tax_date": "2022-08-26",

                -   "tax_rate_name": "rate2",

                -   "tax_rate": 10,

                -   "tax_inclusive": false,

                -   "tax_rate_type": "percent",

                -   "tax_code": "Maintenance Charges"


                }


            ]


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

-   "updated_time": "2023-01-24T07:56:09-08:00",

-   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "created_time": "2022-02-16T12:10:28-08:00",

-   "custom_fields": {

    -   "EmailSentWorkflow__c": "Unprocessed"


    },

-   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d",

-   "description": "comments",

-   "due_date": "2020-03-02",

-   "document_date": "2020-02-01",

-   "reason_code": "Correcting invoice error",

-   "debit_memo_number": "DM00000249",

-   "state_transitions": {

    -   "posted": "2022-08-15T12:37:06-07:00"


    },

-   "posted_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "state": "open",

-   "total": 300,

-   "subtotal": 300,

-   "tax": 0,

-   "balance": 290,

-   "paid": false,

-   "past_due": true


}`
