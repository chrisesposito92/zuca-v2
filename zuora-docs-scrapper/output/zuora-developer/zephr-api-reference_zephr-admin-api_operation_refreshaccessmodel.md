---
title: "RefreshAccessModel"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/refreshAccessModel/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:55.483Z"
---

## Refresh a access model

Refreshes the user's access model.

Security**ZephrHmacHttp**

Request

##### path Parameters

| user_idrequired | stringUnique User identifier |
| --- | --- |

Responses

200

OK

404

Not Found

post/v3/users/{user\_id}/authorization/refresh

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "meters": { },

-   "credits": { },

-   "delivered_entitlements": [

    -   {

        -   "id": "0123456789ABCD",

        -   "direct": true,

        -   "meteredBy": [ ],

        -   "creditedBy": [ ]


        }


    ]


}`
