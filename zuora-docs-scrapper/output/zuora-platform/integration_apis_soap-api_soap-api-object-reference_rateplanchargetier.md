---
title: "RatePlanChargeTier"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/rateplanchargetier"
product: "zuora-platform"
scraped_at: "2025-12-24T05:43:46.571Z"
---

# RatePlanChargeTier

Use the RatePlanChargeTier object to represent a tier of charges in a RatePlanCharge object.

A rate plan charge tier is part of a subscription or an amendment to a subscription, and it comes from a product rate plan charge tier. A rate plan charge tier holds the prices for a rate plan charge. Each rate plan charge has at least one tier associated with it.

Rate plan charge tiers are sometimes called subscription rate plan charge tiers to distinguish them from product rate plan charge tiers. Rate plan charge tiers that are part of an amendment are sometimes called amendment rate plan charge tiers for the same reason. However, the object name is RatePlanChargeTier, not SubscriptionRatePlanChargeTier nor AmendmentRatePlanChargeTier: these latter two names don't exist.

Don't confuse a rate plan charge tier with tiered pricing. Tiered pricing is a charge model in which you create different charges or tiers for different quantities of an item.

The RatePlanChargeTier object exists only within a subscription. You can't create a RatePlanChargeTier directly; you create it when you use a subscribe() call to create a new subscription or an amend() call to add a new product to an existing subscription. You can then update the RatePlanChargeTier object to override some of its settings.

## Supported calls

You can use this object with the following calls:

-   create()

-   query()
