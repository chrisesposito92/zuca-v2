---
title: "POST UploadFileForDebitMemo"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_UploadFileForDebitMemo/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:56:55.028Z"
---

## Upload a file for a debit memo

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Uploads an externally generated PDF file for a debit memo that is in Draft or Posted status.

To use this operation, you must enable the Modify Debit Memo permission. See [Billing Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.

This operation has the following restrictions:

-   Only the PDF file format is supported.
-   The maximum size of the PDF file to upload is 4 MB.
-   A maximum of 50 PDF files can be uploaded for one debit memo.

Security**bearerAuth**

Request

##### path Parameters

| debitMemoKeyrequired | stringThe ID or number of the debit memo that you want to upload a PDF file for. For example, 402890555a87d7f5015a8919e4fe002e or DM00000001. |
| --- | --- |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: multipart/form-data

| file | string <binary>The PDF file to upload for the debit memo. |
| --- | --- |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/debit-memos/{debitMemoKey}/files

Request samples

-   Curl

Copy

curl \-X POST \-H "Authorization: Bearer f21f017e4724445d8647b1f0de7ed6f1" \-F "file=@DebitMemoFile.pdf" "https://rest.zuora.com/v1/debit-memos/402890555a87d7f5015a8919e4fe002e/files"

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "fileId": "40289f466463d683016463ef8b7301a3",

-   "success": true


}`
