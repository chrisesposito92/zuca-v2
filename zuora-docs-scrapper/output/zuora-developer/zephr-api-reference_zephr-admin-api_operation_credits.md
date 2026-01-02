---
title: "Credits"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/Credits/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:23:41.143Z"
---

## List credits

Retrieves a list of credits wrapped in the element "results".

Security**ZephrHmacHttp**

Responses

200

OK

get/v3/credits

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "results": [

    -   {

        -   "label": "Test credit",

        -   "description": "This is an credit",

        -   "delivers": [

            -   "ENTITLEMENT_ID"


            ],

        -   "unit": "views",

        -   "quantity": 5,

        -   "auto_assign": "none"


        }


    ]


}`
