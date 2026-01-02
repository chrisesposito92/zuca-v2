---
title: "UpdatePaymentMethod"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/updatePaymentMethod/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:45:09.551Z"
---

## Update a payment method

Updates the specified payment method by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

Security**bearerAuth**

Request

##### path Parameters

| payment_method_idrequired | stringPayment Method Id |
| --- | --- |

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, type, account_id, bank_identification_number, device_session_id, ip_address, maximum_payment_attempts, payment_retry_interval, state, use_default_retry_rule, existing_mandate, last_failed_sale_transaction_time, last_transaction_time, last_transaction_status, number_of_consecutive_failures, total_number_of_processed_payments, total_number_of_error_payments, billing_details, card, apple_pay, google_pay, ach_debit, cc_ref, paypal_adaptive, paypal_express_native, paypal_express, sepa_debit, betalings_debit, autogiro_debit, bacs_debit, au_becs_debit, nz_becs_debit, pad_debitExample: fields[]=id,created_time |
| --- | --- |
| payment_method.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, type, account_id, bank_identification_number, device_session_id, ip_address, maximum_payment_attempts, payment_retry_interval, state, use_default_retry_rule, existing_mandate, last_failed_sale_transaction_time, last_transaction_time, last_transaction_status, number_of_consecutive_failures, total_number_of_processed_payments, total_number_of_error_payments, billing_details, card, apple_pay, google_pay, ach_debit, cc_ref, paypal_adaptive, paypal_express_native, paypal_express, sepa_debit, betalings_debit, autogiro_debit, bacs_debit, au_becs_debit, nz_becs_debit, pad_debitExample: payment_method.fields[]=id,created_time |
| account.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, auto_pay, account_number, bill_to_id, sold_to_id, billing_document_settings, communication_profile_id, crm_id, sales_rep, parent_account_id, payment_gateway, payment_terms, remaining_credit_memo_balance, remaining_debit_memo_balance, remaining_invoice_balance, remaining_payment_balance, sequence_set_id, tax_certificate, batch, tax_identifier, bill_cycle_day, description, name, currency, default_payment_method_id, enabledExample: account.fields[]=id,created_time |
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

| billing_details | object (BillingDetails)Billing information associated with the payment method that may be used or required by specific payment method types. |
| --- | --- |
| account_id | stringA customer account identifier. |
| account_number | stringA human-readable customer account identifier. It can be user-supplied. |
| custom_fields | object (CustomFields)Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. |
| card | object (CardUpdate)Credit card information. When providing a card number, you must meet the requirements for PCI compliance. We strongly recommend using Zuora.js instead of interacting with this API directly. |
| cc_ref | object (CcRefUpdate)Credit Card Reference Transaction. See Supported payment methods for payment gateways that support this type of payment method. |
| mandate | object (CcRefMandate) |
| ach_debit | object (AchDebitUpdate)If this is an ach_debit payment method, this hash contains details about the ACH debit bank account. |
| maximum_payment_attempts | numberMaximum number of consecutive failed retry payment attempts using this payment method before retries are stopped. |
| payment_retry_interval | integerThe retry interval in hours. |
| device_session_id | stringIdentifier of the device browser session. |
| gateway_options | object |
| currency | string3-letter ISO 4217 currency code. |
| gateway_id | stringIdentifier of the payment gateway Zuora will use to authorize the payments that are made with this payment method. |

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

patch/payment\_methods/{payment\_method\_id}

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

Expand allCollapse all

`{

-   "billing_details": {

    -   "address": {

        -   "line1": "3333 Piedmont Rd NE",

        -   "line2": "Suite 1150",

        -   "city": "Atlanta",

        -   "state": "GA",

        -   "country": "USA",

        -   "postal_code": "30305"


        }


    }


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

-   "id": "8ad0823f83163bc5018318d62a2c0c40",

-   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "updated_time": "2022-09-07T10:48:31-07:00",

-   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "created_time": "2022-09-07T09:43:52-07:00",

-   "custom_fields": {

    -   "field__c": "custom field value"


    },

-   "type": "card",

-   "account_id": "2c92c0f86cbe335a016cbece4a434ada",

-   "billing_details": {

    -   "name": "Anabelle Padberg",

    -   "address": {

        -   "line1": "3333 Piedmont Rd NE",

        -   "line2": "Suite 1150",

        -   "city": "Atlanta",

        -   "country": "United States",

        -   "state": "Georgia",

        -   "postal_code": "30305"


        }


    },

-   "maximum_payment_attempts": 0,

-   "payment_retry_interval": 0,

-   "bank_identification_number": "411111",

-   "card": {

    -   "brand": "visa",

    -   "expiry_month": 12,

    -   "expiry_year": 2025,

    -   "last_4": "1111"


    },

-   "state": "active"


}`
