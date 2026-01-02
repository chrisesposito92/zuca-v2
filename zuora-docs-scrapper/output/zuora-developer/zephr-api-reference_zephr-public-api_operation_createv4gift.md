---
title: "CreateV4Gift"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/createV4Gift/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:22.570Z"
---

## Create a gift V4

Creates a gift (V4).

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| pathrequired | stringThe gift will be created for the provided path in the request body. |
| --- | --- |

Responses

201

Created

400

Bad Request

post/zephr/public/gift-tokens/v1/gift-tokens

Request samples

-   Payload

application/json

Copy

`{

-   "path": "/my-path"


}`

Response samples

-   201

application/json

responseresponse

Copy

`{

-   "token": "absd-acsd34-casdae-1243c",

-   "claimPath": "/my-path?gift=absd-acsd34-casdae-1243c"


}`
