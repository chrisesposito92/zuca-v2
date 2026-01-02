---
title: "UncancelSubscription"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/uncancelSubscription/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:41:42.836Z"
---

## Uncancel a subscriptionDeprecated

Uncancel a cancelled subscription.

Security**bearerAuth**

Request

##### path Parameters

| subscription_idrequired | stringIdentifier for the subscription, either subscription_number or subscription_id |
| --- | --- |

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, subscription_number, state, account_id, invoice_owner_account_id, auto_renew, version, initial_term, current_term, renewal_term, start_date, end_date, description, contract_effective, service_activation, customer_acceptance, invoice_separately, latest_version, payment_terms, billing_document_settings, bill_to_id, sold_to_id, contracted_mrr, currency, cancel_reason, last_booking_date, order_numberExample: fields[]=id,created_time |
| --- | --- |
| subscription.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, subscription_number, state, account_id, invoice_owner_account_id, auto_renew, version, initial_term, current_term, renewal_term, start_date, end_date, description, contract_effective, service_activation, customer_acceptance, invoice_separately, latest_version, payment_terms, billing_document_settings, bill_to_id, sold_to_id, contracted_mrr, currency, cancel_reason, last_booking_date, order_numberExample: subscription.fields[]=id,created_time |
| subscription_plans.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, name, plan_id, subscription_id, product_id, subscription_plan_numberExample: subscription_plans.fields[]=id,created_time |
| subscription_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, start_date, end_date, charge_model, charge_type, tiers, subscription_item_number, name, description, charged_through_date, recurring, price_id, start_event, tax_code, tax_inclusive, unit_of_measure, quantity, price_base_interval, overage, subscription_plan_id, tiers_mode, processed_through_date, active, state, unit_amount, amount, discount_amount, discount_percent, price_change_percentage, price_change_optionExample: subscription_items.fields[]=id,created_time |
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

| description | stringDescription of the subscription. |
| --- | --- |
| custom_fields | object (CustomFields)Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. |
| terms | object (SubscriptionTermPatchRequest)Term information of the subscription. |
| start_on | object (StartOn)Container for the contract effective, service activation, and customer acceptance dates of the order action or subscription.If Zuora is configured to require service activation and the service_activation field is not set for a subscription_plans order action or the "Create a subscription" operation, a pending order and/or a pending_activation subscription are created.If Zuora is configured to require customer acceptance and the customer_acceptance field is not set for a subscription_plans order action or the "Create a subscription" operation, a pending order and/or a pending_acceptance subscription are created. At the same time, if the service activation date field is also required and not set, a pending order and/or a pending_activation subscription are created instead.If Zuora is configured to require service activation and the service_activation field is not set for any of the following order actions or the "Update a subscription" operation, a pending order is created. The subscription status is not impacted. Note: This feature is in Limited Availability. If you want to have access to the feature, submit a request at Zuora Global Support.add_subscription_plansupdate_subscription_plansremove_subscription_plansrenewtermsIf Zuora is configured to require customer acceptance and the customer_acceptance field is not set for any of the following order actions or the "Update a subscription" operation, a pending order is created. The subscription status is not impacted. Note: This feature is in Limited Availability. If you want to have access to the feature, submit a request at Zuora Global Support.add_subscription_plansupdate_subscription_plansremove_subscription_plansrenewterms |
| invoice_owner_account_id | stringIdentifier of the account that owns the invoice associated with this subscription. |
| invoice_owner_account_number | stringIdentifier of the account that owns the invoice associated with this subscription. |
| account_id | stringIdentifier of the account that owns the subscription. Subscription owner account can be different from the invoice owner account. |
| account_number | stringIdentifier of the account that owns the subscription. Subscription owner account can be different from the invoice owner account. |
| add_subscription_plans | Array of objects (SubscriptionAddPlanPatchRequest)Specify this field if you want to add one or multiple subscription plans to this subscription. |
| remove_subscription_plans | Array of objects (SubscriptionRemovePlanPatchRequest)Specify this field if you want to remove one or multiple subscription plans from this subscription. |
| replace_subscription_plans | Array of objects (SubscriptionReplacePlanPatchRequest)Specify this field if you want to replace one or multiple subscription plans to this subscription.Note: This field is currently not supported if you have Billing - Revenue Integration enabled. When Billing - Revenue Integration is enabled, the replace subscription plan type of order action will no longer be applicable in Zuora Billing. |
| update_subscription_plans | Array of objects (SubscriptionUpdatePlanPatchRequest) |
| renew | object (SubscriptionRenewPatchRequest)Specify this field when renewing a subscription. |
| renewals | Array of objects (SubscriptionRenewPatchRequest)Specify this field when renewing a subscription. |
| cancel | object (CancelSubscriptionRequest) |
| pause | object or null (PauseSubscriptionRequest) |
| resume | object (ResumeSubscriptionRequest)Behavior of the paused subscription when it resumes. |
| bill_to_id | string or nullID of the bill-to contact. |
| payment_terms | string or nullThe name of payment term associated with the invoice. |
| billing_document_settings | object (FlexibleBillingDocumentSettings)The billing document settings for the customer. |
| sold_to_id | string or nullID of the sold-to contact. |
| invoice_separately | booleanSeparates a single subscription from other subscriptions and creates an invoice for this subscription. If the value is true, the subscription is billed separately from other subscriptions. If the value is false, the subscription is included with other subscriptions in the account invoice. |
| change_reason | stringA brief description of the reason for this change. |

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

post/subscriptions/{subscription\_id}/keep

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

Expand allCollapse all

`{

-   "description": "string",

-   "custom_fields": {

    -   "property1": "string",

    -   "property2": "string"


    },

-   "terms": {

    -   "current_term": {

        -   "interval_count": 1,

        -   "interval": "day",

        -   "start_date": "2020-01-01",

        -   "type": "evergreen",

        -   "end_date": "2023-01-01"


        },

    -   "renewal_term": {

        -   "interval_count": 1,

        -   "interval": "day",

        -   "start_date": "2020-01-01",

        -   "type": "evergreen",

        -   "end_date": "2023-01-01"


        },

    -   "auto_renew": true,

    -   "start_on": {

        -   "contract_effective": "2023-06-01",

        -   "service_activation": "2023-06-01",

        -   "customer_acceptance": "2023-06-01"


        },

    -   "bill_to_id": "2c92c0f86a8dd422016a9e7a70116b0d",

    -   "payment_terms": "string",

    -   "billing_document_settings": {

        -   "template_id": "2c92c08b6a8c978f016a9e0084622b62",

        -   "sequence_set_id": "string"


        },

    -   "sold_to_id": "2c92c0f86a8dd422016a9e7a70116b0d",

    -   "change_reason": "string"


    },

-   "start_on": {

    -   "contract_effective": "2023-06-01",

    -   "service_activation": "2023-06-01",

    -   "customer_acceptance": "2023-06-01"


    },

-   "invoice_owner_account_id": "string",

-   "invoice_owner_account_number": "string",

-   "account_id": "string",

-   "account_number": "string",

-   "add_subscription_plans": [

    -   {

        -   "subscription_plan": {

            -   "plan_id": "string",

            -   "plan_number": "string",

            -   "prices": [

                -   {

                    -   "price_id": "string",

                    -   "subscription_item_number": "string",

                    -   "description": "string",

                    -   "recurring": {

                        -   "recurring_on": "_1",

                        -   "on": "_1",

                        -   "usage": true,

                        -   "interval": "month",

                        -   "interval_count": 0,

                        -   "alignment_behavior": "subscription_start",

                        -   "timing": "in_advance",

                        -   "duration_interval": "day",

                        -   "duration_interval_count": 0,

                        -   "rating_group": "billing_period"


                        },

                    -   "start_event": "contract_effective",

                    -   "start_date": "2019-08-24",

                    -   "end_date": "2019-08-24",

                    -   "tiers_mode": "graduated",

                    -   "tiers": [

                        -   {

                            -   "up_to": null,

                            -   "amount": null,

                            -   "unit_amount": null


                            }


                        ],

                    -   "quantity": 0,

                    -   "amount": 0,

                    -   "unit_amount": 0,

                    -   "discount_amount": 0,

                    -   "discount_percent": 0,

                    -   "price_base_interval": "month",

                    -   "overage": {

                        -   "interval_count": 0,

                        -   "type": "rolling_window",

                        -   "included_units": 0,

                        -   "credit_unused_units": true,

                        -   "apply_at_end_of_smoothing_period": true


                        },

                    -   "unique_token": "string",

                    -   "custom_fields": {

                        -   "property1": "string",

                        -   "property2": "string"


                        },

                    -   "apply_discount_to": [

                        -   "one_time"


                        ],

                    -   "discount_level": "account",

                    -   "custom_field_per_unit_rate": "string",

                    -   "custom_field_total_amount": "string",

                    -   "price_change_percentage": 0,

                    -   "price_change_option": "latest_catalog_pricing",

                    -   "prepayment": {

                        -   "quantity": 0,

                        -   "validity_period": "subscription_term"


                        },

                    -   "drawdown": {

                        -   "conversion_rate": 0


                        }


                    }


                ],

            -   "unique_token": "string",

            -   "custom_fields": {

                -   "property1": "string",

                -   "property2": "string"


                }


            },

        -   "start_on": {

            -   "contract_effective": "2023-06-01",

            -   "service_activation": "2023-06-01",

            -   "customer_acceptance": "2023-06-01"


            },

        -   "change_reason": "string"


        }


    ],

-   "remove_subscription_plans": [

    -   {

        -   "subscription_plan_id": "string",

        -   "start_on": {

            -   "contract_effective": "2023-06-01",

            -   "service_activation": "2023-06-01",

            -   "customer_acceptance": "2023-06-01"


            },

        -   "unique_token": "string",

        -   "change_reason": "string"


        }


    ],

-   "replace_subscription_plans": [

    -   {

        -   "subscription_plan_id": "string",

        -   "previous_plan_id": "string",

        -   "replace_at": "now",

        -   "replacement_type": "upgrade",

        -   "subscription_plan": {

            -   "plan_id": "string",

            -   "plan_number": "string",

            -   "prices": [

                -   {

                    -   "price_id": "string",

                    -   "subscription_item_number": "string",

                    -   "description": "string",

                    -   "recurring": {

                        -   "recurring_on": "_1",

                        -   "on": "_1",

                        -   "usage": true,

                        -   "interval": "month",

                        -   "interval_count": 0,

                        -   "alignment_behavior": "subscription_start",

                        -   "timing": "in_advance",

                        -   "duration_interval": "day",

                        -   "duration_interval_count": 0,

                        -   "rating_group": "billing_period"


                        },

                    -   "start_event": "contract_effective",

                    -   "start_date": "2019-08-24",

                    -   "end_date": "2019-08-24",

                    -   "tiers_mode": "graduated",

                    -   "tiers": [

                        -   {

                            -   "up_to": null,

                            -   "amount": null,

                            -   "unit_amount": null


                            }


                        ],

                    -   "quantity": 0,

                    -   "amount": 0,

                    -   "unit_amount": 0,

                    -   "discount_amount": 0,

                    -   "discount_percent": 0,

                    -   "price_base_interval": "month",

                    -   "overage": {

                        -   "interval_count": 0,

                        -   "type": "rolling_window",

                        -   "included_units": 0,

                        -   "credit_unused_units": true,

                        -   "apply_at_end_of_smoothing_period": true


                        },

                    -   "unique_token": "string",

                    -   "custom_fields": {

                        -   "property1": "string",

                        -   "property2": "string"


                        },

                    -   "apply_discount_to": [

                        -   "one_time"


                        ],

                    -   "discount_level": "account",

                    -   "custom_field_per_unit_rate": "string",

                    -   "custom_field_total_amount": "string",

                    -   "price_change_percentage": 0,

                    -   "price_change_option": "latest_catalog_pricing",

                    -   "prepayment": {

                        -   "quantity": 0,

                        -   "validity_period": "subscription_term"


                        },

                    -   "drawdown": {

                        -   "conversion_rate": 0


                        }


                    }


                ],

            -   "unique_token": "string",

            -   "custom_fields": {

                -   "property1": "string",

                -   "property2": "string"


                }


            },

        -   "start_on": {

            -   "contract_effective": "2023-06-01",

            -   "service_activation": "2023-06-01",

            -   "customer_acceptance": "2023-06-01"


            },

        -   "change_reason": "string"


        }


    ],

-   "update_subscription_plans": [

    -   {

        -   "subscription_plan": {

            -   "custom_fields": {

                -   "property1": "string",

                -   "property2": "string"


                },

            -   "subscription_plan_id": "string",

            -   "unique_token": "string",

            -   "subscription_items": [

                -   {

                    -   "id": "string",

                    -   "recurring": {

                        -   "recurring_on": "_1",

                        -   "on": "_1",

                        -   "usage": true,

                        -   "interval": "month",

                        -   "interval_count": 0,

                        -   "alignment_behavior": "subscription_start",

                        -   "timing": "in_advance",

                        -   "duration_interval": "day",

                        -   "duration_interval_count": 0,

                        -   "rating_group": "billing_period"


                        },

                    -   "subscription_item_number": "string",

                    -   "custom_fields": {

                        -   "property1": "string",

                        -   "property2": "string"


                        },

                    -   "description": "string",

                    -   "start_date": "2019-08-24",

                    -   "end_date": "2019-08-24",

                    -   "apply_discount_to": [

                        -   "one_time"


                        ],

                    -   "discount_level": "account",

                    -   "start_event": "contract_effective",

                    -   "discount_percent": 0,

                    -   "quantity": 0,

                    -   "amount": 0,

                    -   "unit_amount": 0,

                    -   "tiers": [

                        -   {

                            -   "up_to": null,

                            -   "amount": null,

                            -   "unit_amount": null


                            }


                        ],

                    -   "overage": {

                        -   "interval_count": 0,

                        -   "type": "rolling_window",

                        -   "included_units": 0,

                        -   "credit_unused_units": true,

                        -   "apply_at_end_of_smoothing_period": true


                        },

                    -   "unique_token": "string",

                    -   "prepayment": {

                        -   "quantity": 0,

                        -   "validity_period": "subscription_term"


                        },

                    -   "custom_field_per_unit_rate": "string",

                    -   "custom_field_total_amount": "string"


                    }


                ]


            },

        -   "start_on": {

            -   "contract_effective": "2023-06-01",

            -   "service_activation": "2023-06-01",

            -   "customer_acceptance": "2023-06-01"


            },

        -   "start_date": "2022-01-01",

        -   "change_reason": "string"


        }


    ],

-   "renew": {

    -   "start_on": {

        -   "contract_effective": "2023-06-01",

        -   "service_activation": "2023-06-01",

        -   "customer_acceptance": "2023-06-01"


        },

    -   "change_reason": "string"


    },

-   "renewals": [

    -   {

        -   "start_on": {

            -   "contract_effective": "2023-06-01",

            -   "service_activation": "2023-06-01",

            -   "customer_acceptance": "2023-06-01"


            },

        -   "change_reason": "string"


        }


    ],

-   "cancel": {

    -   "cancel_date": "string",

    -   "cancel_at": "invoice_period_end",

    -   "processing_options": {

        -   "document_date": "2019-08-24",

        -   "target_date": "2019-08-24",

        -   "collection_method": "collect_payment",

        -   "payment_method_id": "string",

        -   "draft_invoice": true,

        -   "payment_gateway_id": "string",

        -   "refund_reason_code": "string"


        },

    -   "refund_amount": 0,

    -   "write_off": false,

    -   "write_off_behavior": {

        -   "on_account_accounting_code": "string",

        -   "deferred_revenue_accounting_code": "string",

        -   "recognized_revenue_accounting_code": "string",

        -   "revenue_recognition_rule_name": "string"


        },

    -   "custom_fields": {

        -   "property1": "string",

        -   "property2": "string"


        },

    -   "change_reason": "string"


    },

-   "pause": {

    -   "pause_date": "string",

    -   "pause_at": "invoice_period_end",

    -   "pause_interval_count": 0,

    -   "pause_interval": "month",

    -   "change_reason": "string",

    -   "resume_behavior": {

        -   "extend_term": false,

        -   "resume_date": "string",

        -   "resume_at": "pause_date",

        -   "change_reason": "string",

        -   "custom_fields": {

            -   "property1": "string",

            -   "property2": "string"


            }


        },

    -   "custom_fields": {

        -   "property1": "string",

        -   "property2": "string"


        }


    },

-   "resume": {

    -   "extend_term": false,

    -   "resume_date": "string",

    -   "resume_at": "pause_date",

    -   "change_reason": "string",

    -   "custom_fields": {

        -   "property1": "string",

        -   "property2": "string"


        }


    },

-   "bill_to_id": "2c92c0f86a8dd422016a9e7a70116b0d",

-   "payment_terms": "string",

-   "billing_document_settings": {

    -   "template_id": "2c92c08b6a8c978f016a9e0084622b62",

    -   "sequence_set_id": "string"


    },

-   "sold_to_id": "2c92c0f86a8dd422016a9e7a70116b0d",

-   "invoice_separately": true,

-   "change_reason": "string"


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

-   "id": "8ad08ccf8437067601843a7af4e64rq3",

-   "custom_fields": {

    -   "field__c": "custom field value"


    },

-   "subscription_number": "A-S0001332401234",

-   "state": "active",

-   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d",

-   "invoice_owner_account_id": "2c92c0f86a8dd422016a9e7a70116b0d",

-   "auto_renew": true,

-   "latest_version": true,

-   "initial_term": {

    -   "interval_count": 1,

    -   "interval": "month",

    -   "type": "termed"


    },

-   "current_term": {

    -   "interval_count": 1,

    -   "interval": "month",

    -   "start_date": "2022-07-01",

    -   "type": "termed",

    -   "end_date": "2022-08-01"


    },

-   "start_date": "2022-07-01",

-   "end_date": "2022-08-01",

-   "description": "Create Subscription",

-   "contract_effective": "2022-07-01",

-   "service_activation": "2022-07-01",

-   "customer_acceptance": "2022-07-01",

-   "invoice_separately": false,

-   "order_number": "O-00020812"


}`
