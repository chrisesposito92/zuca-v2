---
title: "PUT ApplyCreditMemo"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_ApplyCreditMemo/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:55:07.919Z"
---

## Apply a credit memo

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Applies a posted credit memo to one or more invoices and debit memos.

You can apply a credit memo to an invoice or a debit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.

When you apply a credit memo, the total number of credit memo items and the items that credit memo items to be applied to must be less than or equal to 15,000.

If the limit is hit, you can follow the following instructions:

-   If you want to apply one credit memo to multiple invoices or debit memos, decrease the number of invoices or debit memos in the request.
-   If you want to apply one credit memo to a single invoice or debit memo with a large volume of items, you have to specify invoice items or debit memo items in the request. The maximum number of invoice items or debit memo items that you can specify in the request is 1,000.
-   If a credit memo has a large volume of items, you have to specify credit memo items in the request. The maximum number of credit memo items that you can specify in the request is 1,000.

If the Proration application rule is used, when applying credit memos, the following quantity must be less than or equal to 10,000:

(number of invoice items + number of debit memo items) \* number of credit memo items

Otherwise, the First In First Out rule will be used instead of the Proration rule.

Security**bearerAuth**

Request

##### path Parameters

| creditMemoKeyrequired | stringThe unique ID or number of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172. |
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

| debitMemos | Array of objects (debitMemos)Container for debit memos that the credit memo is applied to. The maximum number of debit memos is 1,000. |
| --- | --- |
| effectiveDate | string <date>The date when the credit memo is applied. |
| invoices | Array of objects (invoices)Container for invoices that the credit memo is applied to. The maximum number of invoices is 1,000. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/credit-memos/{creditMemoKey}/apply

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "effectiveDate": "2024-08-19",

-   "invoices": [

    -   {

        -   "invoiceId": "8ad097b490a1ec740190a5aaece25734",

        -   "amount": 11


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

`{

-   "id": "8ad081dd91698b2801916e5a84b65653",

-   "number": "CM00000007",

-   "accountId": "8ad09be48db5aba7018db604776d4854",

-   "accountNumber": "A00000097",

-   "currency": "USD",

-   "creditMemoDate": "2024-08-19",

-   "targetDate": null,

-   "postedById": "8ad09fc28193c189018194da28be74ba",

-   "postedOn": "2024-08-19 22:55:11",

-   "status": "Posted",

-   "amount": 14.99,

-   "taxAmount": 0,

-   "totalTaxExemptAmount": 0,

-   "unappliedAmount": 3.99,

-   "refundAmount": 0,

-   "appliedAmount": 11,

-   "comment": "",

-   "source": "AdhocFromPrpc",

-   "sourceId": null,

-   "referredInvoiceId": null,

-   "reasonCode": "Ad hoc credit",

-   "createdDate": "2024-08-19 22:55:11",

-   "createdById": "8ad09fc28193c189018194da28be74ba",

-   "updatedDate": "2024-08-19 22:59:54",

-   "updatedById": "b243314d594646d3b2651aeedd4be47e",

-   "cancelledOn": null,

-   "cancelledById": null,

-   "latestPDFFileId": "ac1ebc24569sd",

-   "transferredToAccounting": "No",

-   "excludeFromAutoApplyRules": true,

-   "autoApplyUponPosting": false,

-   "reversed": false,

-   "taxStatus": "Complete",

-   "sourceType": "Standalone",

-   "taxMessage": null,

-   "billToContactId": null,

-   "billToContactSnapshotId": null,

-   "sequenceSetId": null,

-   "invoiceGroupNumber": null,

-   "success": true


}`
