---
title: "CreateOrder"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/createOrder/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:40:47.221Z"
---

## Create an order

You can use this operation to create subscriptions and make changes to existing subscriptions. You can also use this operation to create order line items.

Note that the following limitations apply to this operation:

-   Up to 50 subscriptions are allowed in a single call.
-   Up to 100 order line items are allowed in an order.
-   Up to 1000 orders are allowed on a subscription.

Security**bearerAuth**

Request

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, order_number, order_date, state, category, description, scheduled_date, scheduled_date_policy, line_items, subscriptionsExample: fields[]=id,created_time |
| --- | --- |
| order.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, order_number, order_date, state, category, description, scheduled_date, scheduled_date_policy, line_items, subscriptionsExample: order.fields[]=id,created_time |
| order_actions.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values type, action_id, sequence, start_on, subscription_plans, renew, terms, cancel, pause, resume, orderExample: order_actions.fields[]=id,created_time |
| subscriptions.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, subscription_number, state, account_id, invoice_owner_account_id, auto_renew, version, initial_term, current_term, renewal_term, start_date, end_date, description, contract_effective, service_activation, customer_acceptance, invoice_separately, latest_version, payment_terms, billing_document_settings, bill_to_id, sold_to_id, contracted_mrr, currency, cancel_reason, last_booking_date, actionsExample: subscriptions.fields[]=id,created_time |
| line_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, total, subtotal, quantity_fulfilled, quantity_pending_fulfillment, unit_of_measure, accounting_code, adjustment_liability_account, unit_amount, target_date, billing_rule, contract_asset_account, contract_liability_account, description, discount_total, revenue, discount_unit_amount, discount_percent, category, name, item_number, type, list_price, list_unit_price, original_order_date, original_order_id, original_order_line_item_id, original_order_line_item_number, original_order_number, product_code, price_id, purchase_order_number, quantity, quantity_available_for_return, related_subscription_number, requires_fulfillment, sold_to_id, original_sold_to_id, tax_code, tax_inclusive, end_date, start_date, unbilled_receivables_account, state, order_idExample: line_items.fields[]=id,created_time |
| subscription_plans.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, name, plan_id, subscription_id, product_id, subscription_plan_number, subscription_itemsExample: subscription_plans.fields[]=id,created_time |
| subscription_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, start_date, end_date, charge_model, charge_type, tiers, subscription_item_number, name, description, charged_through_date, recurring, price_id, start_event, tax_code, tax_inclusive, unit_of_measure, quantity, price_base_interval, overage, subscription_plan_id, tiers_mode, processed_through_date, active, state, unit_amount, amount, discount_amount, discount_percent, price_change_percentage, price_change_optionExample: subscription_items.fields[]=id,created_time |
| invoice_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, booking_reference, applied_to_item_id, price_id, discount_item, deferred_revenue_account, description, invoice_id, sku, name, purchase_order_number, quantity, recognized_revenue_account, remaining_balance, revenue_recognition_rule_name, accounting_code, service_end, service_start, accounts_receivable_account, subscription_id, subscription_item_id, tax, tax_code, tax_inclusive, unit_amount, unit_of_measure, document_item_dateExample: invoice_items.fields[]=id,created_time |
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

| category | stringCategory of the order to indicate a product sale or return. Default value is sale.Enum: "sale" "return" |
| --- | --- |
| custom_fields | object (CustomFields)Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. |
| description | stringAn arbitrary string attached to the object. Often useful for displaying to users. |
| account_number | stringHuman-readable identifier of the account. It can be user-supplied. |
| account_id | stringIdentifier of the account. |
| account_data | object (AccountCreateRequest)The information of the new account that owns the subscription. The subscription owner account can be different from the invoice owner account. If you specify this field, do not specify account_id. |
| order_date | string <date>The date when the order is signed. All the order actions under this order will use this order date as the contract effective date if the contract effective date field is skipped or its value is left as null. |
| order_number | stringThe order number of the new order. If not provided, system will auto-generate a number for this order. Note: Ensure that the order number does not contain a slash. |
| line_items | Array of objects (LineItemCreateRequest)Order line items are non-subscription-based items created by an order, representing transactional charges such as one-time fees, physical goods, or professional service charges that are not sold as subscription services. By specifying this field, you can launch non-subscription and unified monetization business models in Zuora, in addition to subscription business models. |
| processing_options | object (OrdersProcessingOption)Processing options for the invoice or payment. |
| subscriptions | Array of objects (PostSubscriptionOrderRequest)Based on the intended order action, each item should include specific fields. For example, to create a new subscription for a new account, you must specify the account_data and subscription_plans fields at a minimum. |
| scheduling_options | object (OrdersSchedulingOptions) |
| state | stringThe status of the order.Enum: "pending" "complete" "draft" "canceled" "scheduled" "executing" "failed" |

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

post/orders

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

Expand allCollapse all

`{

-   "description": "Create an new order with a new account",

-   "account_data": {

    -   "name": "Zuora's Order Account",

    -   "currency": "USD",

    -   "bill_to": {

        -   "first_name": "Amy",

        -   "last_name": "Lawrence",

        -   "address": {

            -   "line1": "101 Redwood Shores Parkway",

            -   "city": "Redwood City",

            -   "state": "California",

            -   "country": "USA",

            -   "postal_code": "94064"


            },

        -   "work_phone": "(888) 976-9056",

        -   "work_email": "amy.lawrence@zuora.com"


        },

    -   "payment_method": {

        -   "type": "card",

        -   "billing_details": {

            -   "name": "John Doe"


            },

        -   "card": {

            -   "card_number": "41111111111",

            -   "brand": "visa",

            -   "expiry_month": 11,

            -   "expiry_year": 2023,

            -   "security_code": "123"


            }


        }


    },

-   "order_date": "2023-01-01",

-   "subscriptions": [

    -   {

        -   "initial_term": {

            -   "interval_count": 1,

            -   "interval": "year",

            -   "type": "termed"


            },

        -   "renewal_term": {

            -   "type": "evergreen"


            },

        -   "start_on": {

            -   "contract_effective": "2023-01-01"


            },

        -   "subscription_plans": [

            -   {

                -   "plan_id": "8ad09fc2843cc2fb01843f4504b761af",

                -   "prices": [

                    -   {

                        -   "price_id": "8ad0887e850fc589018512981a1b4acb",

                        -   "quantity": 20,

                        -   "start_date": "2023-01-01",

                        -   "end_date": "2023-12-01"


                        },

                    -   {

                        -   "price_id": "8ad0877b84ade9350184af7ccff43ad2",

                        -   "quantity": 5,

                        -   "start_date": "2023-01-15",

                        -   "end_date": "2023-06-15"


                        }


                    ]


                }


            ]


        }


    ]


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

-   "id": "8ad0934e861a27bd018624b93d2f11d9",

-   "order_number": "O-00021762",

-   "order_date": "2023-01-01",

-   "state": "pending",

-   "created_time": "2023-02-05T19:16:04-08:00",

-   "created_by_id": "8ad09bce80507dab0180688bdabc20cb",

-   "updated_time": "2023-02-05T19:16:05-08:00",

-   "updated_by_id": "8ad09bce80507dab0180688bdabc20cb",

-   "description": "Create a new subscription with a new account",

-   "account_id": "8ad0934e861a27bd018624b93ca211cb",

-   "line_items": [ ],

-   "subscriptions": [

    -   {

        -   "id": "8ad0934e861a27bd018624b93e6211f6",

        -   "subscription_number": "A-S00013739",

        -   "state": "pending_activation",

        -   "account_id": "8ad0934e861a27bd018624b93ca211cb",

        -   "invoice_owner_account_id": "8ad0934e861a27bd018624b93ca211cb",

        -   "auto_renew": false,

        -   "version": 1,

        -   "initial_term": {

            -   "type": "termed",

            -   "interval_count": 1,

            -   "interval": "year"


            },

        -   "current_term": {

            -   "type": "termed",

            -   "start_date": "2023-01-01",

            -   "end_date": "2024-01-01",

            -   "interval_count": 1,

            -   "interval": "year"


            },

        -   "renewal_term": {

            -   "type": "evergreen"


            },

        -   "start_date": "2023-01-01",

        -   "end_date": "2024-01-01",

        -   "contract_effective": "2023-01-01",

        -   "invoice_separately": false,

        -   "latest_version": true,

        -   "order_number": "O-00021762",

        -   "updated_by_id": "8ad09bce80507dab0180688bdabc20cb",

        -   "created_by_id": "8ad09bce80507dab0180688bdabc20cb",

        -   "created_time": "2023-02-05T19:16:05-08:00",

        -   "updated_time": "2023-02-05T19:16:05-08:00",

        -   "actions": [

            -   {

                -   "type": "create_subscription",

                -   "action_id": "8ad0934e861a27bd018624b93d4a11df",

                -   "sequence": 0,

                -   "start_on": {

                    -   "contract_effective": "2023-01-01"


                    },

                -   "subscription_plans": {

                    -   "next_page": null,

                    -   "data": [

                        -   {

                            -   "id": "8ad0934e861a27bd018624b93ee0120b",

                            -   "plan_id": "8ad09fc2843cc2fb01843f4504b761af",

                            -   "subscription_items": {

                                -   "next_page": null,

                                -   "data": [

                                    -   {

                                        -   "id": "8ad0934e861a27bd018624b93ee01214",

                                        -   "subscription_item_number": "C-00049408",

                                        -   "name": "Recurring Yearly Plan 2",

                                        -   "description": "Subscription under yearly plan",

                                        -   "recurring": {

                                            -   "on": "subscription_start_day",

                                            -   "alignment_behavior": "none",

                                            -   "interval": "year",

                                            -   "interval_count": 1,

                                            -   "timing": "in_advance",

                                            -   "usage": false,

                                            -   "duration_interval": "year",

                                            -   "duration_interval_count": 1,

                                            -   "recurring_on": "subscription_start_day"


                                            },

                                        -   "price_id": "8ad09bce8455cd0c01845e8d3c152199",

                                        -   "start_event": "contract_effective",

                                        -   "tax_inclusive": false,

                                        -   "unit_of_measure": "License",

                                        -   "quantity": 1,

                                        -   "price_base_interval": "billing_period",

                                        -   "created_time": "2023-02-05T19:16:05-08:00",

                                        -   "charge_model": "per_unit",

                                        -   "charge_type": "recurring",

                                        -   "created_by_id": "8ad09bce80507dab0180688bdabc20cb",

                                        -   "updated_by_id": "8ad09bce80507dab0180688bdabc20cb",

                                        -   "updated_time": "2023-02-05T19:16:05-08:00",

                                        -   "subscription_plan_id": "8ad0934e861a27bd018624b93ee0120b",

                                        -   "custom_fields": {

                                            -   "Price__c": "0"


                                            },

                                        -   "start_date": "2023-01-01",

                                        -   "end_date": "2024-01-01",

                                        -   "active": true,

                                        -   "state": "active",

                                        -   "unit_amount": 0


                                        },

                                    -   {

                                        -   "id": "8ad0934e861a27bd018624b93ee01213",

                                        -   "subscription_item_number": "C-00049406",

                                        -   "name": "Recurring Yearly Plan 2",

                                        -   "description": "Subscription under yearly plan",

                                        -   "recurring": {

                                            -   "on": "subscription_start_day",

                                            -   "alignment_behavior": "none",

                                            -   "interval": "year",

                                            -   "interval_count": 1,

                                            -   "timing": "in_advance",

                                            -   "usage": false,

                                            -   "duration_interval": "year",

                                            -   "duration_interval_count": 1,

                                            -   "recurring_on": "subscription_start_day"


                                            },

                                        -   "price_id": "8ad08e0184ade9350184af5bf1f46007",

                                        -   "start_event": "contract_effective",

                                        -   "tax_inclusive": false,

                                        -   "unit_of_measure": "License",

                                        -   "quantity": 1,

                                        -   "price_base_interval": "billing_period",

                                        -   "created_time": "2023-02-05T19:16:05-08:00",

                                        -   "charge_model": "per_unit",

                                        -   "charge_type": "recurring",

                                        -   "created_by_id": "8ad09bce80507dab0180688bdabc20cb",

                                        -   "updated_by_id": "8ad09bce80507dab0180688bdabc20cb",

                                        -   "updated_time": "2023-02-05T19:16:05-08:00",

                                        -   "subscription_plan_id": "8ad0934e861a27bd018624b93ee0120b",

                                        -   "custom_fields": {

                                            -   "Price__c": "0"


                                            },

                                        -   "start_date": "2023-01-01",

                                        -   "end_date": "2024-01-01",

                                        -   "active": true,

                                        -   "state": "active",

                                        -   "unit_amount": 150


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


}`
