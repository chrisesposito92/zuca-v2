---
title: "StartOAuthFlow"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/startOAuthFlow/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:50.726Z"
---

## Start an OAuth flow

Starts the OAuth flow.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| start_url | string |
| --- | --- |
| target_url | string |

Responses

200

OK

post/blaize/oauth/state

Request samples

-   Payload

application/json

Copy

`{

-   "start_url": "[http://blaize.io](http://blaize.io)",

-   "target_url": "[http://blaize.io](http://blaize.io)"


}`

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "message": "State initialized"


}`
