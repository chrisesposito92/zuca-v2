---
title: "UpdateMetaData"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/updateMetaData/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:18:36.135Z"
---

## Update the metadata

Updates the SSO metadata associated with the user.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

object (customer-meta)

Responses

200

OK

400

Bad Request

put/zephr/public/sso/v1/status/meta

Request samples

-   Payload

application/json

Copy

`{ }`
