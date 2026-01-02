---
title: "POST StandaloneInvoice"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_StandaloneInvoice/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:53:22.593Z"
---

## Create a standalone invoice

Creates a standalone invoice for selling physical goods, services or other items on a non-recurring basis to your subscription customers.

To use this operation, you must have the **Modify Invoice** and at least one of the **Create Standalone Invoice With Product Catalog** or **Create Standalone Invoice Without Product Catalog** user permissions. See [Billing Roles](https://knowledgecenter.zuora.com/Zuora_Platform/System_Management/Administrator_Settings/User_Roles/d_Billing_Roles) for more information.

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

| accountId | stringThe ID of the account associated with the invoice.You must specify either accountNumber or accountId for a customer account. If both of them are specified, they must refer to the same customer account. |
| --- | --- |
| accountNumber | stringThe Number of the account associated with the invoice. You must specify either accountNumber or accountId for a customer account. If both of them are specified, they must refer to the same customer account. |
| autoPay | booleanDefault: falseWhether invoices are automatically picked up for processing in the corresponding payment run. |
| billToContact | object (Contact)Container for bill-to, sold-to, or ship-to contact information. A new Contact will be created under the invoice owner account.Note: If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body. |
| billToContactId | stringThe ID of the bill-to contact associated with the invoice. This field is mutually exclusive with the billToContact field.Note: If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body. |
| comments | stringComments about the invoice. |
| currency | stringThe code of a currency as defined in Billing Settings through the Zuora UI.If you do not specify a currency during standalone invoice creation, the default account currency is applied. The currency that you specify in the request must be configured and activated in Billing Settings. Note: This field is available only if you have the Multiple Currencies feature enabled. |
| customRates | Array of objects (customRates) <= 2 itemsIt contains Home currency and Reporting currency custom rates currencies. The maximum number of items is 2 (you can pass the Home currency item or Reporting currency item or both).Note:This field is available only if you are on the latest Zuora API minor version, or you set the Zuora-Version request header to 224.0 or a later available version.You cannot set the custom rates, if both the Automatically include additional Currency Conversion information in data source exports option and Fx data feature are enabled.Invoice, InvoiceItem, and TaxationItem will utilize the provided custom Fx rate to convert amounts from the transactional currency to the home currency. |
| dueDate | string <date>The date by which the payment for this invoice is due, in yyyy-mm-dd format. |
| invoiceDaterequired | string <date>The date that appears on the invoice being created, in yyyy-mm-dd format. The value cannot fall in a closed accounting period. |
| invoiceItems | Array of objects (PostInvoiceItemType)Container for invoice items. The maximum number of invoice items is 1,000.You must have corresponding billing permissions to create invoice items from existing product rate plan charges or new charges. For more information about billing permissions, see Billing Roles.To create an invoice item from an existing charge, you must have the Create Standalone Invoice With Product Catalog permission and specify the charge ID in the productRatePlanChargeId field.To create an invoice item from a new charge, you must have the Create Standalone Invoice Without Product Catalog permission without specifying the productRatePlanChargeId field.Note: For the "Create a standalone invoice" and "Create standalone invoices" operations, note the following:If tax has been calculated by an external tax engine, you need to create a standalone invoice with both invoiceItems and taxItems. The taxItems corresponds to the tax information processed by this external tax engine. In this case, you should not specify the taxMode and taxCode nested fields of the invoiceItems field. Instead, you need to specify the taxMode and taxCode nested fields of the taxItems field. You need to specify the taxMode field as TaxExclusive.If tax has not been calculated by an external tax engine, you can create a standalone invoice only with invoiceItems, and decide whether Zuora includes the tax in the quoted charge price and invoice item by specifying the taxMode nested field of the invoiceItems field as either TaxExclusive or TaxInclusive. Meanwhile, you need to specify the taxCode field, indicating the charge price and invoice item are taxable. |
| invoiceNumber | stringA customized invoice number with the following format requirements:Max length: 32 charactersAcceptable characters: a-z,A-Z,0-9,-,_,Purely numerical prefixes or prefixes ending with a number are supported for standalone invoices. For example, you can use 202310000300, 2003, INV202310000300, or 2023-09-100009785 as invoice numbers.The value must be unique in the system, otherwise it may cause issues with bill runs and subscribe/amend. Check out things to note and troubleshooting steps. |
| paymentTerm | stringThe ID or name of the payment term associated with the invoice. For example, Net 30. The payment term determines the due dates of invoices.Note: If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body. |
| sequenceSet | stringThe ID or name of the sequence set associated with the invoice.Note: If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body. |
| shipToContact | object (Contact)Container for bill-to, sold-to, or ship-to contact information. A new Contact will be created under the invoice owner account.Note: If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body. |
| shipToContactId | stringThe ID of the ship-to contact associated with the invoice. This field is mutually exclusive with the shipToContact field. Note: If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body. |
| shipToSameAsBillTo | booleanDefault: falseWhether the ship-to contact and bill-to contact are the same entity. This field is mutually exclusive with the shipToContact and shipToContactId fields.The created invoice has the same bill-to contact and ship-to contact entity only when all the following conditions are met in the request body:This field is set to true.A bill-to contact or bill-to contact ID is specified.Neither ship-to contact nor ship-to contact ID is specified.Note: If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body. |
| soldToContact | object (Contact)Container for bill-to, sold-to, or ship-to contact information. A new Contact will be created under the invoice owner account.Note: If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body. |
| soldToContactId | stringThe ID of the sold-to contact associated with the invoice. This field is mutually exclusive with the soldToContact field.Note: If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body. |
| soldToSameAsBillTo | booleanDefault: falseWhether the sold-to contact and bill-to contact are the same entity. This field is mutually exclusive with the soldToContact and soldToContactId fields.The created invoice has the same bill-to contact and sold-to contact entity only when all the following conditions are met in the request body:This field is set to true.A bill-to contact or bill-to contact ID is specified.Neither sold-to contact nor sold-to contact ID is specified.Note: If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body. |
| status | stringDefault: "Draft"The status of invoice. By default, the invoice status is Draft.When creating an invoice, if you set this field to Posted, the invoice is created and posted directly.Enum: "Draft" "Posted" |
| templateId | stringThe ID of the invoice template associated with the invoice.Note: If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body. |
| transferredToAccounting | stringEnum: "Processing" "Error" "Ignore" "Yes" "No" |
| IntegrationId__NS | string <= 255 charactersID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| IntegrationStatus__NS | string <= 255 charactersStatus of the invoice's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| SyncDate__NS | string <= 255 charactersDate when the invoice was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| property name*additional property | anyCustom fields of the Invoice object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/invoices

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "accountId": "8ad09be48db5aba7018db604776d4854",

-   "invoiceDate": "2024-07-30",

-   "invoiceItems": [

    -   {

        -   "amount": 100,

        -   "serviceStartDate": "2024-07-11",

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

-   "id": "8ad084db909fae930190a121c84957ff",

-   "invoiceNumber": "INV00000155",

-   "accountId": "8ad09be48db5aba7018db604776d4854",

-   "amount": 100,

-   "amountWithoutTax": 100,

-   "discount": 0,

-   "invoiceDate": "2024-07-30",

-   "dueDate": "2024-08-29",

-   "autoPay": false,

-   "comments": null,

-   "status": "Draft",

-   "taxAmount": 0,

-   "taxExemptAmount": 0,

-   "transferredToAccounting": null,

-   "sourceType": "Standalone",

-   "billToContactId": null,

-   "soldToContactId": null,

-   "templateId": null,

-   "paymentTerm": null,

-   "sequenceSetId": null,

-   "adjustmentAmount": 0,

-   "balance": 100,

-   "billToContactSnapshotId": null,

-   "creditMemoAmount": 0,

-   "includesOneTime": true,

-   "includesRecurring": true,

-   "includesUsage": true,

-   "lastEmailSentDate": null,

-   "paymentAmount": 0,

-   "postedBy": null,

-   "postedDate": null,

-   "refundAmount": 0,

-   "soldToContactSnapshotId": null,

-   "source": "API",

-   "sourceId": null,

-   "targetDate": null,

-   "taxMessage": null,

-   "taxStatus": "Complete",

-   "createdById": "b243314d594646d3b2651aeedd4be47e",

-   "createdDate": "2024-07-11 02:31:04",

-   "updatedById": "b243314d594646d3b2651aeedd4be47e",

-   "updatedDate": "2024-07-11 02:31:04",

-   "billRunId": null,

-   "currency": "USD",

-   "invoiceGroupNumber": null,

-   "success": true


}`
