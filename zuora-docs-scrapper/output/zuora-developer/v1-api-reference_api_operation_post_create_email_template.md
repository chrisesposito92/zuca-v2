---
title: "POST Create Email Template"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_Create_Email_Template/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:14:07.332Z"
---

## Create an email template

Creates an email template.

This operation supports creating the email template for all event types.

-   If you specify the `eventCategory` field, the email template is created based on a standard event. See [Standard Event Categories](https://knowledgecenter.zuora.com/Central_Platform/Notifications/A_Standard_Events/Standard_Event_Category_Code_for_Notification_Histories_API) for all standard event category codes.
-   If you specify the `eventTypeName` field, the email template is created based on the corresponding custom event or custom scheduled event. See [Custom event triggers](https://developer.zuora.com/api-references/api/tag/Custom-Event-Triggers/) for more information about custom events, and [Custom scheduled events](https://developer.zuora.com/api-references/api/tag/Custom-Scheduled-Events/) for more information about custom scheduled events.

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

##### Request Body schema: application/json
required

The request body to create an email template.

| active | booleanDefault: trueThe status of the email template. The default value is true. |
| --- | --- |
| bccEmailAddress | string <email>The email bcc address. |
| ccEmailAddress | stringThe email CC address. |
| ccEmailType | stringDefault: "SpecificEmails"Email CC type.When the related event is account-level and associated with the Subscription object, such as Subscription Created, you can use the following values:BillToContactSoldToContactShipToContactBillToAndSoldToContactsAllContactsSpecificEmailsInvoiceOwnerBillToContactInvoiceOwnerSoldToContactInvoiceOwnerShipToContactInvoiceOwnerBillToAndSoldToContactsInvoiceOwnerAllContactsWhen the related event is account-level and not associated with the Subscription object, such as Payment Processed, you can use the following values:BillToContactSoldToContactShipToContactBillToAndSoldToContactsAllContactsSpecificEmailsWhen the related event is tenant-level, such as Bill Run Completion, you can use the following values:TenantAdminRunOwnerSpecificEmailsEnum: "BillToContact" "SoldToContact" "ShipToContact" "SpecificEmails" "TenantAdmin" "BillToAndSoldToContacts" "RunOwner" "AllContacts" "InvoiceOwnerBillToContact" "InvoiceOwnerSoldToContact" "InvoiceOwnerShipToContact" "InvoiceOwnerBillToAndSoldToContacts" "InvoiceOwnerAllContacts" |
| description | string <= 255 charactersThe description of the email template. |
| emailBodyrequired | stringThe email body. You can add merge fields in the email body using angle brackets or double curly brackets. For more information, see Merge field syntax for email templates.You can also embed HTML tags if isHtml is true. |
| emailHeaders | object (emailHeader)Container for custom email headers. Each custom email header consists of a header name and a header value. |
| emailSubjectrequired | stringThe email subject. You can add merge fields in the email subject using angle brackets or double curly brackets. For more information, see Merge field syntax for email templates. |
| encodingType | stringDefault: "UTF8"The endcode type of the email body.Enum: "UTF8" "Shift_JIS" "ISO_2022_JP" "EUC_JP" "X_SJIS_0213" |
| eventCategory | numberIf you specify this field, the email template is created based on a standard event. See Standard Event Categories for all standard event category codes. |
| eventTypeName | stringThe name of the custom event or custom scheduled event. If you specify this field, the email template is created based on the corresponding custom event or custom scheduled event. |
| eventTypeNamespace | stringThe namespace of the eventTypeName field. The eventTypeName has the user.notification namespace by default.Note that if the eventTypeName is a standard event type, you must specify the com.zuora.notification namespace; otherwise, you will get an error.For example, if you want to create an email template on the OrderActionProcessed event, you must specify com.zuora.notification for this field. |
| fromEmailAddress | stringIf fromEmailType is SpecificEmail, this field is required. |
| fromEmailTyperequired | stringThe type of the email.Enum: "TenantEmail" "RunOwner" "SpecificEmail" |
| fromName | stringThe name of the email sender. |
| isHtml | booleanDefault: falseIndicates whether the style of email body is HTML. The default value is false. |
| namerequired | string <= 255 charactersThe name of the email template, a unique name in a tenant. |
| replyToEmailAddress | stringIf replyToEmailType is SpecificEmail, this field is required. |
| replyToEmailType | stringType of the replyTo email.Enum: "TenantEmail" "RunOwner" "SpecificEmail" |
| toEmailAddress | stringIf toEmailType is SpecificEmail, this field is required. |
| toEmailTyperequired | stringEmail receive type.When the related event is account-level and associated with the Subscription object, such as Subscription Created, you can use the following values:BillToContactSoldToContactShipToContactBillToAndSoldToContactsAllContactsSpecificEmailsInvoiceOwnerBillToContactInvoiceOwnerSoldToContactInvoiceOwnerShipToContactInvoiceOwnerBillToAndSoldToContactsInvoiceOwnerAllContactsWhen the related event is account-level and not associated with the Subscription object, such as Payment Processed, you can use the following values:BillToContactSoldToContactShipToContactBillToAndSoldToContactsAllContactsSpecificEmailsWhen the related event is tenant-level, such as Bill Run Completion, you can use the following values:TenantAdminRunOwnerSpecificEmailsEnum: "BillToContact" "SoldToContact" "ShipToContact" "SpecificEmails" "TenantAdmin" "BillToAndSoldToContacts" "RunOwner" "AllContacts" "InvoiceOwnerBillToContact" "InvoiceOwnerSoldToContact" "InvoiceOwnerShipToContact" "InvoiceOwnerBillToAndSoldToContacts" "InvoiceOwnerAllContacts" |

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

post/notifications/email-templates

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "name": "Account Edit Email",

-   "eventTypeName": "AccountEdit",

-   "active": true,

-   "fromName": "Company Co. Ltd.",

-   "fromEmailType": "TenantEmail",

-   "toEmailType": "BillToContact",

-   "replyToEmailType": "TenantEmail",

-   "emailSubject": "Account {{DataSource.Account.AccountNumber}} has been edited",

-   "emailBody": "Dear user,<p>the account {{DataSource.Account.AccountNumber}} has been edited. <p>Company Co. Ltd."


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
