---
title: "SetUserDefaultBraintreePaymentMethod"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/setUserDefaultBraintreePaymentMethod/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:13.393Z"
---

## Set the default Braintree payment method

Sets the Braintree default payment method for the logged-in user. This must be a valid payment method already associated with the user.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### header Parameters

| cookie | stringThe session cookie.Example: `blaize_session=...` (string) |
| --- | --- |

##### Request Body schema: application/json

| payment_method_token | stringThe unique ID of the payment method to be set as default for the user. |
| --- | --- |

Responses

204

No Content

400

Bad Request

401

Unauthorized

404

Not Found

put/zephr/payment/braintree/default-payment-method

Request samples

-   Payload

application/json

Copy

`{

-   "payment_method_token": "payment-method-123"


}`
