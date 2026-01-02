---
title: "PUT DebitMemo"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_DebitMemo/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:56:30.454Z"
---

## Update a debit memo

**Notes:**

-   This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
-   You can update a debit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.

Updates the basic and finance information about a debit memo.

Currently, Zuora supports updating tax-exclusive memo items, but does not support updating tax-inclusive memo items. If the amount of a memo item is updated, the tax will be recalculated in the following conditions:

-   The memo is created from a product rate plan charge and you use Avalara to calculate the tax.
-   The memo is created from an invoice and you use Avalara or Zuora Tax to calculate the tax.

The [Edit credit and debit memos](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Adjust_invoice_amounts/Invoice_Settlement/Credit_memos_and_debit_memos/AC_Management_of_credit_and_debit_memos/Edit_credit_and_debit_memos#Edit_credit_memos_and_debit_memos_through_the_API) tutorial demonstrates how to use this operation to add and delete memo items.

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

##### Request Body schema: application/json
required

| autoPay | booleanWhether debit memos are automatically picked up for processing in the corresponding payment run.By default, debit memos are automatically picked up for processing in the corresponding payment run. |
| --- | --- |
| comment | string [ 0 .. 255 ] charactersComments about the debit memo. |
| dueDate | string <date>The date by which the payment for the debit memo is due, in yyyy-mm-dd format. |
| effectiveDate | string <date>The date when the debit memo takes effect. |
| items | Array of objects (items)Container for debit memo items. |
| reasonCode | stringA code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code |
| transferredToAccounting | stringWhether the debit memo is transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.Enum: "Processing" "Yes" "No" "Error" "Ignore" |
| IntegrationId__NS | string <= 255 charactersID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| IntegrationStatus__NS | string <= 255 charactersStatus of the debit memo's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| SyncDate__NS | string <= 255 charactersDate when the debit memo was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| property name*additional property | anyCustom fields of the Debit Memo object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/debit-memos/{debitMemoKey}

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "comment": "Details about this Debit Memo"


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "accountId": "4028ab1f87121698018722f82d133fe4",

-   "accountNumber": "AN_Test11679918902100",

-   "amount": 100,

-   "autoPay": true,

-   "balance": 100,

-   "beAppliedAmount": 0,

-   "billToContactId": null,

-   "billToContactSnapshotId": null,

-   "cancelledById": null,

-   "cancelledOn": null,

-   "comment": "Details about this Debit Memo",

-   "createdById": "97e12d40f0ab4418a95a93118b272fb6",

-   "createdDate": "2023-03-27 17:38:24",

-   "currency": "USD",

-   "debitMemoDate": "2023-03-27",

-   "dueDate": "2023-03-27",

-   "einvoiceErrorCode": null,

-   "einvoiceErrorMessage": null,

-   "einvoiceFileId": null,

-   "einvoiceStatus": "Processing",

-   "id": "4028ab1f87121698018722f8335b3ffb",

-   "invoiceGroupNumber": "N-0001",

-   "latestPDFFileId": "ac1ebc24569sd",

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

-   "updatedById": "97e12d40f0ab4418a95a93118b272fb6",

-   "updatedDate": "2023-03-27 17:38:27"


}`
