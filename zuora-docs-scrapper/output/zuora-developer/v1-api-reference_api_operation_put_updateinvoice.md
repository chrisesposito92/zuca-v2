---
title: "PUT UpdateInvoice"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_UpdateInvoice/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:54:19.282Z"
---

## Update an invoice

Updates a specific invoice. The following tutorials demonstrate how to use this operation:

-   [Add and delete invoice items of draft standalone invoices](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_both_subscription_and_non-subscription_transactions/Unified_Invoicing/D_Add_and_delete_invoice_items_of_draft_standalone_invoices)
-   [Edit due dates of draft standalone invoices](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_both_subscription_and_non-subscription_transactions/Unified_Invoicing/Edit_due_dates_of_draft_standalone_invoices)
-   [Edit invoice item prices and custom fields of draft standalone invoices](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_both_subscription_and_non-subscription_transactions/Unified_Invoicing/Edit_invoice_item_prices_and_custom_fields_of_draft_standalone_invoices)

Security**bearerAuth**

Request

##### path Parameters

| invoiceKeyrequired | stringThe ID or number of the invoice. For example, 2c92c8955bd63cc1015bd7c151af02ab or INV-0000001. |
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

| autoPay | booleanWhether invoices are automatically picked up for processing in the corresponding payment run. By default, invoices are automatically picked up for processing in the corresponding payment run. |
| --- | --- |
| comments | string <= 255 charactersAdditional information related to the invoice that a Zuora user added to the invoice. |
| dueDate | string <date>The date by which the payment for this invoice is due. |
| invoiceDate | string <date>The new invoice date of the invoice. The new invoice date cannot fall in a closed accounting period. You can only specify invoiceDate or dueDate in one request. Otherwise, an error occurs. |
| invoiceItems | Array of objects (PutInvoiceItemType)Container for invoice items, The maximum number of items is 1,000. |
| transferredToAccounting | stringWhether the invoice was transferred to an external accounting system.Enum: "Processing" "Yes" "Error" "Ignore" |
| templateId | stringThe ID of the invoice template associated with the invoice.Note: This field is only available if you have the Flexible Billing Attributes feature enabled. |
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

put/v1/invoices/{invoiceKey}

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "invoiceItems": [

    -   {

        -   "id": "8ad084db909fae930190a121c87f5800",

        -   "amount": 105


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

-   "number": "INV00000155",

-   "accountId": "8ad09be48db5aba7018db604776d4854",

-   "invoiceDate": "2024-07-30",

-   "currency": "USD",

-   "targetDate": null,

-   "dueDate": "2024-08-29",

-   "postedOn": null,

-   "postedById": null,

-   "status": "Draft",

-   "amount": 105,

-   "taxAmount": 0,

-   "totalTaxExemptAmount": 0,

-   "balance": 105,

-   "discount": 0,

-   "comment": null,

-   "autoPay": false,

-   "transferredToAccounting": false,

-   "creditBalanceAdjustmentAmount": 0,

-   "createdDate": "2024-07-11 02:31:04",

-   "createdById": "b243314d594646d3b2651aeedd4be47e",

-   "updatedDate": "2024-07-11 02:43:45",

-   "updatedById": "b243314d594646d3b2651aeedd4be47e",

-   "cancelledOn": null,

-   "cancelledById": null,

-   "success": true


}`
