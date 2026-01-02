---
title: "POST DM TaxationItems"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_DM_TaxationItems/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:56:49.653Z"
---

## Create taxation items for a debit memo

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Creates taxation items for a debit memo.

Security**bearerAuth**

Request

##### path Parameters

| debitMemoKeyrequired | stringThe unique ID or number of a debit memo. For example, 8a8082e65b27f6c3015ba419f3c2644e or DM00000001. |
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

| taxationItems | Array of objects (taxationItems)Container for taxation items. |
| --- | --- |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/debit-memos/{debitMemoKey}/taxation-items

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "taxationItems": [

    -   {

        -   "name": "STATE TAX",

        -   "memoItemId": "8ad093f793300daf01933d50a548781f",

        -   "jurisdiction": "CALIFORNIA",

        -   "taxAmount": 0.5,

        -   "taxCode": "ServiceTaxCode",

        -   "taxDate": "2024-11-18",

        -   "taxRate": 0.05,

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

-   "taxationItems": [

    -   {

        -   "createdById": "8ad084a67f9c7138017fab8a8b511b5a",

        -   "createdDate": "2024-11-18 11:32:56",

        -   "exemptAmount": 0,

        -   "id": "8ad0980c93300db701933d549f355262",

        -   "memoItemId": "8ad093f793300daf01933d50a548781f",

        -   "invoiceItemId": null,

        -   "sourceTaxItemId": null,

        -   "jurisdiction": "CALIFORNIA",

        -   "locationCode": null,

        -   "name": "STATE TAX",

        -   "taxAmount": 0.5,

        -   "applicableTaxUnRounded": 0.5,

        -   "country": null,

        -   "taxCode": "ServiceTaxCode",

        -   "taxCodeDescription": null,

        -   "taxDate": "2024-11-18",

        -   "taxRate": 0.05,

        -   "taxMode": "TaxExclusive",

        -   "taxRateDescription": null,

        -   "taxRateType": "Percentage",

        -   "updatedById": "8ad084a67f9c7138017fab8a8b511b5a",

        -   "updatedDate": "2024-11-18 11:32:56",

        -   "financeInformation": {

            -   "onAccountAccountingCode": null,

            -   "onAccountAccountingCodeType": null,

            -   "salesTaxPayableAccountingCode": "Sales Tax Payable",

            -   "salesTaxPayableAccountingCodeType": "SalesTaxPayable",

            -   "accountsReceivableAccountingCode": "Accounts Receivable",

            -   "accountsReceivableAccountingCodeType": "AccountsReceivable"


            }


        }


    ],

-   "success": true


}`
