---
title: "UpdatePaymentRuns"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/updatePaymentRuns/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:45:31.375Z"
---

## Update a payment run

Updates a payment run by setting the values of the specified fields. Any fields not provided in the request remain unchanged.

Security**bearerAuth**

Request

##### path Parameters

| payment_run_idrequired | stringIdentifier for the payment run, either payment_run_number or payment_run_id |
| --- | --- |

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, batch, bill_cycle_day, target_date, payment_run_number, state, apply_credit_memos, apply_unapplied_payments, bill_run_id, collect_payment, consolidate_payment, payment_run_date, payment_gateway_id, state_transitionsExample: fields[]=id,created_time |
| --- | --- |
| payment_run.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, batch, bill_cycle_day, target_date, payment_run_number, state, apply_credit_memos, apply_unapplied_payments, bill_run_id, collect_payment, consolidate_payment, payment_run_date, payment_gateway_id, state_transitionsExample: payment_run.fields[]=id,created_time |
| summary.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, number_of_unprocessed_receivables, number_of_errors, number_of_invoices, number_of_payments, number_of_credit_memos, number_of_debit_memos, number_of_unprocessed_debit_memos, number_of_unapplied_payments, errors_total, invoices_total, payments_total, unprocessed_receivables_totalExample: summary.fields[]=id,created_time |
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

| apply_credit_memos | booleanIf true, any posted credit memos are applied first. |
| --- | --- |
| apply_unapplied_payments | booleanIf true, any unapplied payments are applied first. |
| batch | stringIdentifier of the customer account batch to be included in this payment run. |
| bill_cycle_day | stringThe day of the month to bill multiple customer accounts. |
| bill_run_id | stringThe unique identifier of a bill run. |
| collect_payment | booleanIndicates whether to process electronic payments during the execution of payment runs. If the Payment user permission "Process Electronic Payment" is disabled, this field will be ignored. |
| currency | stringThree-letter ISO currency code. |
| consolidated_payment | booleanIf true, a single payment will be collected for all receivables due on an account. |
| gateway_id | stringUnique identifier for the payment gateway. |
| payment_run_date | string <date-time>The date and time when the scheduled payment run is to be executed, in yyyy-mm-dd hh:mm:ssZ format. The backend will ignore minutes and seconds in the field value. For example, if you specify 2017-03-01 11:30:37Z for this value, this payment run will be run at 2017-03-01 11:00:00.You must specify either the payment_run_date field or the target_date field in the request body. If you specify the payment_run_date field, the scheduced payment run is to be executed on the specified payment run date. If you specify the target_date field, the payment run is executed immediately after it is created. |
| target_date | string <date>The target date used to determine which receivables to be paid in the payment run. The payments are collected for all receivables with the due date no later than the target date. |

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

patch/payment\_runs/{payment\_run\_id}

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

`{

-   "apply_credit_memos": true,

-   "apply_unapplied_payments": true,

-   "batch": "string",

-   "bill_cycle_day": "string",

-   "bill_run_id": "string",

-   "collect_payment": true,

-   "currency": "USD",

-   "consolidated_payment": true,

-   "gateway_id": "string",

-   "payment_run_date": "2019-08-24T14:15:22Z",

-   "target_date": "2023-01-01"


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

                    -   "property1": "string",

                    -   "property2": "string"


                    },

                -   "custom_objects": {

                    -   "property1": { },

                    -   "property2": { }


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

                    -   "property1": "string",

                    -   "property2": "string"


                    },

                -   "custom_objects": {

                    -   "property1": { },

                    -   "property2": { }


                    },

                -   "type": "string"


                }


            ]


        }


    },

-   "apply_credit_memos": true,

-   "apply_unapplied_payments": true,

-   "batch": "string",

-   "consolidate_payment": true,

-   "bill_cycle_day": 31,

-   "bill_run_id": "string",

-   "collect_payment": true,

-   "currency": "USD",

-   "state_transitions": {

    -   "completed": "string",

    -   "failed": "string"


    },

-   "payment_gateway_id": "string",

-   "payment_collection_date": "2019-08-24T14:15:22Z",

-   "payment_run_number": "string",

-   "payment_run_date": "2019-08-24T14:15:22Z",

-   "target_date": "2023-01-01",

-   "state": "processing",

-   "summary": {

    -   "number_of_errors": 0,

    -   "number_of_invoices": 0,

    -   "number_of_payments": 0,

    -   "number_of_credit_memos": 0,

    -   "number_of_debit_memos": 0,

    -   "number_of_unprocessed_debit_memos": 0,

    -   "number_of_unapplied_payments": 0,

    -   "number_of_unprocessed_receivables": 0,

    -   "errors_total": 0,

    -   "invoices_total": 0,

    -   "payments_total": 0,

    -   "unprocessed_receivables_total": 0


    }


}`
