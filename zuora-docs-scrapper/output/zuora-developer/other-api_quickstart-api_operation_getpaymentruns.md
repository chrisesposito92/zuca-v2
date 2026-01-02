---
title: "GetPaymentRuns"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/getPaymentRuns/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:45:30.278Z"
---

## List payment runs

Returns an array of payment runs. Each entry in the array is a separate payment run object. If no more payment runs are available, the resulting array will be empty. This request should never return an error.

Security**bearerAuth**

Request

##### query Parameters

| cursor | stringA cursor for use in pagination. A cursor defines the starting place in a list. For instance, if you make a list request and receive 100 objects, ending with next_page=W3sib3JkZXJ=, your subsequent call can include cursor=W3sib3JkZXJ= in order to fetch the next page of the list. |
| --- | --- |
| expand[] | Array of stringsAllows you to expand responses by including related object information in a single call. See the Expand responses section of the Quickstart API Tutorials for detailed instructions. |
| filter[] | Array of stringsA case-sensitive filter on the list. See the Filter lists section of the Quickstart API Tutorials for detailed instructions. |
| sort[] | Array of stringsA case-sensitive query parameter that specifies the sort order of the list, which can be either ascending (e.g. account_number.asc) or descending (e.g. account_number.desc). You cannot sort on properties that are arrays. If the array-type properties are specified for the sort[] parameter, they are ignored. |
| page_size | integer [ 1 .. 99 ]Default: 30The maximum number of results to return in a single page. If the specified page_size is less than 1 or greater than 99, Zuora will return a 400 error. |
| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, batch, bill_cycle_day, target_date, payment_run_number, state, apply_credit_memos, apply_unapplied_payments, bill_run_id, collect_payment, consolidate_payment, payment_run_date, payment_gateway_id, state_transitionsExample: fields[]=id,created_time |
| payment_run.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, batch, bill_cycle_day, target_date, payment_run_number, state, apply_credit_memos, apply_unapplied_payments, bill_run_id, collect_payment, consolidate_payment, payment_run_date, payment_gateway_id, state_transitionsExample: payment_run.fields[]=id,created_time |
| summary.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, number_of_unprocessed_receivables, number_of_errors, number_of_invoices, number_of_payments, number_of_credit_memos, number_of_debit_memos, number_of_unprocessed_debit_memos, number_of_unapplied_payments, errors_total, invoices_total, payments_total, unprocessed_receivables_totalExample: summary.fields[]=id,created_time |

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

get/payment\_runs

Request samples

-   cURL
-   Java
-   Node

Copy

curl \--request GET      \--url https://rest.apisandbox.zuora.com/v2/payment\_runs      \--header 'Authorization: Bearer dcf5d050c6e7493688859d04da581938'      \--header 'Content-Type: application/json'

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


        }


    ]


}`
