---
title: "ListBraintreeAddons"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/listBraintreeAddons/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:30.797Z"
---

## List Braintree add-ons

Lists the Braintree add-ons.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| promoCoderequired | stringPromo code to lookup by ID. |
| --- | --- |

##### query Parameters

| paymentFormrequired | stringPayment form to lookup by slug. |
| --- | --- |

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

get/blaize/payment/braintree/addons&promoCode={promoCode}

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`[

-   {

    -   "id": "add-123",

    -   "label": "Easy Add-on",

    -   "value": 12,

    -   "type": "PERCENT",

    -   "paymentOptions": [

        -   {

            -   "slug": "plan-123",

            -   "currency": "$",

            -   "addonPrice": 12.34


            }


        ]


    }


]`
