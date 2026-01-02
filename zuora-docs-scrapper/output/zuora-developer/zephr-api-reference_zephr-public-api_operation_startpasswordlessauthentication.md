---
title: "StartPasswordlessAuthentication"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/startPasswordlessAuthentication/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:18:36.535Z"
---

## Start the passwordless authentication flow

Starts the passwordless authentication flow by sending an email to the user with a sign-in link. When the user clicks the link, they are directed to GET /blaize/token-exchange?token=..., which authenticates them automatically. **IMPORTANT**: Passwordless authentication requires the user's email to be verified. This means the user must first receive a separate verification email and click the link to confirm their email address. Verification can be triggered by sending a POST request to the appropriate endpoint.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| identifiersrequired | object (identifiers) |
| --- | --- |
| actionrequired | stringEnum: "login" "register" "completeRegistration" |
| redirect | stringEither a relative path to the current site or a full URL for another site in the current tenant. |

Responses

201

Created

400

Bad Request

post/blaize/token-exchange

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "identifiers": {

    -   "email_address": "joe.blow@company.com"


    },

-   "action": "login",

-   "redirect": "string"


}`
