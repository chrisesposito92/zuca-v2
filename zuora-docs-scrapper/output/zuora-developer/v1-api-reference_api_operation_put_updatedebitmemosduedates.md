---
title: "PUT UpdateDebitMemosDueDates"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_UpdateDebitMemosDueDates/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:56:05.844Z"
---

## Update due dates for debit memos

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Updates the due date for multiple debit memos in one single request.

This API operation will be deprecated. You can use the [Update debit memos](https://developer.zuora.com/api-references/api/operation/PUT_BulkUpdateDebitMemos) instead, which provides more flexible functionality.

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

| debitMemos | Array of objects (debitMemos)Container for debit memo update details. |
| --- | --- |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/debit-memos

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "debitMemos": [

    -   {

        -   "dueDate": "2017-12-28",

        -   "id": "402890d25f9f083f015f9f28041d0008"


        },

    -   {

        -   "dueDate": "2017-12-20",

        -   "id": "402890555a87d7f5015a892f2ba10057"


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
