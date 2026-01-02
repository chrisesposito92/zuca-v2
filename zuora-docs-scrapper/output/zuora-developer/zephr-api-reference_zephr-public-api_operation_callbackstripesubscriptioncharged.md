---
title: "CallbackStripeSubscriptionCharged"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/callbackStripeSubscriptionCharged/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:26.541Z"
---

## Receive a webhook from Stripe for when a user is charged for a subscription.

To use subscriptions, Stripe Webhooks for `invoice.payment_succeeded` must be configured to point to this endpoint.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Responses

200

OK

post/blaize/payment/stripe/subscriptionChargedCallback
