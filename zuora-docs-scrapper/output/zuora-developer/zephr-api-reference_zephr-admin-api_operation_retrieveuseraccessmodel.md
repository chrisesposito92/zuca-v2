---
title: "RetrieveUserAccessModel"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/retrieveUserAccessModel/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:58.067Z"
---

## Retrieve a user access model

Retrieves a user access model.

Security**ZephrHmacHttp**

Request

##### path Parameters

| userIdrequired | stringUnique User identifier |
| --- | --- |

Responses

200

OK

404

Not Found

get/v3/users/{userId}/accessModel

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
