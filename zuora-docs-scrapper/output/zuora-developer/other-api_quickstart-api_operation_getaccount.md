---
title: "GetAccount"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/getAccount/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:40:23.810Z"
---

## Retrieve an account

Retrieves the account with the given ID.

Security**bearerAuth**

Request

##### path Parameters

| account_idrequired | stringIdentifier for the account, either account_number or account_id |
| --- | --- |

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, auto_pay, account_number, bill_to_id, sold_to_id, billing_document_settings, communication_profile_id, crm_id, sales_rep, parent_account_id, payment_gateway, payment_terms, remaining_credit_memo_balance, remaining_debit_memo_balance, remaining_invoice_balance, remaining_payment_balance, sequence_set_id, tax_certificate, batch, tax_identifier, bill_cycle_day, description, name, currency, default_payment_method_id, enabledExample: fields[]=id,created_time |
| --- | --- |
| account.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, auto_pay, account_number, bill_to_id, sold_to_id, billing_document_settings, communication_profile_id, crm_id, sales_rep, parent_account_id, payment_gateway, payment_terms, remaining_credit_memo_balance, remaining_debit_memo_balance, remaining_invoice_balance, remaining_payment_balance, sequence_set_id, tax_certificate, batch, tax_identifier, bill_cycle_day, description, name, currency, default_payment_method_id, enabledExample: account.fields[]=id,created_time |
| subscriptions.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, subscription_number, state, account_id, invoice_owner_account_id, auto_renew, version, initial_term, current_term, renewal_term, start_date, end_date, description, contract_effective, service_activation, customer_acceptance, invoice_separately, latest_version, payment_terms, billing_document_settings, bill_to_id, sold_to_id, contracted_mrr, currency, cancel_reason, last_booking_date, order_numberExample: subscriptions.fields[]=id,created_time |
| subscription_plans.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, name, plan_id, subscription_id, product_id, subscription_plan_numberExample: subscription_plans.fields[]=id,created_time |
| subscription_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, start_date, end_date, charge_model, charge_type, tiers, subscription_item_number, name, description, charged_through_date, recurring, price_id, start_event, tax_code, tax_inclusive, unit_of_measure, quantity, price_base_interval, overage, subscription_plan_id, tiers_mode, processed_through_date, active, state, unit_amount, amount, discount_amount, discount_percent, price_change_percentage, price_change_optionExample: subscription_items.fields[]=id,created_time |
| invoice_owner_account.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, auto_pay, account_number, bill_to_id, sold_to_id, billing_document_settings, communication_profile_id, crm_id, sales_rep, parent_account_id, payment_gateway, payment_terms, remaining_credit_memo_balance, remaining_debit_memo_balance, remaining_invoice_balance, remaining_payment_balance, sequence_set_id, tax_certificate, batch, tax_identifier, bill_cycle_day, description, name, currency, default_payment_method_id, enabledExample: invoice_owner_account.fields[]=id,created_time |
| plan.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, start_date, end_date, name, active, description, plan_number, product_id, active_currenciesExample: plan.fields[]=id,created_time |
| payment_methods.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, type, account_id, bank_identification_number, device_session_id, ip_address, maximum_payment_attempts, payment_retry_interval, state, use_default_retry_rule, existing_mandate, last_failed_sale_transaction_time, last_transaction_time, last_transaction_status, number_of_consecutive_failures, total_number_of_processed_payments, total_number_of_error_payments, billing_details, card, apple_pay, google_pay, ach_debit, cc_ref, paypal_adaptive, paypal_express_native, paypal_express, sepa_debit, betalings_debit, autogiro_debit, bacs_debit, au_becs_debit, nz_becs_debit, pad_debitExample: payment_methods.fields[]=id,created_time |
| payments.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, payment_number, payment_date, gateway_id, payment_method_id, payout_id, reference_id, second_reference_id, statement_descriptor_phone, state, statement_descriptor, account_id, amount, amount_applied, amount_refunded, remaining_balance, currency, description, authorization_id, external, gateway_order_id, gateway_reconciliation_status, gateway_reconciliation_reason, gateway_response, gateway_response_code, gateway_state, state_transitions, gateway_state_transitionsExample: payments.fields[]=id,created_time |
| billing_documents.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, balance, description, state, taxExample: billing_documents.fields[]=id,created_time |
| billing_document_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, price_id, discount_item, deferred_revenue_account, description, name, quantity, recognized_revenue_account, service_end, service_start, accounts_receivable_account, subscription_id, subscription_item_id, tax, tax_inclusive, unit_amountExample: billing_document_items.fields[]=id,created_time |
| bill_to.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, address, home_phone, first_name, last_name, email, work_email, nickname, other_phone, work_phone, mobile_phone, tax_region, other_phone_type, faxExample: bill_to.fields[]=id,created_time |
| sold_to.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, address, home_phone, first_name, last_name, email, work_email, nickname, other_phone, work_phone, mobile_phone, tax_region, other_phone_type, faxExample: sold_to.fields[]=id,created_time |
| default_payment_method.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, type, account_id, bank_identification_number, device_session_id, ip_address, maximum_payment_attempts, payment_retry_interval, state, use_default_retry_rule, existing_mandate, last_failed_sale_transaction_time, last_transaction_time, last_transaction_status, number_of_consecutive_failures, total_number_of_processed_payments, total_number_of_error_payments, billing_details, card, apple_pay, google_pay, ach_debit, cc_ref, paypal_adaptive, paypal_express_native, paypal_express, sepa_debit, betalings_debit, autogiro_debit, bacs_debit, au_becs_debit, nz_becs_debit, pad_debitExample: default_payment_method.fields[]=id,created_time |
| usage_records.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, account_number, subscription_item_id, subscription_item_number, subscription_id, subscription_number, unit_of_measure, description, end_time, state, start_time, quantityExample: usage_records.fields[]=id,created_time |
| invoices.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, state, balance, due_date, invoice_number, posted_by_id, state_transitions, description, account_id, total, subtotal, tax, paid, past_due, document_date, amount_paid, amount_refunded, payment_terms, bill_to_id, sold_to_id, billing_document_settings, currencyExample: invoices.fields[]=id,created_time |
| credit_memos.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, credit_memo_number, state_transitions, description, account_id, total, subtotal, tax, document_date, exclude_from_auto_apply_rules, posted_by_id, state, balance, invoice_id, reason_code, amount_refunded, bill_to_id, billing_document_settings, currencyExample: credit_memos.fields[]=id,created_time |
| debit_memos.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, balance, due_date, debit_memo_number, state_transitions, description, account_id, total, subtotal, tax, document_date, posted_by_id, state, reason_code, paid, past_due, billing_document_settings, payment_terms, bill_to_id, invoice_id, currencyExample: debit_memos.fields[]=id,created_time |
| prepaid_balance.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values prepaid_UOM, start_date, end_date, total_balance, remaining_balanceExample: prepaid_balance.fields[]=id,created_time |
| transactions.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values transaction_date, type, quantityExample: transactions.fields[]=id,created_time |
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

get/accounts/{account\_id}

Request samples

-   cURL
-   Java
-   Node

Copy

curl \--request GET      \--url https://rest.apisandbox.zuora.com/v2/accounts/2c92c0f86a8dd422016a9e7a70116b0d      \--header 'Authorization: Bearer dcf5d050c6e7493688859d04da581938'      \--header 'Content-Type: application/json'

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

-   "updated_time": "2022-08-03T13:07:53-07:00",

-   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "created_time": "2022-08-03T13:07:53-07:00",

-   "custom_fields": {

    -   "field__c": "custom field value"


    },

-   "account_number": "RC-0002048901234",

-   "billing_document_settings": {

    -   "email_documents": true,

    -   "print_documents": false,

    -   "invoice_template_id": "8f64d4d754739d85d0346e00ef77e50d",

    -   "additional_email": [

        -   "jane.doe@gmail.com",

        -   " james.lawerence@gmail.com"


        ]


    },

-   "batch": "Batch1",

-   "bill_cycle_day": 0,

-   "name": "Amy Lawrence Account",

-   "payment_terms": "Due Upon Receipt",

-   "auto_pay": false,

-   "currency": "USD",

-   "enabled": true,

-   "remaining_debit_memo_balance": 0,

-   "remaining_invoice_balance": 0,

-   "remaining_credit_memo_balance": 0,

-   "remaining_payment_balance": 0,

-   "bill_to_id": "8ad085518262bc17018265525ebb3697",

-   "sold_to_id": "8ad085518262bc17018265525ec43699"


}`
