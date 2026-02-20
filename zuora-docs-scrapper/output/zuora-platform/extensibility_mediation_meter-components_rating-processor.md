---
title: "Rating processor"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/rating-processor"
product: "zuora-platform"
scraped_at: "2026-02-20T17:49:43.665Z"
---

# Rating processor

The Rating processor in Zuora Mediation calculates rated amounts for usage events, transforming raw data into billable records.

The processor calculates the rated amount for each usage event by evaluating usage quantity against the configured pricing in Zuora’s product catalog. It supports tiered pricing models by evaluating accumulated usage to ensure accurate billing.

Note: The Rating processor is currently in the Early Availability phase. Please contact your Zuora account representative to enable this feature.

## Rating output

The Rating processor produces billed usage events that include calculated charges based on the Zuora pricing configuration. You must ensure that all identifiers and quantity fields are mapped correctly to avoid rating errors.

You can use the Audit Trail Download feature to track and debug rated outputs.

## Rating processor for tiered-pricing model

In the tiered pricing model, the Rating processor must receive cumulative usage as a Pricing Quantity, grouped by charge number and/or account number. Without this, tier rates may be applied incorrectly for each event.

Example:

Day 1 = 10 units, Day 2 = 5 units.

Day 2’s Pricing quantity must be 15, not 5.

For tiered pricing, the Price Quantity in the Rating Operator needs to reflect the total accumulated usage up to the processed event. You must group this accumulation by Charge Number. If your system ensures that the Charge Number is unique across all accounts, then grouping by Charge Number alone may be sufficient. For example: A globally unique identifier for each charge instance.

## Accumulated usage for tiered pricing

Accumulated usage is critical for a tiered pricing model as it evaluates the total consumption within a defined period to determine the applicable price tier. If the Price Quantity only reflects the current event's usage, the system will incorrectly apply rates, leading to under- or over-billing. By accumulating usages, the Rating processor can accurately determine which tier the total consumption falls into.

Note:

-   Zuora recommends using natural month billing periods (for example, calendar months) for rate plan charges when using the Rating processor. Mediation does not have access to the billing cycle day (BCD) from the subscription. Therefore, using non-standard billing periods may result in rating misalignment. Aligning to calendar months ensures accurate and consistent rating.
-   Mediation and Billing do not automatically synchronize data. Any changes made in Billing are not reflected in Mediation unless you explicitly rerun the events, as Mediation does not auto-update.
-   The Rating processor only supports the following charge models:
    -   Per Unit Pricing
    -   Tiered Pricing
    -   Volume Pricing
    -   Tiered with Overage Pricing
