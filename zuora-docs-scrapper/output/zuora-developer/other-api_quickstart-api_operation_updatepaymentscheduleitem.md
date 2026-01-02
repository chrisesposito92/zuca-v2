---
title: "UpdatePaymentScheduleItem"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/updatePaymentScheduleItem/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:45:53.057Z"
---

## Update a payment schedule item

Updates the specified payment schedule item by setting the values of the parameters passed. Any parameters not provided will remain unchanged.

Security**bearerAuth**

Request

##### path Parameters

| payment_schedule_item_idrequired | stringIdentifier for the payment schedule item. Can be either payment_schedule_item_id or payment_schedule_item_number |
| --- | --- |

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, amount, balance, currency, debit_memo_id, invoice_id, payment_id, payment_method_id, description, prepayment, payment_gateway_id, run_hour, state, scheduled_date, payment_schedule_item_number, payment_schedule_id, cancellation_reason, error_message, payment_option_idExample: fields[]=id,created_time |
| --- | --- |
| payment_schedule_item.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, amount, balance, currency, debit_memo_id, invoice_id, payment_id, payment_method_id, description, prepayment, payment_gateway_id, run_hour, state, scheduled_date, payment_schedule_item_number, payment_schedule_id, cancellation_reason, error_message, payment_option_idExample: payment_schedule_item.fields[]=id,created_time |
| payment_schedule.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, description, next_payment_date, payment_schedule_number, number_of_payments, prepayment, start_date, run_hour, state, recent_payment_date, total_payments_errored, total_payments_processed, total_amount, debit_memo_id, invoice_idExample: payment_schedule.fields[]=id,created_time |
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

| payment_schedule_id | stringID of the payment schedule. |
| --- | --- |
| payment_schedule_number | stringNumber of the payment schedule. |
| amount | numberThe amount to be collected by this payment schedule item. |
| currency | stringCurrency of the payment schedule. The default value is the account's default currency. This field will be ignored when items is specified. |
| description | stringAn arbitrary string attached to the object. Often useful for displaying to users. |
| payment_gateway_id | stringID of the payment gateway used to collect payments. The default value is the account's default payment gateway ID. If no payment gateway ID is found on the customer account level, the default value will be the tenant's default payment gateway ID. This field will be ignored when items is specified. |
| payment_method_id | stringID of the payment method. The default value is the account's default payment method ID. This field will be ignored when items is specified. |
| scheduled_date | string <date>The scheduled date of collection. |
| run_hour | integer [ 0 .. 23 ]At which hour in the day in the tenant's timezone this payment will be collected. Available values:[0,1,2,~,22,23]. If the time difference between your tenant’s timezone and the timezone where Zuora servers are located is not in full hours, for example, 2.5 hours, the payment schedule items will be triggered half an hour later than your scheduled time. The default value is 0. If the payment run_hour and scheduled_date are backdated, the system will collect the payment when the next run_hour occurs. |
| custom_fields | object (CustomFields)Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. |
| payment_options | Array of objects (PaymentScheduleItemPaymentOption)Container for the payment options, which describe the transactional level rules for processing payments. Currently, only the gateway_options type is supported. Payment schedule payment_options take precedence over payment schedule item payment_options. |
| link | Array of objects (PaymentScheduleItemLink) |
| unlink | Array of objects (PaymentScheduleItemUnlink) |

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

patch/payment\_schedule\_items/{payment\_schedule\_item\_id}

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

Expand allCollapse all

`{

-   "payment_schedule_id": "string",

-   "payment_schedule_number": "string",

-   "amount": 0,

-   "currency": "USD",

-   "description": "description of payment schedule item",

-   "payment_gateway_id": "8ad093f27d6eee80017d6effd7a66759",

-   "payment_method_id": "8a95b1946b6aeac8718c32aab8c395f",

-   "scheduled_date": "2022-01-01",

-   "run_hour": 23,

-   "custom_fields": {

    -   "property1": "string",

    -   "property2": "string"


    },

-   "payment_options": [

    -   {

        -   "detail": {

            -   "key": "value"


            },

        -   "type": "string"


        }


    ],

-   "link": [

    -   {

        -   "id": "string"


        }


    ],

-   "unlink": [

    -   {

        -   "id": "string"


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

-   "id": "8ad09e208992481b018993b265472bcb",

-   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "updated_time": "2023-07-27T09:14:46-07:00",

-   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "created_time": "2023-07-26T12:34:49-07:00",

-   "custom_fields": {

    -   "field__c": "custom field value"


    },

-   "account_id": "8ad09e20896d5f7f018970bbca5d3508",

-   "description": "Payments schedule item one created",

-   "number_of_payments": 1,

-   "payment_schedule_number": "PS-00000008",

-   "run_hour": 0,

-   "total_amount": 0,

-   "next_payment_date": "",

-   "recent_payment_date": "",

-   "state": "canceled",

-   "total_payments_errored": 0,

-   "total_payments_processed": 0,

-   "prepayment": false


}`
