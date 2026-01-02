---
title: "ListUserSessions"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listUserSessions/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:55.937Z"
---

## List user sessions

Retrieves a list of the user's sessions.

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

get/v3/users/{user\_id}/sessions

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


    ],

-   "access_model": {

    -   "meters": [ ],

    -   "credits": [ ],

    -   "delivered_entitlements": [ ]


    }


}`
