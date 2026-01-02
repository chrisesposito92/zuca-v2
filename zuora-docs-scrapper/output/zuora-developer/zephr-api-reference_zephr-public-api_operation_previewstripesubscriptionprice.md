---
title: "PreviewStripeSubscriptionPrice"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/previewStripeSubscriptionPrice/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:27.237Z"
---

## Preview the Stripe subscription price

Generates a preview of the total price and tax amount that Stripe will charge the customer if they create a new subscription for the specified plan.

**Note**: This method does not create any entities in Stripe and does not result in any payments being made.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| product_idrequired | stringThe ID of the new Zephr product. |
| --- | --- |
| plan_idrequired | stringThe new Stripe price plan ID. |
| promo_code | stringThe Stripe promo code that will be attached to the subscription. |
| billing_country | stringThe user's billing country, for tax calculation purposes. |
| billing_post_code | stringThe user's billing postal code, for tax calculation purposes. |

Responses

200

OK

400

Bad Request

post/zephr/payment/stripe/create-subscription-previews

Request samples

-   Payload

application/json

Copy

`{

-   "product_id": "zephr-prod-1",

-   "plan_id": "price_H8eIeMFwMawg6w",

-   "promo_code": "discount15",

-   "billing_country": "US",

-   "billing_post_code": "90210"


}`
