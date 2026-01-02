---
title: "UpdateBraintreeSubscription"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/updateBraintreeSubscription/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:12.818Z"
---

## Update the Braintree subscription

Updates a Braintree subscription by ID. This operation currently only supports updating the payment method for a subscription, sending the payment method token or nonce.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| subscriptionIdrequired | stringSubscription ID |
| --- | --- |

##### header Parameters

| cookie | stringThe session cookie.Example: `blaize_session=...` (string) |
| --- | --- |

##### Request Body schema: application/json

| payment_method_token | stringPayment method token referencing a payment method in Braintree. |
| --- | --- |
| payment_method_nonce | stringPayment method nonce referencing a payment method in Braintree. |

Responses

204

No Content

401

Unauthorized

404

Not Found

patch/blaize/payment/braintree/subscriptions/{subscriptionId}

Request samples

-   Payload

application/json

Copy

`{

-   "payment_method_token": "alpha123token",

-   "payment_method_nonce": "alpha123token"


}`
