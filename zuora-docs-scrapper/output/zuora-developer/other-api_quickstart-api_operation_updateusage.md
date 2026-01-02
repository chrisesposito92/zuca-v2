---
title: "UpdateUsage"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/updateUsage/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:44:49.474Z"
---

## Update a usage record

Updates the usage record. Any fields on the object not provided in the request are not changed.

Security**bearerAuth**

Request

##### path Parameters

| idrequired | stringUsage Id |
| --- | --- |

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, account_number, subscription_item_id, subscription_item_number, subscription_id, subscription_number, unit_of_measure, description, end_time, state, start_time, quantityExample: fields[]=id,created_time |
| --- | --- |
| usage_record.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, account_number, subscription_item_id, subscription_item_number, subscription_id, subscription_number, unit_of_measure, description, end_time, state, start_time, quantityExample: usage_record.fields[]=id,created_time |
| account.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, auto_pay, account_number, bill_to_id, sold_to_id, billing_document_settings, communication_profile_id, crm_id, sales_rep, parent_account_id, payment_gateway, payment_terms, remaining_credit_memo_balance, remaining_debit_memo_balance, remaining_invoice_balance, remaining_payment_balance, sequence_set_id, tax_certificate, batch, tax_identifier, bill_cycle_day, description, name, currency, default_payment_method_id, enabledExample: account.fields[]=id,created_time |
| subscription.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, subscription_number, state, account_id, invoice_owner_account_id, auto_renew, version, initial_term, current_term, renewal_term, start_date, end_date, description, contract_effective, service_activation, customer_acceptance, invoice_separately, latest_version, payment_terms, billing_document_settings, bill_to_id, sold_to_id, contracted_mrr, currency, cancel_reason, last_booking_date, order_numberExample: subscription.fields[]=id,created_time |
| subscription_item.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, start_date, end_date, charge_model, charge_type, tiers, subscription_item_number, name, description, charged_through_date, recurring, price_id, start_event, tax_code, tax_inclusive, unit_of_measure, quantity, price_base_interval, overage, subscription_plan_id, tiers_mode, processed_through_date, active, state, unit_amount, amount, discount_amount, discount_percent, price_change_percentage, price_change_optionExample: subscription_item.fields[]=id,created_time |
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

| end_time | string <date-time>The end time for which usage is recorded. |
| --- | --- |
| quantity | numberThe number of units of this item. |
| start_time | string <date-time>The start time for which usage is recorded. |
| unit_of_measure | stringSpecifies the units to measure usage. Units of measure are configured in Zuora Central. Your values depend on your configuration in Billing Settings. |
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

patch/usage\_records/{id}

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

`{

-   "unit_of_measure": "USD"


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

-   "id": "8ad08cbd8586721c018587d293aa3752",

-   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "created_time": "2023-01-06T08:03:22-08:00",

-   "custom_fields": {

    -   "field__c": "custom field value"


    },

-   "custom_objects": { },

-   "account_number": "RC-00000093",

-   "account_id": "2c92c0f974e9737a0175034cc0cc10c1",

-   "description": "Creates a usage",

-   "quantity": 4,

-   "subscription_id": "2c92c0f974e9736d017503559cc76d22",

-   "unit_of_measure": "USD",

-   "state": "pending"


}`
