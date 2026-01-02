---
title: "StartBraintreeSubscriptionDeprecated"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/startBraintreeSubscriptionDeprecated/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:32.275Z"
---

## Start the Braintree subscription (Deprecated)

\*\* (Deprecated - use the "/zephr/subscribe" operation intead)\*\* Uses the payment info captured by the braintree drop-in UI and encoded in the payment nonce to create a braintree customer in with a recurring payment. When braintree responds successfully, the logged-in user will be temporarily granted all entitlements in the product's associated bundle.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### header Parameters

| cookie | stringThe session cookie.Example: `blaize_session=...` (string) |
| --- | --- |

##### Request Body schema: application/json

| product_idrequired | stringProduct ID/slug |
| --- | --- |
| plan_id | string |
| discount_code | string |
| payment_noncerequired | stringPayment method nonce from Braintree drop-in UI. |
| skip_trial_period | booleanWhether or not to skip any trial period that may be associated with this subscription. This should be null or not set to use the configured trial period. |
| start_date | stringISO 8601 date format which determines when the subscription will start. When the attribute is passed, the value must be in the future. Otherwise, the subscription is expected to start immediately. |

Responses

200

OK

400

Bad Request

401

Unauthorized

post/blaize/payment/braintree/subscribe

Request samples

-   Payload

application/json

Copy

`{

-   "product_id": "premium-access-monthly-recurring",

-   "payment_nonce": "eyJ2ZXmsaW5nQW...(lots more random-looking characters)...dyZWmVubW8iOiJvZmYifQ==",

-   "skip_trial_period": true,

-   "start_date": "2021-01-01T00:00:00Z"


}`

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "grant_id": "33d576c7-d036-40e7-8141-8a91998a5c79"


}`
