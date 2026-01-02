---
title: "PUT UnpostDebitMemo"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_UnpostDebitMemo/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:56:54.829Z"
---

## Unpost a debit memo

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Unposts a debit memo that is in Posted status. If any credit memo or payment has been applied to a debit memo, you are not allowed to unpost the debit memo. After a debit memo is unposted, its status becomes Draft.

You can unpost debit memos only if you have the [Billing permissions](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles#Billing_Permissions).

You can prevent an unpost operation by configuring the 'Do not allow unposting invoices and memos if their revenue is already recognized in a closed accounting period' accounting rule. The default value of this rule is set to 'disabled.'

For more information, see [Configure Accounting Rules](https://knowledgecenter.zuora.com/Zuora_Payments/Zuora_Finance/D_Finance_Settings/D_Configure_Accounting_Rules#Do_not_allow_unposting_invoices_and_memos_if_their_revenue_is_already_recognized_in_a_closed_accounting_period).

Security**bearerAuth**

Request

##### path Parameters

| debitMemoKeyrequired | stringThe unique ID or number of a debit memo. For example, 8a8082e65b27f6c3015ba419f3c2644e or DM00000001. |
| --- | --- |

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

put/v1/debit-memos/{debitMemoKey}/unpost

Request samples

-   cURL

Copy

curl \-i \-X PUT \\
  'https://rest.test.zuora.com/v1/debit-memos/{debitMemoKey}/unpost' \\
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

`{

-   "accountId": "4028ab1f87121698018722f3af193744",

-   "accountNumber": "AN_Test11679918607694",

-   "amount": 100,

-   "autoPay": true,

-   "balance": 100,

-   "beAppliedAmount": 0,

-   "billToContactId": null,

-   "billToContactSnapshotId": null,

-   "cancelledById": null,

-   "cancelledOn": null,

-   "comment": "This is a comment",

-   "createdById": "c24f12918d5b45d0b7f9da297b8b7a9d",

-   "createdDate": "2023-03-27 17:33:29",

-   "currency": "USD",

-   "debitMemoDate": "2023-03-27",

-   "dueDate": "2023-03-27",

-   "einvoiceErrorCode": null,

-   "einvoiceErrorMessage": null,

-   "einvoiceFileId": null,

-   "einvoiceStatus": "Processing",

-   "id": "4028ab1f87121698018722f3b60c375b",

-   "invoiceGroupNumber": "N-0001",

-   "latestPDFFileId": "4028ab1f87121698018722f3bb0b376b",

-   "number": "DM00000001",

-   "organizationLabel": "MS US",

-   "paymentTerm": null,

-   "postedById": null,

-   "postedOn": null,

-   "reasonCode": "Correcting invoice error",

-   "referredCreditMemoId": "1a2b3c4d5e6f",

-   "referredInvoiceId": null,

-   "sequenceSetId": null,

-   "sourceType": "Standalone",

-   "status": "Draft",

-   "success": true,

-   "targetDate": null,

-   "taxAmount": 0,

-   "taxMessage": null,

-   "taxStatus": "Complete",

-   "totalTaxExemptAmount": 0,

-   "transferredToAccounting": "No",

-   "updatedById": "c24f12918d5b45d0b7f9da297b8b7a9d",

-   "updatedDate": "2023-03-27 17:33:42"


}`
