---
title: "GET Get Email Template"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_Get_Email_Template/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:14:07.045Z"
---

## Retrieve an email template

Queries the email template based on the specified ID. This operation supports retrieving the email template for all event types.

Security**bearerAuth**

Request

##### path Parameters

| idrequired | string <uuid>The ID of the email template. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |

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

get/notifications/email-templates/{id}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/notifications/email-templates/{id}' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string'

Response samples

-   200
-   400
-   404
-   405
-   415
-   500

1 more5001 more

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "active": true,

-   "bccEmailAddress": "user@example.com",

-   "ccEmailAddress": "user@example.com",

-   "ccEmailType": "SpecificEmails",

-   "createdBy": "6e569e1e05f040eda51a927b140c0ac3",

-   "createdOn": "2017-04-18T07:36:19.798Z",

-   "description": "Email when an account is edited",

-   "emailBody": "Dear user,<p>the account <Account.Name> has been edited. </p><p>Example Co. Ltd.</p>",

-   "emailHeaders": {

    -   "My-Header-1": "Header value 1",

    -   "My-Header-2": "Header value 2"


    },

-   "emailSubject": "Account <Account.Number> has been edited",

-   "encodingType": "UTF8",

-   "eventTypeName": "AccountEdit",

-   "fromEmailType": "TenantEmail",

-   "fromName": "Example Co. Ltd.",

-   "id": "6e569e1e05f040eda51a927b140c0ac2",

-   "isHtml": true,

-   "name": "Account Edit Email",

-   "replyToEmailType": "TenantEmail",

-   "toEmailAddress": "DummyEmailAddress@example.com",

-   "toEmailType": "SpecificEmails",

-   "updatedBy": "6e569e1e05f040eda51a927b140c0ac4",

-   "updatedOn": "2017-04-18T07:36:19.798Z"


}`
