---
title: "BulkUpdateUsers"
url: "https://developer.zuora.com/v1-api-reference/api/operation/bulkUpdateUsers/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:22:14.092Z"
---

## Bulk update users

Updates an existing multiple user resource, overwriting values for specified attributes.

Security**bearerAuth**

Request

##### Request Body schema: application/json
required

Array

| schemas | Array of stringsA list of schema URNs that apply to this resource, indicating the structure and attributes of the resource. |
| --- | --- |
| id | stringA unique identifier for the resource within the system. |
| externalId | stringAn external identifier for the resource, often used for integration with external systems. |
| meta | object |
| userName | stringThe username of the user. This is typically a unique identifier for the user within the system. |
| name | object |
| displayName | stringA name that is suitable for display to end-users, which may be different from the username or full name. |
| preferredLanguage | stringThe preferred language of the user for communication and content. |
| locale | stringThe locale of the user, typically used to determine regional settings (e.g., 'en-US' for English, United States). |
| active | booleanIndicates whether the user account is currently active. A value of true means the account is active, and false means it is inactive. |
| emails | Array of objects |
| roles | Array of objects |
| urn:zuora:scim:schemas:1.0:UserExtension | object |

Responses

200

OK

204

No Content

401

Unauthorized

403

Forbidden

patch/scim/v2/Users/bulk

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`[

-   {

    -   "schemas": [

        -   "string"


        ],

    -   "id": "string",

    -   "externalId": "string",

    -   "meta": {

        -   "created": "2019-08-24T14:15:22Z",

        -   "resourceType": "string",

        -   "location": "string"


        },

    -   "userName": "string",

    -   "name": {

        -   "formatted": "string",

        -   "familyName": "string",

        -   "givenName": "string"


        },

    -   "displayName": "string",

    -   "preferredLanguage": "string",

    -   "locale": "string",

    -   "active": true,

    -   "emails": [

        -   {

            -   "value": "string",

            -   "display": "string",

            -   "type": "string",

            -   "primary": true


            }


        ],

    -   "roles": [

        -   {

            -   "value": "string",

            -   "display": "string"


            }


        ],

    -   "urn:zuora:scim:schemas:1.0:UserExtension": {

        -   "schemas": [

            -   "string"


            ],

        -   "organizationId": "string",

        -   "status": "string",

        -   "ssoEnabled": true,

        -   "region": "string"


        }


    }


]`

Response samples

-   200
-   204
-   401
-   403

application/json

Copy

Expand allCollapse all

`{

-   "schemas": [

    -   "urn:ietf:params:scim:api:messages:2.0:ListResponse"


    ],

-   "id": null,

-   "externalId": null,

-   "meta": null,

-   "totalResults": 2,

-   "resources": [

    -   {

        -   "schemas": [

            -   "urn:zuora:scim:schemas:1.0:UserExtension",

            -   "urn:ietf:params:scim:schemas:core:2.0:User"


            ],

        -   "id": "41aa4e47-01e2-4d85-a6bc-d88e18477011",

        -   "externalId": "Amy+test4@zuora.com",

        -   "meta": {

            -   "created": "2024-10-03T09:37:40.161Z",

            -   "resourceType": "User",

            -   "location": "[http://localhost:9900/scim/v2/Users/bulk/41aa4e47-01e2-4d85-a6bc-d88e18477011](http://localhost:9900/scim/v2/Users/bulk/41aa4e47-01e2-4d85-a6bc-d88e18477011)"


            },

        -   "userName": "Amy+test4@zuora.com",

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

                -   "value": "updated2@example.com",

                -   "display": "updated2@example.com",

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


        },

    -   {

        -   "schemas": [

            -   "urn:zuora:scim:schemas:1.0:UserExtension",

            -   "urn:ietf:params:scim:schemas:core:2.0:User"


            ],

        -   "id": "8b40ccce-5fb7-4643-9b78-e194fe5303e6",

        -   "externalId": "Amy+test3@zuora.com",

        -   "meta": {

            -   "created": "2024-10-03T09:37:39.851Z",

            -   "resourceType": "User",

            -   "location": "[http://localhost:9900/scim/v2/Users/bulk/8b40ccce-5fb7-4643-9b78-e194fe5303e6](http://localhost:9900/scim/v2/Users/bulk/8b40ccce-5fb7-4643-9b78-e194fe5303e6)"


            },

        -   "userName": "Amy+test3@zuora.com",

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

                -   "value": "updated3@example.com",

                -   "display": "updated3@example.com",

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

-   "itemsPerPage": 2


}`
