---
title: "ListUserSegment"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listUserSegment/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:37.170Z"
---

## List user segments

Lists all user segments available for users.

Security**ZephrHmacHttp**

Responses

200

OK

404

Not Found

get/v4/users/segments

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "items": [

    -   {

        -   "id": "string",

        -   "label": "string",

        -   "description": "string",

        -   "active": true,

        -   "archived": true


        }


    ]


}`
