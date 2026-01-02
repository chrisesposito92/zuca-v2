---
title: "PUT Update Email Template"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_Update_Email_Template/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:14:07.879Z"
---

## Update an email template

Updates an email template. This operation supports updating the email template for all event types.

Security**bearerAuth**

Request

##### path Parameters

| idrequired | string <uuid>The ID of the email template to be updated. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |

##### Request Body schema: application/json
required

The request body to update an email template.

| active | booleanThe status of the email template. |
| --- | --- |
| bccEmailAddress | string <email>Email bcc address. |
| ccEmailAddress | stringEmail cc address. |
| ccEmailType | stringDefault: "SpecificEmails"Email CC type.When the related event is account-level and associated with the Subscription object, such as Subscription Created, you can use the following values:BillToContactSoldToContactShipToContactBillToAndSoldToContactsAllContactsSpecificEmailsInvoiceOwnerBillToContactInvoiceOwnerSoldToContactInvoiceOwnerShipToContactInvoiceOwnerBillToAndSoldToContactsInvoiceOwnerAllContactsWhen the related event is account-level and not associated with the Subscription object, such as Payment Processed, you can use the following values:BillToContactSoldToContactShipToContactBillToAndSoldToContactsAllContactsSpecificEmailsWhen the related event is tenant-level, such as Bill Run Completion, you can use the following values:TenantAdminRunOwnerSpecificEmailsEnum: "BillToContact" "SoldToContact" "ShipToContact" "SpecificEmails" "TenantAdmin" "BillToAndSoldToContacts" "RunOwner" "AllContacts" "InvoiceOwnerBillToContact" "InvoiceOwnerSoldToContact" "InvoiceOwnerShipToContact" "InvoiceOwnerBillToAndSoldToContacts" "InvoiceOwnerAllContacts" |
| description | string <= 255 charactersThe description of the email template. |
| emailBody | stringThe email body. You can add merge fields in the email body using angle brackets or double curly brackets. For more information, see Merge field syntax for email templates.User can also embed html tags if isHtml is true. |
| emailHeaders | object (emailHeader)Container for custom email headers. Each custom email header consists of a header name and a header value. |
| emailSubject | stringThe email subject. You can add merge fields in the email subject using angle brackets or double curly brackets. For more information, see Merge field syntax for email templates. |
| encodingType | stringThe endcode type of the email body.Enum: "UTF8" "Shift_JIS" "ISO_2022_JP" "EUC_JP" "X_SJIS_0213" |
| fromEmailAddress | stringIf fromEmailType is SpecificEmail, this field is required |
| fromEmailType | stringThe type of fromEmail.Enum: "TenantEmail" "RunOwner" "SpecificEmail" |
| fromName | stringThe name of email sender. |
| isHtml | booleanIndicates whether the style of email body is HTML. |
| name | string <= 255 charactersThe name of the email template. |
| replyToEmailAddress | stringIf replyToEmailType is SpecificEmail, this field is required. |
| replyToEmailType | stringThe type of the reply email.Enum: "TenantEmail" "RunOwner" "SpecificEmail" |
| toEmailAddress | stringIf toEmailType is SpecificEmail, this field is required. |
| toEmailType | stringEmail receive type.When the related event is account-level and associated with the Subscription object, such as Subscription Created, you can use the following values:BillToContactSoldToContactShipToContactBillToAndSoldToContactsAllContactsSpecificEmailsInvoiceOwnerBillToContactInvoiceOwnerSoldToContactInvoiceOwnerShipToContactInvoiceOwnerBillToAndSoldToContactsInvoiceOwnerAllContactsWhen the related event is account-level and not associated with the Subscription object, such as Payment Processed, you can use the following values:BillToContactSoldToContactShipToContactBillToAndSoldToContactsAllContactsSpecificEmailsWhen the related event is tenant-level, such as Bill Run Completion, you can use the following values:TenantAdminRunOwnerSpecificEmailsEnum: "BillToContact" "SoldToContact" "ShipToContact" "SpecificEmails" "TenantAdmin" "BillToAndSoldToContacts" "RunOwner" "AllContacts" "InvoiceOwnerBillToContact" "InvoiceOwnerSoldToContact" "InvoiceOwnerShipToContact" "InvoiceOwnerBillToAndSoldToContacts" "InvoiceOwnerAllContacts" |

Responses

200

OK

400

Bad Request

404

Not Found

405

Method Not Allowed

415

Unsupported Media Type

500

Internal Server Error

put/notifications/email-templates/{id}

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "description": "Details of the email template"


}`

Response samples

-   200
-   400
-   404
-   405
-   415
-   500

1 more5001 more

application/json

Copy

Expand allCollapse all

`{

-   "id": "f11e498862584a10a05b83ea70119659",

-   "createdBy": "8ad084a67f9c7138017fab8a8b511b5a",

-   "createdOn": "2024-11-06T09:24:07.000 UTC",

-   "updatedBy": "8ad084a67f9c7138017fab8a8b511b5a",

-   "updatedOn": "2024-11-06T09:24:07.000 UTC",

-   "eventTypeNamespace": "user.notification",

-   "eventTypeName": "AccountEdit",

-   "name": "Account Edit Email",

-   "description": "",

-   "encodingType": "UTF8",

-   "fromName": "Company Co. Ltd.",

-   "fromEmailType": "TenantEmail",

-   "fromEmailAddress": "",

-   "replyToEmailType": "TenantEmail",

-   "replyToEmailAddress": "",

-   "ccEmailType": "SpecificEmails",

-   "ccEmailAddress": "",

-   "bccEmailAddress": "",

-   "toEmailType": "BillToContact",

-   "toEmailAddress": "",

-   "emailHeaders": { },

-   "emailSubject": "Account {{DataSource.Account.AccountNumber}} has been edited",

-   "emailBody": "Dear user,<p>the account {{DataSource.Account.AccountNumber}} has been edited. <p>Company Co. Ltd.",

-   "fileId": "",

-   "active": true,

-   "isHtml": false,

-   "useAdditionalAddresses": false


}`
