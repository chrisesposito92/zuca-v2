---
title: "CreateLinkedinOAuthFlow"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/createLinkedinOAuthFlow/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:50.357Z"
---

## Create a callback for the Linkedin OAuth flow

Callback for Linkedin OAuth flow.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### query Parameters

| coderequired | stringOAuth code |
| --- | --- |

Responses

302

Found

get/blaize/oauth/linkedin/callback
