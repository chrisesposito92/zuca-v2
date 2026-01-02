---
title: "CancelSubscriptionLegacy"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/cancelSubscriptionLegacy/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:27:49.461Z"
---

## Cancel Subscription

Cancels a subscription using the legacy method.

Security**ZephrHmacHttp**

Request

##### path Parameters

| externalIdrequired | stringExternal subscription identifier |
| --- | --- |

Responses

200

Subscription cancellation processed successfully.

403

Forbidden - The request was not authorized.

409

Conflict - There was a conflict processing the request.

500

Internal Server Error - An error occurred while cancelling the subscription.

delete/blaize/payment/braintree/subscriptions/{externalId}
