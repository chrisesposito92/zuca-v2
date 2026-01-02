---
title: "CreateBillRun"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/createBillRun/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:44:03.463Z"
---

## Create a bill run

Creates a bill run on a single account, or a batch of customer accounts.

Security**bearerAuth**

Request

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, email, post, renew, batches, day_of_month, charges_excluded, invoice_date, email_zero_amount_invoices, target_date, bill_run_number, bill_run_time, invoices_sent, last_invoice_sent_time, accounts_processed, invoices_generated, credit_memos_generated, state, nameExample: fields[]=id,created_time |
| --- | --- |
| bill_run.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, email, post, renew, batches, day_of_month, charges_excluded, invoice_date, email_zero_amount_invoices, target_date, bill_run_number, bill_run_time, invoices_sent, last_invoice_sent_time, accounts_processed, invoices_generated, credit_memos_generated, state, nameExample: bill_run.fields[]=id,created_time |
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

| custom_fields | object (CustomFields)Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. |
| --- | --- |
| account_id | stringIdentifier of the customer account to bill. Specify this field or account_number if you want to create a bill run for a single customer. |
| account_number | stringHuman-readable identifier of the account to bill. Specify this field or account_id if you want to create a bill run for a single customer. |
| email | booleanIf set to true, invoices will be automatically emailed to customers. |
| post | booleanIndicates whether to automatically post a billing document after it is created. |
| renew | booleanIf set to true, subscriptions will be automatically renewed. |
| day_of_month | anyThe day of the month on which the multiple customer accounts are billed.Enum: "1" "2" "3" "4" "5" "6" "7" "8" "9" "10" "11" "12" "13" "14" "15" "16" "17" "18" "19" "20" "21" "22" "23" "24" "25" "26" "27" "28" "29" "30" "31" "AllBillCycleDays" "AsRunDay" |
| batches | Array of stringsIdentifier of the customer account batch to be included in this bill run. |
| invoice_daterequired | string <date>The date displayed on the invoice. |
| target_daterequired | string <date>All unbilled items on or before this date are included in this bill run. |
| email_zero_amount_invoices | booleanDefault: trueIf it is set to false, invoices for zero amounts will not be emailed to customers. |
| charges_excluded | Array of stringsType of the charge to be excluded from the bill run. |
| name | stringThe name of the bill run. |
| type | stringThe type of the bill run. This field is only available if you have the Catch-Up Bill Run feature enabled in your tenant.Enum: "regular" "catch_up" |
| subscription_ids | Array of stringsThe target subscriptions for this bill run. Note that all these subscriptions must belong to the same account. |

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

post/bill\_runs

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

Expand allCollapse all

`{

-   "renew": true,

-   "batches": [

    -   "Batch1"


    ],

-   "day_of_month": "AllBillCycleDays",

-   "charges_excluded": "OneTime",

-   "invoice_date": "2022-01-12",

-   "email_zero_amount_invoices": true,

-   "target_date": "2022-01-12"


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

-   "id": "8ad08ccf8437067601843a7af4e64rq3",

-   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "updated_time": "2023-01-12T11:44:23-08:00",

-   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "created_time": "2023-01-12T11:43:54-08:00",

-   "custom_fields": { },

-   "custom_objects": { },

-   "email": false,

-   "post": false,

-   "renew": true,

-   "day_of_month": "01",

-   "bill_run_number": "BR-00000066",

-   "bill_run_time": "2023-01-12T11:43:55-08:00",

-   "invoice_date": "2022-01-12",

-   "target_date": "2022-01-12",

-   "state": "completed",

-   "batches": "AllBatches",

-   "charges_excluded": "OneTime",

-   "email_zero_amount_invoices": true,

-   "invoices_sent": false,

-   "accounts_processed": 5,

-   "invoices_generated": 4,

-   "credit_memos_generated": 1


}`
