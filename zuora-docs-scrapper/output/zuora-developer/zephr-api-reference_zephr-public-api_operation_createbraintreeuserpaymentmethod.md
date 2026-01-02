---
title: "CreateBraintreeUserPaymentMethod"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/createBraintreeUserPaymentMethod/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:13.373Z"
---

## Create a new Braintree payment method.

Creates the Braintree payment method with the associated vaulted nonce, for the authenticated user.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### header Parameters

| cookierequired | stringThe session cookie.Example: `blaize_session=...` (string) |
| --- | --- |

##### Request Body schema: application/json

| payment_method_nonce | stringThe vaulted nonce associated with the new payment method. |
| --- | --- |

Responses

200

OK. A new Braintree payment method has been created for the authenticated user.

401

Unauthorized

404

Not Found

post/zephr/payment/braintree/payment-methods

Request samples

-   Payload

application/json

Copy

`{

-   "payment_method_nonce": "aa583cb8...and other characters...3a43796ef8e5"


}`

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "token": "8m2kc5g",

-   "default": false,

-   "card_type": "Visa",

-   "card_holder_name": "John Rambo",

-   "card_number_masked": "654321******0987",

-   "expiration_date": "07/22",

-   "expired": false,

-   "expiring_soon": false,

-   "in_use": false,

-   "last_4": "1111",

-   "nonce": "086128f3-04c2-069e-78d2-3f4de98508e5",

-   "type": "CreditCard",

-   "zipcode": "123456"


}`
