---
title: "GetSession"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getSession/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:25:35.784Z"
---

## Retrieve a session

Looks up a session.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Session identifier |
| --- | --- |

Responses

200

OK

get/v3/sessions/{id}

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "session_variables": { },

-   "user_id": "UU0123456789ABCD",

-   "sessions": [

    -   {

        -   "expiryDate": "2018-11-15 14:29 PM UTC",

        -   "startDate": "2017-11-15 14:29 PM UTC",

        -   "authenticated": true,

        -   "session_id": "SS0123456789ABCD",

        -   "user_id": "UU0123456789ABCD"


        }


    ]


}`
