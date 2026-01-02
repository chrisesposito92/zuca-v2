---
title: "GetBraintreePromoCode"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/getBraintreePromoCode/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:31.627Z"
---

## Get a Braintree Promo Code

Gets a Braintree promo code.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### query Parameters

| coderequired | stringPromo code to lookup by ID. |
| --- | --- |
| paymentFormrequired | stringPayment form to lookup by slug. |

Responses

200

OK

400

Bad Request

401

Unauthorized

403

Forbidden

404

Not Found

get/blaize/payment/braintree/promo-code

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "code": "promo-123",

-   "discount": 20,

-   "paymentOptions": [

    -   {

        -   "slug": "plan-123",

        -   "currency": "$",

        -   "pricePointId": "cost-123",

        -   "originalPrice": 3.45,

        -   "discountPrice": 2


        }


    ]


}`
