---
title: "PUT TaxationItem"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_TaxationItem/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:58:54.702Z"
---

## Update a taxation item

Updates a specific taxation item by ID.

Security**bearerAuth**

Request

##### path Parameters

| idrequired | stringThe unique ID of a taxation item. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| exemptAmount | number <double>The calculated tax amount excluded due to the exemption. |
| --- | --- |
| financeInformation | objectContainer for the finance information related to the taxation item. |
| jurisdiction | stringThe jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city. |
| locationCode | stringThe identifier for the location based on the value of the taxCode field. |
| name | stringThe name of the taxation item to be updated. |
| taxAmount | number <double>The amount of the tax applied to the credit or debit memo. |
| taxCode | stringThe tax code identifies which tax rules and tax rates to apply to a specific credit or debit memo. |
| taxCodeDescription | stringThe description of the tax code. |
| taxDate | string <date>The date when the tax is applied to the credit or debit memo. |
| taxRate | number <double>The tax rate applied to the credit or debit memo. |
| taxRateDescription | stringThe description of the tax rate. |
| taxRateType | stringThe type of the tax rate applied to the credit or debit memo.Enum: "Percentage" "FlatFee" |
| property name*additional property | anyCustom fields of the Taxation Item object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/taxation-items/{id}

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "taxRateDescription": "Details of the tax rate"


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "createdById": "8ad084a67f9c7138017fab8a8b511b5a",

-   "createdDate": "2024-11-04 10:53:16",

-   "exemptAmount": 0,

-   "id": "8ad09d9392e0a4430192f51746d121f6",

-   "memoItemId": null,

-   "invoiceItemId": "8ad086fa92d66ffe0192dc7e5dd65161",

-   "sourceTaxItemId": null,

-   "jurisdiction": "CALIFORNIA",

-   "locationCode": null,

-   "name": "CA TAX",

-   "taxAmount": 3,

-   "applicableTaxUnRounded": 3,

-   "country": null,

-   "taxCode": null,

-   "taxCodeDescription": null,

-   "taxDate": "2024-11-04",

-   "taxRate": 3,

-   "taxMode": "TaxExclusive",

-   "taxRateDescription": "Details of the tax rate",

-   "taxRateType": "FlatFee",

-   "updatedById": "8ad084a67f9c7138017fab8a8b511b5a",

-   "updatedDate": "2024-11-04 10:57:51",

-   "financeInformation": {

    -   "onAccountAccountingCode": null,

    -   "onAccountAccountingCodeType": null,

    -   "salesTaxPayableAccountingCode": "Sales Tax Payable",

    -   "salesTaxPayableAccountingCodeType": "SalesTaxPayable"


    },

-   "success": true


}`
