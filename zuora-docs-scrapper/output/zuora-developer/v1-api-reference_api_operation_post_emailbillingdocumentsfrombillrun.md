---
title: "POST EmailBillingDocumentsfromBillRun"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_EmailBillingDocumentsfromBillRun/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:59:41.447Z"
---

## Email billing documents generated from a bill run

Manually emails all the billing documents that are generated from a specified bill run to your customers.

Bill runs can generate invoices and credit memos based on your [invoice and credit memo generation rule](https://knowledgecenter.zuora.com/CB_Billing/Invoice_Settlement/Credit_and_Debit_Memos/Rules_for_Generating_Invoices_and_Credit_Memos). Credit memos are only available if you have the Invoice Settlement feature enabled.

Using this API operation, the billing documents are sent to the email addresses specified in the **To Email** field of the email templates. The email template used for each billing document is set in the **Delivery Options** panel of the **Edit notification** dialog from the Zuora UI. See [Edit Email Templates](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/Create_Email_Templates) for more information about how to edit the **To Email** field in the email template.

### Notes

-   Even though no field is required in the Request body, you still need to specify `{}` in the request. Otherwise, an error will be returned.

-   You can only email posted billing documents.

-   You must activate the following notifications before emailing invoices and credit memos:

    -   **Manual Email For Invoice | Manual Email For Invoice**
    -   **Email Credit Memo | Manually email Credit Memo**
-   To include the invoice PDF in the email, select the **Include Invoice PDF** check box in the **Edit notification** dialog from the Zuora UI. To include the credit memo PDF in the email, select the **Include Credit Memo PDF** check box in the **Edit notification** dialog from the Zuora UI. See [Create and Edit Notifications](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/C_Create_Notifications#section_2) for more information.

-   Zuora sends the email messages based on the email template you set. You can set the email template to use in the **Delivery Options** panel of the **Edit notification** dialog from the Zuora UI. By default, the following templates are used for billing documents:

    -   Invoices: **Invoice Posted Default Email Template**
    -   Credit memos: **Manual Email for Credit Memo Default Template**

    See [Create and Edit Email Templates](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/Create_Email_Templates) for more information.


Security**bearerAuth**

Request

##### path Parameters

| billRunKeyrequired | stringThe ID or number of the bill run. For example, 2c92c8f95d0c886e015d11287a8f0f8b or BR-00000001. |
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

| resend | booleanDefault: falseWhether to send out emails for all the billing documents that are associated with the bill run.If the value is false, emails are sent out only for the billing documents that never have emails sent out. Note: Do not perform this API operation with the resend field set to false multiple times in a short period. Otherwise, you may receive the same email multiple times, which contradicts the purpose of this setting.If the value is true, emails are sent out for all the billing documents. |
| --- | --- |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/bill-runs/{billRunKey}/emails

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "resend": "true"


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
