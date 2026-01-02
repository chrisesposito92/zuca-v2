---
title: "CompletePasswordlessAuthentication"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/completePasswordlessAuthentication/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:18:36.376Z"
---

## Completes the passwordless authentication flow

Completes the passwordless authentication flow. This endpoint is triggered when the the user clicks the link in the email sent after a POST /blaize/token-exchange request. **IMPORTANT**: For passwordless authentication, first is required to send a POST to request an email to be sent to the User’s email with a link for the user to click on to verify his email.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Responses

302

Found

400

Bad Request

401

Login link expired

404

Passwordless login token not found

409

Passwordless login token expired

410

Unused passwordless login token expired

get/blaize/token-exchange
