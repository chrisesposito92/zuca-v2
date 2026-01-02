---
title: "UpdateBulkUsers"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/updateBulkUsers/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:36.576Z"
---

## Update users in bulk

Updates user's attributfoes or delete users on a bulk basis.

When setting attributes, any of the user's existing attributes not specified in the payload will be left in-place.

Security**ZephrHmacHttp**

Request

##### Request Body schema: application/json

| updates | Array of objects (bulk_update_object)Array of combination of identifier and actions. |
| --- | --- |

Responses

202

OK

400

The request is invalid. A required attribute is missing or an attribute did not meet the expected criteria.

401

Authentication credentials were not provided or are invalid.

post/v4/user-updates

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "updates": [

    -   {

        -   "identifier": {

            -   "user_id": "string"


            },

        -   "actions": [

            -   {

                -   "type": "set-attribute",

                -   "attribute": {

                    -   "field": "string",

                    -   "value": "string"


                    }


                }


            ]


        },

    -   {

        -   "identifier": {

            -   "foreign_key": {

                -   "foreign-system": "string"


                }


            },

        -   "actions": [

            -   {

                -   "type": "delete-user"


                }


            ]


        }


    ]


}`

Response samples

-   202
-   400
-   401

application/json

Copy

`{

-   "message": "string",

-   "job_id": "string"


}`
