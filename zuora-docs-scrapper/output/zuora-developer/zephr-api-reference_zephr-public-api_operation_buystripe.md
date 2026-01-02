---
title: "BuyStripe"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/buyStripe/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:26.891Z"
---

## Create a Stripe one-off payment

Uses the payment method collected by Stripe Elements to create a one off payment.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| product_idrequired | stringProduct ID/slug |
| --- | --- |
| price_point_idrequired | stringPrice Point ID/slug |
| payment_methodrequired | stringPayment method from Stripe Elements UI. |
| payment_intent_id | stringPaymentIntent ID returned after confirming a card payment. |

Responses

200

OK

post/blaize/payment/stripe/buy

Request samples

-   Payload

application/json

Copy

`{

-   "product_id": "lifetime-membership",

-   "price_point_id": "gold-package",

-   "payment_method": "pm_123456789",

-   "payment_intent_id": "pi_1GYZYWLgUJT2XNPAYQMomeqf"


}`

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "grant_id": "aa583cb8-51d1-4bd9-9ec7-3a43796ef8e5",

-   "client_secret": "src_client_secret_QfsM25CJ2uCMon72MiOmUNTj`",

-   "payment_intent_id": "pi_1GYZYWLgUJT2XNPAYQMomeqf"


}`
