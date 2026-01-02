---
title: "UpdateStripeSubscription"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/updateStripeSubscription/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:26.698Z"
---

## Update the Stripe subscription

Updates the payment method in the subscription. Payment method id will be provided by stripe on updating card details in the front end.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| subscription_idrequired | string |
| --- | --- |
| payment_method_idrequired | string |

Responses

200

OK

post/zephr/payment/stripe/updateSubscription

Request samples

-   Payload

application/json

Copy

`{

-   "subscription_id": "sub_H8eIeMFwMawg6w",

-   "payment_method_id": "pm_2KrMmOCvDgIhZCB6u0Yn7COE"


}`
