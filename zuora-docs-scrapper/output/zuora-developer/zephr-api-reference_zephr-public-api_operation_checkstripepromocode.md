---
title: "CheckStripePromoCode"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/checkStripePromoCode/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:27.159Z"
---

## Check a Stripe promo code for a user

Checks a Stripe promo code for the logged in user. The promo code is checked for validity of the current user based on first time order restriction, specific customer restriction, max allowed redemptions and expiration. The payment form payment options are checked to match the minimum payment amount requirements of the promo code.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### query Parameters

| coderequired | stringThe ID of the Stripe promo code to check. |
| --- | --- |
| paymentFormrequired | stringThe slug of the Stripe payment form the promo code relates to. |

Responses

200

OK

get/zephr/payment/stripe/promo-code

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "code": "string",

-   "discount": "string",

-   "paymentOptions": [

    -   {

        -   "slug": "string",

        -   "productId": "string",

        -   "currency": "string",

        -   "pricePointId": "string",

        -   "originalPrice": 0,

        -   "discountPrice": 0


        }


    ]


}`
