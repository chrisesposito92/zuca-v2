---
title: "StartStripeSubscriptionConfirmation"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/startStripeSubscriptionConfirmation/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:27.052Z"
---

## Start the Stripe subscription confirmation

If a payment requires confirmation (3dSecure etc), the payment is confirmed in the front end.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| subscriptionId | string |
| --- | --- |

Responses

200

OK

post/blaize/payment/stripe/subscription/confirmation

Request samples

-   Payload

application/json

Copy

`{

-   "subscriptionId": "sub_H8eIeMFwMawg6w"


}`

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "grant_id": "aa583cb8-51d1-4bd9-9ec7-3a43796ef8e5"


}`
