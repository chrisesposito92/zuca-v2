---
title: "ListMeters"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listMeters/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:52.625Z"
---

## List meters

Retrieves a list of meters wrapped in the element "results".

Security**ZephrHmacHttp**

Responses

200

OK

400

Bad Request

get/v3/meters

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "results": [

    -   {

        -   "label": "Test meter",

        -   "description": "This is a meter",

        -   "unit": "views",

        -   "limit": 5,

        -   "cycle": "calendar",

        -   "period": "monthly",

        -   "timezone": "+0:00",

        -   "auto_assign": "none"


        }


    ]


}`
