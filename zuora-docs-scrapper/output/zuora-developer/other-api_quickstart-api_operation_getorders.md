---
title: "GetOrders"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/getOrders/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:40:47.166Z"
---

## List orders

Lists all or a subset of orders in your tenant.

Security**bearerAuth**

Request

##### query Parameters

| cursor | stringA cursor for use in pagination. A cursor defines the starting place in a list. For instance, if you make a list request and receive 100 objects, ending with next_page=W3sib3JkZXJ=, your subsequent call can include cursor=W3sib3JkZXJ= in order to fetch the next page of the list. |
| --- | --- |
| expand[] | Array of stringsAllows you to expand responses by including related object information in a single call. See the Expand responses section of the Quickstart API Tutorials for detailed instructions. |
| filter[] | Array of stringsA case-sensitive filter on the list. See the Filter lists section of the Quickstart API Tutorials for detailed instructions. |
| sort[] | Array of stringsA case-sensitive query parameter that specifies the sort order of the list, which can be either ascending (e.g. account_number.asc) or descending (e.g. account_number.desc). You cannot sort on properties that are arrays. If the array-type properties are specified for the sort[] parameter, they are ignored. |
| page_size | integer [ 1 .. 99 ]Default: 30The maximum number of results to return in a single page. If the specified page_size is less than 1 or greater than 99, Zuora will return a 400 error. |
| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, order_number, order_date, state, category, description, scheduled_date, scheduled_date_policy, line_items, subscriptionsExample: fields[]=id,created_time |
| order.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, order_number, order_date, state, category, description, scheduled_date, scheduled_date_policy, line_items, subscriptionsExample: order.fields[]=id,created_time |
| order_actions.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values type, action_id, sequence, start_on, subscription_plans, renew, terms, cancel, pause, resume, orderExample: order_actions.fields[]=id,created_time |
| subscriptions.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, subscription_number, state, account_id, invoice_owner_account_id, auto_renew, version, initial_term, current_term, renewal_term, start_date, end_date, description, contract_effective, service_activation, customer_acceptance, invoice_separately, latest_version, payment_terms, billing_document_settings, bill_to_id, sold_to_id, contracted_mrr, currency, cancel_reason, last_booking_date, actionsExample: subscriptions.fields[]=id,created_time |
| line_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, total, subtotal, quantity_fulfilled, quantity_pending_fulfillment, unit_of_measure, accounting_code, adjustment_liability_account, unit_amount, target_date, billing_rule, contract_asset_account, contract_liability_account, description, discount_total, revenue, discount_unit_amount, discount_percent, category, name, item_number, type, list_price, list_unit_price, original_order_date, original_order_id, original_order_line_item_id, original_order_line_item_number, original_order_number, product_code, price_id, purchase_order_number, quantity, quantity_available_for_return, related_subscription_number, requires_fulfillment, sold_to_id, original_sold_to_id, tax_code, tax_inclusive, end_date, start_date, unbilled_receivables_account, state, order_idExample: line_items.fields[]=id,created_time |
| subscription_plans.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, name, plan_id, subscription_id, product_id, subscription_plan_number, subscription_itemsExample: subscription_plans.fields[]=id,created_time |
| subscription_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, start_date, end_date, charge_model, charge_type, tiers, subscription_item_number, name, description, charged_through_date, recurring, price_id, start_event, tax_code, tax_inclusive, unit_of_measure, quantity, price_base_interval, overage, subscription_plan_id, tiers_mode, processed_through_date, active, state, unit_amount, amount, discount_amount, discount_percent, price_change_percentage, price_change_optionExample: subscription_items.fields[]=id,created_time |
| invoice_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, booking_reference, applied_to_item_id, price_id, discount_item, deferred_revenue_account, description, invoice_id, sku, name, purchase_order_number, quantity, recognized_revenue_account, remaining_balance, revenue_recognition_rule_name, accounting_code, service_end, service_start, accounts_receivable_account, subscription_id, subscription_item_id, tax, tax_code, tax_inclusive, unit_amount, unit_of_measure, document_item_dateExample: invoice_items.fields[]=id,created_time |

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

get/orders

Request samples

-   cURL

Copy

curl \--request GET   \--url https://rest.apisandbox.zuora.com/v2/orders   \--header 'Authorization: Bearer bd13987b7a434286b1b6f75dcb8e3d01'   \--header 'Content-Type: application/json'


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

        -   "order_number": "O-0002341801234",

        -   "order_date": "2022-01-01",

        -   "state": "complete",

        -   "category": "sale",

        -   "created_time": "2023-04-14T06:37:13-07:00",

        -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "updated_time": "2023-04-14T06:37:14-07:00",

        -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "custom_fields": { },

        -   "description": "description of test account",

        -   "account_id": "8ad0934e86da6aca0186db46d29a2cee",

        -   "subscriptions": [

            -   {

                -   "id": "8ad08d29877fdeea01877ffbff293f04",

                -   "subscription_number": "A-S00013987",

                -   "state": "active",

                -   "account_id": "8ad0823f8455bb400184633077e63aaf",

                -   "invoice_owner_account_id": "8ad0934e86da6aca0186db46d29a2cee",

                -   "auto_renew": false,

                -   "version": 1,

                -   "initial_term": {

                    -   "type": "termed",

                    -   "interval_count": 1,

                    -   "interval": "year"


                    },

                -   "current_term": {

                    -   "type": "termed",

                    -   "start_date": "2022-01-01",

                    -   "end_date": "2023-01-01",

                    -   "interval_count": 1,

                    -   "interval": "year"


                    },

                -   "renewal_term": {

                    -   "type": "evergreen"


                    },

                -   "start_date": "2022-01-01",

                -   "end_date": "2023-01-01",

                -   "contract_effective": "2022-01-01",

                -   "service_activation": "2022-01-01",

                -   "customer_acceptance": "2022-01-01",

                -   "invoice_separately": false,

                -   "latest_version": true,

                -   "order_number": "O-00023418",

                -   "custom_fields": {

                    -   "TestSubscriptionRequired__c": "testValue",

                    -   "Cancel_Reason_Code__c": "Customer Initiated"


                    },

                -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

                -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

                -   "created_time": "2023-04-14T06:37:14-07:00",

                -   "updated_time": "2023-04-14T06:37:14-07:00",

                -   "billing_document_settings": { },

                -   "actions": [

                    -   {

                        -   "action_id": "8ad08d29877fdeea01877ffbfe943ef6",

                        -   "type": "create_subscription",

                        -   "sequence": 0,

                        -   "start_on": {

                            -   "contract_effective": "2022-01-01",

                            -   "service_activation": "2022-01-01",

                            -   "customer_acceptance": "2022-01-01"


                            },

                        -   "subscription_plans": {

                            -   "next_page": null,

                            -   "data": [

                                -   {

                                    -   "id": "8ad08d29877fdeea01877ffbff6b3f0f",

                                    -   "plan_id": "8ad0877b83ac56660183ae82d4373c8b",

                                    -   "subscription_items": {

                                        -   "next_page": null,

                                        -   "data": [

                                            -   {

                                                -   "id": "8ad08d29877fdeea01877ffbff6b3f10",

                                                -   "subscription_item_number": "C-00050253",

                                                -   "name": "Recurring - Unit Amount Upgrade",

                                                -   "recurring": {

                                                    -   "on": "_1",

                                                    -   "alignment_behavior": "none",

                                                    -   "interval": "month",

                                                    -   "interval_count": 1,

                                                    -   "timing": "in_advance",

                                                    -   "usage": false,

                                                    -   "duration_interval": "year",

                                                    -   "duration_interval_count": 2,

                                                    -   "recurring_on": "_1"


                                                    },

                                                -   "price_id": "8ad0991583ac6e130183ae83026637a7",

                                                -   "tax_inclusive": false,

                                                -   "unit_of_measure": "Each",

                                                -   "quantity": 10,

                                                -   "price_base_interval": "billing_period",

                                                -   "created_time": "2023-04-14T06:37:14-07:00",

                                                -   "charge_model": "per_unit",

                                                -   "charge_type": "recurring",

                                                -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

                                                -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

                                                -   "updated_time": "2023-04-14T06:37:14-07:00",

                                                -   "subscription_plan_id": "8ad08d29877fdeea01877ffbff6b3f0f",

                                                -   "custom_fields": {

                                                    -   "Price__c": "0"


                                                    },

                                                -   "start_date": "2022-10-13",

                                                -   "end_date": "2023-01-01",

                                                -   "active": false,

                                                -   "state": "expired",

                                                -   "unit_amount": 50


                                                }


                                            ]


                                        }


                                    }


                                ]


                            }


                        }


                    ]


                }


            ]


        },

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "order_number": "O-0002341801234",

        -   "order_date": "2022-01-01",

        -   "state": "complete",

        -   "category": "sale",

        -   "created_time": "2023-04-14T06:37:13-07:00",

        -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "updated_time": "2023-04-14T06:37:14-07:00",

        -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "custom_fields": { },

        -   "description": "description of test account",

        -   "account_id": "8ad0934e86da6aca0186db46d29a2cee",

        -   "subscriptions": [

            -   {

                -   "id": "8ad08d29877fdeea01877ffbff293f04",

                -   "subscription_number": "A-S00013987",

                -   "state": "active",

                -   "account_id": "8ad0823f8455bb400184633077e63aaf",

                -   "invoice_owner_account_id": "8ad0934e86da6aca0186db46d29a2cee",

                -   "auto_renew": false,

                -   "version": 1,

                -   "initial_term": {

                    -   "type": "termed",

                    -   "interval_count": 1,

                    -   "interval": "year"


                    },

                -   "current_term": {

                    -   "type": "termed",

                    -   "start_date": "2022-01-01",

                    -   "end_date": "2023-01-01",

                    -   "interval_count": 1,

                    -   "interval": "year"


                    },

                -   "renewal_term": {

                    -   "type": "evergreen"


                    },

                -   "start_date": "2022-01-01",

                -   "end_date": "2023-01-01",

                -   "contract_effective": "2022-01-01",

                -   "service_activation": "2022-01-01",

                -   "customer_acceptance": "2022-01-01",

                -   "invoice_separately": false,

                -   "latest_version": true,

                -   "order_number": "O-00023418",

                -   "custom_fields": {

                    -   "TestSubscriptionRequired__c": "testValue",

                    -   "Cancel_Reason_Code__c": "Customer Initiated"


                    },

                -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

                -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

                -   "created_time": "2023-04-14T06:37:14-07:00",

                -   "updated_time": "2023-04-14T06:37:14-07:00",

                -   "billing_document_settings": { },

                -   "actions": [

                    -   {

                        -   "action_id": "8ad08d29877fdeea01877ffbfe943ef6",

                        -   "type": "create_subscription",

                        -   "sequence": 0,

                        -   "start_on": {

                            -   "contract_effective": "2022-01-01",

                            -   "service_activation": "2022-01-01",

                            -   "customer_acceptance": "2022-01-01"


                            },

                        -   "subscription_plans": {

                            -   "next_page": null,

                            -   "data": [

                                -   {

                                    -   "id": "8ad08d29877fdeea01877ffbff6b3f0f",

                                    -   "plan_id": "8ad0877b83ac56660183ae82d4373c8b",

                                    -   "subscription_items": {

                                        -   "next_page": null,

                                        -   "data": [

                                            -   {

                                                -   "id": "8ad08d29877fdeea01877ffbff6b3f10",

                                                -   "subscription_item_number": "C-00050253",

                                                -   "name": "Recurring - Unit Amount Upgrade",

                                                -   "recurring": {

                                                    -   "on": "_1",

                                                    -   "alignment_behavior": "none",

                                                    -   "interval": "month",

                                                    -   "interval_count": 1,

                                                    -   "timing": "in_advance",

                                                    -   "usage": false,

                                                    -   "duration_interval": "year",

                                                    -   "duration_interval_count": 2,

                                                    -   "recurring_on": "_1"


                                                    },

                                                -   "price_id": "8ad0991583ac6e130183ae83026637a7",

                                                -   "tax_inclusive": false,

                                                -   "unit_of_measure": "Each",

                                                -   "quantity": 10,

                                                -   "price_base_interval": "billing_period",

                                                -   "created_time": "2023-04-14T06:37:14-07:00",

                                                -   "charge_model": "per_unit",

                                                -   "charge_type": "recurring",

                                                -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

                                                -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

                                                -   "updated_time": "2023-04-14T06:37:14-07:00",

                                                -   "subscription_plan_id": "8ad08d29877fdeea01877ffbff6b3f0f",

                                                -   "custom_fields": {

                                                    -   "Price__c": "0"


                                                    },

                                                -   "start_date": "2022-10-13",

                                                -   "end_date": "2023-01-01",

                                                -   "active": false,

                                                -   "state": "expired",

                                                -   "unit_amount": 50


                                                }


                                            ]


                                        }


                                    }


                                ]


                            }


                        }


                    ]


                }


            ]


        }


    ]


}`
