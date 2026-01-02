---
title: "PUT BatchUpdateInvoices"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_BatchUpdateInvoices/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:53:21.579Z"
---

## Update invoices

Updates multiple invoices in batches with one call. The following tutorials demonstrate how to use this operation:

-   [Add and delete invoice items of draft standalone invoices](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_both_subscription_and_non-subscription_transactions/Unified_Invoicing/D_Add_and_delete_invoice_items_of_draft_standalone_invoices)
-   [Edit due dates of draft standalone invoices](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_both_subscription_and_non-subscription_transactions/Unified_Invoicing/Edit_due_dates_of_draft_standalone_invoices)
-   [Edit invoice item prices and custom fields of draft standalone invoices](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_both_subscription_and_non-subscription_transactions/Unified_Invoicing/Edit_invoice_item_prices_and_custom_fields_of_draft_standalone_invoices)

### Limitations

-   You can update a maximum of 50 invoices by one call.

Security**bearerAuth**

Request

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

| invoices | Array of objects (invoices)Container for invoice update details. |
| --- | --- |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/invoices

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "invoices": [

    -   {

        -   "id": "2c93808457d787030157e031d86c4c57",

        -   "invoiceDate": "2017-12-16"


        },

    -   {

        -   "id": "2c92c8955bd63cc1015bd7c151af02ab",

        -   "invoiceDate": "2017-12-16"


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

-   "success": true


}`
