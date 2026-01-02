---
title: "ListForms"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listForms/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:20.831Z"
---

## List forms

Retrieves a list of forms wrapped in the element "results".

Security**ZephrHmacHttp**

Responses

200

OK

get/v3/forms

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "results": [

    -   {

        -   "title": "Test",

        -   "internal-description": "This form is for testing",

        -   "public-description": "Please provide some info",

        -   "registration": true,

        -   "fields": [

            -   {

                -   "slug": "first-name",

                -   "placeholder": "First name",

                -   "required": true,

                -   "order": 1


                }


            ]


        }


    ]


}`
