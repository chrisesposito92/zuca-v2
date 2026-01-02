---
title: "BrowserFingerprint"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/browserFingerprint/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:58.430Z"
---

## Fingerprint

Returns an HTML page that fingerprints the user's browser, sends the fingerprint data to POST /blaize/anonymous-session, and then redirects the user to a specified path provided as a query parameter (defaulting to '/').

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### query Parameters

| redirect | stringDefault: "/"TODO |
| --- | --- |

Responses

200

OK

get/blaize/browser-fingerprint

Response samples

-   200

text/html

responseresponse

Copy
