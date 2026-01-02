---
title: "PUT UnapplyCreditMemo"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_UnapplyCreditMemo/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:55:34.550Z"
---

## Unapply a credit memo

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Unapplies an applied credit memo from one or more invoices and debit memos. The full applied amount from invoices and debit memos is transferred into the unapplied amount of the credit memo.

You can unapply a credit memo from an invoice or a debit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.

When you unapply a credit memo, the total number of credit memo items and the items that credit memo items to be unapplied from must be less than or equal to 15,000.

If the limit is hit, you can follow the following instructions:

-   If you want to unapply one credit memo without specifying invoices or debit memos and the limit is hit, you have to specify the invoice items or debit memo items in the request to decrease the number of items.
-   If you want to unapply one credit memo from multiple specified invoices or debit memos, decrease the number of invoices or debit memos in the request.
-   If you want to unapply one credit memo from a single invoice or debit memo with a large volume of items, you have to specify invoice items or debit memo items in the request. The maximum number of invoice items or debit memo items that you can specify in the request is 1,000.
-   If a credit memo has a large volume of items, you have to specify credit memo items in the request. The maximum number of credit memo items that you can specify in the request is 1,000.
-   When unapplying a credit memo, the total number of the credit memo's item parts must be less than or equal to 1,000. Otherwise, the operation would fail and an error message would pop up. When you see this error, you can try using the Unapply a credit memo API as an alternative. Similarly, make sure that all the requirements listed in the API reference are met.

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

| debitMemos | Array of objects (debitMemos)Container for debit memos that the credit memo is unapplied from. The maximum number of debit memos is 1,000. |
| --- | --- |
| effectiveDate | string <date>The date when the credit memo is unapplied. |
| invoices | Array of objects (invoices)Container for invoices that the credit memo is unapplied from. The maximum number of invoices is 1,000. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/credit-memos/{creditMemoKey}/unapply

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "effectiveDate": "2024-10-30",

-   "invoices": [

    -   {

        -   "invoiceId": "8a90acec910816f601910bcf57a62363",

        -   "amount": 1


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

-   "id": "8a90aac892dc8c3a0192dce41af10077",

-   "number": "CM00000619",

-   "accountId": "8a90b4488e7d5c0f018e7db3892400b2",

-   "accountNumber": "A00000370",

-   "currency": "USD",

-   "creditMemoDate": "2024-10-30",

-   "targetDate": null,

-   "postedById": "2c92c8f95e2d6ebb015e325df48e02da",

-   "postedOn": "2024-10-30 18:06:30",

-   "status": "Posted",

-   "amount": 15,

-   "taxAmount": 0,

-   "totalTaxExemptAmount": 0,

-   "unappliedAmount": 1,

-   "refundAmount": 0,

-   "appliedAmount": 14,

-   "comment": "",

-   "source": "AdhocFromInvoice",

-   "sourceId": null,

-   "referredInvoiceId": "8a90d7a892d82d920192dbcb314501c7",

-   "reasonCode": "Correcting invoice error",

-   "createdDate": "2024-10-30 18:06:29",

-   "createdById": "2c92c8f95e2d6ebb015e325df48e02da",

-   "updatedDate": "2024-10-30 18:08:37",

-   "updatedById": "2c92c8f95e2d6ebb015e325df48e02da",

-   "cancelledOn": null,

-   "cancelledById": null,

-   "latestPDFFileId": null,

-   "transferredToAccounting": "No",

-   "excludeFromAutoApplyRules": false,

-   "autoApplyUponPosting": false,

-   "reversed": false,

-   "taxStatus": "Complete",

-   "sourceType": "Invoice",

-   "eInvoiceStatus": "Failed",

-   "eInvoiceErrorCode": "IntegrationError",

-   "eInvoiceErrorMessage": "Input string was null.",

-   "eInvoiceFileId": null,

-   "taxMessage": null,

-   "billToContactId": null,

-   "billToContactSnapshotId": "8a90b4488e7d5c0f018e7dbef1f900c9",

-   "sequenceSetId": null,

-   "invoiceGroupNumber": null,

-   "revenueImpacting": "Yes",

-   "success": true


}`
