---
title: "CreateNewSession"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/createNewSession/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:25:37.694Z"
---

## Create a session

Creates a new session.

Security**ZephrHmacHttp**

Request

##### Request Body schema: application/json

| identifiersrequired | object |
| --- | --- |
| validatorsrequired | object |

Responses

200

OK

400

Bad Request

post/v3/sessions

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "identifiers": {

    -   "email_address": "joe.blow@company.com"


    },

-   "validators": {

    -   "password": "mysecurepassword123"


    }


}`

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "expiryDate": "2018-11-15 14:29 PM UTC",

-   "startDate": "2017-11-15 14:29 PM UTC",

-   "authenticated": true,

-   "session_id": "SS0123456789ABCD",

-   "user_id": "UU0123456789ABCD"


}`
