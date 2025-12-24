---
title: "SubscriptionProductFeatureList"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-complex-types/soap-api-complex-types/subscriptionproductfeaturelist"
product: "zuora-platform"
scraped_at: "2025-12-24T05:45:48.866Z"
---

# SubscriptionProductFeatureList

The SubscriptionProductFeatureList complex type is used ​to pass complex data to the subscribe() and amend() calls.

Each SubscriptionProductFeatureList identifies a list of zero or more SubscriptionProductFeature objects. A SubscriptionProductFeatureList contains zero SubscriptionProductFeature object if the RatePlan has no product feature.

To create features in the product catalog and use them in subscriptions and Zuora Quotes, you need to enable the following:

-   The Entitlements setting in your tenant. Access to the Entitlements feature requires a specific edition of Zuora. See [Zuora Editions](/entitlements/current-entitlements/zuora-editions) for details.

-   The Enable Feature Specification in Product and Subscriptions setting in the Billing Settings.


## Supported Calls

SubscriptionProductFeatureList supports the following calls:

-   [amend()](/zuora-platform/integration/apis/soap-api/soap-api-calls/amend)

-   [subscribe()](/zuora-platform/integration/apis/soap-api/soap-api-calls/subscribe)


## Field descriptions

| Field | Type | Required? | Description |
| --- | --- | --- | --- |
| SubscriptionProductFeature | SubscriptionProductFeature | Optional | Product feature added to the subscription |
