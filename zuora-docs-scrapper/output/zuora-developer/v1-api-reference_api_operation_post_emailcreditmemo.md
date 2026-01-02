---
title: "POST EmailCreditMemo"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_EmailCreditMemo/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:55:09.004Z"
---

## Email a credit memo

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Sends a posted credit memo to the specified email addresses manually.

### Notes

-   You must activate the **Email Credit Memo | Manually email Credit Memo** notification before emailing credit memos. To include the credit memo PDF in the email, select the **Include Credit Memo PDF** check box in the **Edit notification** dialog from the Zuora UI. See [Create and Edit Notifications](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/C_Create_Notifications#section_2) for more information.

-   Zuora sends the email messages based on the email template you set. You can set the email template to use in the **Delivery Options** panel of the **Edit notification** dialog from the Zuora UI. By default, the **Manual Email for Credit Memo Default Template** template is used. See [Create and Edit Email Templates](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/Create_Email_Templates) for more information.

-   The credit memos are sent only to the work email addresses or personal email addresses of the Bill To contact if the following conditions are all met:

    -   The `useEmailTemplateSetting` field is set to `false`.
    -   The email addresses are not specified in the `emailAddresses` field.

Security**bearerAuth**

Request

##### path Parameters

| creditMemoKeyrequired | stringThe ID or number of a posted credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172 or CM00000001. |
| --- | --- |

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

| emailAddresses | stringThe valid email addresses you want to email a credit memo to. Use commas to separate email addresses.Note: This field is only applicable if you set the useEmailTemplateSetting field to false. |
| --- | --- |
| includeAdditionalEmailAddresses | booleanDefault: falseIndicates whether to send a credit memo to the additional email addresses of the memo account.You can set the additional email addresses in the Additional Email Addresses field on the account detail page from the Zuora UI. See Create a Customer Account for more information.Enum: true false |
| pdfFileId | stringThe ID of the PDF file that you want to send in the email.If you do not specify any PDF file ID, the latest PDF file generated for the credit memo is sent in the email. |
| useEmailTemplateSetting | booleanDefault: falseIndicates whether to email a credit memo based on the email template setting.If you set this field to true, the credit memo is sent to the email addresses specified in the To Email field of the email template. The email template is the one you set in the Delivery Options panel of the Edit notification dialog from the Zuora UI. See Edit Email Templates for more information about how to edit the To Email field in the email template.Enum: true false |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/credit-memos/{creditMemoKey}/emails

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "useEmailTemplateSetting": true


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
