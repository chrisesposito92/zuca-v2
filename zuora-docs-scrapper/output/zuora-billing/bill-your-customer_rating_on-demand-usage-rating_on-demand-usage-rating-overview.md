---
title: "On-demand usage rating overview"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/rating/on-demand-usage-rating/on-demand-usage-rating-overview"
product: "zuora-billing"
scraped_at: "2026-02-20T17:33:43.439Z"
---

# On-demand usage rating overview

Zuora's on-demand usage rating allows flexible billing schedules for usage charges, enabling frequent rating within a billing period and immediate billing after usage is incurred.

Zuora supports on-demand usage rating for usage charges that use a per unit, tiered pricing, and volume pricing charge models. This feature supports flexible usage rating schedules by allowing multiple rating opportunities in a billing period. Rating usage more frequently allows your customers to track how much usage they have consumed while allowing you to charge immediately after usage is incurred.

If the charge through date of a usage charge with the tiered charge model is later than the target date of a bill run, the charge is no longer picked up for rating and billing in the bill run.

## Configuring on-demand rating

Zuora gives you the option to specify whether a usage charge should be billed on-demand or at the end of the usage charge's billing period. Rating for usage occurs when a bill run is executed, and rating is the processing of charges to determine the usage cost.

The on-demand rating option allows you to bill for usage immediately after it is uploaded into Zuora, rather than waiting until the usage charge's billing period has passed. The uploaded usage gets picked up in the next bill run.

To use on-demand rating, first, check whether your charge model is supported, then go to the product catalog charge and under Timing of Charge , select the Usage Records Rating Option called On Demand.

You can also use the UsageRecordRatingOption field of the RatePlanCharge object to set this value when using the Zuora Commerce API to create a rate plan charge.

Note: When the Unbilled Usage feature is enabled and a usage charge uses On-demand usage rating with a billing period that is not monthly or weekly-based (for example, Specific Days), bill runs ignore the on-demand rating option for partial billing periods. In this scenario, a bill run only bills the partial billing period if the Target Date is set to the last day of that billing period; otherwise, no invoice item is generated. For more information, including an example, see [Unbilled Usage](/zuora-billing/bill-your-customer/usage-billing/unbilled-usage).

## Sample use case

You provide a semi-annual service but need the ability to bill weekly or monthly based on the usage volume of the service. With on-demand rating, you still set up the usage charge billing period as semi-annual in the product catalog, but you can set up bill runs to generate invoices weekly, whenever usage records are submitted.

The benefit of using on-demand rating is that it allows you to bill for usage as many times as needed throughout an open billing period. When a bill run is executed, it triggers rating to occur for all charges (including usage charges) which have not been billed - these are usage charges uploaded after the last bill run.
