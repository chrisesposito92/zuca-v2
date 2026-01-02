---
title: "UpdateASpecificUser"
url: "https://developer.zuora.com/v1-api-reference/api/operation/updateASpecificUser/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:22:14.259Z"
---

## Update a user

Updates an existing user resource, overwriting all values for a user even if an attribute is empty or not provided. If an attribute that had been set previously is left blank during a PUT operation, the new value will be blank in accordance with the data type of the attribute and the storage provider. Deactivated users can be re-enabled by setting the active attribute to true. The value of the should be the user's corresponding user ID.

Security**bearerAuth**

Request

##### path Parameters

| idrequired | stringThe ID of the user to be updated. |
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

| schemas | Array of strings |
| --- | --- |
| id | string or null |
| externalId | string |
| meta | object |
| userName | string |
| name | object |
| displayName | string |
| preferredLanguage | string |
| locale | string |
| active | boolean |
| emails | Array of objects |
| groups | Array of objects |
| roles | Array of objects |
| urn:zuora:scim:schemas:1.0:UserExtension | object |

Responses

200

OK

401

Unauthorized

403

Forbidden

404

Not Found

put/scim/v2/Users/{id}

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "schemas": [

    -   "urn:zuora:scim:schemas:1.0:UserExtension",

    -   "urn:ietf:params:scim:schemas:core:2.0:User"


    ],

-   "id": "4ae68f98-2762-4001-b95c-34569b413e8e",

-   "externalId": "Amy+test5",

-   "meta": {

    -   "created": "2023-01-04T18:48:30.180Z",

    -   "resourceType": "User",

    -   "location": "[http://localhost:9900/scim/v2/Users/4ae68f98-2762-4001-b95c-34569b413e8e](http://localhost:9900/scim/v2/Users/4ae68f98-2762-4001-b95c-34569b413e8e)"


    },

-   "userName": "Amy+test6",

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

        -   "value": "Amy+test5-updated@zuora.com"


        }


    ],

-   "groups": [

    -   {

        -   "value": "0fb99576-2154-4d96-a6cb-384dd430f45f",

        -   "display": "Amy Test"


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

    -   "organizationId": "ec141dc2-901e-4813-a25d-ef480cff1e26",

    -   "status": "ACTIVE",

    -   "ssoEnabled": true,

    -   "region": "EU"


    }


}`

Response samples

-   200
-   401
-   403
-   404

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


    },

-   "schemas": [

    -   "urn:zuora:scim:schemas:1.0:UserExtension",

    -   "urn:ietf:params:scim:schemas:core:2.0:User"


    ],

-   "totalResults": 1,

-   "resources": [

    -   {

        -   "schemas": [

            -   "urn:zuora:scim:schemas:1.0:UserExtension",

            -   "urn:ietf:params:scim:schemas:core:2.0:User"


            ],

        -   "id": "4ae68f98-2762-4001-b95c-34569b413e8e",

        -   "externalId": "Amy+test6",

        -   "meta": {

            -   "created": "2024-10-03T10:22:09.727Z",

            -   "resourceType": "User",

            -   "location": "[http://localhost:9900/scim/v2/Users/4ae68f98-2762-4001-b95c-34569b413e8e](http://localhost:9900/scim/v2/Users/4ae68f98-2762-4001-b95c-34569b413e8e)"


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

                -   "value": "Amy+test5-updated@zuora.com",

                -   "display": "Amy+test5-updated@zuora.com",

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


        }


    ],

-   "startIndex": 1,

-   "itemsPerPage": 1


}`
