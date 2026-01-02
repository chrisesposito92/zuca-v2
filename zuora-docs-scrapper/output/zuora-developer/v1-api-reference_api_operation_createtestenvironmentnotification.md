---
title: "CreateTestEnvironmentNotification"
url: "https://developer.zuora.com/v1-api-reference/api/operation/createTestEnvironmentNotification/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:26:33.006Z"
---

## Create a test environment notification

Use this operation to create a new notification for a specific Test Environment. It handles HTTP POST requests to the /test-environments/{id}/notifications endpoint, accepting a TestEnvironmentNotificationRequest object in the request body. Upon successful creation, it returns a TestEnvironmentNotificationResponse object and sets the Location header to the URL of the created notification.

### User Access Permission

You must be assigned the **Refresh Central Sandbox** permission to run this operation.

Security**bearerAuth**

Request

##### path Parameters

| idrequired | stringTest Environment ID |
| --- | --- |

##### header Parameters

| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| --- | --- |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |

##### Request Body schema: application/json
required

notificationRequest

| address | stringThe email address to receive notifications for the Test Environment when a refresh job has been completed or cancelled |
| --- | --- |
| name | stringThe name of the recipient who will receive notifications for the Test Environment |

Responses

200

OK

201

Successfully created a new Test Environment notification

400

Bad request

500

Internal Error

post/test-environments/{id}/notifications

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "address": "john.smith@zuora.com",

-   "name": "John Smith"


}`

Response samples

-   200
-   201
-   400

application/json

Copy

`{

-   "address": "john.smith@zuora.com",

-   "id": "11111111-1111-1111-1111-111111111111",

-   "name": "John Smith",

-   "testEnvironmentId": "11111111-1111-1111-1111-111111111111"


}`
