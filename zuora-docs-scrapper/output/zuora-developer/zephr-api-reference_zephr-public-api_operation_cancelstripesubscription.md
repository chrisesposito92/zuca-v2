---
title: "CancelStripeSubscription"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/cancelStripeSubscription/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:45.286Z"
---

## Cancel a user's Stripe subscription

Cancels a user's Stripe subscription

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| externalIdrequired | stringThe ID of the Stripe subscription to cancel. |
| --- | --- |

Responses

200

OK

403

Forbidden

404

Cannot find the subscription.

409

Subscription was already cancelled

delete/blaize/payment/stripe/subscriptions/{externalId}
