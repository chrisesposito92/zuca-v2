---
title: "POST Attachments"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_Attachments/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:28:29.241Z"
---

## Create an attachment

Use the Add Attachment REST request with a multipart/form-data to attach a document file to an Account, a Subscription, an Invoice, a Credit Memo, or a Debit Memo.

You can only use this operation if you have a Billing role that includes the Manage Attachments permission. For more information, see [Billing roles](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/d_Billing_Roles). To change your Billing role, contact your Zuora platform administrator.

**Note**: The Credit and Debit Memos feature is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Security**bearerAuth**

Request

##### query Parameters

| description | stringDescription of the attachment document. |
| --- | --- |
| associatedObjectTyperequired | stringThe type of the object to add attachements for.Enum: "Account" "Invoice" "Subscription" "CreditMemo" "DebitMemo" |
| associatedObjectKeyrequired | stringFor the Subscription type, specify the Subscription Number. An attachment is tied to the Subscription Number and thus viewable with every subscription version.For Account, Credit Memo, and Debit Memo, specify the corresponding ID or number. For Invoice, specify the corresponding ID. |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: multipart/form-data
required

| filerequired | string <binary>The file to be attached. Files with the following extensions are supported: .pdf, .csv, .png, .xlsx, .xls, .doc, .docx, .msg, .jpg, .txt, .htm, .html, .eml, .pptx, .gif, .rtf, .xml, .jpeg, .log, .clsThe maximum file size is 4 MB. |
| --- | --- |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/attachments

Request samples

-   Curl

Copy

curl \-X POST \-H "Authorization: Bearer f21f017e4724445d8647b1f0de7ed6f1" \-F "file=@PODocument.pdf" "https://rest.zuora.com/v1/attachments/?description=Postal%20order&associatedObjectType=Subscription&associatedObjectKey=A-S00005714"

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "fileId": "402880ea536ff494015372a7ea12001e",

-   "id": "402880ea536ff494015372a7ea17001f",

-   "success": true


}`
