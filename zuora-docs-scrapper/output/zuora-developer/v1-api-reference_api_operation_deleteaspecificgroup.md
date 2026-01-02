---
title: "DeleteASpecificGroup"
url: "https://developer.zuora.com/v1-api-reference/api/operation/deleteASpecificGroup/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:21:25.842Z"
---

## Delete a group

Permanently removes a group (members are not deleted, only the group).

Security**bearerAuth**

Request

##### path Parameters

| idrequired | stringThe ID of the group to delete.Example: 78faa61b-4e3b-4799-9579-210fd4d80aca |
| --- | --- |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |

Responses

200

OK

401

Unauthorized

403

Forbidden

404

Not Found

delete/scim/v2/Groups/{id}

Request samples

-   cURL

Copy

curl \-i \-X DELETE \\
  'https://rest.test.zuora.com/scim/v2/Groups/{id}' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Idempotency-Key: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Track-Id: string'

Response samples

-   200
-   401
-   403
-   404

application/json

Copy

Expand allCollapse all

`{

-   "schemas": [

    -   "urn:ietf:params:scim:schemas:core:2.0:Group",

    -   "urn:zuora:scim:schemas:1.0:GroupExtension"


    ],

-   "id": "6cd663a3-39b6-49bf-9ec0-113381e40669",

-   "displayName": "Amy test scim",

-   "urn:zuora:scim:schemas:1.0:GroupExtension": {

    -   "schemas": [

        -   "urn:zuora:scim:schemas:1.0:GroupExtension"


        ],

    -   "description": "",

    -   "organizationId": "ec141dc2-901e-4813-a25d-ef480cff1e26",

    -   "active": false


    },

-   "meta": {

    -   "resourceType": "Group",

    -   "location": "[http://localhost:9900/scim/v2/Groups/6cd663a3-39b6-49bf-9ec0-113381e40669/6cd663a3-39b6-49bf-9ec0-113381e40669](http://localhost:9900/scim/v2/Groups/6cd663a3-39b6-49bf-9ec0-113381e40669/6cd663a3-39b6-49bf-9ec0-113381e40669)"


    }


}`
