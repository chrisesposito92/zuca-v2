---
title: "GetBraintreeToken"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/getBraintreeToken/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:18:49.861Z"
---

## Retrieve the Braintree token

Issues a Braintree client token for the current blaize session. This holds the user's userId if the user has an authenticated session. This token can be used to request a payment once.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### query Parameters

| allowUnauthenticated | booleanIf tokens can be generated for unauthenticated user sessions - defaults to false. |
| --- | --- |

##### header Parameters

| cookie | stringThe session cookie.Example: `blaize_session=...` (string) |
| --- | --- |

Responses

200

OK

401

Unauthorized

get/blaize/payment/braintree/token

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "token": "eyJ2ZXmsaW5nQW...(lots more random-looking characters)...dyZWmVubW8iOiJvZmYifQ=="


}`
