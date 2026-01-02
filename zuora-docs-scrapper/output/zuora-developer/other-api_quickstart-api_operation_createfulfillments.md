---
title: "CreateFulfillments"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/createFulfillments/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:41:55.011Z"
---

## Create fulfillments

Creates multiple fulfillments.

Security**bearerAuth**

Request

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, state, description, quantity, order_line_item_id, fulfillment_number, revenue, fulfillment_date, tracking_number, carrier, fulfillment_system, location, external_id, type, target_dateExample: fields[]=id,created_time |
| --- | --- |
| fulfillment.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, state, description, quantity, order_line_item_id, fulfillment_number, revenue, fulfillment_date, tracking_number, carrier, fulfillment_system, location, external_id, type, target_dateExample: fulfillment.fields[]=id,created_time |
| fulfillment_item.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, fulfillment_id, description, fulfillment_item_numberExample: fulfillment_item.fields[]=id,created_time |
| credit_memo_item.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, applied_to_item_id, price_id, discount_item, deferred_revenue_account, description, credit_memo_id, sku, name, purchase_order_number, quantity, recognized_revenue_account, remaining_balance, revenue_recognition_rule_name, service_end, service_start, accounts_receivable_account, on_account_account, subscription_id, subscription_item_id, tax, tax_code, tax_inclusive, unit_amount, unit_of_measure, subtotal, invoice_item_id, document_item_dateExample: credit_memo_item.fields[]=id,created_time |
| invoice_item.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, booking_reference, applied_to_item_id, price_id, discount_item, deferred_revenue_account, description, invoice_id, sku, name, purchase_order_number, quantity, recognized_revenue_account, remaining_balance, revenue_recognition_rule_name, accounting_code, service_end, service_start, accounts_receivable_account, subscription_id, subscription_item_id, tax, tax_code, tax_inclusive, unit_amount, unit_of_measure, document_item_dateExample: invoice_item.fields[]=id,created_time |
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

| data | Array of objects (FulfillmentRequest) |
| --- | --- |
| processing_options | object (FulfillmentProcessingOption) |

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

post/fulfillments/bulk\_create

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "data": [

    -   {

        -   "order_line_item_id": "string",

        -   "carrier": "string",

        -   "custom_fields": {

            -   "property1": "string",

            -   "property2": "string"


            },

        -   "description": "string",

        -   "revenue": {

            -   "exclude_item_billing_from_revenue_accounting": true,

            -   "exclude_item_booking_from_revenue_accounting": true


            },

        -   "external_id": "string",

        -   "fulfillment_date": "2022-01-01",

        -   "location": "string",

        -   "fulfillment_system": "string",

        -   "type": "delivery",

        -   "quantity": 0,

        -   "state": "accepted",

        -   "tracking_number": "string",

        -   "items": [

            -   {

                -   "description": "string",

                -   "fulfillment_item_number": "string",

                -   "custom_fields": {

                    -   "property1": "string",

                    -   "property2": "string"


                    }


                }


            ]


        }


    ],

-   "processing_options": {

    -   "document_date": "2019-08-24",

    -   "target_date": "2019-08-24"


    }


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

-   "data": [

    -   {

        -   "id": "string",

        -   "updated_by_id": "string",

        -   "updated_time": "2019-08-24T14:15:22Z",

        -   "created_by_id": "string",

        -   "created_time": "2019-08-24T14:15:22Z",

        -   "custom_fields": {

            -   "property1": "string",

            -   "property2": "string"


            },

        -   "custom_objects": {

            -   "property1": {

                -   "next_page": "string",

                -   "data": [

                    -   {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "type": "string"


                        }


                    ]


                },

            -   "property2": {

                -   "next_page": "string",

                -   "data": [

                    -   {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "type": "string"


                        }


                    ]


                }


            },

        -   "order_line_item_id": "string",

        -   "fulfillment_number": "string",

        -   "fulfillment_date": "2023-01-01",

        -   "type": "delivery",

        -   "quantity": 0,

        -   "state": "accepted",

        -   "target_date": "2022-01-01",

        -   "description": "string",

        -   "tracking_number": "string",

        -   "carrier": "string",

        -   "fulfillment_system": "string",

        -   "external_id": "string",

        -   "revenue": {

            -   "exclude_item_billing_from_revenue_accounting": true,

            -   "exclude_item_booking_from_revenue_accounting": true


            },

        -   "location": "string"


        }


    ],

-   "amount_paid": 0,

-   "payment_number": "string",

-   "credit_memo_numbers": [

    -   "string"


    ],

-   "invoice_numbers": [

    -   "string"


    ]


}`
