---
title: "CreateNewSessionUnderGivenSite"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/createNewSessionUnderGivenSite/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:55.409Z"
---

## Create a new session under a given site

Creates a new session under a given site.

Security**ZephrHmacHttp**

Request

##### path Parameters

| siterequired | stringThe site ID |
| --- | --- |

##### Request Body schema: application/json

| identifiersrequired | object |
| --- | --- |
| validatorsrequired | object |

Responses

201

OK

400

Bad Request

401

Unauthorized

404

Not Found

post/v4/sessions/{site}

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

-   201

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
