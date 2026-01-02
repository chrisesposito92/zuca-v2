---
title: "PatchBulkPatchGroups"
url: "https://developer.zuora.com/v1-api-reference/api/operation/patchBulkPatchGroups/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:20:48.696Z"
---

## Bulk update groups

Updates an existing group resource, allowing individual (or groups of) users to be added or removed from the group with a single operation.

Setting the operation attribute of a member object to delete will remove members from a group; add is the default operation for PATCH.

Security**bearerAuth**

Request

##### Request Body schema: application/json
required

| schemasrequired | Array of stringsList of schema identifiers that define the format of the request. |
| --- | --- |
| operationsrequired | Array of objectsList of operations to be performed on the resource. |

Responses

200

OK

204

No Content

401

Unauthorized

403

Forbidden

patch/scim/v2/Groups/bulk

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

        -   "op": "add",

        -   "path": "members",

        -   "value": [

            -   {

                -   "value": "e1b624ac-e00f-422b-b4da-20070901b22f"


                },

            -   {

                -   "value": "ea27634b-38ab-4592-86e4-2d4a140ae120"


                }


            ]


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

    -   "urn:ietf:params:scim:api:messages:2.0:ListResponse"


    ],

-   "id": null,

-   "externalId": null,

-   "meta": null,

-   "totalResults": 1,

-   "resources": [

    -   {

        -   "schemas": [

            -   "urn:ietf:params:scim:schemas:core:2.0:Group",

            -   "urn:zuora:scim:schemas:1.0:GroupExtension"


            ],

        -   "id": "0fb99576-2154-4d96-a6cb-384dd430f45f",

        -   "displayName": "Amy Test",

        -   "members": [

            -   {

                -   "value": "e1b624ac-e00f-422b-b4da-20070901b22f",

                -   "display": "amy+test102"


                },

            -   {

                -   "value": "ea27634b-38ab-4592-86e4-2d4a140ae120",

                -   "display": "test01@zuora.com"


                }


            ],

        -   "urn:zuora:scim:schemas:1.0:GroupExtension": {

            -   "schemas": [

                -   "urn:zuora:scim:schemas:1.0:GroupExtension"


                ],

            -   "description": "Amy testing group",

            -   "organizationId": "5619df2e-fa8c-47fa-9c1e-16ab5af4936e",

            -   "active": true


            },

        -   "meta": {

            -   "resourceType": "Group",

            -   "location": "[http://localhost:9900/scim/v2/Groups/bulk/0fb99576-2154-4d96-a6cb-384dd430f45f](http://localhost:9900/scim/v2/Groups/bulk/0fb99576-2154-4d96-a6cb-384dd430f45f)"


            }


        }


    ],

-   "startIndex": 1,

-   "itemsPerPage": 1


}`
