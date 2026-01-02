---
title: "StartSubscription"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/startSubscription/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:50.366Z"
---

## Start the subscription

Uses the payment info captured by the payment provider drop-in UI and create a customer with a recurring payment. When the payment provider responds successfully, the logged-in user will be temporarily granted all entitlements in the product's associated bundle.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### header Parameters

| cookie | stringThe session cookie.Example: `blaize_session=...` (string) |
| --- | --- |

##### Request Body schema: application/json

| product_idrequired | stringProduct ID/slug |
| --- | --- |
| plan_id | stringPlan ID/slug |
| discount_code | stringDiscount/promotion code |
| vendor_fields | objectParameters specific to the payment provider in-use. |

Responses

200

OK

400

Bad Request

401

Unauthorized

403

Forbidden

post/zephr/subscribe

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "product_id": "premium-access-monthly-recurring",

-   "plan_id": "plan-5",

-   "discount_code": "SAVE10",

-   "vendor_fields": {

    -   "payment_nonce": "eyJ2ZXmsaW5nQW...(lots more random-looking characters)...dyZWmVubW8iOiJvZmYifQ==",

    -   "skip_trial_period": true,

    -   "start_date": "2021-01-01T00:00:00Z",

    -   "payment_method": "pm_123456789",

    -   "vault_payment_method": false


    }


}`

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "grant_id": "33d576c7-d036-40e7-8141-8a91998a5c79",

-   "client_secret": "src_client_secret_QfsM25CJ2uCMon72MiOmUNTj`",

-   "payment_intent_id": "pi_1GYZYWLgUJT2XNPAYQMomeqf"


}`
