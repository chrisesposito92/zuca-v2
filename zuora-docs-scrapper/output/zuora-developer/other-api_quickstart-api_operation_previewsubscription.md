---
title: "PreviewSubscription"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/previewSubscription/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:41:41.977Z"
---

## Preview a subscription

You can preview the billing document metrics or the order delta metrics across a specified time frame.

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

| invoice_owner_account_id | stringIdentifier of the account that owns the invoice associated with this subscription. If you specify this field, do not specify invoice_owner_account_data. |
| --- | --- |
| invoice_owner_account_number | stringIdentifier of the account that owns the invoice associated with this subscription. If you specify this field, do not specify invoice_owner_account_data. |
| invoice_owner_account_data | object (AccountCreateRequest)The information of the new account that owns the invoice associated with this subscription. If you specify this field, do not specify invoice_owner_account_id. |
| account_id | stringIdentifier of the account that owns the subscription. Subscription owner account can be different from the invoice owner account. If you specify this field, do not specify account_data. |
| account_number | stringIdentifier of the account that owns the subscription. Subscription owner account can be different from the invoice owner account. If you specify this field, do not specify account_data. |
| account_data | object (SubscriptionPreviewAccountRequest)Account data that is used for the subscription preview. If you specify this field, do not specify account_id. Note that this operation is only for preview and no subscription is created. |
| auto_renew | booleanIf true, the subscription automatically renews at the end of the current term. |
| subscription_number | stringHuman-readable identifier of the subscription; maybe user-supplied. |
| initial_term | object (Term)Initial term information for the subscription. |
| renewal_term | object (Term)Renewal term information for the subscription |
| start_on | object (StartOn)Container for the contract effective, service activation, and customer acceptance dates of the order action or subscription.If Zuora is configured to require service activation and the service_activation field is not set for a subscription_plans order action or the "Create a subscription" operation, a pending order and/or a pending_activation subscription are created.If Zuora is configured to require customer acceptance and the customer_acceptance field is not set for a subscription_plans order action or the "Create a subscription" operation, a pending order and/or a pending_acceptance subscription are created. At the same time, if the service activation date field is also required and not set, a pending order and/or a pending_activation subscription are created instead.If Zuora is configured to require service activation and the service_activation field is not set for any of the following order actions or the "Update a subscription" operation, a pending order is created. The subscription status is not impacted. Note: This feature is in Limited Availability. If you want to have access to the feature, submit a request at Zuora Global Support.add_subscription_plansupdate_subscription_plansremove_subscription_plansrenewtermsIf Zuora is configured to require customer acceptance and the customer_acceptance field is not set for any of the following order actions or the "Update a subscription" operation, a pending order is created. The subscription status is not impacted. Note: This feature is in Limited Availability. If you want to have access to the feature, submit a request at Zuora Global Support.add_subscription_plansupdate_subscription_plansremove_subscription_plansrenewterms |
| description | stringDescription of the subscription. Often useful for displaying to users. |
| invoice_separately | booleanSeparates a single subscription from other subscriptions and creates an invoice for this subscription. If the value is true, the subscription is billed separately from other subscriptions. If the value is false, the subscription is included with other subscriptions in the account invoice. |
| processing_options | object (ProcessingOptions)Processing options for the invoice or payment. |
| custom_fields | object (CustomFields)Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. |
| subscription_plans | Array of objects (SubscriptionPlanCreateRequest)The plans associated with the new subscription. |
| bill_to_id | string or nullID of the bill-to contact. |
| payment_terms | string or nullThe name of payment term associated with the invoice. |
| billing_document_settings | object (FlexibleBillingDocumentSettings)The billing document settings for the customer. |
| sold_to_id | string or nullID of the sold-to contact. |
| currency | string3-letter ISO 4217 currency code. This field is available only if you have the Multiple Currencies feature enabled. |
| change_reason | stringA brief description of the reason for this change. |
| number_of_periods | integerSpecifies how many billing periods you want to preview. |
| term_end | booleanIndicates whether to preview the subscription till the end of the current term. |
| metrics | Array of stringsSpecifies the metrics you want to preview. You can preivew metrics of billing documents, the order delta metrics, or both.Items Enum: "billing_documents" "delta_metrics" |
| end_date | string <date>End date of the period for which you want to preview the subscription |

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

post/subscriptions/preview

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

Expand allCollapse all

`{

-   "account_id": "8ad09b7d8292b85d0182a4d6f875225a",

-   "subscription_plans": [

    -   {

        -   "plan_id": "8ad09bce82aa84840182afab5e7b04fb"


        }


    ],

-   "metrics": [

    -   "billing_documents"


    ],

-   "end_date": "2022-11-05"


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

-   "billing_documents": [

    -   {

        -   "type": "invoice",

        -   "subtotal": 200,

        -   "target_date": "2023-11-05",

        -   "tax": 0,

        -   "total": 200,

        -   "billing_document_items": [

            -   {

                -   "price_id": "8ad0887182afa5d00182b017730c5fcb",

                -   "processing_type": "subscription_item",

                -   "product_name": "Gold Membership",

                -   "quantity": 1,

                -   "service_start_date": "2022-10-24",

                -   "service_end_date": "2022-10-30",

                -   "subscription_item_description": "Price description",

                -   "subscription_item_name": "Test price name",

                -   "subtotal": 100,

                -   "tax": 0,

                -   "total": 100,

                -   "unit_of_measure": "Bottle"


                },

            -   {

                -   "price_id": "8ad0887182afa5d00182b017730c5fcb",

                -   "processing_type": "subscription_item",

                -   "product_name": "Gold Membership",

                -   "quantity": 1,

                -   "service_start_date": "2022-10-31",

                -   "service_end_date": "2022-11-06",

                -   "subscription_item_description": "Price description",

                -   "subscription_item_name": "Test price name",

                -   "subtotal": 100,

                -   "tax": 0,

                -   "total": 100,

                -   "unit_of_measure": "Bottle"


                }


            ]


        }


    ]


}`
