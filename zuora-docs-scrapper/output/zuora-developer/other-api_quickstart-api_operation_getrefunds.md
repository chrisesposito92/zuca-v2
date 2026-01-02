---
title: "GetRefunds"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/getRefunds/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:46:15.162Z"
---

## List refunds

Returns a dictionary with a data property that contains an array of refunds, starting after cursor. Each entry in the array is a separate object. If no more are available, the resulting array will be empty. This request should never return an error.

Security**bearerAuth**

Request

##### query Parameters

| cursor | stringA cursor for use in pagination. A cursor defines the starting place in a list. For instance, if you make a list request and receive 100 objects, ending with next_page=W3sib3JkZXJ=, your subsequent call can include cursor=W3sib3JkZXJ= in order to fetch the next page of the list. |
| --- | --- |
| expand[] | Array of stringsAllows you to expand responses by including related object information in a single call. See the Expand responses section of the Quickstart API Tutorials for detailed instructions. |
| filter[] | Array of stringsA case-sensitive filter on the list. See the Filter lists section of the Quickstart API Tutorials for detailed instructions. |
| sort[] | Array of stringsA case-sensitive query parameter that specifies the sort order of the list, which can be either ascending (e.g. account_number.asc) or descending (e.g. account_number.desc). You cannot sort on properties that are arrays. If the array-type properties are specified for the sort[] parameter, they are ignored. |
| page_size | integer [ 1 .. 99 ]Default: 30The maximum number of results to return in a single page. If the specified page_size is less than 1 or greater than 99, Zuora will return a 400 error. |
| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, amount, refund_date, external, gateway_id, gateway_reconciliation_reason, gateway_reconciliation_status, gateway_response, gateway_response_code, gateway_state, comment, payment_method_id, payout_id, reason_code, reference_id, refund_method_type, refund_number, statement_descriptor, statement_descriptor_phone, state, state_transitionsExample: fields[]=id,created_time |
| refund.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, amount, refund_date, external, gateway_id, gateway_reconciliation_reason, gateway_reconciliation_status, gateway_response, gateway_response_code, gateway_state, comment, payment_method_id, payout_id, reason_code, reference_id, refund_method_type, refund_number, statement_descriptor, statement_descriptor_phone, state, state_transitionsExample: refund.fields[]=id,created_time |
| account.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, auto_pay, account_number, bill_to_id, sold_to_id, billing_document_settings, communication_profile_id, crm_id, sales_rep, parent_account_id, payment_gateway, payment_terms, remaining_credit_memo_balance, remaining_debit_memo_balance, remaining_invoice_balance, remaining_payment_balance, sequence_set_id, tax_certificate, batch, tax_identifier, bill_cycle_day, description, name, currency, default_payment_method_id, enabledExample: account.fields[]=id,created_time |
| payment_method.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, type, account_id, bank_identification_number, device_session_id, ip_address, maximum_payment_attempts, payment_retry_interval, state, use_default_retry_rule, existing_mandate, last_failed_sale_transaction_time, last_transaction_time, last_transaction_status, number_of_consecutive_failures, total_number_of_processed_payments, total_number_of_error_payments, billing_details, card, apple_pay, google_pay, ach_debit, cc_ref, paypal_adaptive, paypal_express_native, paypal_express, sepa_debit, betalings_debit, autogiro_debit, bacs_debit, au_becs_debit, nz_becs_debit, pad_debitExample: payment_method.fields[]=id,created_time |
| applied_to.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values id, amount, billing_document_id, billing_document_typeExample: applied_to.fields[]=id,created_time |
| refund_applied_to_item.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values id, amount, credit_memo_item_id, taxation_item_idExample: refund_applied_to_item.fields[]=id,created_time |

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

get/refunds

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

        -   "updated_time": "2022-09-07T13:45:01-07:00",

        -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "created_time": "2022-09-07T13:45:01-07:00",

        -   "custom_fields": {

            -   "field__c": "custom field value"


            },

        -   "account_id": "2c92c0f96abc17de016abd62bd0c5854",

        -   "amount": 10,

        -   "refund_date": "2022-09-07",

        -   "payment_method_id": "8f64d4d73a20057bce2d3aedf9212bd1",

        -   "reason_code": "Standard Refund",

        -   "external": true,

        -   "gateway_state": "not_submitted",

        -   "refund_number": "R-0000110801234",

        -   "state_transitions": { },

        -   "state": "processed"


        },

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "updated_time": "2022-09-07T13:45:01-07:00",

        -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "created_time": "2022-09-07T13:45:01-07:00",

        -   "custom_fields": {

            -   "field__c": "custom field value"


            },

        -   "account_id": "2c92c0f96abc17de016abd62bd0c5854",

        -   "amount": 10,

        -   "refund_date": "2022-09-07",

        -   "payment_method_id": "8f64d4d73a20057bce2d3aedf9212bd1",

        -   "reason_code": "Standard Refund",

        -   "external": true,

        -   "gateway_state": "not_submitted",

        -   "refund_number": "R-0000110801234",

        -   "state_transitions": { },

        -   "state": "processed"


        },

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "updated_time": "2022-09-07T13:45:01-07:00",

        -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "created_time": "2022-09-07T13:45:01-07:00",

        -   "custom_fields": {

            -   "field__c": "custom field value"


            },

        -   "account_id": "2c92c0f96abc17de016abd62bd0c5854",

        -   "amount": 10,

        -   "refund_date": "2022-09-07",

        -   "payment_method_id": "8f64d4d73a20057bce2d3aedf9212bd1",

        -   "reason_code": "Standard Refund",

        -   "external": true,

        -   "gateway_state": "not_submitted",

        -   "refund_number": "R-0000110801234",

        -   "state_transitions": { },

        -   "state": "processed"


        },

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "updated_time": "2022-09-07T13:45:01-07:00",

        -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "created_time": "2022-09-07T13:45:01-07:00",

        -   "custom_fields": {

            -   "field__c": "custom field value"


            },

        -   "account_id": "2c92c0f96abc17de016abd62bd0c5854",

        -   "amount": 10,

        -   "refund_date": "2022-09-07",

        -   "payment_method_id": "8f64d4d73a20057bce2d3aedf9212bd1",

        -   "reason_code": "Standard Refund",

        -   "external": true,

        -   "gateway_state": "not_submitted",

        -   "refund_number": "R-0000110801234",

        -   "state_transitions": { },

        -   "state": "processed"


        },

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "updated_time": "2022-09-07T13:45:01-07:00",

        -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "created_time": "2022-09-07T13:45:01-07:00",

        -   "custom_fields": {

            -   "field__c": "custom field value"


            },

        -   "account_id": "2c92c0f96abc17de016abd62bd0c5854",

        -   "amount": 10,

        -   "refund_date": "2022-09-07",

        -   "payment_method_id": "8f64d4d73a20057bce2d3aedf9212bd1",

        -   "reason_code": "Standard Refund",

        -   "external": true,

        -   "gateway_state": "not_submitted",

        -   "refund_number": "R-0000110801234",

        -   "state_transitions": { },

        -   "state": "processed"


        }


    ]


}`
