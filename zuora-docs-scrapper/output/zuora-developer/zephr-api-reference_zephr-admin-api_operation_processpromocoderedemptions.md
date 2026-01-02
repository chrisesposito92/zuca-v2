---
title: "ProcessPromoCodeRedemptions"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/processPromoCodeRedemptions/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:27:50.840Z"
---

## Process promo code redemptions

Redeem promo codes that are configured from the Zephr console. Responds with a list of redemption results for each promo code.

Security**ZephrHmacHttp**

Request

##### Request Body schema: application/json

| promo_codes | Array of stringsA list of promo codes that can be redeemed. |
| --- | --- |

Responses

200

OK

post/zephr/integration/promo-codes/v1/redemptions

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "promo_codes": [

    -   "string"


    ]


}`

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "results": [

    -   {

        -   "promoCode": "string",

        -   "success": true,

        -   "errorMessage": "string"


        }


    ]


}`
