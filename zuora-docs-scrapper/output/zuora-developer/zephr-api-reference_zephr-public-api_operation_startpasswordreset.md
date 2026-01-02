---
title: "StartPasswordReset"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/startPasswordReset/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:18:53.449Z"
---

## Start a 2FA password reset

Starts the password reset for a 2FA user. This will send an email to the user with a 6 digit code, which can then be used to reset their password.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| identifiers | object |
| --- | --- |

Responses

201

Created. The user will be sent an email with a TOKEN template variable matching the pattern \[0-9\]{6} to be used to reset their password.

400

Bad Request

404

Not Found

post/zephr/users/reset

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "identifiers": {

    -   "email_address": "joe.blow@company.com"


    }


}`
