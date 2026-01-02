---
title: "CancelBraintreeSubscription"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/cancelBraintreeSubscription/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:11.133Z"
---

## Cancel the Braintree subscription

Cancels a Braintree subscription by ID.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| subscriptionIdrequired | stringSubscription ID |
| --- | --- |

Responses

200

OK

404

Not Found

409

Conflict

delete/blaize/payment/braintree/subscriptions/{subscriptionId}
