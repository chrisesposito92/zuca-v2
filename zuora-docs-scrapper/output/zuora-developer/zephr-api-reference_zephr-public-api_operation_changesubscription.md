---
title: "ChangeSubscription"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/changeSubscription/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:50.962Z"
---

## Update the subscription

Updates an existing subscription to change the associated product and plan. Updating the subscription may modify the price of the subscription, and if so the balance will be billed immediately at a pro-rated amount. Parameters specific to the vendor may be specified to change the payment method for the subscription. Changing to a plan with a different billing frequency from the existing subscription is not supported for some payment providers (Braintree).

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### header Parameters

| cookie | stringThe session cookie.Example: `blaize_session=...` (string) |
| --- | --- |

##### Request Body schema: application/json

| product_idrequired | stringProduct Id/slug |
| --- | --- |
| plan_idrequired | stringPlan Id/slug |
| vendor_fieldsrequired | objectParameters specific to the payment provider in-use. |
| navigated_from | stringSpecify where the request was made from. Used as data to pass to change subscription webhooks. |

Responses

200

OK

400

Bad Request

401

Unauthorized

404

Not Found

patch/zephr/subscriptions/:subscriptionId

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "product_id": "premium-access-monthly-recurring",

-   "plan_id": "plan-5",

-   "vendor_fields": {

    -   "payment_nonce": "eyJ2ZXmsaW5nQWdyZWmVubW8iOiJvZmYifQ=="


    },

-   "navigated_from": "/some/path"


}`

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "grant_id": "33d576c7-d036-40e7-8141-8a91998a5c79"


}`
