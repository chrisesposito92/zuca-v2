---
title: "CheckStripePromoCodeWithPaymentOptions"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/checkStripePromoCodeWithPaymentOptions/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:25.762Z"
---

## Check a Stripe promo code for a user

Checks a Stripe promo code for the logged in user. The promo code is checked for validity of the current user based on first time order restriction, specific customer restriction, max allowed redemptions and expiration. The supplied payment payment options are checked to match the minimum payment amount requirements of the promo code.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| paymentOptions | object |
| --- | --- |
| promoCode | stringThe promo code ID that must be checked. |

Responses

200

OK

post/zephr/payment/stripe/promo-code-check

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "paymentOptions": {

    -   "currency": "string",

    -   "description": "string",

    -   "label": "string",

    -   "order": 0,

    -   "price": 0,

    -   "pricePointId": "string",

    -   "productId": "string",

    -   "recommended": true,

    -   "slug": "string",

    -   "subTenantId": "string",

    -   "tenantId": "string",

    -   "type": "PRICE_POINT"


    },

-   "promoCode": "string"


}`

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
