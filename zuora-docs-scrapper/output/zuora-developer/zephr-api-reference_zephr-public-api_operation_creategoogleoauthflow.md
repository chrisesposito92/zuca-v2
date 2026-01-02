---
title: "CreateGoogleOAuthFlow"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/createGoogleOAuthFlow/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:49.668Z"
---

## Create a callback for the Google OAuth flow

Callback for Google OAuth Flow.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### query Parameters

| coderequired | stringOAuth code |
| --- | --- |

Responses

302

Found

get/blaize/oauth/google/callback
