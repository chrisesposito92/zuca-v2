---
title: "GetTheSchemaOfSpecificSCIM"
url: "https://developer.zuora.com/v1-api-reference/api/operation/getTheSchemaOfSpecificSCIM/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:21:41.284Z"
---

## List schemas of a resource

Gets a specific resource schema by ID.

Examples:

```
/scim/v2/Schemas/urn:ietf:params:scim:schemas:core:2.0:Group
/scim/v2/Schemas/urn:ietf:params:scim:schemas:core:2.0:User

/scim/v2/Schemas/urn:zuora:scim:schemas:1.0:UserExtension
/scim/v2/Schemas/urn:zuora:scim:schemas:1.0:GroupExtension
```

Security**bearerAuth**

Request

##### path Parameters

| idrequired | string |
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

get/scim/v2/Schemas/{id}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/scim/v2/Schemas/{id}' \\
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

    -   "urn:ietf:params:scim:schemas:core:2.0:Schema"


    ],

-   "id": "urn:ietf:params:scim:schemas:core:2.0:User",

-   "name": "User",

-   "description": "User resource schema",

-   "attributes": [

    -   {

        -   "name": "userName",

        -   "type": "string",

        -   "multiValued": false,

        -   "description": "User's username",

        -   "required": true,

        -   "caseExact": false,

        -   "mutability": "readWrite",

        -   "returned": "always",

        -   "uniqueness": "server"


        },

    -   {

        -   "name": "displayName",

        -   "type": "string",

        -   "multiValued": false,

        -   "description": "User's display name",

        -   "required": false,

        -   "caseExact": false,

        -   "mutability": "readWrite",

        -   "returned": "default",

        -   "uniqueness": "none"


        }


    ],

-   "meta": {

    -   "resourceType": "Schema",

    -   "location": "[http://localhost:9900/scim/v2/Schemas/urn:ietf:params:scim:schemas:core:2.0:User](http://localhost:9900/scim/v2/Schemas/urn:ietf:params:scim:schemas:core:2.0:User)"


    }


}`
