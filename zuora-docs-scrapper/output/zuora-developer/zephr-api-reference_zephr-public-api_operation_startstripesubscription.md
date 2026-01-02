---
title: "StartStripeSubscription"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/startStripeSubscription/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:26.358Z"
---

## Start the Stripe subscription (Deprecated)

(Deprecated - use [/zephr/subscribe](#payments-start-subscription-post)) Uses the payment method info captured by the Stripe Elements UI to create a Stripe customer with a recurring payment. When Stripe responds successfully, the logged-in user will be temporarily granted all entitlements in the product's associated bundle.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| product_idrequired | stringProduct Id/slug |
| --- | --- |
| payment_methodrequired | stringPayment method from Stripe Elements UI. |
| plan_id | string |
| discount_code | string |

Responses

200

OK

post/blaize/payment/stripe/subscribe

Request samples

-   Payload

application/json

Copy

`{

-   "product_id": "premium-access-monthly-recurring",

-   "payment_method": "pm_123456789"


}`

Response samples

-   200

application/json

Copy

`{

-   "grant_id": "string",

-   "clientSecret": "string",

-   "paymentIntentStatus": "string"


}`
