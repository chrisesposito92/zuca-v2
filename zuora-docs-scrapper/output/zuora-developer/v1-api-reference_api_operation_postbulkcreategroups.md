---
title: "PostBulkCreateGroups"
url: "https://developer.zuora.com/v1-api-reference/api/operation/postBulkCreateGroups/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:20:46.830Z"
---

## Bulk create groups

Creates multiple Groups within an organization.

Must include the displayName attribute. Users can be added to the group during creation by supplying the user ID values in the members array attribute.

Security**bearerAuth**

Request

##### Request Body schema: application/json
required

Array

| schemasrequired | Array of stringsList of schema URNs defining the structure of the group resource. |
| --- | --- |
| displayNamerequired | stringName of the group. |
| urn:zuora:scim:schemas:1.0:GroupExtensionrequired | objectCustom extension schema with additional attributes for the group. |
| metarequired | object or nullMetadata about the group resource. |

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

post/scim/v2/Groups/bulk

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`[

-   {

    -   "schemas": [

        -   "urn:ietf:params:scim:schemas:core:2.0:Group",

        -   "urn:zuora:scim:schemas:1.0:GroupExtension"


        ],

    -   "displayName": "test_group_11",

    -   "urn:zuora:scim:schemas:1.0:GroupExtension": {

        -   "schemas": [

            -   "urn:zuora:scim:schemas:1.0:GroupExtension"


            ],

        -   "description": "",

        -   "organizationId": "ec141dc2-901e-4813-a25d-ef480cff1e26",

        -   "active": false


        },

    -   "meta": {

        -   "resourceType": "Group"


        }


    },

-   {

    -   "schemas": [

        -   "urn:ietf:params:scim:schemas:core:2.0:Group",

        -   "urn:zuora:scim:schemas:1.0:GroupExtension"


        ],

    -   "displayName": "test_group_22",

    -   "urn:zuora:scim:schemas:1.0:GroupExtension": {

        -   "schemas": [

            -   "urn:zuora:scim:schemas:1.0:GroupExtension"


            ],

        -   "description": "",

        -   "organizationId": "ec141dc2-901e-4813-a25d-ef480cff1e26",

        -   "active": false


        },

    -   "meta": {

        -   "resourceType": "Group"


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

            -   "urn:ietf:params:scim:schemas:core:2.0:Group",

            -   "urn:zuora:scim:schemas:1.0:GroupExtension"


            ],

        -   "id": "62c20400-6470-4992-8a01-c181efc2ce54",

        -   "displayName": "test_group_11",

        -   "urn:zuora:scim:schemas:1.0:GroupExtension": {

            -   "schemas": [

                -   "urn:zuora:scim:schemas:1.0:GroupExtension"


                ],

            -   "description": "",

            -   "organizationId": "5619df2e-fa8c-47fa-9c1e-16ab5af4936e",

            -   "active": true


            },

        -   "meta": {

            -   "resourceType": "Group",

            -   "location": "[http://localhost:9900/scim/v2/Groups/bulk/62c20400-6470-4992-8a01-c181efc2ce54](http://localhost:9900/scim/v2/Groups/bulk/62c20400-6470-4992-8a01-c181efc2ce54)"


            }


        },

    -   {

        -   "schemas": [

            -   "urn:ietf:params:scim:schemas:core:2.0:Group",

            -   "urn:zuora:scim:schemas:1.0:GroupExtension"


            ],

        -   "id": "71d3c0ec-48db-4522-b5c9-053e051204d7",

        -   "displayName": "test_group_22",

        -   "urn:zuora:scim:schemas:1.0:GroupExtension": {

            -   "schemas": [

                -   "urn:zuora:scim:schemas:1.0:GroupExtension"


                ],

            -   "description": "",

            -   "organizationId": "5619df2e-fa8c-47fa-9c1e-16ab5af4936e",

            -   "active": true


            },

        -   "meta": {

            -   "resourceType": "Group",

            -   "location": "[http://localhost:9900/scim/v2/Groups/bulk/71d3c0ec-48db-4522-b5c9-053e051204d7](http://localhost:9900/scim/v2/Groups/bulk/71d3c0ec-48db-4522-b5c9-053e051204d7)"


            }


        }


    ],

-   "startIndex": 1,

-   "itemsPerPage": 2


}`
