---
title: "CreateBraintreeBuyOneOff"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/createBraintreeBuyOneOff/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:13.407Z"
---

## Create a Braintree buy (one-off)

Uses the payment info captured by the braintree drop-in UI and encoded in the payment nonce to create a braintree customer and issue a one-off payment. When braintree responds successfully, the logged-in user will be granted all entitlements in the product's associated bundle.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### header Parameters

| cookie | stringThe session cookie.Example: `blaize_session=...` (string) |
| --- | --- |

##### Request Body schema: application/json

| product_idrequired | stringProduct Id/slug |
| --- | --- |
| price_point_idrequired | stringPrice Point Id/slug |
| payment_noncerequired | stringPayment method nonce from Braintree drop-in UI. |

Responses

200

OK

400

Bad Request

401

Unauthorized

404

Not Found

post/blaize/payment/braintree/buy

Request samples

-   Payload

application/json

Copy

`{

-   "product_id": "lifetime-membership",

-   "price_point_id": "gold-package",

-   "payment_nonce": "eyJ2ZXmsaW5nQW...(lots more random-looking characters)...dyZWmVubW8iOiJvZmYifQ=="


}`

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "grant_id": "aa583cb8-51d1-4bd9-9ec7-3a43796ef8e5"


}`
