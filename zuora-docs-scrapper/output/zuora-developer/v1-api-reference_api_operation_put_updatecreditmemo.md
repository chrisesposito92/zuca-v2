---
title: "PUT UpdateCreditMemo"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_UpdateCreditMemo/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:55:07.963Z"
---

## Update a credit memo

**Notes:**

-   This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
-   You can update a credit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.

Updates the basic and finance information about a credit memo.

Currently, Zuora supports updating tax-exclusive memo items, but does not support updating tax-inclusive memo items. If the amount of a memo item is updated, the tax will be recalculated in the following conditions:

-   The memo is created from a product rate plan charge and you use Avalara to calculate the tax.
-   The memo is created from an invoice and you use Avalara or Zuora Tax to calculate the tax.

The [Edit credit and debit memos](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Adjust_invoice_amounts/Invoice_Settlement/Credit_memos_and_debit_memos/AC_Management_of_credit_and_debit_memos/Edit_credit_and_debit_memos#Edit_credit_memos_and_debit_memos_through_the_API) tutorial demonstrates how to use this operation to add and delete memo items.

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

##### Request Body schema: application/json
required

| autoApplyUponPosting | booleanWhether the credit memo automatically applies to the invoice upon posting. |
| --- | --- |
| comment | string [ 0 .. 255 ] charactersComments about the credit memo. |
| effectiveDate | string <date>The date when the credit memo takes effect. |
| excludeFromAutoApplyRules | booleanWhether the credit memo is excluded from the rule of automatically applying unapplied credit memos to invoices and debit memos during payment runs. If you set this field to true, a payment run does not pick up this credit memo or apply it to other invoices or debit memos. |
| items | Array of objects (items)Container for credit memo items. |
| reasonCode | stringA code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code. |
| transferredToAccounting | stringWhether the credit memo is transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.Enum: "Processing" "Yes" "No" "Error" "Ignore" |
| IntegrationId__NS | string <= 255 charactersID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| IntegrationStatus__NS | string <= 255 charactersStatus of the credit memo's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| Origin__NS | string <= 255 charactersOrigin of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| SyncDate__NS | string <= 255 charactersDate when the credit memo was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| Transaction__NS | string <= 255 charactersRelated transaction in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| property name*additional property | anyCustom fields of the Credit Memo object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/credit-memos/{creditMemoKey}

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "comment": "Details about this Credit Memo"


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "id": "8ad081dd91698b2801916e637b19583f",

-   "number": "CM00000008",

-   "accountId": "8ad09be48db5aba7018db604776d4854",

-   "accountNumber": "A00000097",

-   "currency": "USD",

-   "creditMemoDate": "2024-08-19",

-   "targetDate": null,

-   "postedById": null,

-   "postedOn": null,

-   "status": "Draft",

-   "amount": 14.99,

-   "taxAmount": 0,

-   "totalTaxExemptAmount": 0,

-   "unappliedAmount": 14.99,

-   "refundAmount": 0,

-   "appliedAmount": 0,

-   "comment": "Details about this Credit Memo",

-   "source": "AdhocFromPrpc",

-   "sourceId": null,

-   "referredInvoiceId": null,

-   "reasonCode": "Ad hoc credit",

-   "createdDate": "2024-08-19 23:04:59",

-   "createdById": "8ad09fc28193c189018194da28be74ba",

-   "updatedDate": "2024-08-19 23:05:55",

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
