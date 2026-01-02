---
title: "GET DebitMemoItem"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_DebitMemoItem/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:56:55.350Z"
---

## Retrieve a debit memo item

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Retrieves information about a specific item of a debit memo. A debit memo item is a single line item in a debit memo.

Security**bearerAuth**

Request

##### path Parameters

| dmitemidrequired | stringThe unique ID of a debit memo item. You can get the debit memo item ID from the response of List debit memo items. |
| --- | --- |
| debitMemoKeyrequired | stringThe unique ID or number of a debit memo. For example, 8a8082e65b27f6c3015ba419f3c2644e or DM00000001. |

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

get/v1/debit-memos/{debitMemoKey}/items/{dmitemid}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/debit-memos/{debitMemoKey}/items/{dmitemid}' \\
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

-   "amount": 1,

-   "amountWithoutTax": 1,

-   "appliedToItemId": "402890555a7d4022015a2dadb3b700a6",

-   "balance": 1,

-   "beAppliedAmount": 0,

-   "comment": "aa",

-   "createdById": "402881e522cf4f9b0122cf5d82860002",

-   "createdDate": "2017-03-01 17:01:00",

-   "excludeItemBillingFromRevenueAccounting": true,

-   "financeInformation": {

    -   "deferredRevenueAccountingCode": "Subscription Revenue",

    -   "deferredRevenueAccountingCodeType": "SalesRevenue",

    -   "recognizedRevenueAccountingCode": "Subscription Revenue",

    -   "recognizedRevenueAccountingCodeType": "SalesRevenue"


    },

-   "id": "402890555a87d7f5015a8919e500002f",

-   "processingType": "Charge",

-   "quantity": 1,

-   "serviceEndDate": "2017-03-26",

-   "serviceStartDate": "2017-02-27",

-   "sku": "SKU-00000002",

-   "skuName": "ZTax Component",

-   "soldToContactId": "402881e522cf4f9b0122cf5d82860003",

-   "soldToContactSnapshotId": "402881e522cf4f9b0122cf5d82860004",

-   "sourceItemId": "402890555a7d4022015a7dadb3b700a6",

-   "sourceItemType": "InvoiceDetail",

-   "subscriptionId": null,

-   "success": true,

-   "taxMode": "TaxExclusive",

-   "taxationItems": {

    -   "data": [

        -   {

            -   "balance": 5,

            -   "creditAmount": 0,

            -   "exemptAmount": 0,

            -   "financeInformation": {

                -   "salesTaxPayableAccountingCode": "Check",

                -   "salesTaxPayableAccountingCodeType": "Cash"


                },

            -   "id": "402890555a87d7f5015a8919e8450031",

            -   "jurisdiction": "USA",

            -   "locationCode": "",

            -   "name": "my tax",

            -   "paymentAmount": 0,

            -   "sourceTaxItemId": "402890555a7d4022015a7dadb39b00a1",

            -   "taxAmount": 5,

            -   "taxCode": "ZtaxCode",

            -   "taxCodeDescription": "",

            -   "taxDate": "2017-02-27",

            -   "taxRate": 5,

            -   "taxRateDescription": "desc3",

            -   "taxRateType": "FlatFee"


            }


        ]


    },

-   "unitOfMeasure": "Each",

-   "unitPrice": 1,

-   "updatedById": "402881e522cf4f9b0122cf5d82860002",

-   "updatedDate": "2017-03-01 17:01:00"


}`
