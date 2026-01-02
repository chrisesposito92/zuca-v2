---
title: "GetStripePublicKey"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/getStripePublicKey/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:07.802Z"
---

## Retrieve the Stripe public key

This API endpoint fetches the public key associated with a tenant for payment processing. If the user is authenticated and the tenant has a configured Stripe public key, the endpoint will return the Stripe public key in a String format.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### header Parameters

| cookierequired | stringThe session cookie is employed to ascertain whether a user is already authenticated or has an active session.Example: blaize_session=57685913-7365-4dae-a425-1c2c2f72cc0 |
| --- | --- |

Responses

200

A stripe public key for the tenant.

get/blaize/payment/stripe/publicKey

Response samples

-   200

application/json

A stripe tenant public key is found.A stripe tenant public key is not found.A stripe tenant public key is found.

Copy

`"pk_live_PFghBsstUo5FwUGcXBiNvIkY00X1YHtpnJ"`
