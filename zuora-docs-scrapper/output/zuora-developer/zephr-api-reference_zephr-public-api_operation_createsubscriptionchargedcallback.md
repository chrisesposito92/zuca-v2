---
title: "CreateSubscriptionChargedCallback"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/createSubscriptionChargedCallback/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:18:55.529Z"
---

## Create a subscription charged callback

This endpoint generates a callback for subscription charges when a product purchase is created, regardless of success or failure. It requires a mandatory string payload containing the `bt_signature` and `bt_payload` parameters. To use subscriptions, configure the Braintree callback to direct to this endpoint.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

string

Responses

200

OK. A product purchase is created successfully.

400

Bad Request. The product purchase creation failed because the subscription was overdue or the callback endpoint received an invalid or empty payload.

post/blaize/payment/braintree/subscriptionChargedCallback

Request samples

-   Payload

application/json

Copy

`"bt_signature=<signature>&bt_payload=<payload>"`
