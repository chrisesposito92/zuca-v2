---
title: "ListOAuth2ConsentFlow"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/listOAuth2ConsentFlow/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:44.356Z"
---

## Returns a list of your user's access scopes

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| clientIdrequired | stringThe Zephr site's Oauth2 client ID. |
| --- | --- |

Responses

200

OK

400

Missing required clientId parameter.

401

User session not authenticated.

get/zephr/oauth2/consent/{clientId}

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "consent": [

    -   "user.account:read",

    -   "user.account:write"


    ]


}`
