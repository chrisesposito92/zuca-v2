---
title: "GetSubscriptionPlans"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/getSubscriptionPlans/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:42:04.097Z"
---

## List subscription plans

Returns a dictionary with a data property that contains an array of subscription plans, starting after cursor. Each entry in the array is a separate object. If no more are available, the resulting array will be empty. This request should never return an error.

Security**bearerAuth**

Request

##### query Parameters

| cursor | stringA cursor for use in pagination. A cursor defines the starting place in a list. For instance, if you make a list request and receive 100 objects, ending with next_page=W3sib3JkZXJ=, your subsequent call can include cursor=W3sib3JkZXJ= in order to fetch the next page of the list. |
| --- | --- |
| expand[] | Array of stringsAllows you to expand responses by including related object information in a single call. See the Expand responses section of the Quickstart API Tutorials for detailed instructions. |
| filter[] | Array of stringsA case-sensitive filter on the list. See the Filter lists section of the Quickstart API Tutorials for detailed instructions. |
| sort[] | Array of stringsA case-sensitive query parameter that specifies the sort order of the list, which can be either ascending (e.g. account_number.asc) or descending (e.g. account_number.desc). You cannot sort on properties that are arrays. If the array-type properties are specified for the sort[] parameter, they are ignored. |
| page_size | integer [ 1 .. 99 ]Default: 30The maximum number of results to return in a single page. If the specified page_size is less than 1 or greater than 99, Zuora will return a 400 error. |
| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, name, plan_id, subscription_id, product_id, subscription_plan_numberExample: fields[]=id,created_time |
| subscription_plan.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, name, plan_id, subscription_id, product_id, subscription_plan_numberExample: subscription_plan.fields[]=id,created_time |
| subscription.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, subscription_number, state, account_id, invoice_owner_account_id, auto_renew, version, initial_term, current_term, renewal_term, start_date, end_date, description, contract_effective, service_activation, customer_acceptance, invoice_separately, latest_version, payment_terms, billing_document_settings, bill_to_id, sold_to_id, contracted_mrr, currency, cancel_reason, last_booking_date, order_numberExample: subscription.fields[]=id,created_time |
| subscription_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, start_date, end_date, charge_model, charge_type, tiers, subscription_item_number, name, description, charged_through_date, recurring, price_id, start_event, tax_code, tax_inclusive, unit_of_measure, quantity, price_base_interval, overage, subscription_plan_id, tiers_mode, processed_through_date, active, state, unit_amount, amount, discount_amount, discount_percent, price_change_percentage, price_change_optionExample: subscription_items.fields[]=id,created_time |
| plan.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, start_date, end_date, name, active, description, plan_number, product_id, active_currenciesExample: plan.fields[]=id,created_time |
| product.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, start_date, end_date, active, name, type, sku, descriptionExample: product.fields[]=id,created_time |
| account.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, auto_pay, account_number, bill_to_id, sold_to_id, billing_document_settings, communication_profile_id, crm_id, sales_rep, parent_account_id, payment_gateway, payment_terms, remaining_credit_memo_balance, remaining_debit_memo_balance, remaining_invoice_balance, remaining_payment_balance, sequence_set_id, tax_certificate, batch, tax_identifier, bill_cycle_day, description, name, currency, default_payment_method_id, enabledExample: account.fields[]=id,created_time |
| price.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, tiers, charge_model, charge_type, name, description, revenue_recognition_rule, stacked_discount, recognized_revenue_accounting_code, deferred_revenue_accounting_code, accounting_code, recurring, start_event, tax_code, tax_inclusive, taxable, unit_of_measure, quantity, min_quantity, max_quantity, price_base_interval, discount_level, overage, plan_id, tiers_mode, apply_discount_to, prepayment, drawdown, discount_amounts, unit_amounts, discount_percent, amounts, price_change_percentage, price_change_option, price_increase_optionExample: price.fields[]=id,created_time |

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

get/subscription\_plans

Request samples

-   cURL
-   Java
-   Node

Copy

curl \--request GET
\--url 'https://rest.apisandbox.zuora.com/v2/subscription\_plans?expand%5B%5D=subscription'
\--header 'Authorization: Bearer 7e6a7b1aac344c7f921c711c691981b0'
\--header 'Content-Type: application/json'


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

        -   "custom_fields": {

            -   "field__c": "custom field value"


            },

        -   "subscription_id": "8ad0823f8258a21901825f6dacbe6f90",

        -   "plan_id": "8ad09f8a7c980e07017c9f396a9c53df",

        -   "name": "SeedRatePlan",

        -   "subscription_items": {

            -   "next_page": null,

            -   "data": [

                -   {

                    -   "id": "8ad0823f8258a21901825f6dad046f9a",

                    -   "name": "Test Recurring Per Unit",

                    -   "recurring": {

                        -   "on": "subscription_item_start_day",

                        -   "alignment_behavior": "none",

                        -   "duration_interval": "subscription_term",

                        -   "duration_interval_count": 1,

                        -   "interval": "month",

                        -   "interval_count": 1,

                        -   "timing": "in_advance",

                        -   "usage": false


                        },

                    -   "price_id": "8ad084a67c9801a7017c9f3974237561",

                    -   "start_event": "contract_effective",

                    -   "tax_inclusive": false,

                    -   "unit_of_measure": "Each",

                    -   "quantity": 0,

                    -   "price_base_interval": "billing_period",

                    -   "created_time": "2022-08-02T09:39:59-07:00",

                    -   "charge_model": "per_unit",

                    -   "charge_type": "recurring",

                    -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

                    -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

                    -   "updated_time": "2022-08-02T09:39:59-07:00",

                    -   "subscription_plan_id": "8ad0823f8258a21901825f6dad046f99",

                    -   "custom_fields": {

                        -   "field__c": "custom field value"


                        },

                    -   "start_date": "2022-08-02",

                    -   "end_date": "2023-07-01",

                    -   "active": true,

                    -   "state": "active",

                    -   "unit_amount": 15


                    }


                ]


            }


        },

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "custom_fields": {

            -   "field__c": "custom field value"


            },

        -   "subscription_id": "8ad0823f8258a21901825f6dacbe6f90",

        -   "plan_id": "8ad09f8a7c980e07017c9f396a9c53df",

        -   "name": "SeedRatePlan",

        -   "subscription_items": {

            -   "next_page": null,

            -   "data": [

                -   {

                    -   "id": "8ad0823f8258a21901825f6dad046f9a",

                    -   "name": "Test Recurring Per Unit",

                    -   "recurring": {

                        -   "on": "subscription_item_start_day",

                        -   "alignment_behavior": "none",

                        -   "duration_interval": "subscription_term",

                        -   "duration_interval_count": 1,

                        -   "interval": "month",

                        -   "interval_count": 1,

                        -   "timing": "in_advance",

                        -   "usage": false


                        },

                    -   "price_id": "8ad084a67c9801a7017c9f3974237561",

                    -   "start_event": "contract_effective",

                    -   "tax_inclusive": false,

                    -   "unit_of_measure": "Each",

                    -   "quantity": 0,

                    -   "price_base_interval": "billing_period",

                    -   "created_time": "2022-08-02T09:39:59-07:00",

                    -   "charge_model": "per_unit",

                    -   "charge_type": "recurring",

                    -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

                    -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

                    -   "updated_time": "2022-08-02T09:39:59-07:00",

                    -   "subscription_plan_id": "8ad0823f8258a21901825f6dad046f99",

                    -   "custom_fields": {

                        -   "field__c": "custom field value"


                        },

                    -   "start_date": "2022-08-02",

                    -   "end_date": "2023-07-01",

                    -   "active": true,

                    -   "state": "active",

                    -   "unit_amount": 15


                    }


                ]


            }


        },

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "custom_fields": {

            -   "field__c": "custom field value"


            },

        -   "subscription_id": "8ad0823f8258a21901825f6dacbe6f90",

        -   "plan_id": "8ad09f8a7c980e07017c9f396a9c53df",

        -   "name": "SeedRatePlan",

        -   "subscription_items": {

            -   "next_page": null,

            -   "data": [

                -   {

                    -   "id": "8ad0823f8258a21901825f6dad046f9a",

                    -   "name": "Test Recurring Per Unit",

                    -   "recurring": {

                        -   "on": "subscription_item_start_day",

                        -   "alignment_behavior": "none",

                        -   "duration_interval": "subscription_term",

                        -   "duration_interval_count": 1,

                        -   "interval": "month",

                        -   "interval_count": 1,

                        -   "timing": "in_advance",

                        -   "usage": false


                        },

                    -   "price_id": "8ad084a67c9801a7017c9f3974237561",

                    -   "start_event": "contract_effective",

                    -   "tax_inclusive": false,

                    -   "unit_of_measure": "Each",

                    -   "quantity": 0,

                    -   "price_base_interval": "billing_period",

                    -   "created_time": "2022-08-02T09:39:59-07:00",

                    -   "charge_model": "per_unit",

                    -   "charge_type": "recurring",

                    -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

                    -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

                    -   "updated_time": "2022-08-02T09:39:59-07:00",

                    -   "subscription_plan_id": "8ad0823f8258a21901825f6dad046f99",

                    -   "custom_fields": {

                        -   "field__c": "custom field value"


                        },

                    -   "start_date": "2022-08-02",

                    -   "end_date": "2023-07-01",

                    -   "active": true,

                    -   "state": "active",

                    -   "unit_amount": 15


                    }


                ]


            }


        },

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "custom_fields": {

            -   "field__c": "custom field value"


            },

        -   "subscription_id": "8ad0823f8258a21901825f6dacbe6f90",

        -   "plan_id": "8ad09f8a7c980e07017c9f396a9c53df",

        -   "name": "SeedRatePlan",

        -   "subscription_items": {

            -   "next_page": null,

            -   "data": [

                -   {

                    -   "id": "8ad0823f8258a21901825f6dad046f9a",

                    -   "name": "Test Recurring Per Unit",

                    -   "recurring": {

                        -   "on": "subscription_item_start_day",

                        -   "alignment_behavior": "none",

                        -   "duration_interval": "subscription_term",

                        -   "duration_interval_count": 1,

                        -   "interval": "month",

                        -   "interval_count": 1,

                        -   "timing": "in_advance",

                        -   "usage": false


                        },

                    -   "price_id": "8ad084a67c9801a7017c9f3974237561",

                    -   "start_event": "contract_effective",

                    -   "tax_inclusive": false,

                    -   "unit_of_measure": "Each",

                    -   "quantity": 0,

                    -   "price_base_interval": "billing_period",

                    -   "created_time": "2022-08-02T09:39:59-07:00",

                    -   "charge_model": "per_unit",

                    -   "charge_type": "recurring",

                    -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

                    -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

                    -   "updated_time": "2022-08-02T09:39:59-07:00",

                    -   "subscription_plan_id": "8ad0823f8258a21901825f6dad046f99",

                    -   "custom_fields": {

                        -   "field__c": "custom field value"


                        },

                    -   "start_date": "2022-08-02",

                    -   "end_date": "2023-07-01",

                    -   "active": true,

                    -   "state": "active",

                    -   "unit_amount": 15


                    }


                ]


            }


        },

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "custom_fields": {

            -   "field__c": "custom field value"


            },

        -   "subscription_id": "8ad0823f8258a21901825f6dacbe6f90",

        -   "plan_id": "8ad09f8a7c980e07017c9f396a9c53df",

        -   "name": "SeedRatePlan",

        -   "subscription_items": {

            -   "next_page": null,

            -   "data": [

                -   {

                    -   "id": "8ad0823f8258a21901825f6dad046f9a",

                    -   "name": "Test Recurring Per Unit",

                    -   "recurring": {

                        -   "on": "subscription_item_start_day",

                        -   "alignment_behavior": "none",

                        -   "duration_interval": "subscription_term",

                        -   "duration_interval_count": 1,

                        -   "interval": "month",

                        -   "interval_count": 1,

                        -   "timing": "in_advance",

                        -   "usage": false


                        },

                    -   "price_id": "8ad084a67c9801a7017c9f3974237561",

                    -   "start_event": "contract_effective",

                    -   "tax_inclusive": false,

                    -   "unit_of_measure": "Each",

                    -   "quantity": 0,

                    -   "price_base_interval": "billing_period",

                    -   "created_time": "2022-08-02T09:39:59-07:00",

                    -   "charge_model": "per_unit",

                    -   "charge_type": "recurring",

                    -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

                    -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

                    -   "updated_time": "2022-08-02T09:39:59-07:00",

                    -   "subscription_plan_id": "8ad0823f8258a21901825f6dad046f99",

                    -   "custom_fields": {

                        -   "field__c": "custom field value"


                        },

                    -   "start_date": "2022-08-02",

                    -   "end_date": "2023-07-01",

                    -   "active": true,

                    -   "state": "active",

                    -   "unit_amount": 15


                    }


                ]


            }


        }


    ]


}`
