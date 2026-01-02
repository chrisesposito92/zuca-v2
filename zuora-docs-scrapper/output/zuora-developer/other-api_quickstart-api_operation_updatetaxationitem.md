---
title: "UpdateTaxationItem"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/updateTaxationItem/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:44:26.385Z"
---

## Update a taxation item

Updates a taxation item by setting the values of the specified fields. Any fields not provided in the request remain unchanged.

Security**bearerAuth**

Request

##### path Parameters

| taxation_item_idrequired | stringID of the taxation item. |
| --- | --- |

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, amount_exempt, tax_date, jurisdiction, location_code, name, sales_tax_payable_account, tax_code, tax_code_name, tax_rate, tax_rate_name, tax_inclusive, tax_rate_type, amount_credited, amount_paid, remaining_balanceExample: fields[]=id,created_time |
| --- | --- |
| taxation_item.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, amount_exempt, tax_date, jurisdiction, location_code, name, sales_tax_payable_account, tax_code, tax_code_name, tax_rate, tax_rate_name, tax_inclusive, tax_rate_type, amount_credited, amount_paid, remaining_balanceExample: taxation_item.fields[]=id,created_time |
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
| on_account_account | stringAn active account in your Zuora Chart of Accounts. |
| amount_exempt | numberThe calculated tax amount excluded due to the exemption. |
| invoice_item_id | stringUnique identifier of the invoice item to which the taxation item applies. This field is required if you are creating a credit memo or debit memo from an invoice, and is not applicable if you are creating an invoice.. |
| jurisdiction | string <= 32 charactersThe jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city. |
| location_code | string <= 32 charactersThe identifier for the location based on the value of the tax_code field. |
| name | string <= 128 charactersThe name of the taxation item. |
| amount | numberThe amount of the tax applied to the total price. |
| tax_code | stringA tax code identifier. If a tax_code of a price is not provided when you create or update a price, Zuora will treat the charged amount as non-taxable. If this code is provide, Zuora considers that this price is taxable and the charged amount will be handled accordingly. |
| tax_code_name | stringThe amount of the tax applied to the total price. |
| tax_date | string <date>The date on which the tax is applied. |
| tax_rate | numberThe amount of the tax applied to the total price. |
| tax_rate_name | stringThe name of the tax rate, such as sales tax or GST. This name is displayed on billing documents. |
| tax_rate_type | stringIndicates whether the tax rate is an amount or a percentage.Enum: "percent" "amount" |
| source_tax_item_id | stringThe ID of the taxation item of the invoice, from which the credit or debit memo is created. This field is only applicable when the type of the billing document is credit_memo and debit_memo. |
| tax_inclusive | booleanIf set to true, it indicates that amounts are inclusive of tax. |
| sales_tax_payable_account | stringAn active account in your Zuora Chart of Accounts. |

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

patch/taxation\_items/{taxation\_item\_id}

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

`{

-   "tax_code_name": "Forsyth",

-   "name": "Forsyth Charge"


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

-   "id": "8ad086ec85a701ce0185a782adb13b62",

-   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "updated_time": "2023-01-18T10:21:27-08:00",

-   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "created_time": "2023-01-12T11:43:57-08:00",

-   "custom_fields": { },

-   "jurisdiction": "Forsyth",

-   "location_code": "123",

-   "name": "Forsyth Charge",

-   "amount": 0,

-   "tax_code": "Maintenance Charges",

-   "tax_code_name": "Forsyth",

-   "tax_date": "2022-01-12",

-   "tax_rate": 1,

-   "tax_rate_name": "Charge",

-   "amount_exempt": 0,

-   "remaining_balance": 0,

-   "amount_credited": 0,

-   "amount_paid": 0,

-   "tax_inclusive": false


}`
