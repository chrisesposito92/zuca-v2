---
title: "GetDatalayer"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/getDatalayer/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:22.742Z"
---

## Retrieve the datalayer

Retrieves the Datalayer object for the current session. The datalayer can be used to provide contextual data when tracking user activity, for example providing values for 'User Attributes' in hotjar. The /blaize/profile endpoint is preferred for retrieving complete user profile information.
All fields configured in the admin console will be resolved against the current session and returned.
The top-level property in the response object defaults to 'dataLayer' and can be configured in the console under the data layer settings using the 'Data Layer Name' field.
Data layer fields can be grouped by their 'Entity' as configured in the console. An example of the possible groupings is included.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Responses

200

OK

401

Unauthorized
Returned if no valid session was provided, either anonymous or authenticated.

get/blaize/datalayer

Response samples

-   200

application/json

Grouped-fieldsUngrouped-fieldsGrouped-fields

Copy

Expand allCollapse all

`{

-   "dataLayer": [

    -   {

        -   "zephrActivity": {

            -   "logged-in": true,

            -   "active-sessions": 1


            }


        },

    -   {

        -   "zephrUserSchema": {

            -   "user-attribute-1": "user-attribute-1-value"


            }


        },

    -   {

        -   "zephrProducts": {

            -   "active-products": [

                -   "active-product-1-id",

                -   "active-product-2-id"


                ]


            }


        },

    -   {

        -   "zephrTestGroups": {

            -   "split-test-1": "split-test-1-group"


            }


        }


    ]


}`
