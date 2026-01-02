---
title: "ExecuteDecisionEngine"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/executeDecisionEngine/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:31.751Z"
---

## Execute the Decision Engine

The Blaize Decision Engine can be invoked via the Public API to calculate an HTTP Response based upon Request-Level Rules created in the Admin Console. This functionality is built into the Blaize Dynamic CDN but the API variant is useful for CMS or edge side integrations.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| pathrequired | string |
| --- | --- |
| http_method | string |
| session | string |
| foreign_keys | objectForeign system and ID used to identify the user. |
| request_headers | object |
| content_metadata | object |
| jwt | string |
| btr | stringMD5-hex-encoding of: path + "\|" + trusted referrer secret |

Responses

200

OK

409

Conflict

post/blaize/decision-engine

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "path": "/x.html",

-   "http_method": "POST",

-   "session": "xxx-xxx-xxx",

-   "foreign_keys": { },

-   "request_headers": {

    -   "User-Agent": "<userAgent>"


    },

-   "content_metadata": {

    -   "publishedDate": "<contentAge>"


    },

-   "jwt": "xxx-xxx-xxx",

-   "btr": "17e74b9e49e66282e55d4b7ec73de951"


}`

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "status": "301",

-   "body": "Redirecting to login page...",

-   "headers": {

    -   "Location": "/login.html"


    }


}`
