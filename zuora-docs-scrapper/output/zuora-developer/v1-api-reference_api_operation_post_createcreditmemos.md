---
title: "POST CreateCreditMemos"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_CreateCreditMemos/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:54:43.992Z"
---

## Create credit memos

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Creates multiple credit memos from invoices or product rate plan charges. You can create a maximum of 50 credit memos in one single request.

-   If you set the `sourceType` request field to `Invoice`, you can create multiple credit memos from invoices.
-   If you set the `sourceType` request field to `Standalone`, you can create multiple credit memos from product rate plan charges.

The credit memos that are created are each in separate database transactions. If the creation of one credit memo fails, other credit memos can still be created successfully.

You can create credit memos only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.

Zero-amount memo items are supported in the following scenarios:

-   If you want to correct taxation items only for an invoice, you can set the memo item amount to zero, but the taxation item amount to non-zero.
-   If you want to correct personal data in an invoice, you can set the memo item amount to zero to create a zero-amount credit memo from an invoice.

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

| sourceTyperequired | stringThe type of the source where credit memos are created.This enum field has the following values:Invoice: By setting this field to Invoice, you can create multiple credit memos from invoices.Standalone: By setting this field to Standalone, you can create multiple credit memos from product rate plan charges.The specific schema of the memos object field in the request body depends on the value of the sourceType field.To view the memos schema applicable to credit memo creation from invoices, select Invoice from the following drop-down list.To view the memos schema applicable to credit memo creation from product rate plan charges, select Standalone from the following drop-down list.StandaloneInvoiceInvoice |
| --- | --- |
| memos | Array of objects (memos) <= 50 itemsThe container for a list of credit memos. The maximum number of credit memos is 50. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/credit-memos/bulk

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

        -   "invoiceId": "8a90d7a892d82d920192dbcb314501c7",

        -   "items": [

            -   {

                -   "amount": 10,

                -   "invoiceItemId": "8a90d7a892d82d920192dbcb31f401c8",

                -   "skuName": "SKU-00000707"


                }


            ]


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

        -   "accountId": "ff8080817fe9d7b9017fe9e5234d04cb",

        -   "accountNumber": "A00000001",

        -   "amount": 100,

        -   "appliedAmount": 0,

        -   "autoApplyUponPosting": false,

        -   "billToContactId": null,

        -   "billToContactSnapshotId": null,

        -   "cancelledById": null,

        -   "cancelledOn": null,

        -   "comment": "test",

        -   "createdById": "ff8080817fe9d7b9017fe9e41732030e",

        -   "createdDate": "2022-04-02 18:49:47",

        -   "creditMemoDate": "2022-04-02",

        -   "currency": "USD",

        -   "einvoiceErrorCode": null,

        -   "einvoiceErrorMessage": null,

        -   "einvoiceFileId": null,

        -   "einvoiceStatus": "Processing",

        -   "excludeFromAutoApplyRules": false,

        -   "id": "ff8080817fe9d7b9017fe9e5382f04f5",

        -   "invoiceGroupNumber": "N-0001",

        -   "latestPDFFileId": "ac1ebc24569sd",

        -   "number": "CM00000001",

        -   "postedById": null,

        -   "postedOn": null,

        -   "reasonCode": "Correcting invoice error",

        -   "referredInvoiceId": "ff8080817fe9d7b9017fe9e5317f04e0",

        -   "refundAmount": 0,

        -   "reversed": false,

        -   "sequenceSetId": null,

        -   "source": "AdhocFromInvoice",

        -   "sourceId": null,

        -   "sourceType": "Invoice",

        -   "status": "Draft",

        -   "success": true,

        -   "targetDate": null,

        -   "taxAmount": 0,

        -   "taxMessage": null,

        -   "taxStatus": "Complete",

        -   "totalTaxExemptAmount": 0,

        -   "transferredToAccounting": "No",

        -   "unappliedAmount": 100,

        -   "updatedById": "ff8080817fe9d7b9017fe9e41732030e",

        -   "updatedDate": "2022-04-02 18:49:47"


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
