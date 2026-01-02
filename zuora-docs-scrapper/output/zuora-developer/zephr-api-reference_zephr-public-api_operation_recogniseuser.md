---
title: "RecogniseUser"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/recogniseUser/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:23.466Z"
---

## Recognise the user as a previously logged-in user

Recognises the user as a previously logged-in user. Users can be fingerprinted on login based on their email address, their user agent and their IP address. This endpoint can then be used with the same parameters to give users a limited access to their logged-in experience. This is an opt-in feature.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| identifiers | object |
| --- | --- |

Responses

200

The lookup was performed successfully. If the user was recognised, a Set-Cookie header will be returned.

post/zephr/recognise-me

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "identifiers": {

    -   "email_address": "string"


    }


}`
