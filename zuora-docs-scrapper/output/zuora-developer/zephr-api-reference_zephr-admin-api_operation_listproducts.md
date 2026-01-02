---
title: "ListProducts"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listProducts/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:25:17.592Z"
---

## List products

Retrieves all configured products.

Security**ZephrHmacHttp**

Responses

200

OK

get/v3/products

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "results": [

    -   {

        -   "id": "one",

        -   "label": "One month access",

        -   "description": "One month access",

        -   "entitlement": {

            -   "id": "gold-bundle",

            -   "type": "bundle"


            },

        -   "mapping": {

            -   "braintree_one_off": {

                -   "price_points": [

                    -   {

                        -   "id": "ten",

                        -   "label": "Ten Dollars",

                        -   "price": 10


                        }


                    ]


                }


            },

        -   "sharingLimit": 0


        }


    ]


}`
