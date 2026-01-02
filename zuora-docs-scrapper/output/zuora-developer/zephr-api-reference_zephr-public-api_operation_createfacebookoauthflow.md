---
title: "CreateFacebookOAuthFlow"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/createFacebookOAuthFlow/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:50.670Z"
---

## Create a callback for the Facebook OAuth flow

Callback for Facebook OAuth flow.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### query Parameters

| coderequired | stringOAuth code |
| --- | --- |

Responses

302

Found

get/blaize/oauth/facebook/callback
