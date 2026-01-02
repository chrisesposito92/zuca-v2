---
title: "POST CreateDebitMemos"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_CreateDebitMemos/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:55:46.613Z"
---

## Create debit memos

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Creates multiple debit memos from invoices or product rate plan charges. You can create a maximum of 50 debit memos in one single request.

-   If you set the `sourceType` request field to `Invoice`, you can create multiple debit memos from invoices.
-   If you set the `sourceType` request field to `Standalone`, you can create multiple debit memos from product rate plan charges.

The debit memos that are created are each in separate database transactions. If the creation of one debit memo fails, other debit memos can still be created successfully.

You can create debit memos only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.

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

| sourceTyperequired | stringThe type of the source where debit memos are created.This enum field has the following values:Invoice: By setting this field to Invoice, you can create multiple debit memos from invoices.Standalone: By setting this field to Standalone, you can create multiple debit memos from product rate plan charges.The specific schema of the memos object field in the request body depends on the value of the sourceType field.To view the memos schema applicable to debit memo creation from invoices, select Invoice from the following drop-down list.To view the memos schema applicable to debit memo creation from product rate plan charges, select Standalone from the following drop-down list.StandaloneInvoiceInvoice |
| --- | --- |
| memos | Array of objects (memos) <= 50 itemsThe container for a list of debit memos. The maximum number of debit memos is 50. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/debit-memos/bulk

Request samples

-   Payload
-   cURL

application/json

InvoiceStandaloneInvoice

Copy

Expand allCollapse all

`{

-   "sourceType": "Invoice",

-   "memos": [

    -   {

        -   "invoiceId": "8a90cc5c9301541f01930186636b1400",

        -   "effectiveDate": "2024-11-11",

        -   "items": [

            -   {

                -   "amount": 10,

                -   "invoiceItemId": "8a90cc5c9301541f0193018663aa1413",

                -   "skuName": "SKU-00000591"


                }


            ],

        -   "reasonCode": "Correcting invoice error"


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

-   "memos": [

    -   {

        -   "accountId": "4028ab1f87121698018712fef63e33cb",

        -   "accountNumber": "AN_Test11679650911374",

        -   "amount": 100,

        -   "autoPay": true,

        -   "balance": 100,

        -   "beAppliedAmount": 0,

        -   "billToContactId": null,

        -   "billToContactSnapshotId": null,

        -   "cancelledById": null,

        -   "cancelledOn": null,

        -   "comment": "This is a comment",

        -   "createdById": "3e2bcd869cea43eeb00d7a20cc1cb72b",

        -   "createdDate": "2023-03-24 15:12:01",

        -   "currency": "USD",

        -   "debitMemoDate": "2023-03-24",

        -   "dueDate": "2023-03-24",

        -   "einvoiceErrorCode": null,

        -   "einvoiceErrorMessage": null,

        -   "einvoiceFileId": null,

        -   "einvoiceStatus": "Processing",

        -   "id": "4028ab1f87121698018712ff1b0633e2",

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

        -   "updatedById": "3e2bcd869cea43eeb00d7a20cc1cb72b",

        -   "updatedDate": "2023-03-24 15:12:01"


        },

    -   {

        -   "objectIndex": 1,

        -   "processId": "0356073CB721291A",

        -   "reasons": [

            -   {

                -   "code": 50000040,

                -   "message": "Cannot find a Invoice instance with id test."


                }


            ],

        -   "success": false


        }


    ],

-   "success": true


}`
