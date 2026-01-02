---
title: "Complete2FAPasswordReset"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/complete2FAPasswordReset/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:18:36.469Z"
---

## Complete a 2FA based password reset

Completes the password reset. **IMPORTANT**: To reset a user's password, first send a POST request to trigger an email with a reset token. This token must be included in the state parameter when calling this API. The validator parameter is optional, if omitted, the OTP can be verified first, and the new password can be submitted separately with the correct OTP.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| staterequired | stringA 6-digit code, which is used to verify the password request. |
| --- | --- |

##### Request Body schema: application/json

| identifiersrequired | object |
| --- | --- |
| validators | object |

Responses

200

OK

400

Bad Request

404

Token Not Found

409

The state was already used

post/zephr/users/reset/{state}

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "identifiers": {

    -   "email_address": "joe.blow@company.com"


    },

-   "validators": {

    -   "password": "mynewsecurepassword123"


    }


}`
