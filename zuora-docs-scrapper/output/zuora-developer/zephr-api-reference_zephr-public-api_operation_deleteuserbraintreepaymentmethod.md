---
title: "DeleteUserBraintreePaymentMethod"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/deleteUserBraintreePaymentMethod/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:12.410Z"
---

## Delete the Braintree payment method

Deletes the Braintree payment method associated with the provided token.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| paymentMethodTokenrequired | stringThe unique ID of the payment method. |
| --- | --- |

##### header Parameters

| cookie | stringThe session cookie.Example: `blaize_session=...` (string) |
| --- | --- |

Responses

204

No Content

401

Unauthorized

404

Not Found

delete/zephr/payment/braintree/payment-methods/{paymentMethodToken}
