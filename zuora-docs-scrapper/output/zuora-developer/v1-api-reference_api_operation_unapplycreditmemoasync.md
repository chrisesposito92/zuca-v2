---
title: "UnapplyCreditMemoAsync"
url: "https://developer.zuora.com/v1-api-reference/api/operation/unapplyCreditMemoAsync/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:56:05.433Z"
---

## Unapply a credit memo asynchronously

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. Asynchronously Unapplies an applied credit memo from one or more invoices. The full applied amount from invoices is transferred into the unapplied amount of the credit memo.

You can unapply a credit memo from an invoice only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) When you unapply a credit memo, the total number of credit memo items and the items that credit memo items to be unapplied from must be less than or equal to 300,000. The maximum number of invoices that you can specify in the request is 1,000

Security**bearerAuth**

Request

##### path Parameters

| creditMemoKeyrequired | stringThe unique ID or number of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |

##### Request Body schema: application/json
required

| effectiveDate | string <date>The date when the credit memo is unapplied. |
| --- | --- |
| invoices | Array of objects (UnappliedInvoice)Container for invoices that the credit memo is unapplied. The maximum number of invoices is 1,000. |

Responses

200

4XX

Request Errors

put/v1/credit-memos/{creditMemoKey}/unapply-async

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "effectiveDate": "2017-03-02",

-   "invoices": [

    -   {

        -   "amount": 1,

        -   "invoiceId": "4028905f5a87c0ff015a87d3f8f10043"


        }


    ]


}`

Response samples

-   200
-   4XX

application/json

Copy

`{

-   "id": "8a92ade496140e830196148cd0af000a",

-   "status": "Pending",

-   "operationType": "AsyncCreditMemoUnapply",

-   "referenceId": "8a8082e65b27f6c3015ba45ff82c7172",

-   "referenceType": "CreditMemo",

-   "error": null,

-   "success": true


}`
