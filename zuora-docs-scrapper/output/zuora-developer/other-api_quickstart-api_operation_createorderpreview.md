---
title: "CreateOrderPreview"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/createOrderPreview/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:40:38.888Z"
---

## Preview an order

Retrieves the preview of the order delta metrics and invoice items of a specified order. Preview for subscriptions and order line items are both supported. This operation is only an order preview and no order is created.

Note that the following limitations apply to this operation:

-   Up to 50 subscriptions are allowed in a single call.
-   Up to 100 order line items are allowed in an order preview.

Security**bearerAuth**

Request

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
| order_date | string <date>The date when the order is signed. All the order actions under this order will use this order date as the contract effective date if the contract effective date field is skipped or its value is left as null. |
| order_number | stringThe order number of the new order. If not provided, system will auto-generate a number for this order. Note: Ensure that the order number does not contain a slash. |
| line_items | Array of objects (LineItemCreateRequest)Order line items are non-subscription-based items created by an order, representing transactional charges such as one-time fees, physical goods, or professional service charges that are not sold as subscription services. By specifying this field, you can launch non-subscription and unified monetization business models in Zuora, in addition to subscription business models. |
| subscriptions | Array of objects (PostSubscriptionOrderRequest)Based on the intended order action, each item should include specific fields. For example, to preview a new subscription for a new account, you must specify the account_data and subscription_plans fields at a minimum. |
| account_data | object (SubscriptionPreviewAccountRequest)Account data that is used for the subscription preview. If you specify this field, do not specify account_id. Note that this operation is only for preview and no subscription is created. |
| number_of_periods | integerSpecifies how many billing periods you want to preview. |
| term_end | booleanIndicates whether to preview the subscription till the end of the current term. |
| metricsrequired | Array of stringsSpecifies the metrics you want to preview. You can preview metrics of billing documents, the order delta metrics, or both.Items Enum: "billing_documents" "delta_metrics" |
| end_date | string <date>End date of the period for which you want to preview the subscription |

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

post/orders/preview

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

Expand allCollapse all

`{

-   "description": "Preview an order request",

-   "account_data": {

    -   "currency": "USD",

    -   "bill_cycle_day": 1,

    -   "sold_to": {

        -   "first_name": "Bella",

        -   "last_name": "Lawrence",

        -   "address": {

            -   "line1": "101 Redwood Shores Parkway",

            -   "city": "Redwood City",

            -   "state": "California",

            -   "country": "USA",

            -   "postal_code": "94065"


            },

        -   "work_phone": "(888) 976-9056",

        -   "work_email": "amy.lawrence@gmail.com"


        }


    },

-   "metrics": [

    -   "delta_metrics"


    ],

-   "subscriptions": [

    -   {

        -   "initial_term": {

            -   "interval_count": 6,

            -   "interval": "month",

            -   "type": "termed"


            },

        -   "renewal_term": {

            -   "type": "termed",

            -   "interval": "month",

            -   "interval_count": 3


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

                        -   "unit_amount": 20,

                        -   "start_date": "2023-01-01",

                        -   "end_date": "2023-06-30"


                        },

                    -   {

                        -   "price_id": "8ad0877b84ade9350184af7ccff43ad2",

                        -   "quantity": 5,

                        -   "unit_amount": 40,

                        -   "start_date": "2023-02-15",

                        -   "end_date": "2023-06-15"


                        }


                    ]


                }


            ]


        }


    ]


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

-   "subscriptions": [

    -   {

        -   "subscription_number": "null",

        -   "actions": [

            -   {

                -   "action_id": "8ad09b21861a27a1018624c3ed4f0eab",

                -   "action": "create_subscription",

                -   "sequence": 0,

                -   "subscription_items": [

                    -   {

                        -   "subscription_item_id": "8ad09b21861a27a1018624c3ee570ece",

                        -   "price_id": "8ad09bce8455cd0c01845e8d3c152199",

                        -   "start_date": "2023-01-01",

                        -   "end_date": "2023-07-01",

                        -   "tcb": {

                            -   "gross_amount": 0,

                            -   "net_amount": 0,

                            -   "currency": "USD"


                            },

                        -   "mrr": {

                            -   "gross_amount": 0,

                            -   "net_amount": 0,

                            -   "currency": "USD"


                            }


                        },

                    -   {

                        -   "subscription_item_id": "8ad09b21861a27a1018624c3ee570ec6",

                        -   "price_id": "8ad0877b843cb3df01843fa3790579ea",

                        -   "start_date": "2023-01-01",

                        -   "end_date": "2023-07-01",

                        -   "tcb": {

                            -   "gross_amount": 74.383561644,

                            -   "net_amount": 74.383561644,

                            -   "currency": "USD"


                            },

                        -   "mrr": {

                            -   "gross_amount": 12.5,

                            -   "net_amount": 12.5,

                            -   "currency": "USD"


                            }


                        },

                    -   {

                        -   "subscription_item_id": "8ad09b21861a27a1018624c3ee570ecc",

                        -   "price_id": "8ad08e018455bb3801845e8ce6c273a0",

                        -   "start_date": "2023-01-01",

                        -   "end_date": "2023-07-01",

                        -   "tcb": {

                            -   "gross_amount": 74.383561644,

                            -   "net_amount": 74.383561644,

                            -   "currency": "USD"


                            },

                        -   "mrr": {

                            -   "gross_amount": 12.5,

                            -   "net_amount": 12.5,

                            -   "currency": "USD"


                            }


                        },

                    -   {

                        -   "subscription_item_id": "8ad09b21861a27a1018624c3ee570ecd",

                        -   "price_id": "8ad08e0184ade9350184af5bf1f46007",

                        -   "start_date": "2023-01-01",

                        -   "end_date": "2023-07-01",

                        -   "tcb": {

                            -   "gross_amount": 74.383561644,

                            -   "net_amount": 74.383561644,

                            -   "currency": "USD"


                            },

                        -   "mrr": {

                            -   "gross_amount": 12.5,

                            -   "net_amount": 12.5,

                            -   "currency": "USD"


                            }


                        },

                    -   {

                        -   "subscription_item_id": "8ad09b21861a27a1018624c3ee570ec8",

                        -   "price_id": "8ad0877b84ade9350184af7ccff43ad2",

                        -   "start_date": "2023-02-15",

                        -   "end_date": "2023-06-15",

                        -   "tcb": {

                            -   "gross_amount": 65.594730145,

                            -   "net_amount": 65.594730145,

                            -   "currency": "USD"


                            },

                        -   "mrr": {

                            -   "gross_amount": 16.666666667,

                            -   "net_amount": 16.666666667,

                            -   "currency": "USD"


                            }


                        },

                    -   {

                        -   "subscription_item_id": "8ad09b21861a27a1018624c3ee570eca",

                        -   "price_id": "8ad0887e850fc589018512981a1b4acb",

                        -   "start_date": "2023-01-01",

                        -   "end_date": "2023-06-30",

                        -   "tcb": {

                            -   "gross_amount": 197.260273973,

                            -   "net_amount": 197.260273973,

                            -   "currency": "USD"


                            },

                        -   "mrr": {

                            -   "gross_amount": 33.333333333,

                            -   "net_amount": 33.333333333,

                            -   "currency": "USD"


                            }


                        },

                    -   {

                        -   "subscription_item_id": "8ad09b21861a27a1018624c3ee570ec9",

                        -   "price_id": "8ad0887e84a430860184abfe77b15964",

                        -   "start_date": "2023-01-01",

                        -   "end_date": "2023-07-01",

                        -   "tcb": {

                            -   "gross_amount": 74.383561644,

                            -   "net_amount": 74.383561644,

                            -   "currency": "USD"


                            },

                        -   "mrr": {

                            -   "gross_amount": 12.5,

                            -   "net_amount": 12.5,

                            -   "currency": "USD"


                            }


                        },

                    -   {

                        -   "subscription_item_id": "8ad09b21861a27a1018624c3ee570ecb",

                        -   "price_id": "8ad08e018455bb3801845e8cc56d723a",

                        -   "start_date": "2023-01-01",

                        -   "end_date": "2023-07-01",

                        -   "tcb": {

                            -   "gross_amount": 74.383561644,

                            -   "net_amount": 74.383561644,

                            -   "currency": "USD"


                            },

                        -   "mrr": {

                            -   "gross_amount": 12.5,

                            -   "net_amount": 12.5,

                            -   "currency": "USD"


                            }


                        },

                    -   {

                        -   "subscription_item_id": "8ad09b21861a27a1018624c3ee570ec7",

                        -   "price_id": "8ad0877b843cb3df01843fa9a8dc3d82",

                        -   "start_date": "2023-01-01",

                        -   "end_date": "2023-01-02",

                        -   "tcb": {

                            -   "gross_amount": 1.5,

                            -   "net_amount": 1.5,

                            -   "currency": "USD"


                            }


                        }


                    ]


                }


            ]


        }


    ]


}`
