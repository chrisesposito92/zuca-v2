---
title: "POST ResendEmailNotifications"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_ResendEmailNotifications/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:15:15.545Z"
---

## Resend email notifications

Resends email notifications if your customers did not receive previous email notifications.

Details about the status codes and response contents of this operation are as follows:

| Scenario | Status code | Response content |
| --- | --- | --- |
| Success for all notifications | 202 Accepted | (blank) |
| Success for at least one notification | 202 Accepted | Error code and error message of each failed notification |
| Failure for all notifications | 400 Bad Request | Error code and error message of each failed notification |

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

The request body to resend email notifications.

Array

string

ID for failed email notifications. You can resend at most 1000 email notifications at a time.

Responses

202

Accepted

400

Bad Request

post/notifications/email-histories/resend

Request samples

-   Payload
-   cURL

application/json

Copy

`[

-   "a02ea6d76931475bb73fcd339b5f6ht8g",

-   "40dbbc5f2cfb4e2fa236db11ea1dfghht",

-   "a3fd8e81c20a4ac0a1eb3747339asdfef",

-   "a00000000000000000000000000000000"


]`

Response samples

-   202
-   400

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "a00000000000000000000000000000000": {

    -   "code": "ObjectNotFound",

    -   "message": "Email history does not exist."


    }


}`
