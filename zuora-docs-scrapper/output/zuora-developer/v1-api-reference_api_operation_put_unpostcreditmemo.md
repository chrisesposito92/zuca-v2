---
title: "PUT UnpostCreditMemo"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_UnpostCreditMemo/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:55:24.385Z"
---

## Unpost a credit memo

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Unposts a credit memo that is in Posted status. If a credit memo has been applied or refunded, you are not allowed to unpost it. After a credit memo is unposted, its status becomes Draft.

You can unpost credit memos only if you have the [Billing permissions](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles#Billing_Permissions).

You can prevent an unpost operation by configuring the 'Do not allow unposting invoices and memos if their revenue is already recognized in a closed accounting period' accounting rule. The default value of this rule is set to 'disabled.'

For more information, see [Configure Accounting Rules](https://knowledgecenter.zuora.com/Zuora_Payments/Zuora_Finance/D_Finance_Settings/D_Configure_Accounting_Rules#Do_not_allow_unposting_invoices_and_memos_if_their_revenue_is_already_recognized_in_a_closed_accounting_period).

Security**bearerAuth**

Request

##### path Parameters

| creditMemoKeyrequired | stringThe unique ID or number of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172 or CM00000001. |
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

put/v1/credit-memos/{creditMemoKey}/unpost

Request samples

-   cURL

Copy

curl \-i \-X PUT \\
  'https://rest.test.zuora.com/v1/credit-memos/{creditMemoKey}/unpost' \\
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

-   "accountId": "402890555a7e9791015a7f15fe44001c",

-   "accountNumber": "A00000001",

-   "amount": 3.1,

-   "appliedAmount": 0,

-   "autoApplyUponPosting": false,

-   "billToContactId": null,

-   "billToContactSnapshotId": null,

-   "cancelledById": null,

-   "cancelledOn": null,

-   "comment": "",

-   "createdById": "402881e522cf4f9b0122cf5d82860002",

-   "createdDate": "2017-03-01 10:07:10",

-   "creditMemoDate": "2017-03-01",

-   "currency": "USD",

-   "einvoiceErrorCode": null,

-   "einvoiceErrorMessage": null,

-   "einvoiceFileId": null,

-   "einvoiceStatus": "Processing",

-   "excludeFromAutoApplyRules": false,

-   "id": "402890555a7e9791015a879f064a0054",

-   "invoiceGroupNumber": "N-0001",

-   "latestPDFFileId": "ac1ebc24569sd",

-   "number": "CM00000012",

-   "postedById": "402881e522cf4f9b0122cf5d82860002",

-   "postedOn": "2017-03-01 14:28:06",

-   "reasonCode": "Correcting invoice error",

-   "referredInvoiceId": "402890555a7e9791015a7f1756aa0035",

-   "refundAmount": 0,

-   "reversed": false,

-   "sequenceSetId": null,

-   "source": "API",

-   "sourceId": null,

-   "sourceType": "Standalone",

-   "status": "Draft",

-   "success": true,

-   "targetDate": null,

-   "taxAmount": 0.1,

-   "taxMessage": null,

-   "taxStatus": "Complete",

-   "totalTaxExemptAmount": 0,

-   "transferredToAccounting": "No",

-   "unappliedAmount": 3.1,

-   "updatedById": "402881e522cf4f9b0122cf5d82860002",

-   "updatedDate": "2017-03-01 14:28:06"


}`
