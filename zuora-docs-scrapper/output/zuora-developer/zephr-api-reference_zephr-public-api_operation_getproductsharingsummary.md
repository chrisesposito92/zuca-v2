---
title: "GetProductSharingSummary"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/getProductSharingSummary/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:49.873Z"
---

## Retrieve the product sharing summary

Retrieves a summary of the products that the current user shares with other users, and products that are shared with the current user.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Responses

200

OK

401

Unauthorized

403

Forbidden

get/zephr/public/products/v1/shares

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "owned_products": [

    -   {

        -   "product_id": "product-1",

        -   "product_label": "Gold Product",

        -   "sharing_limit": 3,

        -   "shares": {

            -   "member_email": "name@domain.com",

            -   "sharing_id": "0nasdj-aso25-6454",

            -   "status": "active",

            -   "created_at": "2021-05-17T04:31:33Z"


            }


        }


    ],

-   "member_products": [

    -   {

        -   "product_id": "product-1",

        -   "product_label": "Gold Product",

        -   "sharing_id": "0nasdj-aso25-6454",

        -   "status": "active",

        -   "shared_by_email": "owner-user@domain.com",

        -   "created_at": "2021-05-17T04:31:33Z",

        -   "meta_data": { }


        }


    ]


}`
