---
title: "CancelSubscription"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/cancelSubscription/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:43.818Z"
---

## Cancel a subscription

It cancels the logged in user's subscription with the provided external identifier (`extenalId`). A logged in session is required for this operation.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| externalIdrequired | stringThe external identifier of the subscriptionExample: mySubscription1 |
| --- | --- |

Responses

200

OK - Subscription has been cancelled successfully

403

Forbidden - Invalid subscription provided

409

Conflict - This subscription had already been cancelled

delete/zephr/subscriptions/{externalId}
