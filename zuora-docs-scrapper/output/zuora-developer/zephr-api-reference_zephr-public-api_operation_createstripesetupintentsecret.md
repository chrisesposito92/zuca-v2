---
title: "CreateStripeSetupIntentSecret"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/createStripeSetupIntentSecret/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:03.113Z"
---

## Create a Stripe setup intent secret

Creates the client secret to update card details

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### header Parameters

| cookie | stringThe session cookie.Example: `blaize_session=...` (string) |
| --- | --- |

Responses

200

OK

404

Could not find a Stripe customer for the current Zephr user.

post/zephr/payment/stripe/setupIntentSecret

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "clientSecret": "src_client_secret_QfsM25CJ2uCMon72MiOmUNTj"


}`
