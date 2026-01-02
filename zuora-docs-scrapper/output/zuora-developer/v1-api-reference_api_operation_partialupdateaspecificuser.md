---
title: "PartialUpdateASpecificUser"
url: "https://developer.zuora.com/v1-api-reference/api/operation/partialUpdateASpecificUser/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:22:14.365Z"
---

## Partially update a user

Updates an existing user resource, overwriting values for specified attributes. The value of the {id} should be the user's corresponding user ID. Attributes that are not provided in the request will remain unchanged. Updating a value to " " will clear and remove the field from the user's profile.

Security**bearerAuth**

Request

##### path Parameters

| idrequired | stringUser ID to update |
| --- | --- |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |

##### Request Body schema: application/json
required

| schemasrequired | Array of stringsItems Value: "urn:ietf:params:scim:api:messages:2.0:PatchOp" |
| --- | --- |
| operationsrequired | Array of objects |

Responses

200

OK

204

No Content

401

Unauthorized - The request lacks valid authentication credentials.

403

Forbidden - The server understands the request but refuses to authorize it.

patch/scim/v2/Users/{id}

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "schemas": [

    -   "urn:ietf:params:scim:api:messages:2.0:PatchOp"


    ],

-   "operations": [

    -   {

        -   "op": "replace",

        -   "path": "/emails",

        -   "value": {

            -   "emails": [

                -   {

                    -   "value": "updatedEmail@zuora.com",

                    -   "display": "updatedEmail@zuora.com",

                    -   "type": "home",

                    -   "primary": false


                    }


                ]


            }


        }


    ]


}`

Response samples

-   200
-   401
-   403

application/json

Copy

Expand allCollapse all

`{

-   "schemas": [

    -   "urn:zuora:scim:schemas:1.0:UserExtension",

    -   "urn:ietf:params:scim:schemas:core:2.0:User"


    ],

-   "id": "4ae68f98-2762-4001-b95c-34569b413e8e",

-   "externalId": "assingh151@zuora.com",

-   "meta": {

    -   "created": "2024-10-03T10:22:09.727Z",

    -   "resourceType": "User",

    -   "location": "[http://localhost:9900/scim/v2/Users/4ae68f98-2762-4001-b95c-34569b413e8e/4ae68f98-2762-4001-b95c-34569b413e8e](http://localhost:9900/scim/v2/Users/4ae68f98-2762-4001-b95c-34569b413e8e/4ae68f98-2762-4001-b95c-34569b413e8e)"


    },

-   "userName": "assingh151@zuora.com",

-   "name": {

    -   "formatted": "Amy Lawrence",

    -   "familyName": "Amy",

    -   "givenName": "Lawrence"


    },

-   "displayName": "Amy Lawrence",

-   "preferredLanguage": "en",

-   "locale": "en-US",

-   "active": true,

-   "emails": [

    -   {

        -   "value": "updatedEmail@zuora.com",

        -   "display": "updatedEmail@zuora.com",

        -   "type": "work",

        -   "primary": true


        }


    ],

-   "roles": [

    -   {

        -   "value": "USER",

        -   "display": "USER"


        }


    ],

-   "urn:zuora:scim:schemas:1.0:UserExtension": {

    -   "schemas": [

        -   "urn:zuora:scim:schemas:1.0:UserExtension"


        ],

    -   "organizationId": "5619df2e-fa8c-47fa-9c1e-16ab5af4936e",

    -   "status": "ACTIVE",

    -   "ssoEnabled": true,

    -   "region": "EU"


    }


}`
