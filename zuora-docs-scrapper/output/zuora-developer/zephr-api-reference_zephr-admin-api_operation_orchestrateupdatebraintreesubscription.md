---
title: "OrchestrateUpdateBraintreeSubscription"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/orchestrateUpdateBraintreeSubscription/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:27:53.348Z"
---

## Update Braintree Subscription

Updates a Braintree subscription.

Security**ZephrHmacHttp**

Request

##### path Parameters

| externalIdrequired | stringExternal subscription identifier |
| --- | --- |

##### Request Body schema: application/json
required

Update Subscription Request

object

Responses

204

No Content - The subscription update was successful.

401

Unauthorized - Authentication is required.

500

Internal Server Error - An error occurred while updating the subscription.

patch/blaize/payment/braintree/subscriptions/{externalId}

Request samples

-   Payload

application/json

Copy

`{ }`
