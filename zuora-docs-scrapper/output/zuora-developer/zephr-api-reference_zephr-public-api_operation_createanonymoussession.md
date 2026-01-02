---
title: "CreateAnonymousSession"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/createAnonymousSession/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:18:55.517Z"
---

## Create an anonymous session

Creates an anonymous session.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### query Parameters

| token | stringRequired if browser fingerprinting is enabled on the CDN. This token is retrieved from the GET /blaize/browser-fingerprint flow. |
| --- | --- |
| fingerprint | stringRequired if browser fingerprinting is enabled on the CDN, the fingerprint retrieved from the GET /blaize/browser-fingerprint flow. |

Responses

201

Created

post/blaize/anonymous-session

Response samples

-   201

application/json

responseresponse

Copy

`{

-   "message": "Anonymous session created successfully",

-   "tracking_id": "33d576c7-d036-40e7-8141-8a91998a5c79"


}`
