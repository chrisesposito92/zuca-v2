---
title: "GetSubscriptionByVersion"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/getSubscriptionByVersion/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:41:42.073Z"
---

## List all versions of a subscription

Lists all versions of the specified subscription.

Security**bearerAuth**

Request

##### path Parameters

| subscription_idrequired | stringIdentifier for the subscription, either subscription_number or subscription_id |
| --- | --- |

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, subscription_number, state, account_id, invoice_owner_account_id, auto_renew, version, initial_term, current_term, renewal_term, start_date, end_date, description, contract_effective, service_activation, customer_acceptance, invoice_separately, latest_version, payment_terms, billing_document_settings, bill_to_id, sold_to_id, contracted_mrr, currency, cancel_reason, last_booking_date, order_numberExample: fields[]=id,created_time |
| --- | --- |
| subscription_version.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, subscription_number, state, account_id, invoice_owner_account_id, auto_renew, version, initial_term, current_term, renewal_term, start_date, end_date, description, contract_effective, service_activation, customer_acceptance, invoice_separately, latest_version, payment_terms, billing_document_settings, bill_to_id, sold_to_id, contracted_mrr, currency, cancel_reason, last_booking_date, order_numberExample: subscription_version.fields[]=id,created_time |
| subscription_plans.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, name, plan_id, subscription_id, product_id, subscription_plan_number, subscription_itemsExample: subscription_plans.fields[]=id,created_time |
| subscription_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, start_date, end_date, charge_model, charge_type, tiers, subscription_item_number, name, description, charged_through_date, recurring, price_id, start_event, tax_code, tax_inclusive, unit_of_measure, quantity, price_base_interval, overage, subscription_plan_id, tiers_mode, processed_through_date, active, state, unit_amount, amount, discount_amount, discount_percent, price_change_percentage, price_change_option, priceExample: subscription_items.fields[]=id,created_time |
| account.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, auto_pay, account_number, bill_to_id, sold_to_id, billing_document_settings, communication_profile_id, crm_id, sales_rep, parent_account_id, payment_gateway, payment_terms, remaining_credit_memo_balance, remaining_debit_memo_balance, remaining_invoice_balance, remaining_payment_balance, sequence_set_id, tax_certificate, batch, tax_identifier, bill_cycle_day, description, name, currency, default_payment_method_id, enabledExample: account.fields[]=id,created_time |
| invoice_owner_account.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, auto_pay, account_number, bill_to_id, sold_to_id, billing_document_settings, communication_profile_id, crm_id, sales_rep, parent_account_id, payment_gateway, payment_terms, remaining_credit_memo_balance, remaining_debit_memo_balance, remaining_invoice_balance, remaining_payment_balance, sequence_set_id, tax_certificate, batch, tax_identifier, bill_cycle_day, description, name, currency, default_payment_method_id, enabledExample: invoice_owner_account.fields[]=id,created_time |
| plan.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, start_date, end_date, name, active, description, plan_number, product_id, active_currenciesExample: plan.fields[]=id,created_time |
| product.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, start_date, end_date, active, name, type, sku, descriptionExample: product.fields[]=id,created_time |
| price.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, tiers, charge_model, charge_type, name, description, revenue_recognition_rule, stacked_discount, recognized_revenue_accounting_code, deferred_revenue_accounting_code, accounting_code, recurring, start_event, tax_code, tax_inclusive, taxable, unit_of_measure, quantity, min_quantity, max_quantity, price_base_interval, discount_level, overage, plan_id, tiers_mode, apply_discount_to, prepayment, drawdown, discount_amounts, unit_amounts, discount_percent, amounts, price_change_percentage, price_change_option, price_increase_optionExample: price.fields[]=id,created_time |
| bill_to.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, address, home_phone, first_name, last_name, email, work_email, nickname, other_phone, work_phone, mobile_phone, tax_region, other_phone_type, faxExample: bill_to.fields[]=id,created_time |
| prepaid_balance.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values prepaid_UOM, start_date, end_date, total_balance, remaining_balanceExample: prepaid_balance.fields[]=id,created_time |
| prepaid_balances.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values validity_periodsExample: prepaid_balances.fields[]=id,created_time |
| validity_period.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values prepaid_UOM, start_date, end_date, total_balance, remaining_balance, overage_rated_amount, overage_rated_quantityExample: validity_period.fields[]=id,created_time |
| transactions.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values transaction_date, type, quantityExample: transactions.fields[]=id,created_time |
| actions.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values type, action_id, sequence, start_on, subscription_plans, renew, terms, cancel, pause, resume, orderExample: actions.fields[]=id,created_time |
| cursor | stringA cursor for use in pagination. A cursor defines the starting place in a list. For instance, if you make a list request and receive 100 objects, ending with next_page=W3sib3JkZXJ=, your subsequent call can include cursor=W3sib3JkZXJ= in order to fetch the next page of the list. |
| expand[] | Array of stringsAllows you to expand responses by including related object information in a single call. See the Expand responses section of the Quickstart API Tutorials for detailed instructions. |
| filter[] | Array of stringsA case-sensitive filter on the list. See the Filter lists section of the Quickstart API Tutorials for detailed instructions. |
| sort[] | Array of stringsA case-sensitive query parameter that specifies the sort order of the list, which can be either ascending (e.g. account_number.asc) or descending (e.g. account_number.desc). You cannot sort on properties that are arrays. If the array-type properties are specified for the sort[] parameter, they are ignored. |
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

get/subscriptions/{subscription\_id}/versions

Request samples

-   cURL
-   Java
-   Node

Copy

curl \--request GET      \--url 'https://rest.apisandbox.zuora.com/v2/subscriptions/A-S00013892/versions'      \--header 'Authorization: Bearer 35b5e974cd8447e69fd96adeefba9009'      \--header 'Content-Type: application/json'

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

        -   "updated_time": "2023-03-14T11:24:50-07:00",

        -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "created_time": "2023-03-14T11:24:50-07:00",

        -   "custom_fields": {

            -   "BusinessUnit__c": "unit 1",

            -   "testDate__c": "2023-01-01",

            -   "TestSubscriptionRequired__c": "testValue",

            -   "Cancel_Reason_Code__c": "Customer Initiated",

            -   "XiOEndUser__c": "test user"


            },

        -   "subscription_number": "A-S0001389201234",

        -   "state": "active",

        -   "version": 15,

        -   "account_id": "8ad08d29857fc0ec0185829faf0507d7",

        -   "invoice_owner_account_id": "8ad08d2986df2c8b0186e0e6080c472f",

        -   "auto_renew": false,

        -   "latest_version": true,

        -   "initial_term": {

            -   "type": "termed",

            -   "interval_count": 1,

            -   "interval": "year"


            },

        -   "current_term": {

            -   "type": "termed",

            -   "start_date": "2023-03-07",

            -   "end_date": "2024-03-07",

            -   "interval_count": 1,

            -   "interval": "year"


            },

        -   "renewal_term": {

            -   "type": "evergreen"


            },

        -   "start_date": "2023-03-07",

        -   "end_date": "2024-03-07",

        -   "description": "",

        -   "contract_effective": "2023-03-07",

        -   "service_activation": "2023-03-07",

        -   "customer_acceptance": "2023-03-07",

        -   "invoice_separately": false,

        -   "bill_to_id": null,

        -   "payment_terms": null,

        -   "billing_document_settings": {

            -   "sequence_set_id": null,

            -   "template_id": null


            }


        },

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "updated_time": "2023-03-14T11:24:50-07:00",

        -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "created_time": "2023-03-14T11:24:50-07:00",

        -   "custom_fields": {

            -   "BusinessUnit__c": "unit 1",

            -   "testDate__c": "2023-01-01",

            -   "TestSubscriptionRequired__c": "testValue",

            -   "Cancel_Reason_Code__c": "Customer Initiated",

            -   "XiOEndUser__c": "test user"


            },

        -   "subscription_number": "A-S0001389201234",

        -   "state": "active",

        -   "version": 15,

        -   "account_id": "8ad08d29857fc0ec0185829faf0507d7",

        -   "invoice_owner_account_id": "8ad08d2986df2c8b0186e0e6080c472f",

        -   "auto_renew": false,

        -   "latest_version": true,

        -   "initial_term": {

            -   "type": "termed",

            -   "interval_count": 1,

            -   "interval": "year"


            },

        -   "current_term": {

            -   "type": "termed",

            -   "start_date": "2023-03-07",

            -   "end_date": "2024-03-07",

            -   "interval_count": 1,

            -   "interval": "year"


            },

        -   "renewal_term": {

            -   "type": "evergreen"


            },

        -   "start_date": "2023-03-07",

        -   "end_date": "2024-03-07",

        -   "description": "",

        -   "contract_effective": "2023-03-07",

        -   "service_activation": "2023-03-07",

        -   "customer_acceptance": "2023-03-07",

        -   "invoice_separately": false,

        -   "bill_to_id": null,

        -   "payment_terms": null,

        -   "billing_document_settings": {

            -   "sequence_set_id": null,

            -   "template_id": null


            }


        },

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "updated_time": "2023-03-14T11:24:50-07:00",

        -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "created_time": "2023-03-14T11:24:50-07:00",

        -   "custom_fields": {

            -   "BusinessUnit__c": "unit 1",

            -   "testDate__c": "2023-01-01",

            -   "TestSubscriptionRequired__c": "testValue",

            -   "Cancel_Reason_Code__c": "Customer Initiated",

            -   "XiOEndUser__c": "test user"


            },

        -   "subscription_number": "A-S0001389201234",

        -   "state": "active",

        -   "version": 15,

        -   "account_id": "8ad08d29857fc0ec0185829faf0507d7",

        -   "invoice_owner_account_id": "8ad08d2986df2c8b0186e0e6080c472f",

        -   "auto_renew": false,

        -   "latest_version": true,

        -   "initial_term": {

            -   "type": "termed",

            -   "interval_count": 1,

            -   "interval": "year"


            },

        -   "current_term": {

            -   "type": "termed",

            -   "start_date": "2023-03-07",

            -   "end_date": "2024-03-07",

            -   "interval_count": 1,

            -   "interval": "year"


            },

        -   "renewal_term": {

            -   "type": "evergreen"


            },

        -   "start_date": "2023-03-07",

        -   "end_date": "2024-03-07",

        -   "description": "",

        -   "contract_effective": "2023-03-07",

        -   "service_activation": "2023-03-07",

        -   "customer_acceptance": "2023-03-07",

        -   "invoice_separately": false,

        -   "bill_to_id": null,

        -   "payment_terms": null,

        -   "billing_document_settings": {

            -   "sequence_set_id": null,

            -   "template_id": null


            }


        },

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "updated_time": "2023-03-14T11:24:50-07:00",

        -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "created_time": "2023-03-14T11:24:50-07:00",

        -   "custom_fields": {

            -   "BusinessUnit__c": "unit 1",

            -   "testDate__c": "2023-01-01",

            -   "TestSubscriptionRequired__c": "testValue",

            -   "Cancel_Reason_Code__c": "Customer Initiated",

            -   "XiOEndUser__c": "test user"


            },

        -   "subscription_number": "A-S0001389201234",

        -   "state": "active",

        -   "version": 15,

        -   "account_id": "8ad08d29857fc0ec0185829faf0507d7",

        -   "invoice_owner_account_id": "8ad08d2986df2c8b0186e0e6080c472f",

        -   "auto_renew": false,

        -   "latest_version": true,

        -   "initial_term": {

            -   "type": "termed",

            -   "interval_count": 1,

            -   "interval": "year"


            },

        -   "current_term": {

            -   "type": "termed",

            -   "start_date": "2023-03-07",

            -   "end_date": "2024-03-07",

            -   "interval_count": 1,

            -   "interval": "year"


            },

        -   "renewal_term": {

            -   "type": "evergreen"


            },

        -   "start_date": "2023-03-07",

        -   "end_date": "2024-03-07",

        -   "description": "",

        -   "contract_effective": "2023-03-07",

        -   "service_activation": "2023-03-07",

        -   "customer_acceptance": "2023-03-07",

        -   "invoice_separately": false,

        -   "bill_to_id": null,

        -   "payment_terms": null,

        -   "billing_document_settings": {

            -   "sequence_set_id": null,

            -   "template_id": null


            }


        },

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "updated_time": "2023-03-14T11:24:50-07:00",

        -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "created_time": "2023-03-14T11:24:50-07:00",

        -   "custom_fields": {

            -   "BusinessUnit__c": "unit 1",

            -   "testDate__c": "2023-01-01",

            -   "TestSubscriptionRequired__c": "testValue",

            -   "Cancel_Reason_Code__c": "Customer Initiated",

            -   "XiOEndUser__c": "test user"


            },

        -   "subscription_number": "A-S0001389201234",

        -   "state": "active",

        -   "version": 15,

        -   "account_id": "8ad08d29857fc0ec0185829faf0507d7",

        -   "invoice_owner_account_id": "8ad08d2986df2c8b0186e0e6080c472f",

        -   "auto_renew": false,

        -   "latest_version": true,

        -   "initial_term": {

            -   "type": "termed",

            -   "interval_count": 1,

            -   "interval": "year"


            },

        -   "current_term": {

            -   "type": "termed",

            -   "start_date": "2023-03-07",

            -   "end_date": "2024-03-07",

            -   "interval_count": 1,

            -   "interval": "year"


            },

        -   "renewal_term": {

            -   "type": "evergreen"


            },

        -   "start_date": "2023-03-07",

        -   "end_date": "2024-03-07",

        -   "description": "",

        -   "contract_effective": "2023-03-07",

        -   "service_activation": "2023-03-07",

        -   "customer_acceptance": "2023-03-07",

        -   "invoice_separately": false,

        -   "bill_to_id": null,

        -   "payment_terms": null,

        -   "billing_document_settings": {

            -   "sequence_set_id": null,

            -   "template_id": null


            }


        }


    ]


}`
