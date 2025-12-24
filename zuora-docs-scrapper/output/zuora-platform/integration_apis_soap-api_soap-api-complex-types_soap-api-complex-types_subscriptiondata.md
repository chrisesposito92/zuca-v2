---
title: "SubscriptionData"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-complex-types/soap-api-complex-types/subscriptiondata"
product: "zuora-platform"
scraped_at: "2025-12-24T05:45:45.868Z"
---

# SubscriptionData

The SubscriptionData object is used to pass complex data to the subscribe() call.

Each SubscriptionData identifies one [Subscription](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/subscription) object and a list of one or more [RatePlanData](/zuora-platform/integration/apis/soap-api/soap-api-complex-types/soap-api-complex-types/rateplandata) objects.

## Supported calls

This object is used in the [subscribe()](/zuora-platform/integration/apis/soap-api/soap-api-calls/subscribe) call.

## Field descriptions

All field names are case sensitive.

| Name | Required? | Type | Description |
| --- | --- | --- | --- |
| Subscription | Yes | An object of type Subscription | A single Subscription.Allowable values: A valid Subscription. |
| RatePlanData | Yes | An object of type RatePlanData | A list of one or more RatePlanData objects.Allowable values: A valid RatePlanData. |
