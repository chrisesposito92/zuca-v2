---
title: "ListWebhooks"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listWebhooks/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:27:12.401Z"
---

## List webhooks

Retrieves a list of webhooks wrapped in the element "results".

Security**ZephrHmacHttp**

Responses

200

OK

get/v3/webhooks

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "results": [

    -   {

        -   "webhook_id": "01234567890ABCD",

        -   "label": "Test webhook",

        -   "triggers": [

            -   "user.create",

            -   "user.delete"


            ],

        -   "method": "POST",

        -   "target": "[http://localhost:9999](http://localhost:9999)"


        }


    ]


}`
