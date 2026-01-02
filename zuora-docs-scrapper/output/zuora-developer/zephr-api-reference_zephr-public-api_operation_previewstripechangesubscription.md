---
title: "PreviewStripeChangeSubscription"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/previewStripeChangeSubscription/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:27.172Z"
---

## Preview the Stripe subscription change

Generates a preview of the invoice that Stripe will create for the customer if their subscription is changed to a new plan. The invoice will be a prorated invoice for the price difference between current and new subscription plans for the remainder of the current billing period. The invoice will be billed immediately upon changing subscription. The invoice amount may be negative if the customer is changing to a lower-priced plan.

**Note**: This method does not modify the user's subscription.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| subscriptionIdrequired | stringThe ID of the Stripe subscription to change. |
| --- | --- |

##### Request Body schema: application/json

| plan_idrequired | stringThe new Stripe price plan ID. |
| --- | --- |

Responses

200

OK

400

Bad Request

401

Unauthorized

post/zephr/payment/stripe/subscription/{subscriptionId}/change-previews

Request samples

-   Payload

application/json

Copy

`{

-   "plan_id": "price_H8eIeMFwMawg6w"


}`
