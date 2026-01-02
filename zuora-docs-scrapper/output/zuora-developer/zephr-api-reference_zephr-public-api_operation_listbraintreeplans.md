---
title: "ListBraintreePlans"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/listBraintreePlans/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:07.576Z"
---

## List all Braintree plans

Lists the plans associated with the identified product. The product ID is required.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### query Parameters

| product_idrequired | stringProduct ID |
| --- | --- |

##### header Parameters

| cookie | stringThe session cookie.Example: `blaize_session=...` (string) |
| --- | --- |

Responses

200

OK

400

Bad Request

401

Unauthorized

404

Not Found

get/zephr/payment/braintree/plans

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "plan-id": {

    -   "id": "annual-plan",

    -   "name": "Sports+ Membership Annual",

    -   "currency_code": "USD",

    -   "base_price": 10.2,

    -   "billing_interval_unit": "MONTH",

    -   "billing_interval": 3,

    -   "billing_cycles": 12,

    -   "trial_duration_unit": "DAY",

    -   "trial_duration": 30,

    -   "discounts": [

        -   {

            -   "id": "annual-discount",

            -   "name": "Sports+ Membership Discount",

            -   "description": "This is a discount description",

            -   "amount": "9.99",

            -   "billing_cycles": "6",

            -   "current_billing_cycle": "4"


            }


        ],

    -   "zephr_product_id": "product-123"


    }


}`
