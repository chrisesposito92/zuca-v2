---
title: "Billing timing"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/basic-concepts-and-terms/billing-timing"
product: "zuora-billing"
scraped_at: "2025-12-24T04:19:06.677Z"
---

# Billing timing

Zuora allows for flexible billing options, including billing in advance and billing in arrears, to accommodate different business needs. This guide explains how to set and manage billing timing for recurring charges.

Zuora supports billing in advance and billing in arrears for recurring charge types. Use Billing Timing to choose billing in advance or billing in arrears.

See Create product rate plan charges for information on setting or changing the billing timing setting.

## Billing in advance

Billing in advance lets you bill your customers for products or services before you provide them. For example, your customer will be charged for the billing period of April 1 to June 30 under the following conditions :

-   You have set Billing Timing to Billing in Advance.

-   The billing cycle day is the first day of the month.

-   You have a quarterly billing period.

-   You make a bill run with a target date of April 1.


Billing in advance is the default behavior for recurring charge types.

## Billing in arrears

Billing in arrears lets you bill your customers after the products or services are provided. Billing with a target date after the end of the billing period will create an invoice for the billing period charges.

For example, a service charge for the period of April 1 to June 30 will be billed under these conditions:

-   You have set Billing Timing to Billing in Arrears.

-   The billing cycle day is the first day of the month.

-   You have a quarterly billing period.

-   You make a bill run with a target date of July 1.


## Partial billing periods

When dealing with partial billing periods with Billing in Arrears, you need to consider that the ability to bill for a product may or may not fall inside a billing cycle. If your subscription start date is different from your billing cycle day or a customer has canceled a subscription before the end of a billing period, you will need to create an ad hoc bill run or wait for the next bill run.

## Subscription start date is different from billing cycle day

When a customer starts a subscription on a day that is not the billing cycle day, an invoice will not be made on the next billing cycle day. An invoice will not be generated until a bill run with a trigger date that is after the end of the billing period.

For example, your customer will be charged for the period of April 15 to May 15 under these conditions:

-   You have set Billing Timing to Billing in Arrears.

-   The billing cycle day is the first day of the month.

-   You have a monthly billing period.

-   Your customer has a subscription that starts on April 15 and ends on May 15.

-   You make a bill run with a target date of May 16.


## Cancellation of a subscription

If a customer cancels a subscription before the billing period ends, the cancellation date becomes the last day of the billing period. A bill run with a target date after the cancellation date will generate an invoice. The charges on the invoice will be calculated according to your proration rules .

For example, your customer will be charged for the period of April 1 to May 31 under these conditions:

-   You have set Billing Timing to Billing in Arrears.

-   The billing cycle day is the first day of the month.

-   You have a quarterly billing period.

-   The customer cancels their subscription on May 31.

-   You make a bill run with a target date of June 1.


## Change billing timing

Billing timing can be changed if the product rate plan that you want to change is not being used in a subscription. If you want to change the billing timing of a product rate plan that is being used, Zuora recommends that you make a new rate plan with the billing timing setting that you want to use. Once you have made the new rate plan, create new subscriptions for your customers to change billing timing.

You can change the billing timing of a rate plan when creating a subscription. However, you can only change the billing timing when you create the subscription. The billing timing setting cannot be amended at a later time. If you change the billing timing in this way, Zuora recommends that you also change the associated revenue recognition rule and accounting code.

You can change the billing timing of a rate plan charge only when creating a subscription. You cannot change the billing timing as an amendment. If you override the billing timing option on a subscription, Zuora recommends that you change the associated revenue recognition rule and accounting code in order differentiate from subscriptions that are set to Billing in Advance.
