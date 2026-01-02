---
title: "PreviewEditStripeSubscriptionPrice"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/previewEditStripeSubscriptionPrice/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:43.930Z"
---

## Change the Stripe subscription price

Generates a new preview of the price that Stripe will charge the customer if they create a new subscription for the specified plan. Note: This method does not create any entities in Stripe and does not result in any payments being made.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| externalIdrequired | string |
| --- | --- |

##### Request Body schema: application/json

| plan_id | string |
| --- | --- |

Responses

200

OK

400

Bad Request

post/zephr/payment/stripe/subscriptions/{externalId}/change-previews

Request samples

-   Payload

application/json

Copy

`{

-   "plan_id": "string"


}`

Response samples

-   200

application/json

Copy

`{

-   "total": 5000,

-   "sub_total": 4500


}`
