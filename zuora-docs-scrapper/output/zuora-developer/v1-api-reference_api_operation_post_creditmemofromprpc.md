---
title: "POST CreditMemoFromPrpc"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_CreditMemoFromPrpc/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:54:43.814Z"
---

## Create a credit memo from a charge

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Creates an ad-hoc credit memo from a product rate plan charge. Zuora supports the creation of credit memos from any type of product rate plan charge. The charges can also have any amount and any charge model, except for discout charge models.

When credit memos are created from product rate plan charges, the specified amount with decimal places is now validated based on the decimal places supported by each currency.

You can create a credit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.

Security**bearerAuth**

Request

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

| accountId | stringThe ID of the account associated with the credit memo.Note: When creating credit memos from product rate plan charges, you must specify accountNumber, accountId, or both in the request body. If both fields are specified, they must correspond to the same account. |
| --- | --- |
| accountNumber | stringThe number of the customer account associated with the credit memo.Note: When creating credit memos from product rate plan charges, you must specify accountNumber, accountId, or both in the request body. If both fields are specified, they must correspond to the same account. |
| autoPost | booleanDefault: falseWhether to automatically post the credit memo after it is created.Setting this field to true, you do not need to separately call the Post a credit memo operation to post the credit memo. |
| charges | Array of objects (charges) <= 1000 itemsContainer for product rate plan charges. The maximum number of items is 1,000. |
| comment | stringComments about the credit memo. |
| currency | stringThe code of a currency as defined in Billing Settings through the Zuora UI.If you do not specify a currency during credit memo creation, the default account currency is applied. The currency that you specify in the request must be configured and activated in Billing Settings. Note: This field is available only if you have the Multiple Currencies feature enabled. |
| customRates | Array of objects (customRates) <= 2 itemsIt contains Home currency and Reporting currency custom rates currencies. The maximum number of items is 2 (you can pass the Home currency item or Reporting currency item or both).Note:The API custom rate feature is permission controlled.You cannot set the custom rates, if both the Automatically include additional Currency Conversion information in data source exports option and Fx data feature are enabled.CreditMemo, CreditMemoItem, and CreditMemoItemTax will utilize the provided custom Fx rate to convert amounts from the transactional currency to the home currency. |
| effectiveDate | string <date>The date when the credit memo takes effect. |
| excludeFromAutoApplyRules | booleanDefault: falseWhether the credit memo is excluded from the rule of automatically applying unapplied credit memos to invoices and debit memos during payment runs. If you set this field to true, a payment run does not pick up this credit memo or apply it to other invoices or debit memos. |
| number | string <= 32 charactersA customized credit memo number with the following format requirements:Max length: 32 charactersAcceptable characters: a-z,A-Z,0-9,-,_The value must be unique in the system, otherwise it may cause issues with bill runs and subscriptions.If not provided, Zuora will generate a unique number per the sequence set on the account level. If the account-level sequence set is not specified, the system default sequence set is used. For more information, see Configure prefix and numbering for billing documents. |
| reasonCode | stringA code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code. |
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

post/v1/credit-memos

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "accountId": "8ad09be48db5aba7018db604776d4854",

-   "charges": [

    -   {

        -   "amount": 10,

        -   "productRatePlanChargeId": "8ad097b4909708e001909b41bb085d38"


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

-   "id": "8ad08f0091698a7a01916e70df165b3b",

-   "number": "CM00000010",

-   "accountId": "8ad09be48db5aba7018db604776d4854",

-   "accountNumber": "A00000097",

-   "currency": "USD",

-   "creditMemoDate": "2024-08-19",

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

-   "source": "AdhocFromPrpc",

-   "sourceId": null,

-   "referredInvoiceId": null,

-   "reasonCode": "Correcting invoice error",

-   "createdDate": "2024-08-19 23:19:36",

-   "createdById": "b243314d594646d3b2651aeedd4be47e",

-   "updatedDate": "2024-08-19 23:19:36",

-   "updatedById": "b243314d594646d3b2651aeedd4be47e",

-   "cancelledOn": null,

-   "cancelledById": null,

-   "latestPDFFileId": "ac1ebc24569sd",

-   "transferredToAccounting": "No",

-   "excludeFromAutoApplyRules": false,

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
