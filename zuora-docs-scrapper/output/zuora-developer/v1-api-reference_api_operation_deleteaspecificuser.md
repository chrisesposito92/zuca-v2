---
title: "DeleteASpecificUser"
url: "https://developer.zuora.com/v1-api-reference/api/operation/deleteASpecificUser/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:22:12.244Z"
---

## Delete a user

Deactivates a specific user identified by the user ID.

Security**bearerAuth**

Request

##### path Parameters

| idrequired | stringThe ID of the user to delete. |
| --- | --- |

##### header Parameters

| Idempotency-Keyrequired | stringUnique key used to ensure idempotent behavior. |
| --- | --- |
| Accept-Encoding | stringIndicates the response's preferred content encoding. Supported values are gzip and identity. |
| Content-Encoding | stringThis header is returned if you specify the Accept-Encoding: gzip request header and the response contains over 1000 bytes of data. |

Responses

200

OK

204

No Content

401

Unauthorized

403

Forbidden

delete/scim/v2/Users/{id}

Request samples

-   cURL

Copy

curl \-i \-X DELETE \\
  'https://one.zuora.com/scim/v2/Users/{id}' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Idempotency-Key: string'

Response samples

-   200
-   204
-   401
-   403

application/json

Copy

Expand allCollapse all

`{

-   "id": "123456",

-   "userName": "johndoe",

-   "displayName": "John Doe",

-   "active": true,

-   "emails": [

    -   {

        -   "value": "johndoe@example.com",

        -   "primary": true


        }


    ],

-   "meta": {

    -   "resourceType": "User",

    -   "created": "2023-01-01T12:00:00Z",

    -   "lastModified": "2023-01-01T12:00:00Z"


    }


}`
