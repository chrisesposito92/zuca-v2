---
title: "UpdateUserBraintreePaymentMethod"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/updateUserBraintreePaymentMethod/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:13.481Z"
---

## Update a Braintree payment method

Updates the Braintree payment method details associated with the logged-in user. The details to update must first be captured from Braintree in a nonce and vaulted.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| paymentMethodTokenrequired | stringThe unique ID of the payment method. |
| --- | --- |

##### header Parameters

| cookie | stringThe session cookie.Example: `blaize_session=...` (string) |
| --- | --- |

##### Request Body schema: application/json

| payment_method_nonce | stringThe vaulted nonce associated with the update payment method. |
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

patch/zephr/payment/braintree/payment-methods/{paymentMethodToken}

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
