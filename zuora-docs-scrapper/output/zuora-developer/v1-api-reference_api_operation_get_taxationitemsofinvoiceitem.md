---
title: "GET TaxationItemsOfInvoiceItem"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_TaxationItemsOfInvoiceItem/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:53:37.007Z"
---

## List all taxation items of an invoice item

Retrieves information about the taxation items of a specific invoice item.

Security**bearerAuth**

Request

##### path Parameters

| invoiceKeyrequired | stringThe unique ID or number of an invoice. For example, 2c92c8955bd63cc1015bd7c151af02ab or INV00000001. |
| --- | --- |
| itemIdrequired | stringThe unique ID of an invoice item. For example, 2c86c8955bd63cc1015bd7c151af02ef. |

##### query Parameters

| pageSize | integer <= 40Default: 20The number of records returned per page in the response. |
| --- | --- |
| page | integer >= 1Default: 1The index number of the page that you want to retrieve. This parameter is dependent on pageSize. You must set pageSize before specifying page. For example, if you set pageSize to 20 and page to 2, the 21st to 40th records are returned in the response. |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

get/v1/invoices/{invoiceKey}/items/{itemId}/taxation-items

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/invoices/{invoiceKey}/items/{itemId}/taxation-items?pageSize=20&page=1' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: string'

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "data": [

    -   {

        -   "balance": 10,

        -   "creditAmount": 0,

        -   "exemptAmount": 0,

        -   "id": "2c98901a68ff26800168ffce84e3102c",

        -   "jurisdiction": "test",

        -   "locationCode": "code - 001",

        -   "name": "test",

        -   "paymentAmount": 0,

        -   "taxAmount": 10,

        -   "taxCode": "taxcode",

        -   "taxCodeDescription": "description",

        -   "taxDate": "2019-02-18",

        -   "taxRate": 2,

        -   "taxRateDescription": "test",

        -   "taxRateType": "FlatFee"


        },

    -   {

        -   "balance": 10,

        -   "creditAmount": 0,

        -   "exemptAmount": 0,

        -   "id": "2c98901a68ff26800168ffce85d6102e",

        -   "jurisdiction": "test",

        -   "locationCode": "code - 001",

        -   "name": "test",

        -   "paymentAmount": 0,

        -   "taxAmount": 10,

        -   "taxCode": "taxcode",

        -   "taxCodeDescription": "description",

        -   "taxDate": "2019-02-18",

        -   "taxRate": 2,

        -   "taxRateDescription": "test",

        -   "taxRateType": "FlatFee"


        }


    ],

-   "success": true


}`
