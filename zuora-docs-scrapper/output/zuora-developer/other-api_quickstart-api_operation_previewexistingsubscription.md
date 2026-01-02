---
title: "PreviewExistingSubscription"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/previewExistingSubscription/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:41:41.755Z"
---

## Preview an existing subscription

You can preview the billing document metrics or the order delta metrics across a specified time frame.

Security**bearerAuth**

Request

##### path Parameters

| subscription_idrequired | stringIdentifier for the subscription, either subscription_number or subscription_id |
| --- | --- |

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

| custom_fields | object (CustomFields)Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. |
| --- | --- |
| description | stringDescription of the subscription. |
| account_id | stringIdentifier of the account that owns the subscription. Subscription owner account can be different from the invoice owner account. |
| account_number | stringIdentifier of the account that owns the subscription. Subscription owner account can be different from the invoice owner account. |
| account_data | object (SubscriptionPreviewAccountRequest)Account data that is used for the subscription preview. If you specify this field, do not specify account_id. Note that this operation is only for preview and no subscription is created. |
| number_of_periods | integerSpecifies how many billing periods you want to preview. |
| term_end | booleanIndicates whether to preview the subscription till the end of the current term. |
| metrics | Array of stringsSpecifies the metrics you want to preview. You can preview metrics of billing documents, the order delta metrics, or both.Items Enum: "billing_documents" "delta_metrics" |
| end_date | string <date>End date of the period for which you want to preview the subscription |
| add_subscription_plans | Array of objects (SubscriptionAddPlanPatchRequest)Specify this field if you want to add one or multiple subscription plans to this subscription. |
| replace_subscription_plans | Array of objects (SubscriptionReplacePlanPatchRequest)Specify this field if you want to replace one or multiple subscription plans to this subscription.Note: This field is currently not supported if you have Billing - Revenue Integration enabled. When Billing - Revenue Integration is enabled, the replace subscription plan type of order action will no longer be applicable in Zuora Billing. |
| update_subscription_plans | Array of objects (SubscriptionUpdatePlanPatchRequest) |
| remove_subscription_plans | Array of objects (SubscriptionRemovePlanPatchRequest)Specify this field if you want to remove one or multiple subscription plans from this subscription. |

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

post/subscriptions/{subscription\_id}/preview

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

Expand allCollapse all

`{

-   "account_id": "8ad08d29857fc0ec0185829faf0507d7",

-   "description": "lorem ipsum dolor sit amet",

-   "number_of_periods": 2,

-   "term_end": true,

-   "end_date": "2023-08-20",

-   "custom_fields": {

    -   "TestSubscriptionRequired__c": "abc"


    },

-   "add_subscription_plans": [

    -   {

        -   "subscription_plan": {

            -   "plan_id": "8ad09fc2843cc2fb01843f449ab45485",

            -   "prices": [

                -   {

                    -   "price_id": "8ad095dd843cc2f601843fa041862032",

                    -   "description": "abc",

                    -   "quantity": 25,

                    -   "discount_percent": 15,

                    -   "recurring": {

                        -   "recurring_on": "account_cycle_date"


                        }


                    }


                ]


            }


        }


    ],

-   "update_subscription_plans": [

    -   {

        -   "subscription_plan": {

            -   "subscription_plan_id": "8ad08dc985c965370185cb0af2f77fb5",

            -   "subscription_items": [

                -   {

                    -   "id": "8ad08dc985c965370185cb0af2f77fb6",

                    -   "quantity": 1,

                    -   "unit_amount": 10,

                    -   "start_date": "2023-01-30"


                    }


                ]


            },

        -   "start_on": {

            -   "contract_effective": "2023-01-30",

            -   "service_activation": "2023-01-30",

            -   "customer_acceptance": "2023-01-30"


            }


        }


    ],

-   "metrics": [

    -   "billing_documents",

    -   "delta_metrics"


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

-   "actions": [

    -   {

        -   "action_id": "8ad08dc986023f76018603e36b4265c3",

        -   "subscription_number": "A-S00013732",

        -   "action": "update_subscription_plan",

        -   "sequence": 0,

        -   "subscription_items": [

            -   {

                -   "subscription_item_id": "8ad08dc986023f76018603e36ccc65e1",

                -   "price_id": "8ad095dd843cc2f601843fa041862032",

                -   "start_date": "2023-01-30",

                -   "end_date": "2024-01-01",

                -   "tcb": {

                    -   "gross_amount": 2766.129032258,

                    -   "net_amount": 2766.129032258,

                    -   "currency": "USD"


                    },

                -   "mrr": {

                    -   "gross_amount": 250,

                    -   "net_amount": 250,

                    -   "currency": "USD"


                    }


                },

            -   {

                -   "subscription_item_id": "8ad08dc986023f76018603e36ccc65e2",

                -   "price_id": "8ad09bce843cc2ed01843faa4b0279db",

                -   "start_date": "2023-01-30",

                -   "end_date": "2023-01-31",

                -   "tcb": {

                    -   "gross_amount": 1,

                    -   "net_amount": 1,

                    -   "currency": "USD"


                    }


                }


            ]


        },

    -   {

        -   "action_id": "8ad08dc986023f76018603e36b4265c4",

        -   "subscription_number": "A-S00013732",

        -   "action": "update_subscription_plan",

        -   "sequence": 1,

        -   "subscription_items": [

            -   {

                -   "subscription_item_id": "8ad08dc986023f76018603e36c5465d4",

                -   "price_id": "8ad0991583ac6e130183ae83026637a7",

                -   "start_date": "2023-01-30",

                -   "end_date": "2024-01-01",

                -   "tcb": {

                    -   "gross_amount": -22129.032258065,

                    -   "net_amount": -22129.032258065,

                    -   "currency": "USD"


                    },

                -   "mrr": {

                    -   "gross_amount": -2000,

                    -   "net_amount": -2000,

                    -   "currency": "USD"


                    }


                },

            -   {

                -   "subscription_item_id": "8ad08dc986023f76018603e36c9a65d8",

                -   "price_id": "8ad0991583ac6e130183ae83026637a7",

                -   "start_date": "2023-01-30",

                -   "end_date": "2024-01-01",

                -   "tcb": {

                    -   "gross_amount": 110.64516129,

                    -   "net_amount": 110.64516129,

                    -   "currency": "USD"


                    },

                -   "mrr": {

                    -   "gross_amount": 10,

                    -   "net_amount": 10,

                    -   "currency": "USD"


                    }


                }


            ]


        }


    ],

-   "billing_documents": [

    -   {

        -   "type": "invoice",

        -   "subtotal": 537.78,

        -   "target_date": "2023-03-01",

        -   "tax": 0,

        -   "total": 537.78,

        -   "billing_document_items": [

            -   {

                -   "price_id": "8ad095dd843cc2f601843fa041862032",

                -   "processing_type": "subscription_item",

                -   "product_name": "Music Stream Plus",

                -   "quantity": 25,

                -   "service_start_date": "2023-01-30",

                -   "service_end_date": "2023-01-31",

                -   "subscription_item_description": "abc",

                -   "subscription_item_name": "Recurring Monthly Plan",

                -   "subtotal": 16.13,

                -   "tax": 0,

                -   "total": 16.13,

                -   "unit_of_measure": "License"


                },

            -   {

                -   "price_id": "8ad095dd843cc2f601843fa041862032",

                -   "processing_type": "subscription_item",

                -   "product_name": "Music Stream Plus",

                -   "quantity": 25,

                -   "service_start_date": "2023-02-01",

                -   "service_end_date": "2023-02-28",

                -   "subscription_item_description": "abc",

                -   "subscription_item_name": "Recurring Monthly Plan",

                -   "subtotal": 250,

                -   "tax": 0,

                -   "total": 250,

                -   "unit_of_measure": "License"


                }


            ]


        },

    -   {

        -   "type": "credit_memo",

        -   "subtotal": 129.03,

        -   "target_date": "2023-03-01",

        -   "tax": 0,

        -   "total": 129.03,

        -   "billing_document_items": [

            -   {

                -   "price_id": "8ad0991583ac6e130183ae83026637a7",

                -   "processing_type": "subscription_item",

                -   "product_name": "Sub Testing",

                -   "quantity": 10,

                -   "service_start_date": "2023-01-30",

                -   "service_end_date": "2023-01-31",

                -   "subscription_item_name": "Recurring - Unit Amount Upgrade",

                -   "subscription_item_number": "C-00049360",

                -   "subtotal": 129.03,

                -   "tax": 0,

                -   "total": 129.03,

                -   "unit_of_measure": "Each"


                }


            ]


        }


    ]


}`
