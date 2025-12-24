---
title: "RatePlan"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/rateplan"
product: "zuora-platform"
scraped_at: "2025-12-24T05:43:33.730Z"
---

# RatePlan

Use a RatePlan object to create a Subscription object-specific structure of pricing and terms.

A rate plan is part of a subscription or an amendment to a subscription, and it comes from a product rate plan. Like a product and its product rate plans, a subscription can have one or more rate plans. Rate plans are sometimes called subscription rate plans. Rate plans that are part of an amendment are sometimes called amendment rate plans.

Rate plans represent a price or a collection of prices for a service you sell. An individual rate plan contains all charges specific to a particular subscription.

You can think of a ProductRatePlan object as a template for creating a subscription. The Subscription object's individual RatePlan objects are constructed from the ProductRatePlan "template." Typically, the terms of a RatePlan object mimic its corresponding ProductRatePlan object closely. However, you can alter the terms on an individual subscription basis using the subscription's rate plan.

A RatePlan object can have multiple RatePlanCharge objects, which can be one-time fees, recurring fees, or usage fees.

A one-time fee is a charge that your customer pays only once. One-time fees don't recur. Upfront setup fees and activation fees are examples of a one-time fee.

A recurring fee is a fee that repeats on a regular basis. You can set the schedule to be monthly, quarterly, semi-annually, or annually. Once the charge is triggered, the customer is automatically charged on the appropriate dates in the future. Monthly charges for satellite TV and yearly charges for authoring licenses on a hosted wiki are examples of a recurring fee.

A usage fee is a fee based on the amount of units, such as media storage, that customers use during a given billing period. Usage charges are billed in arrears based on a customer's actual usage. Per-minute charges for phone calls and GB of media storage are examples of usage fees.

## Supported calls

You can use this object with the following calls:

-   create()

-   query()

-   update()


## Walkthroughs and use cases

Here are some common ways to use this object:

-   Query for a rate plan that's been removed

-   Add a rate plan to a subscription

-   Amend a subscription's rate plan


## Example - Query for rate plans (including removed rate plans)

By default, rate plans that were removed by an amendment with the type, `Remove Product Amendment` , aren't returned by queries.

If you want to return rate plans that were removed by an amendment, add `AmendmentType != null` in the `where` clause conditions.

For example, the following query will return two RatePlans. One of the RatePlans was previously removed by an amendment.

select Id, SubscriptionId, AmendmentType, Name from RatePlan Where AmendmentType!=null and SubscriptionId = '4028e4883294aa9c013296255d7b2a83'

The following query will return one RatePlan, which is included in the latest subscription.

select Id, SubscriptionId, AmendmentType, Name from RatePlan Where SubscriptionId = '4028e4883294aa9c013296255d7b2a83'
