---
title: "Object POSTTaxationItem"
url: "https://developer.zuora.com/v1-api-reference/api/operation/Object_POSTTaxationItem/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:58:54.967Z"
---

## CRUD: Create a taxation item

Creates a Taxation Item object.

Security**bearerAuth**

Request

##### query Parameters

| rejectUnknownFields | booleanDefault: falseSpecifies whether the call fails if the request body contains unknown fields. With rejectUnknownFields set to true, Zuora returns a 400 response if the request body contains unknown fields. The body of the 400 response is:{     "message": "Error - unrecognised fields" } By default, Zuora ignores unknown fields in the request body. |
| --- | --- |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| AccountingCode | stringThe Chart of Accounts |
| --- | --- |
| ExemptAmount | number <double>The calculated tax amount excluded due to the exemption. Character limit: 16 Values: a decimal value |
| InvoiceItemIdrequired | stringThe ID of the specific invoice item that the taxation information applies to. Character limit: 32 Values: a valid invoice item ID |
| Jurisdictionrequired | stringThe jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city. Character limit: 32 Values: a string of 32 characterrs or fewer |
| LocationCode | stringThe identifier for the location based on the value of the TaxCode field. Character limit: 32 Values: automatically generated |
| Namerequired | stringThe name of the tax rate, such as sales tax or GST. This name is displayed on invoices. Character limit: 128 Values: a string of 128 characters or fewer |
| TaxAmountrequired | number <double>The amount of the tax applied to the charge. Character limit: 16 Values: a decimal value |
| TaxCode | stringThe tax code identifies which tax rules and tax rates to apply to a specific charge. Character limit: 32 Values: a string of 32 characters or fewer |
| TaxCodeDescription | stringThe description for the tax code. Character limit: 255 Values: a string of 255 characters or fewer |
| TaxDaterequired | string <date>The date that the tax is applied to the charge, in yyyy-mm-dd format. Character limit: 29 |
| TaxRaterequired | number <double>The tax rate applied to the charge. Character limit: 16 Values: a valid decimal value |
| TaxRateDescription | stringThe description of the tax rate. Character limit: 255 Values: a string of 255 characters or fewer |
| TaxRateTyperequired | stringThe type of the tax rate applied to the charge. Character limit: 10 Values: Percentage, FlatFee |
| property name*additional property | anyCustom fields of the Taxation Item object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

400

401

Unauthorized

post/v1/object/taxation-item

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "InvoiceItemId": "8ad086fa92d66ffe0192dc7e5dd65161",

-   "Jurisdiction": "CALIFORNIA",

-   "Name": "CA TAX",

-   "TaxAmount": 3,

-   "TaxDate": "2024-11-04",

-   "TaxRate": 3,

-   "TaxRateType": "FlatFee"


}`

Response samples

-   200
-   400
-   401

application/json

responseresponse

Copy

`{

-   "Id": "2c93808457d787030157e0306f413a96",

-   "Success": true


}`
