---
title: "PostBillingDocument"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/postBillingDocument/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:46:58.582Z"
---

## Create a billing document

Creates different types of billing document objects, including invoices, credit memos, and debit memos.

Security**bearerAuth**

Request

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, balance, description, state, taxExample: fields[]=id,created_time |
| --- | --- |
| billing_document.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, balance, description, state, taxExample: billing_document.fields[]=id,created_time |
| billing_document_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, price_id, discount_item, deferred_revenue_account, description, name, quantity, recognized_revenue_account, service_end, service_start, accounts_receivable_account, subscription_id, subscription_item_id, tax, tax_inclusive, unit_amountExample: billing_document_items.fields[]=id,created_time |
| taxation_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, amount_exempt, tax_date, jurisdiction, location_code, name, sales_tax_payable_account, tax_code, tax_code_name, tax_rate, tax_rate_name, tax_inclusive, tax_rate_typeExample: taxation_items.fields[]=id,created_time |
| expand[] | Array of stringsAllows you to expand responses by including related object information in a single call. See the Expand responses section of the Quickstart API Tutorials for detailed instructions. |
| filter[] | Array of stringsA case-sensitive filter on the list. See the Filter lists section of the Quickstart API Tutorial for detailed instructions.Note that the filters on this operation are only applicable to the related objects. For example, when you are calling the "Retrieve a billing document" operation, you can use the filter[] parameter on the related objects such as filter[]=items[account_id].EQ:8ad09e208858b5cf0188595208151c63 |
| page_size | integer [ 1 .. 99 ]Default: 30The maximum number of results to return in a single page. If the specified page_size is less than 1 or greater than 99, Zuora will return a 400 error. |

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

| account_id | stringIdentifier of the account that owns the billing document. |
| --- | --- |
| account_number | stringHuman-readable identifier of the account that owns the billing document. |
| description | stringAn arbitrary string associated with the object. Often useful for displaying to users. |
| due_date | string <date>The date on which payment for the billing document is due. |
| document_date | string <date>The date when the billing document takes effect. |
| reason_code | stringReason for issuing this billing document. This field is applicable only if the type field is set to credit_memo or debit_memo. |
| invoice_id | stringThe identifier of the invoice billing document from which this credit memo or debit memo billing document is created. This field is applicable only if the type field is set to credit_memo or debit_memo. |
| transfer_to_accounting | booleanWhether to transfer to an external accounting system. |
| custom_fields | object (CustomFields)Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. |
| exclude_from_auto_apply_rules | booleanIndicates whether to exclude this credit memo billing document from the rule of automatically applying it to invoices. This field is applicable only if the type field is set to credit_memo. |
| pay | booleanIndicates whether the billing document is automatically picked up for processing in the corresponding payment run. |
| typerequired | stringThe type of billing document. Can be one of the credit memo, debit memo, or invoice.Enum: "credit_memo" "debit_memo" "invoice" |
| items | Array of objects (BillingDocumentItemCreateRequest)Information of all billing document items. |
| apply | booleanWhether to automatically apply the billing document upon posting. |
| post | booleanWhether to automatically post a billing document after it is created. |

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

post/billing\_documents

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

Expand allCollapse all

`{

-   "account_id": "2c92c0f96abc17de016abd62bd0c5854",

-   "pay": false,

-   "description": "comments",

-   "document_date": "2022-02-01",

-   "type": "invoice",

-   "post": true,

-   "items": [

    -   {

        -   "amount": 300,

        -   "booking_reference": "bookingReference",

        -   "document_item_date": "2022-02-10",

        -   "subscription_item_name": "charge with tax amount 9",

        -   "description": "description",

        -   "quantity": 2,

        -   "service_end": "2022-02-10",

        -   "service_start": "2023-02-01"


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

-   "id": "8ad09b7d82d9662c0182daeaa9f4477e",

-   "billing_document_number": "INV00006723",

-   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "created_time": "2022-08-26T09:09:48-07:00",

-   "updated_time": "2022-08-26T09:09:48-07:00",

-   "posted_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "state_transitions": {

    -   "posted_at": "2022-08-26T09:09:48-07:00"


    },

-   "type": "invoice",

-   "state": "open",

-   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d",

-   "items": {

    -   "next_page": null,

    -   "data": [

        -   {

            -   "type": "invoice",

            -   "amount": 10,

            -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

            -   "discount_item": false,

            -   "created_time": "2022-08-26T09:09:48-07:00",

            -   "custom_fields": {

                -   "field__c": "custom field value"


                },

            -   "document_item_date": "2022-08-26T09:09:48-07:00",

            -   "id": "8ad09b7d82d9662c0182daeaaa114781",

            -   "sku": "SKU-00011672",

            -   "price_name": "aaaaaa",

            -   "quantity": 1,

            -   "remaining_balance": 10,

            -   "revenue_recognition_rule_name": "Recognize upon invoicing",

            -   "service_end": "2022-08-23",

            -   "service_start": "2022-08-23",

            -   "tax": 1.5,

            -   "tax_inclusive": false,

            -   "unit_amount": 0,

            -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b"


            }


        ]


    },

-   "total": 11.5,

-   "subtotal": 10,

-   "tax": 1.5,

-   "remaining_balance": 11.5,

-   "amount_paid": 0,

-   "paid": false,

-   "past_due": false,

-   "document_date": "2022-08-23",

-   "due_date": "2022-09-22",

-   "custom_fields": {

    -   "field__c": "custom field value"


    },

-   "amount_refunded": 0


}`
