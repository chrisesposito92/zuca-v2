---
title: "ListBraintreeUserPaymentMethods"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/listBraintreeUserPaymentMethods/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:13.175Z"
---

## List Braintree payment methods

Lists the Braintree payment method details associated with the logged-in user.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### header Parameters

| cookie | stringThe session cookie.Example: `blaize_session=...` (string) |
| --- | --- |

Responses

200

OK

401

Unauthorized

404

Not Found

get/zephr/payment/braintree/payment-methods

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`[

-   {

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


    }


]`
