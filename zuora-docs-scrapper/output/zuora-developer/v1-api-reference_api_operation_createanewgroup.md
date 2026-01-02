---
title: "CreateANewGroup"
url: "https://developer.zuora.com/v1-api-reference/api/operation/createANewGroup/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:20:49.122Z"
---

## Create a group

Creates a new group. Must include the displayName attribute. Users can be added to the group during creation by supplying the user ID values in the members array attribute.

Security**bearerAuth**

Request

##### query Parameters

| count | integer <int32>The number of records returned per page in the response. |
| --- | --- |
| filter | stringThe filter used to filter the group, either by organization id. |
| startIndex | integer <int32>The index number of the page that you want to retrieve. You must set count before specifying startIndex. For example, if you set count to 20 and startIndex to 2, the 21st to 40th records are returned in the response. |

##### header Parameters

| Content-Typerequired | stringThe Content-Type of the request must be application/json. |
| --- | --- |

##### Request Body schema: application/json
required

| schemas | Array of stringsList of schema URNs defining the structure of the group resource. |
| --- | --- |
| displayName | stringName of the group. |
| urn:zuora:scim:schemas:1.0:GroupExtension | object |

Responses

201

Created

401

Unauthorized

403

Forbidden

404

Not Found

post/scim/v2/Groups

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "schemas": [

    -   "urn:ietf:params:scim:schemas:core:2.0:Group",

    -   "urn:zuora:scim:schemas:1.0:GroupExtension"


    ],

-   "displayName": "Amy Laurance test scim",

-   "urn:zuora:scim:schemas:1.0:GroupExtension": {

    -   "schemas": [

        -   "urn:zuora:scim:schemas:1.0:GroupExtension"


        ],

    -   "description": "",

    -   "organizationId": "ec141dc2-901e-4813-a25d-ef480cff1e26"


    }


}`

Response samples

-   201
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

-   "displayName": "Amy Lawrence",

-   "urn:zuora:scim:schemas:1.0:GroupExtension": {

    -   "schemas": [

        -   "urn:zuora:scim:schemas:1.0:GroupExtension"


        ],

    -   "description": "",

    -   "organizationId": "ec141dc2-901e-4813-a25d-ef480cff1e26",

    -   "active": true


    },

-   "meta": {

    -   "resourceType": "Group",

    -   "location": "[http://localhost:9900/scim/v2/Groups/6cd663a3-39b6-49bf-9ec0-113381e40669](http://localhost:9900/scim/v2/Groups/6cd663a3-39b6-49bf-9ec0-113381e40669)"


    }


}`
