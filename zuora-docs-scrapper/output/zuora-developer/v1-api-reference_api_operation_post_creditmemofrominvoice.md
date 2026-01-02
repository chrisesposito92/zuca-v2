---
title: "POST CreditMemoFromInvoice"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_CreditMemoFromInvoice/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:56:05.464Z"
---

## Create a credit memo from an invoice

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Creates an ad-hoc credit memo from an invoice.

You can create a credit memo from an invoice only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.

For a use case of this operation, see [Create credit memo](https://developer.zuora.com/rest-api/general-concepts/authentication//#Create-credit-memo).

Zero-amount memo items are supported in the following scenarios:

-   If you want to correct taxation items only for an invoice, you can set the memo item amount to zero, but the taxation item amount to non-zero.
-   If you want to correct personal data in an invoice, you can set the memo item amount to zero to create a zero-amount credit memo from an invoice.

Security**bearerAuth**

Request

##### path Parameters

| invoiceKeyrequired | stringThe ID or number of an invoice that you want to create a credit memo from. For example, 2c93808457d787030157e030d10f3f64 or INV00000001. |
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

| autoApplyToInvoiceUponPosting | booleanWhether the credit memo automatically applies to the invoice upon posting. |
| --- | --- |
| autoPost | booleanDefault: falseWhether to automatically post the credit memo after it is created. Setting this field to true, you do not need to separately call the Post credit memo operation to post the credit memo. |
| comment | string [ 0 .. 255 ] charactersComments about the credit memo. |
| effectiveDate | string <date>The date when the credit memo takes effect. |
| excludeFromAutoApplyRules | booleanWhether the credit memo is excluded from the rule of automatically applying credit memos to invoices. |
| invoiceIdrequired | stringThe ID of the invoice that the credit memo is created from. |
| items | Array of objects (items) <= 1000 itemsContainer for items. The maximum number of items is 1,000. |
| reasonCode | stringA code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code. |
| taxAutoCalculation | booleanDefault: trueWhether to automatically calculate taxes in the credit memo. |
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

post/v1/credit-memos/invoice/{invoiceKey}

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "invoiceId": "8a90d7a892d82d920192dbcb314501c7",

-   "items": [

    -   {

        -   "amount": 10,

        -   "invoiceItemId": "8a90d7a892d82d920192dbcb31f401c8",

        -   "skuName": "SKU-00000707"


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

-   "id": "8a90e4a792d82d8c0192dbda90671d66",

-   "number": "CM00000618",

-   "accountId": "8a90b4488e7d5c0f018e7db3892400b2",

-   "accountNumber": "A00000370",

-   "currency": "USD",

-   "creditMemoDate": "2024-10-30",

-   "targetDate": null,

-   "postedById": null,

-   "postedOn": null,

-   "status": "Draft",

-   "amount": 10,

-   "taxAmount": 0,

-   "totalTaxExemptAmount": 0,

-   "unappliedAmount": 10,

-   "refundAmount": 0,

-   "appliedAmount": 0,

-   "comment": null,

-   "source": "AdhocFromInvoice",

-   "sourceId": null,

-   "referredInvoiceId": "8a90d7a892d82d920192dbcb314501c7",

-   "reasonCode": "Correcting invoice error",

-   "createdDate": "2024-10-30 13:16:27",

-   "createdById": "2c92c8f95e2d6ebb015e325df48e02da",

-   "updatedDate": "2024-10-30 13:16:27",

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

-   "eInvoiceStatus": null,

-   "eInvoiceErrorCode": null,

-   "eInvoiceErrorMessage": null,

-   "eInvoiceFileId": null,

-   "taxMessage": null,

-   "billToContactId": null,

-   "billToContactSnapshotId": null,

-   "sequenceSetId": null,

-   "invoiceGroupNumber": null,

-   "revenueImpacting": "Yes",

-   "success": true


}`
