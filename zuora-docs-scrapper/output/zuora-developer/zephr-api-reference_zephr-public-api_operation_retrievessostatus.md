---
title: "RetrieveSSOStatus"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/retrieveSSOStatus/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:18:36.694Z"
---

## Retrieve the SSO status

Retrieves the SSO status and metadata of the current user.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Responses

200

SSO status was retrieved successfully.

get/zephr/public/sso/v1/status

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "status": "authenticated",

-   "meta": { }


}`
