---
title: "CreateAnonymousSessionUnderGivenSite"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/createAnonymousSessionUnderGivenSite/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:27:14.888Z"
---

## Create an anonymous session under a given site

Creates an anonymous session under a given site.

Security**ZephrHmacHttp**

Request

##### path Parameters

| siterequired | stringThe site ID |
| --- | --- |

Responses

200

OK

401

Unauthorized

post/v4/anonymous-sessions/{site}

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
