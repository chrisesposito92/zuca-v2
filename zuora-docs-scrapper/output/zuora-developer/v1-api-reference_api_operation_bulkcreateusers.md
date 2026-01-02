---
title: "BulkCreateUsers"
url: "https://developer.zuora.com/v1-api-reference/api/operation/bulkCreateUsers/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:21:38.038Z"
---

## Bulk create users

Creates multiple users within an organization.

Security**bearerAuth**

Request

##### Request Body schema: application/json
required

Array

| schemas | Array of stringsA list of schema URNs that describe the structure of the user resource. These URNs indicate the schemas that are applicable to the user data. |
| --- | --- |
| name | object |
| emails | Array of objects |
| roles | Array of objects |
| userName | stringThe username or login name of the user. |
| preferredLanguage | stringThe preferred language of the user, typically represented by a locale code (e.g., 'en', 'fr'). |
| locale | stringThe locale of the user, typically represented by a locale code (e.g., 'en-US', 'fr-FR'). |
| urn:zuora:scim:schemas:1.0:UserExtension | object |

Responses

200

OK

201

Created

401

Unauthorized

403

Forbidden

404

Not Found

post/scim/v2/Users/bulk

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`[

-   {

    -   "schemas": [

        -   "urn:zuora:scim:schemas:1.0:UserExtension",

        -   "urn:ietf:params:scim:schemas:core:2.0:User"


        ],

    -   "name": {

        -   "givenName": "Amy",

        -   "familyName": "Lawrence",

        -   "formatted": "Amy Lawrence"


        },

    -   "emails": [

        -   {

            -   "value": "Amy+test3@zuora.com",

            -   "type": "work",

            -   "primary": true


            }


        ],

    -   "roles": [

        -   {

            -   "value": "USER"


            }


        ],

    -   "userName": "Amy+test3@zuora.com",

    -   "preferredLanguage": "en",

    -   "locale": "en-US",

    -   "urn:zuora:scim:schemas:1.0:UserExtension": {

        -   "schemas": [

            -   "urn:zuora:scim:schemas:1.0:UserExtension"


            ],

        -   "organizationId": "ec141dc2-901e-4813-a25d-ef480cff1e26"


        }


    },

-   {

    -   "schemas": [

        -   "urn:zuora:scim:schemas:1.0:UserExtension",

        -   "urn:ietf:params:scim:schemas:core:2.0:User"


        ],

    -   "name": {

        -   "givenName": "Amy",

        -   "familyName": "Lawrence",

        -   "formatted": "Amy Lawrence"


        },

    -   "emails": [

        -   {

            -   "value": "Amy+test4@zuora.com",

            -   "type": "work",

            -   "primary": true


            }


        ],

    -   "roles": [

        -   {

            -   "value": "USER"


            }


        ],

    -   "userName": "Amy+test4@zuora.com",

    -   "preferredLanguage": "en",

    -   "locale": "en-US",

    -   "urn:zuora:scim:schemas:1.0:UserExtension": {

        -   "schemas": [

            -   "urn:zuora:scim:schemas:1.0:UserExtension"


            ],

        -   "organizationId": "ec141dc2-901e-4813-a25d-ef480cff1e26"


        }


    }


]`

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

                -   "value": "Amy+test3@zuora.com",

                -   "display": "Amy+test3@zuora.com",

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

                -   "value": "Amy+test4@zuora.com",

                -   "display": "Amy+test4@zuora.com",

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
