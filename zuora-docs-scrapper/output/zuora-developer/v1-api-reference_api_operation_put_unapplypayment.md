---
title: "PUT UnapplyPayment"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_UnapplyPayment/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:02:38.616Z"
---

## Unapply a payment

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Unapplies an applied payment from invoices and debit memos.

When you unapply a payment, the total number of invoice items and debit memo items that the payment will unapply from must be less than or equal to 15,000.

If the limit is hit, you can follow the instructions:

-   If you want to unapply one payment without specifying invoices or debit memos, you have to specify the invoices or debit memos in the request.
-   If you want to unapply one payment from multiple specified invoices or debit memos, decrease the number of invoices or debit memos in the request.
-   If you want to unapply one payment from a single invoice or debit memo with a large volume of items, you have to specify invoice items in the request. The maximum number of invoice items that you can specify in the request is 1,000.

For more information, see [Unapply Payments from Invoices and Debit Memos](https://knowledgecenter.zuora.com/CB_Billing/Invoice_Settlement/A_Unapplied_Payments/Management_of_Unapplied_Payments/Unapply_Payments_from_Invoices_and_Debit_Memos).

Security**bearerAuth**

Request

##### path Parameters

| paymentKeyrequired | stringThe unique ID or number of an unapplied payment. For example, 8a8082e65b27f6c3015b89e4344c16b1, or P-00000001. |
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

| debitMemos | Array of objects (debitMemos)Container for debit memos. The maximum number of debit memos is 1,000. |
| --- | --- |
| effectiveDate | string <date>The date when the payment is unapplied, in yyyy-mm-dd format. The effective date must be later than or equal to the maximum effective date of the payment. |
| invoices | Array of objects (invoices)Container for invoices. The maximum number of invoice is 1,000. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/payments/{paymentKey}/unapply

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "invoices": [

    -   {

        -   "invoiceId": "8ad097b490c4e5aa0190c9b931817cef",

        -   "amount": 12


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

-   "id": "8ad0835290c4bb2f0190c9b5407c52a3",

-   "number": "P-00000018",

-   "status": "Processed",

-   "type": "External",

-   "accountId": "8ad097b490c4e5aa0190c9612d9c7034",

-   "accountNumber": "A00000122",

-   "amount": 14.99,

-   "appliedAmount": 0,

-   "unappliedAmount": 14.99,

-   "refundAmount": 0,

-   "creditBalanceAmount": 0,

-   "currency": "USD",

-   "effectiveDate": "2024-07-18",

-   "comment": null,

-   "paymentMethodId": "2c92c0f86cccaa59016cd5e0c41c0e89",

-   "paymentMethodSnapshotId": null,

-   "authTransactionId": null,

-   "bankIdentificationNumber": null,

-   "gatewayId": null,

-   "paymentGatewayNumber": null,

-   "gatewayOrderId": null,

-   "gatewayResponse": null,

-   "gatewayResponseCode": null,

-   "gatewayState": "NotSubmitted",

-   "markedForSubmissionOn": null,

-   "referenceId": null,

-   "secondPaymentReferenceId": null,

-   "softDescriptor": null,

-   "softDescriptorPhone": null,

-   "submittedOn": null,

-   "settledOn": null,

-   "cancelledOn": null,

-   "createdDate": "2024-07-18 23:36:57",

-   "createdById": "b243314d594646d3b2651aeedd4be47e",

-   "updatedDate": "2024-07-19 00:03:20",

-   "updatedById": "b243314d594646d3b2651aeedd4be47e",

-   "financeInformation": {

    -   "bankAccountAccountingCode": null,

    -   "bankAccountAccountingCodeType": null,

    -   "unappliedPaymentAccountingCode": "Accounts Receivable",

    -   "unappliedPaymentAccountingCodeType": "AccountsReceivable",

    -   "transferredToAccounting": false


    },

-   "gatewayReconciliationStatus": null,

-   "gatewayReconciliationReason": null,

-   "payoutId": null,

-   "success": true


}`
