---
title: "Start2FA"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/start2FA/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:22.664Z"
---

## Start two factor authentication process

Starts the two factor authentication process. An email will be sent to the email address provided in the request with a link to complete the process.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| action | stringEnum: "login" "register" "completeRegistration" |
| --- | --- |
| identifiers | object |
| method | stringValue: "email" |

Responses

201

OK

404

User not found

405

Two factor authentication is not active

post/blaize/two-factor-authentication

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "action": "login",

-   "identifiers": {

    -   "email_address": "string"


    },

-   "method": "email"


}`
