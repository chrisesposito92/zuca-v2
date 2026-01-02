---
title: "GetListGroups"
url: "https://developer.zuora.com/v1-api-reference/api/operation/getListGroups/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:20:48.874Z"
---

## List groups

Returns a paginated list of groups, ten groups per page by default. Use the startIndex and count (max 100) query parameters to paginate long lists of groups. It's possible to return a list of specific types of groups using the filter parameter.

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

Responses

200

OK

401

Unauthorized

403

Forbidden

404

Not Found

get/scim/v2/Groups

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/scim/v2/Groups?count=0&filter=string&startIndex=0' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Type: string'

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

-   "totalResults": 28,

-   "resources": [

    -   {

        -   "schemas": [

            -   "urn:ietf:params:scim:schemas:core:2.0:Group",

            -   "urn:zuora:scim:schemas:1.0:GroupExtension"


            ],

        -   "id": "01b496f7-1988-44aa-9ea6-c27f0288fa9d",

        -   "displayName": "Test_GroupName",

        -   "members": [

            -   {

                -   "value": "e1b624ac-e00f-422b-b4da-20070901b22f"


                }


            ],

        -   "urn:zuora:scim:schemas:1.0:GroupExtension": {

            -   "schemas": [

                -   "urn:zuora:scim:schemas:1.0:GroupExtension"


                ],

            -   "description": "Test_GroupDescription",

            -   "organizationId": "5619df2e-fa8c-47fa-9c1e-16ab5af4936e",

            -   "active": true


            },

        -   "meta": {

            -   "resourceType": "Group",

            -   "location": "[http://localhost:9900/scim/v2/Groups/01b496f7-1988-44aa-9ea6-c27f0288fa9d](http://localhost:9900/scim/v2/Groups/01b496f7-1988-44aa-9ea6-c27f0288fa9d)"


            }


        }


    ]


}`
