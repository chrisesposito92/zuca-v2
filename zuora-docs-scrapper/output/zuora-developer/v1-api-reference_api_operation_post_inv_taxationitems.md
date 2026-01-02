---
title: "POST INV TaxationItems"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_INV_TaxationItems/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:54:44.184Z"
---

## Create taxation items for an invoice

Creates taxation items for an invoice.

Security**bearerAuth**

Request

##### path Parameters

| invoiceKeyrequired | stringThe unique ID or number of an invoice. For example, 8a8082e65b27f6c3015ba45ff82c7172 or INV00000001. |
| --- | --- |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| taxationItems | Array of objects (POSTTaxationItemTypeForInvoice)Container for taxation items. |
| --- | --- |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/invoices/{invoiceKey}/taxation-items

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "taxationItems": [

    -   {

        -   "exemptAmount": 0,

        -   "financeInformation": {

            -   "accountsReceivableAccountingCode": "Check",

            -   "salesTaxPayableAccountingCode": "Check"


            },

        -   "invoiceItemId": "402890555a7e9791015a879f064d0055",

        -   "jurisdiction": "CALIFORNIA",

        -   "locationCode": "06",

        -   "name": "STATE TAX",

        -   "taxAmount": 0.1,

        -   "taxCode": "ServiceTaxCode",

        -   "taxCodeDescription": "This is tax code description!",

        -   "taxDate": "2016-09-30",

        -   "taxMode": "TaxExclusive",

        -   "taxRate": 0.0625,

        -   "taxRateDescription": "This is tax rate description!",

        -   "taxRateType": "Percentage"


        }


    ]


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

-   "success": true,

-   "taxationItems": [

    -   {

        -   "createdById": "402881e522cf4f9b0122cf5d82860002",

        -   "createdDate": "2017-03-01 10:08:43",

        -   "exemptAmount": 0,

        -   "financeInformation": {

            -   "accountsReceivableAccountingCode": "Check",

            -   "accountsReceivableAccountingCodeType": "Cash",

            -   "salesTaxPayableAccountingCode": "Check",

            -   "salesTaxPayableAccountingCodeType": "Cash"


            },

        -   "id": "402890555a7e9791015a87a072880062",

        -   "invoiceItemId": "402890555a7e9791015a879f064d0055",

        -   "jurisdiction": "CALIFORNIA",

        -   "locationCode": "06",

        -   "name": "STATE TAX",

        -   "taxAmount": 0.1,

        -   "taxCode": "ServiceTaxCode",

        -   "taxCodeDescription": "This is tax code description!",

        -   "taxDate": "2016-09-30",

        -   "taxMode": "TaxExclusive",

        -   "taxRate": 0.0625,

        -   "taxRateDescription": "This is tax rate description!",

        -   "taxRateType": "Percentage",

        -   "updatedById": "402881e522cf4f9b0122cf5d82860002",

        -   "updatedDate": "2017-03-01 10:08:43"


        }


    ]


}`
