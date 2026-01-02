---
title: "CreateRefund"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/createRefund/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:46:15.281Z"
---

## Create a refund

Creates a new refund object.

Security**bearerAuth**

Request

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, amount, refund_date, external, gateway_id, gateway_reconciliation_reason, gateway_reconciliation_status, gateway_response, gateway_response_code, gateway_state, comment, payment_method_id, payout_id, reason_code, reference_id, refund_method_type, refund_number, statement_descriptor, statement_descriptor_phone, state, state_transitionsExample: fields[]=id,created_time |
| --- | --- |
| refund.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, amount, refund_date, external, gateway_id, gateway_reconciliation_reason, gateway_reconciliation_status, gateway_response, gateway_response_code, gateway_state, comment, payment_method_id, payout_id, reason_code, reference_id, refund_method_type, refund_number, statement_descriptor, statement_descriptor_phone, state, state_transitionsExample: refund.fields[]=id,created_time |
| account.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, auto_pay, account_number, bill_to_id, sold_to_id, billing_document_settings, communication_profile_id, crm_id, sales_rep, parent_account_id, payment_gateway, payment_terms, remaining_credit_memo_balance, remaining_debit_memo_balance, remaining_invoice_balance, remaining_payment_balance, sequence_set_id, tax_certificate, batch, tax_identifier, bill_cycle_day, description, name, currency, default_payment_method_id, enabledExample: account.fields[]=id,created_time |
| payment_method.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, type, account_id, bank_identification_number, device_session_id, ip_address, maximum_payment_attempts, payment_retry_interval, state, use_default_retry_rule, existing_mandate, last_failed_sale_transaction_time, last_transaction_time, last_transaction_status, number_of_consecutive_failures, total_number_of_processed_payments, total_number_of_error_payments, billing_details, card, apple_pay, google_pay, ach_debit, cc_ref, paypal_adaptive, paypal_express_native, paypal_express, sepa_debit, betalings_debit, autogiro_debit, bacs_debit, au_becs_debit, nz_becs_debit, pad_debitExample: payment_method.fields[]=id,created_time |
| applied_to.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values id, amount, billing_document_id, billing_document_typeExample: applied_to.fields[]=id,created_time |
| refund_applied_to_item.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values id, amount, credit_memo_item_id, taxation_item_idExample: refund_applied_to_item.fields[]=id,created_time |
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

| amountrequired | numberRefund amount. |
| --- | --- |
| description | stringAn arbitrary string attached to the object. Often useful for displaying to users. |
| gateway_options | object |
| refund_date | string <date>The date when the refund takes effect. |
| refund_method_type | stringEnum: "cash" "check" "wire_transfer" "pay_pal" "credit_card" "cc_ref" "ach_debit" "debit_card" "other" |
| reason_code | stringUser-provided reason for the refund. |
| statement_descriptor | string <= 35 charactersA payment gateway-specific field used by Orbital, Vantiv and Verifi. |
| statement_descriptor_phone | string <= 20 charactersA payment gateway-specific field used by Orbital, Vantiv and Verifi. |
| external | booleanIf true, indicates that this refund is not handled by Zuora. |
| reference_id | stringTransaction identifier returned by the payment gateway. You may use this field to reconcile refunds between your payment gateway and Zuora Payments. |
| second_reference_id | stringA second transaction identifier returned by the payment gateway if there is an additional transaction for the refunds. You may use this field to reconcile payments between your payment gateway and Zuora Payments. |
| bank_account_account | stringAn active account in your Zuora Chart of Accounts. |
| on_account_account | stringAn active account in your Zuora Chart of Accounts. |
| unapplied_payment_account | stringAn active account in your Zuora Chart of Accounts. |
| custom_fields | object (CustomFields)Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. |
| credit_memo | object (RefundCreditMemoRequest)The related credit memo. |
| billing_documents | Array of objects (BillingDocumentPaymentApplicationRequest)Indicates to which billing documents (invoices or debit memos) is the refund applied. |

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

post/refunds

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

`{

-   "account_id": "2c92c0f96abc17de016abd62bd0c5854",

-   "amount": 5,

-   "refund_date": "2022-09-07",

-   "refund_method_type": "cash",

-   "external": true,

-   "payment_id": "8ad0887e83163bc7018319b1b6573d80",

-   "statement_descriptor": "statement_descriptor",

-   "statement_descriptor_phone": "statement_descriptor"


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

-   "id": "8ad08aef83163bc5018319cfc9e00711",

-   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "updated_time": "2022-09-07T14:16:32-07:00",

-   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "created_time": "2022-09-07T14:16:32-07:00",

-   "custom_fields": {

    -   "field__c": "custom field value"


    },

-   "account_id": "2c92c0f96abc17de016abd62bd0c5854",

-   "amount": 5,

-   "refund_date": "2022-09-07",

-   "payment_method_id": "8f64d4d73a20057bce2d3aedf9212bd1",

-   "reason_code": "Standard Refund",

-   "external": true,

-   "gateway_state": "not_submitted",

-   "refund_number": "R-00001109",

-   "state_transitions": { },

-   "state": "processed"


}`
