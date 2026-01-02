---
title: "GetPayment"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/getPayment/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:45:09.481Z"
---

## Retrieve a payment

Retrieves the payment with the given ID.

Security**bearerAuth**

Request

##### path Parameters

| payment_idrequired | stringIdentifier for the payment, either payment_number or payment_id |
| --- | --- |

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, payment_number, payment_date, gateway_id, payment_method_id, payout_id, reference_id, second_reference_id, statement_descriptor_phone, state, statement_descriptor, account_id, amount, amount_applied, amount_refunded, remaining_balance, currency, description, authorization_id, external, gateway_order_id, gateway_reconciliation_status, gateway_reconciliation_reason, gateway_response, gateway_response_code, gateway_state, state_transitions, gateway_state_transitionsExample: fields[]=id,created_time |
| --- | --- |
| payment.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, payment_number, payment_date, gateway_id, payment_method_id, payout_id, reference_id, second_reference_id, statement_descriptor_phone, state, statement_descriptor, account_id, amount, amount_applied, amount_refunded, remaining_balance, currency, description, authorization_id, external, gateway_order_id, gateway_reconciliation_status, gateway_reconciliation_reason, gateway_response, gateway_response_code, gateway_state, state_transitions, gateway_state_transitionsExample: payment.fields[]=id,created_time |
| account.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, auto_pay, account_number, bill_to_id, sold_to_id, billing_document_settings, communication_profile_id, crm_id, sales_rep, parent_account_id, payment_gateway, payment_terms, remaining_credit_memo_balance, remaining_debit_memo_balance, remaining_invoice_balance, remaining_payment_balance, sequence_set_id, tax_certificate, batch, tax_identifier, bill_cycle_day, description, name, currency, default_payment_method_id, enabledExample: account.fields[]=id,created_time |
| payment_method.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, type, account_id, bank_identification_number, device_session_id, ip_address, maximum_payment_attempts, payment_retry_interval, state, use_default_retry_rule, existing_mandate, last_failed_sale_transaction_time, last_transaction_time, last_transaction_status, number_of_consecutive_failures, total_number_of_processed_payments, total_number_of_error_payments, billing_details, card, apple_pay, google_pay, ach_debit, cc_ref, paypal_adaptive, paypal_express_native, paypal_express, sepa_debit, betalings_debit, autogiro_debit, bacs_debit, au_becs_debit, nz_becs_debit, pad_debitExample: payment_method.fields[]=id,created_time |
| payment_applied_to.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values amount, billing_document_id, billing_document_type, id, stateExample: payment_applied_to.fields[]=id,created_time |
| payment_applied_to_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values id, amount, billing_document_item_idExample: payment_applied_to_items.fields[]=id,created_time |
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

get/payments/{payment\_id}

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

-   "id": "8ad08ccf8437067601843a7af4e64rq3",

-   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "updated_time": "2022-09-07T23:45:51-07:00",

-   "created_by_id": "8ad095b88282409101828ab626fb2430",

-   "created_time": "2022-08-26T02:07:04-07:00",

-   "custom_fields": {

    -   "field__c": "custom field value"


    },

-   "reference_id": "2867259.919697461",

-   "payment_number": "P-0000270901234",

-   "account_id": "8ad09b7d8292b85d0182a4d6f875225a",

-   "amount": 5555,

-   "payment_date": "2022-08-26",

-   "payment_method_id": "8ad09c4b82b063e20182b4663492151e",

-   "gateway_id": "Test Gateway",

-   "external": false,

-   "currency": "USD",

-   "amount_applied": 0,

-   "remaining_balance": 5542,

-   "amount_refunded": 13,

-   "state": "processed",

-   "gateway_response_code": "approve",

-   "gateway_response": "This transaction has been approved by Test gateway.",

-   "gateway_state": "submitted",

-   "state_transitions": { },

-   "gateway_state_transitions": {

    -   "submitted_time": "2022-08-26T02:07:05-07:00"


    }


}`
